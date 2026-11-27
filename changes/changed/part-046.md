# Changed — Bundle Modifications Report (Part 046 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `46 / 126` (**321** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 045](part-045.md) · [Part 047 →](part-047.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 8. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L62-L78` → after: `L8834-L8844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8834-L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L8834-L8844) · [Before (L62-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L62-L78)

```diff
-         followsLeader: iR
-       } = (0, eR.d)(), fR = null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.slice(0, uR.gameCount)) && void 0 !== JR ? JR : [], KR = {
-         "--custom-game-place-tint": tR
-       };
-       return (0, aR.jsxs)("div", {
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: KR,
-         children: [(0, aR.jsx)("h2", {
-           className: "CustomGamePlacePanelHeading",
-           children: (0, aR.jsxs)(VR.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(GR)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
-             children: [(0, aR.jsx)("span", {
-               children: yR
-             }), (0, aR.jsx)(wR.d, {
-               name: "arrow-up"
- ... (1 more removed lines; see GitHub link above)
+         t: jr
+       } = (0, fW.E)(), Ir = null !== (Sr = null === (Qr = Wr.items[0]) || void 0 === Qr ? void 0 : Qr.itemName) && void 0 !== Sr ? Sr : Aj;
+       return (0, pW.jsxs)("li", {
+         className: "SkyblockMailboxLetter",
+         style: ij(ar),
+         children: [(0, pW.jsx)("div", {
+           className: "SkyblockMailboxStamp",
+           "aria-hidden": "true",
+           children: (0, pW.jsx)(aW.d, {
+             itemName: Ir,
+             amount: 0
```

#### 9. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L81` → after: `L8847-L9001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8847-L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L8847-L9001) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L81)

```diff
-           className: "CustomGamePlacePanelGames",
+           className: "SkyblockMailboxReason",
+           children: jr(Wr.reasonKey, null !== (Zr = Wr.reasonParams) && void 0 !== Zr ? Zr : void 0)
+         }), (0, pW.jsxs)("div", {
+           className: "SkyblockMailboxContents",
+           children: [Wr.coins > 0 && (0, pW.jsxs)("span", {
+             className: "SkyblockMailboxGift SkyblockMailboxCoins",
+             children: [(0, pW.jsx)(aW.d, {
+               itemName: Aj,
+               amount: 0
+             }), "+", (0, IW.i)(Wr.coins)]
+           }), Wr.items.map(((rr, Sr) => (0, pW.jsxs)("span", {
+             className: "SkyblockMailboxGift",
+             children: [(0, pW.jsx)(aW.d, {
+               itemName: rr.itemName,
+               amount: 0
+             }), rr.label, " \xd7", rr.amount]
+ ... (139 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L83` → after: `L9003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9003) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L83)

```diff
-             gridTemplateColumns: `repeat(${qR?uR.columnCount:LR}, ${qR?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
+             "--glowtide-colour": Wr.colour
```

#### 11. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L85-L95` → after: `L9005-L9022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9005-L9022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9005-L9022) · [Before (L85-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L85-L95)

