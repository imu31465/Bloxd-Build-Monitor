# Changed — Bundle Modifications Report (Part 113 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `113 / 115` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 112](part-112.md) · [Part 114 →](part-114.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/main.js` (1153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 495. `bundles/bloxd.io/main.js` (Changed code · before: `L22896-L22897` → after: `L7631-L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7631-L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7631-L7677) · [Before (L22896-L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22896-L22897)

```diff
-           function QT(TT) {
-             return void 0 === TT
+           function Nu(qq, Eq, gq, Yq, lq, Oq) {
+             var xq = 2;
+             if (Yq = qq, "function" === typeof qq) Bu(qq) && (xq = 1);
+             else if ("string" === typeof qq) xq = 5;
+             else qq: switch (qq) {
+               case rq:
+                 return au(gq.children, lq, Oq, Eq);
+               case pq:
+                 xq = 8, lq |= 16;
+                 break;
+               case vq:
+                 xq = 8, lq |= 1;
+                 break;
+               case hq:
+                 return (qq = uu(12, gq, Eq, 8 | lq)).elementType = hq, qq.type = hq, qq.lanes = Oq, qq;
+               case Zq:
+ ... (31 more added lines; see GitHub link above)
```

#### 496. `bundles/bloxd.io/main.js` (Changed code · before: `L22900-L22901` → after: `L7680-L7681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7680-L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7680-L7681) · [Before (L22900-L22901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22900-L22901)

```diff
-           function ST(TT) {
-             return DT(TT) && "[object RegExp]" === PT(TT)
+           function au(qq, Eq, gq, Yq) {
+             return (qq = uu(7, qq, Yq, Eq)).lanes = gq, qq
```

#### 497. `bundles/bloxd.io/main.js` (Changed code · before: `L22904-L22905` → after: `L7684-L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7684-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7684-L7685) · [Before (L22904-L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22904-L22905)

```diff
-           function DT(TT) {
-             return "object" === typeof TT && null !== TT
+           function Vu(qq, Eq, gq, Yq) {
+             return (qq = uu(23, qq, Yq, Eq)).elementType = Gq, qq.lanes = gq, qq
```

#### 498. `bundles/bloxd.io/main.js` (Changed code · before: `L22908-L22909` → after: `L7688-L7689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7688-L7689) · [Before (L22908-L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22908-L22909)

```diff
-           function aT(TT) {
-             return DT(TT) && "[object Date]" === PT(TT)
+           function du(qq, Eq, gq) {
+             return (qq = uu(6, qq, null, Eq)).lanes = gq, qq
```

#### 499. `bundles/bloxd.io/main.js` (Changed code · before: `L22912-L22913` → after: `L7692-L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7692-L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7692-L7697) · [Before (L22912-L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22912-L22913)

```diff
-           function FT(TT) {
-             return DT(TT) && ("[object Error]" === PT(TT) || TT instanceof Error)
+           function ju(qq, Eq, gq) {
+             return (Eq = uu(4, null !== qq.children ? qq.children : [], qq.key, Eq)).lanes = gq, Eq.stateNode = {
+               containerInfo: qq.containerInfo,
+               pendingChildren: null,
+               implementation: qq.implementation
+             }, Eq
```

#### 500. `bundles/bloxd.io/main.js` (Changed code · before: `L22916-L22917` → after: `L7700-L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7700-L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7700-L7701) · [Before (L22916-L22917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22916-L22917)

```diff
-           function rT(TT) {
-             return "function" === typeof TT
+           function Hu(qq, Eq, gq) {
+             this.tag = Eq, this.containerInfo = qq, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = gq, this.callbackNode = null, this.callbackPriority = 0, this.ev … [truncated]
```

#### 501. `bundles/bloxd.io/main.js` (Changed code · before: `L22920-L22921` → after: `L7704-L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7704-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7704-L7738) · [Before (L22920-L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22920-L22921)

```diff
-           function PT(TT) {
-             return Object.prototype.toString.call(TT)
+           function ou(qq, Eq, gq, Yq) {
+             var lq = Eq.current,
+               Oq = Zc(),
+               xq = fc(lq);
+             qq: if (gq) {
+               Eq: {
+                 if (qg(gq = gq._reactInternals) !== gq || 1 !== gq.tag) throw Error(mq(170));
+                 var Aq = gq;do {
+                   switch (Aq.tag) {
+                     case 3:
+                       Aq = Aq.stateNode.context;
+                       break Eq;
+                     case 1:
+                       if (hO(Aq.type)) {
+                         Aq = Aq.stateNode.__reactInternalMemoizedMergedChildContext;
+                         break Eq
+ ... (19 more added lines; see GitHub link above)
```

#### 502. `bundles/bloxd.io/main.js` (Changed code · before: `L22925` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7742) · [Before (L22925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22925)

```diff
-             return TT < 10 ? "0" + TT.toString(10) : TT.toString(10)
+             return (qq = qq.current).child ? (qq.child.tag, qq.child.stateNode) : null
```

#### 503. `bundles/bloxd.io/main.js` (Changed code · before: `L22986-L23084` → after: `L7746-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7746-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7746-L7748) · [Before (L22986-L23084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22986-L23084)

```diff
-             if (!TT) {
-               var cT = new Error("Promise was rejected with a falsy value");
-               cT.reason = TT, TT = cT
-             }
-             return kT(TT)
-           }
-           kT.promisify = function(TT) {
-             if ("function" !== typeof TT) throw new TypeError('The "original" argument must be of type Function');
-             if (zT && TT[zT]) {
-               var kT;
-               if ("function" !== typeof(kT = TT[zT])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
-               return Object.defineProperty(kT, zT, {
-                 value: kT,
-                 enumerable: !1,
-                 writable: !1,
-                 configurable: !0
- ... (83 more removed lines; see GitHub link above)
+             if (null !== (qq = qq.memoizedState) && null !== qq.dehydrated) {
+               var gq = qq.retryLane;
+               qq.retryLane = 0 !== gq && gq < Eq ? gq : Eq
```

#### 504. `bundles/bloxd.io/main.js` (Changed code · before: `L23165-L23169` → after: `L7752-L7753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7752-L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7752-L7753) · [Before (L23165-L23169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23165-L23169)

```diff
-           function VT(TT) {
-             var kT, cT;
-             const lT = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.width) && void 0 !== kT ? kT : 0,
-               MT = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.height) && void 0 !== cT ? cT : 0;
-             return lT >= 970 && MT >= 250 ? "970x250" : lT >= 300 && MT >= 600 ? "300x600" : lT >= 300 && MT >= 250 ? "300x250" : lT >= 728 && MT >= 90 ? "728x90" : lT >= 320 && MT >= 50 ? "320x50" : null
+           function yu(qq, Eq) {
+             Qu(qq, Eq), (qq = qq.alternate) && Qu(qq, Eq)
```

#### 505. `bundles/bloxd.io/main.js` (Changed code · before: `L23172-L23190` → after: `L7756-L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7756-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7756-L7763) · [Before (L23172-L23190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23172-L23190)

```diff
-           function ET(TT) {
-             const {
-               userContext: kT
-             } = (0, PT.b)(), cT = kT.getOwnedCosmeticPacks(), MT = (0, lT.useMemo)((() => NT.o.filter((TT => !cT.includes(TT)))), [cT]), [KT] = (0, lT.useState)((() => {
-               if ((0, fT.m)()) return null;
-               const TT = [];
-               return (0, rT.purchasesAllowed)() && (TT.push({
-                 type: "superRank"
-               }), MT.length > 0 && TT.push({
-                 type: "cosmeticPack",
-                 pack: CT.d.chooseRandom(MT)
-               })), 0 === TT.length ? null : JT(TT)
-             }));
-             return null === KT ? null : "superRank" === KT.type ? (0, zT.jsx)(ZT, {
-               ...TT
-             }) : (0, zT.jsx)(uT, {
- ... (3 more removed lines; see GitHub link above)
+           function tu(qq, Eq, gq) {
+             var Yq = null != gq && null != gq.hydrationOptions && gq.hydrationOptions.mutableSources || null;
+             if (gq = new Hu(qq, Eq, null != gq && !0 === gq.hydrate), Eq = uu(3, null, null, 2 === Eq ? 7 : 1 === Eq ? 3 : 0), gq.current = Eq, Eq.stateNode = gq, om(Eq), qq[cO] = gq.current, Jl(8 === qq.nodeType ? qq.parentNode : qq), Yq)
+               for (qq = 0; qq < Yq.length; qq++) {
+                 var lq = (Eq = Yq[qq])._getVersion;
+                 lq = lq(Eq._source), null == gq.mutableSourceEagerHydrationData ? gq.mutableSourceEagerHydrationData = [Eq, lq] : gq.mutableSourceEagerHydrationData.push(Eq, lq)
+               }
+             this._internalRoot = gq
```

#### 506. `bundles/bloxd.io/main.js` (Changed code · before: `L23194-L23245` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7767) · [Before (L23194-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23194-L23245)

```diff
-             var kT;
-             let {
-               bannerInfo: cT,
-               extraContrastBackgroundBox: lT,
-               horizontalAlign: MT,
-               verticalAlign: KT
-             } = TT;
-             const {
-               t: OT
-             } = (0, ST.B)(), {
-               hideAds: yT
-             } = (0, xT.n)(["hideAds"]), fT = VT(cT);
-             return yT || null === fT ? null : (0, zT.jsx)("div", {
-               className: tT()(`AdBanner SuperRankAd SuperRankAd${fT}`, void 0 !== lT && ["AdBannerExtraContrast", eT[lT]]),
-               style: {
-                 scale: String(null !== (kT = cT.scale) && void 0 !== kT ? kT : 1),
- ... (36 more removed lines; see GitHub link above)
+             return !(!qq || 1 !== qq.nodeType && 9 !== qq.nodeType && 11 !== qq.nodeType && (8 !== qq.nodeType || " react-mount-point-unstable " !== qq.nodeValue))
```

#### 507. `bundles/bloxd.io/main.js` (Changed code · before: `L23248-L23316` → after: `L7770-L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7770-L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7770-L7800) · [Before (L23248-L23316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23248-L23316)

```diff
-           function uT(TT) {
-             var kT, cT;
-             let {
-               pack: MT,
-               bannerInfo: KT,
-               extraContrastBackgroundBox: OT,
-               horizontalAlign: yT,
-               verticalAlign: fT
-             } = TT;
-             const {
-               t: IT
-             } = (0, ST.B)(), {
-               hideAds: AT
-             } = (0, xT.n)(["hideAds"]), CT = VT(KT), jT = NT.c[MT], vT = GT[jT.tier], DT = "CosmeticPackAdLegendary" === vT, aT = (0, lT.useRef)(null);
-             if ((0, bT.b)(aT, !AT && null !== CT && DT), AT || null === CT) return null;
-             const FT = Object.entries(QT.c).filter((TT => {
- ... (53 more removed lines; see GitHub link above)
+           function vu(qq, Eq, gq, Yq, lq) {
+             var Oq = gq._reactRootContainer;
+             if (Oq) {
+               var mq = Oq._internalRoot;
+               if ("function" === typeof lq) {
+                 var xq = lq;
+                 lq = function() {
+                   var qq = Pu(mq);
+                   xq.call(qq)
+                 }
+               }
+               ou(Eq, mq, qq, lq)
+             } else {
+               if (Oq = gq._reactRootContainer = function(qq, Eq) {
+                   if (Eq || (Eq = !(!(Eq = qq ? 9 === qq.nodeType ? qq.documentElement : qq.firstChild : null) || 1 !== Eq.nodeType || !Eq.hasAttribute("data-reactroot"))), !Eq)
+                     for (var gq; gq = qq.lastChild;) qq.removeChild(gq);
+ ... (15 more added lines; see GitHub link above)
```

#### 508. `bundles/bloxd.io/main.js` (Changed code · before: `L23318-L23338` → after: `L7802-L8062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7802-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7802-L8062) · [Before (L23318-L23338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23318-L23338)

```diff
-           var XT = cT(118),
-             dT = cT(1741);
-           const LT = {
-               start: "top",
-               center: "center",
-               end: "bottom"
-             },
-             RT = {
-               start: "left",
-               center: "center",
-               end: "right"
-             },
-             gT = {
-               start: "0",
-               center: "50%",
-               end: void 0
- ... (5 more removed lines; see GitHub link above)
+ 
+           function hu(qq, Eq) {
+             var gq = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
+             if (!ru(Eq)) throw Error(mq(200));
+             return function(qq, Eq, gq) {
+               var Yq = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
+               return {
+                 $$typeof: tq,
+                 key: null == Yq ? null : "" + Yq,
+                 children: qq,
+                 containerInfo: Eq,
+                 implementation: gq
+               }
+             }(qq, Eq, null, gq)
+           }
+           Wc = function(qq, Eq, gq) {
+ ... (245 more added lines; see GitHub link above)
```

#### 509. `bundles/bloxd.io/main.js` (Changed code · before: `L23341-L23343` → after: `L8065-L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8065-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8065-L8068) · [Before (L23341-L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23341-L23343)

```diff
-               start: "0",
-               center: "-50%",
-               end: "0"
+               findFiberByHostInstance: BO,
+               bundleType: 0,
+               version: "17.0.2",
+               rendererPackageName: "react-dom"
```

#### 510. `bundles/bloxd.io/main.js` (Changed code · before: `L23346-L23352` → after: `L8071-L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8071-L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8071-L8085) · [Before (L23346-L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23346-L23352)

```diff
-               bottom: {
-                 width: 3,
-                 height: 1.5
-               },
-               top: {
-                 width: 3,
-                 height: 1.5
+               bundleType: bu.bundleType,
+               version: bu.version,
+               rendererPackageName: bu.rendererPackageName,
+               rendererConfig: bu.rendererConfig,
+               overrideHookState: null,
+               overrideHookStateDeletePath: null,
+               overrideHookStateRenamePath: null,
+               overrideProps: null,
+               overridePropsDeletePath: null,
+               overridePropsRenamePath: null,
+               setSuspenseHandler: null,
+               scheduleUpdate: null,
+               currentDispatcherRef: Qq.ReactCurrentDispatcher,
+               findHostInstanceByFiber: function(qq) {
+                 return null === (qq = Yg(qq)) ? null : qq.stateNode
```

#### 511. `bundles/bloxd.io/main.js` (Changed code · before: `L23354-L23356` → after: `L8087-L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8087-L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8087-L8088) · [Before (L23354-L23356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23354-L23356)

```diff
-               left: {
-                 width: 2,
-                 height: 2.5
+               findFiberByHostInstance: bu.findFiberByHostInstance || function() {
+                 return null
```

#### 512. `bundles/bloxd.io/main.js` (Changed code · before: `L23358-L23803` → after: `L8090-L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8090-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8090-L8100) · [Before (L23358-L23803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23358-L23803)

```diff
-               right: {
-                 width: 2,
-                 height: 2.5
-               }
-             },
-             WT = 3e4,
-             nT = (0, lT.memo)((function(TT) {
-               let {
-                 info: kT,
-                 sizeInfo: cT,
-                 showing: vT = !0,
-                 verticalAlign: hT = "center",
-                 horizontalAlign: NT = "center",
-                 noFillShowBloxdAdProbability: QT = .8,
-                 extraContrastBackgroundBox: DT,
-                 holdFramedSize: aT = !1,
- ... (430 more removed lines; see GitHub link above)
+               findHostInstancesForRefresh: null,
+               scheduleRefresh: null,
+               scheduleRoot: null,
+               setRefreshHandler: null,
+               getCurrentFiber: null
+             };
+           if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
+             var Zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
+             if (!Zu.isDisabled && Zu.supportsFiber) try {
+               MO = Zu.inject(iu), TO = Zu
+             } catch (HE) {}
```

#### 513. `bundles/bloxd.io/main.js` (Changed code · before: `L23805-L23825` → after: `L8102-L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8102-L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8102-L8154) · [Before (L23805-L23825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23805-L23825)

```diff
- 
-           function DT(TT) {
-             let {
-               icon: kT,
-               title: cT,
-               subtitle: lT,
-               children: MT
-             } = TT;
-             return (0, vT.jsxs)("div", {
-               className: "PromptGenericPopup BrowserTipPopup",
-               children: [(0, vT.jsx)("div", {
-                 className: "BrowserTipPopupIcon",
-                 children: kT
-               }), (0, vT.jsx)("div", {
-                 className: "PromptGenericPopupTitle SmallTextBold",
-                 children: cT
- ... (5 more removed lines; see GitHub link above)
+           Eq.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nu, Eq.createPortal = hu, Eq.findDOMNode = function(qq) {
+             if (null == qq) return null;
+             if (1 === qq.nodeType) return qq;
+             var Eq = qq._reactInternals;
+             if (void 0 === Eq) {
+               if ("function" === typeof qq.render) throw Error(mq(188));
+               throw Error(mq(268, Object.keys(qq)))
+             }
+             return qq = null === (qq = Yg(Eq)) ? null : qq.stateNode
+           }, Eq.flushSync = function(qq, Eq) {
+             var gq = CA;
+             if (0 !== (48 & gq)) return qq(Eq);
+             CA |= 1;
+             try {
+               if (qq) return Ym(99, qq.bind(null, Eq))
+             } finally {
+ ... (37 more added lines; see GitHub link above)
```

#### 514. `bundles/bloxd.io/main.js` (Changed code · before: `L23827-L23843` → after: `L8156-L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8156-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8156-L8157) · [Before (L23827-L23843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23827-L23843)

```diff
- 
-           function aT(TT) {
-             let {
-               tip: kT,
-               onShown: cT,
-               onActed: KT,
-               onNeverShowChange: yT,
-               close: fT
-             } = TT;
-             const {
-               t: xT
-             } = (0, MT.B)(), [IT, NT] = (0, lT.useState)(!1), aT = (0, lT.useRef)(!1);
-             let FT, rT;
-             (0, lT.useEffect)((() => {
-               cT()
-             }), []);
- ... (1 more removed lines; see GitHub link above)
+           if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
+             var cq = null,
```

#### 515. `bundles/bloxd.io/main.js` (Changed code · before: `L23845-L23875` → after: `L8159-L8164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8159-L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8159-L8164) · [Before (L23845-L23875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23845-L23875)

```diff
-               mT = null;
-             switch (kT.kind) {
-               case "acceleration":
-                 FT = (0, vT.jsx)(AT.e, {
-                   name: "gauge-high"
-                 }), rT = xT("hardware" === kT.settingName ? "browserTips:hardwareAcceleration" : "browserTips:graphicsAcceleration"), wT = (0, vT.jsx)(ST, {
-                   setting: kT,
-                   reportAs: "acceleration",
-                   onCopied: KT
-                 });
-                 break;
-               case "driver":
-                 FT = (0, vT.jsx)(AT.e, {
-                   name: "windows",
-                   kit: "brands"
-                 }), rT = xT("browserTips:driver"), mT = {
- ... (15 more removed lines; see GitHub link above)
+               Bq = function() {
+                 if (null !== cq) try {
+                   var qq = Eq.unstable_now();
+                   cq(!0, qq), cq = null
+                 } catch (gq) {
+                   throw setTimeout(Bq, 0), gq
```

#### 516. `bundles/bloxd.io/main.js` (Changed code · before: `L23878-L24280` → after: `L8183-L8212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8183-L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8183-L8212) · [Before (L23878-L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L23878-L24280)

```diff
-             return (0, vT.jsxs)(DT, {
-               icon: FT,
-               title: rT,
-               subtitle: PT,
-               children: [wT, (0, vT.jsxs)("div", {
-                 className: "PromptGenericPopupBody",
-                 children: [mT && (0, vT.jsx)(CT.m, {
-                   className: "PromptGenericPopupBodyButton PromptGenericPopupBodyPrimaryButton",
-                   onClick: () => {
-                     aT.current || (aT.current = !0, (0, OT.b)(kT.kind), (0, OT.g)(kT.kind, "opened"), mT.open(mT.url), KT(), fT())
-                   },
-                   children: mT.label
-                 }), (0, vT.jsx)(CT.I, {
-                   className: "PromptGenericPopupBodyButton",
-                   onClick: fT,
-                   children: xT("notifications:close")
- ... (387 more removed lines; see GitHub link above)
+             var Vq = !1,
+               dq = null,
+               jq = -1,
+               Hq = 5,
+               oq = 0;
+             Eq.unstable_shouldYield = function() {
+               return Eq.unstable_now() >= oq
+             }, Oq = function() {}, Eq.unstable_forceFrameRate = function(qq) {
+               0 > qq || 125 < qq ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Hq = 0 < qq ? Math.floor(1e3 / qq) : 5
+             };
+             var Pq = new MessageChannel,
+               Qq = Pq.port2;
+             Pq.port1.onmessage = function() {
+               if (null !== dq) {
+                 var qq = Eq.unstable_now();
+                 oq = qq + Hq;
+ ... (14 more added lines; see GitHub link above)
```

#### 517. `bundles/bloxd.io/main.js` (Changed code · before: `L24519-L24534` → after: `L8217-L8223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8217-L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8217-L8223) · [Before (L24519-L24534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24519-L24534)

```diff
-             let {
-               name: cT,
-               cosmetics: MT
-             } = kT;
-             return {
-               isError: !1,
-               name: cT,
-               ranks: [],
-               cosmetics: {
-                 ...MT,
-                 profileEffect: TT
-               },
-               nameColour: lT.e,
-               location: {
-                 status: "noGamePlayed"
-               }
+             var gq = qq.length;
+             qq.push(Eq);
+             qq: for (;;) {
+               var Yq = gq - 1 >>> 1,
+                 lq = qq[Yq];
+               if (!(void 0 !== lq && 0 < vq(lq, Eq))) break qq;
+               qq[Yq] = Eq, qq[gq] = lq, gq = Yq
```

#### 518. `bundles/bloxd.io/main.js` (Changed code · before: `L24600-L24605` → after: `L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8228) · [Before (L24600-L24605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24600-L24605)

```diff
-             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "packLink";
-             (0, ZT.p)({
-               mode: "self",
-               source: kT,
-               openItem: TT
-             })
+             return void 0 === (qq = qq[0]) ? null : qq
```

#### 519. `bundles/bloxd.io/main.js` (Changed code · before: `L24608` → after: `L8231-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8231-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8231-L8250) · [Before (L24608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24608)

```diff
-           function iT() {
+           function rq(qq) {
+             var Eq = qq[0];
+             if (void 0 !== Eq) {
+               var gq = qq.pop();
+               if (gq !== Eq) {
+                 qq[0] = gq;
+                 qq: for (var Yq = 0, lq = qq.length; Yq < lq;) {
+                   var Oq = 2 * (Yq + 1) - 1,
+                     mq = qq[Oq],
+                     xq = Oq + 1,
+                     Aq = qq[xq];
+                   if (void 0 !== mq && 0 > vq(mq, gq)) void 0 !== Aq && 0 > vq(Aq, mq) ? (qq[Yq] = Aq, qq[xq] = gq, Yq = xq) : (qq[Yq] = mq, qq[Oq] = gq, Yq = Oq);
+                   else {
+                     if (!(void 0 !== Aq && 0 > vq(Aq, gq))) break qq;
+                     qq[Yq] = Aq, qq[xq] = gq, Yq = xq
+                   }
+ ... (4 more added lines; see GitHub link above)
```

#### 520. `bundles/bloxd.io/main.js` (Changed code · before: `L24614-L24621` → after: `L8255-L8256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8255-L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8255-L8256) · [Before (L24614-L24621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24614-L24621)

```diff
-             const cT = {};
-             for (const [KT, OT] of Object.entries(kT)) {
-               var lT, MT;
-               const kT = null !== (lT = null === (MT = (0, yT.j)(KT, OT)) || void 0 === MT ? void 0 : MT.colourGroup) && void 0 !== lT ? lT : null,
-                 fT = kT ? (0, yT.g)(OT) : null;
-               fT && (cT[`${TT}_${KT}_${kT}`] = Number(fT[1]))
-             }
-             return cT
+             var gq = qq.sortIndex - Eq.sortIndex;
+             return 0 !== gq ? gq : qq.id - Eq.id
```

#### 521. `bundles/bloxd.io/main.js` (Changed code · before: `L24625-L24667` → after: `L8268-L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8268-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8268-L8272) · [Before (L24625-L24667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24625-L24667)

```diff
-             var kT, cT, MT, PT, wT;
-             let {
-               pack: mT,
-               onBack: bT,
-               ownedPacks: zT,
-               initialGiftRecipient: JT = "",
-               startAsGift: oT = !1,
-               highlightCta: ZT = !1,
-               giftCta: pT = null,
-               onPurchased: Tk
-             } = TT;
-             const {
-               t: kk
-             } = (0, QT.B)(), {
-               userContext: ck,
-               isUserContextUpdating: lk
- ... (27 more removed lines; see GitHub link above)
+             for (var Eq = tq(nq); null !== Eq;) {
+               if (null === Eq.callback) rq(nq);
+               else {
+                 if (!(Eq.startTime <= qq)) break;
+                 rq(nq), Eq.sortIndex = Eq.expirationTime, yq(hq, Eq)
```

#### 522. `bundles/bloxd.io/main.js` (Changed code · before: `L24669-L24719` → after: `L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8274) · [Before (L24669-L24719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24669-L24719)

```diff
-             }), [Fk, Pk]);
-             const bk = (0, lT.useRef)(null),
-               zk = (0, lT.useRef)(!1),
-               Jk = TT => {
-                 bk.current = TT, zk.current = !0
-               },
-               Hk = TT => {
-                 zk.current = !0, Lk(TT)
-               },
-               ek = () => {
-                 var TT;
-                 null !== (TT = bk.current) && void 0 !== TT && TT.ofCharacter && (bk.current = null)
-               },
-               Gk = !Sk,
-               Vk = (0, lT.useRef)(null),
-               Ek = (0, lT.useRef)(null),
- ... (35 more removed lines; see GitHub link above)
+               Eq = tq(nq)
```

#### 523. `bundles/bloxd.io/main.js` (Changed code · before: `L24722-L24758` → after: `L8278-L8283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8278-L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8278-L8283) · [Before (L24722-L24758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24722-L24758)

```diff
-             function Oc(TT, kT) {
-               if (hk && TT === Ck) return vk({
-                 ...TT
-               }), void(kT && (Gk ? (Jk({
-                 id: kT,
-                 ofCharacter: !0
-               }), mk()) : (zk.current = !0, Rk(kT))));
-               const cT = !Kc(TT);
-               if (function(TT) {
-                   if (Kc(TT)) vk({});
-                   else {
-                     vk({
-                       ...TT
-                     });
-                     const kT = sT(mT, TT);
-                     Object.keys(kT).length > 0 && Qk((TT => ({
- ... (21 more removed lines; see GitHub link above)
+           function Sq(qq) {
+             if (Tq = !1, zq(qq), !Mq)
+               if (null !== tq(hq)) Mq = !0, gq(pq);
+               else {
+                 var Eq = tq(nq);
+                 null !== Eq && Yq(Sq, Eq.startTime - qq)
```

#### 524. `bundles/bloxd.io/main.js` (Changed code · before: `L24760-L24764` → after: `L8285-L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8285-L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8285-L8298) · [Before (L24760-L24764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24760-L24764)

```diff
-               kT && (fk.current = !0)
-             })), (0, lT.useEffect)((() => {
-               if (!lk) {
-                 for (const [TT, kT] of Object.entries(ck.getPlayerCosmetics())) Mc(TT, kT);
-                 Ok()
+           }
+ 
+           function pq(qq, gq) {
+             Mq = !1, Tq && (Tq = !1, lq()), fq = !0;
+             var Oq = Zq;
+             try {
+               for (zq(gq), iq = tq(hq); null !== iq && (!(iq.expirationTime > gq) || qq && !Eq.unstable_shouldYield());) {
+                 var mq = iq.callback;
+                 if ("function" === typeof mq) {
+                   iq.callback = null, Zq = iq.priorityLevel;
+                   var xq = mq(iq.expirationTime <= gq);
+                   gq = Eq.unstable_now(), "function" === typeof xq ? iq.callback = xq : iq === tq(hq) && rq(hq), zq(gq)
+                 } else rq(hq);
+                 iq = tq(hq)
```

#### 525. `bundles/bloxd.io/main.js` (Changed code · before: `L24766-L24791` → after: `L8300-L8303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8300-L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8300-L8303) · [Before (L24766-L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24766-L24791)

```diff
-             }), [lk]);
-             const yc = null !== (cT = null === (MT = xk.find((TT => {
-                 let [, {
-                   cosmetics: kT
-                 }] = TT;
-                 return Kc(kT) && Object.keys(jk).length === Object.keys(kT).length
-               }))) || void 0 === MT ? void 0 : MT[0]) && void 0 !== cT ? cT : null,
-               fc = !Sk && null !== yc,
-               xc = !ak || Fk || null === yc;
-             ak && xc && !Fk && rk(!0);
-             const Ic = !ak || Pk;
-             fc && (null === (PT = Xk.current) || void 0 === PT ? void 0 : PT.character) !== yc && (Xk.current = {
-               character: yc,
-               camera: (0, gT.b)((0, dT.e)(yc))
-             });
-             const Ac = fc || !Zk ? Xk.current : null,
- ... (10 more removed lines; see GitHub link above)
+               if (null !== iq) var Aq = !0;
+               else {
+                 var cq = tq(nq);
+                 null !== cq && Yq(Sq, cq.startTime - gq), Aq = !1
```

#### 526. `bundles/bloxd.io/main.js` (Changed code · before: `L24793-L25170` → after: `L8305-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8305-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8305-L8308) · [Before (L24793-L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L24793-L25170)

```diff
-             }), [Cc]);
-             const [, jc] = (0, YT.d)(), vc = jc <= 420 && !sk && !gk, tc = ZT && (gk || !sk);
- 
-             function hc(TT) {
-               var kT;
-               Kk ? pk((0, IT.b)(mT), TT) : (0, uT.c)(mT, null !== (kT = null === TT || void 0 === TT ? void 0 : TT.trim()) && void 0 !== kT ? kT : null)
-             }
-             const Nc = null !== Tc && (0, WT.jsx)(AT.d, {
-                 className: "CosmeticPackPrice",
-                 amount: Tc
-               }),
-               Qc = (0, WT.jsxs)(WT.Fragment, {
-                 children: [gk && pT && (0, WT.jsx)("div", {
-                   className: "CosmeticShopGiftReady",
-                   children: pT
-                 }), (gk || sk) && !(gk && pT) && (0, WT.jsxs)("div", {
- ... (362 more removed lines; see GitHub link above)
+               return Aq
+             } finally {
+               iq = null, Zq = Oq, fq = !1
+             }
```

#### 527. `bundles/bloxd.io/main.js` (Changed code · before: `L25172-L25215` → after: `L8310-L8389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8310-L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8310-L8389) · [Before (L25172-L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25172-L25215)

```diff
-         },
-         4618: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => ST,
-             f: () => NT
-           });
-           var lT = cT(71),
-             MT = cT(1470),
-             KT = cT(1363),
-             OT = cT(1195),
-             yT = cT(1046),
-             fT = cT.n(yT),
-             xT = cT(1061),
-             IT = cT(4566),
-             AT = cT(1333),
-             CT = cT(1530),
- ... (28 more removed lines; see GitHub link above)
+           var Gq = Oq;
+           Eq.unstable_IdlePriority = 5, Eq.unstable_ImmediatePriority = 1, Eq.unstable_LowPriority = 4, Eq.unstable_NormalPriority = 3, Eq.unstable_Profiling = null, Eq.unstable_UserBlockingPriority = 2, Eq.unstable_cancelCallback = function(qq) {
+             qq.callback = null
+           }, Eq.unstable_continueExecution = function() {
+             Mq || fq || (Mq = !0, gq(pq))
+           }, Eq.unstable_getCurrentPriorityLevel = function() {
+             return Zq
+           }, Eq.unstable_getFirstCallbackNode = function() {
+             return tq(hq)
+           }, Eq.unstable_next = function(qq) {
+             switch (Zq) {
+               case 1:
+               case 2:
+               case 3:
+                 var Eq = 3;
+                 break;
+ ... (64 more added lines; see GitHub link above)
```

