# Changed — Bundle Modifications Report (Part 076 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `76 / 82` (**396** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 075](part-075.md) · [Part 077 →](part-077.md)

## `bloxd.io` · `bundles/bloxd.io/main.css` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/main.css` (1198 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 353. `bundles/bloxd.io/main.css` (Changed code · before: `L6845-L6846` → after: `L7881-L7885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7881-L7885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7881-L7885) · [Before (L6845-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6845-L6846)

```diff
- .ProfilePicture .ProfilePictureComponent.ProfilePictureComponentHat {
-   z-index: 5
+ .DailyDropBubble.DailyDropBubbleBelow:before {
+   border-bottom-color: #0f0f0f;
+   border-width: 0 calc(.5rem + 1px) calc(.5rem + 1px);
+   bottom: calc(100% + 1px);
+   right: calc(var(--daily-drop-anchor-width)/2 - .5rem - 2px + var(--daily-drop-bubble-shift, 0px))
```

#### 354. `bundles/bloxd.io/main.css` (Changed code · before: `L6849-L6856` → after: `L7888-L7892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7888-L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7888-L7892) · [Before (L6849-L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6849-L6856)

```diff
- .PaymentEntryIcon {
-   align-items: center;
-   color: #ffb914;
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1.6rem;
-   justify-content: center;
-   position: relative
+ .DailyDropBubble.DailyDropBubbleBelow:after {
+   border-bottom-color: #ffb914;
+   border-width: 0 .5rem .5rem;
+   bottom: 100%;
+   right: calc(var(--daily-drop-anchor-width)/2 - .5rem - 1px + var(--daily-drop-bubble-shift, 0px))
```

#### 355. `bundles/bloxd.io/main.css` (Changed code · before: `L6859-L6864` → after: `L7895-L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7895-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7895-L7899) · [Before (L6859-L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6859-L6864)

```diff
- .PaymentEntryIcon .PaymentEntryIconRevokedBadge {
-   bottom: -.3rem;
-   color: #ff8a80;
-   font-size: 1rem;
-   position: absolute;
-   right: -.3rem
+ .DailyDropBubble[data-off-screen],
+ .DailyDropBubble[data-off-screen] .DailyDropBubbleBlock,
+ html[data-app-covered] .WholeAppWrapper .DailyDropBubble,
+ html[data-app-covered] .WholeAppWrapper .DailyDropBubble .DailyDropBubbleBlock {
+   animation-play-state: paused
```

#### 356. `bundles/bloxd.io/main.css` (Changed code · before: `L6867-L6871` → after: `L7902-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7902-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7902-L7908) · [Before (L6867-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6867-L6871)

```diff
- .PremiumCurrencyIcon {
-   flex-shrink: 0;
-   height: 1.1em;
-   vertical-align: -.15em;
-   width: 1.1em
+ @media(prefers-reduced-motion:reduce) {
+ 
+   .DailyDropBubble .DailyDropBubbleBlock,
+   .DailyDropBubble.DailyDropBubbleBelow,
+   .DailyDropBubble.DailyDropBubbleBeside {
+     animation: none
+   }
```

#### 357. `bundles/bloxd.io/main.css` (Changed code · before: `L6874-L6878` → after: `L7911-L7912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7911-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7911-L7912) · [Before (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6874-L6878)

```diff
- .PremiumCurrencyAmount {
-   align-items: center;
-   display: inline-flex;
-   gap: .3em;
-   white-space: nowrap
+ .DailyDropBubbleBesidePositioner {
+   z-index: 15
```

#### 358. `bundles/bloxd.io/main.css` (Changed code · before: `L6881-L6882` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7915) · [Before (L6881-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6881-L6882)

```diff
- .PremiumCurrencyAmount .PremiumCurrencyAmountPending {
-   position: relative;
+ .DailyDropBubbleBesidePositioner[data-popper-reference-hidden=true] {
```

#### 359. `bundles/bloxd.io/main.css` (Changed code · before: `L6886-L6893` → after: `L7919-L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7919-L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7919-L7922) · [Before (L6886-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6886-L6893)

```diff
- .PremiumCurrencyAmount .PremiumCurrencyAmountPending:after {
-   content: "...";
-   left: 50%;
-   position: absolute;
-   top: 0;
-   transform: translateX(-50%);
-   visibility: visible
- }
+ @keyframes DailyDropPointerFlash {
+   0% {
+     opacity: 1
+   }
```

#### 360. `bundles/bloxd.io/main.css` (Changed code · before: `L6895-L6903` → after: `L7924-L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7924-L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7924-L7926) · [Before (L6895-L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6895-L6903)

```diff
- .PremiumCurrencyAmount.PremiumCurrencyAmountBalance {
-   color: #ffb914;
-   display: flex;
-   font-size: 1.25rem;
-   font-weight: 800;
-   gap: .4rem;
-   padding: .25rem 0;
-   pointer-events: none;
-   text-shadow: -1px -1px 0 rgba(48, 58, 89, .6), -1px 0 0 rgba(48, 58, 89, .6), -1px 1px 0 rgba(48, 58, 89, .6), 0 -1px 0 rgba(48, 58, 89, .6), 0 0 0 rgba(48, 58, 89, .6), 0 1px 0 rgba(48, 58, 89, .6), 1px -1px 0 rgba(48, 58, 89, .6), 1px 0 0 rgba(48, 58, 89, .6), 1px 1px 0 rgba( … [truncated]
+   to {
+     opacity: .15
+   }
```

#### 361. `bundles/bloxd.io/main.css` (Changed code · before: `L6906-L6909` → after: `L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7929) · [Before (L6906-L6909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6906-L6909)

```diff
- .PremiumCurrencyAmount.PremiumCurrencyAmountBalance .svg-inline--fa,
- .PremiumCurrencyAmount.PremiumCurrencyAmountBalance.svg-inline--fa {
-   paint-order: stroke fill
- }
+ @keyframes DailyDropBubbleNudgeSideways {
```

#### 362. `bundles/bloxd.io/main.css` (Changed code · before: `L6911-L6917` → after: `L7931-L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7931-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7931-L7935) · [Before (L6911-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6911-L6917)

```diff
- .PremiumCurrencyAmount.PremiumCurrencyAmountBalance .svg-inline--fa path:only-of-type,
- .PremiumCurrencyAmount.PremiumCurrencyAmountBalance.svg-inline--fa path:only-of-type {
-   stroke: rgba(48, 58, 89, .6);
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
- }
+   0%,
+   60%,
+   to {
+     transform: translateX(0)
+   }
```

#### 363. `bundles/bloxd.io/main.css` (Changed code · before: `L6919-L6924` → after: `L7937-L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7937-L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7937-L7939) · [Before (L6919-L6924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6919-L6924)

```diff
- .BottomLeftIcons {
-   color: #fff;
-   display: flex;
-   font-size: 2rem;
-   gap: 1.25rem;
-   z-index: 4
+   30% {
+     transform: translateX(.4rem)
+   }
```

#### 364. `bundles/bloxd.io/main.css` (Changed code · before: `L6927-L6930` → after: `L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7942) · [Before (L6927-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6927-L6930)

```diff
- .BottomLeftIcons .BottomLeftIcon {
-   cursor: pointer;
-   pointer-events: auto
- }
+ @keyframes DailyDropBubbleNudgeDown {
```

#### 365. `bundles/bloxd.io/main.css` (Changed code · before: `L6932-L6937` → after: `L7944-L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7944-L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7944-L7948) · [Before (L6932-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6932-L6937)

```diff
- .HomeLinkButtons {
-   align-items: stretch;
-   display: flex;
-   gap: .5rem;
-   min-width: 0
- }
+   0%,
+   60%,
+   to {
+     transform: translateY(0)
+   }
```

#### 366. `bundles/bloxd.io/main.css` (Changed code · before: `L6939-L6941` → after: `L7950-L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7950-L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7950-L7952) · [Before (L6939-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6939-L6941)

```diff
- .HomeLinkButtons .HomeLinkButton {
-   font-size: 1.2rem;
-   padding: 0 .8rem
+   30% {
+     transform: translateY(.4rem)
+   }
```

#### 367. `bundles/bloxd.io/main.css` (Changed code · before: `L6944-L6946` → after: `L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7955) · [Before (L6944-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6944-L6946)

```diff
- .HomeLinkButtons .HomeLinkButton .svg-inline--fa {
-   color: #ffb914
- }
+ @keyframes DailyDropBlockHop {
```

#### 368. `bundles/bloxd.io/main.css` (Changed code · before: `L6948-L6952` → after: `L7957-L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7957-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7957-L7962) · [Before (L6948-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6948-L6952)

```diff
- .HomeLinkButtons .HomeLinkButton[data-pressing] {
-   border-color: #ffb914;
-   color: #ffb914;
-   transition: none
- }
+   0%,
+   55%,
+   85%,
+   to {
+     transform: translateY(0)
+   }
```

#### 369. `bundles/bloxd.io/main.css` (Changed code · before: `L6954-L6958` → after: `L7964-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7964-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7964-L7966) · [Before (L6954-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6954-L6958)

```diff
- .HomeLinkButtons.HomeLinkButtonsIconOnly .HomeLinkButton {
-   flex: 1 1;
-   font-size: 1.3rem;
-   min-width: 0;
-   padding: .4rem 0
+   70% {
+     transform: translateY(-.3em)
+   }
```

#### 370. `bundles/bloxd.io/main.css` (Changed code · before: `L6961-L6962` → after: `L7969-L7975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7969-L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7969-L7975) · [Before (L6961-L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6961-L6962)

```diff
- .HomeLinkButtons.HomeLinkButtonsIconOnly .HomeLinkButton .svg-inline--fa {
-   color: inherit
+ .LuckySkinBlock {
+   align-items: center;
+   display: flex;
+   height: 1.6em;
+   justify-content: center;
+   perspective: 8em;
+   width: 1.6em
```

#### 371. `bundles/bloxd.io/main.css` (Changed code · before: `L6965-L6966` → after: `L7978-L7979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7978-L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7978-L7979) · [Before (L6965-L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6965-L6966)

```diff
- .LinksPopup {
-   max-width: 90vw;
+ .LuckySkinBlock .LuckySkinBlockCube {
+   height: 1em;
```

#### 372. `bundles/bloxd.io/main.css` (Changed code · before: `L6968` → after: `L7981-L7983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7981-L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7981-L7983) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6968)

```diff
-   width: 24rem
+   transform: rotateX(-28deg) rotateY(-45deg);
+   transform-style: preserve-3d;
+   width: 1em
```

#### 373. `bundles/bloxd.io/main.css` (Changed code · before: `L6971-L6977` → after: `L7986-L7995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7986-L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7986-L7995) · [Before (L6971-L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6971-L6977)

```diff
- .LinksPopup .LinksPopupHeader .LinksPopupLabel {
-   color: #fcd373;
-   font-size: .7rem;
-   font-weight: 700;
-   letter-spacing: .14rem;
-   margin-bottom: .35rem;
-   text-transform: uppercase
+ .LuckySkinBlock .LuckySkinBlockFace {
+   -ms-interpolation-mode: nearest-neighbor;
+   backface-visibility: hidden;
+   background-size: 100% 100%;
+   image-rendering: optimizeSpeed;
+   image-rendering: -o-crisp-edges;
+   image-rendering: pixelated;
+   image-rendering: optimize-contrast;
+   inset: 0;
+   position: absolute
```

#### 374. `bundles/bloxd.io/main.css` (Changed code · before: `L6980-L6983` → after: `L7998-L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7998-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7998-L7999) · [Before (L6980-L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6980-L6983)

```diff
- .LinksPopup .LinksPopupHeader .LinksPopupTitle {
-   font-size: 1.6rem;
-   font-weight: 800;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockFront {
+   transform: translateZ(.5em)
```

#### 375. `bundles/bloxd.io/main.css` (Changed code · before: `L6986-L6988` → after: `L8002-L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8002-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8002-L8004) · [Before (L6986-L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6986-L6988)

```diff
- .LinksPopup .LinksPopupHeader .LinksPopupTitle .svg-inline--fa,
- .LinksPopup .LinksPopupHeader .LinksPopupTitle.svg-inline--fa {
-   paint-order: stroke fill
+ .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockSide {
+   filter: brightness(.8);
+   transform: rotateY(90deg) translateZ(.5em)
```

#### 376. `bundles/bloxd.io/main.css` (Changed code · before: `L6991-L6996` → after: `L8007-L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8007-L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8007-L8009) · [Before (L6991-L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6991-L6996)

```diff
- .LinksPopup .LinksPopupHeader .LinksPopupTitle .svg-inline--fa path:only-of-type,
- .LinksPopup .LinksPopupHeader .LinksPopupTitle.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockTop {
+   transform: rotateX(90deg) translateZ(.5em);
+   transition: transform .45s ease-out, opacity .45s ease-in
```

#### 377. `bundles/bloxd.io/main.css` (Changed code · before: `L6999-L7000` → after: `L8012-L8014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8012-L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8012-L8014) · [Before (L6999-L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6999-L7000)

```diff
- .LinksPopup .LinksPopupLinks {
-   padding: 1.25rem 1.5rem 1.5rem
+ .LuckySkinBlock.LuckySkinBlockOpen .LuckySkinBlockFace.LuckySkinBlockTop {
+   opacity: 0;
+   transform: translateY(-.9em) rotateX(90deg) rotateY(-35deg) translateZ(.5em)
```

#### 378. `bundles/bloxd.io/main.css` (Changed code · before: `L7003-L7015` → after: `L8017-L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8017-L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8017-L8020) · [Before (L7003-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7003-L7015)

```diff
- .LinksPopupLink {
-   align-items: center;
-   background: #3c4b68;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   color: #fff;
-   cursor: pointer;
-   display: flex;
-   gap: .85rem;
-   padding: .7rem .85rem;
-   text-decoration: none;
-   transition: transform .2s, background .2s
- }
+ @media(prefers-reduced-motion:reduce) {
+   .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockTop {
+     transition: opacity .2s linear
+   }
```

#### 379. `bundles/bloxd.io/main.css` (Changed code · before: `L7017-L7020` → after: `L8022-L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8022-L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8022-L8023) · [Before (L7017-L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7017-L7020)

```diff
- @media(hover:hover) {
-   .LinksPopupLink:hover {
-     background: #394980;
-     transform: scale(1.02)
+   .LuckySkinBlock.LuckySkinBlockOpen .LuckySkinBlockFace.LuckySkinBlockTop {
+     transform: rotateX(90deg) translateZ(.5em)
```

#### 380. `bundles/bloxd.io/main.css` (Changed code · before: `L7024-L7026` → after: `L8027-L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8027-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8027-L8033) · [Before (L7024-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7024-L7026)

```diff
- .LinksPopupLink.pad-focused {
-   background: #394980;
-   transform: scale(1.02)
+ .NewPlayerDealChip {
+   align-items: center;
+   display: inline-flex;
+   font-size: max(.8rem, 11px);
+   font-weight: 900;
+   gap: .25rem;
+   white-space: nowrap
```

#### 381. `bundles/bloxd.io/main.css` (Changed code · before: `L7029-L7033` → after: `L8036-L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8036-L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8036-L8038) · [Before (L7029-L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7029-L7033)

```diff
- @media(hover:none) {
-   .LinksPopupLink:active {
-     background: #394980;
-     transform: scale(1.02)
-   }
+ .NewPlayerDealChip svg {
+   height: .85em;
+   width: .85em
```

#### 382. `bundles/bloxd.io/main.css` (Changed code · before: `L7036-L7038` → after: `L8041-L8046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8041-L8046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8041-L8046) · [Before (L7036-L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7036-L7038)

```diff
- .LinksPopupLink.LinksPopupInstall {
-   font: inherit;
-   width: 100%
+ .NewPlayerDealChip.NewPlayerDealChipPill {
+   background-color: #1a1f2e;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   color: #fcd373;
+   padding: .1rem .45rem
```

#### 383. `bundles/bloxd.io/main.css` (Changed code · before: `L7041-L7043` → after: `L8049-L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8049-L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8049-L8052) · [Before (L7041-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7041-L7043)

```diff
- .LinksPopupLink.LinksPopupInstall .LinksPopupLinkIcon {
-   background: #ffb914;
-   color: #22283b
+ .NewPlayerDealChip.NewPlayerDealChipInButton {
+   -webkit-text-fill-color: currentColor;
+   color: #fcd373;
+   font-size: max(.8rem, 10px)
```

#### 384. `bundles/bloxd.io/main.css` (Changed code · before: `L7046-L7047` → after: `L8055-L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8055-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8055-L8056) · [Before (L7046-L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7046-L7047)

```diff
- .LinksPopupLink .LinksPopupLinkIcon {
-   align-items: center;
+ .NewPlayerDealChip.NewPlayerDealChipTag {
+   background-color: #ffb914;
```

#### 385. `bundles/bloxd.io/main.css` (Changed code · before: `L7050-L7064` → after: `L8059-L8061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8059-L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8059-L8061) · [Before (L7050-L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7050-L7064)

```diff
-   color: #fff;
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1.2rem;
-   height: 2.2rem;
-   justify-content: center;
-   width: 2.2rem
- }
- 
- .LinksPopupLink .LinksPopupLinkIcon.LinksPopupLinkIconUnboxed {
-   border: none;
-   height: auto;
-   min-height: 2.2rem;
-   min-width: 2.2rem;
-   width: auto
+   color: #1a1f2e;
+   padding: .05rem .35rem;
+   text-shadow: none
```

#### 386. `bundles/bloxd.io/main.css` (Changed code · before: `L7067-L7072` → after: `L8064-L8066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8064-L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8064-L8066) · [Before (L7067-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7067-L7072)

```diff
- .LinksPopupLink .LinksPopupLinkText {
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   gap: .1rem;
-   min-width: 0
+ .CountdownTime {
+   display: inline-flex;
+   justify-content: flex-start
```

#### 387. `bundles/bloxd.io/main.css` (Changed code · before: `L7075-L7077` → after: `L8069-L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8069-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8069-L8071) · [Before (L7075-L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7075-L7077)

```diff
- .LinksPopupLink .LinksPopupLinkText .LinksPopupLinkName {
-   font-size: .95rem;
-   font-weight: 700
+ .CountdownTime .CountdownTimePart {
+   background-color: rgba(0, 0, 0, .2);
+   padding: 0 .1rem
```

#### 388. `bundles/bloxd.io/main.css` (Changed code · before: `L7080-L7085` → after: `L8074-L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8074-L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8074-L8076) · [Before (L7080-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7080-L7085)

```diff
- .LinksPopupLink .LinksPopupLinkText .LinksPopupLinkHandle {
-   color: #a4a4a4;
-   font-size: .75rem;
-   font-weight: 600;
-   overflow: hidden;
-   text-overflow: ellipsis;
+ .DaysClockCountdown {
+   font-feature-settings: "tnum";
+   font-variant-numeric: tabular-nums;
```

#### 389. `bundles/bloxd.io/main.css` (Changed code · before: `L7089-L7093` → after: `L8080-L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8080-L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8080-L8088) · [Before (L7089-L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7089-L7093)

```diff
- .LinksPopupLink .LinksPopupLinkArrow {
-   color: #a4a4a4;
-   flex-shrink: 0;
-   font-size: 1.2rem;
-   font-weight: 700
+ .SocialBarContainer {
+   --collapsed-width: 5rem;
+   --docked-width: 19rem;
+   --social-bar-opacity: 0.45;
+   box-sizing: border-box;
+   height: 100%;
+   position: relative;
+   width: var(--collapsed-width);
+   z-index: 15
```

#### 390. `bundles/bloxd.io/main.css` (Changed code · before: `L7096-L7099` → after: `L8091-L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8091-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8091-L8092) · [Before (L7096-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7096-L7099)

```diff
- .LinkRowList {
-   display: flex;
-   flex-direction: column;
-   gap: .6rem
+ .SocialBarContainer .SocialBarOuter {
+   height: 100%
```

#### 391. `bundles/bloxd.io/main.css` (Changed code · before: `L7102-L7109` → after: `L8095-L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8095-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8095-L8100) · [Before (L7102-L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7102-L7109)

```diff
- .YoutubeIcon {
-   aspect-ratio: 28.57/20;
-   display: block;
-   flex-shrink: 0;
-   height: max(20px, 1.5rem);
-   min-height: 20px;
-   min-width: 28.57px;
-   width: auto
+ .SocialBarContainer .SocialBarOuter .SocialBar {
+   box-sizing: border-box;
+   height: 100%;
+   left: 0;
+   position: absolute;
+   width: var(--collapsed-width)
```

#### 392. `bundles/bloxd.io/main.css` (Changed code · before: `L7112-L7113` → after: `L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8103) · [Before (L7112-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7112-L7113)

```diff
- .TitleContainer {
-   align-items: center;
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner {
```

#### 393. `bundles/bloxd.io/main.css` (Changed code · before: `L7116-L7122` → after: `L8106-L8107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8106-L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8106-L8107) · [Before (L7116-L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7116-L7122)

```diff
-   flex-direction: column;
-   font-family: rubik, rubik-fallback-arial, rubik-fallback-roboto, sans-serif;
-   font-size: 3.4rem;
-   gap: .3rem;
-   justify-content: center;
-   opacity: 1;
-   position: relative
+   justify-content: flex-end;
+   pointer-events: auto
```

#### 394. `bundles/bloxd.io/main.css` (Changed code · before: `L7125-L7126` → after: `L8110-L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8110-L8111) · [Before (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7125-L7126)

```diff
- .TitleContainer[data-pressing] {
-   transition: none
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .SocialBarDividerContainer {
+   background-color: rgba(57, 73, 128, .4)
```

#### 395. `bundles/bloxd.io/main.css` (Changed code · before: `L7129-L7130` → after: `L8114-L8119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8114-L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8114-L8119) · [Before (L7129-L7130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7129-L7130)

```diff
- .TitleContainer[data-pressing] .TitleContainerTop {
-   transform: scale(.94)
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .SocialBarDividerContainer .SocialBarDivider {
+   background-color: #a4a4a4;
+   height: .2rem;
+   margin-left: 10%;
+   opacity: .4;
+   width: 80%
```

