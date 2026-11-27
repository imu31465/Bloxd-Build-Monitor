# Changed — Bundle Modifications Report (Part 078 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `78 / 82` (**434** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 077](part-077.md) · [Part 079 →](part-079.md)

## `bloxd.io` · `bundles/bloxd.io/main.css` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/main.css` (1198 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 1127. `bundles/bloxd.io/main.css` (Changed code · before: `L11512-L11517` → after: `L12933-L12938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12933-L12938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12933-L12938) · [Before (L11512-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11512-L11517)

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

#### 1128. `bundles/bloxd.io/main.css` (Changed code · before: `L11520` → after: `L12941-L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12941-L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12941-L12949) · [Before (L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11520)

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

#### 1129. `bundles/bloxd.io/main.css` (Changed code · before: `L11524` → after: `L12952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12952) · [Before (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11524)

```diff
-   height: 8rem;
+   height: 9rem;
```

#### 1130. `bundles/bloxd.io/main.css` (Changed code · before: `L11526-L11527` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12954) · [Before (L11526-L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11526-L11527)

```diff
-   position: relative;
-   width: 100%
+   position: relative
```

#### 1131. `bundles/bloxd.io/main.css` (Changed code · before: `L11530-L11533` → after: `L12957-L12961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12957-L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12957-L12961) · [Before (L11530-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11530-L11533)

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

#### 1132. `bundles/bloxd.io/main.css` (Changed code · before: `L11536-L11543` → after: `L12964-L12969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12964-L12969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12964-L12969) · [Before (L11536-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11536-L11543)

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