```diff
-           children: Array.from({
-             length: uR.gameCount
-           }, ((RR, JR) => {
-             var GR;
-             return (0, aR.jsx)(UR, {
-               game: null !== (GR = fR[JR]) && void 0 !== GR ? GR : null,
-               disabled: iR,
-               showPlaceholder: !ZR
-             }, JR)
-           }))
-         })]
+           "aria-label": Qr("skyblockGame:glowtideChipLabel"),
+           children: [(0, pW.jsx)("div", {
+             className: "SkyblockGlowtideChipOrb"
+           }), Wr.inRange ? (0, pW.jsx)("span", {
+             className: "SkyblockGlowtideChipCall SmallTextBold",
+             children: Qr("skyblockGame:glowtideChipInRange")
+           }, `call:${Wr.inRangeToken}`) : (0, pW.jsxs)(pW.Fragment, {
+             children: [(0, pW.jsx)("div", {
+               ref: Sr.mountArrow,
+               className: "SkyblockGlowtideChipArrow"
+             }), (0, pW.jsx)("span", {
+               className: "SkyblockGlowtideChipDistance SmallTextBold",
+               children: Qr("skyblockGame:waypointDistance", {
+                 distance: er(Wr.distance, Zr.code)
+               })
+             })]
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L101` → after: `L9028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9028) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L101)

```diff
-         categories: JR
+         controller: Sr
```

#### 13. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L104-L110` → after: `L9075-L9090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9075-L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9075-L9090) · [Before (L104-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L104-L110)

```diff
-       function GR(RR) {
-         const GR = JR[RR];
-         return (0, aR.jsx)(WR, {
-           ...GR,
-           landscape: !0
-         }, GR.id)
-       }
+     function dj(rr) {
+       let {
+         controller: Sr
+       } = rr;
+       const {
+         t: Qr
+       } = (0, fW.E)(), Zr = (0, EW.g)(BZ, Sr.getSnapshot());
+       if (null === Zr) return null;
+       const Wr = "waiting" === Zr.phase,
+         ar = {
+           animationDuration: `${Zr.waitMs}ms`,
+           animationDelay: -Zr.elapsedMs + "ms"
+         },
+         jr = Wr ? void 0 : {
+           animationDuration: `${Zr.waitMs}ms`
+         };
```

#### 14. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L112-L116` → after: `L9092-L9211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9092-L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9092-L9211) · [Before (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L112-L116)

```diff
-         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
-         children: [(0, aR.jsxs)("div", {
-           className: "CustomGamePlaceUpper",
-           children: [(0, aR.jsxs)("div", {
-             className: "CustomGamePlaceMain",
+         className: Wr ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
+         children: [Wr && (0, pW.jsxs)("div", {
+           className: "SkyblockHushWaitRing",
+           children: [Array.from({
+             length: 3
+           }, ((rr, Sr) => (0, pW.jsx)("span", {
+             className: "SkyblockHushWaitRipple"
+           }, Sr))), (0, pW.jsx)("span", {
+             className: "SkyblockHushWaitClosing",
+             style: ar
+           }), (0, pW.jsxs)("svg", {
+             className: "SkyblockHushWaitProgress",
+             viewBox: "0 0 100 100",
+             children: [(0, pW.jsx)("circle", {
+               className: "SkyblockHushWaitTrack",
+               cx: "50",
+ ... (104 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L118-L124` → after: `L9213-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9213-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9213-L9397) · [Before (L118-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L118-L124)

```diff
-               className: "CustomGamePlaceRow",
-               children: [GR(0), GR(2)]
-             }), GR(1)]
-           }), GR(4)]
-         }), (0, aR.jsxs)("div", {
-           className: "CustomGamePlaceRow",
-           children: [GR(3), GR(5)]
+               children: [(0, pW.jsx)("h2", {
+                 id: "skyblockTideChartsTitle",
+                 children: Zr("skyblockGame:tideChartsTitle")
+               }), (0, pW.jsx)("p", {
+                 className: "SkyblockTideChartsIntro",
+                 children: Zr("skyblockGame:tideChartsIntro")
+               })]
+             }), (0, pW.jsx)(nW.l, {
+               padIgnore: !0,
+               ariaLabel: Zr("skyblockGame:tideChartsClose"),
+               onClick: Sr.dismiss
+             })]
+           }), Qr.tabs.length > 1 && (0, pW.jsx)("div", {
+             className: "SkyblockTideChartsTabs",
+             role: "group",
+             "aria-label": Zr("skyblockGame:tideChartsIslands"),
+ ... (169 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L128` → after: `L9401-L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9401-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9401-L9546) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L128)

```diff
-     const CR = ["section1", "section2", "section3", "section4", "section5", "section6"],
+     var ZI = Qr(37851);
+     const WI = RQ + VQ;
+ 
+     function aI(rr, Sr) {
+       const Qr = [{
+         sound: "rpgKnifeSlice1",
+         beat: RQ,
+         lead: 260,
+         volume: .5,
+         rate: 1
+       }, {
+         sound: "sweep6",
+         beat: RQ,
+         lead: 140,
+         volume: .35,
+         rate: .85
+ ... (130 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L130-L144` → after: `L9548-L9551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9548-L9551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9548-L9551) · [Before (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L130-L144)

```diff
-         section1: {
-           gameCount: 4,
-           columnCount: 2
-         },
-         section2: {
-           gameCount: 6,
-           columnCount: 6
-         },
-         section3: {
-           gameCount: 8,
-           columnCount: 4
-         },
-         section4: {
-           gameCount: 6,
-           columnCount: 3
+         1: {
+           count: 24,
+           rise: 2.5,
+           colour: [79, 237, 237]
```

#### 18. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L146-L148` → after: `L9553-L9556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9553-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9553-L9556) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L146-L148)

```diff
-         section5: {
-           gameCount: 3,
-           columnCount: 1
+         2: {
+           count: 40,
+           rise: 3.5,
+           colour: [245, 209, 66]
```

#### 19. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L150-L152` → after: `L9558-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9558-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9558-L9561) · [Before (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L150-L152)

```diff
-         section6: {
-           gameCount: 8,
-           columnCount: 4
+         3: {
+           count: 64,
+           rise: 5,
+           colour: [206, 145, 206]
```

#### 20. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L155-L183` → after: `L9564-L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9564-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9564-L9566) · [Before (L155-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L155-L183)

```diff
-     var MR = GR(1179);
- 
-     function BR() {
-       var RR;
-       const {
-         t: JR
-       } = (0, iR.A)(), GR = (0, uR.x)(), yR = (0, MR.h)(), wR = (0, KR.c)({
-         refresh: !0
-       }), rR = GR.customGamePlace;
-       if (!(0, ZR.g)(rR)) return (0, aR.jsx)(VR.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const eR = qR.b[rR],
-         LR = ZR.b[rR],
-         nR = null !== (RR = null === wR || void 0 === wR ? void 0 : wR[rR]) && void 0 !== RR ? RR : null,
-         UR = [];
- ... (13 more removed lines; see GitHub link above)
+     class pI {
+       constructor(rr) {
+         this.deps = rr, this.tell = null
```

#### 21. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L185-L190` → after: `L9568-L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9568-L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9568-L9630) · [Before (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L185-L190)

```diff
-       return (0, aR.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, aR.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${rR}/${eR.largePicture}.png)`
+       receiveTell(rr) {
+         let {
+           biteTellTier: Sr
+         } = rr;
+         this.tell = {
+           tier: Sr,
+           atMs: this.deps.now(),
+           burst: !1
+         }, this.burstAtHook()
+       }
+       onLocalHookSettled() {
+         null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
+       }
+       onLocalWaitEnded(rr) {
+         const Sr = this.tell;
+         if (this.tell = null, !rr) return;
+ ... (47 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L192-L213` → after: `L9632-L10307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R9632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L9632-L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L9632-L10307) · [Before (L192-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L192-L213)

```diff
-         }), (0, aR.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: JR(eR.title)
-         }), (0, aR.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, aR.jsx)(fR.d, {
-             onClick: () => (0, VR.navigatePreserveSearch)("/"),
-             children: JR("homePage:backToGames")
-           })
-         }), !yR && (0, aR.jsx)(AR, {
-           categories: UR
-         }), yR && (0, aR.jsx)("div", {
-           className: tR()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
-           children: UR.map((RR => (0, aR.jsx)(WR, {
-             category: RR.category,
-             title: RR.title,
- ... (6 more removed lines; see GitHub link above)
+         }(rr.tier, Sr)))
+       }
+     }
+     var xI = Qr(1304),
+       mI = Qr(2093),
+       NI = Qr(43),
+       UI = Qr(40211),
+       tI = Qr(208);
+     const hI = tI.i.Uz * tI.i.playerEyeToHeightRatio;
+     class zI {
+       constructor(rr) {
+         this.host = rr, this.lava = [], this.loop = null, this.nextUpdateAt = 0
+       }
+       vx(rr) {
+         this.lava = rr, this.nextUpdateAt = 0
+       }
+ ... (660 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/250.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/250.js#L4-L10)

```diff
-   37433: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => VR,
-       g: () => qR,
-       i: () => fR,
-       l: () => iR,
-       o: () => WR
+   37803: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       default: () => Tr
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L12-L17` → after: `L8-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/250.js#L8-L29) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/250.js#L12-L17)

```diff
-     var yR = GR(688),
-       tR = GR(1963),
-       uR = GR(5685);
-     class ZR {
-       constructor(RR, JR) {
-         this.width = RR, this.hK = JR, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(RR * JR)
+     var Zr = Qr(1155),
+       Wr = Qr.n(Zr),
+       ar = Qr(1653),
+       jr = Qr(1148),
+       Ir = Qr(868),
+       fr = Qr(1251),
+       Er = Qr(1576),
+       pr = Qr(1644),
+       xr = Qr(4811),
+       mr = Qr(1448),
+       Nr = Qr(4743),
+       Ur = Qr(3646),
+       tr = Qr(1338);
+     const hr = 2;
+ 
+     function zr(rr) {
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L19-L24` → after: `L31-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L31-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/250.js#L31-L109) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/250.js#L19-L24)

```diff
-       push(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GR = this.data,
-           yR = this.next * this.width;
-         for (let tR = 0; tR < this.width; tR++) GR[yR + tR] = RR[JR + tR];
-         this.next = (this.next + 1) % this.hK, this.size = Math.min(this.size + 1, this.hK)
+     }
+ 
+     function Yr(rr) {
+       let {
+         game: Sr,
+         disabled: Qr,
+         showPlaceholder: Zr
+       } = rr;
+       return null !== Sr ? (0, tr.jsx)(Nr.e, {
+         source: zr(Sr),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: Qr,
+         entrySource: "customGamePlace"
+       }) : Zr ? (0, tr.jsx)(Nr.c, {
+         gameWidth: "100%",
+ ... (63 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L26-L33` → after: `L111-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L111-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/250.js#L111-L152) · [Before (L26-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/250.js#L26-L33)

```diff
-       rows() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
-         const GR = [],
-           yR = (this.next - this.size + this.hK) % this.hK;
-         for (let tR = 0; tR < this.size; tR++) {
-           const uR = (yR + tR) % this.hK * this.width;
-           this.data[uR + RR] >= JR && GR.push(Array.from(this.data.subarray(uR, uR + this.width)))
+       return (0, tr.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, tr.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, tr.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, tr.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [Qr(0), Qr(2)]
+             }), Qr(1)]
+           }), Qr(4)]
+         }), (0, tr.jsxs)("div", {
+           className: "CustomGamePlaceRow",
+           children: [Qr(3), Qr(5)]
+         })]
+       })
+ ... (26 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L35-L338` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/250.js#L154-L155) · [Before (L35-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/250.js#L35-L338)

```diff
-         return GR
-       }
-       lines() {
-         return this.rows().map((RR => RR.join(",")))
-       }
-     }
-     const qR = 10,
-       iR = {
-         idle: 0,
-         tK: 1,
-         xH: 2,
-         IH: 3,
-         lL: 4
-       },
-       fR = {
-         none: 0,
- ... (288 more removed lines; see GitHub link above)
+       };
+     var Br = Qr(1171);
```

#### 6. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L353-L358` → after: `L160-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L160-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/250.js#L160-L212) · [Before (L353-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/250.js#L353-L358)

```diff
-         clientHintsRead: yR,
-         debugDeviceLines: tR
-       } = await GR.e(35).then((() => GR(35016)));
-       await yR, fR.o.save({
-         ...RR,
-         device: tR()
+         t: Sr
+       } = (0, fr.E)(), Qr = (0, ar.w)(), Zr = (0, Br.j)(), mr = (0, xr.d)({
+         refresh: !0
+       }), Nr = Qr.customGamePlace;
+       if (!(0, jr.n)(Nr)) return (0, tr.jsx)(pr.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const Ur = Ir.c[Nr],
+         hr = jr.e[Nr],
+         zr = null !== (rr = null === mr || void 0 === mr ? void 0 : mr[Nr]) && void 0 !== rr ? rr : null,
+         Yr = [];
+       for (let Wr = 0; Wr < hr.length; Wr++) {
+         var Tr;
+         const rr = Kr[Wr];
+         if (!rr) continue;
+         const Qr = hr[Wr];
+ ... (37 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L2)

```diff
- export const ids = [251, 610];
+ export const ids = [251];
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L4-L6)

```diff
-   44991: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       CharacterCustomisationUI: () => aJ
+   37815: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => pr,
+       e: () => Ir,
+       f: () => Er,
+       h: () => fr,
+       k: () => nr
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L8-L33` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L12-L14) · [Before (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L8-L33)

```diff
-     var yR = GR(66),
-       tR = GR(3037),
-       uR = GR(4816),
-       ZR = GR(4799),
-       qR = GR(1196),
-       iR = GR(1201),
-       fR = GR(1163),
-       VR = GR.n(fR),
-       KR = GR(1336),
-       wR = GR(656),
-       rR = GR(645),
-       eR = GR(1270),
-       aR = GR(3178),
-       LR = GR(1718),
-       nR = GR(3644),
-       UR = GR(37807),
- ... (10 more removed lines; see GitHub link above)
+     var Zr = Qr(692),
+       Wr = Qr(1904),
+       ar = Qr(5617);
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L35-L36` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L16-L17) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L35-L36)

```diff
-       constructor() {
-         this.slots = new Map, this.before = new Map, this.accountId = null
+       constructor(rr, Sr) {
+         this.width = rr, this.sx = Sr, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(rr * Sr)
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L38-L39` → after: `L19-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L19-L24) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L38-L39)

```diff
-       moveTo(RR) {
-         null !== RR && RR !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = RR)
+       push(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const Qr = this.data,
+           Zr = this.next * this.width;
+         for (let Wr = 0; Wr < this.width; Wr++) Qr[Zr + Wr] = rr[Sr + Wr];
+         this.next = (this.next + 1) % this.sx, this.size = Math.min(this.size + 1, this.sx)
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L41-L42` → after: `L26-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L26-L35) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L41-L42)

```diff
-       isFor(RR) {
-         return null === this.accountId || this.accountId === RR
+       rows() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
+         const Qr = [],
+           Zr = (this.next - this.size + this.sx) % this.sx;
+         for (let Wr = 0; Wr < this.size; Wr++) {
+           const ar = (Zr + Wr) % this.sx * this.width;
+           this.data[ar + rr] >= Sr && Qr.push(Array.from(this.data.subarray(ar, ar + this.width)))
+         }
+         return Qr
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L44-L49` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L37-L38) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L44-L49)

```diff
-       overlay(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
-         return RR.map(((RR, GR) => {
-           var yR, tR;
-           return null !== (yR = null !== (tR = this.slots.get(GR)) && void 0 !== tR ? tR : JR.get(GR)) && void 0 !== yR ? yR : RR
-         }))
+       lines() {
+         return this.rows().map((rr => rr.join(",")))
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L52` → after: `L41-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L41-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L41-L79) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L52)

```diff
-     class OR extends pR.c {
+     const Ir = 10,
+       fr = {
+         idle: 0,
+         sp: 1,
+         tC: 2,
+         YC: 3,
+         Xh: 4
+       },
+       Er = {
+         none: 0,
+         skipped: 1,
+         paced: 2,
+         drawn: 3
+       },
+       pr = {
+         lockGained: 1,
+ ... (23 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L54-L60` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L81) · [Before (L54-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L54-L60)

```diff
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new vR;
-         super("saved outfits", (async JR => {
-           const GR = RR.isFor(JR.whamm),
-             yR = new Map(RR.slots),
-             tR = await gR.c.getSavedOutfits(JR);
-           return GR ? RR.overlay(tR, yR) : tR
-         })), this.unsaved = RR, this.started = !1, this.sending = !1
+         this.steps = new jr(Ir, xr), this.events = new jr(Nr.length, xr), this.frames = new jr(Ur.length, xr), this.cameraSets = new jr(ar.i, 256), this.changes = new jr(hr.length, 256)
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L62-L66` → after: `L83-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L83-L86) · [Before (L62-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L62-L66)

```diff
-       ensureLoaded() {
-         if (this.started) {
-           if (!this.getState().failed) return
-         } else this.started = !0, this.watchAccount();
-         this.refresh()
+     }
+     const nr = new class {
+       constructor() {
+         this.rings = null, this.sample = new Float64Array(Nr.length), this.startedClient = null, this.startedAtMs = 0
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L68-L71` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L88-L89) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L68-L71)

```diff
-       save(RR, JR) {
-         var GR, yR;
-         (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(RR)) || this.unsaved.before.set(RR, null !== (GR = null === (yR = this.getState().data) || void 0 === yR ? void 0 : yR[RR]) && void 0 !== GR ? GR : {});
-         this.unsaved.slots.set(RR, JR), this.update((GR => GR.map(((GR, yR) => yR === RR ? JR : GR)))), this.sending || this.sendUnsaved()
+       get client() {
+         return this.startedClient
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L73-L74` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L91-L92) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L73-L74)

```diff
-       clear(RR) {
-         this.save(RR, {})
+       start(rr, Sr) {
+         this.startedClient = rr, this.startedAtMs = performance.now(), null !== this.rings ? this.change(zr(rr)) : Sr && this.allocate()
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L76-L115` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L94-L95) · [Before (L76-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L76-L115)

```diff
-       async sendUnsaved() {
-         this.sending = !0;
-         let RR = !1;
-         for (; this.unsaved.slots.size > 0;) {
-           const GR = new Map(this.unsaved.slots);
-           let yR = this.getState().accountId;
-           try {
-             const RR = await iR.userContextManager.getCurrentUserContext();
-             if (yR = RR.whamm, this.unsaved.moveTo(RR.whamm), 0 === this.unsaved.slots.size) {
-               this.refresh();
-               break
-             }
-             const {
-               accountId: JR,
-               data: tR
-             } = this.getState();
- ... (24 more removed lines; see GitHub link above)
+       lockGained() {
+         this.allocate(), this.change(pr.lockGained)
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L117-L161` → after: `L97-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L97-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L97-L130) · [Before (L117-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L117-L161)

```diff
-     }
-     const xR = new OR;
-     var NR = GR(44996),
-       DR = GR(1716),
-       HR = GR(3283),
-       oR = GR(4150),
-       cR = GR(4315),
-       PR = GR(3240),
-       IR = GR(1468);
-     GR(35193), GR(4326);
-     Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
-     var mR = GR(3217),
-       zR = GR(4334),
-       SR = GR(4343),
-       jR = GR(1501),
-       dR = GR(3361),
- ... (29 more removed lines; see GitHub link above)
+       allocate() {
+         null === this.rings && (this.rings = new Yr, null !== this.startedClient && this.changeAt(this.startedAtMs, zr(this.startedClient), 1))
+       }
+       step(rr, Sr) {
+         var Qr;
+         rr[Sr + 6] !== fr.Xh && (null === (Qr = this.rings) || void 0 === Qr || Qr.steps.push(rr, Sr))
+       }
+       cameraSet(rr, Sr) {
+         var Qr;
+         null === (Qr = this.rings) || void 0 === Qr || Qr.cameraSets.push(rr, Sr)
+       }
+       mouseMove(rr, Sr) {
+         const Qr = this.rings;
+         if (null === Qr) return;
+         const Zr = this.sample;
+         Zr[0] = rr.timeStamp, Zr[1] = performance.now(), Zr[2] = rr.movementX, Zr[3] = rr.movementY, Zr[4] = Sr ? 1 : 0, Qr.events.push(Zr)
+ ... (18 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L163` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L132-L133) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L163)

```diff
-         !0 === GR && yR === iR && null !== tR && (ZR = tR[RR], qR = JR, (0, UR.b)(ZR, qR) && (0, UR.b)(qR, ZR)) && (xR.clear(RR), uR(RR))
+         const Qr = this.rings;
+         return [`look records (${this.startedClient}): ${mr.join(",")}`, ...null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.steps.lines()) && void 0 !== rr ? rr : [], `mousemove events: ${Nr.join(",")}`, ...null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.event … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L165-L269` → after: `L135-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L135-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L135-L146) · [Before (L165-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L165-L269)

```diff
-       return (0, yR.useEffect)((() => {
-         xR.ensureLoaded()
-       }), []), null === fR || iR !== KR.whamm ? null : (0, YR.jsxs)("div", {
-         className: "CosmeticPackGroup SavedOutfits",
-         children: [(0, YR.jsx)("div", {
-           className: "CosmeticPackGroupLabel",
-           children: (0, YR.jsx)("span", {
-             className: "CosmeticPackGroupLabelName",
-             children: ZR("homePage:myOutfits")
-           })
-         }), (0, YR.jsx)("div", {
-           className: "CharacterPresetsGrid SavedOutfitsGrid",
-           children: fR.map(((RR, yR) => {
-             const uR = (0, UR.f)(RR);
-             return (0, YR.jsxs)("div", {
-               className: VR()("SavedOutfitSlot", {
- ... (89 more removed lines; see GitHub link above)
+       toJson(rr, Sr) {
+         var Qr;
+         const Wr = rr - 6e4,
+           ar = this.rings,
+           jr = function(rr, Sr) {
+             var Qr;
+             let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+             const ar = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.rows(Zr, Wr)) && void 0 !== Qr ? Qr : [];
+             return {
+               columns: Sr,
+               fromMs: 0 === ar.length ? null : ar[0][Zr],
+               rows: ar
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L271-L276` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L148) · [Before (L271-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L271-L276)

```diff
-           },
-           soldRankUnlocks: !1
-         };
-         const uR = {
-           rank: wR.n[tR].chatTag[0].str
-         };
+           };
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L278-L285` → after: `L150-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L150-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L150-L160) · [Before (L278-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L278-L285)

```diff
-           title: "homePage:creatorCape",
-           subtitle: JR.some(wR.r) ? "homePage:creatorCapeOtherTier" : "homePage:creatorCapeHow",
-           textOpts: {
-             title: uR,
-             subtitle: {
-               ...uR,
-               tierRank: yR
-             }
+           version: Zr.e,
+           client: null !== (Qr = this.startedClient) && void 0 !== Qr ? Qr : "not started",
+           savedAt: (new Date).toISOString(),
+           savedAtMs: rr,
+           keptMs: 6e4,
+           page: window.location.href,
+           userAgent: navigator.userAgent,
+           devicePixelRatio: window.devicePixelRatio,
+           screen: {
+             width: window.screen.width,
+             height: window.screen.height
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L287-L366` → after: `L162-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L162-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L162-L172) · [Before (L287-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L287-L366)

```diff
-           soldRankUnlocks: !1
-         }
-       }(yR, tR, iR, VR), UR = uR && nR;
-       return (0, YR.jsx)(FR.g, {
-         className: "RankLockedCosmeticPopup",
-         title: KR,
-         subtitle: aR,
-         textOpts: LR,
-         confirm: UR ? {
-           text: "general:getItNow",
-           onClick: () => {
-             ZR(), TR()
-           }
-         } : {
-           text: "general:ok",
-           onClick: ZR
- ... (64 more removed lines; see GitHub link above)
+           Ez: null !== document.pointerLockElement,
+           visibility: document.visibilityState,
+           ...Sr,
+           outcomes: fr,
+           frameKinds: Er,
+           changes: pr,
+           lookSteps: jr(null === ar || void 0 === ar ? void 0 : ar.steps, mr),
+           mouseMoves: jr(null === ar || void 0 === ar ? void 0 : ar.events, Nr, 1),
+           frames: jr(null === ar || void 0 === ar ? void 0 : ar.frames, Ur),
+           cameraSets: jr(null === ar || void 0 === ar ? void 0 : ar.cameraSets, tr),
+           pageChanges: jr(null === ar || void 0 === ar ? void 0 : ar.changes, hr)
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L369-L422` → after: `L175-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L175-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L175-L180) · [Before (L369-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L369-L422)

```diff
-       return tR
-     }
-     var uJ = GR(3062);
-     const ZJ = {
-       skin: "homePage:getTriedOnSkin",
-       hat: "homePage:getTriedOnHat",
-       head: "homePage:getTriedOnHead",
-       eyebrows: "homePage:getTriedOnEyebrows",
-       eyes: "homePage:getTriedOnEyes",
-       back: "homePage:getTriedOnBack",
-       body: "homePage:getTriedOnBody",
-       legs: "homePage:getTriedOnLegs",
-       shoes: "homePage:getTriedOnShoes",
-       cape: "homePage:getTriedOnCape",
-       nameColour: "homePage:getTriedOnNameColour",
-       profileEffect: "homePage:getTriedOnProfileEffect",
- ... (38 more removed lines; see GitHub link above)
+       save(rr) {
+         const Sr = JSON.stringify(this.toJson(performance.now(), rr));
+         (0, Wr.c)(new Blob([Sr], {
+           type: "application/json"
+         }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
+       }
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L426-L432` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L200) · [Before (L426-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L426-L432)

```diff
-       let {
-         locked: JR,
-         children: GR
-       } = RR;
-       return JR ? (0, YR.jsx)(wJ, {
-         children: GR
-       }) : GR
+       return (0, ar.B)(rr).toFixed(1)
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L435-L450` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L203-L204) · [Before (L435-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L435-L450)

```diff
-     function wJ(RR) {
-       var JR;
-       let {
-         children: GR
-       } = RR;
-       const {
-         t: yR
-       } = (0, eR.A)(), {
-         userContext: tR
-       } = (0, qR.d)(), uR = null !== (JR = tR.dailyDrop) && void 0 !== JR && JR.hidden ? yR("dailyDrop:lockedFromHidden") : yR("dailyDrop:lockedFrom");
-       return (0, YR.jsx)(jR.h, {
-         tooltipInner: (0, YR.jsx)(YR.Fragment, {
-           children: uR
-         }),
-         children: GR
-       })
+     function fr(rr, Sr) {
+       return `camera set by ${jr.get(rr[Sr+1])}: heading ${`${Ir(rr[Sr+2])} -> ${Ir(rr[Sr+4])}`} deg, pitch ${`${Ir(rr[Sr+3])} -> ${Ir(rr[Sr+5])}`} deg, at ${rr[Sr].toFixed(1)} ms`
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L454-L484` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L210) · [Before (L454-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L454-L484)

```diff
-       let {
-         pack: JR,
-         ownedPacks: GR,
-         showStoreLink: yR = !1,
-         children: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, eR.A)(), ZR = DR.b[JR].purchasable && !GR.includes(JR) && DR.p.includes(JR), qR = oR.j[JR];
-       return (0, YR.jsxs)("div", {
-         className: VR()("CosmeticPackGroup", {
-           CosmeticPackGroupLocked: ZR
-         }),
-         children: [qR && (0, YR.jsx)(qR, {}), (0, YR.jsxs)("div", {
-           className: "CosmeticPackGroupLabel",
-           children: [(0, YR.jsx)("span", {
- ... (15 more removed lines; see GitHub link above)
+       return Number.isFinite(rr) ? String(Math.round(10 * rr) / 10) : String(rr)
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L488-L595` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L214) · [Before (L488-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L488-L595)

```diff
-       let {
-         equippedEmoteIds: JR,
-         ownedPacks: GR,
-         canBuy: yR,
-         onUpdateLoadout: tR,
-         onEmoteSelected: uR,
-         onEquipPreviewSkin: ZR
-       } = RR;
-       const {
-         t: qR
-       } = (0, eR.A)(), iR = new Set(JR), fR = new Map, wR = Object.keys(aR.f.emote).sort(((RR, JR) => {
-         var GR, yR, tR, uR;
-         return (null !== (GR = null === (yR = (0, aR.m)("emote", RR)) || void 0 === yR ? void 0 : yR.clientIdx) && void 0 !== GR ? GR : 0) - (null !== (tR = null === (uR = (0, aR.m)("emote", JR)) || void 0 === uR ? void 0 : uR.clientIdx) && void 0 !== tR ? tR : 0)
-       })).filter((RR => {
-         const JR = (0, aR.q)("emote", RR),
-           tR = (0, HR.G)("emote", RR, GR);
- ... (92 more removed lines; see GitHub link above)
+       return Number.isFinite(rr) ? rr.toFixed(1) : String(rr)
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L597-L630` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L216-L218) · [Before (L597-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L597-L630)

```diff
-     const aJ = (0, yR.memo)((function(RR) {
-       var JR, GR;
-       let {
-         selectedTab: fR
-       } = RR;
-       const WR = "characters" === fR ? "skin" : fR,
-         {
-           t: MR
-         } = (0, eR.A)(),
-         {
-           userContext: pR,
-           isUserContextUpdating: gR
-         } = (0, qR.d)(),
-         bR = (0, tR.b)(),
-         {
-           gameState: vR
- ... (18 more removed lines; see GitHub link above)
+     class Nr {
+       constructor() {
+         this.frames = 0, this.looked = 0, this.idle = 0, this.tC = 0, this.pastLimit = 0, this.lockSkips = 0, this.Xh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L632-L649` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L220-L221) · [Before (L632-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L632-L649)

```diff
- 
-       function WJ(RR, JR, GR) {
-         var yR, tR, uR;
-         iJ.current = {
-           ...iJ.current,
-           [RR]: JR
-         }, bR(), GR && ((0, hR.e)(pR, [
-           [RR, JR]
-         ]), yJ(null));
-         const ZR = (0, aR.m)(RR, JR);
-         if (null !== ZR && void 0 !== ZR && ZR.colourGroup && null !== (yR = DR.b[ZR.cosmeticPack].colourGroups) && void 0 !== yR && null !== (tR = yR[ZR.colourGroup]) && void 0 !== tR && tR.showSwatchSelector) {
-           const GR = (0, aR.i)(JR);
-           GR && dR((JR => ({
-             ...JR,
-             [`${ZR.cosmeticPack}_${RR}_${ZR.colourGroup}`]: parseInt(GR[1])
-           })))
- ... (2 more removed lines; see GitHub link above)
+       moved() {
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.tC > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L651-L658` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L223-L224) · [Before (L651-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L651-L658)

```diff
- 
-       function AJ(RR) {
-         oR((JR => {
-           const GR = {
-             ...JR
-           };
-           return delete GR[RR], GR
-         }))
+       hasEvent() {
+         return this.tC > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L660-L683` → after: `L226-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L226-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L226-L250) · [Before (L660-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L660-L683)

```diff
- 
-       function CJ(RR, JR) {
-         let {
-           undoable: GR
-         } = JR;
-         Object.keys(OR).length > 0 && oR({});
-         const yR = function(RR, JR, GR, yR) {
-           return Object.entries(RR).filter((RR => {
-             let [tR, uR] = RR;
-             return JR[tR] !== uR && !RJ(tR, uR, GR) && !yR(tR, uR)
-           }))
-         }(RR, iJ.current, XJ, ((RR, JR) => VJ(MJ, RR, JR)));
-         GR ? yR.length > 0 && yJ({
-           kind: "worn",
-           outfit: (0, UR.i)(iJ.current)
-         }) : yJ(null);
- ... (8 more removed lines; see GitHub link above)
+     }
+     class Ur {
+       constructor() {
+         var rr = this;
+         this.topicOn = (0, Wr.p)("look"), this.remote = (0, Wr.t)(), this.tally = new Nr, this.takes = null, this.started = !1, this.record = function(Sr) {
+           let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           if (Er.k.step(Sr, Qr), !rr.topicOn) return;
+           const Zr = Sr[Qr],
+             Wr = Sr[Qr + 1],
+             ar = Sr[Qr + 2],
+             jr = Sr[Qr + 3],
+             Ir = Sr[Qr + 4],
+             fr = Sr[Qr + 5],
+             pr = Sr[Qr + 6],
+             Nr = Sr[Qr + 7],
+             Ur = Sr[Qr + 8],
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L685-L693` → after: `L252-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L252-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L252-L284) · [Before (L685-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L685-L693)

```diff
-           of RR) {
-           if (!GR) return;
-           JR = !0, fJ.current || WJ(yR, tR, !1), bR()
-         }
-         JR && (fJ.current = !0)
-       })), (0, yR.useEffect)((() => {
-         if (!gR) {
-           for (const [RR, JR] of Object.entries(pR.getPlayerCosmetics())) WJ(RR, JR, !1);
-           bR()
+           hr.looked++, Number.isFinite(Wr) && (hr.dtMin = Math.min(hr.dtMin, Wr), hr.dtMax = Math.max(hr.dtMax, Wr), hr.dtSum += Wr, Wr > 0 && (hr.peakRate = Math.max(hr.peakRate, Math.hypot(Ir, fr) / Wr))), hr.raw[0] += ar, hr.raw[1] += jr, hr.turned[0] += Ir, hr.turned[1] += fr … [truncated]
+           const zr = Math.abs(ar) > tr || Math.abs(jr) > tr,
+             Yr = `raw (${xr(ar)}, ${xr(jr)}) over ${mr(Wr)} ms, limit ${xr(tr)}, filter v (${Nr.toFixed(3)}, ${Ur.toFixed(3)}) px/ms, at ${mr(Zr)} ms`;
+           pr === Er.h.tC ? (hr.tC++, rr.outlier(`spike put right: ${Yr} -> turned (${xr(Ir)}, ${xr(fr)})`)) : zr ? (hr.pastLimit++, rr.outlier(`kept past limit: ${Yr}`)) : Wr > 50 && (hr.longFrames++, rr.remote || rr.outlier(`long frame: ${Yr}, turned in full`))
+         }, this.onMouseMove = rr => {
+           const Sr = null !== document.pointerLockElement;
+           if (Er.k.mouseMove(rr, Sr), !this.topicOn) return;
+           const Qr = this.tally,
+             {
+               movementX: Zr,
+               movementY: Wr
+             } = rr;
+           Qr.events++;
+           const ar = Math.max(Math.abs(Zr), Math.abs(Wr));
+           Qr.eventMax = Math.max(Qr.eventMax, ar), ar >= 200 && (Qr.bigEvents++, this.eventOutlier(`big mousemove (${Zr}, ${Wr}) at ${mr(rr.timeStamp)} ms, lock ${Sr?"wI":"free"}`))
+         }, this.onLockChange = () => {
+ ... (17 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L728-L745` → after: `L287-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L287-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L287-L292) · [Before (L728-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L728-L745)

```diff
-       const NJ = function(RR, JR) {
-           const GR = new Set,
-             yR = new Set;
-           for (const [tR, uR] of Object.entries(aR.f[RR])) {
-             if (void 0 === uR.colourGroup) continue;
-             const ZR = `${uR.cosmeticPack}_${uR.colourGroup}`;
-             (RJ(RR, tR, JR) ? yR : GR).add(ZR)
-           }
-           return new Set([...GR].filter((RR => yR.has(RR))))
-         }(WR, XJ),
-         DJ = new Map;
-       for (const [yR, tR] of OJ) {
-         const RR = [],
-           JR = new Map;
-         for (const yR of tR) {
-           var HJ, oJ;
- ... (2 more removed lines; see GitHub link above)
+       start(rr, Sr) {
+         if (Er.k.start(rr, null !== document.pointerLockElement), this.takes = Sr, this.topicOn) {
+           const {
+             screen: Sr
+           } = window;
+           (0, Wr.l)("look", `start: ${rr} client, dpr ${window.devicePixelRatio}, screen ${Sr.width}x${Sr.height}, pointer lock ${document.pointerLockElement?"wI":"free"}`)
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L747-L770` → after: `L294-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L294-L297) · [Before (L747-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L747-L770)

```diff
-         const GR = RR.map((RR => {
-           var GR;
-           const tR = JR.get(RR),
-             uR = RR ? null === (GR = DR.b[yR].colourGroups) || void 0 === GR ? void 0 : GR[RR] : void 0,
-             ZR = !0 === (null === uR || void 0 === uR ? void 0 : uR.showSwatchSelector) && !NJ.has(`${yR}_${RR}`);
-           if (ZR && uR) {
-             var qR;
-             const JR = null !== (qR = jR[`${yR}_${WR}_${RR}`]) && void 0 !== qR ? qR : (0, DR.g)(uR.colours);
-             return {
-               groupName: RR,
-               showSwatch: ZR,
-               cosmetics: tR.filter((RR => {
-                 const GR = (0, aR.i)(RR);
-                 return !GR || JR.toString() === GR[1].toString()
-               }))
-             }
- ... (8 more removed lines; see GitHub link above)
+         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+           capture: !0,
+           passive: !0
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L772-L778` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L299-L301) · [Before (L772-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L772-L778)

```diff
-       const cJ = Array.from(OJ.keys()),
-         PJ = new Map;
-       for (const [yR, tR] of Object.entries(LR.b)) {
-         const RR = DR.b[tR.cosmeticPack],
-           JR = (0, HR.C)(tR.cosmetics, XJ),
-           GR = void 0 !== GJ(yR);
-         (RR.clientSelectable || GR || JR) && ((!RR.purchasable || JR || BJ) && (PJ.has(tR.cosmeticPack) || PJ.set(tR.cosmeticPack, []), PJ.get(tR.cosmeticPack).push([yR, tR])))
+       outlier(rr) {
+         const Sr = this.tally;
+         Sr.outliers >= 20 ? Sr.suppressed++ : (Sr.outliers++, (0, Wr.l)("look", rr))
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L780-L1302` → after: `L303-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L303-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L303-L318) · [Before (L780-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L780-L1302)

```diff
-       const IJ = Array.from(PJ.keys()),
-         mJ = BJ ? tJ(fR, OR, XJ) : [],
-         [zJ, SJ] = (0, yR.useState)(!1);
-       return !zJ && (mJ.length > 0 || null !== FR) && SJ(!0), (0, YR.jsxs)("div", {
-         className: "CharCustomisationBody",
-         children: [("cape" === WR || "nameColour" === WR) && !(0, rR.e)(lJ) && (0, YR.jsxs)("div", {
-           className: "CharCustomisationBodyHeader",
-           children: [(0, YR.jsx)(IR.d, {
-             name: "bolt"
-           }), MR((0, BR.s)(Date.now()).unlockWithKey), BJ && (0, YR.jsx)(XR.n, {
-             onClick: () => {
-               TR()
-             },
-             children: MR("general:getItNow")
-           })]
-         }), (0, YR.jsxs)("div", {
- ... (507 more removed lines; see GitHub link above)
+       eventOutlier(rr) {
+         const Sr = this.tally;
+         Sr.eventLines >= 10 ? Sr.suppressed++ : (Sr.eventLines++, (0, Wr.l)("look", rr))
+       }
+       takeRecords() {
+         if (null === this.takes) return;
+         const rr = this.takes.look();
+         if (rr.length >= pr) {
+           this.counted(Er.d.stepsLost, rr[0]), this.counted(Er.d.droppedCopies, rr[1]);
+           for (let Sr = pr; Sr + Er.e <= rr.length; Sr += Er.e) this.record(rr, Sr)
+         }
+         const Sr = this.takes.cameraSets();
+         if (Sr.length >= Zr.e) {
+           this.counted(Er.d.cameraSetsLost, Sr[0]);
+           for (let rr = Zr.e; rr + Zr.i <= Sr.length; rr += Zr.i) Er.k.cameraSet(Sr, rr), this.topicOn && (this.tally.cameraSets++, this.outlier(fr(Sr, rr)))
+         }
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1304-L1313` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L320-L321) · [Before (L1304-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L1304-L1313)

```diff
-       save(RR, JR) {
-         RR !== this.userContext && this.sendHeld(), this.userContext = RR;
-         for (const [yR, tR] of JR) this.pending.set(yR, tR);
-         if (null !== this.timer) return;
-         const GR = this.lastSentAt + 1100 - Date.now();
-         GR <= 0 ? this.send(RR) : (this.timer = setTimeout((() => {
-           this.sendHeld()
-         }), GR), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
-           "hidden" === document.visibilityState && this.sendHeld()
-         }))))
+       droppedCopy() {
+         this.counted(Er.d.droppedCopies, 1)
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1315-L1316` → after: `L323-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L323-L327) · [Before (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L1315-L1316)

```diff
-       sendHeld() {
-         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
+       counted(rr, Sr) {
+         if (0 === Sr) return;
+         if (Er.k.change(rr, Sr), !this.topicOn) return;
+         const Qr = this.tally;
+         rr === Er.d.droppedCopies ? Qr.dropped += Sr : rr === Er.d.stepsLost ? Qr.lost += Sr : Qr.cameraSetsLost += Sr
```

#### 36. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1318-L1328` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L329-L330) · [Before (L1318-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L1318-L1328)

```diff
-       send(RR) {
-         const JR = Array.from(this.pending, (RR => {
-           let [JR, GR] = RR;
-           return {
-             ft: JR,
-             Vt: GR
-           }
-         }));
-         this.pending.clear(), this.lastSentAt = Date.now(), tR.c.updateCosmetics(RR, JR).catch((RR => {
-           console.error("Failed to update cosmetics", RR)
-         }))
+       endTake() {
+         this.takeRecords(), this.takes = null
```

#### 37. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1330` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L332-L333) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L1330)

```diff
-     };
+     }
+     let tr = null;
```

#### 38. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1332-L1339` → after: `L335-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L335-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/251.js#L335-L359) · [Before (L1332-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/251.js#L1332-L1339)

```diff
-     function ZR(RR, JR) {
-       for (const [GR, yR] of JR) RR.setPlayerCosmetics(GR, yR);
-       if (null === yR.gameBridge.latest("connectedGame").websocketUrl) uR.save(RR, JR);
-       else
-         for (const [GR, tR] of JR) yR.gameBridge.send("updateMyCosmetic", {
-           ft: GR,
-           Vt: tR
-         })
+     function hr(rr) {
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       return tr ??= new Ur, tr.start(rr, Sr), tr.record
+     }
+ 
+     function zr() {
+       var rr;
+       null === (rr = tr) || void 0 === rr || rr.endTake()
+     }
+ 
+     function Yr() {
+       var rr;
+       null === (rr = tr) || void 0 === rr || rr.droppedCopy()
+     }
+     async function nr(rr) {
+       var Sr;
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L2)

```diff
- export const ids = [252];
+ export const ids = [252, 611];
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4-L14` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L4-L6) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L4-L14)

```diff
-   37470: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => qJ,
-       f: () => UJ,
-       i: () => wJ,
-       m: () => fJ,
-       n: () => rJ,
-       q: () => KJ,
-       t: () => WJ,
-       v: () => VJ,
-       x: () => aJ
+   45287: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       CharacterCustomisationUI: () => tS
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L16-L136` → after: `L8-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L8-L111) · [Before (L16-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L16-L136)

```diff
-     const yR = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
-       tR = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
-       uR = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
-       ZR = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
-       qR = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
-       iR = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
-       fR = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
-       VR = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
-       KR = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
-       wR = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
-       rR = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
-       eR = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
-       aR = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
-       LR = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
-       nR = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
-       UR = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
- ... (105 more removed lines; see GitHub link above)
+     var Zr = Qr(72),
+       Wr = Qr(3002),
+       ar = Qr(4736),
+       jr = Qr(4713),
+       Ir = Qr(1181),
+       fr = Qr(1187),
+       Er = Qr(1155),
+       pr = Qr.n(Er),
+       xr = Qr(1287),
+       mr = Qr(672),
+       Nr = Qr(661),
+       Ur = Qr(1251),
+       tr = Qr(3139),
+       hr = Qr(1686),
+       zr = Qr(3601),
+       Yr = Qr(38167),
+ ... (88 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L138` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L113-L115) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L138)

```diff
-         })
+           for (const [rr, Sr] of Qr) this.unsaved.slots.get(rr) === Sr && this.unsaved.slots.delete(rr)
+         }
+         this.sending = !1, rr && this.refresh()
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L140-L143` → after: `L117-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L117-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L117-L134) · [Before (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L140-L143)

```diff
-     const qJ = new Map([...tJ].map((RR => {
-       const JR = Object.keys(uJ).filter((JR => JR.startsWith(RR) && /^[A-Z]/.test(JR.slice(RR.length))));
-       return [RR, JR]
-     })));
+     }
+     const Hr = new Pr;
+     var qr = Qr(45289),
+       Rr = Qr(1684),
+       gr = Qr(3242),
+       Cr = Qr(4100),
+       Mr = Qr(4278),
+       Gr = Qr(3208),
+       kr = Qr(1448);
+     Qr(35505), Qr(4287);
+     Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
+     var Ar = Qr(3192),
+       Vr = Qr(4293),
+       ir = Qr(4297),
+       wr = Qr(1489),
+       cr = Qr(3320),
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L146-L148` → after: `L137-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L137-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L137-L239) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L146-L148)

```diff
-       const JR = ZJ.get(RR);
-       if (void 0 === JR) throw new Error(`Invalid sound name ${RR} (not in any sound group)`);
-       return JR
+       let {
+         wornOutfit: Sr,
+         onApply: Qr,
+         onOverwrite: Wr,
+         onDelete: ar
+       } = rr;
+       const {
+         t: jr
+       } = (0, Ur.E)(), {
+         accountId: fr,
+         data: Er
+       } = (0, Or.j)(Hr, !1), {
+         userContext: xr
+       } = (0, Ir.c)();
+       async function mr(rr, Sr) {
+         const Qr = await Fr.NotificationProvider.showPromptPopup({
+ ... (87 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L152` → after: `L243-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L243-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L243-L324) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L152)

```diff
-       return iJ(RR).group
+       let {
+         fW: Sr,
+         EW: Qr,
+         missingRanks: Zr,
+         playerRanks: Wr,
+         canBuy: ar,
+         closePopup: jr
+       } = rr;
+       const {
+         t: Ir
+       } = (0, Ur.E)(), fr = (0, Tr.r)(Date.now()), Er = Nr.r.find((rr => Wr.includes(rr.rank))), pr = Ir((void 0 === Er ? fr : (0, Tr.l)(Er.id)).nameKey), {
+         title: xr,
+         subtitle: tr,
+         textOpts: hr,
+         soldRankUnlocks: zr
+       } = function(rr, Sr, Qr, Zr) {
+ ... (66 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L156` → after: `L328-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L328-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L328-L335) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L156)

```diff
-       return iJ(RR).file
+       return Rr.l.find((Sr => (0, Rr.d)(Sr) === rr))
+     }
+ 
+     function ZS(rr, Sr, Qr) {
+       var Zr;
+       if (!rS(rr, Sr, Qr)) return null;
+       const Wr = (0, tr.k)(rr, Sr).cosmeticPack;
+       return Rr.s.includes(Wr) ? Wr : null !== (Zr = (0, gr.h)(rr, Sr).find((rr => Rr.s.includes(rr)))) && void 0 !== Zr ? Zr : null
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L160` → after: `L391-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L391-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L391-L416) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L160)

```diff
-       return ZJ.has(RR)
+       let {
+         gets: Sr
+       } = rr;
+       const {
+         t: Qr
+       } = (0, Ur.E)();
+       return (0, or.jsx)("div", {
+         className: "CharCustomisationGetTriedOn",
+         children: Sr.map((rr => {
+           let {
+             kind: Sr,
+             pack: Zr
+           } = rr;
+           return (0, or.jsxs)(yr.p, {
+             className: "CharCustomisationGetPiece",
+             onClick: () => {
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L163-L164` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L421-L422) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L163-L164)

```diff
-     function wJ(RR, JR) {
-       return rJ(RR).includes(JR)
+     function pS(rr, Sr, Qr) {
+       return null !== rr && !(0, fS.e)(ES.b, Sr, Qr, rr.collected, rr.ownedPacks)
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L168-L169` → after: `L426-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L426-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L426-L432) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L168-L169)

```diff
-       if (!(RR in uJ)) throw new Error(`Invalid sound group ${RR}`);
-       return Object.keys(uJ[RR].sounds)
+       let {
+         locked: Sr,
+         children: Qr
+       } = rr;
+       return Sr ? (0, or.jsx)(mS, {
+         children: Qr
+       }) : Qr
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L174-L175` → after: `L436-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L436-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L436-L450) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L174-L175)

```diff
-       let JR = eJ.get(RR);
-       return void 0 === JR && (JR = [...ZJ.keys()].filter((JR => JR.startsWith(RR))), eJ.set(RR, JR)), JR
+       var Sr;
+       let {
+         children: Qr
+       } = rr;
+       const {
+         t: Zr
+       } = (0, Ur.E)(), {
+         userContext: Wr
+       } = (0, Ir.c)(), ar = null !== (Sr = Wr.dailyDrop) && void 0 !== Sr && Sr.hidden ? Zr("dailyDrop:lockedFromHidden") : Zr("dailyDrop:lockedFrom");
+       return (0, or.jsx)(wr.f, {
+         tooltipInner: (0, or.jsx)(or.Fragment, {
+           children: ar
+         }),
+         children: Qr
+       })
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L181-L191` → after: `L454-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L454-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L454-L484) · [Before (L181-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L181-L191)

```diff
-       const JR = aJ(RR),
-         GR = JR[Math.floor(Math.random() * JR.length)];
-       if (JR.length > 1) {
-         const JR = function(RR, JR) {
-           const GR = `${JR}\n${RR}`;
-           let yR = nJ.get(GR);
-           return void 0 === yR && (yR = aJ(RR).filter((RR => ZJ.get(RR).group === JR)), nJ.set(GR, yR)), yR
-         }(RR, ZJ.get(GR).group);
-         JR.length > 1 ? LJ.set(GR, JR) : LJ.delete(GR)
-       }
-       return GR
+       let {
+         pack: Sr,
+         ownedPacks: Qr,
+         showStoreLink: Zr = !1,
+         children: Wr
+       } = rr;
+       const {
+         t: ar
+       } = (0, Ur.E)(), jr = Rr.b[Sr].purchasable && !Qr.includes(Sr) && Rr.s.includes(Sr), Ir = Cr.i[Sr];
+       return (0, or.jsxs)("div", {
+         className: pr()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: jr
+         }),
+         children: [Ir && (0, or.jsx)(Ir, {}), (0, or.jsxs)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: [(0, or.jsx)("span", {
+ ... (15 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L195` → after: `L488-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L488-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L488-L595) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L195)

```diff
-       return LJ.get(RR)
+       let {
+         equippedEmoteIds: Sr,
+         ownedPacks: Qr,
+         canBuy: Zr,
+         onUpdateLoadout: Wr,
+         onEmoteSelected: ar,
+         onEquipPreviewSkin: jr
+       } = rr;
+       const {
+         t: Ir
+       } = (0, Ur.E)(), fr = new Set(Sr), Er = new Map, mr = Object.keys(tr.f.emote).sort(((rr, Sr) => {
+         var Qr, Zr, Wr, ar;
+         return (null !== (Qr = null === (Zr = (0, tr.k)("emote", rr)) || void 0 === Zr ? void 0 : Zr.clientIdx) && void 0 !== Qr ? Qr : 0) - (null !== (Wr = null === (ar = (0, tr.k)("emote", Sr)) || void 0 === ar ? void 0 : ar.clientIdx) && void 0 !== Wr ? Wr : 0)
+       })).filter((rr => {
+         const Sr = (0, tr.m)("emote", rr),
+           Wr = (0, gr.E)("emote", rr, Qr);
+ ... (92 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L198` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L1294) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L198)

```diff
-   37479: (RR, JR, GR) => {
+   37827: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L200-L201` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L1296) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L200-L201)

```diff
-       d: () => yR,
-       e: () => uR
+       b: () => jr
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L203-L204` → after: `L1298-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1298-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L1298-L1330) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L203-L204)

```diff
-     const yR = "__default",
-       tR = ["end", "stop", "playerror"];
+     var Zr = Qr(2089),
+       Wr = Qr(1629);
+     const ar = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(rr, Sr) {
+         rr !== this.userContext && this.sendHeld(), this.userContext = rr;
+         for (const [Zr, Wr] of Sr) this.pending.set(Zr, Wr);
+         if (null !== this.timer) return;
+         const Qr = this.lastSentAt + 1100 - Date.now();
+         Qr <= 0 ? this.send(rr) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), Qr), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
+ ... (17 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L207-L216` → after: `L1333-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1333-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/252.js#L1333-L1339) · [Before (L207-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/252.js#L207-L216)

```diff
-       const GR = () => {
-         if (function(RR) {
-             return "loaded" === RR.state() && !RR.playing() && !RR._playLock
-           }(RR)) {
-           for (const JR of tR) RR.off(JR, GR);
-           RR.unload(), null === JR || void 0 === JR || JR()
-         }
-       };
-       for (const yR of tR) RR.on(yR, GR);
-       GR()
+       for (const [Qr, Zr] of Sr) rr.setPlayerCosmetics(Qr, Zr);
+       if (null === Zr.gameBridge.latest("connectedGame").websocketUrl) ar.save(rr, Sr);
+       else
+         for (const [Qr, Wr] of Sr) Zr.gameBridge.send("updateMyCosmetic", {
+           fW: Qr,
+           EW: Wr
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L4-L6)

```diff
-   42608: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       LobbyManageView: () => WJ
+   37851: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => IS,
+       c: () => YS,
+       e: () => mS,
+       g: () => ES,
+       h: () => NS,
+       l: () => xS,
+       n: () => nS,
+       r: () => pS,
+       t: () => tS
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L167` → after: `L16-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L16-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L16-L69) · [Before (L8-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L8-L167)

```diff
-     var yR = GR(66),
-       tR = GR(1618),
-       uR = GR(38131),
-       ZR = GR(3479),
-       qR = GR(3488),
-       iR = GR(3465),
-       fR = GR(37751);
- 
-     function VR() {
-       const [RR, JR] = (0, yR.useState)(new Map);
-       return {
-         get: JR => RR.get(JR),
-         hold: (0, yR.useCallback)(((RR, GR, yR) => {
-           JR((JR => new Map(JR).set(RR, GR))), yR.then((() => {
-             JR((JR => {
-               const GR = new Map(JR);
- ... (144 more removed lines; see GitHub link above)
+     const Zr = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       Wr = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       ar = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       jr = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       Ir = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       fr = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       Er = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       pr = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       xr = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       mr = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       Nr = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       Ur = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       tr = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       hr = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       zr = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       Yr = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (38 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L169-L1170` → after: `L71-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L71-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L71-L132) · [Before (L169-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L169-L1170)

```diff
-         coOwner: "lobbyManage:roleCanCoOwner",
-         mod: "lobbyManage:roleCanMod",
-         coder: "lobbyManage:roleCanCoder",
-         builder: "lobbyManage:roleCanBuilder"
-       };
- 
-     function PR(RR) {
-       var JR, GR, uR;
-       let {
-         name: ZR,
-         place: qR,
-         openedIn: iR,
-         isYou: fR,
-         manage: KR,
-         hiddenNames: wR,
-         zIndex: aR
- ... (986 more removed lines; see GitHub link above)
+         ambient: Zr,
+         cars: Wr,
+         crowd: ar,
+         customGame_horror: jr,
+         dig: Ir,
+         fire: fr,
+         fishing: Er,
+         gameStart: pr,
+         gunMisc: xr,
+         gunPistol: mr,
+         gunRifle: Nr,
+         gunSemiAutomatic: Ur,
+         gunShotgun: tr,
+         gunSubmachineGun: hr,
+         mobBear: zr,
+         mobCat: Yr,
+ ... (46 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1172-L1229` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L134-L136) · [Before (L1172-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L1172-L1229)

```diff
-           title: tR,
-           items: uR
-         }
-       }))
-     }
- 
-     function KJ(RR) {
-       return RR.flatMap((RR => {
-         let {
-           items: JR
-         } = RR;
-         return JR.flatMap((RR => {
-           let {
-             rule: JR,
-             children: GR
-           } = RR;
- ... (42 more removed lines; see GitHub link above)
+           file: {
+             ...Sr,
+             src: Zr
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1499` → after: `L140-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L140-L143) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L1499)

```diff
-     }
+     const IS = new Map([...WS].map((rr => {
+       const Sr = Object.keys(aS).filter((Sr => Sr.startsWith(rr) && /^[A-Z]/.test(Sr.slice(rr.length))));
+       return [rr, Sr]
+     })));
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1502-L1747` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L146-L148) · [Before (L1502-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L1502-L1747)

```diff
-       let {
-         leaderboard: JR
-       } = RR;
-       const GR = function() {
-           const RR = (0, iR.f)("lobbyManage"),
-             [JR, GR] = (0, yR.useReducer)((RR => RR + 1), 0),
-             [tR] = (0, yR.useState)((() => new fR.b(GR)));
-           return (0, yR.useEffect)((() => {
-             const RR = tR.nextDeadline();
-             if (null === RR) return;
-             const JR = setTimeout((() => {
-               tR.expire(Date.now()), GR()
-             }), Math.max(0, RR - Date.now()));
-             return () => {
-               clearTimeout(JR)
-             }
- ... (230 more removed lines; see GitHub link above)
+       const Sr = jS.get(rr);
+       if (void 0 === Sr) throw new Error(`Invalid sound name ${rr} (not in any sound group)`);
+       return Sr
```

#### 7. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1764-L1821` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L152) · [Before (L1764-L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L1764-L1821)

```diff
-       let {
-         label: JR,
-         icon: GR,
-         placeholder: tR,
-         onSubmit: KR
-       } = RR;
-       const wR = (0, yR.useRef)(null),
-         [rR, eR] = (0, yR.useState)(""),
-         [aR, LR] = (0, yR.useState)("Enter"),
-         [nR, UR] = (0, yR.useState)(null);
-       (0, yR.useEffect)((() => {
-         if ("Success" !== aR && "Error" !== aR) return;
-         const RR = setTimeout((() => {
-           "Success" === aR && wR.current && (wR.current.value = "", eR("")), LR("Enter")
-         }), "Success" === aR ? 1e3 : 4e3);
-         return () => {
- ... (42 more removed lines; see GitHub link above)
+       return fS(rr).group
```

#### 8. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1843-L1893` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L156) · [Before (L1843-L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L1843-L1893)

```diff
-       let {
-         visibility: JR,
-         onPick: GR
-       } = RR;
-       const {
-         t: tR
-       } = (0, ZR.A)(), KR = (0, yR.useRef)([]);
-       return (0, iR.jsx)("div", {
-         className: "WorldSocialTiles",
-         role: "group",
-         "aria-label": tR("worldSocial:whoCanJoin"),
-         children: VR.map(((RR, yR) => {
-           const ZR = RR === JR;
-           return (0, iR.jsxs)("button", {
-             ref: RR => {
-               KR.current[yR] = RR
- ... (35 more removed lines; see GitHub link above)
+       return fS(rr).file
```

#### 9. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1906-L1942` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L160) · [Before (L1906-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L1906-L1942)

```diff
-       let {
-         gK: JR,
-         children: GR,
-         ...qR
-       } = RR;
-       const {
-         t: iR
-       } = (0, yR.A)();
-       return (0, ZR.jsx)("div", {
-         className: "WhitelistTickRow",
-         onClick: () => {
-           JR.onChange(!JR.on)
-         },
-         children: (0, ZR.jsx)(tR.g, {
-           ...qR,
-           opensProfileCard: !1,
- ... (21 more removed lines; see GitHub link above)
+       return jS.has(rr)
```

#### 10. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2038-L2048` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L164) · [Before (L2038-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2038-L2048)

```diff
-       var GR;
-       return {
-         isError: !1,
-         name: RR,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== JR && void 0 !== JR ? JR : {},
-         nameColour: null !== (GR = null === JR || void 0 === JR ? void 0 : JR.nameColour) && void 0 !== GR ? GR : yR.c,
-         location: {
-           status: "offline"
-         }
-       }
+       return NS(rr).includes(Sr)
```

#### 11. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2052-L2144` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L168-L169) · [Before (L2052-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2052-L2144)

```diff
-       let {
-         player: JR,
-         isFriend: GR = !1,
-         status: yR,
-         showLocation: iR = void 0 === yR,
-         gK: KR,
-         onSendFriendRequest: wR,
-         actions: rR,
-         zIndex: eR
-       } = RR;
-       const {
-         t: aR
-       } = (0, tR.A)();
-       let LR = yR;
-       null !== KR && void 0 !== KR && KR.on && (LR = (0, VR.jsxs)(VR.Fragment, {
-         children: [null !== yR && void 0 !== yR ? yR : (0, VR.jsx)(qR.d, {
- ... (77 more removed lines; see GitHub link above)
+       if (!(rr in aS)) throw new Error(`Invalid sound group ${rr}`);
+       return Object.keys(aS[rr].sounds)
```

#### 12. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2149` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L174-L175) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2149)

```diff
-       qR.set(RR.lobbyName, RR)
+       let Sr = US.get(rr);
+       return void 0 === Sr && (Sr = [...jS.keys()].filter((Sr => Sr.startsWith(rr))), US.set(rr, Sr)), Sr
```

#### 13. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2153-L2212` → after: `L181-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L181-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L181-L189) · [Before (L2153-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2153-L2212)

```diff
-       const [JR] = (0, yR.useState)((() => function(RR) {
-         var JR;
-         const GR = null !== (JR = qR.get(RR)) && void 0 !== JR ? JR : null;
-         return null !== GR && void 0 !== GR && GR.answer && "error" in GR.answer ? null : GR
-       }(RR))), [GR, ZR] = (0, yR.useState)((() => null !== JR && void 0 !== JR && JR.answer && "settings" in JR.answer ? JR.answer.settings : null)), [iR, fR] = (0, yR.useState)(!0), [VR, KR] = (0, yR.useState)(null !== GR), wR = (0, yR.useRef)(GR);
-       wR.current = GR;
-       const rR = (0, yR.useRef)(0),
-         eR = (0, yR.useRef)(0),
-         aR = (0, yR.useRef)(!1),
-         LR = (0, yR.useRef)(!0),
-         nR = (0, yR.useCallback)((async JR => {
-           const GR = ++rR.current,
-             yR = await (null !== JR && void 0 !== JR ? JR : tR.c.getSocialSettings(RR));
-           LR.current && GR === rR.current && (KR(!0), fR(!1), "error" in yR || ZR(yR.settings))
-         }), [RR]),
-         UR = (0, yR.useCallback)((() => {
- ... (44 more removed lines; see GitHub link above)
+       const Sr = tS(rr),
+         Qr = Sr[Math.floor(Math.random() * Sr.length)];
+       if (Sr.length > 1) {
+         const Sr = function(rr, Sr) {
+           const Qr = `${Sr}\n${rr}`;
+           let Zr = zS.get(Qr);
+           return void 0 === Zr && (Zr = tS(rr).filter((rr => jS.get(rr).group === Sr)), zS.set(Qr, Zr)), Zr
+         }(rr, jS.get(Qr).group);
+         Sr.length > 1 ? hS.set(Qr, Sr) : hS.delete(Qr)
```

#### 14. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2275-L2299` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L195) · [Before (L2275-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2275-L2299)

```diff
-       if (null === RR) return !0;
-       const {
-         visibility: JR
-       } = RR;
-       return "public" === JR || "unlisted" === JR || "whitelist" === JR && RR.canManage
-     }
- 
-     function iR(RR, JR, GR) {
-       if (GR) {
-         const GR = JR.filter((JR => !yR(RR.whitelist, JR)));
-         return {
-           ...RR,
-           whitelist: [...RR.whitelist, ...GR]
-         }
-       }
-       return {
- ... (9 more removed lines; see GitHub link above)
+       return hS.get(rr)
```

#### 15. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2311` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L198) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2311)

```diff
-   38131: (RR, JR, GR) => {
+   37853: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2313` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L200-L201) · [Before (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2313)

```diff
-       e: () => uR
+       e: () => Zr,
+       g: () => ar
```

#### 17. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2315-L2316` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L203-L204) · [Before (L2315-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2315-L2316)

```diff
-     var yR = GR(66),
-       tR = GR(3465);
+     const Zr = "__default",
+       Wr = ["end", "stop", "playerror"];
```

#### 18. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2318-L2331` → after: `L206-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L206-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/253.js#L206-L216) · [Before (L2318-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/253.js#L2318-L2331)

```diff
-     function uR() {
-       const RR = (0, tR.f)("lobbyLeaderboardInfo");
-       return (0, yR.useMemo)((() => function(RR) {
-         if (null === RR) return null;
-         const JR = Object.entries(RR),
-           GR = JR.filter((RR => {
-             let [, JR] = RR;
-             return void 0 !== JR
-           }));
-         if (GR.length === JR.length) return RR;
-         const yR = Object.fromEntries(GR),
-           tR = Object.keys(RR).filter((RR => !Object.hasOwn(yR, RR)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${tR.join(", ")}`), yR
-       }(RR)), [RR])
+     function ar(rr, Sr) {
+       const Qr = () => {
+         if (function(rr) {
+             return "loaded" === rr.state() && !rr.playing() && !rr._playLock
+           }(rr)) {
+           for (const Sr of Wr) rr.off(Sr, Qr);
+           rr.unload(), null === Sr || void 0 === Sr || Sr()
+         }
+       };
+       for (const Zr of Wr) rr.on(Zr, Qr);
+       Qr()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L4-L7)

```diff
-   40983: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => yR,
-       e: () => tR
+   42938: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       LobbyManageView: () => nS
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L9-L12` → after: `L8-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L8-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L8-L63) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L9-L12)

```diff
-     const yR = "The world isn't loaded, so no blocks can be seen.",
-       tR = "The world isn't loaded, so nothing in it can be seen."
-   },
-   40356: (RR, JR, GR) => {
+     var Zr = Qr(72),
+       Wr = Qr(1605),
+       ar = Qr(38477),
+       jr = Qr(3418),
+       Ir = Qr(3421),
+       fr = Qr(3404),
+       Er = Qr(38115);
+ 
+     function pr() {
+       const [rr, Sr] = (0, Zr.useState)(new Map);
+       return {
+         get: Sr => rr.get(Sr),
+         hold: (0, Zr.useCallback)(((rr, Qr, Zr) => {
+           Sr((Sr => new Map(Sr).set(rr, Qr))), Zr.then((() => {
+             Sr((Sr => {
+               const Qr = new Map(Sr);
+ ... (40 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L14` → after: `L65-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L65-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L65-L75) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L14)

```diff
-       return !(!RR.lobbyLeaderboardInfo && !RR.lobbyManage)
+       let {
+         status: Sr
+       } = rr;
+       return (0, Hr.jsx)("span", {
+         className: mr()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !Sr.ok
+         }),
+         children: (0, Hr.jsx)(Xr.c, {
+           text: Sr.text
+         })
+       })
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L41` → after: `L79-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L79-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L79-L115) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L41)

```diff
-       yR = RR
+       let {
+         names: Sr,
+         cap: Qr,
+         filterFrom: Wr,
+         moreLabel: ar,
+         reveal: jr = null,
+         renderRow: Ir
+       } = rr;
+       const {
+         t: fr
+       } = (0, Nr.E)(), [Er, pr] = (0, Zr.useState)(!1), [xr, mr] = (0, Zr.useState)(""), tr = Er || null !== jr && Sr.indexOf(jr) >= Qr, zr = (tr || Sr.length <= Qr) && null !== Wr && Sr.length > Wr, Yr = xr.trim().toLowerCase();
+       let nr = tr ? Sr : Sr.slice(0, Qr);
+       return zr && "" !== Yr && (nr = nr.filter((rr => rr.toLowerCase().includes(Yr)))), (0, Hr.jsxs)(Hr.Fragment, {
+         children: [zr && (0, Hr.jsx)(Pr.b, {
+           className: "LobbyManageFilter",
+           placeholderText: fr("lobbyManage:findName"),
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L44-L45` → after: `L118-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L118-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L118-L165) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L44-L45)

```diff
-     function uR(RR, JR) {
-       return yR(RR, JR)
+     function gr(rr) {
+       let {
+         value: Sr,
+         placeholder: Qr,
+         ariaLabel: Wr,
+         maxLength: ar,
+         wide: jr = !1,
+         onSave: Ir
+       } = rr;
+       const fr = (0, Zr.useRef)(null),
+         [Er, pr] = (0, Zr.useState)(0),
+         xr = (0, Zr.useRef)(!0),
+         Nr = (0, Zr.useRef)(null),
+         Ur = (0, Zr.useRef)({
+           value: Sr,
+           onSave: Ir
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L47-L61` → after: `L167-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L167-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L167-L173) · [Before (L47-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L47-L61)

```diff
-   },
-   42130: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => aR,
-       f: () => WR,
-       j: () => UR,
-       m: () => LR
-     });
-     var yR = GR(32),
-       tR = GR(42132),
-       uR = GR(42118),
-       ZR = GR(42137),
-       qR = GR(42126),
-       iR = GR(42145),
-       fR = GR(42164);
+     const Cr = ["mod", "coOwner"],
+       Mr = {
+         coOwner: "lobbyManage:roleCanCoOwner",
+         mod: "lobbyManage:roleCanMod",
+         coder: "lobbyManage:roleCanCoder",
+         builder: "lobbyManage:roleCanBuilder"
+       };
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L64-L66` → after: `L176-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L176-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L176-L383) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L64-L66)

```diff
-       var JR, GR;
-       const yR = (0, uR.l)();
-       return yR ? null === (JR = (0, tR.e)(yR.api, RR[0], RR[1], RR[2])) || void 0 === JR || null === (GR = JR.persisted) || void 0 === GR ? void 0 : GR.shared : void 0
+       var Sr, Qr, ar;
+       let {
+         name: jr,
+         place: Ir,
+         openedIn: fr,
+         isYou: Er,
+         manage: xr,
+         hiddenNames: mr,
+         zIndex: tr
+       } = rr;
+       const {
+         t: hr,
+         selectedLanguage: zr
+       } = (0, Nr.E)(), [Yr, nr] = (0, Zr.useState)(null), {
+         state: Or
+       } = xr, Xr = `player:${jr}`, Pr = (0, Kr.j)(Ir, null !== Or.gamemodes), Rr = xr.statusOf(Xr), gr = xr.isPending(Xr), Gr = pr(), kr = Date.now(), Ar = rr => {
+ ... (192 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L70` → after: `L387-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L387-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L387-L509) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L70)

```diff
-       return `${RR[0]},${RR[1]},${RR[2]}`
+       var Sr, Qr, Wr, ar;
+       let {
+         manage: jr,
+         focusRequest: Ir,
+         onFocused: fr
+       } = rr;
+       const {
+         t: Er
+       } = (0, Nr.E)(), pr = (0, nr.j)("players"), xr = (0, nr.j)("hiddenPlayerNames"), mr = (0, Zr.useRef)(null), {
+         state: tr
+       } = jr, zr = null === pr.localId ? null : null !== (Sr = null === (Qr = pr.byId[pr.localId]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : null, [Yr] = (0, Zr.useState)((() => (0, Kr.x)(tr, zr))), yr = (0, Kr.r)(Yr, tr, zr), [Br, Tr] = (0, Zr.useState)(!1), v … [truncated]
+       (0, Zr.useEffect)((() => {
+         var rr, Sr;
+         if (null === Ir) return;
+         const Qr = null === (rr = mr.current) || void 0 === rr ? void 0 : rr.querySelector(`[data-lobby-manage-row="${CSS.escape(Ir.name)}"]`);
+         null === Qr || void 0 === Qr || Qr.scrollIntoView({
+ ... (107 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L72-L74` → after: `L511-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L511-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L511-L519) · [Before (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L72-L74)

```diff
-     const wR = new Map;
-     let rR = null,
-       eR = 0;
+     var Ar = Qr(5384),
+       Vr = Qr(1761),
+       ir = Qr(38237),
+       wr = Qr(38252),
+       cr = Qr(38246),
+       Fr = Qr(38240),
+       or = Qr(38275),
+       br = Qr(38266),
+       Jr = Qr(38272);
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L76` → after: `L521-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L521-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L521-L523) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L76)

```diff
-     function aR() {
+     function Dr(rr) {
+       const Sr = new Set;
+       for (const Qr of rr) Sr.add(Qr.toLowerCase());
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L81-L91` → after: `L528-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L528-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L528-L558) · [Before (L81-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L81-L91)

```diff
-       const JR = null !== rR && rR.key === KR(RR.pos) ? rR.type : null;
-       if (null === JR) return RR;
-       let GR = null;
-       if ("Iron" === JR) {
-         const {
-           cachedPasskey: JR,
-           ...yR
-         } = nR(RR.pos);
-         GR = {
-           Ji: null !== JR && void 0 !== JR ? JR : [0, 0, 0, 0],
-           ...yR
+       var Sr, Qr;
+       let {
+         state: Wr,
+         lobbyName: ar,
+         listed: jr,
+         isListed: Ir,
+         FY: fr,
+         zB: Er,
+         statusOf: pr
+       } = rr;
+       const {
+         t: xr,
+         selectedLanguage: mr
+       } = (0, Nr.E)(), Ur = (0, Vr.m)(), tr = (0, nr.j)("players"), zr = null === tr.localId ? null : null !== (Sr = null === (Qr = tr.byId[tr.localId]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : null, Yr = (0, Zr.useMemo)((() => (0, Fr.j)(Ur.friends, ar, Wr.her … [truncated]
+         let {
+           refused: Sr,
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L93-L98` → after: `L560-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L560-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L560-L638) · [Before (L93-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L93-L98)

```diff
-       }
-       return {
-         ...RR,
-         type: JR,
-         ironChest: GR
-       }
+       }({
+         refused: Wr.refused.map((rr => rr.name)),
+         listed: jr,
+         here: Wr.here.map((rr => rr.name)),
+         friends: Yr.flatMap((rr => "here" === rr.place ? [] : [rr.friend.name])),
+         excluded: [...null === zr ? [] : [zr], ...[...Wr.here, ...Wr.away].flatMap((rr => "none" === rr.role || (0, Fr.m)(jr, rr.name) ? [] : [rr.name]))]
+       }), [yr] = (0, Zr.useState)(Kr), [vr, Or] = (0, Zr.useState)([]), Lr = function(rr, Sr, Qr) {
+         const Zr = Dr(Qr),
+           Wr = Dr([...Qr, ...rr.refused, ...rr.listed, ...rr.suggested]),
+           ar = Qr => [...rr[Qr].filter((rr => !Zr.has(rr.toLowerCase()))), ...Sr[Qr].filter((rr => {
+             const Sr = rr.toLowerCase();
+             return !Wr.has(Sr) && (Wr.add(Sr), !0)
+           }))];
+         return {
+           added: [...Qr],
+           refused: ar("refused"),
+ ... (63 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L102-L127` → after: `L642-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L642-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L642-L1093) · [Before (L102-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L102-L127)

```diff
-       const JR = VR(RR),
-         GR = null === JR || void 0 === JR ? void 0 : JR.ownerDbId,
-         yR = function(RR) {
-           var JR;
-           let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VR(RR);
-           const yR = KR(RR),
-             tR = wR.get(yR);
-           return tR ? tR.lastOpened < (null !== (JR = null === GR || void 0 === GR ? void 0 : GR.passkeyLastUpdated) && void 0 !== JR ? JR : 0) ? (wR.delete(yR), null) : [...tR.Ji] : null
-         }(RR, JR);
-       return void 0 === GR ? {
-         cachedPasskey: yR
-       } : {
-         ownerDbId: GR,
-         cachedPasskey: yR
-       }
-     }(0, fR.l)(ZR.b, (RR => {
- ... (10 more removed lines; see GitHub link above)
+       let {
+         manage: Sr,
+         listing: Qr
+       } = rr;
+       const {
+         t: Zr
+       } = (0, Nr.E)(), ar = (rr, Qr) => ((0, Wr.reportAnalyticsClick)({
+         id: "lobby_manage.set_listing",
+         value: rr
+       }), Sr.send({
+         type: "setListing",
+         field: rr,
+         value: Qr
+       }, `listing:${rr}`)), jr = rr => {
+         const Qr = Sr.statusOf(`listing:${rr}`);
+         return Qr && !Qr.ok && (0, Hr.jsx)("div", {
+ ... (436 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L134-L136` → after: `L1096-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1096-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1096-L1252) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L134-L136)

```diff
-     const UR = {
-         boardEditRequested: {
-           watch: RR => (0, yR.q)("EditBoard", (JR => {
+ 
+     function fS(rr) {
+       let {
+         names: Sr,
+         pending: Qr,
+         onAction: Wr
+       } = rr;
+       const {
+         t: ar
+       } = (0, Nr.E)(), jr = (0, Zr.useRef)(null), [Ir, fr] = (0, Zr.useState)(""), Er = () => {
+         const rr = Ir.trim();
+         "" !== rr && (Wr(rr, "add"), jr.current && (jr.current.value = ""), fr(""))
+       };
+       return (0, Hr.jsxs)("div", {
+         className: "LobbyManageNames",
+         children: [Sr.map((rr => (0, Hr.jsxs)("div", {
+ ... (141 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L138` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1254) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L138)

```diff
-               pos: GR
+               rule: Sr
```

#### 16. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L140-L144` → after: `L1256-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1256-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1256-L1278) · [Before (L140-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L140-L144)

```diff
-             if (null === GR) return void RR(null);
-             const yR = (0, uR.l)(),
-               tR = (0, uR.u)();
-             yR && tR && RR(tR.readBoardToEdit(yR.api, yR.chunks, GR))
-           }))
+             return tr(Sr)
+           }));
+           return 0 === jr.length ? null : (0, Hr.jsxs)(Zr.Fragment, {
+             children: [(0, Hr.jsx)(hr.c, {
+               label: ar(Qr)
+             }), jr.map((rr => {
+               let {
+                 rule: Sr,
+                 children: Qr
+               } = rr;
+               return 0 === Qr.length ? Kr(Sr) : (0, Hr.jsxs)("div", {
+                 className: "SettingBoxGroup",
+                 children: [Kr(Sr), Qr.filter(tr).map(Kr)]
+               }, Sr.key)
+             }))]
+           }, Sr)
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L146-L157` → after: `L1280-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1280-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1280-L1290) · [Before (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L146-L157)

```diff
-         ironChestOpenRequested: {
-           watch: RR => (0, yR.q)("OpenIronChest", (JR => {
-             let {
-               pos: GR
-             } = JR;
-             RR(function(RR) {
-               return {
-                 pos: RR,
-                 ...nR(RR)
-               }
-             }(GR))
-           }))
+         joining: {
+           icon: "door-open",
+           title: "lobbyManage:joining"
+         },
+         rules: {
+           icon: "list",
+           title: "lobbyManage:rules"
+         },
+         leaderboard: {
+           icon: "trophy",
+           title: "lobbyManage:leaderboard"
```

#### 18. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L160-L174` → after: `L1293-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1293-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1293-L1362) · [Before (L160-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L160-L174)

```diff
-       WR = {
-         writeOnBoard(RR) {
-           var JR;
-           let {
-             pos: GR,
-             text: yR,
-             Zi: tR,
-             textSize: ZR
-           } = RR;
-           null === (JR = (0, uR.l)()) || void 0 === JR || JR.send(qR.d.UpdateBoard, (0, qR.Y)({
-             ti: GR,
-             ui: yR,
-             Zi: tR,
-             qi: ZR
-           }))
+       US = 5,
+       tS = (0, Zr.memo)((function(rr) {
+         let {
+           page: Sr,
+           manage: Qr,
+           leaderboard: Wr,
+           focusRequest: ar,
+           onFocused: jr,
+           ruleRowsShown: Ir
+         } = rr;
+         return "leaderboard" === Sr ? (0, Hr.jsx)(Zr.Suspense, {
+           fallback: (0, Hr.jsx)("div", {
+             className: "LobbyManageLoading",
+             children: (0, Hr.jsx)(tr.c, {})
+           }),
+           children: Wr
+ ... (54 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L176` → after: `L1364-L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1364-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1364-L1432) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L176)

```diff
-         writeBook(RR) {
+         Mr = () => {
+           var rr, Sr;
+           fr.current.style.scrollPaddingTop = `${null!==(rr=null===(Sr=pr.current)||void 0===Sr?void 0:Sr.offsetHeight)&&void 0!==rr?rr:0}px`
+         },
+         Gr = rr => {
+           const Sr = fr.current,
+             Qr = xr.current.get(rr);
+           if (void 0 === Qr) return;
+           const Zr = document.activeElement,
+             Wr = gr.current,
+             ar = null === Wr ? null : Qr.querySelector(`[data-lobby-manage-row="${CSS.escape(Wr.name)}"]`);
+           Mr(), Zr instanceof HTMLElement && null !== ar && void 0 !== ar && ar.contains(Zr) ? Zr.scrollIntoView({
+             block: "center"
+           }) : null === Qr.previousElementSibling ? Sr.scrollTop = 0 : Qr.scrollIntoView({
+             block: "start"
+           }), er.current = Sr.scrollTop
+ ... (53 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L178-L187` → after: `L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1434) · [Before (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L178-L187)

```diff
-           let {
-             pages: GR,
-             title: yR,
-             published: tR
-           } = RR;
-           null === (JR = (0, uR.l)()) || void 0 === JR || JR.send(qR.d.UpdateBook, (0, qR.Z)({
-             CV: GR,
-             XV: yR,
-             MV: tR
-           }))
+           null !== (Sr = pr.current) && void 0 !== Sr && Sr.contains(rr.target) || Vr()
```

#### 21. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L189` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1436) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L189)

```diff
-         writeNameTag(RR) {
+         onFocus: rr => {
```

#### 22. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L191` → after: `L1438-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1438-L1439) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L191)

```diff
-           null === (JR = (0, uR.l)()) || void 0 === JR || JR.send(qR.d.UpdateNameTag, RR)
+           const Qr = null === nr.current ? null : xr.current.get(nr.current);
+           !Qr || Qr.contains(rr.target) || null !== (Sr = pr.current) && void 0 !== Sr && Sr.contains(rr.target) || Vr()
```

#### 23. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L193-L202` → after: `L1441-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1441-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1441-L1488) · [Before (L193-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L193-L202)

```diff
-         setCustomLobbyBlock(RR) {
-           let {
-             pos: JR,
-             blockName: GR
-           } = RR;
-           const yR = (0, uR.u)(),
-             tR = (0, uR.l)();
-           yR && tR && tR.send(qR.d.SetCustomLobbyBlock, (0, qR.N)({
-             Vq: yR.blockIdOf(GR),
-             fq: JR
+         children: [ar.length > 1 && (0, Hr.jsx)("div", {
+           ref: pr,
+           className: "LobbyManageChips",
+           children: (0, Hr.jsx)(zr.d, {
+             options: ar.map((rr => ({
+               value: rr,
+               label: (0, Hr.jsx)(hS, {
+                 page: rr
+               }),
+               ariaLabel: Qr(NS[rr].title)
+             }))),
+             value: Br,
+             padTabs: "2",
+             ariaLabel: Qr("lobbyManageEntry:manageLobby"),
+             reselectable: !0,
+             onChange: kr
+ ... (32 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L204` → after: `L1490-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1490-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1490-L1497) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L204)

```diff
-         }
+         })]
+       })
+     }
+ 
+     function YS(rr) {
+       return void 0 === (null === rr || void 0 === rr ? void 0 : rr.page) ? null : {
+         page: rr.page,
+         seq: rr.seq
```

#### 25. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L207` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1558) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L207)

```diff
-   42185: (RR, JR, GR) => {
+   38115: (rr, Sr, Qr) => {
```

#### 26. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L211` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1561) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L211)

```diff
-       g: () => qR
+       h: () => fr
```

#### 27. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L213-L221` → after: `L1563-L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1563-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1563-L1567) · [Before (L213-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L213-L221)

```diff
-     var yR = GR(42106),
-       tR = GR(5665),
-       uR = GR(42118);
- 
-     function ZR() {
-       var RR;
-       const JR = null === (RR = (0, uR.l)()) || void 0 === RR ? void 0 : RR.api.localId;
-       return void 0 === JR || JR === yR.Uc ? null : String(JR)
-     }
+     var Zr = Qr(1605),
+       Wr = Qr(2114),
+       ar = Qr(2089);
+     const jr = 1e4;
+     let Ir = 0;
```

#### 28. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L224-L234` → after: `L1570-L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1570-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1570-L1592) · [Before (L224-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L224-L234)

```diff
-       const JR = (0, uR.l)();
-       if (null !== JR) return RR(JR);
-       let GR = null;
-       const yR = (0, tR.n)((() => {
-         const JR = (0, uR.l)();
-         null !== JR && null === GR && (yR(), GR = RR(JR))
-       }));
-       return () => {
-         var RR;
-         yR(), null === (RR = GR) || void 0 === RR || RR()
-       }
+       const Sr = ++Ir;
+       return new Promise((Qr => {
+         const Ir = Sr => {
+             fr(), clearTimeout(Er), !1 === (null === Sr || void 0 === Sr ? void 0 : Sr.ok) && (0, Zr.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: rr.type
+             }), Qr(Sr)
+           },
+           fr = Wr.d.subscribe("lobbyManage", (rr => {
+             const Qr = function(rr, Sr) {
+               var Qr;
+               return null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.results.find((rr => rr.requestId === Sr))) && void 0 !== Qr ? Qr : null
+             }(rr, Sr);
+             null !== Qr && Ir(Qr)
+           })),
+           Er = setTimeout((() => {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L236-L249` → after: `L1594-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1594-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1594-L1618) · [Before (L236-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L236-L249)

```diff
- 
-     function iR(RR, JR, GR) {
-       return {
-         current: () => {
-           const GR = (0, uR.l)();
-           return null === GR ? JR : RR(GR)()
-         },
-         watch: JR => qR((yR => {
-           const tR = RR(yR);
-           let uR = tR();
-           return JR(uR), GR((() => {
-             const RR = tR();
-             RR !== uR && (uR = RR, JR(RR))
-           }))
+     const Er = [{
+       translationKey: "lobbyManageEntry:noAnswer"
+     }];
+     class pr {
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr;
+         this.onChange = rr, this.sendAction = Sr, this.pending = new Map, this.statuses = new Map
+       }
+       send(rr, Sr, Qr) {
+         var Zr;
+         return this.statuses.delete(Sr), this.pending.set(Sr, (null !== (Zr = this.pending.get(Sr)) && void 0 !== Zr ? Zr : 0) + 1), this.sendAction(rr).then((rr => {
+           var Zr;
+           const Wr = null !== rr && void 0 !== rr ? rr : {
+               requestId: -1,
+               ok: !1,
+               message: Er
+ ... (9 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L254` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1650) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L254)

```diff
-   42177: (RR, JR, GR) => {
+   38122: (rr, Sr, Qr) => {
```

#### 31. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L256` → after: `L1652-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1652-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1652-L1658) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L256)

```diff
-       e: () => fR
+       d: () => Ir,
+       f: () => xr,
+       j: () => pr,
+       n: () => Er,
+       r: () => jr,
+       u: () => Zr,
+       x: () => ar
```

#### 32. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L258-L260` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1660) · [Before (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L258-L260)

```diff
-     var yR = GR(42118),
-       tR = GR(42185),
-       uR = GR(42188);
+     const Zr = 2;
```

#### 33. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L262-L264` → after: `L1662-L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1662-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1662-L1666) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L262-L264)

```diff
-     function ZR() {
-       var RR, JR;
-       return null !== (RR = null === (JR = (0, yR.l)()) || void 0 === JR ? void 0 : JR.itemBridgeSources) && void 0 !== RR ? RR : uR.c
+     function Wr(rr, Sr, Qr) {
+       const Zr = rr.filter((rr => rr.name !== Sr)),
+         Wr = Zr.filter((rr => "none" === rr.role)).sort(((rr, Sr) => Sr.at - rr.at)),
+         ar = Zr.filter((rr => "none" !== rr.role)).sort(((rr, Sr) => Qr.indexOf(rr.role) - Qr.indexOf(Sr.role) || Sr.at - rr.at));
+       return [...rr.some((rr => rr.name === Sr)) && null !== Sr ? [Sr] : [], ...[...Wr, ...ar].map((rr => rr.name))]
```

#### 34. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L267` → after: `L1669-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1669-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1669-L1671) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L267)

```diff
-     function qR(RR) {
+     function ar(rr, Sr) {
+       const Qr = rr.banned.map((rr => rr.name)),
+         Zr = new Set(Qr);
```

#### 35. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L269-L273` → after: `L1673-L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1673-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1673-L1675) · [Before (L269-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L269-L273)

```diff
-         current: () => ZR().states[RR].current(),
-         watch: JR => (0, tR.g)((GR => {
-           const yR = GR.itemBridgeSources.states[RR];
-           return JR(yR.current()), yR.watch(JR)
-         }))
+         here: Wr(rr.here, Sr, rr.roles.map((rr => rr.role))),
+         away: rr.away.filter((rr => !Zr.has(rr.name))).map((rr => rr.name)),
+         banned: Qr
```

#### 36. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L277` → after: `L1679-L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1679-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1679-L1686) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L277)

```diff
-     function iR(RR) {
+     function jr(rr, Sr, Qr) {
+       const Zr = new Set([...rr.here, ...rr.away, ...rr.banned]),
+         Wr = ar(Sr, Qr),
+         jr = Sr => {
+           const Qr = Wr[Sr].filter((rr => !Zr.has(rr)));
+           for (const rr of Qr) Zr.add(rr);
+           return [...rr[Sr], ...Qr]
+         };
```

#### 37. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L279` → after: `L1688-L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1688-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1688-L1690) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L279)

```diff
-         watch: JR => (0, tR.g)((GR => GR.itemBridgeSources.events[RR].watch(JR)))
+         here: jr("here"),
+         away: jr("away"),
+         banned: jr("banned")
```

#### 38. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L282-L312` → after: `L1693-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1693-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1693-L1710) · [Before (L282-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L282-L312)

```diff
-     const fR = {
-       states: {
-         inventory: qR("inventory"),
-         hotbar: qR("hotbar"),
-         crafting: qR("crafting"),
-         heldItemAim: qR("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: iR("hotbarSlotRequested"),
-         hotbarScrolled: iR("hotbarScrolled"),
-         numberKeyPressed: iR("numberKeyPressed"),
-         inventoryDropRequested: iR("inventoryDropRequested"),
-         chestToggled: iR("chestToggled"),
-         chestRefreshed: iR("chestRefreshed"),
-         inventorySynced: iR("inventorySynced"),
-         enchantingTableOpened: iR("enchantingTableOpened")
- ... (15 more removed lines; see GitHub link above)
+ 
+     function Ir(rr, Sr) {
+       const Qr = rr.here.find((rr => rr.name === Sr));
+       if (Qr) return {
+         section: "here",
+         player: Qr
+       };
+       const Zr = rr.banned.find((rr => rr.name === Sr));
+       if (Zr) return {
+         section: "banned",
+         bannedAt: Zr.at
+       };
+       const Wr = rr.away.find((rr => rr.name === Sr));
+       return Wr ? {
+         section: "away",
+         player: Wr
+ ... (2 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L315-L321` → after: `L1713-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1713-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1713-L1720) · [Before (L315-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L315-L321)

```diff
-   },
-   42188: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => iR
-     });
-     var yR = GR(40983),
-       tR = GR(37914);
+     const fr = {
+       gamemode: !1,
+       roles: [],
+       fixedRole: null,
+       kick: !1,
+       ban: !1,
+       unban: !1
+     };
```

#### 40. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L325-L326` → after: `L1737-L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1737-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1737-L1742) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L325-L326)

```diff
-         current: () => RR,
-         watch: () => () => {}
+         gamemode: ar,
+         roles: Wr,
+         fixedRole: 0 !== Wr.length || "none" === Qr.role && !ar ? null : Qr.role,
+         kick: Zr && Qr.can.kick,
+         ban: Qr.can.ban,
+         unban: !1
```

#### 41. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L330-L560` → after: `L1746-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1746-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1746-L1748) · [Before (L330-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L330-L560)

```diff
-     function ZR() {}
-     const qR = Object.freeze([0, 0, 0]),
-       iR = {
-         states: {
-           health: uR({
-             health: null,
-             maxHealth: null,
-             shield: null,
-             maxShield: null
-           }),
-           inventory: uR({
-             player: [],
-             chestOrCreative: [],
-             chest: null,
-             creative: !1,
-             selectedSlot: 0,
- ... (215 more removed lines; see GitHub link above)
+     function xr(rr, Sr) {
+       return rr.here.filter((rr => rr.name !== Sr && "none" === rr.role && rr.can.kick)).length
+     }
```

#### 42. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L562` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1750) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L562)

```diff
-   42114: (RR, JR, GR) => {
+   38272: (rr, Sr, Qr) => {
```

#### 43. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L564-L568` → after: `L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1752) · [Before (L564-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L564-L568)

```diff
-       b: () => lR,
-       e: () => BR,
-       i: () => pR,
-       l: () => MR,
-       p: () => CR
+       d: () => xr
```

#### 44. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L570-L594` → after: `L1754-L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1754-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1754-L1820) · [Before (L570-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L570-L594)

```diff
-     var yR = GR(40522),
-       tR = GR(1317),
-       uR = GR(2163),
-       ZR = GR(2170),
-       qR = GR(4555),
-       iR = GR(37923),
-       fR = GR(1449),
-       VR = GR(42118),
-       KR = GR(5699),
-       wR = GR(3428),
-       rR = GR(42126),
-       eR = GR(42130),
-       aR = GR(42177);
-     let LR = null;
- 
-     function nR(RR) {
- ... (9 more removed lines; see GitHub link above)
+     var Zr = Qr(72),
+       Wr = Qr(1155),
+       ar = Qr.n(Wr),
+       jr = Qr(1804),
+       Ir = Qr(1576),
+       fr = Qr(1444),
+       Er = Qr(1448),
+       pr = Qr(1338);
+ 
+     function xr(rr) {
+       let {
+         label: Sr,
+         icon: Qr,
+         placeholder: Wr,
+         onSubmit: xr
+       } = rr;
+ ... (51 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L599-L600` → after: `L1843-L1893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1843-L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1843-L1893) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L599-L600)

```diff
-       const JR = (0, qR.b)(RR);
-       return void 0 !== JR && (0, qR.c)(JR) === RR
+       let {
+         visibility: Sr,
+         onPick: Qr
+       } = rr;
+       const {
+         t: Wr
+       } = (0, jr.E)(), xr = (0, Zr.useRef)([]);
+       return (0, fr.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": Wr("worldSocial:whoCanJoin"),
+         children: pr.map(((rr, Zr) => {
+           const jr = rr === Sr;
+           return (0, fr.jsxs)("button", {
+             ref: rr => {
+               xr.current[Zr] = rr
+ ... (35 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L604-L611` → after: `L1906-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1906-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1906-L1910) · [Before (L604-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L604-L611)

```diff
-       var JR;
-       const GR = null === (JR = (0, VR.l)()) || void 0 === JR ? void 0 : JR.tables;
-       if (void 0 === GR || !UR(RR)) return;
-       const yR = {
-           displayName: GR.getDisplayName(RR)
-         },
-         tR = GR.getItemStat(RR, "description");
-       void 0 !== tR && null !== tR && (yR.description = tR);
+       let {
+         lx: Sr,
+         children: Qr,
+         ...Ir
+       } = rr;
```

#### 47. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L613-L624` → after: `L1912-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1912-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1912-L1942) · [Before (L613-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L613-L624)

```diff
-         rootName: uR
-       } = GR.getMetaInfo(RR);
-       uR !== RR && (yR.rootName = uR);
-       const ZR = GR.getItemStat(RR, "armourReduction");
-       return void 0 !== ZR && null !== ZR && (yR.armourReduction = ZR), yR
-     }(0, VR.y)((RR => {
-       LR = RR
-     }));
-     const AR = (0, ZR.i)("DisplayName", "Description");
- 
-     function CR() {
-       return Boolean(uR.c.get("useInventory") && uR.c.get("useFullInventory"))
+         t: fr
+       } = (0, Zr.E)();
+       return (0, jr.jsx)("div", {
+         className: "WhitelistTickRow",
+         onClick: () => {
+           Sr.onChange(!Sr.on)
+         },
+         children: (0, jr.jsx)(Wr.f, {
+           ...Ir,
+           opensProfileCard: !1,
+           children: (0, jr.jsxs)("div", {
+             className: "WhitelistTickRowActions",
+             onClick: rr => {
+               rr.stopPropagation()
+             },
+             children: [Qr, (0, jr.jsx)("label", {
+ ... (15 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L626-L646` → after: `L1944-L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1944-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1944-L1993) · [Before (L626-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L626-L646)

```diff
-     let XR = null;
-     const MR = {
-         inventory: function() {
-           const RR = aR.e.states.inventory;
-           let JR = null;
-           const GR = RR => {
-             var GR;
-             return null === RR.chest ? RR : ((null === (GR = JR) || void 0 === GR ? void 0 : GR.from) === RR && JR.chestVersion === (0, eR.c)() || (JR = {
-               from: RR,
-               chestVersion: (0, eR.c)(),
-               view: {
-                 ...RR,
-                 chest: (0, eR.m)(RR.chest)
-               }
-             }), JR.view)
-           };
- ... (5 more removed lines; see GitHub link above)
+   },
+   38246: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Ur
+     });
+     var Zr = Qr(72),
+       Wr = Qr(1251),
+       ar = Qr(2015),
+       jr = Qr(109),
+       Ir = Qr(26),
+       fr = Qr(1605),
+       Er = Qr(3742),
+       pr = Qr(35347),
+       xr = Qr(1576),
+       mr = Qr(1448),
+       Nr = Qr(1338);
+ ... (34 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L648-L660` → after: `L1995-L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1995-L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L1995-L2011) · [Before (L648-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L648-L660)

```diff
-         }(),
-         crafting: aR.e.states.crafting,
-         stationItems: {
-           current() {
-             var RR;
-             return (null === (RR = XR) || void 0 === RR ? void 0 : RR.namesVersion) !== (0, qR.f)() && (XR = {
-               namesVersion: (0, qR.f)(),
-               items: {
-                 enchantable: nR((RR => {
-                   const JR = (0, qR.b)(RR);
-                   return void 0 !== JR && null !== LR && LR.enchantmentPerksOf(JR).length > 0 || void 0
-                 })),
-                 salvageable: nR((RR => !(!UR(RR) || null === (0, iR.b)(RR)) || void 0))
+         }), (0, Nr.jsxs)(xr.h, {
+           className: "WorldSocialCopy",
+           disabled: null === Kr,
+           onClick: () => {
+             null !== Kr && (0, Er.c)(Kr, {
+               useShareSheet: yr,
+               onOutcome: rr => {
+                 if ((0, fr.reportAnalyticsClick)({
+                     id: "world_social.copy_link",
+                     value: "copied" !== rr || hr ? rr : "code"
+                   }), "copied" === rr) nr();
+                 else if ("failed" === rr) {
+                   var Sr;
+                   null === (Sr = er.current) || void 0 === Sr || Sr.focus(), ar.h.showMessage({
+                     translationKey: "partyBar:copyFailed"
+                   })
+ ... (1 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L662` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2013) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L662)

```diff
-             }), XR.items
+             })
```

#### 51. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L664-L743` → after: `L2015-L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2015-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2015-L2020) · [Before (L664-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L664-L743)

```diff
-           watch: () => () => {}
-         },
-         itemInfo: function() {
-           let RR = null;
-           const JR = () => {
-             var JR;
-             return (null === (JR = RR) || void 0 === JR ? void 0 : JR.namesVersion) !== (0, qR.f)() && (RR = {
-               namesVersion: (0, qR.f)(),
-               infos: nR(WR)
-             }), RR.infos
-           };
-           return {
-             current: JR,
-             watch: GR => (0, ZR.p)((yR => {
-               yR.some(AR) && (RR = null, GR(JR()))
-             }))
- ... (64 more removed lines; see GitHub link above)
+           children: [(0, Nr.jsx)(mr.c, {
+             name: Yr ? "check" : yr ? "up-from-bracket" : "copy"
+           }), " ", Ur(Yr ? "general:copied" : yr ? "worldSocial:share" : "general:copy")]
+         })]
+       })
+     }
```

#### 52. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L745` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2022) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L745)

```diff
-   42170: (RR, JR, GR) => {
+   38257: (rr, Sr, Qr) => {
```

#### 53. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L747` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2024) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L747)

```diff
-       c: () => yR,
+       b: () => Nr,
```

#### 54. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L749-L752` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2026) · [Before (L749-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L749-L752)

```diff
-       h: () => ZR,
-       i: () => tR,
-       j: () => qR,
-       l: () => fR
+       g: () => xr
```

#### 55. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L754-L756` → after: `L2028-L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2028-L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2028-L2047) · [Before (L754-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L754-L756)

```diff
-     class yR extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
+     var Zr = Qr(672),
+       Wr = Qr(1251),
+       ar = Qr(1761),
+       jr = Qr(3711),
+       Ir = Qr(3657),
+       fr = Qr(1576),
+       Er = Qr(38266),
+       pr = Qr(1338);
+ 
+     function xr(rr, Sr) {
+       var Qr;
+       return {
+         isError: !1,
+         name: rr,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== Sr && void 0 !== Sr ? Sr : {},
+ ... (4 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L761` → after: `L2052-L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2052-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2052-L2094) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L761)

```diff
-       return RR instanceof RangeError && /call stack/i.test(RR.message) || RR instanceof Error && "InternalError" === RR.name && /recursion/i.test(RR.message)
+       let {
+         player: Sr,
+         isFriend: Qr = !1,
+         status: Zr,
+         showLocation: fr = void 0 === Zr,
+         lx: xr,
+         onSendFriendRequest: mr,
+         actions: Nr,
+         zIndex: Ur
+       } = rr;
+       const {
+         t: tr
+       } = (0, Wr.E)();
+       let hr = Zr;
+       null !== xr && void 0 !== xr && xr.on && (hr = (0, pr.jsxs)(pr.Fragment, {
+         children: [null !== Zr && void 0 !== Zr ? Zr : (0, pr.jsx)(Ir.e, {
+ ... (27 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L766-L772` → after: `L2098-L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2098-L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2098-L2123) · [Before (L766-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L766-L772)

```diff
-       var JR;
-       return RR instanceof WebAssembly.RuntimeError || RR instanceof yR || tR(RR) && uR.test(null !== (JR = RR.stack) && void 0 !== JR ? JR : "")
-     }
- 
-     function qR(RR, JR) {
-       if (ZR(RR)) throw RR;
-       console.error(JR, RR)
+       let {
+         row: Sr,
+         lx: Qr,
+         canInvite: Zr,
+         invited: ar,
+         onInvite: jr,
+         zIndex: Ir
+       } = rr;
+       const {
+         t: Er
+       } = (0, Wr.E)(), xr = "online" === Sr.place ? fr.h : fr.k;
+       return (0, pr.jsx)(mr, {
+         player: Sr.friend,
+         isFriend: !0,
+         status: "here" === Sr.place ? Er("worldSocial:inThisWorld") : void 0,
+         showLocation: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L775-L776` → after: `L2136-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2136-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2136-L2144) · [Before (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L775-L776)

```diff
-     function iR(RR, JR, GR, tR, uR) {
-       if (JR % tR !== 0 || JR + GR > RR.byteLength) throw new yR(`${uR}: ${GR} bytes at ${JR}, ${tR}-aligned, outside ${RR.byteLength} bytes of memory`)
+     function jr(rr) {
+       const Sr = {
+         lobbyName: rr,
+         answer: null,
+         response: Wr.c.getSocialSettings(rr)
+       };
+       return Sr.response.then((rr => {
+         Sr.answer = rr
+       })), Sr
```

#### 59. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L779-L780` → after: `L2148-L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2148-L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2148-L2149) · [Before (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L779-L780)

```diff
-     function fR(RR, JR, GR, yR, tR) {
-       return 0 === GR ? null : (iR(JR, GR, yR * RR.BYTES_PER_ELEMENT, RR.BYTES_PER_ELEMENT, tR), new RR(JR, GR, yR))
+     function fr(rr) {
+       Ir.set(rr.lobbyName, rr)
```

#### 60. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L783-L784` → after: `L2152-L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2152-L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2152-L2213) · [Before (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L783-L784)

```diff
-     function VR(RR, JR, GR, yR, tR) {
-       return 0 === JR ? null : (iR(RR, JR, GR, yR, tR), new DataView(RR, JR, GR))
+     function Er(rr) {
+       const [Sr] = (0, Zr.useState)((() => function(rr) {
+         var Sr;
+         const Qr = null !== (Sr = Ir.get(rr)) && void 0 !== Sr ? Sr : null;
+         return null !== Qr && void 0 !== Qr && Qr.answer && "error" in Qr.answer ? null : Qr
+       }(rr))), [Qr, jr] = (0, Zr.useState)((() => null !== Sr && void 0 !== Sr && Sr.answer && "settings" in Sr.answer ? Sr.answer.settings : null)), [fr, Er] = (0, Zr.useState)(!0), [pr, xr] = (0, Zr.useState)(null !== Qr), mr = (0, Zr.useRef)(Qr);
+       mr.current = Qr;
+       const Nr = (0, Zr.useRef)(0),
+         Ur = (0, Zr.useRef)(0),
+         tr = (0, Zr.useRef)(!1),
+         hr = (0, Zr.useRef)(!0),
+         zr = (0, Zr.useCallback)((async Sr => {
+           const Qr = ++Nr.current,
+             Zr = await (null !== Sr && void 0 !== Sr ? Sr : Wr.c.getSocialSettings(rr));
+           hr.current && Qr === Nr.current && (xr(!0), Er(!1), "error" in Zr || jr(Zr.settings))
+         }), [rr]),
+ ... (46 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L787` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2216) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L787)

```diff
-   42118: (RR, JR, GR) => {
+   38275: (rr, Sr, Qr) => {
```

#### 62. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L789-L797` → after: `L2218-L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2218-L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2218-L2219) · [Before (L789-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L789-L797)

```diff
-       C: () => eR,
-       e: () => yR,
-       i: () => nR,
-       l: () => aR,
-       m: () => LR,
-       p: () => wR,
-       s: () => rR,
-       u: () => VR,
-       y: () => KR
+       d: () => jr,
+       e: () => ar
```

#### 63. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L799-L804` → after: `L2221-L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2221-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2221-L2227) · [Before (L799-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L799-L804)

```diff
-     class yR extends Error {
-       constructor(RR) {
-         super(`the join's code did not load: ${RR instanceof Error?RR.message:String(RR)}`, {
-           cause: RR
-         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === RR || void 0 === RR ? void 0 : RR.request
-       }
+     var Zr = Qr(161);
+     const Wr = new Map;
+ 
+     function ar(rr, Sr) {
+       var Qr;
+       const Zr = null !== (Qr = Wr.get(rr)) && void 0 !== Qr ? Qr : new Map;
+       Zr.set(Sr, Date.now()), Wr.set(rr, Zr)
```

#### 64. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L813-L817` → after: `L2240-L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2240-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2240-L2243) · [Before (L813-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L813-L817)

```diff
-       try {
-         RR(JR)
-       } catch (GR) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", GR)
-       }
+       const Qr = Sr.toLowerCase();
+       for (const Zr of rr)
+         if (Zr.toLowerCase() === Qr) return !0;
+       return !1
```

#### 65. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L820` → after: `L2246-L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2246-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2246-L2266) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L820)

```diff
-     function VR() {
+     function Wr(rr, Sr, Qr) {
+       const Wr = [],
+         ar = [],
+         jr = [];
+       for (const Ir of rr) !Ir.isError && Ir.name && ("inGame" === Ir.location.status && Ir.location.inLobbyName === Sr || Zr(Qr, Ir.name) ? ar.push({
+         friend: Ir,
+         place: "here"
+       }) : "offline" === Ir.location.status ? jr.push({
+         friend: Ir,
+         place: "offline"
+       }) : Wr.push({
+         friend: Ir,
+         place: "online"
+       }));
+       return [...Wr, ...ar, ...jr]
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L824-L825` → after: `L2270-L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2270-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2270-L2271) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L824-L825)

```diff
-     function KR(RR) {
-       qR.push(RR), null !== iR && fR(RR, iR)
+     function jr(rr, Sr) {
+       return null === rr || void 0 === rr || !rr.canManage || Zr(rr.whitelist, Sr) ? "none" : "whitelist" === rr.visibility ? "required" : "quiet"
```

#### 67. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L829-L843` → after: `L2275-L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2275-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2275-L2279) · [Before (L829-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L829-L843)

```diff
-       return tR ??= Promise.all([GR.e(85), GR.e(113), GR.e(88), GR.e(177), GR.e(91), GR.e(224), GR.e(252), GR.e(112), GR.e(142), GR.e(245), GR.e(244), GR.e(306), GR.e(243), GR.e(222), GR.e(50), GR.e(223), GR.e(127), GR.e(214), GR.e(280), GR.e(143), GR.e(103), GR.e(69)]).then((()  … [truncated]
-         JR.loadAudio(RR), iR = JR;
-         for (const RR of qR) fR(RR, JR);
-         return JR
-       })).catch((RR => {
-         throw tR = null, RR
-       })), tR
-     }
-     async function rR(RR, JR) {
-       try {
-         const GR = await wR(RR);
-         await GR.loadClientGame(JR)
-       } catch (GR) {
-         throw new yR(GR)
-       }
+       if (null === rr) return !0;
+       const {
+         visibility: Sr
+       } = rr;
+       return "public" === Sr || "unlisted" === Sr || "whitelist" === Sr && rr.canManage
```

#### 68. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L846-L849` → after: `L2282-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2282-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2282-L2292) · [Before (L846-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L846-L849)

```diff
-     function eR(RR, JR) {
-       uR = {
-         running: RR,
-         shell: JR
+     function fr(rr, Sr, Qr) {
+       if (Qr) {
+         const Qr = Sr.filter((Sr => !Zr(rr.whitelist, Sr)));
+         return {
+           ...rr,
+           whitelist: [...rr.whitelist, ...Qr]
+         }
+       }
+       return {
+         ...rr,
+         whitelist: rr.whitelist.filter((rr => !Zr(Sr, rr)))
```

#### 69. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L853-L864` → after: `L2296-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2296-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2296-L2298) · [Before (L853-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L853-L864)

```diff
-     function aR() {
-       return ZR
-     }
-     async function LR(RR) {
-       const JR = uR;
-       if ((null === JR || void 0 === JR ? void 0 : JR.running) !== RR) throw new Error("the core's session has ended");
-       const GR = await wR(JR.shell.audio).catch((RR => {
-         throw new yR(RR)
-       }));
-       if (null !== ZR) return ZR;
-       if (uR !== JR || RR.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (ZR = GR.startGameHost(RR, JR.shell), null === ZR) throw new Error("the core's shared tables didn't read, so the game can't start");
+     function Er(rr, Sr) {
+       const Qr = [];
+       for (let Zr = 0; Zr < rr.length; Zr += Sr) Qr.push(rr.slice(Zr, Zr + Sr));
```

#### 70. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L869` → after: `L2319-L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2319-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/254.js#L2319-L2331) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/254.js#L869)

```diff
-       null !== ZR && (null !== iR ? iR.endGameHost(ZR) : ZR.closeGame()), ZR = null, uR = null
+       const rr = (0, Wr.l)("lobbyLeaderboardInfo");
+       return (0, Zr.useMemo)((() => function(rr) {
+         if (null === rr) return null;
+         const Sr = Object.entries(rr),
+           Qr = Sr.filter((rr => {
+             let [, Sr] = rr;
+             return void 0 !== Sr
+           }));
+         if (Qr.length === Sr.length) return rr;
+         const Zr = Object.fromEntries(Qr),
+           Wr = Object.keys(rr).filter((rr => !Object.hasOwn(Zr, rr)));
+         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Wr.join(", ")}`), Zr
+       }(rr)), [rr])
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4-L7` → after: `L4-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/255.js#L4-L562) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/255.js#L4-L7)

```diff
-   37958: (RR, JR, GR) => {
-     function yR(RR) {
-       return "fetch" === RR || "timeout" === RR || "integrity" === RR ? "download" : "browser"
-     }
+   41333: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Zr,
+       f: () => Wr
+     });
+     const Zr = "The world isn't loaded, so no blocks can be seen.",
+       Wr = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40670: (rr, Sr, Qr) => {
+     function Zr(rr) {
+       return !(!rr.lobbyLeaderboardInfo && !rr.lobbyManage)
+     }
+     Qr.d(Sr, {
+       c: () => Zr
+     })
+   },
+ ... (543 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L12` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/255.js#L792-L793) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/255.js#L12)

```diff
-       j: () => qR,
+       h: () => hr,
+       i: () => mr,
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L15-L18` → after: `L797-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L797-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/255.js#L797-L810) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/255.js#L15-L18)

```diff
-       p: () => yR,
-       t: () => uR
-     });
-     const tR = "https://discord.gg/playbloxd";
+       o: () => Ur
+     });
+     class Zr extends Error {
+       constructor(rr) {
+         super(`the join's code did not load: ${rr instanceof Error?rr.message:String(rr)}`, {
+           cause: rr
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === rr || void 0 === rr ? void 0 : rr.request
+       }
+     }
+     let Wr = null,
+       ar = null,
+       jr = null;
+     const Ir = [];
+     let fr = null;
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L21-L44` → after: `L813-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L813-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/255.js#L813-L842) · [Before (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/255.js#L21-L44)

```diff
-       return "download" === RR ? {
-         icon: "wifi",
-         title: "wasmScreens:downloadFailedTitle",
-         help: "wasmScreens:downloadFailedHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
-       } : "memory" === RR || "noContext" === RR || "graphicsLost" === RR ? {
-         icon: "face-dizzy",
-         title: `wasmUnsupported:${RR}Title`,
-         help: `wasmUnsupported:${RR}Help${JR?"App":""}`,
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
- ... (8 more removed lines; see GitHub link above)
+       try {
+         rr(Sr)
+       } catch (Qr) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", Qr)
+       }
+     }
+ 
+     function pr() {
+       return fr
+     }
+ 
+     function xr(rr) {
+       Ir.push(rr), null !== fr && Er(rr, fr)
+     }
+ 
+     function mr(rr) {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L49-L77` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/255.js#L847-L849) · [Before (L49-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/255.js#L49-L77)

```diff
-       return {
-         ...uR(RR, JR),
-         help: JR ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${RR}StillHelp`
-       }
-     }
- 
-     function qR(RR) {
-       return {
-         icon: "face-dizzy",
-         title: `wasmUnsupported:${RR}Title`,
-         help: "wasmScreens:noContextHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
-       }
- ... (13 more removed lines; see GitHub link above)
+       ar = {
+         running: rr,
+         shell: Sr
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L82-L104` → after: `L854-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L854-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/255.js#L854-L869) · [Before (L82-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/255.js#L82-L104)

```diff
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:turnstilePageTitle",
-         help: "wasmScreens:turnstilePageHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
-         cancel: null
-       }
-     }
- 
-     function VR(RR, JR, GR) {
-       return {
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: GR ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
- ... (7 more removed lines; see GitHub link above)
+       return jr
+     }
+     async function hr(rr) {
+       const Sr = ar;
+       if ((null === Sr || void 0 === Sr ? void 0 : Sr.running) !== rr) throw new Error("the core's session has ended");
+       const Qr = await mr(Sr.shell.audio).catch((rr => {
+         throw new Zr(rr)
+       }));
+       if (null !== jr) return jr;
+       if (ar !== Sr || rr.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (jr = Qr.startGameHost(rr, Sr.shell), null === jr) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return jr
+     }
+ 
+     function zr() {
+       null !== jr && (null !== fr ? fr.endGameHost(jr) : jr.closeGame()), jr = null, ar = null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/256.js#L4-L7) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   38029: (RR, JR, GR) => {
+   38320: (rr, Sr, Qr) => {
+     function Zr(rr) {
+       return "fetch" === rr || "timeout" === rr || "integrity" === rr ? "download" : "browser"
+     }
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7` → after: `L11-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/256.js#L11-L16) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/256.js#L7)

```diff
-       h: () => AR
+       g: () => pr,
+       h: () => Ir,
+       l: () => jr,
+       p: () => Er,
+       t: () => Zr,
+       u: () => ar
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9-L26` → after: `L18-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L18-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/256.js#L18-L79) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/256.js#L9-L26)

```diff
-     var yR = GR(3040),
-       tR = GR(1581),
-       uR = GR(66),
-       ZR = GR(7588),
-       qR = GR(3022),
-       iR = GR(1383),
-       fR = GR(2134),
-       VR = GR(2105),
-       KR = GR(1590),
-       wR = GR(1270),
-       rR = GR(38034),
-       eR = GR(1163),
-       aR = GR.n(eR),
-       LR = GR(1444),
-       nR = GR(1468),
-       UR = GR(1366),
- ... (2 more removed lines; see GitHub link above)
+     const Wr = "https://discord.gg/playbloxd";
+ 
+     function ar(rr, Sr) {
+       return "download" === rr ? {
+         icon: "wifi",
+         title: "wasmScreens:downloadFailedTitle",
+         help: "wasmScreens:downloadFailedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+       } : "memory" === rr || "noContext" === rr || "graphicsLost" === rr ? {
+         icon: "face-dizzy",
+         title: `wasmUnsupported:${rr}Title`,
+         help: `wasmUnsupported:${rr}Help${Sr?"App":""}`,
+         helpValues: {},
+ ... (46 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L29-L196` → after: `L82-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L82-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/256.js#L82-L89) · [Before (L29-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/256.js#L29-L196)

```diff
-       const {
-         t: RR
-       } = (0, wR.A)(), [JR, GR] = (0, uR.useState)(!1), [eR, CR] = (0, uR.useState)(null), [MR, BR] = (0, uR.useState)(1), [lR, pR] = (0, uR.useState)(!1), [gR, bR] = (0, uR.useState)(!1), vR = (0, uR.useRef)(0), OR = (0, uR.useRef)(!1), xR = (0, uR.useRef)(!1), NR = (0, uR.useRe … [truncated]
- 
-       function HR() {
-         const RR = null !== eR && void 0 !== eR ? eR : "Rested Speed";
-         fR.gameBridge.send("wakeUp", gR ? RR : null), DR.current = null, GR(!1), CR(null), BR(1), pR(!1), bR(!1)
-       }
- 
-       function oR() {
-         return !lR && (HR(), !0)
-       }
-       return (0, tR.f)("PlayerPhysicsTypeUpdate", (RR => {
-         RR !== DR.current && (DR.current = RR, RR === ZR.k.SLEEPING ? (xR.current || (vR.current = fR.gameBridge.lookup("cameraZoom", null), xR.current = !0), OR.current = !0, fR.gameBridge.send("setCameraZoom", 3), GR(!0), BR(function() {
-           for (const RR of fR.gameBridge.lookup("blocksStandingOn", null)) {
-             if (rR.b.leafBeds.includes(RR)) return console.log(`Found leaf bed: ${RR}`), 1;
- ... (152 more removed lines; see GitHub link above)
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L199-L218` → after: `L92-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/256.js#L92-L103) · [Before (L199-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/256.js#L199-L218)

```diff
-     class gR {
-       constructor(RR, JR) {
-         this.press = RR, this.release = JR, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(RR, JR, GR, yR) {
-         if (RR && null === this.downAtMs) return this.downAtMs = GR, this.latched = yR, void(this.token = this.press(yR));
-         null !== this.downAtMs && (this.latched ? RR && this.end() : !JR && GR - this.downAtMs >= 40 && this.end())
-       }
-       isLatched() {
-         return null !== this.downAtMs && this.latched
-       }
-       unlatch() {
-         this.latched = !1
-       }
-       cancel() {
-         null !== this.downAtMs && this.end()
- ... (4 more removed lines; see GitHub link above)
+ 
+     function pr(rr, Sr, Qr) {
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+         help: Qr ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
+         helpValues: {
+           reason: rr.reason
+         },
+         discordLink: null === rr.name,
+         confirm: Sr ? "general:reconnect" : rr.requiresRefresh ? "general:reload" : "general:ok",
+         cancel: null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   39630: (RR, JR, GR) => {
+   38385: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L6)

```diff
-       d: () => eR
+       e: () => Kr,
+       h: () => er
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L607` → after: `L9-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L9-L31) · [Before (L8-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L8-L607)

```diff
-     var yR = GR(203),
-       tR = GR(38821);
-     const uR = 1.2,
-       ZR = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         yq: .5,
- ... (584 more removed lines; see GitHub link above)
+     var Zr = Qr(3011),
+       Wr = Qr(1573),
+       ar = Qr(72),
+       jr = Qr(7424),
+       Ir = Qr(2989),
+       fr = Qr(1353),
+       Er = Qr(2089),
+       pr = Qr(2057),
+       xr = Qr(1576),
+       mr = Qr(1251),
+       Nr = Qr(38390),
+       Ur = Qr(1155),
+       tr = Qr.n(Ur),
+       hr = Qr(1413),
+       zr = Qr(1448),
+       Yr = Qr(1330),
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L609-L610` → after: `L33-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L33-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L33-L139) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L609-L610)

```diff
-     function eR(RR) {
-       return rR[RR]
+       function gr() {
+         const rr = null !== Ur && void 0 !== Ur ? Ur : "Rested Speed";
+         Er.gameBridge.send("wakeUp", Lr ? rr : null), Rr.current = null, Qr(!1), Kr(null), Tr(1), Or(!1), lr(!1)
+       }
+ 
+       function Cr() {
+         return !vr && (gr(), !0)
+       }
+       return (0, Wr.c)("PlayerPhysicsTypeUpdate", (rr => {
+         rr !== Rr.current && (Rr.current = rr, rr === jr.n.SLEEPING ? (Hr.current || (Xr.current = Er.gameBridge.lookup("cameraZoom", null), Hr.current = !0), Pr.current = !0, Er.gameBridge.send("setCameraZoom", 3), Qr(!0), Tr(function() {
+           for (const rr of Er.gameBridge.lookup("blocksStandingOn", null)) {
+             if (Nr.c.leafBeds.includes(rr)) return console.log(`Found leaf bed: ${rr}`), 1;
+             if (Nr.c.woolBeds.includes(rr)) return console.log(`Found woold bed: ${rr}`), 2;
+             if (Nr.c.strongBeds.includes(rr)) return console.log(`Found strong bed ${rr}`), 3
+           }
+           return 1
+ ... (91 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L613` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L161) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L613)

```diff
-   38176: (RR, JR, GR) => {
+   42424: (rr, Sr, Qr) => {
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L615` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L163) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L615)

```diff
-       e: () => yR
+       c: () => sr
```

#### 7. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L618-L679` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L222-L223) · [Before (L618-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L618-L679)

```diff
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
- ... (46 more removed lines; see GitHub link above)
+         kind: "specialAction",
+         action: "SpecialAction2"
```

#### 8. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L681-L716` → after: `L225-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L225-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L225-L329) · [Before (L681-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L681-L716)

```diff
-       "skyblock:forged:sanguine-astral-moonstone": {
-         name: "Nightbloom",
-         lore: "A red flower that only opens after dark.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:sanguine-iron-wood": {
-         name: "Butcher's Oath",
-         lore: "Heavy, honest and always hungry.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .95,
-         ability: "bloodPact"
-       },
-       "skyblock:forged:moonstone-moonstone-moonstone": {
-         name: "Lunar Requiem",
- ... (20 more removed lines; see GitHub link above)
+       Xr = rr => {
+         let Sr = null;
+         const Qr = new vr.c,
+           Zr = () => {
+             Sr && (((rr, Sr, Qr) => {
+               switch (Qr.kind) {
+                 case "reload":
+                   return void Sr.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void Sr.specialActionUp(Qr.action);
+                 case "customButton":
+                   return void Kr.gameBridge.send("pressCustomButton", {
+                     id: Qr.id,
+                     down: !1
+                   });
+                 case "touchButton":
+ ... (89 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L719-L724` → after: `L342-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L342-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L342-L534) · [Before (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L719-L724)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
+       sr = rr => {
+         const Sr = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+           headingOffset: 0,
+           jumpHeld: !1,
+           jumpPressed: !1,
+           running: !1,
+           sprintHeld: !1
+         };
+         let Qr = dr;
+         const pr = new kr.b,
+           Kr = Wr.i.subscribe("appManagerUpdated|activeInputDevice", (Sr => {
+             rr.deviceChanged(Sr)
+           }));
+ ... (177 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L726-L733` → after: `L536-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L536-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L536-L545) · [Before (L726-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L726-L733)

```diff
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
+       Nr = Object.keys(mr),
+       Ur = "dead",
+       tr = rr => (0, Zr.p)().includes(rr),
+       hr = rr => {
+         const Sr = [(0, Er.j)(Ur, (() => rr.hasPlayer() && rr.isPlayerDead())), (0, Er.j)("sleeping", (() => tr(jr.h))), (0, Er.j)("turnstile", (() => tr(fr.g))), (0, Er.j)("videoAd", Ir.d), (0, Er.j)("replay", (() => (0, Wr.f)() || rr.isReplayMode())), (0, Er.j)("freeCamera", (( … [truncated]
+           let [Sr, Qr] = rr;
+           return (0, Er.j)(Sr, Qr)
+         }))];
+         return () => {
+           for (const rr of Sr) rr()
```

#### 11. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L736-L744` → after: `L599-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L599-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L599-L603) · [Before (L736-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L736-L744)

```diff
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+       jr = (rr, Sr) => {
+         const Qr = Math.max(0, Math.min(250, Sr)) / 1e3;
+         return {
+           xR: rr.yawRadPerSec * Qr,
+           yR: rr.pitchRadPerSec * Qr
```

#### 12. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L747-L752` → after: `L606-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L606-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L606-L611) · [Before (L747-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L747-L752)

```diff
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
+       Ir = (rr, Sr) => Sr ? {
+         move: rr.rightStick,
+         look: rr.leftStick
+       } : {
+         move: rr.leftStick,
+         look: rr.rightStick
```

#### 13. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L754-L759` → after: `L613-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L613-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L613-L622) · [Before (L754-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L754-L759)

```diff
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
+       fr = (rr, Sr) => {
+         const Qr = (0, Zr.h)(rr, Sr),
+           Wr = Math.min(1, Math.hypot(Qr.x, Qr.y));
+         return {
+           magnitude: Wr,
+           speed: Math.min(1, Wr / .8),
+           headingOffset: 0 === Wr ? 0 : Math.atan2(Qr.x, -Qr.y),
+           x: Qr.x,
+           y: Qr.y
+         }
```

#### 14. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L761-L766` → after: `L624-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L624-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L624-L649) · [Before (L761-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L761-L766)

```diff
-       "skyblock:forged:stone-stone-stone": {
-         name: "Quarryman's Cleaver",
-         lore: "Chipped from one block of stone, handle and all.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "quake"
+       Er = (rr, Sr) => {
+         let {
+           sprintPressed: Qr,
+           magnitude: Zr,
+           autoSprint: Wr,
+           nowMs: ar
+         } = Sr;
+         const jr = Qr ? ar : rr.latchedAtMs,
+           Ir = (rr => {
+             let {
+               running: Sr,
+               magnitude: Qr,
+               sprintPressed: Zr,
+               autoSprint: Wr
+             } = rr;
+             return !(Qr < .5) && (!!Zr || !!(Wr && Qr >= .9) || Sr)
+ ... (10 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L768-L775` → after: `L651-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L651-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L651-L658) · [Before (L768-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L768-L775)

```diff
-       "skyblock:forged:wood-wood-wood": {
-         name: "Lorenzo's Lesson",
-         lore: "Courage matters more than the blade. This one is mostly courage.",
-         damageMultiplier: 1.06,
-         cooldownMultiplier: .97,
-         ability: "warcry"
-       }
-     }
+       pr = (rr, Sr, Qr) => Qr && rr.gyroAiming && "button" === rr.gyroActivation && rr.gyroButton !== Sr ? rr.gyroButton : null,
+       xr = (rr, Sr) => Sr ? {
+         ...rr,
+         isHeld: Qr => Qr !== Sr && rr.isHeld(Qr),
+         wasPressed: Qr => Qr !== Sr && rr.wasPressed(Qr),
+         wasReleased: Qr => Qr !== Sr && rr.wasReleased(Qr),
+         value: Qr => Qr === Sr ? 0 : rr.value(Qr)
+       } : rr
```

#### 16. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L777` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L660) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L777)

```diff
-   38827: (RR, JR, GR) => {
+   42429: (rr, Sr, Qr) => {
```

#### 17. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L781-L878` → after: `L665-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L665-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L665-L686) · [Before (L781-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L781-L878)

```diff
-     var yR = GR(385),
-       tR = GR.n(yR),
-       uR = GR(2102);
-     let ZR;
-     var qR, iR, fR, VR, KR, wR, rR, eR, aR;
-     const LR = [1, "b", 0, 12, 221, 9, 214, "e", "f", 74, 8, 255, "length", 144, 42, 3, "a", 32, "undefined", void 0, 70, "c", 2, 118, 63, 6, "fromCodePoint", 7, "push", "h", 182, 95, "i", 91, 41, 8191, 88, 13, 14, 25, 217, "g", 29, 166, 174, 169, 5, "d", 142, 184, 80, 1023, 6553 … [truncated]
- 
-     function nR(...RR) {
-       return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = function(...RR) {
-         for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '/;y293g{uN.!cTp}#EhD`Sqm%<sZ|k[GneI61(=aXU,WjCVb@_BRF$+Ar0>K)dlvfYxOo5~]?Q84Piwz7J^&:LHM"*t', RR[LR[1]] = "" + (RR[LR[2]] || ""), RR[LR[4]] = RR[LR[1]].length, RR[-LR[9]] = [], RR[LR[7]] = LR[2], RR[LR[8]] = LR[2], RR[-LR[6]] = -LR … [truncated]
-           if (RR[LR[5]] = RR[LR[0]].indexOf(RR[LR[1]][RR[LR[3]]]), RR[LR[5]] !== -LR[0])
-             if (RR[-LR[6]] < LR[2]) RR[-LR[6]] = RR[LR[5]];
-             else {
-               bR(RR[-LR[6]] += RR[LR[5]] * LR[33], RR[LR[7]] |= RR[-LR[6]] << RR[LR[8]], RR[LR[8]] += (RR[-LR[6]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
-               do {
-                 bR(RR[-LR[9]].push(RR[LR[7]] & LR[11]), RR[LR[7]] >>= LR[10], RR[LR[8]] -= LR[10])
- ... (82 more removed lines; see GitHub link above)
+     const Zr = rr => {
+       let {
+         mode: Sr,
+         sneakHeld: Qr,
+         sneakPressed: Zr,
+         sneakTogglePressed: Wr,
+         descending: ar,
+         canCrouch: jr,
+         toggled: Ir
+       } = rr;
+       return jr ? ar ? {
+         crouchHeld: Qr,
+         toggled: !1
+       } : "hold" === Sr ? {
+         crouchHeld: Qr,
+         toggled: Wr ? !Ir : Ir
+ ... (6 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L880-L994` → after: `L688-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L688-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L688-L691) · [Before (L880-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L880-L994)

```diff
-       wR(133) in WR && (module.exports = async (RR = () => {
-         throw new Error(wR(134))
-       }) => {
-         function JR(...RR) {
-           for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = 'vjZEBA:soYFrhUQnCGIpeSdNbgJf"3~>({xW*iDz2#w|tM1.Hk&O!=}y?`X/4a+^P;<K7L0VluT[,6@89qm5)R_%]c$', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[LR[22]].length, RR[LR[62]] = [], RR[LR[46]] = LR[2], RR[LR[8]] = LR[2], RR[LR[27]] … [truncated]
-             if (RR[LR[79]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[78]]]), RR[LR[79]] !== -LR[0])
-               if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[79]];
-               else {
-                 bR(RR[LR[27]] += RR[LR[79]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[LR[8]], RR[LR[8]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
-                 do {
-                   bR(RR[LR[62]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[LR[8]] -= LR[10])
-                 } while (RR[LR[8]] > LR[27]);
-                 RR[LR[27]] = -LR[0]
-               } return RR[LR[27]] > -LR[0] && RR[LR[62]].push((RR[LR[46]] | RR[LR[27]] << RR[LR[8]]) & LR[11]), UR(RR[LR[62]])
-         }
- 
- ... (99 more removed lines; see GitHub link above)
+     };
+     class Wr {
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
```

#### 19. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L996-L1026` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L693-L694) · [Before (L996-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L996-L1026)

```diff
-       const OR = BR;
-       bR(tR()[wR(LR[66])](OR, AR, pR), OR[LR[0]] = LR[2]);
-       let xR = tR()[wR(177)](OR);
-       if (!lR) {
-         function dR(...RR) {
-           for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '*4KnHF}MjR3)x7c2Bs{~]mNyES,98TdLI+[Vlgt=PX?5Y/Zwr`faAzi"6%eDJ;p#v1$qW0&^@u!>G._Cho(UOk|:Qb<', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[LR[22]].length, RR[LR[62]] = [], RR[LR[46]] = LR[2], RR[LR[8]] = LR[2], RR[LR[27]] … [truncated]
-             if (RR[LR[5]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[82]]]), RR[LR[5]] !== -LR[0])
-               if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[5]];
-               else {
-                 bR(RR[LR[27]] += RR[LR[5]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[LR[8]], RR[LR[8]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
-                 do {
-                   bR(RR[LR[62]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[LR[8]] -= LR[10])
-                 } while (RR[LR[8]] > LR[27]);
-                 RR[LR[27]] = -LR[0]
-               } return RR[LR[27]] > -LR[0] && RR[LR[62]].push((RR[LR[46]] | RR[LR[27]] << RR[LR[8]]) & LR[11]), UR(RR[LR[62]])
-         }
- ... (15 more removed lines; see GitHub link above)
+       lostToPadScreen() {
+         this.regainPending = !0
```

#### 20. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1028-L1047` → after: `L696-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L696-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L696-L702) · [Before (L1028-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L1028-L1047)

```diff
-       const NR = VR[wR(179) + wR(180) + wR(LR[109])],
-         DR = NR ? Math[wR(LR[30])](NR, xR) : xR;
-       tR()[wR(183) + wR(LR[49])](OR, OR);
-       const HR = KR !== LR[84] && void 0 !== KR ? KR : VR[wR(185) + wR(186) + wR(187) + wR(188)];
-       if (DR > LR[2]) {
-         function kR(...RR) {
-           for (bR(RR[LR[12]] = LR[0], RR[LR[110]] = '+MQiqUjA9`PY%ZmcBCL<wl]|af=Wp$s>@D3xXS{,k(E/FG1;}[87d_t*zgr#huy)"vb5OT~HR^.04?I6JK!&eVN:n2o', RR[-LR[20]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[-LR[20]].length, RR[LR[47]] = [], RR[LR[46]] = LR[2], RR[-LR[109]] = LR[2], RR[ … [truncated]
-             if (RR[LR[5]] = RR[LR[110]].indexOf(RR[-LR[20]][RR[LR[29]]]), RR[LR[5]] !== -LR[0])
-               if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[5]];
-               else {
-                 bR(RR[LR[27]] += RR[LR[5]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[-LR[109]], RR[-LR[109]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
-                 do {
-                   bR(RR[LR[47]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[-LR[109]] -= LR[10])
-                 } while (RR[-LR[109]] > LR[27]);
-                 RR[LR[27]] = -LR[0]
-               } return RR[LR[27]] > -LR[0] && RR[LR[47]].push((RR[LR[46]] | RR[LR[27]] << RR[-LR[109]]) & LR[11]), UR(RR[LR[47]])
- ... (4 more removed lines; see GitHub link above)
+       filter(rr, Sr) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = Sr, this.graceEndsMs = Sr + 500);
+         const Qr = Sr < this.graceEndsMs;
+         return Qr && (rr.sneakPressed || rr.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Sr + 300))), rr.sneakHeld ? Qr && rr.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: rr.sneakHeld && !this.ignoringHeld,
+           sneakPressed: rr.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: rr.sneakTogglePressed && !Qr
```

#### 21. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1075` → after: `L707-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L707-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L707-L710) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L1075)

```diff
-   38821: (RR, JR, GR) => {
+   42398: (rr, Sr, Qr) => {
+     Qr(9971)
+   },
+   42404: (rr, Sr, Qr) => {
```

#### 22. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1077-L1078` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L712) · [Before (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L1077-L1078)

```diff
-       e: () => iR,
-       g: () => qR
+       c: () => nr
```

#### 23. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1080-L1135` → after: `L714-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L714-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/257.js#L714-L801) · [Before (L1080-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/257.js#L1080-L1135)

```diff
-     var yR = GR(38827),
-       tR = GR(2102);
-     const uR = 2,
-       ZR = 1,
-       qR = {
-         yq: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
- ... (40 more removed lines; see GitHub link above)
+     var Zr = Qr(34),
+       Wr = Qr(9901),
+       ar = Qr(9909),
+       jr = Qr(9306),
+       Ir = Qr(9333),
+       fr = Qr(9313),
+       Er = Qr(42412),
+       pr = Qr(42418),
+       xr = Qr(9339),
+       mr = Qr(9292),
+       Nr = Qr(9813),
+       Ur = Qr(9923);
+     const tr = [{
+         isOpen: Wr.i,
+         openButton: () => (0, jr.k)("emoteWheel"),
+         aim: rr => {
+ ... (72 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/258.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/258.js#L4-L10)

```diff
-   41331: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       getBlockFaces: () => wR,
-       getIngameIconUrl: () => aR,
-       getItemIconUrl: () => eR,
-       getItemTextureUrl: () => rR,
-       getParticleTextureUrl: () => LR
+   39969: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Ur
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L12-L65` → after: `L8-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L8-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/258.js#L8-L607) · [Before (L12-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/258.js#L12-L65)

```diff
-     var yR = GR(5268),
-       tR = GR(38150),
-       uR = GR(10582),
-       ZR = GR(4428);
-     const qR = new Set,
-       iR = new Set;
-     let fR = null;
- 
-     function VR(RR) {
-       qR.has(RR) || (qR.add(RR), iR.add(RR), fR ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${iR.size} names`, [...iR]), iR.clear(), fR = null
-       }), 1e3))
-     }
- 
-     function KR(RR, JR) {
-       try {
- ... (38 more removed lines; see GitHub link above)
+     var Zr = Qr(208),
+       Wr = Qr(39160);
+     const ar = 1.2,
+       jr = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         sj: .5,
+ ... (584 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L68-L72` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/258.js#L610) · [Before (L68-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/258.js#L68-L72)

```diff
-       try {
-         return GR(4589)(`./${RR}.png`)
-       } catch {
-         return VR(RR), null
-       }
+       return Nr[rr]
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L75` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/258.js#L613) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/258.js#L75)

```diff
-   38176: (RR, JR, GR) => {
+   38538: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L77` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/258.js#L615) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/258.js#L77)

```diff
-       e: () => yR
+       b: () => Zr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/259.js#L4-L75) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   38213: (RR, JR, GR) => {
+   41700: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       getBlockFaces: () => mr,
+       getIngameIconUrl: () => tr,
+       getItemIconUrl: () => Ur,
+       getItemTextureUrl: () => Nr,
+       getParticleTextureUrl: () => hr
+     });
+     var Zr = Qr(5210),
+       Wr = Qr(38509),
+       ar = Qr(10365),
+       jr = Qr(4362);
+     const Ir = new Set,
+       fr = new Set;
+     let Er = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6-L8` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/259.js#L77) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/259.js#L6-L8)

```diff
-       c: () => uR,
-       e: () => yR,
-       i: () => tR
+       b: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L10-L207` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/259.js#L79-L178) · [Before (L10-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/259.js#L10-L207)

```diff
-     const yR = 1 / 2.2,
-       tR = 2.2;
-     Math.sqrt(5);
-     let uR = .001
-   },
-   38239: (RR, JR, GR) => {
-     function yR(RR) {
-       return parseInt(RR.toString().replace(/\W/g, ""))
-     }
- 
-     function tR(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(RR - JR) <= GR
-     }
- 
-     function uR(RR, JR, GR) {
- ... (182 more removed lines; see GitHub link above)
+     const Zr = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L209-L211` → after: `L180-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L180-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/259.js#L180-L235) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/259.js#L209-L211)

```diff
-       }(RR, GR, JR)));
-       return () => {
-         for (const RR of GR) RR?.()
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
+ ... (40 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L3)

```diff
- export const ids = [260, 267];
+ export const ids = [260];
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L5-L25` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L4-L8) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L5-L25)

```diff
-   39451: RR => {
-     RR.exports = function(RR) {
-       return null != RR && null != RR.constructor && "function" === typeof RR.constructor.isBuffer && RR.constructor.isBuffer(RR)
-     }
-   },
-   39438: (RR, JR, GR) => {
-     var yR = GR(39442),
-       tR = GR(39448),
-       uR = GR(39451);
-     GR.g.__TYPEDARRAY_POOL || (GR.g.__TYPEDARRAY_POOL = {
-       UINT8: tR([32, 0]),
-       UINT16: tR([32, 0]),
-       UINT32: tR([32, 0]),
-       INT8: tR([32, 0]),
-       INT16: tR([32, 0]),
-       INT32: tR([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   38569: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => ar,
+       f: () => Zr,
+       h: () => Wr
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L27-L133` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L10-L13) · [Before (L27-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L27-L133)

```diff
-     var ZR = "undefined" !== typeof Uint8ClampedArray,
-       qR = GR.g.__TYPEDARRAY_POOL;
-     qR.UINT8C || (qR.UINT8C = tR([32, 0])), qR.BUFFER || (qR.BUFFER = tR([32, 0]));
-     var iR = qR.DATA,
-       fR = qR.BUFFER;
- 
-     function VR(RR) {
-       if (RR) {
-         var JR = RR.length || RR.byteLength,
-           GR = yR.log2(JR);
-         iR[GR].push(RR)
-       }
-     }
- 
-     function KR(RR) {
-       RR = yR.nextPow2(RR);
- ... (91 more removed lines; see GitHub link above)
+     const Zr = 1 / 2.2,
+       Wr = 2.2;
+     Math.sqrt(5);
+     let ar = .001
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L135` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L15) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L135)

```diff
-   39442: (RR, JR) => {
+   38599: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L137-L186` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L17) · [Before (L137-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L137-L186)

```diff
-       var JR = 32;
-       return (RR &= -RR) && JR--, 65535 & RR && (JR -= 16), 16711935 & RR && (JR -= 8), 252645135 & RR && (JR -= 4), 858993459 & RR && (JR -= 2), 1431655765 & RR && (JR -= 1), JR
-     }
-     JR.INT_BITS = 32, JR.INT_MAX = 2147483647, JR.INT_MIN = -1 << 31, JR.sign = function(RR) {
-       return (RR > 0) - (RR < 0)
-     }, JR.abs = function(RR) {
-       var JR = RR >> 31;
-       return (RR ^ JR) - JR
-     }, JR.min = function(RR, JR) {
-       return JR ^ (RR ^ JR) & -(RR < JR)
-     }, JR.max = function(RR, JR) {
-       return RR ^ (RR ^ JR) & -(RR < JR)
-     }, JR.isPow2 = function(RR) {
-       return !(RR & RR - 1) && !!RR
-     }, JR.log2 = function(RR) {
-       var JR, GR;
- ... (34 more removed lines; see GitHub link above)
+       return parseInt(rr.toString().replace(/\W/g, ""))
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L210-L212` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L21-L22) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L210-L212)

```diff
-       for (var GR = 0; GR < RR; ++GR)
-         if (!(JR[GR] <= JR[GR + RR])) return !0;
-       return !1
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(rr - Sr) <= Qr
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L215-L245` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L25-L27) · [Before (L215-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L215-L245)

```diff
-     function iR(RR, JR, GR, yR) {
-       for (var tR = 0, uR = 0, ZR = 0, iR = RR.length; ZR < iR; ++ZR) {
-         var fR = RR[ZR];
-         if (!qR(JR, fR)) {
-           for (var VR = 0; VR < 2 * JR; ++VR) GR[tR++] = fR[VR];
-           yR[uR++] = ZR
-         }
-       }
-       return uR
-     }
- 
-     function fR(RR, JR, GR, yR) {
-       var qR = RR.length,
-         fR = JR.length;
-       if (!(qR <= 0 || fR <= 0)) {
-         var VR = RR[0].length >>> 1;
- ... (15 more removed lines; see GitHub link above)
+     function ar(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return rr < Sr - Zr || rr > Qr + Zr
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L249` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L31) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L249)

```diff
-       yR.push([RR, JR])
+       return rr === Sr ? rr : Math.random() * (Sr - rr) + rr
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L513-L522` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L35) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L513-L522)

```diff
-       for (var yR = 2 * (RR + 1), tR = RR + 1; tR <= JR; ++tR) {
-         for (var uR = GR[yR++], ZR = GR[yR++], qR = tR, iR = yR - 2; qR-- > RR;) {
-           var fR = GR[iR - 2],
-             VR = GR[iR - 1];
-           if (fR < uR) break;
-           if (fR === uR && VR < ZR) break;
-           GR[iR] = fR, GR[iR + 1] = VR, iR -= 2
-         }
-         GR[iR] = uR, GR[iR + 1] = ZR
-       }
+       return rr + (Sr - rr) * Qr
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L526-L529` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L39-L40) · [Before (L526-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L526-L529)

```diff
-       JR *= 2;
-       var yR = GR[RR *= 2],
-         tR = GR[RR + 1];
-       GR[RR] = GR[JR], GR[RR + 1] = GR[JR + 1], GR[JR] = yR, GR[JR + 1] = tR
+       let Zr = hr(Sr - rr, 360);
+       return Zr > 180 && (Zr -= 360), rr + Zr * mr(Qr)
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L533-L540` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L44-L45) · [Before (L533-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L533-L540)

```diff
-       JR *= 2, GR[RR *= 2] = GR[JR], GR[RR + 1] = GR[JR + 1]
-     }
- 
-     function uR(RR, JR, GR, yR) {
-       JR *= 2, GR *= 2;
-       var tR = yR[RR *= 2],
-         uR = yR[RR + 1];
-       yR[RR] = yR[JR], yR[RR + 1] = yR[JR + 1], yR[JR] = yR[GR], yR[JR + 1] = yR[GR + 1], yR[GR] = tR, yR[GR + 1] = uR
+       let Zr;
+       return Zr = rr != Sr ? mr((Qr - rr) / (Sr - rr)) : 0, Zr
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L544-L1072` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L49-L51) · [Before (L544-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L544-L1072)

```diff
-       JR *= 2, tR[RR *= 2] = tR[JR], tR[JR] = GR, tR[RR + 1] = tR[JR + 1], tR[JR + 1] = yR
-     }
- 
-     function qR(RR, JR, GR) {
-       JR *= 2;
-       var yR = GR[RR *= 2],
-         tR = GR[JR];
-       return !(yR < tR) && (yR !== tR || GR[RR + 1] > GR[JR + 1])
-     }
- 
-     function iR(RR, JR, GR, yR) {
-       var tR = yR[RR *= 2];
-       return tR < JR || tR === JR && yR[RR + 1] < GR
-     }
- 
-     function fR(RR, VR, KR) {
- ... (513 more removed lines; see GitHub link above)
+       const ar = Wr * Wr,
+         jr = Wr * ar;
+       return rr * (2 * jr - 3 * ar + 1) + Qr * (-2 * jr + 3 * ar) + Sr * (jr - 2 * ar + Wr) + Zr * (jr - ar)
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1075-L1105` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L54-L56) · [Before (L1075-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1075-L1105)

```diff
-     function SR(RR, JR) {
-       return RR.add(JR), RR
-     }
- 
-     function jR(RR, JR, GR, yR) {
-       var tR = -1,
-         uR = RR ? RR.length : 0;
-       for (yR && uR && (GR = RR[++tR]); ++tR < uR;) GR = JR(GR, RR[tR], tR, RR);
-       return GR
-     }
- 
-     function dR(RR) {
-       var JR = !1;
-       if (null != RR && "function" != typeof RR.toString) try {
-         JR = !!(RR + "")
-       } catch (GR) {}
- ... (15 more removed lines; see GitHub link above)
+     function xr(rr, Sr, Qr, Zr, Wr) {
+       const ar = Wr * Wr;
+       return 6 * (ar - Wr) * rr + (3 * ar - 4 * Wr + 1) * Sr + 6 * (-ar + Wr) * Qr + (3 * ar - 2 * Wr) * Zr
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1109-L1113` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L60-L62) · [Before (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1109-L1113)

```diff
-       var JR = -1,
-         GR = Array(RR.size);
-       return RR.forEach((function(RR) {
-         GR[++JR] = RR
-       })), GR
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(Qr, Math.max(Sr, rr))
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1152-L1157` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L66) · [Before (L1152-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1152-L1157)

```diff
-       var JR = -1,
-         GR = RR ? RR.length : 0;
-       for (this.clear(); ++JR < GR;) {
-         var yR = RR[JR];
-         this.set(yR[0], yR[1])
-       }
+       return rr -= 2 * Math.PI * Math.floor((rr + Math.PI) / (2 * Math.PI))
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1161-L1166` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L70-L71) · [Before (L1161-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1161-L1166)

```diff
-       var JR = -1,
-         GR = RR ? RR.length : 0;
-       for (this.clear(); ++JR < GR;) {
-         var yR = RR[JR];
-         this.set(yR[0], yR[1])
-       }
+       const Sr = rr.toString(16);
+       return rr <= 15 ? ("0" + Sr).toUpperCase() : Sr.toUpperCase()
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1170-L1195` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L75-L83) · [Before (L1170-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1170-L1195)

```diff
-       var JR = -1,
-         GR = RR ? RR.length : 0;
-       for (this.clear(); ++JR < GR;) {
-         var yR = RR[JR];
-         this.set(yR[0], yR[1])
-       }
-     }
- 
-     function OJ(RR) {
-       this.__data__ = new bJ(RR)
-     }
- 
-     function xJ(RR, JR) {
-       var GR = kJ(RR) || function(RR) {
-           return function(RR) {
-             return function(RR) {
- ... (10 more removed lines; see GitHub link above)
+       if (Math.log2) return Math.floor(Math.log2(rr));
+       if (rr < 0) return NaN;
+       if (0 === rr) return -1 / 0;
+       let Sr = 0;
+       if (rr < 1) {
+         for (; rr < 1;) Sr++, rr *= 2;
+         Sr = -Sr
+       } else if (rr > 1)
+         for (; rr > 1;) Sr++, rr = Math.floor(rr / 2);
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1205-L1315` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L88) · [Before (L1205-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1205-L1315)

```diff
-       for (var GR = RR.length; GR--;)
-         if (YJ(RR[GR][0], JR)) return GR;
-       return -1
-     }
- 
-     function HJ(RR, JR, GR, yR, tR, rR, UR) {
-       var xR;
-       if (yR && (xR = rR ? yR(RR, tR, rR, UR) : yR(RR)), void 0 !== xR) return xR;
-       if (!sJ(RR)) return RR;
-       var NR = kJ(RR);
-       if (NR) {
-         if (xR = function(RR) {
-             var JR = RR.length,
-               GR = RR.constructor(JR);
-             JR && "string" == typeof RR[0] && JJ.call(RR, "index") && (GR.index = RR.index, GR.input = RR.input);
-             return GR
- ... (95 more removed lines; see GitHub link above)
+       return rr - Math.floor(rr / Sr) * Sr
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1318-L1335` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L91-L92) · [Before (L1318-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1318-L1335)

```diff
-     function oJ(RR) {
-       return !(!sJ(RR) || (JR = RR, hR && hR in JR)) && (TJ(RR) || dR(RR) ? yJ : xR).test(EJ(RR));
-       var JR
-     }
- 
-     function cJ(RR) {
-       var JR = new RR.constructor(RR.byteLength);
-       return new ZJ(JR).set(new ZJ(RR)), JR
-     }
- 
-     function PJ(RR, JR, GR, yR) {
-       GR || (GR = {});
-       for (var tR = -1, uR = JR.length; ++tR < uR;) {
-         var ZR = JR[tR],
-           qR = yR ? yR(GR[ZR], RR[ZR], ZR, GR, RR) : void 0;
-         NJ(GR, ZR, void 0 === qR ? RR[ZR] : qR)
- ... (2 more removed lines; see GitHub link above)
+     function zr(rr, Sr, Qr) {
+       return (rr - Sr) / (Qr - Sr)
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1338-L1343` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L95-L96) · [Before (L1338-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1338-L1343)

```diff
-     function IJ(RR, JR) {
-       var GR = RR.__data__;
-       return function(RR) {
-         var JR = typeof RR;
-         return "string" == JR || "number" == JR || "symbol" == JR || "boolean" == JR ? "__proto__" !== RR : null === RR
-       }(JR) ? GR["string" == typeof JR ? "string" : "hash"] : GR.map
+     function Yr(rr, Sr, Qr) {
+       return rr * (Qr - Sr) + Sr
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1347-L1350` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L100-L101) · [Before (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1347-L1350)

```diff
-       var GR = function(RR, JR) {
-         return null == RR ? void 0 : RR[JR]
-       }(RR, JR);
-       return oJ(GR) ? GR : void 0
+       let Qr = hr(Sr - rr, 360);
+       return Qr > 180 && (Qr -= 360), Qr
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1423` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L105-L106) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1423)

```diff
-       return !!(JR = null == JR ? tR : JR) && ("number" == typeof RR || NR.test(RR)) && RR > -1 && RR % 1 == 0 && RR < JR
+       const Qr = hr(rr, 2 * Sr);
+       return Sr - Math.abs(Qr - Sr)
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1426-L1440` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L109-L111) · [Before (L1426-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1426-L1440)

```diff
-     function dJ(RR) {
-       var JR = RR && RR.constructor;
-       return RR === ("function" == typeof JR && JR.prototype || TR)
-     }
- 
-     function EJ(RR) {
-       if (null != RR) {
-         try {
-           return RJ.call(RR)
-         } catch (JR) {}
-         try {
-           return RR + ""
-         } catch (JR) {}
-       }
-       return ""
+     function Kr(rr, Sr, Qr) {
+       let Zr = mr(Qr);
+       return Zr = -2 * Zr * Zr * Zr + 3 * Zr * Zr, Sr * Zr + rr * (1 - Zr)
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1443-L1468` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L114-L116) · [Before (L1443-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1443-L1468)

```diff
-     function YJ(RR, JR) {
-       return RR === JR || RR !== RR && JR !== JR
-     }(eJ && SJ(new eJ(new ArrayBuffer(1))) != AR || aJ && SJ(new aJ) != VR || LJ && SJ(LJ.resolve()) != rR || nJ && SJ(new nJ) != aR || UJ && SJ(new UJ) != UR) && (SJ = function(RR) {
-       var JR = GJ.call(RR),
-         GR = JR == wR ? RR.constructor : void 0,
-         yR = GR ? EJ(GR) : void 0;
-       if (yR) switch (yR) {
-         case AJ:
-           return AR;
-         case CJ:
-           return VR;
-         case XJ:
-           return rR;
-         case MJ:
-           return aR;
-         case BJ:
- ... (10 more removed lines; see GitHub link above)
+     function yr(rr, Sr, Qr) {
+       let Zr;
+       return Zr = Math.abs(Sr - rr) <= Qr ? Sr : rr + Math.sign(Sr - rr) * Qr, Zr
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1474-L1476` → after: `L119-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L119-L122) · [Before (L1474-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1474-L1476)

```diff
-     function TJ(RR) {
-       var JR = sJ(RR) ? GJ.call(RR) : "";
-       return JR == iR || JR == fR
+     function Br(rr, Sr, Qr) {
+       const Zr = nr(rr, Sr);
+       let Wr;
+       return Wr = -Qr < Zr && Zr < Qr ? Sr : yr(rr, Sr = rr + Zr, Qr), Wr
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1479-L1481` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L125-L126) · [Before (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1479-L1481)

```diff
-     function sJ(RR) {
-       var JR = typeof RR;
-       return !!RR && ("object" == JR || "function" == JR)
+     function Tr(rr, Sr, Qr) {
+       return (rr - Sr) / (Qr - Sr)
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1498-L1508` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L130) · [Before (L1498-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1498-L1508)

```diff
-       for (var yR = RR.length, tR = -1 / 0, uR = 1 / 0, ZR = 0; ZR < yR; ZR++) {
-         var qR = (GR[0][ZR] - RR[ZR]) / JR[ZR],
-           iR = (GR[1][ZR] - RR[ZR]) / JR[ZR];
-         if (qR > iR) {
-           var fR = qR;
-           qR = iR, iR = fR
-         }
-         if (iR < tR || qR > uR) return 1 / 0;
-         qR > tR && (tR = qR), iR < uR && (uR = iR)
-       }
-       return tR > uR ? 1 / 0 : tR
+       return (Qr - Sr) * rr + Sr
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1523-L1604` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L133-L135) · [Before (L1523-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1523-L1604)

```diff
-     function tR(RR) {
-       for (var JR, GR, tR = 0, uR = RR.length, ZR = 0; ZR < RR.length;) {
-         for (JR = RR[ZR], GR = 0; ZR < uR && RR[ZR] === JR;) ++ZR, ++GR;
-         tR += yR.log2(GR) / 7 | 0, tR += yR.log2(JR >>> 0) / 7 | 0, tR += 2
-       }
-       return tR
-     }
-     JR.size = tR, JR.encode = function(RR, JR) {
-       JR || (JR = new Uint8Array(tR(RR)));
-       for (var GR, yR, uR = 0, ZR = JR.length, qR = 0; qR < RR.length;) {
-         for (GR = RR[qR], yR = 0; qR < RR.length && RR[qR] === GR;) ++qR, ++yR;
-         for (; uR < ZR && yR >= 128;) JR[uR++] = 128 + (127 & yR), yR >>>= 7;
-         if (uR >= ZR) throw new Error("RLE buffer overflow");
-         for (JR[uR++] = yR, GR >>>= 0; uR < ZR && GR >= 128;) JR[uR++] = 128 + (127 & GR), GR >>>= 7;
-         if (uR >= ZR) throw new Error("RLE buffer overflow");
-         JR[uR++] = GR
- ... (66 more removed lines; see GitHub link above)
+     function Or(rr, Sr) {
+       const Qr = rr % Sr;
+       return 0 === Qr ? Sr : Or(Sr, Qr)
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1607-L1610` → after: `L164-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L164-L172) · [Before (L1607-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1607-L1610)

```diff
-   38329: (RR, JR, GR) => {
-     GR.d(JR, {
-       Color3: () => yR.d,
-       e: () => yR.e
+   38555: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       Matrix: () => Zr.d,
+       Quaternion: () => Zr.h,
+       RegisterMathVector: () => Zr.k,
+       TmpVectors: () => Zr.n,
+       Vector2: () => Zr.q,
+       kU: () => Zr.u,
+       Vector4: () => Zr.x
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1612-L1613` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L174-L175) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1612-L1613)

```diff
-     var yR = GR(38331);
-     (0, yR.g)()
+     var Zr = Qr(38560);
+     (0, Zr.k)()
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1615-L1657` → after: `L177-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L177-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L177-L185) · [Before (L1615-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1615-L1657)

```diff
-   38928: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => tR
-     });
-     var yR = GR(38933);
-     class tR {
-       static GetPlanes(RR) {
-         const JR = [];
-         for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
-         return tR.GetPlanesToRef(RR, JR), JR
-       }
-       static GetNearPlaneToRef(RR, JR) {
-         const GR = RR.m;
-         JR.normal.x = GR[3] + GR[2], JR.normal.y = GR[7] + GR[6], JR.normal.z = GR[11] + GR[10], JR.d = GR[15] + GR[14], JR.normalize()
-       }
-       static GetFarPlaneToRef(RR, JR) {
- ... (27 more removed lines; see GitHub link above)
+   38576: (rr, Sr, Qr) => {
+     function Zr(rr, Sr) {
+       const Qr = [];
+       for (let Zr = 0; Zr < rr; ++Zr) Qr.push(Sr());
+       return Qr
+     }
+ 
+     function Wr(rr, Sr) {
+       return Zr(rr, Sr)
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1662` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L188-L190) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1662)

```diff
-       c: () => tR
+       e: () => Zr,
+       f: () => Wr,
+       h: () => jr
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1664-L1740` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L192-L211) · [Before (L1664-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1664-L1740)

```diff
-     var yR = GR(38204);
-     class tR {
-       constructor(RR, JR, GR, tR) {
-         this.normal = new yR.r(RR, JR, GR), this.d = tR
-       }
-       QtR() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new tR(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let RR = this.normal.getHashCode();
- ... (61 more removed lines; see GitHub link above)
+     const ar = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function jr(rr, Sr) {
+       const Qr = ar.map((Qr => function(rr, Sr, Qr) {
+         const Zr = rr[Sr];
+         if ("function" !== typeof Zr) return null;
+         const Wr = function() {
+           const Zr = rr.length,
+             ar = Wr.previous.apply(rr, arguments);
+           return Qr(Sr, Zr), ar
+         };
+         return Zr.next = Wr, Wr.previous = Zr, rr[Sr] = Wr, () => {
+           const Qr = Wr.previous;
+           if (!Qr) return;
+           const Zr = Wr.next;
+           Zr ? (Qr.next = Zr, Zr.previous = Qr) : (Qr.next = void 0, rr[Sr] = Qr), Wr.next = void 0, Wr.previous = void 0
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1745-L1758` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L215) · [Before (L1745-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1745-L1758)

```diff
-   38195: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       Matrix: () => yR.e,
-       Quaternion: () => yR.i,
-       RegisterMathVector: () => yR.j,
-       TmpVectors: () => yR.l,
-       Vector2: () => yR.n,
-       Fe: () => yR.r,
-       Vector4: () => yR.s
-     });
-     var yR = GR(38204);
-     (0, yR.j)()
-   },
-   39248: (RR, JR, GR) => {
+   38609: (rr, Sr, Qr) => {
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1760` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L217-L218) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1760)

```diff
-       c: () => yR
+       d: () => ar,
+       e: () => Wr
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1762-L1774` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L220-L223) · [Before (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1762-L1774)

```diff
-     class yR {
-       constructor(RR, JR, GR, yR) {
-         this.x = RR, this.y = JR, this.width = GR, this.height = yR
-       }
-       toGlobal(RR, JR) {
-         return new yR(this.x * RR, this.y * JR, this.width * RR, this.height * JR)
-       }
-       toGlobalToRef(RR, JR, GR) {
-         return GR.x = this.x * RR, GR.y = this.y * JR, GR.width = this.width * RR, GR.height = this.height * JR, this
-       }
-       clone() {
-         return new yR(this.x, this.y, this.width, this.height)
-       }
+     const Zr = {};
+ 
+     function Wr(rr, Sr) {
+       Zr[rr] = Sr
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1776-L1782` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/260.js#L225-L227) · [Before (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/260.js#L1776-L1782)

```diff
-   },
-   39062: (RR, JR, GR) => {
-     function yR() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
-         const JR = 16 * Math.random() | 0;
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
-       }))
+ 
+     function ar(rr) {
+       return Zr[rr]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261, 267, 272];
+ export const ids = [261, 268];
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4-L7` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L5-L25) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L4-L7)

```diff
-   41764: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR,
-       i: () => qR
+   39782: rr => {
+     rr.exports = function(rr) {
+       return null != rr && null != rr.constructor && "function" === typeof rr.constructor.isBuffer && rr.constructor.isBuffer(rr)
+     }
+   },
+   39760: (rr, Sr, Qr) => {
+     var Zr = Qr(39767),
+       Wr = Qr(39774),
+       ar = Qr(39782);
+     Qr.g.__TYPEDARRAY_POOL || (Qr.g.__TYPEDARRAY_POOL = {
+       UINT8: Wr([32, 0]),
+       UINT16: Wr([32, 0]),
+       UINT32: Wr([32, 0]),
+       INT8: Wr([32, 0]),
+       INT16: Wr([32, 0]),
+       INT32: Wr([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L19` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L27-L37) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L9-L19)

```diff
-     var yR = GR(39914),
-       tR = GR(41542),
-       uR = GR(41732),
-       ZR = {};
-     class qR {
-       constructor(RR) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = RR, this.checkInputs = () => {}
-       }
-       add(RR) {
-         const JR = RR.getSimpleName();
-         this.attached[JR] ? yR.c.Warn("camera input of type " + JR + " already exists on camera") : (this.attached[JR] = RR, RR.camera = this.camera, RR.checkInputs && (this.checkInputs = this._addCheckInputs(RR.checkInputs.bind(RR))), this.attachedToElement && RR.attachControl(t … [truncated]
+     var jr = "undefined" !== typeof Uint8ClampedArray,
+       Ir = Qr.g.__TYPEDARRAY_POOL;
+     Ir.UINT8C || (Ir.UINT8C = Wr([32, 0])), Ir.BUFFER || (Ir.BUFFER = Wr([32, 0]));
+     var fr = Ir.DATA,
+       Er = Ir.BUFFER;
+ 
+     function pr(rr) {
+       if (rr) {
+         var Sr = rr.length || rr.byteLength,
+           Qr = Zr.log2(Sr);
+         fr[Qr].push(rr)
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L21-L24` → after: `L39-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L39-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L39-L220) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L21-L24)

```diff
-       remove(RR) {
-         for (const JR in this.attached) {
-           const GR = this.attached[JR];
-           if (GR === RR) return GR.detachControl(), GR.camera = null, delete this.attached[JR], void this.rebuildInputCheck()
+     }
+ 
+     function xr(rr) {
+       rr = Zr.nextPow2(rr);
+       var Sr = Zr.log2(rr),
+         Qr = fr[Sr];
+       return Qr.length > 0 ? Qr.pop() : new ArrayBuffer(rr)
+     }
+ 
+     function mr(rr) {
+       return new Uint8Array(xr(rr), 0, rr)
+     }
+ 
+     function Nr(rr) {
+       return new Uint16Array(xr(2 * rr), 0, rr)
+     }
+ ... (166 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L27-L30` → after: `L223-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L223-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L223-L243) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L27-L30)

```diff
-       removeByType(RR) {
-         for (const JR in this.attached) {
-           const GR = this.attached[JR];
-           GR.getClassName() === RR && (GR.detachControl(), GR.camera = null, delete this.attached[JR], this.rebuildInputCheck())
+       return ar
+     }
+ 
+     function Er(rr, Sr, Qr, Zr) {
+       var Ir = rr.length,
+         Er = Sr.length;
+       if (!(Ir <= 0 || Er <= 0)) {
+         var pr = rr[0].length >>> 1;
+         if (!(pr <= 0)) {
+           var xr, mr = Wr.mallocDouble(2 * pr * Ir),
+             Nr = Wr.mallocInt32(Ir);
+           if ((Ir = fr(rr, pr, mr, Nr)) > 0) {
+             if (1 === pr && Zr) ar.init(Ir), xr = ar.sweepComplete(pr, Qr, 0, Ir, mr, Nr, 0, Ir, mr, Nr);
+             else {
+               var Ur = Wr.mallocDouble(2 * pr * Er),
+                 tr = Wr.mallocInt32(Er);
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L33-L37` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L246-L283) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L33-L37)

```diff
-       _addCheckInputs(RR) {
-         const JR = this.checkInputs;
-         return () => {
-           JR(), RR()
-         }
+     }
+ 
+     function pr(rr, Sr) {
+       Zr.push([rr, Sr])
+     }
+   },
+   39803: (rr, Sr) => {
+     var Qr = "d",
+       Zr = "ax",
+       Wr = "fp",
+       ar = "es",
+       jr = "rs",
+       Ir = "re",
+       fr = "rb",
+       Er = "bs",
+       pr = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L39-L40` → after: `L285-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L285-L364) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L39-L40)

```diff
-       attachInput(RR) {
-         this.attachedToElement && RR.attachControl(this.noPreventDefault)
+       Ir.push("if(re-rs>be-bs){"), rr ? (fr(!0, !1), Ir.push("}else{"), fr(!1, !1)) : (Ir.push("if(fp){"), fr(!0, !0), Ir.push("}else{"), fr(!0, !1), Ir.push("}}else{if(fp){"), fr(!1, !0), Ir.push("}else{"), fr(!1, !1), Ir.push("}")), Ir.push("}}return " + Sr);
+       var Er = Zr.join("") + Ir.join("");
+       return new Function(Er)()
+     }
+     Sr.partial = Nr(!1), Sr.full = Nr(!0)
+   },
+   39801: (rr, Sr, Qr) => {
+     rr.exports = function(rr, Sr, Qr, ar, pr, Lr, lr, Xr, Pr) {
+       ! function(rr, Sr) {
+         var Qr = 8 * Wr.log2(Sr + 1) * (rr + 1) | 0,
+           ar = Wr.nextPow2(er * Qr);
+         yr.length < ar && (Zr.free(yr), yr = Zr.mallocInt32(ar));
+         var jr = Wr.nextPow2(Kr * Qr);
+         Br.length < jr && (Zr.free(Br), Br = Zr.mallocDouble(jr))
+       }(rr, ar + lr);
+       var Hr, qr = 0,
+ ... (64 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L42-L46` → after: `L366-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L366-L410) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L42-L46)

```diff
-       attachElement() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           RR = !uR.b.ForceAttachControlToAlwaysPreventDefault && RR, this.attachedToElement = !0, this.noPreventDefault = RR;
-           for (const JR in this.attached) this.attached[JR].attachControl(RR)
+     };
+     var Zr = Qr(39760),
+       Wr = Qr(39767),
+       ar = Qr(39803),
+       jr = ar.partial,
+       Ir = ar.full,
+       fr = Qr(39787),
+       Er = Qr(39811),
+       pr = Qr(39813),
+       xr = 128,
+       mr = 1 << 22,
+       Nr = 1 << 22,
+       Ur = pr("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
+       tr = pr("lo===p0", ["p0"]),
+       hr = pr("lo<p0", ["p0"]),
+       zr = pr("hi<=p0", ["p0"]),
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L49-L52` → after: `L413-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L413-L434) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L49-L52)

```diff
-       detachElement() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const JR in this.attached) this.attached[JR].detachControl(), RR && (this.attached[JR].camera = null);
-         this.attachedToElement = !1
+     }
+ 
+     function Or(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
+       var pr = 2 * rr,
+         xr = Ir * pr,
+         mr = fr[xr + Sr];
+       rr: for (var Nr = Zr, Ur = Zr * pr; Nr < Wr; ++Nr, Ur += pr) {
+         var tr = jr[Nr];
+         if (tr !== Er) {
+           var hr = ar[Ur + Sr],
+             zr = ar[Ur + Sr + rr];
+           if (!(mr < hr || zr < mr)) {
+             for (var Yr = Sr + 1; Yr < rr; ++Yr) {
+               hr = ar[Ur + Yr], zr = ar[Ur + Yr + rr];
+               var nr = fr[xr + Yr],
+                 er = fr[xr + Yr + rr];
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L54-L58` → after: `L436-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L436-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L436-L476) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L54-L58)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const RR in this.attached) {
-           const JR = this.attached[RR];
-           JR.checkInputs && (this.checkInputs = this._addCheckInputs(JR.checkInputs.bind(JR)))
+     }
+   },
+   39811: (rr, Sr, Qr) => {
+     rr.exports = function(rr, Sr, Qr, jr, Ir, fr) {
+       if (jr <= Qr + 1) return Qr;
+       var Er = Qr,
+         pr = jr,
+         xr = jr + Qr >>> 1,
+         mr = 2 * rr,
+         Nr = xr,
+         Ur = Ir[mr * xr + Sr];
+       for (; Er < pr;) {
+         if (pr - Er < Wr) {
+           ar(rr, Sr, Er, pr, Ir, fr), Ur = Ir[mr * xr + Sr];
+           break
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L61-L62` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L479-L521) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       return Zr(rr, Sr, Qr, xr, Ir, fr, Ir[mr * xr + Sr])
+     };
+     var Zr = Qr(39813)("lo<p0", ["p0"]),
+       Wr = 8;
+ 
+     function ar(rr, Sr, Qr, Zr, Wr, ar) {
+       for (var jr = 2 * rr, Ir = jr * (Qr + 1) + Sr, fr = Qr + 1; fr < Zr; ++fr, Ir += jr)
+         for (var Er = Wr[Ir], pr = fr, xr = jr * (fr - 1); pr > Qr && Wr[xr + Sr] > Er; --pr, xr -= jr) {
+           for (var mr = xr, Nr = xr + jr, Ur = 0; Ur < jr; ++Ur, ++mr, ++Nr) {
+             var tr = Wr[mr];
+             Wr[mr] = Wr[Nr], Wr[Nr] = tr
+           }
+           var hr = ar[pr];
+           ar[pr] = ar[pr - 1], ar[pr - 1] = hr
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L64-L69` → after: `L523-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L523-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L523-L590) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L64-L69)

```diff
-       serialize(RR) {
-         const JR = {};
-         for (const GR in this.attached) {
-           const RR = this.attached[GR],
-             yR = tR.c.Serialize(RR);
-           JR[RR.getClassName()] = yR
+     }
+ 
+     function Zr(rr, Sr, Qr) {
+       Sr *= 2;
+       var Zr = Qr[rr *= 2],
+         Wr = Qr[rr + 1];
+       Qr[rr] = Qr[Sr], Qr[rr + 1] = Qr[Sr + 1], Qr[Sr] = Zr, Qr[Sr + 1] = Wr
+     }
+ 
+     function Wr(rr, Sr, Qr) {
+       Sr *= 2, Qr[rr *= 2] = Qr[Sr], Qr[rr + 1] = Qr[Sr + 1]
+     }
+ 
+     function ar(rr, Sr, Qr, Zr) {
+       Sr *= 2, Qr *= 2;
+       var Wr = Zr[rr *= 2],
+ ... (52 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L71-L82` → after: `L592-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L592-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L592-L630) · [Before (L71-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L71-L82)

```diff
-         RR.inputsmgr = JR
-       }
-       parse(RR) {
-         const JR = RR.inputsmgr;
-         if (JR) {
-           this.clear();
-           for (const RR in JR) {
-             const GR = ZR[RR];
-             if (GR) {
-               const yR = JR[RR],
-                 uR = tR.c.Parse((() => new GR), yR, null);
-               this.add(uR)
+       jr(rr, Br - 1, Or, Lr, xr), jr(pr, Tr + 1, lr, Xr, xr), Br - 2 - rr <= Sr ? Qr(rr, Br - 2, xr) : Er(rr, Br - 2, xr), pr - (Tr + 2) <= Sr ? Qr(Tr + 2, pr, xr) : Er(Tr + 2, pr, xr), Tr - Br <= Sr ? Qr(Br, Tr, xr) : Er(Br, Tr, xr)
+     }
+   },
+   39787: (rr, Sr, Qr) => {
+     rr.exports = {
+       init: function(rr) {
+         var Sr = Wr.nextPow2(rr);
+         fr.length < Sr && (Zr.free(fr), fr = Zr.mallocInt32(Sr));
+         Er.length < Sr && (Zr.free(Er), Er = Zr.mallocInt32(Sr));
+         pr.length < Sr && (Zr.free(pr), pr = Zr.mallocInt32(Sr));
+         xr.length < Sr && (Zr.free(xr), xr = Zr.mallocInt32(Sr));
+         mr.length < Sr && (Zr.free(mr), mr = Zr.mallocInt32(Sr));
+         Nr.length < Sr && (Zr.free(Nr), Nr = Zr.mallocInt32(Sr));
+         var Qr = 8 * Sr;
+         Ur.length < Qr && (Zr.free(Ur), Ur = Zr.mallocDouble(Qr))
+       },
+ ... (23 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L85-L90` → after: `L641-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L641-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L641-L664) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L85-L90)

```diff
-         } else
-           for (const GR in this.attached) {
-             const JR = ZR[this.attached[GR].getClassName()];
-             if (JR) {
-               const yR = tR.c.Parse((() => new JR), RR, null);
-               this.remove(this.attached[GR]), this.add(yR)
+         }
+       },
+       sweepComplete: function(rr, Sr, Qr, Zr, Wr, jr, Ir, zr, Yr, nr) {
+         for (var er = 0, Kr = 2 * rr, yr = rr - 1, Br = Kr - 1, Tr = Qr; Tr < Zr; ++Tr) {
+           var vr = jr[Tr] + 1 << 1,
+             Or = Kr * Tr;
+           Ur[er++] = Wr[Or + yr], Ur[er++] = -vr, Ur[er++] = Wr[Or + Br], Ur[er++] = vr
+         }
+         for (Tr = Ir; Tr < zr; ++Tr) {
+           vr = nr[Tr] + 1 << 1;
+           var Lr = Kr * Tr;
+           Ur[er++] = Yr[Lr + yr], Ur[er++] = 1 | -vr, Ur[er++] = Yr[Lr + Br], Ur[er++] = 1 | vr
+         }
+         var lr = er >>> 1;
+         ar(Ur, lr);
+         var Xr = 0,
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L96-L101` → after: `L796-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L796-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L796-L820) · [Before (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L96-L101)

```diff
-   41768: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => yR.b
-     });
-     var yR = GR(41773);
-     (0, yR.c)()
+   39774: rr => {
+     function Sr(rr, Qr, Zr) {
+       var Wr = 0 | rr[Zr];
+       if (Wr <= 0) return [];
+       var ar, jr = new Array(Wr);
+       if (Zr === rr.length - 1)
+         for (ar = 0; ar < Wr; ++ar) jr[ar] = Qr;
+       else
+         for (ar = 0; ar < Wr; ++ar) jr[ar] = Sr(rr, Qr, Zr + 1);
+       return jr
+     }
+     rr.exports = function(rr, Qr) {
+       switch ("undefined" === typeof Qr && (Qr = 0), typeof rr) {
+         case "number":
+           if (rr > 0) return function(rr, Sr) {
+             var Qr, Zr;
+ ... (9 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L103-L147` → after: `L822-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L822-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L822-L864) · [Before (L103-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L103-L147)

```diff
-   41773: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => VR,
-       c: () => wR
-     });
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38204),
-       ZR = GR(38331),
-       qR = GR(41777),
-       iR = GR(41741),
-       fR = GR(38253);
-     let VR = (() => {
-         var RR;
-         let JR, GR, iR = qR.c,
-           fR = [],
- ... (29 more removed lines; see GitHub link above)
+   39729: (rr, Sr, Qr) => {
+     rr.exports = function() {
+       var rr = this;
+       this.components = {}, this.comps = this.components;
+       var Sr = this.components,
+         Qr = 1,
+         Wr = {},
+         ar = [],
+         jr = [],
+         Ir = {
+           timeout: !1,
+           removals: [],
+           multiComps: []
+         };
+ 
+       function fr(rr, Qr) {
+ ... (27 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L149-L150` → after: `L866-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L866-L869) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L149-L150)

```diff
-           getTypeID() {
-             return qR.c.LIGHTTYPEID_HEMISPHERICLIGHT
+           rr.length = 0
+         }(Ir.multiComps), Ir.removals.length && function(rr) {
+           for (var Sr = 0; Sr < rr.length; Sr++) {
+             rr[Sr].flush()
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L152-L153` → after: `L871-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L871-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L871-L986) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L152-L153)

```diff
-           prepareLightSpecificDefines(RR, JR) {
-             RR["HEMILIGHT" + JR] = !0
+           rr.length = 0
+         }(Ir.removals)
+       }
+       this.vt = Wr, this._systems = ar, this._renderSystems = jr, this.RJ = function(Sr) {
+         var Zr = Qr++;
+         return Array.isArray(Sr) && Sr.forEach((Sr => rr.gM(Zr, Sr))), Zr
+       }, this.deleteEntity = function(Sr) {
+         return Object.keys(Wr).forEach((rr => {
+           Wr[rr].hash[Sr] && fr(Sr, rr)
+         })), rr
+       }, this.OQr = function(rr) {
+         if (!rr) throw new Error("Missing component definition");
+         var Qr = rr.name;
+         if (!Qr) throw new Error("Component definition must have a name property.");
+         if ("string" !== typeof Qr) throw new Error("Component name must be a string.");
+         if ("" === Qr) throw new Error("Component name must be a non-empty string.");
+ ... (100 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L155-L191` → after: `L988-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L988-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L988-L1069) · [Before (L155-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L155-L191)

```diff
-         }, (() => {
-           const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(iR[Symbol.metadata] ?? null) : void 0;
-           JR = [(0, tR.k)()], GR = [(0, tR.G)()], (0, yR.l)(null, null, JR, {
-             kind: "field",
-             name: "groundColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: RR => "groundColor" in RR,
-               get: RR => RR.groundColor,
-               set: (RR, JR) => {
-                 RR.groundColor = JR
-               }
-             },
-             metadata: uR
-           }, fR, VR), (0, yR.l)(null, null, GR, {
- ... (21 more removed lines; see GitHub link above)
+         }(Qr, jr, fr, ar), rr
+       }
+     };
+     var Zr = Qr(39735)
+   },
+   39735: rr => {
+     function Sr(rr, Sr) {
+       var Qr = rr._map[Sr];
+       if (delete rr.hash[Sr], delete rr._map[Sr], Qr === rr.list.length - 1) rr.list.pop(), rr._idList.pop();
+       else {
+         var Zr = rr.list.pop();
+         rr.list[Qr] = Zr;
+         var Wr = rr._idList.pop();
+         rr._idList[Qr] = Wr, rr._map[Wr] = Qr
+       }
+     }
+ ... (66 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L193-L194` → after: `L1071-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1071-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1071-L1550) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L193-L194)

```diff
-     function wR() {
-       KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_3", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.HemisphericLight", VR))
+     function Vr(rr, Sr) {
+       return rr.set(Sr[0], Sr[1]), rr
+     }
+ 
+     function ir(rr, Sr) {
+       return rr.add(Sr), rr
+     }
+ 
+     function wr(rr, Sr, Qr, Zr) {
+       var Wr = -1,
+         ar = rr ? rr.length : 0;
+       for (Zr && ar && (Qr = rr[++Wr]); ++Wr < ar;) Qr = Sr(Qr, rr[Wr], Wr, rr);
+       return Qr
+     }
+ 
+     function cr(rr) {
+ ... (464 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L197` → after: `L1553-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1553-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1553-L1607) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L197)

```diff
-   38329: (RR, JR, GR) => {
+   39238: (rr, Sr) => {
+     function Qr(rr) {
+       var Sr = 32;
+       return (rr &= -rr) && Sr--, 65535 & rr && (Sr -= 16), 16711935 & rr && (Sr -= 8), 252645135 & rr && (Sr -= 4), 858993459 & rr && (Sr -= 2), 1431655765 & rr && (Sr -= 1), Sr
+     }
+     Sr.INT_BITS = 32, Sr.INT_MAX = 2147483647, Sr.INT_MIN = -1 << 31, Sr.sign = function(rr) {
+       return (rr > 0) - (rr < 0)
+     }, Sr.abs = function(rr) {
+       var Sr = rr >> 31;
+       return (rr ^ Sr) - Sr
+     }, Sr.min = function(rr, Sr) {
+       return Sr ^ (rr ^ Sr) & -(rr < Sr)
+     }, Sr.max = function(rr, Sr) {
+       return rr ^ (rr ^ Sr) & -(rr < Sr)
+     }, Sr.isPow2 = function(rr) {
+       return !(rr & rr - 1) && !!rr
+ ... (39 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L199-L200` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1609-L1610) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L199-L200)

```diff
-       Color3: () => yR.d,
-       e: () => yR.e
+       Color3: () => Zr.e,
+       d: () => Zr.f
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L202-L203` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1612-L1613) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L202-L203)

```diff
-     var yR = GR(38331);
-     (0, yR.g)()
+     var Zr = Qr(38684);
+     (0, Zr.h)()
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L205` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1615) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L205)

```diff
-   38928: (RR, JR, GR) => {
+   39262: (rr, Sr, Qr) => {
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L207` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1617) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L207)

```diff
-       e: () => tR
+       b: () => Wr
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L209` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1619) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L209)

```diff
-     var yR = GR(38933);
+     var Zr = Qr(39264);
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L213` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1623) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L213)

```diff
-         for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
+         for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L250` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1660) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L250)

```diff
-   38933: (RR, JR, GR) => {
+   39264: (rr, Sr, Qr) => {
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L252` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1662) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L252)

```diff
-       c: () => tR
+       d: () => Wr
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L254` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1664) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L254)

```diff
-     var yR = GR(38204);
+     var Zr = Qr(38560);
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L257` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1667) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L257)

```diff
-         this.normal = new yR.r(RR, JR, GR), this.d = tR
+         this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L259` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1669) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L259)

```diff
-       QtR() {
+       OWr() {
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L306` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1716) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L306)

```diff
-         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
+         return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L309` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1719) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L309)

```diff
-         return yR.r.Dot(this.normal, RR) <= JR
+         return Zr.u.Dot(this.normal, rr) <= Sr
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L312` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1722) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L312)

```diff
-         return yR.r.Dot(RR, this.normal) + this.d
+         return Zr.u.Dot(rr, this.normal) + this.d
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L326` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1736) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L326)

```diff
-         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
+         return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L330` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1740) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L330)

```diff
-         return yR.r.Dot(GR, JR) + tR
+         return Zr.u.Dot(Qr, Sr) + Wr
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L333` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1743) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L333)

```diff
-     tR._TmpMatrix = yR.e.Identity()
+     Wr._TmpMatrix = Zr.d.Identity()
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L335` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1745) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L335)

```diff
-   38195: (RR, JR, GR) => {
+   38555: (rr, Sr, Qr) => {
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L337-L343` → after: `L1747-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1747-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1747-L1753) · [Before (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L337-L343)

```diff
-       Matrix: () => yR.e,
-       Quaternion: () => yR.i,
-       RegisterMathVector: () => yR.j,
-       TmpVectors: () => yR.l,
-       Vector2: () => yR.n,
-       Fe: () => yR.r,
-       Vector4: () => yR.s
+       Matrix: () => Zr.d,
+       Quaternion: () => Zr.h,
+       RegisterMathVector: () => Zr.k,
+       TmpVectors: () => Zr.n,
+       Vector2: () => Zr.q,
+       kU: () => Zr.u,
+       Vector4: () => Zr.x
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L345-L346` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1755-L1756) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L345-L346)

```diff
-     var yR = GR(38204);
-     (0, yR.j)()
+     var Zr = Qr(38560);
+     (0, Zr.k)()
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L348` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1758) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L348)

```diff
-   39248: (RR, JR, GR) => {
+   39607: (rr, Sr, Qr) => {
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L350` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1760) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L350)

```diff
-       c: () => yR
+       d: () => Zr
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L367-L751` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1777) · [Before (L367-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L367-L751)

```diff
-   41932: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => fR
-     });
-     var yR = GR(38204),
-       tR = GR(38331),
-       uR = GR(41941),
-       ZR = GR(41951),
-       qR = GR(41972);
- 
-     function iR(RR) {
-       let JR = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const GR = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         uR = [],
-         iR = RR.width || RR.size || 1,
-         fR = RR.height || RR.size || 1,
- ... (369 more removed lines; see GitHub link above)
+   39405: (rr, Sr, Qr) => {
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L755` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1781) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L755)

```diff
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
+         return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L759` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/261.js#L1785) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/261.js#L759)

```diff
-       c: () => yR
+       b: () => Zr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L2)

```diff
- export const ids = [262, 267];
+ export const ids = [262, 268, 273];
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   53863: (RR, JR, GR) => {
+   42080: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       d: () => ZR
+       c: () => jr,
+       f: () => Ir
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L10` → after: `L9-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L9-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L9-L191) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L8-L10)

```diff
-     var yR = GR(53798),
-       tR = GR(41514);
-     let uR = !1;
+     var Zr = Qr(40246),
+       Wr = Qr(41889),
+       ar = Qr(42057),
+       jr = {};
+     class Ir {
+       constructor(rr) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = rr, this.checkInputs = () => {}
+       }
+       add(rr) {
+         const Sr = rr.getSimpleName();
+         this.attached[Sr] ? Zr.c.Warn("camera input of type " + Sr + " already exists on camera") : (this.attached[Sr] = rr, rr.camera = this.camera, rr.checkInputs && (this.checkInputs = this._addCheckInputs(rr.checkInputs.bind(rr))), this.attachedToElement && rr.attachControl(t … [truncated]
+       }
+       remove(rr) {
+         for (const Sr in this.attached) {
+           const Qr = this.attached[Sr];
+           if (Qr === rr) return Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], void this.rebuildInputCheck()
+ ... (167 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L13-L30` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L194) · [Before (L13-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L13-L30)

```diff
-       uR || (uR = !0, tR.c.prototype._sphericalPolynomialTargetSize = 0, tR.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(tR.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = yR.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = RR, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
-         },
-         set: function(RR) {
-           this._texture && (this._texture._sphericalPolynomial = RR)
-         },
-         enumerable: !0,
- ... (2 more removed lines; see GitHub link above)
+       xr || (xr = !0, fr.c.AddNodeConstructor("Light_Type_3", ((rr, Sr) => () => new pr(rr, ar.u.Zero(), Sr))), (0, Er.e)("BABYLON.HemisphericLight", pr))
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L33` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L197) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L33)

```diff
-   38329: (RR, JR, GR) => {
+   38679: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L35-L36` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L199-L200) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L35-L36)

```diff
-       Color3: () => yR.d,
-       e: () => yR.e
+       Color3: () => Zr.e,
+       d: () => Zr.f
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L38-L39` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L202-L203) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L38-L39)

```diff
-     var yR = GR(38331);
-     (0, yR.g)()
+     var Zr = Qr(38684);
+     (0, Zr.h)()
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L41` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L205) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L41)

```diff
-   38928: (RR, JR, GR) => {
+   39262: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L43` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L207) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L43)

```diff
-       e: () => tR
+       b: () => Wr
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L45` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L209) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L45)

```diff
-     var yR = GR(38933);
+     var Zr = Qr(39264);
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L49` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L213) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L49)

```diff
-         for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
+         for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L86` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L250) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L86)

```diff
-   38933: (RR, JR, GR) => {
+   39264: (rr, Sr, Qr) => {
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L88` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L252) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L88)

```diff
-       c: () => tR
+       d: () => Wr
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L90` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L254) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L90)

```diff
-     var yR = GR(38204);
+     var Zr = Qr(38560);
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L93` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L257) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L93)

```diff
-         this.normal = new yR.r(RR, JR, GR), this.d = tR
+         this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L95` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L259) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L95)

```diff
-       QtR() {
+       OWr() {
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L142` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L306) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L142)

```diff
-         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
+         return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L145` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L309) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L145)

```diff
-         return yR.r.Dot(this.normal, RR) <= JR
+         return Zr.u.Dot(this.normal, rr) <= Sr
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L148` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L312) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L148)

```diff
-         return yR.r.Dot(RR, this.normal) + this.d
+         return Zr.u.Dot(rr, this.normal) + this.d
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L162` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L326) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L162)

```diff
-         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
+         return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L166` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L330) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L166)

```diff
-         return yR.r.Dot(GR, JR) + tR
+         return Zr.u.Dot(Qr, Sr) + Wr
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L169` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L333) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L169)

```diff
-     tR._TmpMatrix = yR.e.Identity()
+     Wr._TmpMatrix = Zr.d.Identity()
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L171` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L335) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L171)

```diff
-   38195: (RR, JR, GR) => {
+   38555: (rr, Sr, Qr) => {
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L173-L179` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L337-L343) · [Before (L173-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L173-L179)

```diff
-       Matrix: () => yR.e,
-       Quaternion: () => yR.i,
-       RegisterMathVector: () => yR.j,
-       TmpVectors: () => yR.l,
-       Vector2: () => yR.n,
-       Fe: () => yR.r,
-       Vector4: () => yR.s
+       Matrix: () => Zr.d,
+       Quaternion: () => Zr.h,
+       RegisterMathVector: () => Zr.k,
+       TmpVectors: () => Zr.n,
+       Vector2: () => Zr.q,
+       kU: () => Zr.u,
+       Vector4: () => Zr.x
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L181-L182` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L345-L346) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L181-L182)

```diff
-     var yR = GR(38204);
-     (0, yR.j)()
+     var Zr = Qr(38560);
+     (0, Zr.k)()
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L184` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L348) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L184)

```diff
-   39248: (RR, JR, GR) => {
+   39607: (rr, Sr, Qr) => {
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L186` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L350) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L186)

```diff
-       c: () => yR
+       d: () => Zr
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L203` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L367) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L203)

```diff
-   53798: (RR, JR, GR) => {
+   42236: (rr, Sr, Qr) => {
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L207-L214` → after: `L371-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L371-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L371-L425) · [Before (L207-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L207-L214)

```diff
-     var yR = GR(38204),
-       tR = GR(38239),
-       uR = GR(41509),
-       ZR = GR(38213),
-       qR = GR(38331);
-     class iR {
-       constructor(RR, JR, GR, yR) {
-         this.name = RR, this.worldAxisForNormal = JR, this.worldAxisForFileX = GR, this.worldAxisForFileY = yR
+     var Zr = Qr(38560),
+       Wr = Qr(38684),
+       ar = Qr(42243),
+       jr = Qr(42256),
+       Ir = Qr(42275);
+ 
+     function fr(rr) {
+       let Sr = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const Qr = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         ar = [],
+         fr = rr.width || rr.size || 1,
+         Er = rr.height || rr.size || 1,
+         pr = rr.depth || rr.size || 1,
+         xr = rr.wrap || !1;
+       let mr = void 0 === rr.topBaseAt ? 1 : rr.topBaseAt,
+         Nr = void 0 === rr.bottomBaseAt ? 0 : rr.bottomBaseAt;
+ ... (39 more added lines; see GitHub link above)
```
