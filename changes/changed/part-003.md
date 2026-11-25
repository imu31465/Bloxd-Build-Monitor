# Changed — Bundle Modifications Report (Part 003 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `3 / 56` (**307** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 002](part-002.md) · [Part 004 →](part-004.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/111.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/111.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4)

#### 19. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L215` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L347-L350) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L215)

```diff
-       return pp.playerHasRank("developer") || pp.playerHasRank("admin")
+       var WQ = QQ.getAsFile();
+       if (!WQ) return Promise.reject("".concat(QQ, " is not a File"));
+       var XQ = JQ(WQ);
+       return Promise.resolve(XQ)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L226-L227` → after: `L353-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L353-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L353-L394) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L226-L227)

```diff
-     function wp(pp, ip) {
-       return pp.withFeatures.includes(ip) ? "with" : pp.withoutFeatures.includes(ip) ? "without" : null
+     function bQ(QQ) {
+       return zQ(this, void 0, void 0, (function() {
+         return sQ(this, (function(WQ) {
+           return [2, QQ.isDirectory ? vQ(QQ) : dQ(QQ)]
+         }))
+       }))
+     }
+ 
+     function vQ(QQ) {
+       var WQ = QQ.createReader();
+       return new Promise((function(QQ, XQ) {
+         var wQ = [];
+         ! function qQ() {
+           var TQ = this;
+           WQ.readEntries((function(WQ) {
+             return zQ(TQ, void 0, void 0, (function() {
+ ... (26 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L231` → after: `L398-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L398-L409) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L231)

```diff
-       return null === pp ? "with" : "with" === pp ? "without" : null
+       return zQ(this, void 0, void 0, (function() {
+         return sQ(this, (function(WQ) {
+           return [2, new Promise((function(WQ, XQ) {
+             QQ.file((function(XQ) {
+               var wQ = JQ(XQ, QQ.fullPath);
+               WQ(wQ)
+             }), (function(QQ) {
+               XQ(QQ)
+             }))
+           }))]
+         }))
+       }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L235` → after: `L414-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L414-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L414-L420) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L235)

```diff
-       return "with" === pp ? "only" : null === pp ? "include" : void 0
+       return function(QQ) {
+         if (Array.isArray(QQ)) return RQ(QQ)
+       }(QQ) || function(QQ) {
+         if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
+       }(QQ) || AQ(QQ) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L239-L243` → after: `L424-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L424-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L424-L429) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L239-L243)

```diff
-       const cp = wp(pp, ip),
-         Op = pp => pp.filter((pp => pp !== ip));
-       return {
-         withFeatures: null === cp ? [...pp.withFeatures, ip] : Op(pp.withFeatures),
-         withoutFeatures: "with" === cp ? [...pp.withoutFeatures, ip] : Op(pp.withoutFeatures)
+       var XQ = Object.keys(QQ);
+       if (Object.getOwnPropertySymbols) {
+         var wQ = Object.getOwnPropertySymbols(QQ);
+         WQ && (wQ = wQ.filter((function(WQ) {
+           return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
+         }))), XQ.push.apply(XQ, wQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L255-L266` → after: `L435-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L435-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L435-L441) · [Before (L255-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L255-L266)

```diff
-       var ip, cp, op;
-       const Sp = pp.get(dp),
-         xp = (null !== (ip = pp.get(jp)) && void 0 !== ip ? ip : qp).split(","),
-         Lp = pp.get(mp);
-       return {
-         section: "favourites" === Sp || "mine" === Sp ? Sp : "explore",
-         sort: null !== (cp = Op.A.find((ip => ip === pp.get(ep)))) && void 0 !== cp ? cp : Rp,
-         withFeatures: yp.filter((pp => xp.includes(pp) && !xp.includes(`-${pp}`))),
-         withoutFeatures: yp.filter((pp => xp.includes(`-${pp}`))),
-         searchQuery: (null === (op = pp.get(kp)) || void 0 === op ? void 0 : op.slice(0, Op.P)) || null,
-         pageNumber: (0, Ip.e)(pp.get(Ip.c)),
-         banned: "only" === Lp ? "with" : "include" === Lp ? null : "without"
+       for (var WQ = 1; WQ < arguments.length; WQ++) {
+         var XQ = null != arguments[WQ] ? arguments[WQ] : {};
+         WQ % 2 ? lQ(Object(XQ), !0).forEach((function(WQ) {
+           iQ(QQ, WQ, XQ[WQ])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : lQ(Object(XQ)).forEach((function(WQ) {
+           Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
+         }))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L271-L273` → after: `L456-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L456-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L456-L478) · [Before (L271-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L271-L273)

```diff
-       var cp;
-       const Op = Qp(ip);
-       (0, Ip.g)(pp, dp, "explore" === ip.section ? null : ip.section), (0, Ip.g)(pp, ep, ip.sort === Rp ? null : ip.sort), (0, Ip.g)(pp, jp, Op === qp ? null : Op), (0, Ip.g)(pp, kp, ip.searchQuery), (0, Ip.g)(pp, mp, null !== (cp = tp(ip.banned)) && void 0 !== cp ? cp : null), ( … [truncated]
+       return function(QQ) {
+         if (Array.isArray(QQ)) return QQ
+       }(QQ) || function(QQ, WQ) {
+         var XQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
+         if (null == XQ) return;
+         var wQ, qQ, TQ = [],
+           zQ = !0,
+           sQ = !1;
+         try {
+           for (XQ = XQ.call(QQ); !(zQ = (wQ = XQ.next()).done) && (TQ.push(wQ.value), !WQ || TQ.length !== WQ); zQ = !0);
+         } catch (FQ) {
+           sQ = !0, qQ = FQ
+         } finally {
+           try {
+             zQ || null == XQ.return || XQ.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L276-L286` → after: `L481-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L481-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L481-L536) · [Before (L276-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L276-L286)

```diff
-     function Ep(pp) {
-       const ip = new URLSearchParams;
-       return Cp(ip, {
-         section: "explore",
-         sort: Rp,
-         withFeatures: "strict" === pp ? [pp] : [pp, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${Sp}?${ip.toString()}`
+     function AQ(QQ, WQ) {
+       if (QQ) {
+         if ("string" === typeof QQ) return RQ(QQ, WQ);
+         var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
+         return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? RQ(QQ, WQ) : void 0
+       }
+     }
+ 
+     function RQ(QQ, WQ) {
+       (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
+       for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
+       return wQ
+     }
+     var EQ = "file-invalid-type",
+       CQ = "file-too-large",
+       uQ = "file-too-small",
+ ... (40 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L290` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L540) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L290)

```diff
-       return Qp(pp) === qp
+       return void 0 !== QQ && null !== QQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L294` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L544) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L294)

```diff
-       return null !== pp.searchQuery || "with" === pp.banned || Qp(pp) !== qp
+       return "function" === typeof QQ.isPropagationStopped ? QQ.isPropagationStopped() : "undefined" !== typeof QQ.cancelBubble && QQ.cancelBubble
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L298-L314` → after: `L548-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L548-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L548-L551) · [Before (L298-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L298-L314)

```diff
-       return yp.flatMap((ip => {
-         const cp = wp(pp, ip);
-         return "with" === cp ? [ip] : "without" === cp ? [`-${ip}`] : []
-       })).join(",")
-     }
-     const Jp = {
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       Bp = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
- ... (1 more removed lines; see GitHub link above)
+       return QQ.dataTransfer ? Array.prototype.some.call(QQ.dataTransfer.types, (function(QQ) {
+         return "Files" === QQ || "application/x-moz-file" === QQ
+       })) : !!QQ.target && !!QQ.target.files
+     }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L317` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L554) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L317)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / pp))
+       QQ.preventDefault()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L320-L349` → after: `L557-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L557-L563) · [Before (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L320-L349)

```diff
-     function Tp(pp, ip, cp, op) {
-       const Ip = [];
-       pp.isBanned && Ip.push({
-         tone: "warning",
-         text: op("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: Sp
-       } = pp;
-       if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
-           tone: "warning",
-           text: op("shaderPackListing:ownerBroken"),
-           detail: pp.brokenError
-         }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
-         tone: "warning",
- ... (14 more removed lines; see GitHub link above)
+     function ZQ() {
+       for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+       return function(QQ) {
+         for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
+         return WQ.some((function(WQ) {
+           return !xQ(QQ) && WQ && WQ.apply(void 0, [QQ].concat(wQ)), xQ(QQ)
+         }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L359` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L568) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L359)

```diff
-       return Math.max(1, Math.round(pp / 1024))
+       return "audio/*" === QQ || "video/*" === QQ || "image/*" === QQ || "text/*" === QQ || /\w+\/[-+.\w]+/g.test(QQ)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L362-L363` → after: `L571-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L571-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L571-L586) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L362-L363)

```diff
-     function bp(pp, ip, cp) {
-       return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
+     function KQ(QQ) {
+       return /^.*\.[\w]+$/.test(QQ)
+     }
+     var mQ = ["children"],
+       MQ = ["open"],
+       QW = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
+       WW = ["refKey", "onChange", "onClick"];
+ 
+     function XW(QQ) {
+       return function(QQ) {
+         if (Array.isArray(QQ)) return TW(QQ)
+       }(QQ) || function(QQ) {
+         if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
+       }(QQ) || qW(QQ) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L374-L378` → after: `L590-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L590-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L590-L612) · [Before (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L374-L378)

```diff
-       var cp;
-       const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
-       return [Ip, ip => {
-         op.h.setItem(pp, ip), Sp(ip)
-       }]
+       return function(QQ) {
+         if (Array.isArray(QQ)) return QQ
+       }(QQ) || function(QQ, WQ) {
+         var XQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
+         if (null == XQ) return;
+         var wQ, qQ, TQ = [],
+           zQ = !0,
+           sQ = !1;
+         try {
+           for (XQ = XQ.call(QQ); !(zQ = (wQ = XQ.next()).done) && (TQ.push(wQ.value), !WQ || TQ.length !== WQ); zQ = !0);
+         } catch (FQ) {
+           sQ = !0, qQ = FQ
+         } finally {
+           try {
+             zQ || null == XQ.return || XQ.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L380-L391` → after: `L614-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L614-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L614-L620) · [Before (L380-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L380-L391)

```diff
-   },
-   6804: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => op,
-       f: () => Ip
-     });
-     var Op = cp(44);
-     const op = "shaderPack";
-     async function Ip() {
-       var pp;
-       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
+ 
+     function qW(QQ, WQ) {
+       if (QQ) {
+         if ("string" === typeof QQ) return TW(QQ, WQ);
+         var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
+         return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? TW(QQ, WQ) : void 0
+       }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L436` → after: `L624-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L624-L626) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L436)

```diff
-       return pp.slice(0, ip).replace(/[\uD800-\uDBFF]$/, "")
+       (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
+       for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
+       return wQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L442-L445` → after: `L629-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L629-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L629-L637) · [Before (L442-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L442-L445)

```diff
-     function Wp(pp) {
-       const ip = pp,
-         cp = null === ip || void 0 === ip ? void 0 : ip.files;
-       return "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.apiVersion) && "string" === typeof ip.name && (null === ip.author || "string" === typeof ip.author) && (void 0 === ip.keepCircleShadows || "boolean" === typeof ip.keepCircleShadows) && "object" === typeof … [truncated]
+     function zW(QQ, WQ) {
+       var XQ = Object.keys(QQ);
+       if (Object.getOwnPropertySymbols) {
+         var wQ = Object.getOwnPropertySymbols(QQ);
+         WQ && (wQ = wQ.filter((function(WQ) {
+           return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
+         }))), XQ.push.apply(XQ, wQ)
+       }
+       return XQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L451` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L641-L649) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L451)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
+       for (var WQ = 1; WQ < arguments.length; WQ++) {
+         var XQ = null != arguments[WQ] ? arguments[WQ] : {};
+         WQ % 2 ? zW(Object(XQ), !0).forEach((function(WQ) {
+           FW(QQ, WQ, XQ[WQ])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : zW(Object(XQ)).forEach((function(WQ) {
+           Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
+         }))
+       }
+       return QQ
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L456-L458` → after: `L652-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L652-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L652-L658) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L456-L458)

```diff
-     function Hp(pp) {
-       var ip;
-       return pp === vp || null !== (ip = null === pp || void 0 === pp ? void 0 : pp.startsWith(tp)) && void 0 !== ip && ip
+     function FW(QQ, WQ, XQ) {
+       return WQ in QQ ? Object.defineProperty(QQ, WQ, {
+         value: XQ,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : QQ[WQ] = XQ, QQ
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L462` → after: `L662-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L662-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L662-L674) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L462)

```diff
-       return `shaderPacks/${pp}/${ip}.json`
+       if (null == QQ) return {};
+       var XQ, wQ, qQ = function(QQ, WQ) {
+         if (null == QQ) return {};
+         var XQ, wQ, qQ = {},
+           TQ = Object.keys(QQ);
+         for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || (qQ[XQ] = QQ[XQ]);
+         return qQ
+       }(QQ, WQ);
+       if (Object.getOwnPropertySymbols) {
+         var TQ = Object.getOwnPropertySymbols(QQ);
+         for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
+       }
+       return qQ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L465-L466` → after: `L753-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L753-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L753-L1076) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L465-L466)

```diff
-     function ep(pp, ip, cp, Op) {
-       return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
+     function IW() {
+       var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+         WQ = sW(sW({}, JW), QQ),
+         XQ = WQ.accept,
+         qQ = WQ.disabled,
+         TQ = WQ.getFilesFromEvent,
+         zQ = WQ.maxSize,
+         sQ = WQ.minSize,
+         FQ = WQ.multiple,
+         PQ = WQ.maxFiles,
+         gQ = WQ.onDragEnter,
+         JQ = WQ.onDragLeave,
+         rQ = WQ.onDragOver,
+         IQ = WQ.onDrop,
+         jQ = WQ.onDropAccepted,
+         BQ = WQ.onDropRejected,
+ ... (308 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L469-L470` → after: `L1079-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1079-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L1079-L1112) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L469-L470)

```diff
-     function jp(pp, ip, cp, Op) {
-       return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
+     function jW(QQ, WQ) {
+       switch (WQ.type) {
+         case "focus":
+           return sW(sW({}, QQ), {}, {
+             JR: !0
+           });
+         case "blur":
+           return sW(sW({}, QQ), {}, {
+             JR: !1
+           });
+         case "openDialog":
+           return sW(sW({}, rW), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+           return sW(sW({}, QQ), {}, {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/112.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/112.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295)

#### 1. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L4-L101` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L4) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L4-L101)

```diff
-   9030: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => ei
-     });
-     var Op = cp(1543),
-       op = cp(25),
-       Ip = cp(4747),
-       Sp = cp(62),
-       xp = cp(1476);
-     var Lp = cp(1956),
-       Yp = cp(1538),
-       Dp = cp(1372),
-       Ap = cp(1201),
-       Pp = cp(156),
-       Wp = cp(195),
-       yp = cp(1014),
- ... (82 more removed lines; see GitHub link above)
+   5359: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L103-L147` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L6-L10) · [Before (L103-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L103-L147)

```diff
-       let {
-         onApply: ip,
-         onSkip: cp
-       } = pp;
-       const {
-         t: Op
-       } = (0, Ap.H)();
-       return (0, Sp.useEffect)((() => {
-         Gp.e.skipPlayWait()
-       }), []), (0, rp.jsx)(ap.j, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, rp.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [Op("customTexturePack:downloadPrompt"), (0, rp.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
- ... (29 more removed lines; see GitHub link above)
+       return wQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
+         return typeof QQ
+       } : function(QQ) {
+         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
+       }, wQ(QQ)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L149-L152` → after: `L12-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L12-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L12-L35) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L149-L152)

```diff
-     let sp = {
-       wanted: !1
-     };
-     let Kp = null;
+     Object.defineProperty(WQ, "__esModule", {
+       value: !0
+     }), WQ.default = void 0;
+     var qQ = JQ(XQ(1081)),
+       TQ = function(QQ, WQ) {
+         if (!WQ && QQ && QQ.__esModule) return QQ;
+         if (null === QQ || "object" !== wQ(QQ) && "function" !== typeof QQ) return {
+           default: QQ
+         };
+         var XQ = gQ(WQ);
+         if (XQ && XQ.has(QQ)) return XQ.get(QQ);
+         var qQ = {},
+           TQ = Object.defineProperty && Object.getOwnPropertyDescriptor;
+         for (var zQ in QQ)
+           if ("default" !== zQ && Object.prototype.hasOwnProperty.call(QQ, zQ)) {
+             var sQ = TQ ? Object.getOwnPropertyDescriptor(QQ, zQ) : null;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L155` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L38-L43) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L155)

```diff
-       pp.setGamePackConfirm(zp), Kp = pp
+       if ("function" !== typeof WeakMap) return null;
+       var WQ = new WeakMap,
+         XQ = new WeakMap;
+       return (gQ = function(QQ) {
+         return QQ ? XQ : WQ
+       })(QQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L160-L168` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L47-L48) · [Before (L160-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L160-L168)

```diff
-       let {
-         schematicId: ip,
-         texturePackKey: cp,
-         onClose: Op
-       } = pp;
-       const [op, Ip] = (0, Sp.useState)("prompt"), [xp, Lp] = (0, Sp.useState)(null), Yp = (0, ii.b)();
- 
-       function Dp() {
-         Op()
+       return QQ && QQ.__esModule ? QQ : {
+         default: QQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L170-L187` → after: `L50-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L50-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L50-L73) · [Before (L170-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L170-L187)

```diff
-       return "prompt" === op ? (0, rp.jsx)(Zp, {
-         onApply: async function() {
-           Ip("downloading");
-           try {
-             const pp = await async function(pp, ip) {
-               const cp = await (0, Fp.d)(ip);
-               if (cp) return {
-                 pack: cp,
-                 key: ip
-               };
-               const Op = await Hp.userContextManager.getCurrentUserContext(),
-                 op = (await tp.b.getGame(Op, pp, !0)).customTexturePackKey;
-               if (!op) return null;
-               const Ip = await (0, Fp.d)(op);
-               if (!Ip) throw new Error("The texture pack could not be found");
-               return {
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function rQ(QQ, WQ) {
+       var XQ = "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
+       if (!XQ) {
+         if (Array.isArray(QQ) || (XQ = function(QQ, WQ) {
+             if (!QQ) return;
+             if ("string" === typeof QQ) return IQ(QQ, WQ);
+             var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
+             "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
+             if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
+             if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return IQ(QQ, WQ)
+           }(QQ)) || WQ && QQ && "number" === typeof QQ.length) {
+           XQ && (QQ = XQ);
+           var wQ = 0,
+             qQ = function() {};
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L189-L195` → after: `L75-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L75-L79) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L189-L195)

```diff
-             }(ip, cp);
-             if (!Yp.current) return;
-             if (!pp) return void Op();
-             if ((0, bp.m)(pp.pack)) return void Ip("refused");
-             hp.d.setFromJson(pp.pack, "customGame"), await hp.d.saveTemporaryTexturePack(pp.key), Yp.current && (0, Mp.reloadBloxd)()
-           } catch (pp) {
-             Lp(pp instanceof Error ? pp.message : String(pp)), Ip("error")
+             },
+             e: function(QQ) {
+               throw QQ
+             },
+             f: qQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L198-L216` → after: `L90-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L90-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L90-L92) · [Before (L198-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L198-L216)

```diff
-         onSkip: Dp
-       }) : "downloading" === op ? (0, rp.jsx)(ap.j, {
-         icon: "download",
-         title: "customTexturePack:downloading",
-         subtitle: (0, rp.jsx)("div", {
-           className: "CustomTexturePackDownloaderLogoLoaderContainer",
-           children: (0, rp.jsx)(np.c, {
-             showFace: !0
-           })
-         })
-       }) : "error" === op ? (0, rp.jsx)(ap.j, {
-         icon: "face-worried",
-         title: "customTexturePack:errorTitle",
-         subtitle: xp,
-         confirm: {
-           text: "customTexturePack:refreshPage",
- ... (3 more removed lines; see GitHub link above)
+         n: function() {
+           var QQ = XQ.next();
+           return zQ = QQ.done, QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L218-L228` → after: `L94-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L94-L102) · [Before (L218-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L218-L228)

```diff
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: Dp
-         }
-       }) : "refused" === op ? (0, rp.jsx)(ap.j, {
-         icon: "face-worried",
-         title: "customTexturePack:cantApplyTitle",
-         subtitle: "customTexturePack:gamePackHasExternalUrls",
-         confirm: {
-           text: "general:continue",
-           onClick: Dp
+         e: function(QQ) {
+           sQ = !0, TQ = QQ
+         },
+         f: function() {
+           try {
+             zQ || null == XQ.return || XQ.return()
+           } finally {
+             if (sQ) throw TQ
+           }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L230` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L104) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L230)

```diff
-       }) : null
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L246-L248` → after: `L107-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L107-L110) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L246-L248)

```diff
-     function wi() {
-       const pp = op.c.get("clientEscMenuOptions");
-       Lp.gameBridge.send("setLookSensitivity", op.c.get("isTouchScreen") ? (0, yi.n)(pp) : pp.mouseSensitivity)
+     function IQ(QQ, WQ) {
+       (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
+       for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
+       return wQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L252-L263` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L113-L116) · [Before (L252-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L252-L263)

```diff
-     function ti(pp) {
-       const ip = pp.asError();
-       if (ip.debugResult.OO || (0, Pi.e)(ip.debugResult.error)) return;
-       console.log("Failed to join lobby:", ip.message);
-       const cp = "timedOut" === ip.debugResult.gameServerUnreachable;
-       (0, Si.reportClientError)("matchmake_failed", ip.message, cp ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Pp.k[ip.code]);
-       const {
-         error: Op
-       } = ip.debugResult;
-       if (Op instanceof Bp.l && "default" !== Op.packSource) {
-         const pp = (0, xi.f)("js", "game" === Op.packSource ? "game" : "page", (0, xi.g)(Op));
-         (0, Si.reportClientError)("texture_pack", Op, pp)
+     function jQ(QQ, WQ) {
+       for (var XQ = 0; XQ < WQ.length; XQ++) {
+         var wQ = WQ[XQ];
+         wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, wQ.key, wQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L267-L270` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L120-L123) · [Before (L267-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L267-L270)

```diff
-     function Hi(pp) {
-       if (null === pp || void 0 === pp || !pp.isError()) return !1;
-       const ip = pp.asError();
-       return ip.code === Pp.k.REQUEST_TO_MATCHMAKING && !(0, Pi.e)(ip.debugResult.error)
+     function BQ(QQ, WQ) {
+       return BQ = Object.setPrototypeOf || function(QQ, WQ) {
+         return QQ.__proto__ = WQ, QQ
+       }, BQ(QQ, WQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L272-L311` → after: `L125-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L125-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L125-L130) · [Before (L272-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L272-L311)

```diff
-     async function di(pp, ip, cp) {
-       const Op = (0, Di.M)(ip);
-       async function Sp(pp, ip, cp, Op) {
-         var Sp;
-         if (Op.aborted) return null;
-         null === op.c.get("gameEntrySource") && (0, op.k)("directPlayUrl"), Wi.z && (0, gp.f)().catch((() => {})), op.c.set({
-           gameState: "findingLobby"
-         }), Rp.m.GA("loadingScreenState", "loadingPage:findingLobby");
-         const xp = await Hp.userContextManager.getCurrentUserContext();
-         Lp.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: ip,
-           discordContext: pp instanceof fp.e ? pp.getSerialisableParams() : null
-         }), (0, Ii.i)(null !== (Sp = Gp.e.playInputAt()) && void 0 !== Sp ? Sp : performance.now());
-         const Yp = await async function(pp, ip, cp, Op, op) {
-           try {
-             await (0, Ui.k)(Ip.reqLibsLoadedPromise, vi, "Required libraries timed out")
- ... (24 more removed lines; see GitHub link above)
+ 
+     function yQ(QQ) {
+       var WQ = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L313-L317` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L132) · [Before (L313-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L313-L317)

```diff
-           var Ip;
-           let xp = pp,
-             Lp = await Sp(xp, ip, cp, op);
-           for (let pp = 0; Op && pp < Di.l && (Hi(Lp) && await (0, Di.N)((0, Di.x)(pp), op)); pp++) xp = (0, Di.z)(xp, pp + 1, "string" === typeof xp && (0, wp.I)(xp)), Lp = await Sp(xp, ip, cp, op);
-           return null !== (Ip = Lp) && void 0 !== Ip && Ip.isError() && ti(Lp), Lp
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L319-L322` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L134) · [Before (L319-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L319-L322)

```diff
-           if ((0, Si.reportClientError)("matchmake_failed", xp, "unexpected"), Lp.gameBridge.send("leaveGame", {
-               reloadPath: op.aborted ? null : "/"
-             }), op.aborted) return null;
-           throw xp
+           return !1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L324-L333` → after: `L136-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L136-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L136-L148) · [Before (L324-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L324-L333)

```diff
-       }), (async pp => {
-         var cp;
-         if (Op) return;
-         const op = (0, Ep.z)();
-         null !== op && (await op, pp.aborted) || (null !== (cp = Tp.c[ip]) && void 0 !== cp && cp.playAdBeforeMatchmaking ? (Gp.e.skipPlayWait(), await new Promise((pp => {
-           (0, Ep.Z)((() => {
-             pp(!0)
-           }), "video_start")
-         }))) : (0, Ep.Z)((() => {}), "video_start"))
-       }))
+       }();
+       return function() {
+         var XQ, qQ = DQ(QQ);
+         if (WQ) {
+           var TQ = DQ(this).constructor;
+           XQ = Reflect.construct(qQ, arguments, TQ)
+         } else XQ = qQ.apply(this, arguments);
+         return function(QQ, WQ) {
+           if (WQ && ("object" === wQ(WQ) || "function" === typeof WQ)) return WQ;
+           if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
+           return VQ(QQ)
+         }(this, XQ)
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L336-L361` → after: `L151-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L151-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L151-L183) · [Before (L336-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L336-L361)

```diff
-     function ei() {
-       const {
-         t: pp
-       } = (0, Ap.H)(), ip = (0, Yp.useNavigatePreserveSearch)(), cp = (0, Op.r)(), Wp = (0, Op.A)(), Up = (0, Sp.useRef)({
-         t: pp,
-         navigate: ip
-       });
-       Up.current = {
-         t: pp,
-         navigate: ip
-       };
-       const dp = (0, Sp.useRef)("");
-       dp.current = cp.pathname + cp.search;
-       const {
-         gameState: ep,
-         clientEscMenuOptions: kp
- ... (10 more removed lines; see GitHub link above)
+     function VQ(QQ) {
+       if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return QQ
+     }
+ 
+     function DQ(QQ) {
+       return DQ = Object.setPrototypeOf ? Object.getPrototypeOf : function(QQ) {
+         return QQ.__proto__ || Object.getPrototypeOf(QQ)
+       }, DQ(QQ)
+     }
+ 
+     function pQ(QQ, WQ, XQ) {
+       return WQ in QQ ? Object.defineProperty(QQ, WQ, {
+         value: XQ,
+         enumerable: !0,
+         configurable: !0,
+ ... (17 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L363-L415` → after: `L185-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L185-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L185-L218) · [Before (L363-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L363-L415)

```diff
-       }), [bp]), (0, Sp.useEffect)((() => {
-         var pp, ip, Op;
-         (0, Ip.needGameClientNow)();
-         const {
-           t: Sp,
-           navigate: xp
-         } = Up.current, Ap = (0, Oi.c)(Wp, cp.search);
-         if (Wp.lobbyName && !new URLSearchParams(cp.search).has("lobby")) return void xp((0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName), {
-           replace: !0
-         });
-         let ep = Promise.resolve({
-           shouldMatchmake: !0
-         });
-         if ("/play/discord-custom-lobby" === cp.pathname) {
-           const pp = op.c.get("discordContext");
-           if (!pp) return void xp("/");
- ... (37 more removed lines; see GitHub link above)
+       },
+       UQ = function(QQ) {
+         ! function(QQ, WQ) {
+           if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
+           Object.defineProperty(QQ, "prototype", {
+             value: Object.create(WQ && WQ.prototype, {
+               constructor: {
+                 value: QQ,
+                 writable: !0,
+                 configurable: !0
+               }
+             }),
+             writable: !1
+           }), WQ && BQ(QQ, WQ)
+         }(zQ, QQ);
+         var WQ, XQ, wQ, TQ = yQ(zQ);
+ ... (18 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L417-L460` → after: `L220-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L220-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L220-L312) · [Before (L417-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L417-L460)

```diff
-             const op = Op.customTexturePackKey;
-             if (!op) return void(hp.d.isUsingTemporaryTexturePack() && ((0, Mp.reloadBloxd)(), await new Promise((() => {}))));
-             if (hp.d.isUsingTemporaryTexturePack() && hp.d.getTemporaryTexturePackSource() === op) return;
-             const Ip = Dp.NotificationProvider.showCustomPopup({
-               body: pp => (0, rp.jsx)(ci, {
-                 schematicId: cp,
-                 texturePackKey: op,
-                 onClose: pp
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0
-             });
-             await Ip.getResult()
-           }(ap), ip = ep;
-           ep = pp.catch((pp => {
-             console.error("Failed to check for custom texture pack", pp)
- ... (28 more removed lines; see GitHub link above)
+           })), pQ(VQ(XQ), "handleStart", (function(QQ) {
+             var WQ = XQ.props.onChangeStart;
+             document.addEventListener("mousemove", XQ.handleDrag), document.addEventListener("mouseup", XQ.handleEnd), XQ.setState({
+               active: !0
+             }, (function() {
+               WQ && WQ(QQ)
+             }))
+           })), pQ(VQ(XQ), "handleDrag", (function(QQ) {
+             QQ.stopPropagation();
+             var WQ = XQ.props.onChange,
+               wQ = QQ.target,
+               qQ = wQ.className,
+               TQ = wQ.classList,
+               zQ = wQ.dataset;
+             if (WQ && "rangeslider__labels" !== qQ) {
+               var sQ = XQ.position(QQ);
+ ... (77 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L462-L526` → after: `L314-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L314-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L314-L367) · [Before (L462-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L462-L526)

```diff
-           }(np.lobbyName, np.game)
-         };
-         var Gp;
-         const Zp = null !== Rp.current;
-         Rp.current = null, (0, Li.i)(null);
-         const zp = () => {
-           Xp ? (0, Yp.navigateToHomePage)() : (fp.current = Zp, xp(-1))
-         };
-         let Kp = !1;
-         const ii = cp.pathname + cp.search,
-           Ii = () => !Kp && dp.current === ii;
-         return (0, Yi.b)(ep, Fp, (pp => {
-           let {
-             shouldMatchmake: ip,
-             discordContext: cp
-           } = pp;
- ... (49 more removed lines; see GitHub link above)
+           })), XQ.state = {
+             active: !1,
+             limit: 0,
+             grab: 0
+           }, XQ
+         }
+         return WQ = zQ, (XQ = [{
+           key: "componentDidMount",
+           value: function() {
+             this.handleUpdate(), new sQ.default(this.handleUpdate).observe(this.slider)
+           }
+         }, {
+           key: "render",
+           value: function() {
+             var QQ = this,
+               WQ = this.props,
+ ... (38 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L528-L549` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L369-L372) · [Before (L528-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L528-L549)

```diff
-                 yp.then((pp => {
-                   if (pp) {
-                     (0, op.k)(Ip);
-                     const pp = (0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName);
-                     "low" === Op ? xp(pp) : (0, Mp.reloadBloxd)(pp)
-                   }
-                 })), Lp.gameBridge.send("leaveGame", {
-                   reloadPath: "/"
-                 }), zp()
-               } else {
-                 const {
-                   gameNameWithVariation: ip,
-                   lobbyName: cp
-                 } = pp.getValue();
-                 Rp.current = {
-                   gameNameWithVariation: ip,
- ... (6 more removed lines; see GitHub link above)
+               } catch (RQ) {
+                 lQ.e(RQ)
+               } finally {
+                 lQ.f()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L551-L560` → after: `L374-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L374-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L374-L406) · [Before (L551-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L551-L560)

```diff
-           })).catch((pp => {
-             if (!Ii()) return;
-             Dp.NotificationProvider.showPromptPopup({
-               icon: "face-dizzy",
-               title: "Unexpected Error",
-               subtitle: (0, rp.jsxs)(rp.Fragment, {
-                 children: [Sp("homePage:pleaseCopyError"), (0, rp.jsx)("div", {
-                   style: {
-                     fontSize: "0.9rem",
-                     paddingTop: "1rem"
+             }
+             return (0, PQ.jsxs)("div", {
+               ref: function(WQ) {
+                 QQ.slider = WQ
+               },
+               className: (0, qQ.default)("rangeslider", "rangeslider-".concat(wQ), {
+                 "rangeslider-reverse": sQ
+               }, TQ),
+               onMouseDown: this.handleDrag,
+               onMouseUp: this.handleEnd,
+               onTouchStart: this.handleStart,
+               onTouchEnd: this.handleEnd,
+               "aria-valuemin": gQ,
+               "aria-valuemax": JQ,
+               "aria-valuenow": XQ,
+               "aria-orientation": wQ,
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L562-L563` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L408-L410) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L562-L563)

```diff
-                   children: (0, rp.jsx)(lp.c, {
-                     errorString: pp.stack
+                   className: "rangeslider__handle-tooltip",
+                   children: (0, PQ.jsx)("span", {
+                     children: this.handleFormat(XQ)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L566-L612` → after: `L416-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L416-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L416-L446) · [Before (L566-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L566-L612)

```diff
-               }),
-               confirmText: Sp("general:tryAgain"),
-               cancelText: Sp("general:cancel")
-             }).getResult().then((pp => {
-               !0 === pp && (0, Mp.reloadBloxd)((0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName))
-             })), zp()
-           })) : xp(-1))
-         }), Ii), () => {
-           Kp = !0
-         }
-       }), [Wp, cp.search, cp.pathname]), (0, Sp.useEffect)((() => {
-         kp.disableFullscreen && (0, Xp.f)() ? (0, Xp.l)() : !kp.disableFullscreen && (0, Xp.j)() && (0, Xp.s)({
-           automatic: !0
-         })
-       }), [ep, kp]), (0, Sp.useEffect)((() => {
-         "inGame" === ep && wi()
- ... (31 more removed lines; see GitHub link above)
+               }), FQ && this.renderLabels(dQ)]
+             })
+           }
+         }]) && jQ(WQ.prototype, XQ), wQ && jQ(WQ, wQ), Object.defineProperty(WQ, "prototype", {
+           writable: !1
+         }), zQ
+       }(TQ.Component);
+     pQ(UQ, "propTypes", {
+       min: zQ.default.number,
+       max: zQ.default.number,
+       step: zQ.default.number,
+       value: zQ.default.number,
+       orientation: zQ.default.string,
+       tooltip: zQ.default.bool,
+       reverse: zQ.default.bool,
+       labels: zQ.default.object,
+ ... (15 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L614-L624` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L448-L449) · [Before (L614-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L614-L624)

```diff
-     var Op = cp(1211);
-     async function op(pp) {
-       const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === ip.status || 403 === ip.status) return null;
-       if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
-       return await ip.json()
-     }
+     var bQ = UQ;
+     WQ.default = bQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L626-L657` → after: `L451-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L451-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L451-L457) · [Before (L626-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L626-L657)

```diff
-   9049: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(1356),
-       op = cp(1234),
-       Ip = cp(640);
- 
-     function Sp(pp) {
-       return pp = function(pp, ip) {
-         var cp;
-         const Op = new URLSearchParams(ip),
-           op = Op.get("lobby"),
-           Ip = Op.get("vm"),
-           Sp = null !== (cp = op) && void 0 !== cp ? cp : pp.lobbyName,
-           xp = null !== Ip && void 0 !== Ip ? Ip : pp.directJoinVmUrl;
- ... (16 more removed lines; see GitHub link above)
+   5351: (QQ, WQ, XQ) => {
+     var wQ;
+     WQ.c = void 0;
+     var qQ = ((wQ = XQ(5359)) && wQ.__esModule ? wQ : {
+       default: wQ
+     }).default;
+     WQ.c = qQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L659-L671` → after: `L459-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L459-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L459-L465) · [Before (L659-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L659-L671)

```diff
-   9046: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Ip,
-       g: () => op
-     });
-     let Op = !1;
- 
-     function op() {
-       Op = !0
-     }
- 
-     function Ip() {
-       return Op
+   5373: (QQ, WQ) => {
+     Object.defineProperty(WQ, "__esModule", {
+       value: !0
+     }), WQ.capitalize = function(QQ) {
+       return QQ.charAt(0).toUpperCase() + QQ.substr(1)
+     }, WQ.clamp = function(QQ, WQ, XQ) {
+       return Math.min(Math.max(QQ, WQ), XQ)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L674-L681` → after: `L468-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L468-L469) · [Before (L674-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L674-L681)

```diff
-   9056: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => xp,
-       c: () => op,
-       f: () => Ip,
-       i: () => Sp
-     });
-     let Op = null;
+   5320: (QQ, WQ, XQ) => {
+     var wQ = XQ(5328);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L683-L689` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L471) · [Before (L683-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L683-L689)

```diff
-     function op(pp, ip) {
-       return `${ip}\n${null!==pp&&void 0!==pp?pp:""}`
-     }
- 
-     function Ip(pp) {
-       Op = pp
-     }
+     function qQ() {}
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L691-L694` → after: `L473-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L473-L480) · [Before (L691-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L691-L694)

```diff
-     function Sp(pp) {
-       const ip = Op;
-       return Op = null, null !== ip && ip.key === pp ? ip.settled : null
-     }
+     function TQ() {}
+     TQ.resetWarningCache = qQ, QQ.exports = function() {
+       function QQ(QQ, WQ, XQ, qQ, TQ, zQ) {
+         if (zQ !== wQ) {
+           var sQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw sQ.name = "Invariant Violation", sQ
+         }
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L696-L702` → after: `L482-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L482-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L482-L509) · [Before (L696-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L696-L702)

```diff
-     function xp(pp, ip, cp, Op) {
-       let op = !1;
-       null !== ip && setTimeout((() => {
-         Op() && !op && ip()
-       }), 0), pp.then((pp => {
-         op = !0, cp(pp)
-       }))
+       function WQ() {
+         return QQ
+       }
+       QQ.isRequired = QQ;
+       var XQ = {
+         array: QQ,
+         bigint: QQ,
+         bool: QQ,
+         func: QQ,
+         number: QQ,
+         object: QQ,
+         string: QQ,
+         symbol: QQ,
+         any: QQ,
+         arrayOf: WQ,
+         element: QQ,
+ ... (12 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L705-L709` → after: `L512-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L512-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L512-L520) · [Before (L705-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L705-L709)

```diff
-   9041: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Wp,
-       f: () => Pp,
-       j: () => yp
+   5318: (QQ, WQ, XQ) => {
+     QQ.exports = XQ(5320)()
+   },
+   5328: QQ => {
+     QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
+   },
+   5368: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => dQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L711-L721` → after: `L522-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L522-L523) · [Before (L711-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L711-L721)

```diff
-     var Op = cp(3246),
-       op = cp(2343),
-       Ip = cp(2174),
-       Sp = cp(4739),
-       xp = cp(3607),
-       Lp = cp(9046);
-     let Yp = null;
- 
-     function Dp() {
-       return Promise.all([cp.e(75), cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(160), cp.e(137), cp.e(198), cp.e(140), cp.e(88), cp.e(275), cp.e(64)]).then((() => cp(40873)))
-     }
+     var wQ = function() {
+         if ("undefined" !== typeof Map) return Map;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L723-L725` → after: `L525-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L525-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L525-L579) · [Before (L723-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L723-L725)

```diff
-     function Ap() {
-       Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(90), cp.e(87), cp.e(273), cp.e(191), cp.e(228), cp.e(252), cp.e(275), cp.e(47)]).then((() => cp(41212))).catch((() => {}))
-     }
+         function QQ(QQ, WQ) {
+           var XQ = -1;
+           return QQ.some((function(QQ, wQ) {
+             return QQ[0] === WQ && (XQ = wQ, !0)
+           })), XQ
+         }
+         return function() {
+           function WQ() {
+             this.__entries__ = []
+           }
+           return Object.defineProperty(WQ.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
+             },
+             enumerable: !0,
+             configurable: !0
+ ... (39 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L727-L738` → after: `L581-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L581-L583) · [Before (L727-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L727-L738)

```diff
-     function Pp() {
-       return Sp.b.cancelDownloadForJoin(), (0, xp.c)(), (0, op.e)(), (0, Lp.g)(), (0, Ip.j)(), Ap(), Promise.all([cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(137), cp.e(140), cp.e(59)]).then((() => cp(41270))).then((pp => {
-         let {
-           startJoinLoad: ip
-         } = pp;
-         ip()
-       }), (() => {})), Yp ??= Dp().then((pp => (pp.startWasmPlay(), pp.followPageUiPack((pp => {
-         Op.d.showGamePack(pp)
-       })), pp)), (pp => {
-         throw Yp = null, pp
-       })), Yp
-     }
+             function TQ() {
+               XQ && (XQ = !1, QQ()), wQ && FQ()
+             }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L740-L742` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L585-L587) · [Before (L740-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L740-L742)

```diff
-     function Wp() {
-       return Ap(), cp.e(276).then((() => cp(41273))).catch((() => {})), Dp().then((() => {}))
-     }
+             function sQ() {
+               zQ(TQ)
+             }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L744-L759` → after: `L589-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L589-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L589-L649) · [Before (L744-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L744-L759)

```diff
-     function yp() {
-       return Dp().then((pp => {
-         pp.startWasmPreviews(), pp.prefetchWasmPreviews()
-       }))
-     }
-   },
-   9034: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip,
-       f: () => Sp,
-       h: () => xp,
-       l: () => Yp,
-       o: () => Lp
-     });
-     var Op = cp(195),
-       op = cp(4719);
+             function FQ() {
+               var QQ = Date.now();
+               if (XQ) {
+                 if (QQ - qQ < 2) return;
+                 wQ = !0
+               } else XQ = !0, wQ = !1, setTimeout(sQ, WQ);
+               qQ = QQ
+             }
+             return FQ
+           }(this.refresh.bind(this), 20)
+         }
+         return QQ.prototype.addObserver = function(QQ) {
+           ~this.observers_.indexOf(QQ) || this.observers_.push(QQ), this.connected_ || this.connect_()
+         }, QQ.prototype.removeObserver = function(QQ) {
+           var WQ = this.observers_,
+             XQ = WQ.indexOf(QQ);
+ ... (45 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L762` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L652) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L762)

```diff
-       return Sp(pp) === Op.e.gameOrPluginOnPlayerAuthRejected.code
+       return parseFloat(QQ) || 0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L766` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L656-L659) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L766)

```diff
-       return "object" === typeof pp && null !== pp ? pp.code : void 0
+       for (var WQ = [], XQ = 1; XQ < arguments.length; XQ++) WQ[XQ - 1] = arguments[XQ];
+       return WQ.reduce((function(WQ, XQ) {
+         return WQ + IQ(QQ["border-" + XQ + "-width"])
+       }), 0)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L770-L771` → after: `L663-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L663-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L663-L686) · [Before (L770-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L770-L771)

```diff
-       var ip;
-       return null !== (ip = Object.keys(op.c).find((ip => op.c[ip] === pp))) && void 0 !== ip ? ip : null
+       var WQ = QQ.clientWidth,
+         XQ = QQ.clientHeight;
+       if (!WQ && !XQ) return rQ;
+       var wQ = JQ(QQ).getComputedStyle(QQ),
+         qQ = function(QQ) {
+           for (var WQ = {}, XQ = 0, wQ = ["top", "right", "bottom", "left"]; XQ < wQ.length; XQ++) {
+             var qQ = wQ[XQ],
+               TQ = QQ["padding-" + qQ];
+             WQ[qQ] = IQ(TQ)
+           }
+           return WQ
+         }(wQ),
+         TQ = qQ.left + qQ.right,
+         zQ = qQ.top + qQ.bottom,
+         sQ = IQ(wQ.width),
+         FQ = IQ(wQ.height);
+ ... (8 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L775` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L695-L698) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L775)

```diff
-       return "notWhitelisted" === pp ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       return qQ ? yQ(QQ) ? function(QQ) {
+         var WQ = QQ.getBBox();
+         return DQ(0, 0, WQ.width, WQ.height)
+       }(QQ) : BQ(QQ) : rQ
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L777-L781` → after: `L700-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L700-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/112.js#L700-L707) · [Before (L777-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/112.js#L777-L781)

```diff
-     const Yp = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+ 
+     function DQ(QQ, WQ, XQ, wQ) {
+       return {
+         x: QQ,
+         y: WQ,
+         width: XQ,
+         height: wQ
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/113.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/113.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L2)

```diff
- export const ids = [113];
+ export const ids = [113, 406];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L21` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L5) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L21)

```diff
-   5113: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => yp,
-       f: () => Hp,
-       i: () => Up,
-       l: () => tp
-     });
-     var Op = cp(62),
-       op = cp(5122),
-       Ip = cp(4462),
-       Sp = cp(1387),
-       xp = cp(5146),
-       Lp = cp(1049),
-       Yp = cp.n(Lp),
-       Dp = cp(1372),
-       Ap = cp(1765),
- ... (2 more removed lines; see GitHub link above)
+   5320: (QQ, WQ, XQ) => {
+     var wQ = XQ(5328);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L23-L68` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L7) · [Before (L23-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L23-L68)

```diff
-     function yp(pp) {
-       let {
-         label: ip,
-         onClick: cp,
-         checked: Op,
-         circleInfoText: op,
-         className: xp,
-         disabled: Lp,
-         note: Dp
-       } = pp;
-       return (0, Wp.jsxs)("div", {
-         "aria-disabled": Lp || void 0,
-         "data-pad-focusable": !0,
-         className: Yp()("SettingBox CheckboxContainer", {
-           [xp]: xp,
-           SettingBoxDisabled: Lp
- ... (30 more removed lines; see GitHub link above)
+     function qQ() {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L70-L179` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L9-L14) · [Before (L70-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L70-L179)

```diff
-     function Up(pp) {
-       let {
-         name: ip,
-         onChange: cp,
-         min: op,
-         max: Ip,
-         step: xp,
-         initValue: Lp,
-         circleInfoText: Dp,
-         format: Ap,
-         className: Pp,
-         padStep: yp,
-         disabled: Up = !1,
-         selectableMax: wp,
-         cappedNote: tp,
-         onChangeComplete: Hp
- ... (94 more removed lines; see GitHub link above)
+     function TQ() {}
+     TQ.resetWarningCache = qQ, QQ.exports = function() {
+       function QQ(QQ, WQ, XQ, qQ, TQ, zQ) {
+         if (zQ !== wQ) {
+           var sQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw sQ.name = "Invariant Violation", sQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L181-L234` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L16) · [Before (L181-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L181-L234)

```diff
-       }), []);
-       const Cp = (0, Op.useRef)(!1);
-       return (0, Pp.h)(mp, {
-         adjust: pp => {
-           if (jp) return;
-           const ip = null !== ep && void 0 !== ep ? ep : Math.max(xp, Math.round((Sp - Ip) / 20 / xp) * xp),
-             Op = qp(cp + pp * ip * (Dp ? -1 : 1));
-           Op !== cp && (null === Hp || void 0 === Hp || Hp(), Lp(Op), null === dp || void 0 === dp || dp())
-         },
-         setFraction: pp => {
-           if (jp) return;
-           const ip = qp(Ip + (Dp ? 1 - pp : pp) * (Sp - Ip));
-           ip !== cp && (Cp.current || (Cp.current = !0, null === Hp || void 0 === Hp || Hp()), Lp(ip))
-         },
-         endDrag: () => {
-           Cp.current && (Cp.current = !1, null === dp || void 0 === dp || dp())
- ... (38 more removed lines; see GitHub link above)
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L236-L258` → after: `L18-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L18-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L18-L45) · [Before (L236-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L236-L258)

```diff
-     function Hp(pp) {
-       let {
-         label: ip,
-         options: cp,
-         value: Op,
-         onChange: op,
-         circleInfoText: Ip
-       } = pp;
-       return (0, Wp.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, Wp.jsxs)("div", {
-           className: "SliderText",
-           children: [ip, Ip && (0, Wp.jsx)(Sp.d, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: Ip
-           })]
- ... (7 more removed lines; see GitHub link above)
+       function WQ() {
+         return QQ
+       }
+       QQ.isRequired = QQ;
+       var XQ = {
+         array: QQ,
+         bigint: QQ,
+         bool: QQ,
+         func: QQ,
+         number: QQ,
+         object: QQ,
+         string: QQ,
+         symbol: QQ,
+         any: QQ,
+         arrayOf: WQ,
+         element: QQ,
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L261` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L48-L54) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L261)

```diff
-   6806: (pp, ip, cp) => {
+   5318: (QQ, WQ, XQ) => {
+     QQ.exports = XQ(5320)()
+   },
+   5328: QQ => {
+     QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
+   },
+   6966: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L265-L292` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L58-L64) · [Before (L265-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L265-L292)

```diff
-     var Op = cp(62),
-       op = cp(1543),
-       Ip = cp(6704),
-       Sp = cp(1234),
-       xp = cp(337),
-       Lp = cp(1569),
-       Yp = cp(1361),
-       Dp = cp(1538),
-       Ap = cp(1480),
-       Pp = cp(1387),
-       Wp = cp(1626),
-       yp = cp(2671),
-       Up = cp(2814),
-       wp = cp(4648),
-       vp = cp(1141),
-       tp = cp(1520),
- ... (12 more removed lines; see GitHub link above)
+     var wQ = XQ(1567),
+       qQ = XQ(1507),
+       TQ = XQ(1226),
+       zQ = XQ(6970),
+       sQ = XQ(6957),
+       FQ = XQ(6946),
+       PQ = XQ(1145);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L294-L299` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L66) · [Before (L294-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L294-L299)

```diff
-     function Ep(pp) {
-       let {
-         details: ip,
-         owner: cp,
-         onChanged: op
-       } = pp;
+     function gQ() {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L302-L395` → after: `L69-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L69-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L69-L74) · [Before (L302-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L302-L395)

```diff
-       } = (0, dp.H)(), xp = (0, Dp.useNavigatePreserveSearch)(), {
-         userContext: Lp
-       } = (0, vp.b)(), [Pp, Wp] = (0, Op.useState)(!1), [yp, Up] = (0, Op.useState)(null), [wp, Hp] = (0, Op.useState)(!1), {
-         packId: ep,
-         name: jp,
-         description: Ep,
-         live: Xp
-       } = ip;
-       async function lp(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
-         Wp(!0), Up(null);
-         try {
-           await pp(), ip()
-         } catch (cp) {
-           console.error("Failed to change a shader pack", cp), Up((0, qp.s)(cp, Sp, "shaderPackListing:ownerActionFailed"))
-         } finally {
- ... (78 more removed lines; see GitHub link above)
+       } = (0, TQ.C)(), WQ = (0, wQ.useNavigatePreserveSearch)();
+       return (0, sQ.c)(), (0, PQ.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, PQ.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, PQ.jsx)(qQ.e, {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L397-L448` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L76) · [Before (L397-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L397-L448)

```diff
-               lp((() => tp.b.updateShaderPack(Lp, {
-                 packId: ep,
-                 listed: !cp.listed
-               })))
-             },
-             children: [(0, Mp.jsx)(mp.d, {
-               name: cp.listed ? "eye-slash" : "eye"
-             }), " ", Sp(cp.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
-           }), !cp.isBanned && (0, Mp.jsxs)(Ap.f, {
-             disabled: Pp,
-             onClick: () => {
-               Hp(!wp)
-             },
-             children: [(0, Mp.jsx)(mp.d, {
-               name: "upload"
-             }), " ", Sp("shaderPackListing:uploadVersion")]
- ... (36 more removed lines; see GitHub link above)
+               WQ(FQ.R)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L450-L452` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L78) · [Before (L450-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L450-L452)

```diff
-             onPublished: () => {
-               Hp(!1), op()
-             }
+             children: QQ("shaderPackListing:backToPacks")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L454-L537` → after: `L80-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L80-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L80-L88) · [Before (L454-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L454-L537)

```diff
-         })]
-       })
-     }
-     var Xp = cp(82),
-       lp = cp(1927),
-       Qp = cp(1295),
-       Jp = cp(5149),
-       Bp = cp(1211),
-       Np = cp(6716),
-       Tp = cp(6712),
-       fp = cp(6733);
- 
-     function bp(pp) {
-       let {
-         item: ip
-       } = pp;
- ... (68 more removed lines; see GitHub link above)
+         }), (0, PQ.jsx)("h1", {
+           className: "ShaderPackPublishTitle",
+           children: QQ("shaderPackListing:publishTitle")
+         }), (0, PQ.jsx)(zQ.ShaderPackPublishForm, {
+           existing: null,
+           onPublished: QQ => {
+             WQ((0, FQ.V)(QQ.packId), {
+               replace: !0
+             })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L543-L574` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L110-L113) · [Before (L543-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L543-L574)

```diff
-     function hp(pp) {
-       let {
-         fullUrl: ip,
-         largeUrl: cp,
-         alt: op,
-         onClose: Ip
-       } = pp;
-       const Sp = (0, Op.useRef)(null);
-       return (0, Qp.x)("popup", Sp, Ip), (0, Op.useEffect)((() => {
-         function pp(pp) {
-           "Escape" === pp.key && (pp.stopPropagation(), Ip())
-         }
-         return window.addEventListener("keydown", pp, !0), () => {
-           window.removeEventListener("keydown", pp, !0)
-         }
-       }), [Ip]), (0, Xp.createPortal)((0, Mp.jsxs)("div", {
- ... (16 more removed lines; see GitHub link above)
+     function JQ() {
+       var QQ;
+       const [WQ, XQ] = (0, sQ.d)(PQ, qQ.A[0]);
+       return [null !== (QQ = qQ.A.find((QQ => QQ === WQ))) && void 0 !== QQ ? QQ : qQ.A[0], XQ]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L591-L660` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L116-L119) · [Before (L591-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L591-L660)

```diff
-       function Wp(pp) {
-         Lp((ip => (0, lp.h)(ip + pp, 0, 100)))
-       }
- 
-       function yp(pp) {
-         const ip = pp.currentTarget.getBoundingClientRect();
-         Lp((0, lp.h)((pp.clientX - ip.left) / ip.width * 100, 0, 100))
-       }
-       return (0, Jp.h)(Dp, {
-         adjust: pp => {
-           Wp(pp * ap)
-         },
-         setFraction: pp => {
-           Lp(100 * pp)
-         },
-         endDrag: () => {}
- ... (54 more removed lines; see GitHub link above)
+     function rQ() {
+       (0, wQ.useEffect)((() => () => {
+         window.location.pathname.startsWith(zQ.R) || (0, zQ.l)()
+       }), [])
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L663-L677` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L122-L123) · [Before (L663-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L663-L677)

```diff
-     function Fp(pp) {
-       let {
-         side: ip,
-         onClick: cp,
-         children: Op
-       } = pp;
-       return (0, Mp.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${ip}`,
-         onClick: cp,
-         children: (0, Mp.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: Op
-         })
-       })
+     function IQ() {
+       return (0, sQ.d)(gQ, !1)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L691` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L126) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L691)

```diff
-     function zp(pp) {
+     function jQ() {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L693-L694` → after: `L128-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L128-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L128-L137) · [Before (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L693-L694)

```diff
-         userContext: ip
-       } = (0, vp.b)(), [op, Ip] = (0, Op.useState)(null), [Sp, xp] = (0, Op.useState)(!1), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(null), Pp = null === pp || void 0 === pp ? void 0 : pp.packId, Wp = null === pp || void 0 === pp ? void 0 : pp.sourceHash;
+         userContext: QQ,
+         isUserContextUpdating: WQ
+       } = (0, FQ.c)(), [XQ, qQ] = (0, wQ.useState)(null), zQ = (0, wQ.useRef)(new Set);
+ 
+       function sQ(QQ, WQ) {
+         qQ((XQ => {
+           const wQ = new Set(XQ);
+           return WQ ? wQ.add(QQ) : wQ.delete(QQ), wQ
+         }))
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L696` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L139) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L696)

```diff
-         if (xp(!1), Ap(null), void 0 === Pp) return;
+         if (WQ) return;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L698-L701` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L141-L142) · [Before (L698-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L698-L701)

```diff
-         return Promise.all([(0, Hp.hasUsableWebGpuAdapter)(), (0, rp.f)()]).then((ip => {
-           let [cp, Op] = ip;
-           var op;
-           pp || (Ip(cp), xp((null === Op || void 0 === Op || null === (op = Op.listing) || void 0 === op ? void 0 : op.packId) === Pp && Op.listing.sourceHash === Wp))
+         return TQ.e.getFavouriteShaderPacks(QQ).then((QQ => {
+           XQ || qQ(new Set(QQ))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L703` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L144) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L703)

```diff
-           console.error("Failed to check whether this shader pack can be used", ip), pp || Ip(!1)
+           console.error("Failed to get favourite shader packs", QQ), XQ || qQ(new Set)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L708-L734` → after: `L149-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L149-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L149-L158) · [Before (L708-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L708-L734)

```diff
-         webGpuUsable: op,
-         inUse: Sp,
-         busy: Lp,
-         errorKey: Dp,
-         use: () => {
-           null !== pp && async function(pp) {
-             Yp(!0), Ap(null);
-             try {
-               const {
-                 installListedShaderPack: Op
-               } = await Promise.all([cp.e(78), cp.e(136), cp.e(115)]).then((() => cp(40674))), op = await Op({
-                 packId: pp.packId,
-                 sourceHash: pp.sourceHash,
-                 name: pp.name,
-                 ownerName: pp.ownerName,
-                 description: pp.description
- ... (11 more removed lines; see GitHub link above)
+         isFavourite: QQ => null === XQ ? null : XQ.has(QQ),
+         toggle: function(WQ) {
+           if (null === XQ || zQ.current.has(WQ)) return;
+           zQ.current.add(WQ);
+           const wQ = !XQ.has(WQ);
+           sQ(WQ, wQ), (wQ ? TQ.e.favouriteShaderPack(QQ, WQ) : TQ.e.unfavouriteShaderPack(QQ, WQ)).catch((QQ => {
+             console.error("Failed to change a favourite shader pack", QQ), sQ(WQ, !wQ)
+           })).finally((() => {
+             zQ.current.delete(WQ)
+           }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L740-L768` → after: `L198-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L198-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L198-L203) · [Before (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L740-L768)

```diff
-       let {
-         packUse: ip
-       } = pp;
-       const {
-         t: cp
-       } = (0, dp.H)(), {
-         webGpuUsable: Op,
-         inUse: op,
-         busy: Ip,
-         errorKey: Sp,
-         use: xp
-       } = ip;
-       return (0, Mp.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, Mp.jsxs)(Ap.o, {
-           disabled: !0 !== Op || op,
- ... (13 more removed lines; see GitHub link above)
+       return `${zQ}/${encodeURIComponent(QQ)}`
+     }
+     let PQ = null;
+ 
+     function gQ(QQ) {
+       PQ = QQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L773-L780` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L272-L274) · [Before (L773-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L773-L780)

```diff
-       const {
-         t: ip
-       } = (0, dp.H)(), cp = (0, Dp.useNavigatePreserveSearch)(), {
-         packId: Ip
-       } = (0, op.A)(), {
-         userContext: Sp,
-         isUserContextUpdating: xp
-       } = (0, vp.b)(), [Pp, yp] = (0, Op.useState)(null), [Up, Hp] = (0, Op.useState)(null), [ep, jp] = (0, Op.useState)(0), kp = (0, Op.useRef)(0);
+       const wQ = RQ(WQ);
+       (0, TQ.i)(QQ, GQ, "explore" === WQ.section ? null : WQ.section), (0, TQ.i)(QQ, UQ, WQ.sort === HQ ? null : WQ.sort), (0, TQ.i)(QQ, bQ, wQ === aQ ? null : wQ), (0, TQ.i)(QQ, vQ, WQ.searchQuery), (0, TQ.i)(QQ, dQ, null !== (XQ = DQ(WQ.banned)) && void 0 !== XQ ? XQ : null), ( … [truncated]
+     }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L782-L844` → after: `L276-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L276-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L276-L286) · [Before (L782-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L782-L844)

```diff
-       function mp() {
-         var pp;
-         null !== (pp = (0, Dp.getPreviousLocation)()) && void 0 !== pp && pp.startsWith(qp.R) ? cp(-1) : cp(qp.R)
-       }(0, wp.e)(mp), (0, Np.b)(), (0, Op.useEffect)((() => {
-         if (xp || void 0 === Ip) return;
-         const pp = ++kp.current;
-         Hp(null), tp.b.getShaderPack(Sp, Ip).then((ip => {
-           kp.current === pp && yp(ip)
-         })).catch((ip => {
-           kp.current === pp && (console.error("Failed to get the shader pack", ip), yp(null), Hp({
-             error: ip
-           }))
-         }))
-       }), [Ip, Sp, xp, ep]);
-       const Rp = () => {
-           jp((pp => pp + 1))
- ... (47 more removed lines; see GitHub link above)
+     function iQ(QQ) {
+       const WQ = new URLSearchParams;
+       return hQ(WQ, {
+         section: "explore",
+         sort: HQ,
+         withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
+         withoutFeatures: [],
+         searchQuery: null,
+         pageNumber: 1,
+         banned: "without"
+       }), `${zQ}?${WQ.toString()}`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L848-L866` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L290) · [Before (L848-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L848-L866)

```diff
-       let {
-         item: ip,
-         favourites: cp,
-         packUse: Op
-       } = pp;
-       const op = cp.isFavourite(ip.packId);
-       return (0, Mp.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [Hp.featureFlags.settings.canUseShaderPacks && (0, Mp.jsx)(sp, {
-           packUse: Op
-         }), (0, Mp.jsx)(Ap.x, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             cp.toggle(ip.packId)
-           },
-           isLiked: !0 === op,
- ... (3 more removed lines; see GitHub link above)
+       return RQ(QQ) === aQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L870-L958` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L294) · [Before (L870-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L870-L958)

```diff
-       let {
-         item: ip,
-         ownerPreview: cp,
-         bloxdhubSlug: Op,
-         actions: op
-       } = pp;
-       const {
-         t: xp
-       } = (0, dp.H)(), Lp = (0, Up.o)(), Yp = null === Op ? null : (0, Ip.g)(Op);
-       return (0, Mp.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [ip.description && (0, Mp.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: ip.description
-         }), (0, Mp.jsxs)("div", {
-           className: "ShaderPackFeatureList",
- ... (73 more removed lines; see GitHub link above)
+       return null !== QQ.searchQuery || "with" === QQ.banned || RQ(QQ) !== aQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L962-L966` → after: `L298-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L298-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L298-L326) · [Before (L962-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L962-L966)

```diff
-       let {
-         label: ip,
-         time: cp,
-         now: Op
-       } = pp;
+       return jQ.flatMap((WQ => {
+         const XQ = yQ(QQ, WQ);
+         return "with" === XQ ? [WQ] : "without" === XQ ? [`-${WQ}`] : []
+       })).join(",")
+     }
+     const EQ = {
+         popular: "shaderPackListing:sortPopular",
+         updated: "shaderPackListing:sortUpdated",
+         newest: "shaderPackListing:sortNewest"
+       },
+       CQ = {
+         forest: "shaderPackListing:viewForest",
+         desert: "shaderPackListing:viewDesert",
+         water: "shaderPackListing:viewWater",
+         night: "shaderPackListing:viewNight",
+         cave: "shaderPackListing:viewCave"
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L968-L975` → after: `L328-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L328-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L328-L348) · [Before (L968-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L968-L975)

```diff
-         t: op,
-         selectedLanguage: Ip
-       } = (0, dp.H)(), Sp = new Date(cp);
-       let Lp = Sp.toLocaleDateString();
-       if (Op - cp <= 30 * xp.i) {
-         const pp = (0, dp.p)(Ip.code, "shaderPackListing:timeAgo");
-         Lp = op("shaderPackListing:timeAgo", {
-           time: (0, xp.cb)(pp, cp, Op)
+         pending: zQ
+       } = QQ;
+       if (null === QQ.brokenError || zQ && !zQ.error || TQ.push({
+           tone: "warning",
+           text: qQ("shaderPackListing:ownerBroken"),
+           detail: QQ.brokenError
+         }), null !== zQ && void 0 !== zQ && zQ.error) TQ.push({
+         tone: "warning",
+         text: qQ(WQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, wQ.l)(zQ.error) ? null : zQ.error
+       });
+       else if (zQ) {
+         const QQ = null === zQ.renderNotBefore ? 0 : zQ.renderNotBefore - XQ,
+           wQ = String(Math.ceil(QQ / 6e4)),
+           sQ = qQ(WQ ? QQ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : QQ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: wQ
+ ... (5 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L978-L987` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L351-L355) · [Before (L978-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L978-L987)

```diff
-       return (0, Mp.jsx)(Pp.f, {
-         tooltipInner: Sp.toLocaleString(),
-         children: (0, Mp.jsxs)("div", {
-           children: [(0, Mp.jsx)("dt", {
-             children: ip
-           }), (0, Mp.jsx)("dd", {
-             children: Lp
-           })]
-         })
-       })
+       return QQ.listed || TQ.push({
+         tone: "info",
+         text: qQ("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), TQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L999-L1037` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L359-L363) · [Before (L999-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L999-L1037)

```diff
-       let {
-         options: ip,
-         value: cp,
-         onChange: Op,
-         ariaLabel: Sp,
-         className: xp,
-         reselectable: Lp = !1,
-         keepsFocus: Yp = !1,
-         padTabs: Dp
-       } = pp;
-       const Ap = void 0 !== Dp;
-       return (0, Ip.jsx)("div", {
-         className: op()("SegmentedToggle", xp),
-         role: "group",
-         "aria-label": Sp,
-         "data-pad-tabs": Dp,
- ... (23 more removed lines; see GitHub link above)
+       return Math.max(1, Math.round(QQ / 1024))
+     }
+ 
+     function fQ(QQ, WQ, XQ) {
+       return QQ instanceof qQ.b && QQ.errorMessageForUser ? QQ.errorMessageForUser : WQ(XQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1040` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L366) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1040)

```diff
-   5149: (pp, ip, cp) => {
+   6960: (QQ, WQ, XQ) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1042-L1043` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L368) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1042-L1043)

```diff
-       e: () => Ip,
-       h: () => Sp
+       d: () => TQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1045-L1069` → after: `L370-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L370-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L370-L379) · [Before (L1045-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1045-L1069)

```diff
-     var Op = cp(62);
-     const op = new WeakMap,
-       Ip = pp => {
-         var ip;
-         const cp = pp.closest("[data-pad-slider]");
-         return cp && null !== (ip = op.get(cp)) && void 0 !== ip ? ip : null
-       },
-       Sp = (pp, ip) => {
-         const cp = (0, Op.useRef)(ip);
-         cp.current = ip, (0, Op.useEffect)((() => {
-           if (pp.current) return ((pp, ip) => (op.set(pp, ip), () => {
-             op.get(pp) === ip && op.delete(pp)
-           }))(pp.current, {
-             adjust: pp => {
-               cp.current.adjust(pp)
-             },
- ... (9 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(43);
+ 
+     function TQ(QQ, WQ) {
+       var XQ;
+       const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
+       return [TQ, WQ => {
+         qQ.i.setItem(QQ, WQ), zQ(WQ)
+       }]
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1071` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L381) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1071)

```diff
-   6804: (pp, ip, cp) => {
+   7026: (QQ, WQ, XQ) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1073` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L383) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1073)

```diff
-       e: () => op,
+       b: () => qQ,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1076` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L386) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1076)

```diff
-     var Op = cp(44);
+     var wQ = XQ(43);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1081` → after: `L391-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L391-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/113.js#L391-L470) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/113.js#L1081)

```diff
-       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
+       return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
+     }
+   },
+   6952: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       A: () => wQ,
+       E: () => rQ,
+       G: () => gQ,
+       J: () => GQ,
+       K: () => JQ,
+       M: () => PQ,
+       c: () => jQ,
+       f: () => yQ,
+       i: () => BQ,
+       j: () => IQ,
+       l: () => pQ,
+ ... (64 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/114.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/114.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L4-L7)

```diff
-   5173: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Dp,
-       e: () => Yp
+   9276: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => pW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L9-L18` → after: `L8-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L8-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L8-L100) · [Before (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L9-L18)

```diff
-     var Op = cp(62),
-       op = cp(1480),
-       Ip = cp(1201),
-       Sp = cp(104),
-       xp = cp(3235),
-       Lp = cp(1112);
- 
-     function Yp() {
-       return !(0, Sp.isMobile)()
-     }
+     var wQ = XQ(1581),
+       qQ = XQ(26),
+       TQ = XQ(4973),
+       zQ = XQ(61),
+       sQ = XQ(1498);
+     var FQ = XQ(2003),
+       PQ = XQ(1567),
+       gQ = XQ(1404),
+       JQ = XQ(1226),
+       rQ = XQ(193),
+       IQ = XQ(231),
+       jQ = XQ(1049),
+       BQ = XQ(1057),
+       yQ = XQ(1257),
+       VQ = XQ(2447),
+       DQ = XQ(1548),
+ ... (77 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L22-L24` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L104-L105) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L22-L24)

```diff
-         disabled: ip,
-         openFolderPicker: cp,
-         onFiles: Sp
+         onApply: WQ,
+         onSkip: XQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L28-L39` → after: `L109-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L109-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L109-L195) · [Before (L28-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L28-L39)

```diff
-       } = (0, Ip.H)(), Ap = (0, Op.useRef)(null);
-       return (0, Lp.jsxs)("div", {
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
-         children: [(0, Lp.jsx)("input", {
-           ref: Ap,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(pp) {
-             const ip = Array.from(pp.target.files);
-             pp.target.value = "", Sp(ip)
+       } = (0, JQ.C)();
+       return (0, zQ.useEffect)((() => {
+         xQ.g.skipPlayWait()
+       }), []), (0, YQ.jsx)(tQ.g, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, YQ.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [wQ("customTexturePack:downloadPrompt"), (0, YQ.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: wQ("customTexturePack:authorWarning")
+           }), (0, YQ.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: wQ("customTexturePack:existingPackSaved")
+           })]
+         }),
+ ... (71 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L41-L46` → after: `L197-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L197-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L197-L213) · [Before (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L41-L46)

```diff
-         }), Yp() && (0, Lp.jsx)(op.f, {
-           disabled: ip,
-           onClick: cp,
-           children: Dp("general:chooseFolder")
-         }), (0, Lp.jsx)(op.f, {
-           disabled: ip,
+         },
+         onSkip: gQ
+       }) : "downloading" === qQ ? (0, YQ.jsx)(tQ.g, {
+         icon: "download",
+         title: "customTexturePack:downloading",
+         subtitle: (0, YQ.jsx)("div", {
+           className: "CustomTexturePackDownloaderLogoLoaderContainer",
+           children: (0, YQ.jsx)(oQ.e, {
+             showFace: !0
+           })
+         })
+       }) : "error" === qQ ? (0, YQ.jsx)(tQ.g, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: sQ,
+         confirm: {
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L48-L51` → after: `L215-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L215-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L215-L606) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L48-L51)

```diff
-             (0, xp.h)(Ap.current)
-           },
-           children: Dp("general:chooseZip")
-         })]
+             window.location.reload()
+           }
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: gQ
+         }
+       }) : "refused" === qQ ? (0, YQ.jsx)(tQ.g, {
+         icon: "face-worried",
+         title: "customTexturePack:cantApplyTitle",
+         subtitle: "customTexturePack:gamePackHasExternalUrls",
+         confirm: {
+           text: "general:continue",
+           onClick: gQ
+         }
+       }) : null
+ ... (376 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L55` → after: `L610-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L610-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L610-L659) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L55)

```diff
-   5156: (pp, ip, cp) => {
+   5340: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ
+     });
+     var wQ = XQ(1238);
+     async function qQ(QQ) {
+       const WQ = await fetch(`${wQ.clientSideServerUrls.s3Url}/${QQ}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === WQ.status || 403 === WQ.status) return null;
+       if (!WQ.ok) throw new Error(`Failed to download the texture pack (${WQ.status})`);
+       return await WQ.json()
+     }
+   },
+ ... (34 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L61-L62` → after: `L664-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L664-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L664-L681) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L61-L62)

```diff
-     var Op = cp(5159);
-     const op = [pp => pp.strict ? "strict" : "nonStrict", pp => pp.program];
+     let wQ = !1;
+ 
+     function qQ() {
+       wQ = !0
+     }
+ 
+     function TQ() {
+       return wQ
+     }
+   },
+   9306: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => sQ,
+       h: () => qQ,
+       l: () => TQ,
+       o: () => zQ
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L65-L108` → after: `L684-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L684-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L684-L702) · [Before (L65-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L65-L108)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const Op = {};
-       for (const op in cp) Op[op] = `\0${op}\0`;
-       return pp(ip, Op).replace(/\0(\w+)\0/g, ((pp, ip) => cp[ip]))
-     }
- 
-     function Sp(pp) {
-       return null === pp.file ? null : pp.line > 0 ? `${pp.file}:${pp.line}` : pp.file
-     }
- 
-     function xp(pp) {
-       const ip = new Map(pp.map((pp => [Lp(pp).join("."), pp])));
-       if (0 === ip.size) return [];
-       const cp = Dp([...ip.values()]);
-       return 0 === cp[0].length ? [] : cp
-     }
- ... (28 more removed lines; see GitHub link above)
+       return `${WQ}\n${null!==QQ&&void 0!==QQ?QQ:""}`
+     }
+ 
+     function TQ(QQ) {
+       wQ = QQ
+     }
+ 
+     function zQ(QQ) {
+       const WQ = wQ;
+       return wQ = null, null !== WQ && WQ.key === QQ ? WQ.settled : null
+     }
+ 
+     function sQ(QQ, WQ, XQ, wQ) {
+       let qQ = !1;
+       null !== WQ && setTimeout((() => {
+         wQ() && !qQ && WQ()
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L111-L113` → after: `L705-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L705-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L705-L709) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L111-L113)

```diff
-   6743: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       ShaderPackPublishForm: () => Hp
+   9293: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => IQ,
+       g: () => rQ,
+       i: () => jQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L115-L331` → after: `L711-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L711-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L711-L747) · [Before (L115-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L115-L331)

```diff
-     var Op = cp(62),
-       op = cp(6704),
-       Ip = cp(203),
-       Sp = cp(5167),
-       xp = cp(1060),
-       Lp = cp(1480),
-       Yp = cp(1692),
-       Dp = cp(1141),
-       Ap = cp(6750),
-       Pp = cp(6752),
-       Wp = cp(1520),
-       yp = cp(1201),
-       Up = cp(6758),
-       wp = cp(6792),
-       vp = cp(6698),
-       tp = cp(1112);
- ... (201 more removed lines; see GitHub link above)
+     var wQ = XQ(3424),
+       qQ = XQ(2370),
+       TQ = XQ(2211),
+       zQ = XQ(4967),
+       sQ = XQ(3751),
+       FQ = XQ(9295);
+     let PQ = null;
+ 
+     function gQ() {
+       return Promise.all([XQ.e(77), XQ.e(80), XQ.e(93), XQ.e(219), XQ.e(218), XQ.e(162), XQ.e(203), XQ.e(139), XQ.e(142), XQ.e(91), XQ.e(279), XQ.e(66)]).then((() => XQ(40897)))
+     }
+ 
+     function JQ() {
+       Promise.all([XQ.e(75), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(93), XQ.e(90), XQ.e(277), XQ.e(193), XQ.e(232), XQ.e(256), XQ.e(279), XQ.e(49)]).then((() => XQ(41206))).catch((() => {}))
+     }
+ 
+ ... (21 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L334` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L750) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L334)

```diff
-   5159: (pp, ip, cp) => {
+   9285: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L336` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L752) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L336)

```diff
-       e: () => Op.f,
+       e: () => TQ,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L338` → after: `L754-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L754-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L754-L756) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L338)

```diff
-       k: () => Op.o
+       j: () => sQ,
+       k: () => PQ,
+       n: () => FQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L340-L525` → after: `L758-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L758-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/114.js#L758-L781) · [Before (L340-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/114.js#L340-L525)

```diff
-     var Op = cp(5167);
-     const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
-       strict: pp,
-       program: ip
-     })))))
-   },
-   5167: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => xp,
-       e: () => Sp,
-       f: () => Op,
-       j: () => Up,
-       m: () => Ap,
-       o: () => op,
-       p: () => Ip,
-       s: () => Yp,
- ... (170 more removed lines; see GitHub link above)
+     var wQ = XQ(231),
+       qQ = XQ(4948);
+ 
+     function TQ(QQ) {
+       return zQ(QQ) === wQ.e.gameOrPluginOnPlayerAuthRejected.code
+     }
+ 
+     function zQ(QQ) {
+       return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
+     }
+ 
+     function sQ(QQ) {
+       var WQ;
+       return null !== (WQ = Object.keys(qQ.d).find((WQ => qQ.d[WQ] === QQ))) && void 0 !== WQ ? WQ : null
+     }
+ 
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/115.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/115.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115, 118, 138, 139];
+ export const ids = [115];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L4-L16` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L4) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L4-L16)

```diff
-   5159: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op.f,
-       g: () => op,
-       k: () => Op.o
-     });
-     var Op = cp(5167);
-     const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
-       strict: pp,
-       program: ip
-     })))))
-   },
-   40674: (pp, ip, cp) => {
+   5349: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L19` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L7-L9) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L19)

```diff
-       installListedShaderPack: () => Dp
+       g: () => pQ,
+       h: () => BQ,
+       i: () => DQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L21-L38` → after: `L11-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L11-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L11-L67) · [Before (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L21-L38)

```diff
-     var Op = cp(6704),
-       op = cp(5167),
-       Ip = cp(1211),
-       Sp = cp(6758),
-       xp = cp(5159),
-       Lp = cp(6798),
-       Yp = cp(6792);
-     async function Dp(pp) {
-       const ip = await (0, Sp.loadPageShaderPackCompiler)();
-       if (null === ip) return {
-         kind: "failed",
-         reason: "compiler"
-       };
-       const cp = await Ap(pp, ip);
-       return "failed" === cp.kind ? cp : await (0, Lp.saveShaderPack)(cp.stored, ip) ? ((0, Lp.markShaderPackChangePending)(), cp) : {
-         kind: "failed",
- ... (2 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(5351),
+       TQ = XQ(4677),
+       zQ = XQ(1416),
+       sQ = XQ(5376),
+       FQ = XQ(1081),
+       PQ = XQ.n(FQ),
+       gQ = XQ(1404),
+       JQ = XQ(1802),
+       rQ = XQ(5378),
+       IQ = XQ(1145);
+ 
+     function jQ(QQ) {
+       let {
+         label: WQ,
+         onClick: XQ,
+ ... (41 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L40-L56` → after: `L69-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L69-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L69-L179) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L40-L56)

```diff
-     async function Ap(pp, ip) {
-       const cp = await async function(pp) {
-         let {
-           packId: ip,
-           sourceHash: cp
-         } = pp;
-         try {
-           const pp = await fetch(`${Ip.clientSideServerUrls.s3Url}/${(0,Op.S)(ip,cp)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!pp.ok) return console.error(`Failed to download shader pack ${ip} (${pp.status})`), null;
-           const op = await pp.json();
-           return "object" !== typeof op || null === op ? (console.error(`Shader pack ${ip}'s source isn't an object`), null) : op
-         } catch (op) {
- ... (1 more removed lines; see GitHub link above)
+ 
+     function BQ(QQ) {
+       let {
+         name: WQ,
+         onChange: XQ,
+         min: qQ,
+         max: TQ,
+         step: sQ,
+         initValue: FQ,
+         circleInfoText: gQ,
+         format: JQ,
+         className: rQ,
+         padStep: jQ,
+         disabled: BQ = !1,
+         selectableMax: yQ,
+         cappedNote: DQ,
+ ... (95 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L58-L83` → after: `L181-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L181-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L181-L188) · [Before (L58-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L58-L83)

```diff
-       }(pp);
-       if (null === cp) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, xp.k)(cp.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const Sp = (0, op.s)(cp.files);
-       if ("string" === typeof Sp) return console.error(`A listed shader pack breaks the pack rules: ${Sp}`), {
-         kind: "failed",
-         reason: "invalid"
-       };
-       const Dp = await (0, Yp.h)(ip, Sp);
-       if (!1 === (null === Dp || void 0 === Dp ? void 0 : Dp.ok)) return {
- ... (10 more removed lines; see GitHub link above)
+       }), []);
+       const hQ = (0, wQ.useRef)(!1);
+       return (0, rQ.i)(dQ, {
+         adjust: QQ => {
+           if (bQ) return;
+           const WQ = null !== UQ && void 0 !== UQ ? UQ : Math.max(sQ, Math.round((zQ - TQ) / 20 / sQ) * sQ),
+             wQ = aQ(XQ + QQ * WQ * (gQ ? -1 : 1));
+           wQ !== XQ && (null === pQ || void 0 === pQ || pQ(), FQ(wQ), null === GQ || void 0 === GQ || GQ())
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L85-L91` → after: `L190-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L190-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L190-L220) · [Before (L85-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L85-L91)

```diff
-         files: Sp
-       };
-       return {
-         kind: "loaded",
-         stored: (0, Lp.toStoredShaderPack)(Ap, Dp, {
-           packId: pp.packId,
-           sourceHash: pp.sourceHash
+         setFraction: QQ => {
+           if (bQ) return;
+           const WQ = aQ(TQ + (gQ ? 1 - QQ : QQ) * (zQ - TQ));
+           WQ !== XQ && (hQ.current || (hQ.current = !0, null === pQ || void 0 === pQ || pQ()), FQ(WQ))
+         },
+         endDrag: () => {
+           hQ.current && (hQ.current = !1, null === GQ || void 0 === GQ || GQ())
+         }
+       }), (0, IQ.jsx)("div", {
+         ref: vQ,
+         style: {
+           display: "contents"
+         },
+         children: (0, IQ.jsx)(qQ.c, {
+           value: XQ,
+           min: TQ,
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L93` → after: `L222-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L222-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L222-L258) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L93)

```diff
-       }
+       })
+     }
+     async function DQ() {
+       const QQ = gQ.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await QQ.getResult() && (0, JQ.reloadBloxd)()
+     }
+ 
+     function pQ(QQ) {
+       let {
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L96` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L261) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L96)

```diff
-   6798: (pp, ip, cp) => {
+   7028: (QQ, WQ, XQ) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L98-L111` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L263) · [Before (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L98-L111)

```diff
-       forgetShaderPackActiveHint: () => Cp,
-       isOtherApiVersion: () => mp,
-       isShaderPackActive: () => dp,
-       isShaderPackChangePending: () => kp,
-       markShaderPackChangePending: () => jp,
-       pageShaderPackValidationVersion: () => Rp,
-       reconcileStoredShaderPackHint: () => Mp,
-       removeShaderPack: () => Hp,
-       replaceShaderPack: () => wp,
-       saveShaderPack: () => Up,
-       shaderPackNeedsCheck: () => qp,
-       storedPackOutcome: () => ep,
-       storedShaderPackFiles: () => Pp,
-       toStoredShaderPack: () => Ap
+       default: () => KQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L113-L120` → after: `L265-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L265-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L265-L292) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L113-L120)

```diff
-     var Op = cp(5167),
-       op = cp(5159),
-       Ip = cp(44),
-       Sp = cp(3564),
-       xp = cp(6804),
-       Lp = cp(6772);
-     const Yp = "shaderPackChangePending";
-     let Dp = null;
+     var wQ = XQ(61),
+       qQ = XQ(1581),
+       TQ = XQ(6952),
+       zQ = XQ(1257),
+       sQ = XQ(402),
+       FQ = XQ(1607),
+       PQ = XQ(1391),
+       gQ = XQ(1567),
+       JQ = XQ(1507),
+       rQ = XQ(1416),
+       IQ = XQ(1676),
+       jQ = XQ(2756),
+       BQ = XQ(2898),
+       yQ = XQ(4875),
+       VQ = XQ(1162),
+       DQ = XQ(1548),
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L122-L128` → after: `L294-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L294-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L294-L318) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L122-L128)

```diff
-     function Ap(pp, ip, cp) {
-       return {
-         manifest: pp.manifest,
-         files: (0, Op.v)(pp.files),
-         validation: ip,
-         ...cp && {
-           listing: cp
+     function iQ(QQ) {
+       let {
+         details: WQ,
+         owner: XQ,
+         onChanged: qQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, GQ.C)(), sQ = (0, gQ.useNavigatePreserveSearch)(), {
+         userContext: FQ
+       } = (0, VQ.c)(), [rQ, IQ] = (0, wQ.useState)(!1), [jQ, BQ] = (0, wQ.useState)(null), [yQ, pQ] = (0, wQ.useState)(!1), {
+         packId: UQ,
+         name: bQ,
+         description: iQ,
+         live: cQ
+       } = WQ;
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L134-L137` → after: `L467-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L467-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L467-L540) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L134-L137)

```diff
-       return Object.keys(pp.files).map((ip => ({
-         path: ip,
-         source: pp.files[ip]
-       })))
+       let {
+         item: WQ
+       } = QQ;
+       const {
+         t: XQ
+       } = (0, GQ.C)(), [qQ] = (0, uQ.j)(), [zQ, sQ] = (0, wQ.useState)(qQ), [FQ, PQ] = (0, wQ.useState)(!1), [gQ, JQ] = (0, wQ.useState)(!1), {
+         s3Url: rQ
+       } = CQ.clientSideServerUrls, {
+         width: IQ,
+         height: jQ
+       } = TQ.p.large, BQ = (0, TQ.r)(rQ, WQ, zQ, "large"), {
+         renderVersion: yQ
+       } = WQ;
+       return (0, lQ.jsxs)("div", {
+         className: "ShaderPackPreviews",
+         children: [(0, lQ.jsx)(kQ.e, {
+ ... (58 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L142-L162` → after: `L544-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L544-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L544-L574) · [Before (L142-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L142-L162)

```diff
-       const ip = Wp.then(pp);
-       return Wp = ip.catch((() => {})), ip
-     }
- 
-     function Up(pp, ip) {
-       return yp((() => vp(pp, ip)))
-     }
- 
-     function wp(pp, ip, cp) {
-       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
-     }
-     async function vp(pp, ip) {
-       const cp = await Ip.g.setItem(xp.e, pp);
-       return cp && Ep(pp, ip), cp
-     }
-     async function tp() {
- ... (5 more removed lines; see GitHub link above)
+       let {
+         fullUrl: WQ,
+         largeUrl: XQ,
+         alt: qQ,
+         onClose: TQ
+       } = QQ;
+       const zQ = (0, wQ.useRef)(null);
+       return (0, RQ.k)("popup", zQ, TQ), (0, wQ.useEffect)((() => {
+         function QQ(QQ) {
+           "Escape" === QQ.key && (QQ.stopPropagation(), TQ())
+         }
+         return window.addEventListener("keydown", QQ, !0), () => {
+           window.removeEventListener("keydown", QQ, !0)
+         }
+       }), [TQ]), (0, cQ.createPortal)((0, lQ.jsxs)("div", {
+         ref: zQ,
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L165-L167` → after: `L578-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L578-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L578-L589) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L165-L167)

```diff
-     function dp(pp, ip) {
-       return "active" === ep(pp, ip).kind
-     }
+     function oQ(QQ) {
+       let {
+         item: WQ,
+         packUrl: XQ,
+         baselineUrl: qQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, GQ.C)(), [sQ, FQ] = (0, wQ.useState)(50), PQ = (0, wQ.useRef)(!1), gQ = (0, wQ.useRef)(null), {
+         width: JQ,
+         height: rQ
+       } = TQ.p.large;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L169-L190` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L591-L592) · [Before (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L169-L190)

```diff
-     function ep(pp, ip) {
-       var cp;
-       return null === pp ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : mp(pp) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : qp(pp, ip) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : pp.validation.ok ? {
-         kind: "active"
- ... (6 more removed lines; see GitHub link above)
+       function IQ(QQ) {
+         FQ((WQ => (0, AQ.e)(WQ + QQ, 0, 100)))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L194-L199` → after: `L595-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L595-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L595-L660) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L194-L199)

```diff
-     function jp() {
-       Ip.l.setItem(Yp, performance.timeOrigin)
-     }
- 
-     function kp() {
-       return Ip.l.getItem(Yp) === performance.timeOrigin
+       function jQ(QQ) {
+         const WQ = QQ.currentTarget.getBoundingClientRect();
+         FQ((0, AQ.e)((QQ.clientX - WQ.left) / WQ.width * 100, 0, 100))
+       }
+       return (0, EQ.i)(gQ, {
+         adjust: QQ => {
+           IQ(QQ * tQ)
+         },
+         setFraction: QQ => {
+           FQ(100 * QQ)
+         },
+         endDrag: () => {}
+       }), (0, lQ.jsxs)("div", {
+         ref: gQ,
+         className: "ShaderPackCompare",
+         "data-pad-slider": "",
+ ... (50 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L203` → after: `L664-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L664-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L664-L677) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L203)

```diff
-       return !(0, op.k)(pp.manifest.apiVersion)
+       let {
+         side: WQ,
+         onClick: XQ,
+         children: wQ
+       } = QQ;
+       return (0, lQ.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${WQ}`,
+         onClick: XQ,
+         children: (0, lQ.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: wQ
+         })
+       })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L207-L212` → after: `L692-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L692-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L692-L736) · [Before (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L207-L212)

```diff
-       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
-     }
- 
-     function qp(pp, ip) {
-       var cp;
-       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
+       const {
+         userContext: WQ
+       } = (0, VQ.c)(), [qQ, TQ] = (0, wQ.useState)(null), [zQ, sQ] = (0, wQ.useState)(!1), [FQ, PQ] = (0, wQ.useState)(!1), [gQ, JQ] = (0, wQ.useState)(null), rQ = null === QQ || void 0 === QQ ? void 0 : QQ.packId, IQ = null === QQ || void 0 === QQ ? void 0 : QQ.sourceHash;
+       return (0, wQ.useEffect)((() => {
+         if (sQ(!1), JQ(null), void 0 === rQ) return;
+         let QQ = !1;
+         return Promise.all([(0, pQ.hasUsableWebGpuAdapter)(), (0, YQ.f)()]).then((WQ => {
+           let [XQ, wQ] = WQ;
+           var qQ;
+           QQ || (TQ(XQ), sQ((null === wQ || void 0 === wQ || null === (qQ = wQ.listing) || void 0 === qQ ? void 0 : qQ.packId) === rQ && wQ.listing.sourceHash === IQ))
+         })).catch((WQ => {
+           console.error("Failed to check whether this shader pack can be used", WQ), QQ || TQ(!1)
+         })), () => {
+           QQ = !0
+         }
+       }), [rQ, IQ]), {
+ ... (29 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L216-L218` → after: `L740-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L740-L768) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L216-L218)

```diff
-       return yp((async () => {
-         Ep(await (0, xp.f)(!0), pp)
-       }))
+       let {
+         packUse: WQ
+       } = QQ;
+       const {
+         t: XQ
+       } = (0, GQ.C)(), {
+         webGpuUsable: wQ,
+         inUse: qQ,
+         busy: TQ,
+         errorKey: zQ,
+         use: sQ
+       } = WQ;
+       return (0, lQ.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, lQ.jsxs)(JQ.s, {
+           disabled: !0 !== wQ || qQ,
+ ... (13 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L313-L325` → after: `L773-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L773-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L773-L780) · [Before (L313-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L313-L325)

```diff
-       if (!(0, Op.shaderPackNeedsCheck)(pp, ip) || (0, Op.isOtherApiVersion)(pp)) return pp;
-       const op = await xp(ip, (0, Op.storedShaderPackFiles)(pp));
-       if (!op) return pp;
-       const Ip = !1 === (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) && !pp.validation.fromRecheck,
-         Sp = {
-           ...pp,
-           validation: Ip ? op : {
-             ...op,
-             fromRecheck: !0
-           }
-         };
-       return await (0, Op.replaceShaderPack)(pp, Sp, ip) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Sp
-     }
+       const {
+         t: WQ
+       } = (0, GQ.C)(), XQ = (0, gQ.useNavigatePreserveSearch)(), {
+         packId: TQ
+       } = (0, qQ.E)(), {
+         userContext: zQ,
+         isUserContextUpdating: sQ
+       } = (0, VQ.c)(), [rQ, jQ] = (0, wQ.useState)(null), [BQ, pQ] = (0, wQ.useState)(null), [UQ, bQ] = (0, wQ.useState)(0), vQ = (0, wQ.useRef)(0);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L327-L334` → after: `L782-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L782-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L782-L844) · [Before (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L327-L334)

```diff
-     function Yp(pp, ip, cp) {
-       return {
-         headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
-         ok: 0 === ip.length,
-         errors: ip.slice(0, Sp),
-         moreErrors: Math.max(0, ip.length - Sp),
-         offInStrict: cp
-       }
+       function dQ() {
+         var QQ;
+         null !== (QQ = (0, gQ.getPreviousLocation)()) && void 0 !== QQ && QQ.startsWith(aQ.R) ? XQ(-1) : XQ(aQ.R)
+       }(0, yQ.b)(dQ), (0, uQ.c)(), (0, wQ.useEffect)((() => {
+         if (sQ || void 0 === TQ) return;
+         const QQ = ++vQ.current;
+         pQ(null), DQ.e.getShaderPack(zQ, TQ).then((WQ => {
+           vQ.current === QQ && jQ(WQ)
+         })).catch((WQ => {
+           vQ.current === QQ && (console.error("Failed to get the shader pack", WQ), jQ(null), pQ({
+             error: WQ
+           }))
+         }))
+       }), [TQ, zQ, sQ, UQ]);
+       const HQ = () => {
+           bQ((QQ => QQ + 1))
+ ... (47 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L353` → after: `L848-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L848-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L848-L866) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L353)

```diff
-       return pp === Op
+       let {
+         item: WQ,
+         favourites: XQ,
+         packUse: wQ
+       } = QQ;
+       const qQ = XQ.isFavourite(WQ.packId);
+       return (0, lQ.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [pQ.featureFlags.settings.canUseShaderPacks && (0, lQ.jsx)(OQ, {
+           packUse: wQ
+         }), (0, lQ.jsx)(JQ.C, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             XQ.toggle(WQ.packId)
+           },
+           isLiked: !0 === qQ,
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L357` → after: `L870-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L870-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L870-L958) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L357)

```diff
-       return [...pp.features]
+       let {
+         item: WQ,
+         ownerPreview: XQ,
+         bloxdhubSlug: wQ,
+         actions: qQ
+       } = QQ;
+       const {
+         t: sQ
+       } = (0, GQ.C)(), FQ = (0, BQ.q)(), PQ = null === wQ ? null : (0, TQ.f)(wQ);
+       return (0, lQ.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [WQ.description && (0, lQ.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: WQ.description
+         }), (0, lQ.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+ ... (73 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L364-L370` → after: `L962-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L962-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L962-L975) · [Before (L364-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L364-L370)

```diff
-       if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
-       const ip = [];
-       for (const [cp, Op] of Object.entries(pp)) {
-         if ("string" !== typeof Op) return `${cp} isn't text.`;
-         ip.push({
-           path: cp,
-           source: Op
+       let {
+         label: WQ,
+         time: XQ,
+         now: wQ
+       } = QQ;
+       const {
+         t: qQ,
+         selectedLanguage: TQ
+       } = (0, GQ.C)(), zQ = new Date(XQ);
+       let FQ = zQ.toLocaleDateString();
+       if (wQ - XQ <= 30 * sQ.i) {
+         const QQ = (0, GQ.n)(TQ.code, "shaderPackListing:timeAgo");
+         FQ = qQ("shaderPackListing:timeAgo", {
+           time: (0, sQ.bb)(QQ, XQ, wQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L373-L408` → after: `L978-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L978-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L978-L987) · [Before (L373-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L373-L408)

```diff
-       return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
-         function(pp) {
-           if (0 === pp.length) return "The pack has no .wgsl files.";
-           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
-           const ip = new Set;
-           for (const {
-               path: cp
-             }
-             of pp) {
-             const pp = Wp(cp);
-             if (null !== pp) return pp;
-             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
-             ip.add(cp)
-           }
-           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
-         }(ip) ?? ip
- ... (20 more removed lines; see GitHub link above)
+       return (0, lQ.jsx)(rQ.e, {
+         tooltipInner: zQ.toLocaleString(),
+         children: (0, lQ.jsxs)("div", {
+           children: [(0, lQ.jsx)("dt", {
+             children: WQ
+           }), (0, lQ.jsx)("dd", {
+             children: FQ
+           })]
+         })
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L412-L415` → after: `L999-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L999-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L999-L1037) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L412-L415)

```diff
-       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
-       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
-       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
-       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
+       let {
+         options: WQ,
+         value: XQ,
+         onChange: wQ,
+         ariaLabel: zQ,
+         className: sQ,
+         reselectable: FQ = !1,
+         keepsFocus: PQ = !1,
+         padTabs: gQ
+       } = QQ;
+       const JQ = void 0 !== gQ;
+       return (0, TQ.jsx)("div", {
+         className: qQ()("SegmentedToggle", sQ),
+         role: "group",
+         "aria-label": zQ,
+         "data-pad-tabs": gQ,
+ ... (23 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L417-L494` → after: `L1039-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L1039-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L1039-L1066) · [Before (L417-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L417-L494)

```diff
-     const yp = /^(.*)\[rot\[([1-4])$/;
- 
-     function Up(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const Op = new Map;
-       ip.forEach(((pp, ip) => {
-         let {
-           numAnimStates: cp,
-           animStartIdx: op
-         } = pp;
-         for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
-       }));
-       const op = Object.entries(pp),
-         Ip = new Map;
-       for (const [Up, wp] of op) {
-         const pp = yp.exec(Up);
- ... (62 more removed lines; see GitHub link above)
+   },
+   5378: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => TQ,
+       i: () => zQ
+     });
+     var wQ = XQ(61);
+     const qQ = new WeakMap,
+       TQ = QQ => {
+         var WQ;
+         const XQ = QQ.closest("[data-pad-slider]");
+         return XQ && null !== (WQ = qQ.get(XQ)) && void 0 !== WQ ? WQ : null
+       },
+       zQ = (QQ, WQ) => {
+         const XQ = (0, wQ.useRef)(WQ);
+         XQ.current = WQ, (0, wQ.useEffect)((() => {
+ ... (12 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L496-L515` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/115.js#L1068) · [Before (L496-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/115.js#L496-L515)

```diff
-         } else Pp.set(cp, Up + 1)
-       }
-       for (const yp of Pp.keys()) Wp.delete(yp);
-       for (const [yp, Up] of cp) {
-         const pp = Pp.get(Up);
-         void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
-       }
-       return {
-         named: [...Pp].sort(((pp, ip) => {
-           let [cp] = pp, [Op] = ip;
-           return cp < Op ? -1 : cp > Op ? 1 : 0
-         })).map((pp => {
-           let [ip, cp] = pp;
-           return {
-             name: ip,
-             id: cp
- ... (4 more removed lines; see GitHub link above)
+         }), [QQ])
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/116.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/116.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116, 118, 138, 139];
+ export const ids = [116];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L4)

```diff
-   5159: (pp, ip, cp) => {
+   5398: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L6-L8)

```diff
-       e: () => Op.f,
-       g: () => op,
-       k: () => Op.o
+       d: () => gQ,
+       e: () => PQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L10` → after: `L9-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L9-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L9-L340) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L10)

```diff
-     var Op = cp(5167);
+     var wQ = XQ(61),
+       qQ = XQ(1507),
+       TQ = XQ(1226),
+       zQ = XQ(105),
+       sQ = XQ(3408),
+       FQ = XQ(1145);
+ 
+     function PQ() {
+       return !(0, zQ.isMobile)()
+     }
+ 
+     function gQ(QQ) {
+       let {
+         disabled: WQ,
+         openFolderPicker: XQ,
+         onFiles: zQ
+ ... (316 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L16-L151` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L346) · [Before (L16-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L16-L151)

```diff
-   6798: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       forgetShaderPackActiveHint: () => Cp,
-       isOtherApiVersion: () => mp,
-       isShaderPackActive: () => dp,
-       isShaderPackChangePending: () => kp,
-       markShaderPackChangePending: () => jp,
-       pageShaderPackValidationVersion: () => Rp,
-       reconcileStoredShaderPackHint: () => Mp,
-       removeShaderPack: () => Hp,
-       replaceShaderPack: () => wp,
-       saveShaderPack: () => Up,
-       shaderPackNeedsCheck: () => qp,
-       storedPackOutcome: () => ep,
-       storedShaderPackFiles: () => Pp,
-       toStoredShaderPack: () => Ap
- ... (120 more removed lines; see GitHub link above)
+   5396: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L153-L192` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L348) · [Before (L153-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L153-L192)

```diff
-       e: () => op,
-       f: () => Ip
-     });
-     var Op = cp(44);
-     const op = "shaderPack";
-     async function Ip() {
-       var pp;
-       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
-     }
-   },
-   6772: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       loadShaderPackTextures: () => Sp,
-       shaderPackTextures: () => xp
-     });
- ... (24 more removed lines; see GitHub link above)
+       d: () => sQ,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L194` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L350-L351) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L194)

```diff
-       j: () => Up,
+       i: () => wQ,
+       l: () => BQ,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L196-L199` → after: `L353-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L353-L356) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L196-L199)

```diff
-       o: () => op,
-       p: () => Ip,
-       s: () => Yp,
-       v: () => Dp,
+       n: () => qQ,
+       r: () => TQ,
+       t: () => PQ,
+       w: () => gQ,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L219` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L376) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L219)

```diff
-         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L228` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L385) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L228)

```diff
-           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
+           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L236` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L393) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L236)

```diff
-             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
+             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L239` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L396) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L239)

```diff
-           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
+           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L264-L267` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L421-L424) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L264-L267)

```diff
-       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
-       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
-       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
-       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
+       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
+       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
+       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
+       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L300` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/116.js#L457) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/116.js#L300)

```diff
-           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
+           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L2)

```diff
- export const ids = [117, 118, 138];
+ export const ids = [117, 120, 140, 141];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L4)

```diff
-   5159: (pp, ip, cp) => {
+   5394: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L6-L8)

```diff
-       e: () => Op.f,
-       g: () => op,
-       k: () => Op.o
+       b: () => wQ.i,
+       c: () => qQ,
+       g: () => wQ.n
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L10)

```diff
-     var Op = cp(5167);
+     var wQ = XQ(5396);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16` → after: `L16-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L16-L96) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L16)

```diff
-   39396: (pp, ip, cp) => {
+   40743: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => JQ,
+       installListedShaderPack: () => gQ
+     });
+     var wQ = XQ(6952),
+       qQ = XQ(5396),
+       TQ = XQ(1238),
+       zQ = XQ(6984),
+       sQ = XQ(5394),
+       FQ = XQ(7024),
+       PQ = XQ(7018);
+     async function gQ(QQ) {
+       const WQ = await (0, zQ.loadPageShaderPackCompiler)();
+       if (null === WQ) return {
+         kind: "failed",
+ ... (65 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L18-L21` → after: `L98-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L98-L111) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L18-L21)

```diff
-       ShaderPackPage: () => Lp,
-       harnessShaderPackMode: () => Pp,
-       setHarnessUrlShaderPack: () => Ap,
-       shaderPackPage: () => Dp
+       forgetShaderPackActiveHint: () => hQ,
+       isOtherApiVersion: () => dQ,
+       isShaderPackActive: () => GQ,
+       isShaderPackChangePending: () => vQ,
+       markShaderPackChangePending: () => bQ,
+       pageShaderPackValidationVersion: () => HQ,
+       reconcileStoredShaderPackHint: () => lQ,
+       removeShaderPack: () => pQ,
+       replaceShaderPack: () => yQ,
+       saveShaderPack: () => BQ,
+       shaderPackNeedsCheck: () => aQ,
+       storedPackOutcome: () => UQ,
+       storedShaderPackFiles: () => rQ,
+       toStoredShaderPack: () => JQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L23-L40` → after: `L113-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L113-L128) · [Before (L23-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L23-L40)

```diff
-     var Op = cp(104),
-       op = cp(44),
-       Ip = (cp(3572), cp(5159), cp(3564)),
-       Sp = cp(6804);
-     cp(6772);
-     const xp = {
-       status: "none"
-     };
-     class Lp {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, Ip.f)(Op.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Yp().then((pp => {
-             pp && op.h.removeItem(Ip.d)
- ... (2 more removed lines; see GitHub link above)
+     var wQ = XQ(5396),
+       qQ = XQ(5394),
+       TQ = XQ(43),
+       zQ = XQ(3716),
+       sQ = XQ(7026),
+       FQ = XQ(7002);
+     const PQ = "shaderPackChangePending";
+     let gQ = null;
+ 
+     function JQ(QQ, WQ, XQ) {
+       return {
+         manifest: QQ.manifest,
+         files: (0, wQ.w)(QQ.files),
+         validation: WQ,
+         ...XQ && {
+           listing: XQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L42-L77` → after: `L130-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L130-L155) · [Before (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L42-L77)

```diff
-         return this.stored
-       }
-       prefetchHint() {
-         return (0, Ip.e)(Op.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const pp = await this.load();
-         return "active" === pp.status ? pp.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((pp => (console.error("Failed to load the shader pack", pp), xp))).then((pp => (this.resolved ??= pp, pp))), this.pagePack
-       }
-       hasNone() {
-         var pp;
-         return "none" === (null === (pp = this.resolved) || void 0 === pp ? void 0 : pp.status)
-       }
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function rQ(QQ) {
+       return Object.keys(QQ.files).map((WQ => ({
+         path: WQ,
+         source: QQ.files[WQ]
+       })))
+     }
+     let IQ = Promise.resolve();
+ 
+     function jQ(QQ) {
+       const WQ = IQ.then(QQ);
+       return IQ = WQ.catch((() => {})), WQ
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L80-L90` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L158-L159) · [Before (L80-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L80-L90)

```diff
-       if (!(0, Ip.i)(Op.featureFlags.settings.canUseShaderPacks)) return null;
-       try {
-         const pp = await (0, Sp.f)(!0);
-         return pp || op.h.setItem(Ip.d, !1), pp
-       } catch (pp) {
-         return console.error("Failed to read the stored shader pack", pp), op.h.removeItem(Ip.d), null
-       }
-     }
-     const Dp = new Lp;
- 
-     function Ap(pp, ip) {}
+       await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L93` → after: `L162-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L162-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L162-L228) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L93)

```diff
-       return null
+       return jQ(DQ)
+     }
+ 
+     function GQ(QQ, WQ) {
+       return "active" === UQ(QQ, WQ).kind
+     }
+ 
+     function UQ(QQ, WQ) {
+       var XQ;
+       return null === QQ ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : dQ(QQ) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
+ ... (51 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L96-L109` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L231) · [Before (L96-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L96-L109)

```diff
-   6804: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => op,
-       f: () => Ip
-     });
-     var Op = cp(44);
-     const op = "shaderPack";
-     async function Ip() {
-       var pp;
-       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
-     }
-   },
-   6772: (pp, ip, cp) => {
+   7002: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L114` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L236) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L114)

```diff
-     var Op = cp(5167);
+     var wQ = XQ(5396);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L119` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L241) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L119)

```diff
-       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L125` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L247) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L125)

```diff
-         return op ??= (0, Op.j)(cp, Ip, ip), op
+         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L134` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L256) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L134)

```diff
-   5167: (pp, ip, cp) => {
+   7018: (QQ, WQ, XQ) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L139` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L341-L342) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L139)

```diff
-       j: () => Up,
+       i: () => wQ,
+       l: () => BQ,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L141-L144` → after: `L344-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L344-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L344-L347) · [Before (L141-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L141-L144)

```diff
-       o: () => op,
-       p: () => Ip,
-       s: () => Yp,
-       v: () => Dp,
+       n: () => qQ,
+       r: () => TQ,
+       t: () => PQ,
+       w: () => gQ,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L164` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L367) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L164)

```diff
-         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L173` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L376) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L173)

```diff
-           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
+           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L181` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L384) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L181)

```diff
-             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
+             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L184` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L387) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L184)

```diff
-           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
+           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L209-L212` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L412-L415) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L209-L212)

```diff
-       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
-       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
-       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
-       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
+       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
+       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
+       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
+       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L245` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/117.js#L448) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/117.js#L245)

```diff
-           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
+           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L2)

```diff
- export const ids = [118, 138];
+ export const ids = [118, 120, 140, 141];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L4-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L4-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L4-L164) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L4)

```diff
-   6772: (pp, ip, cp) => {
+   5394: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ.i,
+       c: () => qQ,
+       g: () => wQ.n
+     });
+     var wQ = XQ(5396);
+     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
+       strict: QQ,
+       program: WQ
+     })))))
+   },
+   7024: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       forgetShaderPackActiveHint: () => hQ,
+       isOtherApiVersion: () => dQ,
+ ... (145 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L9` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L169) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L9)

```diff
-     var Op = cp(5167);
+     var wQ = XQ(5396);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L14` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L174) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L14)

```diff
-       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L20` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L180) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L20)

```diff
-         return op ??= (0, Op.j)(cp, Ip, ip), op
+         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L29` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L189) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L29)

```diff
-   5167: (pp, ip, cp) => {
+   5396: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L31-L32` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L191) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L31-L32)

```diff
-       c: () => xp,
-       e: () => Sp,
+       d: () => sQ,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L34` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L193-L194) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L34)

```diff
-       j: () => Up,
+       i: () => wQ,
+       l: () => BQ,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L36-L39` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L196-L199) · [Before (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L36-L39)

```diff
-       o: () => op,
-       p: () => Ip,
-       s: () => Yp,
-       v: () => Dp,
+       n: () => qQ,
+       r: () => TQ,
+       t: () => PQ,
+       w: () => gQ,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L59` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L219) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L59)

```diff
-         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L68` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L228) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L68)

```diff
-           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
+           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L76` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L236) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L76)

```diff
-             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
+             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L79` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L239) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L79)

```diff
-           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
+           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L104-L107` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L264-L267) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L104-L107)

```diff
-       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
-       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
-       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
-       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
+       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
+       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
+       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
+       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L140` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/118.js#L300) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/118.js#L140)

```diff
-           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
+           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L3)

```diff
- export const ids = [119];
+ export const ids = [119, 120, 140];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5-L18148` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L4-L8) · [Before (L5-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L5-L18148)

```diff
-   6328: function(pp, ip, cp) {
-     var Op;
-     ! function() {
-       var op, Ip = 1e9,
-         Sp = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         xp = !0,
-         Lp = "[DecimalError] ",
-         Yp = Lp + "Invalid argument: ",
-         Dp = Lp + "Exponent out of range: ",
-         Ap = Math.floor,
- ... (18128 more removed lines; see GitHub link above)
+   5394: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ.i,
+       c: () => qQ,
+       g: () => wQ.n
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L18150-L18278` → after: `L10-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L10-L27) · [Before (L18150-L18278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L18150-L18278)

```diff
-     var HI = cp(6344),
-       dI = cp(6229);
- 
-     function eI(pp) {
-       for (var ip = pp.length, cp = new Array(ip); --ip >= 0;) cp[ip] = ip;
-       return cp
-     }
- 
-     function uI(pp, ip) {
-       return pp[ip]
-     }
- 
-     function jI(pp) {
-       const ip = [];
-       return ip.key = pp, ip
-     }
- ... (113 more removed lines; see GitHub link above)
+     var wQ = XQ(5396);
+     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
+       strict: QQ,
+       program: WQ
+     })))))
+   },
+   39494: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       ShaderPackPage: () => FQ,
+       harnessShaderPackMode: () => rQ,
+       setHarnessUrlShaderPack: () => JQ,
+       shaderPackPage: () => gQ
+     });
+     var wQ = XQ(105),
+       qQ = XQ(43),
+       TQ = (XQ(3723), XQ(5394), XQ(3716)),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L18280-L18298` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L29) · [Before (L18280-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L18280-L18298)

```diff
-       rangeStep: function(pp, ip, cp) {
-         for (var Op = new(ZI())(pp), op = 0, Ip = []; Op.lt(ip) && op < 1e5;) Ip.push(Op.toNumber()), Op = Op.add(cp), op++;
-         return Ip
-       },
-       getDigitCount: function(pp) {
-         return 0 === pp ? 1 : Math.floor(new(ZI())(pp).abs().log(10).toNumber()) + 1
-       },
-       interpolateNumber: OS((function(pp, ip, cp) {
-         var Op = +pp;
-         return Op + cp * (+ip - Op)
-       })),
-       uninterpolateNumber: OS((function(pp, ip, cp) {
-         var Op = ip - +pp;
-         return (cp - pp) / (Op = Op || 1 / 0)
-       })),
-       uninterpolateTruncation: OS((function(pp, ip, cp) {
- ... (3 more removed lines; see GitHub link above)
+       status: "none"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L18300-L19076` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L31-L33) · [Before (L18300-L19076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L18300-L19076)

```diff
- 
-     function DS(pp) {
-       return function(pp) {
-         if (Array.isArray(pp)) return WS(pp)
-       }(pp) || function(pp) {
-         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(pp)) return Array.from(pp)
-       }(pp) || PS(pp) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function AS(pp, ip) {
-       return function(pp) {
-         if (Array.isArray(pp)) return pp
-       }(pp) || function(pp, ip) {
-         if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(pp))) return;
- ... (761 more removed lines; see GitHub link above)
+     class FQ {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19078-L19109` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L35-L40) · [Before (L19078-L19109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19078-L19109)

```diff
-       var Lp = ES(op, CI()(Sp) ? ip.dataKey : Sp);
-       return CI()(Lp) ? null : ip.scale(Lp)
-     }
-     var Ox = function(pp) {
-         var ip = pp.axis,
-           cp = pp.ticks,
-           Op = pp.offset,
-           op = pp.bandSize,
-           Ip = pp.entry,
-           Sp = pp.index;
-         if ("category" === ip.type) return cp[Sp] ? cp[Sp].coordinate + Op : null;
-         var xp = ES(Ip, ip.dataKey, ip.domain[Sp]);
-         return CI()(xp) ? null : ip.scale(xp) - op / 2 + Op
-       },
-       ox = function(pp) {
-         var ip = pp.numericAxis,
- ... (16 more removed lines; see GitHub link above)
+       preload() {
+         if (null === this.stored) {
+           if ((0, TQ.j)(wQ.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), PQ().then((QQ => {
+             QQ && qQ.i.removeItem(TQ.c)
+           })), this.stored;
+           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19111-L19184` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L42) · [Before (L19111-L19184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19111-L19184)

```diff
-         return null
-       },
-       Sx = function(pp, ip, cp) {
-         return Object.keys(pp).reduce((function(Op, op) {
-           var Ip = pp[op].stackedData.reduce((function(pp, Op) {
-             var op = Op.slice(ip, cp + 1).reduce((function(pp, ip) {
-               return [qI()(ip.concat([pp[0]]).filter(eS.D)), mI()(ip.concat([pp[1]]).filter(eS.D))]
-             }), [1 / 0, -1 / 0]);
-             return [Math.min(pp[0], op[0]), Math.max(pp[1], op[1])]
-           }), [1 / 0, -1 / 0]);
-           return [Math.min(Ip[0], Op[0]), Math.max(Ip[1], Op[1])]
-         }), [1 / 0, -1 / 0]).map((function(pp) {
-           return pp === 1 / 0 || pp === -1 / 0 ? 0 : pp
-         }))
-       },
-       xx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
- ... (58 more removed lines; see GitHub link above)
+         return this.stored
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19186-L19208` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L44-L45) · [Before (L19186-L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19186-L19208)

```diff
-   },
-   6264: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Pp,
-       g: () => Ap
-     });
-     var Op = cp(6115);
- 
-     function op(pp) {
-       return op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
-         return typeof pp
-       } : function(pp) {
-         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
-       }, op(pp)
-     }
- 
- ... (7 more removed lines; see GitHub link above)
+       prefetchHint() {
+         return (0, TQ.f)(wQ.featureFlags.settings.canUseShaderPacks)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19210-L19220` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L47-L49) · [Before (L19210-L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19210-L19220)

```diff
-       return cp
-     }
- 
-     function Sp(pp) {
-       for (var ip = 1; ip < arguments.length; ip++) {
-         var cp = null != arguments[ip] ? arguments[ip] : {};
-         ip % 2 ? Ip(Object(cp), !0).forEach((function(ip) {
-           xp(pp, ip, cp[ip])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ip(Object(cp)).forEach((function(ip) {
-           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
-         }))
+       async loadActive() {
+         const QQ = await this.load();
+         return "active" === QQ.status ? QQ.pack : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19222-L19298` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L51-L52) · [Before (L19222-L19298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19222-L19298)

```diff
-       return pp
-     }
- 
-     function xp(pp, ip, cp) {
-       return (ip = function(pp) {
-         var ip = function(pp, ip) {
-           if ("object" != op(pp) || !pp) return pp;
-           var cp = pp[Symbol.toPrimitive];
-           if (void 0 !== cp) {
-             var Op = cp.call(pp, ip || "default");
-             if ("object" != op(Op)) return Op;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === ip ? String : Number)(pp)
-         }(pp, "string");
-         return "symbol" == op(ip) ? ip : ip + ""
- ... (61 more removed lines; see GitHub link above)
+       load() {
+         return this.pagePack ??= this.read().catch((QQ => (console.error("Failed to load the shader pack", QQ), sQ))).then((QQ => (this.resolved ??= QQ, QQ))), this.pagePack
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19300-L19395` → after: `L54-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L54-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L54-L72) · [Before (L19300-L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19300-L19395)

```diff
-   },
-   5299: (pp, ip, cp) => {
-     cp.d(ip, {
-       B: () => vp,
-       D: () => Up,
-       F: () => yp,
-       I: () => Wp,
-       J: () => Hp,
-       e: () => qp,
-       h: () => mp,
-       k: () => ep,
-       n: () => Rp,
-       r: () => dp,
-       t: () => jp,
-       x: () => kp,
-       z: () => wp
- ... (80 more removed lines; see GitHub link above)
+       hasNone() {
+         var QQ;
+         return "none" === (null === (QQ = this.resolved) || void 0 === QQ ? void 0 : QQ.status)
+       }
+       block(QQ) {
+         this.resolved = {
+           status: "blocked",
+           messageKey: QQ,
+           variants: null
+         }, this.pagePack = Promise.resolve(this.resolved)
+       }
+       compiler() {
+         return this.compiling ??= Promise.all([XQ.e(80), XQ.e(138), XQ.e(144)]).then((() => XQ(41988))).then((QQ => (QQ.prefetchCompiler(), QQ))), this.compiling
+       }
+       async readStored() {
+         const QQ = await PQ();
+ ... (3 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19397-L19414` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L74-L76) · [Before (L19397-L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19397-L19414)

```diff
-   },
-   6115: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op
-     });
-     var Op = {
-       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
-       get: function(pp) {
-         return Op[pp]
-       },
-       set: function(pp, ip) {
-         if ("string" === typeof pp) Op[pp] = ip;
-         else {
-           var cp = Object.keys(pp);
-           cp && cp.length && cp.forEach((function(ip) {
-             Op[ip] = pp[ip]
- ... (2 more removed lines; see GitHub link above)
+       async read() {
+         const QQ = await this.preload();
+         return QQ ? (await this.compiler()).compilePagePack(QQ) : sQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19417-L19425` → after: `L79-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L79-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L79-L93) · [Before (L19417-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19417-L19425)

```diff
-   },
-   6360: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Op
-     });
-     var Op = function(pp, ip) {
-       var cp = pp.alwaysShow,
-         Op = pp.ifOverflow;
-       return cp && (Op = "extendDomain"), Op === ip
+     async function PQ() {
+       if (!(0, TQ.n)(wQ.featureFlags.settings.canUseShaderPacks)) return null;
+       try {
+         const QQ = await (0, zQ.f)(!0);
+         return QQ || qQ.i.setItem(TQ.c, !1), QQ
+       } catch (QQ) {
+         return console.error("Failed to read the stored shader pack", QQ), qQ.i.removeItem(TQ.c), null
+       }
+     }
+     const gQ = new FQ;
+ 
+     function JQ(QQ, WQ) {}
+ 
+     function rQ() {
+       return null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19428` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L96) · [Before (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19428)

```diff
-   5582: (pp, ip, cp) => {
+   7026: (QQ, WQ, XQ) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19430` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L98-L99) · [Before (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19430)

```diff
-       d: () => Op
+       b: () => qQ,
+       f: () => TQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19432-L19433` → after: `L101-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L101-L106) · [Before (L19432-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19432-L19433)

```diff
-     var Op = function(pp, ip) {
-       for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op]
+     var wQ = XQ(43);
+     const qQ = "shaderPack";
+     async function TQ() {
+       var QQ;
+       let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19436-L19440` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L109-L112) · [Before (L19436-L19440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19436-L19440)

```diff
-   6357: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => xp,
-       f: () => Pp,
-       i: () => Yp
+   7002: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       loadShaderPackTextures: () => zQ,
+       shaderPackTextures: () => sQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19442-L19450` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L114-L116) · [Before (L19442-L19450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19442-L19450)

```diff
-     cp(5575), cp(62), cp(5405);
- 
-     function Op(pp) {
-       return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
-         return typeof pp
-       } : function(pp) {
-         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
-       }, Op(pp)
-     }
+     var wQ = XQ(5396);
+     let qQ = null,
+       TQ = null;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19452-L19460` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L118-L126) · [Before (L19452-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19452-L19460)

```diff
-     function op(pp, ip) {
-       var cp = Object.keys(pp);
-       if (Object.getOwnPropertySymbols) {
-         var Op = Object.getOwnPropertySymbols(pp);
-         ip && (Op = Op.filter((function(ip) {
-           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
-         }))), cp.push.apply(cp, Op)
-       }
-       return cp
+     function zQ() {
+       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: WQ,
+           textureNameToIndex: XQ,
+           textureAnimationData: TQ
+         } = QQ;
+         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
+       })), TQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19463-L19471` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L129-L130) · [Before (L19463-L19471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19463-L19471)

```diff
-     function Ip(pp) {
-       for (var ip = 1; ip < arguments.length; ip++) {
-         var cp = null != arguments[ip] ? arguments[ip] : {};
-         ip % 2 ? op(Object(cp), !0).forEach((function(ip) {
-           Sp(pp, ip, cp[ip])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : op(Object(cp)).forEach((function(ip) {
-           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
-         }))
-       }
+     function sQ() {
+       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19583` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L134) · [Before (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19583)

```diff
-   5588: (pp, ip, cp) => {
+   5396: (QQ, WQ, XQ) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19586` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L137) · [Before (L19586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19586)

```diff
-       h: () => Mp,
+       f: () => zQ,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19588` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L139) · [Before (L19588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19588)

```diff
-       k: () => kp,
+       l: () => BQ,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19593-L19594` → after: `L143-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L143-L145) · [Before (L19593-L19594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19593-L19594)

```diff
-       u: () => Tp,
-       y: () => Ep
+       t: () => PQ,
+       w: () => gQ,
+       z: () => rQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19596-L19630` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L147) · [Before (L19596-L19630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19596-L19630)

```diff
-     var Op = cp(5326),
-       op = cp.n(Op),
-       Ip = cp(5575),
-       Sp = cp.n(Ip),
-       xp = cp(5301),
-       Lp = cp.n(xp),
-       Yp = cp(5405),
-       Dp = cp.n(Yp),
-       Ap = cp(5214),
-       Pp = cp.n(Ap),
-       Wp = cp(62),
-       yp = cp(5596),
-       Up = cp(5299),
-       wp = cp(5610),
-       vp = cp(5619),
-       tp = ["children"],
- ... (19 more removed lines; see GitHub link above)
+     const wQ = 5;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19633-L19768` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L150) · [Before (L19633-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19633-L19768)

```diff
-       return ep = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
-         return typeof pp
-       } : function(pp) {
-         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
-       }, ep(pp)
-     }
-     var jp = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
-         mouseout: "onMouseOut",
-         mouseenter: "onMouseEnter",
-         mouseleave: "onMouseLeave",
-         touchcancel: "onTouchCancel",
- ... (120 more removed lines; see GitHub link above)
+       return QQ === wQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19783-L19798` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L154) · [Before (L19783-L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19783-L19798)

```diff
-       return Sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
-         return typeof pp
-       } : function(pp) {
-         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
-       }, Sp(pp)
-     }
- 
-     function xp(pp, ip) {
-       var cp = Object.keys(pp);
-       if (Object.getOwnPropertySymbols) {
-         var Op = Object.getOwnPropertySymbols(pp);
-         ip && (Op = Op.filter((function(ip) {
-           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
-         }))), cp.push.apply(cp, Op)
-       }
-       return cp
+       return [...QQ.features]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19802-L19808` → after: `L161-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L161-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L161-L168) · [Before (L19802-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19802-L19808)

```diff
-       for (var ip = 1; ip < arguments.length; ip++) {
-         var cp = null != arguments[ip] ? arguments[ip] : {};
-         ip % 2 ? xp(Object(cp), !0).forEach((function(ip) {
-           Yp(pp, ip, cp[ip])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : xp(Object(cp)).forEach((function(ip) {
-           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
-         }))
+       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
+       const WQ = [];
+       for (const [XQ, wQ] of Object.entries(QQ)) {
+         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
+         WQ.push({
+           path: XQ,
+           source: wQ
+         })
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19810-L19851` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L170-L182) · [Before (L19810-L19851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19810-L19851)

```diff
-       return pp
-     }
- 
-     function Yp(pp, ip, cp) {
-       return (ip = function(pp) {
-         var ip = function(pp, ip) {
-           if ("object" != Sp(pp) || !pp) return pp;
-           var cp = pp[Symbol.toPrimitive];
-           if (void 0 !== cp) {
-             var Op = cp.call(pp, ip || "default");
-             if ("object" != Sp(Op)) return Op;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === ip ? String : Number)(pp)
-         }(pp, "string");
-         return "symbol" == Sp(ip) ? ip : ip + ""
- ... (26 more removed lines; see GitHub link above)
+       return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
+         function(QQ) {
+           if (0 === QQ.length) return "The pack has no .wgsl files.";
+           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
+           const WQ = new Set;
+           for (const {
+               path: XQ
+             }
+             of QQ) {
+             const QQ = IQ(XQ);
+             if (null !== QQ) return QQ;
+             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
+             WQ.add(XQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19853-L19905` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L184-L185) · [Before (L19853-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19853-L19905)

```diff
-         })))
-       }), []) : (cp || []).map((function(pp) {
-         var ip = pp.item,
-           cp = ip.type.defaultProps,
-           Op = void 0 !== cp ? Lp(Lp({}, cp), ip.props) : {},
-           Ip = Op.dataKey,
-           Sp = Op.name,
-           xp = Op.legendType;
-         return {
-           inactive: Op.hide,
-           dataKey: Ip,
-           type: Pp.iconType || xp || "square",
-           color: (0, op.T)(ip),
-           value: Sp || Ip,
-           payload: Op
-         }
- ... (37 more removed lines; see GitHub link above)
+           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
+         }(WQ) ?? WQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19956-L20008` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L189-L190) · [Before (L19956-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L19956-L20008)

```diff
-       if ("object" === typeof pp && null !== pp) {
-         var ip = pp.$$typeof;
-         switch (ip) {
-           case Op:
-             switch (pp = pp.type) {
-               case Ip:
-               case xp:
-               case Sp:
-               case Pp:
-               case Wp:
-                 return pp;
-               default:
-                 switch (pp = pp && pp.$$typeof) {
-                   case Dp:
-                   case Yp:
-                   case Ap:
- ... (37 more removed lines; see GitHub link above)
+       const WQ = {};
+       for (const XQ of QQ) WQ[XQ.path] = XQ.source;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20165-L20170` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L195) · [Before (L20165-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20165-L20170)

```diff
-       let {
-         _intern: cp,
-         _key: Op
-       } = pp;
-       const op = Op(ip);
-       return cp.has(op) && (ip = cp.get(op), cp.delete(op)), ip
+       return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20174-L20189` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L199-L202) · [Before (L20174-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20174-L20189)

```diff
-       return null !== pp && "object" === typeof pp ? pp.valueOf() : pp
-     }
-     var Lp = cp(6280);
-     const Yp = Symbol("implicit");
- 
-     function Dp() {
-       var pp = new Op,
-         ip = [],
-         cp = [],
-         op = Yp;
- 
-       function Ip(Op) {
-         let Ip = pp.get(Op);
-         if (void 0 === Ip) {
-           if (op !== Yp) return op;
-           pp.set(Op, Ip = ip.push(Op) - 1)
+       const WQ = new TextEncoder;
+       let XQ = 0;
+       for (const {
+           source: wQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20191-L20204` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L204-L205) · [Before (L20191-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20191-L20204)

```diff
-         return cp[Ip % cp.length]
-       }
-       return Ip.domain = function(cp) {
-         if (!arguments.length) return ip.slice();
-         ip = [], pp = new Op;
-         for (const Op of cp) pp.has(Op) || pp.set(Op, ip.push(Op) - 1);
-         return Ip
-       }, Ip.range = function(pp) {
-         return arguments.length ? (cp = Array.from(pp), Ip) : cp.slice()
-       }, Ip.unknown = function(pp) {
-         return arguments.length ? (op = pp, Ip) : op
-       }, Ip.copy = function() {
-         return Dp(ip, cp).unknown(op)
-       }, Lp.d.apply(Ip, arguments), Ip
+         of QQ) XQ += WQ.encode(wQ).byteLength;
+       return XQ
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20214-L20221` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L209-L212) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20214-L20221)

```diff
-       return "object" === typeof pp && "length" in pp ? pp : Array.from(pp)
-     }
-   },
-   6229: (pp, ip, cp) => {
-     function Op(pp) {
-       return function() {
-         return pp
-       }
+       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
+       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
+       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
+       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20223-L20234` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L214) · [Before (L20223-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20223-L20234)

```diff
-     cp.d(ip, {
-       c: () => Op
-     })
-   },
-   6231: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Yp
-     });
-     const Op = Math.PI,
-       op = 2 * Op,
-       Ip = 1e-6,
-       Sp = op - Ip;
+     const jQ = /^(.*)\[rot\[([1-4])$/;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20236-L20304` → after: `L216-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L216-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L216-L293) · [Before (L20236-L20304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20236-L20304)

```diff
-     function xp(pp) {
-       this._ += pp[0];
-       for (let ip = 1, cp = pp.length; ip < cp; ++ip) this._ += arguments[ip] + pp[ip]
-     }
-     class Lp {
-       constructor(pp) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == pp ? xp : function(pp) {
-           let ip = Math.floor(pp);
-           if (!(ip >= 0)) throw new Error(`invalid digits: ${pp}`);
-           if (ip > 15) return xp;
-           const cp = 10 ** ip;
-           return function(pp) {
-             this._ += pp[0];
-             for (let ip = 1, Op = pp.length; ip < Op; ++ip) this._ += Math.round(arguments[ip] * cp) / cp + pp[ip]
-           }
-         }(pp)
- ... (53 more removed lines; see GitHub link above)
+     function BQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const wQ = new Map;
+       WQ.forEach(((QQ, WQ) => {
+         let {
+           numAnimStates: XQ,
+           animStartIdx: qQ
+         } = QQ;
+         for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
+       }));
+       const qQ = Object.entries(QQ),
+         TQ = new Map;
+       for (const [BQ, yQ] of qQ) {
+         const QQ = jQ.exec(BQ);
+         "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
+       }
+ ... (62 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20306-L20307` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L295-L298) · [Before (L20306-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20306-L20307)

```diff
-       toString() {
-         return this._
+       for (const jQ of rQ.keys()) IQ.delete(jQ);
+       for (const [jQ, BQ] of XQ) {
+         const QQ = rQ.get(BQ);
+         void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L20309-L20338` → after: `L300-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L300-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/119.js#L300-L312) · [Before (L20309-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/119.js#L20309-L20338)

```diff
-     }
- 
-     function Yp(pp) {
-       let ip = 3;
-       return pp.digits = function(cp) {
-         if (!arguments.length) return ip;
-         if (null == cp) ip = null;
-         else {
-           const pp = Math.floor(cp);
-           if (!(pp >= 0)) throw new RangeError(`invalid digits: ${cp}`);
-           ip = pp
-         }
-         return pp
-       }, () => new Lp(ip)
-     }
-     Lp.prototype
- ... (14 more removed lines; see GitHub link above)
+       return {
+         named: [...rQ].sort(((QQ, WQ) => {
+           let [XQ] = QQ, [wQ] = WQ;
+           return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
+         })).map((QQ => {
+           let [WQ, XQ] = QQ;
+           return {
+             name: WQ,
+             id: XQ
+           }
+         })),
+         aliases: [...IQ.values()],
+         layers: JQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L3)

```diff
- export const ids = [120];
+ export const ids = [120, 140];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L5)

```diff
-   6564: (pp, ip, cp) => {
+   7002: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L7-L13` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L6-L7) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L7-L13)

```diff
-       Graph: () => hp,
-       debug: () => lc,
-       default: () => Jc,
-       graphlib: () => Ip,
-       layout: () => wc,
-       util: () => Qc,
-       version: () => xi
+       loadShaderPackTextures: () => zQ,
+       shaderPackTextures: () => sQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L15-L614` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L9-L11) · [Before (L15-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L15-L614)

```diff
-     var Op = Object.defineProperty,
-       op = (pp, ip, cp) => ((pp, ip, cp) => ip in pp ? Op(pp, ip, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: cp
-       }) : pp[ip] = cp)(pp, "symbol" != typeof ip ? ip + "" : ip, cp),
-       Ip = {};
-     ((pp, ip) => {
-       for (var cp in ip) Op(pp, cp, {
-         get: ip[cp],
-         enumerable: !0
-       })
-     })(Ip, {
-       Graph: () => hp,
-       alg: () => vp
- ... (584 more removed lines; see GitHub link above)
+     var wQ = XQ(5396);
+     let qQ = null,
+       TQ = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L616-L625` → after: `L13-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L13-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L13-L20) · [Before (L616-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L616-L625)

```diff
-     function Qp(pp, ip, cp, Op, op) {
-       Array.isArray(ip) || (ip = [ip]);
-       let Ip = ip => {
-           var cp;
-           return null != (cp = pp.isDirected() ? pp.successors(ip) : pp.neighbors(ip)) ? cp : []
-         },
-         Sp = {};
-       return ip.forEach((function(ip) {
-         if (!pp.hasNode(ip)) throw new Error("Graph does not have node: " + ip);
-         op = Jp(pp, ip, "post" === cp, Sp, Ip, Op, op)
+     function zQ() {
+       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: WQ,
+           textureNameToIndex: XQ,
+           textureAnimationData: TQ
+         } = QQ;
+         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L629-L677` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L24-L25) · [Before (L629-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L629-L677)

```diff
-     function Jp(pp, ip, cp, Op, op, Ip, Sp) {
-       return ip in Op || (Op[ip] = !0, cp || (Sp = Ip(Sp, ip)), op(ip).forEach((function(ip) {
-         Sp = Jp(pp, ip, cp, Op, op, Ip, Sp)
-       })), cp && (Sp = Ip(Sp, ip))), Sp
-     }
- 
-     function Bp(pp, ip, cp) {
-       return Qp(pp, ip, cp, (function(pp, ip) {
-         return pp.push(ip), pp
-       }), [])
-     }
- 
-     function Np(pp, ip) {
-       return Bp(pp, ip, "post")
-     }
- 
- ... (33 more removed lines; see GitHub link above)
+     function sQ() {
+       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L680-L713` → after: `L28-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L28-L42) · [Before (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L680-L713)

```diff
- 
-     function bp(pp, ip, cp, Op) {
-       return function(pp, ip, cp, Op) {
-         if (void 0 === cp) return kp(pp, ip, cp, Op);
-         let op = !1,
-           Ip = pp.nodes();
-         for (let Sp = 0; Sp < Ip.length; Sp++) {
-           let xp = Ip[Sp];
-           if (void 0 === xp) continue;
-           let Lp = Op(xp);
-           for (let pp = 0; pp < Lp.length; pp++) {
-             let ip = Lp[pp];
-             if (!ip) continue;
-             let Op = ip.v === xp ? ip.v : ip.w;
-             cp({
-               v: Op,
- ... (18 more removed lines; see GitHub link above)
+   },
+   5396: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => sQ,
+       f: () => zQ,
+       i: () => wQ,
+       l: () => BQ,
+       m: () => JQ,
+       n: () => qQ,
+       r: () => TQ,
+       t: () => PQ,
+       w: () => gQ,
+       z: () => rQ
+     });
+     const wQ = 5;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L716-L737` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L45) · [Before (L716-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L716-L737)

```diff
-       let ip = new hp({
-         multigraph: pp.isMultigraph()
-       }).setGraph(pp.graph());
-       return pp.nodes().forEach((cp => {
-         pp.children(cp).length || ip.setNode(cp, pp.node(cp))
-       })), pp.edges().forEach((cp => {
-         ip.setEdge(cp, pp.edge(cp))
-       })), ip
-     }
- 
-     function Fp(pp, ip) {
-       let cp, Op, op = pp.x,
-         Ip = pp.y,
-         Sp = ip.x - op,
-         xp = ip.y - Ip,
-         Lp = pp.width / 2,
- ... (6 more removed lines; see GitHub link above)
+       return QQ === wQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L741-L771` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L49) · [Before (L741-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L741-L771)

```diff
-       let ip = ci(zp(pp) + 1).map((() => []));
-       return pp.nodes().forEach((cp => {
-         let Op = pp.node(cp),
-           op = Op.rank;
-         void 0 !== op && (ip[op] || (ip[op] = []), ip[op][Op.order] = cp)
-       })), ip
-     }
- 
-     function Gp(pp, ip, cp, Op) {
-       let op = {
-         width: 0,
-         height: 0
-       };
-       return arguments.length >= 4 && (op.rank = cp, op.order = Op), ap(pp, "border", op, ip)
-     }
-     var rp = 65535;
- ... (15 more removed lines; see GitHub link above)
+       return [...QQ.features]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L775-L787` → after: `L56-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L56-L63) · [Before (L775-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L775-L787)

```diff
-       let ip = pp.nodes().map((ip => {
-         let cp = pp.node(ip).rank;
-         return void 0 === cp ? Number.MIN_VALUE : cp
-       }));
-       return Zp(Math.max, ip)
-     }
- 
-     function sp(pp, ip) {
-       let cp = Date.now();
-       try {
-         return ip()
-       } finally {
-         console.log(pp + " time: " + (Date.now() - cp) + "ms")
+       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
+       const WQ = [];
+       for (const [XQ, wQ] of Object.entries(QQ)) {
+         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
+         WQ.push({
+           path: XQ,
+           source: wQ
+         })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L797-L806` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L84-L85) · [Before (L797-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L797-L806)

```diff
-       return pp + "" + ++Vp
-     }
- 
-     function ci(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == ip && (ip = pp, pp = 0);
-       let Op = pp => pp < ip;
-       cp < 0 && (Op = pp => ip < pp);
-       let op = [];
-       for (let Ip = pp; Op(Ip); Ip += cp) op.push(Ip);
+       const WQ = {};
+       for (const XQ of QQ) WQ[XQ.path] = XQ.source;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L811-L842` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L90) · [Before (L811-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L811-L842)

```diff
-       let cp = {};
-       for (let Op of ip) void 0 !== pp[Op] && (cp[Op] = pp[Op]);
-       return cp
-     }
- 
-     function oi(pp, ip) {
-       let cp;
-       return cp = "string" == typeof ip ? pp => pp[ip] : ip, Object.entries(pp).reduce(((pp, ip) => {
-         let [Op, op] = ip;
-         return pp[Op] = cp(op, Op), pp
-       }), {})
-     }
-     var Ii = "\0";
- 
-     function Si(pp, ip, cp) {
-       var Op, op, Ip, Sp, xp, Lp;
- ... (16 more removed lines; see GitHub link above)
+       return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L847-L985` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L94-L97) · [Before (L847-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L847-L985)

```diff
-       pp._prev._next = pp._next, pp._next._prev = pp._prev, delete pp._next, delete pp._prev
-     }
- 
-     function Yi(pp, ip) {
-       if ("_next" !== pp && "_prev" !== pp) return ip
-     }
-     var Di = class {
-         constructor() {
-           op(this, "_sentinel");
-           let pp = {};
-           pp._next = pp._prev = pp, this._sentinel = pp
-         }
-         dequeue() {
-           let pp = this._sentinel,
-             ip = pp._prev;
-           if (ip !== pp) return Li(ip), ip
- ... (123 more removed lines; see GitHub link above)
+       const WQ = new TextEncoder;
+       let XQ = 0;
+       for (const {
+           source: wQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L987-L1044` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L99) · [Before (L987-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L987-L1044)

```diff
-         let xp = Ip;
-         return ip && "function" == typeof ip.node && (xp = Sp), pp.sources().forEach(xp), pp.nodes().forEach(xp), cp
-       }(pp, null != ip ? ip : null)).forEach((ip => {
-         let cp = pp.edge(ip);
-         pp.removeEdge(ip), cp.forwardName = ip.name, cp.reversed = !0, pp.setEdge(ip.w, ip.v, cp, ii("rev"))
-       }))
-     }
- 
-     function wi(pp) {
-       pp.graph().dummyChains = [], pp.edges().forEach((ip => function(pp, ip) {
-         let cp, Op, op, Ip = ip.v,
-           Sp = pp.node(Ip).rank,
-           xp = ip.w,
-           Lp = pp.node(xp).rank,
-           Yp = ip.name,
-           Dp = pp.edge(ip),
- ... (42 more removed lines; see GitHub link above)
+         of QQ) XQ += WQ.encode(wQ).byteLength;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1075-L1122` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L104-L107) · [Before (L1075-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L1075-L1122)

```diff
-       pp = function(pp) {
-         let ip = (new hp).setGraph(pp.graph());
-         return pp.nodes().forEach((cp => ip.setNode(cp, pp.node(cp)))), pp.edges().forEach((cp => {
-           let Op = ip.edge(cp.v, cp.w) || {
-               weight: 0,
-               minlen: 1
-             },
-             op = pp.edge(cp);
-           ip.setEdge(cp.v, cp.w, {
-             weight: Op.weight + op.weight,
-             minlen: Math.max(Op.minlen, op.minlen)
-           })
-         })), ip
-       }(pp), vi(pp);
-       let ip, cp, Op = Hi(pp);
-       for (Ci(Op), qi(Op, pp); ip = Xi(Op);) cp = li(Op, pp, ip), Qi(Op, pp, ip, cp)
- ... (32 more removed lines; see GitHub link above)
+       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
+       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
+       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
+       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1126-L1283` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L112-L119) · [Before (L1126-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L1126-L1283)

```diff
-       arguments.length < 2 && (ip = pp.nodes()[0]), Ei(pp, {}, 1, ip)
-     }
- 
-     function Ei(pp, ip, cp, Op, op) {
-       let Ip = cp,
-         Sp = pp.node(Op);
-       ip[Op] = !0;
-       let xp = pp.neighbors(Op);
-       return xp && xp.forEach((op => {
-         Object.hasOwn(ip, op) || (cp = Ei(pp, ip, cp, op, Op))
-       })), Sp.low = Ip, Sp.lim = cp++, op ? Sp.parent = op : delete Sp.parent, cp
-     }
- 
-     function Xi(pp) {
-       return pp.edges().find((ip => pp.edge(ip).cutvalue < 0))
-     }
- ... (142 more removed lines; see GitHub link above)
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const wQ = new Map;
+       WQ.forEach(((QQ, WQ) => {
+         let {
+           numAnimStates: XQ,
+           animStartIdx: qQ
+         } = QQ;
+         for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1285-L1326` → after: `L121-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L121-L132) · [Before (L1285-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L1285-L1326)

```diff
-       let Yp = Gp(pp, "_bt"),
-         Dp = Gp(pp, "_bb"),
-         Ap = pp.node(Sp);
-       pp.setParent(Yp, Sp), Ap.borderTop = Yp, pp.setParent(Dp, Sp), Ap.borderBottom = Dp, Lp.forEach((xp => {
-         var Lp;
-         ai(pp, ip, cp, Op, op, Ip, xp);
-         let Ap = pp.node(xp),
-           Pp = Ap.borderTop ? Ap.borderTop : xp,
-           Wp = Ap.borderBottom ? Ap.borderBottom : xp,
-           yp = Ap.borderTop ? Op : 2 * Op,
-           Up = Pp !== Wp ? 1 : op - (null != (Lp = Ip[Sp]) ? Lp : 0) + 1;
-         pp.setEdge(Yp, Pp, {
-           weight: yp,
-           minlen: Up,
-           nestingEdge: !0
-         }), pp.setEdge(Wp, Dp, {
- ... (26 more removed lines; see GitHub link above)
+       const qQ = Object.entries(QQ),
+         TQ = new Map;
+       for (const [BQ, yQ] of qQ) {
+         const QQ = jQ.exec(BQ);
+         "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
+       }
+       const zQ = QQ => {
+           const WQ = jQ.exec(QQ);
+           return WQ && TQ.has(WQ[1]) ? {
+             root: WQ[1],
+             rotation: Number(WQ[2]) - 1
+           } : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1328-L1664` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L134-L137) · [Before (L1328-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L1328-L1664)

```diff
-         xp = op[ip][Ip - 1],
-         Lp = ap(pp, "border", Sp, cp);
-       op[ip][Ip] = Lp, pp.setParent(Lp, Op), xp && pp.setEdge(xp, Lp, {
-         weight: 1
-       })
-     }
- 
-     function gi(pp) {
-       var ip;
-       let cp = null == (ip = pp.graph().rankdir) ? void 0 : ip.toLowerCase();
-       ("bt" === cp || "rl" === cp) && function(pp) {
-         pp.nodes().forEach((ip => Zi(pp.node(ip)))), pp.edges().forEach((ip => {
-           var cp;
-           let Op = pp.edge(ip);
-           null == (cp = Op.points) || cp.forEach(Zi), Object.hasOwn(Op, "y") && Zi(Op)
-         }))
- ... (321 more removed lines; see GitHub link above)
+         sQ = new Set(qQ.map((QQ => {
+           let [WQ] = QQ;
+           return zQ(WQ)?.root ?? WQ
+         }))),
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1666-L2077` → after: `L139-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L139-L141) · [Before (L1666-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L1666-L2077)

```diff
-           Op.has(pp) || Op.set(pp, []), Op.get(pp).push(ip)
-         };
-       for (let Ip of pp.nodes()) {
-         let ip = pp.node(Ip);
-         if ("number" == typeof ip.rank && op(ip.rank, Ip), "number" == typeof ip.minRank && "number" == typeof ip.maxRank)
-           for (let pp = ip.minRank; pp <= ip.maxRank; pp++) pp !== ip.rank && op(pp, Ip)
-       }
-       return ip.map((function(ip) {
-         return oc(pp, ip, cp, Op.get(ip) || [])
-       }))
-     }
- 
-     function xc(pp, ip, cp, Op) {
-       let op = !0,
-         Ip = new hp;
-       pp.forEach((function(pp) {
- ... (396 more removed lines; see GitHub link above)
+           const wQ = QQ.replace(/_?0$/, "");
+           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
+         },
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L2079-L2083` → after: `L143-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L143-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L143-L154) · [Before (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L2079-L2083)

```diff
-       op.forEach((ip => {
-         let cp = pp.node(ip);
-         cp && cp.rankdir && Ip[ip] && xp.set(ip, (pp.children(ip) || []).filter((pp => pp !== ip)))
-       }));
-       let Lp = new Set([...xp.values()].flat()),
+       for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
+       const gQ = qQ.reduce(((QQ, WQ) => {
+           let [, XQ] = WQ;
+           return Math.max(QQ, XQ + 1)
+         }), 0),
+         JQ = Array.from({
+           length: gQ
+         }, ((QQ, WQ) => ({
+           id: WQ + 1,
+           rotation: 0
+         }))),
+         rQ = new Map,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L2085-L2177` → after: `L156-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L156-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L156-L180) · [Before (L2085-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L2085-L2177)

```diff
-       xp.forEach(((ip, cp) => {
-         Lp.has(cp) || Yp.set(cp, (ip => {
-           let cp = [],
-             Op = (pp.children(ip) || []).filter((pp => pp !== ip));
-           for (; Op.length > 0;) {
-             let ip = Op.shift();
-             cp.push(ip), (pp.children(ip) || []).filter((pp => pp !== ip)).forEach((pp => Op.push(pp)))
-           }
-           return cp
-         })(cp))
-       }));
-       let Dp = new Set([...Yp.values()].flat()),
-         Ap = pp => {
-           for (let [ip, cp] of Yp)
-             if (cp.includes(pp)) return ip;
-           return pp
- ... (77 more removed lines; see GitHub link above)
+       for (const [jQ, BQ] of qQ) {
+         const QQ = zQ(jQ),
+           WQ = wQ.get(BQ);
+         if (void 0 !== WQ) {
+           const XQ = PQ.get(WQ);
+           IQ.set(jQ, {
+             name: jQ,
+             texture: XQ,
+             kind: "frame"
+           }), QQ && !IQ.has(QQ.root) && IQ.set(QQ.root, {
+             name: QQ.root,
+             texture: XQ,
+             kind: "frame"
+           });
+           continue
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L2179-L2488` → after: `L182-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L182-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L182-L203) · [Before (L2179-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L2179-L2488)

```diff
-             node: Op,
-             parent: op
-           } = ip;
-           pp.setNode(cp, Op), void 0 !== op && pp.setParent(cp, op)
-         })), Sp.forEach((ip => {
-           let {
-             edge: cp,
-             label: Op
-           } = ip;
-           pp.setEdge(cp, Op)
-         })), Op.nodes().forEach((ip => {
-           if (ip === cp) return;
-           let op = Op.node(ip),
-             Ip = pp.node(ip);
-           Ip && op && "number" == typeof op.x && "number" == typeof op.y && (Ip.x = Dp + (op.x - Pp), Ip.y = Ap + (op.y - Wp))
-         })), delete Yp._dagreClusterSubgraph
- ... (294 more removed lines; see GitHub link above)
+             rotation: QQ.rotation
+           }, rQ.set(XQ, WQ), IQ.set(jQ, {
+             name: jQ,
+             texture: XQ,
+             kind: "rotation"
+           })
+         } else rQ.set(XQ, BQ + 1)
+       }
+       for (const jQ of rQ.keys()) IQ.delete(jQ);
+       for (const [jQ, BQ] of XQ) {
+         const QQ = rQ.get(BQ);
+         void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
+       }
+       return {
+         named: [...rQ].sort(((QQ, WQ) => {
+           let [XQ] = QQ, [wQ] = WQ;
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L2490-L2493` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/120.js#L205-L207) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/120.js#L2490-L2493)

```diff
-         }))
-       }(pp))), {
-         graph: pp,
-         rawNodes: Yp
+         })),
+         aliases: [...IQ.values()],
+         layers: JQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L4` → after: `L5-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L5-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L5-L15523) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L4)

```diff
-   36812: (pp, ip, cp) => {
+   6593: function(QQ, WQ, XQ) {
+     var wQ;
+     ! function() {
+       var qQ, TQ = 1e9,
+         zQ = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         sQ = !0,
+         FQ = "[DecimalError] ",
+         PQ = FQ + "Invalid argument: ",
+         gQ = FQ + "Exponent out of range: ",
+         JQ = Math.floor,
+ ... (15503 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L6-L7` → after: `L15525-L18148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L15525-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L15525-L18148) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L6-L7)

```diff
-       d: () => Up,
-       h: () => jp
+       e: () => UQ,
+       g: () => VQ,
+       h: () => bQ,
+       i: () => pQ,
+       l: () => DQ
+     });
+     var wQ = XQ(6639),
+       qQ = XQ.n(wQ),
+       TQ = XQ(6647),
+       zQ = XQ.n(TQ),
+       sQ = XQ(6526),
+       FQ = XQ(5775),
+       PQ = XQ(5520),
+       gQ = XQ(6664);
+ 
+     function JQ(QQ) {
+ ... (2608 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L9-L44` → after: `L18150-L18547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R18150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L18150-L18547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L18150-L18547) · [Before (L9-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L9-L44)

```diff
-     cp(34402);
-     var Op = cp(62),
-       op = cp(1476),
-       Ip = cp(1956),
-       Sp = cp(2004),
-       xp = cp(25),
-       Lp = cp(2492),
-       Yp = cp(36819),
-       Dp = cp(36828),
-       Ap = cp(34386),
-       Pp = cp(34397),
-       Wp = cp(34420),
-       yp = cp(1112);
-     const Up = (0, Op.memo)((function() {
-       var pp;
-       const {
- ... (20 more removed lines; see GitHub link above)
+     var BT = XQ(6605),
+       yT = XQ(6484);
+ 
+     function VT(QQ) {
+       for (var WQ = QQ.length, XQ = new Array(WQ); --WQ >= 0;) XQ[WQ] = WQ;
+       return XQ
+     }
+ 
+     function DT(QQ, WQ) {
+       return QQ[WQ]
+     }
+ 
+     function pT(QQ) {
+       const WQ = [];
+       return WQ.key = QQ, WQ
+     }
+ ... (382 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L46-L58` → after: `L18549-L18973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R18549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L18549-L18973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L18549-L18973) · [Before (L46-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L46-L58)

```diff
-       const lp = (0, Ap.g)(ip, cp.touchActionButtons);
-       return (null !== (pp = (0, Yp.d)(vp, Up)) && void 0 !== pp ? pp : (0, Yp.h)(mp, ep > 1, lp, tp)) ? "movement" === Ip || "cursor" === Ip ? null : (0, yp.jsxs)(yp.Fragment, {
-         children: [qp && (0, yp.jsx)(Rp, {
-           custom: Mp.forGuns && "shapes" === Mp.style ? Mp : null,
-           touch: ip
-         }), !qp && (0, yp.jsx)(Pp.b, {
-           settings: Mp,
-           touch: ip,
-           pressRef: Hp,
-           pressed: "shapes" === Mp.style ? Ep : dp.current
-         })]
-       }) : null
-     }));
+       if ("number" === XQ) {
+         var TQ = qQ.filter((function(QQ) {
+           return (0, Vz.D)(QQ) || parseFloat(QQ)
+         }));
+         return TQ.length ? [vT()(TQ), UT()(TQ)] : [1 / 0, -1 / 0]
+       }
+       return (wQ ? qQ.filter((function(QQ) {
+         return !HT()(QQ)
+       })) : qQ).map((function(QQ) {
+         return (0, Vz.B)(QQ) || QQ instanceof Date ? QQ : ""
+       }))
+     }
+     var hz = function(QQ) {
+         var WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           wQ = arguments.length > 2 ? arguments[2] : void 0,
+           qQ = arguments.length > 3 ? arguments[3] : void 0,
+ ... (409 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L60-L73` → after: `L18975-L18996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R18975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L18975-L18996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L18975-L18996) · [Before (L60-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L60-L73)

```diff
-     function wp() {
-       return Ip.gameBridge.lookup("cameraZoom", null)
-     }
-     const vp = [{
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }],
-       tp = {
-         current: null
+             function qQ(qQ) {
+               var TQ, zQ, sQ = Array.from(QQ.apply(this, arguments), pT),
+                 FQ = sQ.length,
+                 PQ = -1;
+               for (const QQ of qQ)
+                 for (TQ = 0, ++PQ; TQ < FQ; ++TQ)(sQ[TQ][PQ] = [0, +wQ(QQ, sQ[TQ].key, PQ, qQ)]).data = QQ;
+               for (TQ = 0, zQ = (0, BT.e)(WQ(sQ)); TQ < FQ; ++TQ) sQ[zQ[TQ]].index = TQ;
+               return XQ(sQ, zQ), sQ
+             }
+             return qQ.keys = function(WQ) {
+               return arguments.length ? (QQ = "function" === typeof WQ ? WQ : (0, yT.e)(Array.from(WQ)), qQ) : QQ
+             }, qQ.value = function(QQ) {
+               return arguments.length ? (wQ = "function" === typeof QQ ? QQ : (0, yT.e)(+QQ), qQ) : wQ
+             }, qQ.order = function(QQ) {
+               return arguments.length ? (WQ = null == QQ ? VT : "function" === typeof QQ ? QQ : (0, yT.e)(Array.from(QQ)), qQ) : WQ
+             }, qQ.offset = function(QQ) {
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L75-L76` → after: `L18998-L19061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R18998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L18998-L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L18998-L19061) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L75-L76)

```diff
-       Hp = {
-         current: null
+       Oz = function(QQ, WQ, XQ, wQ, qQ, TQ) {
+         if (!QQ) return null;
+         var zQ = (TQ ? WQ.reverse() : WQ).reduce((function(QQ, WQ) {
+           var qQ, TQ = null !== (qQ = WQ.type) && void 0 !== qQ && qQ.defaultProps ? dz(dz({}, WQ.type.defaultProps), WQ.props) : WQ.props,
+             zQ = TQ.stackId;
+           if (TQ.hide) return QQ;
+           var sQ = TQ[XQ],
+             FQ = QQ[sQ] || {
+               hasStack: !1,
+               stackGroups: {}
+             };
+           if ((0, Vz.B)(zQ)) {
+             var PQ = FQ.stackGroups[zQ] || {
+               numericAxisId: XQ,
+               cateAxisId: wQ,
+               items: []
+ ... (48 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L82` → after: `L19065-L19079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19065-L19079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19065-L19079) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L82)

```diff
-       ep = pp, vp[0].current || tp.current || Hp.current ? mp(pp) : dp = pp
+       var WQ = QQ.axis,
+         XQ = QQ.ticks,
+         wQ = QQ.bandSize,
+         qQ = QQ.entry,
+         TQ = QQ.index,
+         zQ = QQ.dataKey;
+       if ("category" === WQ.type) {
+         if (!WQ.allowDuplicatedCategory && WQ.dataKey && !HT()(qQ[WQ.dataKey])) {
+           var sQ = (0, Vz.f)(XQ, "value", qQ[WQ.dataKey]);
+           if (sQ) return sQ.coordinate + wQ / 2
+         }
+         return XQ[TQ] ? XQ[TQ].coordinate + wQ / 2 : null
+       }
+       var FQ = az(qQ, HT()(zQ) ? WQ.dataKey : zQ);
+       return HT()(FQ) ? null : WQ.scale(FQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L86` → after: `L19195-L19199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19195-L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19195-L19199) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L86)

```diff
-       return ((0, Yp.e)(pp) - (0, Yp.e)(0)) * window.innerHeight / 100
+       return qQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
+         return typeof QQ
+       } : function(QQ) {
+         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
+       }, qQ(QQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L89-L93` → after: `L19202-L19208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19202-L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19202-L19208) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L89-L93)

```diff
-     function mp(pp) {
-       var ip;
-       if (null === (ip = Hp.current) || void 0 === ip || ip.call(Hp, kp(pp)), vp[0].current) {
-         const ip = `${(0,Yp.e)(pp)}vh`;
-         vp[0].current.style.transform = `translateX(calc(0px - ${ip}))`, vp[1].current.style.transform = `translateX(calc(0px + ${ip}))`, vp[2].current.style.transform = `translateY(calc(0px - ${ip}))`, vp[3].current.style.transform = `translateY(calc(0px + ${ip}))`
+     function TQ(QQ, WQ) {
+       var XQ = Object.keys(QQ);
+       if (Object.getOwnPropertySymbols) {
+         var wQ = Object.getOwnPropertySymbols(QQ);
+         WQ && (wQ = wQ.filter((function(WQ) {
+           return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
+         }))), XQ.push.apply(XQ, wQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L95` → after: `L19210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19210) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L95)

```diff
-       tp.current && (tp.current.style.filter = `blur(${Math.round(pp/10)}px)`)
+       return XQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L99-L176` → after: `L19214-L19243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19214-L19243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19214-L19243) · [Before (L99-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L99-L176)

```diff
-       let {
-         custom: ip,
-         touch: cp
-       } = pp;
-       const Ip = (0, op.i)("aimingOverlay", "none"),
-         Sp = "1.2vh",
-         xp = "0.3vh";
-       (0, Op.useEffect)((() => {
-         dp && mp(dp)
-       }), []);
-       const Lp = (0, Op.useRef)(null !== ip);
-       return (0, Op.useLayoutEffect)((() => {
-         var pp;
-         ip ? null === (pp = Hp.current) || void 0 === pp || pp.call(Hp, kp(ep)) : Lp.current && mp(ep);
-         Lp.current = null !== ip
-       }), [ip]), (0, yp.jsxs)(yp.Fragment, {
- ... (62 more removed lines; see GitHub link above)
+       for (var WQ = 1; WQ < arguments.length; WQ++) {
+         var XQ = null != arguments[WQ] ? arguments[WQ] : {};
+         WQ % 2 ? TQ(Object(XQ), !0).forEach((function(WQ) {
+           sQ(QQ, WQ, XQ[WQ])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : TQ(Object(XQ)).forEach((function(WQ) {
+           Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
+         }))
+       }
+       return QQ
+     }
+ 
+     function sQ(QQ, WQ, XQ) {
+       return (WQ = function(QQ) {
+         var WQ = function(QQ, WQ) {
+           if ("object" != qQ(QQ) || !QQ) return QQ;
+           var XQ = QQ[Symbol.toPrimitive];
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L179` → after: `L19301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19301) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L179)

```diff
-   34397: (pp, ip, cp) => {
+   5520: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L182` → after: `L19310-L19315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19310-L19315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19310-L19315) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L182)

```diff
-       e: () => yp
+       f: () => dQ,
+       i: () => UQ,
+       m: () => HQ,
+       o: () => GQ,
+       s: () => bQ,
+       w: () => vQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L184-L185` → after: `L19317-L19323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19317-L19323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19317-L19323) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L184-L185)

```diff
-     cp(34402);
-     var Op = cp(1049),
+     var wQ = XQ(5523),
+       qQ = XQ.n(wQ),
+       TQ = XQ(5536),
+       zQ = XQ.n(TQ),
+       sQ = XQ(5545),
+       FQ = XQ.n(sQ),
+       PQ = XQ(5543),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L187-L188` → after: `L19325-L19376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19325-L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19325-L19376) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L187-L188)

```diff
-       Ip = cp(62),
-       Sp = cp(34392);
+       JQ = XQ(5766),
+       rQ = XQ.n(JQ),
+       IQ = function(QQ) {
+         return 0 === QQ ? 0 : QQ > 0 ? 1 : -1
+       },
+       jQ = function(QQ) {
+         return qQ()(QQ) && QQ.indexOf("%") === QQ.length - 1
+       },
+       BQ = function(QQ) {
+         return gQ()(QQ) && !zQ()(QQ)
+       },
+       yQ = function(QQ) {
+         return rQ()(QQ)
+       },
+       VQ = function(QQ) {
+         return BQ(QQ) || qQ()(QQ)
+ ... (36 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L190-L191` → after: `L19378-L19381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19378-L19381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19378-L19381) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L190-L191)

```diff
-     function xp(pp, ip) {
-       return Math.max(1, Math.round(pp * ip))
+     function dQ(QQ, WQ, XQ) {
+       return QQ && QQ.length ? QQ.find((function(QQ) {
+         return QQ && ("function" === typeof WQ ? WQ(QQ) : FQ()(QQ, WQ)) === XQ
+       })) : null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L193-L261` → after: `L19383-L19395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19383-L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19383-L19395) · [Before (L193-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L193-L261)

```diff
- 
-     function Lp(pp, ip) {
-       const cp = ip * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         Op = function(pp, ip) {
-           if (pp.lines) return xp(pp.lineThickness, ip) % 2;
-           if (pp.dot) return xp(pp.dotSize, ip) % 2;
-           return Yp(pp, ip) % 2
-         }(pp, ip),
-         op = Dp(pp.lineThickness * cp, Op),
-         Ip = xp(pp.lineLength, cp),
-         Sp = Math.round(pp.gap * cp),
-         Lp = pp.outline > 0 ? xp(pp.outline, cp) : 0,
-         Pp = [];
-       if (pp.lines && (Pp.push({
-           x: op + Sp,
-           y: 0,
- ... (53 more removed lines; see GitHub link above)
+     var HQ = function(QQ) {
+         if (!QQ || !QQ.length) return null;
+         for (var WQ = QQ.length, XQ = 0, wQ = 0, qQ = 0, TQ = 0, zQ = 1 / 0, sQ = -1 / 0, FQ = 0, PQ = 0, gQ = 0; gQ < WQ; gQ++) XQ += FQ = QQ[gQ].cx || 0, wQ += PQ = QQ[gQ].cy || 0, qQ += FQ * PQ, TQ += FQ * FQ, zQ = Math.min(zQ, FQ), sQ = Math.max(sQ, FQ);
+         var JQ = WQ * TQ !== XQ * XQ ? (WQ * qQ - XQ * wQ) / (WQ * TQ - XQ * XQ) : 0;
+         return {
+           xmin: zQ,
+           xmax: sQ,
+           a: JQ,
+           b: (wQ - JQ * XQ) / WQ
+         }
+       },
+       aQ = function(QQ, WQ) {
+         return BQ(QQ) && BQ(WQ) ? QQ - WQ : qQ()(QQ) && qQ()(WQ) ? QQ.localeCompare(WQ) : QQ instanceof Date && WQ instanceof Date ? QQ.getTime() - WQ.getTime() : String(QQ).localeCompare(String(WQ))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L263-L268` → after: `L19397-L19414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19397-L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19397-L19414) · [Before (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L263-L268)

```diff
-       return {
-         cell: op,
-         fills: Pp,
-         outlines: Lp > 0 ? Wp : [],
-         ring: yp,
-         ringOutline: Up
+   },
+   6345: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ
+     });
+     var wQ = {
+       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
+       get: function(QQ) {
+         return wQ[QQ]
+       },
+       set: function(QQ, WQ) {
+         if ("string" === typeof QQ) wQ[QQ] = WQ;
+         else {
+           var XQ = Object.keys(QQ);
+           XQ && XQ.length && XQ.forEach((function(WQ) {
+             wQ[WQ] = QQ[WQ]
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L271-L273` → after: `L19417-L19425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19417-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19417-L19425) · [Before (L271-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L271-L273)

```diff
- 
-     function Yp(pp, ip) {
-       return Math.round(pp.circleRadius * ip * 2 + xp(pp.circleThickness, ip))
+   },
+   6622: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => wQ
+     });
+     var wQ = function(QQ, WQ) {
+       var XQ = QQ.alwaysShow,
+         wQ = QQ.ifOverflow;
+       return XQ && (wQ = "extendDomain"), wQ === WQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L275-L277` → after: `L19427-L19433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19427-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19427-L19433) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L275-L277)

```diff
- 
-     function Dp(pp, ip) {
-       return Math.max(2 - ip, 2 * Math.round((pp - ip) / 2) + ip)
+   },
+   5770: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ
+     });
+     var wQ = function(QQ, WQ) {
+       for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L280-L288` → after: `L19444-L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19444-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19444-L19449) · [Before (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L280-L288)

```diff
-     function Ap(pp, ip, cp) {
-       const Op = 2 * cp >= ip - 1;
-       return {
-         x: pp,
-         y: pp,
-         size: ip,
-         border: Math.min(cp, Math.floor(ip / 2)),
-         filled: Op
-       }
+     function wQ(QQ) {
+       return wQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
+         return typeof QQ
+       } : function(QQ) {
+         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
+       }, wQ(QQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L294` → after: `L19453-L19460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19453-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19453-L19460) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L294)

```diff
-       return pp && ip ? `scale(${Wp})` : "scale(1)"
+       var XQ = Object.keys(QQ);
+       if (Object.getOwnPropertySymbols) {
+         var wQ = Object.getOwnPropertySymbols(QQ);
+         WQ && (wQ = wQ.filter((function(WQ) {
+           return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
+         }))), XQ.push.apply(XQ, wQ)
+       }
+       return XQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L298-L302` → after: `L19464-L19472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19464-L19472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19464-L19472) · [Before (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L298-L302)

```diff
-       return "classic" === pp.settings.style ? (0, Pp.jsx)(tp, {
-         ...pp
-       }) : (0, Pp.jsx)(Rp, {
-         ...pp
-       })
+       for (var WQ = 1; WQ < arguments.length; WQ++) {
+         var XQ = null != arguments[WQ] ? arguments[WQ] : {};
+         WQ % 2 ? qQ(Object(XQ), !0).forEach((function(WQ) {
+           zQ(QQ, WQ, XQ[WQ])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : qQ(Object(XQ)).forEach((function(WQ) {
+           Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
+         }))
+       }
+       return QQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L306-L311` → after: `L19475-L19580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19475-L19580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19475-L19580) · [Before (L306-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L306-L311)

```diff
-     function vp(pp, ip) {
-       const cp = {};
-       if (pp.color !== Sp.d.color && (cp.color = (0, Sp.j)(pp.color)), pp.opacity !== Sp.d.opacity && (cp.opacity = pp.opacity / 100), pp.outline !== Sp.d.outline || pp.outlineColor !== Sp.d.outlineColor) {
-         const ip = pp.outline,
-           Op = (0, Sp.j)(pp.outlineColor);
-         cp.textShadow = ip > 0 ? `-${ip}px 0 ${Op}, 0 ${ip}px ${Op}, ${ip}px 0 ${Op}, 0 -${ip}px ${Op}` : "none"
+     function zQ(QQ, WQ, XQ) {
+       return (WQ = function(QQ) {
+         var WQ = function(QQ, WQ) {
+           if ("object" != wQ(QQ) || !QQ) return QQ;
+           var XQ = QQ[Symbol.toPrimitive];
+           if (void 0 !== XQ) {
+             var qQ = XQ.call(QQ, WQ || "default");
+             if ("object" != wQ(qQ)) return qQ;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === WQ ? String : Number)(QQ)
+         }(QQ, "string");
+         return "symbol" == wQ(WQ) ? WQ : WQ + ""
+       }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
+         value: XQ,
+         enumerable: !0,
+ ... (90 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L313-L315` → after: `L19582-L19627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19582-L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19582-L19627) · [Before (L313-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L313-L315)

```diff
-       if (pp.size !== Sp.d.size) {
-         const Op = pp.size / 100;
-         cp.fontSize = ip ? `calc(max(1.3rem, 18px) * ${Op})` : `calc(1.3rem * ${Op})`, cp.marginTop = `-${wp}em`, cp.transformOrigin = `50% calc(50% + ${wp}em)`
+   },
+   5775: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => EQ,
+       h: () => lQ,
+       k: () => hQ,
+       m: () => vQ,
+       n: () => kQ,
+       q: () => RQ,
+       s: () => CQ,
+       u: () => fQ,
+       x: () => LQ,
+       z: () => iQ
+     });
+     var wQ = XQ(5545),
+       qQ = XQ.n(wQ),
+ ... (30 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L321-L341` → after: `L19633-L19637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19633-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19633-L19637) · [Before (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L321-L341)

```diff
-       let {
-         settings: ip,
-         touch: cp,
-         inPreview: Op,
-         inEditor: Ip,
-         pressed: Sp = !1,
-         pressRef: xp
-       } = pp;
-       return (0, Pp.jsx)("div", {
-         className: op()("Crosshair", {
-           Touch: cp,
-           CrosshairInPreview: Op,
-           CrosshairInEditor: Ip || Op
-         }),
-         ref: xp,
-         style: {
- ... (5 more removed lines; see GitHub link above)
+       return UQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
+         return typeof QQ
+       } : function(QQ) {
+         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
+       }, UQ(QQ)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L345` → after: `L19669-L19675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19669-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19669-L19675) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L345)

```diff
-       return pp / ip + "px"
+       var XQ = [],
+         wQ = [];
+       return wQ = Array.isArray(WQ) ? WQ.map((function(QQ) {
+         return vQ(QQ)
+       })) : [vQ(WQ)], aQ(QQ).forEach((function(QQ) {
+         var WQ = qQ()(QQ, "type.displayName") || qQ()(QQ, "type.name"); - 1 !== wQ.indexOf(WQ) && XQ.push(QQ)
+       })), XQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L348-L353` → after: `L19678-L19759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19678-L19759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19678-L19759) · [Before (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L348-L353)

```diff
-     function dp(pp, ip, cp, Op) {
-       return {
-         ...kp(pp, ip, cp),
-         width: Hp(pp.w, cp),
-         height: Hp(pp.h, cp),
-         background: Op
+     function hQ(QQ, WQ) {
+       var XQ = lQ(QQ, WQ);
+       return XQ && XQ[0]
+     }
+     var iQ = function(QQ) {
+         if (!QQ || !QQ.props) return !1;
+         var WQ = QQ.props,
+           XQ = WQ.width,
+           wQ = WQ.height;
+         return !(!(0, BQ.D)(XQ) || XQ <= 0 || !(0, BQ.D)(wQ) || wQ <= 0)
+       },
+       cQ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
+       AQ = function(QQ) {
+         return QQ && QQ.type && FQ()(QQ.type) && cQ.indexOf(QQ.type) >= 0
+       },
+       RQ = function(QQ) {
+ ... (66 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L357-L366` → after: `L19782-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19782-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19782-L19787) · [Before (L357-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L357-L366)

```diff
-     function ep(pp, ip, cp) {
-       return {
-         left: Hp(pp.x, ip),
-         top: Hp(pp.y, ip),
-         width: Hp(pp.size, ip),
-         height: Hp(pp.size, ip),
-         borderWidth: Hp(pp.border, ip),
-         borderColor: cp,
-         background: pp.filled ? cp : void 0
-       }
+     function zQ(QQ) {
+       return zQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
+         return typeof QQ
+       } : function(QQ) {
+         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
+       }, zQ(QQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L375-L379` → after: `L19790-L19796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19790-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19790-L19796) · [Before (L375-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L375-L379)

```diff
-     function kp(pp, ip, cp) {
-       const [Op, op] = pp.arm ? jp[pp.arm] : [0, 0], Ip = Math.round(ip * cp);
-       return {
-         left: Hp(pp.x + Op * Ip, cp),
-         top: Hp(pp.y + op * Ip, cp)
+     function sQ(QQ, WQ) {
+       var XQ = Object.keys(QQ);
+       if (Object.getOwnPropertySymbols) {
+         var wQ = Object.getOwnPropertySymbols(QQ);
+         WQ && (wQ = wQ.filter((function(WQ) {
+           return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
+         }))), XQ.push.apply(XQ, wQ)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L384-L388` → after: `L19802-L19810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19802-L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19802-L19810) · [Before (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L384-L388)

```diff
-       return pp.arm ? {
-         "data-arm": pp.arm,
-         "data-x": pp.x,
-         "data-y": pp.y
-       } : {}
+       for (var WQ = 1; WQ < arguments.length; WQ++) {
+         var XQ = null != arguments[WQ] ? arguments[WQ] : {};
+         WQ % 2 ? sQ(Object(XQ), !0).forEach((function(WQ) {
+           PQ(QQ, WQ, XQ[WQ])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : sQ(Object(XQ)).forEach((function(WQ) {
+           Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
+         }))
+       }
+       return QQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L391-L442` → after: `L19813-L19846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19813-L19846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19813-L19846) · [Before (L391-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L391-L442)

```diff
-     function Rp(pp) {
-       let {
-         settings: ip,
-         inPreview: cp,
-         inEditor: Op,
-         pressed: xp = !1,
-         spread: Yp,
-         spreadRef: Dp
-       } = pp;
-       const Ap = (0, Ip.useRef)(null),
-         {
-           box: yp,
-           dpr: Up
-         } = function(pp) {
-           const [ip, cp] = (0, Ip.useState)({
-             box: {
- ... (36 more removed lines; see GitHub link above)
+     function PQ(QQ, WQ, XQ) {
+       return (WQ = function(QQ) {
+         var WQ = function(QQ, WQ) {
+           if ("object" != zQ(QQ) || !QQ) return QQ;
+           var XQ = QQ[Symbol.toPrimitive];
+           if (void 0 !== XQ) {
+             var wQ = XQ.call(QQ, WQ || "default");
+             if ("object" != zQ(wQ)) return wQ;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === WQ ? String : Number)(QQ)
+         }(QQ, "string");
+         return "symbol" == zQ(WQ) ? WQ : WQ + ""
+       }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
+         value: XQ,
+         enumerable: !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L444-L500` → after: `L19848-L19871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19848-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19848-L19871) · [Before (L444-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L444-L500)

```diff
-             x: Op / cp - pp.left,
-             y: op / cp - pp.top
-           }
-         }(yp, vp.cell, Up),
-         Hp = (0, Sp.j)(ip.color),
-         jp = (0, Sp.j)(ip.outlineColor),
-         Rp = (0, Ip.useRef)(0);
-       (0, Ip.useLayoutEffect)((() => {
-         if (Dp) return Dp.current = pp => {
-           var ip;
-           Rp.current = pp, null === (ip = Ap.current) || void 0 === ip || ip.querySelectorAll("[data-arm]").forEach((ip => {
-             Object.assign(ip.style, kp(function(pp) {
-               return {
-                 x: Number(pp.dataset.x),
-                 y: Number(pp.dataset.y),
-                 arm: pp.dataset.arm
- ... (41 more removed lines; see GitHub link above)
+             type: PQ.props.iconType || XQ.props.legendType,
+             value: QQ.name,
+             color: QQ.fill,
+             payload: QQ
+           }
+         })))
+       }), []) : (XQ || []).map((function(QQ) {
+         var WQ = QQ.item,
+           XQ = WQ.type.defaultProps,
+           wQ = void 0 !== XQ ? FQ(FQ({}, XQ), WQ.props) : {},
+           TQ = wQ.dataKey,
+           zQ = wQ.name,
+           sQ = wQ.legendType;
+         return {
+           inactive: wQ.hide,
+           dataKey: TQ,
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L504` → after: `L19875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19875) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L504)

```diff
-   34411: (pp, ip, cp) => {
+   6354: (QQ, WQ, XQ) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L506` → after: `L19877-L19890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19877-L19890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19877-L19890) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L506)

```diff
-       c: () => Dp,
+       e: () => sQ
+     });
+     var wQ = XQ(6360),
+       qQ = XQ.n(wQ),
+       TQ = XQ(5622),
+       zQ = XQ.n(TQ);
+ 
+     function sQ(QQ, WQ, XQ) {
+       return !0 === WQ ? qQ()(QQ, XQ) : zQ()(WQ) ? qQ()(QQ, WQ) : QQ
+     }
+   },
+   5800: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => gQ,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L508` → after: `L19892-L19894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19892-L19894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19892-L19894) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L508)

```diff
-       h: () => Up
+       h: () => sQ,
+       k: () => JQ,
+       o: () => rQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L510-L517` → after: `L19896-L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19896-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19896-L19898) · [Before (L510-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L510-L517)

```diff
-     var Op = cp(34392);
-     const op = "XH1-",
-       Ip = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       Sp = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       xp = ["color", "outlineColor"],
-       Lp = 1 + 3 * xp.length + Sp.length + 1,
-       Yp = Math.ceil(8 * Lp / Math.log2(62)),
-       Dp = op.length + Yp;
+     var wQ = XQ(61),
+       qQ = XQ(5441),
+       TQ = XQ.n(qQ);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L520-L522` → after: `L19901-L19905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19901-L19905) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L520-L522)

```diff
-       let ip = 90;
-       for (const cp of pp) ip = 31 * ip + cp & 255;
-       return ip
+       return zQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
+         return typeof QQ
+       } : function(QQ) {
+         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
+       }, zQ(QQ)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L524-L532` → after: `L19907-L19936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19907-L19936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19907-L19936) · [Before (L524-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L524-L532)

```diff
-     const Pp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
-       Wp = BigInt(Pp.length);
- 
-     function yp(pp, ip) {
-       let cp = 0n;
-       for (const op of pp) {
-         const pp = Pp.indexOf(op);
-         if (pp < 0) return null;
-         cp = cp * Wp + BigInt(pp)
+     var sQ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "a … [truncated]
+       FQ = ["points", "pathLength"],
+       PQ = {
+         svg: ["viewBox", "children"],
+         polygon: FQ,
+         polyline: FQ
+       },
+       gQ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus" … [truncated]
+       JQ = function(QQ, WQ) {
+         if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
+         var XQ = QQ;
+         if ((0, wQ.isValidElement)(QQ) && (XQ = QQ.props), !TQ()(XQ)) return null;
+         var qQ = {};
+         return Object.keys(XQ).forEach((function(QQ) {
+           gQ.includes(QQ) && (qQ[QQ] = WQ || function(WQ) {
+             return XQ[QQ](XQ, WQ)
+ ... (14 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L534-L538` → after: `L19938-L19953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19938-L19953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19938-L19953) · [Before (L534-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L534-L538)

```diff
-       if (cp >> BigInt(8 * ip) !== 0n) return null;
-       const Op = [];
-       for (let op = 0; op < ip; op++) Op.unshift(Number(0xffn & cp)), cp >>= 8n;
-       return Op
-     }
+   },
+   5785: (QQ, WQ) => {
+     var XQ, wQ = Symbol.for("react.element"),
+       qQ = Symbol.for("react.portal"),
+       TQ = Symbol.for("react.fragment"),
+       zQ = Symbol.for("react.strict_mode"),
+       sQ = Symbol.for("react.profiler"),
+       FQ = Symbol.for("react.provider"),
+       PQ = Symbol.for("react.context"),
+       gQ = Symbol.for("react.server_context"),
+       JQ = Symbol.for("react.forward_ref"),
+       rQ = Symbol.for("react.suspense"),
+       IQ = Symbol.for("react.suspense_list"),
+       jQ = Symbol.for("react.memo"),
+       BQ = Symbol.for("react.lazy"),
+       yQ = Symbol.for("react.offscreen");
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L541-L555` → after: `L19956-L19982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19956-L19982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19956-L19982) · [Before (L541-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L541-L555)

```diff
-       let ip = "shapes" === pp.style ? 1 : 0;
-       Ip.forEach(((cp, Op) => {
-         pp[cp] && (ip |= 1 << Op + 1)
-       }));
-       const cp = [ip];
-       for (const op of xp) {
-         const ip = (0, Op.g)(op, pp[op]);
-         cp.push(ip >> 16 & 255, ip >> 8 & 255, 255 & ip)
-       }
-       for (const op of Sp) {
-         const {
-           min: ip,
-           step: Ip
-         } = Op.b[op];
-         cp.push(Math.round(((0, Op.g)(op, pp[op]) - ip) / Ip))
+       if ("object" === typeof QQ && null !== QQ) {
+         var WQ = QQ.$$typeof;
+         switch (WQ) {
+           case wQ:
+             switch (QQ = QQ.type) {
+               case TQ:
+               case sQ:
+               case zQ:
+               case rQ:
+               case IQ:
+                 return QQ;
+               default:
+                 switch (QQ = QQ && QQ.$$typeof) {
+                   case gQ:
+                   case PQ:
+                   case JQ:
+ ... (11 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L565-L571` → after: `L19985-L19986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19985-L19986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19985-L19986) · [Before (L565-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L565-L571)

```diff
- 
-     function wp(pp) {
-       for (const ip of pp.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Yp}})`, "gi"))) {
-         const pp = vp(yp(ip[1], Lp));
-         if (pp) return pp
-       }
-       return null
+     XQ = Symbol.for("react.module.reference"), WQ.isFragment = function(QQ) {
+       return VQ(QQ) === TQ
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L573` → after: `L19988-L19992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19988-L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19988-L19992) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L573)

```diff
- 
+   },
+   5780: (QQ, WQ, XQ) => {
+     QQ.exports = XQ(5785)
+   },
+   5423: (QQ, WQ, XQ) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L575-L592` → after: `L19994-L20008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R19994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L19994-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/121.js#L19994-L20008) · [Before (L575-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/121.js#L575-L592)

```diff
-       if (!pp || pp.length !== Lp || Ap(pp.slice(0, -1)) !== pp[pp.length - 1]) return null;
-       const ip = pp[0],
-         cp = {
-           ...Op.d,
-           style: 1 & ip ? "shapes" : "classic"
-         };
-       Ip.forEach(((pp, Op) => {
-         cp[pp] = 0 !== (ip & 1 << Op + 1)
-       }));
-       let op = 1;
-       for (const Op of xp) cp[Op] = pp[op] << 16 | pp[op + 1] << 8 | pp[op + 2], op += 3;
-       for (const Ip of Sp) {
-         const {
-           min: ip,
-           step: Sp
-         } = Op.b[Ip];
- ... (2 more removed lines; see GitHub link above)
+       var WQ, XQ, qQ = "";
+       if ("string" == typeof QQ || "number" == typeof QQ) qQ += QQ;
+       else if ("object" == typeof QQ)
+         if (Array.isArray(QQ)) {
+           var TQ = QQ.length;
+           for (WQ = 0; WQ < TQ; WQ++) QQ[WQ] && (XQ = wQ(QQ[WQ])) && (qQ && (qQ += " "), qQ += XQ)
+         } else
+           for (XQ in QQ) QQ[XQ] && (qQ && (qQ += " "), qQ += XQ);
+       return qQ
+     }
+     XQ.d(WQ, {
+       e: () => qQ
+     });
+     const qQ = function() {
+       for (var QQ, WQ, XQ = 0, qQ = "", TQ = arguments.length; XQ < TQ; XQ++)(QQ = arguments[XQ]) && (WQ = wQ(QQ)) && (qQ && (qQ += " "), qQ += WQ);
```
