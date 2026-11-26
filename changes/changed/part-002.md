# Changed — Bundle Modifications Report (Part 002 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `2 / 116` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/css/275.css` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/css/275.css` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61)

#### 11. `bundles/bloxd.io/chunks/css/275.css` (Changed code · before: `L48-L51` → after: `L3012-L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61R3012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61) · [After (L3012-L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/275.css#L3012-L3078) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/275.css#L48-L51)

```diff
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:after,
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:before {
-   background-color: #fff;
-   box-shadow: 0 0 1px rgba(0, 0, 0, .8);
+ @supports not (width:1cqw) {
+   .GreenvilleNavRoom {
+     flex-shrink: 0
+   }
+ }
+ 
+ .GreenvilleNavRoom .GreenvilleNav {
+   background: rgba(38, 52, 93, .85);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
+   height: min(100cqw, 100cqh);
+   padding: .75rem;
+   width: min(100cqw, 100cqh)
+ }
+ ... (51 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/css/275.css` (Changed code · before: `L56-L60` → after: `L3084-L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61R3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61) · [After (L3084-L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/275.css#L3084-L3087) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/275.css#L56-L60)

```diff
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:before {
-   height: 2px;
-   left: 0;
-   top: 6px;
-   width: 14px
+ .GreenvilleMoodChip .GreenvilleMoodChipFace {
+   color: var(--greenville-mood-face);
+   flex: none;
+   font-size: max(1.3rem, 14px)
```

#### 13. `bundles/bloxd.io/chunks/css/275.css` (Changed code · before: `L63-L66` → after: `L3090-L3130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61R3090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61) · [After (L3090-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/275.css#L3090-L3130) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/275.css#L63-L66)

```diff
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:after {
-   height: 14px;
-   left: 6px;
-   top: 0;
+ .GreenvilleMoodChip .GreenvilleMoodChipZz {
+   color: #85baff;
+   flex: none;
+   font-size: max(.8rem, 9px);
+   font-weight: 800;
+   line-height: 1
+ }
+ 
+ .GreenvilleMoodChip .GreenvilleMoodChipMeter {
+   flex: 0 1 auto;
+   height: max(1.1rem, 8px);
+   min-width: max(2rem, 24px);
+   position: relative;
+   width: 4.5rem
+ }
+ 
+ ... (25 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/css/275.css` (Changed code · before: `L70` → after: `L3134-L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61R3134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61) · [After (L3134-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/275.css#L3134-L3167) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/275.css#L70)

```diff
- .StudioHeatmap3D .StudioHeatmap3DUnavailable {
+ .GreenvilleMoodChip .GreenvilleMoodChipCoin {
+   flex: none;
+   height: max(1.5rem, 14px);
+   position: relative;
+   width: max(1.5rem, 14px)
+ }
+ 
+ .GreenvilleMoodChip .GreenvilleMoodChipEarnings {
+   font-feature-settings: "tnum";
+   color: #cfcfcf;
+   flex: 0 .01 auto;
+   font-size: max(1rem, 11px);
+   font-variant-numeric: tabular-nums;
+   font-weight: 800;
+   line-height: 1;
+   min-width: 0;
+ ... (18 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/css/275.css` (Changed code · before: `L73-L74` → after: `L3173-L3174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61) · [After (L3173-L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/275.css#L3173-L3174) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/275.css#L73-L74)

```diff
-   font-size: .85rem;
-   inset: 0;
+   font-size: .7rem;
+   height: 1.1rem;
```

#### 16. `bundles/bloxd.io/chunks/css/275.css` (Changed code · before: `L76` → after: `L3176-L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61R3176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c189ca94f256536151e11ece3d2f1280c31f0b0484dd758751dd390015115a61) · [After (L3176-L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/275.css#L3176-L3186) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/275.css#L76)

```diff
-   opacity: .8;
+   position: absolute;
+   right: -.45rem;
+   top: -.45rem;
+   width: 1.1rem
+ }
+ 
+ .GreenvilleMoodChip.Exhausted:before {
+   animation: GreenvilleMoodPulse .9s ease-in-out infinite alternate;
+   box-shadow: inset 0 0 .6rem #e34f4f;
+   content: "";
+   inset: -1px;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/90.css` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/css/90.css` (71 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11)

#### 1. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3887` → after: `L3940-L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3940-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3940-L3956) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3887)

```diff
- .Store .StoreTempSubscribe .StoreSubscriptionTerms {
+ .Store .StoreSubscribe {
+   align-items: flex-start;
+   display: flex;
+   flex-direction: column;
+   flex-shrink: 0;
+   gap: .5rem
+ }
+ 
+ .Store .StoreSubscribe .StoreCta {
+   align-self: stretch
+ }
+ 
+ .Store .StoreSubscribe .StoreCta .NewButton {
+   width: 100%
+ }
+ 
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3894` → after: `L3963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3963) · [Before (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3894)

```diff
- .Store .StoreTempSubscribe .StoreSubscriptionTerms .StoreSubscriptionTermsLinks {
+ .Store .StoreSubscriptionTerms .StoreSubscriptionTermsLinks {
```

#### 3. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3899` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3968) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3899)

```diff
- .Store .StoreTempSubscribe .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a {
+ .Store .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a {
```

#### 4. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3905` → after: `L3974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3974) · [Before (L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3905)

```diff
-   .Store .StoreTempSubscribe .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a:before {
+   .Store .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a:before {
```

#### 5. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3913` → after: `L3982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3982) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3913)

```diff
-   .Store .StoreTempSubscribe .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a:hover {
+   .Store .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a:hover {
```

#### 6. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3918` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3987) · [Before (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3918)

```diff
- .Store .StoreTempSubscribe .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a.pad-focused {
+ .Store .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a.pad-focused {
```

#### 7. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L3923` → after: `L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L3992) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L3923)

```diff
-   .Store .StoreTempSubscribe .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a:active {
+   .Store .StoreSubscriptionTerms .StoreSubscriptionTermsLinks a:active {
```

#### 8. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L4446` → after: `L4515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L4515) · [Before (L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L4446)

```diff
-   line-height: 1.05;
+   line-height: 1.3;
```

#### 9. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L4882` → after: `L4955-L4956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R4955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L4955-L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L4955-L4956) · [Before (L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L4882)

```diff
-   padding: 1.5rem 2rem
+   padding: 1.5rem 2rem;
+   width: 100%
```

#### 10. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5311-L5320` → after: `L5387-L5394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5387-L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5387-L5394) · [Before (L5311-L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5311-L5320)

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
+ .StoreSuperRankTile.StoreHyperRankTile {
+   align-items: stretch;
+   background: radial-gradient(circle at 78% 42%, #2e80ee, transparent 50%), linear-gradient(135deg, #1a1f2e, #222a9f 58%, #2671d7);
+   border-color: #4f94f1;
+   flex-direction: row;
+   height: 22rem;
+   justify-content: space-between
+ }
```

#### 11. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5322-L5323` → after: `L5396-L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5396-L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5396-L5398) · [Before (L5322-L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5322-L5323)

```diff
-   66% {
-     border-color: #ffb914
+ @media(hover:hover) {
+   .StoreSuperRankTile.StoreHyperRankTile:hover {
+     border-color: #3fd2f2
```

#### 12. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5327-L5330` → after: `L5402-L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5402-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5402-L5404) · [Before (L5327-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5327-L5330)

```diff
- @keyframes premiumBorderSecond {
-   0% {
-     opacity: 0
-   }
+ .StoreSuperRankTile.StoreHyperRankTile.pad-focused {
+   border-color: #3fd2f2
+ }
```

#### 13. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5332-L5335` → after: `L5406-L5409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5406-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5406-L5409) · [Before (L5332-L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5332-L5335)

```diff
-   33%,
-   66% {
-     opacity: 1
-   }
+ .StoreSuperRankTile.StoreHyperRankTile .StoreTileContent {
+   flex: 1 1;
+   max-width: none
+ }
```

#### 14. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5337-L5340` → after: `L5411-L5412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5411-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5411-L5412) · [Before (L5337-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5337-L5340)

```diff
-   66.01%,
-   to {
-     opacity: 0
-   }
+ .StoreSuperRankTile.StoreHyperRankTile .StoreTileContent .StoreTileTitle {
+   flex-shrink: 0
```

#### 15. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5343` → after: `L5415-L5418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5415-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5415-L5418) · [Before (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5343)

```diff
- @keyframes premiumBorderThird {
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankTitle {
+   color: #fff;
+   text-shadow: -2px -2px 0 #1a1f2e, -2px -1px 0 #1a1f2e, -2px 0 0 #1a1f2e, -2px 1px 0 #1a1f2e, -2px 2px 0 #1a1f2e, -1px -2px 0 #1a1f2e, -1px -1px 0 #1a1f2e, -1px 0 0 #1a1f2e, -1px 1px 0 #1a1f2e, -1px 2px 0 #1a1f2e, 0 -2px 0 #1a1f2e, 0 -1px 0 #1a1f2e, 0 0 0 #1a1f2e, 0 1px 0 #1a1f2 … [truncated]
+ }
```

#### 16. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5345-L5348` → after: `L5420-L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5420-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5420-L5423) · [Before (L5345-L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5345-L5348)

```diff
-   0%,
-   33% {
-     opacity: 0
-   }
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankTitle .svg-inline--fa,
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankTitle.svg-inline--fa {
+   paint-order: stroke fill
+ }
```

#### 17. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5350-L5352` → after: `L5425-L5431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5425-L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5425-L5431) · [Before (L5350-L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5350-L5352)

```diff
-   66% {
-     opacity: 1
-   }
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankTitle .svg-inline--fa path:only-of-type,
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankTitle.svg-inline--fa path:only-of-type {
+   stroke: #1a1f2e;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 4px;
+   stroke-linejoin: round
+ }
```

#### 18. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5354-L5356` → after: `L5433-L5434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5433-L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5433-L5434) · [Before (L5354-L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5354-L5356)

```diff
-   to {
-     opacity: 0
-   }
+ .StoreSuperRankTile.StoreHyperRankTile .StoreTilePitch {
+   color: #85baff
```

#### 19. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5359-L5362` → after: `L5437-L5441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5437-L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5437-L5441) · [Before (L5359-L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5359-L5362)

```diff
- @keyframes storeCharacterRays {
-   to {
-     rotate: 1turn
-   }
+ .StoreSuperRankTile.StoreHyperRankTile .StoreHyperRankTileStage {
+   flex: none;
+   order: 1;
+   padding-bottom: 1rem;
+   width: 34%
```

#### 20. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5365-L5371` → after: `L5444-L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5444-L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5444-L5445) · [Before (L5365-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5365-L5371)

```diff
- .StoreCharacterGrid {
-   grid-gap: var(--storeGap);
-   display: grid;
-   flex-shrink: 0;
-   gap: var(--storeGap);
-   grid-auto-rows: 21rem;
-   grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr))
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankDaysLeft {
+   color: #fff
```

#### 21. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5374-L5389` → after: `L5448-L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5448-L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5448-L5449) · [Before (L5374-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5374-L5389)

```diff
- .StoreCharacterCard {
-   --haloColour: hsla(0, 0%, 100%, .3);
-   --floorColour: rgba(26, 31, 46, .5);
-   --raysColour: hsla(42, 96%, 72%, .32);
-   --backdrop: radial-gradient(70% 60% at 50% 40%, #394980, #22283b);
-   background-color: #2b3249;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   display: flex;
-   flex-direction: column;
-   isolation: isolate;
-   min-height: 0;
-   min-width: 0;
-   overflow: hidden;
-   position: relative
+ .StoreSuperRankTile.StoreHyperRankTile .StoreSuperRankMeter i {
+   background: linear-gradient(90deg, #3fd2f2, #2e80ee)
```

#### 22. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5392-L5397` → after: `L5452-L5453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5452-L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5452-L5453) · [Before (L5392-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5392-L5397)

```diff
- .StoreCharacterCard .StoreCharacterBackdrop {
-   background: var(--backdrop);
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   z-index: 0
+ .StoreSuperRankTile.StoreHyperRankTile .HyperRankTilePerks {
+   font-size: 1.4rem
```

#### 23. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5400-L5410` → after: `L5456-L5457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5456-L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5456-L5457) · [Before (L5400-L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5400-L5410)

```diff
- .StoreCharacterCard .StoreCharacterRays {
-   aspect-ratio: 1;
-   background: repeating-conic-gradient(var(--raysColour) 0deg 9deg, transparent 9deg 30deg);
-   left: 50%;
-   -webkit-mask-image: radial-gradient(closest-side, #000 15%, transparent);
-   mask-image: radial-gradient(closest-side, #000 15%, transparent);
-   position: absolute;
-   top: 40%;
-   translate: -50% -50%;
-   width: 170%;
-   z-index: 0
+ .StoreCompact .StoreSuperRankTile.StoreHyperRankTile {
+   height: 19rem
```

#### 24. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5413-L5419` → after: `L5460-L5461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5460-L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5460-L5461) · [Before (L5413-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5413-L5419)

```diff
- @media(prefers-reduced-motion:no-preference) {
-   .StoreCharacterCard .StoreCharacterRays {
-     animation-duration: 40s;
-     animation-iteration-count: infinite;
-     animation-name: storeCharacterRays;
-     animation-timing-function: linear
-   }
+ .StoreCompact .StoreSuperRankTile.StoreHyperRankTile .HyperRankTilePerks {
+   font-size: 1.25rem
```

#### 25. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5422-L5423` → after: `L5464-L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5464-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5464-L5465) · [Before (L5422-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5422-L5423)

```diff
- .StoreCharacterCard .StoreCharacterRays {
-   pointer-events: none
+ .StorePortrait .StoreSuperRankTile.StoreHyperRankTile {
+   height: 27rem
```

#### 26. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L5426-L5432` → after: `L5468-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L5468-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L5468-L6065) · [Before (L5426-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L5426-L5432)

```diff
- .StoreCharacterCard .StoreCharacterLink {
-   color: inherit;
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   min-height: 0;
-   text-decoration: none
+ .StorePortrait .StoreSuperRankTile.StoreHyperRankTile .HyperRankTilePerks {
+   font-size: 1.25rem;
+   gap: .2rem;
+   grid-template-columns: max-content
+ }
+ 
+ .StorePortrait .StoreSuperRankTile.StoreHyperRankTile .HyperRankTilePerks li:nth-child(n+5) {
+   display: none
+ }
+ 
+ .StorePortrait .StoreSuperRankTile.StoreHyperRankTile .StoreHyperRankTileStage {
+   padding-bottom: .4rem
+ }
+ 
+ .StorePortrait .StoreSuperRankTile.StoreHyperRankTile .StoreHyperRankTileStage .CharacterPreviewNametag {
+   height: 1.6rem;
+ ... (582 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L6168` → after: `L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L6801) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L6168)

```diff
- .DailyDropReveal .DailyDropRevealFigures .DailyDropRevealFigure .DailyDropRevealFigureArt .DailyDropRevealBeforeHead {
+ .DailyDropReveal .DailyDropRevealFigures .DailyDropRevealFigure .DailyDropRevealFigureArt .DailyDropRevealHead {
```

#### 28. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7300` → after: `L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L7940) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7300)

```diff
-   .SeasonPassScreen .SeasonPassScreenActions .SeasonPassSuperUpsellButton {
+   .SeasonPassScreen .SeasonPassScreenActions .SeasonPassHyperUpsellButton {
```

#### 29. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7304` → after: `L7944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R7944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L7944) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7304)

```diff
-   .SeasonPassScreen .SeasonPassScreenActions .SeasonPassSuperUpsell .SeasonPassSuperUpsellText {
+   .SeasonPassScreen .SeasonPassScreenActions .SeasonPassHyperUpsell .SeasonPassHyperUpsellText {
```

#### 30. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7308` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L7948) · [Before (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7308)

```diff
-   .SeasonPassScreen .SeasonPassScreenActions .SeasonPassSuperUpsell .SeasonPassSuperUpsellButtonWrapper {
+   .SeasonPassScreen .SeasonPassScreenActions .SeasonPassHyperUpsell .SeasonPassHyperUpsellButtonWrapper {
```

#### 31. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7326-L7327` → after: `L7966-L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L7966-L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L7966-L7967) · [Before (L7326-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7326-L7327)

```diff
-   .SeasonPassScreen .SeasonPassScreenRetry,
-   .SeasonPassScreen .SeasonPassSuperUpsellButton {
+   .SeasonPassScreen .SeasonPassHyperUpsellButton,
+   .SeasonPassScreen .SeasonPassScreenRetry {
```

#### 32. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7588-L7590` → after: `L8228-L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8228-L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8228-L8230) · [Before (L7588-L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7588-L7590)

```diff
-   --seasonPassScrollbarRoom: 12px;
-   --seasonPassRailHeight: clamp(var(--seasonPassRailMinHeight), calc((100cqh - var(--seasonPassRoadHeight) - var(--seasonPassScrollbarRoom))/2), 16rem);
-   --seasonPassRailsTop: max(0px, calc((100cqh - 2*var(--seasonPassRailHeight) - var(--seasonPassRoadHeight) - var(--seasonPassScrollbarRoom))/2));
+   --seasonPassRailHeight: clamp(var(--seasonPassRailMinHeight), calc((100cqh - var(--seasonPassRoadHeight))/2), 16rem);
+   --seasonPassHyperRail: #2e80ee;
+   --seasonPassFreeRail: #26345d;
```

#### 33. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7599` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8239) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7599)

```diff
-   background-color: #2b3249;
+   background-color: var(--seasonPassFreeRail);
```

#### 34. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7618-L7619` → after: `L8257-L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8257-L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8257-L8259) · [Before (L7618-L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7618-L7619)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper {
-   height: var(--seasonPassRailHeight)
+ .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper {
+   flex: 1 1;
+   min-height: 0
```

#### 35. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7623` → after: `L8263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8263) · [Before (L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7623)

```diff
-   align-items: center;
+   align-self: center;
```

#### 36. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7625` → after: `L8265-L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8265-L8266) · [Before (L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7625)

```diff
-   font-size: 1.75rem;
+   filter: drop-shadow(.12em 0 0 #0f0f0f) drop-shadow(-.12em 0 0 #0f0f0f) drop-shadow(0 .12em 0 #0f0f0f) drop-shadow(0 -.12em 0 #0f0f0f) drop-shadow(.25em .4em 0 rgba(26, 31, 46, .6));
+   font-size: .88rem;
```

#### 37. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7627-L7629` → after: `L8268-L8311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8268-L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8268-L8311) · [Before (L7627-L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7627-L7629)

```diff
-   gap: .5rem;
-   text-shadow: -1px -1px 0 #0f0f0f, -1px 0 0 #0f0f0f, -1px 1px 0 #0f0f0f, 0 -1px 0 #0f0f0f, 0 0 0 #0f0f0f, 0 1px 0 #0f0f0f, 1px -1px 0 #0f0f0f, 1px 0 0 #0f0f0f, 1px 1px 0 #0f0f0f;
-   text-transform: uppercase
+   height: 5em;
+   line-height: 1;
+   position: relative;
+   rotate: var(--ticketTilt);
+   text-transform: uppercase;
+   width: 11.4em
+ }
+ 
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketStub {
+   align-items: center;
+   background: var(--ticketStub);
+   border-right: .2em dashed #0f0f0f;
+   clip-path: polygon(.4em 0, 100% 0, 100% 100%, .4em 100%, .4em calc(100% - .4em), 0 calc(100% - .4em), 0 .4em, .4em .4em);
+   color: #fff;
+   display: flex;
+   flex: none;
+ ... (28 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7632-L7633` → after: `L8314-L8315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8314-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8314-L8315) · [Before (L7632-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7632-L7633)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .svg-inline--fa,
- .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName.svg-inline--fa {
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody .svg-inline--fa,
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody.svg-inline--fa {
```

#### 39. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7637-L7638` → after: `L8319-L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8319-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8319-L8320) · [Before (L7637-L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7637-L7638)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .svg-inline--fa path:only-of-type,
- .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName.svg-inline--fa path:only-of-type {
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody .svg-inline--fa path:only-of-type,
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody.svg-inline--fa path:only-of-type {
```

#### 40. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7645-L7647` → after: `L8327-L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8327-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8327-L8331) · [Before (L7645-L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7645-L7647)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper {
-   background-color: #604c20;
-   border-bottom: 1px solid #0f0f0f
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody:after {
+   background: linear-gradient(105deg, transparent 38%, var(--ticketShine) 44% 50%, transparent 56%);
+   content: "";
+   inset: 0;
+   position: absolute
```

#### 41. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7650-L7651` → after: `L8334-L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8334-L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8334-L8371) · [Before (L7650-L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7650-L7651)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper .SeasonPassTrackLabelName {
-   color: #fcd373
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody .SeasonPassTicketPass {
+   color: var(--ticketPassInk);
+   font-size: .75em;
+   letter-spacing: .3em;
+   padding-left: .3em
+ }
+ 
+ .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassTrackLabelName .SeasonPassTicketBody .SeasonPassTicketName {
+   font-size: 1.85em
+ }
+ 
+ .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper {
+   background: radial-gradient(ellipse at center, #4f94f1, transparent), var(--seasonPassHyperRail);
+   overflow: hidden;
+   position: relative
+ }
+ ... (22 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7654` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8374) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7654)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper .SeasonPassSuperUpsell {
+ .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper .SeasonPassHyperUpsell {
```

#### 43. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7660-L7661` → after: `L8380-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8380-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8380-L8381) · [Before (L7660-L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7660-L7661)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper .SeasonPassSuperUpsell .SeasonPassSuperUpsellText {
-   color: #f2f2f2;
+ .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper .SeasonPassHyperUpsell .SeasonPassHyperUpsellText {
+   color: #fff;
```

#### 44. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7667` → after: `L8387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8387) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7667)

```diff
- .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper .SeasonPassSuperUpsell .SeasonPassSuperUpsellButton {
+ .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper .SeasonPassHyperUpsell .SeasonPassHyperUpsellButton {
```

#### 45. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7674-L7675` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8394) · [Before (L7674-L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7674-L7675)

```diff
-   gap: .4rem;
-   margin-top: var(--seasonPassRoadHeight)
+   gap: .5rem
```

#### 46. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7679` → after: `L8398-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8398-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8398-L8403) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7679)

```diff
-   color: #85baff
+   --ticketTilt: -3deg;
+   --ticketStub: linear-gradient(#1dd06d, #07940e);
+   --ticketFill: linear-gradient(135deg, #36e785, #1dd06d);
+   --ticketLight: hsla(99, 58%, 71%, .6);
+   --ticketShine: hsla(99, 58%, 71%, .5);
+   --ticketPassInk: #fff
```

#### 47. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7689` → after: `L8414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8414) · [Before (L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7689)

```diff
-   align-self: flex-start;
+   background: linear-gradient(var(--seasonPassHyperRail) 50%, var(--seasonPassFreeRail) 50%);
```

#### 48. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7696-L7711` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8420) · [Before (L7696-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7696-L7711)

```diff
-   scrollbar-color: #3c4b68 #2b3249;
-   scrollbar-width: thin
- }
- 
- .SeasonPassTrack .SeasonPassTrackScroller::-webkit-scrollbar {
-   height: 6px;
-   width: 6px
- }
- 
- .SeasonPassTrack .SeasonPassTrackScroller::-webkit-scrollbar-track {
-   background-color: #2b3249
- }
- 
- .SeasonPassTrack .SeasonPassTrackScroller::-webkit-scrollbar-thumb {
-   background-color: #3c4b68;
-   border-radius: 0
+   scrollbar-width: none
```

#### 49. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7737-L7738` → after: `L8448-L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8448-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8448-L8450) · [Before (L7737-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7737-L7738)

```diff
- .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super {
-   height: var(--seasonPassRailHeight)
+ .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper {
+   flex: 1 1;
+   min-height: 0
```

#### 50. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7741` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8453) · [Before (L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7741)

```diff
- .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super {
+ .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper {
```

#### 51. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7797` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8509) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7797)

```diff
-   .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassSuperUpsell .SeasonPassSuperUpsellText {
+   .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassHyperUpsell .SeasonPassHyperUpsellText {
```

#### 52. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7822` → after: `L8534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8534) · [Before (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7822)

```diff
-     font-size: 1.2rem
+     font-size: .6rem
```

#### 53. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7825` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8537) · [Before (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7825)

```diff
-   .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassSuperUpsell .SeasonPassSuperUpsellText,
+   .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassHyperUpsell .SeasonPassHyperUpsellText,
```

#### 54. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7830` → after: `L8542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8542) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7830)

```diff
-   .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassSuperUpsellButton .ButtonBody {
+   .SeasonPassTrack .SeasonPassTrackLabel .SeasonPassHyperUpsellButton .ButtonBody {
```

#### 55. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7834` → after: `L8546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8546) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7834)

```diff
-   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super {
+   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper {
```

#### 56. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7877` → after: `L8589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8589) · [Before (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7877)

```diff
-     grid-template-areas: "free . super";
+     grid-template-areas: "free . hyper";
```

#### 57. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7888` → after: `L8600-L8601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8600-L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8600-L8601) · [Before (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7888)

```diff
-     font-size: 1rem
+     align-self: center;
+     font-size: .6rem
```

#### 58. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7892` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8605) · [Before (L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7892)

```diff
-   .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper {
+   .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper {
```

#### 59. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7896-L7897` → after: `L8609-L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8609-L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8609-L8610) · [Before (L7896-L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7896-L7897)

```diff
-   .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper {
-     background-color: transparent;
+   .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper {
+     background: none;
```

#### 60. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7899` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8612) · [Before (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7899)

```diff
-     grid-area: super
+     grid-area: hyper
```

#### 61. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7902` → after: `L8615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8615) · [Before (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7902)

```diff
-   .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelSuper .SeasonPassSuperUpsell {
+   .SeasonPassTrack .SeasonPassTrackLabel.SeasonPassTrackLabelHyper .SeasonPassHyperUpsell {
```

#### 62. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7916` → after: `L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8629) · [Before (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7916)

```diff
-     align-self: stretch;
+     background: linear-gradient(to right, var(--seasonPassFreeRail) 50%, var(--seasonPassHyperRail) 50%);
```

#### 63. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7932` → after: `L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8645) · [Before (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7932)

```diff
-     grid-template-areas: "free road super";
+     grid-template-areas: "free road hyper";
```

#### 64. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7939` → after: `L8652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8652) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7939)

```diff
-   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super {
+   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper {
```

#### 65. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7948-L7949` → after: `L8661-L8662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8661-L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8661-L8662) · [Before (L7948-L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7948-L7949)

```diff
-   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super {
-     grid-area: super;
+   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper {
+     grid-area: hyper;
```

#### 66. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L7953-L7954` → after: `L8666-L8667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8666-L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8666-L8667) · [Before (L7953-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L7953-L7954)

```diff
-   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super .SeasonPassRewardTilePadlock,
-   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-super .SeasonPassRewardTileStateMark {
+   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper .SeasonPassRewardTilePadlock,
+   .SeasonPassTrack .SeasonPassTrackSlot.SeasonPassTrackSlot-hyper .SeasonPassRewardTileStateMark {
```

#### 67. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L8046` → after: `L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8759) · [Before (L8046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L8046)

```diff
- .SeasonPassSuperUpsell {
+ .SeasonPassHyperUpsell {
```

#### 68. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L8053` → after: `L8766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8766) · [Before (L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L8053)

```diff
- .SeasonPassSuperUpsell .SeasonPassSuperUpsellText {
+ .SeasonPassHyperUpsell .SeasonPassHyperUpsellText {
```

#### 69. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L8061` → after: `L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8774) · [Before (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L8061)

```diff
- .SeasonPassSuperUpsell .SeasonPassSuperUpsellButtonWrapper {
+ .SeasonPassHyperUpsell .SeasonPassHyperUpsellButtonWrapper {
```

#### 70. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L8066` → after: `L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8779) · [Before (L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L8066)

```diff
- .SeasonPassSuperUpsell .SeasonPassSuperUpsellButton {
+ .SeasonPassHyperUpsell .SeasonPassHyperUpsellButton {
```

#### 71. `bundles/bloxd.io/chunks/css/90.css` (Changed code · before: `L8070` → after: `L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11R8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9eb55ec1db4600c25f017121d76abcf3cfbd810795498ce7cce993d786471e11) · [After (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/90.css#L8783) · [Before (L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/90.css#L8070)

```diff
- .SeasonPassSuperUpsell .SeasonPassSuperUpsellCount {
+ .SeasonPassHyperUpsell .SeasonPassHyperUpsellCount {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/99.css` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/css/99.css` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a)

#### 1. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L2143)

```diff
- .InviteLinkInnerWrapper {
+ .CopyTextRow {
```

#### 2. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L2150)

```diff
- .InviteLinkInner {
+ .CopyTextRow .CopyTextRowText {
```

#### 3. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L2165)

```diff
- .InviteLinkCopyButton {
+ .CopyTextRow .CopyTextRowButton {
```

#### 4. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L2170)

```diff
-   .InviteLinkCopyButton {
+   .CopyTextRow .CopyTextRowButton {
```

#### 5. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L5414` → after: `L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR5414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L5414) · [Before (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L5414)

```diff
- .InGameUi.HiddenByWorldPanel :not(.WorldPanelTouchControl .TouchMovementWrapper, .WorldPanelTouchControl .TouchMovementWrapper *, .WorldPanelTouchControl .TouchComponentsButtons, .WorldPanelTouchControl .TouchComponentsButtons *) {
+ .InGameUi.HiddenByWorldPanel :not(.WorldPanelTouchControl .TouchMovementWrapper, .WorldPanelTouchControl .TouchMovementWrapper *, .WorldPanelTouchControl .TouchComponentsButtons, .WorldPanelTouchControl .TouchComponentsButtons *, .WorldPanelTouchControl .RecordingIndicator, .Worl … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L5429` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L5429) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L5429)

```diff
- .InGameUi.WorldPanelTouchControl:not(.Hidden) :is(.TouchMovementWrapper, .TouchComponentsButtons) {
+ .InGameUi.WorldPanelTouchControl:not(.Hidden) :is(.TouchMovementWrapper, .TouchComponentsButtons, .RecordingIndicator) {
```

#### 7. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L6515` → after: `L6515-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L6515-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L6515-L6516) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L6515)

```diff
- .GameBackgroundScreen.CodeEditorBg .CodeEditorEngineNotice {
+ .GameBackgroundScreen.CodeEditorBg .CodeEditorEngineNotice,
+ .GameBackgroundScreen.CodeEditorBg .CodeEditorLengthNotice {
```

#### 8. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L6525` → after: `L6526-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L6526-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L6526-L6532) · [Before (L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L6525)

```diff
- .GameBackgroundScreen.CodeEditorBg .CodeEditorEngineNotice .CodeEditorEngineNoticeLink {
+ .GameBackgroundScreen.CodeEditorBg .CodeEditorEngineNotice.CodeEditorLengthCounter,
+ .GameBackgroundScreen.CodeEditorBg .CodeEditorLengthNotice.CodeEditorLengthCounter {
+   color: #cfcfcf
+ }
+ 
+ .GameBackgroundScreen.CodeEditorBg .CodeEditorEngineNotice .CodeEditorEngineNoticeLink,
+ .GameBackgroundScreen.CodeEditorBg .CodeEditorLengthNotice .CodeEditorEngineNoticeLink {
```

#### 9. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L6672` → after: `L6679-L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L6679-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L6679-L6680) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L6672)

```diff
- .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorEngineNotice {
+ .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorEngineNotice,
+ .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorLengthNotice {
```

#### 10. `bundles/bloxd.io/chunks/css/99.css` (Changed code · before: `L6677` → after: `L6685-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79aR6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7047a36f1d54bb28827f2d658a028dfce4451aab4474546e356f7d62f5cdb79a) · [After (L6685-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/99.css#L6685-L6691) · [Before (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/99.css#L6677)

```diff
- .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorEngineNotice .CodeEditorEngineNoticeLink {
+ .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorEngineNotice.CodeEditorLengthCounter,
+ .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorLengthNotice.CodeEditorLengthCounter {
+   color: #383a42
+ }
+ 
+ .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorEngineNotice .CodeEditorEngineNoticeLink,
+ .GameBackgroundScreen.CodeEditorBg.CodeEditorLight .CodeEditorLengthNotice .CodeEditorEngineNoticeLink {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a)

#### 1. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L57` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L578) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L57)

```diff
-   background: #cfcfcf;
+   background: #22283b;
```

#### 2. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L81` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L613-L614) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L81)

```diff
-   background: color-mix(in srgb, var(--district-colour) 32%, #22283b);
+   background: color-mix(in srgb, var(--district-colour) 22%, transparent);
+   box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--district-colour) 55%, rgba(26, 31, 46, .6));
```

#### 3. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L87` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L620-L621) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L87)

```diff
-   transition: background-color .3s, filter .3s
+   position: relative;
+   transition: background-color .3s, box-shadow .3s
```

#### 4. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L127-L128` → after: `L661-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L661-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L661-L673) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L127-L128)

```diff
-   font-size: calc(var(--ss-map-size)*.11);
-   line-height: 1
+   align-items: center;
+   background: color-mix(in srgb, var(--district-colour) 70%, #22283b);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+   font-size: calc(var(--ss-map-size)*.055);
+   height: calc(var(--ss-map-size)*.105);
+   justify-content: center;
+   line-height: 1;
+   transition: scale .3s, background-color .3s, color .3s;
+   width: calc(var(--ss-map-size)*.105)
```

#### 5. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L133` → after: `L678-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L678-L680) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L133)

```diff
-     font-size: calc(var(--ss-map-size)*.15)
+     font-size: calc(var(--ss-map-size)*.07);
+     height: calc(var(--ss-map-size)*.13);
+     width: calc(var(--ss-map-size)*.13)
```

#### 6. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L139` → after: `L686-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L686-L688) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L139)

```diff
-     font-size: calc(var(--ss-map-size)*.15)
+     font-size: calc(var(--ss-map-size)*.07);
+     height: calc(var(--ss-map-size)*.13);
+     width: calc(var(--ss-map-size)*.13)
```

#### 7. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L146` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L695) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L146)

```diff
-   font-size: max(var(--ss-map-size)*.042, 9px);
+   font-size: max(var(--ss-map-size)*.038, 9px);
```

#### 8. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L149-L150` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L698) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L149-L150)

```diff
-   overflow-wrap: break-word;
-   padding: 0 calc(var(--ss-map-size)*.03);
+   padding: 0 calc(var(--ss-map-size)*.02);
```

#### 9. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L190` → after: `L743-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L743-L744) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L190)

```diff
-   font-size: calc(var(--ss-map-size)*.13)
+   border-color: #ffb914;
+   scale: 1.2
```

#### 10. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L193-L196` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L747-L748) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L193-L196)

```diff
- @media(orientation:landscape)and (max-height:500px) {
-   .SecretSantaMinimap .SecretSantaDistrict.Target .SecretSantaDistrictIcon {
-     font-size: calc(var(--ss-map-size)*.19)
-   }
+ .SecretSantaMinimap.State-hunting .SecretSantaDistrict:not(.Target, [data-here]) {
+   background: color-mix(in srgb, var(--district-colour) 14%, rgba(26, 31, 46, .6))
```

#### 11. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L199-L202` → after: `L751-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L751-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L751-L758) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L199-L202)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .SecretSantaMinimap .SecretSantaDistrict.Target .SecretSantaDistrictIcon {
-     font-size: calc(var(--ss-map-size)*.19)
-   }
+ .SecretSantaMinimap.State-hunting .SecretSantaDistrict:not(.Target, [data-here]) .SecretSantaDistrictIcon {
+   background: color-mix(in srgb, var(--district-colour) 45%, #22283b);
+   color: #cfcfcf
+ }
+ 
+ .SecretSantaMinimap.WithCircle .SecretSantaDistrict.Target .SecretSantaDistrictIcon,
+ .SecretSantaMinimap.WithCircle .SecretSantaDistrict.Target .SecretSantaDistrictLabel {
+   visibility: hidden
```

#### 12. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L205-L206` → after: `L761-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L761-L763) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L205-L206)

```diff
- .SecretSantaMinimap.State-hunting .SecretSantaDistrict:not(.Target) {
-   filter: saturate(.55) brightness(.8)
+ .SecretSantaMinimap .SecretSantaDistrict[data-here]:not(.Target) {
+   background: color-mix(in srgb, var(--district-colour) 38%, transparent);
+   box-shadow: inset 0 0 0 max(2px, .12rem) #fff
```

#### 13. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L209-L210` → after: `L766-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L766-L767) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L209-L210)

```diff
- .SecretSantaMinimap[data-in-district] .SecretSantaDistrict.Target {
-   box-shadow: inset 0 0 0 .15rem #fff, 0 0 .8rem .15rem #fcd373
+ .SecretSantaMinimap .SecretSantaDistrict.Target[data-here] {
+   box-shadow: inset 0 0 0 .15rem #ffb914, inset 0 0 0 calc(.15rem + max(2px, .12rem)) #fff, 0 0 .8rem .15rem #fcd373
```

#### 14. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L231-L239` → after: `L788-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L788-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L788-L792) · [Before (L231-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L231-L239)

```diff
-   position: absolute;
-   transform: translate(-50%, -50%)
- }
- 
- .SecretSantaMinimap .SecretSantaCircle svg {
-   display: block;
-   height: 100%;
-   overflow: visible;
-   width: 100%
+   animation: secretSantaCircleIn .7s ease-out, secretSantaCircleBreathe 1.8s ease-in-out .7s infinite alternate;
+   background: radial-gradient(closest-side, rgba(255, 185, 20, .15) 55%, color-mix(in srgb, #ffb914 42%, transparent));
+   border: max(2px, .14rem) solid #ffb914;
+   border-radius: 50%;
+   box-shadow: 0 0 0 1px rgba(26, 31, 46, .6), inset 0 0 0 1px rgba(26, 31, 46, .6)
```

#### 15. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L242-L246` → after: `L795-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L795-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L795-L800) · [Before (L242-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L242-L246)

```diff
- .SecretSantaMinimap .SecretSantaCircle path {
-   fill: none;
-   stroke-dasharray: .3rem .2rem;
-   stroke-linecap: round;
-   vector-effect: non-scaling-stroke
+ .SecretSantaMinimap .SecretSantaCircle,
+ .SecretSantaMinimap .SecretSantaCircleBadge {
+   box-sizing: border-box;
+   position: absolute;
+   transition: left .6s ease-in-out, top .6s ease-in-out;
+   translate: -50% -50%
```

#### 16. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L249-L252` → after: `L803-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L803-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L803-L814) · [Before (L249-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L249-L252)

```diff
- .SecretSantaMinimap .SecretSantaCircle .SecretSantaCircleShadow {
-   fill: rgba(255, 185, 20, .15);
-   stroke: rgba(26, 31, 46, .6);
-   stroke-width: .22rem
+ .SecretSantaMinimap .SecretSantaCircleBadge {
+   align-items: center;
+   animation: secretSantaBadgeIn .3s ease-out .6s backwards;
+   background: #ffb914;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   color: #22283b;
+   display: flex;
+   font-size: max(var(--ss-map-size)*.05, 8px);
+   height: max(var(--ss-map-size)*.085, 14px);
+   justify-content: center;
+   width: max(var(--ss-map-size)*.085, 14px)
```

#### 17. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L255-L257` → after: `L817-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L817-L818) · [Before (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L255-L257)

```diff
- .SecretSantaMinimap .SecretSantaCircle .SecretSantaCircleDashes {
-   stroke: #fcd373;
-   stroke-width: .12rem
+ .SecretSantaMinimap[data-in-circle] .SecretSantaCircle {
+   border-color: #fff
```

#### 18. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L260-L262` → after: `L821-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L821-L822) · [Before (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L260-L262)

```diff
- .SecretSantaMinimap[data-in-circle] .SecretSantaCircle .SecretSantaCircleDashes {
-   stroke: #fff;
-   stroke-dasharray: none
+ .SecretSantaMinimap[data-in-circle] .SecretSantaCircleBadge {
+   background: #fff
```

#### 19. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L348` → after: `L926-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L926-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L926-L985) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L348)

```diff
-     filter: brightness(1.25)
+     filter: brightness(1.35)
+   }
+ }
+ 
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
+ }
+ 
+ ... (44 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L352-L355` → after: `L989-L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L989-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L989-L996) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L352-L355)

```diff
- @keyframes secretSantaDistrictPulse {
-   0% {
-     opacity: 1;
-     transform: scale(1)
+ .SecretSantaClose .SecretSantaBell {
+   display: inline-block;
+   transform-origin: 50% 15%
+ }
+ 
+ @media(prefers-reduced-motion:no-preference) {
+   .SecretSantaClose.Bells-2 .SecretSantaBell {
+     animation: secretSantaBellSwing .5s ease-in-out infinite alternate
```

#### 21. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L359-L360` → after: `L1004-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1004-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1004-L1008) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L359-L360)

```diff
-     opacity: 0;
-     transform: scale(1.45)
+     opacity: 0
+   }
+ 
+   50% {
+     opacity: .8
```

#### 22. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L364` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1012) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L364)

```diff
- @keyframes secretSantaLostDrift {
+ @keyframes secretSantaBellSwing {
```

#### 23. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L366` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1014) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L366)

```diff
-     transform: translateY(-.1rem) rotate(-15deg)
+     rotate: -16deg
```

#### 24. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L370` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1018) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L370)

```diff
-     transform: translateY(.1rem) rotate(15deg)
+     rotate: 16deg
```

#### 25. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L383-L384` → after: `L1031-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1031-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1031-L1034) · [Before (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L383-L384)

```diff
- body.SecretSantaMatchOrFinish .LobbyLeaderboard .PlayerPfpAndName .ProfilePicture,
- body.SecretSantaMatchOrFinish .ProfileCardModelPanel {
+ body.SecretSantaMode .LobbyLeaderboard .ProfilePicture,
+ body.SecretSantaMode .LobbyManage .ProfilePicture,
+ body.SecretSantaMode .ProfileCardModelPanel,
+ body.SecretSantaMode .WorldSocialPopup .ProfilePicture {
```

#### 26. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L419-L420` → after: `L1094-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1094-L1095) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L419-L420)

```diff
-   bottom: 6.5rem;
-   transform: translateX(-50%) scale(.8);
+   bottom: 11rem;
+   transform: translateX(-50%) scale(.7);
```

#### 27. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L501` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1192) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L501)

```diff
- .SecretSantaClock>span {
+ .SecretSantaClock .SecretSantaClockIcon {
```

#### 28. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L607` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1298) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L607)

```diff
- .SecretSantaYouTab .SecretSantaHunters {
+ .SecretSantaYouTab .SecretSantaHuntedBanner {
```

#### 29. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L616-L617` → after: `L1307-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1307-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1307-L1308) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L616-L617)

```diff
- .SecretSantaYouTab .SecretSantaHunters .svg-inline--fa,
- .SecretSantaYouTab .SecretSantaHunters.svg-inline--fa {
+ .SecretSantaYouTab .SecretSantaHuntedBanner .svg-inline--fa,
+ .SecretSantaYouTab .SecretSantaHuntedBanner.svg-inline--fa {
```

#### 30. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L621-L622` → after: `L1312-L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1312-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1312-L1313) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L621-L622)

```diff
- .SecretSantaYouTab .SecretSantaHunters .svg-inline--fa path:only-of-type,
- .SecretSantaYouTab .SecretSantaHunters.svg-inline--fa path:only-of-type {
+ .SecretSantaYouTab .SecretSantaHuntedBanner .svg-inline--fa path:only-of-type,
+ .SecretSantaYouTab .SecretSantaHuntedBanner.svg-inline--fa path:only-of-type {
```

#### 31. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L787` → after: `L1350-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1350-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1350-L1351) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L787)

```diff
-     --ss-map-max: min(38vw, 150px)
+     --ss-map-max: min(38vw, 150px);
+     top: max(var(--hud-safe-top, var(--notchTop)) + 4.5rem, var(--ss-map-top, 0px), 50% - 34px)
```

#### 32. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L1096` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1808) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1096)

```diff
-   color: #ffb914;
+   color: #fff;
```

#### 33. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L1123-L1124` → after: `L1835-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1835-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1835-L1838) · [Before (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1123-L1124)

```diff
- .SecretSantaSnowTitle .SecretSantaSnowTitleIcon {
-   margin-right: .35em
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaSnowTitle .SecretSantaSnowTitleName {
+     font-size: max(2.2rem, 24px)
+   }
```

#### 34. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L1127-L1132` → after: `L1841-L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1841-L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1841-L1842) · [Before (L1127-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1127-L1132)

```diff
- .SecretSantaSnowTitle .SecretSantaSnowTitleLine {
-   font-size: max(1.45rem, 14px);
-   font-weight: 800;
-   line-height: 1.25;
-   margin-top: .45rem;
-   white-space: nowrap
+ .SecretSantaSnowTitle .SecretSantaSnowTitleIcon {
+   margin-right: .35em
```

#### 35. `bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css` (Changed code · before: `L1135-L1139` → after: `L1845-L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68aR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-66b56c4ce2417535904ce25aec9ca2a65ea9bcb08e7721cff3ab86cde0c8d68a) · [After (L1845-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1845-L1846) · [Before (L1135-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/css/clientGame-secretSanta-secretSantaClient.css#L1135-L1139)

```diff
- @media(orientation:landscape)and (max-height:500px) {
-   .SecretSantaSnowTitle .SecretSantaSnowTitleLine {
-     font-size: max(1.15rem, 14px);
-     margin-top: .3rem
-   }
+ .SecretSantaSnowTitle .SecretSantaIntroLines {
+   margin-top: .6rem
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/100.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/100.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13)

#### 1. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L4)

```diff
-   5273: (VV, eV, xV) => {
+   5253: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L7)

```diff
-       g: () => BV
+       f: () => MH
```

#### 3. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L9-L16` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L9-L16) · [Before (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L9-L16)

```diff
-     var JV = xV(1375),
-       YV = xV(32);
-     var UV = xV(375);
-     var yV = xV(657);
-     var pV = xV(2660),
-       QV = xV(5281),
-       nV = xV(5307),
-       wV = xV(5319);
+     var AH = LH(1280),
+       rH = LH(18);
+     var SH = LH(317);
+     var hH = LH(619);
+     var tH = LH(2600),
+       zH = LH(5255),
+       CH = LH(5275),
+       EH = LH(5288);
```

#### 4. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L27)

```diff
-         if (!yV) throw console.error(`No QTE implementation registered for type: ${eV}`), new Error(`No QTE implementation registered for type: ${eV}`);
+         if (!hH) throw console.error(`No QTE implementation registered for type: ${BH}`), new Error(`No QTE implementation registered for type: ${BH}`);
```

#### 5. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L33)

```diff
-         this.mouseSub = YV.h.subscribe("QTEMouseState", (VV => {
+         this.mouseSub = rH.k.subscribe("QTEMouseState", (HH => {
```

#### 6. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L38-L40)

```diff
-         })), this.stopInputActions = (0, nV.e)((VV => {
-           this.isCompleted || !vV.has(VV.action) && !(0, nV.d)(VV) || this.implementation.handleMouseInput(VV.down)
-         })), this.tickSub = YV.h.subscribe("noaTick", (VV => {
+         })), this.stopInputActions = (0, CH.k)((HH => {
+           this.isCompleted || !GH.has(HH.action) && !(0, CH.i)(HH) || this.implementation.handleMouseInput(HH.down)
+         })), this.tickSub = rH.k.subscribe("noaTick", (HH => {
```

#### 7. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L44-L45` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L44-L45) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L44-L45)

```diff
-         })), this.stopShellTicks = (0, QV.u)((() => {
-           this.isCompleted || this.implementation.handleTick(pV.s / 1e3)
+         })), this.stopShellTicks = (0, zH.v)((() => {
+           this.isCompleted || this.implementation.handleTick(tH.o / 1e3)
```

#### 8. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L50)

```diff
-         this.mouseSub && (YV.h.unsubscribe(this.mouseSub), this.mouseSub = null), null === (VV = this.stopInputActions) || void 0 === VV || VV.call(this), this.stopInputActions = null, null === (eV = this.stopShellTicks) || void 0 === eV || eV.call(this), this.stopShellTicks = nu … [truncated]
+         this.mouseSub && (rH.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (HH = this.stopInputActions) || void 0 === HH || HH.call(this), this.stopInputActions = null, null === (BH = this.stopShellTicks) || void 0 === BH || BH.call(this), this.stopShellTicks = nu … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L69)

```diff
-           this.resolveRequest = eV, this.tearDownNotification = xV, this.progress = 0, this.hJ = void 0, this.lJ = void 0, this.LJ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           this.resolveRequest = BH, this.tearDownNotification = LH, this.progress = 0, this.nH = void 0, this.FH = void 0, this.DH = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
```

#### 10. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L71)

```diff
-           this.hJ = null !== (JV = pV.hJ) && void 0 !== JV ? JV : .075, this.lJ = null !== (YV = pV.lJ) && void 0 !== YV ? YV : 1, this.progress = null !== (UV = pV.cJ) && void 0 !== UV ? UV : 30, this.LJ = null !== (yV = pV.LJ) && void 0 !== yV && yV, this.parameters = pV
+           this.nH = null !== (AH = tH.nH) && void 0 !== AH ? AH : .075, this.FH = null !== (rH = tH.FH) && void 0 !== rH ? rH : 1, this.progress = null !== (SH = tH.jH) && void 0 !== SH ? SH : 30, this.DH = null !== (hH = tH.DH) && void 0 !== hH && hH, this.parameters = tH
```

#### 11. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L74)

```diff
-           VV && !this.isCompleted && (this.clickCount++, this.progress += this.lJ, this.progress >= 100 && this.complete(!0))
+           HH && !this.isCompleted && (this.clickCount++, this.progress += this.FH, this.progress >= 100 && this.complete(!0))
```

#### 12. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L78)

```diff
-             if (this.progress -= this.hJ, this.LJ && this.progress <= 0) this.complete(!1);
+             if (this.progress -= this.nH, this.DH && this.progress <= 0) this.complete(!1);
```

#### 13. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L103)

```diff
-           this.resolveRequest = eV, this.tearDownNotification = xV, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = VV, this.timeWindowMs = null !== (JV = this.parameters.KJ) && void … [truncated]
+           this.resolveRequest = BH, this.tearDownNotification = LH, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = HH, this.timeWindowMs = null !== (AH = this.parameters.sH) && void … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L124)

```diff
-               KJ: this.timeWindowMs
+               sH: this.timeWindowMs
```

#### 15. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L140-L141)

```diff
-             SJ: UV.b.clamp(YV.SJ, .05, 1)
-           }, this.progress = null !== (JV = YV.cJ) && void 0 !== JV ? JV : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+             yH: SH.d.clamp(rH.yH, .05, 1)
+           }, this.progress = null !== (AH = rH.jH) && void 0 !== AH ? AH : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
```

#### 16. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L152)

```diff
-           this.moverPosition += VV * this.parameters.IJ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
+           this.moverPosition += HH * this.parameters.HB * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
```

#### 17. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L158)

```diff
-           const VV = UV.b.clamp(1 - .7 * this.parameters.dJ, 0, 1.4);
+           const HH = SH.d.clamp(1 - .7 * this.parameters.BB, 0, 1.4);
```

#### 18. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L162-L163)

```diff
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.OJ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = UV.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const VV = this.parameters.SJ / 2,
+           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.LB : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = SH.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
+           const HH = this.parameters.yH / 2,
```

#### 19. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L169)

```diff
-           const VV = this.parameters.SJ / 2;
+           const HH = this.parameters.yH / 2;
```

#### 20. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L173)

```diff
-           this.isMoverInCatchZone() ? this.progress += this.parameters.VY * VV : this.progress -= this.parameters.eY * VV, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.LJ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+           this.isMoverInCatchZone() ? this.progress += this.parameters.AB * HH : this.progress -= this.parameters.rB * HH, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.DH && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
```

#### 21. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L184)

```diff
-               SJ: this.parameters.SJ,
+               yH: this.parameters.yH,
```

#### 22. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L199)

```diff
-           this.resolveRequest = eV, this.tearDownNotification = xV, this.startTime = void 0, this.speed = void 0, this.JY = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = BH, this.tearDownNotification = LH, this.startTime = void 0, this.speed = void 0, this.hB = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 23. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L203-L205)

```diff
-             speed: null !== (JV = nV.speed) && void 0 !== JV ? JV : .5,
-             JY: UV.b.clamp(nV.JY, .05, 1),
-             label: null !== (YV = nV.label) && void 0 !== YV ? YV : [{
+             speed: null !== (AH = CH.speed) && void 0 !== AH ? AH : .5,
+             hB: SH.d.clamp(CH.hB, .05, 1),
+             label: null !== (rH = CH.label) && void 0 !== rH ? rH : [{
```

#### 24. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L208-L211)

```diff
-             icon: null !== (yV = nV.icon) && void 0 !== yV ? yV : null,
-             scale: null !== (pV = nV.scale) && void 0 !== pV ? pV : 1,
-             rotation: null !== (QV = nV.rotation) && void 0 !== QV ? QV : 0
-           }, this.speed = this.parameters.speed, this.JY = this.parameters.JY, this.startTime = Date.now()
+             icon: null !== (hH = CH.icon) && void 0 !== hH ? hH : null,
+             scale: null !== (tH = CH.scale) && void 0 !== tH ? tH : 1,
+             rotation: null !== (zH = CH.rotation) && void 0 !== zH ? zH : 0
+           }, this.speed = this.parameters.speed, this.hB = this.parameters.hB, this.startTime = Date.now()
```

#### 25. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L216)

```diff
-             const VV = Math.abs(this.markerPosition - .5) <= this.JY / 2;
+             const HH = Math.abs(this.markerPosition - .5) <= this.hB / 2;
```

#### 26. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L225)

```diff
-           this.markerPosition = VV <= .5 ? 2 * VV : 2 - 2 * VV
+           this.markerPosition = HH <= .5 ? 2 * HH : 2 - 2 * HH
```

#### 27. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L251-L252)

```diff
-           if (eV <= this.parameters.pY && eV >= -this.parameters.pY) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.UY) return void this.complete(!0)
+           if (BH <= this.parameters.EB && BH >= -this.parameters.EB) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.zB) return void this.complete(!0)
```

#### 28. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L257)

```diff
-           this.misses++, this.lastClickResult = !1, !(0, yV.J)(this.parameters.QY) && this.misses > this.parameters.QY ? this.complete(!1) : this.shrinkStartTime = Date.now()
+           this.misses++, this.lastClickResult = !1, !(0, hH.M)(this.parameters.XB) && this.misses > this.parameters.XB ? this.complete(!1) : this.shrinkStartTime = Date.now()
```

#### 29. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L261)

```diff
-           this.getOuterCircleProgress() < -this.parameters.pY && this.handleMiss()
+           this.getOuterCircleProgress() < -this.parameters.EB && this.handleMiss()
```

#### 30. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L264)

```diff
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.yY
+           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.CB
```

#### 31. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L276)

```diff
-               UY: this.parameters.UY,
+               zB: this.parameters.zB,
```

#### 32. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L290)

```diff
-       (0, wV.h)(pV.y.Qte, EV ? pV.y.Qte : 0), EV ? YV.h.QZ("qteStateUpdated", EV.getState()) : YV.h.QZ("qteStateUpdated", {
+       (0, EH.k)(tH.w.Qte, WH ? tH.w.Qte : 0), WH ? rH.k.AX("qteStateUpdated", WH.getState()) : rH.k.AX("qteStateUpdated", {
```

#### 33. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L324)

```diff
-         if (EV || kV.XZ()) return void(kV.XZ() && EV && (EV = null, jV()));
+         if (WH || uH.TX()) return void(uH.TX() && WH && (WH = null, xH()));
```

#### 34. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L357)

```diff
-   5281: (VV, eV, xV) => {
+   5255: (HH, BH, LH) => {
```

#### 35. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L359-L362` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L359-L360) · [Before (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L359-L362)

```diff
-       A: () => zV,
-       C: () => jV,
-       E: () => yV,
-       G: () => pV,
+       D: () => oH,
+       F: () => xH,
```

#### 36. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L364` → after: `L362-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L362-L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L364)

```diff
-       b: () => AV,
+       L: () => tH,
+       P: () => bH,
+       c: () => OH,
```

#### 37. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L367-L373` → after: `L368-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L368-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L368-L373) · [Before (L367-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L367-L373)

```diff
-       h: () => GV,
-       l: () => BV,
-       m: () => TV,
-       o: () => qV,
-       s: () => FV,
-       u: () => XV,
-       w: () => MV
+       k: () => MH,
+       n: () => UH,
+       p: () => vH,
+       r: () => TH,
+       v: () => kH,
+       z: () => mH
```

#### 38. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L375)

```diff
-     var JV = xV(5288);
+     var AH = LH(5260);
```

#### 39. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L384)

```diff
-       UV = null !== VV && void 0 !== VV ? VV : YV
+       SH = null !== HH && void 0 !== HH ? HH : rH
```

#### 40. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L508)

```diff
-   5307: (VV, eV, xV) => {
+   5275: (HH, BH, LH) => {
```

#### 41. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L510-L512` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L510-L512) · [Before (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L510-L512)

```diff
-       c: () => QV,
-       d: () => UV,
-       e: () => pV
+       e: () => zH,
+       i: () => SH,
+       k: () => tH
```

#### 42. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L514-L515)

```diff
-     var JV = xV(2660),
-       YV = xV(5310);
+     var AH = LH(2600),
+       rH = LH(5279);
```

#### 43. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L533)

```diff
-       const eV = YV.e[255 & VV];
+       const BH = rH.c[255 & HH];
```

#### 44. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L545)

```diff
-   5310: (VV, eV, xV) => {
+   5279: (HH, BH, LH) => {
```

#### 45. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L547-L551` → after: `L547-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L547-L551) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L547-L551)

```diff
-       e: () => YV,
-       h: () => UV,
-       l: () => yV,
-       p: () => JV,
-       q: () => pV
+       c: () => rH,
+       f: () => SH,
+       i: () => hH,
+       j: () => AH,
+       k: () => tH
```

#### 46. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L823)

```diff
-   5319: (VV, eV, xV) => {
+   5288: (HH, BH, LH) => {
```

#### 47. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L825-L827` → after: `L825-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L825-L827) · [Before (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L825-L827)

```diff
-       c: () => pV,
-       f: () => yV,
-       h: () => nV
+       e: () => tH,
+       g: () => hH,
+       k: () => CH
```

#### 48. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L829-L830)

```diff
-     var JV = xV(2660),
-       YV = xV(2663);
+     var AH = LH(2600),
+       rH = LH(2605);
```

#### 49. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L841)

```diff
-           YV !== eV && (eV = YV, VV(JV.i.UiCapture, JV.y.Keyboard, 0, 0, YV ? JV.y.Keyboard : 0))
+           rH !== BH && (BH = rH, HH(AH.g.UiCapture, AH.w.Keyboard, 0, 0, rH ? AH.w.Keyboard : 0))
```

#### 50. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L865)

```diff
-       QV.set(JV, (null !== (xV = QV.get(JV)) && void 0 !== xV ? xV : 0) & ~VV | eV & VV);
+       zH.set(AH, (null !== (LH = zH.get(AH)) && void 0 !== LH ? LH : 0) & ~HH | BH & HH);
```

#### 51. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/100.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/100.js#L868)

```diff
-       return (0, YV.D)(VV, UV & VV)
+       return (0, rH.E)(HH, SH & HH)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/101.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/101.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8)

#### 1. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L4)

```diff
-   42171: (VV, eV, xV) => {
+   42192: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L6-L8)

```diff
-       A: () => SV,
-       C: () => CV,
-       D: () => GV,
+       B: () => JH,
+       E: () => qH,
```

#### 3. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L10-L11` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L9-L10) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L10-L11)

```diff
-       H: () => zV,
-       K: () => mV,
+       G: () => eH,
+       J: () => oH,
```

#### 4. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L13` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L12-L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L13)

```diff
-       O: () => RV,
+       P: () => DH,
+       S: () => lH,
```

#### 5. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L15-L16)

```diff
-       e: () => oV,
-       h: () => XV,
+       f: () => NH,
+       g: () => kH,
```

#### 6. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L18-L22` → after: `L18-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L18-L22) · [Before (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L18-L22)

```diff
-       l: () => MV,
-       n: () => NV,
-       p: () => aV,
-       s: () => WV,
-       v: () => DV,
+       k: () => mH,
+       o: () => bH,
+       q: () => gH,
+       r: () => fH,
+       u: () => cH,
```

#### 7. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L25-L30` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L25-L30) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L25-L30)

```diff
-     var JV = xV(1473),
-       YV = xV(32),
-       UV = xV(1332),
-       yV = xV(2660),
-       pV = xV(5319),
-       QV = xV(5281);
+     var AH = LH(1390),
+       rH = LH(18),
+       SH = LH(1241),
+       hH = LH(2600),
+       tH = LH(5288),
+       zH = LH(5255);
```

#### 8. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L60)

```diff
-       return (0, UV.r)() && !TV
+       return (0, SH.A)() && !UH
```

#### 9. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L79)

```diff
-       (0, pV.h)(yV.y.Menu, (0, UV.r)() ? 0 : yV.y.Menu)
+       (0, tH.k)(hH.w.Menu, (0, SH.A)() ? 0 : hH.w.Menu)
```

#### 10. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L105)

```diff
-       return (!ZV || performance.now() - EV > bV) && (ZV = (0, QV.G)().lockPointer(), EV = performance.now()), ZV
+       return (!XH || performance.now() - WH > QH) && (XH = (0, zH.L)().lockPointer(), WH = performance.now()), XH
```

#### 11. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L130)

```diff
-       jV ? navigator.vendor.startsWith("Apple") ? uV() : qV = tV : fV()
+       xH ? navigator.vendor.startsWith("Apple") ? aH() : vH = PH : DH()
```

#### 12. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L146)

```diff
-       FV = !0, (0, QV.G)().unlockPointer()
+       TH = !0, (0, zH.L)().unlockPointer()
```

#### 13. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L157)

```diff
-       YV.h.QZ("pointerLockUpdate", wV)
+       rH.k.AX("pointerLockUpdate", EH)
```

#### 14. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L160)

```diff
-   41955: (VV, eV, xV) => {
+   42002: (HH, BH, LH) => {
```

#### 15. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L162-L168` → after: `L162-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L162-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L162-L168) · [Before (L162-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L162-L168)

```diff
-       b: () => vV,
-       f: () => pV,
-       h: () => ZV,
-       l: () => nV,
-       o: () => yV,
-       q: () => wV,
-       s: () => QV
+       c: () => GH,
+       g: () => tH,
+       j: () => XH,
+       n: () => CH,
+       p: () => hH,
+       r: () => EH,
+       t: () => zH
```

#### 16. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L203)

```diff
-   5281: (VV, eV, xV) => {
+   5255: (HH, BH, LH) => {
```

#### 17. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L205-L208` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L205-L206) · [Before (L205-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L205-L208)

```diff
-       A: () => zV,
-       C: () => jV,
-       E: () => yV,
-       G: () => pV,
+       D: () => oH,
+       F: () => xH,
```

#### 18. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L210` → after: `L208-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L208-L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L210)

```diff
-       b: () => AV,
+       L: () => tH,
+       P: () => bH,
+       c: () => OH,
```

#### 19. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L213-L219` → after: `L214-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L214-L219) · [Before (L213-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L213-L219)

```diff
-       h: () => GV,
-       l: () => BV,
-       m: () => TV,
-       o: () => qV,
-       s: () => FV,
-       u: () => XV,
-       w: () => MV
+       k: () => MH,
+       n: () => UH,
+       p: () => vH,
+       r: () => TH,
+       v: () => kH,
+       z: () => mH
```

#### 20. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L221)

```diff
-     var JV = xV(5288);
+     var AH = LH(5260);
```

#### 21. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L230)

```diff
-       UV = null !== VV && void 0 !== VV ? VV : YV
+       SH = null !== HH && void 0 !== HH ? HH : rH
```

#### 22. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L354)

```diff
-   42179: (VV, eV, xV) => {
+   42209: (HH, BH, LH) => {
```

#### 23. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L356)

```diff
-       c: () => JV
+       d: () => AH
```

#### 24. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L369)

```diff
-   5307: (VV, eV, xV) => {
+   5275: (HH, BH, LH) => {
```

#### 25. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L371-L373` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L371-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L371-L373)

```diff
-       c: () => QV,
-       d: () => UV,
-       e: () => pV
+       e: () => zH,
+       i: () => SH,
+       k: () => tH
```

#### 26. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L375-L376)

```diff
-     var JV = xV(2660),
-       YV = xV(5310);
+     var AH = LH(2600),
+       rH = LH(5279);
```

#### 27. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L394)

```diff
-       const eV = YV.e[255 & VV];
+       const BH = rH.c[255 & HH];
```

#### 28. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L406)

```diff
-   5310: (VV, eV, xV) => {
+   5279: (HH, BH, LH) => {
```

#### 29. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L408-L412` → after: `L408-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L408-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L408-L412) · [Before (L408-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L408-L412)

```diff
-       e: () => YV,
-       h: () => UV,
-       l: () => yV,
-       p: () => JV,
-       q: () => pV
+       c: () => rH,
+       f: () => SH,
+       i: () => hH,
+       j: () => AH,
+       k: () => tH
```

#### 30. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L684)

```diff
-   42210: (VV, eV, xV) => {
+   42240: (HH, BH, LH) => {
```

#### 31. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L688` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L687-L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L688)

```diff
-       f: () => QV
+       g: () => CH,
+       h: () => zH
```

#### 32. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L690-L692` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L690-L692) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L690-L692)

```diff
-     var JV = xV(5301),
-       YV = xV(2660),
-       UV = xV(5319);
+     var AH = LH(5268),
+       rH = LH(2600),
+       SH = LH(5288);
```

#### 33. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L708-L713` → after: `L708-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L708-L713) · [Before (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L708-L713)

```diff
-         case JV.T.MouseDown:
-         case JV.T.MouseUp:
-         case JV.T.TouchStart:
-         case JV.T.TouchEnd:
-         case JV.T.TouchCancel:
-         case JV.T.TouchButton:
+         case AH.M.MouseDown:
+         case AH.M.MouseUp:
+         case AH.M.TouchStart:
+         case AH.M.TouchEnd:
+         case AH.M.TouchCancel:
+         case AH.M.TouchButton:
```

#### 34. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L715-L717` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L715-L717) · [Before (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L715-L717)

```diff
-         case JV.T.KeyDown:
-         case JV.T.KeyUp:
-           return 0 === (eV & YV.e.Repeat) && !(0, UV.f)(document.activeElement);
+         case AH.M.KeyDown:
+         case AH.M.KeyUp:
+           return 0 === (BH & rH.e.Repeat) && !(0, SH.g)(document.activeElement);
```

#### 35. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L729)

```diff
-   5319: (VV, eV, xV) => {
+   5288: (HH, BH, LH) => {
```

#### 36. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L731-L733` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L731-L733) · [Before (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L731-L733)

```diff
-       c: () => pV,
-       f: () => yV,
-       h: () => nV
+       e: () => tH,
+       g: () => hH,
+       k: () => CH
```

#### 37. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L735-L736` → after: `L735-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L735-L736) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L735-L736)

```diff
-     var JV = xV(2660),
-       YV = xV(2663);
+     var AH = LH(2600),
+       rH = LH(2605);
```

#### 38. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L747)

```diff
-           YV !== eV && (eV = YV, VV(JV.i.UiCapture, JV.y.Keyboard, 0, 0, YV ? JV.y.Keyboard : 0))
+           rH !== BH && (BH = rH, HH(AH.g.UiCapture, AH.w.Keyboard, 0, 0, rH ? AH.w.Keyboard : 0))
```

#### 39. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L771)

```diff
-       QV.set(JV, (null !== (xV = QV.get(JV)) && void 0 !== xV ? xV : 0) & ~VV | eV & VV);
+       zH.set(AH, (null !== (LH = zH.get(AH)) && void 0 !== LH ? LH : 0) & ~HH | BH & HH);
```

#### 40. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L774)

```diff
-       return (0, YV.D)(VV, UV & VV)
+       return (0, rH.E)(HH, SH & HH)
```

#### 41. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L777)

```diff
-   42259: (VV, eV, xV) => {
+   37162: (HH, BH, LH) => {
```

#### 42. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L784)

```diff
-     var JV = xV(2066);
+     var AH = LH(2010);
```

#### 43. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L798)

```diff
-       YV = VV, UV++, (0, JV.d)();
+       rH = HH, SH++, (0, AH.e)();
```

#### 44. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L806)

```diff
-   42303: (VV, eV, xV) => {
+   42307: (HH, BH, LH) => {
```

#### 45. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L812)

```diff
-   42177: (VV, eV, xV) => {
+   42200: (HH, BH, LH) => {
```

#### 46. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L817-L819` → after: `L817-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L817-L819) · [Before (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L817-L819)

```diff
-       g: () => FV,
-       j: () => tV,
-       l: () => PV
+       h: () => TH,
+       l: () => PH,
+       o: () => VH
```

#### 47. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L821-L829` → after: `L821-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L821-L829) · [Before (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L821-L829)

```diff
-     var JV = xV(183),
-       YV = xV(27),
-       UV = xV(32),
-       yV = xV(3239),
-       pV = xV(1348),
-       QV = xV(35247),
-       nV = xV(330),
-       wV = xV(99),
-       ZV = xV(178);
+     var AH = LH(159),
+       rH = LH(15),
+       SH = LH(18),
+       hH = LH(3195),
+       tH = LH(1253),
+       zH = LH(34915),
+       CH = LH(280),
+       EH = LH(81),
+       XH = LH(157);
```

#### 48. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L833)

```diff
-       const eV = (0, yV.K)(),
+       const BH = (0, hH.O)(),
```

#### 49. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L837-L838)

```diff
-             n: (0, yV.A)(VV.pixelScale, eV),
-             pixelated: (0, yV.y)(VV.pixelSmoothing)
+             n: (0, hH.E)(HH.pixelScale, BH),
+             pixelated: (0, hH.B)(HH.pixelSmoothing)
```

#### 50. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L840-L841` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L840-L841) · [Before (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L840-L841)

```diff
-         }(YV.b.get("clientEscMenuOptions"), eV);
-       return xV.sampleCount > 1 && (0, QV.b)() && (xV.sampleCount = 1), xV.n = null !== (VV = (0, QV.m)()) && void 0 !== VV ? VV : xV.n, JV.j.includes((0, wV.getSoftwareRenderer)()) && (xV.sampleCount = 1, xV.n = Math.max(xV.n, (0, yV.A)(ZV.u.pixelScale, eV))), xV
+         }(rH.c.get("clientEscMenuOptions"), BH);
+       return LH.sampleCount > 1 && (0, zH.e)() && (LH.sampleCount = 1), LH.n = null !== (HH = (0, zH.n)()) && void 0 !== HH ? HH : LH.n, AH.k.includes((0, EH.getSoftwareRenderer)()) && (LH.sampleCount = 1, LH.n = Math.max(LH.n, (0, hH.E)(XH.o.pixelScale, BH))), LH
```

#### 51. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L855)

```diff
-         VV.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", VV.setAttribute("aria-hidden", "true"), document.body.append(VV), kV = VV, rV = new yV.c(VV, BV)
+         HH.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", HH.setAttribute("aria-hidden", "true"), document.body.append(HH), uH = HH, YH = new hH.b(HH, MH)
```

#### 52. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L861)

```diff
-       const eV = (0, yV.n)(),
+       const BH = (0, hH.q)(),
```

#### 53. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L868)

```diff
-       const UV = (0, yV.n)(),
+       const SH = (0, hH.q)(),
```

#### 54. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L872)

```diff
-       return (0, yV.g)(VV, wV), VV.style.left = `${null!==(eV=null===(xV=EV)||void 0===xV?void 0:xV.rect.left)&&void 0!==eV?eV:0}px`, VV.style.top = `${null!==(JV=null===(YV=EV)||void 0===YV?void 0:YV.rect.top)&&void 0!==JV?JV:0}px`, (0, pV.S)(VV.style, EV), wV
+       return (0, hH.f)(HH, EH), HH.style.left = `${null!==(BH=null===(LH=WH)||void 0===LH?void 0:LH.rect.left)&&void 0!==BH?BH:0}px`, HH.style.top = `${null!==(AH=null===(rH=WH)||void 0===rH?void 0:rH.rect.top)&&void 0!==AH?AH:0}px`, (0, tH.W)(HH.style, WH), EH
```

#### 55. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L880)

```diff
-       VV.style.imageRendering = (0, yV.M)(eV.pixelated)
+       HH.style.imageRendering = (0, hH.S)(BH.pixelated)
```

#### 56. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L884)

```diff
-       const xV = (0, UV.i)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const LH = (0, SH.m)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 57. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L887-L888` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L887-L888) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L887-L888)

```diff
-         JV = (0, QV.v)(eV),
-         YV = (0, nV.l)(eV);
+         AH = (0, zH.z)(BH),
+         rH = (0, CH.n)(BH);
```

#### 58. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L894)

```diff
-   42305: (VV, eV, xV) => {
+   42314: (HH, BH, LH) => {
```

#### 59. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L896-L898` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L896-L898) · [Before (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L896-L898)

```diff
-       e: () => yV,
-       h: () => UV,
-       k: () => YV
+       b: () => hH,
+       c: () => SH,
+       f: () => rH
```

#### 60. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L915)

```diff
-   42252: (VV, eV, xV) => {
+   42271: (HH, BH, LH) => {
```

#### 61. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L919-L922` → after: `L921-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L921-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L921-L922) · [Before (L919-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L919-L922)

```diff
-       j: () => UV,
-       l: () => ZV,
-       m: () => wV,
-       q: () => vV
+       i: () => EH,
+       k: () => GH
```

#### 62. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L924)

```diff
-     var JV = xV(3196);
+     var AH = LH(3171);
```

#### 63. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L927)

```diff
-         super(`${"fetch"===VV?"fetching":"decoding"} ${eV} failed`, xV), this.stage = VV, this.source = eV, this.name = "ShellImageError"
+         super(`${"fetch"===HH?"fetching":"decoding"} ${BH} failed`, LH), this.stage = HH, this.source = BH, this.name = "ShellImageError"
```

#### 64. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L931)

```diff
-       let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.H,
+       let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.M,
```

#### 65. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L950)

```diff
-         throw new YV("decode", "string" === typeof VV ? VV : `${eV.byteLength} bytes`, {
+         throw new rH("decode", "string" === typeof HH ? HH : `${BH.byteLength} bytes`, {
```

#### 66. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L961)

```diff
-         for (const [eV, xV] of pV) VV.tYV(eV, xV);
+         for (const [BH, LH] of tH) HH.trH(BH, LH);
```

#### 67. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L968)

```diff
-       return yV ? yV.tYV(eV, VV) : pV.set(eV, VV), eV
+       return hH ? hH.trH(BH, HH) : tH.set(BH, HH), BH
```

#### 68. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L983)

```diff
-       null === (eV = yV) || void 0 === eV || eV.FYV(VV)
+       null === (BH = hH) || void 0 === BH || BH.zrH(HH)
```

#### 69. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L986)

```diff
-   42184: (VV, eV, xV) => {
+   42216: (HH, BH, LH) => {
```

#### 70. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L992)

```diff
-       d: () => JV
+       e: () => AH
```

#### 71. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L995)

```diff
-   42192: (VV, eV, xV) => {
+   42222: (HH, BH, LH) => {
```

#### 72. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/101.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/101.js#L997)

```diff
-       e: () => YV
+       c: () => rH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/102.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/102.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4)

#### 1. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L4)

```diff
-   41821: (VV, eV, xV) => {
+   41856: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L8-L23` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L8-L23) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L8-L23)

```diff
-     xV(41825);
-     var JV = xV(41827),
-       YV = xV(41841),
-       UV = xV(2080),
-       yV = xV(41852),
-       pV = xV(5301),
-       QV = xV(5281),
-       nV = xV(41856),
-       wV = xV(41861),
-       ZV = xV(5310),
-       vV = xV(41942),
-       rV = xV(2663),
-       kV = xV(9462),
-       bV = xV(41831),
-       EV = xV(9435),
-       BV = xV(40310);
+     LH(41860);
+     var AH = LH(41864),
+       rH = LH(41884),
+       SH = LH(2036),
+       hH = LH(41898),
+       tH = LH(5268),
+       zH = LH(5255),
+       CH = LH(41905),
+       EH = LH(41911),
+       XH = LH(5279),
+       GH = LH(41985),
+       YH = LH(2605),
+       uH = LH(9543),
+       QH = LH(41871),
+       WH = LH(9522),
+       MH = LH(40035);
```

#### 3. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L25-L26` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L25-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L25-L26)

```diff
-         const eV = ZV.e.indexOf(VV);
-         if (eV < 0) throw new Error(`No core action "${VV}"`);
+         const BH = XH.c.indexOf(HH);
+         if (BH < 0) throw new Error(`No core action "${HH}"`);
```

#### 4. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L41)

```diff
-         (0, rV.v)(pV.T.PadAction, VV, 0, 0, (0, rV.s)(eV, performance.now()))
+         (0, YH.w)(tH.M.PadAction, HH, 0, 0, (0, YH.u)(BH, performance.now()))
```

#### 5. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L44)

```diff
-         MV(VV, yV.td.Down)
+         mH(HH, hH.xd.Down)
```

#### 6. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L53-L57` → after: `L53-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L53-L57) · [Before (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L53-L57)

```diff
-         const VV = (0, wV.k)();
-         return null !== VV && void 0 !== VV && VV.isCoreRunning ? VV : null
-       },
-       gV = VV => yV.s.playerFlags(VV.api.apiView, 0),
-       DV = VV => null !== VV && yV.s.targetBlockId(VV.api.apiView, 0) !== yV.Yc,
+         const HH = (0, EH.i)();
+         return null !== HH && void 0 !== HH && HH.isCoreRunning ? HH : null
+       },
+       KH = HH => hH.y.playerFlags(HH.api.apiView, 0),
+       cH = HH => null !== HH && hH.y.targetBlockId(HH.api.apiView, 0) !== hH.cd,
```

#### 7. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L59-L60)

```diff
-         const VV = (0, kV.c)(),
-           eV = new bV.e;
+         const HH = (0, uH.d)(),
+           BH = new QH.b;
```

#### 8. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L63)

```diff
-             (0, rV.v)(pV.T.PadLook, yV.Dd.Rate, VV, eV, 0)
+             (0, YH.w)(tH.M.PadLook, hH.Hd.Rate, HH, BH, 0)
```

#### 9. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L74)

```diff
-             0 === wV.uR && 0 === wV.eD || (0, rV.v)(pV.T.PadLook, yV.Dd.Gyro, wV.uR, wV.eD, 0)
+             0 === EH.lq && 0 === EH.Fq || (0, YH.w)(tH.M.PadLook, hH.Hd.Gyro, EH.lq, EH.Fq, 0)
```

#### 10. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L82)

```diff
-         return null !== VV && 0 !== (gV(VV) & yV.Ld.PadSneakToggled)
+         return null !== HH && 0 !== (KH(HH) & hH.Md.PadSneakToggled)
```

#### 11. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L90)

```diff
-             primaryFireDown: eV((VV => (MV(qV, yV.td.Down | (VV ? yV.td.Repeat : 0)), 0))),
+             primaryFireDown: BH((HH => (mH(vH, hH.xd.Down | (HH ? hH.xd.Repeat : 0)), 0))),
```

#### 12. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L111)

```diff
-               MV(yV.vd.Drop, yV.td.Down | (VV ? yV.td.Stack : 0))
+               mH(hH.Ad.Drop, hH.xd.Down | (HH ? hH.xd.Stack : 0))
```

#### 13. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L136)

```diff
-                 bits: yV.zd.Peek,
+                 bits: hH.Ed.Peek,
```

#### 14. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L139)

```diff
-               const eV = VV.sneakHeld ? yV.zd.SneakHeld : 0;
+               const BH = HH.sneakHeld ? hH.Ed.SneakHeld : 0;
```

#### 15. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L141)

```diff
-                 bits: eV | yV.zd.SneakHoldMode,
+                 bits: BH | hH.Ed.SneakHoldMode,
```

#### 16. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L148)

```diff
-             null !== (YV = RV()) && void 0 !== YV && YV.padMove(VV.x, VV.y, VV.magnitude, VV.headingOffset, (VV => yV.zd.Active | (VV.jumpHeld ? yV.zd.JumpHeld : 0) | (VV.jumpPressed ? yV.zd.JumpPressed : 0) | (VV.running ? yV.zd.Running : 0) | (VV.sprintHeld ? yV.zd.SprintHeld : … [truncated]
+             null !== (rH = lH()) && void 0 !== rH && rH.padMove(HH.x, HH.y, HH.magnitude, HH.headingOffset, (HH => hH.Ed.Active | (HH.jumpHeld ? hH.Ed.JumpHeld : 0) | (HH.jumpPressed ? hH.Ed.JumpPressed : 0) | (HH.running ? hH.Ed.Running : 0) | (HH.sprintHeld ? hH.Ed.SprintHeld : … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L152)

```diff
-             eV && (eV = !(null !== (VV = RV()) && void 0 !== VV && VV.padMove(0, 0, 0, 0, 0, 0)), JV(), xV = (0, QV.u)((() => {
+             BH && (BH = !(null !== (HH = lH()) && void 0 !== HH && HH.padMove(0, 0, 0, 0, 0, 0)), AH(), LH = (0, zH.v)((() => {
```

#### 18. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L159)

```diff
-             "touch" === VV ? ((0, EV.h)(!1), null !== (xV = RV()) && void 0 !== xV && xV.padMove(0, 0, 0, 0, yV.zd.EndToggle, 0) && (eV = !1)) : "gamepad" === VV && (0, EV.h)(CV())
+             "touch" === HH ? ((0, WH.h)(!1), null !== (LH = lH()) && void 0 !== LH && LH.padMove(0, 0, 0, 0, hH.Ed.EndToggle, 0) && (BH = !1)) : "gamepad" === HH && (0, WH.h)(qH())
```

#### 19. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L168)

```diff
-             return null !== VV && 0 !== (gV(VV) & yV.Ld.Replay)
+             return null !== HH && 0 !== (KH(HH) & hH.Md.Replay)
```

#### 20. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L172)

```diff
-             return null !== VV && 0 !== (gV(VV) & yV.Ld.FreeCam)
+             return null !== HH && 0 !== (KH(HH) & hH.Md.FreeCam)
```

#### 21. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L177-L179` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L177-L179) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L177-L179)

```diff
-             return !(null !== (VV = RV()) && void 0 !== VV && VV.items.hn())
-           },
-           pickBlockAllowed: () => !!UV.c.get("creative") && !!UV.c.get("canPickBlocks"),
+             return !(null !== (HH = lH()) && void 0 !== HH && HH.items.LX())
+           },
+           pickBlockAllowed: () => !!SH.e.get("creative") && !!SH.e.get("canPickBlocks"),
```

#### 22. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L181-L186` → after: `L181-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L181-L186) · [Before (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L181-L186)

```diff
-             MV(yV.vd.Hotbar, yV.td.Down | (VV > 0 ? yV.td.Next : 0))
-           },
-           hasFullInventory: nV.j,
-           hasLobbyTab: () => (0, BV.c)({
-             lobbyLeaderboardInfo: UV.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: UV.c.get("lobbyManage")
+             mH(hH.Ad.Hotbar, hH.xd.Down | (HH > 0 ? hH.xd.Next : 0))
+           },
+           hasFullInventory: CH.m,
+           hasLobbyTab: () => (0, MH.e)({
+             lobbyLeaderboardInfo: SH.e.get("lobbyLeaderboardInfo"),
+             lobbyManage: SH.e.get("lobbyManage")
```

#### 23. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L192-L194` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L192-L194) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L192-L194)

```diff
-               holdingGun: !1 !== (null === YV || void 0 === YV ? void 0 : YV.localPlayerAlive()) && "Gun" === (null === YV || void 0 === YV || null === (VV = YV.items.hn()) || void 0 === VV || null === (eV = VV.typeObj) || void 0 === eV ? void 0 : eV.type),
-               customButtons: null !== (xV = UV.c.get("customButtons")) && void 0 !== xV ? xV : null,
-               touchscreenActionButton: null !== (JV = UV.c.get("touchscreenActionButton")) && void 0 !== JV ? JV : null
+               holdingGun: !1 !== (null === rH || void 0 === rH ? void 0 : rH.localPlayerAlive()) && "Gun" === (null === rH || void 0 === rH || null === (HH = rH.items.LX()) || void 0 === HH || null === (BH = HH.typeObj) || void 0 === BH ? void 0 : BH.type),
+               customButtons: null !== (LH = SH.e.get("customButtons")) && void 0 !== LH ? LH : null,
+               touchscreenActionButton: null !== (AH = SH.e.get("touchscreenActionButton")) && void 0 !== AH ? AH : null
```

#### 24. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L203-L204` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L203-L204) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L203-L204)

```diff
-         const VV = (0, YV.b)(aV()),
-           eV = (0, JV.b)(),
+         const HH = (0, rH.d)(gH()),
+           BH = (0, AH.e)(),
```

#### 25. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L211)

```diff
-   5281: (VV, eV, xV) => {
+   5255: (HH, BH, LH) => {
```

#### 26. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L213-L216` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L213-L214) · [Before (L213-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L213-L216)

```diff
-       A: () => zV,
-       C: () => jV,
-       E: () => yV,
-       G: () => pV,
+       D: () => oH,
+       F: () => xH,
```

#### 27. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L218` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L216-L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L218)

```diff
-       b: () => AV,
+       L: () => tH,
+       P: () => bH,
+       c: () => OH,
```

#### 28. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L221-L227` → after: `L222-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L222-L227) · [Before (L221-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L221-L227)

```diff
-       h: () => GV,
-       l: () => BV,
-       m: () => TV,
-       o: () => qV,
-       s: () => FV,
-       u: () => XV,
-       w: () => MV
+       k: () => MH,
+       n: () => UH,
+       p: () => vH,
+       r: () => TH,
+       v: () => kH,
+       z: () => mH
```

#### 29. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L229)

```diff
-     var JV = xV(5288);
+     var AH = LH(5260);
```

#### 30. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L238)

```diff
-       UV = null !== VV && void 0 !== VV ? VV : YV
+       SH = null !== HH && void 0 !== HH ? HH : rH
```

#### 31. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L362)

```diff
-   5310: (VV, eV, xV) => {
+   5279: (HH, BH, LH) => {
```

#### 32. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L364-L368` → after: `L364-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L364-L368) · [Before (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L364-L368)

```diff
-       e: () => YV,
-       h: () => UV,
-       l: () => yV,
-       p: () => JV,
-       q: () => pV
+       c: () => rH,
+       f: () => SH,
+       i: () => hH,
+       j: () => AH,
+       k: () => tH
```

#### 33. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L640)

```diff
-   41942: (VV, eV, xV) => {
+   41985: (HH, BH, LH) => {
```

#### 34. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L643-L644` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L643-L644) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L643-L644)

```diff
-       g: () => UV,
-       h: () => YV
+       d: () => SH,
+       g: () => rH
```

#### 35. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L661)

```diff
-   5319: (VV, eV, xV) => {
+   5288: (HH, BH, LH) => {
```

#### 36. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L663-L665` → after: `L663-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L663-L665) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L663-L665)

```diff
-       c: () => pV,
-       f: () => yV,
-       h: () => nV
+       e: () => tH,
+       g: () => hH,
+       k: () => CH
```

#### 37. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L667-L668` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L667-L668) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L667-L668)

```diff
-     var JV = xV(2660),
-       YV = xV(2663);
+     var AH = LH(2600),
+       rH = LH(2605);
```

#### 38. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L679)

```diff
-           YV !== eV && (eV = YV, VV(JV.i.UiCapture, JV.y.Keyboard, 0, 0, YV ? JV.y.Keyboard : 0))
+           rH !== BH && (BH = rH, HH(AH.g.UiCapture, AH.w.Keyboard, 0, 0, rH ? AH.w.Keyboard : 0))
```

#### 39. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L703)

```diff
-       QV.set(JV, (null !== (xV = QV.get(JV)) && void 0 !== xV ? xV : 0) & ~VV | eV & VV);
+       zH.set(AH, (null !== (LH = zH.get(AH)) && void 0 !== LH ? LH : 0) & ~HH | BH & HH);
```

#### 40. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L706)

```diff
-       return (0, YV.D)(VV, UV & VV)
+       return (0, rH.E)(HH, SH & HH)
```

#### 41. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L709)

```diff
-   38114: (VV, eV, xV) => {
+   37798: (HH, BH, LH) => {
```

#### 42. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L727-L729` → after: `L727-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L727-L729) · [Before (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L727-L729)

```diff
-       e: () => JV,
-       f: () => UV,
-       j: () => YV
+       h: () => AH,
+       l: () => SH,
+       m: () => rH
```

#### 43. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L732)

```diff
-   38112: (VV, eV, xV) => {
+   37793: (HH, BH, LH) => {
```

#### 44. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L734` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L734) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L734)

```diff
-       b: () => nV
+       d: () => CH
```

#### 45. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L736-L737` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L736-L737) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L736-L737)

```diff
-     var JV = xV(38114),
-       YV = xV(9820);
+     var AH = LH(37798),
+       rH = LH(9940);
```

#### 46. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L742)

```diff
-     for (const wV of Object.keys(YV.p))(0, JV.e)(wV) ? UV.push(wV) : (0, JV.j)(wV) && yV.push(wV), (0, JV.f)(wV) && pV.push(wV), (wV.includes(" Bed Head") || wV.includes(" Strongbed Head")) && QV.push(wV);
+     for (const EH of Object.keys(rH.l))(0, AH.h)(EH) ? SH.push(EH) : (0, AH.m)(EH) && hH.push(EH), (0, AH.l)(EH) && tH.push(EH), (EH.includes(" Bed Head") || EH.includes(" Strongbed Head")) && zH.push(EH);
```

#### 47. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L752)

```diff
-   7024: (VV, eV, xV) => {
+   7007: (HH, BH, LH) => {
```

#### 48. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L756-L757` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L758) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L756-L757)

```diff
-       j: () => QV,
-       n: () => UV,
+       m: () => CH,
```

#### 49. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L759-L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/102.js#L760) · [Before (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/102.js#L759-L760)

```diff
-       q: () => JV,
-       s: () => pV
+       p: () => tH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L2)

```diff
- export const ids = [103];
+ export const ids = [103, 104];
```

#### 2. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L4)

```diff
-   5301: (VV, eV, xV) => {
+   5268: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7-L8` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L8-L10) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L7-L8)

```diff
-       B: () => uV,
-       Bb: () => KV,
+       A: () => UH,
+       Ab: () => ZH,
+       C: () => hH,
```

#### 4. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L10` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L12-L13) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L10)

```diff
-       E: () => PV,
+       Eb: () => jH,
+       Fb: () => eH,
```

#### 5. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14-L15` → after: `L17-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L17-L18) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L14-L15)

```diff
-       Ib: () => iV,
-       K: () => pV,
+       I: () => SH,
+       Kb: () => qH,
```

#### 6. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L17-L18` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L20-L21) · [Before (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L17-L18)

```diff
-       N: () => JV,
-       Pb: () => CV,
+       M: () => PH,
+       Ob: () => oH,
```

#### 7. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L23) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L20)

```diff
-       Rb: () => EV,
+       Qb: () => mH,
```

#### 8. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22-L24` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L25-L27) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L22-L24)

```diff
-       Vb: () => zV,
-       W: () => dV,
-       Wb: () => MV,
+       Tb: () => gH,
+       V: () => GH,
+       Xb: () => wH,
```

#### 9. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30-L31` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L30-L32) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L30-L31)

```diff
-       cb: () => nV,
-       cc: () => lV,
+       bc: () => FH,
+       c: () => xH,
+       d: () => MH,
```

#### 10. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L35)

```diff
-       fc: () => NV,
+       fb: () => zH,
```

#### 11. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L38-L39` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L38-L39) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L38-L39)

```diff
-       i: () => BV,
-       ib: () => bV,
+       h: () => JH,
+       hb: () => uH,
```

#### 12. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L42-L44` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L44-L46) · [Before (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L42-L44)

```diff
-       m: () => SV,
-       mb: () => kV,
-       mc: () => IV,
+       nc: () => iH,
+       p: () => sH,
+       pb: () => lH,
```

#### 13. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L52-L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L53) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L52-L53)

```diff
-       y: () => AV,
-       zb: () => DV
+       z: () => VH
```

#### 14. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L581` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L582) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L581)

```diff
-   5297: (VV, eV, xV) => {
+   5265: (HH, BH, LH) => {
```

#### 15. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L583-L591` → after: `L584-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L584-L590) · [Before (L583-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L583-L591)

```diff
-       $b: () => oV,
-       $c: () => JV.Pb,
-       Ae: () => je,
-       B: () => ke,
-       Bb: () => pe,
-       Bc: () => JV.qb,
-       Bd: () => JV.lc,
-       Be: () => kV,
-       Cd: () => UV,
+       $: () => AH.G,
+       $c: () => AH.Qb,
+       Ab: () => AH.T,
+       Ad: () => EB,
+       Bd: () => jH,
+       C: () => QB,
+       Cb: () => LB,
```

#### 16. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L593-L595` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L592-L594) · [Before (L593-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L593-L595)

```diff
-       E: () => yV,
-       Fb: () => wV,
-       Fc: () => JV.rb,
+       Dc: () => AH.Eb,
+       Ed: () => FH,
+       F: () => AH.p,
```

#### 17. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L597-L602` → after: `L596-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L596-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L596-L600) · [Before (L597-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L597-L602)

```diff
-       G: () => gV,
-       Gb: () => JV.T,
-       Gc: () => JV.tb,
-       H: () => be,
-       Id: () => we,
-       Jb: () => mV,
+       Gb: () => rB,
+       Hc: () => WB,
+       Ic: () => GB,
+       J: () => CH,
+       Jc: () => hB,
```

#### 18. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L604-L608` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L602) · [Before (L604-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L604-L608)

```diff
-       Kc: () => JV.wb,
-       Kd: () => LV,
-       L: () => dV,
-       Lb: () => ee,
-       Lc: () => JV.zb,
+       Kb: () => AH.V,
```

#### 19. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L610-L621` → after: `L604-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L604-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L604-L616) · [Before (L610-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L610-L621)

```diff
-       M: () => JV.s,
-       Mb: () => IV,
-       Mc: () => JV.Hb,
-       Nd: () => KV,
-       Ob: () => JV.Y,
-       Pb: () => xe,
-       Q: () => nV,
-       Qc: () => Ee,
-       Rb: () => Ye,
-       Tb: () => JV.Z,
-       U: () => JV.v,
-       Uc: () => ve,
+       Mc: () => AH.Fb,
+       N: () => AH.q,
+       Nb: () => rH.e,
+       P: () => HB,
+       Pd: () => aH,
+       Qb: () => bH,
+       Qc: () => AH.Hb,
+       R: () => AH.s,
+       Rd: () => dH,
+       Sc: () => AH.Kb,
+       Tb: () => NH,
+       U: () => JH,
+       Vb: () => fH,
```

#### 20. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L624-L628` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L619) · [Before (L624-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L624-L628)

```diff
-       Wb: () => YV.e,
-       Xd: () => uV,
-       Y: () => Ve,
-       Yc: () => JV.Ib,
-       Yd: () => HV,
+       X: () => AH.A,
```

#### 21. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L630-L636` → after: `L621-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L621-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L621-L630) · [Before (L630-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L630-L636)

```diff
-       _c: () => JV.Lb,
-       _d: () => ne,
-       ab: () => JV.y,
-       ac: () => WV,
-       bd: () => OV,
-       be: () => Be,
-       db: () => SV,
+       Zc: () => AH.Ob,
+       Zd: () => MB,
+       _: () => AH.C,
+       _b: () => AH.db,
+       ae: () => TH,
+       bc: () => lH,
+       c: () => AB,
+       cb: () => XH,
+       cc: () => UH,
+       cd: () => AH.Tb,
```

#### 22. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L639-L642` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L633-L635) · [Before (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L639-L642)

```diff
-       ed: () => JV.Vb,
-       fc: () => JV.db,
-       fd: () => JV.Wb,
-       fe: () => FV,
+       ed: () => AH.$b,
+       ee: () => sH,
+       gb: () => vH,
```

#### 23. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L644-L647` → after: `L637-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L637-L640) · [Before (L644-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L644-L647)

```diff
-       hb: () => JV.G,
-       hd: () => JV._b,
-       i: () => EV,
-       ib: () => JV.H,
+       gd: () => AH.ac,
+       h: () => QH,
+       hd: () => AH.bc,
+       he: () => qH,
```

#### 24. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L649-L650` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L642-L643) · [Before (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L649-L650)

```diff
-       je: () => sV,
-       k: () => bV,
+       jd: () => GH,
+       kb: () => AH.H,
```

#### 25. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L652-L653` → after: `L645-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L645-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L645-L649) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L652-L653)

```diff
-       ld: () => JV.ac,
-       mb: () => JV.K,
+       lb: () => AH.I,
+       le: () => eH,
+       mc: () => rH.i,
+       me: () => cH,
+       n: () => kH,
```

#### 26. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L655-L658` → after: `L651-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L651-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L651-L654) · [Before (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L655-L658)

```diff
-       ne: () => CV,
-       od: () => JV.cc,
-       oe: () => iV,
-       p: () => XV,
+       nd: () => mH,
+       o: () => OH,
+       ob: () => nH,
+       pb: () => tB,
```

#### 27. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L660-L664` → after: `L656-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L656-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L656-L661) · [Before (L660-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L660-L664)

```diff
-       qb: () => ZV,
-       qd: () => JV.ec,
-       re: () => DV,
-       sc: () => re,
-       sd: () => vV,
+       pd: () => AH.ec,
+       qc: () => AH.lb,
+       qd: () => AH.gc,
+       qe: () => zH,
+       r: () => AH.h,
+       sb: () => EH,
```

#### 28. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L666-L675` → after: `L663-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L663-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L663-L674) · [Before (L666-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L666-L675)

```diff
-       tb: () => qV,
-       tc: () => YV.k,
-       td: () => MV,
-       vb: () => JV.N,
-       vc: () => jV,
-       ve: () => QV,
-       wd: () => JV.fc,
-       x: () => JV.m,
-       xb: () => JV.Q,
-       xd: () => JV.gc,
+       tb: () => AH.M,
+       td: () => AH.lc,
+       te: () => gH,
+       ub: () => wH,
+       uc: () => AH.pb,
+       ue: () => xB,
+       vc: () => AH.tb,
+       w: () => IH,
+       wc: () => AH.ub,
+       wd: () => SH,
+       we: () => uH,
+       y: () => hH,
```

#### 29. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L677-L678` → after: `L676-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L676-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L676-L679) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L677-L678)

```diff
-       yc: () => Ue,
-       ze: () => aV
+       z: () => KH,
+       zb: () => iH,
+       zc: () => AH.wb,
+       zd: () => MH
```

#### 30. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L680-L681` → after: `L681-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L681-L682) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L680-L681)

```diff
-     var JV = xV(5301),
-       YV = xV(2660);
+     var AH = LH(5268),
+       rH = LH(2600);
```

#### 31. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L931` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L932) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L931)

```diff
-       for (const [eV, xV] of Object.entries(JV.s))
+       for (const [BH, LH] of Object.entries(AH.p))
```

#### 32. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L933` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L934) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L933)

```diff
-       return `Unknown${VV}`
+       return `Unknown${HH}`
```

#### 33. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L938-L946` → after: `L939-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L939-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L939-L947) · [Before (L938-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L938-L946)

```diff
-         status: VV[JV.Q.Status],
-         lastError: VV[JV.Q.LastError],
-         lastErrorDetail: VV[JV.Q.LastErrorDetail],
-         errorCount: VV[JV.Q.ErrorCount],
-         frameIndex: VV[JV.Q.FrameIndex],
-         tickIndex: VV[JV.Q.TickIndex],
-         renderPending: VV[JV.Q.RenderPending],
-         firstView: VV[JV.Q.FirstView],
-         chunksCancelled: VV[JV.Q.ChunksCancelled]
+         status: HH[AH.I.Status],
+         lastError: HH[AH.I.LastError],
+         lastErrorDetail: HH[AH.I.LastErrorDetail],
+         errorCount: HH[AH.I.ErrorCount],
+         frameIndex: HH[AH.I.FrameIndex],
+         tickIndex: HH[AH.I.TickIndex],
+         renderPending: HH[AH.I.RenderPending],
+         firstView: HH[AH.I.FirstView],
+         chunksCancelled: HH[AH.I.ChunksCancelled]
```

#### 34. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L950` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L951) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L950)

```diff
-   5288: (VV, eV, xV) => {
+   5260: (HH, BH, LH) => {
```

#### 35. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L956` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L957) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L956)

```diff
-     var JV = xV(5297);
+     var AH = LH(5265);
```

#### 36. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L965` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L966) · [Before (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L965)

```diff
-         case JV.mb.Drawn:
+         case AH.$.Drawn:
```

#### 37. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L967` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/103.js#L968) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/103.js#L967)

```diff
-         case JV.mb.Paced:
+         case AH.$.Paced:
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/104.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/104.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9)

#### 1. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L4)

```diff
-   37521: (VV, eV, xV) => {
+   5268: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L6-L363` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L6) · [Before (L6-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L6-L363)

```diff
-       e: () => wV,
-       h: () => pV,
-       i: () => nV,
-       j: () => QV,
-       k: () => qV
-     });
-     var JV = xV(660),
-       YV = xV(1846),
-       UV = xV(5301);
-     class yV {
-       constructor(VV, eV) {
-         this.width = VV, this.Jv = eV, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(VV * eV)
-       }
-       push(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const xV = this.data,
- ... (342 more removed lines; see GitHub link above)
+       $: () => CH,
```

#### 3. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L365-L366` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L8-L10) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L365-L366)

```diff
-       B: () => uV,
-       Bb: () => KV,
+       A: () => UH,
+       Ab: () => ZH,
+       C: () => hH,
```

#### 4. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L368` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L12-L13) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L368)

```diff
-       E: () => PV,
+       Eb: () => jH,
+       Fb: () => eH,
```

#### 5. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L372-L373` → after: `L17-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L17-L18) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L372-L373)

```diff
-       Ib: () => iV,
-       K: () => pV,
+       I: () => SH,
+       Kb: () => qH,
```

#### 6. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L375-L376` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L20-L21) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L375-L376)

```diff
-       N: () => JV,
-       Pb: () => CV,
+       M: () => PH,
+       Ob: () => oH,
```

#### 7. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L378` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L23) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L378)

```diff
-       Rb: () => EV,
+       Qb: () => mH,
```

#### 8. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L380-L382` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L25-L27) · [Before (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L380-L382)

```diff
-       Vb: () => zV,
-       W: () => dV,
-       Wb: () => MV,
+       Tb: () => gH,
+       V: () => GH,
+       Xb: () => wH,
```

#### 9. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L388-L389` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L30-L32) · [Before (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L388-L389)

```diff
-       cb: () => nV,
-       cc: () => lV,
+       bc: () => FH,
+       c: () => xH,
+       d: () => MH,
```

#### 10. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L393` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L35) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L393)

```diff
-       fc: () => NV,
+       fb: () => zH,
```

#### 11. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L396-L397` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L38-L39) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L396-L397)

```diff
-       i: () => BV,
-       ib: () => bV,
+       h: () => JH,
+       hb: () => uH,
```

#### 12. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L400-L402` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L44-L46) · [Before (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L400-L402)

```diff
-       m: () => SV,
-       mb: () => kV,
-       mc: () => IV,
+       nc: () => iH,
+       p: () => sH,
+       pb: () => lH,
```

#### 13. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L410-L411` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/104.js#L53) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/104.js#L410-L411)

```diff
-       y: () => AV,
-       zb: () => DV
+       z: () => VH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/105.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/105.js` (960 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8)

#### 1. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L4)

```diff
-   44373: (VV, eV, xV) => {
+   44970: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L12)

```diff
-       }] = await Promise.all([Promise.resolve().then((() => xV(1230))), Promise.resolve().then((() => xV(1173))), Promise.resolve().then((() => xV(2051)))]), yV = UV.latest("connectedGame").websocketUrl;
+       }] = await Promise.all([Promise.resolve().then((() => LH(1131))), Promise.resolve().then((() => LH(1070))), Promise.resolve().then((() => LH(1998)))]), hH = SH.latest("connectedGame").websocketUrl;
```

#### 3. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L14)

```diff
-       const pV = `${JV.getHttpUrlFromWebSocketUrl(yV)}${VV}`;
+       const tH = `${AH.getHttpUrlFromWebSocketUrl(hH)}${HH}`;
```

#### 4. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L23)

```diff
-   7101: (VV, eV, xV) => {
+   7088: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L25)

```diff
-       d: () => YV
+       e: () => rH
```

#### 6. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L27)

```diff
-     var JV = xV(1321);
+     var AH = LH(1225);
```

#### 7. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L46)

```diff
-   44370: (VV, eV, xV) => {
+   44965: (HH, BH, LH) => {
```

#### 8. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L51-L52)

```diff
-     var JV = xV(62),
-       YV = xV(1146),
+     var AH = LH(45),
+       rH = LH(1038),
```

#### 9. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L54)

```diff
-       yV = xV(1321);
+       hH = LH(1225);
```

#### 10. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L67)

```diff
-       const [vV, rV] = (0, JV.useState)(QV), kV = null !== nV && void 0 !== nV ? nV : vV;
+       const [GH, YH] = (0, AH.useState)(zH), uH = null !== CH && void 0 !== CH ? CH : GH;
```

#### 11. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L87-L98` → after: `L87-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L87-L98) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L87-L98)

```diff
-     var QV = xV(2051),
-       nV = xV(7054),
-       wV = xV(1551),
-       ZV = xV(38076),
-       vV = xV(1414),
-       rV = xV(5246),
-       kV = xV(38063),
-       bV = xV(38093),
-       EV = xV(1682),
-       BV = xV(5323),
-       jV = xV(7039);
-     const qV = new URL(EV.d).host;
+     var zH = LH(1998),
+       CH = LH(7029),
+       EH = LH(1455),
+       XH = LH(37756),
+       GH = LH(1315),
+       YH = LH(5220),
+       uH = LH(37741),
+       QH = LH(37774),
+       WH = LH(1603),
+       MH = LH(5296),
+       xH = LH(7017);
+     const vH = new URL(WH.c).host;
```

#### 12. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L104-L106)

```diff
-         const VV = /^docs\//i.test(eV) ? `${EV.d}/` : `${EV.d}/docs/`,
-           JV = eV.toLowerCase().replace(/^www\./, "").startsWith(`${qV}/`);
-         xV = new URL(JV ? `https://${eV}` : eV, VV)
+         const HH = /^docs\//i.test(BH) ? `${WH.c}/` : `${WH.c}/docs/`,
+           AH = BH.toLowerCase().replace(/^www\./, "").startsWith(`${vH}/`);
+         LH = new URL(AH ? `https://${BH}` : BH, HH)
```

#### 13. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L110)

```diff
-       if ("https:" !== xV.protocol && "http:" !== xV.protocol || xV.host !== qV && xV.host !== `www.${qV}`) return null;
+       if ("https:" !== LH.protocol && "http:" !== LH.protocol || LH.host !== vH && LH.host !== `www.${vH}`) return null;
```

#### 14. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L112)

```diff
-       return FV(JV) || null !== (0, BV.C)(JV) ? JV : (0, BV.z)(JV)
+       return TH(AH) || null !== (0, MH.A)(AH) ? AH : (0, MH.x)(AH)
```

#### 15. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L116)

```diff
-       return VV === BV.i || VV === BV.p
+       return HH === MH.h || HH === MH.n
```

#### 16. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L121)

```diff
-       return null === eV ? VV : `${EV.d}${eV}`
+       return null === BH ? HH : `${WH.c}${BH}`
```

#### 17. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L123-L124)

```diff
-     var PV = xV(220),
-       AV = xV(44314),
+     var VH = LH(186),
+       OH = LH(44904),
```

#### 18. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L191)

```diff
-         const xV = /\w/.test(eV[0]) && /\w/.test(null !== (QV = VV[pV - 1]) && void 0 !== QV ? QV : "") || /\w/.test(null !== (nV = eV.at(-1)) && void 0 !== nV ? nV : "") && /\w/.test(null !== (wV = VV[pV + eV.length]) && void 0 !== wV ? wV : "");
+         const LH = /\w/.test(BH[0]) && /\w/.test(null !== (zH = HH[tH - 1]) && void 0 !== zH ? zH : "") || /\w/.test(null !== (CH = BH.at(-1)) && void 0 !== CH ? CH : "") && /\w/.test(null !== (EH = HH[tH + BH.length]) && void 0 !== EH ? EH : "");
```

#### 19. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L209)

```diff
-       return null !== (eV = null === (xV = /^[ \t]*/.exec(VV)) || void 0 === xV ? void 0 : xV[0]) && void 0 !== eV ? eV : ""
+       return null !== (BH = null === (LH = /^[ \t]*/.exec(HH)) || void 0 === LH ? void 0 : LH[0]) && void 0 !== BH ? BH : ""
```

#### 20. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L228)

```diff
-         return (null !== (xV = null === (JV = VV.replace(/\\`/g, "").match(/`/g)) || void 0 === JV ? void 0 : JV.length) && void 0 !== xV ? xV : 0) % 2 === 1 && (ZV = !ZV), YV || QV && eV !== wV ? VV : function(VV, eV, xV) {
+         return (null !== (LH = null === (AH = HH.replace(/\\`/g, "").match(/`/g)) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0) % 2 === 1 && (XH = !XH), rH || zH && BH !== EH ? HH : function(HH, BH, LH) {
```

#### 21. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L249)

```diff
-         (null !== (yV = null === (pV = VV.replace(/\\`/g, "").match(/`/g)) || void 0 === pV ? void 0 : pV.length) && void 0 !== yV ? yV : 0) % 2 === 1 && (UV = !UV);
+         (null !== (hH = null === (tH = HH.replace(/\\`/g, "").match(/`/g)) || void 0 === tH ? void 0 : tH.length) && void 0 !== hH ? hH : 0) % 2 === 1 && (SH = !SH);
```

#### 22. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L253-L254)

```diff
-         const vV = null !== (QV = YV.slice(eV + 1).find((VV => "" !== VV.trim()))) && void 0 !== QV ? QV : xV;
-         return /^(?:[([`+-]|\/(?![/*]))/.test(vV.trim()) ? VV : VV.slice(0, VV.length - VV.trimStart().length) + ZV
+         const GH = null !== (zH = rH.slice(BH + 1).find((HH => "" !== HH.trim()))) && void 0 !== zH ? zH : LH;
+         return /^(?:[([`+-]|\/(?![/*]))/.test(GH.trim()) ? HH : HH.slice(0, HH.length - HH.trimStart().length) + XH
```

#### 23. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L256)

```diff
-       return yV.trim() === VV.trim() && eV.trim() !== VV.trim() ? eV : yV
+       return hH.trim() === HH.trim() && BH.trim() !== HH.trim() ? BH : hH
```

#### 24. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L261)

```diff
-       return null !== (eV = VV.split("\n").find((VV => "" !== VV.trim()))) && void 0 !== eV ? eV : ""
+       return null !== (BH = HH.split("\n").find((HH => "" !== HH.trim()))) && void 0 !== BH ? BH : ""
```

#### 25. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L268)

```diff
-         xV.set(yV, (null !== (JV = xV.get(yV)) && void 0 !== JV ? JV : 0) + 1)
+         LH.set(hH, (null !== (AH = LH.get(hH)) && void 0 !== AH ? AH : 0) + 1)
```

#### 26. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L273)

```diff
-         const VV = null !== (UV = xV.get(yV)) && void 0 !== UV ? UV : 0;
+         const HH = null !== (SH = LH.get(hH)) && void 0 !== SH ? SH : 0;
```

#### 27. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L326)

```diff
-       for (const UV of (null !== (YV = NV().getLeadingCommentRanges(VV, eV.getFullStart())) && void 0 !== YV ? YV : []).reverse()) {
+       for (const SH of (null !== (rH = bH().getLeadingCommentRanges(HH, BH.getFullStart())) && void 0 !== rH ? rH : []).reverse()) {
```

#### 28. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L339)

```diff
-       return (null !== (eV = null === xV || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : 0) > 0
+       return (null !== (BH = null === LH || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0) > 0
```

#### 29. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L348)

```diff
-             if (NV().isFunctionDeclaration(VV)) return null !== (eV = null === (xV = VV.name) || void 0 === xV ? void 0 : xV.text) && void 0 !== eV ? eV : null;
+             if (bH().isFunctionDeclaration(HH)) return null !== (BH = null === (LH = HH.name) || void 0 === LH ? void 0 : LH.text) && void 0 !== BH ? BH : null;
```

#### 30. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L393-L394` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L393-L394) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L393-L394)

```diff
-         UV = YV.length > 0 ? YV : JV;
-       return null !== (xV = UV.find((VV => VV.topLevel))) && void 0 !== xV ? xV : UV[0]
+         SH = rH.length > 0 ? rH : AH;
+       return null !== (LH = SH.find((HH => HH.topLevel))) && void 0 !== LH ? LH : SH[0]
```

#### 31. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L398)

```diff
-       return "" === VV.trim() ? `${eV.trim()}\n` : `${VV.replace(/\s*$/,"")}\n\n${eV.trim()}\n`
+       return "" === HH.trim() ? `${BH.trim()}\n` : `${HH.replace(/\s*$/,"")}\n\n${BH.trim()}\n`
```

#### 32. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L414)

```diff
-       const UV = null !== (JV = xV.find((VV => VV.topLevel && !VV.isProperty))) && void 0 !== JV ? JV : xV.find((VV => VV.topLevel)),
+       const SH = null !== (AH = LH.find((HH => HH.topLevel && !HH.isProperty))) && void 0 !== AH ? AH : LH.find((HH => HH.topLevel)),
```

#### 33. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L417)

```diff
-       return null !== (YV = void 0 !== pV && !xV.some((VV => VV.topLevel && VV.name === yV)) ? pV : KV(VV, yV)) && void 0 !== YV ? YV : pV
+       return null !== (rH = void 0 !== tH && !LH.some((HH => HH.topLevel && HH.name === hH)) ? tH : ZH(HH, hH)) && void 0 !== rH ? rH : tH
```

#### 34. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L441)

```diff
-       return pV && wV ? IV(VV, yV, null !== vV && void 0 !== vV ? vV : pV, QV.functions, YV) : function(VV, eV, xV, JV, YV) {
+       return tH && EH ? iH(HH, hH, null !== GH && void 0 !== GH ? GH : tH, zH.functions, rH) : function(HH, BH, LH, AH, rH) {
```

#### 35. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L458)

```diff
-       return 0 === xV || "\n" === VV[xV - 1] ? xV : eV
+       return 0 === LH || "\n" === HH[LH - 1] ? LH : BH
```

#### 36. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L463)

```diff
-       if ("" !== VV.trim() && ("top" === JV || "start" === JV)) return `${xV.trim()}\n\n${VV.replace(/^\s+/,"")}`;
+       if ("" !== HH.trim() && ("top" === AH || "start" === AH)) return `${LH.trim()}\n\n${HH.replace(/^\s+/,"")}`;
```

#### 37. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L465)

```diff
-       return YV ? `${VV.slice(0,YV.to)}\n\n${xV.trim()}${VV.slice(YV.to)}` : HV(VV, xV)
+       return rH ? `${HH.slice(0,rH.to)}\n\n${LH.trim()}${HH.slice(rH.to)}` : dH(HH, LH)
```

#### 38. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L479)

```diff
-         eV = `${VV.slice(0,Math.max(VV.lastIndexOf(" "),60)).trimEnd()}\u2026`
+         BH = `${HH.slice(0,Math.max(HH.lastIndexOf(" "),60)).trimEnd()}\u2026`
```

#### 39. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L518)

```diff
-           UV = VV.length > 0 || !/\bplayerCommand\b/.test(QV) ? VV : [QV];
+           SH = HH.length > 0 || !/\bplayerCommand\b/.test(zH) ? HH : [zH];
```

#### 40. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L520)

```diff
-           for (const VV of eV.matchAll(Ue)) YV.add(`/${VV[1].split(/\s/)[0]}`)
+           for (const HH of BH.matchAll(SB)) rH.add(`/${HH[1].split(/\s/)[0]}`)
```

#### 41. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L563)

```diff
-       return `When: ${VV.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+       return `When: ${HH.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 42. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L575-L576)

```diff
-         YV = new Set((null !== (eV = VV.match(Ze)) && void 0 !== eV ? eV : []).map((VV => VV.toLowerCase().replace(/s$/, "")))).size,
-         UV = (null !== (xV = VV.match(ve)) && void 0 !== xV ? xV : []).length;
+         rH = new Set((null !== (BH = HH.match(XB)) && void 0 !== BH ? BH : []).map((HH => HH.toLowerCase().replace(/s$/, "")))).size,
+         SH = (null !== (LH = HH.match(GB)) && void 0 !== LH ? LH : []).length;
```

#### 43. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L581-L582)

```diff
-       const eV = VV.split(/\n|\|/).map((VV => VV.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((VV => "" !== VV)).slice(0, 5).map((VV => VV.length > 90 ? `${VV.slice(0,89).trimEnd()}\u2026` : VV));
-       return eV.length >= 2 ? eV : []
+       const BH = HH.split(/\n|\|/).map((HH => HH.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((HH => "" !== HH)).slice(0, 5).map((HH => HH.length > 90 ? `${HH.slice(0,89).trimEnd()}\u2026` : HH));
+       return BH.length >= 2 ? BH : []
```

#### 44. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L584)

```diff
-     var be = xV(5364);
+     var QB = LH(5347);
```

#### 45. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L604)

```diff
-         YV.set(VV, [...null !== (UV = YV.get(VV)) && void 0 !== UV ? UV : [], ZV])
+         rH.set(HH, [...null !== (SH = rH.get(HH)) && void 0 !== SH ? SH : [], XH])
```

#### 46. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L613-L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L613-L614) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L613-L614)

```diff
-         const VV = null !== (wV = YV.get(Ee(ZV))) && void 0 !== wV ? wV : [];
-         1 !== VV.length || yV.includes(VV[0]) || (nV = (0, be.z)(nV, new RegExp(`${ZV}(?![\\w$])`, "g"), be.o, (() => VV[0])), QV.push({
+         const HH = null !== (EH = rH.get(WB(XH))) && void 0 !== EH ? EH : [];
+         1 !== HH.length || hH.includes(HH[0]) || (CH = (0, QB.o)(CH, new RegExp(`${XH}(?![\\w$])`, "g"), QB.j, (() => HH[0])), zH.push({
```

#### 47. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L629)

```diff
-       te = Object.keys(qe).map((VV => `"${VV}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       PB = Object.keys(vB).map((HH => `"${HH}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
```

#### 48. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L997)

```diff
-         description: `Reads a page of Bloxd's docs as Markdown. ${BV.l} lists every page with its link; then read the page, or the part of a long page, you need`,
+         description: `Reads a page of Bloxd's docs as Markdown. ${MH.l} lists every page with its link; then read the page, or the part of a long page, you need`,
```

#### 49. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1003)

```diff
-               description: `${BV.l}, or a page it links to`
+               description: `${MH.l}, or a page it links to`
```

#### 50. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1021)

```diff
-               description: `${te}, to list every one of them`
+               description: `${PB}, to list every one of them`
```

#### 51. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1110)

```diff
-       if (!eV) throw new Error(`No AI Helper tool ${VV}`);
+       if (!BH) throw new Error(`No AI Helper tool ${HH}`);
```

#### 52. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1114-L1115` → after: `L1114-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1114-L1115) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1114-L1115)

```diff
-       Me = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       ze = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${Xe})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
+       mB = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
+       oB = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${kB})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1127)

```diff
-           xV = -1 === eV ? VV : VV.slice(0, eV);
+           LH = -1 === BH ? HH : HH.slice(0, BH);
```

#### 54. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1133)

```diff
-           We(xV.slice(UV, VV)) && (JV = -1 === JV ? UV : JV, YV = VV), UV = VV
+           fB(LH.slice(SH, HH)) && (AH = -1 === AH ? SH : AH, rH = HH), SH = HH
```

#### 55. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1135-L1136)

```diff
-         return -1 === YV ? VV : "" !== xV.slice(YV).trim() ? VV.slice(YV).trimStart() : `${VV.slice(0,JV).trimEnd()}\n${VV.slice(xV.length)}`.trim()
-       }(xV) : "" !== xV.trim() ? xV : VV
+         return -1 === rH ? HH : "" !== LH.slice(rH).trim() ? HH.slice(rH).trimStart() : `${HH.slice(0,AH).trimEnd()}\n${HH.slice(LH.length)}`.trim()
+       }(LH) : "" !== LH.trim() ? LH : HH
```

#### 56. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1145)

```diff
-       }(eV) ? eV : null
+       }(BH) ? BH : null
```

#### 57. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1159)

```diff
-             nV[null !== (yV = xV[1]) && void 0 !== yV ? yV : xV[2]] = null !== (pV = xV[3]) && void 0 !== pV ? pV : xV[4]
+             CH[null !== (hH = LH[1]) && void 0 !== hH ? hH : LH[2]] = null !== (tH = LH[3]) && void 0 !== tH ? tH : LH[4]
```

#### 58. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1185)

```diff
-       let eV = null !== VV && void 0 !== VV ? VV : {};
+       let BH = null !== HH && void 0 !== HH ? HH : {};
```

#### 59. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1193)

```diff
-       for (const [JV, YV] of Object.entries(eV)) "string" === typeof YV ? xV[JV] = De.has(JV) && ge.test(YV) && !YV.includes("\n") ? ae(YV) : YV : "boolean" === typeof YV || "number" === typeof YV ? xV[JV] = String(YV) : "object" !== typeof YV || null === YV || Array.isArray(YV)  … [truncated]
+       for (const [AH, rH] of Object.entries(BH)) "string" === typeof rH ? LH[AH] = cB.has(AH) && KB.test(rH) && !rH.includes("\n") ? gB(rH) : rH : "boolean" === typeof rH || "number" === typeof rH ? LH[AH] = String(rH) : "object" !== typeof rH || null === rH || Array.isArray(rH)  … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1219)

```diff
-     const le = new RegExp(`\\b(${Pe.map((VV=>VV.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const nB = new RegExp(`\\b(${VB.map((HH=>HH.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
```

#### 61. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1226)

```diff
-           return `${VV}(${JSON.stringify(xV)})`
+           return `${HH}(${JSON.stringify(LH)})`
```

#### 62. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1230-L1232` → after: `L1230-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1230-L1232) · [Before (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1230-L1232)

```diff
-         fileResult: (VV, eV, xV) => `<file path="${VV}"${xV?' open_in_editor="true"':""}>\n${eV}\n</file>`,
-         editFailure: (VV, eV) => `${VV} failed: ${eV}`,
-         lookupResult: (VV, eV, xV) => `${VV} ${eV}:\n${xV}`
+         fileResult: (HH, BH, LH) => `<file path="${HH}"${LH?' open_in_editor="true"':""}>\n${BH}\n</file>`,
+         editFailure: (HH, BH) => `${HH} failed: ${BH}`,
+         lookupResult: (HH, BH, LH) => `${HH} ${BH}:\n${LH}`
```

#### 63. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1245)

```diff
-           const yV = null !== (xV = null === (JV = VV.slice(pV).match(/^\s*<\|call\|>/)) || void 0 === JV ? void 0 : JV[0]) && void 0 !== xV ? xV : "";
+           const hH = null !== (LH = null === (AH = HH.slice(tH).match(/^\s*<\|call\|>/)) || void 0 === AH ? void 0 : AH[0]) && void 0 !== LH ? LH : "";
```

#### 64. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1267)

```diff
-       const pV = null !== (eV = null !== (xV = null !== (JV = null !== (YV = yV.arguments) && void 0 !== YV ? YV : yV.params) && void 0 !== JV ? JV : yV.param) && void 0 !== xV ? xV : yV.args) && void 0 !== eV ? eV : yV.input,
+       const tH = null !== (BH = null !== (LH = null !== (AH = null !== (rH = hH.arguments) && void 0 !== rH ? rH : hH.params) && void 0 !== AH ? AH : hH.param) && void 0 !== LH ? LH : hH.args) && void 0 !== BH ? BH : hH.input,
```

#### 65. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1273` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1273) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1273)

```diff
-         } = yV, xV = oe(null !== pV && void 0 !== pV ? pV : eV);
+         } = hH, LH = NB(null !== tH && void 0 !== tH ? tH : BH);
```

#### 66. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1312)

```diff
-       if (Array.isArray(VV)) return `[${VV.map(ue).join(", ")}]`;
+       if (Array.isArray(HH)) return `[${HH.map(aB).join(", ")}]`;
```

#### 67. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1314)

```diff
-         return `{${Object.entries(VV).map((VV=>{let[eV,xV]=VV;return`${JSON.stringify(eV)}: ${ue(xV)}`})).join(", ")}}`
+         return `{${Object.entries(HH).map((HH=>{let[BH,LH]=HH;return`${JSON.stringify(BH)}: ${aB(LH)}`})).join(", ")}}`
```

#### 68. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1319-L1320` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1319-L1320) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1319-L1320)

```diff
-         formatCall: (VV, eV) => `<tool_call>\n<function=${VV}>\n${Object.entries(eV).flatMap((VV=>{let[eV,xV]=VV;return void 0===xV?[]:[`<parameter=${eV}>\n${xV}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-         declareTools: (VV, eV, xV) => xV || 0 === eV.length ? VV : `${function(VV){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${VV.map((VV=>`\n${ue({type:"function",function:{name:VV.name,description:VV.description,parameters:VV.inputSchema}})}`)).joi … [truncated]
+         formatCall: (HH, BH) => `<tool_call>\n<function=${HH}>\n${Object.entries(BH).flatMap((HH=>{let[BH,LH]=HH;return void 0===LH?[]:[`<parameter=${BH}>\n${LH}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (HH, BH, LH) => LH || 0 === BH.length ? HH : `${function(HH){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${HH.map((HH=>`\n${aB({type:"function",function:{name:HH.name,description:HH.description,parameters:HH.inputSchema}})}`)).joi … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1322-L1324` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1322-L1324) · [Before (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1322-L1324)

```diff
-         fileResult: (VV, eV, xV) => `<tool_response>\nview_file ${VV}${xV?" (open in the editor)":""}:\n${eV}\n</tool_response>`,
-         editFailure: (VV, eV) => `<tool_response>\nError: ${eV}\n</tool_response>`,
-         lookupResult: (VV, eV, xV) => `<tool_response>\n${VV} ${eV}:\n${xV}\n</tool_response>`
+         fileResult: (HH, BH, LH) => `<tool_response>\nview_file ${HH}${LH?" (open in the editor)":""}:\n${BH}\n</tool_response>`,
+         editFailure: (HH, BH) => `<tool_response>\nError: ${BH}\n</tool_response>`,
+         lookupResult: (HH, BH, LH) => `<tool_response>\n${HH} ${BH}:\n${LH}\n</tool_response>`
```

#### 70. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1329-L1330` → after: `L1329-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1329-L1330) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1329-L1330)

```diff
-         formatCall: (VV, eV) => `<tool_call name="${VV}">\n${Object.entries(eV).flatMap((VV=>{let[eV,xV]=VV;return void 0===xV?[]:[`<param name="${eV}">${Ie.has(eV)?xV:`\n${xV}\n`}</param>\n`]})).join("")}</tool_call>`,
-         declareTools: VV => VV,
+         formatCall: (HH, BH) => `<tool_call name="${HH}">\n${Object.entries(BH).flatMap((HH=>{let[BH,LH]=HH;return void 0===LH?[]:[`<param name="${BH}">${iB.has(BH)?LH:`\n${LH}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: HH => HH,
```

#### 71. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1332-L1334` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1332-L1334) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1332-L1334)

```diff
-         fileResult: (VV, eV, xV) => `<tool_result name="view_file" path="${VV}"${xV?' open_in_editor="true"':""}>\n${eV}\n</tool_result>`,
-         editFailure: (VV, eV) => `<tool_result name="${VV}" is_error="true">\n${eV}\n</tool_result>`,
-         lookupResult: (VV, eV, xV) => `<tool_result name="${VV}" about="${eV.replace(/"/g,"'")}">\n${xV}\n</tool_result>`
+         fileResult: (HH, BH, LH) => `<tool_result name="view_file" path="${HH}"${LH?' open_in_editor="true"':""}>\n${BH}\n</tool_result>`,
+         editFailure: (HH, BH) => `<tool_result name="${HH}" is_error="true">\n${BH}\n</tool_result>`,
+         lookupResult: (HH, BH, LH) => `<tool_result name="${HH}" about="${BH.replace(/"/g,"'")}">\n${LH}\n</tool_result>`
```

#### 72. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1352)

```diff
-             if (null === QV || null === wV || (null !== (xV = null === (JV = eV.at(-1)) || void 0 === JV ? void 0 : JV.index) && void 0 !== xV ? xV : -1) + (null !== (YV = null === (UV = eV.at(-1)) || void 0 === UV ? void 0 : UV.call.source.length) && void 0 !== YV ? YV : 0) > pV … [truncated]
+             if (null === zH || null === EH || (null !== (LH = null === (AH = BH.at(-1)) || void 0 === AH ? void 0 : AH.index) && void 0 !== LH ? LH : -1) + (null !== (rH = null === (SH = BH.at(-1)) || void 0 === SH ? void 0 : SH.call.source.length) && void 0 !== rH ? rH : 0) > tH … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1356)

```diff
-               rV = VV.slice(pV.index, wV + (null !== (yV = null === vV || void 0 === vV ? void 0 : vV[0].length) && void 0 !== yV ? yV : 0));
+               YH = HH.slice(tH.index, EH + (null !== (hH = null === GH || void 0 === GH ? void 0 : GH[0].length) && void 0 !== hH ? hH : 0));
```

#### 74. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1469` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1469) · [Before (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1469)

```diff
-           stopsWhen: VV => `${VV} !== undefined && ${VV} !== false`,
+           stopsWhen: HH => `${HH} !== undefined && ${HH} !== false`,
```

#### 75. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/105.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/105.js#L1473)

```diff
-           stopsWhen: VV => `${VV} === false || ${VV} === null`,
+           stopsWhen: HH => `${HH} === false || ${HH} === null`,
```