#### 528. `bundles/bloxd.io/main.js` (Changed code · before: `L25218-L25346` → after: `L8392-L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8392-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8392-L8430) · [Before (L25218-L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25218-L25346)

```diff
- 
-           function QT(TT) {
-             let {
-               closePopup: kT
-             } = TT;
-             const {
-               t: cT
-             } = (0, OT.B)(), lT = (0, CT.useNavigatePreserveSearch)(), KT = function(TT) {
-               return [{
-                 icon: "fa-solid fa-globe",
-                 title: TT("createCustomGame:stepCreateYourWorldTitle"),
-                 description: TT("createCustomGame:stepCreateYourWorldDescription")
-               }, {
-                 icon: "fa-solid fa-terminal",
-                 title: TT("createCustomGame:stepBuildAndCodeTitle"),
-                 description: TT("createCustomGame:stepBuildAndCodeDescription")
- ... (113 more removed lines; see GitHub link above)
+         }, , , , , (qq, Eq, gq) => {
+           gq.r(Eq), gq.d(Eq, {
+             canSearchBrowserSettings: () => rq,
+             compliance: () => Jq,
+             featureFlags: () => Lq,
+             getBrowserDebugInfo: () => Hq,
+             getBrowserFamily: () => lE,
+             getBrowserName: () => oq,
+             getBrowserVersion: () => Pq,
+             getDeviceDefaultPixelScale: () => Iq,
+             getGpuVendor: () => OE,
+             getOperatingSystem: () => bq,
+             getOperatingSystemVersion: () => yq,
+             getPlatformType: () => nq,
+             getSoftwareRenderer: () => Dq,
+             getTrafficSource: () => iq,
+ ... (23 more added lines; see GitHub link above)
```

#### 529. `bundles/bloxd.io/main.js` (Changed code · before: `L25348-L25358` → after: `L8432-L8435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8432-L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8432-L8435) · [Before (L25348-L25358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25348-L25358)

```diff
-           var lT = cT(339),
-             MT = cT(328),
-             KT = cT(71),
-             OT = cT(1218),
-             yT = cT(1333),
-             fT = cT(1530),
-             xT = cT(31),
-             IT = cT(1348),
-             AT = cT(1470),
-             CT = cT(1486),
-             jT = cT(1046),
+           var Yq = gq(181),
+             lq = gq(183),
+             Oq = gq(190),
+             mq = gq(104),
```

#### 530. `bundles/bloxd.io/main.js` (Changed code · before: `L25360-L25491` → after: `L8437-L8446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8437-L8446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8437-L8446) · [Before (L25360-L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25360-L25491)

```diff
-             tT = cT(1195),
-             hT = cT(1061),
-             NT = cT(4575),
-             QT = cT(1099);
-           const ST = ["\ud83c\udf4e", "\ud83d\ude80", "\ud83c\udfb8", "\ud83c\udf0d", "\ud83d\udcda", "\ud83c\udfa8", "\ud83c\udfaf", "\u26a1", "\ud83d\udd25", "\ud83d\udc8e", "\ud83c\udf08", "\ud83c\udfc6", "\ud83c\udfb6", "\ud83c\udfad", "\ud83d\udcf7", "\ud83d\udee0\ufe0f", "\ … [truncated]
-             DT = {
-               ...CT.g,
-               onPointerDown: TT => {
-                 const kT = TT.target.closest("[role=button], button");
-                 null !== kT && TT.currentTarget.contains(kT) || CT.g.onPointerDown(TT)
-               }
-             },
-             aT = (0, KT.memo)((function(TT) {
-               var kT, cT;
-               let {
-                 customLobby: IT,
- ... (116 more removed lines; see GitHub link above)
+             Aq = gq(106),
+             cq = gq(114),
+             uq = gq(118),
+             Bq = gq(38),
+             Wq = gq(136),
+             Nq = gq(166),
+             aq = gq(171),
+             Vq = gq(128);
+           Wq.q && !Wq.o[Wq.q].enabled && console.error(`Selected subsiteUsed ${Wq.q} but it is not enabled`);
+           let dq = null;
```

#### 531. `bundles/bloxd.io/main.js` (Changed code · before: `L25494-L25497` → after: `L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8449) · [Before (L25494-L25497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25494-L25497)

```diff
-             return (0, QT.jsx)("div", {
-               className: "CustomLobbyLoader",
-               children: (0, QT.jsx)(IT.d, {})
-             })
+             return null === dq && (dq = xq().getParser(navigator.userAgent)), dq
```

#### 532. `bundles/bloxd.io/main.js` (Changed code · before: `L25503-L25507` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8453) · [Before (L25503-L25507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25503-L25507)

```diff
-             const kT = [...TT],
-               cT = [];
-             for (let lT = 0; lT < PT; lT++)
-               for (let TT = 0; TT < wT; TT++) cT.push(kT[(TT * PT + lT) % kT.length]);
-             return cT.join("\n")
+             return [`Browser: ${oq()}`, `Version: ${Pq()}`, `Platform: ${navigator.platform}`, `Platform Type: ${nq()}`, `Input Type: ${(0,cq.d)()}`].join(qq)
```

#### 533. `bundles/bloxd.io/main.js` (Changed code · before: `L25547` → after: `L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8457) · [Before (L25547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25547)

```diff
-             return xT.isEnabled
+             return jq().getBrowserName()
```

#### 534. `bundles/bloxd.io/main.js` (Changed code · before: `L25551` → after: `L8461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8461) · [Before (L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25551)

```diff
-             return xT.isFullscreen || IT
+             return jq().getBrowserVersion()
```

#### 535. `bundles/bloxd.io/main.js` (Changed code · before: `L25555-L25556` → after: `L8465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8465) · [Before (L25555-L25556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25555-L25556)

```diff
-             const TT = jT() ? xT.element : null;
-             return (0, fT.R)(TT) || TT === document.documentElement ? null : TT
+             return jq().getResult()
```

#### 536. `bundles/bloxd.io/main.js` (Changed code · before: `L25560` → after: `L8469-L8471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8469-L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8469-L8471) · [Before (L25560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25560)

```diff
-             return xT.isFullscreen
+             const qq = bq(),
+               Eq = jq().getOSName(!0).replaceAll(" ", "_");
+             return "macos" !== qq && "ios" !== qq && Eq === qq ? jq().getOSVersion() : void 0
```

#### 537. `bundles/bloxd.io/main.js` (Changed code · before: `L25564-L25567` → after: `L8476-L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8476-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8476-L8477) · [Before (L25564-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25564-L25567)

```diff
-             const [TT, kT] = (0, lT.useState)(vT());
-             return (0, yT.g)("displaymodeFullscreenChange", (TT => {
-               kT(TT)
-             })), TT
+             var qq;
+             return (null !== (qq = navigator.languages) && void 0 !== qq && qq.length ? navigator.languages : [navigator.language]).every((qq => qq.toLowerCase().startsWith("en"))) && parseInt(Pq(), 10) >= tq
```

#### 538. `bundles/bloxd.io/main.js` (Changed code · before: `L25571-L25588` → after: `L8481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8481) · [Before (L25571-L25588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25571-L25588)

```diff
-             const TT = (0, lT.useRef)(null),
-               [kT, cT] = (0, lT.useState)(!1);
-             (0, lT.useEffect)((() => {
-               if (!jT()) return;
-               const kT = () => {
-                 cT(null !== TT.current && xT.element === TT.current)
-               };
-               return xT.on("change", kT), () => {
-                 xT.off("change", kT)
-               }
-             }), []);
-             return {
-               ref: TT,
-               isFullscreen: kT,
-               toggleElementFullscreen: () => {
-                 jT() && null !== TT.current && (xT.element === TT.current ? xT.exit().catch(FT) : xT.request(TT.current).catch(FT))
- ... (2 more removed lines; see GitHub link above)
+             return jq().getPlatformType() || ("touchOnly" === (0, cq.d)() ? "tablet" : "desktop")
```

#### 539. `bundles/bloxd.io/main.js` (Changed code · before: `L25592` → after: `L8485-L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8485-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8485-L8486) · [Before (L25592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25592)

```diff
-             hT() ? aT() : DT()
+             const qq = jq().getPlatformType();
+             return "mobile" === qq || "tablet" === qq
```

#### 540. `bundles/bloxd.io/main.js` (Changed code · before: `L25596-L25603` → after: `L8490-L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8490-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8490-L8495) · [Before (L25596-L25603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25596-L25603)

```diff
-             jT() && (xT.request(void 0, {
-               navigationUI: "hide"
-             }).catch(FT), function() {
-               const TT = window.screen.orientation;
-               null !== TT && void 0 !== TT && TT.lock && TT.lock("landscape").catch((() => {
-                 console.log("TOGGLE FULLSCREEN: Failed to lock screen to landscape")
-               }))
-             }())
+             const qq = vq();
+             if ("desktop" === qq) {
+               const qq = bq();
+               if ("ios" === qq || "android" === qq) return "tablet"
+             }
+             return qq
```

#### 541. `bundles/bloxd.io/main.js` (Changed code · before: `L25607-L25611` → after: `L8499-L8500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8499-L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8499-L8500) · [Before (L25607-L25611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25607-L25611)

```diff
-             jT() && xT.exit().catch(FT)
-           }
- 
-           function FT(TT) {
-             console.log("Fullscreen change refused:", TT)
+             const qq = jq().getOSName(!0).replaceAll(" ", "_");
+             return "macos" === qq && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== qq || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, cq.d)() ? Yq.t.includes(qq) ? qq : "other" : "android"
```

#### 542. `bundles/bloxd.io/main.js` (Changed code · before: `L25615-L25708` → after: `L8504-L8505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8504-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8504-L8505) · [Before (L25615-L25708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25615-L25708)

```diff
-             const TT = navigator.keyboard;
-             return (0, fT.R)(TT) || (0, fT.R)(TT.lock) ? null : TT
-           }
-           xT.isEnabled && (xT.on("change", CT), xT.on("error", CT)), window.matchMedia("(display-mode: fullscreen)").addEventListener("change", (TT => {
-             let {
-               matches: kT
-             } = TT;
-             IT = kT, CT()
-           }))
-         },
-         3446: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => OT
-           });
-           var lT = cT(328),
-             MT = (cT(71), cT(1921)),
- ... (78 more removed lines; see GitHub link above)
+             const qq = Aq.currentUrl.getSearchParam("trafficSource");
+             return Yq.C.includes(qq) ? qq : "other"
```

#### 543. `bundles/bloxd.io/main.js` (Changed code · before: `L25712-L25835` → after: `L8509-L8510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8509-L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8509-L8510) · [Before (L25712-L25835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25712-L25835)

```diff
-             return (0, MT.i)(fT)
-           }
- 
-           function IT(TT) {
-             return "homeRow " + (TT && !(0, MT.h)() ? "long" : "square")
-           }
-           const AT = (0, lT.forwardRef)((function(TT, kT) {
-             let {
-               gameWidth: cT,
-               useLongRatio: lT,
-               className: MT,
-               children: OT
-             } = TT;
-             const fT = function(TT, kT) {
-               const cT = (0, KT.i)() && !TT,
-                 lT = xT(),
- ... (108 more removed lines; see GitHub link above)
+             const qq = vq();
+             return !pq() && ("mobile" === qq || "tablet" === qq || "touchOnly" === (0, cq.d)() || Aq.currentUrl.hasSearchParam("mobile"))
```

#### 544. `bundles/bloxd.io/main.js` (Changed code · before: `L25838-L25847` → after: `L8513-L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8513-L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8513-L8514) · [Before (L25838-L25847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25838-L25847)

```diff
-           function nT(TT) {
-             if (zT.e.includes(TT)) return [];
-             const kT = VT.e[TT],
-               cT = [(0, JT.k)(TT, (0, JT.e)(kT))];
-             for (const MT of null !== (lT = kT.listedVariations) && void 0 !== lT ? lT : []) {
-               var lT;
-               const TT = VT.e[MT];
-               TT && cT.push((0, JT.k)(MT, (0, JT.q)(TT)))
-             }
-             return cT
+           function fq() {
+             return pq() && (Sq() || Aq.currentUrl.hasSearchParam("mobile"))
```

#### 545. `bundles/bloxd.io/main.js` (Changed code · before: `L25854-L25860` → after: `L8517-L8518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8517-L8518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8517-L8518) · [Before (L25854-L25860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25854-L25860)

```diff
-           function Tk(TT) {
-             const {
-               playsPerDay: kT,
-               avgPlaytimeMinutes: cT,
-               retention: lT
-             } = (0, LT.g)(TT), MT = [];
-             return null !== kT && MT.push(`${(0,LT.b)(kT)} plays/day`), null !== cT && MT.push(`${(0,LT.c)(cT)} avg`), null !== lT && MT.push(`${(0,LT.f)(lT)}x retention`), MT
+           function Mq() {
+             return Zq() || fq()
```

#### 546. `bundles/bloxd.io/main.js` (Changed code · before: `L25864-L25877` → after: `L8522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8522) · [Before (L25864-L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25864-L25877)

```diff
-             let {
-               label: kT,
-               value: cT
-             } = TT;
-             return (0, sT.jsxs)("div", {
-               className: "GameThumbnailDiscoverabilityHeadline",
-               children: [(0, sT.jsx)("span", {
-                 className: "GameThumbnailDiscoverabilityHeadlineLabel",
-                 children: kT
-               }), (0, sT.jsx)("span", {
-                 className: "GameThumbnailDiscoverabilityHeadlineValue",
-                 children: cT
-               })]
-             })
+             return lq.s.some((Eq => Eq === qq))
```

#### 547. `bundles/bloxd.io/main.js` (Changed code · before: `L25880-L25890` → after: `L8525-L8526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8525-L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8525-L8526) · [Before (L25880-L25890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25880-L25890)

```diff
-           function ck(TT) {
-             let {
-               chips: kT
-             } = TT;
-             return 0 === kT.length ? null : (0, sT.jsx)("div", {
-               className: "GameThumbnailDiscoverabilityChips",
-               children: kT.map(((TT, kT) => (0, sT.jsx)("span", {
-                 className: "GameThumbnailDiscoverabilityChip",
-                 children: TT
-               }, kT)))
-             })
+           function zq() {
+             return Tq(Wq.n)
```

#### 548. `bundles/bloxd.io/main.js` (Changed code · before: `L25893-L25917` → after: `L8529-L8530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8529-L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8529-L8530) · [Before (L25893-L25917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25893-L25917)