#### 396. `bundles/bloxd.io/main.css` (Changed code · before: `L7133` → after: `L8122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8122) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7133)

```diff
- .TitleContainer .TitleContainerTop {
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer {
```

#### 397. `bundles/bloxd.io/main.css` (Changed code · before: `L7136-L7165` → after: `L8125-L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8125-L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8125-L8126) · [Before (L7136-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7136-L7165)

```diff
-   gap: .3rem;
-   justify-content: center;
-   position: relative
- }
- 
- .TitleContainer .TitleContainerTop .Title {
-   color: #fff;
-   font-weight: 900;
-   line-height: 0;
-   padding-top: .15rem;
-   position: relative;
-   text-shadow: -.2rem -.2rem 0 #303a59, 0 -.2rem 0 #303a59, .3rem -.2rem 0 #303a59, .3rem 0 0 #303a59, .3rem .2rem 0 #303a59, 0 .2rem 0 #303a59, -.2rem .2rem 0 #303a59;
-   white-space: nowrap
- }
- 
- .TitleContainer .TitleContainerTop .Title .TitleSantaHat {
- ... (14 more removed lines; see GitHub link above)
+   flex-direction: column;
+   width: var(--collapsed-width)
```

#### 398. `bundles/bloxd.io/main.css` (Changed code · before: `L7168-L7169` → after: `L8129-L8133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8129-L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8129-L8133) · [Before (L7168-L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7168-L7169)

```diff
- .TitleContainer .TitleContainerTop .Title.TitleNinetyNineNightsBundle .TitleSantaHat {
-   display: none
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   max-width: var(--collapsed-width)
```

#### 399. `bundles/bloxd.io/main.css` (Changed code · before: `L7172` → after: `L8136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8136) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7172)

```diff
- .TitleContainer .TitleContainerTop .LogoContainer {
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection {
```

#### 400. `bundles/bloxd.io/main.css` (Changed code · before: `L7176-L7177` → after: `L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8143) · [Before (L7176-L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7176-L7177)

```diff
-   padding-top: .1rem;
-   position: relative
+   padding: .2rem .5rem
```

#### 401. `bundles/bloxd.io/main.css` (Changed code · before: `L7180-L7181` → after: `L8146-L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8146-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8146-L8147) · [Before (L7180-L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7180-L7181)

```diff
- .TitleContainer .TitleContainerBottom {
-   align-items: center;
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection .CondensedSectionValue {
+   align-items: flex-end;
```

#### 402. `bundles/bloxd.io/main.css` (Changed code · before: `L7183-L7184` → after: `L8149-L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8149-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8149-L8150) · [Before (L7183-L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7183-L7184)

```diff
-   flex-wrap: wrap;
-   gap: .4rem;
+   font-size: 1.5rem;
+   font-weight: 700;
```

#### 403. `bundles/bloxd.io/main.css` (Changed code · before: `L7188-L7192` → after: `L8154-L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8154-L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8154-L8155) · [Before (L7188-L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7188-L7192)

```diff
- .TitleContainer .TitleContainerBottom .HomeTitleCcu {
-   align-items: center;
-   background-color: rgba(57, 73, 128, .45);
-   border-radius: 0;
-   color: #f2f2f2;
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection .CondensedSectionIcon {
+   align-items: flex-end;
```

#### 404. `bundles/bloxd.io/main.css` (Changed code · before: `L7195-L7199` → after: `L8158-L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8158-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8158-L8161) · [Before (L7195-L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7195-L7199)

```diff
-   font-weight: 700;
-   gap: .4rem;
-   justify-content: center;
-   padding: .1rem .7rem;
-   white-space: nowrap
+   justify-content: flex-start;
+   opacity: .6;
+   padding-top: .3rem;
+   width: 50%
```

#### 405. `bundles/bloxd.io/main.css` (Changed code · before: `L7202-L7207` → after: `L8164-L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8164-L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8164-L8165) · [Before (L7202-L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7202-L7207)

```diff
- .TitleContainer .TitleContainerBottom .HomeTitleCcu .HomeTitleCcuDot {
-   animation: HomeTitleCcuPulse 1.6s ease-in-out infinite;
-   background-color: #1dd06d;
-   flex-shrink: 0;
-   height: .45rem;
-   width: .45rem
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection:first-of-type {
+   border-radius: 0 0 0 0
```

#### 406. `bundles/bloxd.io/main.css` (Changed code · before: `L7210-L7213` → after: `L8168-L8170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8168-L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8168-L8170) · [Before (L7210-L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7210-L7213)

```diff
- .TitleContainer .TitleContainerBottom .HomeTitleCcu .HomeTitleCcuDot.HomeTitleCcuDotImage {
-   animation: none;
-   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAAoAAAAAHj8pNUAAAAaZmNUTAAAAAAAAAABAAAAAQAAAAAAAAAAACgD6AAALn3WhQAAAA1JREFUeNpjkL2Q+x8ABMICWrqFBgkAAAAaZmNUTAAAAAEAAAABAAAAAQAAAAAAAAAAACgD6AAAtQ48UQAAABFmZEFUAAAAAnjaY5C9kPsPAATBAlkx … [truncated]
-   transform: translateZ(0)
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection:last-of-type {
+   border-radius: 0 0 0 0;
+   padding-bottom: .5rem
```

#### 407. `bundles/bloxd.io/main.css` (Changed code · before: `L7216-L7217` → after: `L8173-L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8173-L8174) · [Before (L7216-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7216-L7217)

```diff
- .TitleContainer .TitleContainerBottom .HomeTitleCcu.HomeTitleCcuUnknown {
-   color: #cfcfcf
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection.CondensedSectionParty {
+   background-color: rgba(155, 57, 213, var(--social-bar-opacity))
```

#### 408. `bundles/bloxd.io/main.css` (Changed code · before: `L7220-L7222` → after: `L8177-L8210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8177-L8210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8177-L8210) · [Before (L7220-L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7220-L7222)

```diff
- .TitleContainer .TitleContainerBottom .HomeTitleCcu.HomeTitleCcuUnknown .HomeTitleCcuDot {
-   animation: none;
-   background: #838383
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection.CondensedSectionFriendRequests,
+ .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection.CondensedSectionOnlineFriends {
+   background-color: rgba(57, 73, 128, .4)
+ }
+ 
+ .SocialBarContainer.Docked {
+   width: calc(var(--docked-width) + var(--notchLeft))
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar {
+   position: relative;
+   width: 100%
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner {
+   background-color: #22283b;
+ ... (18 more added lines; see GitHub link above)
```

#### 409. `bundles/bloxd.io/main.css` (Changed code · before: `L7225-L7229` → after: `L8213-L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8213-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8213-L8214) · [Before (L7225-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7225-L7229)

```diff
- @media(orientation:portrait) {
-   .TitleContainer .TitleContainerBottom .HomeTitleCcu {
-     font-size: 1rem;
-     padding: .1rem .5rem
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner::-webkit-scrollbar-track {
+   background-color: #22283b
```

#### 410. `bundles/bloxd.io/main.css` (Changed code · before: `L7232-L7235` → after: `L8217-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8217-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8217-L8219) · [Before (L7232-L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7232-L7235)

```diff
- .TitleContainer .TitleContainerBottom .SubTitleList {
-   align-items: center;
-   display: flex;
-   gap: .2rem
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner::-webkit-scrollbar-thumb {
+   background-color: #3c4b68;
+   border-radius: 0
```

#### 411. `bundles/bloxd.io/main.css` (Changed code · before: `L7238-L7249` → after: `L8222-L8225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8222-L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8222-L8225) · [Before (L7238-L7249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7238-L7249)

```diff
- .TitleContainer .TitleContainerBottom .SubTitleList .SubTitle {
-   -webkit-text-stroke: 0 transparent;
-   background-color: #2671d7;
-   border-radius: 0;
-   color: #fff;
-   font-size: 1rem;
-   font-weight: 700;
-   padding: .2rem .8rem;
-   text-shadow: none;
-   white-space: nowrap;
-   width: -moz-fit-content;
-   width: fit-content
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .PartyInformationMembers .ProfilePreview,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .PlayerRows .ProfilePreview,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriendsPlaceholderRow {
+   background-color: rgba(57, 73, 128, .4)
```

#### 412. `bundles/bloxd.io/main.css` (Changed code · before: `L7252-L7254` → after: `L8228-L8232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8228-L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8228-L8232) · [Before (L7252-L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7252-L7254)

```diff
- .TitleContainer .TitleContainerBottom .SubTitleList .SubTitle.StudioSubTitle {
-   background-color: #ffb914;
-   color: #000
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection {
+   box-sizing: border-box;
+   width: 100%
```

#### 413. `bundles/bloxd.io/main.css` (Changed code · before: `L7257-L7262` → after: `L8235-L8242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8235-L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8235-L8242) · [Before (L7257-L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7257-L7262)

```diff
- @keyframes HomeTitleCcuPulse {
- 
-   0%,
-   to {
-     opacity: 1
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarPeople,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarSection,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarPeople,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarSection,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarPeople,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarSection {
+   border-top: .1rem solid hsla(0, 0%, 95%, .1)
+ }
```

#### 414. `bundles/bloxd.io/main.css` (Changed code · before: `L7264-L7266` → after: `L8244-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8244-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8244-L8250) · [Before (L7264-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7264-L7266)

```diff
-   50% {
-     opacity: .25
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarPeople>.SocialBarSection:first-child,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarSection,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarPeople>.SocialBarSection:first-child,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarSection,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarPeople>.SocialBarSection:first-child,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarSection {
+   padding-top: .9rem
```

#### 415. `bundles/bloxd.io/main.css` (Changed code · before: `L7269-L7272` → after: `L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8253) · [Before (L7269-L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7269-L7272)

```diff
- .SocialCountBadge {
-   align-items: center;
-   box-sizing: border-box;
-   color: #303a59;
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople {
```

#### 416. `bundles/bloxd.io/main.css` (Changed code · before: `L7274-L7280` → after: `L8255-L8261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8255-L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8255-L8261) · [Before (L7274-L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7274-L7280)

```diff
-   font-size: 1rem;
-   font-weight: 700;
-   gap: .25rem;
-   height: 1.6rem;
-   justify-content: center;
-   min-width: 1.6rem;
-   padding: 0 .4rem
+   flex: 1 1;
+   flex-direction: column;
+   min-height: 13.1rem;
+   overflow-x: hidden;
+   overflow-y: auto;
+   scrollbar-color: #3c4b68 #22283b;
+   scrollbar-width: thin
```

#### 417. `bundles/bloxd.io/main.css` (Changed code · before: `L7283-L7284` → after: `L8264-L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8264-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8264-L8266) · [Before (L7283-L7284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7283-L7284)

```diff
- .SocialCountBadge svg {
-   font-size: .8em
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople::-webkit-scrollbar {
+   height: 6px;
+   width: 6px
```

#### 418. `bundles/bloxd.io/main.css` (Changed code · before: `L7287-L7288` → after: `L8269-L8270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8269-L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8269-L8270) · [Before (L7287-L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7287-L7288)

```diff
- .SocialCountBadge.SocialCountBadgeOnline {
-   background-color: #1dd06d
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople::-webkit-scrollbar-track {
+   background-color: #22283b
```

#### 419. `bundles/bloxd.io/main.css` (Changed code · before: `L7291-L7294` → after: `L8273-L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8273-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8273-L8275) · [Before (L7291-L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7291-L7294)

```diff
- .SocialCountBadge.SocialCountBadgeRequests {
-   background-color: #e34f4f;
-   color: #fff;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople::-webkit-scrollbar-thumb {
+   background-color: #3c4b68;
+   border-radius: 0
```

#### 420. `bundles/bloxd.io/main.css` (Changed code · before: `L7297-L7299` → after: `L8278-L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8278-L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8278-L8280) · [Before (L7297-L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7297-L7299)

```diff
- .SocialCountBadge.SocialCountBadgeRequests .svg-inline--fa,
- .SocialCountBadge.SocialCountBadgeRequests.svg-inline--fa {
-   paint-order: stroke fill
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection {
+   flex: 0 0 auto;
+   padding-bottom: .9rem
```

#### 421. `bundles/bloxd.io/main.css` (Changed code · before: `L7302-L7307` → after: `L8283-L8284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8283-L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8283-L8284) · [Before (L7302-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7302-L7307)

```diff
- .SocialCountBadge.SocialCountBadgeRequests .svg-inline--fa path:only-of-type,
- .SocialCountBadge.SocialCountBadgeRequests.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarFooter {
+   margin-top: auto
```

#### 422. `bundles/bloxd.io/main.css` (Changed code · before: `L7310-L7315` → after: `L8287-L8289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8287-L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8287-L8289) · [Before (L7310-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7310-L7315)

```diff
- .DailyDropPointerOutline {
-   animation: DailyDropPointerFlash .9s ease-in-out 6 alternate;
-   border: max(min(4px, .15em), 2px) solid #ffb914;
-   inset: 0;
-   pointer-events: none;
-   position: absolute
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarSameNetwork {
+   background-color: rgba(29, 208, 109, .1);
+   border-left: .2rem solid #1dd06d
```

#### 423. `bundles/bloxd.io/main.css` (Changed code · before: `L7318-L7320` → after: `L8292-L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8292-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8292-L8293) · [Before (L7318-L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7318-L7320)

```diff
- .DailyDropPointerOutline[data-off-screen],
- html[data-app-covered] .WholeAppWrapper .DailyDropPointerOutline {
-   animation-play-state: paused
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarSameNetwork .SocialSectionTitle {
+   color: #36e785
```