#### 1133. `bundles/bloxd.io/main.css` (Changed code · before: `L11546-L11549` → after: `L12972-L12977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12972-L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12972-L12977) · [Before (L11546-L11549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11546-L11549)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy {
-   align-self: stretch;
-   font-size: 1.1rem;
-   font-weight: 800
+ .GiftLevelUp .GiftLevelUpUnlocked {
+   color: #fff;
+   font-size: 1.7rem;
+   font-weight: 800;
+   min-height: 2rem;
+   text-align: center
```

#### 1134. `bundles/bloxd.io/main.css` (Changed code · before: `L11552-L11559` → after: `L12980-L12984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12980-L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12980-L12984) · [Before (L11552-L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11552-L11559)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending {
-   background-color: rgba(26, 31, 46, .3);
-   display: inline-block;
-   height: .8em;
-   overflow: hidden;
-   position: relative;
-   vertical-align: middle;
-   width: 3.5em
+ .GiftLevelUp .GiftLevelUpNext {
+   color: #cfcfcf;
+   font-size: 1.4rem;
+   min-height: 1.8rem;
+   text-align: center
```

#### 1135. `bundles/bloxd.io/main.css` (Changed code · before: `L11562-L11567` → after: `L12987-L12988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12987-L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12987-L12988) · [Before (L11562-L11567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11562-L11567)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
-   animation: loadingShimmer 1.8s ease-in-out infinite;
-   background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
-   content: "";
-   height: 100%;
-   left: 0;
+ .GiftLevelUp .GiftLevelUpBurst {
+   left: 50%;
```

#### 1136. `bundles/bloxd.io/main.css` (Changed code · before: `L11570-L11571` → after: `L12991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12991) · [Before (L11570-L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11570-L11571)

```diff
-   top: 0;
-   width: 300%
+   top: 50%
```

#### 1137. `bundles/bloxd.io/main.css` (Changed code · before: `L11574-L11576` → after: `L12994-L13004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12994-L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L12994-L13004) · [Before (L11574-L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11574-L11576)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending[data-off-screen]:after,
- html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
-   animation-play-state: paused
+ .GiftLevelUp .GiftLevelUpBurst i {
+   --burst-angle: calc(var(--burst-index)*30deg);
+   --burst-distance: 5rem;
+   animation: GiftLevelUpSpark .5s ease-out;
+   background: #fcd373;
+   height: .7rem;
+   left: -.35rem;
+   opacity: 0;
+   position: absolute;
+   top: -.35rem;
+   width: .7rem
```

#### 1138. `bundles/bloxd.io/main.css` (Changed code · before: `L11579-L11584` → after: `L13007-L13009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13007-L13009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13007-L13009) · [Before (L11579-L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11579-L11584)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending {
-     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
-     background-repeat: no-repeat;
-     background-size: 300% 100%
-   }
+ .GiftLevelUp .GiftLevelUpBurst i:nth-child(3n) {
+   background: #f2f2f2
+ }
```

#### 1139. `bundles/bloxd.io/main.css` (Changed code · before: `L11586` → after: `L13011-L13023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13011-L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13011-L13023) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11586)

```diff
-   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+ .GiftLevelUp .GiftLevelUpBurst i:nth-child(3n+1) {
+   background: #36e785
+ }
+ 
+ .GiftLevelUp .GiftLevelUpBurst.GiftLevelUpBurstFinal i {
+   --burst-distance: 5.5rem;
+   animation-duration: .8s;
+   height: 1rem;
+   width: 1rem
+ }
+ 
+ @media(prefers-reduced-motion:reduce) {
+   .GiftLevelUp .GiftLevelUpBurst {
```

#### 1140. `bundles/bloxd.io/main.css` (Changed code · before: `L11591-L11594` → after: `L13028-L13037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13028-L13037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13028-L13037) · [Before (L11591-L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11591-L11594)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending {
-   background-color: rgba(26, 31, 46, .3);
-   display: inline-block;
-   height: .8em;
+ .GiftLevelUp .GiftLevelUpRange {
+   color: #fff;
+   font-size: 1.7rem;
+   font-weight: 800;
+   min-height: 2rem
+ }
+ 
+ .GiftLevelUp .GiftLevelUpBar {
+   background: #1a1f2e;
+   height: 1rem;
```

#### 1141. `bundles/bloxd.io/main.css` (Changed code · before: `L11597-L11598` → after: `L13040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13040) · [Before (L11597-L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11597-L11598)

```diff
-   vertical-align: middle;
-   width: 2em
+   width: 80%
```

#### 1142. `bundles/bloxd.io/main.css` (Changed code · before: `L11601-L11605` → after: `L13043-L13046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13043-L13046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13043-L13046) · [Before (L11601-L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11601-L11605)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
-   animation: loadingShimmer 1.8s ease-in-out infinite;
-   background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
-   content: "";
-   height: 100%;
+ .GiftLevelUp .GiftLevelUpBar .GiftLevelUpBarFill {
+   animation: GiftLevelUpBar var(--bar-ms) ease-out;
+   background: linear-gradient(90deg, #b6830e, #fcd373);
+   bottom: 0;
```

#### 1143. `bundles/bloxd.io/main.css` (Changed code · before: `L11610` → after: `L13050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13050) · [Before (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11610)

```diff
-   width: 300%
+   width: var(--bar-to)
```

#### 1144. `bundles/bloxd.io/main.css` (Changed code · before: `L11613-L11615` → after: `L13053-L13062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13053-L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13053-L13062) · [Before (L11613-L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11613-L11615)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending[data-off-screen]:after,
- html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
-   animation-play-state: paused
+ .GiftLevelUp .GiftLevelUpButtons {
+   display: flex;
+   font-size: 1.8rem;
+   justify-content: center;
+   margin-top: .4rem;
+   width: 100%
+ }
+ 
+ .GiftLevelUp .GiftLevelUpButtons>* {
+   min-width: 14rem
```

#### 1145. `bundles/bloxd.io/main.css` (Changed code · before: `L11625-L11626` → after: `L13067-L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13067-L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13067-L13069) · [Before (L11625-L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11625-L11626)

```diff
-   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
-     display: none
+   .GiftLevelUp .GiftLevelUpHeroArt,
+   .GiftLevelUp .GiftLevelUpTitle {
+     animation: none !important
```

#### 1146. `bundles/bloxd.io/main.css` (Changed code · before: `L11630-L11632` → after: `L13073-L13077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13073-L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13073-L13077) · [Before (L11630-L11632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11630-L11632)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleHighlight {
-   animation: loginResumeHighlight .8s ease-in-out 3
- }
+ @keyframes GiftLevelUpTitle {
+   0% {
+     opacity: 0;
+     transform: scale(.6)
+   }
```

#### 1147. `bundles/bloxd.io/main.css` (Changed code · before: `L11634-L11638` → after: `L13079-L13082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13079-L13082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13079-L13082) · [Before (L11634-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11634-L11638)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier3,
- .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier4 {
-   --pileGlow: rgba(243, 138, 182, .28);
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28143,150,252%29%27 stop … [truncated]
-   --rayTurn: 40s
+   to {
+     opacity: 1;
+     transform: scale(1)
+   }
```

#### 1148. `bundles/bloxd.io/main.css` (Changed code · before: `L11641-L11644` → after: `L13085-L13088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13085-L13088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13085-L13088) · [Before (L11641-L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11641-L11644)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier5 {
-   --pileGlow: rgba(243, 138, 182, .4);
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28255,185,20%29%27 stop- … [truncated]
-   --rayTurn: 25s
+ @keyframes GiftLevelUpRays {
+   to {
+     transform: rotate(1turn)
+   }
```

#### 1149. `bundles/bloxd.io/main.css` (Changed code · before: `L11647-L11650` → after: `L13091-L13098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13091-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13091-L13098) · [Before (L11647-L11650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11647-L11650)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleBestValue {
-   border-color: #ffb914;
-   box-shadow: 0 0 1rem rgba(255, 185, 20, .45), .2rem .25rem 0 rgba(0, 0, 0, .32)
- }
+ @keyframes GiftLevelUpTick {
+   0% {
+     transform: scale(.8)
+   }
+ 
+   60% {
+     transform: scale(1.12)
+   }
```

#### 1150. `bundles/bloxd.io/main.css` (Changed code · before: `L11654` → after: `L13101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13101) · [Before (L11654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11654)

```diff
-     transform: translate(-50%, -50%) rotate(1turn)
+     transform: scale(1)
```

#### 1151. `bundles/bloxd.io/main.css` (Changed code · before: `L11658-L11660` → after: `L13105-L13116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13105-L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13105-L13116) · [Before (L11658-L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11658-L11660)

```diff
- .CheckoutNotice {
-   color: #ff8a80;
-   text-align: center
+ @keyframes GiftLevelUpLand {
+   0% {
+     transform: scale(1)
+   }
+ 
+   35% {
+     transform: scale(1.25) rotate(-4deg)
+   }
+ 
+   to {
+     transform: scale(1) rotate(0)
+   }
```

#### 1152. `bundles/bloxd.io/main.css` (Changed code · before: `L11663-L11664` → after: `L13119-L13128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13119-L13128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13119-L13128) · [Before (L11663-L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11663-L11664)

```diff
- .CheckoutNotice.CheckoutNoticeInfo {
-   color: #85baff
+ @keyframes GiftLevelUpSpark {
+   0% {
+     opacity: 1;
+     transform: rotate(var(--burst-angle)) translateY(-3rem) scale(1)
+   }
+ 
+   to {
+     opacity: 0;
+     transform: rotate(var(--burst-angle)) translateY(calc(var(--burst-distance, 6.5rem)*-1)) scale(.4)
+   }
```

#### 1153. `bundles/bloxd.io/main.css` (Changed code · before: `L11667-L11671` → after: `L13131-L13138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R13131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L13131-L13138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L13131-L13138) · [Before (L11667-L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L11667-L11671)

```diff
- .BundlesLoadFailed {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem
+ @keyframes GiftLevelUpBar {
+   0% {
+     width: var(--bar-from)
+   }
+ 
+   to {
+     width: var(--bar-to)
+   }
```

#### 1154. `bundles/bloxd.io/main.css` (Changed code · before: `L12575` → after: `L14067-L14071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R14067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L14067-L14071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L14067-L14071) · [Before (L12575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L12575)

```diff
- .ForceRotatePromptEntering {
+ .ForceRotatePromptEntering>* {
+   visibility: hidden
+ }
+ 
+ .ForceRotatePromptOpaque {
```

#### 1155. `bundles/bloxd.io/main.css` (Changed code · before: `L12828` → after: `L14378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L14378) · [Before (L12828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L12828)

```diff
-   bottom: -2.5%;
+   bottom: 12%;
```

#### 1156. `bundles/bloxd.io/main.css` (Changed code · before: `L12858-L12861` → after: `L14408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R14408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L14408) · [Before (L12858-L12861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L12858-L12861)

```diff
-   fill: #394980;
-   height: auto;
-   inset: 0 22% 4%;
-   width: auto
+   fill: #394980
```

#### 1157. `bundles/bloxd.io/main.css` (Changed code · before: `L12898-L12903` → after: `L14445-L14448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R14445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L14445-L14448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L14445-L14448) · [Before (L12898-L12903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L12898-L12903)

```diff
- @media(pointer:coarse) {
-   .LoadingCharacters .LoadingFigure .LoadingCharacterCustomise:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
-   }
+ .LoadingCharacters .LoadingFigure .LoadingCharacterCustomise:before {
+   content: "";
+   inset: min(-.6em, min(0px, (100% - 44px)/2)) min(-1em, min(0px, (100% - 44px)/2));
+   position: absolute
```

#### 1158. `bundles/bloxd.io/main.css` (Changed code · before: `L13837` → after: `L15382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15382) · [Before (L13837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L13837)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel.OutfitLoading .CharCustomisationPreview {
+ .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel.Undressed .CharCustomisationPreview {
```

#### 1159. `bundles/bloxd.io/main.css` (Changed code · before: `L14409-L14645` → after: `L15954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15954) · [Before (L14409-L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14409-L14645)

```diff
-   padding: .15rem .35rem .1rem .25rem
- }
- 
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td:not(:first-child),
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable th:not(:first-child) {
-   border-left: .1rem solid hsla(0, 0%, 51%, .15);
-   text-align: right
- }
- 
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable tbody tr:nth-child(2n) {
-   background: hsla(0, 0%, 51%, .2)
- }
- 
- .NotificationToasts {
-   align-items: flex-end;
-   display: flex;
- ... (221 more removed lines; see GitHub link above)
+   padding: .15rem .35rem .1rem .25rem
```

#### 1160. `bundles/bloxd.io/main.css` (Changed code · before: `L14648-L14649` → after: `L15957-L15960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15957-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15957-L15960) · [Before (L14648-L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14648-L14649)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .KeyboardButtonRepresentation {
-   font-size: .8rem
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td:not(:first-child),
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable th:not(:first-child) {
+   border-left: .1rem solid hsla(0, 0%, 51%, .15);
+   text-align: right
```

#### 1161. `bundles/bloxd.io/main.css` (Changed code · before: `L14652` → after: `L15963-L15967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15963-L15967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15963-L15967) · [Before (L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14652)

```diff
- .UiRequests {
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable tbody tr:nth-child(2n) {
+   background: hsla(0, 0%, 51%, .2)
+ }
+ 
+ .NotificationToasts {
```

#### 1162. `bundles/bloxd.io/main.css` (Changed code · before: `L14678` → after: `L15973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15973) · [Before (L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14678)

```diff
-   transform: translateX(0)
+   transition: opacity .2s
```

#### 1163. `bundles/bloxd.io/main.css` (Changed code · before: `L14681-L14685` → after: `L15976-L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15976-L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15976-L15977) · [Before (L14681-L14685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14681-L14685)

```diff
- .UiRequests .UiRequestContainer.UiRequestContainer-exit-active {
-   opacity: 0;
-   pointer-events: none;
-   transform: translateX(1.5rem);
-   transition: opacity .2s ease-in, transform .2s ease-in
+ .NotificationToasts:empty {
+   display: none
```

#### 1164. `bundles/bloxd.io/main.css` (Changed code · before: `L14688-L14690` → after: `L15980-L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15980-L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15980-L15984) · [Before (L14688-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14688-L14690)

```diff
- .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer {
-   animation: shake 3s infinite;
-   animation-delay: 6s
+ .NotificationToasts.NotificationToasts-page {
+   position: fixed;
+   right: calc(1rem + var(--notchRight));
+   top: calc(7rem + var(--notchTop));
+   z-index: 16
```

#### 1165. `bundles/bloxd.io/main.css` (Changed code · before: `L14693-L14697` → after: `L15987-L15988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15987-L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15987-L15988) · [Before (L14693-L14697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14693-L14697)

```diff
- .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
-   animation: shine 4s linear infinite;
-   background: linear-gradient(110deg, #303a59, #303a59 2rem, #394980 0, #394980 4rem, #303a59 0, #303a59);
-   background-position: -4rem 0;
-   background-size: calc(200% + 4rem) 100%
+ .NotificationToasts.NotificationToasts-page.NotificationToastsCornerClear {
+   top: calc(1rem + var(--notchTop))
```

#### 1166. `bundles/bloxd.io/main.css` (Changed code · before: `L14700-L14711` → after: `L15991-L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15991-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15991-L15993) · [Before (L14700-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14700-L14711)

```diff
- @keyframes shine {
-   0% {
-     background-position: -4rem 0
-   }
- 
-   12.5% {
-     background-position: -100% 0
-   }
- 
-   to {
-     background-position: -100% 0
-   }
+ .NotificationToasts.NotificationToasts-inGame {
+   margin-top: .6rem;
+   z-index: 1
```

#### 1167. `bundles/bloxd.io/main.css` (Changed code · before: `L14714-L14715` → after: `L15996-L15998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15996-L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L15996-L15998) · [Before (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14714-L14715)

```diff
- .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
-   border-color: #ffb914
+ .NotificationToasts.NotificationToasts-inGame:not(:has(>.NotificationToastContainer:not(.NotificationToastContainer-exit))) {
+   margin-top: 0;
+   transition: opacity .2s, margin-top .25s cubic-bezier(.2, .8, .2, 1) .1s
```

#### 1168. `bundles/bloxd.io/main.css` (Changed code · before: `L14718-L14723` → after: `L16001-L16002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16001-L16002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16001-L16002) · [Before (L14718-L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14718-L14723)

```diff
- .UiRequests .UiRequestContainer .UiRequest {
-   animation-duration: .25s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: topRightStackIn;
-   animation-timing-function: cubic-bezier(.2, .8, .2, 1)
+ .NotificationToasts.NotificationToasts-inGame .NotificationToast {
+   max-width: calc(100vw - 8rem - var(--notchLeft) - var(--notchRight))
```

#### 1169. `bundles/bloxd.io/main.css` (Changed code · before: `L14726-L14737` → after: `L16005-L16008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16005-L16008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16005-L16008) · [Before (L14726-L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14726-L14737)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner {
-   align-items: center;
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   display: flex;
-   gap: .5rem;
-   justify-content: flex-start;
-   overflow: hidden;
-   padding: .5rem 1rem .5rem .5rem;
-   position: relative
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons {
+   align-items: stretch;
+   align-self: stretch;
+   gap: 8px
```

#### 1170. `bundles/bloxd.io/main.css` (Changed code · before: `L14740-L14744` → after: `L16011-L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16011-L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16011-L16012) · [Before (L14740-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14740-L14744)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay {
-   align-items: center;
-   display: flex;
-   gap: 1rem;
-   height: 100%;
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton,
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastClose {
```

#### 1171. `bundles/bloxd.io/main.css` (Changed code · before: `L14746-L14751` → after: `L16014-L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16014-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16014-L16015) · [Before (L14746-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14746-L14751)

```diff
-   left: 0;
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 2
+   min-width: 44px;
+   position: relative
```

#### 1172. `bundles/bloxd.io/main.css` (Changed code · before: `L14754-L14756` → after: `L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16018) · [Before (L14754-L14756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14754-L14756)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayDefault {
-   background-color: transparent
- }
+ @media(pointer:coarse) {
```

#### 1173. `bundles/bloxd.io/main.css` (Changed code · before: `L14758-L14760` → after: `L16020-L16025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16020-L16025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16020-L16025) · [Before (L14758-L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14758-L14760)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayLoading {
-   background-color: rgba(48, 58, 89, .9);
-   font-size: 2rem
+   .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton:before,
+   .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastClose:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 1174. `bundles/bloxd.io/main.css` (Changed code · before: `L14763-L14764` → after: `L16028-L16029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16028-L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16028-L16029) · [Before (L14763-L14764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14763-L14764)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess {
-   background-color: rgba(48, 58, 89, .9)
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton {
+   overflow: visible
```

#### 1175. `bundles/bloxd.io/main.css` (Changed code · before: `L14767-L14768` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16032) · [Before (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14767-L14768)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayIcon {
-   font-size: 2rem;
+ .NotificationToasts .NotificationToastContainer {
```

#### 1176. `bundles/bloxd.io/main.css` (Changed code · before: `L14772-L14774` → after: `L16036-L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16036-L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16036-L16039) · [Before (L14772-L14774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14772-L14774)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayText {
-   font-size: 1.3rem;
-   font-weight: 700
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit {
+   opacity: 1;
+   pointer-events: none;
+   transform: translateX(0)
```

#### 1177. `bundles/bloxd.io/main.css` (Changed code · before: `L14777-L14783` → after: `L16042-L16046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16042-L16046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16042-L16046) · [Before (L14777-L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14777-L14783)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestLeft {
-   align-items: center;
-   display: flex;
-   font-size: 3rem;
-   height: 5rem;
-   justify-content: center;
-   width: 5rem
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active {
+   opacity: 0;
+   pointer-events: none;
+   transform: translateX(1.5rem);
+   transition: opacity .2s ease-in, transform .2s ease-in
```

#### 1178. `bundles/bloxd.io/main.css` (Changed code · before: `L14786-L14790` → after: `L16049-L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16049-L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16049-L16051) · [Before (L14786-L14790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14786-L14790)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit {
+   height: var(--TopRightStackExitHeight);
+   min-height: 0
```

#### 1179. `bundles/bloxd.io/main.css` (Changed code · before: `L14793-L14797` → after: `L16054-L16057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16054-L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16054-L16057) · [Before (L14793-L14797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14793-L14797)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestText {
-   font-size: 1.3rem;
-   font-weight: 700;
-   margin-right: auto;
-   padding: .25rem 1.25rem .25rem .4rem
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active {
+   height: 0;
+   margin-top: -.5rem;
+   transition: opacity .2s ease-in, transform .2s ease-in, height .25s cubic-bezier(.2, .8, .2, 1) .1s, margin-top .25s cubic-bezier(.2, .8, .2, 1) .1s, margin-bottom .25s cubic-bezier(.2, .8, .2, 1) .1s
```

#### 1180. `bundles/bloxd.io/main.css` (Changed code · before: `L14800-L14804` → after: `L16060-L16062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16060-L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16060-L16062) · [Before (L14800-L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14800-L14804)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList {
-   align-items: center;
-   display: flex;
-   gap: .5rem;
-   justify-content: center
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active:first-child {
+   margin-bottom: -.5rem;
+   margin-top: 0
```

#### 1181. `bundles/bloxd.io/main.css` (Changed code · before: `L14807-L14811` → after: `L16065-L16066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16065-L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16065-L16066) · [Before (L14807-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14807-L14811)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton {
-   box-shadow: none;
-   flex-grow: 1;
-   font-size: 1rem;
-   font-weight: 700
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit .NotificationToast {
+   pointer-events: none
```

#### 1182. `bundles/bloxd.io/main.css` (Changed code · before: `L14814` → after: `L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16069) · [Before (L14814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14814)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .ButtonBody {
+ .NotificationToasts .NotificationToast {
```

#### 1183. `bundles/bloxd.io/main.css` (Changed code · before: `L14817-L14818` → after: `L16081-L16086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16081-L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16081-L16086) · [Before (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14817-L14818)

```diff
-   gap: 1rem;
-   justify-content: center
+   gap: .8rem;
+   max-width: calc(100vw - 2rem);
+   min-width: min(300px, 100vw - 8rem - var(--notchLeft) - var(--notchRight));
+   padding: .6rem .6rem .6rem .9rem;
+   pointer-events: auto;
+   width: 30rem
```

#### 1184. `bundles/bloxd.io/main.css` (Changed code · before: `L14821-L14822` → after: `L16089-L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16089-L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16089-L16092) · [Before (L14821-L14822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14821-L14822)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .KeyboardButtonRepresentation {
-   font-size: .8rem
+ .NotificationToasts .NotificationToast.NotificationToastMessage {
+   min-width: 0;
+   padding: .7rem 1.1rem;
+   width: auto
```

#### 1185. `bundles/bloxd.io/main.css` (Changed code · before: `L14825-L14844` → after: `L16095-L16098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16095-L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16095-L16098) · [Before (L14825-L14844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14825-L14844)

```diff
- @keyframes chestShake {
-   0% {
-     transform: translateX(-50%) rotate(6deg)
-   }
- 
-   25% {
-     transform: translateX(-50%) rotate(-4deg)
-   }
- 
-   50% {
-     transform: translateX(-50%) rotate(6deg)
-   }
- 
-   75% {
-     transform: translateX(-50%) rotate(-4deg)
-   }
- ... (4 more removed lines; see GitHub link above)
+ .NotificationToasts .NotificationToast .NotificationToastIcon {
+   color: #ffb914;
+   flex: 0 0 auto;
+   font-size: max(1.6rem, 15px)
```

#### 1186. `bundles/bloxd.io/main.css` (Changed code · before: `L14847-L14851` → after: `L16101-L16115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16101-L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16101-L16115) · [Before (L14847-L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14847-L14851)

```diff
- @keyframes pop {
-   0% {
-     bottom: 0;
-     opacity: 0
-   }
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
+ }
```

#### 1187. `bundles/bloxd.io/main.css` (Changed code · before: `L14853-L14856` → after: `L16117-L16119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16117-L16119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16117-L16119) · [Before (L14853-L14856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14853-L14856)

```diff
-   to {
-     bottom: 1.5rem;
-     opacity: 0
-   }
+ .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText {
+   display: block;
+   overflow-wrap: normal
```

#### 1188. `bundles/bloxd.io/main.css` (Changed code · before: `L14859-L14862` → after: `L16122-L16126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16122-L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16122-L16126) · [Before (L14859-L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14859-L14862)

```diff
- .ChestContainer {
-   height: 5.5rem;
-   position: relative;
-   width: 5rem
+ .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText .NotificationToastName {
+   font-weight: 900;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1189. `bundles/bloxd.io/main.css` (Changed code · before: `L14865-L14878` → after: `L16129-L16139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16129-L16139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16129-L16139) · [Before (L14865-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14865-L14878)

```diff
- .ChestContainer .ChestImage {
-   -ms-interpolation-mode: nearest-neighbor;
-   animation: chestShake .4s 3;
-   bottom: 0;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   left: 50%;
-   position: absolute;
-   transform: translateX(-50%);
-   transform-origin: center center;
-   transition: width .2s;
-   width: 4rem
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

#### 1190. `bundles/bloxd.io/main.css` (Changed code · before: `L14881-L14882` → after: `L16142-L16146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16142-L16146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16142-L16146) · [Before (L14881-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14881-L14882)

```diff
- .ChestContainer .ChestImage.ChestImageSmall {
-   width: 2.5rem
+ .NotificationToasts .NotificationToast .NotificationToastButtons {
+   align-items: center;
+   display: flex;
+   flex: 0 0 auto;
+   gap: .3rem
```

#### 1191. `bundles/bloxd.io/main.css` (Changed code · before: `L14885-L14897` → after: `L16149-L16151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16149-L16151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16149-L16151) · [Before (L14885-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14885-L14897)

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
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton {
+   box-shadow: none;
+   font-size: 1rem
```

#### 1192. `bundles/bloxd.io/main.css` (Changed code · before: `L14900-L14906` → after: `L16154-L16157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16154-L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16154-L16157) · [Before (L14900-L14906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14900-L14906)

```diff
- .ChestContainer .ChestShine .ChestShineBackground {
-   background: linear-gradient(0, rgba(255, 185, 20, .8), rgba(255, 185, 20, 0));
-   bottom: 0;
-   height: 100%;
-   left: 0;
-   position: absolute;
-   width: 100%
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton .ButtonBody {
+   align-items: center;
+   display: flex;
+   gap: .6rem
```

#### 1193. `bundles/bloxd.io/main.css` (Changed code · before: `L14909` → after: `L16160-L16164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16160-L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16160-L16164) · [Before (L14909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14909)

```diff
- .ChestContainer .RewardItemsContainer {
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton.NotificationToastAnswer {
+   font-size: 1.1rem
+ }
+ 
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose {
```

#### 1194. `bundles/bloxd.io/main.css` (Changed code · before: `L14913-L14918` → after: `L16174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16174) · [Before (L14913-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14913-L14918)

```diff
-   height: 3rem;
-   justify-content: center;
-   left: 0;
-   position: absolute;
-   top: 0;
-   width: 100%
+   padding: .4rem .5rem
```

#### 1195. `bundles/bloxd.io/main.css` (Changed code · before: `L14921-L14926` → after: `L16177-L16180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16177-L16180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16177-L16180) · [Before (L14921-L14926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14921-L14926)

```diff
- .ChestContainer .RewardItemsContainer .RewardItem {
-   font-size: 1.5rem;
-   height: 100%;
-   position: relative;
-   transform-origin: center bottom;
-   width: 0
+ @media(hover:hover) {
+   .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose:hover {
+     color: #ff8a80
+   }
```

#### 1196. `bundles/bloxd.io/main.css` (Changed code · before: `L14929-L14931` → after: `L16183-L16184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16183-L16184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16183-L16184) · [Before (L14929-L14931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14929-L14931)

```diff
- .ChestContainer .RewardItemsContainer .RewardItem.RewardItemShow .TextFromServer {
-   bottom: .25rem;
-   opacity: 1
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose.pad-focused {
+   color: #ff8a80
```

#### 1197. `bundles/bloxd.io/main.css` (Changed code · before: `L14934-L14940` → after: `L16187-L16194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R16187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L16187-L16194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L16187-L16194) · [Before (L14934-L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L14934-L14940)

```diff
- .ChestContainer .RewardItemsContainer .RewardItem .TextFromServer {
-   bottom: -1rem;
-   opacity: 0;
-   position: absolute;
-   transform: translateX(-50%);
-   transition: opacity .4s, bottom .4s;
-   transition-delay: .2s
+ @media(hover:none) {
+   .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose:active {
+     color: #ff8a80
+   }
+ }
+ 
+ .NotificationToasts .NotificationToast .NotificationToastButtons .KeyboardButtonRepresentation {
+   font-size: .8rem
```

#### 1198. `bundles/bloxd.io/main.css` (Changed code · before: `L17607` → after: `L18978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R18978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L18978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L18978) · [Before (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L17607)

```diff
-   padding: .5rem .75rem;
+   padding: .75rem;
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/main.js` (1724 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see u88b9b.main.1969c480.js.LICENSE.txt */
+ /*! For license information please see 1yqdn.main.8419f1e1.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3)

```diff
-     var ee = [, , , , , , , , (ee, ie, He) => {
+     var WW = [, , , , , , , , , , , , , (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7)

```diff
-             E: () => we,
+             G: () => ZW,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9-L10)

```diff
-             J: () => Oe,
-             N: () => ke,
+             I: () => hW,
+             M: () => CW,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L13-L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L13-L14)

```diff
-             T: () => oe,
-             X: () => xe,
+             W: () => dW,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L16-L19` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L16-L18) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L16-L19)

```diff
-             ab: () => Ee,
-             b: () => fe,
-             bb: () => Je,
-             d: () => pe,
+             _: () => gW,
+             cb: () => sW,
+             e: () => AW,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L21-L24` → after: `L20-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L20-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L21-L24)

```diff
-             f: () => Xe,
-             gb: () => ye,
-             h: () => Te,
-             j: () => Ue,
+             i: () => jW,
+             ib: () => wW,
+             k: () => UW,
+             l: () => bW,
+             lb: () => nW,
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L26` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L26-L27) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L26)

```diff
-             o: () => ze,
+             mb: () => mW,
+             p: () => cW,
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L28-L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L28-L29)

```diff
-             w: () => be,
-             y: () => qe
+             w: () => XW
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L141)

```diff
-         }, , , , , (ee, ie, He) => {
+         }, , , , , , (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L143)

```diff
-             c: () => Ue
+             e: () => LW
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L145-L146` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L145-L146) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L145-L146)

```diff
-           var ye = He(18),
-             be = He(737);
+           var mW = OW(25),
+             EW = OW(749);
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L168)

```diff
-             (ye.e.set({
+             (mW.d.set({
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L172)

```diff
-         }, , , , , (ee, ie, He) => {
+         }, , , , , , (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L178)

```diff
-             m: () => gi
+             p: () => Yi
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L180-L182` → after: `L180-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L180-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L180-L184) · [Before (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L180-L182)

```diff
-           var ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce = He(27),
-             ve = He(335),
-             ue = He(347),
+           var mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW = OW(27),
+             CW = OW(327),
+             XW = OW(344),
+             BW = OW(39),
+             qW = OW(53),
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L187-L200` → after: `L187-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L187-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L187-L201) · [Before (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L187-L200)

```diff
-             je = He(59),
-             se = He(77),
-             Ie = He(97),
-             he = He(245),
-             Ne = He(319),
-             Ge = He(325),
-             re = He(627),
-             Qe = He(115),
-             ei = He(643),
-             ii = He(645),
-             Hi = He(288),
-             yi = He(699),
-             bi = He(704),
-             Mi = He(710);
+             IW = OW(62),
+             aW = OW(80),
+             rW = OW(100),
+             zW = OW(241),
+             FW = OW(299),
+             QW = OW(307),
+             Wi = OW(315),
+             ii = OW(657),
+             Oi = OW(119),
+             mi = OW(669),
+             Ei = OW(671),
+             Ni = OW(274),
+             Pi = OW(724),
+             Li = OW(727),
+             ci = OW(730);
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L205-L210` → after: `L206-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L206-L211) · [Before (L205-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L205-L210)

```diff
-             if (!0 === me.i.getItem(Qe.H)) return "old_intel_driver";
-             if (ei.i && !0 === me.i.getItem(Qe.E)) return "intel_gen9";
-             if (ii.I && (0, ei.d)(me.i.getItem(Qe.D))) return "gpu_class_webgl";
-             if (ii.I && !0 === me.i.getItem(Qe.N)) return "gpu_wasm_arm";
-             const ee = ii.I ? null : (0, ei.m)();
-             return 26 === ee && (0, ei.o)((0, Hi.b)()) ? "safari_26" : 27 === ee && (0, ei.r)((0, Hi.b)()) ? "safari_27" : (0, Ge.C)() ? "off_after_loss" : null
+             if (!0 === BW.i.getItem(Oi.A)) return "old_intel_driver";
+             if (mi.i && !0 === BW.i.getItem(Oi.z)) return "intel_gen9";
+             if (Ei.K && (0, mi.c)(BW.i.getItem(Oi.x))) return "gpu_class_webgl";
+             if (Ei.K && !0 === BW.i.getItem(Oi.F)) return "gpu_wasm_arm";
+             const WW = Ei.K ? null : (0, mi.j)();
+             return 26 === WW && (0, mi.n)((0, Ni.d)()) ? "safari_26" : 27 === WW && (0, mi.r)((0, Ni.d)()) ? "safari_27" : (0, Wi.A)() ? "off_after_loss" : (0, FW.e)() ? "few_wasm_memories" : null
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L218` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L219) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L218)

```diff
-           let Ri = null === me.i.getItem(ve.nc);
+           let Ai = null === BW.i.getItem(CW.pc);
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L223` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L224) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L223)

```diff
-             appBillingStore: null,
+             appBilling: null,
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L231-L232` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L232-L233) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L231-L232)

```diff
-             soundVolume: (0, le.b)(),
-             musicVolume: null !== (ye = me.i.getItem("musicVol")) && void 0 !== ye ? ye : .5,
+             soundVolume: (0, qW.d)(),
+             musicVolume: null !== (mW = BW.i.getItem("musicVol")) && void 0 !== mW ? mW : .5,
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L248` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L250) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L248)

```diff
-               return "boolean" === typeof ee ? ee : null
+               return "boolean" === typeof WW ? WW : null
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L264` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L265) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L264)

```diff
-             enabledDebugFeatures: null !== (Me = me.i.getItem("enabledDebugFeatures")) && void 0 !== Me ? Me : {},
+             enabledDebugFeatures: null !== (NW = BW.i.getItem("enabledDebugFeatures")) && void 0 !== NW ? NW : {},
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L281` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L282) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L281)

```diff
-                 return null !== (ee = yi.b.find((ee => ee === ie))) && void 0 !== ee ? ee : "toastAndTray"
+                 return null !== (WW = Pi.b.find((WW => WW === iW))) && void 0 !== WW ? WW : "toastAndTray"
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L283-L284` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L284-L285) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L283-L284)

```diff
-               touchscreenSensitivity: null !== (oe = me.i.getItem("touchscreenSensitivity")) && void 0 !== oe ? oe : 150,
-               mouseSensitivity: null !== (Re = me.i.getItem("mouseSensitivity")) && void 0 !== Re ? Re : 15,
+               touchscreenSensitivity: null !== (tW = BW.i.getItem("touchscreenSensitivity")) && void 0 !== tW ? tW : 150,
+               mouseSensitivity: null !== (ZW = BW.i.getItem("mouseSensitivity")) && void 0 !== ZW ? ZW : 15,
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L298` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L299) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L298)

```diff
-               fogChunkDistance: null !== (te = me.i.getItem("fogChunkDistance")) && void 0 !== te ? te : 2,
+               fogChunkDistance: null !== (TW = BW.i.getItem("fogChunkDistance")) && void 0 !== TW ? TW : 2,
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L301` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L302) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L301)

```diff
-               ambientLightIntensity: null !== (De = me.i.getItem("ambientLightIntensity")) && void 0 !== De ? De : .5,
+               ambientLightIntensity: null !== (HW = BW.i.getItem("ambientLightIntensity")) && void 0 !== HW ? HW : .5,
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L305-L306` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L306-L307) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L305-L306)

```diff
-               useWebGpu: null !== (Pe = me.i.getItem(ve.nc)) && void 0 !== Pe ? Pe : oi,
-               pixelScale: null !== (Ae = me.i.getItem("pixelScale")) && void 0 !== Ae ? Ae : (0, Ie.getDeviceDefaultPixelScale)(),
+               useWebGpu: null !== (nW = BW.i.getItem(CW.pc)) && void 0 !== nW ? nW : li,
+               pixelScale: null !== (uW = BW.i.getItem("pixelScale")) && void 0 !== uW ? uW : (0, rW.getDeviceDefaultPixelScale)(),
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L312` → after: `L313-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L313-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L313-L315) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L312)

```diff
-               clipDurationSeconds: null !== (Le = me.i.getItem("clipDurationSeconds")) && void 0 !== Le ? Le : bi.f,
+               clipDurationSeconds: null !== (DW = BW.i.getItem("clipDurationSeconds")) && void 0 !== DW ? DW : Li.e,
+               showSoundDirections: null !== (VW = BW.i.getItem("showSoundDirections")) && void 0 !== VW && VW,
+               showTeamSymbols: null !== (pW = BW.i.getItem("showTeamSymbols")) && void 0 !== pW && pW,
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L320` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L323) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L320)

```diff
-             const He = null !== (ie = me.i.getItem(Ne.e)) && void 0 !== ie ? ie : (0, he.i)();
+             const OW = null !== (iW = BW.i.getItem(QW.c)) && void 0 !== iW ? iW : (0, zW.k)();
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L330` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L333) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L330)

```diff
-             return null !== me.i.getItem(Ne.e)
+             return null !== BW.i.getItem(QW.c)
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L336` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L339) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L336)

```diff
-               for (const ie in ee) Ce.h.yR(`appManagerUpdated|${ie}`, ee[ie])
+               for (const iW in WW) fW.l.iZ(`appManagerUpdated|${iW}`, WW[iW])
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L350` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L353) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L350)

```diff
-               for (const Me in ee)(0, ue.ee)(ki[Me], ee[Me]) || (ie[Me] = ee[Me], He = !0);
+               for (const NW in WW)(0, XW.ae)(bi[NW], WW[NW]) || (iW[NW] = WW[NW], OW = !0);
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L357` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L360) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L357)

```diff
-                 me.i.setItem("UseProfanityFilter", ee.useProfanityFilter), me.i.setItem("showChat", ee.showChat), me.i.setItem("showNewItemIndicator", ee.showNewItemIndicator), me.i.setItem("showFriendOnlineToasts", ee.showFriendOnlineToasts), me.i.setItem("friendRequestNotificat … [truncated]
+                 BW.i.setItem("UseProfanityFilter", WW.useProfanityFilter), BW.i.setItem("showChat", WW.showChat), BW.i.setItem("showNewItemIndicator", WW.showNewItemIndicator), BW.i.setItem("showFriendOnlineToasts", WW.showFriendOnlineToasts), BW.i.setItem("friendRequestNotificat … [truncated]
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L371` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L374) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L371)

```diff
-                 openEverythingMenuName: ve.r.SETTINGS,
+                 openEverythingMenuName: CW.m.SETTINGS,
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L376-L377` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L379-L380) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L376-L377)

```diff
-               const ie = fi() ? null : (0, he.b)(ee);
-               return null !== ie && void 0 !== ie ? ie : ki.clientEscMenuOptions.antiAliasing
+               const iW = Ui() ? null : (0, zW.d)(WW);
+               return null !== iW && void 0 !== iW ? iW : bi.clientEscMenuOptions.antiAliasing
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L380-L381` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L383-L384) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L380-L381)

```diff
-               (0, he.e)(ee);
-               const ie = fi() ? ki.clientEscMenuOptions.antiAliasing : (0, he.i)();
+               (0, zW.g)(WW);
+               const iW = Ui() ? bi.clientEscMenuOptions.antiAliasing : (0, zW.k)();
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L405` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L408) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L405)

```diff
-               let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ge.n)(),
+               let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wi.m)(),
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L408-L409` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L411-L412) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L408-L409)

```diff
-               const ye = (0, Ge.x)(ee, ie, He);
-               return (0, Ge.C)() && !0 === me.i.getItem(ve.nc) && me.i.removeItem(ve.nc), ye
+               const mW = (0, Wi.w)(WW, iW, OW);
+               return (0, Wi.A)() && !0 === BW.i.getItem(CW.pc) && BW.i.removeItem(CW.pc), mW
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L412` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L415) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L412)

```diff
-               (0, re.d)(ee) && (0, Ge.C)() && Ri && ki.clientEscMenuOptions.useWebGpu && (Ji = Ui(), this.setEscMenuOptionsUnstored({
+               (0, ii.c)(WW) && (0, Wi.A)() && Ai && bi.clientEscMenuOptions.useWebGpu && (xi = ti(), this.setEscMenuOptionsUnstored({
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L420` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L423) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L420)

```diff
-               return (0, Ge.H)() || !0 === me.i.getItem(Qe.H)
+               return (0, Wi.H)() || !0 === BW.i.getItem(Oi.A) || (0, FW.e)()
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L423` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L426) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L423)

```diff
-               return (0, Ge.C)()
+               return (0, Wi.A)()
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L426` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L429) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L426)

```diff
-               return Ri ? Ji : null
+               return Ai ? xi : null
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L429` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L432) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L429)

```diff
-               !0 === me.i.getItem(Qe.H) && (0, Ie.hasUsableWebGpuAdapter)()
+               !0 === BW.i.getItem(Oi.A) && (0, rW.hasUsableWebGpuAdapter)()
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L473` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L476) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L473)

```diff
-         }, , , , , , , , , (ee, ie, He) => {
+         }, , (WW, iW, OW) => {
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L475-L477` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L478) · [Before (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L475-L477)

```diff
-             b: () => Ue,
-             e: () => Me,
-             g: () => oe,
+             d: () => LW,
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L479` → after: `L480-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L480-L482) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L479)

```diff
-             j: () => Re
+             k: () => tW,
+             l: () => wW,
+             n: () => ZW
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L481` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L484) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L481)

```diff
-           var ye = He(30),
+           var mW = OW(35),
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L491` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L494) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L491)

```diff
-               super(...arguments), this.BX = !1, this.EX = [], this.Yz = {}
+               super(...arguments), this.jU = !1, this.kU = [], this.KU = {}
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L495` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L498) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L495)

```diff
-               this.BX || !He ? this.emit(ee, ie) : this.EX.push({
+               this.jU || !OW ? this.emit(WW, iW) : this.kU.push({
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L502-L503` → after: `L505-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L505-L506) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L502-L503)

```diff
-               const ye = this.yB(ee, ie);
-               return this.on(ee, ye), this.Yz[ee] = (null !== (He = this.Yz[ee]) && void 0 !== He ? He : 0) + 1, {
+               const mW = this.hU(WW, iW);
+               return this.on(WW, mW), this.KU[WW] = (null !== (OW = this.KU[WW]) && void 0 !== OW ? OW : 0) + 1, {
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L512` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L515) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L512)

```diff
-               const He = this.yB(ee, ie);
+               const OW = this.hU(WW, iW);
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L521-L522` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L524-L525) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L521-L522)

```diff
-                 He = this.Yz[ie];
-               He > 1 ? this.Yz[ie] = He - 1 : 1 === He && delete this.Yz[ie]
+                 OW = this.KU[iW];
+               OW > 1 ? this.KU[iW] = OW - 1 : 1 === OW && delete this.KU[iW]
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L529` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L532) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L529)

```diff
-                   console.error(`Error in PubSub listener for event ${ee}:`, ye)
+                   console.error(`Error in PubSub listener for event ${WW}:`, mW)
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L534` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L537) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L534)

```diff
-               this.BX = ee, ee && (this.EX.forEach((ee => {
+               this.jU = WW, WW && (this.kU.forEach((WW => {
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L539-L540` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L542-L543) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L539-L540)

```diff
-                 this.yR(ie, He)
-               })), this.EX = [])
+                 this.iZ(iW, OW)
+               })), this.kU = [])
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L543` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L546) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L543)

```diff
-               this.EX = []
+               this.kU = []
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L549` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L552) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L549)

```diff
-             Je.qB(!0)
+             wW.vU(!0)
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L558` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L561) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L558)

```diff
-         }, , , ee => {
+         }, , , , , , , , WW => {
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L565` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L568) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L565)

```diff
-             this.oR = ee, this.context = ie, this.once = He || !1
+             this.cZ = WW, this.context = iW, this.once = OW || !1
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L571-L572` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L574-L575) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L571-L572)

```diff
-               Fe = He ? He + ie : ie;
-             return ee._events[Fe] ? ee._events[Fe].oR ? ee._events[Fe] = [ee._events[Fe], Ue] : ee._events[Fe].push(Ue) : (ee._events[Fe] = Ue, ee._eventsCount++), ee
+               cW = OW ? OW + iW : iW;
+             return WW._events[cW] ? WW._events[cW].cZ ? WW._events[cW] = [WW._events[cW], LW] : WW._events[cW].push(LW) : (WW._events[cW] = LW, WW._eventsCount++), WW
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L576` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L579) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L576)

```diff
-             0 === --ee._eventsCount ? ee._events = new ye : delete ee._events[ie]
+             0 === --WW._eventsCount ? WW._events = new mW : delete WW._events[iW]
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L588` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L591) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L588)

```diff
-             var ie = He ? He + ee : ee,
+             var iW = OW ? OW + WW : WW,
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L591-L592` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L594-L595) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L591-L592)

```diff
-             if (ye.oR) return [ye.oR];
-             for (var be = 0, Me = ye.length, Ke = new Array(Me); be < Me; be++) Ke[be] = ye[be].oR;
+             if (mW.cZ) return [mW.cZ];
+             for (var EW = 0, NW = mW.length, PW = new Array(NW); EW < NW; EW++) PW[EW] = mW[EW].cZ;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L595` → after: `L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L598) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L595)

```diff
-             var ie = He ? He + ee : ee,
+             var iW = OW ? OW + WW : WW,
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L597` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L600) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L597)

```diff
-             return ye ? ye.oR ? 1 : ye.length : 0
+             return mW ? mW.cZ ? 1 : mW.length : 0
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L599` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L602) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L599)

```diff
-             var Ue = He ? He + ee : ee;
+             var LW = OW ? OW + WW : WW;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L603-L604` → after: `L606-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L606-L607) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L603-L604)

```diff
-             if (oe.oR) {
-               switch (oe.once && this.removeListener(ee, oe.oR, void 0, !0), Re) {
+             if (tW.cZ) {
+               switch (tW.once && this.removeListener(WW, tW.cZ, void 0, !0), ZW) {
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L606` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L609) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L606)

```diff
-                   return oe.oR.call(oe.context), !0;
+                   return tW.cZ.call(tW.context), !0;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L608` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L611) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L608)

```diff
-                   return oe.oR.call(oe.context, ie), !0;
+                   return tW.cZ.call(tW.context, iW), !0;
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L610` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L613) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L610)

```diff
-                   return oe.oR.call(oe.context, ie, ye), !0;
+                   return tW.cZ.call(tW.context, iW, mW), !0;
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L612` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L615) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L612)

```diff
-                   return oe.oR.call(oe.context, ie, ye, be), !0;
+                   return tW.cZ.call(tW.context, iW, mW, EW), !0;
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L617) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L614)

```diff
-                   return oe.oR.call(oe.context, ie, ye, be, Me), !0;
+                   return tW.cZ.call(tW.context, iW, mW, EW, NW), !0;
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L616` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L619) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L616)

```diff
-                   return oe.oR.call(oe.context, ie, ye, be, Me, Ke), !0
+                   return tW.cZ.call(tW.context, iW, mW, EW, NW, PW), !0
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L619` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L622) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L619)

```diff
-               oe.oR.apply(oe.context, Fe)
+               tW.cZ.apply(tW.context, cW)
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L625) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L622)

```diff
-               for (Je = 0; Je < qe; Je++) switch (oe[Je].once && this.removeListener(ee, oe[Je].oR, void 0, !0), Re) {
+               for (wW = 0; wW < lW; wW++) switch (tW[wW].once && this.removeListener(WW, tW[wW].cZ, void 0, !0), ZW) {
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L624` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L627) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L624)

```diff
-                   oe[Je].oR.call(oe[Je].context);
+                   tW[wW].cZ.call(tW[wW].context);
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L627` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L630) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L627)

```diff
-                   oe[Je].oR.call(oe[Je].context, ie);
+                   tW[wW].cZ.call(tW[wW].context, iW);
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L630` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L633) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L630)

```diff
-                   oe[Je].oR.call(oe[Je].context, ie, ye);
+                   tW[wW].cZ.call(tW[wW].context, iW, mW);
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L636) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L633)

```diff
-                   oe[Je].oR.call(oe[Je].context, ie, ye, be);
+                   tW[wW].cZ.call(tW[wW].context, iW, mW, EW);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L638` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L641) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L638)

```diff
-                   oe[Je].oR.apply(oe[Je].context, Fe)
+                   tW[wW].cZ.apply(tW[wW].context, cW)
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L647` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L650) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L647)

```diff
-             var Me = He ? He + ee : ee;
+             var NW = OW ? OW + WW : WW;
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L651` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L654) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L651)

```diff
-             if (Ue.oR) Ue.oR !== ie || be && !Ue.once || ye && Ue.context !== ye || Ke(this, Me);
+             if (LW.cZ) LW.cZ !== iW || EW && !LW.once || mW && LW.context !== mW || PW(this, NW);
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L653-L654` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L656-L657) · [Before (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L653-L654)

```diff
-               for (var Fe = 0, Je = [], oe = Ue.length; Fe < oe; Fe++)(Ue[Fe].oR !== ie || be && !Ue[Fe].once || ye && Ue[Fe].context !== ye) && Je.push(Ue[Fe]);
-               Je.length ? this._events[Me] = 1 === Je.length ? Je[0] : Je : Ke(this, Me)
+               for (var cW = 0, wW = [], tW = LW.length; cW < tW; cW++)(LW[cW].cZ !== iW || EW && !LW[cW].once || mW && LW[cW].context !== mW) && wW.push(LW[cW]);
+               wW.length ? this._events[NW] = 1 === wW.length ? wW[0] : wW : PW(this, NW)
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L657` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L660) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L657)

```diff
-           }, Ue.prototype.zB = function(ee) {
+           }, LW.prototype.IU = function(WW) {
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L659` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L662) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L659)

```diff
-             return ee ? (ie = He ? He + ee : ee, this._events[ie] && Ke(this, ie)) : (this._events = new ye, this._eventsCount = 0), this
+             return WW ? (iW = OW ? OW + WW : WW, this._events[iW] && PW(this, iW)) : (this._events = new mW, this._eventsCount = 0), this
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L661` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L664) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L661)

```diff
-         }, , , , , (ee, ie, He) => {
+         }, , , , (WW, iW, OW) => {
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L667-L668` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L671) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L667-L668)

```diff
-             q: () => Te,
-             r: () => oe
+             o: () => tW
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L670` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L673) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L670)

```diff
-           var ye = He(37),
+           var mW = OW(41),
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L672` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L675) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L672)

```diff
-             Me = He(42),
+             NW = OW(50),
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L676` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L679) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L676)

```diff
-               return `bloxd-${ee}`
+               return `bloxd-${WW}`
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L702` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L705) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L702)

```diff
-                   ...He ? Je : Fe,
+                   ...OW ? wW : cW,
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L714` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L717) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L714)

```diff
-                 return console.error("Caught error", He, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (ie = this._cachedVals[ee]) && void 0 !== ie ? ie : null
+                 return console.error("Caught error", OW, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (iW = this._cachedVals[WW]) && void 0 !== iW ? iW : null
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L723` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L726) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L723)

```diff
-                 Ke().remove(ee, ie ? Je : Fe)
+                 PW().remove(WW, iW ? wW : cW)
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L751` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L754) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L751)

```diff
-                 return console.error("Caught error", He, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", OW, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L782` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L785) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L782)

```diff
-                 return console.error("Caught error", He, "when attempting to read from sessionStorage."), null !== (ie = this._cachedVals[ee]) && void 0 !== ie ? ie : null
+                 return console.error("Caught error", OW, "when attempting to read from sessionStorage."), null !== (iW = this._cachedVals[WW]) && void 0 !== iW ? iW : null
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L809` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L812) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L809)

```diff
-                 return null !== (ye = this._cachedVals[ee]) && void 0 !== ye ? ye : null
+                 return null !== (mW = this._cachedVals[WW]) && void 0 !== mW ? mW : null
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L831` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L834) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L831)

```diff
-                   for (let ye, be, Me = 0, Ke = 0; be = ee.charAt(Ke++); ~be && (ye = Me % 4 ? 64 * ye + be : be, Me++ % 4) ? ie += String.fromCharCode(255 & ye >> (-2 * Me & 6)) : 0) be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
+                   for (let mW, EW, NW = 0, PW = 0; EW = WW.charAt(PW++); ~EW && (mW = NW % 4 ? 64 * mW + EW : EW, NW++ % 4) ? iW += String.fromCharCode(255 & mW >> (-2 * NW & 6)) : 0) EW = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(EW);
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L838` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L841) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L838)

```diff
-               return Ke ? be = Ke : (be = pe.FZAkcO(be), ee[Me] = be), be
+               return PW ? EW = PW : (EW = jW.FZAkcO(EW), WW[NW] = EW), EW
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1012` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1015) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1012)

```diff
-                 return ee instanceof this ? ee : Me.resolve(new this(be), ee)
+                 return WW instanceof this ? WW : NW.resolve(new this(EW), WW)
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1061` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1064) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1061)

```diff
-                 return this.state !== Fe ? Re(He, this.state === Ue ? ee : ie, this.outcome) : this.queue.push(new oe(He, ee, ie)), He
+                 return this.state !== cW ? ZW(OW, this.state === LW ? WW : iW, this.outcome) : this.queue.push(new tW(OW, WW, iW)), OW
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1434` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1437) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1434)

```diff
-                       return ee ? ie : Ae(ie)
+                       return WW ? iW : uW(iW)
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1710` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1713) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1710)

```diff
-                   ee instanceof ArrayBuffer ? (ye = ee, be += Hi) : (ye = ee.buffer, "[object Int8Array]" === He ? be += bi : "[object Uint8Array]" === He ? be += Mi : "[object Uint8ClampedArray]" === He ? be += Ki : "[object Int16Array]" === He ? be += Ui : "[object Uint16Array] … [truncated]
+                   WW instanceof ArrayBuffer ? (mW = WW, EW += Oi) : (mW = WW.buffer, "[object Int8Array]" === OW ? EW += Ei : "[object Uint8Array]" === OW ? EW += Ni : "[object Uint8ClampedArray]" === OW ? EW += Pi : "[object Int16Array]" === OW ? EW += Li : "[object Uint16Array] … [truncated]
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1734` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1737) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1734)

```diff
-                   case Hi:
+                   case Oi:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1736` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1739) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1736)

```diff
-                   case yi:
+                   case mi:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1740` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1743) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1740)

```diff
-                   case bi:
+                   case Ei:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1742` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1745) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1742)

```diff
-                   case Mi:
+                   case Ni:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1744` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1747) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1744)

```diff
-                   case Ki:
+                   case Pi:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1746` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1749) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1746)

```diff
-                   case Ui:
+                   case Li:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1748` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1751) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1748)

```diff
-                   case Ji:
+                   case wi:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1750` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1753) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1750)

```diff
-                   case Fi:
+                   case ci:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1752` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1755) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1752)

```diff
-                   case oi:
+                   case ti:
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1754` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1757) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1754)

```diff
-                   case Ri:
+                   case Zi:
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1756` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1759) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1756)

```diff
-                   case ki:
+                   case xi:
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1794` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1797) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1794)

```diff
-                 return He.YB = Ei, be
+                 return OW.aU = si, EW
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L1816` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1819) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1816)

```diff
-                         ye && (ye = be.YB.deserialize(ye)), ie(ye)
+                         mW && (mW = EW.aU.deserialize(mW)), iW(mW)
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L1836` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1839) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1836)

```diff
-                             if (Je && (Je = be.YB.deserialize(Je)), void 0 !== (Je = ee(Je, Fe.key, Ue + 1))) return void ie(Je)
+                             if (wW && (wW = EW.aU.deserialize(wW)), void 0 !== (wW = WW(wW, cW.key, LW + 1))) return void iW(wW)
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L1856` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L1859) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L1856)

```diff
-                     Fe.YB.serialize(ie, (function(ie, Je) {
+                     cW.aU.serialize(iW, (function(iW, wW) {
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2067` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2070) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2067)

```diff
-                 return He.keyPrefix = Ci(ee, ie._defaultConfig), ui() ? (ie._dbInfo = He, He.YB = Ei, Je.resolve()) : Je.reject()
+                 return OW.keyPrefix = Vi(WW, iW._defaultConfig), Ci() ? (iW._dbInfo = OW, OW.aU = si, wW.resolve()) : wW.reject()
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2087` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2090) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2087)

```diff
-                   return ye && (ye = ie.YB.deserialize(ye)), ye
+                   return mW && (mW = iW.aU.deserialize(mW)), mW
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2099` → after: `L2102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2102) · [Before (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2099)

```diff
-                         if (Je && (Je = ie.YB.deserialize(Je)), void 0 !== (Je = ee(Je, Fe.substring(be), Ke++))) return Je
+                         if (wW && (wW = iW.aU.deserialize(wW)), void 0 !== (wW = WW(wW, cW.substring(EW), PW++))) return wW
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2157` → after: `L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2160) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2157)

```diff
-                     Ke.YB.serialize(ie, (function(ie, ye) {
+                     PW.aU.serialize(iW, (function(iW, mW) {
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2377` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2380) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2377)

```diff
-         }, , , , , (ee, ie, He) => {
+         }, , , , , , , , , (WW, iW, OW) => {
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2446` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2449) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2446)

```diff
-         }, , , , , , , , (ee, ie, He) => {
+         }, , , (WW, iW, OW) => {
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2448` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2451) · [Before (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2448)

```diff
-             b: () => be
+             d: () => EW
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2450` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2453) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2450)

```diff
-           var ye = He(35);
+           var mW = OW(39);
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2454` → after: `L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2457) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2454)

```diff
-             return null !== (ee = ye.i.getItem("soundVol")) && void 0 !== ee ? ee : .5
+             return null !== (WW = mW.i.getItem("soundVol")) && void 0 !== WW ? WW : .5
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2457` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2460) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2457)

```diff
-           ee.exports = He(67)
+           WW.exports = OW(70)
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2459` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2462) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2459)

```diff
-           var ye = He(69),
+           var mW = OW(73),
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2570-L2571` → after: `L2573-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2573-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2573-L2574) · [Before (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2570-L2571)

```diff
-                   case be:
-                   case Me:
+                   case EW:
+                   case NW:
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2592` → after: `L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2595) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2592)

```diff
-                   return null === ee || "object" !== typeof ee ? null : "function" === typeof(ee = ke && ee[ke] || ee["@@iterator"]) ? ee : null
+                   return null === WW || "object" !== typeof WW ? null : "function" === typeof(WW = xW && WW[xW] || WW["@@iterator"]) ? WW : null
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2746` → after: `L2749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2749) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2746)

```diff
-         }, , ee => {
+         }, , , WW => {
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2779` → after: `L2782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2782) · [Before (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2779)

```diff
-         }, , , , , , , , (ee, ie, He) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L2787-L2790` → after: `L2790-L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2790-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2790-L2793) · [Before (L2787-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2787-L2790)

```diff
-         }, , , , , , , , (ee, ie, He) => {
-           var ye = He(59),
-             be = He(69),
-             Me = He(88);
+         }, , , , , (WW, iW, OW) => {
+           var mW = OW(62),
+             EW = OW(73),
+             NW = OW(90);
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L2877` → after: `L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2880) · [Before (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2877)

```diff
-             }(ie) && (null === He ? ee.removeAttribute(ie) : ee.setAttribute(ie, "" + He)) : be.mustUseProperty ? ee[be.propertyName] = null === He ? 3 !== be.type && "" : He : (ie = be.attributeName, ye = be.attributeNamespace, null === He ? ee.removeAttribute(ie) : (He = 3 ===  … [truncated]
+             }(iW) && (null === OW ? WW.removeAttribute(iW) : WW.setAttribute(iW, "" + OW)) : EW.mustUseProperty ? WW[EW.propertyName] = null === OW ? 3 !== EW.type && "" : OW : (iW = EW.attributeName, mW = EW.attributeNamespace, null === OW ? WW.removeAttribute(iW) : (OW = 3 ===  … [truncated]
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L2918` → after: `L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L2921) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L2918)

```diff
-             return null === ee || "object" !== typeof ee ? null : "function" === typeof(ee = le && ee[le] || ee["@@iterator"]) ? ee : null
+             return null === WW || "object" !== typeof WW ? null : "function" === typeof(WW = XW && WW[XW] || WW["@@iterator"]) ? WW : null
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L3016` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3019) · [Before (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3016)

```diff
-               case We:
+               case yW:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L3018` → after: `L3021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3021) · [Before (L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3018)

```diff
-               case de:
+               case YW:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L3020` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3023) · [Before (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3020)

```diff
-               case Ze:
+               case JW:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L3022` → after: `L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3025) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3022)

```diff
-               case te:
+               case TW:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3024` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3027) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3024)

```diff
-               case Ae:
+               case uW:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3026` → after: `L3029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3029) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3026)

```diff
-               case Ye:
+               case oW:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3030` → after: `L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3033) · [Before (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3030)

```diff
-               case De:
+               case HW:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3032` → after: `L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3035) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3032)

```diff
-               case we:
+               case hW:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3034` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3037) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3034)

```diff
-               case Pe:
+               case nW:
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3037` → after: `L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3040) · [Before (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3037)

```diff
-               case Ve:
+               case dW:
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3039` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3042) · [Before (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3039)

```diff
-               case ce:
+               case vW:
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3041` → after: `L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3044) · [Before (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3041)

```diff
-               case ae:
+               case eW:
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3125` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3128) · [Before (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3125)

```diff
-               checked: null != He ? He : ee._wrapperState.initialChecked
+               checked: null != OW ? OW : WW._wrapperState.initialChecked
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3425` → after: `L3428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3428) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3425)

```diff
-             ee: switch (ie) {
+             WW: switch (iW) {
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3491` → after: `L3494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3494) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3491)

```diff
-             return 3 === ie.tag ? He : null
+             return 3 === iW.tag ? OW : null
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3563` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3566) · [Before (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3563)

```diff
-                 return He.stateNode.current === He ? ee : ie
+                 return OW.stateNode.current === OW ? WW : iW
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L3775` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3778) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3775)

```diff
-             return 0 !== (ee = -1073741825 & ee.pendingLanes) ? ee : 1073741824 & ee ? 1073741824 : 0
+             return 0 !== (WW = -1073741825 & WW.pendingLanes) ? WW : 1073741824 & WW ? 1073741824 : 0
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L3899` → after: `L3902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3902) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3899)

```diff
-             return oy = be.slice(ee, 1 < ie ? 1 - ie : void 0)
+             return tm = EW.slice(WW, 1 < iW ? 1 - iW : void 0)
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L3904` → after: `L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3907) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3904)

```diff
-             return "charCode" in ee ? 0 === (ee = ee.charCode) && 13 === ie && (ee = 13) : ee = ie, 10 === ee && (ee = 13), 32 <= ee || 13 === ee ? ee : 0
+             return "charCode" in WW ? 0 === (WW = WW.charCode) && 13 === iW && (WW = 13) : WW = iW, 10 === WW && (WW = 13), 32 <= WW || 13 === WW ? WW : 0
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L3918` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L3921) · [Before (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L3918)

```diff
-               return this.isDefaultPrevented = (null != be.defaultPrevented ? be.defaultPrevented : !1 === be.returnValue) ? qy : fy, this.isPropagationStopped = fy, this
+               return this.isDefaultPrevented = (null != EW.defaultPrevented ? EW.defaultPrevented : !1 === EW.returnValue) ? lm : Am, this.isPropagationStopped = Am, this
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4278` → after: `L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4281) · [Before (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4278)

```diff
-               ee: {
+               WW: {
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4320` → after: `L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4323) · [Before (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4320)

```diff
-             var ye = He.window === He ? He.document : 9 === He.nodeType ? He : He.ownerDocument;
+             var mW = OW.window === OW ? OW.document : 9 === OW.nodeType ? OW : OW.ownerDocument;
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4358` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4361) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4358)

```diff
-               ee: {
+               WW: {
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4424` → after: `L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4427) · [Before (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4424)

```diff
-             if (0 === (1 & ie) && 0 === (2 & ie) && null !== ye) ee: for (;;) {
+             if (0 === (1 & iW) && 0 === (2 & iW) && null !== mW) WW: for (;;) {
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4458` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4461) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4458)

```diff
-               ee: {
+               WW: {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4508-L4510` → after: `L4511-L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4511-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4511-L4513) · [Before (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4508-L4510)

```diff
-                     case cH:
-                     case xH:
-                     case LH:
+                     case vO:
+                     case gO:
+                     case DO:
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4513` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4516) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4513)

```diff
-                     case CH:
+                     case VO:
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4553-L4554` → after: `L4556-L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4556-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4556-L4557) · [Before (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4553-L4554)

```diff
-                 if (Fe = "mouseout" === ee || "pointerout" === ee, (!(Ue = "mouseover" === ee || "pointerover" === ee) || 0 !== (16 & ie) || !(Je = He.relatedTarget || He.fromElement) || !qM(Je) && !Je[RM]) && (Fe || Ue) && (Ue = be.window === be ? be : (Ue = be.ownerDocument) ?  … [truncated]
-                   if (oe = Wy, Te = "onMouseLeave", ke = "onMouseEnter", fe = "mouse", "pointerout" !== ee && "pointerover" !== ee || (oe = vy, Te = "onPointerLeave", ke = "onPointerEnter", fe = "pointer"), Re = null == Fe ? Ue : TM(Fe), qe = null == Je ? Ue : TM(Je), (Ue = new o … [truncated]
+                 if (cW = "mouseout" === WW || "pointerout" === WW, (!(LW = "mouseover" === WW || "pointerover" === WW) || 0 !== (16 & iW) || !(wW = OW.relatedTarget || OW.fromElement) || !AN(wW) && !wW[xN]) && (cW || LW) && (LW = EW.window === EW ? EW : (LW = EW.ownerDocument) ?  … [truncated]
+                   if (tW = ym, bW = "onMouseLeave", xW = "onMouseEnter", AW = "mouse", "pointerout" !== WW && "pointerover" !== WW || (tW = fm, bW = "onPointerLeave", xW = "onPointerEnter", AW = "pointer"), ZW = null == cW ? LW : jN(cW), lW = null == wW ? LW : jN(wW), (LW = new t … [truncated]
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4600` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4603) · [Before (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4600)

```diff
-                 if (jy) ee: {
+                 if (Gm) WW: {
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4618` → after: `L4621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4621) · [Before (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4618)

```diff
-                 }), ze ? Be.data = ze : null !== (ze = Qy(He)) && (Be.data = ze))), (ze = Iy ? function(ee, ie) {
+                 }), kW ? sW.data = kW : null !== (kW = WE(OW)) && (sW.data = kW))), (kW = am ? function(WW, iW) {
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4856` → after: `L4859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4859) · [Before (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4856)

```diff
-             GM = void 0 !== mM ? mM : function() {},
+             FN = void 0 !== XN ? XN : function() {},
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4861` → after: `L4864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4864) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4861)

```diff
-             HK = 1e4 > iK ? lM : function() {
+             mP = 1e4 > OP ? BN : function() {
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4867` → after: `L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4870) · [Before (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4867)

```diff
-               case nM:
+               case RN:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L4869` → after: `L4872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4872) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4869)

```diff
-               case jM:
+               case GN:
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L4871` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4874) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4871)

```diff
-               case sM:
+               case IN:
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L4873` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4876) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4873)

```diff
-               case IM:
+               case aN:
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L4875` → after: `L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L4878) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L4875)

```diff
-               case hM:
+               case rN:
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5028` → after: `L5031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5031) · [Before (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5028)

```diff
-               null === He ? ie.next = ie : (ie.next = He.next, He.next = ie), ee.pending = ie
+               null === OW ? iW.next = iW : (iW.next = OW.next, OW.next = iW), WW.pending = iW
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5048` → after: `L5051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5051) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5048)

```diff
-                   null === Me ? be = Me = Ke : Me = Me.next = Ke, He = He.next
+                   null === NW ? EW = NW = PW : NW = NW.next = PW, OW = OW.next
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5050` → after: `L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5053) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5050)

```diff
-                 null === Me ? be = Me = ie : Me = Me.next = ie
+                 null === NW ? EW = NW = iW : NW = NW.next = iW
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5060` → after: `L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5063) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5060)

```diff
-             null === (ee = He.lastBaseUpdate) ? He.firstBaseUpdate = ie : ee.next = ie, He.lastBaseUpdate = ie
+             null === (WW = OW.lastBaseUpdate) ? OW.firstBaseUpdate = iW : WW.next = iW, OW.lastBaseUpdate = iW
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5073` → after: `L5076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5076) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5073)

```diff
-               Je.next = null, null === Ue ? Ke = oe : Ue.next = oe, Ue = Je;
+               wW.next = null, null === LW ? PW = tW : LW.next = tW, LW = wW;
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5077` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5080) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5077)

```diff
-                 ke !== Ue && (null === ke ? Re.firstBaseUpdate = oe : ke.next = oe, Re.lastBaseUpdate = Je)
+                 xW !== LW && (null === xW ? ZW.firstBaseUpdate = tW : xW.next = tW, ZW.lastBaseUpdate = wW)
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5093` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5096) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5093)

```diff
-                   ee: {
+                   WW: {
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5146` → after: `L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5149) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5146)

```diff
-             He = null === (He = He(ye, ie = ee.memoizedState)) || void 0 === He ? ie : be({}, ie, He), ee.memoizedState = He, 0 === ee.lanes && (ee.updateQueue.baseState = He)
+             OW = null === (OW = OW(mW, iW = WW.memoizedState)) || void 0 === OW ? iW : EW({}, iW, OW), WW.memoizedState = OW, 0 === WW.lanes && (WW.updateQueue.baseState = OW)
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5183` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5186) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5183)

```diff
-             return "object" === typeof Me && null !== Me ? Me = BK(Me) : (be = DM(ie) ? ZM : WM.current, Me = (ye = null !== (ye = ie.contextTypes) && void 0 !== ye) ? wM(ee, be) : dM), ie = new ie(He, Me), ee.memoizedState = null !== ie.state && void 0 !== ie.state ? ie.state :  … [truncated]
+             return "object" === typeof NW && null !== NW ? NW = MP(NW) : (EW = nN(iW) ? hN : TN.current, NW = (mW = null !== (mW = iW.contextTypes) && void 0 !== mW) ? HN(WW, EW) : yN), iW = new iW(OW, NW), WW.memoizedState = null !== iW.state && void 0 !== iW.state ? iW.state :  … [truncated]
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5194` → after: `L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5197) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5194)

```diff
-             "object" === typeof Me && null !== Me ? be.context = BK(Me) : (Me = DM(ie) ? ZM : WM.current, be.context = wM(ee, Me)), ZK(ee, He, be, ye), be.state = ee.memoizedState, "function" === typeof(Me = ie.getDerivedStateFromProps) && (PK(ee, ie, Me, He), be.state = ee.memoi … [truncated]
+             "object" === typeof NW && null !== NW ? EW.context = MP(NW) : (NW = nN(iW) ? hN : TN.current, EW.context = HN(WW, NW)), hP(WW, OW, EW, mW), EW.state = WW.memoizedState, "function" === typeof(NW = iW.getDerivedStateFromProps) && (uP(WW, iW, NW, OW), EW.state = WW.memoi … [truncated]
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5246` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5249) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5246)

```diff
-               return ie.index = ye, ee ? null !== (ye = ie.alternate) ? (ye = ye.index) < He ? (ie.flags = 2, He) : ye : (ie.flags = 2, He) : He
+               return iW.index = mW, WW ? null !== (mW = iW.alternate) ? (mW = mW.index) < OW ? (iW.flags = 2, OW) : mW : (iW.flags = 2, OW) : OW
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5273` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5276) · [Before (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5273)

```diff
-                   case Oe:
+                   case SW:
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5275` → after: `L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5278) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5275)

```diff
-                   case de:
+                   case YW:
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5289` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5292) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5289)

```diff
-                   case Oe:
+                   case SW:
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5291` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5294) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5291)

```diff
-                   case de:
+                   case YW:
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5304-L5307` → after: `L5307-L5310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5307-L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5307-L5310) · [Before (L5304-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5304-L5307)

```diff
-                   case Oe:
-                     return ee = ee.get(null === ye.key ? He : ye.key) || null, ye.type === We ? Re(ie, ee, ye.props.children, be, ye.key) : Je(ie, ee, ye, be);
-                   case de:
-                     return oe(ie, ee = ee.get(null === ye.key ? He : ye.key) || null, ye, be)
+                   case SW:
+                     return WW = WW.get(null === mW.key ? OW : mW.key) || null, mW.type === yW ? ZW(iW, WW, mW.props.children, EW, mW.key) : wW(iW, WW, mW, EW);
+                   case YW:
+                     return tW(iW, WW = WW.get(null === mW.key ? OW : mW.key) || null, mW, EW)
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5323` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5326) · [Before (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5323)

```diff
-                 ee && Re && null === Xe.alternate && ie(be, Re), Ke = Me(Xe, Ke, Te), null === oe ? Je = Xe : oe.sibling = Xe, oe = Xe, Re = pe
+                 WW && ZW && null === UW.alternate && iW(EW, ZW), PW = NW(UW, PW, bW), null === tW ? wW = UW : tW.sibling = UW, tW = UW, ZW = jW
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5327` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5330) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5327)

```diff
-                 for (; Te < Ue.length; Te++) null !== (Re = ke(be, Ue[Te], Fe)) && (Ke = Me(Re, Ke, Te), null === oe ? Je = Re : oe.sibling = Re, oe = Re);
+                 for (; bW < LW.length; bW++) null !== (ZW = xW(EW, LW[bW], cW)) && (PW = NW(ZW, PW, bW), null === tW ? wW = ZW : tW.sibling = ZW, tW = ZW);
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5330` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5333) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5330)

```diff
-               for (Re = ye(be, Re); Te < Ue.length; Te++) null !== (pe = fe(Re, be, Te, Ue[Te], Fe)) && (ee && null !== pe.alternate && Re.delete(null === pe.key ? Te : pe.key), Ke = Me(pe, Ke, Te), null === oe ? Je = pe : oe.sibling = pe, oe = pe);
+               for (ZW = mW(EW, ZW); bW < LW.length; bW++) null !== (jW = AW(ZW, EW, bW, LW[bW], cW)) && (WW && null !== jW.alternate && ZW.delete(null === jW.key ? bW : jW.key), PW = NW(jW, PW, bW), null === tW ? wW = jW : tW.sibling = jW, tW = jW);
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5347` → after: `L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5350) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5347)

```diff
-                 ee && Te && null === Be.alternate && ie(be, Te), Ue = Me(Be, Ue, pe), null === Re ? oe = Be : Re.sibling = Be, Re = Be, Te = Xe
+                 WW && bW && null === sW.alternate && iW(EW, bW), LW = NW(sW, LW, jW), null === ZW ? tW = sW : ZW.sibling = sW, ZW = sW, bW = UW
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5351` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5354) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5351)

```diff
-                 for (; !ze.done; pe++, ze = Fe.next()) null !== (ze = ke(be, ze.value, Je)) && (Ue = Me(ze, Ue, pe), null === Re ? oe = ze : Re.sibling = ze, Re = ze);
+                 for (; !kW.done; jW++, kW = cW.next()) null !== (kW = xW(EW, kW.value, wW)) && (LW = NW(kW, LW, jW), null === ZW ? tW = kW : ZW.sibling = kW, ZW = kW);
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5354` → after: `L5357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5357) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5354)

```diff
-               for (Te = ye(be, Te); !ze.done; pe++, ze = Fe.next()) null !== (ze = fe(Te, be, pe, ze.value, Je)) && (ee && null !== ze.alternate && Te.delete(null === ze.key ? pe : ze.key), Ue = Me(ze, Ue, pe), null === Re ? oe = ze : Re.sibling = ze, Re = ze);
+               for (bW = mW(EW, bW); !kW.done; jW++, kW = cW.next()) null !== (kW = AW(bW, EW, jW, kW.value, wW)) && (WW && null !== kW.alternate && bW.delete(null === kW.key ? jW : kW.key), LW = NW(kW, LW, jW), null === ZW ? tW = kW : ZW.sibling = kW, ZW = kW);
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5364-L5365` → after: `L5367-L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5367-L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5367-L5368) · [Before (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5364-L5365)

```diff
-                 case Oe:
-                   ee: {
+                 case SW:
+                   WW: {
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5385-L5386` → after: `L5388-L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5388-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5388-L5389) · [Before (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5385-L5386)

```diff
-                 case de:
-                   ee: {
+                 case YW:
+                   WW: {
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5524` → after: `L5527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5527) · [Before (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5524)

```diff
-               ee: {
+               WW: {
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5574` → after: `L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5577) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5574)

```diff
-             if (qU = Me, fU = ie, ie.memoizedState = null, ie.updateQueue = null, ie.lanes = 0, RU.current = null === ee || null === ee.memoizedState ? hU : NU, ee = He(ye, be), zU) {
+             if (AL = NW, bL = iW, iW.memoizedState = null, iW.updateQueue = null, iW.lanes = 0, xL.current = null === WW || null === WW.memoizedState ? rL : zL, WW = OW(mW, EW), sL) {
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5593` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5596) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5593)

```diff
-             return null === pU ? fU.memoizedState = pU = ee : pU = pU.next = ee, pU
+             return null === UL ? bL.memoizedState = UL = WW : UL = UL.next = WW, UL
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5611` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5614) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5611)

```diff
-               }, null === pU ? fU.memoizedState = pU = ee : pU = pU.next = ee
+               }, null === UL ? bL.memoizedState = UL = WW : UL = UL.next = WW
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L5660` → after: `L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5663) · [Before (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5660)

```diff
-               null === Fe ? Me = ye : Fe.next = Ue, Bb(ye, ie.memoizedState) || (QU = !0), ie.memoizedState = ye, ie.baseState = Me, ie.baseQueue = Fe, He.lastRenderedState = ye
+               null === cW ? NW = mW : cW.next = LW, ME(mW, iW.memoizedState) || (Wc = !0), iW.memoizedState = mW, iW.baseState = NW, iW.baseQueue = cW, OW.lastRenderedState = mW
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L5688` → after: `L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5691) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5688)

```diff
-             if (null !== be ? ee = be === ye : (ee = ee.mutableReadLanes, (ee = (qU & ee) === ee) && (ie._workInProgressVersionPrimary = ye, JU.push(ie))), ee) return He(ie._source);
+             if (null !== EW ? WW = EW === mW : (WW = WW.mutableReadLanes, (WW = (AL & WW) === WW) && (iW._workInProgressVersionPrimary = mW, tL.push(iW))), WW) return OW(iW._source);
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L5770` → after: `L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5773) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5770)

```diff
-             }, fU.updateQueue = ie, ie.lastEffect = ee.next = ee) : null === (He = ie.lastEffect) ? ie.lastEffect = ee.next = ee : (ye = He.next, He.next = ee, ee.next = ye, ie.lastEffect = ee), ee
+             }, bL.updateQueue = iW, iW.lastEffect = WW.next = WW) : null === (OW = iW.lastEffect) ? iW.lastEffect = WW.next = WW : (mW = OW.next, OW.next = WW, WW.next = mW, iW.lastEffect = WW), WW
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L5865` → after: `L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L5868) · [Before (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L5865)

```diff
-             if (null === Ke ? Me.next = Me : (Me.next = Ke.next, Ke.next = Me), ie.pending = Me, Ke = ee.alternate, ee === fU || null !== Ke && Ke === fU) zU = XU = !0;
+             if (null === PW ? NW.next = NW : (NW.next = PW.next, PW.next = NW), iW.pending = NW, PW = WW.alternate, WW === bL || null !== PW && PW === bL) sL = kL = !0;
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L6067` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6070) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6067)

```diff
-             return Ke = ee.child, 0 === (be & Me) && (be = Ke.memoizedProps, (He = null !== (He = He.compare) ? He : gb)(be, ye) && ee.ref === ie.ref) ? OF(ee, ie, Me) : (ie.flags |= 1, (ee = qo(Ke, ye)).ref = ie.ref, ee.return = ie, ie.child = ee)
+             return PW = WW.child, 0 === (EW & NW) && (EW = PW.memoizedProps, (OW = null !== (OW = OW.compare) ? OW : SE)(EW, mW) && WW.ref === iW.ref) ? Yc(WW, iW, NW) : (iW.flags |= 1, (WW = bt(PW, mW)).ref = iW.ref, WW.return = iW, iW.child = WW)
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L6087` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6090) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6087)

```diff
-                 if (0 === (1073741824 & He)) return ee = null !== Me ? Me.baseLanes | He : He, ie.lanes = ie.childLanes = 1073741824, ie.memoizedState = {
+                 if (0 === (1073741824 & OW)) return WW = null !== NW ? NW.baseLanes | OW : OW, iW.lanes = iW.childLanes = 1073741824, iW.memoizedState = {
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L6104` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6107) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6104)

```diff
-             var Me = DM(He) ? ZM : WM.current;
+             var NW = nN(OW) ? hN : TN.current;
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6120` → after: `L6123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6123) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6120)

```diff
-               "object" === typeof Je && null !== Je ? Je = BK(Je) : Je = wM(ie, Je = DM(He) ? ZM : WM.current);
+               "object" === typeof wW && null !== wW ? wW = MP(wW) : wW = HN(iW, wW = nN(OW) ? hN : TN.current);
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L6127` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6130) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6127)

```diff
-               Ke = ie.stateNode, OK(ee, ie), Ue = ie.memoizedProps, Je = ie.type === ie.elementType ? Ue : oK(ie.type, Ue), Ke.props = Je, Re = ie.pendingProps, ke = Ke.context, "object" === typeof(Fe = He.contextType) && null !== Fe ? Fe = BK(Fe) : Fe = wM(ie, Fe = DM(He) ? ZM : … [truncated]
+               PW = iW.stateNode, YP(WW, iW), LW = iW.memoizedProps, wW = iW.type === iW.elementType ? LW : ZP(iW.type, LW), PW.props = wW, ZW = iW.pendingProps, xW = PW.context, "object" === typeof(cW = OW.contextType) && null !== cW ? cW = MP(cW) : cW = HN(iW, cW = nN(OW) ? hN : … [truncated]
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L6210` → after: `L6213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6213) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6210)

```diff
-               PR: null,
+               TZ: null,
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6216` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6219) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6216)

```diff
-             } : (Ke.isBackwards = ie, Ke.PR = null, Ke.renderingStartTime = 0, Ke.last = ye, Ke.tail = He, Ke.tailMode = be, Ke.lastEffect = Me)
+             } : (PW.isBackwards = iW, PW.TZ = null, PW.renderingStartTime = 0, PW.last = mW, PW.tail = OW, PW.tailMode = EW, PW.lastEffect = NW)
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6225` → after: `L6228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6228) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6225)

```diff
-               if (null !== ee && 0 !== (64 & ee.flags)) ee: for (ee = ie.child; null !== ee;) {
+               if (null !== WW && 0 !== (64 & WW.flags)) WW: for (WW = iW.child; null !== WW;) {
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6374` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6377) · [Before (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6374)

```diff
-                     switch (Je = 9 === Me.nodeType ? Me : Me.ownerDocument, ee === qi && (ee = Ti(He)), ee === qi ? "script" === He ? ((ee = Je.createElement("div")).innerHTML = "<script><\/script>", ee = ee.removeChild(ee.firstChild)) : "string" === typeof ye.is ? ee = Je.create … [truncated]
+                     switch (wW = 9 === NW.nodeType ? NW : NW.ownerDocument, WW === li && (WW = bi(OW)), WW === li ? "script" === OW ? ((WW = wW.createElement("div")).innerHTML = "<script><\/script>", WW = WW.removeChild(WW.firstChild)) : "string" === typeof mW.is ? WW = wW.create … [truncated]
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6451` → after: `L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6454) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6451)

```diff
-                   He = sK(jK.current), sK(SK.current), UU(ie) ? (ye = ie.stateNode, He = ie.memoizedProps, ye[JM] = ie, ye.nodeValue !== He && (ie.flags |= 4)) : ((ye = (9 === He.nodeType ? He : He.ownerDocument).createTextNode(ye))[JM] = ie, ie.stateNode = ye)
+                   OW = IP(GP.current), IP(qP.current), cL(iW) ? (mW = iW.stateNode, OW = iW.memoizedProps, mW[tN] = iW, mW.nodeValue !== OW && (iW.flags |= 4)) : ((mW = (9 === OW.nodeType ? OW : OW.ownerDocument).createTextNode(mW))[tN] = iW, iW.stateNode = mW)
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6462` → after: `L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6465) · [Before (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6462)

```diff
-                 if (Ue = 0 !== (64 & ie.flags), null === (Je = ye.PR))
+                 if (LW = 0 !== (64 & iW.flags), null === (wW = mW.TZ))
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6483` → after: `L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6486) · [Before (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6483)

```diff
-                   ye.isBackwards ? (Je.sibling = ie.child, ie.child = Je) : (null !== (He = ye.last) ? He.sibling = Je : ie.child = Je, ye.last = Je)
+                   mW.isBackwards ? (wW.sibling = iW.child, iW.child = wW) : (null !== (OW = mW.last) ? OW.sibling = wW : iW.child = wW, mW.last = wW)
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6485` → after: `L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6488) · [Before (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6485)

```diff
-                 return null !== ye.tail ? (He = ye.tail, ye.PR = He, ye.tail = He.sibling, ye.lastEffect = ie.lastEffect, ye.renderingStartTime = HK(), He.sibling = null, ie = rK.current, OM(rK, Ue ? 1 & ie | 2 : 1 & ie), He) : null;
+                 return null !== mW.tail ? (OW = mW.tail, mW.TZ = OW, mW.tail = OW.sibling, mW.lastEffect = iW.lastEffect, mW.renderingStartTime = mP(), OW.sibling = null, iW = QP.current, YN(QP, LW ? 1 & iW | 2 : 1 & iW), OW) : null;
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6635` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6638) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6635)

```diff
-                 componentStack: null !== ee ? ee : ""
+                 componentStack: null !== WW ? WW : ""
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6666` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6669) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6666)

```diff
-                   ie = (ee = ie.stateNode).getSnapshotBeforeUpdate(ie.elementType === ie.type ? He : oK(ie.type, He), ye), ee.__reactInternalSnapshotBeforeUpdate = ie
+                   iW = (WW = iW.stateNode).getSnapshotBeforeUpdate(iW.elementType === iW.type ? OW : ZP(iW.type, OW), mW), WW.__reactInternalSnapshotBeforeUpdate = iW
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L6805` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6808) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6805)

```diff
-             ee: {
+             WW: {
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L6824` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6827) · [Before (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6824)

```diff
-             16 & He.flags && (gi(ie, ""), He.flags &= -17);ee: ie: for (He = ee;;) {
+             16 & OW.flags && (Mi(iW, ""), OW.flags &= -17);WW: iW: for (OW = WW;;) {
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L6865` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6868) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6865)

```diff
-                 ee: for (;;) {
+                 WW: for (;;) {
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L6881` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L6884) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L6881)

```diff
-                 ee: for (var Ue = ee, Fe = be, Je = Fe;;)
+                 WW: for (var LW = WW, cW = EW, wW = cW;;)
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L7026` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7029) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7026)

```diff
-             return 0 !== (48 & GF) ? HK() : -1 !== ZJ ? ZJ : ZJ = HK()
+             return 0 !== (48 & Fc) ? mP() : -1 !== Hw ? Hw : Hw = mP()
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L7083` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7086) · [Before (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7083)

```diff
-             if (ye = jH(ee, ee === rF ? eJ : 0), ie = SH, 0 === ye) null !== He && (He !== NM && vM(He), ee.callbackNode = null, ee.callbackPriority = 0);
+             if (mW = RO(WW, WW === Qc ? iw : 0), iW = BO, 0 === mW) null !== OW && (OW !== zN && fN(OW), WW.callbackNode = null, WW.callbackPriority = 0);
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L7123` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7126) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7123)

```diff
-             var He = jH(ee, ee === rF ? eJ : 0);
+             var OW = RO(WW, WW === Qc ? iw : 0);
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L7274` → after: `L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7277) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7274)

```diff
-                 ee: {
+                 WW: {
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L7356` → after: `L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7359) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7356)

```diff
-             return hF.current = IU, null === ee ? IU : ee
+             return rc.current = aL, null === WW ? aL : WW
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L7396` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7399) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7396)

```diff
-                 null !== ee && 0 === (2048 & ee.flags) && (null === ee.firstEffect && (ee.firstEffect = ie.firstEffect), null !== ie.lastEffect && (null !== ee.lastEffect && (ee.lastEffect.nextEffect = ie.firstEffect), ee.lastEffect = ie.lastEffect), 1 < ie.flags && (null !== ee. … [truncated]
+                 null !== WW && 0 === (2048 & WW.flags) && (null === WW.firstEffect && (WW.firstEffect = iW.firstEffect), null !== iW.lastEffect && (null !== WW.lastEffect && (WW.lastEffect.nextEffect = iW.firstEffect), WW.lastEffect = iW.lastEffect), 1 < iW.flags && (null !== WW. … [truncated]
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7430` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7433) · [Before (L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7430)

```diff
-             if (null !== dJ && 0 === (24 & ye) && dJ.has(ee) && dJ.delete(ee), ee === rF && (QF = rF = null, eJ = 0), 1 < He.flags ? null !== He.lastEffect ? (He.lastEffect.nextEffect = He, ye = He.firstEffect) : ye = He : ye = He.firstEffect, null !== ye) {
+             if (null !== Tw && 0 === (24 & mW) && Tw.has(WW) && Tw.delete(WW), WW === Qc && (Ww = Qc = null, iw = 0), 1 < OW.flags ? null !== OW.lastEffect ? (OW.lastEffect.nextEffect = OW, mW = OW.firstEffect) : mW = OW : mW = OW.firstEffect, null !== mW) {
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7436` → after: `L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7439) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7436)

```diff
-                 else ee: if (Fe = (Fe = Ue.ownerDocument) && Fe.defaultView || window, (oe = Fe.getSelection && Fe.getSelection()) && 0 !== oe.rangeCount) {
+                 else WW: if (cW = (cW = LW.ownerDocument) && cW.defaultView || window, (tW = cW.getSelection && cW.getSelection()) && 0 !== tW.rangeCount) {
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7451` → after: `L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7454) · [Before (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7451)

```diff
-                   ie: for (;;) {
+                   iW: for (;;) {
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7523` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7526) · [Before (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7523)

```diff
-                 null !== Ue && Zb(Be) && (Ee = Ue.start, void 0 === (ge = Ue.end) && (ge = Ee), "selectionStart" in Be ? (Be.selectionStart = Ee, Be.selectionEnd = Math.min(ge, Be.value.length)) : (ge = (Ee = Be.ownerDocument || document) && Ee.defaultView || window).getSelection … [truncated]
+                 null !== LW && hE(sW) && (MW = LW.start, void 0 === (KW = LW.end) && (KW = MW), "selectionStart" in sW ? (sW.selectionStart = MW, sW.selectionEnd = Math.min(KW, sW.value.length)) : (KW = (MW = sW.ownerDocument || document) && MW.defaultView || window).getSelection … [truncated]
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7688-L7689` → after: `L7691-L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7691-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7691-L7692) · [Before (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7688-L7689)

```diff
-             else ee: switch (ee) {
-               case We:
+             else WW: switch (WW) {
+               case yW:
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7691` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7694) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7691)

```diff
-               case Le:
+               case DW:
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7697) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7694)

```diff
-               case te:
+               case TW:
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7700) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7697)

```diff
-               case Ze:
+               case JW:
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7699` → after: `L7702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7702) · [Before (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7699)

```diff
-               case Ae:
+               case uW:
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7701` → after: `L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7704) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7701)

```diff
-               case Ye:
+               case oW:
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7703` → after: `L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7706) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7703)

```diff
-               case Ce:
+               case VW:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7705` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7708) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7705)

```diff
-               case ve:
+               case pW:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7709` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7712) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7709)

```diff
-                   case we:
+                   case hW:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7712` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7715) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7712)

```diff
-                   case De:
+                   case HW:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7715` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7718) · [Before (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7715)

```diff
-                   case Pe:
+                   case nW:
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7718` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7721) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7718)

```diff
-                   case Ve:
+                   case dW:
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7721` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7724) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7721)

```diff
-                   case ae:
+                   case eW:
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7724` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7727) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7724)

```diff
-                   case ce:
+                   case vW:
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7728` → after: `L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7731) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7728)

```diff
-                 throw Error(Ke(130, null == ee ? ee : typeof ee, ""))
+                 throw Error(PW(130, null == WW ? WW : typeof WW, ""))
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7761-L7762` → after: `L7764-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7764-L7765) · [Before (L7761-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7761-L7762)

```diff
-             ee: if (He) {
-               ie: {
+             WW: if (OW) {
+               iW: {
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7789` → after: `L7792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7792) · [Before (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7789)

```diff
-             return null === ie.context ? ie.context = He : ie.pendingContext = He, (ie = dK(Me, Ue)).payload = {
+             return null === iW.context ? iW.context = OW : iW.pendingContext = OW, (iW = yP(NW, LW)).payload = {
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7801` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7804) · [Before (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7801)

```diff
-               ee.retryLane = 0 !== He && He < ie ? He : ie
+               WW.retryLane = 0 !== OW && OW < iW ? OW : iW
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7903` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7906) · [Before (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7903)

```diff
-                       if (null !== (be = ie.memoizedState) && (be.PR = null, be.tail = null, be.lastEffect = null), OM(rK, rK.current), ye) break;
+                       if (null !== (EW = iW.memoizedState) && (EW.TZ = null, EW.tail = null, EW.lastEffect = null), YN(QP, QP.current), mW) break;
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7928` → after: `L7931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7931) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7928)

```diff
-                 ee: {
+                 WW: {
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L7954` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7957) · [Before (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7954)

```diff
-                 return ye = ie.type, be = ie.pendingProps, KF(ee, ie, ye, be = ie.elementType === ye ? be : oK(ye, be), He);
+                 return mW = iW.type, EW = iW.pendingProps, Lc(WW, iW, mW, EW = iW.elementType === mW ? EW : ZP(mW, EW), OW);
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L7956` → after: `L7959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7959) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7956)

```diff
-                 return ye = ie.type, be = ie.pendingProps, UF(ee, ie, ye, be = ie.elementType === ye ? be : oK(ye, be), He);
+                 return mW = iW.type, EW = iW.pendingProps, cc(WW, iW, mW, EW = iW.elementType === mW ? EW : ZP(mW, EW), OW);
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L7978` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7981) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7978)

```diff
-                 return ye = ie.type, be = ie.pendingProps, iF(ee, ie, ye, be = ie.elementType === ye ? be : oK(ye, be), He);
+                 return mW = iW.type, EW = iW.pendingProps, Oc(WW, iW, mW, EW = iW.elementType === mW ? EW : ZP(mW, EW), OW);
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L7985` → after: `L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L7988) · [Before (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L7985)

```diff
-                 ee: {
+                 WW: {
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L8036` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8039) · [Before (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8036)

```diff
-                 return ye = ie.type, be = ie.pendingProps, be = ie.elementType === ye ? be : oK(ye, be), null !== ee && (ee.alternate = null, ie.alternate = null, ie.flags |= 2), ie.tag = 1, DM(ye) ? (ee = !0, VM(ie)) : ee = !1, zK(ie, He), VK(ie, ye, be), cK(ie, ye, be, He), FF( … [truncated]
+                 return mW = iW.type, EW = iW.pendingProps, EW = iW.elementType === mW ? EW : ZP(mW, EW), null !== WW && (WW.alternate = null, iW.alternate = null, iW.flags |= 2), iW.tag = 1, nN(mW) ? (WW = !0, eN(iW)) : WW = !1, sP(iW, OW), eP(iW, mW, EW), gP(iW, mW, EW, OW), wc( … [truncated]
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L8193-L8195` → after: `L8196-L8198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8196-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8196-L8198) · [Before (L8193-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8193-L8195)

```diff
-         }, , , (ee, ie, He) => {
-           ee.exports = He(94)
-         }, , , , , , (ee, ie) => {
+         }, , , , , (WW, iW, OW) => {
+           WW.exports = OW(93)
+         }, , , (WW, iW) => {
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L8272` → after: `L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8275) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8272)

```diff
-             ee: for (;;) {
+             WW: for (;;) {
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L8290` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8293) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8290)

```diff
-                 ee: for (var ye = 0, be = ee.length; ye < be;) {
+                 WW: for (var mW = 0, EW = WW.length; mW < EW;) {
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L8309` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8312) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8309)

```diff
-             return 0 !== He ? He : ee.id - ie.id
+             return 0 !== OW ? OW : WW.id - iW.id
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L8349` → after: `L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8352) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8349)

```diff
-                   He = ie.unstable_now(), "function" === typeof Ue ? Pe.callback = Ue : Pe === de(Ze) && We(Ze), ce(He)
+                   OW = iW.unstable_now(), "function" === typeof LW ? nW.callback = LW : nW === YW(JW) && yW(JW), vW(OW)
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8409` → after: `L8412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8412) · [Before (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8409)

```diff
-             switch ("object" === typeof Ke && null !== Ke ? Ke = "number" === typeof(Ke = Ke.delay) && 0 < Ke ? Ue + Ke : Ue : Ke = Ue, ee) {
+             switch ("object" === typeof PW && null !== PW ? PW = "number" === typeof(PW = PW.delay) && 0 < PW ? LW + PW : LW : PW = LW, WW) {
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8445` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8448) · [Before (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8445)

```diff
-         }, , , (ee, ie, He) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8486-L8488` → after: `L8489-L8491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8489-L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8489-L8491) · [Before (L8486-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8486-L8488)

```diff
-           var ye = He(173),
-             be = He(186),
-             Me = He(100),
+           var mW = OW(169),
+             EW = OW(182),
+             NW = OW(102),
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8490-L8498` → after: `L8493-L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8493-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8493-L8501) · [Before (L8490-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8490-L8498)

```diff
-             Ue = He(103),
-             Fe = He(107),
-             Je = He(115),
-             oe = He(35),
-             Re = He(125),
-             ke = He(157),
-             qe = He(165),
-             fe = He(123);
-           Re.subsiteUsed && !Re.subsiteUsedData[Re.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${Re.subsiteUsed} but it is not enabled`);
+             LW = OW(109),
+             cW = OW(117),
+             wW = OW(119),
+             tW = OW(39),
+             ZW = OW(136),
+             xW = OW(161),
+             lW = OW(163),
+             AW = OW(131);
+           ZW.subsiteUsed && !ZW.subsiteUsedData[ZW.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${ZW.subsiteUsed} but it is not enabled`);
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8506` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8509) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8506)

```diff
-             return [`Browser: ${ze()}`, `Version: ${Be()}`, `Platform: ${navigator.platform}`, `Platform Type: ${Ze()}`, `Input Type: ${(0,Fe.b)()}`].join(ee)
+             return [`Browser: ${kW()}`, `Version: ${sW()}`, `Platform: ${navigator.platform}`, `Platform Type: ${JW()}`, `Input Type: ${(0,cW.d)()}`].join(WW)
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8534` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8537) · [Before (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8534)

```diff
-             return pe().getPlatformType() || ("touchOnly" === (0, Fe.b)() ? "tablet" : "desktop")
+             return jW().getPlatformType() || ("touchOnly" === (0, cW.d)() ? "tablet" : "desktop")
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8553` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8556) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8553)

```diff
-             return "macos" === ee && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== ee || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, Fe.b)() ? ye.z.includes(ee) ? ee : "other" : "android"
+             return "macos" === WW && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== WW || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, cW.d)() ? mW.z.includes(WW) ? WW : "other" : "android"
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8566` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8569) · [Before (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8566)

```diff
-             return ye.H.includes(ee) ? ee : "other"
+             return mW.I.includes(WW) ? WW : "other"
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8571` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8574) · [Before (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8571)

```diff
-             return !xe() && ("mobile" === ee || "tablet" === ee || "touchOnly" === (0, Fe.b)() || Ue.currentUrl.hasSearchParam("mobile"))
+             return !gW() && ("mobile" === WW || "tablet" === WW || "touchOnly" === (0, cW.d)() || LW.currentUrl.hasSearchParam("mobile"))
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8583` → after: `L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8586) · [Before (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8583)

```diff
-             return (0, ye.s)(Re.siteUsed)
+             return (0, mW.t)(ZW.siteUsed)
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8587` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8590) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8587)

```diff
-             return Ae() || "mouseOnly" !== (0, Fe.b)() || navigator.maxTouchPoints > 0
+             return uW() || "mouseOnly" !== (0, cW.d)() || navigator.maxTouchPoints > 0
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8607-L8608` → after: `L8610-L8611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8610-L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8610-L8611) · [Before (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8607-L8608)

```diff
-               useRecaptcha: !be.g.recaptchaDisabled && !(0, Re.isDiscordClient)(),
-               useTurnstile: !be.g.turnstileDisabled && !(0, Re.isDiscordClient)() && "mobileIos" !== Re.siteUsed && !ke.d,
+               useRecaptcha: !EW.f.recaptchaDisabled && !(0, ZW.isDiscordClient)(),
+               useTurnstile: !EW.f.turnstileDisabled && !(0, ZW.isDiscordClient)() && "mobileIos" !== ZW.siteUsed && !xW.b,
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8660` → after: `L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8663) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8660)

```diff
-               const ee = (0, fe.A)();
+               const WW = (0, AW.q)();
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8663` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8666) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8663)

```diff
-             return Qe ??= (0, qe.b)((0, fe.G)()), Qe
+             return QW ??= (0, lW.b)((0, AW.w)()), QW
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8692` → after: `L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8695) · [Before (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8692)

```diff
-             const ye = null !== (ee = null !== (ie = Se) && void 0 !== ie ? ie : null === (He = (0, fe.G)()) || void 0 === He ? void 0 : He.vendor) && void 0 !== ee ? ee : null;
+             const mW = null !== (WW = null !== (iW = BW) && void 0 !== iW ? iW : null === (OW = (0, AW.w)()) || void 0 === OW ? void 0 : OW.vendor) && void 0 !== WW ? WW : null;
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8699` → after: `L8702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8702) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8699)

```diff
-               const ye = null !== (ee = null !== (ie = Se) && void 0 !== ie ? ie : null === (He = (0, fe.A)()) || void 0 === He ? void 0 : He.vendor) && void 0 !== ee ? ee : null;
+               const mW = null !== (WW = null !== (iW = BW) && void 0 !== iW ? iW : null === (OW = (0, AW.q)()) || void 0 === OW ? void 0 : OW.vendor) && void 0 !== WW ? WW : null;
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L8730` → after: `L8733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8733) · [Before (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8730)

```diff
-               const ie = await (0, Je.z)(ee);
+               const iW = await (0, wW.s)(WW);
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L8735` → after: `L8738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8738) · [Before (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8735)

```diff
-               return oe.i.setItem(Je.H, (0, Je.e)(He)), oe.i.setItem(Je.E, (0, Je.m)(He)), "usable"
+               return tW.i.setItem(wW.A, (0, wW.d)(OW)), tW.i.setItem(wW.z, (0, wW.m)(OW)), "usable"
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L8749` → after: `L8752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8752) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8749)

```diff
-                     for (let ye, be, Me = 0, Ke = 0; be = ee.charAt(Ke++); ~be && (ye = Me % 4 ? 64 * ye + be : be, Me++ % 4) ? ie += String.fromCharCode(255 & ye >> (-2 * Me & 6)) : 0) be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
+                     for (let mW, EW, NW = 0, PW = 0; EW = WW.charAt(PW++); ~EW && (mW = NW % 4 ? 64 * mW + EW : EW, NW++ % 4) ? iW += String.fromCharCode(255 & mW >> (-2 * NW & 6)) : 0) EW = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(EW);
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L8756` → after: `L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8759) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8756)

```diff
-                 return Ke ? be = Ke : (be = qi.kGdYVv(be), ee[Me] = be), be
+                 return PW ? EW = PW : (EW = li.kGdYVv(EW), WW[NW] = EW), EW
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L8777` → after: `L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8780) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8777)

```diff
-                 ee = null !== (ie = ee) && void 0 !== ie ? ie : "";
+                 WW = null !== (iW = WW) && void 0 !== iW ? iW : "";
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L8781` → after: `L8784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8784) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8781)

```diff
-                   He += (null !== (ye = ee[be]) && void 0 !== ye ? ye : be.toString()).charCodeAt(0).toString(32)
+                   OW += (null !== (mW = WW[EW]) && void 0 !== mW ? mW : EW.toString()).charCodeAt(0).toString(32)
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L8785` → after: `L8788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8788) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8785)

```diff
-               Xi = He(225).shouldUseUkPrivacyPolicy;
+               ji = OW(212).shouldUseUkPrivacyPolicy;
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L8788` → after: `L8791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L8791) · [Before (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L8788)

```diff
-         }, , , function(ee) {
+         }, , function(WW) {
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L9070` → after: `L9073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9073) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9070)

```diff
-               var ye, be = (ye = He(91)) && ye.__esModule ? ye : {
+               var mW, EW = (mW = OW(91)) && mW.__esModule ? mW : {
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L9122` → after: `L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9125) · [Before (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9122)

```diff
-                 return ee && ee.__esModule ? ee : {
+                 return WW && WW.__esModule ? WW : {
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L9188` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9191) · [Before (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9188)

```diff
-                 }, ie.Nf = function() {
+                 }, iW.VA = function() {
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L9191` → after: `L9194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9194) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9191)

```diff
-                   return ee ? String(this.Nf().name).toLowerCase() || "" : this.Nf().name || ""
+                   return WW ? String(this.VA().name).toLowerCase() || "" : this.VA().name || ""
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L9271` → after: `L9274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9274) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9271)

```diff
-               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
+               var mW, EW = (mW = OW(17)) && mW.__esModule ? mW : {
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L9671` → after: `L9674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9674) · [Before (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9671)

```diff
-               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
+               var mW, EW = (mW = OW(17)) && mW.__esModule ? mW : {
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L9812` → after: `L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L9815) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L9812)

```diff
-               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
+               var mW, EW = (mW = OW(17)) && mW.__esModule ? mW : {
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L10012` → after: `L10015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10015) · [Before (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10012)

```diff
-               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
+               var mW, EW = (mW = OW(17)) && mW.__esModule ? mW : {
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L10083` → after: `L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10086) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10083)

```diff
-         }, , , (ee, ie, He) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L10122` → after: `L10125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10125) · [Before (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10122)

```diff
-                 Ue = be.pathname + (Ke ? `?${Ke}` : "") + be.hash;
+                 LW = EW.pathname + (PW ? `?${PW}` : "") + EW.hash;
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L10139` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10142) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10139)

```diff
-                     for (let ye, be, Me = 0, Ke = 0; be = ee.charAt(Ke++); ~be && (ye = Me % 4 ? 64 * ye + be : be, Me++ % 4) ? ie += String.fromCharCode(255 & ye >> (-2 * Me & 6)) : 0) be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
+                     for (let mW, EW, NW = 0, PW = 0; EW = WW.charAt(PW++); ~EW && (mW = NW % 4 ? 64 * mW + EW : EW, NW++ % 4) ? iW += String.fromCharCode(255 & mW >> (-2 * NW & 6)) : 0) EW = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(EW);
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L10146` → after: `L10149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10149) · [Before (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10146)

```diff
-                 return Ue ? be = Ue : (be = Me.TgIWQA(be), ee[Ke] = be), be
+                 return LW ? EW = LW : (EW = NW.TgIWQA(EW), WW[PW] = EW), EW
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L10158` → after: `L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10161) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10158)

```diff
-                 "string" === typeof(null === (ie = ee.data) || void 0 === ie ? void 0 : ie.type) && "updateSearchParam" === (null === (He = ee.data) || void 0 === He ? void 0 : He.type) && (console.log(`Adding search param ${ee.data.name} with value ${ee.data.value}`), be.setSear … [truncated]
+                 "string" === typeof(null === (iW = WW.data) || void 0 === iW ? void 0 : iW.type) && "updateSearchParam" === (null === (OW = WW.data) || void 0 === OW ? void 0 : OW.type) && (console.log(`Adding search param ${WW.data.name} with value ${WW.data.value}`), EW.setSear … [truncated]
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L10185` → after: `L10188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10188) · [Before (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10185)

```diff
-         }, , , , (ee, ie, He) => {
+         }, , , , , , , , (WW, iW, OW) => {
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L10187` → after: `L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10190) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10187)

```diff
-             b: () => Te
+             d: () => bW
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L10217` → after: `L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10220) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10217)

```diff
-         }, , , , , , , , (ee, ie, He) => {
+         }, , (WW, iW, OW) => {
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L10219-L10220` → after: `L10222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10222) · [Before (L10219-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10219-L10220)

```diff
-             B: () => Xe,
-             D: () => Te,
+             A: () => xW,
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L10222-L10224` → after: `L10224-L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10224-L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10224-L10225) · [Before (L10222-L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10222-L10224)

```diff
-             H: () => ke,
-             K: () => ze,
-             N: () => pe,
+             F: () => jW,
+             c: () => sW,
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L10229` → after: `L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10229) · [Before (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10229)

```diff
-             l: () => Re,
+             j: () => ZW,
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L10231-L10234` → after: `L10231-L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10231-L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10231-L10237) · [Before (L10231-L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10231-L10234)

```diff
-             q: () => Fe,
-             s: () => qe,
-             v: () => Me.p,
-             z: () => Me.q
+             n: () => cW,
+             p: () => lW,
+             r: () => NW.h,
+             s: () => NW.i,
+             t: () => UW,
+             x: () => bW,
+             z: () => AW
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L10236` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10239) · [Before (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10236)

```diff
-           var ye = He(100),
+           var mW = OW(102),
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L10238` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10241) · [Before (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10238)

```diff
-             Me = He(120);
+             NW = OW(128);
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L10254` → after: `L10257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10257) · [Before (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10254)

```diff
-             let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
+             let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (iW = null === (OW = globalThis.navigator) || void 0 === OW ? void 0 : OW.userAgent) && void 0 !== iW ? iW : "";
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L10260` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10263) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10260)

```diff
-             let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
+             let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (iW = null === (OW = globalThis.navigator) || void 0 === OW ? void 0 : OW.userAgent) && void 0 !== iW ? iW : "";
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L10270` → after: `L10273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10273) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10270)

```diff
-             let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
+             let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (iW = null === (OW = globalThis.navigator) || void 0 === OW ? void 0 : OW.userAgent) && void 0 !== iW ? iW : "";
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L10281` → after: `L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10284) · [Before (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10281)

```diff
-         }, , , , , (ee, ie, He) => {
+         }, , , , , , , , , (WW, iW, OW) => {
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L10285-L10287` → after: `L10290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10290) · [Before (L10285-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10285-L10287)

```diff
-             l: () => Ue,
-             p: () => Je,
-             q: () => be
+             i: () => EW
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L10289` → after: `L10292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10292) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10289)

```diff
-           var ye = He(123);
+           var mW = OW(131);
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L10296` → after: `L10299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10299) · [Before (L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10296)

```diff
-               powerPreference: ye.e
+               powerPreference: mW.b
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L10301` → after: `L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10304) · [Before (L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10301)

```diff
-                 powerPreference: ye.e,
+                 powerPreference: mW.b,
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L10317` → after: `L10320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10320) · [Before (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10317)

```diff
-               (0, ye.M)(ee, ie, oe)
+               (0, mW.E)(WW, iW, tW)
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L10331-L10332` → after: `L10334-L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10334-L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10334-L10335) · [Before (L10331-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10331-L10332)

```diff
-               vendor: null !== (ie = null === (He = ee.info) || void 0 === He ? void 0 : He.vendor) && void 0 !== ie ? ie : "",
-               architecture: null !== (ye = null === (be = ee.info) || void 0 === be ? void 0 : be.architecture) && void 0 !== ye ? ye : ""
+               vendor: null !== (iW = null === (OW = WW.info) || void 0 === OW ? void 0 : OW.vendor) && void 0 !== iW ? iW : "",
+               architecture: null !== (mW = null === (EW = WW.info) || void 0 === EW ? void 0 : EW.architecture) && void 0 !== mW ? mW : ""
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L10338` → after: `L10341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10341) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10338)

```diff
-             return /swiftshader/i.test(`${null!==(ie=null===(He=ee.info)||void 0===He?void 0:He.vendor)&&void 0!==ie?ie:""} ${null!==(ye=null===(be=ee.info)||void 0===be?void 0:be.architecture)&&void 0!==ye?ye:""}`)
+             return /swiftshader/i.test(`${null!==(iW=null===(OW=WW.info)||void 0===OW?void 0:OW.vendor)&&void 0!==iW?iW:""} ${null!==(mW=null===(EW=WW.info)||void 0===EW?void 0:EW.architecture)&&void 0!==mW?mW:""}`)
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L10343` → after: `L10346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10346) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10343)

```diff
-             return null !== (ie = null !== (He = null === (ye = ee.info) || void 0 === ye ? void 0 : ye.isFallbackAdapter) && void 0 !== He ? He : ee.isFallbackAdapter) && void 0 !== ie && ie
+             return null !== (iW = null !== (OW = null === (mW = WW.info) || void 0 === mW ? void 0 : mW.isFallbackAdapter) && void 0 !== OW ? OW : WW.isFallbackAdapter) && void 0 !== iW && iW
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L10352-L10360` → after: `L10355-L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10355-L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10355-L10362) · [Before (L10352-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10352-L10360)

```diff
-             D: () => Be,
-             G: () => Fe,
-             I: () => Oe,
-             M: () => Xe,
-             Q: () => pe,
-             e: () => We,
-             g: () => de,
-             k: () => ge,
-             n: () => Ee,
+             E: () => UW,
+             F: () => jW,
+             b: () => yW,
+             c: () => YW,
+             d: () => KW,
+             f: () => MW,
+             j: () => kW,
+             m: () => wW,
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L10363` → after: `L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10366) · [Before (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10363)

```diff
-             x: () => Re
+             w: () => cW
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L10387` → after: `L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10390) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10387)

```diff
-                     vendor: null !== (He = ee.getParameter(null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe.UNMASKED_VENDOR_WEBGL) && void 0 !== ye ? ye : ee.VENDOR)) && void 0 !== He ? He : "",
+                     vendor: null !== (OW = WW.getParameter(null !== (mW = null === cW || void 0 === cW ? void 0 : cW.UNMASKED_VENDOR_WEBGL) && void 0 !== mW ? mW : WW.VENDOR)) && void 0 !== OW ? OW : "",
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L10414` → after: `L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10417) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10414)

```diff
-             return be ? ye : void 0
+             return EW ? mW : void 0
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L10441` → after: `L10444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10444) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10441)

```diff
-             return be && null !== (ee = ye) && void 0 !== ee && ee.renderer ? ye : ke
+             return EW && null !== (WW = mW) && void 0 !== WW && WW.renderer ? mW : xW
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L10458` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10461) · [Before (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10458)

```diff
-             Te ??= null !== (ie = null === (He = ee.getSupportedExtensions()) || void 0 === He ? void 0 : He.includes("KHR_parallel_shader_compile")) && void 0 !== ie ? ie : null
+             bW ??= null !== (iW = null === (OW = WW.getSupportedExtensions()) || void 0 === OW ? void 0 : OW.includes("KHR_parallel_shader_compile")) && void 0 !== iW ? iW : null
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L10478` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10481) · [Before (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10478)

```diff
-         }, , (ee, ie, He) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L10495-L10498` → after: `L10498-L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10498-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10498-L10501) · [Before (L10495-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10495-L10498)

```diff
-           var ye = He(153),
-             be = He(35),
-             Me = He(103),
-             Ke = He(134);
+           var mW = OW(154),
+             EW = OW(39),
+             NW = OW(109),
+             PW = OW(139);
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L10679-L10680` → after: `L10682-L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10682-L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10682-L10683) · [Before (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10679-L10680)

```diff
-             ke = ye.A.filter((ee => oe[ee].enabled)),
-             qe = ye.E.filter((ee => Re[ee].enabled)),
+             xW = mW.K.filter((WW => tW[WW].enabled)),
+             lW = mW.Q.filter((WW => ZW[WW].enabled)),
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L10686` → after: `L10689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10689) · [Before (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10686)

```diff
-             return ye.l.includes(ee) && oe[ee].enabled
+             return mW.o.includes(WW) && tW[WW].enabled
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L10690` → after: `L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10693) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10690)

```diff
-               const ie = (0, Ke.e)();
+               const iW = (0, PW.d)();
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L10694` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10697) · [Before (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10694)

```diff
-                 return be.m.setItem(pe, ee), ee
+                 return EW.j.setItem(jW, WW), WW
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L10700` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10703) · [Before (L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10700)

```diff
-                 if (null !== (He = null === (ye = oe[ee]) || void 0 === ye ? void 0 : ye.enabled) && void 0 !== He && He) return Xe(ee) ? be.m.setItem(pe, ee) : be.m.removeItem(pe), ee;
+                 if (null !== (OW = null === (mW = tW[WW]) || void 0 === mW ? void 0 : mW.enabled) && void 0 !== OW && OW) return UW(WW) ? EW.j.setItem(jW, WW) : EW.j.removeItem(jW), WW;
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L10703-L10704` → after: `L10706-L10707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10706-L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10706-L10707) · [Before (L10703-L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10703-L10704)

```diff
-               const Fe = be.m.getItem(pe);
-               if (Xe(Fe)) return console.info(`Site used is ${Fe}, kept from this tab's entry URL`), Fe;
+               const cW = EW.j.getItem(jW);
+               if (UW(cW)) return console.info(`Site used is ${cW}, kept from this tab's entry URL`), cW;
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L10710` → after: `L10713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10713) · [Before (L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10710)

```diff
-               return Ue().includes("discord") && !Ue().includes("/auth-callback/discord") && (ee = "discord"), (Ue().includes("coolmathgames") || Me.currentUrl.hasSearchParam("coolmath")) && (ee = "coolmathgames"), Ue().includes("gx.games") && (ee = "gxGames"), console.info(`Site … [truncated]
+               return LW().includes("discord") && !LW().includes("/auth-callback/discord") && (WW = "discord"), (LW().includes("coolmathgames") || NW.currentUrl.hasSearchParam("coolmath")) && (WW = "coolmathgames"), LW().includes("gx.games") && (WW = "gxGames"), console.info(`Site … [truncated]
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L10746` → after: `L10749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10749) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10746)

```diff
-         }, , , , , , , , , (ee, ie, He) => {
+         }, , , (WW, iW, OW) => {
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L10748-L10749` → after: `L10751-L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10751-L10752) · [Before (L10748-L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10748-L10749)

```diff
-             e: () => Ke,
-             f: () => Ue
+             d: () => PW,
+             h: () => LW
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L10751-L10752` → after: `L10754-L10755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10754-L10755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10754-L10755) · [Before (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10751-L10752)

```diff
-           var ye = He(140),
-             be = He(147);
+           var mW = OW(141),
+             EW = OW(144);
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L10766-L10768` → after: `L10769-L10771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10769-L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10769-L10771) · [Before (L10766-L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10766-L10768)

```diff
-                 if ("object" !== typeof ie || null === ie || !Object.prototype.hasOwnProperty.call(ie, be.b)) return null;
-                 const He = be.h.safeParse(ie[be.b]);
-                 return He.success ? He.data : (console.warn(`App bridge: the app's injected hello is invalid: ${ye.Q(He.error)}`), null)
+                 if ("object" !== typeof iW || null === iW || !Object.prototype.hasOwnProperty.call(iW, EW.e)) return null;
+                 const OW = EW.k.safeParse(iW[EW.e]);
+                 return OW.success ? OW.data : (console.warn(`App bridge: the app's injected hello is invalid: ${mW.Q(OW.error)}`), null)
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L10781` → after: `L10784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10784) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10781)

```diff
-         }, , , , , , (ee, ie, He) => {
+         }, , (WW, iW, OW) => {
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L10783-L10784` → after: `L10786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10786) · [Before (L10783-L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10783-L10784)

```diff
-             b: () => pH,
-             e: () => si,
+             d: () => jO,
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L10786-L10787` → after: `L10788-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10788-L10789) · [Before (L10786-L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10786-L10787)

```diff
-             l: () => zH,
-             p: () => HH,
+             j: () => Ci,
+             n: () => kO,
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L10790` → after: `L10792-L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10792-L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10792-L10793) · [Before (L10790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10790)

```diff
-             u: () => FH,
+             v: () => Fi,
+             w: () => cO,
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L10794-L10797` → after: `L10798-L10800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10798-L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10798-L10800) · [Before (L10794-L10797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10794-L10797)

```diff
-             I: () => Ci,
-             J: () => Ni,
-             M: () => kH,
-             P: () => EH,
+             H: () => ri,
+             K: () => xO,
+             O: () => MO,
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L10801-L10803` → after: `L10803-L10805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10803-L10805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10803-L10805) · [Before (L10801-L10803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10801-L10803)

```diff
-             W: () => Vi,
-             Y: () => Gi,
-             _: () => xi,
+             X: () => SO,
+             Z: () => di,
+             ab: () => zi,
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L10805-L10806` → after: `L10807-L10809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10807-L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10807-L10809) · [Before (L10805-L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10805-L10806)

```diff
-             eb: () => eH,
-             hb: () => li
+             cb: () => tO,
+             gb: () => WO,
+             jb: () => Bi
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L10835` → after: `L10838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10838) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10835)

```diff
-               const be = He?.Parent ? new Me : this;
+               const EW = OW?.Parent ? new NW : this;
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L10858` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L10861) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L10858)

```diff
-               super(`Encountered unidirectional transform during encode: ${ee}`), this.name = "ZodEncodeError"
+               super(`Encountered unidirectional transform during encode: ${WW}`), this.name = "ZodEncodeError"
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L11006` → after: `L11009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11009) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11006)

```diff
-             return "string" === typeof ee ? ee : ee?.message
+             return "string" === typeof WW ? WW : WW?.message
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L11044` → after: `L11047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11047) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11044)

```diff
-             for (const ye of He) "number" === typeof ye ? ie.push(`[${ye}]`) : "symbol" === typeof ye ? ie.push(`[${JSON.stringify(String(ye))}]`) : /[^\w$]/.test(ye) ? ie.push(`[${JSON.stringify(ye)}]`) : (ie.length && ie.push("."), ie.push(ye));
+             for (const mW of OW) "number" === typeof mW ? iW.push(`[${mW}]`) : "symbol" === typeof mW ? iW.push(`[${JSON.stringify(String(mW))}]`) : /[^\w$]/.test(mW) ? iW.push(`[${JSON.stringify(mW)}]`) : (iW.length && iW.push("."), iW.push(mW));
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L11051` → after: `L11054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11054) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11051)

```diff
-             for (const ye of He) ie.push(`\u2716 ${ye.message}`), ye.path?.length && ie.push(`  \u2192 at ${Ve(ye.path)}`);
+             for (const mW of OW) iW.push(`\u2716 ${mW.message}`), mW.path?.length && iW.push(`  \u2192 at ${dW(mW.path)}`);
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L11296` → after: `L11299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11299) · [Before (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11296)

```diff
-               re.init(ee, ie), ee._zod.pattern = [...ee?._zod.bag?.patterns ?? []].pop() ?? (He = ee._zod.bag, new RegExp(`^${He?`[\\s\\S]{${He?.minimum??0},${He?.maximum??""}}`:"[\\s\\S]*"}$`)), ee._zod.parse = (He, ye) => {
+               FW.init(WW, iW), WW._zod.pattern = [...WW?._zod.bag?.patterns ?? []].pop() ?? (OW = WW._zod.bag, new RegExp(`^${OW?`[\\s\\S]{${OW?.minimum??0},${OW?.maximum??""}}`:"[\\s\\S]*"}$`)), WW._zod.parse = (OW, mW) => {
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L11390` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11393) · [Before (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11390)

```diff
-               if (!ee.shape?.[be]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${be}": expected a Zod schema`);
+               if (!WW.shape?.[EW]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${EW}": expected a Zod schema`);
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L11501` → after: `L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11504) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11501)

```diff
-                 return new RegExp(`^(${ee.map((ee=>ke(ee.source))).join("|")})$`)
+                 return new RegExp(`^(${WW.map((WW=>xW(WW.source))).join("|")})$`)
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L11531` → after: `L11534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11534) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11531)

```diff
-                 if (!ye || 0 === Object.keys(ye).length) throw new Error(`Invalid discriminated union option at index "${ie.options.indexOf(He)}"`);
+                 if (!mW || 0 === Object.keys(mW).length) throw new Error(`Invalid discriminated union option at index "${iW.options.indexOf(OW)}"`);
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L11544` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11547) · [Before (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11544)

```diff
-                 if (!ee || 0 === ee.size) throw new Error(`Invalid discriminated union option at index "${ie.options.indexOf(ye)}"`);
+                 if (!WW || 0 === WW.size) throw new Error(`Invalid discriminated union option at index "${iW.options.indexOf(mW)}"`);
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L11546` → after: `L11549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11549) · [Before (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11546)

```diff
-                   if (He.has(ie)) throw new Error(`Duplicate discriminator value "${String(ie)}"`);
+                   if (OW.has(iW)) throw new Error(`Duplicate discriminator value "${String(iW)}"`);
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L11648` → after: `L11651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11651) · [Before (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11648)

```diff
-               ee._zod.values = ye, ee._zod.pattern = new RegExp(`^(${He.filter((ee=>Ee.has(typeof ee))).map((ee=>"string"===typeof ee?ge(ee):ee.toString())).join("|")})$`), ee._zod.parse = (ie, be) => {
+               WW._zod.values = mW, WW._zod.pattern = new RegExp(`^(${OW.filter((WW=>MW.has(typeof WW))).map((WW=>"string"===typeof WW?KW(WW):WW.toString())).join("|")})$`), WW._zod.parse = (iW, EW) => {
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L11661` → after: `L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11664) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11661)

```diff
-               ee._zod.values = He, ee._zod.pattern = new RegExp(`^(${ie.values.map((ee=>"string"===typeof ee?ge(ee):ee?ge(ee.toString()):String(ee))).join("|")})$`), ee._zod.parse = (ye, be) => {
+               WW._zod.values = OW, WW._zod.pattern = new RegExp(`^(${iW.values.map((WW=>"string"===typeof WW?KW(WW):WW?KW(WW.toString()):String(WW))).join("|")})$`), WW._zod.parse = (mW, EW) => {
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L11676` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.js#L11679) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.js#L11676)

```diff
-                   return (Ke instanceof Promise ? Ke : Promise.resolve(Ke)).then((ee => (He.value = ee, He)))
+                   return (PW instanceof Promise ? PW : Promise.resolve(PW)).then((WW => (OW.value = WW, OW)))
```