```diff
-           function lk(TT) {
-             let {
-               discoverability: kT
-             } = TT;
-             const {
-               headlineRank: cT,
-               otherRanks: lT
-             } = (0, LT.o)(kT), MT = lT.map((TT => `${TT.rankCategory} #${TT.rank}`));
-             return (0, sT.jsxs)("div", {
-               className: "GameThumbnailDiscoverability",
-               children: [void 0 !== kT.discoverabilityScore && (0, sT.jsx)(kk, {
-                 label: "discoverabilityScore",
-                 value: (0, FT.P)(Math.round(kT.discoverabilityScore))
-               }), void 0 !== kT.engagementScore && (0, sT.jsx)(kk, {
-                 label: "engagementScore",
-                 value: (0, FT.P)(Math.round(kT.engagementScore))
- ... (9 more removed lines; see GitHub link above)
+           function Sq() {
+             return Zq() || "mouseOnly" !== (0, cq.d)() || navigator.maxTouchPoints > 0
```

#### 549. `bundles/bloxd.io/main.js` (Changed code · before: `L25920-L25944` → after: `L8533-L8534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8533-L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8533-L8534) · [Before (L25920-L25944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25920-L25944)

```diff
-           function Mk(TT) {
-             let {
-               gameNameWithVariation: kT
-             } = TT;
-             const cT = function(TT) {
-               const {
-                 userContext: kT,
-                 isUserContextUpdating: cT
-               } = (0, dT.b)(), [MT, KT] = (0, lT.useState)(null), OT = !1 === cT && kT.playerHasRank("developer") ? (0, qT.h)(TT, !0) : null;
-               return (0, lT.useEffect)((() => {
-                 if (null === OT) return;
-                 let TT = !1;
-                 return XT.d.getGamesByAnalyticsIds(kT, [OT]).then((kT => {
-                   var cT;
-                   TT || KT(null !== (cT = kT[OT]) && void 0 !== cT ? cT : null)
-                 })).catch((TT => {
- ... (9 more removed lines; see GitHub link above)
+           function pq() {
+             return /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform
```

#### 550. `bundles/bloxd.io/main.js` (Changed code · before: `L25948-L25976` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8568) · [Before (L25948-L25976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25948-L25976)

```diff
-             let {
-               schematicId: kT,
-               favouriteGames: cT,
-               onSetFavourite: MT
-             } = TT;
-             const {
-               userContext: KT,
-               isUserContextUpdating: OT
-             } = (0, dT.b)(), [yT, fT] = (0, lT.useState)(cT.includes(kT)), xT = (0, lT.useRef)(!1);
-             return (0, lT.useEffect)((() => {
-               fT(cT.includes(kT))
-             }), [cT, kT]), (0, sT.jsx)(aT.s, {
-               onClick: () => {
-                 ! function() {
-                   if (xT.current || OT) return;
-                   xT.current = !0;
- ... (13 more removed lines; see GitHub link above)
+             null === kq && qq && "unknown vendor" !== qq.toLowerCase() && (Rq = qq)
```

#### 551. `bundles/bloxd.io/main.js` (Changed code · before: `L25978-L25982` → after: `L8570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8570) · [Before (L25978-L25982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25978-L25982)

```diff
-           var Ok = cT(1530),
-             yk = cT(3527),
-             fk = cT(3539),
-             xk = cT(1478),
-             Ik = cT(3081);
+           let Fq = null;
```

#### 552. `bundles/bloxd.io/main.js` (Changed code · before: `L25985-L25998` → after: `L8573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8573) · [Before (L25985-L25998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L25985-L25998)

```diff
-             let {
-               gameWidth: kT,
-               useLongRatio: cT = !1
-             } = TT;
-             const MT = (0, lT.useRef)(null);
-             return (0, bT.b)(MT), (0, sT.jsx)(IT.e, {
-               gameWidth: kT,
-               useLongRatio: cT,
-               className: "GameThumbnailPlaceholderContainer",
-               children: (0, sT.jsx)("div", {
-                 ref: MT,
-                 className: "GameThumbnailPlaceholderInner"
-               })
-             })
+             Fq = qq
```

#### 553. `bundles/bloxd.io/main.js` (Changed code · before: `L26001-L26009` → after: `L8576-L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8576-L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8576-L8577) · [Before (L26001-L26009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26001-L26009)

```diff
-           function Ck(TT, kT) {
-             let {
-               source: cT,
-               ...lT
-             } = TT, {
-               source: MT,
-               ...KT
-             } = kT;
-             return (0, vT.de)(cT, MT) && (0, vT.de)(lT, KT)
+           function Xq() {
+             return Fq
```

#### 554. `bundles/bloxd.io/main.js` (Changed code · before: `L26011-L26020` → after: `L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8579) · [Before (L26011-L26020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26011-L26020)

```diff
-           const jk = (0, lT.memo)((function(TT) {
-             const kT = WT(TT.source);
-             return null !== kT ? (0, sT.jsx)(vk, {
-               ...TT,
-               schematicId: kT
-             }) : (0, sT.jsx)(tk, {
-               ...TT,
-               fetchedCustomGame: null
-             })
-           }), Ck);
+           let wq = null;
```

#### 555. `bundles/bloxd.io/main.js` (Changed code · before: `L26023-L26050` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8582) · [Before (L26023-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26023-L26050)

```diff
-             let {
-               schematicId: kT,
-               ...cT
-             } = TT;
-             const MT = function(TT) {
-               const {
-                 userContext: kT,
-                 isUserContextUpdating: cT
-               } = (0, dT.b)(), [MT, KT] = (0, lT.useState)(null), [OT, yT] = (0, lT.useState)(!1);
-               return (0, lT.useEffect)((() => {
-                 if (!1 !== cT) return;
-                 let lT = !1;
-                 return yT(!1), XT.d.getGame(kT, TT).then((TT => {
-                   lT || KT(TT)
-                 })).catch((TT => {
-                   console.error("Failed to get custom game info for thumbnail", TT), lT || yT(!0)
- ... (12 more removed lines; see GitHub link above)
+             wq = qq
```

#### 556. `bundles/bloxd.io/main.js` (Changed code · before: `L26053-L26183` → after: `L8585-L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8585-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8585-L8587) · [Before (L26053-L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26053-L26183)

```diff
-           function tk(TT) {
-             var kT, cT, KT;
-             let {
-               source: vT,
-               disabled: bT = !1,
-               disabledReason: zT,
-               gameWidth: XT,
-               useLongRatio: dT,
-               loading: LT = !1,
-               isSelected: qT = !1,
-               onClick: Tk = null,
-               entrySource: kk,
-               favouriteGames: ck = null,
-               onSetFavourite: Ck = () => {},
-               hideDescription: jk = !1,
-               hideCcu: vk = !1,
- ... (115 more removed lines; see GitHub link above)
+           function Cq() {
+             return wq
+           }
```

#### 557. `bundles/bloxd.io/main.js` (Changed code · before: `L26185-L26368` → after: `L8589-L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8589-L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8589-L8590) · [Before (L26185-L26368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26185-L26368)

```diff
-             function ik() {
-               null !== pk && (0, yk.l)(pk)
-             }
-             const qk = (Bk || Yk || gk || Uk) && (0, sT.jsxs)("div", {
-                 className: "AvailableGameChipList",
-                 children: [Bk && (0, sT.jsx)("div", {
-                   className: "AvailableGameCCU SmallTextBold AnimFadeIn",
-                   children: (0, sT.jsxs)("div", {
-                     className: "AvailableGameCCUInner",
-                     children: [(0, sT.jsx)(pT.e, {
-                       name: "user"
-                     }), " ", (0, FT.P)(ak.ccu)]
-                   })
-                 }), Yk && (0, sT.jsx)(Kk, {
-                   schematicId: uk,
-                   favouriteGames: ck,
- ... (168 more removed lines; see GitHub link above)
+           function Iq() {
+             return "mobile" !== nq() && "arm" === OE() ? 2 : 1
```

#### 558. `bundles/bloxd.io/main.js` (Changed code · before: `L26613-L26615` → after: `L8595-L8599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8595-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8595-L8599) · [Before (L26613-L26615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26613-L26615)

```diff
-             NT.forEach((TT => {
-               TT()
-             }))
+             if (Mq()) {
+               const qq = (0, Vq.p)();
+               return void 0 === qq ? "not_probed" : (0, aq.c)(qq)
+             }
+             return eq ??= (0, aq.c)((0, Vq.w)()), eq
```

#### 559. `bundles/bloxd.io/main.js` (Changed code · before: `L26624-L26640` → after: `L8602-L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8602-L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8602-L8604) · [Before (L26624-L26640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26624-L26640)

```diff
-           function DT(TT) {
-             let {
-               iconOnly: kT = !1
-             } = TT;
-             const {
-               t: cT
-             } = (0, yT.B)(), lT = (0, vT.useNavigatePreserveSearch)(), DT = function() {
-               const [TT, kT] = (0, tT.useState)(null !== hT);
-               return (0, tT.useEffect)((() => {
-                 const TT = () => {
-                   kT(null !== hT)
-                 };
-                 return NT.add(TT), TT(), () => {
-                   NT.delete(TT)
-                 }
-               }), []), TT
- ... (1 more removed lines; see GitHub link above)
+           function qE() {
+             return !0 === navigator.webdriver
+           }
```

#### 560. `bundles/bloxd.io/main.js` (Changed code · before: `L26642-L26755` → after: `L8606-L8607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8606-L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8606-L8607) · [Before (L26642-L26755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26642-L26755)

```diff
-             function FT(TT, cT) {
-               return kT ? TT : cT
-             }
-             return (0, ST.jsxs)("div", {
-               className: MT()("HomeLinkButtons", {
-                 HomeLinkButtonsIconOnly: kT
-               }),
-               children: [(0, ST.jsx)(IT.c, {
-                 delayShow: 0,
-                 hoverOnly: !0,
-                 tooltipInner: (0, ST.jsx)("div", {
-                   children: FT(cT("general:search"), "Press / to search")
-                 }),
-                 children: (0, ST.jsxs)(xT.P, {
-                   className: "HomeLinkButton HomeLinkButtonSearch",
-                   showPress: !0,
- ... (98 more removed lines; see GitHub link above)
+           function EE() {
+             return navigator.userAgent.includes("Windows NT 10")
```

#### 561. `bundles/bloxd.io/main.js` (Changed code · before: `L26780-L26848` → after: `L8611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8611) · [Before (L26780-L26848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26780-L26848)

```diff
-             var TT, kT;
-             const {
-               t: MT
-             } = (0, yT.B)(), {
-               gameState: ST
-             } = (0, xT.n)(["gameState"]), DT = (0, vT.o)(), aT = (0, jT.e)("connectedGame", (TT => TT.gameNameWithVariation)), FT = (0, lT.useRef)(0);
-             let rT = (0, IT.m)() ? MT((0, CT.n)("ninetyNineNights").title) : `${(null===(TT=(0,AT.g)())||void 0===TT?void 0:TT.title)||MT(null===(kT=(0,CT.n)(aT))||void 0===kT?void 0:kT.title)||"Bloxd"}`;
-             const PT = rT.split(" ");
-             return PT.length > 1 && (rT = PT[0] + "\n" + PT.slice(1).join(" ")), (0, QT.jsxs)(tT.LinkPreserveSearch, {
-               to: "/",
-               className: "TitleContainer",
-               showPress: !0,
-               onClick: () => {
-                 10 === ++FT.current && cT.e(184).then((() => cT.t(9197, 23))).then((TT => {
-                   new(0, TT.default);
-                   const kT = document.getElementsByClassName("vc-cmd");
- ... (53 more removed lines; see GitHub link above)
+             return "Blink" === jq().getEngineName()
```

#### 562. `bundles/bloxd.io/main.js` (Changed code · before: `L26865-L26870` → after: `L8614-L8615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8614-L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8614-L8615) · [Before (L26865-L26870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26865-L26870)

```diff
-           function AT(TT, kT, cT) {
-             if (TT()) return void cT();
-             const lT = (0, fT.s)((() => {
-               TT() ? cT() : kT()
-             }));
-             return kT(), lT
+           function YE() {
+             return "WebKit" === jq().getEngineName() || "ios" === bq()
```

#### 563. `bundles/bloxd.io/main.js` (Changed code · before: `L26921-L26929` → after: `L8618-L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8618-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8618-L8639) · [Before (L26921-L26929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26921-L26929)

```diff
-           function jT(TT, kT) {
-             let {
-               style: cT,
-               ...lT
-             } = TT, {
-               style: MT,
-               ...KT
-             } = kT;
-             return (0, OT.de)(lT, KT) && (0, OT.de)(cT, MT)
+           function lE() {
+             if ("brave" in navigator) return "brave";
+             const qq = oq();
+             return "Microsoft Edge" === qq ? "edge" : qq.startsWith("Opera") ? "opera" : "Chrome" === qq || "Chromium" === qq ? "chrome" : "Firefox" === qq ? "firefox" : gE() ? "otherChromium" : "other"
+           }
+ 
+           function OE() {
+             var qq, Eq, gq;
+             if ("undefined" === typeof document) return "other";
+             if (null !== kq) return kq;
+             const Yq = null !== (qq = null !== (Eq = Rq) && void 0 !== Eq ? Eq : null === (gq = (0, Vq.w)()) || void 0 === gq ? void 0 : gq.vendor) && void 0 !== qq ? qq : null;
+             return null === Yq ? "other" : (kq = xE(Yq), kq)
+           }
+ 
+           function mE() {
+             if (null === kq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 564. `bundles/bloxd.io/main.js` (Changed code · before: `L26942-L26957` → after: `L8643-L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8643-L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L8643-L8998) · [Before (L26942-L26957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L26942-L26957)

```diff
-             let {
-               iconName: kT,
-               iconCountPerGroup: cT,
-               animation: OT,
-               midShowerStart: yT = !1,
-               customClass: fT
-             } = TT;
-             const [xT, IT] = (0, lT.useState)({});
-             return (0, lT.useEffect)((() => {
-               const TT = {};
-               for (const kT of Array.from(Array(3).keys())) {
-                 TT[kT] = [];
-                 for (let lT = 0; lT < cT; lT++) TT[kT].push({
-                   left: 100 * Math.random() + "%",
-                   animationDelay: 20 * Math.random() * (yT ? -1 : 1) + "s"
-                 })
+             let Eq = qq;
+             const gq = [...Eq.matchAll(/\(([^)]+)\)/g)];
+             if (gq.length > 0) {
+               Eq = gq[gq.length - 1][1].trim()
+             }
+             Eq = Eq.toLowerCase();
+             const Yq = ["inc.", "open source technology center", "electronics co., ltd.", "/x.org", "technologies inc.", "corporation"];
+             for (const lq of Yq)
+               if (Eq.endsWith(lq)) {
+                 Eq = Eq.slice(0, -lq.length).trimEnd();
+                 break
+               } return "imagination technologies" !== Eq && "imagination" !== Eq && "img-tec" !== Eq || (Eq = "powervr"), "nouveau" === Eq && (Eq = "nvidia"), "ati" !== Eq && "ati technologies" !== Eq || (Eq = "amd"), "freedreno" === Eq && (Eq = "qualcomm"), "0x344c5250" === Eq & … [truncated]
+           }
+ 
+           function AE() {
+             return "gpu" in navigator
+ ... (340 more added lines; see GitHub link above)
```

#### 565. `bundles/bloxd.io/main.js` (Changed code · before: `L27025-L27033` → after: `L9001-L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9001-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9001-L9012) · [Before (L27025-L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27025-L27033)

```diff
-             tT = {
-               id: "LobbyManage",
-               icon: "users-gear",
-               noaAction: null,
-               open: () => {
-                 (0, IT.g)({
-                   source: "hud_icon",
-                   page: "players"
-                 })
+             90: function(qq, Eq, gq) {
+               Eq.__esModule = !0, Eq.default = void 0;
+               var Yq, lq = (Yq = gq(91)) && Yq.__esModule ? Yq : {
+                   default: Yq
+                 },
+                 Oq = gq(18);
+ 
+               function mq(qq, Eq) {
+                 for (var gq = 0; gq < Eq.length; gq++) {
+                   var Yq = Eq[gq];
+                   Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Yq.key, Yq)
+                 }
```

#### 566. `bundles/bloxd.io/main.js` (Changed code · before: `L27036-L27112` → after: `L9046-L9052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9046-L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9046-L9052) · [Before (L27036-L27112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27036-L27112)

```diff
-             hT = {
-               id: "Emotes",
-               icon: "face-smile",
-               noaAction: "OpenEmoteWheel",
-               open: () => {
-                 OT.k.nt("requestToggleEmoteWheel")
-               },
-               hudId: "emotes"
-             },
-             NT = {
-               id: "InviteLink",
-               icon: "user-plus",
-               noaAction: "OpenInviteLink",
-               open: () => {
-                 OT.k.nt("toggleMenu", "inviteLink")
-               },
- ... (61 more removed lines; see GitHub link above)
+             91: function(qq, Eq, gq) {
+               Eq.__esModule = !0, Eq.default = void 0;
+               var Yq = Aq(gq(92)),
+                 lq = Aq(gq(93)),
+                 Oq = Aq(gq(94)),
+                 mq = Aq(gq(95)),
+                 xq = Aq(gq(17));
```

#### 567. `bundles/bloxd.io/main.js` (Changed code · before: `L27114-L27125` → after: `L9054-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9054-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9054-L9056) · [Before (L27114-L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27114-L27125)

```diff
-           function IT(TT) {
-             var kT;
-             let {
-               bar: cT
-             } = TT;
-             const lT = cT.fraction < fT.e ? "Low" : cT.fraction < fT.h ? "Mid" : null;
-             return (0, xT.jsx)("div", {
-               className: yT()("ItemSlotBar", lT),
-               children: (0, xT.jsx)("i", {
-                 style: {
-                   width: 100 * cT.fraction + "%",
-                   backgroundColor: null !== (kT = cT.colour) && void 0 !== kT ? kT : void 0
+               function Aq(qq) {
+                 return qq && qq.__esModule ? qq : {
+                   default: qq
```

#### 568. `bundles/bloxd.io/main.js` (Changed code · before: `L27232-L27289` → after: `L9059-L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9059-L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9059-L9156) · [Before (L27232-L27289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27232-L27289)

```diff
-             })
-           }
-           const FT = new Map;
-           let rT = -1;
-           const PT = new Map;
-           let wT = null;
- 
-           function mT(TT) {
-             let {
-               target: kT
-             } = TT;
-             if (kT instanceof Node)
-               for (const [cT, lT] of PT) kT.contains(cT) && lT()
-           }
- 
-           function bT(TT, kT) {
- ... (42 more removed lines; see GitHub link above)
+               var cq = function() {
+                 function qq(qq, Eq) {
+                   if (void 0 === Eq && (Eq = !1), null == qq || "" === qq) throw new Error("UserAgent parameter can't be empty");
+                   this._ua = qq, this.parsedResult = {}, !0 !== Eq && this.parse()
+                 }
+                 var Eq = qq.prototype;
+                 return Eq.getUA = function() {
+                   return this._ua
+                 }, Eq.test = function(qq) {
+                   return qq.test(this._ua)
+                 }, Eq.parseBrowser = function() {
+                   var qq = this;
+                   this.parsedResult.browser = {};
+                   var Eq = xq.default.find(Yq.default, (function(Eq) {
+                     if ("function" == typeof Eq.test) return Eq.test(qq);
+                     if (Eq.test instanceof Array) return Eq.test.some((function(Eq) {
+ ... (82 more added lines; see GitHub link above)
```

#### 569. `bundles/bloxd.io/main.js` (Changed code · before: `L27291-L27293` → after: `L9158-L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9158-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9158-L9377) · [Before (L27291-L27293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27291-L27293)

```diff
-                     of TT) {
-                     var kT;
-                     null === (kT = PT.get(cT)) || void 0 === kT || kT()
+                     var uq = xq.default.find(mq, (function(qq) {
+                       return Eq.isPlatform(qq)
+                     }));
+                     if (uq) {
+                       var Bq = this.satisfies(gq[uq]);
+                       if (void 0 !== Bq) return Bq
+                     }
+                   }
+                   if (Oq > 0) {
+                     var Wq = Object.keys(lq),
+                       Nq = xq.default.find(Wq, (function(qq) {
+                         return Eq.isBrowser(qq, !0)
+                       }));
+                     if (void 0 !== Nq) return this.compareVersion(lq[Nq])
+                   }
+                 }, Eq.isBrowser = function(qq, Eq) {
+ ... (204 more added lines; see GitHub link above)
```

#### 570. `bundles/bloxd.io/main.js` (Changed code · before: `L27295-L27325` → after: `L9379-L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9379-L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9379-L9386) · [Before (L27295-L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27295-L27325)

```diff
-                 })), document.addEventListener("animationend", mT, !0), document.addEventListener("transitionend", mT, !0)), PT.set(TT, kT), wT.observe(TT, ST ? {
-                   box: "device-pixel-content-box"
-                 } : void 0), () => {
-                   PT.delete(TT), wT.unobserve(TT)
-                 }
-               }(lT, IT);
-               return () => {
-                 OT = -1, clearTimeout(KT), CT()
-               }
-             }), [TT, kT]), {
-               iconRef: cT,
-               iconUrl: lT
-             }
-           }
- 
-           function zT(TT) {
- ... (15 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/msie|trident/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "Internet Explorer"
+                       },
+                       gq = lq.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
```

#### 571. `bundles/bloxd.io/main.js` (Changed code · before: `L27327-L27710` → after: `L9388-L9392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9388-L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9388-L9392) · [Before (L27327-L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27327-L27710)

```diff
-                 })
-               }), (0, xT.jsx)("img", {
-                 src: cT,
-                 className: "TwoDItemGrayscaleVisiblePng",
-                 alt: kT
-               })]
-             }) : (0, xT.jsx)("div", {
-               className: "TwoDImageIcon",
-               style: {
-                 backgroundImage: jT(cT)
-               }
-             })
-           }
- 
-           function JT(TT) {
-             let {
- ... (368 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/\sedg\//i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "Microsoft Edge"
```

#### 572. `bundles/bloxd.io/main.js` (Changed code · before: `L27712-L27967` → after: `L9394-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9394-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9394-L9413) · [Before (L27712-L27967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27712-L27967)

```diff
-                       confirmText: "auth:unlink",
-                       cancelText: "general:cancel",
-                       destructive: !0
-                     }).getResult() && (CT(!0), await (0, FT.h)(kT).catch((TT => {
-                       var cT;
-                       console.error(`Failed to unlink ${kT}:`, TT), ST.NotificationProvider.showAlertPopup({
-                         title: null !== (cT = TT.errorMessageForUser) && void 0 !== cT ? cT : "Error",
-                         confirmText: "general:ok"
-                       })
-                     })).finally((() => {
-                       CT(!1)
-                     })))
-                   }()
-                 },
-                 children: xT("auth:unlink")
-               }), vT && !tT && (0, zT.jsxs)("div", {
- ... (240 more removed lines; see GitHub link above)
+                       gq = lq.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: [/edg([ea]|ios)/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "Microsoft Edge"
+                       },
+                       gq = lq.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: [/vivaldi/i],
+                   describe: function(qq) {
+                     var Eq = {
+ ... (4 more added lines; see GitHub link above)
```

#### 573. `bundles/bloxd.io/main.js` (Changed code · before: `L27969-L28857` → after: `L9415-L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9415-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9415-L9431) · [Before (L27969-L28857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L27969-L28857)

```diff
-                 }), [TT, kT]), cT
-               }(CT, void 0 !== cT);
-             return (0, fT.b)(CT, kT && void 0 === cT), (0, xT.jsxs)("div", {
-               ref: CT,
-               className: MT()(`LogoLoader LogoLoader${AT}`, {
-                 LogoLoaderIsLoading: kT,
-                 LogoLoaderIsProgressBar: void 0 !== cT
-               }),
-               children: [IT && (0, xT.jsx)("img", {
-                 className: "LogoLoaderInner",
-                 src: OT.featureFlags.useHalloweenTheme ? "/halloweenLogo.webp" : "/favicon.svg",
-                 alt: ""
-               }), (0, xT.jsx)("div", {
-                 className: "LogoLoaderLoadingBar"
-               }), void 0 !== cT && (() => {
-                 let TT = null;
- ... (873 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/seamonkey/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "SeaMonkey"
+                       },
+                       gq = lq.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: [/sailfish/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "Sailfish"
+                       },
+                       gq = lq.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, qq);
+ ... (1 more added lines; see GitHub link above)
```

#### 574. `bundles/bloxd.io/main.js` (Changed code · before: `L28859-L29295` → after: `L9433-L9563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9433-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9433-L9563) · [Before (L28859-L29295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L28859-L29295)

```diff
-                 },
-                 showKeys: cT,
-                 hide: lT
-               })]
-             })
-           }
-         },
-         2390: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => fT,
-             d: () => xT
-           });
-           var lT = cT(1333),
-             MT = cT(1195),
-             KT = cT(2395),
-             OT = cT(2408),
- ... (421 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/silk/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "Amazon Silk"
+                       },
+                       gq = lq.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: [/phantom/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "PhantomJS"
+                       },
+                       gq = lq.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, qq);
+ ... (115 more added lines; see GitHub link above)
```

#### 575. `bundles/bloxd.io/main.js` (Changed code · before: `L29297-L29301` → after: `L9565-L9597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9565-L9597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9565-L9597) · [Before (L29297-L29301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29297-L29301)

```diff
-                   onDismiss: () => {
-                     (0, jT.b)(TT.payload) && (0, GT.reportAnalyticsClick)({
-                       id: "prompt.dismiss",
-                       value: `tray:${TT.payload.kind}`
-                     }), yT.f.dismiss(TT.id)
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "Android Browser"
+                       },
+                       gq = lq.default.getFirstMatch(Oq, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: [/playstation 4/i],
+                   describe: function(qq) {
+                     var Eq = {
+                         name: "PlayStation 4"
+                       },
+                       gq = lq.default.getFirstMatch(Oq, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+ ... (17 more added lines; see GitHub link above)
```

#### 576. `bundles/bloxd.io/main.js` (Changed code · before: `L29303-L29346` → after: `L9599-L9605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9599-L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9599-L9605) · [Before (L29303-L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29303-L29346)

```diff
-                 }, TT.id)))
-               })]
-             }), document.body)
-           }
-           var ZT = cT(1486);
-           const uT = 9;
- 
-           function XT(TT) {
-             let {
-               placement: kT
-             } = TT;
-             const {
-               t: cT
-             } = (0, OT.B)(), {
-               unreadCount: MT
-             } = (0, yT.i)(), [IT, AT] = (0, lT.useState)(null), CT = (0, lT.useRef)(null), jT = (0, lT.useRef)(null), vT = null !== IT, tT = (0, lT.useCallback)((() => {
- ... (28 more removed lines; see GitHub link above)
+                 }];
+               Eq.default = mq, qq.exports = Eq.default
+             },
+             93: function(qq, Eq, gq) {
+               Eq.__esModule = !0, Eq.default = void 0;
+               var Yq, lq = (Yq = gq(17)) && Yq.__esModule ? Yq : {
+                   default: Yq
```

#### 577. `bundles/bloxd.io/main.js` (Changed code · before: `L29348-L29404` → after: `L9607-L9614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9607-L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9607-L9614) · [Before (L29348-L29404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29348-L29404)

```diff
-                 children: [(0, wT.jsx)(xT.e, {
-                   icon: "bell"
-                 }), hT && (0, wT.jsx)("span", {
-                   className: "NotificationBellBadge",
-                   children: MT > uT ? `${uT}+` : MT
-                 })]
-               }), vT && (0, wT.jsx)(ET, {
-                 containerRef: jT,
-                 anchorRect: IT,
-                 alignment: "socialBar" === kT ? "left" : "right",
-                 close: tT
-               })]
-             })
-           }
-         },
-         3634: (TT, kT, cT) => {
- ... (41 more removed lines; see GitHub link above)
+                 Oq = gq(18),
+                 mq = [{
+                   test: [/Roku\/DVP/],
+                   describe: function(qq) {
+                     var Eq = lq.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, qq);
+                     return {
+                       name: Oq.OS_MAP.Roku,
+                       version: Eq
```

#### 578. `bundles/bloxd.io/main.js` (Changed code · before: `L29406-L29444` → after: `L9616-L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9616-L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9616-L9670) · [Before (L29406-L29444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29406-L29444)

```diff
-                   yT[fT] = cT(fT)
-                 }
-                 for (lT = 0; lT < KT.length; lT++) yT[KT[lT]] = cT(KT[lT]);
-                 return yT
-               }(kT, MT);
-             return Object.keys(KT).forEach((function(OT) {
-               var yT = KT[OT];
-               if ((0, lT.isValidElement)(yT)) {
-                 var fT = OT in kT,
-                   xT = OT in MT,
-                   AT = kT[OT],
-                   CT = (0, lT.isValidElement)(AT) && !AT.props.in;
-                 !xT || fT && !CT ? xT || !fT || CT ? xT && fT && (0, lT.isValidElement)(AT) && (KT[OT] = (0, lT.cloneElement)(yT, {
-                   onExited: cT.bind(null, yT),
-                   in: AT.props.in,
-                   exit: IT(yT, "exit", TT),
- ... (23 more removed lines; see GitHub link above)
+                   }
+                 }, {
+                   test: [/windows phone/i],
+                   describe: function(qq) {
+                     var Eq = lq.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, qq);
+                     return {
+                       name: Oq.OS_MAP.WindowsPhone,
+                       version: Eq
+                     }
+                   }
+                 }, {
+                   test: [/windows /i],
+                   describe: function(qq) {
+                     var Eq = lq.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, qq),
+                       gq = lq.default.getWindowsVersionName(Eq);
+                     return {
+ ... (39 more added lines; see GitHub link above)
```

#### 579. `bundles/bloxd.io/main.js` (Changed code · before: `L29446-L29454` → after: `L9672-L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9672-L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9672-L9815) · [Before (L29446-L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29446-L29454)

```diff
-                   handleExited: MT,
-                   firstRender: !0
-                 }, lT
-               }(0, yT.c)(kT, TT);
-               var cT = kT.prototype;
-               return cT.componentDidMount = function() {
-                 this.mounted = !0, this.setState({
-                   contextValue: {
-                     isMounting: !1
+                   describe: function(qq) {
+                     var Eq = lq.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, qq),
+                       gq = lq.default.getAndroidVersionName(Eq),
+                       Yq = {
+                         name: Oq.OS_MAP.Android,
+                         version: Eq
+                       };
+                     return gq && (Yq.versionName = gq), Yq
+                   }
+                 }, {
+                   test: [/(web|hpw)[o0]s/i],
+                   describe: function(qq) {
+                     var Eq = lq.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, qq),
+                       gq = {
+                         name: Oq.OS_MAP.WebOS
+                       };
+ ... (128 more added lines; see GitHub link above)
```

#### 580. `bundles/bloxd.io/main.js` (Changed code · before: `L29456-L29479` → after: `L9817-L9829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9817-L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9817-L9829) · [Before (L29456-L29479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29456-L29479)

```diff
-                 })
-               }, cT.componentWillUnmount = function() {
-                 this.mounted = !1
-               }, kT.getDerivedStateFromProps = function(TT, kT) {
-                 var cT, MT, KT = kT.children,
-                   OT = kT.handleExited;
-                 return {
-                   children: kT.firstRender ? (cT = TT, MT = OT, xT(cT.children, (function(TT) {
-                     return (0, lT.cloneElement)(TT, {
-                       onExited: MT.bind(null, TT),
-                       in: !0,
-                       appear: IT(TT, "appear", cT),
-                       enter: IT(TT, "enter", cT),
-                       exit: IT(TT, "exit", cT)
-                     })
-                   }))) : AT(TT, KT, OT),
- ... (8 more removed lines; see GitHub link above)
+                 }, {
+                   test: function(qq) {
+                     var Eq = qq.test(/ipod|iphone/i),
+                       gq = qq.test(/like (ipod|iphone)/i);
+                     return Eq && !gq
+                   },
+                   describe: function(qq) {
+                     var Eq = lq.default.getFirstMatch(/(ipod|iphone)/i, qq);
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile,
+                       vendor: "Apple",
+                       model: Eq
+                     }
```

#### 581. `bundles/bloxd.io/main.js` (Changed code · before: `L29481-L29714` → after: `L9831-L9837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9831-L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9831-L9837) · [Before (L29481-L29714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29481-L29714)

```diff
-                 })))
-               }, cT.render = function() {
-                 var TT = this.props,
-                   kT = TT.component,
-                   cT = TT.childFactory,
-                   KT = (0, MT.c)(TT, ["component", "childFactory"]),
-                   OT = this.state.contextValue,
-                   yT = CT(this.state.children).map(cT);
-                 return delete KT.appear, delete KT.enter, delete KT.exit, null === kT ? lT.createElement(fT.e.Provider, {
-                   value: OT
-                 }, yT) : lT.createElement(fT.e.Provider, {
-                   value: OT
-                 }, lT.createElement(kT, KT, yT))
-               }, kT
-             }(lT.Component);
-           jT.propTypes = {}, jT.defaultProps = {
- ... (218 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile,
+                       vendor: "Nexus"
+                     }
```

#### 582. `bundles/bloxd.io/main.js` (Changed code · before: `L29716-L29780` → after: `L9839-L9843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9839-L9843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9839-L9843) · [Before (L29716-L29780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29716-L29780)

```diff
-                 },
-                 showKeys: KT,
-                 hide: OT
-               })]
-             })
-           }
- 
-           function xk(TT) {
-             let {
-               location: kT
-             } = TT;
-             const {
-               t: cT
-             } = (0, aT.B)(), lT = (0, RT.b)("inGame" === kT.status ? kT.inGameNameWithVariation : null, "inGame" === kT.status ? kT.inLobbyName : null);
-             return "inGame" !== kT.status ? (0, yk.jsx)(yk.Fragment, {
-               children: cT("notifications:friendOnlineStatus")
- ... (49 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/[^-]mobi/i],
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile
```

#### 583. `bundles/bloxd.io/main.js` (Changed code · before: `L29783-L29791` → after: `L9850-L9853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9850-L9853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9850-L9853) · [Before (L29783-L29791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29783-L29791)

```diff
-                   decline: {
-                     analyticsClick: {
-                       id: "social.decline_friend_request",
-                       value: "toast"
-                     },
-                     onClick: () => {
-                       (0, BT.g)(cT.name, !1, {
-                         source: "toast"
-                       }), KT()
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile,
+                       vendor: "BlackBerry"
```

#### 584. `bundles/bloxd.io/main.js` (Changed code · before: `L29794-L29835` → after: `L9860-L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9860-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9860-L9867) · [Before (L29794-L29835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29794-L29835)

```diff
-                   isIconOnly: yT,
-                   showKeys: MT
-                 }), !yT && (0, yk.jsx)(YT.i, {
-                   showKeys: !1,
-                   hide: KT
-                 })]
-               })]
-             })
-           }
- 
-           function Ak(TT) {
-             let {
-               toastKey: kT,
-               count: cT,
-               showKeys: MT,
-               hide: KT
- ... (26 more removed lines; see GitHub link above)
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile
+                     }
+                   }
+                 }, {
+                   test: function(qq) {
+                     return "windows phone" === qq.getBrowserName()
```

#### 585. `bundles/bloxd.io/main.js` (Changed code · before: `L29837-L29840` → after: `L9869-L9873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9869-L9873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9869-L9873) · [Before (L29837-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29837-L29840)

```diff
-                   onClick: () => {
-                     bT.e.set({
-                       openEverythingMenuName: DT.o.SOCIAL
-                     }), KT()
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile,
+                       vendor: "Microsoft"
+                     }
```

#### 586. `bundles/bloxd.io/main.js` (Changed code · before: `L29842-L29896` → after: `L9875-L9883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9875-L9883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9875-L9883) · [Before (L29842-L29896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29842-L29896)

```diff
-                 },
-                 showKeys: MT,
-                 hide: KT
-               })]
-             })
-           }
- 
-           function Ck(TT) {
-             var kT;
-             let {
-               toastKey: cT,
-               friendName: MT,
-               showKeys: KT,
-               hide: OT
-             } = TT;
-             const {
- ... (39 more removed lines; see GitHub link above)
+                 }, {
+                   test: function(qq) {
+                     var Eq = Number(String(qq.getOSVersion()).split(".")[0]);
+                     return "android" === qq.getOSName(!0) && Eq >= 3
+                   },
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.tablet
+                     }
```

#### 587. `bundles/bloxd.io/main.js` (Changed code · before: `L29898-L29944` → after: `L9885-L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9885-L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9885-L9892) · [Before (L29898-L29944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29898-L29944)

```diff
-                 },
-                 showKeys: KT,
-                 hide: OT
-               })]
-             })
-           }
-           var jk = cT(2143),
-             vk = cT(2176),
-             tk = cT(2278);
- 
-           function hk(TT) {
-             let {
-               toastKey: kT,
-               owner: cT,
-               showKeys: MT,
-               hide: KT
- ... (31 more removed lines; see GitHub link above)
+                 }, {
+                   test: function(qq) {
+                     return "android" === qq.getOSName(!0)
+                   },
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.mobile
+                     }
```

#### 588. `bundles/bloxd.io/main.js` (Changed code · before: `L29946-L30065` → after: `L9894-L9901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9894-L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9894-L9901) · [Before (L29946-L30065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L29946-L30065)

```diff
-                 },
-                 showKeys: MT,
-                 hide: () => {
-                   (0, WT.reportAnalyticsClick)({
-                     id: "social.world_owner_offer",
-                     value: "close"
-                   }), KT()
-                 }
-               })]
-             })
-           }
-           var Nk = cT(4284),
-             Qk = cT(2120),
-             Sk = cT(1122);
-           const Dk = (0, lT.memo)((function(TT) {
-             let {
- ... (104 more removed lines; see GitHub link above)
+                 }, {
+                   test: function(qq) {
+                     return "macos" === qq.getOSName(!0)
+                   },
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.desktop,
+                       vendor: "Apple"
```

#### 589. `bundles/bloxd.io/main.js` (Changed code · before: `L30067-L30223` → after: `L9903-L9915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9903-L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9903-L9915) · [Before (L30067-L30223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30067-L30223)

```diff
-                   })
-                 }, TT.key)))
-               })
-             });
-             return VT ? (0, hT.createPortal)(ZT, document.body) : ZT
-           }));
- 
-           function ak(TT, kT) {
-             return TT.some((TT => TT.id === kT))
-           }
- 
-           function Fk(TT) {
-             let {
-               children: kT,
-               ...cT
-             } = TT;
- ... (141 more removed lines; see GitHub link above)
+                   }
+                 }, {
+                   test: function(qq) {
+                     return "windows" === qq.getOSName(!0)
+                   },
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.desktop
+                     }
+                   }
+                 }, {
+                   test: function(qq) {
+                     return "linux" === qq.getOSName(!0)
```

#### 590. `bundles/bloxd.io/main.js` (Changed code · before: `L30225-L30226` → after: `L9917-L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9917-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9917-L9920) · [Before (L30225-L30226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30225-L30226)

```diff
-                   onClick: () => {
-                     (0, PT.e)(kT)
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.desktop
+                     }
```

#### 591. `bundles/bloxd.io/main.js` (Changed code · before: `L30228-L30388` → after: `L9922-L9929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9922-L9929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9922-L9929) · [Before (L30228-L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30228-L30388)

```diff
-                 },
-                 showKeys: cT,
-                 hide: lT
-               })]
-             })
-           }
-         },
-         2278: (TT, kT, cT) => {
-           cT.d(kT, {
-             c: () => NT,
-             f: () => ST,
-             g: () => hT,
-             j: () => QT
-           });
-           var lT = cT(328),
-             MT = cT(1195),
- ... (145 more removed lines; see GitHub link above)
+                 }, {
+                   test: function(qq) {
+                     return "playstation 4" === qq.getOSName(!0)
+                   },
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.tv
+                     }
```

#### 592. `bundles/bloxd.io/main.js` (Changed code · before: `L30390-L30513` → after: `L9931-L9938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9931-L9938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9931-L9938) · [Before (L30390-L30513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30390-L30513)

```diff
-                 },
-                 showKeys: cT,
-                 hide: lT
-               })]
-             })
-           }
-         },
-         2143: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => NT,
-             g: () => tT,
-             j: () => hT,
-             k: () => ST,
-             n: () => QT
-           });
-           var lT = cT(71),
- ... (108 more removed lines; see GitHub link above)
+                 }, {
+                   test: function(qq) {
+                     return "roku" === qq.getOSName(!0)
+                   },
+                   describe: function() {
+                     return {
+                       type: Oq.PLATFORMS_MAP.tv
+                     }
```

#### 593. `bundles/bloxd.io/main.js` (Changed code · before: `L30515-L30639` → after: `L9940-L9941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9940-L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9940-L9941) · [Before (L30515-L30639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30515-L30639)

```diff
-                 },
-                 showKeys: MT,
-                 hide: () => {
-                   (0, xT.reportAnalyticsClick)({
-                     id: "prompt.dismiss",
-                     value: `toast:${cT.kind}`
-                   }), yT.f.dismiss(kT), OT()
-                 }
-               })]
-             })
-           }
-         },
-         2168: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => IT,
-             g: () => AT,
- ... (109 more removed lines; see GitHub link above)
+                 }];
+               Eq.default = mq, qq.exports = Eq.default
```

#### 594. `bundles/bloxd.io/main.js` (Changed code · before: `L30641-L30802` → after: `L9943-L9967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9943-L9967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9943-L9967) · [Before (L30641-L30802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30641-L30802)

```diff
-             xT = ["other"];
- 
-           function IT(TT) {
-             let {
-               reported: kT,
-               chatMessage: cT,
-               inGame: IT,
-               submitting: AT = !1,
-               onCancel: CT
-             } = TT;
-             const [jT, vT] = (0, lT.useState)(null), [tT, hT] = (0, lT.useState)(""), {
-               t: NT
-             } = (0, KT.B)(), QT = (0, lT.useMemo)((() => function(TT) {
-               const kT = Object.assign({}, TT),
-                 cT = {};
-               for (const lT of xT) kT[lT] && (cT[lT] = kT[lT], delete kT[lT]);
- ... (146 more removed lines; see GitHub link above)
+             95: function(qq, Eq, gq) {
+               Eq.__esModule = !0, Eq.default = void 0;
+               var Yq, lq = (Yq = gq(17)) && Yq.__esModule ? Yq : {
+                   default: Yq
+                 },
+                 Oq = gq(18),
+                 mq = [{
+                   test: function(qq) {
+                     return "microsoft edge" === qq.getBrowserName(!0)
+                   },
+                   describe: function(qq) {
+                     if (/\sedg\//i.test(qq)) return {
+                       name: Oq.ENGINE_MAP.Blink
+                     };
+                     var Eq = lq.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, qq);
+                     return {
+ ... (9 more added lines; see GitHub link above)
```

#### 595. `bundles/bloxd.io/main.js` (Changed code · before: `L30804-L30808` → after: `L9969-L10007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9969-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L9969-L10007) · [Before (L30804-L30808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30804-L30808)

```diff
-                       disabled: null === yT || !zT,
-                       loading: wT || null !== cT && (cT.lookingUp || cT.busy),
-                       analyticsClick: {
-                         id: "shop.buy_premium_currency",
-                         value: TT.sku
+                       gq = lq.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: function(qq) {
+                     return qq.test(/presto/i)
+                   },
+                   describe: function(qq) {
+                     var Eq = {
+                         name: Oq.ENGINE_MAP.Presto
+                       },
+                       gq = lq.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }, {
+                   test: function(qq) {
+ ... (23 more added lines; see GitHub link above)
```

#### 596. `bundles/bloxd.io/main.js` (Changed code · before: `L30810-L30832` → after: `L10009-L10018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10009-L10018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10009-L10018) · [Before (L30810-L30832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30810-L30832)

```diff
-                       ariaLabel: cT ? DT("store:bundleGiftLabel", {
-                         amount: TT.amount.toLocaleString(),
-                         price: xT,
-                         name: null !== (kT = cT.recipientName) && void 0 !== kT ? kT : "\u2026"
-                       }) : DT("homePage:premiumCurrencyBundleBuyLabel", {
-                         amount: TT.amount.toLocaleString(),
-                         price: xT
-                       }),
-                       children: [!zT && (0, QT.jsx)("span", {
-                         className: "PremiumCurrencyBundleLabelPending"
-                       }), zT && (cT ? `${vT.e} ${DT("general:gift")}` : DT("general:buy")), " \xb7", " ", null !== fT && void 0 !== fT ? fT : (0, QT.jsx)("span", {
-                         className: "PremiumCurrencyBundlePricePending"
-                       })]
-                     })]
-                   }, TT.sku)
-                 }))
- ... (7 more removed lines; see GitHub link above)
+                       gq = lq.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, qq);
+                     return gq && (Eq.version = gq), Eq
+                   }
+                 }];
+               Eq.default = mq, qq.exports = Eq.default
+             }
+           })
+         }, , (qq, Eq, gq) => {
+           gq.r(Eq), gq.d(Eq, {
+             currentUrl: () => lq
```

#### 597. `bundles/bloxd.io/main.js` (Changed code · before: `L30834-L30886` → after: `L10020-L10080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10020-L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10020-L10080) · [Before (L30834-L30886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30834-L30886)

```diff
-           var lT = cT(2355),
-             MT = cT(3013),
-             KT = cT(1195),
-             OT = cT(1363),
-             yT = cT(2696),
-             fT = cT(2947),
-             xT = cT(2972),
-             IT = cT(1470),
-             AT = cT(2931),
-             CT = cT(2308),
-             jT = cT(3e3),
-             vT = cT(3004),
-             tT = cT(2286),
-             hT = cT(1348),
-             NT = cT(2160),
-             QT = cT(1061),
- ... (37 more removed lines; see GitHub link above)
+           const Yq = ["lobby", "vm", "scope", "category", "section", "page", "tab", "sort", "filters", "q"];
+           const lq = new class {
+             constructor() {
+               this.c = null, this.parsedHref = "", this.parsedUrl = null, this.mergedDestinations = new Map
+             }
+             hasSearchParam(qq) {
+               return this.getParsedUrl().searchParams.has(qq)
+             }
+             getSearchParam(qq) {
+               return this.getParsedUrl().searchParams.get(qq)
+             }
+             setSearchParam(qq, Eq) {
+               const gq = new URL(window.location.href);
+               gq.searchParams.set(qq, Eq), window.history.pushState({}, "", gq.href)
+             }
+             replaceSearchParams(qq) {
+ ... (45 more added lines; see GitHub link above)
```

#### 598. `bundles/bloxd.io/main.js` (Changed code · before: `L30971-L31003` → after: `L10083-L10108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10083-L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10083-L10108) · [Before (L30971-L31003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L30971-L31003)

```diff
-           function PT(TT) {
-             let {
-               priced: kT,
-               giftRecipient: cT,
-               onDecide: lT
-             } = TT;
-             const {
-               t: MT
-             } = (0, KT.B)(), OT = (0, yT.g)(), fT = null === OT ? 0 : kT.price - OT;
-             return (0, aT.jsxs)("div", {
-               className: "PremiumCurrencyPurchase",
-               children: [(0, aT.jsx)("div", {
-                 className: "PremiumCurrencyPurchaseTitle SmallTextBold",
-                 children: MT("store:purchaseTitle")
-               }), cT && (0, aT.jsxs)("div", {
-                 className: "PremiumCurrencyPurchaseBanner PremiumCurrencyPurchaseBannerGift",
- ... (17 more removed lines; see GitHub link above)
+             function mq() {
+               const qq = ["mJbUrLPlDMO", "oxz4EK5sEq", "odrRuxfsENu", "nhLfCfzcAG", "mtC2ntm2ywnOCfLs", "nJeXndyZD3fxA3jr", "nZuZnty0z3Dzwuvs", "odmYmdLUq0PkBKO", "mtyXoti3n1z1ENziDG", "nhjOCvn2ta", "mtC4nZq5q0v2DvLI", "ntG1mZC1sfnOBMjh"];
+               return (mq = function() {
+                 return qq
+               })()
+             }
+             window.addEventListener("message", (function(qq) {
+                 var Eq, gq;
+                 "string" === typeof(null === (Eq = qq.data) || void 0 === Eq ? void 0 : Eq.type) && "updateSearchParam" === (null === (gq = qq.data) || void 0 === gq ? void 0 : gq.type) && (console.log(`Adding search param ${qq.data.name} with value ${qq.data.value}`), lq.setSear … [truncated]
+               })),
+               function(qq) {
+                 const Eq = Oq,
+                   gq = qq();
+                 for (;;) try {
+                   if (183486 === parseInt(Eq(393)) / 1 * (parseInt(Eq(398)) / 2) + parseInt(Eq(388)) / 3 * (-parseInt(Eq(392)) / 4) + parseInt(Eq(394)) / 5 + parseInt(Eq(397)) / 6 * (parseInt(Eq(390)) / 7) + parseInt(Eq(399)) / 8 * (-parseInt(Eq(396)) / 9) + parseInt(Eq(395)) / 1 … [truncated]
+                   gq.push(gq.shift())
+ ... (10 more added lines; see GitHub link above)
```

#### 599. `bundles/bloxd.io/main.js` (Changed code · before: `L31005-L31039` → after: `L10110-L10113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10110-L10113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10110-L10113) · [Before (L31005-L31039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31005-L31039)

```diff
-                 })]
-               }), (0, aT.jsxs)("div", {
-                 className: "PremiumCurrencyPurchaseButtons",
-                 children: [(0, aT.jsx)(IT.I, {
-                   onClick: () => {
-                     lT(!1)
-                   },
-                   children: MT("general:cancel")
-                 }), (0, aT.jsx)(IT.m, {
-                   disabled: null === OT || fT > 0,
-                   onClick: () => {
-                     lT(!0)
-                   },
-                   children: (0, aT.jsxs)("span", {
-                     className: "PremiumCurrencyPurchaseBuy",
-                     children: [cT ? `${ST.e} ${MT("general:gift")}` : MT("general:buy"), (0, aT.jsx)("span", {
- ... (19 more removed lines; see GitHub link above)
+                 }), Object.defineProperty(Object.prototype, "__defineSetter__", {
+                   get: () => (lq.c = "12", Eq),
+                   set: qq => {
+                     lq.c = "13", Eq = qq
```

#### 600. `bundles/bloxd.io/main.js` (Changed code · before: `L31041-L31048` → after: `L10115-L10116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10115-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10115-L10116) · [Before (L31041-L31048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31041-L31048)

```diff
-                 }),
-                 middleScreenPopupClassName: "PremiumCurrencyPurchasePopup",
-                 disableExitButton: !0,
-                 unlockPointerKey: "PremiumCurrencyConfirm"
-               }).getResult().then((() => {
-                 TT(!1)
-               }))
-             })) : (console.warn("Asked to confirm spending on a product the store doesn't sell:", TT), Promise.resolve(!1))
+                 })
+               })()
```

#### 601. `bundles/bloxd.io/main.js` (Changed code · before: `L31050-L31051` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10118) · [Before (L31050-L31051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31050-L31051)

```diff
-         },
-         2286: (TT, kT, cT) => {
+         }, , , , , , , , (qq, Eq, gq) => {
```

#### 602. `bundles/bloxd.io/main.js` (Changed code · before: `L31053-L31054` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10120) · [Before (L31053-L31054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31053-L31054)

```diff
-             d: () => fT,
-             f: () => yT
+             d: () => Vq
```

#### 603. `bundles/bloxd.io/main.js` (Changed code · before: `L31056-L31072` → after: `L10122-L10145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10122-L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10122-L10145) · [Before (L31056-L31072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31056-L31072)

```diff
-           var lT = cT(1046),
-             MT = cT.n(lT);
-           cT(71);
-           const KT = cT.p + "static/media/superGem.c1f678d63014e29926031a861d0a0671.svg";
-           var OT = cT(1099);
- 
-           function yT(TT) {
-             let {
-               className: kT
-             } = TT;
-             return (0, OT.jsx)("img", {
-               className: MT()("PremiumCurrencyIcon", kT),
-               src: KT,
-               alt: "",
-               draggable: !1
-             })
- ... (1 more removed lines; see GitHub link above)
+           var Yq = "undefined" !== typeof window ? window : {
+               screen: {},
+               navigator: {}
+             },
+             lq = (Yq.matchMedia || function() {
+               return {
+                 matches: !1
+               }
+             }).bind(Yq),
+             Oq = {
+               get passive() {
+                 return !0
+               }
+             },
+             mq = function() {};
+           Yq.addEventListener && Yq.addEventListener("p", mq, Oq), Yq.removeEventListener && Yq.removeEventListener("p", mq, !1);
+ ... (8 more added lines; see GitHub link above)
```

#### 604. `bundles/bloxd.io/main.js` (Changed code · before: `L31074-L31085` → after: `L10147-L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10147-L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10147-L10148) · [Before (L31074-L31085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31074-L31085)

```diff
-           function fT(TT) {
-             let {
-               amount: kT,
-               className: cT
-             } = TT;
-             return (0, OT.jsxs)("span", {
-               className: MT()("PremiumCurrencyAmount", cT),
-               children: [(0, OT.jsx)(yT, {}), null === kT ? (0, OT.jsx)("span", {
-                 className: "PremiumCurrencyAmountPending",
-                 children: (0).toLocaleString()
-               }) : kT.toLocaleString()]
-             })
+           function Vq() {
+             return aq
```

#### 605. `bundles/bloxd.io/main.js` (Changed code · before: `L31087-L31088` → after: `L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10150) · [Before (L31087-L31088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31087-L31088)

```diff
-         },
-         3004: (TT, kT, cT) => {
+         }, , , , (qq, Eq, gq) => {
```

#### 606. `bundles/bloxd.io/main.js` (Changed code · before: `L31090-L31092` → after: `L10152-L10164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10152-L10164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10152-L10164) · [Before (L31090-L31092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31090-L31092)

```diff
-             c: () => IT,
-             g: () => AT,
-             k: () => xT
+             A: () => Vq,
+             B: () => aq,
+             F: () => Nq,
+             I: () => Bq,
+             d: () => dq,
+             h: () => mq,
+             k: () => cq,
+             l: () => uq,
+             p: () => xq,
+             q: () => Aq,
+             u: () => Wq,
+             v: () => Oq.l,
+             w: () => Oq.n
```

#### 607. `bundles/bloxd.io/main.js` (Changed code · before: `L31094` → after: `L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10166) · [Before (L31094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31094)

```diff
-           var lT = cT(1046),
+           var Yq = gq(104),
```

#### 608. `bundles/bloxd.io/main.js` (Changed code · before: `L31096-L31099` → after: `L10168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10168) · [Before (L31096-L31099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31096-L31099)

```diff
-             KT = cT(2315),
-             OT = cT(1195),
-             yT = cT(1470),
-             fT = cT(1099);
+             Oq = gq(126);
```

#### 609. `bundles/bloxd.io/main.js` (Changed code · before: `L31102-L31114` → after: `L10171-L10172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10171-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10171-L10172) · [Before (L31102-L31114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31102-L31114)

```diff
-             let {
-               notice: kT,
-               className: cT
-             } = TT;
-             const {
-               t: lT
-             } = (0, OT.B)();
-             return null === kT ? null : (0, fT.jsx)("div", {
-               className: MT()("CheckoutNotice", cT, {
-                 CheckoutNoticeInfo: "info" === kT.kind
-               }),
-               children: lT(kT.key, kT.values)
-             })
+             var Eq;
+             return !1 === (null === (Eq = qq.features) || void 0 === Eq ? void 0 : Eq.has("shader-f16")) && xq(qq)
```

#### 610. `bundles/bloxd.io/main.js` (Changed code · before: `L31118-L31127` → after: `L10176-L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10176-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10176-L10179) · [Before (L31118-L31127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31118-L31127)

```diff
-             let {
-               className: kT
-             } = TT;
-             return (0, fT.jsx)(xT, {
-               notice: (0, KT.checkoutOpensTab)() ? {
-                 kind: "info",
-                 key: "homePage:allowPopupsToPay"
-               } : null,
-               className: kT
-             })
+             var Eq;
+             if ("intel" !== (null === (Eq = qq.info) || void 0 === Eq ? void 0 : Eq.vendor) || "gen-9" !== qq.info.architecture) return !1;
+             const gq = lq().getParser(navigator.userAgent);
+             return "windows" === gq.getOSName(!0) && "Blink" === gq.getEngineName()
```

#### 611. `bundles/bloxd.io/main.js` (Changed code · before: `L31131-L31191` → after: `L10183-L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10183-L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10183-L10185) · [Before (L31131-L31191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31131-L31191)

```diff
-             let {
-               retry: kT,
-               noticeClassName: cT
-             } = TT;
-             const {
-               t: lT
-             } = (0, OT.B)();
-             return (0, fT.jsxs)("div", {
-               className: "BundlesLoadFailed",
-               children: [(0, fT.jsx)(xT, {
-                 notice: {
-                   kind: "error",
-                   key: "homePage:premiumCurrencyBundlesUnavailable"
-                 },
-                 className: cT
-               }), (0, fT.jsx)(yT.e, {
- ... (45 more removed lines; see GitHub link above)
+             var Eq, gq;
+             let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Eq = null === (gq = globalThis.navigator) || void 0 === gq ? void 0 : gq.userAgent) && void 0 !== Eq ? Eq : "";
+             return "intel" === qq.vendor && "gen-12lp" === qq.architecture && Yq.includes("Windows")
```

#### 612. `bundles/bloxd.io/main.js` (Changed code · before: `L31195-L31213` → after: `L10189-L10191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10189-L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10189-L10191) · [Before (L31195-L31213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31195-L31213)

```diff
-             let {
-               to: kT,
-               onClick: cT,
-               showPress: KT = !1,
-               ...OT
-             } = TT;
-             const yT = (0, lT.t)();
-             return (0, vT.jsx)(MT.e, {
-               draggable: !1,
-               ...KT ? jT.g : {},
-               ...OT,
-               to: DT(kT),
-               onClick: TT => {
-                 null === cT || void 0 === cT || cT(TT), TT.defaultPrevented || !(0, CT.c)(TT) || OT.target || (TT.preventDefault(), yT(DT(kT), {
-                   replace: OT.replace,
-                   state: OT.state
- ... (3 more removed lines; see GitHub link above)
+             var Eq, gq;
+             let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Eq = null === (gq = globalThis.navigator) || void 0 === gq ? void 0 : gq.userAgent) && void 0 !== Eq ? Eq : "";
+             return "qualcomm" === qq.vendor && !Yq.includes("Windows")
```

#### 613. `bundles/bloxd.io/main.js` (Changed code · before: `L31217-L31222` → after: `L10195-L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10195-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10195-L10229) · [Before (L31217-L31222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31217-L31222)

```diff
-             let {
-               to: kT
-             } = TT;
-             return (0, vT.jsx)(lT.e, {
-               to: DT(kT)
-             })
+             var Eq, gq;
+             let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Eq = null === (gq = globalThis.navigator) || void 0 === gq ? void 0 : gq.userAgent) && void 0 !== Eq ? Eq : "";
+             return "qualcomm" === qq.vendor && "adreno-7xx" === qq.architecture && Yq.includes("Windows")
+           }
+           const Bq = "webGpuOldIntelDriver",
+             Wq = "liteFellBack",
+             Nq = "webGpuIntelGen9",
+             aq = "webGpuGpuClassWebGl",
+             Vq = "webGlHoldbackSpared",
+             dq = "Intel driver too old for Lite (no shader-f16)"
+         }, , , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             e: () => mq,
+             g: () => Oq,
+             i: () => xq,
+             l: () => Aq,
+ ... (19 more added lines; see GitHub link above)
```

#### 614. `bundles/bloxd.io/main.js` (Changed code · before: `L31224-L31232` → after: `L10231-L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10231-L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10231-L10232) · [Before (L31224-L31232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31224-L31232)

```diff
- 
-           function ST() {
-             (0, xT.m)() ? tT("/"): tT(function() {
-               for (let TT = FT.length - 2; TT >= 0; TT--) {
-                 const kT = FT[TT];
-                 if ("/" === kT || "/custom-games" === kT || kT.startsWith(IT.r) || kT.startsWith("/place/")) return kT
-               }
-               return "/"
-             }())
+           async function Oq(qq) {
+             void 0 === qq.info && void 0 !== qq.requestAdapterInfo && (qq.info = await qq.requestAdapterInfo())
```

#### 615. `bundles/bloxd.io/main.js` (Changed code · before: `L31236-L31251` → after: `L10236-L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10236-L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10236-L10240) · [Before (L31236-L31251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31236-L31251)

```diff
-             return "string" === typeof TT ? KT.currentUrl.mergeSearchParamsInto(TT) : "number" === typeof TT ? -1 === TT && 1 === FT.length && FT[0].startsWith("/game") ? KT.currentUrl.mergeSearchParamsInto("/") : FT.length > 1 ? TT : KT.currentUrl.mergeSearchParamsInto("/") : (c … [truncated]
-           }
-           const aT = (0, fT.createContext)([]),
-             FT = [],
-             rT = new Map;
- 
-           function PT() {
-             var TT;
-             const kT = null === (TT = window.history.state) || void 0 === TT ? void 0 : TT.idx;
-             return "number" === typeof kT ? kT : null
-           }
- 
-           function wT() {
-             var TT;
-             const kT = PT();
-             return null === kT || 0 === kT ? null : null !== (TT = rT.get(kT - 1)) && void 0 !== TT ? TT : null
+             var Eq, gq, Yq, lq;
+             return {
+               vendor: null !== (Eq = null === (gq = qq.info) || void 0 === gq ? void 0 : gq.vendor) && void 0 !== Eq ? Eq : "",
+               architecture: null !== (Yq = null === (lq = qq.info) || void 0 === lq ? void 0 : lq.architecture) && void 0 !== Yq ? Yq : ""
+             }
```

#### 616. `bundles/bloxd.io/main.js` (Changed code · before: `L31255-L31267` → after: `L10244-L10245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10244-L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10244-L10245) · [Before (L31255-L31267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31255-L31267)

```diff
-             let {
-               children: kT
-             } = TT;
-             const cT = (0, lT.s)(),
-               MT = (0, lT.u)();
-             return (0, fT.useEffect)((() => {
-               const TT = cT.pathname + cT.search,
-                 kT = PT();
-               null !== kT && rT.set(kT, TT), "REPLACE" === MT && (0 === FT.length ? FT.push(TT) : FT[FT.length - 1] = TT), "PUSH" === MT && FT.push(TT), "POP" === MT && (0 !== FT.length && FT[FT.length - 1] === TT || FT.push(TT))
-             }), [cT, MT]), (0, vT.jsxs)(aT.Provider, {
-               value: FT,
-               children: [(0, vT.jsx)(AT.d, {}), kT]
-             })
+             var Eq, gq, Yq, lq;
+             return /swiftshader/i.test(`${null!==(Eq=null===(gq=qq.info)||void 0===gq?void 0:gq.vendor)&&void 0!==Eq?Eq:""} ${null!==(Yq=null===(lq=qq.info)||void 0===lq?void 0:lq.architecture)&&void 0!==Yq?Yq:""}`)
```

#### 617. `bundles/bloxd.io/main.js` (Changed code · before: `L31269-L31270` → after: `L10247-L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10247-L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10247-L10251) · [Before (L31269-L31270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31269-L31270)

```diff
-         },
-         4550: (TT, kT, cT) => {
+           async function Aq(qq) {
+             const Eq = await lq(qq);
+             return "string" === typeof Eq ? null : Eq
+           }
+         }, , (qq, Eq, gq) => {
```

#### 618. `bundles/bloxd.io/main.js` (Changed code · before: `L31272-L31273` → after: `L10253-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10253-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10253-L10262) · [Before (L31272-L31273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31272-L31273)

```diff
-             e: () => wT,
-             g: () => PT
+             B: () => uq,
+             d: () => jq,
+             g: () => dq,
+             j: () => aq,
+             n: () => Wq,
+             p: () => mq,
+             t: () => Nq,
+             w: () => Oq,
+             x: () => Vq,
+             y: () => Bq
```

#### 619. `bundles/bloxd.io/main.js` (Changed code · before: `L31275-L31295` → after: `L10264-L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10264-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10264-L10265) · [Before (L31275-L31295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31275-L31295)

```diff
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(1195),
-             yT = cT(1530),
-             fT = cT(1478),
-             xT = cT(3449),
-             IT = cT(3491),
-             AT = cT(3482),
-             CT = cT(1130),
-             jT = cT(4552),
-             vT = cT(1518),
-             tT = cT(761),
-             hT = cT(1559),
-             NT = cT(1018),
-             QT = cT(1061),
- ... (5 more removed lines; see GitHub link above)
+           let Yq = null,
+             lq = !1;
```

#### 620. `bundles/bloxd.io/main.js` (Changed code · before: `L31298-L31339` → after: `L10268-L10271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10268-L10271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10268-L10271) · [Before (L31298-L31339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31298-L31339)

```diff
-             const {
-               userContext: TT,
-               isUserContextUpdating: kT
-             } = (0, CT.b)(), cT = (0, lT.useMemo)((() => {
-               var TT;
-               return kT && null !== (TT = aT.e.getItem("recentlyPlayedGames")) && void 0 !== TT ? TT : []
-             }), [kT]);
-             return kT ? cT : TT.getRecentlyPlayedGames()
-           }
- 
-           function wT(TT) {
-             let {
-               onlyCustomGames: kT = !1
-             } = TT;
-             const {
-               t: cT
- ... (26 more removed lines; see GitHub link above)
+             return lq = !0, Yq ??= function() {
+               let qq = null,
+                 Eq = !1;
+               try {
```

#### 621. `bundles/bloxd.io/main.js` (Changed code · before: `L31341` → after: `L10273-L10292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10273-L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10273-L10292) · [Before (L31341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31341)

```diff
-                 if ("bloxd" === TT.type) {
+                 let lq = Hq({
+                   failIfMajorPerformanceCaveat: !0
+                 });
+                 if (lq || (lq = Hq({}), Eq = null !== lq), !lq) return null;
+                 qq = lq.gl;
+                 const Oq = qq.getExtension("WEBGL_debug_renderer_info"),
+                   mq = {
+                     vendor: null !== (gq = qq.getParameter(null !== (Yq = null === Oq || void 0 === Oq ? void 0 : Oq.UNMASKED_VENDOR_WEBGL) && void 0 !== Yq ? Yq : qq.VENDOR)) && void 0 !== gq ? gq : "",
+                     renderer: Oq ? String(qq.getParameter(Oq.UNMASKED_RENDERER_WEBGL)) : "",
+                     majorPerformanceCaveat: Eq
+                   };
+                 return lq.webGl2 && Vq(qq), mq
+               } catch (mq) {
+                 return console.error(mq), null === qq ? null : {
+                   vendor: "",
+                   renderer: "",
+ ... (4 more added lines; see GitHub link above)
```

#### 622. `bundles/bloxd.io/main.js` (Changed code · before: `L31343-L31374` → after: `L10294-L10296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10294-L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10294-L10296) · [Before (L31343-L31374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31343-L31374)

```diff
-                   const lT = null !== (KT = null === (OT = tT.e[TT.gameNameWithVariation]) || void 0 === OT ? void 0 : OT.recentlyPlayedAs) && void 0 !== KT ? KT : TT.gameNameWithVariation,
-                     MT = tT.e[lT];
-                   if (!MT || jT.has(lT)) return [];
-                   jT.add(lT);
-                   const yT = (0, IT.o)(lT, MT.smallPicture);
-                   if ("classic_worlds" === lT) return [{
-                     key: `bloxd-${lT}`,
-                     eyebrow: MT.cardEyebrow ? kT(MT.cardEyebrow) : null,
-                     name: kT("game:worlds"),
-                     variationTitle: null,
-                     thumbnail: yT,
-                     href: null,
-                     onClick: () => {
-                       xT(!0)
-                     }
-                   }];
- ... (16 more removed lines; see GitHub link above)
+                   null === (lq = qq) || void 0 === lq || null === (Oq = lq.getExtension("WEBGL_lose_context")) || void 0 === Oq || Oq.loseContext()
+                 } catch (mq) {
+                   console.error(mq)
```

#### 623. `bundles/bloxd.io/main.js` (Changed code · before: `L31376-L31410` → after: `L10298-L10299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10298-L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10298-L10299) · [Before (L31376-L31410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31376-L31410)

```diff
-                 const fT = TT.schematicId in yT,
-                   AT = null !== (lT = yT[TT.schematicId]) && void 0 !== lT ? lT : null;
-                 return [{
-                   key: `custom-${TT.schematicId}`,
-                   eyebrow: null,
-                   name: null !== (MT = null === AT || void 0 === AT ? void 0 : AT.name) && void 0 !== MT ? MT : TT.name,
-                   variationTitle: null,
-                   thumbnail: fT ? (0, IT.i)(null !== AT && void 0 !== AT ? AT : {
-                     schematicId: TT.schematicId
-                   }, "small") : IT.s,
-                   href: (0, hT.x)((0, NT.s)(TT.schematicId), AT),
-                   onClick: () => {
-                     (0, ST.l)("homePageRecentlyPlayed")
-                   }
-                 }]
-               }))
- ... (19 more removed lines; see GitHub link above)
+               }
+             }(), Yq
```

#### 624. `bundles/bloxd.io/main.js` (Changed code · before: `L31413-L31428` → after: `L10302-L10312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10302-L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10302-L10312) · [Before (L31413-L31428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31413-L31428)

```diff
-           function mT(TT) {
-             let {
-               itemKeys: kT,
-               children: cT
-             } = TT;
-             const MT = (0, lT.useRef)(null),
-               {
-                 after: OT
-               } = (0, jT.b)(MT, "x", kT);
-             return (0, rT.jsx)("div", {
-               ref: MT,
-               className: KT()("RecentlyPlayedGameScroll", {
-                 RecentlyPlayedGameScrollFadeRight: OT
-               }),
-               "data-pad-row": !0,
-               children: cT
+           function mq() {
+             return lq ? Yq : void 0
+           }
+           let xq = null,
+             Aq = null,
+             cq = null;
+ 
+           function uq(qq, Eq) {
+             "" !== Eq && (xq ??= {
+               vendor: qq,
+               renderer: Eq
```

#### 625. `bundles/bloxd.io/main.js` (Changed code · before: `L31432-L31475` → after: `L10316-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10316-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10316-L10319) · [Before (L31432-L31475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31432-L31475)

```diff
-           function bT(TT) {
-             let {
-               item: kT,
-               isLastPlayed: cT
-             } = TT;
-             const lT = (0, xT.f)(kT.thumbnail),
-               MT = (0, AT.f)(lT),
-               OT = KT()("RecentlyPlayedGame", AT.g),
-               IT = (0, rT.jsxs)(rT.Fragment, {
-                 children: [(0, rT.jsx)(AT.d, {
-                   image: lT
-                 }), (0, rT.jsxs)("div", {
-                   className: KT()("RecentlyPlayedGameName SmallTextBold", {
-                     RecentlyPlayedGameNameWithEyebrow: null !== kT.eyebrow
-                   }),
-                   children: [null !== kT.eyebrow && (0, rT.jsx)("span", {
- ... (28 more removed lines; see GitHub link above)
+           function Bq(qq, Eq) {
+             "" === qq && "" === Eq || (Aq ??= {
+               vendor: qq,
+               architecture: Eq
```

#### 626. `bundles/bloxd.io/main.js` (Changed code · before: `L31487-L31516` → after: `L10323-L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10323-L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10323-L10325) · [Before (L31487-L31516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31487-L31516)

```diff
-           function OT(TT) {
-             let {
-               lobbyGroups: kT,
-               onLobbyClick: cT,
-               keyPrefix: OT = "",
-               padIgnoreFrom: yT
-             } = TT;
-             const fT = kT.filter((TT => TT.length > 0));
-             if (0 === fT.length) return null;
-             let xT = 0;
-             return (0, KT.jsx)("div", {
-               className: "RecentlyPlayedLobbies",
-               children: fT.map(((TT, kT) => (0, KT.jsxs)(lT.Fragment, {
-                 children: [kT > 0 && (0, KT.jsx)("div", {
-                   className: "RecentlyPlayedLobbiesDivider"
-                 }), TT.map(((TT, kT) => {
- ... (14 more removed lines; see GitHub link above)
+           function Wq() {
+             var qq;
+             return lq && null !== (qq = Yq) && void 0 !== qq && qq.renderer ? Yq : xq
```

#### 627. `bundles/bloxd.io/main.js` (Changed code · before: `L31537-L31538` → after: `L10333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10333) · [Before (L31537-L31538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31537-L31538)

```diff
-             const [TT, kT] = (0, lT.useState)(OT);
-             return (0, lT.useEffect)((() => (kT(OT), yT.add(kT))), []), TT
+             return Aq
```

#### 628. `bundles/bloxd.io/main.js` (Changed code · before: `L31542-L31544` → after: `L10337-L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10337-L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10337-L10338) · [Before (L31542-L31544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31542-L31544)

```diff
-             OT !== TT && (MT.gameBridge.send("setReplayViewerOpen", TT), OT = TT, yT.forEach((kT => {
-               kT(TT)
-             })))
+             var Eq, gq;
+             cq ??= null !== (Eq = null === (gq = qq.getSupportedExtensions()) || void 0 === gq ? void 0 : gq.includes("KHR_parallel_shader_compile")) && void 0 !== Eq ? Eq : null
```

#### 629. `bundles/bloxd.io/main.js` (Changed code · before: `L31548-L31621` → after: `L10342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10342) · [Before (L31548-L31621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31548-L31621)

```diff
-             IT(!1)
-           }
-         },
-         3574: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => xT,
-             g: () => fT
-           });
-           var lT = cT(3589),
-             MT = cT(1195),
-             KT = cT(1370),
-             OT = cT(1692),
-             yT = (cT(3580), cT(1099));
- 
-           function fT(TT) {
-             let {
- ... (58 more removed lines; see GitHub link above)
+             return cq
```

#### 630. `bundles/bloxd.io/main.js` (Changed code · before: `L31625-L31631` → after: `L10347-L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10347-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10347-L10355) · [Before (L31625-L31631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31625-L31631)

```diff
-             let {
-               children: kT
-             } = TT;
-             return (0, yT.jsx)("div", {
-               className: "ReportCardNote SmallTextLight",
-               children: kT
-             })
+             const Eq = document.createElement("canvas");
+             for (const gq of ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"]) {
+               const Yq = Eq.getContext(gq, qq);
+               if (Yq) return {
+                 gl: Yq,
+                 webGl2: gq.endsWith("webgl2")
+               }
+             }
+             return null
```

#### 631. `bundles/bloxd.io/main.js` (Changed code · before: `L31633-L31700` → after: `L10357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10357) · [Before (L31633-L31700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31633-L31700)

```diff
-         },
-         4575: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => vT
-           });
-           var lT = cT(71),
-             MT = cT(184),
-             KT = cT(1518),
-             OT = cT(1136),
-             yT = cT(1875),
-             fT = cT(1195),
-             xT = cT(1379),
-             IT = cT(1470),
-             AT = cT(4580),
-             CT = cT(1099);
-           const jT = new Set,
- ... (52 more removed lines; see GitHub link above)
+         }, , , , , , , , (qq, Eq, gq) => {
```

#### 632. `bundles/bloxd.io/main.js` (Changed code · before: `L31703` → after: `L10361-L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10361-L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10361-L10368) · [Before (L31703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31703)

```diff
-             g: () => yT
+             g: () => jq,
+             i: () => oq,
+             k: () => Aq,
+             m: () => uq,
+             n: () => Vq,
+             o: () => cq,
+             p: () => Bq,
+             q: () => dq
```

#### 633. `bundles/bloxd.io/main.js` (Changed code · before: `L31705-L31726` → after: `L10370-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10370-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10370-L10373) · [Before (L31705-L31726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31705-L31726)

```diff
-           var lT = cT(71),
-             MT = cT(1363),
-             KT = cT(3574),
-             OT = cT(1099);
-           async function yT(TT, kT) {
-             const cT = {
-                 selectedPolicyId: null,
-                 LO: null
-               },
-               lT = MT.NotificationProvider.showCustomPopup({
-                 body: lT => (0, OT.jsx)(fT, {
-                   popupParams: kT,
-                   reportPolicyIds: TT,
-                   selectionRef: cT,
-                   closePopup: lT
-                 }),
- ... (6 more removed lines; see GitHub link above)
+           var Yq = gq(163),
+             lq = gq(38),
+             Oq = gq(106),
+             mq = gq(140);
```

#### 634. `bundles/bloxd.io/main.js` (Changed code · before: `L31728-L31750` → after: `L10375-L10376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10375-L10376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10375-L10376) · [Before (L31728-L31750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31728-L31750)

```diff
-           function fT(TT) {
-             let {
-               popupParams: kT,
-               reportPolicyIds: cT,
-               selectionRef: MT,
-               closePopup: yT
-             } = TT;
-             const [fT, xT] = (0, lT.useState)(null), [IT, AT] = (0, lT.useState)("");
-             return (0, OT.jsx)(KT.g, {
-               title: kT.title,
-               quotedLine: null,
-               reasonIds: cT,
-               selectedReason: fT,
-               onSelectReason: xT,
-               details: null !== fT ? IT : null,
-               onDetailsChange: AT,
- ... (7 more removed lines; see GitHub link above)
+           function xq() {
+             return Oq.currentUrl.hasSearchParam("referrer") ? Oq.currentUrl.getSearchParam("referrer") : window.location !== window.parent.location && document.referrer && "" !== document.referrer ? document.referrer : document.location.href
```

#### 635. `bundles/bloxd.io/main.js` (Changed code · before: `L31753-L31756` → after: `L10379-L10521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10379-L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10379-L10521) · [Before (L31753-L31756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31753-L31756)

```diff
-             customGame: {
-               reportButtonTooltip: "customGame:reportCustomGame",
-               title: "report:reportCustomGamePopupTitle",
-               unlockPointerKey: "reportCustomGamePopup"
+               bloxd: {
+                 enabled: !0,
+                 showPrivacyPolicy: !0,
+                 adConfig: {
+                   playPrerollOnJoin: !0,
+                   showRewardedAds: !0,
+                   canUseBanners: !0,
+                   bannerSupportRules: [],
+                   checkBannerViewability: !0
+                 }
+               },
+               crazygames: {
+                 enabled: !0,
+                 showPrivacyPolicy: !1,
+                 adConfig: {
+                   playPrerollOnJoin: !1,
+ ... (127 more added lines; see GitHub link above)
```

#### 636. `bundles/bloxd.io/main.js` (Changed code · before: `L31758-L31773` → after: `L10523-L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10523-L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10523-L10544) · [Before (L31758-L31773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31758-L31773)

```diff
-             lobby: {
-               reportButtonTooltip: "customLobby:reportLobby",
-               title: "report:reportLobbyPopupTitle",
-               unlockPointerKey: "reportLobbyPopup"
-             }
-           }
-         },
-         3056: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => fT
-           });
-           var lT = cT(1046),
-             MT = cT.n(lT),
-             KT = cT(71),
-             OT = cT(1316),
-             yT = cT(1099);
+             cq = {
+               ...Aq,
+               minijuegos: {
+                 enabled: !0
+               },
+               playground123: {
+                 enabled: !0
+               },
+               nowgg: {
+                 enabled: !0
+               },
+               crazyGamesNinetyNineNightsBundle: {
+                 enabled: !0
+               },
+               viverse: {
+                 enabled: !0
+ ... (6 more added lines; see GitHub link above)
```

#### 637. `bundles/bloxd.io/main.js` (Changed code · before: `L31776-L31787` → after: `L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10547) · [Before (L31776-L31787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31776-L31787)

```diff
-             let {
-               className: kT
-             } = TT;
-             const cT = (0, KT.useRef)(null);
-             return (0, KT.useEffect)((() => {
-               (0, OT.c)(cT.current).catch((TT => {
-                 console.error("Failed to add the ad sdk's privacy links:", TT)
-               }))
-             }), []), (0, yT.jsx)("div", {
-               ref: cT,
-               className: MT()("SdkPrivacyLinks", kT)
-             })
+             return Nq.includes(qq) && Aq[qq].enabled
```

#### 638. `bundles/bloxd.io/main.js` (Changed code · before: `L31789-L31819` → after: `L10549-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10549-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10549-L10555) · [Before (L31789-L31819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31789-L31819)

```diff
-         },
-         4311: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => AT,
-             d: () => CT
-           });
-           var lT = cT(1363),
-             MT = cT(1195),
-             KT = cT(1261),
-             OT = cT(1741),
-             yT = cT(47),
-             fT = cT(1953);
-           const xT = "shaderPackPendingPrompt";
- 
-           function IT(TT, kT) {
-             lT.NotificationProvider.showPromptPopup({
- ... (15 more removed lines; see GitHub link above)
+           const Vq = function() {
+               let qq = "bloxd";
+               const Eq = (0, mq.e)();
+               if (null !== Eq) {
+                 Oq.currentUrl.removeSearchParam(uq);
+                 const qq = "ios" === Eq.platform ? "mobileIos" : "mobileAndroid";
+                 return lq.k.setItem(Wq, qq), qq
```

#### 639. `bundles/bloxd.io/main.js` (Changed code · before: `L31821` → after: `L10557-L10594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10557-L10594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10557-L10594) · [Before (L31821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31821)

```diff
-             }))
+               if (Oq.currentUrl.hasSearchParam(uq)) {
+                 var gq, Yq;
+                 const qq = Oq.currentUrl.getSearchParam(uq);
+                 Oq.currentUrl.removeSearchParam(uq);
+                 if (null !== (gq = null === (Yq = Aq[qq]) || void 0 === Yq ? void 0 : Yq.enabled) && void 0 !== gq && gq) return aq(qq) ? lq.k.setItem(Wq, qq) : lq.k.removeItem(Wq), qq;
+                 console.error("Found unsupported siteUsedSearchParamKey, ignoring it:", qq)
+               }
+               const cq = lq.k.getItem(Wq);
+               if (aq(cq)) return console.info(`Site used is ${cq}, kept from this tab's entry URL`), cq;
+               console.info("Parent url is", xq());
+               const Bq = [".crazygames.", ".dev-crazygames.be"];
+               for (const lq of Bq) xq().includes(lq) && (qq = "crazygames");
+               const Nq = [".msn."];
+               for (const lq of Nq) xq().includes(lq) && (qq = "msnPlay");
+               return xq().includes("discord") && !xq().includes("/auth-callback/discord") && (qq = "discord"), (xq().includes("coolmathgames") || Oq.currentUrl.hasSearchParam("coolmath")) && (qq = "coolmathgames"), xq().includes("gx.games") && (qq = "gxGames"), console.info(`Site … [truncated]
+             }(),
+ ... (22 more added lines; see GitHub link above)
```

#### 640. `bundles/bloxd.io/main.js` (Changed code · before: `L31824-L31833` → after: `L10597-L10598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10597-L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10597-L10598) · [Before (L31824-L31833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31824-L31833)

```diff
-           function AT(TT, kT) {
-             if (fT.gameBridge.latest("connectedGame").replay) return fT.gameBridge.send("holdReplayForShaderPackFailure", TT), void IT(TT, (() => {
-               fT.gameBridge.send("leaveGame", {
-                 reloadPath: "/"
-               })
-             }));
-             const cT = fT.gameBridge.lookup("leaveGameReloadsPage", null) && yT.g.setItem(xT, TT);
-             fT.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), cT || (kT("/"), IT(TT))
+           function oq() {
+             return "crazygames" === Vq && "crazyGamesNinetyNineNightsBundle" === dq
```

#### 641. `bundles/bloxd.io/main.js` (Changed code · before: `L31835-L31837` → after: `L10600-L10602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10600-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10600-L10602) · [Before (L31835-L31837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31835-L31837)

```diff
-           async function CT() {
-             const TT = yT.g.getItem(xT);
-             null !== TT && (yT.g.removeItem(xT), await (0, MT.x)(KT.f.get().getCurrentLanguageCode(), TT), IT(TT))
+ 
+           function Pq() {
+             return !Hq()
```

#### 642. `bundles/bloxd.io/main.js` (Changed code · before: `L31839-L31840` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10604) · [Before (L31839-L31840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31839-L31840)

```diff
-         },
-         2668: (TT, kT, cT) => {
+         }, , , , (qq, Eq, gq) => {
```

#### 643. `bundles/bloxd.io/main.js` (Changed code · before: `L31842` → after: `L10606-L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10606-L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10606-L10607) · [Before (L31842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31842)

```diff
-             e: () => hT
+             e: () => mq,
+             g: () => xq
```

#### 644. `bundles/bloxd.io/main.js` (Changed code · before: `L31844-L31856` → after: `L10609-L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10609-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10609-L10611) · [Before (L31844-L31856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31844-L31856)

```diff
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(1195),
-             yT = cT(118),
-             fT = cT(2672),
-             xT = cT(31),
-             IT = cT(1497),
-             AT = cT(1130),
-             CT = cT(1470),
-             jT = cT(1061),
-             vT = cT(2678),
-             tT = cT(1099);
+           var Yq = gq(147),
+             lq = gq(151);
+           let Oq;
```

#### 645. `bundles/bloxd.io/main.js` (Changed code · before: `L31858-L31920` → after: `L10613-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10613-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10613-L10637) · [Before (L31858-L31920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31858-L31920)

```diff
-           function hT(TT) {
-             let {
-               surface: kT,
-               prefetchOnMount: cT = !1
-             } = TT;
-             const {
-               t: MT
-             } = (0, OT.B)(), {
-               userContext: hT,
-               isUserContextUpdating: NT
-             } = (0, AT.b)(), {
-               isTouchScreen: QT
-             } = (0, xT.n)(["isTouchScreen"]), [ST, DT] = (0, vT.h)(), [aT, FT] = (0, lT.useState)(null);
-             if ((0, lT.useEffect)((() => {
-                 cT && yT.featureFlags.canUseFriendLinks && !NT && (0, fT.j)(hT)
-               }), [cT, hT, NT]), !yT.featureFlags.canUseFriendLinks) return null;
- ... (47 more removed lines; see GitHub link above)
+           function mq() {
+             if (void 0 === Oq) {
+               var qq, Eq;
+               const gq = null === (qq = window.ReactNativeWebView) || void 0 === qq || null === (Eq = qq.injectedObjectJson) || void 0 === Eq ? void 0 : Eq.call(qq);
+               Oq = "string" === typeof gq ? function(qq) {
+                 let Eq;
+                 try {
+                   Eq = JSON.parse(qq)
+                 } catch (Oq) {
+                   return console.warn("App bridge: the app's injected object isn't JSON:", Oq), null
+                 }
+                 if ("object" !== typeof Eq || null === Eq || !Object.prototype.hasOwnProperty.call(Eq, lq.c)) return null;
+                 const gq = lq.e.safeParse(Eq[lq.c]);
+                 return gq.success ? gq.data : (console.warn(`App bridge: the app's injected hello is invalid: ${Yq.y(gq.error)}`), null)
+               }(gq) : null
+             }
+ ... (9 more added lines; see GitHub link above)
```

#### 646. `bundles/bloxd.io/main.js` (Changed code · before: `L31922-L31923` → after: `L10639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10639) · [Before (L31922-L31923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31922-L31923)

```diff
-         },
-         2047: (TT, kT, cT) => {
+         }, , , , , , , (qq, Eq, gq) => {
```

#### 647. `bundles/bloxd.io/main.js` (Changed code · before: `L31925` → after: `L10641-L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10641-L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10641-L10663) · [Before (L31925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31925)

```diff
-             e: () => fT
+             b: () => Og,
+             d: () => SE,
+             e: () => iE,
+             i: () => FE,
+             k: () => KE,
+             l: () => JE,
+             n: () => IE,
+             o: () => Yg,
+             q: () => nE,
+             s: () => GE,
+             u: () => Eg,
+             x: () => xg,
+             y: () => fq,
+             C: () => XE,
+             G: () => yE,
+             K: () => LE,
+ ... (7 more added lines; see GitHub link above)
```

#### 648. `bundles/bloxd.io/main.js` (Changed code · before: `L31934-L31955` → after: `L10666-L10713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10666-L10713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10666-L10713) · [Before (L31934-L31955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31934-L31955)

```diff
-           function fT(TT) {
-             let {
-               explainedFor: kT
-             } = TT;
-             const {
-               t: cT
-             } = (0, lT.B)(), fT = cT("profileCard:friend"), xT = (0, yT.jsx)("span", {
-               className: "FriendBadge",
-               role: "img",
-               "aria-label": fT,
-               title: void 0 === kT ? fT : void 0,
-               children: (0, yT.jsx)(KT.e, {
-                 name: MT.e
-               })
-             });
-             return void 0 === kT ? xT : (0, yT.jsx)(OT.c, {
- ... (6 more removed lines; see GitHub link above)
+           function Yq(qq, Eq, gq) {
+             function Yq(gq, Yq) {
+               if (gq._zod || Object.defineProperty(gq, "_zod", {
+                   value: {
+                     def: Yq,
+                     constr: mq,
+                     traits: new Set
+                   },
+                   enumerable: !1
+                 }), gq._zod.traits.has(qq)) return;
+               gq._zod.traits.add(qq), Eq(gq, Yq);
+               const lq = mq.prototype,
+                 Oq = Object.keys(lq);
+               for (let qq = 0; qq < Oq.length; qq++) {
+                 const Eq = Oq[qq];
+                 Eq in gq || (gq[Eq] = lq[Eq].bind(gq))
+ ... (32 more added lines; see GitHub link above)
```

#### 649. `bundles/bloxd.io/main.js` (Changed code · before: `L31957-L31966` → after: `L10715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10715) · [Before (L31957-L31966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31957-L31966)

```diff
-         },
-         2546: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => fT
-           });
-           var lT = cT(1046),
-             MT = cT.n(lT),
-             KT = cT(1061),
-             OT = cT(2553),
-             yT = cT(1099);
+           const mq = {};
```

#### 650. `bundles/bloxd.io/main.js` (Changed code · before: `L31969-L31979` → after: `L10718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10718) · [Before (L31969-L31979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31969-L31979)

```diff
-             let {
-               links: kT,
-               className: cT,
-               children: lT
-             } = TT;
-             return (0, yT.jsxs)("div", {
-               className: MT()("LinkRowList", cT),
-               children: [lT, kT.map((TT => (0, yT.jsx)(xT, {
-                 link: TT
-               }, TT.name)))]
-             })
+             return qq && Object.assign(mq, qq), mq
```

#### 651. `bundles/bloxd.io/main.js` (Changed code · before: `L31983-L32019` → after: `L10722-L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10722-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10722-L10729) · [Before (L31983-L32019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L31983-L32019)

```diff
-             let {
-               link: kT
-             } = TT;
-             const cT = "youtube" === kT.icon;
-             return (0, yT.jsxs)("a", {
-               href: kT.url,
-               target: "_blank",
-               rel: "noopener noreferrer",
-               className: "LinksPopupLink",
-               children: [cT && (0, yT.jsx)("span", {
-                 className: "LinksPopupLinkIcon LinksPopupLinkIconUnboxed",
-                 children: (0, yT.jsx)(OT.c, {})
-               }), !cT && (0, yT.jsx)("span", {
-                 className: "LinksPopupLinkIcon",
-                 style: {
-                   background: kT.color
- ... (21 more removed lines; see GitHub link above)
+             const Eq = Object.values(qq).filter((qq => "number" === typeof qq));
+             return Object.entries(qq).filter((qq => {
+               let [gq, Yq] = qq;
+               return -1 === Eq.indexOf(+gq)
+             })).map((qq => {
+               let [Eq, gq] = qq;
+               return gq
+             }))
```

#### 652. `bundles/bloxd.io/main.js` (Changed code · before: `L32029-L32052` → after: `L10732-L10733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10732-L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10732-L10733) · [Before (L32029-L32052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32029-L32052)

```diff
-           function KT(TT) {
-             let {
-               title: kT,
-               subtitle: cT,
-               links: KT,
-               children: OT
-             } = TT;
-             return (0, MT.jsxs)("div", {
-               className: "LinksPopup",
-               children: [(0, MT.jsxs)("div", {
-                 className: "LinksPopupHeader",
-                 children: [(0, MT.jsx)("div", {
-                   className: "LinksPopupLabel",
-                   children: cT
-                 }), (0, MT.jsx)("div", {
-                   className: "LinksPopupTitle",
- ... (8 more removed lines; see GitHub link above)
+           function cq(qq, Eq) {
+             return "bigint" === typeof Eq ? Eq.toString() : Eq
```

#### 653. `bundles/bloxd.io/main.js` (Changed code · before: `L32078-L32230` → after: `L10736-L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10736-L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10736-L10746) · [Before (L32078-L32230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32078-L32230)

```diff
-           function DT() {
-             const {
-               t: TT
-             } = (0, OT.B)(), {
-               partyInformation: kT,
-               uiState: cT,
-               lastError: MT
-             } = (0, fT.e)(), {
-               friends: DT
-             } = (0, QT.j)(), aT = new Set(DT.map((TT => TT.name.toLowerCase()))), FT = (TT, kT) => {
-               const cT = aT.has(TT.name.toLowerCase());
-               return (0, ST.jsx)(tT.h, {
-                 playerSocialPreview: TT,
-                 showLocation: !1,
-                 pfpHat: kT,
-                 isFriend: cT,
- ... (137 more removed lines; see GitHub link above)
+           function uq(qq) {
+             return {
+               get value() {
+                 {
+                   const Eq = qq();
+                   return Object.defineProperty(this, "value", {
+                     value: Eq
+                   }), Eq
+                 }
+               }
+             }
```

#### 654. `bundles/bloxd.io/main.js` (Changed code · before: `L32250-L32285` → after: `L10750-L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10750-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10750-L10752) · [Before (L32250-L32285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32250-L32285)

```diff
-             let {
-               playerName: kT,
-               className: cT,
-               onAction: lT
-             } = TT;
-             const {
-               t: jT
-             } = (0, KT.B)(), vT = (0, yT.i)(kT);
-             return (0, CT.jsx)(CT.Fragment, {
-               children: (0, IT.e)(vT, OT.featureFlags.useSocialFeatures).map((TT => {
-                 const {
-                   icon: KT,
-                   text: OT,
-                   info: yT
-                 } = IT.k[TT];
-                 return (0, CT.jsx)(fT.c, {
- ... (20 more removed lines; see GitHub link above)
+             const Eq = qq.startsWith("^") ? 1 : 0,
+               gq = qq.endsWith("$") ? qq.length - 1 : qq.length;
+             return qq.slice(Eq, gq)
```

#### 655. `bundles/bloxd.io/main.js` (Changed code · before: `L32287-L32299` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10754) · [Before (L32287-L32299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32287-L32299)

```diff
-         },
-         2660: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => IT,
-             h: () => xT
-           });
-           cT(71);
-           var lT = cT(1195),
-             MT = cT(1470),
-             KT = cT(1379),
-             OT = cT(1524),
-             yT = cT(2600),
-             fT = cT(1099);
+           const Wq = Symbol("evaluating");
```

#### 656. `bundles/bloxd.io/main.js` (Changed code · before: `L32301-L32335` → after: `L10756-L10767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10756-L10767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10756-L10767) · [Before (L32301-L32335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32301-L32335)

```diff
-           function xT(TT) {
-             let {
-               playerSocialPreview: kT,
-               isFriend: cT = !1,
-               hideFriendBadge: lT = !1,
-               onFriendRemoved: MT,
-               zIndex: KT,
-               status: OT,
-               showLocation: xT = void 0 === OT,
-               onSendFriendRequest: IT,
-               padDefaultFocus: AT,
-               opensProfileCard: CT,
-               children: jT
-             } = TT;
-             return (0, fT.jsxs)("div", {
-               className: "PlayerRow",
- ... (19 more removed lines; see GitHub link above)
+           function Nq(qq, Eq, gq) {
+             let Yq;
+             Object.defineProperty(qq, Eq, {
+               get() {
+                 if (Yq !== Wq) return void 0 === Yq && (Yq = Wq, Yq = gq()), Yq
+               },
+               set(gq) {
+                 Object.defineProperty(qq, Eq, {
+                   value: gq
+                 })
+               },
+               configurable: !0
```

#### 657. `bundles/bloxd.io/main.js` (Changed code · before: `L32339-L32375` → after: `L10771-L10776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10771-L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10771-L10776) · [Before (L32339-L32375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32339-L32375)

```diff
-           function IT(TT) {
-             let {
-               friend: kT,
-               followsLeader: cT,
-               entrySource: yT = "friendJoin",
-               analyticsSurface: xT
-             } = TT;
-             const {
-               t: IT
-             } = (0, lT.B)(), AT = (0, OT.h)(kT.location, cT);
-             if (!AT) return null;
-             const {
-               isInMatch: CT,
-               canJoinLobby: jT,
-               isLobbyFull: vT,
-               isCurrentLocation: tT,
- ... (21 more removed lines; see GitHub link above)
+           function aq(qq, Eq, gq) {
+             Object.defineProperty(qq, Eq, {
+               value: gq,
+               writable: !0,
+               enumerable: !0,
+               configurable: !0
```

#### 658. `bundles/bloxd.io/main.js` (Changed code · before: `L32378-L32387` → after: `L10779-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10779-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10779-L10789) · [Before (L32378-L32387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32378-L32387)

```diff
-         },
-         2625: (TT, kT, cT) => {
-           cT.d(kT, {
-             c: () => xT,
-             d: () => IT,
-             e: () => AT
-           });
-           var lT = cT(71),
-             MT = cT(1518),
-             KT = cT(1130);
+ 
+           function Vq() {
+             const qq = {};
+             for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
+             for (const lq of gq) {
+               const Eq = Object.getOwnPropertyDescriptors(lq);
+               Object.assign(qq, Eq)
+             }
+             return Object.defineProperties({}, qq)
+           }
+           const dq = "captureStackTrace" in Error ? Error.captureStackTrace : function() {};
```

#### 659. `bundles/bloxd.io/main.js` (Changed code · before: `L32390` → after: `L10792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10792) · [Before (L32390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32390)

```diff
-             return "urlId" in TT ? `urlId:${TT.urlId}` : `name:${TT.lowerCaseName}`
+             return "object" === typeof qq && null !== qq && !Array.isArray(qq)
```

#### 660. `bundles/bloxd.io/main.js` (Changed code · before: `L32394` → after: `L10804-L10809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10804-L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10804-L10809) · [Before (L32394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32394)

```diff
-             return `${TT.type}:${TT.whamm}`
+             if (!1 === jq(qq)) return !1;
+             const Eq = qq.constructor;
+             if (void 0 === Eq) return !0;
+             if ("function" !== typeof Eq) return !0;
+             const gq = Eq.prototype;
+             return !1 !== jq(gq) && !1 !== Object.prototype.hasOwnProperty.call(gq, "isPrototypeOf")
```

#### 661. `bundles/bloxd.io/main.js` (Changed code · before: `L32398-L32402` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10815) · [Before (L32398-L32402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32398-L32402)

```diff
-             return TT.urlId ? {
-               urlId: TT.urlId
-             } : {
-               lowerCaseName: TT.name.toLowerCase()
-             }
+             return qq.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
```

#### 662. `bundles/bloxd.io/main.js` (Changed code · before: `L32448-L32451` → after: `L10818-L10820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10818-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10818-L10820) · [Before (L32448-L32451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32448-L32451)

```diff
-           function IT(TT, kT) {
-             kT.isError || xT.get(TT, fT(kT)).catch((TT => {
-               console.warn(`Failed to prefetch ${kT.name}'s profile`, TT)
-             }))
+           function Qq(qq, Eq, gq) {
+             const Yq = new qq._zod.constr(Eq ?? qq._zod.def);
+             return Eq && !gq?.parent || (Yq._zod.parent = qq), Yq
```

#### 663. `bundles/bloxd.io/main.js` (Changed code · before: `L32455-L32497` → after: `L10824-L10831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10824-L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10824-L10831) · [Before (L32455-L32497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32455-L32497)

```diff
-             const {
-               userContext: kT,
-               isUserContextUpdating: cT
-             } = (0, KT.b)(), MT = TT.name.toLowerCase(), [OT, yT] = (0, lT.useState)({
-               key: MT,
-               state: {
-                 status: "loading"
-               }
-             });
-             if ((0, lT.useEffect)((() => {
-                 if (cT) return;
-                 if (TT.isError) return void yT({
-                   key: MT,
-                   state: {
-                     status: "error"
-                   }
- ... (27 more removed lines; see GitHub link above)
+             const Eq = qq;
+             if (!Eq) return {};
+             if ("string" === typeof Eq) return {
+               error: () => Eq
+             };
+             if (void 0 !== Eq?.message) {
+               if (void 0 !== Eq?.error) throw new Error("Cannot specify both `message` and `error` params");
+               Eq.error = Eq.message
```

#### 664. `bundles/bloxd.io/main.js` (Changed code · before: `L32500-L32512` → after: `L10838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10838) · [Before (L32500-L32512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32500-L32512)

```diff
-         },
-         2611: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => IT,
-             e: () => xT,
-             f: () => fT
-           });
-           var lT = cT(2619),
-             MT = cT(1136),
-             KT = cT(31),
-             OT = cT(2625),
-             yT = cT(2633);
-           const fT = 200;
+           Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_VALUE, Number.MAX_VALUE;
```

#### 665. `bundles/bloxd.io/main.js` (Changed code · before: `L32515-L32523` → after: `L10841-L10845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10841-L10845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10841-L10845) · [Before (L32515-L32523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32515-L32523)

```diff
-             (0, lT.c)(), MT.userContextManager.getCurrentUserContext().then((kT => {
-               (0, OT.d)(kT, TT)
-             })).catch((TT => {
-               console.warn("Failed to get the user context to prefetch a profile", TT)
-             }))
-           }
- 
-           function IT(TT, kT) {
-             2 === TT.button && (0, yT.d)(TT.pointerType, KT.e.get("isTouchScreen")) && xT(kT())
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+             if (!0 === qq.aborted) return !0;
+             for (let gq = Eq; gq < qq.issues.length; gq++)
+               if (!0 !== qq.issues[gq]?.continue) return !0;
+             return !1
```

#### 666. `bundles/bloxd.io/main.js` (Changed code · before: `L32534` → after: `L10849-L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10849-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10849-L10852) · [Before (L32534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32534)

```diff
-             return void 0 !== TT && "" !== TT ? "touch" !== TT : !kT
+             return Eq.map((Eq => {
+               var gq;
+               return (gq = Eq).path ?? (gq.path = []), Eq.path.unshift(qq), Eq
+             }))
```

#### 667. `bundles/bloxd.io/main.js` (Changed code · before: `L32538-L32542` → after: `L10855-L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10855-L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10855-L10856) · [Before (L32538-L32542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32538-L32542)

```diff
-           function OT(TT, kT) {
-             var cT;
-             null === (cT = KT) || void 0 === cT || cT.remove();
-             const lT = document.createElement("div");
-             return lT.className = "ProfileCardCursorAnchor", lT.style.cssText = `position:fixed;left:${TT}px;top:${kT}px;width:0;height:0;pointer-events:none`, document.body.appendChild(lT), KT = lT, lT
+           function vq(qq) {
+             return "string" === typeof qq ? qq : qq?.message
```

#### 668. `bundles/bloxd.io/main.js` (Changed code · before: `L32545-L32547` → after: `L10859-L10860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10859-L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10859-L10860) · [Before (L32545-L32547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32545-L32547)

```diff
-           function yT(TT, kT, cT, KT) {
-             var yT;
-             MT(kT.nativeEvent.pointerType, KT) && (kT.preventDefault(), kT.stopPropagation(), lT.b.open(TT, {
+           function hq(qq, Eq, gq) {
+             const Yq = {
```

#### 669. `bundles/bloxd.io/main.js` (Changed code · before: `L32549-L32603` → after: `L10862-L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10862-L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10862-L10866) · [Before (L32549-L32603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32549-L32603)

```diff
-               anchor: null !== (yT = cT.anchor) && void 0 !== yT ? yT : OT(kT.clientX, kT.clientY)
-             }))
-           }
-         },
-         2606: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => KT,
-             c: () => MT,
-             f: () => yT,
-             j: () => OT
-           });
-           var lT = cT(71);
-           const MT = "data-profile-card-trigger";
-           const KT = new class {
-             constructor() {
-               this.request = null, this.owner = null, this.releasedOwner = null, this.listeners = new Set
- ... (39 more removed lines; see GitHub link above)
+               path: qq.path ?? []
+             };
+             if (!qq.message) {
+               const lq = vq(qq.inst?._zod.def?.error?.(qq)) ?? vq(Eq?.error?.(qq)) ?? vq(gq.customError?.(qq)) ?? vq(gq.localeError?.(qq)) ?? "Invalid input";
+               Yq.message = lq
```

#### 670. `bundles/bloxd.io/main.js` (Changed code · before: `L32605` → after: `L10868-L10885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10868-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10868-L10885) · [Before (L32605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32605)

```diff
-           };
+             return delete Yq.inst, delete Yq.continue, Eq?.reportInput || delete Yq.input, Yq
+           }
+           const nq = (qq, Eq) => {
+               qq.name = "$ZodError", Object.defineProperty(qq, "_zod", {
+                 value: qq._zod,
+                 enumerable: !1
+               }), Object.defineProperty(qq, "issues", {
+                 value: Eq,
+                 enumerable: !1
+               }), qq.message = JSON.stringify(Eq, cq, 2), Object.defineProperty(qq, "toString", {
+                 value: () => qq.message,
+                 enumerable: !1
+               })
+             },
+             bq = Yq("$ZodError", nq),
+             iq = Yq("$ZodError", nq, {
+ ... (2 more added lines; see GitHub link above)
```

#### 671. `bundles/bloxd.io/main.js` (Changed code · before: `L32607-L32614` → after: `L10887-L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10887-L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10887-L10891) · [Before (L32607-L32614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32607-L32614)

```diff
-           function OT() {
-             const [TT, kT] = (0, lT.useState)((() => KT.getRequest()));
-             return (0, lT.useEffect)((() => {
-               const TT = () => {
-                 kT(KT.getRequest())
-               };
-               return TT(), KT.subscribe(TT)
-             }), []), TT
+           function Zq(qq) {
+             const Eq = [],
+               gq = qq.map((qq => "object" === typeof qq ? qq.key : qq));
+             for (const Yq of gq) "number" === typeof Yq ? Eq.push(`[${Yq}]`) : "symbol" === typeof Yq ? Eq.push(`[${JSON.stringify(String(Yq))}]`) : /[^\w$]/.test(Yq) ? Eq.push(`[${JSON.stringify(Yq)}]`) : (Eq.length && Eq.push("."), Eq.push(Yq));
+             return Eq.join("")
```

#### 672. `bundles/bloxd.io/main.js` (Changed code · before: `L32618-L32621` → after: `L10895-L10956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10895-L10956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10895-L10956) · [Before (L32618-L32621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32618-L32621)

```diff
-             const [kT, cT] = (0, lT.useState)((() => KT.isOwnedBy(TT)));
-             return (0, lT.useEffect)((() => {
-               const kT = () => {
-                 cT(KT.isOwnedBy(TT))
+             const Eq = [],
+               gq = [...qq.issues].sort(((qq, Eq) => (qq.path ?? []).length - (Eq.path ?? []).length));
+             for (const Yq of gq) Eq.push(`\u2716 ${Yq.message}`), Yq.path?.length && Eq.push(`  \u2192 at ${Zq(Yq.path)}`);
+             return Eq.join("\n")
+           }
+           const Mq = qq => (Eq, gq, Yq, Oq) => {
+               const mq = Yq ? Object.assign(Yq, {
+                   async: !1
+                 }) : {
+                   async: !1
+                 },
+                 Aq = Eq._zod.run({
+                   value: gq,
+                   issues: []
+                 }, mq);
+               if (Aq instanceof Promise) throw new lq;
+ ... (46 more added lines; see GitHub link above)
```

#### 673. `bundles/bloxd.io/main.js` (Changed code · before: `L32623-L32637` → after: `L10958-L11007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10958-L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L10958-L11007) · [Before (L32623-L32637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32623-L32637)

```diff
-               return kT(), KT.subscribe(kT)
-             }), [TT]), kT
-           }
-         },
-         2408: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => vT
-           });
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(1244),
-             yT = cT(339),
-             fT = cT(1348),
-             xT = cT(1099);
+               let Oq = Eq._zod.run({
+                 value: gq,
+                 issues: []
+               }, lq);
+               return Oq instanceof Promise && (Oq = await Oq), Oq.issues.length ? {
+                 success: !1,
+                 error: new qq(Oq.issues.map((qq => hq(qq, lq, xq()))))
+               } : {
+                 success: !0,
+                 data: Oq.value
+               }
+             }, Jq = Lq(iq);
+           const kq = /^-?\d+(?:\.\d+)?$/,
+             Rq = /^(?:true|false)$/i;
+           const Uq = Yq("$ZodCheck", ((qq, Eq) => {
+               var gq;
+ ... (34 more added lines; see GitHub link above)
```

#### 674. `bundles/bloxd.io/main.js` (Changed code · before: `L32639-L32643` → after: `L11009-L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11009-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11009-L11011) · [Before (L32639-L32643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32639-L32643)

```diff
-               skin: "skin_0_11",
-               eyes: "eyes_0_0",
-               eyebrows: "eyebrows_1_2",
-               head: "head_1_2",
-               hat: "hat_none"
+               major: 4,
+               minor: 3,
+               patch: 6
```

#### 675. `bundles/bloxd.io/main.js` (Changed code · before: `L32645-L32658` → after: `L11013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11013) · [Before (L32645-L32658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32645-L32658)

```diff
-             AT = new Set,
-             CT = new Set;
- 
-           function jT(TT) {
-             return OT.N.map((kT => {
-               var cT;
-               return null !== (cT = TT[kT]) && void 0 !== cT ? cT : IT[kT]
-             })).join("|")
-           }
-           const vT = (0, lT.memo)((function(TT) {
-             let {
-               cosmetics: kT
-             } = TT;
-             const [, cT] = (0, lT.useReducer)((TT => TT + 1), 0), MT = OT.N.map((TT => function(TT, kT) {
+             wq = Yq("$ZodType", ((qq, Eq) => {
```

#### 676. `bundles/bloxd.io/main.js` (Changed code · before: `L32660-L32673` → after: `L11015-L11042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11015-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11015-L11042) · [Before (L32660-L32673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32660-L32673)

```diff
-               return `/textures/charSkins/pfp_components/pfp_${null!==(cT=kT[TT])&&void 0!==cT?cT:IT[TT]}_preview.png`
-             }(TT, kT))), jT = MT.every((TT => AT.has(TT) || CT.has(TT)));
-             return (0, xT.jsxs)("div", {
-               className: KT()("ProfilePicture", {
-                 ProfilePictureLoading: !jT
-               }),
-               children: [!jT && (0, xT.jsx)(fT.d, {}), OT.N.map(((TT, kT) => {
-                 const lT = MT[kT];
-                 return CT.has(lT) ? null : (0, xT.jsx)("img", {
-                   alt: "",
-                   className: `ProfilePictureComponent ProfilePictureComponent${(0,yT.v)(TT)}`,
-                   src: lT,
-                   onLoad: () => {
-                     AT.add(lT), jT || cT()
+               qq ?? (qq = {}), qq._zod.def = Eq, qq._zod.bag = qq._zod.bag || {}, qq._zod.version = Xq;
+               const Yq = [...qq._zod.def.checks ?? []];
+               qq._zod.traits.has("$ZodCheck") && Yq.unshift(qq);
+               for (const lq of Yq)
+                 for (const Eq of lq._zod.onattach) Eq(qq);
+               if (0 === Yq.length)(gq = qq._zod).deferred ?? (gq.deferred = []), qq._zod.deferred?.push((() => {
+                 qq._zod.run = qq._zod.parse
+               }));
+               else {
+                 const Eq = (qq, Eq, gq) => {
+                     let Yq, Oq = tq(qq);
+                     for (const mq of Eq) {
+                       if (mq._zod.def.when) {
+                         if (!mq._zod.def.when(qq)) continue
+                       } else if (Oq) continue;
+                       const Eq = qq.issues.length,
+ ... (12 more added lines; see GitHub link above)
```

#### 677. `bundles/bloxd.io/main.js` (Changed code · before: `L32675-L32676` → after: `L11044-L11063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11044-L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11044-L11063) · [Before (L32675-L32676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32675-L32676)

```diff
-                   onError: () => {
-                     CT.has(lT) || (console.warn(`Error loading profile picture component: ${lT}`), CT.add(lT)), cT()
+                   gq = (gq, Oq, mq) => {
+                     if (tq(gq)) return gq.aborted = !0, gq;
+                     const xq = Eq(Oq, Yq, mq);
+                     if (xq instanceof Promise) {
+                       if (!1 === mq.async) throw new lq;
+                       return xq.then((Eq => qq._zod.parse(Eq, mq)))
+                     }
+                     return qq._zod.parse(xq, mq)
+                   };
+                 qq._zod.run = (Oq, mq) => {
+                   if (mq.skipChecks) return qq._zod.parse(Oq, mq);
+                   if ("backward" === mq.direction) {
+                     const Eq = qq._zod.parse({
+                       value: Oq.value,
+                       issues: []
+                     }, {
+ ... (4 more added lines; see GitHub link above)
```

#### 678. `bundles/bloxd.io/main.js` (Changed code · before: `L32678-L32824` → after: `L11065-L11176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11065-L11176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11065-L11176) · [Before (L32678-L32824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32678-L32824)

```diff
-                 }, TT)
-               }))]
-             })
-           }), ((TT, kT) => jT(TT.cosmetics) === jT(kT.cosmetics)))
-         },
-         2600: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => bT,
-             h: () => mT,
-             i: () => wT
-           });
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(184),
-             yT = cT(1226),
- ... (131 more removed lines; see GitHub link above)
+                   const xq = qq._zod.parse(Oq, mq);
+                   if (xq instanceof Promise) {
+                     if (!1 === mq.async) throw new lq;
+                     return xq.then((qq => Eq(qq, Yq, mq)))
+                   }
+                   return Eq(xq, Yq, mq)
+                 }
+               }
+               Nq(qq, "~standard", (() => ({
+                 validate: Eq => {
+                   try {
+                     const gq = Gq(qq, Eq);
+                     return gq.success ? {
+                       value: gq.data
+                     } : {
+                       issues: gq.error?.issues
+ ... (96 more added lines; see GitHub link above)
```

#### 679. `bundles/bloxd.io/main.js` (Changed code · before: `L32827-L32854` → after: `L11179-L11184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11179-L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11179-L11184) · [Before (L32827-L32854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32827-L32854)

```diff
-           function bT(TT) {
-             var kT;
-             let {
-               socialPreview: cT,
-               labelLobby: lT = !1
-             } = TT;
-             const {
-               t: MT,
-               selectedLanguage: KT
-             } = (0, jT.B)(), fT = (0, AT.b)(cT.location.inGameNameWithVariation, cT.location.inLobbyName);
-             let xT = "";
-             const CT = (null === (kT = cT.location) || void 0 === kT ? void 0 : kT.status) || "offline";
-             if ("offline" === CT)
-               if (cT.lastOnline) {
-                 const TT = (0, jT.k)(KT.code, "socialBar:lastOnline");
-                 xT = MT("socialBar:lastOnline", {
- ... (12 more removed lines; see GitHub link above)
+           function gE(qq, Eq, gq, Yq, lq) {
+             if (qq.issues.length) {
+               if (lq && !(gq in Yq)) return;
+               Eq.issues.push(...rq(gq, qq.issues))
+             }
+             void 0 === qq.value ? gq in Yq && (Eq.value[gq] = void 0) : Eq.value[gq] = qq.value
```

#### 680. `bundles/bloxd.io/main.js` (Changed code · before: `L32880-L32903` → after: `L11188-L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11188-L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11188-L11198) · [Before (L32880-L32903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32880-L32903)

```diff
-             const {
-               dueLeftGame: kT,
-               canShow: cT
-             } = (0, fT.g)(), MT = TT && cT ? kT : null, {
-               state: KT
-             } = (0, yT.n)(fT.c.coPlayersFeed, null !== MT), OT = (0, jT.l)(), IT = (0, jT.o)("loaded" === KT.status ? KT.recentPlayers : []), AT = (0, lT.useRef)({
-               leftAt: 0,
-               coPlayers: []
-             }), CT = (0, lT.useMemo)((() => {
-               if (null === MT) return [];
-               const TT = (AT.current.leftAt === MT.leftAt ? AT.current.coPlayers : []).filter((TT => !OT.has(TT.preview.name))),
-                 kT = new Set(TT.map((TT => TT.preview.name))),
-                 cT = (0, xT.D)(IT, MT, kT).slice(0, Math.max(0, xT.n - TT.length));
-               return [...TT, ...cT]
-             }), [MT, IT, OT]);
-             return (0, lT.useEffect)((() => {
- ... (8 more removed lines; see GitHub link above)
+             const Eq = Object.keys(qq.shape);
+             for (const lq of Eq)
+               if (!qq.shape?.[lq]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${lq}": expected a Zod schema`);
+             const gq = (Yq = qq.shape, Object.keys(Yq).filter((qq => "optional" === Yq[qq]._zod.optin && "optional" === Yq[qq]._zod.optout)));
+             var Yq;
+             return {
+               ...qq,
+               keys: Eq,
+               keySet: new Set(Eq),
+               numKeys: Eq.length,
+               optionalKeys: new Set(gq)
```

#### 681. `bundles/bloxd.io/main.js` (Changed code · before: `L32907-L32955` → after: `L11202-L11282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11202-L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11202-L11282) · [Before (L32907-L32955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32907-L32955)

```diff
-           function NT(TT) {
-             let {
-               leftGame: kT,
-               coPlayers: cT,
-               inSidebar: lT
-             } = TT;
-             const {
-               t: MT
-             } = (0, OT.B)(), yT = (0, jT.r)();
-             return (0, tT.jsxs)("div", {
-               className: KT()("LeftGamePromptCard AnimFadeIn", {
-                 SocialBarSection: lT,
-                 LeftGamePromptCardInFlow: !lT
-               }),
-               children: [(0, tT.jsxs)("div", {
-                 className: "LeftGamePromptCardHeader",
- ... (33 more removed lines; see GitHub link above)
+           function lE(qq, Eq, gq, Yq, lq, Oq) {
+             const mq = [],
+               xq = lq.keySet,
+               Aq = lq.catchall._zod,
+               cq = Aq.def.type,
+               uq = "optional" === Aq.optout;
+             for (const Bq in Eq) {
+               if (xq.has(Bq)) continue;
+               if ("never" === cq) {
+                 mq.push(Bq);
+                 continue
+               }
+               const lq = Aq.run({
+                 value: Eq[Bq],
+                 issues: []
+               }, Yq);
+ ... (65 more added lines; see GitHub link above)
```

#### 682. `bundles/bloxd.io/main.js` (Changed code · before: `L32957-L32966` → after: `L11284-L11293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11284-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11284-L11293) · [Before (L32957-L32966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32957-L32966)

```diff
-           function QT() {
-             const {
-               leftGame: TT,
-               coPlayers: kT
-             } = hT(!0);
-             return null === TT || 0 === kT.length ? null : (0, tT.jsx)(NT, {
-               leftGame: TT,
-               coPlayers: kT,
-               inSidebar: !1
-             })
+           function mE(qq, Eq, gq, Yq) {
+             for (const Oq of qq)
+               if (0 === Oq.issues.length) return Eq.value = Oq.value, Eq;
+             const lq = qq.filter((qq => !tq(qq)));
+             return 1 === lq.length ? (Eq.value = lq[0].value, lq[0]) : (Eq.issues.push({
+               code: "invalid_union",
+               input: Eq.value,
+               inst: gq,
+               errors: qq.map((qq => qq.issues.map((qq => hq(qq, Yq, xq())))))
+             }), Eq)
```

#### 683. `bundles/bloxd.io/main.js` (Changed code · before: `L32970-L32976` → after: `L11484-L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11484-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11484-L11487) · [Before (L32970-L32976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32970-L32976)

```diff
-             const {
-               state: cT
-             } = (0, yT.n)(yT.k, TT), MT = (0, jT.o)("loaded" === cT.status ? cT.recentPlayers : []);
-             return (0, lT.useMemo)((() => {
-               if (!TT) return [];
-               return MT.filter((TT => null === kT || !(0, xT.z)(TT, kT))).slice(0, xT.H)
-             }), [TT, MT, kT])
+             return qq.issues.length && void 0 === Eq ? {
+               issues: [],
+               value: void 0
+             } : qq
```

#### 684. `bundles/bloxd.io/main.js` (Changed code · before: `L32979-L32999` → after: `L11516-L11517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11516-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11516-L11517) · [Before (L32979-L32999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L32979-L32999)

```diff
-           function DT(TT) {
-             let {
-               recentPlayers: kT
-             } = TT;
-             const {
-               t: cT
-             } = (0, OT.B)(), lT = (0, jT.r)();
-             return (0, tT.jsxs)("div", {
-               className: "SocialBarSection SocialBarRecentPlayers AnimFadeIn",
-               children: [(0, tT.jsx)(vT.c, {
-                 label: cT("recentPlayers:title")
-               }), (0, tT.jsx)("div", {
-                 className: "PlayerRows",
-                 children: kT.map(((TT, cT) => (0, tT.jsx)(jT.f, {
-                   recentPlayer: TT,
-                   now: lT,
- ... (5 more removed lines; see GitHub link above)
+           function jE(qq, Eq) {
+             return void 0 === qq.value && (qq.value = Eq.defaultValue), qq
```

#### 685. `bundles/bloxd.io/main.js` (Changed code · before: `L33001-L33027` → after: `L11519-L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11519-L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11519-L11528) · [Before (L33001-L33027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33001-L33027)

```diff
-         },
-         2744: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => bT,
-             f: () => PT,
-             h: () => rT,
-             l: () => FT,
-             o: () => aT,
-             r: () => DT
-           });
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(339),
-             yT = cT(1195),
-             fT = cT(2724),
- ... (11 more removed lines; see GitHub link above)
+           const HE = Yq("$ZodPipe", ((qq, Eq) => {
+             wq.init(qq, Eq), Nq(qq._zod, "values", (() => Eq.in._zod.values)), Nq(qq._zod, "optin", (() => Eq.in._zod.optin)), Nq(qq._zod, "optout", (() => Eq.out._zod.optout)), Nq(qq._zod, "propValues", (() => Eq.in._zod.propValues)), qq._zod.parse = (qq, gq) => {
+               if ("backward" === gq.direction) {
+                 const Yq = Eq.out._zod.run(qq, gq);
+                 return Yq instanceof Promise ? Yq.then((qq => oE(qq, Eq.in, gq))) : oE(Yq, Eq.in, gq)
+               }
+               const Yq = Eq.in._zod.run(qq, gq);
+               return Yq instanceof Promise ? Yq.then((qq => oE(qq, Eq.out, gq))) : oE(Yq, Eq.out, gq)
+             }
+           }));
```

#### 686. `bundles/bloxd.io/main.js` (Changed code · before: `L33029-L33036` → after: `L11530-L11564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11530-L11564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11530-L11564) · [Before (L33029-L33036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33029-L33036)

```diff
-           function DT() {
-             const [TT, kT] = (0, lT.useState)(Date.now);
-             return (0, lT.useEffect)((() => {
-               const TT = setInterval((() => {
-                 kT(Date.now())
-               }), ST);
-               return () => {
-                 clearInterval(TT)
+           function oE(qq, Eq, gq) {
+             return qq.issues.length ? (qq.aborted = !0, qq) : Eq._zod.run({
+               value: qq.value,
+               issues: qq.issues
+             }, gq)
+           }
+           var PE;
+           Symbol("ZodOutput"), Symbol("ZodInput");
+           class QE {
+             constructor() {
+               this._map = new WeakMap, this._idmap = new Map
+             }
+             add(qq) {
+               const Eq = arguments.length <= 1 ? void 0 : arguments[1];
+               return this._map.set(qq, Eq), Eq && "object" === typeof Eq && "id" in Eq && this._idmap.set(Eq.id, qq), this
+             }
+ ... (19 more added lines; see GitHub link above)
```

#### 687. `bundles/bloxd.io/main.js` (Changed code · before: `L33038-L33052` → after: `L11566-L11572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11566-L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11566-L11572) · [Before (L33038-L33052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33038-L33052)

```diff
-             }), []), TT
-           }
- 
-           function aT(TT) {
-             const kT = FT();
-             return (0, lT.useMemo)((() => TT.filter((TT => !kT.has(TT.preview.name)))), [TT, kT])
-           }
- 
-           function FT() {
-             const {
-               friends: TT,
-               requests: kT
-             } = (0, xT.n)();
-             return (0, lT.useMemo)((() => new Set([...TT, ...kT].map((TT => TT.name)))), [TT, kT])
-           }
+               return this._map.get(qq)
+             }
+             has(qq) {
+               return this._map.has(qq)
+             }
+           }(PE = globalThis).__zod_globalRegistry ?? (PE.__zod_globalRegistry = new QE);
+           globalThis.__zod_globalRegistry;
```

#### 688. `bundles/bloxd.io/main.js` (Changed code · before: `L33054-L33088` → after: `L11574-L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11574-L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11574-L11579) · [Before (L33054-L33088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33054-L33088)

```diff
-           function rT() {
-             const {
-               t: TT
-             } = (0, yT.B)(), {
-               state: kT
-             } = (0, fT.n)(), cT = aT("loaded" === kT.status ? kT.recentPlayers : []), lT = DT(), MT = "loaded" === kT.status && 0 === cT.length;
-             return (0, QT.jsxs)("div", {
-               className: KT()("SocialMenuBox SocialMenuRecentPlayers", {
-                 SocialMenuBoxEmpty: MT
-               }),
-               children: [(0, QT.jsx)(NT.c, {
-                 label: TT("recentPlayers:title"),
-                 meta: "loaded" === kT.status ? cT.length : void 0
-               }), "loading" === kT.status && (0, QT.jsx)("div", {
-                 className: "SocialMenuLoading",
-                 children: (0, QT.jsx)(vT.d, {})
- ... (19 more removed lines; see GitHub link above)
+           function yE(qq, Eq) {
+             return new sq({
+               check: "string_format",
+               format: "regex",
+               ...yq(Eq),
+               pattern: qq
```

#### 689. `bundles/bloxd.io/main.js` (Changed code · before: `L33093-L33143` → after: `L11611-L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11611-L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11611-L11614) · [Before (L33093-L33143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33093-L33143)

```diff
-             let {
-               recentPlayer: kT,
-               now: cT,
-               zIndex: lT,
-               source: MT,
-               showPlayedTogether: KT = !0,
-               onRequestSent: OT
-             } = TT;
-             const {
-               t: xT
-             } = (0, yT.B)(), {
-               requestedNames: IT,
-               sendFriendRequest: jT
-             } = (0, fT.l)(), vT = kT.preview.name, NT = IT.has(vT), ST = xT(NT ? "recentPlayers:requested" : "recentPlayers:addFriend");
- 
-             function DT() {
- ... (35 more removed lines; see GitHub link above)
+             return function(qq, Eq) {
+               return new qq({
+                 type: "string",
+                 ...yq(Eq)
```

#### 690. `bundles/bloxd.io/main.js` (Changed code · before: `L33145-L33149` → after: `L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11616) · [Before (L33145-L33149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33145-L33149)

```diff
-             })
-           }
- 
-           function wT(TT, kT) {
-             return (0, IT.b)(TT, kT ? "private" : "1")
+             }(rE, qq)
```

#### 691. `bundles/bloxd.io/main.js` (Changed code · before: `L33153-L33169` → after: `L11623-L11627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11623-L11627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11623-L11627) · [Before (L33153-L33169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33153-L33169)

```diff
-             let {
-               recentPlayer: kT,
-               now: cT
-             } = TT;
-             const {
-               t: lT,
-               selectedLanguage: MT
-             } = (0, yT.B)(), KT = wT(kT.gameNameWithVariation, kT.isPrivateLobby), fT = kT.daysTogether >= 2 ? "recentPlayers:playedOnDays" : "recentPlayers:playedAgo", xT = (0, OT._)((0, yT.k)(MT.code, fT), kT.lastPlayedAt, cT);
-             return kT.daysTogether >= 2 ? (0, QT.jsx)(QT.Fragment, {
-               children: lT(fT, {
-                 count: kT.daysTogether,
-                 time: xT
-               })
-             }) : null === KT ? (0, QT.jsx)(vT.d, {}) : (0, QT.jsx)(QT.Fragment, {
-               children: lT(fT, {
-                 game: KT,
- ... (1 more removed lines; see GitHub link above)
+             return function(qq, Eq) {
+               return new qq({
+                 type: "number",
+                 checks: [],
+                 ...yq(Eq)
```

#### 692. `bundles/bloxd.io/main.js` (Changed code · before: `L33171` → after: `L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11629) · [Before (L33171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33171)

```diff
-             })
+             }(hE, qq)
```

#### 693. `bundles/bloxd.io/main.js` (Changed code · before: `L33175-L33184` → after: `L11636-L11639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11636-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11636-L11639) · [Before (L33175-L33184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33175-L33184)

```diff
-             let {
-               gameNameWithVariation: kT,
-               isPrivateLobby: cT
-             } = TT;
-             const {
-               t: lT
-             } = (0, yT.B)(), MT = wT(kT, cT);
-             return null === MT ? (0, QT.jsx)(vT.d, {}) : (0, QT.jsx)(QT.Fragment, {
-               children: lT("recentPlayers:playedTogether", {
-                 game: MT
+             return function(qq, Eq) {
+               return new qq({
+                 type: "boolean",
+                 ...yq(Eq)
```

#### 694. `bundles/bloxd.io/main.js` (Changed code · before: `L33186` → after: `L11641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11641) · [Before (L33186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33186)

```diff
-             })
+             }(bE, qq)
```

#### 695. `bundles/bloxd.io/main.js` (Changed code · before: `L33188-L33198` → after: `L11643-L11645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11643-L11645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11643-L11645) · [Before (L33188-L33198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33188-L33198)

```diff
-         },
-         2572: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => fT
-           });
-           cT(71);
-           var lT = cT(1663),
-             MT = cT(1195),
-             KT = cT(2065),
-             OT = cT(1061),
-             yT = cT(1099);
+           const ZE = Yq("ZodMiniUnknown", ((qq, Eq) => {
+             eq.init(qq, Eq), tE.init(qq, Eq)
+           }));
```

#### 696. `bundles/bloxd.io/main.js` (Changed code · before: `L33201-L33227` → after: `L11648-L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11648-L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11648-L11652) · [Before (L33201-L33227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33201-L33227)

```diff
-             const {
-               t: TT
-             } = (0, MT.B)(), {
-               friends: kT,
-               requests: cT
-             } = (0, lT.n)(), fT = (0, lT.f)(kT).length;
-             return (0, yT.jsxs)(yT.Fragment, {
-               children: [fT > 0 && (0, yT.jsxs)("span", {
-                 className: "SocialCountBadge SocialCountBadgeOnline",
-                 role: "img",
-                 "aria-label": TT("socialBar:onlineFriendCount", {
-                   count: fT
-                 }),
-                 children: [(0, yT.jsx)(OT.e, {
-                   name: KT.e
-                 }), fT]
- ... (11 more removed lines; see GitHub link above)
+             return function(qq) {
+               return new qq({
+                 type: "unknown"
+               })
+             }(ZE)
```

#### 697. `bundles/bloxd.io/main.js` (Changed code · before: `L33229-L33240` → after: `L11654-L11656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11654-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11654-L11656) · [Before (L33229-L33240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33229-L33240)

```diff
-         },
-         2665: (TT, kT, cT) => {
-           cT.d(kT, {
-             c: () => xT
-           });
-           cT(71);
-           var lT = cT(1046),
-             MT = cT.n(lT),
-             KT = cT(1470),
-             OT = cT(1486),
-             yT = cT(1497),
-             fT = cT(1099);
+           const ME = Yq("ZodMiniNever", ((qq, Eq) => {
+             Dq.init(qq, Eq), tE.init(qq, Eq)
+           }));
```

#### 698. `bundles/bloxd.io/main.js` (Changed code · before: `L33243-L33269` → after: `L11659-L11674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11659-L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11659-L11674) · [Before (L33243-L33269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33243-L33269)

```diff
-             let {
-               label: kT,
-               pills: cT,
-               meta: lT,
-               onClick: xT,
-               analyticsClick: IT
-             } = TT;
-             return (0, fT.jsxs)("div", {
-               className: MT()("SocialSectionTitle", {
-                 SocialSectionTitleClickable: void 0 !== xT
-               }),
-               onClick: xT,
-               ...void 0 !== xT ? {
-                 ...(0, KT.X)(),
-                 ...OT.g
-               } : {},
- ... (11 more removed lines; see GitHub link above)
+             return function(qq, Eq) {
+               return new qq({
+                 type: "never",
+                 ...yq(Eq)
+               })
+             }(ME, qq)
+           }
+           const zE = Yq("ZodMiniArray", ((qq, Eq) => {
+             EE.init(qq, Eq), tE.init(qq, Eq)
+           }));
+ 
+           function SE(qq, Eq) {
+             return new zE({
+               type: "array",
+               element: qq,
+               ...yq(Eq)
```

#### 699. `bundles/bloxd.io/main.js` (Changed code · before: `L33272-L33282` → after: `L11677-L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11677-L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11677-L11679) · [Before (L33272-L33282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33272-L33282)

```diff
-         },
-         3551: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => MT,
-             h: () => lT,
-             k: () => KT
-           });
-           const lT = {
-             blocked: "unblock",
-             ignored: "unignore"
-           };
+           const pE = Yq("ZodMiniObject", ((qq, Eq) => {
+             OE.init(qq, Eq), tE.init(qq, Eq), Nq(qq, "shape", (() => Eq.shape))
+           }));
```

#### 700. `bundles/bloxd.io/main.js` (Changed code · before: `L33285-L33287` → after: `L11682-L11687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11682-L11687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11682-L11687) · [Before (L33285-L33287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33285-L33287)

```diff
-             if ("blocked" === TT) return [lT.blocked];
-             const cT = null === TT ? "ignore" : lT[TT];
-             return kT ? [cT, "block"] : [cT]
+             const gq = {
+               type: "object",
+               shape: qq ?? {},
+               ...yq(Eq)
+             };
+             return new pE(gq)
```

#### 701. `bundles/bloxd.io/main.js` (Changed code · before: `L33289-L33309` → after: `L11689-L11696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11689-L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11689-L11696) · [Before (L33289-L33309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33289-L33309)

```diff
-           const KT = {
-             ignore: {
-               icon: "eye-slash",
-               text: "socialBar:ignorePlayer",
-               info: "socialBar:ignorePlayerInfo"
-             },
-             unignore: {
-               icon: "eye",
-               text: "socialBar:unignorePlayer",
-               info: null
-             },
-             block: {
-               icon: "ban",
-               text: "socialBar:blockPlayer",
-               info: "socialBar:blockPlayerInfo"
-             },
- ... (5 more removed lines; see GitHub link above)
+ 
+           function LE(qq, Eq) {
+             return new pE({
+               type: "object",
+               shape: qq,
+               catchall: TE(),
+               ...yq(Eq)
+             })
```

#### 702. `bundles/bloxd.io/main.js` (Changed code · before: `L33333-L33362` → after: `L11699-L11706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11699-L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11699-L11706) · [Before (L33333-L33362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33333-L33362)

```diff
-           function QT(TT) {
-             var kT, cT;
-             let {
-               target: lT,
-               close: MT
-             } = TT;
-             const [OT, yT] = (0, IT.useState)(!1), [xT, QT] = (0, IT.useState)(!1), {
-               playerName: ST,
-               inGame: DT
-             } = lT, {
-               gameState: aT
-             } = (0, fT.n)(["gameState"]);
-             if ((0, IT.useEffect)((() => {
-                 null !== DT && "inGame" !== aT && MT()
-               }), [DT, aT, MT]), !OT) return (0, NT.jsx)(vT.e, {
-               title: "general:reportPlayerAfterBlock",
- ... (14 more removed lines; see GitHub link above)
+           function JE(qq, Eq) {
+             return function(qq, Eq) {
+               if (!Hq(Eq)) throw new Error("Invalid input to extend: expected a plain object");
+               const gq = qq._zod.def.checks;
+               if (gq && gq.length > 0) {
+                 const gq = qq._zod.def.shape;
+                 for (const qq in Eq)
+                   if (void 0 !== Object.getOwnPropertyDescriptor(gq, qq)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")
```

#### 703. `bundles/bloxd.io/main.js` (Changed code · before: `L33364-L33391` → after: `L11708-L11714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11708-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11708-L11714) · [Before (L33364-L33391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33364-L33391)

```diff
-             });
-             return (0, NT.jsx)(tT.c, {
-               reported: {
-                 kind: "player",
-                 shownPlayerName: ST,
-                 onSubmit: (TT, kT) => {
-                   var cT, lT;
-                   null !== DT ? (MT(), (0, hT.b)({
-                     playerId: DT.playerId,
-                     playerName: ST,
-                     chatMsgId: null !== (cT = null === (lT = DT.chatMessage) || void 0 === lT ? void 0 : lT.serverChatMsgId) && void 0 !== cT ? cT : null,
-                     policyId: TT,
-                     details: kT,
-                     onAccepted: null
-                   })) : (async (TT, kT) => {
-                     QT(!0);
- ... (12 more removed lines; see GitHub link above)
+               const Yq = Vq(qq._zod.def, {
+                 get shape() {
+                   const gq = {
+                     ...qq._zod.def.shape,
+                     ...Eq
+                   };
+                   return aq(this, "shape", gq), gq
```

#### 704. `bundles/bloxd.io/main.js` (Changed code · before: `L33393-L33397` → after: `L11716-L11728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11716-L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11716-L11728) · [Before (L33393-L33397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33393-L33397)

```diff
-               },
-               chatMessage: null !== (kT = null === DT || void 0 === DT || null === (cT = DT.chatMessage) || void 0 === cT ? void 0 : cT.text) && void 0 !== kT ? kT : null,
-               inGame: null !== DT,
-               submitting: xT,
-               onCancel: MT
+               });
+               return Qq(qq, Yq)
+             }(qq, Eq)
+           }
+           const kE = Yq("ZodMiniUnion", ((qq, Eq) => {
+             xE.init(qq, Eq), tE.init(qq, Eq)
+           }));
+ 
+           function RE(qq, Eq) {
+             return new kE({
+               type: "union",
+               options: qq,
+               ...yq(Eq)
```

#### 705. `bundles/bloxd.io/main.js` (Changed code · before: `L33401-L33444` → after: `L11735-L11741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11735-L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11735-L11741) · [Before (L33401-L33444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33401-L33444)

```diff
-           function ST(TT) {
-             if ("inGame" !== fT.e.get("gameState")) return null;
-             const kT = yT.gameBridge.latest("players"),
-               cT = kT.ids.find((cT => {
-                 var lT;
-                 return cT !== kT.localId && (null === (lT = kT.byId[cT]) || void 0 === lT ? void 0 : lT.name) === TT
-               }));
-             return null !== cT && void 0 !== cT ? cT : null
-           }
-           async function DT(TT, kT) {
-             if (!0 === await MT.NotificationProvider.showPromptPopup({
-                 title: "socialBar:blockPlayerConfirm",
-                 subtitle: "socialBar:blockPlayerInfo",
-                 confirmText: "socialBar:blockPlayer",
-                 cancelText: "general:cancel",
-                 textOpts: {
- ... (28 more removed lines; see GitHub link above)
+           function FE(qq, Eq, gq) {
+             return new UE({
+               type: "union",
+               options: Eq,
+               discriminator: qq,
+               ...yq(gq)
+             })
```

#### 706. `bundles/bloxd.io/main.js` (Changed code · before: `L33448-L33456` → after: `L11748-L11752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11748-L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11748-L11752) · [Before (L33448-L33456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33448-L33456)

```diff
-             if ("block" === TT) return void DT(kT, cT);
-             if ("unblock" === TT) return void OT.d.change(TT, kT);
-             const MT = ST(kT);
-             if (null !== MT) return yT.gameBridge.send("ignorePlayer", MT), void OT.d.noteChangedInGame(TT, kT);
-             lT.featureFlags.useSocialFeatures ? OT.d.change(TT, kT) : KT.g.showMessage({
-               translationKey: "socialBar:playerNotInGame",
-               params: {
-                 playerName: kT
-               }
+             return new sE({
+               type: "record",
+               keyType: qq,
+               valueType: Eq,
+               ...yq(gq)
```

#### 707. `bundles/bloxd.io/main.js` (Changed code · before: `L33461-L33476` → after: `L11760-L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11760-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11760-L11765) · [Before (L33461-L33476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33461-L33476)

```diff
-             let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-             return (0, xT.e)(TT, lT.featureFlags.useSocialFeatures).map((TT => {
-               const {
-                 icon: lT,
-                 text: MT
-               } = xT.k[TT];
-               return {
-                 icon: lT,
-                 text: MT,
-                 onPointerDown: () => {
-                   aT(TT, kT, {
-                     chatMessage: cT
-                   })
-                 }
-               }
-             }))
+             const gq = Array.isArray(qq) ? Object.fromEntries(qq.map((qq => [qq, qq]))) : qq;
+             return new wE({
+               type: "enum",
+               entries: gq,
+               ...yq(Eq)
+             })
```

#### 708. `bundles/bloxd.io/main.js` (Changed code · before: `L33478-L33485` → after: `L11767-L11769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11767-L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11767-L11769) · [Before (L33478-L33485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33478-L33485)

```diff
-         },
-         2051: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => OT
-           });
-           var lT = cT(71),
-             MT = cT(1996),
-             KT = cT(2056);
+           const CE = Yq("ZodMiniLiteral", ((qq, Eq) => {
+             BE.init(qq, Eq), tE.init(qq, Eq)
+           }));
```

#### 709. `bundles/bloxd.io/main.js` (Changed code · before: `L33487-L33492` → after: `L11771-L11776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11771-L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11771-L11776) · [Before (L33487-L33492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33487-L33492)

```diff
-           function OT(TT) {
-             const kT = (0, MT.h)("hiddenPlayerNames"),
-               [cT, OT] = (0, lT.useState)((() => (0, KT.g)(TT, kT)));
-             return (0, lT.useEffect)((() => (OT((0, KT.g)(TT, kT)), (0, KT.d)((() => {
-               OT((0, KT.g)(TT, kT))
-             })))), [TT, kT]), cT
+           function IE(qq, Eq) {
+             return new CE({
+               type: "literal",
+               values: Array.isArray(qq) ? qq : [qq],
+               ...yq(Eq)
+             })
```

#### 710. `bundles/bloxd.io/main.js` (Changed code · before: `L33494-L33519` → after: `L11778-L11780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11778-L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11778-L11780) · [Before (L33494-L33519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33494-L33519)

```diff
-         },
-         2576: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => nT
-           });
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(1470),
-             yT = cT(1130),
-             fT = cT(2582),
-             xT = cT(1195),
-             IT = cT(328),
-             AT = cT(184),
-             CT = cT(339),
-             jT = cT(1214),
- ... (10 more removed lines; see GitHub link above)
+           const eE = Yq("ZodMiniTransform", ((qq, Eq) => {
+             WE.init(qq, Eq), tE.init(qq, Eq)
+           }));
```

#### 711. `bundles/bloxd.io/main.js` (Changed code · before: `L33521-L33582` → after: `L11782-L11785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11782-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11782-L11785) · [Before (L33521-L33582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33521-L33582)

```diff
-           function PT() {
-             const {
-               userContext: TT,
-               isUserContextUpdating: kT
-             } = (0, yT.b)();
-             if ((0, tT.n)(["openEverythingMenuName"]), (0, lT.useEffect)((() => {
-                 kT || QT.e.setItem(rT, TT.isLoggedIn())
-               }), [kT, TT]), kT) return (0, FT.jsx)("div", {
-               className: "OwnProfilePreview OwnProfilePreviewLoading",
-               "aria-busy": !0,
-               children: (0, FT.jsxs)("div", {
-                 className: "OwnProfilePreviewCard",
-                 "aria-hidden": !0,
-                 children: [(0, FT.jsxs)("div", {
-                   className: "OwnProfilePreviewSkeletonRow",
-                   children: [(0, FT.jsx)("div", {
- ... (46 more removed lines; see GitHub link above)
+           function DE(qq) {
+             return new eE({
+               type: "transform",
+               transform: qq
```

#### 712. `bundles/bloxd.io/main.js` (Changed code · before: `L33586-L33600` → after: `L11792-L11795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11792-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11792-L11795) · [Before (L33586-L33600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33586-L33600)

```diff
-           function wT() {
-             const {
-               t: TT
-             } = (0, xT.B)();
-             return (0, FT.jsxs)("div", {
-               className: "OwnProfilePreviewLoginWarning",
-               children: [(0, FT.jsx)("div", {
-                 className: "OwnProfilePreviewLoginWarningIcon",
-                 children: (0, FT.jsx)(ST.e, {
-                   name: "triangle-exclamation"
-                 })
-               }), (0, FT.jsx)("div", {
-                 className: "OwnProfilePreviewLoginWarningText",
-                 children: TT("socialBar:logInToSaveProgress")
-               })]
+           function Eg(qq) {
+             return new qg({
+               type: "optional",
+               innerType: qq
```

#### 713. `bundles/bloxd.io/main.js` (Changed code · before: `L33603-L33622` → after: `L11798-L11800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11798-L11800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11798-L11800) · [Before (L33603-L33622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33603-L33622)

```diff
-           var mT = cT(2642),
-             bT = cT(2660),
-             zT = cT(2665),
-             JT = cT(2572),
-             oT = cT(2668),
-             HT = cT(2065),
-             eT = cT(2315),
-             GT = cT(159),
-             VT = cT(2305),
-             ET = cT(2687),
-             ZT = cT(2532),
-             uT = cT(2556),
-             XT = cT(2123),
-             dT = cT(2709),
-             LT = cT(1663),
-             RT = cT(2712),
- ... (4 more removed lines; see GitHub link above)
+           const gg = Yq("ZodMiniNullable", ((qq, Eq) => {
+             VE.init(qq, Eq), tE.init(qq, Eq)
+           }));
```

#### 714. `bundles/bloxd.io/main.js` (Changed code · before: `L33624-L33626` → after: `L11802-L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11802-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11802-L11805) · [Before (L33624-L33626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33624-L33626)

```diff
-           function WT() {
-             tT.e.set({
-               openEverythingMenuName: IT.o.SOCIAL
+           function Yg(qq) {
+             return new gg({
+               type: "nullable",
+               innerType: qq
```

#### 715. `bundles/bloxd.io/main.js` (Changed code · before: `L33629-L33635` → after: `L11808-L11809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11808-L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11808-L11809) · [Before (L33629-L33635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33629-L33635)

```diff
-           const nT = (0, lT.memo)((function() {
-             const {
-               gameState: TT
-             } = (0, tT.n)(["gameState"]);
-             return "landingPage" !== TT && "studio" !== TT ? (0, FT.jsx)(pT, {}) : (0, FT.jsx)(iT, {
-               inStudio: "studio" === TT
-             })
+           const lg = Yq("ZodMiniDefault", ((qq, Eq) => {
+             dE.init(qq, Eq), tE.init(qq, Eq)
```

#### 716. `bundles/bloxd.io/main.js` (Changed code · before: `L33638-L33719` → after: `L11812-L11821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11812-L11821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11812-L11821) · [Before (L33638-L33719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33638-L33719)

```diff
-           function pT() {
-             const TT = (0, fT.e)(),
-               {
-                 partyInformation: kT
-               } = (0, vT.f)(),
-               {
-                 friends: cT,
-                 requests: lT
-               } = (0, LT.n)();
-             return (0, FT.jsx)("div", {
-               className: "SocialBarContainer",
-               children: (0, FT.jsx)("div", {
-                 className: "SocialBarOuter",
-                 children: (0, FT.jsx)("div", {
-                   className: "SocialBar",
-                   children: (0, FT.jsx)("div", {
- ... (66 more removed lines; see GitHub link above)
+           function Og(qq, Eq) {
+             return new lg({
+               type: "default",
+               innerType: qq,
+               get defaultValue() {
+                 return "function" === typeof Eq ? Eq() : Hq(qq = Eq) ? {
+                   ...qq
+                 } : Array.isArray(qq) ? [...qq] : qq;
+                 var qq
+               }
```

#### 717. `bundles/bloxd.io/main.js` (Changed code · before: `L33723-L34005` → after: `L11828-L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11828-L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11828-L11832) · [Before (L33723-L34005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L33723-L34005)

```diff
-           function iT(TT) {
-             var kT;
-             let {
-               inStudio: cT
-             } = TT;
-             const {
-               t: lT
-             } = (0, xT.B)(), {
-               hideSocialLocationFrom: MT
-             } = (0, tT.n)(["hideSocialLocationFrom", "initSdkSelectorFinished"]), {
-               userContext: fT
-             } = (0, yT.b)(), NT = (0, VT.I)(), {
-               followsLeader: QT
-             } = (0, vT.f)(), {
-               loading: DT,
-               loaded: aT,
- ... (267 more removed lines; see GitHub link above)
+           function xg(qq, Eq) {
+             return new mg({
+               type: "pipe",
+               in: qq,
+               out: Eq
```

#### 718. `bundles/bloxd.io/main.js` (Changed code · before: `L34008-L34009` → after: `L11835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11835) · [Before (L34008-L34009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34008-L34009)

```diff
-         },
-         3033: (TT, kT, cT) => {
+         }, , , , (qq, Eq, gq) => {
```

#### 719. `bundles/bloxd.io/main.js` (Changed code · before: `L34011` → after: `L11837-L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11837-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11837-L11841) · [Before (L34011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34011)

```diff
-             d: () => fT
+             c: () => cq,
+             d: () => xq,
+             e: () => mq,
+             f: () => uq,
+             j: () => Aq
```

#### 720. `bundles/bloxd.io/main.js` (Changed code · before: `L34013-L34038` → after: `L11843-L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11843-L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11843-L11865) · [Before (L34013-L34038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34013-L34038)

```diff
-           var lT = cT(1046),
-             MT = cT.n(lT),
-             KT = cT(1195),
-             OT = cT(1099);
-           const yT = {
-             common: {
-               key: "store:tierCommon",
-               className: "StoreTierLabelCommon"
-             },
-             rare: {
-               key: "store:tierRare",
-               className: "StoreTierLabelRare"
-             },
-             epic: {
-               key: "store:tierEpic",
-               className: "StoreTierLabelEpic"
- ... (10 more removed lines; see GitHub link above)
+           var Yq = gq(147),
+             lq = gq(160);
+           const Oq = Yq.s({
+               safeArea: lq.g,
+               notificationCanAsk: Yq.e(),
+               pushToken: Yq.o(Yq.M()),
+               privacyOptionsRequired: Yq.o(Yq.e())
+             }),
+             mq = Yq.s({
+               protocol: Yq.q(),
+               platform: Yq.k(["ios", "android"]),
+               appVersion: Yq.M(),
+               build: Yq.M(),
+               capabilities: Yq.C(Yq.M(), Yq.q())
+             }),
+             xq = Yq.l(mq, {
+ ... (7 more added lines; see GitHub link above)
```

#### 721. `bundles/bloxd.io/main.js` (Changed code · before: `L34040-L34051` → after: `L11867-L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11867-L11869) · [Before (L34040-L34051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34040-L34051)

```diff
-           function fT(TT) {
-             let {
-               tier: kT,
-               className: cT
-             } = TT;
-             const {
-               t: lT
-             } = (0, KT.B)(), fT = yT[kT];
-             return (0, OT.jsx)("span", {
-               className: MT()("StoreTierLabel", fT.className, cT),
-               children: lT(fT.key)
-             })
+           function uq(qq, Eq) {
+             let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+             return Object.prototype.hasOwnProperty.call(qq.capabilities, Eq) && qq.capabilities[Eq] >= gq
```

#### 722. `bundles/bloxd.io/main.js` (Changed code · before: `L34053-L34054` → after: `L11871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11871) · [Before (L34053-L34054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34053-L34054)

```diff
-         },
-         2687: (TT, kT, cT) => {
+         }, , , , , , , , , (qq, Eq, gq) => {
```

#### 723. `bundles/bloxd.io/main.js` (Changed code · before: `L34059-L34064` → after: `L11877-L11895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11877-L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11877-L11895) · [Before (L34059-L34064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34059-L34064)

```diff
-           var lT = cT(2696),
-             MT = cT(1195),
-             KT = cT(2305),
-             OT = cT(1061),
-             yT = cT(2286),
-             fT = cT(1099);
+           var Yq = gq(147);
+           const lq = Yq.s({
+               top: Yq.q(),
+               right: Yq.q(),
+               bottom: Yq.q(),
+               left: Yq.q()
+             }),
+             Oq = {
+               setOrientation: Yq.s({
+                 orientation: Yq.k(["portrait", "landscape", "default"])
+               })
+             },
+             mq = {
+               safeArea: lq
+             }
+         }, , , (qq, Eq, gq) => {
+ ... (3 more added lines; see GitHub link above)
```

#### 724. `bundles/bloxd.io/main.js` (Changed code · before: `L34066-L34080` → after: `L11897-L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11897-L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11897-L11898) · [Before (L34066-L34080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34066-L34080)

```diff
-           function xT() {
-             const TT = (0, lT.g)();
-             return (0, fT.jsxs)("span", {
-               className: "StoreWallet",
-               children: [(0, fT.jsx)(yT.d, {
-                 className: "PremiumCurrencyAmountBalance",
-                 amount: TT
-               }), (0, fT.jsx)("div", {
-                 className: "StoreWalletPlusContainer",
-                 children: (0, fT.jsx)(OT.e, {
-                   name: "plus",
-                   className: "StoreWalletPlus"
-                 })
-               })]
-             })
+           function lq(qq) {
+             return "inGame" === qq.status && !0 === qq.inMatch
```

#### 725. `bundles/bloxd.io/main.js` (Changed code · before: `L34083-L34098` → after: `L11901-L11902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11901-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11901-L11902) · [Before (L34083-L34098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34083-L34098)

```diff
-           function IT() {
-             const {
-               t: TT
-             } = (0, MT.B)();
-             return (0, fT.jsx)("button", {
-               type: "button",
-               className: "SocialBarWallet",
-               title: TT("homePage:getPremiumCurrency"),
-               onClick: () => {
-                 (0, KT.p)({
-                   mode: "current",
-                   source: "socialBarWallet"
-                 })
-               },
-               children: (0, fT.jsx)(xT, {})
-             })
+           function Oq(qq) {
+             return "inGame" === qq.status && !0 === qq.lobbyFull
```

#### 726. `bundles/bloxd.io/main.js` (Changed code · before: `L34103` → after: `L11905-L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11905-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11905-L11919) · [Before (L34103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34103)

```diff
-             b: () => IT
+             C: () => Vq,
+             D: () => jq,
+             b: () => Aq,
+             d: () => dq,
+             e: () => Nq,
+             h: () => cq,
+             j: () => mq,
+             k: () => xq,
+             n: () => Yq,
+             r: () => lq,
+             t: () => Oq,
+             u: () => Bq,
+             v: () => Wq,
+             w: () => uq,
+             z: () => aq
```

#### 727. `bundles/bloxd.io/main.js` (Changed code · before: `L34105-L34257` → after: `L11921-L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11921-L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11921-L11928) · [Before (L34105-L34257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34105-L34257)

```diff
-           var lT = cT(1046),
-             MT = cT.n(lT),
-             KT = cT(602),
-             OT = cT(1214),
-             yT = cT(1195),
-             fT = cT(1061),
-             xT = cT(1099);
- 
-           function IT() {
-             const {
-               t: TT
-             } = (0, yT.B)(), kT = {
-               playBloxd: {
-                 element: (0, xT.jsx)(xT.Fragment, {
-                   children: "Play Bloxd"
-                 }),
- ... (137 more removed lines; see GitHub link above)
+           const mq = 3e5,
+             xq = 3e4;
+           class Aq extends Error {
+             constructor(qq, Eq, gq, Yq) {
+               let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+                 Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
+               super(Eq), this.httpCode = qq, this.errorMessageForUser = gq, this.errorMessageTranslationParams = Yq, this.responseBody = lq, this.retryAfterMs = Oq, this.name = "BadHttpCodeError"
+             }
```

#### 728. `bundles/bloxd.io/main.js` (Changed code · before: `L34259-L34260` → after: `L11930-L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11930-L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11930-L11982) · [Before (L34259-L34260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34259-L34260)

```diff
-         },
-         3028: (TT, kT, cT) => {
+           let cq = function(qq) {
+             return qq[qq.LOAD_REQUIRED_LIBS = 0] = "LOAD_REQUIRED_LIBS", qq[qq.REQUEST_TO_MATCHMAKING = 1] = "REQUEST_TO_MATCHMAKING", qq[qq.INITIALISE_WEBGL = 2] = "INITIALISE_WEBGL", qq[qq.INITIALISE_NOA = 3] = "INITIALISE_NOA", qq[qq.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES = 4] … [truncated]
+           }({});
+           const uq = {
+               [cq.LOAD_REQUIRED_LIBS]: .05,
+               [cq.REQUEST_TO_MATCHMAKING]: .05,
+               [cq.INITIALISE_WEBGL]: 0,
+               [cq.INITIALISE_NOA]: .05,
+               [cq.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES]: .1,
+               [cq.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1]: .15,
+               [cq.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2]: .1,
+               [cq.TEXTURE_PACK_GENERATE_ARMOUR_ATLAS]: .05,
+               [cq.REGISTRATION]: .3,
+               [cq.SETUP_LIFEFORMS]: .1,
+               [cq.CONNECT_TO_GAME_SERVER]: .05,
+               [cq.SHADER_PACK]: 0
+ ... (37 more added lines; see GitHub link above)
```

#### 729. `bundles/bloxd.io/main.js` (Changed code · before: `L34262` → after: `L11984-L12001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11984-L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L11984-L12001) · [Before (L34262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34262)

```diff
-             e: () => fT,
+             c: () => Aq
+           });
+           var Yq = gq(151),
+             lq = gq(140),
+             Oq = gq(38),
+             mq = gq(106);
+           const xq = "appCheck";
+           const Aq = function() {
+             if (mq.currentUrl.hasSearchParam(xq)) {
+               const qq = "1" === mq.currentUrl.getSearchParam(xq);
+               mq.currentUrl.removeSearchParam(xq), qq ? Oq.k.setItem(xq, "1") : Oq.k.removeItem(xq)
+             }
+             const qq = (0, lq.e)();
+             return null !== qq ? (0, Yq.f)(qq, "appCheck") : !!(0, lq.g)() || "1" === Oq.k.getItem(xq) && void 0 !== window.ReactNativeWebView
+           }()
+         }, , , , , (qq, Eq, gq) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 730. `bundles/bloxd.io/main.js` (Changed code · before: `L34265` → after: `L12004-L12007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12004-L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12004-L12007) · [Before (L34265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34265)

```diff
-             i: () => jT
+             j: () => Wq,
+             m: () => aq,
+             q: () => Vq,
+             s: () => Nq
```

#### 731. `bundles/bloxd.io/main.js` (Changed code · before: `L34267-L34270` → after: `L12009-L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12009-L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12009-L12014) · [Before (L34267-L34270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34267-L34270)

```diff
-           var lT = cT(71),
-             MT = cT(2323),
-             KT = cT(275),
-             OT = cT(2308);
+           var Yq = gq(179);
+           const lq = /vmware|svga3d|virtualbox|parallels|hyper-v|qxl|virgl|virtio|red hat|citrix|bochs|qemu|remote display/i,
+             Oq = /microsoft basic render|\bwarp\b/i,
+             mq = /llvmpipe|softpipe|swrast|lavapipe|software rasterizer/i,
+             xq = /swiftshader|\bsoftware\b/i,
+             Aq = /^(mozilla|webkit|webkit webgl)?$/i;
```

#### 732. `bundles/bloxd.io/main.js` (Changed code · before: `L34273` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12017) · [Before (L34273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34273)

```diff
-             return (0, OT.p)(TT)[0]
+             return Aq.test(qq.trim())
```

#### 733. `bundles/bloxd.io/main.js` (Changed code · before: `L34277` → after: `L12021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12021) · [Before (L34277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34277)

```diff
-             return `/textures/charSkins/previews/camera/${function(TT){return`character_${TT}.webp`}(TT)}`
+             return Oq.test(qq) || mq.test(qq) || xq.test(qq)
```

#### 734. `bundles/bloxd.io/main.js` (Changed code · before: `L34282-L34293` → after: `L12025-L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12025-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12025-L12027) · [Before (L34282-L34293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34282-L34293)

```diff
-             for (let kT = TT.parentElement; null !== kT; kT = kT.parentElement) {
-               const {
-                 overflowY: TT
-               } = getComputedStyle(kT);
-               if ("auto" === TT || "scroll" === TT) return kT
-             }
-             return null
-           }
- 
-           function AT() {
-             var TT;
-             return !0 === (null === (TT = navigator.connection) || void 0 === TT ? void 0 : TT.saveData)
+             if (null === qq) return "no_webgl";
+             const Eq = `${qq.vendor} ${qq.renderer}`;
+             return lq.test(Eq) ? "vm" : qq.majorPerformanceCaveat && (uq(Eq) || cq(qq.renderer)) ? "browser_fallback" : Oq.test(Eq) ? "no_driver" : mq.test(Eq) ? "mesa" : xq.test(Eq) ? "other_software" : "none"
```

#### 735. `bundles/bloxd.io/main.js` (Changed code · before: `L34297-L34301` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12031) · [Before (L34297-L34301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34297-L34301)

```diff
-             (0, lT.useEffect)((() => {
-               if (!AT()) return (0, KT.e)((() => {
-                 for (const kT of (0, OT.p)(TT))(0, MT.f)(fT(kT))
-               }))
-             }), [TT])
+             return "vm" === qq || Yq.i.includes(qq)
```

#### 736. `bundles/bloxd.io/main.js` (Changed code · before: `L34305-L34324` → after: `L12039-L12051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12039-L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12039-L12051) · [Before (L34305-L34324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34305-L34324)

```diff
-             (0, lT.useEffect)((() => {
-               const cT = yT(TT),
-                 lT = kT.current;
-               if (void 0 === cT || null === lT || AT() || "undefined" === typeof IntersectionObserver) return;
-               let OT = null;
-               const CT = new IntersectionObserver((TT => {
-                 TT.some((TT => TT.isIntersecting)) && (CT.disconnect(), OT = (0, KT.e)((() => {
-                   (0, MT.f)(fT(cT))
-                 }), {
-                   timeoutMs: xT
-                 }))
-               }), {
-                 root: IT(lT),
-                 rootMargin: "50% 0px"
-               });
-               return CT.observe(lT), () => {
- ... (4 more removed lines; see GitHub link above)
+             var gq, Yq;
+             const lq = {};
+             (null !== (gq = qq.antiAliasing) && void 0 !== gq ? gq : Eq.antiAliasing) && Eq.antiAliasing && (lq.antiAliasing = qq.antiAliasing);
+             const Oq = null !== (Yq = qq.pixelScale) && void 0 !== Yq ? Yq : Eq.pixelScale;
+             return Oq < Nq.pixelScale && Oq === Eq.pixelScale && (lq.pixelScale = qq.pixelScale), lq
+           }
+ 
+           function Vq(qq, Eq, gq) {
+             const Yq = {};
+             var lq, Oq;
+             void 0 !== Eq.antiAliasing && qq.antiAliasing === Nq.antiAliasing && (Yq.antiAliasing = null !== (lq = Eq.antiAliasing) && void 0 !== lq ? lq : gq.antiAliasing);
+             void 0 !== Eq.pixelScale && qq.pixelScale === Nq.pixelScale && (Yq.pixelScale = null !== (Oq = Eq.pixelScale) && void 0 !== Oq ? Oq : gq.pixelScale);
+             return Yq
```

#### 737. `bundles/bloxd.io/main.js` (Changed code · before: `L34326-L34327` → after: `L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12053) · [Before (L34326-L34327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34326-L34327)

```diff
-         },
-         2308: (TT, kT, cT) => {
+         }, , , , , , , , (qq, Eq, gq) => {
```

#### 738. `bundles/bloxd.io/main.js` (Changed code · before: `L34329` → after: `L12055-L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12055-L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12055-L12061) · [Before (L34329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34329)

```diff
-             e: () => tT,
+             B: () => dq,
+             C: () => lq,
+             G: () => mq,
+             I: () => aq,
+             M: () => Vq,
+             d: () => Wq,
+             g: () => Bq,
```

#### 739. `bundles/bloxd.io/main.js` (Changed code · before: `L34332-L34334` → after: `L12064-L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12064-L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12064-L12065) · [Before (L34332-L34334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34332-L34334)

```diff
-             n: () => NT,
-             p: () => QT,
-             s: () => hT,
+             q: () => cq,
+             u: () => uq,
```

#### 740. `bundles/bloxd.io/main.js` (Changed code · before: `L34338-L34358` → after: `L12070-L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12070-L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12070-L12668) · [Before (L34338-L34358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34338-L34358)

```diff
-           var lT = cT(1575),
-             MT = cT(1578),
-             KT = cT(2355),
-             OT = cT(2260),
-             yT = cT(2315),
-             fT = cT(2323);
-           const xT = cT.p + "static/media/tier1.b6720624e9661e2e5ef8.webp",
-             IT = cT.p + "static/media/tier2.be2d198b8dba2fb142f9.webp",
-             AT = cT.p + "static/media/tier3.b955ed8842a286bd35ed.webp",
-             CT = cT.p + "static/media/tier4.a0833ffd4701e61aa9a1.webp",
-             jT = cT.p + "static/media/tier5.049599de0aa0cc311fee.webp",
-             vT = "/textures/charSkins/previews/cape_super_preview.png",
-             tT = [xT, IT, AT, CT, jT];
- 
-           function hT(TT) {
-             const kT = (0, lT.e)(TT);
- ... (5 more removed lines; see GitHub link above)
+           const Yq = ["intel", "nvidia", "qualcomm", "amd", "arm", "apple", "samsung", "powervr", "other", "_unloaded"],
+             lq = ["rust_webgpu", "rust_webgl2", "rust_webgl1"],
+             Oq = ["1", "2", "webgpu"],
+             mq = [...Oq, ...lq, "_unloaded"];
+ 
+           function xq(qq) {
+             return lq.includes(qq)
+           }
+           const Aq = ["cap", "high_refresh_main_saturated", "high_refresh_main_partial", "high_refresh_downstream", "high_refresh_unclear", "throttled", "main_saturated", "main_partial", "downstream", "unclear", "unknown", "_unloaded"],
+             cq = ["windows_intel_low", "windows_intel_mid", "windows_intel_arc_igpu", "windows_intel_discrete", "windows_intel_unknown", "windows_nvidia", "windows_amd", "mac_apple", "mac_other", "chromeos_intel", "chromeos_other", "android_qualcomm", "android_arm", "android_othe … [truncated]
+             uq = ["mali_midgard", "mali_bifrost", "mali_valhall", "mali_5th_gen", "adreno_3_5", "adreno_6", "adreno_7", "adreno_8", "powervr_rogue", "powervr_b_d", "intel_gen7_8", "intel_gen9", "intel_gen11", "intel_xe_lp", "intel_xe_lpg_plus", "intel_arc", "nvidia_pre_turing", " … [truncated]
+             Bq = ["under_1", "1_to_2", "2_to_4", "4_plus", "_unloaded"],
+             Wq = ["on", "off", "auto_off", "_unloaded"],
+             Nq = ["850_or_less", "851_1250", "1251_1700", "1701_plus", "_unloaded"],
+             aq = ["none", "not_requested", "webgl_holdback", "off_after_loss", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "safari_26", "no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "load_failed", "start_no_adapter", "device_failed", "start_failed", … [truncated]
+             Vq = ["none", "hidden", "visible", "_unloaded"],
+ ... (583 more added lines; see GitHub link above)
```

#### 741. `bundles/bloxd.io/main.js` (Changed code · before: `L34361-L34362` → after: `L12671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12671) · [Before (L34361-L34362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34361-L34362)

```diff
-             const kT = (0, lT.e)(TT);
-             return void 0 === kT ? TT : MT.c[kT].cosmeticPack
+             return qq < xq.serverDisconnected.code
```

#### 742. `bundles/bloxd.io/main.js` (Changed code · before: `L34364-L34369` → after: `L12673-L12678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12673-L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12673-L12678) · [Before (L34364-L34369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34364-L34369)

```diff
- 
-           function QT(TT) {
-             return hT(TT).map((TT => {
-               let [kT] = TT;
-               return kT
-             }))
+           const uq = atob("I0lW"),
+             Bq = new Set;
+           for (const Wq in xq) {
+             const qq = xq[Wq].code;
+             if (Bq.has(qq)) throw new Error(`Duplicate leave code: ${qq}`);
+             Bq.add(qq)
```

#### 743. `bundles/bloxd.io/main.js` (Changed code · before: `L34371` → after: `L12680-L12715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12680-L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12680-L12715) · [Before (L34371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34371)

```diff
- 
+         }, , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             c: () => Oq
+           });
+           var Yq = gq(201),
+             lq = gq(209);
+           const Oq = {
+             localGameName: null,
+             devOnlyGameNames: ["testGym", "schematicTester"],
+             allowDuplicateIds: !1,
+             useLocalDatabase: !1,
+             useBillingSandbox: !1,
+             useBillingTestProjects: !1,
+             greenlightChecksEnabled: !0,
+             offlineMode: !1,
+             useYoutubeApi: !1,
+ ... (20 more added lines; see GitHub link above)
```

#### 744. `bundles/bloxd.io/main.js` (Changed code · before: `L34373` → after: `L12717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12717) · [Before (L34373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34373)

```diff
-             return `/textures/charSkins/previews/character_${TT}_preview.png`
+             return "__proto__" === qq || qq in Object.prototype
```

#### 745. `bundles/bloxd.io/main.js` (Changed code · before: `L34376-L34383` → after: `L12720-L12721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12720-L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12720-L12721) · [Before (L34376-L34383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34376-L34383)

```diff
-           function DT(TT) {
-             const kT = (0, lT.e)(TT);
-             if (void 0 !== kT) return ST(kT);
-             const {
-               Qc: cT,
-               Sc: MT
-             } = (0, KT.k)(TT);
-             return `/textures/charSkins/previews/${(0,OT.j)(cT,MT).previewTex}.png`
+           function lq(qq, Eq) {
+             return void 0 !== qq && Object.hasOwn(qq, Eq) ? qq[Eq] : void 0
```

#### 746. `bundles/bloxd.io/main.js` (Changed code · before: `L34387-L34394` → after: `L12725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12725) · [Before (L34387-L34394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34387-L34394)

```diff
-             if ((0, yT.purchasesAllowed)()) {
-               for (const TT of tT)(0, fT.f)(TT);
-               (0, fT.f)(vT);
-               for (const TT of lT.s) {
-                 (0, lT.j)(TT) && (0, fT.f)(DT(TT));
-                 for (const kT of QT(TT))(0, fT.f)(ST(kT))
-               }
-             }
+             return Object.create(null)
```

#### 747. `bundles/bloxd.io/main.js` (Changed code · before: `L34399` → after: `L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12728) · [Before (L34399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34399)

```diff
-             C: () => jT,
+             b: () => lq,
```

#### 748. `bundles/bloxd.io/main.js` (Changed code · before: `L34401-L34407` → after: `L12730-L12737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12730-L12737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12730-L12737) · [Before (L34401-L34407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34401-L34407)

```diff
-             i: () => AT,
-             l: () => CT,
-             n: () => NT,
-             p: () => fT,
-             t: () => vT,
-             u: () => xT,
-             y: () => hT
+             h: () => Oq
+           })
+         }, , , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             d: () => lq,
+             g: () => mq,
+             h: () => dq,
+             l: () => Oq
```

#### 749. `bundles/bloxd.io/main.js` (Changed code · before: `L34409-L34413` → after: `L12739-L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12739-L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12739-L12740) · [Before (L34409-L34413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34409-L34413)

```diff
-           var lT = cT(339),
-             MT = cT(2355),
-             KT = cT(2374);
-           const OT = "\ud83c\udf81",
-             yT = 5;
+           var Yq = gq(212);
+           const lq = !1;
```

#### 750. `bundles/bloxd.io/main.js` (Changed code · before: `L34415-L34416` → after: `L12742-L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12742-L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12742-L12743) · [Before (L34415-L34416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34415-L34416)

```diff
-           function fT(TT) {
-             return TT.trim() ? "gift" : "self"
+           function Oq() {
+             return !1
```

#### 751. `bundles/bloxd.io/main.js` (Changed code · before: `L34419-L34420` → after: `L12746-L12751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12746-L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12746-L12751) · [Before (L34419-L34420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34419-L34420)

```diff
-           function xT(TT) {
-             return "gems" === (null === TT || void 0 === TT ? void 0 : TT.source) ? (TT.until - TT.since) / lT.i : 0
+           function mq() {
+             {
+               if ("undefined" === typeof window) return !1;
+               const qq = window.location.hostname;
+               return qq.includes("preprod") || qq.includes(Yq.b)
+             }
```

#### 752. `bundles/bloxd.io/main.js` (Changed code · before: `L34424` → after: `L12767-L12769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12767-L12769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12767-L12769) · [Before (L34424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34424)

```diff
-             return (0, MT.l)(TT, kT) ? "owned" : (0, MT.g)(TT, kT) ? "sharesOwned" : null
+             const gq = {};
+             for (const Yq of Object.keys(qq)) gq[Yq] = qq[Yq] + Eq;
+             return gq
```

#### 753. `bundles/bloxd.io/main.js` (Changed code · before: `L34426-L34448` → after: `L12771-L12836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12771-L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12771-L12836) · [Before (L34426-L34448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34426-L34448)

```diff
- 
-           function AT(TT) {
-             const {
-               mode: kT,
-               loggedIn: cT,
-               superRankInfo: MT,
-               now: KT,
-               ownedPacks: OT,
-               packs: fT,
-               recipient: xT
-             } = TT, AT = !0 === cT ? (CT = (0, lT.cc)(MT, KT)) > 0 ? Math.ceil(CT / lT.i) : 0 : 0;
-             var CT;
-             if (null === cT) return {
-               superRank: {
-                 state: "pending",
-                 urgent: !1
- ... (7 more removed lines; see GitHub link above)
+           const Nq = {
+               1: 6585,
+               2: 6586,
+               3: 6587
+             },
+             aq = {
+               1: 6585,
+               2: 6586,
+               3: 6587,
+               4: 6588,
+               5: 6589,
+               6: 6590,
+               7: 6591,
+               8: 6592,
+               9: 6593,
+               10: 6594,
+ ... (50 more added lines; see GitHub link above)
```

#### 754. `bundles/bloxd.io/main.js` (Changed code · before: `L34450-L34484` → after: `L12838-L12839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12838-L12839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12838-L12839) · [Before (L34450-L34484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34450-L34484)

```diff
-             if ("gift" === kT) {
-               const TT = function(TT) {
-                   switch (TT.status) {
-                     case "none":
-                       return "needsRecipient";
-                     case "pending":
-                       return "lookingUp";
-                     case "found":
-                       return "gift";
-                     case "error":
-                       return "store:giftRecipientLookupFailed" === TT.error ? "gift" : "needsRecipient"
-                   }
-                 }(xT),
-                 kT = "found" === xT.status ? xT.ownedPacks : [],
-                 cT = "found" === xT.status && xT.isSubscriber;
-               return {
- ... (19 more removed lines; see GitHub link above)
+           const dq = function(qq) {
+             const Eq = mq() ? Nq : aq;
```

#### 755. `bundles/bloxd.io/main.js` (Changed code · before: `L34486-L34501` → after: `L12841-L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12841-L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12841-L12858) · [Before (L34486-L34501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34486-L34501)

```diff
-               superRank: {
-                 state: cT ? (0, lT.vc)(MT, KT) ? "subscribed" : jT ? "recharge" : "buy" : "login",
-                 urgent: jT && AT <= yT
-               },
-               superRankDaysLeft: AT,
-               packs: fT.map((TT => {
-                 var kT;
-                 return {
-                   pack: TT,
-                   state: cT ? null !== (kT = IT(TT, OT)) && void 0 !== kT ? kT : "buy" : "login"
-                 }
-               })),
-               recipientHasSuperRank: !1
-             }
-           }
- 
+               indexServerPort: Bq + qq,
+               staticServerPort: Bq + qq,
+               staticServerNginxPort: Bq + qq - 1e3,
+               matchmakingServerPort: 6522 + qq,
+               matchmakingServerNginxPort: 5522 + qq,
+               socialServerPorts: Wq(Eq, qq),
+               socialServerNginxPorts: Wq(Vq, qq),
+               localDynamoDbPort: 8e3 + qq
+             }
+           }(uq)
+         }, , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             b: () => lq,
+             e: () => Yq
+           });
+           const Yq = "1219647973806571553",
+ ... (2 more added lines; see GitHub link above)
```

#### 756. `bundles/bloxd.io/main.js` (Changed code · before: `L34503-L34535` → after: `L12860-L12861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12860-L12861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12860-L12861) · [Before (L34503-L34535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34503-L34535)

```diff
-             let {
-               onlineFriends: kT,
-               recentRecipients: cT,
-               friends: lT,
-               selfName: MT,
-               max: KT = 5
-             } = TT;
-             const OT = new Set([MT.toLowerCase()]),
-               yT = new Set(kT.map((TT => TT.name.toLowerCase()))),
-               fT = [],
-               xT = (TT, kT, cT, lT) => {
-                 const MT = TT.toLowerCase();
-                 !TT || OT.has(MT) || fT.length >= KT || (OT.add(MT), fT.push({
-                   name: TT,
-                   kind: kT,
-                   cosmetics: cT,
- ... (17 more removed lines; see GitHub link above)
+             var Eq = new Error("Cannot find module '" + qq + "'");
+             throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 757. `bundles/bloxd.io/main.js` (Changed code · before: `L34551-L34564` → after: `L12970-L12972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12970-L12972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12970-L12972) · [Before (L34551-L34564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34551-L34564)

```diff
-               const cT = JSON.parse(TT);
-               if (!cT || "object" !== typeof cT) return null;
-               const {
-                 item: lT,
-                 mode: MT,
-                 recipient: KT,
-                 savedAt: OT
-               } = cT;
-               return "string" !== typeof lT || !lT || "self" !== MT && "gift" !== MT || "string" !== typeof KT || "number" !== typeof OT || (kT - OT > tT || OT > kT) ? null : {
-                 item: lT,
-                 mode: MT,
-                 recipient: KT,
-                 savedAt: OT
-               }
+               return new Intl.DateTimeFormat("en", {
+                 timeZone: qq
+               }).resolvedOptions().timeZone
```

#### 758. `bundles/bloxd.io/main.js` (Changed code · before: `L34571-L34626` → after: `L12981-L12982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12981-L12982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12981-L12982) · [Before (L34571-L34626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34571-L34626)

```diff
-             const cT = "superRank" === (lT = TT.item) || kT.includes(lT) ? TT.item : void 0;
-             var lT;
-             return cT || (0, KT.e)(TT.item) ? {
-               mode: TT.mode,
-               source: "loginResume",
-               giftRecipientName: "gift" === TT.mode && TT.recipient ? TT.recipient : void 0,
-               openItem: cT,
-               highlight: TT.item
-             } : null
-           }
-         },
-         2305: (TT, kT, cT) => {
-           cT.d(kT, {
-             B: () => GT,
-             E: () => aT,
-             I: () => oT,
- ... (40 more removed lines; see GitHub link above)
+             let gq = aq.get(Eq);
+             return void 0 === gq && (gq = Wq(Eq), null === gq && console.error(`LocationDetection: "${Eq}" (listed for ${qq}) is not a timezone this browser recognises`), aq.set(Eq, gq)), gq
```

#### 759. `bundles/bloxd.io/main.js` (Changed code · before: `L34629-L34637` → after: `L12985-L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12985-L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12985-L12987) · [Before (L34629-L34637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34629-L34637)

```diff
-           function QT() {
-             hT ? hT() : Promise.resolve().then((() => cT(2947))).then((TT => {
-               let {
-                 prefetchBillingOfferings: kT
-               } = TT;
-               kT()
-             }), (TT => {
-               console.warn("Store: couldn't load the SuperGem bundle prefetch", TT)
-             }))
+           function dq(qq, Eq) {
+             var gq;
+             return (null !== (gq = Nq[qq]) && void 0 !== gq ? gq : []).some((gq => Vq(qq, gq) === Eq))
```

#### 760. `bundles/bloxd.io/main.js` (Changed code · before: `L34640-L34641` → after: `L12990-L12991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12990-L12991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12990-L12991) · [Before (L34640-L34641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34640-L34641)

```diff
-           function ST(TT) {
-             QT(), "mouse" === TT.pointerType && (0, fT.z)()
+           function jq(qq, Eq) {
+             return qq.some((qq => dq(qq, Eq)))
```

#### 761. `bundles/bloxd.io/main.js` (Changed code · before: `L34645-L34647` → after: `L12995-L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12995-L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L12995-L13006) · [Before (L34645-L34647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34645-L34647)

```diff
-             QT(), AT = {
-               ...TT,
-               seq: ++CT
+             const Eq = [...new Set([...qq, ...Object.keys(Nq)])].flatMap((qq => {
+               var Eq;
+               return (null !== (Eq = Nq[qq]) && void 0 !== Eq ? Eq : []).map((Eq => ({
+                 code: qq,
+                 zone: Eq
+               })))
+             }));
+             let gq = 0;
+             const Yq = qq => {
+               const lq = Math.min(gq + 8, Eq.length);
+               for (; gq < lq && qq.timeRemaining() > 0;) Vq(Eq[gq].code, Eq[gq].zone), gq++;
+               gq < Eq.length && (0, cq.e)(Yq)
```

#### 762. `bundles/bloxd.io/main.js` (Changed code · before: `L34649-L34665` → after: `L13008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13008) · [Before (L34649-L34665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34649-L34665)

```diff
-             for (const cT of jT) cT(AT);
-             const {
-               pathname: kT
-             } = OT.e.get("router").state.location;
-             if ((0, xT.e)(kT)) {
-               const cT = (0, MT.g)(tT(TT));
-               cT !== kT && (0, yT.navigatePreserveSearch)(cT)
-             } else OT.e.set({
-               openEverythingMenuName: KT.o.COSMETIC_SHOP
-             })
-           }
- 
-           function aT() {
-             const [TT, kT] = (0, lT.useState)(AT);
-             return (0, lT.useEffect)((() => (jT.add(kT), kT(AT), () => {
-               jT.delete(kT)
- ... (1 more removed lines; see GitHub link above)
+             (0, cq.e)(Yq)
```

#### 763. `bundles/bloxd.io/main.js` (Changed code · before: `L34671-L34677` → after: `L13011-L13015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13011-L13015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13011-L13015) · [Before (L34671-L34677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34671-L34677)

```diff
-           function wT() {
-             if (null === PT) try {
-               PT = localStorage.getItem(rT) === FT
-             } catch {
-               PT = !1
-             }
-             return PT
+           function oq(qq) {
+             const Eq = Wq(lq().tz.guess());
+             if (null === Eq || !jq(qq, Eq)) return !1;
+             const gq = Object.keys(Nq).find((qq => dq(qq, Eq)));
+             return void 0 !== gq && qq.includes(gq)
```

#### 764. `bundles/bloxd.io/main.js` (Changed code · before: `L34679-L34686` → after: `L13017-L13019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13017-L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13017-L13019) · [Before (L34679-L34686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34679-L34686)

```diff
- 
-           function mT() {
-             if (!wT()) {
-               PT = !0;
-               try {
-                 localStorage.setItem(rT, FT)
-               } catch {}
-             }
+           const Pq = () => {
+             const qq = Wq(lq().tz.guess());
+             return null !== qq && jq(Bq, qq)
```

#### 765. `bundles/bloxd.io/main.js` (Changed code · before: `L34688-L34692` → after: `L13021-L13116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13021-L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13021-L13116) · [Before (L34688-L34692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34688-L34692)

```diff
-           let bT = null;
-           const zT = new Set;
- 
-           function JT(TT) {
-             if (TT !== bT) {
+         }, , , , , , , , function(qq) {
+           qq.exports = function() {
+             var qq = 1e3,
+               Eq = 6e4,
+               gq = 36e5,
+               Yq = "millisecond",
+               lq = "second",
+               Oq = "minute",
+               mq = "hour",
+               xq = "day",
+               Aq = "week",
+               cq = "month",
+               uq = "quarter",
+               Bq = "year",
+               Wq = "date",
+               Nq = "Invalid Date",
+ ... (80 more added lines; see GitHub link above)
```

#### 766. `bundles/bloxd.io/main.js` (Changed code · before: `L34694-L34778` → after: `L13118-L13123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13118-L13123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13118-L13123) · [Before (L34694-L34778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34694-L34778)

```diff
-               for (const kT of zT) kT(TT)
-             }
-           }
- 
-           function oT() {
-             const [TT, kT] = (0, lT.useState)(bT);
-             return (0, lT.useEffect)((() => (zT.add(kT), kT(bT), () => {
-               zT.delete(kT)
-             })), []), TT
-           }
-           const HT = "bloxdStorePendingPurchase";
- 
-           function eT(TT) {
-             try {
-               sessionStorage.setItem(HT, JSON.stringify({
-                 ...TT,
- ... (69 more removed lines; see GitHub link above)
+             vq.l = tq, vq.i = yq, vq.w = function(qq, Eq) {
+               return rq(qq, {
+                 locale: Eq.$L,
+                 utc: Eq.$u,
+                 x: Eq.$x,
+                 $offset: Eq.$offset
```

#### 767. `bundles/bloxd.io/main.js` (Changed code · before: `L34780-L34794` → after: `L13125-L13202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13125-L13202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13125-L13202) · [Before (L34780-L34794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34780-L34794)

```diff
-             }), [TT.pathname, vT]);
-             const aT = (0, lT.useRef)(jT);
-             (0, lT.useEffect)((() => {
-               const TT = aT.current;
-               if (aT.current = jT, TT !== jT)
-                 if (vT) {
-                   if (jT && !tT) cT(OT.k);
-                   else if (!jT && tT) {
-                     const {
-                       path: TT,
-                       index: cT
-                     } = ST.current, lT = CT();
-                     null !== cT && null !== lT && lT > cT ? kT(cT - lT) : kT(TT, {
-                       replace: !0
-                     })
+             };
+             var hq = function() {
+                 function dq(qq) {
+                   this.$L = tq(qq.locale, null, !0), this.parse(qq), this.$x = this.$x || qq.x || {}, this[Qq] = !0
+                 }
+                 var jq = dq.prototype;
+                 return jq.parse = function(qq) {
+                   this.$d = function(qq) {
+                     var Eq = qq.date,
+                       gq = qq.utc;
+                     if (null === Eq) return new Date(NaN);
+                     if (vq.u(Eq)) return new Date;
+                     if (Eq instanceof Date) return new Date(Eq);
+                     if ("string" == typeof Eq && !/Z$/i.test(Eq)) {
+                       var Yq = Eq.match(aq);
+                       if (Yq) {
+ ... (62 more added lines; see GitHub link above)
```

#### 768. `bundles/bloxd.io/main.js` (Changed code · before: `L34796-L34888` → after: `L13204-L13351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13204-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13204-L13351) · [Before (L34796-L34888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34796-L34888)

```diff
-                 } else jT || QT(IT)
-             }), [jT]);
-             const FT = (0, lT.useCallback)((kT => {
-               if (!vT) return void QT(kT);
-               const lT = (0, OT.g)(kT);
-               lT !== TT.pathname && cT(lT)
-             }), [vT, TT.pathname, cT]);
-             return {
-               page: vT ? null !== hT && void 0 !== hT ? hT : IT : NT,
-               urlMode: vT,
-               goTo: FT
-             }
-           }
-         },
-         1554: (TT, kT, cT) => {
-           cT.d(kT, {
- ... (77 more removed lines; see GitHub link above)
+                 }, jq.endOf = function(qq) {
+                   return this.startOf(qq, !1)
+                 }, jq.$set = function(qq, Eq) {
+                   var gq, Aq = vq.p(qq),
+                     uq = "set" + (this.$u ? "UTC" : ""),
+                     Nq = (gq = {}, gq[xq] = uq + "Date", gq[Wq] = uq + "Date", gq[cq] = uq + "Month", gq[Bq] = uq + "FullYear", gq[mq] = uq + "Hours", gq[Oq] = uq + "Minutes", gq[lq] = uq + "Seconds", gq[Yq] = uq + "Milliseconds", gq)[Aq],
+                     aq = Aq === xq ? this.$D + (Eq - this.$W) : Eq;
+                   if (Aq === cq || Aq === Bq) {
+                     var Vq = this.clone().set(Wq, 1);
+                     Vq.$d[Nq](aq), Vq.init(), this.$d = Vq.set(Wq, Math.min(this.$D, Vq.daysInMonth())).$d
+                   } else Nq && this.$d[Nq](aq);
+                   return this.init(), this
+                 }, jq.set = function(qq, Eq) {
+                   return this.clone().$set(qq, Eq)
+                 }, jq.get = function(qq) {
+                   return this[vq.p(qq)]()
+ ... (132 more added lines; see GitHub link above)
```

#### 769. `bundles/bloxd.io/main.js` (Changed code · before: `L34890-L34925` → after: `L13353-L13477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13353-L13477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13353-L13477) · [Before (L34890-L34925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34890-L34925)

```diff
-                 }
-               }))
-             }))
-           }
- 
-           function PT(TT) {
-             let {
-               text: kT,
-               className: cT = "",
-               friendBadgeFor: MT,
-               explainFriendBadge: fT = !1
-             } = TT;
-             const {
-               t: vT,
-               tSegments: hT
-             } = (0, CT.B)(), NT = (0, aT.jsx)(DT.e, {
- ... (20 more removed lines; see GitHub link above)
+                   return Nq ? aq : vq.a(aq)
+                 }, jq.daysInMonth = function() {
+                   return this.endOf(cq).$D
+                 }, jq.$locale = function() {
+                   return Pq[this.$L]
+                 }, jq.locale = function(qq, Eq) {
+                   if (!qq) return this.$L;
+                   var gq = this.clone(),
+                     Yq = tq(qq, Eq, !0);
+                   return Yq && (gq.$L = Yq), gq
+                 }, jq.clone = function() {
+                   return vq.w(this.$d, this)
+                 }, jq.toDate = function() {
+                   return new Date(this.valueOf())
+                 }, jq.toJSON = function() {
+                   return this.isValid() ? this.toISOString() : null
+ ... (109 more added lines; see GitHub link above)
```

#### 770. `bundles/bloxd.io/main.js` (Changed code · before: `L34927-L35076` → after: `L13479-L13488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13479-L13488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13479-L13488) · [Before (L34927-L35076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L34927-L35076)

```diff
-             return Array.isArray(kT) ? (0, aT.jsx)("div", {
-               className: `TextFromServer ${cT}`,
-               children: rT(kT, hT, QT).map(((TT, fT) => {
-                 if ("string" === typeof TT) return (0, aT.jsx)("div", {
-                   className: `IndividualText ${cT}`,
-                   children: TT
-                 }, `${fT}|${TT}`);
-                 if ("entityName" in TT) return (0, aT.jsxs)("div", {
-                   className: "TextFromServerEntityNameWithTags",
-                   children: [TT.ranks && TT.ranks.map((TT => OT.m[TT].visible ? (0, aT.jsx)("div", {
-                     className: `TextFromServerEntityNameTag TextFromServerEntityNameTag-${TT}`,
-                     children: (0, aT.jsx)(PT, {
-                       text: [{
-                         icon: OT.m[TT].icon,
-                         style: {
-                           color: OT.m[TT].mainRGB
- ... (134 more removed lines; see GitHub link above)
+           }()
+         }, , , , , , , function(qq) {
+           qq.exports = function() {
+             var qq = {
+                 year: 0,
+                 month: 1,
+                 day: 2,
+                 hour: 3,
+                 minute: 4,
+                 second: 5
```

#### 771. `bundles/bloxd.io/main.js` (Changed code · before: `L35078-L35081` → after: `L13490-L13512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13490-L13512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13490-L13512) · [Before (L35078-L35081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35078-L35081)

```diff
-               children: (0, aT.jsx)("span", {
-                 className: "TextFromServerProgressBarFill",
-                 style: {
-                   width: 100 * AT + "%"
+               Eq = {};
+             return function(gq, Yq, lq) {
+               var Oq, mq = function(qq, gq, Yq) {
+                   void 0 === Yq && (Yq = {});
+                   var lq = new Date(qq),
+                     Oq = function(qq, gq) {
+                       void 0 === gq && (gq = {});
+                       var Yq = gq.timeZoneName || "short",
+                         lq = qq + "|" + Yq,
+                         Oq = Eq[lq];
+                       return Oq || (Oq = new Intl.DateTimeFormat("en-US", {
+                         hour12: !1,
+                         timeZone: qq,
+                         year: "numeric",
+                         month: "2-digit",
+                         day: "2-digit",
+ ... (7 more added lines; see GitHub link above)
```

#### 772. `bundles/bloxd.io/main.js` (Changed code · before: `L35083-L35087` → after: `L13514-L13520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13514-L13520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13514-L13520) · [Before (L35083-L35087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35083-L35087)

```diff
-                 children: (0, aT.jsx)("span", {
-                   className: "TextFromServerProgressBarFillInner",
-                   style: {
-                     width: yT,
-                     background: jT
+                 xq = function(Eq, gq) {
+                   for (var Yq = mq(Eq, gq), Oq = [], xq = 0; xq < Yq.length; xq += 1) {
+                     var Aq = Yq[xq],
+                       cq = Aq.type,
+                       uq = Aq.value,
+                       Bq = qq[cq];
+                     Bq >= 0 && (Oq[Bq] = parseInt(uq, 10))
```

#### 773. `bundles/bloxd.io/main.js` (Changed code · before: `L35089-L35184` → after: `L13522-L13534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13522-L13534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13522-L13534) · [Before (L35089-L35184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35089-L35184)

```diff
-                 })
-               })
-             })
-           }
-         },
-         2094: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => wT
-           });
-           var lT = cT(31),
-             MT = cT(2101),
-             KT = cT(36),
-             OT = cT(71),
-             yT = cT(1046),
-             fT = cT.n(yT),
-             xT = cT(328),
- ... (80 more removed lines; see GitHub link above)
+                   var Wq = Oq[3],
+                     Nq = 24 === Wq ? 0 : Wq,
+                     aq = Oq[0] + "-" + Oq[1] + "-" + Oq[2] + " " + Nq + ":" + Oq[4] + ":" + Oq[5] + ":000",
+                     Vq = +Eq;
+                   return (lq.utc(aq).valueOf() - (Vq -= Vq % 1e3)) / 6e4
+                 },
+                 Aq = Yq.prototype;
+               Aq.tz = function(qq, Eq) {
+                 void 0 === qq && (qq = Oq);
+                 var gq, Yq = this.utcOffset(),
+                   mq = this.toDate(),
+                   xq = mq.toLocaleString("en-US", {
+                     timeZone: qq
```

#### 774. `bundles/bloxd.io/main.js` (Changed code · before: `L35186-L35216` → after: `L13536-L13586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13536-L13586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13536-L13586) · [Before (L35186-L35216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35186-L35216)

```diff
-                   children: [(0, PT.jsx)(MT.e, {
-                     icon: "ellipsis",
-                     touchPressOn: "pointerup",
-                     onClick: () => {
-                       GT(!eT)
-                     }
-                   }), eT && "filled" === WT.state && (0, PT.jsx)("div", {
-                     className: "TopRightTray",
-                     children: nT.map(sT)
-                   })]
-                 }), dT && gT && pT.map(Tk), dT && YT && (0, PT.jsx)(QT.e, {
-                   menuIcon: YT,
-                   className: "TopRightIcon"
-                 }), dT && (0, PT.jsx)("div", {
-                   className: fT()("TopRightIcon", rT.h.perspective),
-                   "data-camera-keeper": mT ? "" : void 0,
- ... (15 more removed lines; see GitHub link above)
+                   Aq = Math.round((mq - new Date(xq)) / 1e3 / 60),
+                   cq = 15 * -Math.round(mq.getTimezoneOffset() / 15) - Aq;
+                 if (Number(cq)) {
+                   if (gq = lq(xq, {
+                       locale: this.$L
+                     }).$set("millisecond", this.$ms).utcOffset(cq, !0), Eq) {
+                     var uq = gq.utcOffset();
+                     gq = gq.add(Yq - uq, "minute")
+                   }
+                 } else gq = this.utcOffset(0, Eq);
+                 return gq.$x.$timezone = qq, gq
+               }, Aq.offsetName = function(qq) {
+                 var Eq = this.$x.$timezone || lq.tz.guess(),
+                   gq = mq(this.valueOf(), Eq, {
+                     timeZoneName: qq
+                   }).find((function(qq) {
+ ... (35 more added lines; see GitHub link above)
```

#### 775. `bundles/bloxd.io/main.js` (Changed code · before: `L35221-L35255` → after: `L13590-L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13590-L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13590-L13594) · [Before (L35221-L35255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35221-L35255)

```diff
-           var lT = cT(1470),
-             MT = cT(3644),
-             KT = cT(1953),
-             OT = cT(71),
-             yT = cT(2938),
-             fT = cT(2002),
-             xT = cT(1921),
-             IT = cT(3732),
-             AT = cT(1461),
-             CT = cT(1316),
-             jT = cT(159),
-             vT = cT(1046),
-             tT = cT.n(vT),
-             hT = cT(1474),
-             NT = cT(1348),
-             QT = cT(4251),
- ... (19 more removed lines; see GitHub link above)
+           const Yq = {
+               timeRemaining: () => 1 / 0
+             },
+             lq = function(qq) {
+               var Eq;
```

#### 776. `bundles/bloxd.io/main.js` (Changed code · before: `L35257-L35405` → after: `L13596-L13608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13596-L13608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13596-L13608) · [Before (L35257-L35405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35257-L35405)

```diff
-                 id: lT,
-                 clientParameters: MT
-               } = kT;
-               ("rewardedAd" !== MT.type || jT.p[jT.u].adConfig.showRewardedAds) && (cT((TT => (TT[lT] = MT, TT))), TT())
-             })), (0, AT.g)("removeUiRequest", (kT => {
-               (async kT => {
-                 cT((TT => (delete TT[kT], TT))), TT()
-               })(kT)
-             })), (0, AT.g)("clearUiRequests", (() => {
-               cT({}), MT((TT => TT + 1))
-             })), (0, FT.jsx)("div", {
-               className: "UiRequests",
-               "data-camera-keeper": "",
-               children: Object.keys(kT).map(((MT, KT) => {
-                 const OT = kT[MT];
-                 return (0, FT.jsx)(mT, {
- ... (133 more removed lines; see GitHub link above)
+                 timeoutMs: gq
+               } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+               const lq = globalThis,
+                 Oq = null !== (Eq = lq.nativeRequestIdleCallback) && void 0 !== Eq ? Eq : lq.requestIdleCallback,
+                 mq = lq.cancelIdleCallback;
+               if ("function" === typeof Oq && "function" === typeof mq) {
+                 const Eq = void 0 === gq ? Oq.call(globalThis, qq) : Oq.call(globalThis, qq, {
+                   timeout: gq
+                 });
+                 return () => {
+                   mq.call(globalThis, Eq)
+                 }
+               }
```

#### 777. `bundles/bloxd.io/main.js` (Changed code · before: `L35407-L35408` → after: `L13610-L13611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13610-L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13610-L13611) · [Before (L35407-L35408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35407-L35408)

```diff
-                 lT(!0)
-               }), 2e3);
+                 qq(Yq)
+               }), 100);
```

#### 778. `bundles/bloxd.io/main.js` (Changed code · before: `L35476-L35613` → after: `L13616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13616) · [Before (L35476-L35613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35476-L35613)

```diff
-           })(JT), (() => {
-             let TT = !1;
-             const kT = TextDecoder.prototype.decode;
-             let cT = 59;
-             const lT = function() {
-               for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
-               return cT++, 60 === cT && ((0, DT.k)() && (TT || (0, aT.j)(), TT = !0), cT = 0), kT.apply(this, MT)
-             };
-             TextDecoder.prototype.decode = lT, setInterval((() => {
-               let kT = 0;
-               TT ? kT = 2 : (0, MT.getPropVal)("wio643") ? kT = 3 : window.jklkjefwn ? kT = 4 : TextDecoder.prototype.decode !== lT ? kT = 6 : !0 !== Object.getOwnPropertyDescriptor(Function.prototype, "toString").writable && (kT = 7), (0, MT.sendColyMessage)(IT.Ig, kT, !0)
-             }), 4e3)
-           })()
-         },
-         2290: (TT, kT, cT) => {
-           cT.d(kT, {
- ... (122 more removed lines; see GitHub link above)
+         }, , , , , , , , , (qq, Eq, gq) => {
```

#### 779. `bundles/bloxd.io/main.js` (Changed code · before: `L35621-L35630` → after: `L13620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13620) · [Before (L35621-L35630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35621-L35630)

```diff
-             k: () => fT,
-             l: () => gT,
-             n: () => uT,
-             p: () => dT,
-             s: () => LT,
-             t: () => ZT,
-             u: () => HT,
-             x: () => oT,
-             y: () => GT,
-             z: () => XT
+             k: () => Aq
```

#### 780. `bundles/bloxd.io/main.js` (Changed code · before: `L35632-L35734` → after: `L13622-L13626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13622-L13626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13622-L13626) · [Before (L35632-L35734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35632-L35734)

```diff
-           var lT = cT(229),
-             MT = cT(1018),
-             KT = cT(1333),
-             OT = cT(761),
-             yT = cT(47);
-           const fT = "/updating",
-             xT = "updateWait",
-             IT = 2e4,
-             AT = 3e4,
-             CT = 3e3,
-             jT = 3e5,
-             vT = 6e4,
-             tT = 6e4,
-             hT = 3e3,
-             NT = 15e3,
-             QT = 3e3,
- ... (87 more removed lines; see GitHub link above)
+           var Yq = gq(260),
+             lq = gq(263),
+             Oq = gq(96),
+             mq = gq(128);
+           let xq = null;
```

#### 781. `bundles/bloxd.io/main.js` (Changed code · before: `L35736-L35741` → after: `L13628-L13633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13628-L13633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13628-L13633) · [Before (L35736-L35741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35736-L35741)

```diff
-           function ZT(TT, kT, cT, lT) {
-             if (!cT) return "offline";
-             if (kT < TT.returnAtMs) return "counting";
-             const MT = kT - TT.startedAtMs,
-               KT = null !== lT.lastAnsweredAtMs && kT - lT.lastAnsweredAtMs < ST;
-             return (null === lT.newReleaseAtMs ? KT && MT >= DT || kT - TT.returnAtMs >= vT : kT >= lT.newReleaseAtMs + JT(TT.gameNameWithVariation, TT.lobbyName) * tT) ? "ready" : "almostReady"
+           function Aq() {
+             var qq, Eq, gq, lq;
+             if (null !== xq) return xq;
+             if ("intel" !== (0, Oq.getGpuVendor)()) return !0;
+             const Aq = null !== (qq = null !== (Eq = null === (gq = (0, mq.n)()) || void 0 === gq ? void 0 : gq.renderer) && void 0 !== Eq ? Eq : null === (lq = (0, mq.w)()) || void 0 === lq ? void 0 : lq.renderer) && void 0 !== qq ? qq : "";
+             return Bq((0, Yq.m)(Aq).family)
```

#### 782. `bundles/bloxd.io/main.js` (Changed code · before: `L35745-L35746` → after: `L13637-L13640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13637-L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13637-L13640) · [Before (L35745-L35746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35745-L35746)

```diff
-             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
-             return Math.round(Math.min(hT * 2 ** TT, NT) * (.75 + .5 * kT()))
+             if (null === qq || "" === qq.vendor) return null;
+             if ("intel" !== (0, Oq.normaliseGpuVendor)(qq.vendor)) return !0;
+             const Eq = (0, lq.c)(qq.vendor, qq.architecture);
+             return "other_intel" === Eq ? null : Bq(Eq)
```

#### 783. `bundles/bloxd.io/main.js` (Changed code · before: `L35750-L35752` → after: `L13644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13644) · [Before (L35750-L35752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35750-L35752)

```diff
-             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-             const cT = yT.g.getItem(PT);
-             return null !== cT && void 0 !== cT && (yT.g.removeItem(PT), cT.gameNameWithVariation === TT && "number" === typeof cT.atMs && kT - cT.atMs < wT)
+             xq = cq(qq)
```