#### 424. `bundles/bloxd.io/main.css` (Changed code · before: `L7323-L7326` → after: `L8296-L8297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8296-L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8296-L8297) · [Before (L7323-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7323-L7326)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .DailyDropPointerOutline {
-     animation: none
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarSameNetwork .SocialSectionTitleLabel .svg-inline--fa {
+   margin-right: .3rem
```

#### 425. `bundles/bloxd.io/main.css` (Changed code · before: `L7329-L7345` → after: `L8300-L8302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8300-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8300-L8302) · [Before (L7329-L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7329-L7345)

```diff
- .DailyDropBubble {
-   align-items: center;
-   animation: 1.8s ease-in-out 3;
-   background-color: #ffb914;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   color: #22283b;
-   cursor: pointer;
-   display: flex;
-   font-size: 1.1rem;
-   font-weight: 700;
-   gap: .4rem;
-   line-height: 1;
-   padding: .3rem .7rem .3rem .4rem;
-   position: relative;
- ... (1 more removed lines; see GitHub link above)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarRecentPlayers .PlayerRows {
+   box-sizing: border-box;
+   padding: 0 .5rem
```

#### 426. `bundles/bloxd.io/main.css` (Changed code · before: `L7348-L7353` → after: `L8305-L8310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8305-L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8305-L8310) · [Before (L7348-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7348-L7353)

```diff
- .DailyDropBubble:after,
- .DailyDropBubble:before {
-   border-color: transparent;
-   border-style: solid;
-   content: "";
-   position: absolute
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .TitleContainer {
+   align-items: flex-start;
+   box-sizing: border-box;
+   flex: 0 0 auto;
+   font-size: 2.6rem;
+   padding: calc(1rem + var(--notchTop)) .5rem .3rem .5rem
```

#### 427. `bundles/bloxd.io/main.css` (Changed code · before: `L7356-L7358` → after: `L8313-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8313-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8313-L8317) · [Before (L7356-L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7356-L7358)

```diff
- .DailyDropBubble .DailyDropBubbleBlock {
-   animation: DailyDropBlockHop 1.8s ease-out 3;
-   font-size: 1.2rem
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentityTop {
+   align-items: flex-start;
+   display: flex;
+   gap: .5rem;
+   justify-content: space-between
```

#### 428. `bundles/bloxd.io/main.css` (Changed code · before: `L7361-L7362` → after: `L8320-L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8320-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8320-L8323) · [Before (L7361-L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7361-L7362)

```diff
- .DailyDropBubble.DailyDropBubbleBeside {
-   animation-name: DailyDropBubbleNudgeSideways
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentityTop .TitleContainer {
+   flex: 0 1 auto;
+   min-width: 0;
+   padding-right: .4rem
```

#### 429. `bundles/bloxd.io/main.css` (Changed code · before: `L7365-L7370` → after: `L8326-L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8326-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8326-L8327) · [Before (L7365-L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7365-L7370)

```diff
- .DailyDropBubble.DailyDropBubbleBeside:before {
-   border-right-color: #0f0f0f;
-   border-width: calc(.5rem + 1px) calc(.5rem + 1px) calc(.5rem + 1px) 0;
-   margin-top: calc(-.5rem + -1px);
-   right: calc(100% + 1px);
-   top: 50%
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentityTop .NotificationBellContainer {
+   padding: calc(1.3rem + var(--notchTop)) .5rem 0 0
```

#### 430. `bundles/bloxd.io/main.css` (Changed code · before: `L7373-L7378` → after: `L8330-L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8330-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8330-L8331) · [Before (L7373-L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7373-L7378)

```diff
- .DailyDropBubble.DailyDropBubbleBeside:after {
-   border-right-color: #ffb914;
-   border-width: .5rem .5rem .5rem 0;
-   margin-top: -.5rem;
-   right: 100%;
-   top: 50%
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialSectionTitle {
+   padding: 0 .5rem .4rem
```

#### 431. `bundles/bloxd.io/main.css` (Changed code · before: `L7381-L7385` → after: `L8334-L8335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8334-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8334-L8335) · [Before (L7381-L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7381-L7385)

```diff
- .DailyDropBubble.DailyDropBubbleBelow {
-   animation-name: DailyDropBubbleNudgeDown;
-   position: absolute;
-   right: calc(var(--daily-drop-bubble-shift, 0px)*-1);
-   top: calc(100% + var(--daily-drop-bubble-clear, 0px) + .8rem)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .OwnProfilePreview {
+   flex: 0 0 auto
```

#### 432. `bundles/bloxd.io/main.css` (Changed code · before: `L7388-L7392` → after: `L8338-L8339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8338-L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8338-L8339) · [Before (L7388-L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7388-L7392)

```diff
- .DailyDropBubble.DailyDropBubbleBelow:before {
-   border-bottom-color: #0f0f0f;
-   border-width: 0 calc(.5rem + 1px) calc(.5rem + 1px);
-   bottom: calc(100% + 1px);
-   right: calc(var(--daily-drop-anchor-width)/2 - .5rem - 2px + var(--daily-drop-bubble-shift, 0px))
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .OwnProfilePreview:has(+.SocialBarWallet) {
+   padding-bottom: 0
```

#### 433. `bundles/bloxd.io/main.css` (Changed code · before: `L7395-L7399` → after: `L8342-L8360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8342-L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8342-L8360) · [Before (L7395-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7395-L7399)

```diff
- .DailyDropBubble.DailyDropBubbleBelow:after {
-   border-bottom-color: #ffb914;
-   border-width: 0 .5rem .5rem;
-   bottom: 100%;
-   right: calc(var(--daily-drop-anchor-width)/2 - .5rem - 1px + var(--daily-drop-bubble-shift, 0px))
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet {
+   background: none;
+   background-color: rgba(57, 73, 128, .4);
+   border: none;
+   border-radius: 0;
+   box-sizing: content-box;
+   box-sizing: border-box;
+   color: inherit;
+   cursor: pointer;
+   display: flex;
+   font: inherit;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0 .5rem .8rem;
+   padding: 0 .8rem;
+   text-align: inherit;
+ ... (3 more added lines; see GitHub link above)
```

#### 434. `bundles/bloxd.io/main.css` (Changed code · before: `L7402-L7406` → after: `L8363-L8366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8363-L8366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8363-L8366) · [Before (L7402-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7402-L7406)

```diff
- .DailyDropBubble[data-off-screen],
- .DailyDropBubble[data-off-screen] .DailyDropBubbleBlock,
- html[data-app-covered] .WholeAppWrapper .DailyDropBubble,
- html[data-app-covered] .WholeAppWrapper .DailyDropBubble .DailyDropBubbleBlock {
-   animation-play-state: paused
+ @media(hover:hover) {
+   .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet:hover {
+     background-color: rgba(57, 73, 128, .6)
+   }
```

#### 435. `bundles/bloxd.io/main.css` (Changed code · before: `L7409` → after: `L8369-L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8369-L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8369-L8371) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7409)

```diff
- @media(prefers-reduced-motion:reduce) {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet.pad-focused {
+   background-color: rgba(57, 73, 128, .6)
+ }
```

#### 436. `bundles/bloxd.io/main.css` (Changed code · before: `L7411-L7414` → after: `L8373-L8375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8373-L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8373-L8375) · [Before (L7411-L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7411-L7414)

```diff
-   .DailyDropBubble .DailyDropBubbleBlock,
-   .DailyDropBubble.DailyDropBubbleBelow,
-   .DailyDropBubble.DailyDropBubbleBeside {
-     animation: none
+ @media(hover:none) {
+   .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet:active {
+     background-color: rgba(57, 73, 128, .6)
```

#### 437. `bundles/bloxd.io/main.css` (Changed code · before: `L7418-L7419` → after: `L8379-L8386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8379-L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8379-L8386) · [Before (L7418-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7418-L7419)

```diff
- .DailyDropBubbleBesidePositioner {
-   z-index: 15
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet[data-pressing] {
+   background-color: #3c4b68;
+   transition: none
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet .StoreWallet {
+   flex: 1 1;
+   justify-content: space-between
```

#### 438. `bundles/bloxd.io/main.css` (Changed code · before: `L7422-L7423` → after: `L8389-L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8389-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8389-L8390) · [Before (L7422-L7423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7422-L7423)

```diff
- .DailyDropBubbleBesidePositioner[data-popper-reference-hidden=true] {
-   visibility: hidden
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentity {
+   padding-bottom: 0
```

#### 439. `bundles/bloxd.io/main.css` (Changed code · before: `L7426-L7433` → after: `L8393-L8397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8393-L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8393-L8397) · [Before (L7426-L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7426-L7433)

```diff
- @keyframes DailyDropPointerFlash {
-   0% {
-     opacity: 1
-   }
- 
-   to {
-     opacity: .15
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection {
+   display: flex;
+   flex: 0 0 auto;
+   flex-direction: column;
+   width: 100%
```

#### 440. `bundles/bloxd.io/main.css` (Changed code · before: `L7436` → after: `L8400-L8402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8400-L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8400-L8402) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7436)

```diff
- @keyframes DailyDropBubbleNudgeSideways {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection .PartyBar {
+   padding: 0 .5rem
+ }
```

#### 441. `bundles/bloxd.io/main.css` (Changed code · before: `L7438-L7442` → after: `L8404-L8407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8404-L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8404-L8407) · [Before (L7438-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7438-L7442)

```diff
-   0%,
-   60%,
-   to {
-     transform: translateX(0)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection:has(.PartyInformation) {
+   background-color: rgba(155, 57, 213, .1);
+   border-left: .2rem solid #9b39d5
+ }
```

#### 442. `bundles/bloxd.io/main.css` (Changed code · before: `L7444-L7446` → after: `L8409-L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8409-L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8409-L8410) · [Before (L7444-L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7444-L7446)

```diff
-   30% {
-     transform: translateX(.4rem)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection:has(.PartyInformation) .SocialSectionTitle {
+   color: #d49cf9
```

#### 443. `bundles/bloxd.io/main.css` (Changed code · before: `L7449` → after: `L8413-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8413-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8413-L8415) · [Before (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7449)

```diff
- @keyframes DailyDropBubbleNudgeDown {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection:has(.PartyInformation) .PartyInformationMembers {
+   max-height: none
+ }
```

#### 444. `bundles/bloxd.io/main.css` (Changed code · before: `L7451-L7455` → after: `L8417-L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8417-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8417-L8424) · [Before (L7451-L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7451-L7455)

```diff
-   0%,
-   60%,
-   to {
-     transform: translateY(0)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody {
+   align-items: flex-start;
+   box-sizing: border-box;
+   display: flex;
+   flex: 0 0 auto;
+   flex-direction: column;
+   width: 100%
+ }
```

#### 445. `bundles/bloxd.io/main.css` (Changed code · before: `L7457-L7459` → after: `L8426-L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8426-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8426-L8431) · [Before (L7457-L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7457-L7459)

```diff
-   30% {
-     transform: translateY(.4rem)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer {
+   align-items: center;
+   display: flex;
+   justify-content: center;
+   padding-bottom: .5rem;
+   width: 100%
```

#### 446. `bundles/bloxd.io/main.css` (Changed code · before: `L7462` → after: `L8434-L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8434-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8434-L8441) · [Before (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7462)

```diff
- @keyframes DailyDropBlockHop {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer .SocialBarHiddenLocationWarning {
+   align-items: stretch;
+   background-color: rgba(255, 185, 20, .4);
+   border-radius: 0;
+   display: flex;
+   justify-content: center;
+   max-width: 100%
+ }
```

#### 447. `bundles/bloxd.io/main.css` (Changed code · before: `L7464-L7469` → after: `L8443-L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8443-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8443-L8450) · [Before (L7464-L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7464-L7469)

```diff
-   0%,
-   55%,
-   85%,
-   to {
-     transform: translateY(0)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer .SocialBarHiddenLocationWarning .SocialBarHiddenLocationWarningIcon {
+   align-items: center;
+   background-color: rgba(255, 185, 20, .4);
+   border-radius: 0;
+   display: flex;
+   justify-content: center;
+   padding: .5rem 1rem
+ }
```

#### 448. `bundles/bloxd.io/main.css` (Changed code · before: `L7471-L7473` → after: `L8452-L8454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8452-L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8452-L8454) · [Before (L7471-L7473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7471-L7473)

```diff
-   70% {
-     transform: translateY(-.3em)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer .SocialBarHiddenLocationWarning .SocialBarHiddenLocationWarningText {
+   min-width: 0;
+   padding: .3rem .5rem
```

#### 449. `bundles/bloxd.io/main.css` (Changed code · before: `L7476` → after: `L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8457) · [Before (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7476)

```diff
- .LuckySkinBlock {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarLoadingContainer {
```

#### 450. `bundles/bloxd.io/main.css` (Changed code · before: `L7479` → after: `L8460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8460) · [Before (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7479)

```diff
-   height: 1.6em;
+   font-size: 2rem;
```

#### 451. `bundles/bloxd.io/main.css` (Changed code · before: `L7481-L7482` → after: `L8462-L8463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8462-L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8462-L8463) · [Before (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7481-L7482)

```diff
-   perspective: 8em;
-   width: 1.6em
+   padding: 1rem 0;
+   width: 100%
```

#### 452. `bundles/bloxd.io/main.css` (Changed code · before: `L7485-L7490` → after: `L8466-L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8466-L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8466-L8469) · [Before (L7485-L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7485-L7490)

```diff
- .LuckySkinBlock .LuckySkinBlockCube {
-   height: 1em;
-   position: relative;
-   transform: rotateX(-28deg) rotateY(-45deg);
-   transform-style: preserve-3d;
-   width: 1em
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarEmpty {
+   font-size: 1.1rem;
+   opacity: .5;
+   padding: .3rem .5rem
```

#### 453. `bundles/bloxd.io/main.css` (Changed code · before: `L7493-L7502` → after: `L8472-L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8472-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8472-L8476) · [Before (L7493-L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7493-L7502)

```diff
- .LuckySkinBlock .LuckySkinBlockFace {
-   -ms-interpolation-mode: nearest-neighbor;
-   backface-visibility: hidden;
-   background-size: 100% 100%;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   inset: 0;
-   position: absolute
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarNetworkPlayers {
+   box-sizing: border-box;
+   flex: 0 0 auto;
+   padding: 0 .5rem;
+   width: 100%
```

#### 454. `bundles/bloxd.io/main.css` (Changed code · before: `L7505-L7506` → after: `L8479-L8480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8479-L8480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8479-L8480) · [Before (L7505-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7505-L7506)

```diff
- .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockFront {
-   transform: translateZ(.5em)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriendsHeader {
+   padding-bottom: 0
```

#### 455. `bundles/bloxd.io/main.css` (Changed code · before: `L7509-L7511` → after: `L8483-L8484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8483-L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8483-L8484) · [Before (L7509-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7509-L7511)

```diff
- .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockSide {
-   filter: brightness(.8);
-   transform: rotateY(90deg) translateZ(.5em)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriendsHeader.SocialBarFriendsHeaderAlone {
+   padding-bottom: .9rem
```

#### 456. `bundles/bloxd.io/main.css` (Changed code · before: `L7514-L7516` → after: `L8487-L8490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8487-L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8487-L8490) · [Before (L7514-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7514-L7516)

```diff
- .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockTop {
-   transform: rotateX(90deg) translateZ(.5em);
-   transition: transform .45s ease-out, opacity .45s ease-in
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends {
+   flex: 0 0 auto;
+   overflow: hidden;
+   padding: .5rem
```

#### 457. `bundles/bloxd.io/main.css` (Changed code · before: `L7519-L7521` → after: `L8493-L8498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8493-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8493-L8498) · [Before (L7519-L7521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7519-L7521)

```diff
- .LuckySkinBlock.LuckySkinBlockOpen .LuckySkinBlockFace.LuckySkinBlockTop {
-   opacity: 0;
-   transform: translateY(-.9em) rotateX(90deg) rotateY(-35deg) translateZ(.5em)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends .SocialBarFriendsEmptyButton {
+   align-items: center;
+   display: flex;
+   font-size: 1rem;
+   gap: .4rem;
+   padding: .4rem 1rem
```

#### 458. `bundles/bloxd.io/main.css` (Changed code · before: `L7524-L7527` → after: `L8501-L8504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8501-L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8501-L8504) · [Before (L7524-L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7524-L7527)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .LuckySkinBlock .LuckySkinBlockFace.LuckySkinBlockTop {
-     transition: opacity .2s linear
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsAddOnly {
+   display: flex;
+   justify-content: center
+ }
```

#### 459. `bundles/bloxd.io/main.css` (Changed code · before: `L7529-L7531` → after: `L8506-L8510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8506-L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8506-L8510) · [Before (L7529-L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7529-L7531)

```diff
-   .LuckySkinBlock.LuckySkinBlockOpen .LuckySkinBlockFace.LuckySkinBlockTop {
-     transform: rotateX(90deg) translateZ(.5em)
-   }
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsAddOnly .SocialBarFriendsAddButtons {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem
```

#### 460. `bundles/bloxd.io/main.css` (Changed code · before: `L7534` → after: `L8513-L8531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8513-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8513-L8531) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7534)

```diff
- .NewPlayerDealChip {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty {
+   align-content: start;
+   display: grid
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsEmptyMessage,
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows {
+   grid-area: 1/1
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, .6), transparent);
+   mask-image: linear-gradient(180deg, rgba(0, 0, 0, .6), transparent)
+ ... (3 more added lines; see GitHub link above)
```

#### 461. `bundles/bloxd.io/main.css` (Changed code · before: `L7539-L7545` → after: `L8534-L8538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8534-L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8534-L8538) · [Before (L7539-L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7539-L7545)

```diff
-   color: #fcd373;
-   display: inline-flex;
-   font-size: max(.8rem, 11px);
-   font-weight: 900;
-   gap: .25rem;
-   padding: .1rem .45rem;
-   white-space: nowrap
+   box-sizing: border-box;
+   display: flex;
+   gap: .6rem;
+   height: 2.7rem;
+   padding: 0 .5rem
```

#### 462. `bundles/bloxd.io/main.css` (Changed code · before: `L7548-L7550` → after: `L8541-L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8541-L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8541-L8545) · [Before (L7548-L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7548-L7550)

```diff
- .NewPlayerDealChip svg {
-   height: .85em;
-   width: .85em
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderAvatar {
+   background-color: hsla(0, 0%, 95%, .12);
+   flex: 0 0 auto;
+   height: 1.8rem;
+   width: 1.8rem
```

#### 463. `bundles/bloxd.io/main.css` (Changed code · before: `L7553-L7555` → after: `L8548-L8552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8548-L8552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8548-L8552) · [Before (L7553-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7553-L7555)

```diff
- .CountdownTime {
-   display: inline-flex;
-   justify-content: flex-start
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderLines {
+   display: flex;
+   flex: 1 1 auto;
+   flex-direction: column;
+   gap: .35rem
```

#### 464. `bundles/bloxd.io/main.css` (Changed code · before: `L7558-L7560` → after: `L8555-L8558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8555-L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8555-L8558) · [Before (L7558-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7558-L7560)

```diff
- .CountdownTime .CountdownTimePart {
-   background-color: rgba(0, 0, 0, .2);
-   padding: 0 .1rem
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderLines .SocialBarFriendsPlaceholderLine {
+   background-color: hsla(0, 0%, 95%, .12);
+   height: .5rem;
+   width: 55%
```

#### 465. `bundles/bloxd.io/main.css` (Changed code · before: `L7563-L7566` → after: `L8561-L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8561-L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8561-L8562) · [Before (L7563-L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7563-L7566)

```diff
- .DaysClockCountdown {
-   font-feature-settings: "tnum";
-   font-variant-numeric: tabular-nums;
-   white-space: nowrap
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderLines .SocialBarFriendsPlaceholderLine+.SocialBarFriendsPlaceholderLine {
+   width: 35%
```

#### 466. `bundles/bloxd.io/main.css` (Changed code · before: `L7569-L7574` → after: `L8565-L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8565-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8565-L8571) · [Before (L7569-L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7569-L7574)

```diff
- .SocialBarContainer {
-   --collapsed-width: 5rem;
-   --docked-width: 19rem;
-   --social-bar-opacity: 0.45;
-   box-sizing: border-box;
-   height: 100%;
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsEmptyMessage {
+   align-items: stretch;
+   align-self: center;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem;
+   padding: .5rem;
```

#### 467. `bundles/bloxd.io/main.css` (Changed code · before: `L7576-L7577` → after: `L8573-L8585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8573-L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8573-L8585) · [Before (L7576-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7576-L7577)

```diff
-   width: var(--collapsed-width);
-   z-index: 15
+   text-align: center
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsEmptyMessage .SocialBarFriendsEmptyText {
+   color: #cfcfcf;
+   font-size: 1rem
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter {
+   box-sizing: border-box;
+   flex: 0 0 auto;
+   padding-bottom: calc(.8rem + var(--notchBottom));
+   width: 100%
```

#### 468. `bundles/bloxd.io/main.css` (Changed code · before: `L7580-L7581` → after: `L8588-L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8588-L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8588-L8590) · [Before (L7580-L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7580-L7581)

```diff
- .SocialBarContainer .SocialBarOuter {
-   height: 100%
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions {
+   flex: 0 0 auto;
+   width: 100%
```

#### 469. `bundles/bloxd.io/main.css` (Changed code · before: `L7584` → after: `L8593-L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8593-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8593-L8594) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7584)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner {
+   align-items: stretch;
```

#### 470. `bundles/bloxd.io/main.css` (Changed code · before: `L7586-L7589` → after: `L8596-L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8596-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8596-L8600) · [Before (L7586-L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7586-L7589)

```diff
-   height: 100%;
-   left: 0;
-   position: absolute;
-   width: var(--collapsed-width)
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   padding: 0 .5rem .6rem;
+   width: 100%
```

#### 471. `bundles/bloxd.io/main.css` (Changed code · before: `L7592-L7593` → after: `L8603-L8609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8603-L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8603-L8609) · [Before (L7592-L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7592-L7593)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner {
-   cursor: pointer;
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner.SocialBarActionsDisabled {
+   filter: brightness(50%);
+   pointer-events: none
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow {
+   align-items: stretch;
```

#### 472. `bundles/bloxd.io/main.css` (Changed code · before: `L7595-L7596` → after: `L8611-L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8611-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8611-L8613) · [Before (L7595-L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7595-L7596)

```diff
-   justify-content: flex-end;
-   pointer-events: auto
+   gap: .5rem;
+   min-width: 0;
+   position: relative
```

#### 473. `bundles/bloxd.io/main.css` (Changed code · before: `L7599-L7600` → after: `L8616-L8621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8616-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8616-L8621) · [Before (L7599-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7599-L7600)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .SocialBarDividerContainer {
-   background-color: rgba(57, 73, 128, .4)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarShopDealTag {
+   bottom: calc(100% - .6rem);
+   pointer-events: none;
+   position: absolute;
+   right: 0;
+   z-index: 2
```

#### 474. `bundles/bloxd.io/main.css` (Changed code · before: `L7603-L7608` → after: `L8624-L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8624-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8624-L8629) · [Before (L7603-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7603-L7608)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .SocialBarDividerContainer .SocialBarDivider {
-   background-color: #a4a4a4;
-   height: .2rem;
-   margin-left: 10%;
-   opacity: .4;
-   width: 80%
+ @supports(overflow-x:clip) {
+   @media(pointer:coarse) {
+     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow:not(:empty) {
+       margin-bottom: max(0px, (44px - 2.4rem)/2 - .5rem)
+     }
+   }
```

#### 475. `bundles/bloxd.io/main.css` (Changed code · before: `L7611-L7615` → after: `L8632-L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8632-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8632-L8636) · [Before (L7611-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7611-L7615)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   width: var(--collapsed-width)
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton {
+   flex: 1 1;
+   font-size: 1rem;
+   min-width: 0;
+   position: relative
```

#### 476. `bundles/bloxd.io/main.css` (Changed code · before: `L7618-L7622` → after: `L8639-L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8639-L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8639-L8650) · [Before (L7618-L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7618-L7622)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   max-width: var(--collapsed-width)
+ @supports(overflow-x:clip) {
+   @media(pointer:coarse) {
+     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton:before {
+       content: "";
+       inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
+       position: absolute
+     }
+ 
+     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton {
+       overflow-x: clip
+     }
+   }
```

#### 477. `bundles/bloxd.io/main.css` (Changed code · before: `L7625` → after: `L8653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8653) · [Before (L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7625)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection {
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionButton {
```

#### 478. `bundles/bloxd.io/main.css` (Changed code · before: `L7629-L7630` → after: `L8658-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8658-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8658-L8660) · [Before (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7629-L7630)

```diff
-   flex-direction: row;
-   gap: .3rem;
+   font-size: 1.2rem;
+   gap: .5rem;
+   height: 2.4rem;
```

#### 479. `bundles/bloxd.io/main.css` (Changed code · before: `L7632` → after: `L8662-L8664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8662-L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8662-L8664) · [Before (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7632)

```diff
-   padding: .2rem .5rem
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 480. `bundles/bloxd.io/main.css` (Changed code · before: `L7635-L7640` → after: `L8667-L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8667-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8667-L8674) · [Before (L7635-L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7635-L7640)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection .CondensedSectionValue {
-   align-items: flex-end;
-   display: flex;
-   font-size: 1.5rem;
-   font-weight: 700;
-   justify-content: center
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarShopButton .SocialBarShopDot {
+   background-color: #e34f4f;
+   height: .6rem;
+   pointer-events: none;
+   position: absolute;
+   right: .3rem;
+   top: .3rem;
+   width: .6rem
```

#### 481. `bundles/bloxd.io/main.css` (Changed code · before: `L7643-L7644` → after: `L8677-L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8677-L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8677-L8688) · [Before (L7643-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7643-L7644)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection .CondensedSectionIcon {
-   align-items: flex-end;
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarShopButton .SocialBarShopDot.SocialBarShopDotLow {
+   bottom: .3rem;
+   top: auto
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow.SocialBarActionsRowDeal .SocialBarActionButton {
+   height: auto;
+   min-height: 3.1rem
+ }
+ 
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarShopButton .SocialBarShopLabel {
+   align-items: center;
```

#### 482. `bundles/bloxd.io/main.css` (Changed code · before: `L7646-L7650` → after: `L8690-L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8690-L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8690-L8693) · [Before (L7646-L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7646-L7650)

```diff
-   font-size: 1.2rem;
-   justify-content: flex-start;
-   opacity: .6;
-   padding-top: .3rem;
-   width: 50%
+   flex-direction: column;
+   gap: .1rem;
+   line-height: 1.1;
+   min-width: 0
```

#### 483. `bundles/bloxd.io/main.css` (Changed code · before: `L7653-L7654` → after: `L8696-L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8696-L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8696-L8699) · [Before (L7653-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7653-L7654)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection:first-of-type {
-   border-radius: 0 0 0 0
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarShopButton .SocialBarShopLabel .SocialBarShopLine {
+   align-items: center;
+   display: flex;
+   gap: .5rem
```

#### 484. `bundles/bloxd.io/main.css` (Changed code · before: `L7657-L7659` → after: `L8702-L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8702-L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8702-L8705) · [Before (L7657-L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7657-L7659)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection:last-of-type {
-   border-radius: 0 0 0 0;
-   padding-bottom: .5rem
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarDealChipRow {
+   display: flex;
+   justify-content: flex-end;
+   margin-top: .3rem
```

#### 485. `bundles/bloxd.io/main.css` (Changed code · before: `L7662-L7663` → after: `L8708-L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8708-L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8708-L8712) · [Before (L7662-L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7662-L7663)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection.CondensedSectionParty {
-   background-color: rgba(155, 57, 213, var(--social-bar-opacity))
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarDealChipRow .SocialBarDealChipButton {
+   background: none;
+   border: none;
+   cursor: pointer;
+   padding: 0
```

#### 486. `bundles/bloxd.io/main.css` (Changed code · before: `L7666-L7668` → after: `L8715-L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8715-L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8715-L8720) · [Before (L7666-L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7666-L7668)

```diff
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection.CondensedSectionFriendRequests,
- .SocialBarContainer .SocialBarOuter .SocialBar .CondensedSocialBarInner .CondensedSectionsContainer .CondensedSections .CondensedSection.CondensedSectionOnlineFriends {
-   background-color: rgba(57, 73, 128, .4)
+ @media(pointer:coarse) {
+   .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarDealChipRow .SocialBarDealChipButton {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 487. `bundles/bloxd.io/main.css` (Changed code · before: `L7671-L7672` → after: `L8723-L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8723-L8724) · [Before (L7671-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7671-L7672)

```diff
- .SocialBarContainer.Docked {
-   width: calc(var(--docked-width) + var(--notchLeft))
+ .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .HomeLinkButtons {
+   padding: 0 .5rem
```

#### 488. `bundles/bloxd.io/main.css` (Changed code · before: `L7675-L7676` → after: `L8727-L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8727-L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8727-L8729) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7675-L7676)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar {
-   position: relative;
+ .OwnProfilePreview {
+   gap: .5rem;
+   padding: .8rem .5rem;
```

#### 489. `bundles/bloxd.io/main.css` (Changed code · before: `L7680-L7682` → after: `L8733-L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8733-L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8733-L8735) · [Before (L7680-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7680-L7682)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner {
-   background-color: #22283b;
-   border-radius: 0;
+ .OwnProfilePreview,
+ .OwnProfilePreview .OwnProfilePreviewCard {
+   align-items: stretch;
```

#### 490. `bundles/bloxd.io/main.css` (Changed code · before: `L7685-L7694` → after: `L8738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8738) · [Before (L7685-L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7685-L7694)

```diff
-   flex-direction: column;
-   height: 100%;
-   overflow-x: hidden;
-   overflow-y: auto;
-   padding-left: var(--notchLeft);
-   pointer-events: auto;
-   position: relative;
-   scrollbar-color: #3c4b68 #22283b;
-   scrollbar-width: thin;
-   z-index: 2
+   flex-direction: column
```

#### 491. `bundles/bloxd.io/main.css` (Changed code · before: `L7697-L7699` → after: `L8741-L8747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8741-L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8741-L8747) · [Before (L7697-L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7697-L7699)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner::-webkit-scrollbar {
-   height: 6px;
-   width: 6px
+ .OwnProfilePreview .OwnProfilePreviewCard {
+   background-color: rgba(57, 73, 128, .4);
+   border: .2rem solid hsla(0, 0%, 95%, .2);
+   border-radius: 0;
+   cursor: pointer;
+   min-width: 0;
+   transition: background-color .2s
```

#### 492. `bundles/bloxd.io/main.css` (Changed code · before: `L7702-L7703` → after: `L8750-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8750-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8750-L8757) · [Before (L7702-L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7702-L7703)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner::-webkit-scrollbar-track {
-   background-color: #22283b
+ @media(hover:hover) {
+   .OwnProfilePreview .OwnProfilePreviewCard:hover {
+     background-color: rgba(57, 73, 128, .6)
+   }
+ 
+   .OwnProfilePreview .OwnProfilePreviewCard:hover .OwnProfilePreviewSettings {
+     color: #f2f2f2
+   }
```

#### 493. `bundles/bloxd.io/main.css` (Changed code · before: `L7706-L7708` → after: `L8760-L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8760-L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8760-L8761) · [Before (L7706-L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7706-L7708)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner::-webkit-scrollbar-thumb {
-   background-color: #3c4b68;
-   border-radius: 0
+ .OwnProfilePreview .OwnProfilePreviewCard.pad-focused {
+   background-color: rgba(57, 73, 128, .6)
```

#### 494. `bundles/bloxd.io/main.css` (Changed code · before: `L7711-L7714` → after: `L8764-L8765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8764-L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8764-L8765) · [Before (L7711-L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7711-L7714)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .PartyInformationMembers .ProfilePreview,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .PlayerRows .ProfilePreview,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriendsPlaceholderRow {
-   background-color: rgba(57, 73, 128, .4)
+ .OwnProfilePreview .OwnProfilePreviewCard.pad-focused .OwnProfilePreviewSettings {
+   color: #f2f2f2
```

#### 495. `bundles/bloxd.io/main.css` (Changed code · before: `L7717-L7721` → after: `L8768-L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8768-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8768-L8775) · [Before (L7717-L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7717-L7721)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection {
-   box-sizing: border-box;
-   width: 100%
+ @media(hover:none) {
+   .OwnProfilePreview .OwnProfilePreviewCard:active {
+     background-color: rgba(57, 73, 128, .6)
+   }
+ 
+   .OwnProfilePreview .OwnProfilePreviewCard:active .OwnProfilePreviewSettings {
+     color: #f2f2f2
+   }
```

#### 496. `bundles/bloxd.io/main.css` (Changed code · before: `L7724-L7730` → after: `L8778-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8778-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8778-L8780) · [Before (L7724-L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7724-L7730)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarPeople,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarSection,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarPeople,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarSection,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarPeople,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarSection {
-   border-top: .1rem solid hsla(0, 0%, 95%, .1)
+ .OwnProfilePreview .OwnProfilePreviewCard[data-pressing] {
+   border-color: #ffb914;
+   transition: none
```

#### 497. `bundles/bloxd.io/main.css` (Changed code · before: `L7733-L7739` → after: `L8783-L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8783-L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8783-L8785) · [Before (L7733-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7733-L7739)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarPeople>.SocialBarSection:first-child,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends+.SocialBarSection,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarPeople>.SocialBarSection:first-child,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople+.SocialBarSection,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarPeople>.SocialBarSection:first-child,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection+.SocialBarSection {
-   padding-top: .9rem
+ .OwnProfilePreview .OwnProfilePreviewCard[data-pressing] .ProfilePreview .OwnProfilePreviewSettings {
+   color: #ffb914;
+   transition: none
```

#### 498. `bundles/bloxd.io/main.css` (Changed code · before: `L7742-L7750` → after: `L8788-L8792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8788-L8792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8788-L8792) · [Before (L7742-L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7742-L7750)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople {
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   min-height: 13.1rem;
-   overflow-x: hidden;
-   overflow-y: auto;
-   scrollbar-color: #3c4b68 #22283b;
-   scrollbar-width: thin
+ .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview {
+   background-color: transparent;
+   cursor: inherit;
+   font-size: 1.2rem;
+   min-width: 0
```

#### 499. `bundles/bloxd.io/main.css` (Changed code · before: `L7753-L7755` → after: `L8795-L8798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8795-L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8795-L8798) · [Before (L7753-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7753-L7755)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople::-webkit-scrollbar {
-   height: 6px;
-   width: 6px
+ @media(hover:hover) {
+   .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview:hover {
+     background-color: transparent
+   }
```

#### 500. `bundles/bloxd.io/main.css` (Changed code · before: `L7758-L7759` → after: `L8801-L8802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8801-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8801-L8802) · [Before (L7758-L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7758-L7759)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople::-webkit-scrollbar-track {
-   background-color: #22283b
+ .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview.pad-focused {
+   background-color: transparent
```

#### 501. `bundles/bloxd.io/main.css` (Changed code · before: `L7762-L7764` → after: `L8805-L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8805-L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8805-L8808) · [Before (L7762-L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7762-L7764)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPeople::-webkit-scrollbar-thumb {
-   background-color: #3c4b68;
-   border-radius: 0
+ @media(hover:none) {
+   .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview:active {
+     background-color: transparent
+   }
```

#### 502. `bundles/bloxd.io/main.css` (Changed code · before: `L7767-L7769` → after: `L8811-L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8811-L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8811-L8812) · [Before (L7767-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7767-L7769)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection {
-   flex: 0 0 auto;
-   padding-bottom: .9rem
+ .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview .ProfilePreviewStatusDot {
+   display: none
```

#### 503. `bundles/bloxd.io/main.css` (Changed code · before: `L7772-L7773` → after: `L8815-L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8815-L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8815-L8822) · [Before (L7772-L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7772-L7773)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarFooter {
-   margin-top: auto
+ .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview .OwnProfilePreviewSettings {
+   align-items: center;
+   color: #a4a4a4;
+   display: flex;
+   font-size: 1.3rem;
+   justify-content: center;
+   padding: 0 .7rem;
+   transition: color .2s
```

#### 504. `bundles/bloxd.io/main.css` (Changed code · before: `L7776-L7778` → after: `L8825-L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8825-L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8825-L8830) · [Before (L7776-L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7776-L7778)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarSameNetwork {
-   background-color: rgba(29, 208, 109, .1);
-   border-left: .2rem solid #1dd06d
+ .OwnProfilePreview .OwnProfilePreviewCard .OwnProfilePreviewLoginWarning {
+   align-items: center;
+   background-color: rgba(255, 185, 20, .3);
+   border-top: .2rem solid hsla(0, 0%, 95%, .2);
+   display: flex;
+   min-width: 0
```

#### 505. `bundles/bloxd.io/main.css` (Changed code · before: `L7781-L7782` → after: `L8833-L8840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8833-L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8833-L8840) · [Before (L7781-L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7781-L7782)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarSameNetwork .SocialSectionTitle {
-   color: #36e785
+ .OwnProfilePreview .OwnProfilePreviewCard .OwnProfilePreviewLoginWarning .OwnProfilePreviewLoginWarningIcon {
+   align-items: center;
+   color: #fcd373;
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1.1rem;
+   justify-content: center;
+   padding: .4rem .6rem
```

#### 506. `bundles/bloxd.io/main.css` (Changed code · before: `L7785-L7786` → after: `L8843-L8847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8843-L8847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8843-L8847) · [Before (L7785-L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7785-L7786)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarSameNetwork .SocialSectionTitleLabel .svg-inline--fa {
-   margin-right: .3rem
+ .OwnProfilePreview .OwnProfilePreviewCard .OwnProfilePreviewLoginWarning .OwnProfilePreviewLoginWarningText {
+   font-size: 1rem;
+   line-height: 1.2;
+   min-width: 0;
+   padding: .4rem .6rem .4rem 0
```

#### 507. `bundles/bloxd.io/main.css` (Changed code · before: `L7789-L7791` → after: `L8850-L8851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8850-L8851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8850-L8851) · [Before (L7789-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7789-L7791)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarSection.SocialBarRecentPlayers .PlayerRows {
-   box-sizing: border-box;
-   padding: 0 .5rem
+ .OwnProfilePreview.OwnProfilePreviewLoading {
+   pointer-events: none
```

#### 508. `bundles/bloxd.io/main.css` (Changed code · before: `L7794-L7799` → after: `L8854-L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8854-L8855) · [Before (L7794-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7794-L7799)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .TitleContainer {
-   align-items: flex-start;
-   box-sizing: border-box;
-   flex: 0 0 auto;
-   font-size: 2.6rem;
-   padding: calc(1rem + var(--notchTop)) .5rem .3rem .5rem
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewCard {
+   cursor: default
```

#### 509. `bundles/bloxd.io/main.css` (Changed code · before: `L7802-L7803` → after: `L8858-L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8858-L8859) · [Before (L7802-L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7802-L7803)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentityTop {
-   align-items: flex-start;
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonRow {
+   align-items: center;
```

#### 510. `bundles/bloxd.io/main.css` (Changed code · before: `L7805-L7806` → after: `L8861-L8863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8861-L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8861-L8863) · [Before (L7805-L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7805-L7806)

```diff
-   gap: .5rem;
-   justify-content: space-between
+   gap: .6rem;
+   min-height: 3.24rem;
+   padding: 0 .7rem
```

#### 511. `bundles/bloxd.io/main.css` (Changed code · before: `L7809-L7812` → after: `L8866-L8871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8866-L8871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8866-L8871) · [Before (L7809-L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7809-L7812)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentityTop .TitleContainer {
-   flex: 0 1 auto;
-   min-width: 0;
-   padding-right: .4rem
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonAvatar,
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonName,
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonSettings {
+   animation: ownProfilePreviewSkeletonPulse 1.5s ease-in-out infinite alternate;
+   background-color: hsla(0, 0%, 95%, .15);
+   border-radius: 0
```

#### 512. `bundles/bloxd.io/main.css` (Changed code · before: `L7815-L7816` → after: `L8874-L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8874-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8874-L8880) · [Before (L7815-L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7815-L7816)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentityTop .NotificationBellContainer {
-   padding: calc(1.3rem + var(--notchTop)) .5rem 0 0
+ @media(prefers-reduced-motion:reduce) {
+ 
+   .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonAvatar,
+   .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonName,
+   .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonSettings {
+     animation: none
+   }
```

#### 513. `bundles/bloxd.io/main.css` (Changed code · before: `L7819-L7820` → after: `L8883-L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8883-L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8883-L8885) · [Before (L7819-L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7819-L7820)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialSectionTitle {
-   padding: 0 .5rem .4rem
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonAvatar {
+   flex: 0 0 2.4rem;
+   height: 2.4rem
```

#### 514. `bundles/bloxd.io/main.css` (Changed code · before: `L7823-L7824` → after: `L8888-L8890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8888-L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8888-L8890) · [Before (L7823-L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7823-L7824)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .OwnProfilePreview {
-   flex: 0 0 auto
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonName {
+   height: 1rem;
+   width: 45%
```

#### 515. `bundles/bloxd.io/main.css` (Changed code · before: `L7827-L7828` → after: `L8893-L8896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8893-L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8893-L8896) · [Before (L7827-L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7827-L7828)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .OwnProfilePreview:has(+.SocialBarWallet) {
-   padding-bottom: 0
+ .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonSettings {
+   flex: 0 0 1.3rem;
+   height: 1.3rem;
+   margin-left: auto
```

#### 516. `bundles/bloxd.io/main.css` (Changed code · before: `L7831-L7834` → after: `L8899-L8910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8899-L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8899-L8910) · [Before (L7831-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7831-L7834)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet {
-   background: none;
-   background-color: rgba(57, 73, 128, .4);
-   border: none;
+ @keyframes ownProfilePreviewSkeletonPulse {
+   0% {
+     opacity: .45
+   }
+ 
+   to {
+     opacity: 1
+   }
+ }
+ 
+ .ProfilePreview {
+   align-items: stretch;
```

#### 517. `bundles/bloxd.io/main.css` (Changed code · before: `L7841-L7849` → after: `L8914-L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8914-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8914-L8919) · [Before (L7841-L7849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7841-L7849)

```diff
-   font: inherit;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0 .5rem .8rem;
-   padding: 0 .8rem;
-   text-align: inherit;
-   text-shadow: inherit;
-   text-transform: inherit;
-   width: calc(100% - 1rem)
+   font-size: 1rem;
+   justify-content: flex-start;
+   min-width: 0;
+   overflow: visible;
+   position: relative;
+   transition: opacity .3s
```

#### 518. `bundles/bloxd.io/main.css` (Changed code · before: `L7853` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8923) · [Before (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7853)

```diff
-   .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet:hover {
+   .ProfilePreview:hover {
```

#### 519. `bundles/bloxd.io/main.css` (Changed code · before: `L7858` → after: `L8928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8928) · [Before (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7858)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet.pad-focused {
+ .ProfilePreview.pad-focused {
```

#### 520. `bundles/bloxd.io/main.css` (Changed code · before: `L7863` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8933) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7863)

```diff
-   .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet:active {
+   .ProfilePreview:active {
```

#### 521. `bundles/bloxd.io/main.css` (Changed code · before: `L7868-L7899` → after: `L8938-L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8938-L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8938-L8945) · [Before (L7868-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7868-L7899)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet[data-pressing] {
-   background-color: #3c4b68;
-   transition: none
- }
- 
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarWallet .StoreWallet {
-   flex: 1 1;
-   justify-content: space-between
- }
- 
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarIdentity {
-   padding-bottom: 0
- }
- 
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection {
-   display: flex;
- ... (16 more removed lines; see GitHub link above)
+ .ProfilePreview .ProfilePreviewBackground {
+   border-radius: inherit;
+   font-size: .5em;
+   inset: 0;
+   opacity: .6;
+   pointer-events: none;
+   position: absolute;
+   z-index: 0
```

#### 522. `bundles/bloxd.io/main.css` (Changed code · before: `L7902-L7903` → after: `L8948-L8954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8948-L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8948-L8954) · [Before (L7902-L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7902-L7903)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarPartySection:has(.PartyInformation) .PartyInformationMembers {
-   max-height: none
+ .ProfilePreview .ProfilePreviewBackground:after {
+   background-color: rgba(0, 0, 0, .5);
+   border-radius: inherit;
+   content: "";
+   inset: 0;
+   pointer-events: none;
+   position: absolute
```

#### 523. `bundles/bloxd.io/main.css` (Changed code · before: `L7906-L7907` → after: `L8957-L8958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8957-L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8957-L8958) · [Before (L7906-L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7906-L7907)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody {
-   align-items: flex-start;
+ .ProfilePreview .ProfilePreviewLeft {
+   border-radius: 0;
```

#### 524. `bundles/bloxd.io/main.css` (Changed code · before: `L7909-L7912` → after: `L8960-L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8960-L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8960-L8966) · [Before (L7909-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7909-L7912)

```diff
-   display: flex;
-   flex: 0 0 auto;
-   flex-direction: column;
-   width: 100%
+   flex-shrink: 0;
+   height: 2.7em;
+   pointer-events: none;
+   position: relative;
+   transform: translateY(-.5em);
+   width: 2.7em;
+   z-index: 1
```

#### 525. `bundles/bloxd.io/main.css` (Changed code · before: `L7915-L7916` → after: `L8969-L8970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8969-L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8969-L8970) · [Before (L7915-L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7915-L7916)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer {
-   align-items: center;
+ .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFPHat {
+   align-items: flex-end;
```

#### 526. `bundles/bloxd.io/main.css` (Changed code · before: `L7919` → after: `L8974-L8977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8974-L8977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8974-L8977) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7919)

```diff
-   padding-bottom: .5rem;
+   left: 0;
+   position: absolute;
+   top: .3em;
+   transform: translateY(calc(-100% + .15em));
```

#### 527. `bundles/bloxd.io/main.css` (Changed code · before: `L7923-L7946` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8981) · [Before (L7923-L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7923-L7946)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer .SocialBarHiddenLocationWarning {
-   align-items: stretch;
-   background-color: rgba(255, 185, 20, .4);
-   border-radius: 0;
-   display: flex;
-   justify-content: center;
-   max-width: 100%
- }
- 
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarHiddenLocationWarningContainer .SocialBarHiddenLocationWarning .SocialBarHiddenLocationWarningIcon {
-   align-items: center;
-   background-color: rgba(255, 185, 20, .4);
-   border-radius: 0;
-   display: flex;
-   justify-content: center;
-   padding: .5rem 1rem
- ... (8 more removed lines; see GitHub link above)
+ .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFP {
```

#### 528. `bundles/bloxd.io/main.css` (Changed code · before: `L7949` → after: `L8987-L8988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8987-L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8987-L8988) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7949)

```diff
-   font-size: 2rem;
+   font-size: 1.8em;
+   height: 100%;
```

#### 529. `bundles/bloxd.io/main.css` (Changed code · before: `L7955-L7958` → after: `L8993-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8993-L8995) · [Before (L7955-L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7955-L7958)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarEmpty {
-   font-size: 1.1rem;
-   opacity: .5;
-   padding: .3rem .5rem
+ .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFP .svg-inline--fa {
+   color: #cfcfcf;
+   font-size: .83em
```

#### 530. `bundles/bloxd.io/main.css` (Changed code · before: `L7961-L7965` → after: `L8998-L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8998-L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L8998-L8999) · [Before (L7961-L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7961-L7965)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarBody .SocialBarNetworkPlayers {
-   box-sizing: border-box;
-   flex: 0 0 auto;
-   padding: 0 .5rem;
-   width: 100%
+ .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFP .ProfilePicture {
+   z-index: 1
```

#### 531. `bundles/bloxd.io/main.css` (Changed code · before: `L7968-L7969` → after: `L9002-L9009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9002-L9009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9002-L9009) · [Before (L7968-L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7968-L7969)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriendsHeader {
-   padding-bottom: 0
+ .ProfilePreview .ProfilePreviewLeft .ProfilePreviewStatusDot {
+   border: .2em solid #394980;
+   bottom: 0;
+   height: .6em;
+   position: absolute;
+   right: -.3em;
+   width: .6em;
+   z-index: 2
```

#### 532. `bundles/bloxd.io/main.css` (Changed code · before: `L7972-L7973` → after: `L9012-L9018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9012-L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9012-L9018) · [Before (L7972-L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7972-L7973)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriendsHeader.SocialBarFriendsHeaderAlone {
-   padding-bottom: .9rem
+ .ProfilePreview .ProfilePreviewTrailing {
+   align-items: center;
+   display: flex;
+   flex-shrink: 0;
+   margin-left: auto;
+   position: relative;
+   z-index: 1
```

#### 533. `bundles/bloxd.io/main.css` (Changed code · before: `L7976-L7979` → after: `L9021-L9029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9021-L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9021-L9029) · [Before (L7976-L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7976-L7979)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends {
-   flex: 0 0 auto;
-   overflow: hidden;
-   padding: .5rem
+ .ProfilePreview .ProfilePreviewRight {
+   display: flex;
+   flex-direction: column;
+   justify-content: space-around;
+   min-width: 0;
+   padding: 0 .5em;
+   pointer-events: none;
+   position: relative;
+   z-index: 1
```

#### 534. `bundles/bloxd.io/main.css` (Changed code · before: `L7982-L7987` → after: `L9032-L9034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9032-L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9032-L9034) · [Before (L7982-L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7982-L7987)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends .SocialBarFriendsEmptyButton {
-   align-items: center;
-   display: flex;
-   font-size: 1rem;
-   gap: .4rem;
-   padding: .4rem 1rem
+ .ProfilePreview .ProfilePreviewRight .ProfilePreviewName {
+   font-size: 1em;
+   font-weight: 700
```

#### 535. `bundles/bloxd.io/main.css` (Changed code · before: `L7990-L7992` → after: `L9037-L9042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9037-L9042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9037-L9042) · [Before (L7990-L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7990-L7992)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsAddOnly {
-   display: flex;
-   justify-content: center
+ .ProfilePreview .ProfilePreviewRight .ProfilePreviewStatus {
+   font-size: .8em;
+   font-weight: 700;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 536. `bundles/bloxd.io/main.css` (Changed code · before: `L7995-L7999` → after: `L9045-L9047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9045-L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9045-L9047) · [Before (L7995-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L7995-L7999)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsAddOnly .SocialBarFriendsAddButtons {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: .6rem
+ .ProfilePreview .ProfilePreviewRight .ProfilePreviewRightError {
+   color: #cfcfcf;
+   font-size: 1em
```

#### 537. `bundles/bloxd.io/main.css` (Changed code · before: `L8002-L8004` → after: `L9050-L9051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9050-L9051) · [Before (L8002-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8002-L8004)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty {
-   align-content: start;
-   display: grid
+ .ProfilePreview.IsHomeScreen .ProfilePreviewLeft .ProfilePreviewStatusDot {
+   background-color: #4f94f1
```

#### 538. `bundles/bloxd.io/main.css` (Changed code · before: `L8007-L8009` → after: `L9054-L9055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9054-L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9054-L9055) · [Before (L8007-L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8007-L8009)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsEmptyMessage,
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows {
-   grid-area: 1/1
+ .ProfilePreview.IsHomeScreen .ProfilePreviewStatus {
+   color: #4f94f1
```

#### 539. `bundles/bloxd.io/main.css` (Changed code · before: `L8012-L8017` → after: `L9058-L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9058-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9058-L9060) · [Before (L8012-L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8012-L8017)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, .6), transparent);
-   mask-image: linear-gradient(180deg, rgba(0, 0, 0, .6), transparent)
+ .ProfilePreview.IsInMatch .ProfilePreviewLeft .ProfilePreviewStatusDot,
+ .ProfilePreview.IsPlaying .ProfilePreviewLeft .ProfilePreviewStatusDot {
+   background-color: #1dd06d
```

#### 540. `bundles/bloxd.io/main.css` (Changed code · before: `L8020-L8027` → after: `L9063-L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9063-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9063-L9064) · [Before (L8020-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8020-L8027)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow {
-   align-items: center;
-   border-radius: 0;
-   box-sizing: border-box;
-   display: flex;
-   gap: .6rem;
-   height: 2.7rem;
-   padding: 0 .5rem
+ .ProfilePreview.IsPlaying .ProfilePreviewStatus {
+   color: #1dd06d
```

#### 541. `bundles/bloxd.io/main.css` (Changed code · before: `L8030-L8034` → after: `L9067-L9068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9067-L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9067-L9068) · [Before (L8030-L8034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8030-L8034)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderAvatar {
-   background-color: hsla(0, 0%, 95%, .12);
-   flex: 0 0 auto;
-   height: 1.8rem;
-   width: 1.8rem
+ .ProfilePreview.IsInMatch .ProfilePreviewStatus {
+   color: #cfcfcf
```

#### 542. `bundles/bloxd.io/main.css` (Changed code · before: `L8037-L8041` → after: `L9071-L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9071-L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9071-L9072) · [Before (L8037-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8037-L8041)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderLines {
-   display: flex;
-   flex: 1 1 auto;
-   flex-direction: column;
-   gap: .35rem
+ .ProfilePreview.IsOffline .ProfilePreviewLeft {
+   filter: brightness(60%)
```

#### 543. `bundles/bloxd.io/main.css` (Changed code · before: `L8044-L8047` → after: `L9075-L9076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9075-L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9075-L9076) · [Before (L8044-L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8044-L8047)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderLines .SocialBarFriendsPlaceholderLine {
-   background-color: hsla(0, 0%, 95%, .12);
-   height: .5rem;
-   width: 55%
+ .ProfilePreview.IsOffline .ProfilePreviewLeft .ProfilePreviewStatusDot {
+   background-color: #838383
```

#### 544. `bundles/bloxd.io/main.css` (Changed code · before: `L8050-L8051` → after: `L9079-L9080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9079-L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9079-L9080) · [Before (L8050-L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8050-L8051)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsPlaceholderRows .SocialBarFriendsPlaceholderRow .SocialBarFriendsPlaceholderLines .SocialBarFriendsPlaceholderLine+.SocialBarFriendsPlaceholderLine {
-   width: 35%
+ .ProfilePreview.IsOffline .ProfilePreviewLeft .ProfilePreviewStatus {
+   color: #a4a4a4
```

#### 545. `bundles/bloxd.io/main.css` (Changed code · before: `L8054` → after: `L9083-L9087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9083-L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9083-L9087) · [Before (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8054)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsEmptyMessage {
+ .ProfilePreview.IsOffline .ProfilePreviewRight {
+   filter: brightness(60%)
+ }
+ 
+ .PartyBar {
```

#### 546. `bundles/bloxd.io/main.css` (Changed code · before: `L8056` → after: `L9089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9089) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8056)

```diff
-   align-self: center;
+   box-sizing: border-box;
```

#### 547. `bundles/bloxd.io/main.css` (Changed code · before: `L8060` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9093) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8060)

```diff
-   padding: .5rem;
+   min-width: 0;
```

#### 548. `bundles/bloxd.io/main.css` (Changed code · before: `L8062` → after: `L9095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9095) · [Before (L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8062)

```diff
-   text-align: center
+   width: 100%
```

#### 549. `bundles/bloxd.io/main.css` (Changed code · before: `L8065-L8067` → after: `L9098-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9098-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9098-L9111) · [Before (L8065-L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8065-L8067)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFriends.SocialBarFriendsEmpty .SocialBarFriendsEmptyMessage .SocialBarFriendsEmptyText {
-   color: #cfcfcf;
-   font-size: 1rem
+ .PartyBar .PartyBarOverlay {
+   align-items: center;
+   background-color: rgba(0, 0, 0, .75);
+   display: flex;
+   height: 100%;
+   justify-content: center;
+   left: 0;
+   opacity: 1;
+   position: absolute;
+   text-align: center;
+   top: 0;
+   transition: opacity .3s;
+   width: 100%;
+   z-index: 3
```

#### 550. `bundles/bloxd.io/main.css` (Changed code · before: `L8070-L8074` → after: `L9114-L9116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9114-L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9114-L9116) · [Before (L8070-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8070-L8074)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter {
-   box-sizing: border-box;
-   flex: 0 0 auto;
-   padding-bottom: calc(.8rem + var(--notchBottom));
-   width: 100%
+ .PartyBar .PartyBarOverlay.PartyBarOverlayJoinOrCreate {
+   opacity: 0;
+   pointer-events: none
```

#### 551. `bundles/bloxd.io/main.css` (Changed code · before: `L8077-L8079` → after: `L9119-L9120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9119-L9120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9119-L9120) · [Before (L8077-L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8077-L8079)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions {
-   flex: 0 0 auto;
-   width: 100%
+ .PartyBar .PartyBarOverlay.PartyBarOverlayLoading {
+   font-size: 1rem
```

#### 552. `bundles/bloxd.io/main.css` (Changed code · before: `L8082-L8089` → after: `L9123-L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9123-L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9123-L9128) · [Before (L8082-L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8082-L8089)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner {
-   align-items: stretch;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   padding: 0 .5rem .6rem;
-   width: 100%
+ .PartyBar .PartyBarOverlay.PartyBarOverlayError {
+   align-items: center;
+   color: #ff8a80;
+   font-size: 1.2rem;
+   font-weight: 700;
+   gap: .5rem
```

#### 553. `bundles/bloxd.io/main.css` (Changed code · before: `L8092-L8093` → after: `L9131-L9132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9131-L9132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9131-L9132) · [Before (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8092-L8093)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner.SocialBarActionsDisabled {
-   filter: brightness(50%);
+ .PartyBar .PartyBarOverlay.PartyBarOverlayShowParty {
+   opacity: 0;
```

#### 554. `bundles/bloxd.io/main.css` (Changed code · before: `L8097` → after: `L9136-L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9136-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9136-L9141) · [Before (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8097)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow {
+ .PartyBar .PartyJoinCreate {
+   flex-direction: column
+ }
+ 
+ .PartyBar .PartyJoinCreate,
+ .PartyBar .PartyJoinCreate .PartyCodeEntryRow {
```

#### 555. `bundles/bloxd.io/main.css` (Changed code · before: `L8104-L8109` → after: `L9148-L9153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9148-L9153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9148-L9153) · [Before (L8104-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8104-L8109)

```diff
- @supports(overflow-x:clip) {
-   @media(pointer:coarse) {
-     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow:not(:empty) {
-       margin-bottom: max(0px, (44px - 2.4rem)/2 - .5rem)
-     }
-   }
+ .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry {
+   align-items: stretch;
+   display: flex;
+   flex: 1 1 auto;
+   height: 2.4rem;
+   min-width: 0
```

#### 556. `bundles/bloxd.io/main.css` (Changed code · before: `L8112-L8116` → after: `L9156-L9161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9156-L9161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9156-L9161) · [Before (L8112-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8112-L8116)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton {
-   flex: 1 1;
-   font-size: 1rem;
-   min-width: 0;
-   position: relative
+ @media(pointer:coarse) {
+   .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 557. `bundles/bloxd.io/main.css` (Changed code · before: `L8119-L8125` → after: `L9164-L9176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9164-L9176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9164-L9176) · [Before (L8119-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8119-L8125)

```diff
- @supports(overflow-x:clip) {
-   @media(pointer:coarse) {
-     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton:before {
-       content: "";
-       inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
-       position: absolute
-     }
+ .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry .JoinPartyHashtag {
+   align-items: center;
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-bottom-left-radius: 0;
+   border-right: none;
+   border-top-left-radius: 0;
+   color: #cfcfcf;
+   display: flex;
+   font-size: 1.4rem;
+   justify-content: center;
+   padding: 0 .2rem 0 .6rem
+ }
```

#### 558. `bundles/bloxd.io/main.css` (Changed code · before: `L8127-L8130` → after: `L9178-L9186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9178-L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9178-L9186) · [Before (L8127-L8130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8127-L8130)

```diff
-     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton {
-       overflow-x: clip
-     }
-   }
+ .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry .JoinPartyInput {
+   border-bottom-left-radius: 0;
+   border-left: none;
+   border-top-left-radius: 0;
+   box-shadow: none;
+   flex-grow: 1;
+   font-size: 1.2rem;
+   min-width: 0;
+   text-align: left
```

#### 559. `bundles/bloxd.io/main.css` (Changed code · before: `L8133` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9189) · [Before (L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8133)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionButton {
+ .PartyBar .PartyJoinCreate .PartyCodeEntryRow .JoinPartyButton {
```

#### 560. `bundles/bloxd.io/main.css` (Changed code · before: `L8147-L8154` → after: `L9204-L9209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9204-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9204-L9209) · [Before (L8147-L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8147-L8154)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarShopButton .SocialBarShopDot {
-   background-color: #e34f4f;
-   height: .6rem;
-   pointer-events: none;
-   position: absolute;
-   right: .3rem;
-   top: .3rem;
-   width: .6rem
+ @media(pointer:coarse) {
+   .PartyBar .PartyJoinCreate .PartyCodeEntryRow .JoinPartyButton {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 561. `bundles/bloxd.io/main.css` (Changed code · before: `L8157` → after: `L9212-L9215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9212-L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9212-L9215) · [Before (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8157)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarDealChipRow {
+ .PartyBar .PartyJoinCreate .CreatePartyButton {
+   align-items: center;
+   box-shadow: none;
+   box-sizing: border-box;
```

#### 562. `bundles/bloxd.io/main.css` (Changed code · before: `L8159-L8167` → after: `L9217-L9224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9217-L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9217-L9224) · [Before (L8159-L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8159-L8167)

```diff
-   justify-content: flex-end;
-   margin-top: .3rem
- }
- 
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarDealChipRow .SocialBarDealChipButton {
-   background: none;
-   border: none;
-   cursor: pointer;
-   padding: 0
+   font-size: 1.2rem;
+   height: 2.4rem;
+   justify-content: center;
+   min-width: 0;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   width: 100%
```

#### 563. `bundles/bloxd.io/main.css` (Changed code · before: `L8171` → after: `L9228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9228) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8171)

```diff
-   .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarDealChipRow .SocialBarDealChipButton {
+   .PartyBar .PartyJoinCreate .CreatePartyButton {
```

#### 564. `bundles/bloxd.io/main.css` (Changed code · before: `L8178-L8179` → after: `L9235-L9240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9235-L9240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9235-L9240) · [Before (L8178-L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8178-L8179)

```diff
- .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .HomeLinkButtons {
-   padding: 0 .5rem
+ .PartyBar .PartyInformation {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem;
+   min-width: 0
```

#### 565. `bundles/bloxd.io/main.css` (Changed code · before: `L8182` → after: `L9243-L9246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9243-L9246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9243-L9246) · [Before (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8182)

```diff
- .OwnProfilePreview {
+ .PartyBar .PartyInformation .PartyInformationHeader {
+   align-items: center;
+   display: flex;
+   flex-shrink: 0;
```

#### 566. `bundles/bloxd.io/main.css` (Changed code · before: `L8184-L8185` → after: `L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9248) · [Before (L8184-L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8184-L8185)

```diff
-   padding: .8rem .5rem;
-   width: 100%
+   min-width: 0
```

#### 567. `bundles/bloxd.io/main.css` (Changed code · before: `L8188-L8191` → after: `L9251-L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9251-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9251-L9252) · [Before (L8188-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8188-L8191)

```diff
- .OwnProfilePreview,
- .OwnProfilePreview .OwnProfilePreviewCard {
-   align-items: stretch;
-   box-sizing: border-box;
+ .PartyBar .PartyInformation .PartyInformationHeader .PartyInformationIcon {
+   align-items: center;
```

#### 568. `bundles/bloxd.io/main.css` (Changed code · before: `L8193` → after: `L9254-L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9254-L9255) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8193)

```diff
-   flex-direction: column
+   font-size: 1.4rem;
+   gap: .5rem
```

#### 569. `bundles/bloxd.io/main.css` (Changed code · before: `L8196-L8199` → after: `L9258-L9259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9258-L9259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9258-L9259) · [Before (L8196-L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8196-L8199)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard {
-   background-color: rgba(57, 73, 128, .4);
-   border: .2rem solid hsla(0, 0%, 95%, .2);
-   border-radius: 0;
+ .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode {
+   align-items: center;
```

#### 570. `bundles/bloxd.io/main.css` (Changed code · before: `L8201-L8202` → after: `L9261-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9261-L9262) · [Before (L8201-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8201-L8202)

```diff
-   min-width: 0;
-   transition: background-color .2s
+   display: flex;
+   font-size: 1.4rem
```

#### 571. `bundles/bloxd.io/main.css` (Changed code · before: `L8206-L8207` → after: `L9266-L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9266-L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9266-L9267) · [Before (L8206-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8206-L8207)

```diff
-   .OwnProfilePreview .OwnProfilePreviewCard:hover {
-     background-color: rgba(57, 73, 128, .6)
+   .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode:hover .PartyCode {
+     color: #ffb914
```

#### 572. `bundles/bloxd.io/main.css` (Changed code · before: `L8210-L8211` → after: `L9271-L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9271-L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9271-L9277) · [Before (L8210-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8210-L8211)

```diff
-   .OwnProfilePreview .OwnProfilePreviewCard:hover .OwnProfilePreviewSettings {
-     color: #f2f2f2
+ .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode.pad-focused .PartyCode {
+   color: #ffb914
+ }
+ 
+ @media(hover:none) {
+   .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode:active .PartyCode {
+     color: #ffb914
```

#### 573. `bundles/bloxd.io/main.css` (Changed code · before: `L8215-L8216` → after: `L9281-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9281-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9281-L9282) · [Before (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8215-L8216)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard.pad-focused {
-   background-color: rgba(57, 73, 128, .6)
+ .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode .PartyCodeHashtag {
+   opacity: .8
```

#### 574. `bundles/bloxd.io/main.css` (Changed code · before: `L8219-L8220` → after: `L9285-L9287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9285-L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9285-L9287) · [Before (L8219-L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8219-L8220)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard.pad-focused .OwnProfilePreviewSettings {
-   color: #f2f2f2
+ .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode .PartyCode {
+   color: #fff;
+   transition: color .2s
```

#### 575. `bundles/bloxd.io/main.css` (Changed code · before: `L8223-L8226` → after: `L9290-L9293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9290-L9293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9290-L9293) · [Before (L8223-L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8223-L8226)

```diff
- @media(hover:none) {
-   .OwnProfilePreview .OwnProfilePreviewCard:active {
-     background-color: rgba(57, 73, 128, .6)
-   }
+ .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCodeTooltip {
+   text-align: center;
+   width: 9rem
+ }
```

#### 576. `bundles/bloxd.io/main.css` (Changed code · before: `L8228-L8230` → after: `L9295-L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9295-L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9295-L9311) · [Before (L8228-L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8228-L8230)

```diff
-   .OwnProfilePreview .OwnProfilePreviewCard:active .OwnProfilePreviewSettings {
-     color: #f2f2f2
-   }
+ .PartyBar .PartyInformation .PartyInformationHeader .LeavePartyButton {
+   align-items: center;
+   box-shadow: none;
+   box-sizing: border-box;
+   cursor: pointer;
+   display: flex;
+   flex-shrink: 1;
+   font-size: 1.2rem;
+   gap: .4rem;
+   height: 2.4rem;
+   justify-content: center;
+   margin-left: auto;
+   min-width: 0;
+   opacity: 1;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+ ... (1 more added lines; see GitHub link above)
```

#### 577. `bundles/bloxd.io/main.css` (Changed code · before: `L8233-L8235` → after: `L9314-L9321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9314-L9321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9314-L9321) · [Before (L8233-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8233-L8235)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard[data-pressing] {
-   border-color: #ffb914;
-   transition: none
+ .PartyBar .PartyInformation .PartyInformationMembers {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   max-height: 14rem;
+   min-width: 0;
+   overflow-y: auto;
+   scrollbar-width: thin
```

#### 578. `bundles/bloxd.io/main.css` (Changed code · before: `L8238` → after: `L9324-L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9324-L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9324-L9328) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8238)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard[data-pressing] .ProfilePreview .OwnProfilePreviewSettings {
+ .PartyBar .PartyInformation .PartyInformationMembers .PartyLeader {
+   position: relative
+ }
+ 
+ .PartyBar .PartyInformation .PartyInformationMembers .PartyLeader .ProfilePreviewLeft .ProfilePreviewPFPHat {
```

#### 579. `bundles/bloxd.io/main.css` (Changed code · before: `L8240` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9330) · [Before (L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8240)

```diff
-   transition: none
+   font-size: 1rem
```

#### 580. `bundles/bloxd.io/main.css` (Changed code · before: `L8243-L8247` → after: `L9333-L9335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9333-L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9333-L9335) · [Before (L8243-L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8243-L8247)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview {
-   background-color: transparent;
-   cursor: inherit;
-   font-size: 1.2rem;
-   min-width: 0
+ .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview {
+   background-color: rgba(57, 73, 128, .4);
+   flex-grow: 1
```

#### 581. `bundles/bloxd.io/main.css` (Changed code · before: `L8251-L8252` → after: `L9339-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9339-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9339-L9340) · [Before (L8251-L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8251-L8252)

```diff
-   .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview:hover {
-     background-color: transparent
+   .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview:hover {
+     background-color: rgba(57, 73, 128, .6)
```

#### 582. `bundles/bloxd.io/main.css` (Changed code · before: `L8256-L8257` → after: `L9344-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9344-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9344-L9345) · [Before (L8256-L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8256-L8257)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview.pad-focused {
-   background-color: transparent
+ .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview.pad-focused {
+   background-color: rgba(57, 73, 128, .6)
```

#### 583. `bundles/bloxd.io/main.css` (Changed code · before: `L8261-L8262` → after: `L9349-L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9349-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9349-L9350) · [Before (L8261-L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8261-L8262)

```diff
-   .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview:active {
-     background-color: transparent
+   .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview:active {
+     background-color: rgba(57, 73, 128, .6)
```

#### 584. `bundles/bloxd.io/main.css` (Changed code · before: `L8266-L8267` → after: `L9354-L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9354-L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9354-L9356) · [Before (L8266-L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8266-L8267)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview .ProfilePreviewStatusDot {
-   display: none
+ .PartyBar .PartyInformation .PartyInformationMembers .PlayerRow {
+   display: flex;
+   min-width: 0
```

#### 585. `bundles/bloxd.io/main.css` (Changed code · before: `L8270-L8272` → after: `L9359-L9362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9359-L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9359-L9362) · [Before (L8270-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8270-L8272)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard .ProfilePreview .OwnProfilePreviewSettings {
-   align-items: center;
-   color: #a4a4a4;
+ .PartyJoinLocation {
+   align-items: stretch;
+   border-radius: 0;
+   box-sizing: border-box;
```

#### 586. `bundles/bloxd.io/main.css` (Changed code · before: `L8274-L8277` → after: `L9364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9364) · [Before (L8274-L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8274-L8277)

```diff
-   font-size: 1.3rem;
-   justify-content: center;
-   padding: 0 .7rem;
-   transition: color .2s
+   justify-content: center
```

#### 587. `bundles/bloxd.io/main.css` (Changed code · before: `L8280` → after: `L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9367) · [Before (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8280)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard .OwnProfilePreviewLoginWarning {
+ .PartyJoinLocation .PartyJoinLocationText {
```

#### 588. `bundles/bloxd.io/main.css` (Changed code · before: `L8282-L8283` → after: `L9369-L9372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9369-L9372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9369-L9372) · [Before (L8282-L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8282-L8283)

```diff
-   background-color: rgba(255, 185, 20, .3);
-   border-top: .2rem solid hsla(0, 0%, 95%, .2);
+   background-color: rgba(155, 57, 213, .45);
+   border-bottom-left-radius: 0;
+   border-right: none;
+   border-top-left-radius: 0;
```

#### 589. `bundles/bloxd.io/main.css` (Changed code · before: `L8285` → after: `L9374-L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9374-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9374-L9377) · [Before (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8285)

```diff
-   min-width: 0
+   overflow-x: hidden;
+   padding: .4rem .8rem;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 590. `bundles/bloxd.io/main.css` (Changed code · before: `L8288` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9380) · [Before (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8288)

```diff
- .OwnProfilePreview .OwnProfilePreviewCard .OwnProfilePreviewLoginWarning .OwnProfilePreviewLoginWarningIcon {
+ .PartyJoinLocation .PartyJoinLocationButton {
```

#### 591. `bundles/bloxd.io/main.css` (Changed code · before: `L8290` → after: `L9382-L9385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9382-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9382-L9385) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8290)

```diff
-   color: #fcd373;
+   border: none;
+   border-bottom-left-radius: 0;
+   border-top-left-radius: 0;
+   box-shadow: none;
```

#### 592. `bundles/bloxd.io/main.css` (Changed code · before: `L8292-L8302` → after: `L9387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9387) · [Before (L8292-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8292-L8302)

```diff
-   flex-shrink: 0;
-   font-size: 1.1rem;
-   justify-content: center;
-   padding: .4rem .6rem
- }
- 
- .OwnProfilePreview .OwnProfilePreviewCard .OwnProfilePreviewLoginWarning .OwnProfilePreviewLoginWarningText {
-   font-size: 1rem;
-   line-height: 1.2;
-   min-width: 0;
-   padding: .4rem .6rem .4rem 0
+   justify-content: center
```

#### 593. `bundles/bloxd.io/main.css` (Changed code · before: `L8305-L8306` → after: `L9390-L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9390-L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9390-L9391) · [Before (L8305-L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8305-L8306)

```diff
- .OwnProfilePreview.OwnProfilePreviewLoading {
-   pointer-events: none
+ .PartyJoinLocation .PartyJoinLocationButton .ButtonBody {
+   padding: 0 1rem
```

#### 594. `bundles/bloxd.io/main.css` (Changed code · before: `L8309-L8310` → after: `L9394-L9395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9394-L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9394-L9395) · [Before (L8309-L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8309-L8310)

```diff
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewCard {
-   cursor: default
+ .PartyJoinLocation.InGame .PartyJoinLocationText {
+   color: #1dd06d
```

#### 595. `bundles/bloxd.io/main.css` (Changed code · before: `L8313-L8314` → after: `L9398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9398) · [Before (L8313-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8313-L8314)

```diff
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonRow {
-   align-items: center;
+ .PlayerRows {
```

#### 596. `bundles/bloxd.io/main.css` (Changed code · before: `L8316-L8335` → after: `L9400-L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9400-L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9400-L9405) · [Before (L8316-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8316-L8335)

```diff
-   gap: .6rem;
-   min-height: 3.24rem;
-   padding: 0 .7rem
- }
- 
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonAvatar,
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonName,
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonSettings {
-   animation: ownProfilePreviewSkeletonPulse 1.5s ease-in-out infinite alternate;
-   background-color: hsla(0, 0%, 95%, .15);
-   border-radius: 0
- }
- 
- @media(prefers-reduced-motion:reduce) {
- 
-   .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonAvatar,
- ... (4 more removed lines; see GitHub link above)
+   flex-direction: column;
+   gap: .5rem;
+   min-width: 0;
+   position: relative;
+   width: 100%;
+   z-index: 0
```

#### 597. `bundles/bloxd.io/main.css` (Changed code · before: `L8338-L8340` → after: `L9408-L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9408-L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9408-L9409) · [Before (L8338-L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8338-L8340)

```diff
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonAvatar {
-   flex: 0 0 2.4rem;
-   height: 2.4rem
+ .PlayerRows:has(.Dropdown-root.is-open) {
+   z-index: 2
```

#### 598. `bundles/bloxd.io/main.css` (Changed code · before: `L8343-L8345` → after: `L9412-L9418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9412-L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9412-L9418) · [Before (L8343-L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8343-L8345)

```diff
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonName {
-   height: 1rem;
-   width: 45%
+ .PlayerRows .SocialBarFriendsLazy,
+ .PlayerRows .SocialMenuFriendsLazy,
+ .PlayerRows .SocialMenuRecentPlayersLazy,
+ .PlayerRows .SocialMenuRequestsLazy {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem
```

#### 599. `bundles/bloxd.io/main.css` (Changed code · before: `L8348-L8351` → after: `L9421-L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9421-L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9421-L9427) · [Before (L8348-L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8348-L8351)

```diff
- .OwnProfilePreview.OwnProfilePreviewLoading .OwnProfilePreviewSkeletonSettings {
-   flex: 0 0 1.3rem;
-   height: 1.3rem;
-   margin-left: auto
+ .PlayerRows .SocialBarFriendsLazy .LazyLoadedItemWrapper,
+ .PlayerRows .SocialMenuFriendsLazy .LazyLoadedItemWrapper,
+ .PlayerRows .SocialMenuRecentPlayersLazy .LazyLoadedItemWrapper,
+ .PlayerRows .SocialMenuRequestsLazy .LazyLoadedItemWrapper {
+   display: flex;
+   flex-shrink: 0;
+   min-height: 2.7rem
```

#### 600. `bundles/bloxd.io/main.css` (Changed code · before: `L8354-L8357` → after: `L9430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9430) · [Before (L8354-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8354-L8357)

```diff
- @keyframes ownProfilePreviewSkeletonPulse {
-   0% {
-     opacity: .45
-   }
+ @media(pointer:coarse) {
```

#### 601. `bundles/bloxd.io/main.css` (Changed code · before: `L8359-L8360` → after: `L9432-L9436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9432-L9436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9432-L9436) · [Before (L8359-L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8359-L8360)

```diff
-   to {
-     opacity: 1
+   .PlayerRows .SocialBarFriendsLazy .LazyLoadedItemWrapper,
+   .PlayerRows .SocialMenuFriendsLazy .LazyLoadedItemWrapper,
+   .PlayerRows .SocialMenuRecentPlayersLazy .LazyLoadedItemWrapper,
+   .PlayerRows .SocialMenuRequestsLazy .LazyLoadedItemWrapper {
+     min-height: 44px
```

#### 602. `bundles/bloxd.io/main.css` (Changed code · before: `L8364-L8367` → after: `L9440-L9441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9440-L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9440-L9441) · [Before (L8364-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8364-L8367)

```diff
- .ProfilePreview {
-   align-items: stretch;
-   border-radius: 0;
-   cursor: pointer;
+ .PlayerRows .PlayerRow {
+   align-items: center;
```

#### 603. `bundles/bloxd.io/main.css` (Changed code · before: `L8372-L8374` → after: `L9445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9445) · [Before (L8372-L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8372-L8374)

```diff
-   overflow: visible;
-   position: relative;
-   transition: opacity .3s
+   width: 100%
```

#### 604. `bundles/bloxd.io/main.css` (Changed code · before: `L8377-L8379` → after: `L9448-L9452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9448-L9452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9448-L9452) · [Before (L8377-L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8377-L8379)

```diff
- @media(hover:hover) {
-   .ProfilePreview:hover {
-     background-color: rgba(57, 73, 128, .6)
+ @media(pointer:coarse) {
+   .PlayerRows .PlayerRow {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
```

#### 605. `bundles/bloxd.io/main.css` (Changed code · before: `L8383-L8384` → after: `L9456-L9458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9456-L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9456-L9458) · [Before (L8383-L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8383-L8384)

```diff
- .ProfilePreview.pad-focused {
-   background-color: rgba(57, 73, 128, .6)
+ .PlayerRows .PlayerRow .ProfilePreview {
+   flex-grow: 1;
+   min-width: 0
```

#### 606. `bundles/bloxd.io/main.css` (Changed code · before: `L8387-L8390` → after: `L9461-L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9461-L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9461-L9467) · [Before (L8387-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8387-L8390)

```diff
- @media(hover:none) {
-   .ProfilePreview:active {
-     background-color: rgba(57, 73, 128, .6)
-   }
+ .PlayerRows .PlayerRow .PlayerRowActions {
+   align-items: center;
+   align-self: stretch;
+   display: flex;
+   flex-shrink: 0;
+   gap: .4rem;
+   justify-content: flex-end
```

#### 607. `bundles/bloxd.io/main.css` (Changed code · before: `L8393-L8400` → after: `L9470-L9473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9470-L9473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9470-L9473) · [Before (L8393-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8393-L8400)

```diff
- .ProfilePreview .ProfilePreviewBackground {
-   border-radius: inherit;
-   font-size: .5em;
-   inset: 0;
-   opacity: .6;
-   pointer-events: none;
-   position: absolute;
-   z-index: 0
+ @media(pointer:coarse) {
+   .PlayerRows .PlayerRow .PlayerRowActions {
+     gap: 8px
+   }
```

#### 608. `bundles/bloxd.io/main.css` (Changed code · before: `L8403-L8409` → after: `L9476-L9477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9476-L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9476-L9477) · [Before (L8403-L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8403-L8409)

```diff
- .ProfilePreview .ProfilePreviewBackground:after {
-   background-color: rgba(0, 0, 0, .5);
-   border-radius: inherit;
-   content: "";
-   inset: 0;
-   pointer-events: none;
-   position: absolute
+ .PlayerRows .PlayerRow .PlayerRowActions .FriendRequestButton {
+   font-size: 1.1rem
```

#### 609. `bundles/bloxd.io/main.css` (Changed code · before: `L8412-L8421` → after: `L9480-L9485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9480-L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9480-L9485) · [Before (L8412-L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8412-L8421)

```diff
- .ProfilePreview .ProfilePreviewLeft {
-   border-radius: 0;
-   box-sizing: border-box;
-   flex-shrink: 0;
-   height: 2.7em;
-   pointer-events: none;
-   position: relative;
-   transform: translateY(-.5em);
-   width: 2.7em;
-   z-index: 1
+ @media(pointer:coarse) {
+   .PlayerRows .PlayerRow .PlayerRowActions .FriendRequestButton {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 610. `bundles/bloxd.io/main.css` (Changed code · before: `L8424-L8425` → after: `L9488-L9490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9488-L9490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9488-L9490) · [Before (L8424-L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8424-L8425)

```diff
- .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFPHat {
-   align-items: flex-end;
+ .PlayerRows .PlayerRow .PlayerRowActions .FriendRequestButton .ButtonBody {
+   align-items: center;
+   box-sizing: border-box;
```

#### 611. `bundles/bloxd.io/main.css` (Changed code · before: `L8429-L8433` → after: `L9493-L9494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9493-L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9493-L9494) · [Before (L8429-L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8429-L8433)

```diff
-   left: 0;
-   position: absolute;
-   top: .3em;
-   transform: translateY(calc(-100% + .15em));
-   width: 100%
+   min-width: 1.8em;
+   padding: .4em
```

#### 612. `bundles/bloxd.io/main.css` (Changed code · before: `L8436-L8445` → after: `L9497-L9500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9497-L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9497-L9500) · [Before (L8436-L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8436-L8445)

```diff
- .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFP {
-   align-items: center;
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   display: flex;
-   font-size: 1.8em;
-   height: 100%;
-   justify-content: center;
-   width: 100%
+ .PlayerRows .PlayerRow .PlayerRowActions .JoinFriendButton {
+   align-self: stretch;
+   box-shadow: none;
+   font-size: 1.1rem
```

#### 613. `bundles/bloxd.io/main.css` (Changed code · before: `L8448-L8450` → after: `L9503-L9508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9503-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9503-L9508) · [Before (L8448-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8448-L8450)

```diff
- .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFP .svg-inline--fa {
-   color: #cfcfcf;
-   font-size: .83em
+ @media(pointer:coarse) {
+   .PlayerRows .PlayerRow .PlayerRowActions .JoinFriendButton {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 614. `bundles/bloxd.io/main.css` (Changed code · before: `L8453` → after: `L9511-L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9511-L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9511-L9523) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8453)

```diff
- .ProfilePreview .ProfilePreviewLeft .ProfilePreviewPFP .ProfilePicture {
+ .SocialSectionTitle {
+   align-items: baseline;
+   box-sizing: border-box;
+   color: #a4a4a4;
+   display: flex;
+   flex: 0 0 auto;
+   font-size: 1rem;
+   font-weight: 700;
+   gap: .5rem;
+   letter-spacing: .06em;
+   position: relative;
+   text-transform: uppercase;
+   width: 100%;
```

#### 615. `bundles/bloxd.io/main.css` (Changed code · before: `L8457-L8464` → after: `L9527-L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9527-L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9527-L9528) · [Before (L8457-L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8457-L8464)

```diff
- .ProfilePreview .ProfilePreviewLeft .ProfilePreviewStatusDot {
-   border: .2em solid #394980;
-   bottom: 0;
-   height: .6em;
-   position: absolute;
-   right: -.3em;
-   width: .6em;
-   z-index: 2
+ .SocialSectionTitle.SocialSectionTitleClickable {
+   cursor: pointer
```

#### 616. `bundles/bloxd.io/main.css` (Changed code · before: `L8467-L8473` → after: `L9531-L9534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9531-L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9531-L9534) · [Before (L8467-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8467-L8473)

```diff
- .ProfilePreview .ProfilePreviewTrailing {
-   align-items: center;
-   display: flex;
-   flex-shrink: 0;
-   margin-left: auto;
-   position: relative;
-   z-index: 1
+ @media(hover:hover) {
+   .SocialSectionTitle.SocialSectionTitleClickable:hover {
+     color: #f2f2f2
+   }
```

#### 617. `bundles/bloxd.io/main.css` (Changed code · before: `L8476-L8484` → after: `L9537-L9538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9537-L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9537-L9538) · [Before (L8476-L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8476-L8484)

```diff
- .ProfilePreview .ProfilePreviewRight {
-   display: flex;
-   flex-direction: column;
-   justify-content: space-around;
-   min-width: 0;
-   padding: 0 .5em;
-   pointer-events: none;
-   position: relative;
-   z-index: 1
+ .SocialSectionTitle.SocialSectionTitleClickable.pad-focused {
+   color: #f2f2f2
```

#### 618. `bundles/bloxd.io/main.css` (Changed code · before: `L8487-L8489` → after: `L9541-L9544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9541-L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9541-L9544) · [Before (L8487-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8487-L8489)

```diff
- .ProfilePreview .ProfilePreviewRight .ProfilePreviewName {
-   font-size: 1em;
-   font-weight: 700
+ @media(hover:none) {
+   .SocialSectionTitle.SocialSectionTitleClickable:active {
+     color: #f2f2f2
+   }
```

#### 619. `bundles/bloxd.io/main.css` (Changed code · before: `L8492-L8494` → after: `L9547-L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9547-L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9547-L9553) · [Before (L8492-L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8492-L8494)

```diff
- .ProfilePreview .ProfilePreviewRight .ProfilePreviewStatus {
-   font-size: .8em;
-   font-weight: 700;
+ .SocialSectionTitle.SocialSectionTitleClickable[data-pressing] {
+   color: #ffb914;
+   transition: none
+ }
+ 
+ .SocialSectionTitle .SocialSectionTitleLabel {
+   min-width: 0;
```

#### 620. `bundles/bloxd.io/main.css` (Changed code · before: `L8500-L8502` → after: `L9559-L9560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9559-L9560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9559-L9560) · [Before (L8500-L8502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8500-L8502)

```diff
- .ProfilePreview .ProfilePreviewRight .ProfilePreviewRightError {
-   color: #cfcfcf;
-   font-size: 1em
+ .SocialSectionTitle:has(.SocialSectionTitlePills) {
+   align-items: center
```

#### 621. `bundles/bloxd.io/main.css` (Changed code · before: `L8505-L8506` → after: `L9563-L9568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9563-L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9563-L9568) · [Before (L8505-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8505-L8506)

```diff
- .ProfilePreview.IsHomeScreen .ProfilePreviewLeft .ProfilePreviewStatusDot {
-   background-color: #4f94f1
+ .SocialSectionTitle .SocialSectionTitlePills {
+   align-items: center;
+   display: flex;
+   flex-shrink: 0;
+   gap: .4rem;
+   min-height: 1.6rem
```

#### 622. `bundles/bloxd.io/main.css` (Changed code · before: `L8509-L8510` → after: `L9571-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9571-L9573) · [Before (L8509-L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8509-L8510)

```diff
- .ProfilePreview.IsHomeScreen .ProfilePreviewStatus {
-   color: #4f94f1
+ .SocialSectionTitle .SocialSectionTitleMeta {
+   flex-shrink: 0;
+   margin-left: auto
```

#### 623. `bundles/bloxd.io/main.css` (Changed code · before: `L8513-L8515` → after: `L9576-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9576-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9576-L9579) · [Before (L8513-L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8513-L8515)

```diff
- .ProfilePreview.IsInMatch .ProfilePreviewLeft .ProfilePreviewStatusDot,
- .ProfilePreview.IsPlaying .ProfilePreviewLeft .ProfilePreviewStatusDot {
-   background-color: #1dd06d
+ .SocialSectionTitle .SocialSectionTitleMeta .svg-inline--fa {
+   font-size: .8em;
+   margin-left: .2rem;
+   transform: rotate(90deg)
```

#### 624. `bundles/bloxd.io/main.css` (Changed code · before: `L8518-L8519` → after: `L9582-L9584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9582-L9584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9582-L9584) · [Before (L8518-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8518-L8519)

```diff
- .ProfilePreview.IsPlaying .ProfilePreviewStatus {
-   color: #1dd06d
+ .SocialSectionTitle .SocialSectionTitleMeta .SocialSectionTitleLimit {
+   color: #fcd373;
+   margin-left: .4rem
```

#### 625. `bundles/bloxd.io/main.css` (Changed code · before: `L8522-L8523` → after: `L9587-L9592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9587-L9592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9587-L9592) · [Before (L8522-L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8522-L8523)

```diff
- .ProfilePreview.IsInMatch .ProfilePreviewStatus {
-   color: #cfcfcf
+ .CopyFriendLink {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   min-width: 0
```

#### 626. `bundles/bloxd.io/main.css` (Changed code · before: `L8526-L8527` → after: `L9595-L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9595-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9595-L9602) · [Before (L8526-L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8526-L8527)

```diff
- .ProfilePreview.IsOffline .ProfilePreviewLeft {
-   filter: brightness(60%)
+ .CopyFriendLink .CopyFriendLinkButton {
+   color: #fff;
+   font-size: 1rem;
+   min-width: 0;
+   overflow-x: hidden;
+   padding: .4rem 1rem;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 627. `bundles/bloxd.io/main.css` (Changed code · before: `L8530-L8531` → after: `L9605-L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9605-L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9605-L9609) · [Before (L8530-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8530-L8531)

```diff
- .ProfilePreview.IsOffline .ProfilePreviewLeft .ProfilePreviewStatusDot {
-   background-color: #838383
+ .CopyFriendLink .CopyFriendLinkFallback {
+   display: flex;
+   flex-direction: column;
+   gap: .3rem;
+   text-align: left
```

#### 628. `bundles/bloxd.io/main.css` (Changed code · before: `L8534-L8535` → after: `L9612-L9614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9612-L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9612-L9614) · [Before (L8534-L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8534-L8535)

```diff
- .ProfilePreview.IsOffline .ProfilePreviewLeft .ProfilePreviewStatus {
-   color: #a4a4a4
+ .CopyFriendLink .CopyFriendLinkFallback .CopyFriendLinkFallbackText {
+   color: #cfcfcf;
+   font-size: .9rem
```

#### 629. `bundles/bloxd.io/main.css` (Changed code · before: `L8538-L8539` → after: `L9617-L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9617-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9617-L9627) · [Before (L8538-L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8538-L8539)

```diff
- .ProfilePreview.IsOffline .ProfilePreviewRight {
-   filter: brightness(60%)
+ .CopyFriendLink .CopyFriendLinkFallback .CopyFriendLinkField {
+   background-color: #22283b;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: border-box;
+   color: #fff;
+   font-size: .9rem;
+   padding: .3rem .5rem;
+   -webkit-user-select: all;
+   user-select: all;
+   width: 100%
```

#### 630. `bundles/bloxd.io/main.css` (Changed code · before: `L8542-L8544` → after: `L9630-L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9630-L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9630-L9631) · [Before (L8542-L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8542-L8544)

```diff
- .PartyBar {
-   align-items: stretch;
-   box-sizing: border-box;
+ .PromptGenericPopup.FriendLinkPopup {
+   align-items: center;
```

#### 631. `bundles/bloxd.io/main.css` (Changed code · before: `L8547-L8550` → after: `L9634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9634) · [Before (L8547-L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8547-L8550)

```diff
-   gap: .6rem;
-   min-width: 0;
-   position: relative;
-   width: 100%
+   max-width: min(90vw, 36rem)
```

#### 632. `bundles/bloxd.io/main.css` (Changed code · before: `L8553` → after: `L9637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9637) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8553)

```diff
- .PartyBar .PartyBarOverlay {
+ .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer {
```

#### 633. `bundles/bloxd.io/main.css` (Changed code · before: `L8559-L8571` → after: `L9641-L9643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9641-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9641-L9643) · [Before (L8559-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8559-L8571)

```diff
-   left: 0;
-   opacity: 1;
-   position: absolute;
-   text-align: center;
-   top: 0;
-   transition: opacity .3s;
-   width: 100%;
-   z-index: 3
- }
- 
- .PartyBar .PartyBarOverlay.PartyBarOverlayJoinOrCreate {
-   opacity: 0;
-   pointer-events: none
+   margin-bottom: 1rem;
+   max-width: 100%;
+   min-height: 5rem
```

#### 634. `bundles/bloxd.io/main.css` (Changed code · before: `L8574-L8575` → after: `L9646-L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9646-L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9646-L9650) · [Before (L8574-L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8574-L8575)

```diff
- .PartyBar .PartyBarOverlay.PartyBarOverlayLoading {
-   font-size: 1rem
+ .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview {
+   cursor: default;
+   font-size: 2rem;
+   max-width: 100%;
+   padding: .4em .5em .2em
```

#### 635. `bundles/bloxd.io/main.css` (Changed code · before: `L8578-L8583` → after: `L9653-L9656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9653-L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9653-L9656) · [Before (L8578-L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8578-L8583)

```diff
- .PartyBar .PartyBarOverlay.PartyBarOverlayError {
-   align-items: center;
-   color: #ff8a80;
-   font-size: 1.2rem;
-   font-weight: 700;
-   gap: .5rem
+ @media(hover:hover) {
+   .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview:hover {
+     background-color: transparent
+   }
```

#### 636. `bundles/bloxd.io/main.css` (Changed code · before: `L8586-L8588` → after: `L9659-L9660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9659-L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9659-L9660) · [Before (L8586-L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8586-L8588)

```diff
- .PartyBar .PartyBarOverlay.PartyBarOverlayShowParty {
-   opacity: 0;
-   pointer-events: none
+ .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview.pad-focused {
+   background-color: transparent
```

#### 637. `bundles/bloxd.io/main.css` (Changed code · before: `L8591-L8592` → after: `L9663-L9666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9663-L9666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9663-L9666) · [Before (L8591-L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8591-L8592)

```diff
- .PartyBar .PartyJoinCreate {
-   flex-direction: column
+ @media(hover:none) {
+   .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview:active {
+     background-color: transparent
+   }
```

#### 638. `bundles/bloxd.io/main.css` (Changed code · before: `L8595-L8600` → after: `L9669-L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9669-L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9669-L9670) · [Before (L8595-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8595-L8600)

```diff
- .PartyBar .PartyJoinCreate,
- .PartyBar .PartyJoinCreate .PartyCodeEntryRow {
-   align-items: stretch;
-   display: flex;
-   gap: .5rem;
-   min-width: 0
+ .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreviewStatusDot {
+   display: none
```

#### 639. `bundles/bloxd.io/main.css` (Changed code · before: `L8603-L8604` → after: `L9673-L9674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9673-L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9673-L9674) · [Before (L8603-L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8603-L8604)

```diff
- .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry {
-   align-items: stretch;
+ .StoreWallet {
+   align-items: center;
```

#### 640. `bundles/bloxd.io/main.css` (Changed code · before: `L8606-L8608` → after: `L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9676) · [Before (L8606-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8606-L8608)

```diff
-   flex: 1 1 auto;
-   height: 2.4rem;
-   min-width: 0
+   gap: .6rem
```

#### 641. `bundles/bloxd.io/main.css` (Changed code · before: `L8611-L8616` → after: `L9679-L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9679-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9679-L9680) · [Before (L8611-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8611-L8616)

```diff
- @media(pointer:coarse) {
-   .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .StoreWallet .PremiumCurrencyAmountBalance {
+   font-size: 1.6rem
```

#### 642. `bundles/bloxd.io/main.css` (Changed code · before: `L8619` → after: `L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9683) · [Before (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8619)

```diff
- .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry .JoinPartyHashtag {
+ .StoreWallet .StoreWalletPlusContainer {
```

#### 643. `bundles/bloxd.io/main.css` (Changed code · before: `L8621-L8626` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9685) · [Before (L8621-L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8621-L8626)

```diff
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-bottom-left-radius: 0;
-   border-right: none;
-   border-top-left-radius: 0;
-   color: #cfcfcf;
+   background-color: #c16088;
```

#### 644. `bundles/bloxd.io/main.css` (Changed code · before: `L8628` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9687) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8628)

```diff
-   font-size: 1.4rem;
+   height: 1.6rem;
```

#### 645. `bundles/bloxd.io/main.css` (Changed code · before: `L8630` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9689) · [Before (L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8630)

```diff
-   padding: 0 .2rem 0 .6rem
+   width: 1.6rem
```

#### 646. `bundles/bloxd.io/main.css` (Changed code · before: `L8633-L8641` → after: `L9692-L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9692-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9692-L9694) · [Before (L8633-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8633-L8641)

```diff
- .PartyBar .PartyJoinCreate .PartyCodeEntryRow .PartyCodeEntry .JoinPartyInput {
-   border-bottom-left-radius: 0;
-   border-left: none;
-   border-top-left-radius: 0;
-   box-shadow: none;
-   flex-grow: 1;
-   font-size: 1.2rem;
-   min-width: 0;
-   text-align: left
+ .StoreWallet .StoreWalletPlusContainer .StoreWalletPlus {
+   color: #fff;
+   font-size: 1.2rem
```

#### 647. `bundles/bloxd.io/main.css` (Changed code · before: `L8644-L8647` → after: `L9697-L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9697-L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9697-L9722) · [Before (L8644-L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8644-L8647)

```diff
- .PartyBar .PartyJoinCreate .PartyCodeEntryRow .JoinPartyButton {
-   align-items: center;
-   box-shadow: none;
-   box-sizing: border-box;
+ .BlueButton.JoinDiscordWorldButton {
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ }
+ 
+ .BlueButton.JoinDiscordWorldButton .svg-inline--fa,
+ .BlueButton.JoinDiscordWorldButton.svg-inline--fa {
+   paint-order: stroke fill
+ }
+ 
+ .BlueButton.JoinDiscordWorldButton .svg-inline--fa path:only-of-type,
+ .BlueButton.JoinDiscordWorldButton.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
+ }
+ ... (10 more added lines; see GitHub link above)
```

#### 648. `bundles/bloxd.io/main.css` (Changed code · before: `L8659-L8664` → after: `L9731-L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9731-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9731-L9735) · [Before (L8659-L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8659-L8664)

```diff
- @media(pointer:coarse) {
-   .PartyBar .PartyJoinCreate .PartyCodeEntryRow .JoinPartyButton {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .BlueButton.JoinDiscordWorldButton.DisabledNewButton {
+   --buttonNormalColour: #a4a4a4;
+   --buttonHoverColour: #a4a4a4;
+   --buttonTopColour: #cfcfcf;
+   --buttonBottomColour: #838383
```

#### 649. `bundles/bloxd.io/main.css` (Changed code · before: `L8667` → after: `L9738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9738) · [Before (L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8667)

```diff
- .PartyBar .PartyJoinCreate .CreatePartyButton {
+ .BlueButton.JoinDiscordWorldButton .DiscordGuildContainer {
```

#### 650. `bundles/bloxd.io/main.css` (Changed code · before: `L8672-L8679` → after: `L9741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9741) · [Before (L8672-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8672-L8679)

```diff
-   font-size: 1.2rem;
-   height: 2.4rem;
-   justify-content: center;
-   min-width: 0;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   width: 100%
+   opacity: .6
```

#### 651. `bundles/bloxd.io/main.css` (Changed code · before: `L8682-L8687` → after: `L9744-L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9744-L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9744-L9748) · [Before (L8682-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8682-L8687)

```diff
- @media(pointer:coarse) {
-   .PartyBar .PartyJoinCreate .CreatePartyButton {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .BlueButton.JoinDiscordWorldButton .DiscordGuildContainer .DiscordGuild {
+   max-width: 10rem;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 652. `bundles/bloxd.io/main.css` (Changed code · before: `L8690-L8691` → after: `L9751-L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9751-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9751-L9754) · [Before (L8690-L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8690-L8691)

```diff
- .PartyBar .PartyInformation {
-   align-items: stretch;
+ .LeftGamePromptCard {
+   background-color: rgba(255, 185, 20, .1);
+   border-left: .2rem solid #ffb914;
+   box-sizing: border-box;
```

#### 653. `bundles/bloxd.io/main.css` (Changed code · before: `L8694-L8695` → after: `L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9757) · [Before (L8694-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8694-L8695)

```diff
-   gap: .6rem;
-   min-width: 0
+   gap: .5rem
```

#### 654. `bundles/bloxd.io/main.css` (Changed code · before: `L8698` → after: `L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9760) · [Before (L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8698)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader {
+ .LeftGamePromptCard .LeftGamePromptCardHeader {
```

#### 655. `bundles/bloxd.io/main.css` (Changed code · before: `L8703` → after: `L9764-L9765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9764-L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9764-L9765) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8703)

```diff
-   min-width: 0
+   justify-content: space-between;
+   padding: 0 .5rem
```

#### 656. `bundles/bloxd.io/main.css` (Changed code · before: `L8706-L8710` → after: `L9768-L9772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9768-L9772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9768-L9772) · [Before (L8706-L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8706-L8710)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .PartyInformationIcon {
-   align-items: center;
-   display: flex;
-   font-size: 1.4rem;
-   gap: .5rem
+ .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardTitle {
+   color: #fcd373;
+   font-size: 1.1rem;
+   font-weight: 700;
+   min-width: 0
```

#### 657. `bundles/bloxd.io/main.css` (Changed code · before: `L8713` → after: `L9775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9775) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8713)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode {
+ .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss {
```

#### 658. `bundles/bloxd.io/main.css` (Changed code · before: `L8717` → after: `L9779-L9784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9779-L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9779-L9784) · [Before (L8717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8717)

```diff
-   font-size: 1.4rem
+   flex-shrink: 0;
+   font-size: 1.1rem;
+   height: 1.6rem;
+   justify-content: center;
+   opacity: .6;
+   width: 1.6rem
```

#### 659. `bundles/bloxd.io/main.css` (Changed code · before: `L8721-L8722` → after: `L9788-L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9788-L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9788-L9789) · [Before (L8721-L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8721-L8722)

```diff
-   .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode:hover .PartyCode {
-     color: #ffb914
+   .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss:hover {
+     opacity: 1
```

#### 660. `bundles/bloxd.io/main.css` (Changed code · before: `L8726-L8727` → after: `L9793-L9794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9793-L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9793-L9794) · [Before (L8726-L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8726-L8727)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode.pad-focused .PartyCode {
-   color: #ffb914
+ .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss.pad-focused {
+   opacity: 1
```

#### 661. `bundles/bloxd.io/main.css` (Changed code · before: `L8731-L8732` → after: `L9798-L9799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9798-L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9798-L9799) · [Before (L8731-L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8731-L8732)

```diff
-   .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode:active .PartyCode {
-     color: #ffb914
+   .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss:active {
+     opacity: 1
```

#### 662. `bundles/bloxd.io/main.css` (Changed code · before: `L8736-L8737` → after: `L9803-L9817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9803-L9817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9803-L9817) · [Before (L8736-L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8736-L8737)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode .PartyCodeHashtag {
-   opacity: .8
+ .LeftGamePromptCard .PlayerRows {
+   box-sizing: border-box;
+   padding: 0 .5rem
+ }
+ 
+ .LeftGamePromptCard .PlayerRows .ProfilePreview {
+   background-color: rgba(57, 73, 128, .35)
+ }
+ 
+ .LeftGamePromptCard.LeftGamePromptCardInFlow {
+   background-color: #22283b;
+   border-radius: 0;
+   margin-bottom: 1rem;
+   padding: .6rem 0;
+   width: 100%
```

#### 663. `bundles/bloxd.io/main.css` (Changed code · before: `L8740-L8742` → after: `L9820-L9822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9820-L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9820-L9822) · [Before (L8740-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8740-L8742)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCode .PartyCode {
-   color: #fff;
-   transition: color .2s
+ .LeftGamePromptCard.LeftGamePromptCardInFlow .PlayerRows {
+   display: grid;
+   grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr))
```

#### 664. `bundles/bloxd.io/main.css` (Changed code · before: `L8745-L8747` → after: `L9825-L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9825-L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9825-L9827) · [Before (L8745-L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8745-L8747)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .CopyPartyCodeTooltip {
-   text-align: center;
-   width: 9rem
+ .GameBackgroundScreen.ReportBackgroundScreen {
+   background-color: rgba(26, 31, 46, .6);
+   z-index: 17
```

#### 665. `bundles/bloxd.io/main.css` (Changed code · before: `L8750-L8766` → after: `L9830-L9838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9830-L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9830-L9838) · [Before (L8750-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8750-L8766)

```diff
- .PartyBar .PartyInformation .PartyInformationHeader .LeavePartyButton {
-   align-items: center;
-   box-shadow: none;
-   box-sizing: border-box;
-   cursor: pointer;
-   display: flex;
-   flex-shrink: 1;
-   font-size: 1.2rem;
-   gap: .4rem;
-   height: 2.4rem;
-   justify-content: center;
-   margin-left: auto;
-   min-width: 0;
-   opacity: 1;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
- ... (1 more removed lines; see GitHub link above)
+ .GameBackgroundScreen.ReportBackgroundScreen .ReportPanel {
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   color: #fff;
+   max-width: 80vw;
+   padding: 1.5rem;
+   text-align: center
```

#### 666. `bundles/bloxd.io/main.css` (Changed code · before: `L8769` → after: `L9841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9841) · [Before (L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8769)

```diff
- .PartyBar .PartyInformation .PartyInformationMembers {
+ .PromptGenericPopup.ReportCard {
```

#### 667. `bundles/bloxd.io/main.css` (Changed code · before: `L8772-L8776` → after: `L9844-L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9844-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9844-L9848) · [Before (L8772-L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8772-L8776)

```diff
-   gap: .5rem;
-   max-height: 14rem;
-   min-width: 0;
-   overflow-y: auto;
-   scrollbar-width: thin
+   font-size: 1.25rem;
+   max-height: calc(100vh - 5rem);
+   max-height: calc(100dvh - 5rem);
+   max-width: none;
+   width: min(50rem, 80vw)
```

#### 668. `bundles/bloxd.io/main.css` (Changed code · before: `L8779-L8780` → after: `L9851-L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9851-L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9851-L9852) · [Before (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8779-L8780)

```diff
- .PartyBar .PartyInformation .PartyInformationMembers .PartyLeader {
-   position: relative
+ .PromptGenericPopup.ReportCard>* {
+   flex-shrink: 0
```

#### 669. `bundles/bloxd.io/main.css` (Changed code · before: `L8783-L8785` → after: `L9855-L9862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9855-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9855-L9862) · [Before (L8783-L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8783-L8785)

```diff
- .PartyBar .PartyInformation .PartyInformationMembers .PartyLeader .ProfilePreviewLeft .ProfilePreviewPFPHat {
-   color: #ffb914;
-   font-size: 1rem
+ .PromptGenericPopup.ReportCard .PromptGenericPopupSubtitle {
+   -webkit-box-orient: vertical;
+   -webkit-line-clamp: 2;
+   display: -webkit-box;
+   margin-bottom: 1rem;
+   overflow: hidden;
+   overflow-wrap: anywhere;
+   padding-bottom: 0
```

#### 670. `bundles/bloxd.io/main.css` (Changed code · before: `L8788-L8790` → after: `L9865-L9868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9865-L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9865-L9868) · [Before (L8788-L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8788-L8790)

```diff
- .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview {
-   background-color: rgba(57, 73, 128, .4);
-   flex-grow: 1
+ .PromptGenericPopup.ReportCard .ReportCardReasons {
+   flex-shrink: 1;
+   min-height: 0;
+   overflow-y: auto
```

#### 671. `bundles/bloxd.io/main.css` (Changed code · before: `L8793-L8796` → after: `L9871-L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9871-L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9871-L9878) · [Before (L8793-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8793-L8796)

```diff
- @media(hover:hover) {
-   .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview:hover {
-     background-color: rgba(57, 73, 128, .6)
-   }
+ .PromptGenericPopup.ReportCard .ReportCardReasons .ReportCardReasonColumns {
+   column-count: 2;
+   column-gap: 1.5rem;
+   margin: 0 auto;
+   max-width: 100%;
+   text-align: left;
+   width: -moz-fit-content;
+   width: fit-content
```

#### 672. `bundles/bloxd.io/main.css` (Changed code · before: `L8799-L8800` → after: `L9881-L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9881-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9881-L9882) · [Before (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8799-L8800)

```diff
- .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview.pad-focused {
-   background-color: rgba(57, 73, 128, .6)
+ .PromptGenericPopup.ReportCard .ReportCardReasons .ReportCardReasonColumns.OneColumn {
+   columns: auto
```

#### 673. `bundles/bloxd.io/main.css` (Changed code · before: `L8803-L8805` → after: `L9885-L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9885-L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9885-L9887) · [Before (L8803-L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8803-L8805)

```diff
- @media(hover:none) {
-   .PartyBar .PartyInformation .PartyInformationMembers .ProfilePreview:active {
-     background-color: rgba(57, 73, 128, .6)
+ @media(orientation:portrait)and (max-width:600px) {
+   .PromptGenericPopup.ReportCard .ReportCardReasons .ReportCardReasonColumns {
+     columns: auto
```

#### 674. `bundles/bloxd.io/main.css` (Changed code · before: `L8809-L8817` → after: `L9891-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9891-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9891-L9894) · [Before (L8809-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8809-L8817)

```diff
- .PartyBar .PartyInformation .PartyInformationMembers .PlayerRow {
-   display: flex;
-   min-width: 0
- }
- 
- .PartyJoinLocation {
-   align-items: stretch;
-   border-radius: 0;
-   box-sizing: border-box;
+ .PromptGenericPopup.ReportCard .ReportCardReasons .ReportCardReason {
+   align-items: flex-start;
+   break-inside: avoid;
+   cursor: pointer;
```

#### 675. `bundles/bloxd.io/main.css` (Changed code · before: `L8819` → after: `L9896-L9899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9896-L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9896-L9899) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8819)

```diff
-   justify-content: center
+   gap: .75rem;
+   line-height: 1.3;
+   padding: .375rem 0;
+   page-break-inside: avoid
```

#### 676. `bundles/bloxd.io/main.css` (Changed code · before: `L8822-L8832` → after: `L9902-L9908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9902-L9908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9902-L9908) · [Before (L8822-L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8822-L8832)

```diff
- .PartyJoinLocation .PartyJoinLocationText {
-   align-items: center;
-   background-color: rgba(155, 57, 213, .45);
-   border-bottom-left-radius: 0;
-   border-right: none;
-   border-top-left-radius: 0;
-   display: flex;
-   overflow-x: hidden;
-   padding: .4rem .8rem;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .PromptGenericPopup.ReportCard .ReportCardReasons .ReportCardReason input {
+   accent-color: #ffb914;
+   flex-shrink: 0;
+   font-size: inherit;
+   height: 1em;
+   margin: .15em 0 0;
+   width: 1em
```

#### 677. `bundles/bloxd.io/main.css` (Changed code · before: `L8835-L8842` → after: `L9911-L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9911-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9911-L9920) · [Before (L8835-L8842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8835-L8842)

```diff
- .PartyJoinLocation .PartyJoinLocationButton {
-   align-items: center;
-   border: none;
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   box-shadow: none;
-   display: flex;
-   justify-content: center
+ .PromptGenericPopup.ReportCard .ReportCardDetails {
+   box-sizing: border-box;
+   font-size: inherit;
+   height: calc(4.5em + 1rem + 2px);
+   line-height: 1.5;
+   margin-top: 1rem;
+   padding: .5rem;
+   resize: none;
+   text-align: left;
+   width: 100%
```

#### 678. `bundles/bloxd.io/main.css` (Changed code · before: `L8845-L8846` → after: `L9923-L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9923-L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9923-L9926) · [Before (L8845-L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8845-L8846)

```diff
- .PartyJoinLocation .PartyJoinLocationButton .ButtonBody {
-   padding: 0 1rem
+ @media(orientation:landscape)and (max-height:500px) {
+   .PromptGenericPopup.ReportCard .ReportCardDetails {
+     height: calc(3em + 1rem + 2px)
+   }
```

#### 679. `bundles/bloxd.io/main.css` (Changed code · before: `L8849-L8850` → after: `L9929-L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9929-L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9929-L9932) · [Before (L8849-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8849-L8850)

```diff
- .PartyJoinLocation.InGame .PartyJoinLocationText {
-   color: #1dd06d
+ .PromptGenericPopup.ReportCard .ReportCardNote,
+ .PromptGenericPopup.ReportKeyBox .ReportCardNote {
+   color: #fcd373;
+   padding-top: 1rem
```

#### 680. `bundles/bloxd.io/main.css` (Changed code · before: `L8853` → after: `L9935-L9936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9935-L9936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9935-L9936) · [Before (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8853)

```diff
- .PlayerRows {
+ .PromptGenericPopup.ReportKeyBox .ReportKeyRow {
+   align-items: center;
```

#### 681. `bundles/bloxd.io/main.css` (Changed code · before: `L8855-L8860` → after: `L9938-L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9938-L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9938-L9940) · [Before (L8855-L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8855-L8860)

```diff
-   flex-direction: column;
-   gap: .5rem;
-   min-width: 0;
-   position: relative;
-   width: 100%;
-   z-index: 0
+   font-size: 1.25rem;
+   gap: 1.5rem;
+   justify-content: center
```

#### 682. `bundles/bloxd.io/main.css` (Changed code · before: `L8863-L8864` → after: `L9943-L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9943-L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9943-L9951) · [Before (L8863-L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8863-L8864)

```diff
- .PlayerRows:has(.Dropdown-root.is-open) {
-   z-index: 2
+ .PromptGenericPopup.ReportKeyBox .ReportKeyRow .ReportKeyInner {
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   overflow-x: auto;
+   padding: .5rem;
+   -webkit-user-select: all;
+   user-select: all;
+   white-space: nowrap
```

#### 683. `bundles/bloxd.io/main.css` (Changed code · before: `L8867-L8873` → after: `L9954-L9955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9954-L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9954-L9955) · [Before (L8867-L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8867-L8873)

```diff
- .PlayerRows .SocialBarFriendsLazy,
- .PlayerRows .SocialMenuFriendsLazy,
- .PlayerRows .SocialMenuRecentPlayersLazy,
- .PlayerRows .SocialMenuRequestsLazy {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem
+ .PromptGenericPopup.ReportKeyBox .ReportKeyRow .ReportKeyCopyButton .ButtonBody {
+   padding: .75rem 1.5rem
```

#### 684. `bundles/bloxd.io/main.css` (Changed code · before: `L8876-L8879` → after: `L9958-L9964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9958-L9964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9958-L9964) · [Before (L8876-L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8876-L8879)

```diff
- .PlayerRows .SocialBarFriendsLazy .LazyLoadedItemWrapper,
- .PlayerRows .SocialMenuFriendsLazy .LazyLoadedItemWrapper,
- .PlayerRows .SocialMenuRecentPlayersLazy .LazyLoadedItemWrapper,
- .PlayerRows .SocialMenuRequestsLazy .LazyLoadedItemWrapper {
+ .LiveStreamPromotion {
+   align-items: center;
+   background: #22283b;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   bottom: max(var(--notchBottom), 1rem);
+   cursor: pointer;
```

#### 685. `bundles/bloxd.io/main.css` (Changed code · before: `L8881-L8882` → after: `L9966-L9970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9966-L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9966-L9970) · [Before (L8881-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8881-L8882)

```diff
-   flex-shrink: 0;
-   min-height: 2.7rem
+   gap: 1rem;
+   left: max(var(--notchLeft), 1rem);
+   padding: .9rem 1.5rem;
+   position: fixed;
+   z-index: 5
```

#### 686. `bundles/bloxd.io/main.css` (Changed code · before: `L8885-L8891` → after: `L9973-L9975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9973-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9973-L9975) · [Before (L8885-L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8885-L8891)

```diff
- @media(pointer:coarse) {
- 
-   .PlayerRows .SocialBarFriendsLazy .LazyLoadedItemWrapper,
-   .PlayerRows .SocialMenuFriendsLazy .LazyLoadedItemWrapper,
-   .PlayerRows .SocialMenuRecentPlayersLazy .LazyLoadedItemWrapper,
-   .PlayerRows .SocialMenuRequestsLazy .LazyLoadedItemWrapper {
-     min-height: 44px
+ @media(hover:hover) {
+   .LiveStreamPromotion:hover {
+     background: #303a59
```

#### 687. `bundles/bloxd.io/main.css` (Changed code · before: `L8895-L8900` → after: `L9979-L9980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9979-L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9979-L9980) · [Before (L8895-L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8895-L8900)

```diff
- .PlayerRows .PlayerRow {
-   align-items: center;
-   display: flex;
-   justify-content: flex-start;
-   min-width: 0;
-   width: 100%
+ .LiveStreamPromotion.pad-focused {
+   background: #303a59
```

#### 688. `bundles/bloxd.io/main.css` (Changed code · before: `L8903-L8907` → after: `L9983-L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9983-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9983-L9985) · [Before (L8903-L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8903-L8907)

```diff
- @media(pointer:coarse) {
-   .PlayerRows .PlayerRow {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
+ @media(hover:none) {
+   .LiveStreamPromotion:active {
+     background: #303a59
```

#### 689. `bundles/bloxd.io/main.css` (Changed code · before: `L8911-L8913` → after: `L9989-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9989-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9989-L9992) · [Before (L8911-L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8911-L8913)

```diff
- .PlayerRows .PlayerRow .ProfilePreview {
-   flex-grow: 1;
-   min-width: 0
+ .LiveStreamPromotion .LiveStreamPromotionIcon {
+   border-radius: 0;
+   height: 5.25rem;
+   width: 5.25rem
```

#### 690. `bundles/bloxd.io/main.css` (Changed code · before: `L8916-L8918` → after: `L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9995) · [Before (L8916-L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8916-L8918)

```diff
- .PlayerRows .PlayerRow .PlayerRowActions {
-   align-items: center;
-   align-self: stretch;
+ .LiveStreamPromotion .LiveStreamPromotionInfo {
```

#### 691. `bundles/bloxd.io/main.css` (Changed code · before: `L8920-L8922` → after: `L9997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L9997) · [Before (L8920-L8922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8920-L8922)

```diff
-   flex-shrink: 0;
-   gap: .4rem;
-   justify-content: flex-end
+   flex-direction: column
```

#### 692. `bundles/bloxd.io/main.css` (Changed code · before: `L8925-L8928` → after: `L10000-L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10000-L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10000-L10001) · [Before (L8925-L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8925-L8928)

```diff
- @media(pointer:coarse) {
-   .PlayerRows .PlayerRow .PlayerRowActions {
-     gap: 8px
-   }
+ .LiveStreamPromotion .LiveStreamPromotionTitle {
+   font-size: 1.4rem
```

#### 693. `bundles/bloxd.io/main.css` (Changed code · before: `L8931-L8932` → after: `L10004-L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10004-L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10004-L10006) · [Before (L8931-L8932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8931-L8932)

```diff
- .PlayerRows .PlayerRow .PlayerRowActions .FriendRequestButton {
-   font-size: 1.1rem
+ .LiveStreamPromotion .LiveStreamPromotionChannel {
+   color: #f2f2f2;
+   font-size: 1.3rem
```

#### 694. `bundles/bloxd.io/main.css` (Changed code · before: `L8935-L8940` → after: `L10009-L10011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10009-L10011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10009-L10011) · [Before (L8935-L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8935-L8940)

```diff
- @media(pointer:coarse) {
-   .PlayerRows .PlayerRow .PlayerRowActions .FriendRequestButton {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .LiveStreamPromotion .LiveStreamPromotionTime {
+   color: #f2f2f2;
+   font-size: 1.85rem
```

#### 695. `bundles/bloxd.io/main.css` (Changed code · before: `L8943-L8949` → after: `L10014-L10020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10014-L10020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10014-L10020) · [Before (L8943-L8949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8943-L8949)

```diff
- .PlayerRows .PlayerRow .PlayerRowActions .FriendRequestButton .ButtonBody {
-   align-items: center;
-   box-sizing: border-box;
-   display: flex;
-   justify-content: center;
-   min-width: 1.8em;
-   padding: .4em
+ .LiveStreamPromotion .LiveStreamPromotionLiveBadge {
+   background: #e34f4f;
+   color: #fff;
+   font-size: 1.5rem;
+   font-weight: 700;
+   margin-left: .35rem;
+   padding: .15rem .6rem
```

#### 696. `bundles/bloxd.io/main.css` (Changed code · before: `L8952-L8955` → after: `L10023-L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10023-L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10023-L10025) · [Before (L8952-L8955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8952-L8955)

```diff
- .PlayerRows .PlayerRow .PlayerRowActions .JoinFriendButton {
-   align-self: stretch;
-   box-shadow: none;
-   font-size: 1.1rem
+ .UnstyledA {
+   color: #fff;
+   text-decoration: none
```

#### 697. `bundles/bloxd.io/main.css` (Changed code · before: `L8958-L8963` → after: `L10028-L10031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10028-L10031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10028-L10031) · [Before (L8958-L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8958-L8963)

```diff
- @media(pointer:coarse) {
-   .PlayerRows .PlayerRow .PlayerRowActions .JoinFriendButton {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .AdBannerContainer {
+   display: flex;
+   pointer-events: none;
+   position: relative
```

#### 698. `bundles/bloxd.io/main.css` (Changed code · before: `L8966-L8979` → after: `L10034-L10035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10034-L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10034-L10035) · [Before (L8966-L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8966-L8979)

```diff
- .SocialSectionTitle {
-   align-items: baseline;
-   box-sizing: border-box;
-   color: #a4a4a4;
-   display: flex;
-   flex: 0 0 auto;
-   font-size: 1rem;
-   font-weight: 700;
-   gap: .5rem;
-   letter-spacing: .06em;
-   position: relative;
-   text-transform: uppercase;
-   width: 100%;
-   z-index: 1
+ .AdBannerContainer.AdBannerContainerHoldsFrame {
+   padding: calc(var(--contrast-border-top)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-right)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-bottom)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-left)*var(--ad-banner-scale, 0))
```

#### 699. `bundles/bloxd.io/main.css` (Changed code · before: `L8982-L8983` → after: `L10038-L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10038-L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10038-L10039) · [Before (L8982-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8982-L8983)

```diff
- .SocialSectionTitle.SocialSectionTitleClickable {
-   cursor: pointer
+ .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast {
+   margin: calc(var(--contrast-border-top)*-1) calc(var(--contrast-border-right)*-1) calc(var(--contrast-border-bottom)*-1) calc(var(--contrast-border-left)*-1) !important
```

#### 700. `bundles/bloxd.io/main.css` (Changed code · before: `L8986-L8989` → after: `L10042-L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10042-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10042-L10043) · [Before (L8986-L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8986-L8989)

```diff
- @media(hover:hover) {
-   .SocialSectionTitle.SocialSectionTitleClickable:hover {
-     color: #f2f2f2
-   }
+ .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast.AdBannerAwaitingAd {
+   margin: 0 !important
```

#### 701. `bundles/bloxd.io/main.css` (Changed code · before: `L8992-L8993` → after: `L10046-L10051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10046-L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10046-L10051) · [Before (L8992-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8992-L8993)

```diff
- .SocialSectionTitle.SocialSectionTitleClickable.pad-focused {
-   color: #f2f2f2
+ .AdBannerContainer .AdBannerExtraContrastAnchorBottom,
+ .AdBannerContainer.AdBannerExtraContrastAnchorBottom {
+   --contrast-border-top: 1rem;
+   --contrast-border-right: 1.5rem;
+   --contrast-border-bottom: 0.5rem;
+   --contrast-border-left: 1.5rem
```

#### 702. `bundles/bloxd.io/main.css` (Changed code · before: `L8996-L8999` → after: `L10054-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10054-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10054-L10059) · [Before (L8996-L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L8996-L8999)

```diff
- @media(hover:none) {
-   .SocialSectionTitle.SocialSectionTitleClickable:active {
-     color: #f2f2f2
-   }
+ .AdBannerContainer .AdBannerExtraContrastAnchorTop,
+ .AdBannerContainer.AdBannerExtraContrastAnchorTop {
+   --contrast-border-top: 0.5rem;
+   --contrast-border-right: 1.5rem;
+   --contrast-border-bottom: 1rem;
+   --contrast-border-left: 1.5rem
```

#### 703. `bundles/bloxd.io/main.css` (Changed code · before: `L9002-L9004` → after: `L10062-L10067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10062-L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10062-L10067) · [Before (L9002-L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9002-L9004)

```diff
- .SocialSectionTitle.SocialSectionTitleClickable[data-pressing] {
-   color: #ffb914;
-   transition: none
+ .AdBannerContainer .AdBannerExtraContrastAnchorLeft,
+ .AdBannerContainer.AdBannerExtraContrastAnchorLeft {
+   --contrast-border-top: 1rem;
+   --contrast-border-right: 1.5rem;
+   --contrast-border-bottom: 1.5rem;
+   --contrast-border-left: 0.5rem
```

#### 704. `bundles/bloxd.io/main.css` (Changed code · before: `L9007-L9011` → after: `L10070-L10075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10070-L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10070-L10075) · [Before (L9007-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9007-L9011)

```diff
- .SocialSectionTitle .SocialSectionTitleLabel {
-   min-width: 0;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .AdBannerContainer .AdBannerExtraContrastAnchorRight,
+ .AdBannerContainer.AdBannerExtraContrastAnchorRight {
+   --contrast-border-top: 1rem;
+   --contrast-border-right: 0.5rem;
+   --contrast-border-bottom: 1.5rem;
+   --contrast-border-left: 1.5rem
```

#### 705. `bundles/bloxd.io/main.css` (Changed code · before: `L9014-L9015` → after: `L10078-L10079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10078-L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10078-L10079) · [Before (L9014-L9015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9014-L9015)

```diff
- .SocialSectionTitle:has(.SocialSectionTitlePills) {
-   align-items: center
+ .AdBannerContainer .AdBannerSlot {
+   contain: layout
```

#### 706. `bundles/bloxd.io/main.css` (Changed code · before: `L9018` → after: `L10082-L10094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10082-L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10082-L10094) · [Before (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9018)

```diff
- .SocialSectionTitle .SocialSectionTitlePills {
+ .AdBannerContainer .VisibilityTimer {
+   background-color: #000;
+   border: 1px solid red;
+   color: red;
+   font-weight: 700;
+   height: 2rem;
+   opacity: .6;
+   width: 4rem;
+   z-index: 4
+ }
+ 
+ .AdBannerContainer .AdBannerLoader,
+ .AdBannerContainer .VisibilityTimer {
```

#### 707. `bundles/bloxd.io/main.css` (Changed code · before: `L9021-L9023` → after: `L10097-L10098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10097-L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10097-L10098) · [Before (L9021-L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9021-L9023)

```diff
-   flex-shrink: 0;
-   gap: .4rem;
-   min-height: 1.6rem
+   justify-content: center;
+   position: absolute
```

#### 708. `bundles/bloxd.io/main.css` (Changed code · before: `L9026-L9028` → after: `L10101-L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10101-L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10101-L10103) · [Before (L9026-L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9026-L9028)

```diff
- .SocialSectionTitle .SocialSectionTitleMeta {
-   flex-shrink: 0;
-   margin-left: auto
+ .AdBannerContainer .AdBannerLoader {
+   font-size: 2rem;
+   z-index: 3
```

#### 709. `bundles/bloxd.io/main.css` (Changed code · before: `L9031-L9034` → after: `L10106-L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10106-L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10106-L10109) · [Before (L9031-L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9031-L9034)

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

#### 710. `bundles/bloxd.io/main.css` (Changed code · before: `L9037-L9039` → after: `L10112-L10114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10112-L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10112-L10114) · [Before (L9037-L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9037-L9039)

```diff
- .SocialSectionTitle .SocialSectionTitleMeta .SocialSectionTitleLimit {
-   color: #fcd373;
-   margin-left: .4rem
+ .AdBannerContainer .BloxdAdContainer {
+   position: absolute;
+   z-index: 1
```

#### 711. `bundles/bloxd.io/main.css` (Changed code · before: `L9042-L9047` → after: `L10117-L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10117-L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10117-L10126) · [Before (L9042-L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9042-L9047)

```diff
- .CopyFriendLink {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   min-width: 0
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
```

#### 712. `bundles/bloxd.io/main.css` (Changed code · before: `L9050-L9057` → after: `L10129-L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10129-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10129-L10136) · [Before (L9050-L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9050-L9057)

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

#### 713. `bundles/bloxd.io/main.css` (Changed code · before: `L9060-L9064` → after: `L10139-L10143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10139-L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10139-L10143) · [Before (L9060-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9060-L9064)

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

#### 714. `bundles/bloxd.io/main.css` (Changed code · before: `L9067-L9069` → after: `L10146-L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10146-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10146-L10150) · [Before (L9067-L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9067-L9069)

```diff
- .CopyFriendLink .CopyFriendLinkFallback .CopyFriendLinkFallbackText {
-   color: #cfcfcf;
-   font-size: .9rem
+ .AdBannerContainer .AdBanner.AdBannerAwaitingAd {
+   background-color: transparent;
+   border-style: none !important;
+   box-shadow: none;
+   outline: none
```

#### 715. `bundles/bloxd.io/main.css` (Changed code · before: `L9072-L9082` → after: `L10153-L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10153-L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10153-L10154) · [Before (L9072-L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9072-L9082)

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
+ .AdBannerContainer .AdBanner.AdBannerAwaitingAd .AdBannerRemoveAds {
+   visibility: hidden
```

#### 716. `bundles/bloxd.io/main.css` (Changed code · before: `L9085-L9089` → after: `L10157-L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10157-L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10157-L10158) · [Before (L9085-L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9085-L9089)

```diff
- .PromptGenericPopup.FriendLinkPopup {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   max-width: min(90vw, 36rem)
+ .AdBannerContainer .AdBanner .AdBannerRemoveAdsHost {
+   display: contents
```

#### 717. `bundles/bloxd.io/main.css` (Changed code · before: `L9092` → after: `L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10161) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9092)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer {
+ .AdBannerContainer .AdBanner .AdBannerRemoveAds {
```

#### 718. `bundles/bloxd.io/main.css` (Changed code · before: `L9095-L9105` → after: `L10170-L10182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10170-L10182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10170-L10182) · [Before (L9095-L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9095-L9105)

```diff
-   justify-content: center;
-   margin-bottom: 1rem;
-   max-width: 100%;
-   min-height: 5rem
- }
- 
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview {
-   cursor: default;
-   font-size: 2rem;
-   max-width: 100%;
-   padding: .4em .5em .2em
+   font-size: 1rem;
+   font-weight: 700;
+   gap: .3rem;
+   padding: .15rem .6rem;
+   pointer-events: all;
+   position: absolute;
+   right: calc(1rem - var(--contrast-border-right));
+   white-space: nowrap;
+   z-index: 3
+ }
+ 
+ .AdBannerContainer .AdBanner .AdBannerRemoveAds .svg-inline--fa {
+   color: #b6830e
```

#### 719. `bundles/bloxd.io/main.css` (Changed code · before: `L9109-L9110` → after: `L10186-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10186-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10186-L10187) · [Before (L9109-L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9109-L9110)

```diff
-   .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview:hover {
-     background-color: transparent
+   .AdBannerContainer .AdBanner .AdBannerRemoveAds:hover {
+     color: #b6830e
```

#### 720. `bundles/bloxd.io/main.css` (Changed code · before: `L9114-L9115` → after: `L10191-L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10191-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10191-L10192) · [Before (L9114-L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9114-L9115)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview.pad-focused {
-   background-color: transparent
+ .AdBannerContainer .AdBanner .AdBannerRemoveAds.pad-focused {
+   color: #b6830e
```

#### 721. `bundles/bloxd.io/main.css` (Changed code · before: `L9119-L9120` → after: `L10196-L10197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10196-L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10196-L10197) · [Before (L9119-L9120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9119-L9120)

```diff
-   .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview:active {
-     background-color: transparent
+   .AdBannerContainer .AdBanner .AdBannerRemoveAds:active {
+     color: #b6830e
```

#### 722. `bundles/bloxd.io/main.css` (Changed code · before: `L9124-L9126` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10201) · [Before (L9124-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9124-L9126)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreviewStatusDot {
-   display: none
- }
+ @keyframes premiumBorderCycle {
```

#### 723. `bundles/bloxd.io/main.css` (Changed code · before: `L9128-L9132` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10203-L10206) · [Before (L9128-L9132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9128-L9132)

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

#### 724. `bundles/bloxd.io/main.css` (Changed code · before: `L9134-L9136` → after: `L10208-L10210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10208-L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10208-L10210) · [Before (L9134-L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9134-L9136)

```diff
- .StoreWallet .PremiumCurrencyAmountBalance {
-   font-size: 1.6rem
- }
+   33% {
+     border-color: #325a5f
+   }
```

#### 725. `bundles/bloxd.io/main.css` (Changed code · before: `L9138-L9144` → after: `L10212-L10214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10212-L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10212-L10214) · [Before (L9138-L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9138-L9144)

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

#### 726. `bundles/bloxd.io/main.css` (Changed code · before: `L9147-L9150` → after: `L10217-L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10217-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10217-L10220) · [Before (L9147-L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9147-L9150)

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

#### 727. `bundles/bloxd.io/main.css` (Changed code · before: `L9152-L9154` → after: `L10222-L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10222-L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10222-L10225) · [Before (L9152-L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9152-L9154)

```diff
- .BlueButton.JoinDiscordWorldButton {
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
- }
+   33%,
+   66% {
+     opacity: 1
+   }
```

#### 728. `bundles/bloxd.io/main.css` (Changed code · before: `L9156-L9158` → after: `L10227-L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10227-L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10227-L10230) · [Before (L9156-L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9156-L9158)

```diff
- .BlueButton.JoinDiscordWorldButton .svg-inline--fa,
- .BlueButton.JoinDiscordWorldButton.svg-inline--fa {
-   paint-order: stroke fill
+   66.01%,
+   to {
+     opacity: 0
+   }
```

#### 729. `bundles/bloxd.io/main.css` (Changed code · before: `L9161-L9166` → after: `L10233-L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10233-L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10233-L10246) · [Before (L9161-L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9161-L9166)

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

#### 730. `bundles/bloxd.io/main.css` (Changed code · before: `L9169-L9173` → after: `L10249-L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10249-L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10249-L10259) · [Before (L9169-L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9169-L9173)

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

#### 731. `bundles/bloxd.io/main.css` (Changed code · before: `L9176-L9183` → after: `L10262-L10269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10262-L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10262-L10269) · [Before (L9176-L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9176-L9183)

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

#### 732. `bundles/bloxd.io/main.css` (Changed code · before: `L9186-L9190` → after: `L10272-L10279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10272-L10279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10272-L10279) · [Before (L9186-L9190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9186-L9190)

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

#### 733. `bundles/bloxd.io/main.css` (Changed code · before: `L9193-L9196` → after: `L10282-L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10282-L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10282-L10289) · [Before (L9193-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9193-L9196)

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

#### 734. `bundles/bloxd.io/main.css` (Changed code · before: `L9199-L9203` → after: `L10292-L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10292-L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10292-L10294) · [Before (L9199-L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9199-L9203)

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

#### 735. `bundles/bloxd.io/main.css` (Changed code · before: `L9206-L9208` → after: `L10297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10297) · [Before (L9206-L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9206-L9208)

```diff
- .LeftGamePromptCard {
-   background-color: rgba(255, 185, 20, .1);
-   border-left: .2rem solid #ffb914;
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner {
```

#### 736. `bundles/bloxd.io/main.css` (Changed code · before: `L9212` → after: `L10301-L10303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10301-L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10301-L10303) · [Before (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9212)

```diff
-   gap: .5rem
+   height: 100%;
+   padding: 12px;
+   width: 100%
```

#### 737. `bundles/bloxd.io/main.css` (Changed code · before: `L9215-L9216` → after: `L10306-L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10306-L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10306-L10308) · [Before (L9215-L9216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9215-L9216)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader {
-   align-items: center;
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   align-items: flex-start;
+   color: #ffb914;
```

#### 738. `bundles/bloxd.io/main.css` (Changed code · before: `L9218-L9220` → after: `L10310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10310) · [Before (L9218-L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9218-L9220)

```diff
-   gap: .5rem;
-   justify-content: space-between;
-   padding: 0 .5rem
+   gap: 6px
```

#### 739. `bundles/bloxd.io/main.css` (Changed code · before: `L9223-L9225` → after: `L10313-L10318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10313-L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10313-L10318) · [Before (L9223-L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9223-L9225)

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

#### 740. `bundles/bloxd.io/main.css` (Changed code · before: `L9227` → after: `L10320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10320) · [Before (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9227)

```diff
-   min-width: 0
+   text-shadow: none
```

#### 741. `bundles/bloxd.io/main.css` (Changed code · before: `L9230` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10323) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9230)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss {
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdButton .NewButton {
```

#### 742. `bundles/bloxd.io/main.css` (Changed code · before: `L9232` → after: `L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10325) · [Before (L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9232)

```diff
-   cursor: pointer;
+   box-sizing: border-box;
```

#### 743. `bundles/bloxd.io/main.css` (Changed code · before: `L9234-L9239` → after: `L10327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10327) · [Before (L9234-L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9234-L9239)

```diff
-   flex-shrink: 0;
-   font-size: 1.1rem;
-   height: 1.6rem;
-   justify-content: center;
-   opacity: .6;
-   width: 1.6rem
+   justify-content: center
```

#### 744. `bundles/bloxd.io/main.css` (Changed code · before: `L9242-L9245` → after: `L10330-L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10330-L10332) · [Before (L9242-L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9242-L9245)

```diff
- @media(hover:hover) {
-   .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss:hover {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 {
+   height: 250px;
+   width: 300px
```

#### 745. `bundles/bloxd.io/main.css` (Changed code · before: `L9248-L9249` → after: `L10335-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10335-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10335-L10336) · [Before (L9248-L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9248-L9249)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss.pad-focused {
-   opacity: 1
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner {
+   gap: 6px
```

#### 746. `bundles/bloxd.io/main.css` (Changed code · before: `L9252-L9255` → after: `L10339-L10340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10339-L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10339-L10340) · [Before (L9252-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9252-L9255)

```diff
- @media(hover:none) {
-   .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss:active {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   font-size: 32px
```

#### 747. `bundles/bloxd.io/main.css` (Changed code · before: `L9258-L9260` → after: `L10343-L10346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10343-L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10343-L10346) · [Before (L9258-L9260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9258-L9260)

```diff
- .LeftGamePromptCard .PlayerRows {
-   box-sizing: border-box;
-   padding: 0 .5rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdSubTitle {
+   flex-grow: 1;
+   font-size: 24px;
+   text-align: start
```

#### 748. `bundles/bloxd.io/main.css` (Changed code · before: `L9263-L9264` → after: `L10349-L10350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10349-L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L10349-L10350) · [Before (L9263-L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L9263-L9264)

```diff
- .LeftGamePromptCard .PlayerRows .ProfilePreview {
-   background-color: rgba(57, 73, 128, .35)
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 24px
```
