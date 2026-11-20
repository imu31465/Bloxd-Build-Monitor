# Changed — Bundle Modifications Report (Part 131 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `131 / 133` (**276** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 130](part-130.md) · [Part 132 →](part-132.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/main.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L5564` → after: `L11721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11721) · [Before (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5564)

```diff
-             return "function" === typeof zv ? zv(vv) : zv
+             IT(TT, kT), IT(TT + "Capture", kT)
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L5567-L5609` → after: `L11724-L11725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11724-L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11724-L11725) · [Before (L5567-L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5567-L5609)

```diff
-           function Fp(vv) {
-             var zv = jp(),
-               Pv = zv.queue;
-             if (null === Pv) throw Error(gv(311));
-             Pv.lastRenderedReducer = vv;
-             var hv = wp,
-               Sv = hv.baseQueue,
-               ev = Pv.pending;
-             if (null !== ev) {
-               if (null !== Sv) {
-                 var pv = Sv.next;
-                 Sv.next = ev.next, ev.next = pv
-               }
-               hv.baseQueue = Sv = ev, Pv.pending = null
-             }
-             if (null !== Sv) {
- ... (27 more removed lines; see GitHub link above)
+           function IT(TT, kT) {
+             for (fT[TT] = kT, TT = 0; TT < kT.length; TT++) yT.add(kT[TT])
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L5612-L5628` → after: `L11733-L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11733-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11733-L11734) · [Before (L5612-L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5612-L5628)

```diff
-           function Yp(vv) {
-             var zv = jp(),
-               Pv = zv.queue;
-             if (null === Pv) throw Error(gv(311));
-             Pv.lastRenderedReducer = vv;
-             var hv = Pv.dispatch,
-               Sv = Pv.pending,
-               ev = zv.memoizedState;
-             if (null !== Sv) {
-               Pv.pending = null;
-               var pv = Sv = Sv.next;
-               do {
-                 ev = vv(ev, pv.action), pv = pv.next
-               } while (pv !== Sv);
-               iS(ev, zv.memoizedState) || (kp = !0), zv.memoizedState = ev, null === zv.baseQueue && (zv.baseState = ev), Pv.lastRenderedState = ev
-             }
- ... (1 more removed lines; see GitHub link above)
+           function hT(TT, kT, cT, lT, MT, KT, OT) {
+             this.acceptsBooleans = 2 === kT || 3 === kT || 4 === kT, this.attributeName = lT, this.attributeNamespace = MT, this.mustUseProperty = cT, this.propertyName = TT, this.type = kT, this.sanitizeURL = KT, this.removeEmptyString = OT
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L5631-L5636` → after: `L11764-L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11764-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11764-L11765) · [Before (L5631-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5631-L5636)

```diff
-           function np(vv, zv, Pv) {
-             var hv = zv._getVersion;
-             hv = hv(zv._source);
-             var Sv = zv._workInProgressVersionPrimary;
-             if (null !== Sv ? vv = Sv === hv : (vv = vv.mutableReadLanes, (vv = (Tp & vv) === vv) && (zv._workInProgressVersionPrimary = hv, pp.push(zv))), vv) return Pv(zv._source);
-             throw pp.push(zv), Error(gv(350))
+           function ST(TT) {
+             return TT[1].toUpperCase()
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L5640-L5691` → after: `L11769-L11797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11769-L11797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11769-L11797) · [Before (L5640-L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5640-L5691)

```diff
-             var Sv = kd;
-             if (null === Sv) throw Error(gv(349));
-             var ev = zv._getVersion,
-               pv = ev(zv._source),
-               dv = Np.current,
-               Nv = dv.useState((function() {
-                 return np(Sv, zv, Pv)
-               })),
-               lv = Nv[1],
-               Tv = Nv[0];
-             Nv = ap;
-             var Wv = vv.memoizedState,
-               wv = Wv.refs,
-               av = wv.getSnapshot,
-               sv = Wv.source;
-             Wv = Wv.subscribe;
- ... (36 more removed lines; see GitHub link above)
+             var MT = NT.hasOwnProperty(kT) ? NT[kT] : null;
+             (null !== MT ? 0 === MT.type : !lT && (2 < kT.length && ("o" === kT[0] || "O" === kT[0]) && ("n" === kT[1] || "N" === kT[1]))) || (function(TT, kT, cT, lT) {
+               if (null === kT || "undefined" === typeof kT || function(TT, kT, cT, lT) {
+                   if (null !== cT && 0 === cT.type) return !1;
+                   switch (typeof kT) {
+                     case "function":
+                     case "symbol":
+                       return !0;
+                     case "boolean":
+                       return !lT && (null !== cT ? !cT.acceptsBooleans : "data-" !== (TT = TT.toLowerCase().slice(0, 5)) && "aria-" !== TT);
+                     default:
+                       return !1
+                   }
+                 }(TT, kT, cT, lT)) return !0;
+               if (lT) return !1;
+               if (null !== cT) switch (cT.type) {
+ ... (13 more added lines; see GitHub link above)
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L5693-L5695` → after: `L11799-L11833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11799-L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11799-L11833) · [Before (L5693-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5693-L5695)

```diff
- 
-           function Dp(vv, zv, Pv) {
-             return Op(jp(), vv, zv, Pv)
+           "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family fon … [truncated]
+             var kT = TT.replace(QT, ST);
+             NT[kT] = new hT(kT, 1, !1, TT, null, !1, !1)
+           })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(TT) {
+             var kT = TT.replace(QT, ST);
+             NT[kT] = new hT(kT, 1, !1, TT, "http://www.w3.org/1999/xlink", !1, !1)
+           })), ["xml:base", "xml:lang", "xml:space"].forEach((function(TT) {
+             var kT = TT.replace(QT, ST);
+             NT[kT] = new hT(kT, 1, !1, TT, "http://www.w3.org/XML/1998/namespace", !1, !1)
+           })), ["tabIndex", "crossOrigin"].forEach((function(TT) {
+             NT[TT] = new hT(TT, 1, !1, TT.toLowerCase(), null, !1, !1)
+           })), NT.xlinkHref = new hT("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(TT) {
+             NT[TT] = new hT(TT, 1, !1, TT.toLowerCase(), null, !0, !0)
+           }));
+           var aT = lT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
+             FT = 60103,
+ ... (19 more added lines; see GitHub link above)
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L5699-L5705` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11838) · [Before (L5699-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5699-L5705)

```diff
-             var zv = mp();
-             return "function" === typeof vv && (vv = vv()), zv.memoizedState = zv.baseState = vv, vv = (vv = zv.queue = {
-               pending: null,
-               dispatch: null,
-               lastRenderedReducer: fp,
-               lastRenderedState: vv
-             }).dispatch = Bp.bind(null, Wp, vv), [zv.memoizedState, vv]
+             return null === TT || "object" !== typeof TT ? null : "function" === typeof(TT = RT && TT[RT] || TT["@@iterator"]) ? TT : null
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L5708-L5717` → after: `L11841-L11848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11841-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11841-L11848) · [Before (L5708-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5708-L5717)

```diff
-           function Vp(vv, zv, Pv, hv) {
-             return vv = {
-               tag: vv,
-               create: zv,
-               destroy: Pv,
-               deps: hv,
-               next: null
-             }, null === (zv = Wp.updateQueue) ? (zv = {
-               lastEffect: null
-             }, Wp.updateQueue = zv, zv.lastEffect = vv.next = vv) : null === (Pv = zv.lastEffect) ? zv.lastEffect = vv.next = vv : (hv = Pv.next, Pv.next = vv, vv.next = hv, zv.lastEffect = vv), vv
+           function UT(TT) {
+             if (void 0 === LT) try {
+               throw Error()
+             } catch (cT) {
+               var kT = cT.stack.trim().match(/\n( *(at )?)/);
+               LT = kT && kT[1] || ""
+             }
+             return "\n" + LT + TT
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L5720-L5723` → after: `L11852-L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11852-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11852-L11903) · [Before (L5720-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5720-L5723)

```diff
-           function Up(vv) {
-             return vv = {
-               current: vv
-             }, mp().memoizedState = vv
+           function BT(TT, kT) {
+             if (!TT || YT) return "";
+             YT = !0;
+             var cT = Error.prepareStackTrace;
+             Error.prepareStackTrace = void 0;
+             try {
+               if (kT)
+                 if (kT = function() {
+                     throw Error()
+                   }, Object.defineProperty(kT.prototype, "props", {
+                     set: function() {
+                       throw Error()
+                     }
+                   }), "object" === typeof Reflect && Reflect.construct) {
+                   try {
+                     Reflect.construct(kT, [])
+ ... (36 more added lines; see GitHub link above)
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L5726-L5727` → after: `L11906-L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11906-L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11906-L11928) · [Before (L5726-L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5726-L5727)

```diff
-           function Rp() {
-             return jp().memoizedState
+           function WT(TT) {
+             switch (TT.tag) {
+               case 5:
+                 return UT(TT.type);
+               case 16:
+                 return UT("Lazy");
+               case 13:
+                 return UT("Suspense");
+               case 19:
+                 return UT("SuspenseList");
+               case 0:
+               case 2:
+               case 15:
+                 return TT = BT(TT.type, !1);
+               case 11:
+                 return TT = BT(TT.type.render, !1);
+ ... (7 more added lines; see GitHub link above)
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L5730-L5732` → after: `L11931-L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11931-L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11931-L11967) · [Before (L5730-L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5730-L5732)

```diff
-           function xp(vv, zv, Pv, hv) {
-             var Sv = mp();
-             Wp.flags |= vv, Sv.memoizedState = Vp(1 | zv, Pv, void 0, void 0 === hv ? null : hv)
+           function nT(TT) {
+             if (null == TT) return null;
+             if ("function" === typeof TT) return TT.displayName || TT.name || null;
+             if ("string" === typeof TT) return TT;
+             switch (TT) {
+               case PT:
+                 return "Fragment";
+               case rT:
+                 return "Portal";
+               case mT:
+                 return "Profiler";
+               case wT:
+                 return "StrictMode";
+               case oT:
+                 return "Suspense";
+               case HT:
+ ... (21 more added lines; see GitHub link above)
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L5735-L5741` → after: `L11970-L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11970-L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11970-L11979) · [Before (L5735-L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5735-L5741)

```diff
-           function tp(vv, zv, Pv, hv) {
-             var Sv = jp();
-             hv = void 0 === hv ? null : hv;
-             var ev = void 0;
-             if (null !== wp) {
-               var gv = wp.memoizedState;
-               if (ev = gv.destroy, null !== hv && cp(hv, gv.deps)) return void Vp(zv, Pv, ev, hv)
+           function pT(TT) {
+             switch (typeof TT) {
+               case "boolean":
+               case "number":
+               case "object":
+               case "string":
+               case "undefined":
+                 return TT;
+               default:
+                 return ""
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L5746-L5747` → after: `L11983-L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11983-L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11983-L11985) · [Before (L5746-L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5746-L5747)

```diff
-           function qp(vv, zv) {
-             return xp(516, 4, vv, zv)
+           function iT(TT) {
+             var kT = TT.type;
+             return (TT = TT.nodeName) && "input" === TT.toLowerCase() && ("checkbox" === kT || "radio" === kT)
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L5750-L5751` → after: `L11988-L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11988-L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11988-L12018) · [Before (L5750-L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5750-L5751)

```diff
-           function Ip(vv, zv) {
-             return tp(516, 4, vv, zv)
+           function qT(TT) {
+             TT._valueTracker || (TT._valueTracker = function(TT) {
+               var kT = iT(TT) ? "checked" : "value",
+                 cT = Object.getOwnPropertyDescriptor(TT.constructor.prototype, kT),
+                 lT = "" + TT[kT];
+               if (!TT.hasOwnProperty(kT) && "undefined" !== typeof cT && "function" === typeof cT.get && "function" === typeof cT.set) {
+                 var MT = cT.get,
+                   KT = cT.set;
+                 return Object.defineProperty(TT, kT, {
+                   configurable: !0,
+                   get: function() {
+                     return MT.call(this)
+                   },
+                   set: function(TT) {
+                     lT = "" + TT, KT.call(this, TT)
+                   }
+ ... (15 more added lines; see GitHub link above)
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L5754-L5755` → after: `L12021-L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12021-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12021-L12027) · [Before (L5754-L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5754-L5755)

```diff
-           function Qp(vv, zv) {
-             return tp(4, 2, vv, zv)
+           function sT(TT) {
+             if (!TT) return !1;
+             var kT = TT._valueTracker;
+             if (!kT) return !0;
+             var cT = kT.getValue(),
+               lT = "";
+             return TT && (lT = iT(TT) ? TT.checked ? "true" : "false" : TT.value), (TT = lT) !== cT && (kT.setValue(TT), !0)
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L5758-L5763` → after: `L12030-L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12030-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12030-L12036) · [Before (L5758-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5758-L5763)

```diff
-           function Zp(vv, zv) {
-             return "function" === typeof zv ? (vv = vv(), zv(vv), function() {
-               zv(null)
-             }) : null !== zv && void 0 !== zv ? (vv = vv(), zv.current = vv, function() {
-               zv.current = null
-             }) : void 0
+           function Tk(TT) {
+             if ("undefined" === typeof(TT = TT || ("undefined" !== typeof document ? document : void 0))) return null;
+             try {
+               return TT.activeElement || TT.body
+             } catch (kT) {
+               return TT.body
+             }
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L5766-L5767` → after: `L12039-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12039-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12039-L12046) · [Before (L5766-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5766-L5767)

```diff
-           function Ap(vv, zv, Pv) {
-             return Pv = null !== Pv && void 0 !== Pv ? Pv.concat([vv]) : null, tp(4, 2, Zp.bind(null, zv, vv), Pv)
+           function kk(TT, kT) {
+             var cT = kT.checked;
+             return MT({}, kT, {
+               defaultChecked: void 0,
+               defaultValue: void 0,
+               value: void 0,
+               checked: null != cT ? cT : TT._wrapperState.initialChecked
+             })
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L5773-L5776` → after: `L12050-L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12050-L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12050-L12056) · [Before (L5773-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5773-L5776)

```diff
-             var Pv = jp();
-             zv = void 0 === zv ? null : zv;
-             var hv = Pv.memoizedState;
-             return null !== hv && null !== zv && cp(zv, hv[1]) ? hv[0] : (Pv.memoizedState = [vv, zv], vv)
+             var cT = null == kT.defaultValue ? "" : kT.defaultValue,
+               lT = null != kT.checked ? kT.checked : kT.defaultChecked;
+             cT = pT(null != kT.value ? kT.value : cT), TT._wrapperState = {
+               initialChecked: lT,
+               initialValue: cT,
+               controlled: "checkbox" === kT.type || "radio" === kT.type ? null != kT.checked : null != kT.value
+             }
```

#### 372. `bundles/bloxd.io/main.js` (Changed code · before: `L5780-L5783` → after: `L12060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12060) · [Before (L5780-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5780-L5783)

```diff
-             var Pv = jp();
-             zv = void 0 === zv ? null : zv;
-             var hv = Pv.memoizedState;
-             return null !== hv && null !== zv && cp(zv, hv[1]) ? hv[0] : (vv = vv(), Pv.memoizedState = [vv, zv], vv)
+             null != (kT = kT.checked) && DT(TT, "checked", kT, !1)
```

#### 373. `bundles/bloxd.io/main.js` (Changed code · before: `L5787-L5798` → after: `L12064-L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12064-L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12064-L12069) · [Before (L5787-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5787-L5798)

```diff
-             var Pv = zg();
-             hg(98 > Pv ? 98 : Pv, (function() {
-               vv(!0)
-             })), hg(97 < Pv ? 97 : Pv, (function() {
-               var Pv = lp.transition;
-               lp.transition = 1;
-               try {
-                 vv(!1), zv()
-               } finally {
-                 lp.transition = Pv
-               }
-             }))
+             lk(TT, kT);
+             var cT = pT(kT.value),
+               lT = kT.type;
+             if (null != cT) "number" === lT ? (0 === cT && "" === TT.value || TT.value != cT) && (TT.value = "" + cT) : TT.value !== "" + cT && (TT.value = "" + cT);
+             else if ("submit" === lT || "reset" === lT) return void TT.removeAttribute("value");
+             kT.hasOwnProperty("value") ? Ok(TT, kT.type, cT) : kT.hasOwnProperty("defaultValue") && Ok(TT, kT.type, pT(kT.defaultValue)), null == kT.checked && null != kT.defaultChecked && (TT.defaultChecked = !!kT.defaultChecked)
```

#### 374. `bundles/bloxd.io/main.js` (Changed code · before: `L5802-L5819` → after: `L12073-L12076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12073-L12076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12073-L12076) · [Before (L5802-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5802-L5819)

```diff
-             var hv = UN(),
-               Sv = RN(vv),
-               ev = {
-                 lane: Sv,
-                 action: Pv,
-                 eagerReducer: null,
-                 eagerState: null,
-                 next: null
-               },
-               gv = zv.pending;
-             if (null === gv ? ev.next = ev : (ev.next = gv.next, gv.next = ev), zv.pending = ev, gv = vv.alternate, vv === Wp || null !== gv && gv === Wp) Cp = sp = !0;
-             else {
-               if (0 === vv.lanes && (null === gv || 0 === gv.lanes) && null !== (gv = zv.lastRenderedReducer)) try {
-                 var pv = zv.lastRenderedState,
-                   dv = gv(pv, Pv);
-                 if (ev.eagerReducer = gv, ev.eagerState = dv, iS(dv, pv)) return
- ... (2 more removed lines; see GitHub link above)
+             if (kT.hasOwnProperty("value") || kT.hasOwnProperty("defaultValue")) {
+               var lT = kT.type;
+               if (!("submit" !== lT && "reset" !== lT || void 0 !== kT.value && null !== kT.value)) return;
+               kT = "" + TT._wrapperState.initialValue, cT || kT === TT.value || (TT.value = kT), TT.defaultValue = kT
```

#### 375. `bundles/bloxd.io/main.js` (Changed code · before: `L5999-L6000` → after: `L12081-L12082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12081-L12082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12081-L12082) · [Before (L5999-L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5999-L6000)

```diff
-           function Xp(vv, zv, Pv, hv) {
-             zv.child = null === vv ? Ag(zv, null, Pv, hv) : Zg(zv, vv.child, Pv, hv)
+           function Ok(TT, kT, cT) {
+             "number" === kT && Tk(TT.ownerDocument) === TT || (null == cT ? TT.defaultValue = "" + TT._wrapperState.initialValue : TT.defaultValue !== "" + cT && (TT.defaultValue = "" + cT))
```

#### 376. `bundles/bloxd.io/main.js` (Changed code · before: `L6003-L6006` → after: `L12085-L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12085-L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12085-L12093) · [Before (L6003-L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6003-L6006)

```diff
-           function vd(vv, zv, Pv, hv, Sv) {
-             Pv = Pv.render;
-             var ev = zv.ref;
-             return Cg(zv, Sv), hv = Gp(vv, zv, Pv, hv, ev, Sv), null === vv || kp ? (zv.flags |= 1, Xp(vv, zv, hv, Sv), zv.child) : (zv.updateQueue = vv.updateQueue, zv.flags &= -517, vv.lanes &= ~Sv, jd(vv, zv, Sv))
+           function yk(TT, kT) {
+             return TT = MT({
+               children: void 0
+             }, kT), (kT = function(TT) {
+               var kT = "";
+               return lT.Children.forEach(TT, (function(TT) {
+                 null != TT && (kT += TT)
+               })), kT
+             }(kT.children)) && (TT.children = kT), TT
```

#### 377. `bundles/bloxd.io/main.js` (Changed code · before: `L6009-L6012` → after: `L12096-L12106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12096-L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12096-L12106) · [Before (L6009-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6009-L6012)

```diff
-           function zd(vv, zv, Pv, hv, Sv, ev) {
-             if (null === vv) {
-               var gv = Pv.type;
-               return "function" !== typeof gv || Tl(gv) || void 0 !== gv.defaultProps || null !== Pv.compare || void 0 !== Pv.defaultProps ? ((vv = wl(Pv.type, null, hv, zv, zv.mode, ev)).ref = zv.ref, vv.return = zv, zv.child = vv) : (zv.tag = 15, zv.type = gv, Pd(vv, zv, gv, hv … [truncated]
+           function fk(TT, kT, cT, lT) {
+             if (TT = TT.options, kT) {
+               kT = {};
+               for (var MT = 0; MT < cT.length; MT++) kT["$" + cT[MT]] = !0;
+               for (cT = 0; cT < TT.length; cT++) MT = kT.hasOwnProperty("$" + TT[cT].value), TT[cT].selected !== MT && (TT[cT].selected = MT), MT && lT && (TT[cT].defaultSelected = !0)
+             } else {
+               for (cT = "" + pT(cT), kT = null, MT = 0; MT < TT.length; MT++) {
+                 if (TT[MT].value === cT) return TT[MT].selected = !0, void(lT && (TT[MT].defaultSelected = !0));
+                 null !== kT || TT[MT].disabled || (kT = TT[MT])
+               }
+               null !== kT && (kT.selected = !0)
```

#### 378. `bundles/bloxd.io/main.js` (Changed code · before: `L6017-L6022` → after: `L12110-L12116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12110-L12116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12110-L12116) · [Before (L6017-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6017-L6022)

```diff
-           function Pd(vv, zv, Pv, hv, Sv, ev) {
-             if (null !== vv && GS(vv.memoizedProps, hv) && vv.ref === zv.ref) {
-               if (kp = !1, 0 === (ev & Sv)) return zv.lanes = vv.lanes, jd(vv, zv, ev);
-               0 !== (16384 & vv.flags) && (kp = !0)
-             }
-             return ed(vv, zv, Pv, hv, ev)
+           function xk(TT, kT) {
+             if (null != kT.dangerouslySetInnerHTML) throw Error(OT(91));
+             return MT({}, kT, {
+               value: void 0,
+               defaultValue: void 0,
+               children: "" + TT._wrapperState.initialValue
+             })
```

#### 379. `bundles/bloxd.io/main.js` (Changed code · before: `L6025-L6039` → after: `L12119-L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12119-L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12119-L12128) · [Before (L6025-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6025-L6039)

```diff
-           function hd(vv, zv, Pv) {
-             var hv = zv.pendingProps,
-               Sv = hv.children,
-               ev = null !== vv ? vv.memoizedState : null;
-             if ("hidden" === hv.mode || "unstable-defer-without-hiding" === hv.mode)
-               if (0 === (4 & zv.mode)) zv.memoizedState = {
-                 baseLanes: 0
-               }, HN(zv, Pv);
-               else {
-                 if (0 === (1073741824 & Pv)) return vv = null !== ev ? ev.baseLanes | Pv : Pv, zv.lanes = zv.childLanes = 1073741824, zv.memoizedState = {
-                   baseLanes: vv
-                 }, HN(zv, vv), null;
-                 zv.memoizedState = {
-                   baseLanes: 0
-                 }, HN(zv, null !== ev ? ev.baseLanes : Pv)
+           function Ik(TT, kT) {
+             var cT = kT.value;
+             if (null == cT) {
+               if (cT = kT.children, kT = kT.defaultValue, null != cT) {
+                 if (null != kT) throw Error(OT(92));
+                 if (Array.isArray(cT)) {
+                   if (!(1 >= cT.length)) throw Error(OT(93));
+                   cT = cT[0]
+                 }
+                 kT = cT
```

#### 380. `bundles/bloxd.io/main.js` (Changed code · before: `L6041-L6042` → after: `L12130-L12134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12130-L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12130-L12134) · [Before (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6041-L6042)

```diff
-             else null !== ev ? (hv = ev.baseLanes | Pv, zv.memoizedState = null) : hv = Pv, HN(zv, hv);
-             return Xp(vv, zv, Sv, Pv), zv.child
+               null == kT && (kT = ""), cT = kT
+             }
+             TT._wrapperState = {
+               initialValue: pT(cT)
+             }
```

#### 381. `bundles/bloxd.io/main.js` (Changed code · before: `L6046-L6047` → after: `L12138-L12140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12138-L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12138-L12140) · [Before (L6046-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6046-L6047)

```diff
-             var Pv = zv.ref;
-             (null === vv && null !== Pv || null !== vv && vv.ref !== Pv) && (zv.flags |= 128)
+             var cT = pT(kT.value),
+               lT = pT(kT.defaultValue);
+             null != cT && ((cT = "" + cT) !== TT.value && (TT.value = cT), null == kT.defaultValue && TT.defaultValue !== cT && (TT.defaultValue = cT)), null != lT && (TT.defaultValue = "" + lT)
```

#### 382. `bundles/bloxd.io/main.js` (Changed code · before: `L6050-L6052` → after: `L12143-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12143-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12143-L12145) · [Before (L6050-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6050-L6052)

```diff
-           function ed(vv, zv, Pv, hv, Sv) {
-             var ev = Oe(Pv) ? Ye : fe.current;
-             return ev = ne(zv, ev), Cg(zv, Sv), Pv = Gp(vv, zv, Pv, hv, ev, Sv), null === vv || kp ? (zv.flags |= 1, Xp(vv, zv, Pv, Sv), zv.child) : (zv.updateQueue = vv.updateQueue, zv.flags &= -517, vv.lanes &= ~Sv, jd(vv, zv, Sv))
+           function Ck(TT) {
+             var kT = TT.textContent;
+             kT === TT._wrapperState.initialValue && "" !== kT && null !== kT && (TT.value = kT)
```

#### 383. `bundles/bloxd.io/main.js` (Changed code · before: `L6055-L6078` → after: `L12150-L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12150-L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12150-L12157) · [Before (L6055-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6055-L6078)

```diff
-           function gd(vv, zv, Pv, hv, Sv) {
-             if (Oe(Pv)) {
-               var ev = !0;
-               Ue(zv)
-             } else ev = !1;
-             if (Cg(zv, Sv), null === zv.stateNode) null !== vv && (vv.alternate = null, zv.alternate = null, zv.flags |= 2), Ug(zv, Pv, hv), xg(zv, Pv, hv, Sv), hv = !0;
-             else if (null === vv) {
-               var gv = zv.stateNode,
-                 pv = zv.memoizedProps;
-               gv.props = pv;
-               var dv = gv.context,
-                 Nv = Pv.contextType;
-               "object" === typeof Nv && null !== Nv ? Nv = ig(Nv) : Nv = ne(zv, Nv = Oe(Pv) ? Ye : fe.current);
-               var lv = Pv.getDerivedStateFromProps,
-                 Tv = "function" === typeof lv || "function" === typeof gv.getSnapshotBeforeUpdate;
-               Tv || "function" !== typeof gv.UNSAFE_componentWillReceiveProps && "function" !== typeof gv.componentWillReceiveProps || (pv !== hv || dv !== Nv) && Rg(zv, gv, hv, Nv), cg = !1;
- ... (8 more removed lines; see GitHub link above)
+           function tk(TT) {
+             switch (TT) {
+               case "svg":
+                 return "http://www.w3.org/2000/svg";
+               case "math":
+                 return "http://www.w3.org/1998/Math/MathML";
+               default:
+                 return "http://www.w3.org/1999/xhtml"
```

#### 384. `bundles/bloxd.io/main.js` (Changed code · before: `L6083-L6089` → after: `L12161-L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12161-L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12161-L12162) · [Before (L6083-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6083-L6089)

```diff
-           function pd(vv, zv, Pv, hv, Sv, ev) {
-             Sd(vv, zv);
-             var gv = 0 !== (64 & zv.flags);
-             if (!hv && !gv) return Sv && Re(zv, Pv, !1), jd(vv, zv, ev);
-             hv = zv.stateNode, rp.current = zv;
-             var pv = gv && "function" !== typeof Pv.getDerivedStateFromError ? null : hv.render();
-             return zv.flags |= 1, null !== vv && gv ? (zv.child = Zg(zv, vv.child, null, ev), zv.child = Zg(zv, null, pv, ev)) : Xp(vv, zv, pv, ev), zv.memoizedState = hv.state, Sv && Re(zv, Pv, !0), zv.child
+           function hk(TT, kT) {
+             return null == TT || "http://www.w3.org/1999/xhtml" === TT ? tk(kT) : "http://www.w3.org/2000/svg" === TT && "foreignObject" === kT ? "http://www.w3.org/1999/xhtml" : TT
```

#### 385. `bundles/bloxd.io/main.js` (Changed code · before: `L6092-L6094` → after: `L12176-L12181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12176-L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12176-L12181) · [Before (L6092-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6092-L6094)

```diff
-           function dd(vv) {
-             var zv = vv.stateNode;
-             zv.pendingContext ? Ke(0, zv.pendingContext, zv.pendingContext !== zv.context) : zv.context && Ke(0, zv.context, !1), Jg(vv, zv.containerInfo)
+           function Dk(TT, kT) {
+             if (kT) {
+               var cT = TT.firstChild;
+               if (cT && cT === TT.lastChild && 3 === cT.nodeType) return void(cT.nodeValue = kT)
+             }
+             TT.textContent = kT
```

#### 386. `bundles/bloxd.io/main.js` (Changed code · before: `L6096-L6099` → after: `L12183-L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12183-L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12183-L12227) · [Before (L6096-L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6096-L6099)

```diff
-           var Nd, ld, Td, Wd, wd = {
-             dehydrated: null,
-             retryLane: 0
-           };
+           var ak = {
+               animationIterationCount: !0,
+               borderImageOutset: !0,
+               borderImageSlice: !0,
+               borderImageWidth: !0,
+               boxFlex: !0,
+               boxFlexGroup: !0,
+               boxOrdinalGroup: !0,
+               columnCount: !0,
+               columns: !0,
+               flex: !0,
+               flexGrow: !0,
+               flexPositive: !0,
+               flexShrink: !0,
+               flexNegative: !0,
+               flexOrder: !0,
+ ... (29 more added lines; see GitHub link above)
```

#### 387. `bundles/bloxd.io/main.js` (Changed code · before: `L6102-L6125` → after: `L12230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12230) · [Before (L6102-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6102-L6125)

```diff
-             var hv, Sv = zv.pendingProps,
-               ev = rg.current,
-               gv = !1;
-             return (hv = 0 !== (64 & zv.flags)) || (hv = (null === vv || null !== vv.memoizedState) && 0 !== (2 & ev)), hv ? (gv = !0, zv.flags &= -65) : null !== vv && null === vv.memoizedState || void 0 === Sv.fallback || !0 === Sv.unstable_avoidThisFallback || (ev |= 1), me(rg … [truncated]
-               baseLanes: Pv
-             }, zv.memoizedState = wd, vv) : "number" === typeof Sv.unstable_expectedLoadTime ? (vv = sd(zv, vv, ev, Pv), zv.child.memoizedState = {
-               baseLanes: Pv
-             }, zv.memoizedState = wd, zv.lanes = 33554432, vv) : ((Pv = sl({
-               mode: "visible",
-               children: vv
-             }, zv.mode, Pv, null)).return = zv, zv.child = Pv)) : (vv.memoizedState, gv ? (Sv = id(vv, zv, Sv.children, Sv.fallback, Pv), gv = zv.child, ev = vv.child.memoizedState, gv.memoizedState = null === ev ? {
-               baseLanes: Pv
-             } : {
-               baseLanes: ev.baseLanes | Pv
-             }, gv.childLanes = vv.childLanes & ~Pv, zv.memoizedState = wd, Sv) : (Pv = Cd(vv, zv, Sv.children, Pv), zv.memoizedState = null, Pv))
-           }
- ... (8 more removed lines; see GitHub link above)
+             return null == kT || "boolean" === typeof kT || "" === kT ? "" : cT || "number" !== typeof kT || 0 === kT || ak.hasOwnProperty(TT) && ak[TT] ? ("" + kT).trim() : kT + "px"
```

#### 388. `bundles/bloxd.io/main.js` (Changed code · before: `L6128-L6133` → after: `L12233-L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12233-L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12233-L12239) · [Before (L6128-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6128-L6133)

```diff
-           function Cd(vv, zv, Pv, hv) {
-             var Sv = vv.child;
-             return vv = Sv.sibling, Pv = Wl(Sv, {
-               mode: "visible",
-               children: Pv
-             }), 0 === (2 & zv.mode) && (Pv.lanes = hv), Pv.return = zv, Pv.sibling = null, null !== vv && (vv.nextEffect = null, vv.flags = 8, zv.firstEffect = zv.lastEffect = vv), zv.child = Pv
+           function Pk(TT, kT) {
+             for (var cT in TT = TT.style, kT)
+               if (kT.hasOwnProperty(cT)) {
+                 var lT = 0 === cT.indexOf("--"),
+                   MT = rk(cT, kT[cT], lT);
+                 "float" === cT && (cT = "cssFloat"), lT ? TT.setProperty(cT, MT) : TT[cT] = MT
+               }
```

#### 389. `bundles/bloxd.io/main.js` (Changed code · before: `L6135-L6144` → after: `L12241-L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12241-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12241-L12274) · [Before (L6135-L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6135-L6144)

```diff
- 
-           function id(vv, zv, Pv, hv, Sv) {
-             var ev = zv.mode,
-               gv = vv.child;
-             vv = gv.sibling;
-             var pv = {
-               mode: "hidden",
-               children: Pv
-             };
-             return 0 === (2 & ev) && zv.child !== gv ? ((Pv = zv.child).childLanes = 0, Pv.pendingProps = pv, null !== (gv = Pv.lastEffect) ? (zv.firstEffect = Pv.firstEffect, zv.lastEffect = gv, gv.nextEffect = null) : zv.firstEffect = zv.lastEffect = null) : Pv = Wl(gv, pv), nu … [truncated]
+           Object.keys(ak).forEach((function(TT) {
+             Fk.forEach((function(kT) {
+               kT = kT + TT.charAt(0).toUpperCase() + TT.substring(1), ak[kT] = ak[TT]
+             }))
+           }));
+           var wk = MT({
+             menuitem: !0
+           }, {
+             area: !0,
+             base: !0,
+             br: !0,
+             col: !0,
+             embed: !0,
+             hr: !0,
+             img: !0,
+             input: !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 390. `bundles/bloxd.io/main.js` (Changed code · before: `L6148-L6150` → after: `L12278-L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12278-L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12278-L12291) · [Before (L6148-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6148-L6150)

```diff
-             vv.lanes |= zv;
-             var Pv = vv.alternate;
-             null !== Pv && (Pv.lanes |= zv), sg(vv.return, zv)
+             if (-1 === TT.indexOf("-")) return "string" === typeof kT.is;
+             switch (TT) {
+               case "annotation-xml":
+               case "color-profile":
+               case "font-face":
+               case "font-face-src":
+               case "font-face-uri":
+               case "font-face-format":
+               case "font-face-name":
+               case "missing-glyph":
+                 return !1;
+               default:
+                 return !0
+             }
```

#### 391. `bundles/bloxd.io/main.js` (Changed code · before: `L6153-L6163` → after: `L12294-L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12294-L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12294-L12295) · [Before (L6153-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6153-L6163)

```diff
-           function Gd(vv, zv, Pv, hv, Sv, ev) {
-             var gv = vv.memoizedState;
-             null === gv ? vv.memoizedState = {
-               isBackwards: zv,
-               Ma: null,
-               renderingStartTime: 0,
-               last: hv,
-               tail: Pv,
-               tailMode: Sv,
-               lastEffect: ev
-             } : (gv.isBackwards = zv, gv.Ma = null, gv.renderingStartTime = 0, gv.last = hv, gv.tail = Pv, gv.tailMode = Sv, gv.lastEffect = ev)
+           function zk(TT) {
+             return (TT = TT.target || TT.srcElement || window).correspondingUseElement && (TT = TT.correspondingUseElement), 3 === TT.nodeType ? TT.parentNode : TT
```

#### 392. `bundles/bloxd.io/main.js` (Changed code · before: `L6166-L6208` → after: `L12301-L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12301-L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12301-L12305) · [Before (L6166-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6166-L6208)

```diff
-           function md(vv, zv, Pv) {
-             var hv = zv.pendingProps,
-               Sv = hv.revealOrder,
-               ev = hv.tail;
-             if (Xp(vv, zv, hv.children, Pv), 0 !== (2 & (hv = rg.current))) hv = 1 & hv | 2, zv.flags |= 64;
-             else {
-               if (null !== vv && 0 !== (64 & vv.flags)) vv: for (vv = zv.child; null !== vv;) {
-                 if (13 === vv.tag) null !== vv.memoizedState && cd(vv, Pv);
-                 else if (19 === vv.tag) cd(vv, Pv);
-                 else if (null !== vv.child) {
-                   vv.child.return = vv, vv = vv.child;
-                   continue
-                 }
-                 if (vv === zv) break vv;
-                 for (; null === vv.sibling;) {
-                   if (null === vv.return || vv.return === zv) break vv;
- ... (27 more removed lines; see GitHub link above)
+           function Gk(TT) {
+             if (TT = jK(TT)) {
+               if ("function" !== typeof Jk) throw Error(OT(280));
+               var kT = TT.stateNode;
+               kT && (kT = tK(kT), Jk(TT.stateNode, TT.type, kT))
```

#### 393. `bundles/bloxd.io/main.js` (Changed code · before: `L6213-L6220` → after: `L12309-L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12309-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12309-L12318) · [Before (L6213-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6213-L6220)

```diff
-           function jd(vv, zv, Pv) {
-             if (null !== vv && (zv.dependencies = vv.dependencies), eN |= zv.lanes, 0 !== (Pv & zv.childLanes)) {
-               if (null !== vv && zv.child !== vv.child) throw Error(gv(153));
-               if (null !== zv.child) {
-                 for (Pv = Wl(vv = zv.child, vv.pendingProps), zv.child = Pv, Pv.return = zv; null !== vv.sibling;) vv = vv.sibling, (Pv = Pv.sibling = Wl(vv, vv.pendingProps)).return = zv;
-                 Pv.sibling = null
-               }
-               return zv.child
+           function Vk(TT) {
+             Hk ? ek ? ek.push(TT) : ek = [TT] : Hk = TT
+           }
+ 
+           function Ek() {
+             if (Hk) {
+               var TT = Hk,
+                 kT = ek;
+               if (ek = Hk = null, Gk(TT), kT)
+                 for (TT = 0; TT < kT.length; TT++) Gk(kT[TT])
```

#### 394. `bundles/bloxd.io/main.js` (Changed code · before: `L6226-L6236` → after: `L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12323) · [Before (L6226-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6226-L6236)

```diff
-             if (!vp) switch (vv.tailMode) {
-               case "hidden":
-                 zv = vv.tail;
-                 for (var Pv = null; null !== zv;) null !== zv.alternate && (Pv = zv), zv = zv.sibling;
-                 null === Pv ? vv.tail = null : Pv.sibling = null;
-                 break;
-               case "collapsed":
-                 Pv = vv.tail;
-                 for (var hv = null; null !== Pv;) null !== Pv.alternate && (hv = Pv), Pv = Pv.sibling;
-                 null === hv ? zv || null === vv.tail ? vv.tail = null : vv.tail.sibling = null : hv.sibling = null
-             }
+             return TT(kT)
```

#### 395. `bundles/bloxd.io/main.js` (Changed code · before: `L6239-L6365` → after: `L12326-L12440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12326-L12440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12326-L12440) · [Before (L6239-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6239-L6365)

```diff
-           function Fd(vv, zv, Pv) {
-             var hv = zv.pendingProps;
-             switch (zv.tag) {
-               case 2:
-               case 16:
-               case 15:
-               case 0:
-               case 11:
-               case 7:
-               case 8:
-               case 12:
-               case 9:
-               case 14:
-                 return null;
-               case 1:
-               case 17:
- ... (111 more removed lines; see GitHub link above)
+           function uk(TT, kT, cT, lT, MT) {
+             return TT(kT, cT, lT, MT)
+           }
+ 
+           function Xk() {}
+           var dk = Zk,
+             Lk = !1,
+             Rk = !1;
+ 
+           function gk() {
+             null === Hk && null === ek || (Xk(), Ek())
+           }
+ 
+           function Uk(TT, kT) {
+             var cT = TT.stateNode;
+             if (null === cT) return null;
+ ... (99 more added lines; see GitHub link above)
```

#### 396. `bundles/bloxd.io/main.js` (Changed code · before: `L6367-L6387` → after: `L12442-L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12442-L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12442-L12448) · [Before (L6367-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6367-L6387)

```diff
-                     Oz(Pv, ev);
-                     var lv = ev;
-                     for (pv in lv)
-                       if (lv.hasOwnProperty(pv)) {
-                         var Tv = lv[pv];
-                         "style" === pv ? Yz(vv, Tv) : "dangerouslySetInnerHTML" === pv ? null != (Tv = Tv ? Tv.__html : void 0) && Gz(vv, Tv) : "children" === pv ? "string" === typeof Tv ? ("textarea" !== Pv || "" !== Tv) && mz(vv, Tv) : "number" === typeof Tv && mz(vv, "" + Tv)  … [truncated]
-                       } switch (Pv) {
-                       case "input":
-                         Xv(vv), ez(vv, hv, !1);
-                         break;
-                       case "textarea":
-                         Xv(vv), Wz(vv);
-                         break;
-                       case "option":
-                         null != hv.value && vv.setAttribute("value", "" + rv(hv.value));
-                         break;
- ... (5 more removed lines; see GitHub link above)
+                     break
+                   }
+                   if (MT.child === KT.child) {
+                     for (KT = MT.child; KT;) {
+                       if (KT === cT) return lc(MT), TT;
+                       if (KT === lT) return lc(MT), kT;
+                       KT = KT.sibling
```

#### 397. `bundles/bloxd.io/main.js` (Changed code · before: `L6389` → after: `L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12450) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6389)

```diff
-                     XS(Pv, hv) && (zv.flags |= 4)
+                     throw Error(OT(188))
```

#### 398. `bundles/bloxd.io/main.js` (Changed code · before: `L6391-L6410` → after: `L12452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12452) · [Before (L6391-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6391-L6410)

```diff
-                   null !== zv.ref && (zv.flags |= 128)
-                 }
-                 return null;
-               case 6:
-                 if (vv && null != zv.stateNode) Wd(vv, zv, vv.memoizedProps, hv);
-                 else {
-                   if ("string" !== typeof hv && null === zv.stateNode) throw Error(gv(166));
-                   Pv = Bg(yg.current), Bg(Hg.current), ep(zv) ? (hv = zv.stateNode, Pv = zv.memoizedProps, hv[pe] = zv, hv.nodeValue !== Pv && (zv.flags |= 4)) : ((hv = (9 === Pv.nodeType ? Pv : Pv.ownerDocument).createTextNode(hv))[pe] = zv, zv.stateNode = hv)
-                 }
-                 return null;
-               case 13:
-                 return Ge(rg), hv = zv.memoizedState, 0 !== (64 & zv.flags) ? (zv.lanes = Pv, zv) : (hv = null !== hv, Pv = !1, null === vv ? void 0 !== zv.memoizedProps.fallback && ep(zv) : Pv = null !== vv.memoizedState, hv && !Pv && 0 !== (2 & zv.mode) && (null === vv && !0 != … [truncated]
-               case 4:
-                 return Eg(), ld(zv), null === vv && LS(zv.stateNode.containerInfo), null;
-               case 10:
-                 return ag(zv), null;
- ... (4 more removed lines; see GitHub link above)
+                   if (cT.return !== lT.return) cT = MT, lT = KT;
```

#### 399. `bundles/bloxd.io/main.js` (Changed code · before: `L6412-L6419` → after: `L12454-L12473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12454-L12473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12454-L12473) · [Before (L6412-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6412-L6419)

```diff
-                     if (0 !== PN || null !== vv && 0 !== (64 & vv.flags))
-                       for (vv = zv.child; null !== vv;) {
-                         if (null !== (Nv = kg(vv))) {
-                           for (zv.flags |= 64, fd(hv, !1), null !== (pv = Nv.updateQueue) && (zv.updateQueue = pv, zv.flags |= 4), null === hv.lastEffect && (zv.firstEffect = null), zv.lastEffect = hv.lastEffect, hv = Pv, Pv = zv.child; null !== Pv;) vv = hv, (pv = Pv).flags &= 2 … [truncated]
-                             lanes: vv.lanes,
-                             firstContext: vv.firstContext
-                           }), Pv = Pv.sibling;
-                           return me(rg, 1 & rg.current | 2), zv.child
+                     for (var yT = !1, fT = MT.child; fT;) {
+                       if (fT === cT) {
+                         yT = !0, cT = MT, lT = KT;
+                         break
+                       }
+                       if (fT === lT) {
+                         yT = !0, lT = MT, cT = KT;
+                         break
+                       }
+                       fT = fT.sibling
+                     }
+                     if (!yT) {
+                       for (fT = KT.child; fT;) {
+                         if (fT === cT) {
+                           yT = !0, cT = KT, lT = MT;
+                           break
+ ... (4 more added lines; see GitHub link above)
```

#### 400. `bundles/bloxd.io/main.js` (Changed code · before: `L6423` → after: `L12477-L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12477-L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12477-L12478) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6423)

```diff
-                     null !== hv.tail && vg() > lN && (zv.flags |= 64, pv = !0, fd(hv, !1), zv.lanes = 33554432)
+                       if (!yT) throw Error(OT(189))
+                     }
```

#### 401. `bundles/bloxd.io/main.js` (Changed code · before: `L6425-L6430` → after: `L12480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12480) · [Before (L6425-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6425-L6430)

```diff
-                 else {
-                   if (!pv)
-                     if (null !== (vv = kg(Nv))) {
-                       if (zv.flags |= 64, pv = !0, null !== (Pv = vv.updateQueue) && (zv.updateQueue = Pv, zv.flags |= 4), fd(hv, !0), null === hv.tail && "hidden" === hv.tailMode && !Nv.alternate && !vp) return null !== (zv = zv.lastEffect = hv.lastEffect) && (zv.nextEffect = nu … [truncated]
-                     } else 2 * vg() - hv.renderingStartTime > lN && 1073741824 !== Pv && (zv.flags |= 64, pv = !0, fd(hv, !1), zv.lanes = 33554432);
-                   hv.isBackwards ? (Nv.sibling = zv.child, zv.child = Nv) : (null !== (Pv = hv.last) ? Pv.sibling = Nv : zv.child = Nv, hv.last = Nv)
+                   if (cT.alternate !== lT) throw Error(OT(190))
```

#### 402. `bundles/bloxd.io/main.js` (Changed code · before: `L6432-L6435` → after: `L12482-L12495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12482-L12495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12482-L12495) · [Before (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6432-L6435)

```diff
-                 return null !== hv.tail ? (Pv = hv.tail, hv.Ma = Pv, hv.tail = Pv.sibling, hv.lastEffect = zv.lastEffect, hv.renderingStartTime = vg(), Pv.sibling = null, zv = rg.current, me(rg, pv ? 1 & zv | 2 : 1 & zv), Pv) : null;
-               case 23:
-               case 24:
-                 return MN(), null !== vv && null !== vv.memoizedState !== (null !== zv.memoizedState) && "unstable-defer-without-hiding" !== hv.mode && (zv.flags |= 4), null
+                 if (3 !== cT.tag) throw Error(OT(188));
+                 return cT.stateNode.current === cT ? TT : kT
+               }(TT), !TT) return null;
+             for (var kT = TT;;) {
+               if (5 === kT.tag || 6 === kT.tag) return kT;
+               if (kT.child) kT.child.return = kT, kT = kT.child;
+               else {
+                 if (kT === TT) break;
+                 for (; !kT.sibling;) {
+                   if (!kT.return || kT.return === TT) return null;
+                   kT = kT.return
+                 }
+                 kT.sibling.return = kT.return, kT = kT.sibling
+               }
```

#### 403. `bundles/bloxd.io/main.js` (Changed code · before: `L6437` → after: `L12497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12497) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6437)

```diff
-             throw Error(gv(156, zv.tag))
+             return null
```

#### 404. `bundles/bloxd.io/main.js` (Changed code · before: `L6440-L6463` → after: `L12500-L12523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12500-L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12500-L12523) · [Before (L6440-L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6440-L6463)

```diff
-           function Yd(vv) {
-             switch (vv.tag) {
-               case 1:
-                 Oe(vv.type) && De();
-                 var zv = vv.flags;
-                 return 4096 & zv ? (vv.flags = -4097 & zv | 64, vv) : null;
-               case 3:
-                 if (Eg(), Ge(Fe), Ge(fe), dp(), 0 !== (64 & (zv = vv.flags))) throw Error(gv(285));
-                 return vv.flags = -4097 & zv | 64, vv;
-               case 5:
-                 return bg(vv), null;
-               case 13:
-                 return Ge(rg), 4096 & (zv = vv.flags) ? (vv.flags = -4097 & zv | 64, vv) : null;
-               case 19:
-                 return Ge(rg), null;
-               case 4:
- ... (8 more removed lines; see GitHub link above)
+           function Kc(TT, kT) {
+             for (var cT = TT.alternate; null !== kT;) {
+               if (kT === TT || kT === cT) return !0;
+               kT = kT.return
+             }
+             return !1
+           }
+           var Oc, yc, fc, xc, Ic = !1,
+             Ac = [],
+             Cc = null,
+             jc = null,
+             vc = null,
+             tc = new Map,
+             hc = new Map,
+             Nc = [],
+             Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ") … [truncated]
+ ... (8 more added lines; see GitHub link above)
```

#### 405. `bundles/bloxd.io/main.js` (Changed code · before: `L6468-L6481` → after: `L12528-L12547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12528-L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12528-L12547) · [Before (L6468-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6468-L6481)

```diff
-             try {
-               var Pv = "",
-                 hv = zv;
-               do {
-                 Pv += ov(hv), hv = hv.return
-               } while (hv);
-               var Sv = Pv
-             } catch (ev) {
-               Sv = "\nError generating stack: " + ev.message + "\n" + ev.stack
-             }
-             return {
-               value: vv,
-               source: zv,
-               stack: Sv
+             switch (TT) {
+               case "focusin":
+               case "focusout":
+                 Cc = null;
+                 break;
+               case "dragenter":
+               case "dragleave":
+                 jc = null;
+                 break;
+               case "mouseover":
+               case "mouseout":
+                 vc = null;
+                 break;
+               case "pointerover":
+               case "pointerout":
+                 tc.delete(kT.pointerId);
+ ... (4 more added lines; see GitHub link above)
```

#### 406. `bundles/bloxd.io/main.js` (Changed code · before: `L6485-L6492` → after: `L12551-L12552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12551-L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12551-L12552) · [Before (L6485-L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6485-L6492)

```diff
-           function Od(vv, zv) {
-             try {
-               console.error(zv.value)
-             } catch (Pv) {
-               setTimeout((function() {
-                 throw Pv
-               }))
-             }
+           function ac(TT, kT, cT, lT, MT, KT) {
+             return null === TT || TT.nativeEvent !== KT ? (TT = Sc(kT, cT, lT, MT, KT), null !== kT && (null !== (kT = jK(kT)) && yc(kT)), TT) : (TT.eventSystemFlags |= lT, kT = TT.targetContainers, null !== MT && -1 === kT.indexOf(MT) && kT.push(MT), TT)
```

#### 407. `bundles/bloxd.io/main.js` (Changed code · before: `L6494-L6506` → after: `L12554-L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12554-L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12554-L12566) · [Before (L6494-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6494-L6506)

```diff
-           Nd = function(vv, zv) {
-             for (var Pv = zv.child; null !== Pv;) {
-               if (5 === Pv.tag || 6 === Pv.tag) vv.appendChild(Pv.stateNode);
-               else if (4 !== Pv.tag && null !== Pv.child) {
-                 Pv.child.return = Pv, Pv = Pv.child;
-                 continue
-               }
-               if (Pv === zv) break;
-               for (; null === Pv.sibling;) {
-                 if (null === Pv.return || Pv.return === zv) return;
-                 Pv = Pv.return
-               }
-               Pv.sibling.return = Pv.return, Pv = Pv.sibling
+ 
+           function Fc(TT) {
+             var kT = CK(TT.target);
+             if (null !== kT) {
+               var cT = kc(kT);
+               if (null !== cT)
+                 if (13 === (kT = cT.tag)) {
+                   if (null !== (kT = cc(cT))) return TT.blockedOn = kT, void xc(TT.lanePriority, (function() {
+                     KT.unstable_runWithPriority(TT.priority, (function() {
+                       fc(cT)
+                     }))
+                   }))
+                 } else if (3 === kT && cT.stateNode.hydrate) return void(TT.blockedOn = 3 === cT.tag ? cT.stateNode.containerInfo : null)
```

#### 408. `bundles/bloxd.io/main.js` (Changed code · before: `L6508-L6551` → after: `L12568-L12576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12568-L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12568-L12576) · [Before (L6508-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6508-L6551)

```diff
-           }, ld = function() {}, Td = function(vv, zv, Pv, hv) {
-             var ev = vv.memoizedProps;
-             if (ev !== hv) {
-               vv = zv.stateNode, Bg(Hg.current);
-               var gv, pv = null;
-               switch (Pv) {
-                 case "input":
-                   ev = zz(vv, ev), hv = zz(vv, hv), pv = [];
-                   break;
-                 case "option":
-                   ev = pz(vv, ev), hv = pz(vv, hv), pv = [];
-                   break;
-                 case "select":
-                   ev = Sv({}, ev, {
-                     value: void 0
-                   }), hv = Sv({}, hv, {
- ... (28 more removed lines; see GitHub link above)
+             TT.blockedOn = null
+           }
+ 
+           function rc(TT) {
+             if (null !== TT.blockedOn) return !1;
+             for (var kT = TT.targetContainers; 0 < kT.length;) {
+               var cT = Ol(TT.domEventName, TT.eventSystemFlags, kT[0], TT.nativeEvent);
+               if (null !== cT) return null !== (kT = jK(cT)) && yc(kT), TT.blockedOn = cT, !1;
+               kT.shift()
```

#### 409. `bundles/bloxd.io/main.js` (Changed code · before: `L6553-L6556` → after: `L12578-L12579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12578-L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12578-L12579) · [Before (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6553-L6556)

```diff
-           }, Wd = function(vv, zv, Pv, hv) {
-             Pv !== hv && (zv.flags |= 4)
-           };
-           var Dd = "function" === typeof WeakMap ? WeakMap : Map;
+             return !0
+           }
```

#### 410. `bundles/bloxd.io/main.js` (Changed code · before: `L6559-L6565` → after: `L12582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12582) · [Before (L6559-L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6559-L6565)

```diff
-             (Pv = jg(-1, Pv)).tag = 3, Pv.payload = {
-               element: null
-             };
-             var hv = zv.value;
-             return Pv.callback = function() {
-               aN || (aN = !0, sN = hv), Od(0, zv)
-             }, Pv
+             rc(TT) && cT.delete(kT)
```

#### 411. `bundles/bloxd.io/main.js` (Changed code · before: `L6568-L6574` → after: `L12585-L12598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12585-L12598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12585-L12598) · [Before (L6568-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6568-L6574)

```diff
-           function Vd(vv, zv, Pv) {
-             (Pv = jg(-1, Pv)).tag = 3;
-             var hv = vv.type.getDerivedStateFromError;
-             if ("function" === typeof hv) {
-               var Sv = zv.value;
-               Pv.payload = function() {
-                 return Od(0, zv), hv(Sv)
+           function wc() {
+             for (Ic = !1; 0 < Ac.length;) {
+               var TT = Ac[0];
+               if (null !== TT.blockedOn) {
+                 null !== (TT = jK(TT.blockedOn)) && Oc(TT);
+                 break
+               }
+               for (var kT = TT.targetContainers; 0 < kT.length;) {
+                 var cT = Ol(TT.domEventName, TT.eventSystemFlags, kT[0], TT.nativeEvent);
+                 if (null !== cT) {
+                   TT.blockedOn = cT;
+                   break
+                 }
+                 kT.shift()
```

#### 412. `bundles/bloxd.io/main.js` (Changed code · before: `L6577-L6595` → after: `L12602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12602) · [Before (L6577-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6577-L6595)

```diff
-             var ev = vv.stateNode;
-             return null !== ev && "function" === typeof ev.componentDidCatch && (Pv.callback = function() {
-               "function" !== typeof hv && (null === CN ? CN = new Set([this]) : CN.add(this), Od(0, zv));
-               var vv = zv.stack;
-               this.componentDidCatch(zv.value, {
-                 componentStack: null !== vv ? vv : ""
-               })
-             }), Pv
-           }
-           var Ud = "function" === typeof WeakSet ? WeakSet : Set;
- 
-           function Rd(vv) {
-             var zv = vv.ref;
-             if (null !== zv)
-               if ("function" === typeof zv) try {
-                 zv(null)
- ... (3 more removed lines; see GitHub link above)
+             null !== Cc && rc(Cc) && (Cc = null), null !== jc && rc(jc) && (jc = null), null !== vc && rc(vc) && (vc = null), tc.forEach(Pc), hc.forEach(Pc)
```

#### 413. `bundles/bloxd.io/main.js` (Changed code · before: `L6599-L6619` → after: `L12606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12606) · [Before (L6599-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6599-L6619)

```diff
-             switch (zv.tag) {
-               case 0:
-               case 11:
-               case 15:
-               case 22:
-               case 5:
-               case 6:
-               case 4:
-               case 17:
-                 return;
-               case 1:
-                 if (256 & zv.flags && null !== vv) {
-                   var Pv = vv.memoizedProps,
-                     hv = vv.memoizedState;
-                   zv = (vv = zv.stateNode).getSnapshotBeforeUpdate(zv.elementType === zv.type ? Pv : dg(zv.type, Pv), hv), vv.__reactInternalSnapshotBeforeUpdate = zv
-                 }
- ... (5 more removed lines; see GitHub link above)
+             TT.blockedOn === kT && (TT.blockedOn = null, Ic || (Ic = !0, KT.unstable_scheduleCallback(KT.unstable_NormalPriority, wc)))
```

#### 414. `bundles/bloxd.io/main.js` (Changed code · before: `L6622-L6671` → after: `L12609-L12618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12609-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12609-L12618) · [Before (L6622-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6622-L6671)

```diff
-           function td(vv, zv, Pv) {
-             switch (Pv.tag) {
-               case 0:
-               case 11:
-               case 15:
-               case 22:
-                 if (null !== (zv = null !== (zv = Pv.updateQueue) ? zv.lastEffect : null)) {
-                   vv = zv = zv.next;
-                   do {
-                     if (3 === (3 & vv.tag)) {
-                       var hv = vv.create;
-                       vv.destroy = hv()
-                     }
-                     vv = vv.next
-                   } while (vv !== zv)
-                 }
- ... (34 more removed lines; see GitHub link above)
+           function bc(TT) {
+             function kT(kT) {
+               return mc(kT, TT)
+             }
+             if (0 < Ac.length) {
+               mc(Ac[0], TT);
+               for (var cT = 1; cT < Ac.length; cT++) {
+                 var lT = Ac[cT];
+                 lT.blockedOn === TT && (lT.blockedOn = null)
+               }
```

#### 415. `bundles/bloxd.io/main.js` (Changed code · before: `L6673` → after: `L12620-L12621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12620-L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12620-L12621) · [Before (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6673)

```diff
-             throw Error(gv(163))
+             for (null !== Cc && mc(Cc, TT), null !== jc && mc(jc, TT), null !== vc && mc(vc, TT), tc.forEach(kT), hc.forEach(kT), cT = 0; cT < Nc.length; cT++)(lT = Nc[cT]).blockedOn === TT && (lT.blockedOn = null);
+             for (; 0 < Nc.length && null === (cT = Nc[0]).blockedOn;) Fc(cT), null === cT.blockedOn && Nc.shift()
```

#### 416. `bundles/bloxd.io/main.js` (Changed code · before: `L6677-L6696` → after: `L12625-L12658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12625-L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12625-L12658) · [Before (L6677-L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6677-L6696)

```diff
-             for (var Pv = vv;;) {
-               if (5 === Pv.tag) {
-                 var hv = Pv.stateNode;
-                 if (zv) "function" === typeof(hv = hv.style).setProperty ? hv.setProperty("display", "none", "important") : hv.display = "none";
-                 else {
-                   hv = Pv.stateNode;
-                   var Sv = Pv.memoizedProps.style;
-                   Sv = void 0 !== Sv && null !== Sv && Sv.hasOwnProperty("display") ? Sv.display : null, hv.style.display = Fz("display", Sv)
-                 }
-               } else if (6 === Pv.tag) Pv.stateNode.nodeValue = zv ? "" : Pv.memoizedProps;
-               else if ((23 !== Pv.tag && 24 !== Pv.tag || null === Pv.memoizedState || Pv === vv) && null !== Pv.child) {
-                 Pv.child.return = Pv, Pv = Pv.child;
-                 continue
-               }
-               if (Pv === vv) break;
-               for (; null === Pv.sibling;) {
- ... (4 more removed lines; see GitHub link above)
+             var cT = {};
+             return cT[TT.toLowerCase()] = kT.toLowerCase(), cT["Webkit" + TT] = "webkit" + kT, cT["Moz" + TT] = "moz" + kT, cT
+           }
+           var Jc = {
+               animationend: zc("Animation", "AnimationEnd"),
+               animationiteration: zc("Animation", "AnimationIteration"),
+               animationstart: zc("Animation", "AnimationStart"),
+               transitionend: zc("Transition", "TransitionEnd")
+             },
+             oc = {},
+             Hc = {};
+ 
+           function ec(TT) {
+             if (oc[TT]) return oc[TT];
+             if (!Jc[TT]) return TT;
+             var kT, cT = Jc[TT];
+ ... (18 more added lines; see GitHub link above)
```

#### 417. `bundles/bloxd.io/main.js` (Changed code · before: `L6701-L6739` → after: `L12672-L12687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12672-L12687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12672-L12687) · [Before (L6701-L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6701-L6739)

```diff
-             if (te && "function" === typeof te.onCommitFiberUnmount) try {
-               te.onCommitFiberUnmount(xe, zv)
-             } catch (ev) {}
-             switch (zv.tag) {
-               case 0:
-               case 11:
-               case 14:
-               case 15:
-               case 22:
-                 if (null !== (vv = zv.updateQueue) && null !== (vv = vv.lastEffect)) {
-                   var Pv = vv = vv.next;
-                   do {
-                     var hv = Pv,
-                       Sv = hv.destroy;
-                     if (hv = hv.tag, void 0 !== Sv)
-                       if (0 !== (4 & hv)) hl(zv, Pv);
- ... (23 more removed lines; see GitHub link above)
+             var cT = TT.pendingLanes;
+             if (0 === cT) return Rc = 0;
+             var lT = 0,
+               MT = 0,
+               KT = TT.expiredLanes,
+               OT = TT.suspendedLanes,
+               yT = TT.pingedLanes;
+             if (0 !== KT) lT = KT, MT = Rc = 15;
+             else if (0 !== (KT = 134217727 & cT)) {
+               var fT = KT & ~OT;
+               0 !== fT ? (lT = gc(fT), MT = Rc) : 0 !== (yT &= KT) && (lT = gc(yT), MT = Rc)
+             } else 0 !== (KT = cT & ~OT) ? (lT = gc(KT), MT = Rc) : 0 !== yT && (lT = gc(yT), MT = Rc);
+             if (0 === lT) return 0;
+             if (lT = cT & ((0 > (lT = 31 - ic(lT)) ? 0 : 1 << lT) << 1) - 1, 0 !== kT && kT !== lT && 0 === (kT & OT)) {
+               if (gc(kT), MT <= Rc) return kT;
+               Rc = MT
```

#### 418. `bundles/bloxd.io/main.js` (Changed code · before: `L6744` → after: `L12695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12695) · [Before (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6744)

```diff
-             vv.alternate = null, vv.child = null, vv.dependencies = null, vv.firstEffect = null, vv.lastEffect = null, vv.memoizedProps = null, vv.memoizedState = null, vv.pendingProps = null, vv.return = null, vv.updateQueue = null
+             return 0 !== (TT = -1073741825 & TT.pendingLanes) ? TT : 1073741824 & TT ? 1073741824 : 0
```

#### 419. `bundles/bloxd.io/main.js` (Changed code · before: `L6747-L6748` → after: `L12698-L12713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12698-L12713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12698-L12713) · [Before (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6747-L6748)

```diff
-           function Zd(vv) {
-             return 5 === vv.tag || 3 === vv.tag || 4 === vv.tag
+           function Bc(TT, kT) {
+             switch (TT) {
+               case 15:
+                 return 1;
+               case 14:
+                 return 2;
+               case 12:
+                 return 0 === (TT = Wc(24 & ~kT)) ? Bc(10, kT) : TT;
+               case 10:
+                 return 0 === (TT = Wc(192 & ~kT)) ? Bc(8, kT) : TT;
+               case 8:
+                 return 0 === (TT = Wc(3584 & ~kT)) && (0 === (TT = Wc(4186112 & ~kT)) && (TT = 512)), TT;
+               case 2:
+                 return 0 === (kT = Wc(805306368 & ~kT)) && (kT = 268435456), kT
+             }
+             throw Error(OT(358, TT))
```

#### 420. `bundles/bloxd.io/main.js` (Changed code · before: `L6752-L6789` → after: `L12717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12717) · [Before (L6752-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6752-L6789)

```diff
-             vv: {
-               for (var zv = vv.return; null !== zv;) {
-                 if (Zd(zv)) break vv;
-                 zv = zv.return
-               }
-               throw Error(gv(160))
-             }
-             var Pv = zv;
-             switch (zv = Pv.stateNode, Pv.tag) {
-               case 5:
-                 var hv = !1;
-                 break;
-               case 3:
-               case 4:
-                 zv = zv.containerInfo, hv = !0;
-                 break;
- ... (22 more removed lines; see GitHub link above)
+             return TT & -TT
```

#### 421. `bundles/bloxd.io/main.js` (Changed code · before: `L6792-L6797` → after: `L12720-L12722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12720-L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12720-L12722) · [Before (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6792-L6797)

```diff
-           function Ld(vv, zv, Pv) {
-             var hv = vv.tag,
-               Sv = 5 === hv || 6 === hv;
-             if (Sv) vv = Sv ? vv.stateNode : vv.stateNode.instance, zv ? 8 === Pv.nodeType ? Pv.parentNode.insertBefore(vv, zv) : Pv.insertBefore(vv, zv) : (8 === Pv.nodeType ? (zv = Pv.parentNode).insertBefore(vv, Pv) : (zv = Pv).appendChild(vv), null !== (Pv = Pv._reactRootCont … [truncated]
-             else if (4 !== hv && null !== (vv = vv.child))
-               for (Ld(vv, zv, Pv), vv = vv.sibling; null !== vv;) Ld(vv, zv, Pv), vv = vv.sibling
+           function nc(TT) {
+             for (var kT = [], cT = 0; 31 > cT; cT++) kT.push(TT);
+             return kT
```

#### 422. `bundles/bloxd.io/main.js` (Changed code · before: `L6801-L6805` → after: `L12726-L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12726-L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12726-L12728) · [Before (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6801-L6805)

```diff
-             var hv = vv.tag,
-               Sv = 5 === hv || 6 === hv;
-             if (Sv) vv = Sv ? vv.stateNode : vv.stateNode.instance, zv ? Pv.insertBefore(vv, zv) : Pv.appendChild(vv);
-             else if (4 !== hv && null !== (vv = vv.child))
-               for (Hd(vv, zv, Pv), vv = vv.sibling; null !== vv;) Hd(vv, zv, Pv), vv = vv.sibling
+             TT.pendingLanes |= kT;
+             var lT = kT - 1;
+             TT.suspendedLanes &= lT, TT.pingedLanes &= lT, (TT = TT.eventTimes)[kT = 31 - ic(kT)] = cT
```

#### 423. `bundles/bloxd.io/main.js` (Changed code · before: `L6808-L6853` → after: `L12739-L12747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12739-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12739-L12747) · [Before (L6808-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6808-L6853)

```diff
-           function Md(vv, zv) {
-             for (var Pv, hv, Sv = zv, ev = !1;;) {
-               if (!ev) {
-                 ev = Sv.return;
-                 vv: for (;;) {
-                   if (null === ev) throw Error(gv(160));
-                   switch (Pv = ev.stateNode, ev.tag) {
-                     case 5:
-                       hv = !1;
-                       break vv;
-                     case 3:
-                     case 4:
-                       Pv = Pv.containerInfo, hv = !0;
-                       break vv
-                   }
-                   ev = ev.return
- ... (30 more removed lines; see GitHub link above)
+           function ll(TT, kT, cT, lT) {
+             Lk || Xk();
+             var MT = Kl,
+               KT = Lk;
+             Lk = !0;
+             try {
+               uk(MT, TT, kT, cT, lT)
+             } finally {
+               (Lk = KT) || gk()
```

#### 424. `bundles/bloxd.io/main.js` (Changed code · before: `L6857-L6897` → after: `L12751-L12781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12751-L12781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12751-L12781) · [Before (L6857-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6857-L6897)

```diff
-           function yd(vv, zv) {
-             switch (zv.tag) {
-               case 0:
-               case 11:
-               case 14:
-               case 15:
-               case 22:
-                 var Pv = zv.updateQueue;
-                 if (null !== (Pv = null !== Pv ? Pv.lastEffect : null)) {
-                   var hv = Pv = Pv.next;
-                   do {
-                     3 === (3 & hv.tag) && (vv = hv.destroy, hv.destroy = void 0, void 0 !== vv && vv()), hv = hv.next
-                   } while (hv !== Pv)
-                 }
-                 return;
-               case 1:
- ... (25 more removed lines; see GitHub link above)
+           function Ml(TT, kT, cT, lT) {
+             kl(Tl, Kl.bind(null, TT, kT, cT, lT))
+           }
+ 
+           function Kl(TT, kT, cT, lT) {
+             var MT;
+             if (cl)
+               if ((MT = 0 === (4 & kT)) && 0 < Ac.length && -1 < Qc.indexOf(TT)) TT = Sc(null, TT, kT, cT, lT), Ac.push(TT);
+               else {
+                 var KT = Ol(TT, kT, cT, lT);
+                 if (null === KT) MT && Dc(TT, lT);
+                 else {
+                   if (MT) {
+                     if (-1 < Qc.indexOf(TT)) return TT = Sc(KT, TT, kT, cT, lT), void Ac.push(TT);
+                     if (function(TT, kT, cT, lT, MT) {
+                         switch (kT) {
+ ... (15 more added lines; see GitHub link above)
```

#### 425. `bundles/bloxd.io/main.js` (Changed code · before: `L6900-L6914` → after: `L12785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12785) · [Before (L6900-L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6900-L6914)

```diff
-                 return;
-               case 6:
-                 if (null === zv.stateNode) throw Error(gv(162));
-                 return void(zv.stateNode.nodeValue = zv.memoizedProps);
-               case 3:
-                 return void((Pv = zv.stateNode).hydrate && (Pv.hydrate = !1, OP(Pv.containerInfo)));
-               case 13:
-                 return null !== zv.memoizedState && (NN = vg(), qd(zv.child, !0)), void Bd(zv);
-               case 19:
-                 return void Bd(zv);
-               case 23:
-               case 24:
-                 return void qd(zv, null !== zv.memoizedState)
-             }
-             throw Error(gv(163))
+               }
```

#### 426. `bundles/bloxd.io/main.js` (Changed code · before: `L6917-L6925` → after: `L12788-L12802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12788-L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12788-L12802) · [Before (L6917-L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6917-L6925)

```diff
-           function Bd(vv) {
-             var zv = vv.updateQueue;
-             if (null !== zv) {
-               vv.updateQueue = null;
-               var Pv = vv.stateNode;
-               null === Pv && (Pv = vv.stateNode = new Ud), zv.forEach((function(zv) {
-                 var hv = dl.bind(null, vv, zv);
-                 Pv.has(zv) || (Pv.add(zv), zv.then(hv, hv))
-               }))
+           function Ol(TT, kT, cT, lT) {
+             var MT = zk(lT);
+             if (null !== (MT = CK(MT))) {
+               var KT = kc(MT);
+               if (null === KT) MT = null;
+               else {
+                 var OT = KT.tag;
+                 if (13 === OT) {
+                   if (null !== (MT = cc(KT))) return MT;
+                   MT = null
+                 } else if (3 === OT) {
+                   if (KT.stateNode.hydrate) return 3 === KT.tag ? KT.stateNode.containerInfo : null;
+                   MT = null
+                 } else KT !== MT && (MT = null)
+               }
```

#### 427. `bundles/bloxd.io/main.js` (Changed code · before: `L6929-L6930` → after: `L12810-L12824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12810-L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12810-L12824) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6929-L6930)

```diff
-           function Jd(vv, zv) {
-             return null !== vv && (null === (vv = vv.memoizedState) || null !== vv.dehydrated) && (null !== (zv = zv.memoizedState) && null === zv.dehydrated)
+           function Il() {
+             if (xl) return xl;
+             var TT, kT, cT = fl,
+               lT = cT.length,
+               MT = "value" in yl ? yl.value : yl.textContent,
+               KT = MT.length;
+             for (TT = 0; TT < lT && cT[TT] === MT[TT]; TT++);
+             var OT = lT - TT;
+             for (kT = 1; kT <= OT && cT[lT - kT] === MT[KT - kT]; kT++);
+             return xl = MT.slice(TT, 1 < kT ? 1 - kT : void 0)
+           }
+ 
+           function Al(TT) {
+             var kT = TT.keyCode;
+             return "charCode" in TT ? 0 === (TT = TT.charCode) && 13 === kT && (TT = 13) : TT = kT, 10 === TT && (TT = 13), 32 <= TT || 13 === TT ? TT : 0
```

#### 428. `bundles/bloxd.io/main.js` (Changed code · before: `L6952` → after: `L12828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12828) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6952)

```diff
-             lN = vg() + 500
+             return !0
```

#### 429. `bundles/bloxd.io/main.js` (Changed code · before: `L6973` → after: `L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12832) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6973)

```diff
-             return 0 !== (48 & rd) ? vg() : -1 !== nN ? nN : nN = vg()
+             return !1
```

#### 430. `bundles/bloxd.io/main.js` (Changed code · before: `L6977-L6982` → after: `L12836-L12838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12836-L12838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12836-L12838) · [Before (L6977-L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6977-L6982)

```diff
-             if (0 === (2 & (vv = vv.mode))) return 1;
-             if (0 === (4 & vv)) return 99 === zg() ? 1 : 2;
-             if (0 === ON && (ON = SN), 0 !== pg.transition) {
-               0 !== DN && (DN = null !== dN ? dN.pendingLanes : 0), vv = ON;
-               var zv = 4186112 & ~DN;
-               return 0 === (zv &= -zv) && (0 === (zv = (vv = 4186112 & ~vv) & -vv) && (zv = 8192)), zv
+             function kT(kT, cT, lT, MT, KT) {
+               for (var OT in this._reactName = kT, this._targetInst = lT, this.type = cT, this.nativeEvent = MT, this.target = KT, this.currentTarget = null, TT) TT.hasOwnProperty(OT) && (kT = TT[OT], this[OT] = kT ? kT(MT) : MT[OT]);
+               return this.isDefaultPrevented = (null != MT.defaultPrevented ? MT.defaultPrevented : !1 === MT.returnValue) ? Cl : jl, this.isPropagationStopped = jl, this
```

#### 431. `bundles/bloxd.io/main.js` (Changed code · before: `L6984-L6996` → after: `L12840-L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12840-L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12840-L12908) · [Before (L6984-L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6984-L6996)

```diff
-             return vv = zg(), 0 !== (4 & rd) && 98 === vv ? vv = JP(12, ON) : vv = JP(vv = function(vv) {
-               switch (vv) {
-                 case 99:
-                   return 15;
-                 case 98:
-                   return 10;
-                 case 97:
-                 case 96:
-                   return 8;
-                 case 95:
-                   return 2;
-                 default:
-                   return 0
+             return MT(kT.prototype, {
+               preventDefault: function() {
+                 this.defaultPrevented = !0;
+                 var TT = this.nativeEvent;
+                 TT && (TT.preventDefault ? TT.preventDefault() : "unknown" !== typeof TT.returnValue && (TT.returnValue = !1), this.isDefaultPrevented = Cl)
+               },
+               stopPropagation: function() {
+                 var TT = this.nativeEvent;
+                 TT && (TT.stopPropagation ? TT.stopPropagation() : "unknown" !== typeof TT.cancelBubble && (TT.cancelBubble = !0), this.isPropagationStopped = Cl)
+               },
+               persist: function() {},
+               isPersistent: Cl
+             }), kT
+           }
+           var tl, hl, Nl, Ql = {
+               eventPhase: 0,
+ ... (53 more added lines; see GitHub link above)
```

#### 432. `bundles/bloxd.io/main.js` (Changed code · before: `L6998-L6999` → after: `L12910-L12972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12910-L12972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12910-L12972) · [Before (L6998-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L6998-L6999)

```diff
-             }(vv), ON), vv
-           }
+             }),
+             zl = vl(bl),
+             Jl = vl(MT({}, Ql, {
+               data: 0
+             })),
+             ol = {
+               Esc: "Escape",
+               Spacebar: " ",
+               Left: "ArrowLeft",
+               Up: "ArrowUp",
+               Right: "ArrowRight",
+               Down: "ArrowDown",
+               Del: "Delete",
+               Win: "OS",
+               Menu: "ContextMenu",
+               Apps: "ContextMenu",
+ ... (47 more added lines; see GitHub link above)
```

#### 433. `bundles/bloxd.io/main.js` (Changed code · before: `L7001-L7006` → after: `L12974-L12976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12974-L12976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12974-L12976) · [Before (L7001-L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7001-L7006)

```diff
-           function xN(vv, zv, Pv) {
-             if (50 < FN) throw FN = 0, YN = null, Error(gv(185));
-             if (null === (vv = tN(vv, zv))) return null;
-             bP(vv, zv, Pv), vv === kd && (gN |= zv, 4 === PN && QN(vv, ud));
-             var hv = zg();
-             1 === zv ? 0 !== (8 & rd) && 0 === (48 & rd) ? ZN(vv) : (qN(vv, Pv), 0 === rd && (TN(), eg())) : (0 === (4 & rd) || 98 !== hv && 99 !== hv || (null === fN ? fN = new Set([vv]) : fN.add(vv)), qN(vv, Pv)), dN = vv
+           function Gl(TT) {
+             var kT = this.nativeEvent;
+             return kT.getModifierState ? kT.getModifierState(TT) : !!(TT = el[TT]) && !!kT[TT]
```

#### 434. `bundles/bloxd.io/main.js` (Changed code · before: `L7009-L7013` → after: `L12979-L12980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12979-L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12979-L12980) · [Before (L7009-L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7009-L7013)

```diff
-           function tN(vv, zv) {
-             vv.lanes |= zv;
-             var Pv = vv.alternate;
-             for (null !== Pv && (Pv.lanes |= zv), Pv = vv, vv = vv.return; null !== vv;) vv.childLanes |= zv, null !== (Pv = vv.alternate) && (Pv.childLanes |= zv), Pv = vv, vv = vv.return;
-             return 3 === Pv.tag ? Pv.stateNode : null
+           function Vl() {
+             return Gl
```

#### 435. `bundles/bloxd.io/main.js` (Changed code · before: `L7015-L7060` → after: `L12982-L12986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12982-L12986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12982-L12986) · [Before (L7015-L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7015-L7060)

```diff
- 
-           function qN(vv, zv) {
-             for (var Pv = vv.callbackNode, hv = vv.suspendedLanes, Sv = vv.pingedLanes, ev = vv.expirationTimes, pv = vv.pendingLanes; 0 < pv;) {
-               var dv = 31 - rP(pv),
-                 Nv = 1 << dv,
-                 lv = ev[dv];
-               if (-1 === lv) {
-                 if (0 === (Nv & hv) || 0 !== (Nv & Sv)) {
-                   lv = zv, MP(Nv);
-                   var Tv = HP;
-                   ev[dv] = 10 <= Tv ? lv + 250 : 6 <= Tv ? lv + 5e3 : -1
-                 }
-               } else lv <= zv && (vv.expiredLanes |= Nv);
-               pv &= ~Nv
-             }
-             if (hv = yP(vv, vv === kd ? ud : 0), zv = HP, 0 === hv) null !== Pv && (Pv !== oe && Qe(Pv), vv.callbackNode = null, vv.callbackPriority = 0);
- ... (30 more removed lines; see GitHub link above)
+           var El = MT({}, Dl, {
+               key: function(TT) {
+                 if (TT.key) {
+                   var kT = ol[TT.key] || TT.key;
+                   if ("Unidentified" !== kT) return kT
```

#### 436. `bundles/bloxd.io/main.js` (Changed code · before: `L7062-L7118` → after: `L12988-L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12988-L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L12988-L13006) · [Before (L7062-L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7062-L7118)

```diff
-               }(zv), Pv = Sg(Pv, IN.bind(null, vv))), vv.callbackPriority = zv, vv.callbackNode = Pv
-             }
-           }
- 
-           function IN(vv) {
-             if (nN = -1, DN = ON = 0, 0 !== (48 & rd)) throw Error(gv(327));
-             var zv = vv.callbackNode;
-             if (zl() && vv.callbackNode !== zv) return null;
-             var Pv = yP(vv, vv === kd ? ud : 0);
-             if (0 === Pv) return null;
-             var hv = Pv,
-               Sv = rd;
-             rd |= 16;
-             var ev = JN();
-             for (kd === vv && ud === hv || (TN(), yN(vv, hv));;) try {
-               bN();
- ... (41 more removed lines; see GitHub link above)
+                 return "keypress" === TT.type ? 13 === (TT = Al(TT)) ? "Enter" : String.fromCharCode(TT) : "keydown" === TT.type || "keyup" === TT.type ? Hl[TT.keyCode] || "Unidentified" : ""
+               },
+               code: 0,
+               location: 0,
+               ctrlKey: 0,
+               shiftKey: 0,
+               altKey: 0,
+               metaKey: 0,
+               repeat: 0,
+               locale: 0,
+               getModifierState: Vl,
+               charCode: function(TT) {
+                 return "keypress" === TT.type ? Al(TT) : 0
+               },
+               keyCode: function(TT) {
+                 return "keydown" === TT.type || "keyup" === TT.type ? TT.keyCode : 0
+ ... (3 more added lines; see GitHub link above)
```

#### 437. `bundles/bloxd.io/main.js` (Changed code · before: `L7120-L7122` → after: `L13008-L13055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13008-L13055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13008-L13055) · [Before (L7120-L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7120-L7122)

```diff
-             }
-             return qN(vv, vg()), vv.callbackNode === zv ? IN.bind(null, vv) : null
-           }
+             }),
+             Zl = vl(El),
+             ul = vl(MT({}, Fl, {
+               pointerId: 0,
+               width: 0,
+               height: 0,
+               pressure: 0,
+               tangentialPressure: 0,
+               tiltX: 0,
+               tiltY: 0,
+               twist: 0,
+               pointerType: 0,
+               isPrimary: 0
+             })),
+             Xl = vl(MT({}, Dl, {
+               touches: 0,
+ ... (32 more added lines; see GitHub link above)
```

#### 438. `bundles/bloxd.io/main.js` (Changed code · before: `L7125-L7128` → after: `L13058-L13068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13058-L13068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13058-L13068) · [Before (L7125-L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7125-L7128)

```diff
-             for (zv &= ~pN, zv &= ~gN, vv.suspendedLanes |= zv, vv.pingedLanes &= ~zv, vv = vv.expirationTimes; 0 < zv;) {
-               var Pv = 31 - rP(zv),
-                 hv = 1 << Pv;
-               vv[Pv] = -1, zv &= ~hv
+             switch (TT) {
+               case "keyup":
+                 return -1 !== gl.indexOf(kT.keyCode);
+               case "keydown":
+                 return 229 !== kT.keyCode;
+               case "keypress":
+               case "mousedown":
+               case "focusout":
+                 return !0;
+               default:
+                 return !1
```

#### 439. `bundles/bloxd.io/main.js` (Changed code · before: `L7133-L7140` → after: `L13073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13073) · [Before (L7133-L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7133-L7140)

```diff
-             if (0 !== (48 & rd)) throw Error(gv(327));
-             if (zl(), vv === kd && 0 !== (vv.expiredLanes & ud)) {
-               var zv = ud,
-                 Pv = EN(vv, zv);
-               0 !== (SN & gN) && (Pv = EN(vv, zv = yP(vv, zv)))
-             } else Pv = EN(vv, zv = yP(vv, 0));
-             if (0 !== vv.tag && 2 === Pv && (rd |= 64, vv.hydrate && (vv.hydrate = !1, Pe(vv.containerInfo)), 0 !== (zv = BP(vv)) && (Pv = EN(vv, zv))), 1 === Pv) throw Pv = hN, yN(vv, 0), QN(vv, zv), qN(vv, vg()), Pv;
-             return vv.finishedWork = vv.current.alternate, vv.finishedLanes = zv, XN(vv), qN(vv, vg()), null
+             return "object" === typeof(TT = TT.detail) && "data" in TT ? TT.data : null
```

#### 440. `bundles/bloxd.io/main.js` (Changed code · before: `L7143-L7150` → after: `L13094-L13096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13094-L13096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13094-L13096) · [Before (L7143-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7143-L7150)

```diff
-           function AN(vv, zv) {
-             var Pv = rd;
-             rd |= 1;
-             try {
-               return vv(zv)
-             } finally {
-               0 === (rd = Pv) && (TN(), eg())
-             }
+           function kM(TT) {
+             var kT = TT && TT.nodeName && TT.nodeName.toLowerCase();
+             return "input" === kT ? !!TM[TT.type] : "textarea" === kT
```

#### 441. `bundles/bloxd.io/main.js` (Changed code · before: `L7153-L7160` → after: `L13099-L13103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13099-L13103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13099-L13103) · [Before (L7153-L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7153-L7160)

```diff
-           function LN(vv, zv) {
-             var Pv = rd;
-             rd &= -2, rd |= 8;
-             try {
-               return vv(zv)
-             } finally {
-               0 === (rd = Pv) && (TN(), eg())
-             }
+           function cM(TT, kT, cT, lT) {
+             Vk(lT), 0 < (kT = BM(kT, "onChange")).length && (cT = new Sl("onChange", "change", null, cT, lT), TT.push({
+               event: cT,
+               listeners: kT
+             }))
```

#### 442. `bundles/bloxd.io/main.js` (Changed code · before: `L7163-L7164` → after: `L13108-L13109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13108-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13108-L13109) · [Before (L7163-L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7163-L7164)

```diff
-           function HN(vv, zv) {
-             me(zN, vN), vN |= zv, SN |= zv
+           function KM(TT) {
+             uM(TT, 0)
```

#### 443. `bundles/bloxd.io/main.js` (Changed code · before: `L7167-L7168` → after: `L13112-L13113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13112-L13113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13112-L13113) · [Before (L7167-L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7167-L7168)

```diff
-           function MN() {
-             vN = zN.current, Ge(zN)
+           function OM(TT) {
+             if (sT(vK(TT))) return TT
```

#### 444. `bundles/bloxd.io/main.js` (Changed code · before: `L7172-L7203` → after: `L13117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13117) · [Before (L7172-L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7172-L7203)

```diff
-             vv.finishedWork = null, vv.finishedLanes = 0;
-             var Pv = vv.timeoutHandle;
-             if (-1 !== Pv && (vv.timeoutHandle = -1, ze(Pv)), null !== Xd)
-               for (Pv = Xd.return; null !== Pv;) {
-                 var hv = Pv;
-                 switch (hv.tag) {
-                   case 1:
-                     null !== (hv = hv.type.childContextTypes) && void 0 !== hv && De();
-                     break;
-                   case 3:
-                     Eg(), Ge(Fe), Ge(fe), dp();
-                     break;
-                   case 5:
-                     bg(hv);
-                     break;
-                   case 4:
- ... (16 more removed lines; see GitHub link above)
+             if ("change" === TT) return kT
```

#### 445. `bundles/bloxd.io/main.js` (Changed code · before: `L7205-L7295` → after: `L13119-L13126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13119-L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13119-L13126) · [Before (L7205-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7205-L7295)

```diff
- 
-           function BN(vv, zv) {
-             for (;;) {
-               var Pv = Xd;
-               try {
-                 if (wg(), Np.current = Jp, sp) {
-                   for (var hv = Wp.memoizedState; null !== hv;) {
-                     var Sv = hv.queue;
-                     null !== Sv && (Sv.pending = null), hv = hv.next
-                   }
-                   sp = !1
-                 }
-                 if (Tp = 0, ap = wp = Wp = null, Cp = !1, bd.current = null, null === Pv || null === Pv.return) {
-                   PN = 1, hN = zv, Xd = null;
-                   break
-                 }
- ... (75 more removed lines; see GitHub link above)
+           var fM = !1;
+           if (AT) {
+             var xM;
+             if (AT) {
+               var IM = "oninput" in document;
+               if (!IM) {
+                 var AM = document.createElement("div");
+                 AM.setAttribute("oninput", "return;"), IM = "function" === typeof AM.oninput
```

#### 446. `bundles/bloxd.io/main.js` (Changed code · before: `L7297-L7298` → after: `L13128-L13130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13128-L13130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13128-L13130) · [Before (L7297-L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7297-L7298)

```diff
-               break
-             }
+               xM = IM
+             } else xM = !1;
+             fM = xM && (!document.documentMode || 9 < document.documentMode)
```

#### 447. `bundles/bloxd.io/main.js` (Changed code · before: `L7302-L7303` → after: `L13134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13134) · [Before (L7302-L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7302-L7303)

```diff
-             var vv = od.current;
-             return od.current = Jp, null === vv ? Jp : vv
+             lM && (lM.detachEvent("onpropertychange", jM), MM = lM = null)
```

#### 448. `bundles/bloxd.io/main.js` (Changed code · before: `L7306-L7314` → after: `L13137-L13148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13137-L13148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13137-L13148) · [Before (L7306-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7306-L7314)

```diff
-           function EN(vv, zv) {
-             var Pv = rd;
-             rd |= 16;
-             var hv = JN();
-             for (kd === vv && ud === zv || yN(vv, zv);;) try {
-               oN();
-               break
-             } catch (Sv) {
-               BN(vv, Sv)
+           function jM(TT) {
+             if ("value" === TT.propertyName && OM(MM)) {
+               var kT = [];
+               if (cM(kT, MM, TT, zk(TT)), TT = KM, Lk) TT(kT);
+               else {
+                 Lk = !0;
+                 try {
+                   Zk(TT, kT)
+                 } finally {
+                   Lk = !1, gk()
+                 }
+               }
```

#### 449. `bundles/bloxd.io/main.js` (Changed code · before: `L7320-L7321` → after: `L13152-L13157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13152-L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13152-L13157) · [Before (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7320-L7321)

```diff
-           function oN() {
-             for (; null !== Xd;) rN(Xd)
+           function vM(TT, kT, cT) {
+             "focusin" === TT ? (CM(), MM = cT, (lM = kT).attachEvent("onpropertychange", jM)) : "focusout" === TT && CM()
+           }
+ 
+           function tM(TT) {
+             if ("selectionchange" === TT || "keyup" === TT || "keydown" === TT) return OM(MM)
```

#### 450. `bundles/bloxd.io/main.js` (Changed code · before: `L7324-L7325` → after: `L13160-L13161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13160-L13161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13160-L13161) · [Before (L7324-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7324-L7325)

```diff
-           function bN() {
-             for (; null !== Xd && !Ze();) rN(Xd)
+           function hM(TT, kT) {
+             if ("click" === TT) return OM(kT)
```

#### 451. `bundles/bloxd.io/main.js` (Changed code · before: `L7328-L7330` → after: `L13164-L13165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13164-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13164-L13165) · [Before (L7328-L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7328-L7330)

```diff
-           function rN(vv) {
-             var zv = WN(vv.alternate, vv, vN);
-             vv.memoizedProps = vv.pendingProps, null === zv ? kN(vv) : Xd = zv, bd.current = null
+           function NM(TT, kT) {
+             if ("input" === TT || "change" === TT) return OM(kT)
```

#### 452. `bundles/bloxd.io/main.js` (Changed code · before: `L7333-L7351` → after: `L13172-L13180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13172-L13180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13172-L13180) · [Before (L7333-L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7333-L7351)

```diff
-           function kN(vv) {
-             var zv = vv;
-             do {
-               var Pv = zv.alternate;
-               if (vv = zv.return, 0 === (2048 & zv.flags)) {
-                 if (null !== (Pv = Fd(Pv, zv, vN))) return void(Xd = Pv);
-                 if (24 !== (Pv = zv).tag && 23 !== Pv.tag || null === Pv.memoizedState || 0 !== (1073741824 & vN) || 0 === (4 & Pv.mode)) {
-                   for (var hv = 0, Sv = Pv.child; null !== Sv;) hv |= Sv.lanes | Sv.childLanes, Sv = Sv.sibling;
-                   Pv.childLanes = hv
-                 }
-                 null !== vv && 0 === (2048 & vv.flags) && (null === vv.firstEffect && (vv.firstEffect = zv.firstEffect), null !== zv.lastEffect && (null !== vv.lastEffect && (vv.lastEffect.nextEffect = zv.firstEffect), vv.lastEffect = zv.lastEffect), 1 < zv.flags && (null !== vv. … [truncated]
-               } else {
-                 if (null !== (Pv = Yd(zv))) return Pv.flags &= 2047, void(Xd = Pv);
-                 null !== vv && (vv.firstEffect = vv.lastEffect = null, vv.flags |= 2048)
-               }
-               if (null !== (zv = zv.sibling)) return void(Xd = zv);
- ... (3 more removed lines; see GitHub link above)
+           function DM(TT, kT) {
+             if (QM(TT, kT)) return !0;
+             if ("object" !== typeof TT || null === TT || "object" !== typeof kT || null === kT) return !1;
+             var cT = Object.keys(TT),
+               lT = Object.keys(kT);
+             if (cT.length !== lT.length) return !1;
+             for (lT = 0; lT < cT.length; lT++)
+               if (!SM.call(kT, cT[lT]) || !QM(TT[cT[lT]], kT[cT[lT]])) return !1;
+             return !0
```

#### 453. `bundles/bloxd.io/main.js` (Changed code · before: `L7355-L7356` → after: `L13184-L13185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13184-L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13184-L13185) · [Before (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7355-L7356)

```diff
-             var zv = zg();
-             return hg(99, uN.bind(null, vv, zv)), null
+             for (; TT && TT.firstChild;) TT = TT.firstChild;
+             return TT
```

#### 454. `bundles/bloxd.io/main.js` (Changed code · before: `L7360-L7381` → after: `L13189-L13194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13189-L13194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13189-L13194) · [Before (L7360-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7360-L7381)

```diff
-             do {
-               zl()
-             } while (null !== cN);
-             if (0 !== (48 & rd)) throw Error(gv(327));
-             var Pv = vv.finishedWork;
-             if (null === Pv) return null;
-             if (vv.finishedWork = null, vv.finishedLanes = 0, Pv === vv.current) throw Error(gv(177));
-             vv.callbackNode = null;
-             var hv = Pv.lanes | Pv.childLanes,
-               Sv = hv,
-               ev = vv.pendingLanes & ~Sv;
-             vv.pendingLanes = Sv, vv.suspendedLanes = 0, vv.pingedLanes = 0, vv.expiredLanes &= Sv, vv.mutableReadLanes &= Sv, vv.entangledLanes &= Sv, Sv = vv.entanglements;
-             for (var pv = vv.eventTimes, dv = vv.expirationTimes; 0 < ev;) {
-               var Nv = 31 - rP(ev),
-                 lv = 1 << Nv;
-               Sv[Nv] = 0, pv[Nv] = -1, dv[Nv] = -1, ev &= ~lv
- ... (6 more removed lines; see GitHub link above)
+             var cT, lT = aM(TT);
+             for (TT = 0; lT;) {
+               if (3 === lT.nodeType) {
+                 if (cT = TT + lT.textContent.length, TT <= kT && cT >= kT) return {
+                   node: lT,
+                   offset: kT - TT
```

#### 455. `bundles/bloxd.io/main.js` (Changed code · before: `L7383-L7388` → after: `L13196-L13201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13196-L13201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13196-L13201) · [Before (L7383-L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7383-L7388)

```diff
-                 else vv: if (dv = (dv = pv.ownerDocument) && dv.defaultView || window, (lv = dv.getSelection && dv.getSelection()) && 0 !== lv.rangeCount) {
-                   dv = lv.anchorNode, ev = lv.anchorOffset, Nv = lv.focusNode, lv = lv.focusOffset;
-                   try {
-                     dv.nodeType, Nv.nodeType
-                   } catch (Ov) {
-                     dv = null;
+                 TT = cT
+               }
+               TT: {
+                 for (; lT;) {
+                   if (lT.nextSibling) {
+                     lT = lT.nextSibling;
```

#### 456. `bundles/bloxd.io/main.js` (Changed code · before: `L7391-L7466` → after: `L13204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13204) · [Before (L7391-L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7391-L7466)

```diff
-                   var Tv = 0,
-                     Wv = -1,
-                     wv = -1,
-                     av = 0,
-                     sv = 0,
-                     Cv = pv,
-                     iv = null;
-                   zv: for (;;) {
-                     for (var cv; Cv !== dv || 0 !== ev && 3 !== Cv.nodeType || (Wv = Tv + ev), Cv !== Nv || 0 !== lv && 3 !== Cv.nodeType || (wv = Tv + lv), 3 === Cv.nodeType && (Tv += Cv.nodeValue.length), null !== (cv = Cv.firstChild);) iv = Cv, Cv = cv;
-                     for (;;) {
-                       if (Cv === pv) break zv;
-                       if (iv === dv && ++av === ev && (Wv = Tv), iv === Nv && ++sv === lv && (wv = Tv), null !== (cv = Cv.nextSibling)) break;
-                       iv = (Cv = iv).parentNode
-                     }
-                     Cv = cv
-                   }
- ... (60 more removed lines; see GitHub link above)
+                   lT = lT.parentNode
```

#### 457. `bundles/bloxd.io/main.js` (Changed code · before: `L7468-L7476` → after: `L13206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13206) · [Before (L7468-L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7468-L7476)

```diff
-               } while (null !== wN);
-               if (jv = kS, mv = FS(), Gv = jv.focusedElem, pv = jv.selectionRange, mv !== Gv && Gv && Gv.ownerDocument && fS(Gv.ownerDocument.documentElement, Gv)) {
-                 null !== pv && YS(Gv) && (mv = pv.start, void 0 === (jv = pv.end) && (jv = mv), "selectionStart" in Gv ? (Gv.selectionStart = mv, Gv.selectionEnd = Math.min(jv, Gv.value.length)) : (jv = (mv = Gv.ownerDocument || document) && mv.defaultView || window).getSelection … [truncated]
-                 for (jv = Gv; jv = jv.parentNode;) 1 === jv.nodeType && mv.push({
-                   element: jv,
-                   left: jv.scrollLeft,
-                   top: jv.scrollTop
-                 });
-                 for ("function" === typeof Gv.focus && Gv.focus(), Gv = 0; Gv < mv.length; Gv++)(jv = mv[Gv]).element.scrollLeft = jv.left, jv.element.scrollTop = jv.top
+                 lT = void 0
```

#### 458. `bundles/bloxd.io/main.js` (Changed code · before: `L7478-L7507` → after: `L13208-L13213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13208-L13213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13208-L13213) · [Before (L7478-L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7478-L7507)

```diff
-               zh = !!rS, kS = rS = null, vv.current = Pv, wN = hv;
-               do {
-                 try {
-                   for (Gv = vv; null !== wN;) {
-                     var Fv = wN.flags;
-                     if (36 & Fv && td(Gv, wN.alternate, wN), 128 & Fv) {
-                       mv = void 0;
-                       var Yv = wN.ref;
-                       if (null !== Yv) {
-                         var nv = wN.stateNode;
-                         wN.tag, mv = nv, "function" === typeof Yv ? Yv(mv) : Yv.current = mv
-                       }
-                     }
-                     wN = wN.nextEffect
-                   }
-                 } catch (Ov) {
- ... (14 more removed lines; see GitHub link above)
+               lT = aM(lT)
+             }
+           }
+ 
+           function rM(TT, kT) {
+             return !(!TT || !kT) && (TT === kT || (!TT || 3 !== TT.nodeType) && (kT && 3 === kT.nodeType ? rM(TT, kT.parentNode) : "contains" in TT ? TT.contains(kT) : !!TT.compareDocumentPosition && !!(16 & TT.compareDocumentPosition(kT))))
```

#### 459. `bundles/bloxd.io/main.js` (Changed code · before: `L7511-L7517` → after: `L13217-L13224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13217-L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13217-L13224) · [Before (L7511-L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7511-L7517)

```diff
-             for (; null !== wN;) {
-               var vv = wN.alternate;
-               VN || null === KN || (0 !== (8 & wN.flags) ? SP(wN, KN) && (VN = !0) : 13 === wN.tag && Jd(vv, wN) && SP(wN, KN) && (VN = !0));
-               var zv = wN.flags;
-               0 !== (256 & zv) && xd(vv, wN), 0 === (512 & zv) || iN || (iN = !0, Sg(97, (function() {
-                 return zl(), null
-               }))), wN = wN.nextEffect
+             for (var TT = window, kT = Tk(); kT instanceof TT.HTMLIFrameElement;) {
+               try {
+                 var cT = "string" === typeof kT.contentWindow.location.href
+               } catch (lT) {
+                 cT = !1
+               }
+               if (!cT) break;
+               kT = Tk((TT = kT.contentWindow).document)
```

#### 460. `bundles/bloxd.io/main.js` (Changed code · before: `L7521-L7524` → after: `L13272-L13292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13272-L13292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13272-L13292) · [Before (L7521-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7521-L7524)

```diff
-           function zl() {
-             if (90 !== GN) {
-               var vv = 97 < GN ? 97 : GN;
-               return GN = 90, hg(vv, Sl)
+           function uM(TT, kT) {
+             kT = 0 !== (4 & kT);
+             for (var cT = 0; cT < TT.length; cT++) {
+               var lT = TT[cT],
+                 MT = lT.event;
+               lT = lT.listeners;
+               TT: {
+                 var KT = void 0;
+                 if (kT)
+                   for (var OT = lT.length - 1; 0 <= OT; OT--) {
+                     var yT = lT[OT],
+                       fT = yT.instance,
+                       xT = yT.currentTarget;
+                     if (yT = yT.listener, fT !== KT && MT.isPropagationStopped()) break TT;
+                     ZM(MT, yT, xT), KT = fT
+                   } else
+ ... (5 more added lines; see GitHub link above)
```

#### 461. `bundles/bloxd.io/main.js` (Changed code · before: `L7526` → after: `L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13294) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7526)

```diff
-             return !1
+             if (ik) throw TT = qk, ik = !1, qk = null, TT
```

#### 462. `bundles/bloxd.io/main.js` (Changed code · before: `L7530-L7532` → after: `L13298-L13300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13298-L13300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13298-L13300) · [Before (L7530-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7530-L7532)

```diff
-             mN.push(zv, vv), iN || (iN = !0, Sg(97, (function() {
-               return zl(), null
-             })))
+             var cT = hK(kT),
+               lT = TT + "__bubble";
+             cT.has(lT) || (gM(kT, TT, 2, !1), cT.add(lT))
```

#### 463. `bundles/bloxd.io/main.js` (Changed code · before: `L7535-L7537` → after: `L13304-L13306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13304-L13306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13304-L13306) · [Before (L7535-L7537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7535-L7537)

```diff
-           function hl(vv, zv) {
-             jN.push(zv, vv), iN || (iN = !0, Sg(97, (function() {
-               return zl(), null
+           function LM(TT) {
+             TT[dM] || (TT[dM] = !0, yT.forEach((function(kT) {
+               EM.has(kT) || RM(kT, !1, TT, null), RM(kT, !0, TT, null)
```

#### 464. `bundles/bloxd.io/main.js` (Changed code · before: `L7541-L7568` → after: `L13310-L13315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13310-L13315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13310-L13315) · [Before (L7541-L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7541-L7568)

```diff
-           function Sl() {
-             if (null === cN) return !1;
-             var vv = cN;
-             if (cN = null, 0 !== (48 & rd)) throw Error(gv(331));
-             var zv = rd;
-             rd |= 32;
-             var Pv = jN;
-             jN = [];
-             for (var hv = 0; hv < Pv.length; hv += 2) {
-               var Sv = Pv[hv],
-                 ev = Pv[hv + 1],
-                 pv = Sv.destroy;
-               if (Sv.destroy = void 0, "function" === typeof pv) try {
-                 pv()
-               } catch (Nv) {
-                 if (null === ev) throw Error(gv(330));
- ... (12 more removed lines; see GitHub link above)
+           function RM(TT, kT, cT, lT) {
+             var MT = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
+               KT = cT;
+             if ("selectionchange" === TT && 9 !== cT.nodeType && (KT = cT.ownerDocument), null !== lT && !kT && EM.has(TT)) {
+               if ("scroll" !== TT) return;
+               MT |= 2, KT = lT
```

#### 465. `bundles/bloxd.io/main.js` (Changed code · before: `L7570-L7571` → after: `L13317-L13319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13317-L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13317-L13319) · [Before (L7570-L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7570-L7571)

```diff
-             for (dv = vv.current.firstEffect; null !== dv;) vv = dv.nextEffect, dv.nextEffect = null, 8 & dv.flags && (dv.sibling = null, dv.stateNode = null), dv = vv;
-             return rd = zv, eg(), !0
+             var OT = hK(KT),
+               yT = TT + "__" + (kT ? "capture" : "bubble");
+             OT.has(yT) || (kT && (MT |= 4), gM(KT, TT, MT, kT), OT.add(yT))
```

#### 466. `bundles/bloxd.io/main.js` (Changed code · before: `L7574-L7575` → after: `L13322-L13339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13322-L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13322-L13339) · [Before (L7574-L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7574-L7575)

```diff
-           function el(vv, zv, Pv) {
-             fg(vv, zv = Kd(0, zv = nd(Pv, zv), 1)), zv = UN(), null !== (vv = tN(vv, 1)) && (bP(vv, 1, zv), qN(vv, zv))
+           function gM(TT, kT, cT, lT) {
+             var MT = Xc.get(kT);
+             switch (void 0 === MT ? 2 : MT) {
+               case 0:
+                 MT = ll;
+                 break;
+               case 1:
+                 MT = Ml;
+                 break;
+               default:
+                 MT = Kl
+             }
+             cT = MT.bind(null, kT, cT, TT), MT = void 0, !Yk || "touchstart" !== kT && "touchmove" !== kT && "wheel" !== kT || (MT = !0), lT ? void 0 !== MT ? TT.addEventListener(kT, cT, {
+               capture: !0,
+               passive: MT
+             }) : TT.addEventListener(kT, cT, !0) : void 0 !== MT ? TT.addEventListener(kT, cT, {
+ ... (2 more added lines; see GitHub link above)
```

#### 467. `bundles/bloxd.io/main.js` (Changed code · before: `L7578-L7584` → after: `L13342-L13517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13342-L13517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13342-L13517) · [Before (L7578-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7578-L7584)

```diff
-           function gl(vv, zv) {
-             if (3 === vv.tag) el(vv, vv, zv);
-             else
-               for (var Pv = vv.return; null !== Pv;) {
-                 if (3 === Pv.tag) {
-                   el(Pv, vv, zv);
-                   break
+           function UM(TT, kT, cT, lT, MT) {
+             var KT = lT;
+             if (0 === (1 & kT) && 0 === (2 & kT) && null !== lT) TT: for (;;) {
+               if (null === lT) return;
+               var OT = lT.tag;
+               if (3 === OT || 4 === OT) {
+                 var yT = lT.stateNode.containerInfo;
+                 if (yT === MT || 8 === yT.nodeType && yT.parentNode === MT) break;
+                 if (4 === OT)
+                   for (OT = lT.return; null !== OT;) {
+                     var fT = OT.tag;
+                     if ((3 === fT || 4 === fT) && ((fT = OT.stateNode.containerInfo) === MT || 8 === fT.nodeType && fT.parentNode === MT)) return;
+                     OT = OT.return
+                   }
+                 for (; null !== yT;) {
+                   if (null === (OT = CK(yT))) return;
+ ... (160 more added lines; see GitHub link above)
```

#### 468. `bundles/bloxd.io/main.js` (Changed code · before: `L7586-L7594` → after: `L13519-L13530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13519-L13530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13519-L13530) · [Before (L7586-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7586-L7594)

```diff
-                 if (1 === Pv.tag) {
-                   var hv = Pv.stateNode;
-                   if ("function" === typeof Pv.type.getDerivedStateFromError || "function" === typeof hv.componentDidCatch && (null === CN || !CN.has(hv))) {
-                     var Sv = Vd(Pv, vv = nd(zv, vv), 1);
-                     if (fg(Pv, Sv), Sv = UN(), null !== (Pv = tN(Pv, 1))) bP(Pv, 1, Sv), qN(Pv, Sv);
-                     else if ("function" === typeof hv.componentDidCatch && (null === CN || !CN.has(hv))) try {
-                       hv.componentDidCatch(zv, vv)
-                     } catch (ev) {}
-                     break
+                 var QT;
+                 if (Ul) TT: {
+                   switch (TT) {
+                     case "compositionstart":
+                       var ST = "onCompositionStart";
+                       break TT;
+                     case "compositionend":
+                       ST = "onCompositionEnd";
+                       break TT;
+                     case "compositionupdate":
+                       ST = "onCompositionUpdate";
+                       break TT
```

#### 469. `bundles/bloxd.io/main.js` (Changed code · before: `L7597` → after: `L13534-L13567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13534-L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13534-L13567) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7597)

```diff
-                 Pv = Pv.return
+                 else sl ? il(TT, cT) && (ST = "onCompositionEnd") : "keydown" === TT && 229 === cT.keyCode && (ST = "onCompositionStart");
+                 ST && (Wl && "ko" !== cT.locale && (sl || "onCompositionStart" !== ST ? "onCompositionEnd" === ST && sl && (QT = Il()) : (fl = "value" in (yl = MT) ? yl.value : yl.textContent, sl = !0)), 0 < (NT = BM(lT, ST)).length && (ST = new Jl(ST, TT, null, cT, MT), OT.push( … [truncated]
+                   event: ST,
+                   listeners: NT
+                 }), QT ? ST.data = QT : null !== (QT = ql(cT)) && (ST.data = QT))), (QT = Bl ? function(TT, kT) {
+                   switch (TT) {
+                     case "compositionend":
+                       return ql(kT);
+                     case "keypress":
+                       return 32 !== kT.which ? null : (pl = !0, nl);
+                     case "textInput":
+                       return (TT = kT.data) === nl && pl ? null : TT;
+                     default:
+                       return null
+                   }
+                 }(TT, cT) : function(TT, kT) {
+ ... (18 more added lines; see GitHub link above)
```

#### 470. `bundles/bloxd.io/main.js` (Changed code · before: `L7602-L7603` → after: `L13574-L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13574-L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13574-L13578) · [Before (L7602-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7602-L7603)

```diff
-             var hv = vv.pingCache;
-             null !== hv && hv.delete(zv), zv = UN(), vv.pingedLanes |= vv.suspendedLanes & Pv, kd === vv && (ud & Pv) === Pv && (4 === PN || 3 === PN && (62914560 & ud) === ud && 500 > vg() - NN ? yN(vv, 0) : pN |= Pv), qN(vv, zv)
+             return {
+               instance: TT,
+               listener: kT,
+               currentTarget: cT
+             }
```

#### 471. `bundles/bloxd.io/main.js` (Changed code · before: `L7607-L7608` → after: `L13582-L13587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13582-L13587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13582-L13587) · [Before (L7607-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7607-L7608)

```diff
-             var Pv = vv.stateNode;
-             null !== Pv && Pv.delete(zv), 0 === (zv = 0) && (0 === (2 & (zv = vv.mode)) ? zv = 1 : 0 === (4 & zv) ? zv = 99 === zg() ? 1 : 2 : (0 === ON && (ON = SN), 0 === (zv = EP(62914560 & ~ON)) && (zv = 4194304))), Pv = UN(), null !== (vv = tN(vv, zv)) && (bP(vv, zv, Pv), qN … [truncated]
+             for (var cT = kT + "Capture", lT = []; null !== TT;) {
+               var MT = TT,
+                 KT = MT.stateNode;
+               5 === MT.tag && null !== KT && (MT = KT, null != (KT = Uk(TT, cT)) && lT.unshift(YM(TT, KT, MT)), null != (KT = Uk(TT, kT)) && lT.push(YM(TT, KT, MT))), TT = TT.return
+             }
+             return lT
```

#### 472. `bundles/bloxd.io/main.js` (Changed code · before: `L7611-L7612` → after: `L13590-L13595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13590-L13595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13590-L13595) · [Before (L7611-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7611-L7612)

```diff
-           function Nl(vv, zv, Pv, hv) {
-             this.tag = vv, this.key = Pv, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = zv, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null … [truncated]
+           function WM(TT) {
+             if (null === TT) return null;
+             do {
+               TT = TT.return
+             } while (TT && 5 !== TT.tag);
+             return TT || null
```

#### 473. `bundles/bloxd.io/main.js` (Changed code · before: `L7615-L7616` → after: `L13598-L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13598-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13598-L13609) · [Before (L7615-L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7615-L7616)

```diff
-           function ll(vv, zv, Pv, hv) {
-             return new Nl(vv, zv, Pv, hv)
+           function nM(TT, kT, cT, lT, MT) {
+             for (var KT = kT._reactName, OT = []; null !== cT && cT !== lT;) {
+               var yT = cT,
+                 fT = yT.alternate,
+                 xT = yT.stateNode;
+               if (null !== fT && fT === lT) break;
+               5 === yT.tag && null !== xT && (yT = xT, MT ? null != (fT = Uk(cT, KT)) && OT.unshift(YM(cT, fT, yT)) : MT || null != (fT = Uk(cT, KT)) && OT.push(YM(cT, fT, yT))), cT = cT.return
+             }
+             0 !== OT.length && TT.push({
+               event: kT,
+               listeners: OT
+             })
```

#### 474. `bundles/bloxd.io/main.js` (Changed code · before: `L7619-L7621` → after: `L13612-L13614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13612-L13614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13612-L13614) · [Before (L7619-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7619-L7621)

```diff
-           function Tl(vv) {
-             return !(!(vv = vv.prototype) || !vv.isReactComponent)
-           }
+           function pM() {}
+           var iM = null,
+             qM = null;
```

#### 475. `bundles/bloxd.io/main.js` (Changed code · before: `L7624-L7675` → after: `L13617-L13622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13617-L13622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13617-L13622) · [Before (L7624-L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7624-L7675)

```diff
-             var Pv = vv.alternate;
-             return null === Pv ? ((Pv = ll(vv.tag, zv, vv.key, vv.mode)).elementType = vv.elementType, Pv.type = vv.type, Pv.stateNode = vv.stateNode, Pv.alternate = vv, vv.alternate = Pv) : (Pv.pendingProps = zv, Pv.type = vv.type, Pv.flags = 0, Pv.nextEffect = null, Pv.firstEff … [truncated]
-               lanes: zv.lanes,
-               firstContext: zv.firstContext
-             }, Pv.sibling = vv.sibling, Pv.index = vv.index, Pv.ref = vv.ref, Pv
-           }
- 
-           function wl(vv, zv, Pv, hv, Sv, ev) {
-             var pv = 2;
-             if (hv = vv, "function" === typeof vv) Tl(vv) && (pv = 1);
-             else if ("string" === typeof vv) pv = 5;
-             else vv: switch (vv) {
-               case Yv:
-                 return al(Pv.children, Sv, ev, zv);
-               case Qv:
-                 pv = 8, Sv |= 16;
- ... (36 more removed lines; see GitHub link above)
+             switch (TT) {
+               case "button":
+               case "input":
+               case "select":
+               case "textarea":
+                 return !!kT.autoFocus
```

#### 476. `bundles/bloxd.io/main.js` (Changed code · before: `L7677-L7681` → after: `L13624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13624) · [Before (L7677-L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7677-L7681)

```diff
-             return (zv = ll(pv, Pv, zv, Sv)).elementType = vv, zv.type = hv, zv.lanes = ev, zv
-           }
- 
-           function al(vv, zv, Pv, hv) {
-             return (vv = ll(7, vv, hv, zv)).lanes = Pv, vv
+             return !1
```

#### 477. `bundles/bloxd.io/main.js` (Changed code · before: `L7684-L7685` → after: `L13627-L13628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13627-L13628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13627-L13628) · [Before (L7684-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7684-L7685)

```diff
-           function sl(vv, zv, Pv, hv) {
-             return (vv = ll(23, vv, hv, zv)).elementType = Zv, vv.lanes = Pv, vv
+           function TK(TT, kT) {
+             return "textarea" === TT || "option" === TT || "noscript" === TT || "string" === typeof kT.children || "number" === typeof kT.children || "object" === typeof kT.dangerouslySetInnerHTML && null !== kT.dangerouslySetInnerHTML && null != kT.dangerouslySetInnerHTML.__html
```

#### 478. `bundles/bloxd.io/main.js` (Changed code · before: `L7688-L7689` → after: `L13633-L13634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13633-L13634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13633-L13634) · [Before (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7688-L7689)

```diff
-           function Cl(vv, zv, Pv) {
-             return (vv = ll(6, vv, null, zv)).lanes = Pv, vv
+           function lK(TT) {
+             1 === TT.nodeType ? TT.textContent = "" : 9 === TT.nodeType && (null != (TT = TT.body) && (TT.textContent = ""))
```

#### 479. `bundles/bloxd.io/main.js` (Changed code · before: `L7692-L7697` → after: `L13637-L13642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13637-L13642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13637-L13642) · [Before (L7692-L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7692-L7697)

```diff
-           function il(vv, zv, Pv) {
-             return (zv = ll(4, null !== vv.children ? vv.children : [], vv.key, zv)).lanes = Pv, zv.stateNode = {
-               containerInfo: vv.containerInfo,
-               pendingChildren: null,
-               implementation: vv.implementation
-             }, zv
+           function MK(TT) {
+             for (; null != TT; TT = TT.nextSibling) {
+               var kT = TT.nodeType;
+               if (1 === kT || 3 === kT) break
+             }
+             return TT
```

#### 480. `bundles/bloxd.io/main.js` (Changed code · before: `L7700-L7701` → after: `L13645-L13657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13645-L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13645-L13657) · [Before (L7700-L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7700-L7701)

```diff
-           function cl(vv, zv, Pv) {
-             this.tag = zv, this.containerInfo = vv, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = Pv, this.callbackNode = null, this.callbackPriority = 0, this.ev … [truncated]
+           function KK(TT) {
+             TT = TT.previousSibling;
+             for (var kT = 0; TT;) {
+               if (8 === TT.nodeType) {
+                 var cT = TT.data;
+                 if ("$" === cT || "$!" === cT || "$?" === cT) {
+                   if (0 === kT) return TT;
+                   kT--
+                 } else "/$" === cT && kT++
+               }
+               TT = TT.previousSibling
+             }
+             return null
```

#### 481. `bundles/bloxd.io/main.js` (Changed code · before: `L7704-L7720` → after: `L13666-L13674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13666-L13674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13666-L13674) · [Before (L7704-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7704-L7720)

```diff
-           function Gl(vv, zv, Pv, hv) {
-             var Sv = zv.current,
-               ev = UN(),
-               pv = RN(Sv);
-             vv: if (Pv) {
-               zv: {
-                 if (vP(Pv = Pv._reactInternals) !== Pv || 1 !== Pv.tag) throw Error(gv(170));
-                 var dv = Pv;do {
-                   switch (dv.tag) {
-                     case 3:
-                       dv = dv.stateNode.context;
-                       break zv;
-                     case 1:
-                       if (Oe(dv.type)) {
-                         dv = dv.stateNode.__reactInternalMemoizedMergedChildContext;
-                         break zv
- ... (1 more removed lines; see GitHub link above)
+           function CK(TT) {
+             var kT = TT[fK];
+             if (kT) return kT;
+             for (var cT = TT.parentNode; cT;) {
+               if (kT = cT[IK] || cT[fK]) {
+                 if (cT = kT.alternate, null !== kT.child || null !== cT && null !== cT.child)
+                   for (TT = KK(TT); null !== TT;) {
+                     if (cT = TT[fK]) return cT;
+                     TT = KK(TT)
```

#### 482. `bundles/bloxd.io/main.js` (Changed code · before: `L7722-L7731` → after: `L13676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13676) · [Before (L7722-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7722-L7731)

```diff
-                   dv = dv.return
-                 } while (null !== dv);
-                 throw Error(gv(171))
-               }
-               if (1 === Pv.tag) {
-                 var Nv = Pv.type;
-                 if (Oe(Nv)) {
-                   Pv = Ve(Pv, Nv, dv);
-                   break vv
-                 }
+                 return kT
```

#### 483. `bundles/bloxd.io/main.js` (Changed code · before: `L7733` → after: `L13678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13678) · [Before (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7733)

```diff
-               Pv = dv
+               cT = (TT = cT).parentNode
```

#### 484. `bundles/bloxd.io/main.js` (Changed code · before: `L7735-L7738` → after: `L13680-L13684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13680-L13684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13680-L13684) · [Before (L7735-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7735-L7738)

```diff
-             else Pv = je;
-             return null === zv.context ? zv.context = Pv : zv.pendingContext = Pv, (zv = jg(ev, pv)).payload = {
-               element: vv
-             }, null !== (hv = void 0 === hv ? null : hv) && (zv.callback = hv), fg(Sv, zv), xN(Sv, pv, ev), pv
+             return null
+           }
+ 
+           function jK(TT) {
+             return !(TT = TT[fK] || TT[IK]) || 5 !== TT.tag && 6 !== TT.tag && 13 !== TT.tag && 3 !== TT.tag ? null : TT
```

#### 485. `bundles/bloxd.io/main.js` (Changed code · before: `L7742` → after: `L13688-L13689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13688-L13689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13688-L13689) · [Before (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7742)

```diff
-             return (vv = vv.current).child ? (vv.child.tag, vv.child.stateNode) : null
+             if (5 === TT.tag || 6 === TT.tag) return TT.stateNode;
+             throw Error(OT(33))
```

#### 486. `bundles/bloxd.io/main.js` (Changed code · before: `L7745-L7748` → after: `L13692-L13705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13692-L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13692-L13705) · [Before (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7745-L7748)

```diff
-           function jl(vv, zv) {
-             if (null !== (vv = vv.memoizedState) && null !== vv.dehydrated) {
-               var Pv = vv.retryLane;
-               vv.retryLane = 0 !== Pv && Pv < zv ? Pv : zv
+           function tK(TT) {
+             return TT[xK] || null
+           }
+ 
+           function hK(TT) {
+             var kT = TT[AK];
+             return void 0 === kT && (kT = TT[AK] = new Set), kT
+           }
+           var NK = [],
+             QK = -1;
+ 
+           function SK(TT) {
+             return {
+               current: TT
```

#### 487. `bundles/bloxd.io/main.js` (Changed code · before: `L7753` → after: `L13714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13714) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7753)

```diff
-             jl(vv, zv), (vv = vv.alternate) && jl(vv, zv)
+             QK++, NK[QK] = TT.current, TT.current = kT
```

#### 488. `bundles/bloxd.io/main.js` (Changed code · before: `L7756-L7763` → after: `L13721-L13728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13721-L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13721-L13728) · [Before (L7756-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7756-L7763)

```diff
-           function Fl(vv, zv, Pv) {
-             var hv = null != Pv && null != Pv.hydrationOptions && Pv.hydrationOptions.mutableSources || null;
-             if (Pv = new cl(vv, zv, null != Pv && !0 === Pv.hydrate), zv = ll(3, null, null, 2 === zv ? 7 : 1 === zv ? 3 : 0), Pv.current = zv, zv.stateNode = Pv, Gg(zv), vv[Ne] = Pv.current, LS(8 === vv.nodeType ? vv.parentNode : vv), hv)
-               for (vv = 0; vv < hv.length; vv++) {
-                 var Sv = (zv = hv[vv])._getVersion;
-                 Sv = Sv(zv._source), null == Pv.mutableSourceEagerHydrationData ? Pv.mutableSourceEagerHydrationData = [zv, Sv] : Pv.mutableSourceEagerHydrationData.push(zv, Sv)
-               }
-             this._internalRoot = Pv
+           function mK(TT, kT) {
+             var cT = TT.type.contextTypes;
+             if (!cT) return FK;
+             var lT = TT.stateNode;
+             if (lT && lT.__reactInternalMemoizedUnmaskedChildContext === kT) return lT.__reactInternalMemoizedMaskedChildContext;
+             var MT, KT = {};
+             for (MT in cT) KT[MT] = kT[MT];
+             return lT && ((TT = TT.stateNode).__reactInternalMemoizedUnmaskedChildContext = kT, TT.__reactInternalMemoizedMaskedChildContext = KT), KT
```

#### 489. `bundles/bloxd.io/main.js` (Changed code · before: `L7767` → after: `L13732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13732) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7767)

```diff
-             return !(!vv || 1 !== vv.nodeType && 9 !== vv.nodeType && 11 !== vv.nodeType && (8 !== vv.nodeType || " react-mount-point-unstable " !== vv.nodeValue))
+             return null !== (TT = TT.childContextTypes) && void 0 !== TT
```

#### 490. `bundles/bloxd.io/main.js` (Changed code · before: `L7770-L7800` → after: `L13735-L13736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13735-L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13735-L13736) · [Before (L7770-L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7770-L7800)

```diff
-           function nl(vv, zv, Pv, hv, Sv) {
-             var ev = Pv._reactRootContainer;
-             if (ev) {
-               var gv = ev._internalRoot;
-               if ("function" === typeof Sv) {
-                 var pv = Sv;
-                 Sv = function() {
-                   var vv = ml(gv);
-                   pv.call(vv)
-                 }
-               }
-               Gl(zv, gv, vv, Sv)
-             } else {
-               if (ev = Pv._reactRootContainer = function(vv, zv) {
-                   if (zv || (zv = !(!(zv = vv ? 9 === vv.nodeType ? vv.documentElement : vv.firstChild : null) || 1 !== zv.nodeType || !zv.hasAttribute("data-reactroot"))), !zv)
-                     for (var Pv; Pv = vv.lastChild;) vv.removeChild(Pv);
- ... (15 more removed lines; see GitHub link above)
+           function zK() {
+             DK(PK), DK(rK)
```

#### 491. `bundles/bloxd.io/main.js` (Changed code · before: `L7803-L7815` → after: `L13739-L13741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13739-L13741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13739-L13741) · [Before (L7803-L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7803-L7815)

```diff
-           function Ol(vv, zv) {
-             var Pv = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
-             if (!Yl(zv)) throw Error(gv(200));
-             return function(vv, zv, Pv) {
-               var hv = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
-               return {
-                 $$typeof: Fv,
-                 key: null == hv ? null : "" + hv,
-                 children: vv,
-                 containerInfo: zv,
-                 implementation: Pv
-               }
-             }(vv, zv, null, Pv)
+           function JK(TT, kT, cT) {
+             if (rK.current !== FK) throw Error(OT(168));
+             aK(rK, kT), aK(PK, cT)
```

#### 492. `bundles/bloxd.io/main.js` (Changed code · before: `L7817-L7974` → after: `L13743-L13804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13743-L13804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13743-L13804) · [Before (L7817-L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7817-L7974)

```diff
-           WN = function(vv, zv, Pv) {
-             var hv = zv.lanes;
-             if (null !== vv)
-               if (vv.memoizedProps !== zv.pendingProps || Fe.current) kp = !0;
-               else {
-                 if (0 === (Pv & hv)) {
-                   switch (kp = !1, zv.tag) {
-                     case 3:
-                       dd(zv), gp();
-                       break;
-                     case 5:
-                       og(zv);
-                       break;
-                     case 1:
-                       Oe(zv.type) && Ue(zv);
-                       break;
- ... (142 more removed lines; see GitHub link above)
+ 
+           function oK(TT, kT, cT) {
+             var lT = TT.stateNode;
+             if (TT = kT.childContextTypes, "function" !== typeof lT.getChildContext) return cT;
+             for (var KT in lT = lT.getChildContext())
+               if (!(KT in TT)) throw Error(OT(108, nT(kT) || "Unknown", KT));
+             return MT({}, cT, lT)
+           }
+ 
+           function HK(TT) {
+             return TT = (TT = TT.stateNode) && TT.__reactInternalMemoizedMergedChildContext || FK, wK = rK.current, aK(rK, TT), aK(PK, PK.current), !0
+           }
+ 
+           function eK(TT, kT, cT) {
+             var lT = TT.stateNode;
+             if (!lT) throw Error(OT(169));
+ ... (46 more added lines; see GitHub link above)
```

#### 493. `bundles/bloxd.io/main.js` (Changed code · before: `L7976-L7988` → after: `L13806-L13815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13806-L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13806-L13815) · [Before (L7976-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7976-L7988)

```diff
-               case 9:
-                 return Sv = zv.type, hv = (ev = zv.pendingProps).children, Cg(zv, Pv), hv = hv(Sv = ig(Sv, ev.unstable_observedBits)), zv.flags |= 1, Xp(vv, zv, hv, Pv), zv.child;
-               case 14:
-                 return ev = dg(Sv = zv.type, zv.pendingProps), zd(vv, zv, Sv, ev = dg(Sv.type, ev), hv, Pv);
-               case 15:
-                 return Pd(vv, zv, zv.type, zv.pendingProps, hv, Pv);
-               case 17:
-                 return hv = zv.type, Sv = zv.pendingProps, Sv = zv.elementType === hv ? Sv : dg(hv, Sv), null !== vv && (vv.alternate = null, zv.alternate = null, zv.flags |= 2), zv.tag = 1, Oe(hv) ? (vv = !0, Ue(zv)) : vv = !1, Cg(zv, Pv), Ug(zv, hv, Sv), xg(zv, hv, Sv, Pv), pd( … [truncated]
-               case 19:
-                 return md(vv, zv, Pv);
-               case 23:
-               case 24:
-                 return hd(vv, zv, Pv)
+               case 98:
+                 return UK;
+               case 97:
+                 return YK;
+               case 96:
+                 return BK;
+               case 95:
+                 return WK;
+               default:
+                 throw Error(OT(332))
```

#### 494. `bundles/bloxd.io/main.js` (Changed code · before: `L7990-L8007` → after: `L13817-L13830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13817-L13830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13817-L13830) · [Before (L7990-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L7990-L8007)

```diff
-             throw Error(gv(156, zv.tag))
-           }, Fl.prototype.render = function(vv) {
-             Gl(vv, this._internalRoot, null, null)
-           }, Fl.prototype.unmount = function() {
-             var vv = this._internalRoot,
-               zv = vv.containerInfo;
-             Gl(null, vv, null, (function() {
-               zv[Ne] = null
-             }))
-           }, eP = function(vv) {
-             13 === vv.tag && (xN(vv, 4, UN()), fl(vv, 4))
-           }, gP = function(vv) {
-             13 === vv.tag && (xN(vv, 67108864, UN()), fl(vv, 67108864))
-           }, pP = function(vv) {
-             if (13 === vv.tag) {
-               var zv = UN(),
- ... (2 more removed lines; see GitHub link above)
+           }
+ 
+           function MO(TT, kT) {
+             return TT = lO(TT), EK(TT, kT)
+           }
+ 
+           function KO(TT, kT, cT) {
+             return TT = lO(TT), ZK(TT, kT, cT)
+           }
+ 
+           function OO() {
+             if (null !== qK) {
+               var TT = qK;
+               qK = null, uK(TT)
```

#### 495. `bundles/bloxd.io/main.js` (Changed code · before: `L8009-L8016` → after: `L13832-L13842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13832-L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13832-L13842) · [Before (L8009-L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8009-L8016)

```diff
-           }, dP = function(vv, zv) {
-             return zv()
-           }, Vz = function(vv, zv, Pv) {
-             switch (zv) {
-               case "input":
-                 if (Sz(vv, Pv), zv = Pv.name, "radio" === Pv.type && null != zv) {
-                   for (Pv = vv; Pv.parentNode;) Pv = Pv.parentNode;
-                   for (Pv = Pv.querySelectorAll("input[name=" + JSON.stringify("" + zv) + '][type="radio"]'), zv = 0; zv < Pv.length; zv++) {
+             yO()
+           }
+ 
+           function yO() {
+             if (!sK && null !== iK) {
+               sK = !0;
+               var TT = 0;
+               try {
+                 var kT = iK;
+                 MO(99, (function() {
+                   for (; TT < kT.length; TT++) {
```

#### 496. `bundles/bloxd.io/main.js` (Changed code · before: `L8018-L8022` → after: `L13844-L13846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13844-L13846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13844-L13846) · [Before (L8018-L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8018-L8022)

```diff
-                     if (hv !== vv && hv.form === vv.form) {
-                       var Sv = ae(hv);
-                       if (!Sv) throw Error(gv(90));
-                       uv(hv), Sz(hv, Sv)
-                     }
+                     do {
+                       cT = cT(!0)
+                     } while (null !== cT)
```

#### 497. `bundles/bloxd.io/main.js` (Changed code · before: `L8024-L8030` → after: `L13848-L13853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13848-L13853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13848-L13853) · [Before (L8024-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8024-L8030)

```diff
-                 }
-                 break;
-               case "textarea":
-                 Tz(vv, Pv);
-                 break;
-               case "select":
-                 null != (zv = Pv.value) && dz(vv, !!Pv.multiple, zv, !1)
+                 })), iK = null
+               } catch (cT) {
+                 throw null !== iK && (iK = iK.slice(TT + 1)), ZK(gK, OO), cT
+               } finally {
+                 sK = !1
+               }
```

#### 498. `bundles/bloxd.io/main.js` (Changed code · before: `L8032-L8038` → after: `L13855-L13861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13855-L13861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13855-L13861) · [Before (L8032-L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8032-L8038)

```diff
-           }, Iz = AN, Qz = function(vv, zv, Pv, hv, Sv) {
-             var ev = rd;
-             rd |= 4;
-             try {
-               return hg(98, vv.bind(null, zv, Pv, hv, Sv))
-             } finally {
-               0 === (rd = ev) && (TN(), eg())
+           }
+           var fO = aT.ReactCurrentBatchConfig;
+ 
+           function xO(TT, kT) {
+             if (TT && TT.defaultProps) {
+               for (var cT in kT = MT({}, kT), TT = TT.defaultProps) void 0 === kT[cT] && (kT[cT] = TT[cT]);
+               return kT
```

#### 499. `bundles/bloxd.io/main.js` (Changed code · before: `L8040-L8056` → after: `L13863-L13886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13863-L13886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13863-L13886) · [Before (L8040-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8040-L8056)

```diff
-           }, Zz = function() {
-             0 === (49 & rd) && (function() {
-               if (null !== fN) {
-                 var vv = fN;
-                 fN = null, vv.forEach((function(vv) {
-                   vv.expiredLanes |= 24 & vv.pendingLanes, qN(vv, vg())
-                 }))
-               }
-               eg()
-             }(), zl())
-           }, Az = function(vv, zv) {
-             var Pv = rd;
-             rd |= 2;
-             try {
-               return vv(zv)
-             } finally {
- ... (1 more removed lines; see GitHub link above)
+             return kT
+           }
+           var IO = SK(null),
+             AO = null,
+             CO = null,
+             jO = null;
+ 
+           function vO() {
+             jO = CO = AO = null
+           }
+ 
+           function tO(TT) {
+             var kT = IO.current;
+             DK(IO), TT.type._context._currentValue = kT
+           }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 500. `bundles/bloxd.io/main.js` (Changed code · before: `L8102-L8108` → after: `L13889-L13920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13889-L13920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13889-L13920) · [Before (L8102-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8102-L8108)

```diff
-           zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dl, zv.createPortal = Ol, zv.findDOMNode = function(vv) {
-             if (null == vv) return null;
-             if (1 === vv.nodeType) return vv;
-             var zv = vv._reactInternals;
-             if (void 0 === zv) {
-               if ("function" === typeof vv.render) throw Error(gv(188));
-               throw Error(gv(268, Object.keys(vv)))
+ 
+           function NO(TT, kT) {
+             AO = TT, jO = CO = null, null !== (TT = TT.dependencies) && null !== TT.firstContext && (0 !== (TT.lanes & kT) && (qy = !0), TT.firstContext = null)
+           }
+ 
+           function QO(TT, kT) {
+             if (jO !== TT && !1 !== kT && 0 !== kT)
+               if ("number" === typeof kT && 1073741823 !== kT || (jO = TT, kT = 1073741823), kT = {
+                   context: TT,
+                   observedBits: kT,
+                   next: null
+                 }, null === CO) {
+                 if (null === AO) throw Error(OT(308));
+                 CO = kT, AO.dependencies = {
+                   lanes: 0,
+                   firstContext: kT,
+ ... (16 more added lines; see GitHub link above)
```

#### 501. `bundles/bloxd.io/main.js` (Changed code · before: `L8110-L8118` → after: `L13922-L13941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13922-L13941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13922-L13941) · [Before (L8110-L8118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8110-L8118)

```diff
-             return vv = null === (vv = hP(zv)) ? null : vv.stateNode
-           }, zv.flushSync = function(vv, zv) {
-             var Pv = rd;
-             if (0 !== (48 & Pv)) return vv(zv);
-             rd |= 1;
-             try {
-               if (vv) return hg(99, vv.bind(null, zv))
-             } finally {
-               rd = Pv, eg()
+           }
+ 
+           function aO(TT, kT) {
+             TT = TT.updateQueue, kT.updateQueue === TT && (kT.updateQueue = {
+               baseState: TT.baseState,
+               firstBaseUpdate: TT.firstBaseUpdate,
+               lastBaseUpdate: TT.lastBaseUpdate,
+               shared: TT.shared,
+               effects: TT.effects
+             })
+           }
+ 
+           function FO(TT, kT) {
+             return {
+               eventTime: TT,
+               lane: kT,
+ ... (4 more added lines; see GitHub link above)
```

#### 502. `bundles/bloxd.io/main.js` (Changed code · before: `L8120-L8147` → after: `L13943-L13948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13943-L13948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13943-L13948) · [Before (L8120-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8120-L8147)

```diff
-           }, zv.hydrate = function(vv, zv, Pv) {
-             if (!Yl(zv)) throw Error(gv(200));
-             return nl(null, vv, zv, !0, Pv)
-           }, zv.render = function(vv, zv, Pv) {
-             if (!Yl(zv)) throw Error(gv(200));
-             return nl(null, vv, zv, !1, Pv)
-           }, zv.unmountComponentAtNode = function(vv) {
-             if (!Yl(vv)) throw Error(gv(40));
-             return !!vv._reactRootContainer && (LN((function() {
-               nl(null, null, vv, !1, (function() {
-                 vv._reactRootContainer = null, vv[Ne] = null
-               }))
-             })), !0)
-           }, zv.unstable_batchedUpdates = AN, zv.unstable_createPortal = function(vv, zv) {
-             return Ol(vv, zv, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
-           }, zv.unstable_renderSubtreeIntoContainer = function(vv, zv, Pv, hv) {
- ... (12 more removed lines; see GitHub link above)
+           }
+ 
+           function rO(TT, kT) {
+             if (null !== (TT = TT.updateQueue)) {
+               var cT = (TT = TT.shared).pending;
+               null === cT ? kT.next = kT : (kT.next = cT.next, cT.next = kT), TT.pending = kT
```

#### 503. `bundles/bloxd.io/main.js` (Changed code · before: `L8149-L8153` → after: `L13950-L13978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13950-L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13950-L13978) · [Before (L8149-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8149-L8153)

```diff
-           } else {
-             var pv = Date,
-               dv = pv.now();
-             zv.unstable_now = function() {
-               return pv.now() - dv
+           }
+ 
+           function PO(TT, kT) {
+             var cT = TT.updateQueue,
+               lT = TT.alternate;
+             if (null !== lT && cT === (lT = lT.updateQueue)) {
+               var MT = null,
+                 KT = null;
+               if (null !== (cT = cT.firstBaseUpdate)) {
+                 do {
+                   var OT = {
+                     eventTime: cT.eventTime,
+                     lane: cT.lane,
+                     tag: cT.tag,
+                     payload: cT.payload,
+                     callback: cT.callback,
+ ... (13 more added lines; see GitHub link above)
```

#### 504. `bundles/bloxd.io/main.js` (Changed code · before: `L8156-L8164` → after: `L13982-L14045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13982-L14045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L13982-L14045) · [Before (L8156-L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8156-L8164)

```diff
-           if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
-             var Nv = null,
-               lv = null,
-               Tv = function() {
-                 if (null !== Nv) try {
-                   var vv = zv.unstable_now();
-                   Nv(!0, vv), Nv = null
-                 } catch (Pv) {
-                   throw setTimeout(Tv, 0), Pv
+ 
+           function wO(TT, kT, cT, lT) {
+             var KT = TT.updateQueue;
+             SO = !1;
+             var OT = KT.firstBaseUpdate,
+               yT = KT.lastBaseUpdate,
+               fT = KT.shared.pending;
+             if (null !== fT) {
+               KT.shared.pending = null;
+               var xT = fT,
+                 IT = xT.next;
+               xT.next = null, null === yT ? OT = IT : yT.next = IT, yT = xT;
+               var AT = TT.alternate;
+               if (null !== AT) {
+                 var CT = (AT = AT.updateQueue).lastBaseUpdate;
+                 CT !== yT && (null === CT ? AT.firstBaseUpdate = IT : CT.next = IT, AT.lastBaseUpdate = xT)
+ ... (48 more added lines; see GitHub link above)
```

#### 505. `bundles/bloxd.io/main.js` (Changed code · before: `L8166-L8181` → after: `L14047-L14048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14047-L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14047-L14048) · [Before (L8166-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8166-L8181)

```diff
-               };
-             Pv = function(vv) {
-               null !== Nv ? setTimeout(Pv, 0, vv) : (Nv = vv, setTimeout(Tv, 0))
-             }, hv = function(vv, zv) {
-               lv = setTimeout(vv, zv)
-             }, Sv = function() {
-               clearTimeout(lv)
-             }, zv.unstable_shouldYield = function() {
-               return !1
-             }, ev = zv.unstable_forceFrameRate = function() {}
-           } else {
-             var Wv = window.setTimeout,
-               wv = window.clearTimeout;
-             if ("undefined" !== typeof console) {
-               var av = window.cancelAnimationFrame;
-               "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof av && console.error("This … [truncated]
+               }
+               null === AT && (xT = CT), KT.baseState = xT, KT.firstBaseUpdate = IT, KT.lastBaseUpdate = AT, yx |= yT, TT.lanes = yT, TT.memoizedState = CT
```

#### 506. `bundles/bloxd.io/main.js` (Changed code · before: `L8183-L8202` → after: `L14050-L14059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14050-L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14050-L14059) · [Before (L8183-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8183-L8202)

```diff
-             var sv = !1,
-               Cv = null,
-               iv = -1,
-               cv = 5,
-               Gv = 0;
-             zv.unstable_shouldYield = function() {
-               return zv.unstable_now() >= Gv
-             }, ev = function() {}, zv.unstable_forceFrameRate = function(vv) {
-               0 > vv || 125 < vv ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : cv = 0 < vv ? Math.floor(1e3 / vv) : 5
-             };
-             var mv = new MessageChannel,
-               jv = mv.port2;
-             mv.port1.onmessage = function() {
-               if (null !== Cv) {
-                 var vv = zv.unstable_now();
-                 Gv = vv + cv;
- ... (4 more removed lines; see GitHub link above)
+           }
+ 
+           function mO(TT, kT, cT) {
+             if (TT = kT.effects, kT.effects = null, null !== TT)
+               for (kT = 0; kT < TT.length; kT++) {
+                 var lT = TT[kT],
+                   MT = lT.callback;
+                 if (null !== MT) {
+                   if (lT.callback = null, lT = cT, "function" !== typeof MT) throw Error(OT(191, MT));
+                   MT.call(lT)
```

#### 507. `bundles/bloxd.io/main.js` (Changed code · before: `L8204-L8212` → after: `L14061-L14091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14061-L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14061-L14091) · [Before (L8204-L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8204-L8212)

```diff
-               } else sv = !1
-             }, Pv = function(vv) {
-               Cv = vv, sv || (sv = !0, jv.postMessage(null))
-             }, hv = function(vv, Pv) {
-               iv = Wv((function() {
-                 vv(zv.unstable_now())
-               }), Pv)
-             }, Sv = function() {
-               wv(iv), iv = -1
+               }
+           }
+           var bO = (new lT.Component).refs;
+ 
+           function zO(TT, kT, cT, lT) {
+             cT = null === (cT = cT(lT, kT = TT.memoizedState)) || void 0 === cT ? kT : MT({}, kT, cT), TT.memoizedState = cT, 0 === TT.lanes && (TT.updateQueue.baseState = cT)
+           }
+           var JO = {
+             isMounted: function(TT) {
+               return !!(TT = TT._reactInternals) && kc(TT) === TT
+             },
+             enqueueSetState: function(TT, kT, cT) {
+               TT = TT._reactInternals;
+               var lT = ex(),
+                 MT = Gx(TT),
+                 KT = FO(lT, MT);
+ ... (15 more added lines; see GitHub link above)
```

#### 508. `bundles/bloxd.io/main.js` (Changed code · before: `L8216-L8224` → after: `L14099-L14103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14099-L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14099-L14103) · [Before (L8216-L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8216-L8224)

```diff
-           function fv(vv, zv) {
-             var Pv = vv.length;
-             vv.push(zv);
-             vv: for (;;) {
-               var hv = Pv - 1 >>> 1,
-                 Sv = vv[hv];
-               if (!(void 0 !== Sv && 0 < nv(Sv, zv))) break vv;
-               vv[hv] = zv, vv[Pv] = Sv, Pv = hv
-             }
+           function HO(TT, kT, cT) {
+             var lT = !1,
+               MT = FK,
+               KT = kT.contextType;
+             return "object" === typeof KT && null !== KT ? KT = QO(KT) : (MT = bK(kT) ? wK : rK.current, KT = (lT = null !== (lT = kT.contextTypes) && void 0 !== lT) ? mK(TT, MT) : FK), kT = new kT(cT, KT), TT.memoizedState = null !== kT.state && void 0 !== kT.state ? kT.state :  … [truncated]
```

#### 509. `bundles/bloxd.io/main.js` (Changed code · before: `L8227-L8228` → after: `L14106-L14107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14106-L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14106-L14107) · [Before (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8227-L8228)

```diff
-           function Fv(vv) {
-             return void 0 === (vv = vv[0]) ? null : vv
+           function eO(TT, kT, cT, lT) {
+             TT = kT.state, "function" === typeof kT.componentWillReceiveProps && kT.componentWillReceiveProps(cT, lT), "function" === typeof kT.UNSAFE_componentWillReceiveProps && kT.UNSAFE_componentWillReceiveProps(cT, lT), kT.state !== TT && JO.enqueueReplaceState(kT, kT.state, … [truncated]
```

#### 510. `bundles/bloxd.io/main.js` (Changed code · before: `L8231-L8246` → after: `L14110-L14123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14110-L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14110-L14123) · [Before (L8231-L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8231-L8246)

```diff
-           function Yv(vv) {
-             var zv = vv[0];
-             if (void 0 !== zv) {
-               var Pv = vv.pop();
-               if (Pv !== zv) {
-                 vv[0] = Pv;
-                 vv: for (var hv = 0, Sv = vv.length; hv < Sv;) {
-                   var ev = 2 * (hv + 1) - 1,
-                     gv = vv[ev],
-                     pv = ev + 1,
-                     dv = vv[pv];
-                   if (void 0 !== gv && 0 > nv(gv, Pv)) void 0 !== dv && 0 > nv(dv, gv) ? (vv[hv] = dv, vv[pv] = Pv, hv = pv) : (vv[hv] = gv, vv[ev] = Pv, hv = ev);
-                   else {
-                     if (!(void 0 !== dv && 0 > nv(dv, Pv))) break vv;
-                     vv[hv] = dv, vv[pv] = Pv, hv = pv
-                   }
+           function GO(TT, kT, cT, lT) {
+             var MT = TT.stateNode;
+             MT.props = cT, MT.state = TT.memoizedState, MT.refs = bO, DO(TT);
+             var KT = kT.contextType;
+             "object" === typeof KT && null !== KT ? MT.context = QO(KT) : (KT = bK(kT) ? wK : rK.current, MT.context = mK(TT, KT)), wO(TT, cT, MT, lT), MT.state = TT.memoizedState, "function" === typeof(KT = kT.getDerivedStateFromProps) && (zO(TT, kT, KT, cT), MT.state = TT.memoi … [truncated]
+           }
+           var VO = Array.isArray;
+ 
+           function EO(TT, kT, cT) {
+             if (null !== (TT = cT.ref) && "function" !== typeof TT && "object" !== typeof TT) {
+               if (cT._owner) {
+                 if (cT = cT._owner) {
+                   if (1 !== cT.tag) throw Error(OT(309));
+                   var lT = cT.stateNode
```

#### 511. `bundles/bloxd.io/main.js` (Changed code · before: `L8249` → after: `L14132-L14133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14132-L14133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14132-L14133) · [Before (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8249)

```diff
-               return zv
+               if ("string" !== typeof TT) throw Error(OT(284));
+               if (!cT._owner) throw Error(OT(290, TT))
```

#### 512. `bundles/bloxd.io/main.js` (Changed code · before: `L8251` → after: `L14135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14135) · [Before (L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8251)

```diff
-             return null
+             return TT
```

#### 513. `bundles/bloxd.io/main.js` (Changed code · before: `L8255-L8256` → after: `L14139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14139) · [Before (L8255-L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8255-L8256)

```diff
-             var Pv = vv.sortIndex - zv.sortIndex;
-             return 0 !== Pv ? Pv : vv.id - zv.id
+             if ("textarea" !== TT.type) throw Error(OT(31, "[object Object]" === Object.prototype.toString.call(kT) ? "object with keys {" + Object.keys(kT).join(", ") + "}" : kT))
```

#### 514. `bundles/bloxd.io/main.js` (Changed code · before: `L8268-L8272` → after: `L14143-L14331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14143-L14331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14143-L14331) · [Before (L8268-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8268-L8272)

```diff
-             for (var zv = Fv(Dv); null !== zv;) {
-               if (null === zv.callback) Yv(Dv);
-               else {
-                 if (!(zv.startTime <= vv)) break;
-                 Yv(Dv), zv.sortIndex = zv.expirationTime, fv(Ov, zv)
+             function kT(kT, cT) {
+               if (TT) {
+                 var lT = kT.lastEffect;
+                 null !== lT ? (lT.nextEffect = cT, kT.lastEffect = cT) : kT.firstEffect = kT.lastEffect = cT, cT.nextEffect = null, cT.flags = 8
+               }
+             }
+ 
+             function cT(cT, lT) {
+               if (!TT) return null;
+               for (; null !== lT;) kT(cT, lT), lT = lT.sibling;
+               return null
+             }
+ 
+             function lT(TT, kT) {
+               for (TT = new Map; null !== kT;) null !== kT.key ? TT.set(kT.key, kT) : TT.set(kT.index, kT), kT = kT.sibling;
+               return TT
+ ... (173 more added lines; see GitHub link above)
```

#### 515. `bundles/bloxd.io/main.js` (Changed code · before: `L8274` → after: `L14333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14333) · [Before (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8274)

```diff
-               zv = Fv(Dv)
+               return cT(TT, lT)
```

#### 516. `bundles/bloxd.io/main.js` (Changed code · before: `L8279-L8284` → after: `L14344-L14345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14344-L14345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14344-L14345) · [Before (L8279-L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8279-L8284)

```diff
-             if (tv = !1, qv(vv), !xv)
-               if (null !== Fv(Ov)) xv = !0, Pv(Qv);
-               else {
-                 var zv = Fv(Dv);
-                 null !== zv && hv(Iv, zv.startTime - vv)
-               }
+             if (TT === LO) throw Error(OT(174));
+             return TT
```

#### 517. `bundles/bloxd.io/main.js` (Changed code · before: `L8288-L8367` → after: `L14349-L14352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14349-L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14349-L14352) · [Before (L8288-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8288-L8367)

```diff
-             xv = !1, tv && (tv = !1, Sv()), Rv = !0;
-             var ev = Uv;
-             try {
-               for (qv(Pv), Vv = Fv(Ov); null !== Vv && (!(Vv.expirationTime > Pv) || vv && !zv.unstable_shouldYield());) {
-                 var gv = Vv.callback;
-                 if ("function" === typeof gv) {
-                   Vv.callback = null, Uv = Vv.priorityLevel;
-                   var pv = gv(Vv.expirationTime <= Pv);
-                   Pv = zv.unstable_now(), "function" === typeof pv ? Vv.callback = pv : Vv === Fv(Ov) && Yv(Ov), qv(Pv)
-                 } else Yv(Ov);
-                 Vv = Fv(Ov)
-               }
-               if (null !== Vv) var dv = !0;
-               else {
-                 var Nv = Fv(Dv);
-                 null !== Nv && hv(Iv, Nv.startTime - Pv), dv = !1
- ... (64 more removed lines; see GitHub link above)
+             switch (aK(UO, kT), aK(gO, TT), aK(RO, LO), TT = kT.nodeType) {
+               case 9:
+               case 11:
+                 kT = (kT = kT.documentElement) ? kT.namespaceURI : hk(null, "");
```

#### 518. `bundles/bloxd.io/main.js` (Changed code · before: `L8370-L8389` → after: `L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14355) · [Before (L8370-L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8370-L8389)

```diff
-                 dv = 5e3
-             }
-             return vv = {
-               id: Kv++,
-               callback: ev,
-               priorityLevel: vv,
-               startTime: gv,
-               expirationTime: dv = gv + dv,
-               sortIndex: -1
-             }, gv > pv ? (vv.sortIndex = gv, fv(Dv, vv), null === Fv(Ov) && vv === Fv(Dv) && (tv ? Sv() : tv = !0, hv(Iv, gv - pv))) : (vv.sortIndex = dv, fv(Ov, vv), xv || Rv || (xv = !0, Pv(Qv))), vv
-           }, zv.unstable_wrapCallback = function(vv) {
-             var zv = Uv;
-             return function() {
-               var Pv = Uv;
-               Uv = zv;
-               try {
- ... (4 more removed lines; see GitHub link above)
+                 kT = hk(kT = (TT = 8 === TT ? kT.parentNode : kT).namespaceURI || null, TT = TT.tagName)
```

#### 519. `bundles/bloxd.io/main.js` (Changed code · before: `L8449` → after: `L14361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14361) · [Before (L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8449)

```diff
-             return null === Cv && (Cv = pv().getParser(navigator.userAgent)), Cv
+             DK(RO), DK(gO), DK(UO)
```

#### 520. `bundles/bloxd.io/main.js` (Changed code · before: `L8453-L8461` → after: `L14365-L14368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14365-L14368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14365-L14368) · [Before (L8453-L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8453-L8461)

```diff
-             return [`Browser: ${Gv()}`, `Version: ${mv()}`, `Platform: ${navigator.platform}`, `Platform Type: ${Dv()}`, `Input Type: ${(0,Nv.b)()}`].join(vv)
-           }
- 
-           function Gv() {
-             return iv().getBrowserName()
-           }
- 
-           function mv() {
-             return iv().getBrowserVersion()
+             YO(UO.current);
+             var kT = YO(RO.current),
+               cT = hk(kT, TT.type);
+             kT !== cT && (aK(gO, TT), aK(RO, cT))
```

#### 521. `bundles/bloxd.io/main.js` (Changed code · before: `L8464-L8465` → after: `L14371-L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14371-L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14371-L14372) · [Before (L8464-L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8464-L8465)

```diff
-           function jv() {
-             return iv().getResult()
+           function pO(TT) {
+             gO.current === TT && (DK(RO), DK(gO))
```

#### 522. `bundles/bloxd.io/main.js` (Changed code · before: `L8468-L8471` → after: `L14376-L14394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14376-L14394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14376-L14394) · [Before (L8468-L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8468-L8471)

```diff
-           function fv() {
-             const vv = Kv(),
-               zv = iv().getOSName(!0).replaceAll(" ", "_");
-             return "macos" !== vv && "ios" !== vv && zv === vv ? iv().getOSVersion() : void 0
+           function qO(TT) {
+             for (var kT = TT; null !== kT;) {
+               if (13 === kT.tag) {
+                 var cT = kT.memoizedState;
+                 if (null !== cT && (null === (cT = cT.dehydrated) || "$?" === cT.data || "$!" === cT.data)) return kT
+               } else if (19 === kT.tag && void 0 !== kT.memoizedProps.revealOrder) {
+                 if (0 !== (64 & kT.flags)) return kT
+               } else if (null !== kT.child) {
+                 kT.child.return = kT, kT = kT.child;
+                 continue
+               }
+               if (kT === TT) break;
+               for (; null === kT.sibling;) {
+                 if (null === kT.return || kT.return === TT) return null;
+                 kT = kT.return
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 523. `bundles/bloxd.io/main.js` (Changed code · before: `L8473` → after: `L14396-L14398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14396-L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14396-L14398) · [Before (L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8473)

```diff
-           const Fv = 125;
+           var sO = null,
+             Ty = null,
+             ky = !1;
```

#### 524. `bundles/bloxd.io/main.js` (Changed code · before: `L8475-L8477` → after: `L14400-L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14400-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14400-L14402) · [Before (L8475-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8475-L8477)

```diff
-           function Yv() {
-             var vv;
-             return (null !== (vv = navigator.languages) && void 0 !== vv && vv.length ? navigator.languages : [navigator.language]).every((vv => vv.toLowerCase().startsWith("en"))) && parseInt(mv(), 10) >= Fv
+           function cy(TT, kT) {
+             var cT = CI(5, null, null, 0);
+             cT.elementType = "DELETED", cT.type = "DELETED", cT.stateNode = kT, cT.return = TT, cT.flags = 8, null !== TT.lastEffect ? (TT.lastEffect.nextEffect = cT, TT.lastEffect = cT) : TT.firstEffect = TT.lastEffect = cT
```

#### 525. `bundles/bloxd.io/main.js` (Changed code · before: `L8480-L8481` → after: `L14405-L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14405-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14405-L14414) · [Before (L8480-L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8480-L8481)

```diff
-           function nv() {
-             return iv().getPlatformType() || ("touchOnly" === (0, Nv.b)() ? "tablet" : "desktop")
+           function ly(TT, kT) {
+             switch (TT.tag) {
+               case 5:
+                 var cT = TT.type;
+                 return null !== (kT = 1 !== kT.nodeType || cT.toLowerCase() !== kT.nodeName.toLowerCase() ? null : kT) && (TT.stateNode = kT, !0);
+               case 6:
+                 return null !== (kT = "" === TT.pendingProps || 3 !== kT.nodeType ? null : kT) && (TT.stateNode = kT, !0);
+               default:
+                 return !1
+             }
```

#### 526. `bundles/bloxd.io/main.js` (Changed code · before: `L8484-L8486` → after: `L14417-L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14417-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14417-L14428) · [Before (L8484-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8484-L8486)

```diff
-           function Ov() {
-             const vv = iv().getPlatformType();
-             return "mobile" === vv || "tablet" === vv
+           function My(TT) {
+             if (ky) {
+               var kT = Ty;
+               if (kT) {
+                 var cT = kT;
+                 if (!ly(TT, kT)) {
+                   if (!(kT = MK(cT.nextSibling)) || !ly(TT, kT)) return TT.flags = -1025 & TT.flags | 2, ky = !1, void(sO = TT);
+                   cy(sO, cT)
+                 }
+                 sO = TT, Ty = MK(kT.firstChild)
+               } else TT.flags = -1025 & TT.flags | 2, ky = !1, sO = TT
+             }
```

#### 527. `bundles/bloxd.io/main.js` (Changed code · before: `L8489-L8495` → after: `L14431-L14433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14431-L14433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14431-L14433) · [Before (L8489-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8489-L8495)

```diff
-           function Dv() {
-             const vv = nv();
-             if ("desktop" === vv) {
-               const vv = Kv();
-               if ("ios" === vv || "android" === vv) return "tablet"
-             }
-             return vv
+           function Ky(TT) {
+             for (TT = TT.return; null !== TT && 5 !== TT.tag && 3 !== TT.tag && 13 !== TT.tag;) TT = TT.return;
+             sO = TT
```

#### 528. `bundles/bloxd.io/main.js` (Changed code · before: `L8498-L8500` → after: `L14436-L14461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14436-L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14436-L14461) · [Before (L8498-L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8498-L8500)

```diff
-           function Kv() {
-             const vv = iv().getOSName(!0).replaceAll(" ", "_");
-             return "macos" === vv && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== vv || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, Nv.b)() ? hv.t.includes(vv) ? vv : "other" : "android"
+           function Oy(TT) {
+             if (TT !== sO) return !1;
+             if (!ky) return Ky(TT), ky = !0, !1;
+             var kT = TT.type;
+             if (5 !== TT.tag || "head" !== kT && "body" !== kT && !TK(kT, TT.memoizedProps))
+               for (kT = Ty; kT;) cy(TT, kT), kT = MK(kT.nextSibling);
+             if (Ky(TT), 13 === TT.tag) {
+               if (!(TT = null !== (TT = TT.memoizedState) ? TT.dehydrated : null)) throw Error(OT(317));
+               TT: {
+                 for (TT = TT.nextSibling, kT = 0; TT;) {
+                   if (8 === TT.nodeType) {
+                     var cT = TT.data;
+                     if ("/$" === cT) {
+                       if (0 === kT) {
+                         Ty = MK(TT.nextSibling);
+                         break TT
+ ... (10 more added lines; see GitHub link above)
```

#### 529. `bundles/bloxd.io/main.js` (Changed code · before: `L8504-L8505` → after: `L14465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14465) · [Before (L8504-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8504-L8505)

```diff
-             const vv = dv.currentUrl.getSearchParam("trafficSource");
-             return hv.B.includes(vv) ? vv : "other"
+             Ty = sO = null, ky = !1
```

#### 530. `bundles/bloxd.io/main.js` (Changed code · before: `L8509-L8510` → after: `L14470-L14471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14470-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14470-L14471) · [Before (L8509-L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8509-L8510)

```diff
-             const vv = nv();
-             return !Qv() && ("mobile" === vv || "tablet" === vv || "touchOnly" === (0, Nv.b)() || dv.currentUrl.hasSearchParam("mobile"))
+             for (var TT = 0; TT < fy.length; TT++) fy[TT]._workInProgressVersionPrimary = null;
+             fy.length = 0
```

#### 531. `bundles/bloxd.io/main.js` (Changed code · before: `L8514` → after: `L14483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14483) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8514)

```diff
-             return Qv() && (Iv() || dv.currentUrl.hasSearchParam("mobile"))
+             throw Error(OT(321))
```

#### 532. `bundles/bloxd.io/main.js` (Changed code · before: `L8517-L8518` → after: `L14486-L14490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14486-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14486-L14490) · [Before (L8517-L8518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8517-L8518)

```diff
-           function xv() {
-             return Uv() || Rv()
+           function Sy(TT, kT) {
+             if (null === kT) return !1;
+             for (var cT = 0; cT < kT.length && cT < TT.length; cT++)
+               if (!QM(TT[cT], kT[cT])) return !1;
+             return !0
```

#### 533. `bundles/bloxd.io/main.js` (Changed code · before: `L8521-L8522` → after: `L14493-L14502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14493-L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14493-L14502) · [Before (L8521-L8522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8521-L8522)

```diff
-           function tv(vv) {
-             return Sv.D.some((zv => zv === vv))
+           function Dy(TT, kT, cT, lT, MT, KT) {
+             if (Cy = KT, jy = kT, kT.memoizedState = null, kT.updateQueue = null, kT.lanes = 0, Iy.current = null === TT || null === TT.memoizedState ? Wy : ny, TT = cT(lT, MT), Ny) {
+               KT = 0;
+               do {
+                 if (Ny = !1, !(25 > KT)) throw Error(OT(301));
+                 KT += 1, ty = vy = null, kT.updateQueue = null, Iy.current = py, TT = cT(lT, MT)
+               } while (Ny)
+             }
+             if (Iy.current = By, kT = null !== vy && null !== vy.next, Cy = 0, ty = vy = jy = null, hy = !1, kT) throw Error(OT(300));
+             return TT
```

#### 534. `bundles/bloxd.io/main.js` (Changed code · before: `L8526` → after: `L14506-L14513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14506-L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14506-L14513) · [Before (L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8526)

```diff
-             return tv(Wv.o)
+             var TT = {
+               memoizedState: null,
+               baseState: null,
+               baseQueue: null,
+               queue: null,
+               next: null
+             };
+             return null === ty ? jy.memoizedState = ty = TT : ty = ty.next = TT, ty
```

#### 535. `bundles/bloxd.io/main.js` (Changed code · before: `L8530` → after: `L14517-L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14517-L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14517-L14533) · [Before (L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8530)

```diff
-             return Uv() || "mouseOnly" !== (0, Nv.b)() || navigator.maxTouchPoints > 0
+             if (null === vy) {
+               var TT = jy.alternate;
+               TT = null !== TT ? TT.memoizedState : null
+             } else TT = vy.next;
+             var kT = null === ty ? jy.memoizedState : ty.next;
+             if (null !== kT) ty = kT, vy = TT;
+             else {
+               if (null === TT) throw Error(OT(310));
+               TT = {
+                 memoizedState: (vy = TT).memoizedState,
+                 baseState: vy.baseState,
+                 baseQueue: vy.baseQueue,
+                 queue: vy.queue,
+                 next: null
+               }, null === ty ? jy.memoizedState = ty = TT : ty = ty.next = TT
+             }
+ ... (1 more added lines; see GitHub link above)
```

#### 536. `bundles/bloxd.io/main.js` (Changed code · before: `L8533-L8534` → after: `L14536-L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14536-L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14536-L14537) · [Before (L8533-L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8533-L8534)

```diff
-           function Qv() {
-             return /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform
+           function ry(TT, kT) {
+             return "function" === typeof kT ? kT(TT) : kT
```

#### 537. `bundles/bloxd.io/main.js` (Changed code · before: `L8568` → after: `L14541-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14541-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14541-L14582) · [Before (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8568)

```diff
-             null === Hv && vv && "unknown vendor" !== vv.toLowerCase() && (Mv = vv)
+             var kT = Fy(),
+               cT = kT.queue;
+             if (null === cT) throw Error(OT(311));
+             cT.lastRenderedReducer = TT;
+             var lT = vy,
+               MT = lT.baseQueue,
+               KT = cT.pending;
+             if (null !== KT) {
+               if (null !== MT) {
+                 var yT = MT.next;
+                 MT.next = KT.next, KT.next = yT
+               }
+               lT.baseQueue = MT = KT, cT.pending = null
+             }
+             if (null !== MT) {
+               MT = MT.next, lT = lT.baseState;
+ ... (26 more added lines; see GitHub link above)
```

#### 538. `bundles/bloxd.io/main.js` (Changed code · before: `L8573` → after: `L14586-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14586-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14586-L14601) · [Before (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8573)

```diff
-             Bv = vv
+             var kT = Fy(),
+               cT = kT.queue;
+             if (null === cT) throw Error(OT(311));
+             cT.lastRenderedReducer = TT;
+             var lT = cT.dispatch,
+               MT = cT.pending,
+               KT = kT.memoizedState;
+             if (null !== MT) {
+               cT.pending = null;
+               var yT = MT = MT.next;
+               do {
+                 KT = TT(KT, yT.action), yT = yT.next
+               } while (yT !== MT);
+               QM(KT, kT.memoizedState) || (qy = !0), kT.memoizedState = KT, null === kT.baseQueue && (kT.baseState = KT), cT.lastRenderedState = KT
+             }
+             return [KT, lT]
```

#### 539. `bundles/bloxd.io/main.js` (Changed code · before: `L8576-L8577` → after: `L14604-L14609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14604-L14609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14604-L14609) · [Before (L8576-L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8576-L8577)

```diff
-           function Ev() {
-             return Bv
+           function my(TT, kT, cT) {
+             var lT = kT._getVersion;
+             lT = lT(kT._source);
+             var MT = kT._workInProgressVersionPrimary;
+             if (null !== MT ? TT = MT === lT : (TT = TT.mutableReadLanes, (TT = (Cy & TT) === TT) && (kT._workInProgressVersionPrimary = lT, fy.push(kT))), TT) return cT(kT._source);
+             throw fy.push(kT), Error(OT(350))
```

#### 540. `bundles/bloxd.io/main.js` (Changed code · before: `L8581-L8582` → after: `L14612-L14664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14612-L14664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14612-L14664) · [Before (L8581-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8581-L8582)

```diff
-           function bv(vv) {
-             ov = vv
+           function by(TT, kT, cT, lT) {
+             var MT = sf;
+             if (null === MT) throw Error(OT(349));
+             var KT = kT._getVersion,
+               yT = KT(kT._source),
+               fT = Iy.current,
+               xT = fT.useState((function() {
+                 return my(MT, kT, cT)
+               })),
+               IT = xT[1],
+               AT = xT[0];
+             xT = ty;
+             var CT = TT.memoizedState,
+               jT = CT.refs,
+               vT = jT.getSnapshot,
+               tT = CT.source;
+ ... (37 more added lines; see GitHub link above)
```

#### 541. `bundles/bloxd.io/main.js` (Changed code · before: `L8585-L8586` → after: `L14667-L14668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14667-L14668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14667-L14668) · [Before (L8585-L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8585-L8586)

```diff
-           function rv() {
-             return ov
+           function zy(TT, kT, cT) {
+             return by(Fy(), TT, kT, cT)
```

#### 542. `bundles/bloxd.io/main.js` (Changed code · before: `L8589-L8590` → after: `L14671-L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14671-L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14671-L14678) · [Before (L8589-L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8589-L8590)

```diff
-           function kv() {
-             return "mobile" !== Dv() && "arm" === ez() ? 2 : 1
+           function Jy(TT) {
+             var kT = ay();
+             return "function" === typeof TT && (TT = TT()), kT.memoizedState = kT.baseState = TT, TT = (TT = kT.queue = {
+               pending: null,
+               dispatch: null,
+               lastRenderedReducer: ry,
+               lastRenderedState: TT
+             }).dispatch = Yy.bind(null, jy, TT), [kT.memoizedState, TT]
```

#### 543. `bundles/bloxd.io/main.js` (Changed code · before: `L8594-L8599` → after: `L14681-L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14681-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14681-L14690) · [Before (L8594-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8594-L8599)

```diff
-           function uv() {
-             if (xv()) {
-               const vv = (0, sv.p)();
-               return void 0 === vv ? "not_probed" : (0, av.c)(vv)
-             }
-             return Xv ??= (0, av.c)((0, sv.t)()), Xv
+           function oy(TT, kT, cT, lT) {
+             return TT = {
+               tag: TT,
+               create: kT,
+               destroy: cT,
+               deps: lT,
+               next: null
+             }, null === (kT = jy.updateQueue) ? (kT = {
+               lastEffect: null
+             }, jy.updateQueue = kT, kT.lastEffect = TT.next = TT) : null === (cT = kT.lastEffect) ? kT.lastEffect = TT.next = TT : (lT = cT.next, cT.next = TT, TT.next = lT, kT.lastEffect = TT), TT
```

#### 544. `bundles/bloxd.io/main.js` (Changed code · before: `L8602-L8603` → after: `L14693-L14696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14693-L14696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14693-L14696) · [Before (L8602-L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8602-L8603)

```diff
-           function vz() {
-             return !0 === navigator.webdriver
+           function Hy(TT) {
+             return TT = {
+               current: TT
+             }, ay().memoizedState = TT
```

#### 545. `bundles/bloxd.io/main.js` (Changed code · before: `L8607` → after: `L14700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14700) · [Before (L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8607)

```diff
-             return navigator.userAgent.includes("Windows NT 10")
+             return Fy().memoizedState
```

#### 546. `bundles/bloxd.io/main.js` (Changed code · before: `L8610-L8611` → after: `L14703-L14705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14703-L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14703-L14705) · [Before (L8610-L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8610-L8611)

```diff
-           function Pz() {
-             return "Blink" === iv().getEngineName()
+           function Gy(TT, kT, cT, lT) {
+             var MT = ay();
+             jy.flags |= TT, MT.memoizedState = oy(1 | kT, cT, void 0, void 0 === lT ? null : lT)
```

#### 547. `bundles/bloxd.io/main.js` (Changed code · before: `L8614-L8615` → after: `L14708-L14716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14708-L14716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14708-L14716) · [Before (L8614-L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8614-L8615)

```diff
-           function hz() {
-             return "WebKit" === iv().getEngineName() || "ios" === Kv()
+           function Vy(TT, kT, cT, lT) {
+             var MT = Fy();
+             lT = void 0 === lT ? null : lT;
+             var KT = void 0;
+             if (null !== vy) {
+               var OT = vy.memoizedState;
+               if (KT = OT.destroy, null !== lT && Sy(lT, OT.deps)) return void oy(kT, cT, KT, lT)
+             }
+             jy.flags |= TT, MT.memoizedState = oy(1 | kT, cT, KT, lT)
```

#### 548. `bundles/bloxd.io/main.js` (Changed code · before: `L8618-L8621` → after: `L14719-L14720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14719-L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14719-L14720) · [Before (L8618-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8618-L8621)

```diff
-           function Sz() {
-             if ("brave" in navigator) return "brave";
-             const vv = Gv();
-             return "Microsoft Edge" === vv ? "edge" : vv.startsWith("Opera") ? "opera" : "Chrome" === vv || "Chromium" === vv ? "chrome" : "Firefox" === vv ? "firefox" : Pz() ? "otherChromium" : "other"
+           function Ey(TT, kT) {
+             return Gy(516, 4, TT, kT)
```

#### 549. `bundles/bloxd.io/main.js` (Changed code · before: `L8624-L8629` → after: `L14723-L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14723-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14723-L14724) · [Before (L8624-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8624-L8629)

```diff
-           function ez() {
-             var vv, zv, Pv;
-             if ("undefined" === typeof document) return "other";
-             if (null !== Hv) return Hv;
-             const hv = null !== (vv = null !== (zv = Mv) && void 0 !== zv ? zv : null === (Pv = (0, sv.t)()) || void 0 === Pv ? void 0 : Pv.vendor) && void 0 !== vv ? vv : null;
-             return null === hv ? "other" : (Hv = pz(hv), Hv)
+           function Zy(TT, kT) {
+             return Vy(516, 4, TT, kT)
```

#### 550. `bundles/bloxd.io/main.js` (Changed code · before: `L8632-L8639` → after: `L14727-L14728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14727-L14728) · [Before (L8632-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8632-L8639)

```diff
-           function gz() {
-             if (null === Hv) {
-               var vv, zv, Pv;
-               const hv = null !== (vv = null !== (zv = Mv) && void 0 !== zv ? zv : null === (Pv = (0, sv.p)()) || void 0 === Pv ? void 0 : Pv.vendor) && void 0 !== vv ? vv : null;
-               if (null === hv) return null;
-               Hv = pz(hv)
-             }
-             return Hv
+           function uy(TT, kT) {
+             return Vy(4, 2, TT, kT)
```

#### 551. `bundles/bloxd.io/main.js` (Changed code · before: `L8642-L8654` → after: `L14731-L14736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14731-L14736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14731-L14736) · [Before (L8642-L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8642-L8654)

```diff
-           function pz(vv) {
-             let zv = vv;
-             const Pv = [...zv.matchAll(/\(([^)]+)\)/g)];
-             if (Pv.length > 0) {
-               zv = Pv[Pv.length - 1][1].trim()
-             }
-             zv = zv.toLowerCase();
-             const hv = ["inc.", "open source technology center", "electronics co., ltd.", "/x.org", "technologies inc.", "corporation"];
-             for (const Sv of hv)
-               if (zv.endsWith(Sv)) {
-                 zv = zv.slice(0, -Sv.length).trimEnd();
-                 break
-               } return "imagination technologies" !== zv && "imagination" !== zv && "img-tec" !== zv || (zv = "powervr"), "nouveau" === zv && (zv = "nvidia"), "ati" !== zv && "ati technologies" !== zv || (zv = "amd"), "freedreno" === zv && (zv = "qualcomm"), "0x344c5250" === zv & … [truncated]
+           function Xy(TT, kT) {
+             return "function" === typeof kT ? (TT = TT(), kT(TT), function() {
+               kT(null)
+             }) : null !== kT && void 0 !== kT ? (TT = TT(), kT.current = TT, function() {
+               kT.current = null
+             }) : void 0
```

#### 552. `bundles/bloxd.io/main.js` (Changed code · before: `L8657-L8658` → after: `L14739-L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14739-L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14739-L14740) · [Before (L8657-L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8657-L8658)

```diff
-           function dz() {
-             return "gpu" in navigator
+           function dy(TT, kT, cT) {
+             return cT = null !== cT && void 0 !== cT ? cT.concat([TT]) : null, Vy(4, 2, Xy.bind(null, kT, TT), cT)
```

#### 553. `bundles/bloxd.io/main.js` (Changed code · before: `L8662-L8669` → after: `L14743-L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14743-L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14743-L14749) · [Before (L8662-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8662-L8669)

```diff
-           function lz() {
-             return Nz ??= async function() {
-               const vv = navigator.gpu;
-               if (!vv) return "no_webgpu_api";
-               const zv = await (0, lv.n)(vv);
-               if ("string" === typeof zv) return zv;
-               return Tv.h.setItem(lv.A, (0, lv.d)(zv)), Tv.h.setItem(lv.w, (0, lv.i)(zv)), "usable"
-             }().catch((vv => (console.error("WebGPU adapter request failed.", vv), "adapter_error"))).then((vv => ("usable" !== vv && (Nz = null), vv))), Nz
+           function Ly() {}
+ 
+           function Ry(TT, kT) {
+             var cT = Fy();
+             kT = void 0 === kT ? null : kT;
+             var lT = cT.memoizedState;
+             return null !== lT && null !== kT && Sy(kT, lT[1]) ? lT[0] : (cT.memoizedState = [TT, kT], TT)
```

#### 554. `bundles/bloxd.io/main.js` (Changed code · before: `L8693-L8705` → after: `L14752-L14769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14752-L14769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14752-L14769) · [Before (L8693-L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8693-L8705)

```diff
-             function wz() {
-               const vv = ["ody0u2TSD2PV", "ndeXmZeZwwPcALHO", "ntiYmZa2rNvIvhrN", "ndu0mtK2ne92qKnczG", "mJGZntiWnw54EfjUCW", "ntDuBKz3s20", "mZC5oda4nenxzKPIza", "mtuYExPbsurH", "mJeWnZHpvK5LBLu"];
-               return (wz = function() {
-                 return vv
-               })()
-             }! function(vv) {
-               const zv = Wz,
-                 Pv = vv();
-               for (;;) try {
-                 if (827390 === -parseInt(zv(164)) / 1 * (-parseInt(zv(168)) / 2) + parseInt(zv(165)) / 3 + parseInt(zv(162)) / 4 + -parseInt(zv(163)) / 5 + parseInt(zv(170)) / 6 + -parseInt(zv(169)) / 7 * (parseInt(zv(166)) / 8) + -parseInt(zv(167)) / 9) break;
-                 Pv.push(Pv.shift())
-               } catch (hv) {
-                 Pv.push(Pv.shift())
+           function gy(TT, kT) {
+             var cT = Fy();
+             kT = void 0 === kT ? null : kT;
+             var lT = cT.memoizedState;
+             return null !== lT && null !== kT && Sy(kT, lT[1]) ? lT[0] : (TT = TT(), cT.memoizedState = [TT, kT], TT)
+           }
+ 
+           function Uy(TT, kT) {
+             var cT = cO();
+             MO(98 > cT ? 98 : cT, (function() {
+               TT(!0)
+             })), MO(97 < cT ? 97 : cT, (function() {
+               var cT = Ay.transition;
+               Ay.transition = 1;
+               try {
+                 TT(!1), kT()
+ ... (2 more added lines; see GitHub link above)
```

#### 555. `bundles/bloxd.io/main.js` (Changed code · before: `L8707-L8719` → after: `L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14771) · [Before (L8707-L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8707-L8719)

```diff
-             }(wz);
-             const az = vv => {
-                 var zv;
-                 vv = null !== (zv = vv) && void 0 !== zv ? zv : "";
-                 let Pv = "";
-                 for (let Sv = 0; Sv < 10; Sv++) {
-                   var hv;
-                   Pv += (null !== (hv = vv[Sv]) && void 0 !== hv ? hv : Sv.toString()).charCodeAt(0).toString(32)
-                 }
-                 return Pv
-               },
-               sz = Pv(229).shouldUseUkPrivacyPolicy;
-             Lv = az(Wv.o) + "_" + az(Wv.v) + "_" + (sz() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
+             }))
```

#### 556. `bundles/bloxd.io/main.js` (Changed code · before: `L8725-L8732` → after: `L14774-L14792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14774-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14774-L14792) · [Before (L8725-L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8725-L8732)

```diff
-             function Pv(hv) {
-               if (zv[hv]) return zv[hv].exports;
-               var Sv = zv[hv] = {
-                 i: hv,
-                 l: !1,
-                 exports: {}
-               };
-               return vv[hv].call(Sv.exports, Sv, Sv.exports, Pv), Sv.l = !0, Sv.exports
+           function Yy(TT, kT, cT) {
+             var lT = ex(),
+               MT = Gx(TT),
+               KT = {
+                 lane: MT,
+                 action: cT,
+                 eagerReducer: null,
+                 eagerState: null,
+                 next: null
+               },
+               OT = kT.pending;
+             if (null === OT ? KT.next = KT : (KT.next = OT.next, OT.next = KT), kT.pending = KT, OT = TT.alternate, TT === jy || null !== OT && OT === jy) Ny = hy = !0;
+             else {
+               if (0 === TT.lanes && (null === OT || 0 === OT.lanes) && null !== (OT = kT.lastRenderedReducer)) try {
+                 var yT = kT.lastRenderedState,
+                   fT = OT(yT, cT);
+ ... (3 more added lines; see GitHub link above)
```

#### 557. `bundles/bloxd.io/main.js` (Changed code · before: `L8734-L8891` → after: `L14794-L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14794-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14794-L14891) · [Before (L8734-L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8734-L8891)

```diff
-             return Pv.m = vv, Pv.c = zv, Pv.d = function(vv, zv, hv) {
-               Pv.o(vv, zv) || Object.defineProperty(vv, zv, {
-                 enumerable: !0,
-                 get: hv
-               })
-             }, Pv.r = function(vv) {
-               "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(vv, Symbol.toStringTag, {
-                 value: "Module"
-               }), Object.defineProperty(vv, "__esModule", {
-                 value: !0
-               })
-             }, Pv.t = function(vv, zv) {
-               if (1 & zv && (vv = Pv(vv)), 8 & zv) return vv;
-               if (4 & zv && "object" == typeof vv && vv && vv.__esModule) return vv;
-               var hv = Object.create(null);
-               if (Pv.r(hv), Object.defineProperty(hv, "default", {
- ... (142 more removed lines; see GitHub link above)
+           }
+           var By = {
+               readContext: QO,
+               useCallback: Qy,
+               useContext: Qy,
+               useEffect: Qy,
+               useImperativeHandle: Qy,
+               useLayoutEffect: Qy,
+               useMemo: Qy,
+               useReducer: Qy,
+               useRef: Qy,
+               useState: Qy,
+               useDebugValue: Qy,
+               useDeferredValue: Qy,
+               useTransition: Qy,
+               useMutableSource: Qy,
+ ... (82 more added lines; see GitHub link above)
```

#### 558. `bundles/bloxd.io/main.js` (Changed code · before: `L8893-L8998` → after: `L14893-L15520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14893-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L14893-L15520) · [Before (L8893-L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L8893-L8998)

```diff
-             18: function(vv, zv, Pv) {
-               zv.__esModule = !0, zv.ENGINE_MAP = zv.OS_MAP = zv.PLATFORMS_MAP = zv.BROWSER_MAP = zv.BROWSER_ALIASES_MAP = void 0, zv.BROWSER_ALIASES_MAP = {
-                 "Amazon Silk": "amazon_silk",
-                 "Android Browser": "android",
-                 Bada: "bada",
-                 BlackBerry: "blackberry",
-                 Chrome: "chrome",
-                 Chromium: "chromium",
-                 Electron: "electron",
-                 Epiphany: "epiphany",
-                 Firefox: "firefox",
-                 Focus: "focus",
-                 Generic: "generic",
-                 "Google Search": "google_search",
-                 Googlebot: "googlebot",
-                 "Internet Explorer": "ie",
- ... (90 more removed lines; see GitHub link above)
+             ny = {
+               readContext: QO,
+               useCallback: Ry,
+               useContext: QO,
+               useEffect: Zy,
+               useImperativeHandle: dy,
+               useLayoutEffect: uy,
+               useMemo: gy,
+               useReducer: Py,
+               useRef: ey,
+               useState: function() {
+                 return Py(ry)
+               },
+               useDebugValue: Ly,
+               useDeferredValue: function(TT) {
+                 var kT = Py(ry),
+ ... (612 more added lines; see GitHub link above)
```

#### 559. `bundles/bloxd.io/main.js` (Changed code · before: `L9000-L9006` → after: `L15522-L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15522-L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L15522-L15779) · [Before (L9000-L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9000-L9006)

```diff
-             },
-             90: function(vv, zv, Pv) {
-               zv.__esModule = !0, zv.default = void 0;
-               var hv, Sv = (hv = Pv(91)) && hv.__esModule ? hv : {
-                   default: hv
-                 },
-                 ev = Pv(18);
+               cT && (yT = yT || []).push("style", cT);
+               var AT = yT;
+               (kT.updateQueue = AT) && (kT.flags |= 4)
+             }
+           }, jf = function(TT, kT, cT, lT) {
+             cT !== lT && (kT.flags |= 4)
+           };
+           var zf = "function" === typeof WeakMap ? WeakMap : Map;
+ 
+           function Jf(TT, kT, cT) {
+             (cT = FO(-1, cT)).tag = 3, cT.payload = {
+               element: null
+             };
+             var lT = kT.value;
+             return cT.callback = function() {
+               hx || (hx = !0, Nx = lT), bf(0, kT)
+ ... (242 more added lines; see GitHub link above)
```

#### 560. `bundles/bloxd.io/main.js` (Changed code · before: `L9008-L9011` → after: `L15781-L15796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15781-L15796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L15781-L15796) · [Before (L9008-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9008-L9011)

```diff
-               function gv(vv, zv) {
-                 for (var Pv = 0; Pv < zv.length; Pv++) {
-                   var hv = zv[Pv];
-                   hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, hv.key, hv)
+           function gf(TT, kT) {
+             for (var cT, lT, MT = kT, KT = !1;;) {
+               if (!KT) {
+                 KT = MT.return;
+                 TT: for (;;) {
+                   if (null === KT) throw Error(OT(160));
+                   switch (cT = KT.stateNode, KT.tag) {
+                     case 5:
+                       lT = !1;
+                       break TT;
+                     case 3:
+                     case 4:
+                       cT = cT.containerInfo, lT = !0;
+                       break TT
+                   }
+                   KT = KT.return
```

#### 561. `bundles/bloxd.io/main.js` (Changed code · before: `L9014-L9040` → after: `L15800-L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15800-L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L15800-L15870) · [Before (L9014-L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9014-L9040)

```diff
-               var pv = function() {
-                 function vv() {}
-                 var zv, Pv, hv;
-                 return vv.getParser = function(vv, zv) {
-                   if (void 0 === zv && (zv = !1), "string" != typeof vv) throw new Error("UserAgent should be a string");
-                   return new Sv.default(vv, zv)
-                 }, vv.parse = function(vv) {
-                   return new Sv.default(vv).getResult()
-                 }, zv = vv, hv = [{
-                   key: "BROWSER_MAP",
-                   get: function() {
-                     return ev.BROWSER_MAP
-                   }
-                 }, {
-                   key: "ENGINE_MAP",
-                   get: function() {
- ... (11 more removed lines; see GitHub link above)
+               if (5 === MT.tag || 6 === MT.tag) {
+                 TT: for (var yT = TT, fT = MT, xT = fT;;)
+                   if (Zf(yT, xT), null !== xT.child && 4 !== xT.tag) xT.child.return = xT, xT = xT.child;
+                   else {
+                     if (xT === fT) break TT;
+                     for (; null === xT.sibling;) {
+                       if (null === xT.return || xT.return === fT) break TT;
+                       xT = xT.return
+                     }
+                     xT.sibling.return = xT.return, xT = xT.sibling
+                   }lT ? (yT = cT, fT = MT.stateNode, 8 === yT.nodeType ? yT.parentNode.removeChild(fT) : yT.removeChild(fT)) : cT.removeChild(MT.stateNode)
+               }
+               else if (4 === MT.tag) {
+                 if (null !== MT.child) {
+                   cT = MT.stateNode.containerInfo, lT = !0, MT.child.return = MT, MT = MT.child;
+                   continue
+ ... (55 more added lines; see GitHub link above)
```

#### 562. `bundles/bloxd.io/main.js` (Changed code · before: `L9042-L9052` → after: `L15872-L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15872-L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L15872-L15888) · [Before (L9042-L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9042-L9052)

```diff
-                 }], (Pv = null) && gv(zv.prototype, Pv), hv && gv(zv, hv), vv
-               }();
-               zv.default = pv, vv.exports = zv.default
-             },
-             91: function(vv, zv, Pv) {
-               zv.__esModule = !0, zv.default = void 0;
-               var hv = dv(Pv(92)),
-                 Sv = dv(Pv(93)),
-                 ev = dv(Pv(94)),
-                 gv = dv(Pv(95)),
-                 pv = dv(Pv(17));
+                 }
+                 return;
+               case 6:
+                 if (null === kT.stateNode) throw Error(OT(162));
+                 return void(kT.stateNode.nodeValue = kT.memoizedProps);
+               case 3:
+                 return void((cT = kT.stateNode).hydrate && (cT.hydrate = !1, bc(cT.containerInfo)));
+               case 13:
+                 return null !== kT.memoizedState && (Ax = kO(), Ef(kT.child, !0)), void Yf(kT);
+               case 19:
+                 return void Yf(kT);
+               case 23:
+               case 24:
+                 return void Ef(kT, null !== kT.memoizedState)
+             }
+             throw Error(OT(163))
+ ... (1 more added lines; see GitHub link above)
```

#### 563. `bundles/bloxd.io/main.js` (Changed code · before: `L9054-L9056` → after: `L15890-L15998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15890-L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L15890-L15998) · [Before (L9054-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9054-L9056)

```diff
-               function dv(vv) {
-                 return vv && vv.__esModule ? vv : {
-                   default: vv
+           function Yf(TT) {
+             var kT = TT.updateQueue;
+             if (null !== kT) {
+               TT.updateQueue = null;
+               var cT = TT.stateNode;
+               null === cT && (cT = TT.stateNode = new Hf), kT.forEach((function(kT) {
+                 var lT = II.bind(null, TT, kT);
+                 cT.has(kT) || (cT.add(kT), kT.then(lT, lT))
+               }))
+             }
+           }
+ 
+           function Bf(TT, kT) {
+             return null !== TT && (null === (TT = TT.memoizedState) || null !== TT.dehydrated) && (null !== (kT = kT.memoizedState) && null === kT.dehydrated)
+           }
+           var Wf = Math.ceil,
+ ... (93 more added lines; see GitHub link above)
```

#### 564. `bundles/bloxd.io/main.js` (Changed code · before: `L9059-L9062` → after: `L16009-L16033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16009-L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16009-L16033) · [Before (L9059-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9059-L9062)

```diff
-               var Nv = function() {
-                 function vv(vv, zv) {
-                   if (void 0 === zv && (zv = !1), null == vv || "" === vv) throw new Error("UserAgent parameter can't be empty");
-                   this._ua = vv, this.parsedResult = {}, !0 !== zv && this.parse()
+               15 === kT ? (cT = dx.bind(null, TT), null === iK ? (iK = [cT], qK = ZK(gK, yO)) : iK.push(cT), cT = nK) : 14 === kT ? cT = KO(99, dx.bind(null, TT)) : (cT = function(TT) {
+                 switch (TT) {
+                   case 15:
+                   case 14:
+                     return 99;
+                   case 13:
+                   case 12:
+                   case 11:
+                   case 10:
+                     return 98;
+                   case 9:
+                   case 8:
+                   case 7:
+                   case 6:
+                   case 4:
+                   case 5:
+ ... (9 more added lines; see GitHub link above)
```

#### 565. `bundles/bloxd.io/main.js` (Changed code · before: `L9064-L9251` → after: `L16035-L16074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16035-L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16035-L16074) · [Before (L9064-L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9064-L9251)

```diff
-                 var zv = vv.prototype;
-                 return zv.getUA = function() {
-                   return this._ua
-                 }, zv.test = function(vv) {
-                   return vv.test(this._ua)
-                 }, zv.parseBrowser = function() {
-                   var vv = this;
-                   this.parsedResult.browser = {};
-                   var zv = pv.default.find(hv.default, (function(zv) {
-                     if ("function" == typeof zv.test) return zv.test(vv);
-                     if (zv.test instanceof Array) return zv.test.some((function(zv) {
-                       return vv.test(zv)
-                     }));
-                     throw new Error("Browser's test function is not valid")
-                   }));
-                   return zv && (this.parsedResult.browser = zv.describe(this.getUA())), this.parsedResult.browser
- ... (172 more removed lines; see GitHub link above)
+               }(kT), cT = KO(cT, ux.bind(null, TT))), TT.callbackPriority = kT, TT.callbackNode = cT
+             }
+           }
+ 
+           function ux(TT) {
+             if (bx = -1, Jx = zx = 0, 0 !== (48 & qf)) throw Error(OT(327));
+             var kT = TT.callbackNode;
+             if (lI() && TT.callbackNode !== kT) return null;
+             var cT = Uc(TT, TT === sf ? kx : 0);
+             if (0 === cT) return null;
+             var lT = cT,
+               MT = qf;
+             qf |= 16;
+             var KT = Wx();
+             for (sf === TT && kx === lT || (jx(), Yx(TT, lT));;) try {
+               ix();
+ ... (24 more added lines; see GitHub link above)
```

#### 566. `bundles/bloxd.io/main.js` (Changed code · before: `L9253-L9260` → after: `L16076-L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16076-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16076-L16082) · [Before (L9253-L9260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9253-L9260)

```diff
-                 }, {
-                   test: [/MZBrowser/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "MZ Browser"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   TI(TT);
+                   break;
+                 case 4:
+                   if (Xx(TT, cT), (4186112 & cT) === cT) break;
+                   for (lT = TT.eventTimes, MT = -1; 0 < cT;) {
+                     var yT = 31 - ic(cT);
+                     KT = 1 << yT, (yT = lT[yT]) > MT && (MT = yT), cT &= ~KT
```

#### 567. `bundles/bloxd.io/main.js` (Changed code · before: `L9262-L9269` → after: `L16084-L16086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16084-L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16084-L16086) · [Before (L9262-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9262-L9269)

```diff
-                 }, {
-                   test: [/focus/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Focus"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   if (cT = MT, 10 < (cT = (120 > (cT = kO() - cT) ? 120 : 480 > cT ? 480 : 1080 > cT ? 1080 : 1920 > cT ? 1920 : 3e3 > cT ? 3e3 : 4320 > cT ? 4320 : 1960 * Wf(cT / 1960)) - cT)) {
+                     TT.timeoutHandle = kK(TI.bind(null, TT), cT);
+                     break
```

#### 568. `bundles/bloxd.io/main.js` (Changed code · before: `L9271-L9278` → after: `L16088-L16186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16088-L16186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16088-L16186) · [Before (L9271-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9271-L9278)

```diff
-                 }, {
-                   test: [/swing/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Swing"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   TI(TT);
+                   break;
+                 default:
+                   throw Error(OT(329))
+               }
+             }
+             return Zx(TT, kO()), TT.callbackNode === kT ? ux.bind(null, TT) : null
+           }
+ 
+           function Xx(TT, kT) {
+             for (kT &= ~xx, kT &= ~fx, TT.suspendedLanes |= kT, TT.pingedLanes &= ~kT, TT = TT.expirationTimes; 0 < kT;) {
+               var cT = 31 - ic(kT),
+                 lT = 1 << cT;
+               TT[cT] = -1, kT &= ~lT
+             }
+           }
+ ... (83 more added lines; see GitHub link above)
```

#### 569. `bundles/bloxd.io/main.js` (Changed code · before: `L9280-L9287` → after: `L16188-L16244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16188-L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16188-L16244) · [Before (L9280-L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9280-L9287)

```diff
-                 }, {
-                   test: [/coast/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Opera Coast"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                   hy = !1
+                 }
+                 if (Cy = 0, ty = vy = jy = null, Ny = !1, pf.current = null, null === cT || null === cT.return) {
+                   Mx = 1, Kx = kT, Tx = null;
+                   break
+                 }
+                 TT: {
+                   var KT = TT,
+                     OT = cT.return,
+                     yT = cT,
+                     fT = kT;
+                   if (kT = kx, yT.flags |= 2048, yT.firstEffect = yT.lastEffect = null, null !== fT && "object" === typeof fT && "function" === typeof fT.then) {
+                     var xT = fT;
+                     if (0 === (2 & yT.mode)) {
+                       var IT = yT.alternate;
+                       IT ? (yT.updateQueue = IT.updateQueue, yT.memoizedState = IT.memoizedState, yT.lanes = IT.lanes) : (yT.updateQueue = null, yT.memoizedState = null)
+ ... (41 more added lines; see GitHub link above)
```

#### 570. `bundles/bloxd.io/main.js` (Changed code · before: `L9289-L9296` → after: `L16246-L16362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16246-L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16246-L16362) · [Before (L9289-L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9289-L9296)

```diff
-                 }, {
-                   test: [/opt\/\d+(?:.?_?\d+)+/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Opera Touch"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   5 !== Mx && (Mx = 2),
+                   fT = mf(fT, yT),
+                   CT = OT;do {
+                     switch (CT.tag) {
+                       case 3:
+                         KT = fT, CT.flags |= 4096, kT &= -kT, CT.lanes |= kT, PO(CT, Jf(0, KT, kT));
+                         break TT;
+                       case 1:
+                         KT = fT;
+                         var aT = CT.type,
+                           FT = CT.stateNode;
+                         if (0 === (64 & CT.flags) && ("function" === typeof aT.getDerivedStateFromError || null !== FT && "function" === typeof FT.componentDidCatch && (null === Qx || !Qx.has(FT)))) {
+                           CT.flags |= 4096, kT &= -kT, CT.lanes |= kT, PO(CT, of(CT, KT, kT));
+                           break TT
+                         }
+                     }
+ ... (101 more added lines; see GitHub link above)
```

#### 571. `bundles/bloxd.io/main.js` (Changed code · before: `L9298-L9305` → after: `L16364-L16378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16364-L16378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16364-L16378) · [Before (L9298-L9305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9298-L9305)

```diff
-                 }, {
-                   test: [/yabrowser/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Yandex Browser"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   var AT = 0,
+                     CT = -1,
+                     jT = -1,
+                     vT = 0,
+                     tT = 0,
+                     hT = yT,
+                     NT = null;
+                   kT: for (;;) {
+                     for (var QT; hT !== fT || 0 !== KT && 3 !== hT.nodeType || (CT = AT + KT), hT !== xT || 0 !== IT && 3 !== hT.nodeType || (jT = AT + IT), 3 === hT.nodeType && (AT += hT.nodeValue.length), null !== (QT = hT.firstChild);) NT = hT, hT = QT;
+                     for (;;) {
+                       if (hT === yT) break kT;
+                       if (NT === fT && ++vT === KT && (CT = AT), NT === xT && ++tT === IT && (jT = AT), null !== (QT = hT.nextSibling)) break;
+                       NT = (hT = NT).parentNode
+                     }
+                     hT = QT
```

#### 572. `bundles/bloxd.io/main.js` (Changed code · before: `L9307-L9314` → after: `L16380-L16382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16380-L16382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16380-L16382) · [Before (L9307-L9314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9307-L9314)

```diff
-                 }, {
-                   test: [/ucbrowser/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "UC Browser"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                   fT = -1 === CT || -1 === jT ? null : {
+                     start: CT,
+                     end: jT
```

#### 573. `bundles/bloxd.io/main.js` (Changed code · before: `L9316-L9323` → after: `L16384-L16435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16384-L16435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16384-L16435) · [Before (L9316-L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9316-L9323)

```diff
-                 }, {
-                   test: [/Maxthon|mxios/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Maxthon"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 } else fT = null;
+                 fT = fT || {
+                   start: 0,
+                   end: 0
+                 }
+               } else fT = null;
+               qM = {
+                 focusedElem: yT,
+                 selectionRange: fT
+               }, cl = !1, ox = null, Hx = !1, tx = lT;
+               do {
+                 try {
+                   cI()
+                 } catch (mT) {
+                   if (null === tx) throw Error(OT(330));
+                   fI(tx, mT), tx = tx.nextEffect
+ ... (36 more added lines; see GitHub link above)
```

#### 574. `bundles/bloxd.io/main.js` (Changed code · before: `L9325-L9332` → after: `L16437-L16464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16437-L16464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16437-L16464) · [Before (L9325-L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9325-L9332)

```diff
-                 }, {
-                   test: [/epiphany/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Epiphany"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 } catch (mT) {
+                   if (null === tx) throw Error(OT(330));
+                   fI(tx, mT), tx = tx.nextEffect
+                 }
+               } while (null !== tx);
+               if (aT = qM, DT = PM(), ST = aT.focusedElem, yT = aT.selectionRange, DT !== ST && ST && ST.ownerDocument && rM(ST.ownerDocument.documentElement, ST)) {
+                 null !== yT && wM(ST) && (DT = yT.start, void 0 === (aT = yT.end) && (aT = DT), "selectionStart" in ST ? (ST.selectionStart = DT, ST.selectionEnd = Math.min(aT, ST.value.length)) : (aT = (DT = ST.ownerDocument || document) && DT.defaultView || window).getSelection … [truncated]
+                 for (aT = ST; aT = aT.parentNode;) 1 === aT.nodeType && DT.push({
+                   element: aT,
+                   left: aT.scrollLeft,
+                   top: aT.scrollTop
+                 });
+                 for ("function" === typeof ST.focus && ST.focus(), ST = 0; ST < DT.length; ST++)(aT = DT[ST]).element.scrollLeft = aT.left, aT.element.scrollTop = aT.top
+               }
+               cl = !!iM, qM = iM = null, TT.current = cT, tx = lT;
+               do {
+ ... (12 more added lines; see GitHub link above)
```

#### 575. `bundles/bloxd.io/main.js` (Changed code · before: `L9334-L9341` → after: `L16466-L16567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16466-L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16466-L16567) · [Before (L9334-L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9334-L9341)

```diff
-                 }, {
-                   test: [/puffin/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Puffin"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 } catch (mT) {
+                   if (null === tx) throw Error(OT(330));
+                   fI(tx, mT), tx = tx.nextEffect
+                 }
+               } while (null !== tx);
+               tx = null, pK(), qf = MT
+             } else TT.current = cT;
+             if (Sx) Sx = !1, Dx = TT, ax = kT;
+             else
+               for (tx = lT; null !== tx;) kT = tx.nextEffect, tx.nextEffect = null, 8 & tx.flags && ((rT = tx).sibling = null, rT.stateNode = null), tx = kT;
+             if (0 === (lT = TT.pendingLanes) && (Qx = null), 1 === lT ? TT === mx ? wx++ : (wx = 0, mx = TT) : wx = 0, cT = cT.stateNode, VK && "function" === typeof VK.onCommitFiberRoot) try {
+               VK.onCommitFiberRoot(GK, cT, void 0, 64 === (64 & cT.current.flags))
+             } catch (mT) {}
+             if (Zx(TT, kO()), hx) throw hx = !1, TT = Nx, Nx = null, TT;
+             return 0 !== (8 & qf) || OO(), null
+           }
+ ... (86 more added lines; see GitHub link above)
```

#### 576. `bundles/bloxd.io/main.js` (Changed code · before: `L9343-L9350` → after: `L16569-L16693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16569-L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16569-L16693) · [Before (L9343-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9343-L9350)

```diff
-                 }, {
-                   test: [/sleipnir/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Sleipnir"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }
+                 cT = cT.return
+               }
+           }
+ 
+           function xI(TT, kT, cT) {
+             var lT = TT.pingCache;
+             null !== lT && lT.delete(kT), kT = ex(), TT.pingedLanes |= TT.suspendedLanes & cT, sf === TT && (kx & cT) === cT && (4 === Mx || 3 === Mx && (62914560 & kx) === kx && 500 > kO() - Ax ? Yx(TT, 0) : xx |= cT), Zx(TT, kT)
+           }
+ 
+           function II(TT, kT) {
+             var cT = TT.stateNode;
+             null !== cT && cT.delete(kT), 0 === (kT = 0) && (0 === (2 & (kT = TT.mode)) ? kT = 1 : 0 === (4 & kT) ? kT = 99 === cO() ? 1 : 2 : (0 === zx && (zx = Ox), 0 === (kT = Wc(62914560 & ~zx)) && (kT = 4194304))), cT = ex(), null !== (TT = Ex(TT, kT)) && (pc(TT, kT, cT), Zx … [truncated]
+           }
+ 
+           function AI(TT, kT, cT, lT) {
+ ... (109 more added lines; see GitHub link above)
```

#### 577. `bundles/bloxd.io/main.js` (Changed code · before: `L9352-L9359` → after: `L16695-L16827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16695-L16827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16695-L16827) · [Before (L9352-L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9352-L9359)

```diff
-                 }, {
-                   test: [/k-meleon/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "K-Meleon"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                   fT = fT.return
+                 } while (null !== fT);
+                 throw Error(OT(171))
+               }
+               if (1 === cT.tag) {
+                 var xT = cT.type;
+                 if (bK(xT)) {
+                   cT = oK(cT, xT, fT);
+                   break TT
+                 }
+               }
+               cT = fT
+             }
+             else cT = FK;
+             return null === kT.context ? kT.context = cT : kT.pendingContext = cT, (kT = FO(KT, yT)).payload = {
+               element: TT
+ ... (117 more added lines; see GitHub link above)
```

#### 578. `bundles/bloxd.io/main.js` (Changed code · before: `L9361-L9368` → after: `L16829-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16829-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16829-L16868) · [Before (L9361-L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9361-L9368)

```diff
-                 }, {
-                   test: [/micromessenger/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "WeChat"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   return Ff(TT, kT, cT)
+                 }
+                 qy = 0 !== (16384 & TT.flags)
+               }
+             else qy = !1;
+             switch (kT.lanes = 0, kT.tag) {
+               case 2:
+                 if (lT = kT.type, null !== TT && (TT.alternate = null, kT.alternate = null, kT.flags |= 2), TT = kT.pendingProps, MT = mK(kT, rK.current), NO(kT, cT), MT = Dy(null, kT, lT, TT, MT, cT), kT.flags |= 1, "object" === typeof MT && null !== MT && "function" === typeof  … [truncated]
+                   if (kT.tag = 1, kT.memoizedState = null, kT.updateQueue = null, bK(lT)) {
+                     var KT = !0;
+                     HK(kT)
+                   } else KT = !1;
+                   kT.memoizedState = null !== MT.state && void 0 !== MT.state ? MT.state : null, DO(kT);
+                   var yT = lT.getDerivedStateFromProps;
+                   "function" === typeof yT && zO(kT, lT, yT, TT), MT.updater = JO, kT.stateNode = MT, MT._reactInternals = kT, GO(kT, lT, TT, cT), kT = ff(null, kT, lT, !0, KT, cT)
+                 } else kT.tag = 0, sy(null, kT, MT, cT), kT = kT.child;
+ ... (24 more added lines; see GitHub link above)
```

#### 579. `bundles/bloxd.io/main.js` (Changed code · before: `L9370-L9377` → after: `L16870-L16995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16870-L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16870-L16995) · [Before (L9370-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9370-L9377)

```diff
-                 }, {
-                   test: [/qqbrowser/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: /qqbrowserlite/i.test(vv) ? "QQ Browser Lite" : "QQ Browser"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   throw Error(OT(306, MT, ""))
+                 }
+                 return kT;
+               case 0:
+                 return lT = kT.type, MT = kT.pendingProps, Of(TT, kT, lT, MT = kT.elementType === lT ? MT : xO(lT, MT), cT);
+               case 1:
+                 return lT = kT.type, MT = kT.pendingProps, yf(TT, kT, lT, MT = kT.elementType === lT ? MT : xO(lT, MT), cT);
+               case 3:
+                 if (xf(kT), lT = kT.updateQueue, null === TT || null === lT) throw Error(OT(282));
+                 if (lT = kT.pendingProps, MT = null !== (MT = kT.memoizedState) ? MT.element : null, aO(TT, kT), wO(kT, lT, null, cT), (lT = kT.memoizedState.element) === MT) yy(), kT = Ff(TT, kT, cT);
+                 else {
+                   if ((KT = (MT = kT.stateNode).hydrate) && (Ty = MK(kT.stateNode.containerInfo.firstChild), sO = kT, KT = ky = !0), KT) {
+                     if (null != (TT = MT.mutableSourceEagerHydrationData))
+                       for (MT = 0; MT < TT.length; MT += 2)(KT = TT[MT])._workInProgressVersionPrimary = TT[MT + 1], fy.push(KT);
+                     for (cT = dO(kT, null, lT, cT), kT.child = cT; cT;) cT.flags = -3 & cT.flags | 1024, cT = cT.sibling
+                   } else sy(TT, kT, lT, cT), yy();
+ ... (110 more added lines; see GitHub link above)
```

#### 580. `bundles/bloxd.io/main.js` (Changed code · before: `L9379-L9386` → after: `L16997-L17216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16997-L17216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L16997-L17216) · [Before (L9379-L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9379-L9386)

```diff
-                 }, {
-                   test: [/msie|trident/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Internet Explorer"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }
+                 break;
+               case "textarea":
+                 Ak(TT, cT);
+                 break;
+               case "select":
+                 null != (kT = cT.value) && fk(TT, !!cT.multiple, kT, !1)
+             }
+           }, Zk = Lx, uk = function(TT, kT, cT, lT, MT) {
+             var KT = qf;
+             qf |= 4;
+             try {
+               return MO(98, TT.bind(null, kT, cT, lT, MT))
+             } finally {
+               0 === (qf = KT) && (jx(), OO())
+             }
+ ... (204 more added lines; see GitHub link above)
```

#### 581. `bundles/bloxd.io/main.js` (Changed code · before: `L9388-L9395` → after: `L17218-L17535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17218-L17535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L17218-L17535) · [Before (L9388-L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9388-L9395)

```diff
-                 }, {
-                   test: [/\sedg\//i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Microsoft Edge"
-                       },
-                       Pv = Sv.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }), kT && CT(TT, kT)
+               }(kT, TT), cT = kT, (lT = [{
+                 key: "componentDidUpdate",
+                 value: function(TT) {
+                   if (this.props.value !== TT.value)
+                     if (this.props.value) {
+                       var kT = this.parseValue(this.props.value, this.props.options);
+                       kT !== this.state.selected && this.setState({
+                         selected: kT
+                       })
+                     } else this.setState({
+                       selected: {
+                         label: "undefined" === typeof this.props.placeholder ? jT : this.props.placeholder,
+                         value: ""
+                       }
+                     })
+ ... (302 more added lines; see GitHub link above)
```

#### 582. `bundles/bloxd.io/main.js` (Changed code · before: `L9397-L9404` → after: `L17537-L17599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17537-L17599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L17537-L17599) · [Before (L9397-L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9397-L9404)

```diff
-                 }, {
-                   test: [/edg([ea]|ios)/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Microsoft Edge"
-                       },
-                       Pv = Sv.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                   if (!cT || !TT[cT]) return !1;
+                   const OT = TT[cT].toLowerCase();
+                   return lT[cT] || (lT[cT] = {}), MT[cT] || (MT[cT] = {}), !lT[cT][OT] && (MT[cT][OT] = !0, !0)
+                 })).reverse().forEach((kT => TT.push(kT)));
+                 const KT = Object.keys(MT);
+                 for (let kT = 0; kT < KT.length; kT += 1) {
+                   const TT = KT[kT],
+                     cT = {
+                       ...lT[TT],
+                       ...MT[TT]
+                     };
+                   lT[TT] = cT
+                 }
+                 return TT
+               }), []).reverse()
+             },
+ ... (47 more added lines; see GitHub link above)
```

#### 583. `bundles/bloxd.io/main.js` (Changed code · before: `L9406-L9413` → after: `L17601-L17640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17601-L17640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L17601-L17640) · [Before (L9406-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9406-L9413)

```diff
-                 }, {
-                   test: [/vivaldi/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Vivaldi"
-                       },
-                       Pv = Sv.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 } else MT[cT] = kT[TT]
+               })), lT.createElement(TT, MT)
+             })),
+             dT = function(TT, kT) {
+               let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+               switch (TT) {
+                 case "title":
+                   return {
+                     toComponent: () => ((TT, kT, cT) => {
+                       const MT = uT(cT, {
+                         key: kT,
+                         [NT]: !0
+                       });
+                       return [lT.createElement("title", MT, kT)]
+                     })(0, kT.title, kT.titleAttributes), toString: () => ((TT, kT, cT, lT) => {
+                       const MT = ZT(cT),
+ ... (24 more added lines; see GitHub link above)
```

#### 584. `bundles/bloxd.io/main.js` (Changed code · before: `L9415-L9422` → after: `L17642-L17721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17642-L17721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L17642-L17721) · [Before (L9415-L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9415-L9422)

```diff
-                 }, {
-                   test: [/seamonkey/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "SeaMonkey"
-                       },
-                       Pv = Sv.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+               }
+             },
+             LT = TT => {
+               const {
+                 baseTag: kT,
+                 bodyAttributes: cT,
+                 encode: lT = !0,
+                 htmlAttributes: MT,
+                 noscriptTags: KT,
+                 styleTags: OT,
+                 title: yT = "",
+                 titleAttributes: fT,
+                 prioritizeSeoTags: xT
+               } = TT;
+               let {
+                 linkTags: IT,
+ ... (64 more added lines; see GitHub link above)
```

#### 585. `bundles/bloxd.io/main.js` (Changed code · before: `L9424-L9431` → after: `L17723-L17960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17723-L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L17723-L17960) · [Before (L9424-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9424-L9431)

```diff
-                 }, {
-                   test: [/sailfish/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Sailfish"
-                       },
-                       Pv = Sv.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }
+               };
+               constructor(TT, kT) {
+                 this.context = TT, this.canUseDOM = kT || !1, kT || (TT.helmet = LT({
+                   baseTag: [],
+                   bodyAttributes: {},
+                   encodeSpecialCharacters: !0,
+                   htmlAttributes: {},
+                   linkTags: [],
+                   metaTags: [],
+                   noscriptTags: [],
+                   scriptTags: [],
+                   styleTags: [],
+                   title: "",
+                   titleAttributes: {}
+                 }))
+ ... (222 more added lines; see GitHub link above)
```

#### 586. `bundles/bloxd.io/main.js` (Changed code · before: `L9433-L9440` → after: `L17962-L18356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17962-L18356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L17962-L18356) · [Before (L9433-L9440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9433-L9440)

```diff
-                 }, {
-                   test: [/silk/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Amazon Silk"
-                       },
-                       Pv = Sv.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 })), cT
+               }
+               warnOnInvalidChildren(TT, kT) {
+                 return yT()(vT.some((kT => TT.type === kT)), "function" === typeof TT.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${vT.join(", ")} are allowed. He … [truncated]
+               }
+               mapChildrenToProps(TT, kT) {
+                 let cT = {};
+                 return lT.Children.forEach(TT, (TT => {
+                   if (!TT || !TT.props) return;
+                   const {
+                     children: lT,
+                     ...MT
+                   } = TT.props, KT = Object.keys(MT).reduce(((TT, kT) => (TT[hT[kT] || kT] = MT[kT], TT)), {});
+                   let {
+                     type: OT
+                   } = TT;
+ ... (379 more added lines; see GitHub link above)
```

#### 587. `bundles/bloxd.io/main.js` (Changed code · before: `L9442-L9446` → after: `L18358-L18965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18358-L18965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L18358-L18965) · [Before (L9442-L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9442-L9446)

```diff
-                 }, {
-                   test: [/phantom/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "PhantomJS"
+                 };
+               if (!BT(TT, kT)) return xT;
+ 
+               function IT() {
+                 OT.forEach((function(TT) {
+                   return TT()
+                 })), OT = []
+               }
+               return xT.setOptions(cT).then((function(TT) {
+                 !yT && cT.onFirstUpdate && cT.onFirstUpdate(TT)
+               })), xT
+             }
+           }
+           var nT = {
+             passive: !0
+           };
+ ... (592 more added lines; see GitHub link above)
```

#### 588. `bundles/bloxd.io/main.js` (Changed code · before: `L9448-L9455` → after: `L18967-L18968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18967-L18968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L18967-L18968) · [Before (L9448-L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9448-L9455)

```diff
-                       Pv = Sv.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
-                   }
-                 }, {
-                   test: [/slimerjs/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "SlimerJS"
+                       arrow: {
+                         position: "absolute"
```

#### 589. `bundles/bloxd.io/main.js` (Changed code · before: `L9457-L9458` → after: `L18970-L19075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18970-L19075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L18970-L19075) · [Before (L9457-L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9457-L9458)

```diff
-                       Pv = Sv.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                       reference: {}
+                     };
+                   return Object.assign(kT.elements.popper.style, cT.popper), kT.styles = cT, kT.elements.arrow && Object.assign(kT.elements.arrow.style, cT.arrow),
+                     function() {
+                       Object.keys(kT.elements).forEach((function(TT) {
+                         var lT = kT.elements[TT],
+                           MT = kT.attributes[TT] || {},
+                           KT = Object.keys(kT.styles.hasOwnProperty(TT) ? kT.styles[TT] : cT[TT]).reduce((function(TT, kT) {
+                             return TT[kT] = "", TT
+                           }), {});
+                         xT(lT) && hT(lT) && (Object.assign(lT.style, KT), Object.keys(MT).forEach((function(TT) {
+                           lT.removeAttribute(TT)
+                         })))
+                       }))
+                     }
+                 },
+ ... (90 more added lines; see GitHub link above)
```

#### 590. `bundles/bloxd.io/main.js` (Changed code · before: `L9460-L9467` → after: `L19077-L19169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19077-L19169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19077-L19169) · [Before (L9460-L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9460-L9467)

```diff
-                 }, {
-                   test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "BlackBerry"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 },
+                 requiresIfExists: ["offset"],
+                 data: {
+                   _skip: !1
+                 }
+               }, tk, hk, {
+                 name: "hide",
+                 enabled: !0,
+                 phase: "main",
+                 requiresIfExists: ["preventOverflow"],
+                 nj: function(TT) {
+                   var kT = TT.state,
+                     cT = TT.name,
+                     lT = kT.rects.reference,
+                     MT = kT.rects.popper,
+                     KT = kT.modifiersData.preventOverflow,
+ ... (77 more added lines; see GitHub link above)
```

#### 591. `bundles/bloxd.io/main.js` (Changed code · before: `L9469-L9476` → after: `L19171-L19225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19171-L19225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19171-L19225) · [Before (L9469-L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9469-L9476)

```diff
-                 }, {
-                   test: [/(web|hpw)[o0]s/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "WebOS Browser"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv) || Sv.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }), []),
+                 AT = KT.useMemo((function() {
+                   var TT = {
+                     onFirstUpdate: MT.onFirstUpdate,
+                     placement: MT.placement,
+                     strategy: MT.strategy,
+                     modifiers: [].concat(MT.modifiers, [IT, {
+                       name: "applyStyles",
+                       enabled: !1
+                     }])
+                   };
+                   return ak()(lT.current, TT) ? lT.current || TT : (lT.current = TT, TT)
+                 }), [MT.onFirstUpdate, MT.placement, MT.strategy, MT.modifiers, IT]),
+                 CT = KT.useRef();
+               return rk((function() {
+                 CT.current && CT.current.setOptions(AT)
+ ... (39 more added lines; see GitHub link above)
```

#### 592. `bundles/bloxd.io/main.js` (Changed code · before: `L9478-L9485` → after: `L19227-L19262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19227-L19262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19227-L19262) · [Before (L9478-L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9478-L9485)

```diff
-                 }, {
-                   test: [/bada/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Bada"
-                       },
-                       Pv = Sv.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }
+               }
+           }
+           var Jk = ["styles", "attributes"],
+             Hk = {
+               getBoundingClientRect: zk()
+             },
+             ek = {
+               closeOnOutsideClick: !0,
+               closeOnTriggerHidden: !1,
+               defaultVisible: !1,
+               delayHide: 0,
+               delayShow: 0,
+               followCursor: !1,
+               interactive: !1,
+               mutationObserverOptions: {
+ ... (20 more added lines; see GitHub link above)
```

#### 593. `bundles/bloxd.io/main.js` (Changed code · before: `L9487-L9494` → after: `L19264-L19344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19264-L19344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19264-L19344) · [Before (L9487-L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9487-L9494)

```diff
-                 }, {
-                   test: [/tizen/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Tizen"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }]
+               }), Array.isArray(fT.offset) ? fT.offset : []),
+               IT = (0, MT.b)({}, kT, {
+                 placement: kT.placement || fT.placement,
+                 modifiers: kT.modifiers || xT
+               }),
+               AT = KT.useState(null),
+               CT = AT[0],
+               jT = AT[1],
+               vT = KT.useState(null),
+               tT = vT[0],
+               hT = vT[1],
+               NT = function(TT) {
+                 var kT = TT.initial,
+                   cT = TT.value,
+                   lT = TT.onChange,
+ ... (65 more added lines; see GitHub link above)
```

#### 594. `bundles/bloxd.io/main.js` (Changed code · before: `L9496-L9503` → after: `L19346-L19364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19346-L19364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19346-L19364) · [Before (L9496-L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9496-L9503)

```diff
-                 }, {
-                   test: [/qupzilla/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "QupZilla"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+               }
+             }), [mT, zT]), KT.useEffect((function() {
+               if (null != CT && bT("click")) return CT.addEventListener("click", oT),
+                 function() {
+                   return CT.removeEventListener("click", oT)
+                 }
+             }), [CT, bT, oT]), KT.useEffect((function() {
+               if (null != CT && bT("double-click")) return CT.addEventListener("dblclick", oT),
+                 function() {
+                   return CT.removeEventListener("dblclick", oT)
+                 }
+             }), [CT, bT, oT]), KT.useEffect((function() {
+               if (null != CT && bT("right-click")) {
+                 var TT = function(TT) {
+                   TT.preventDefault(), oT()
+                 };
+ ... (3 more added lines; see GitHub link above)
```

#### 595. `bundles/bloxd.io/main.js` (Changed code · before: `L9505-L9512` → after: `L19366-L19402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19366-L19402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19366-L19402) · [Before (L9505-L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9505-L9512)

```diff
-                 }, {
-                   test: [/firefox|iceweasel|fxios/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Firefox"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+               }
+             }), [CT, bT, oT]), KT.useEffect((function() {
+               if (null != CT && bT("focus")) return CT.addEventListener("focus", JT), CT.addEventListener("blur", zT),
+                 function() {
+                   CT.removeEventListener("focus", JT), CT.removeEventListener("blur", zT)
+                 }
+             }), [CT, bT, JT, zT]), KT.useEffect((function() {
+               if (null != CT && bT("hover")) return CT.addEventListener("mouseenter", JT), CT.addEventListener("mouseleave", zT),
+                 function() {
+                   CT.removeEventListener("mouseenter", JT), CT.removeEventListener("mouseleave", zT)
+                 }
+             }), [CT, bT, JT, zT]), KT.useEffect((function() {
+               if (null != tT && bT("hover") && mT().finalConfig.interactive) return tT.addEventListener("mouseenter", JT), tT.addEventListener("mouseleave", zT),
+                 function() {
+                   tT.removeEventListener("mouseenter", JT), tT.removeEventListener("mouseleave", zT)
+                 }
+ ... (21 more added lines; see GitHub link above)
```

#### 596. `bundles/bloxd.io/main.js` (Changed code · before: `L9514-L9521` → after: `L19404-L19828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19404-L19828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19404-L19828) · [Before (L9514-L9521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9514-L9521)

```diff
-                 }, {
-                   test: [/electron/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Electron"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+               }
+             }), [fT.mutationObserverOptions, tT, wT]);
+             return (0, MT.b)({
+               getArrowProps: function(TT) {
+                 return void 0 === TT && (TT = {}), (0, MT.b)({}, TT, rT.arrow, {
+                   style: (0, MT.b)({}, TT.style, FT.arrow),
+                   "data-popper-arrow": !0
+                 })
+               },
+               getTooltipProps: function(TT) {
+                 return void 0 === TT && (TT = {}), (0, MT.b)({}, TT, {
+                   style: (0, MT.b)({}, TT.style, FT.popper)
+                 }, rT.popper, {
+                   "data-popper-interactive": fT.interactive
+                 })
+               },
+ ... (409 more added lines; see GitHub link above)
```

#### 597. `bundles/bloxd.io/main.js` (Changed code · before: `L9523-L9530` → after: `L19830-L20210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19830-L20210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L19830-L20210) · [Before (L9523-L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9523-L9530)

```diff
-                 }, {
-                   test: [/MiuiBrowser/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Miui"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }, fT ? xT : void 0 !== MT.route.element ? MT.route.element : TT);
+               return cT && (MT.route.errorElement || 0 === yT) ? KT.createElement(JT, {
+                 location: cT.location,
+                 component: xT,
+                 error: fT,
+                 children: AT(),
+                 routeContext: {
+                   outlet: null,
+                   matches: IT
+                 }
+               }) : AT()
+             }), null)
+           }
+           var eT, GT;
+ 
+           function VT(TT) {
+ ... (365 more added lines; see GitHub link above)
```

#### 598. `bundles/bloxd.io/main.js` (Changed code · before: `L9532-L9539` → after: `L20212-L20288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20212-L20288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L20212-L20288) · [Before (L9532-L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9532-L9539)

```diff
-                 }, {
-                   test: [/chromium/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Chromium"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, vv) || Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   null != TT && setTimeout(this.nextCallback, TT)
+                 } else setTimeout(this.nextCallback, 0)
+               }, cT.render = function() {
+                 var TT = this.state.status;
+                 if (TT === CT) return null;
+                 var kT = this.props,
+                   cT = kT.children,
+                   lT = (kT.in, kT.mountOnEnter, kT.unmountOnExit, kT.appear, kT.enter, kT.exit, kT.timeout, kT.addEndListener, kT.onEnter, kT.onEntering, kT.onEntered, kT.onExit, kT.onExiting, kT.onExited, kT.nodeRef, (0, MT.c)(kT, ["children", "in", "mountOnEnter", "unmountOnExi … [truncated]
+                 return yT.createElement(IT.e.Provider, {
+                   value: null
+                 }, "function" === typeof cT ? cT(TT, lT) : yT.cloneElement(yT.Children.only(cT), lT))
+               }, kT
+             }(yT.Component);
+ 
+           function QT() {}
+           NT.contextType = IT.e, NT.propTypes = {}, NT.defaultProps = {
+ ... (61 more added lines; see GitHub link above)
```

#### 599. `bundles/bloxd.io/main.js` (Changed code · before: `L9541-L9548` → after: `L20290-L21430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20290-L21430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L20290-L21430) · [Before (L9541-L9548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9541-L9548)

```diff
-                 }, {
-                   test: [/chrome|crios|crmo/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Chrome"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }, kT
+               }(0, KT.c)(kT, TT);
+               var cT = kT.prototype;
+               return cT.addClass = function(TT, kT, cT) {
+                 var lT = this.getClassNames(kT)[cT + "ClassName"],
+                   MT = this.getClassNames("enter").doneClassName;
+                 "appear" === kT && "done" === cT && MT && (lT += " " + MT), "active" === cT && TT && AT(TT), lT && (this.appliedClasses[kT][cT] = lT, function(TT, kT) {
+                   TT && kT && kT.split(" ").forEach((function(kT) {
+                     return lT = kT, void((cT = TT).classList ? cT.classList.add(lT) : function(TT, kT) {
+                       return TT.classList ? !!kT && TT.classList.contains(kT) : -1 !== (" " + (TT.className.baseVal || TT.className) + " ").indexOf(" " + kT + " ")
+                     }(cT, lT) || ("string" === typeof cT.className ? cT.className = cT.className + " " + lT : cT.setAttribute("class", (cT.className && cT.className.baseVal || "") + " " + lT)));
+                     var cT, lT
+                   }))
+                 }(TT, lT))
+               }, cT.removeClasses = function(TT, kT) {
+                 var cT = this.appliedClasses[kT],
+ ... (1125 more added lines; see GitHub link above)
```

#### 600. `bundles/bloxd.io/main.js` (Changed code · before: `L9550-L9557` → after: `L21432-L21618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21432-L21618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L21432-L21618) · [Before (L9550-L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9550-L9557)

```diff
-                 }, {
-                   test: [/GSA/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Google Search"
-                       },
-                       Pv = Sv.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }(lT, this));
+                 else {
+                   var MT = this[CT].read();
+                   if (null !== MT) return Promise.resolve(jT(MT, !1));
+                   cT = new Promise(this[AT])
+                 }
+                 return this[IT] = cT, cT
+               }
+             }, Symbol.asyncIterator, (function() {
+               return this
+             })), MT(lT, "return", (function() {
+               var TT = this;
+               return new Promise((function(kT, cT) {
+                 TT[CT].destroy(null, (function(TT) {
+                   TT ? cT(TT) : kT(jT(void 0, !0))
+                 }))
+ ... (171 more added lines; see GitHub link above)
```

#### 601. `bundles/bloxd.io/main.js` (Changed code · before: `L9559-L9570` → after: `L21620-L21741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21620-L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L21620-L21741) · [Before (L9559-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9559-L9570)

```diff
-                 }, {
-                   test: function(vv) {
-                     var zv = !vv.test(/like android/i),
-                       Pv = vv.test(/android/i);
-                     return zv && Pv
-                   },
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Android Browser"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                   return TT
+                 }({}, kT, {
+                   depth: 0,
+                   customInspect: !1
+                 }))
+               }
+             }], cT && KT(kT.prototype, cT), xT && KT(kT, xT), TT
+           }()
+         },
+         4126: TT => {
+           function kT(TT, kT) {
+             lT(TT, kT), cT(TT)
+           }
+ 
+           function cT(TT) {
+             TT._writableState && !TT._writableState.emitClose || TT._readableState && !TT._readableState.emitClose || TT.emit("close")
+ ... (106 more added lines; see GitHub link above)
```

#### 602. `bundles/bloxd.io/main.js` (Changed code · before: `L9572-L9579` → after: `L21743-L22074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21743-L22074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L21743-L22074) · [Before (L9572-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9572-L9579)

```diff
-                 }, {
-                   test: [/playstation 4/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "PlayStation 4"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }(KT);
+                 var yT = !1;
+                 TT.on("close", (function() {
+                   yT = !0
+                 })), void 0 === lT && (lT = cT(4175)), lT(TT, {
+                   readable: kT,
+                   writable: MT
+                 }, (function(TT) {
+                   if (TT) return KT(TT);
+                   yT = !0, KT()
+                 }));
+                 var fT = !1;
+                 return function(kT) {
+                   if (!yT && !fT) return fT = !0,
+                     function(TT) {
+                       return TT.setHeader && "function" === typeof TT.abort
+ ... (316 more added lines; see GitHub link above)
```

#### 603. `bundles/bloxd.io/main.js` (Changed code · before: `L9581-L9588` → after: `L22076-L22434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22076-L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L22076-L22434) · [Before (L9581-L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9581-L9588)

```diff
-                 }, {
-                   test: [/safari|applewebkit/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: "Safari"
-                       },
-                       Pv = Sv.default.getFirstMatch(ev, vv);
-                     return Pv && (zv.version = Pv), zv
+                 }
+               }
+               return kT
+             }
+             return null
+           }
+ 
+           function wT(TT, kT) {
+             var cT = TT.sortIndex - kT.sortIndex;
+             return 0 !== cT ? cT : TT.id - kT.id
+           }
+           var mT = [],
+             bT = [],
+             zT = 1,
+             JT = null,
+             oT = 3,
+ ... (343 more added lines; see GitHub link above)
```

#### 604. `bundles/bloxd.io/main.js` (Changed code · before: `L9590-L9596` → after: `L22436-L22763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22436-L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L22436-L22763) · [Before (L9590-L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9590-L9596)

```diff
-                 }, {
-                   test: [/.*/i],
-                   describe: function(vv) {
-                     var zv = -1 !== vv.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
-                     return {
-                       name: Sv.default.getFirstMatch(zv, vv),
-                       version: Sv.default.getSecondMatch(zv, vv)
+                 }(TT);
+                 if ("string" !== typeof kT && (lT.isEncoding === MT || !MT(TT))) throw new Error("Unknown encoding: " + TT);
+                 return kT || TT
+               }(TT), this.encoding) {
+               case "utf16le":
+                 this.text = fT, this.end = xT, kT = 4;
+                 break;
+               case "utf8":
+                 this.fillLast = yT, kT = 4;
+                 break;
+               case "base64":
+                 this.text = IT, this.end = AT, kT = 3;
+                 break;
+               default:
+                 return this.write = CT, void(this.end = jT)
+             }
+ ... (312 more added lines; see GitHub link above)
```

#### 605. `bundles/bloxd.io/main.js` (Changed code · before: `L9598-L9600` → after: `L22765-L23323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22765-L23323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L22765-L23323) · [Before (L9598-L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9598-L9600)

```diff
-                   }
-                 }];
-               zv.default = gv, vv.exports = zv.default
+                   default:
+                     return TT
+                 }
+               })), fT = lT[cT]; cT < KT; fT = lT[++cT]) tT(fT) || !DT(fT) ? OT += " " + fT : OT += " " + yT(fT);
+             return OT
+           }, kT.deprecate = function(TT, cT) {
+             if ("undefined" !== typeof process && !0 === process.noDeprecation) return TT;
+             if ("undefined" === typeof process) return function() {
+               return kT.deprecate(TT, cT).apply(this, arguments)
+             };
+             var lT = !1;
+             return function() {
+               if (!lT) {
+                 if (process.throwDeprecation) throw new Error(cT);
+                 process.traceDeprecation ? console.trace(cT) : console.error(cT), lT = !0
+               }
+ ... (543 more added lines; see GitHub link above)
```

#### 606. `bundles/bloxd.io/main.js` (Changed code · before: `L9602-L9705` → after: `L23325-L23401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23325-L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23325-L23401) · [Before (L9602-L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9602-L9705)

```diff
-             93: function(vv, zv, Pv) {
-               zv.__esModule = !0, zv.default = void 0;
-               var hv, Sv = (hv = Pv(17)) && hv.__esModule ? hv : {
-                   default: hv
-                 },
-                 ev = Pv(18),
-                 gv = [{
-                   test: [/Roku\/DVP/],
-                   describe: function(vv) {
-                     var zv = Sv.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, vv);
-                     return {
-                       name: ev.OS_MAP.Roku,
-                       version: zv
-                     }
-                   }
-                 }, {
- ... (88 more removed lines; see GitHub link above)
+             RT = {
+               start: "left",
+               center: "center",
+               end: "right"
+             },
+             gT = {
+               start: "0",
+               center: "50%",
+               end: void 0
+             },
+             UT = {
+               start: void 0,
+               center: void 0,
+               end: "0"
+             },
+             YT = {
+ ... (61 more added lines; see GitHub link above)
```

#### 607. `bundles/bloxd.io/main.js` (Changed code · before: `L9707-L9714` → after: `L23403-L23411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23403-L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23403-L23411) · [Before (L9707-L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9707-L9714)

```diff
-                   }
-                 }, {
-                   test: [/tizen/i],
-                   describe: function(vv) {
-                     var zv = Sv.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, vv);
-                     return {
-                       name: ev.OS_MAP.Tizen,
-                       version: zv
+                     return 0 === cT.length ? null : CT.d.chooseRandom(cT)
+                   }(4), qT(MT)),
+                   function() {
+                     let kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+                       cT = Array.from(TT.children);
+                     for (let TT = 0; TT < kT; TT++) {
+                       let TT = [];
+                       for (const kT of cT) TT = TT.concat(Array.from(kT.children));
+                       cT = TT
```

#### 608. `bundles/bloxd.io/main.js` (Changed code · before: `L9717-L9721` → after: `L23501-L23544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23501-L23544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23501-L23544) · [Before (L9717-L9721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9717-L9721)

```diff
-                 }, {
-                   test: [/linux/i],
-                   describe: function() {
-                     return {
-                       name: ev.OS_MAP.Linux
+                 }))
+               }
+               return (0, lT.useEffect)((() => () => {
+                 vk(), null !== uT.current && (0, KT.m)(uT.current), clearTimeout(lk.current)
+               }), []), (0, lT.useEffect)((() => {
+                 VT.current = vT;
+                 let TT = null,
+                   kT = null;
+                 if (!0 === vT) {
+                   let cT = Date.now();
+                   TT = setInterval((() => {
+                     const TT = Date.now(),
+                       kT = TT - cT;
+                     cT = TT, !document.hidden && uT.current && null !== uT.current.currentAdMarker && (uT.current.currentTimeHasBeenVisible += kT, nT.current && (nT.current.textContent = `${(uT.current.currentTimeHasBeenVisible/1e3).toFixed(1)}s`), function() {
+                       if ("whenViewed" !== wT || "alwaysOn" === (0, KT.y)() || ZT.current) return;
+                       if (uT.current.currentTimeHasBeenVisible < WT) return;
+ ... (28 more added lines; see GitHub link above)
```

#### 609. `bundles/bloxd.io/main.js` (Changed code · before: `L9723-L9728` → after: `L23546-L23556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23546-L23556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23546-L23556) · [Before (L9723-L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9723-L9728)

```diff
-                   }
-                 }, {
-                   test: [/CrOS/],
-                   describe: function() {
-                     return {
-                       name: ev.OS_MAP.ChromeOS
+ 
+                     function AT(TT, kT, cT) {
+                       let lT = !0;
+                       for (const MT of fT.p[fT.u].adConfig.bannerSupportRules) switch (MT.type) {
+                         case "unsupportedDimensions":
+                           MT.dimensions.width === kT && MT.dimensions.height === cT && (lT = !1);
+                           break;
+                         case "partiallySupportedDimensions":
+                           MT.dimensions.width !== kT || MT.dimensions.height !== cT || MT.supportedAdIds.includes(TT) || (lT = !1)
+                       }
+                       return lT
```

#### 610. `bundles/bloxd.io/main.js` (Changed code · before: `L9730-L9737` → after: `L23558-L23560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23558-L23560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23558-L23560) · [Before (L9730-L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9730-L9737)

```diff
-                   }
-                 }, {
-                   test: [/PlayStation 4/],
-                   describe: function(vv) {
-                     var zv = Sv.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, vv);
-                     return {
-                       name: ev.OS_MAP.PlayStation4,
-                       version: zv
+ 
+                     function CT(TT, kT, cT) {
+                       return lT >= kT * yT && MT >= cT * yT && AT(TT, kT, cT)
```

#### 611. `bundles/bloxd.io/main.js` (Changed code · before: `L9739-L9754` → after: `L23562-L23567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23562-L23567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23562-L23567) · [Before (L9739-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9739-L9754)

```diff
-                   }
-                 }];
-               zv.default = gv, vv.exports = zv.default
-             },
-             94: function(vv, zv, Pv) {
-               zv.__esModule = !0, zv.default = void 0;
-               var hv, Sv = (hv = Pv(17)) && hv.__esModule ? hv : {
-                   default: hv
-                 },
-                 ev = Pv(18),
-                 gv = [{
-                   test: [/googlebot/i],
-                   describe: function() {
-                     return {
-                       type: "bot",
-                       vendor: "Google"
+                     if (!fT.p[fT.u].adConfig.canUseBanners) return console.log("Skipping rendering banner due to canUseBanners false"), null;
+                     if (0 === lT || 0 === MT) return console.warn(`AD ${TT}_${kT}: No ad can be shown because maxWidth of maxHeight is 0`), null;
+                     if (void 0 !== OT) {
+                       const TT = (0, dT.getRemInPx)(),
+                         kT = BT[OT];
+                       if (lT -= kT.width * TT, MT -= kT.height * TT, lT <= 0 || MT <= 0) return null
```

#### 612. `bundles/bloxd.io/main.js` (Changed code · before: `L9756-L9772` → after: `L23569-L23593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23569-L23593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23569-L23593) · [Before (L9756-L9772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9756-L9772)

```diff
-                   }
-                 }, {
-                   test: [/huawei/i],
-                   describe: function(vv) {
-                     var zv = Sv.default.getFirstMatch(/(can-l01)/i, vv) && "Nova",
-                       Pv = {
-                         type: ev.PLATFORMS_MAP.mobile,
-                         vendor: "Huawei"
-                       };
-                     return zv && (Pv.model = zv), Pv
-                   }
-                 }, {
-                   test: [/nexus\s*(?:7|8|9|10).*/i],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet,
- ... (1 more removed lines; see GitHub link above)
+                     let jT, vT, tT, hT;
+                     if ("leaderboard" === TT)
+                       if (KT.gb) jT = `responsive_banner_${TT}_${kT}`, vT = "responsive", tT = lT, hT = MT;
+                       else if (CT(kT, 970, 250)) jT = IT(kT, 970, 250), vT = "970x250", tT = 970, hT = 250;
+                     else if (CT(kT, 970, 90)) jT = IT(kT, 970, 90), vT = "970x90", tT = 970, hT = 90;
+                     else if (CT(kT, 728, 90)) jT = IT(kT, 728, 90), vT = "728x90", tT = 728, hT = 90;
+                     else if (CT(kT, 320, 100)) jT = IT(kT, 320, 100), vT = "320x100", tT = 320, hT = 100;
+                     else {
+                       if (!CT(kT, 320, 50)) return null;
+                       jT = IT(kT, 320, 50), vT = "320x50", tT = 320, hT = 50
+                     } else if ("square" === TT)
+                       if (KT.gb) jT = `responsive_banner_${TT}_${kT}`, vT = "responsive", tT = lT, hT = MT;
+                       else {
+                         if (!CT(kT, 300, 250)) return null;
+                         jT = IT(kT, 300, 250), vT = "300x250", tT = 300, hT = 250
+                       }
+ ... (9 more added lines; see GitHub link above)
```

#### 613. `bundles/bloxd.io/main.js` (Changed code · before: `L9774-L9781` → after: `L23595-L23607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23595-L23607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23595-L23607) · [Before (L9774-L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9774-L9781)

```diff
-                   }
-                 }, {
-                   test: [/ipad/i],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet,
-                       vendor: "Apple",
-                       model: "iPad"
+                     let NT = Math.min(lT / tT, MT / hT);
+                     return NT = Math.min(xT, Math.max(yT, NT)), {
+                       divId: jT,
+                       alias: cT,
+                       dims: vT,
+                       width: tT,
+                       height: hT,
+                       scale: NT,
+                       adType: TT,
+                       adId: kT,
+                       currentAdMarker: null,
+                       currentTimeHasBeenVisible: 0,
+                       maxTimeHasBeenVisible: 0
```

#### 614. `bundles/bloxd.io/main.js` (Changed code · before: `L9784-L9791` → after: `L23876-L23903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23876-L23903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23876-L23903) · [Before (L9784-L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9784-L9791)

```diff
-                 }, {
-                   test: [/Macintosh(.*?) FxiOS(.*?)\//],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet,
-                       vendor: "Apple",
-                       model: "iPad"
-                     }
+                 }
+             }
+             return (0, vT.jsxs)(DT, {
+               icon: FT,
+               title: rT,
+               subtitle: PT,
+               children: [wT, (0, vT.jsxs)("div", {
+                 className: "PromptGenericPopupBody",
+                 children: [mT && (0, vT.jsx)(CT.m, {
+                   className: "PromptGenericPopupBodyButton PromptGenericPopupBodyPrimaryButton",
+                   onClick: () => {
+                     aT.current || (aT.current = !0, (0, OT.b)(kT.kind), (0, OT.g)(kT.kind, "opened"), mT.open(mT.url), KT(), fT())
+                   },
+                   children: mT.label
+                 }), (0, vT.jsx)(CT.I, {
+                   className: "PromptGenericPopupBodyButton",
+ ... (12 more added lines; see GitHub link above)
```

#### 615. `bundles/bloxd.io/main.js` (Changed code · before: `L9793-L9799` → after: `L23905-L24083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23905-L24083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L23905-L24083) · [Before (L9793-L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9793-L9799)

```diff
-                 }, {
-                   test: [/kftt build/i],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet,
-                       vendor: "Amazon",
-                       model: "Kindle Fire HD 7"
+                 }), xT("browserTips:neverShowAgain")]
+               })]
+             })
+           }
+ 
+           function FT(TT) {
+             let kT = !1,
+               cT = !1,
+               lT = !1;
+             xT.NotificationProvider.showCustomPopup({
+               body: MT => (0, vT.jsx)(aT, {
+                 tip: TT,
+                 onShown: () => {
+                   kT || (kT = !0, (0, OT.g)(TT.kind, "shown"))
+                 },
+                 onActed: () => {
+ ... (163 more added lines; see GitHub link above)
```

#### 616. `bundles/bloxd.io/main.js` (Changed code · before: `L9801-L9807` → after: `L24085-L24181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24085-L24181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L24085-L24181) · [Before (L9801-L9807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9801-L9807)

```diff
-                   }
-                 }, {
-                   test: [/silk/i],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet,
-                       vendor: "Amazon"
+                   }, `s${kT}`)
+                 }))]
+               }), lT]
+             })
+           }
+         },
+         2197: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => OT
+           });
+           var lT = cT(1046),
+             MT = cT.n(lT),
+             KT = cT(1099);
+ 
+           function OT(TT) {
+             let {
+ ... (81 more added lines; see GitHub link above)
```

#### 617. `bundles/bloxd.io/main.js` (Changed code · before: `L9809-L9814` → after: `L24183-L24211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24183-L24211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L24183-L24211) · [Before (L9809-L9814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9809-L9814)

```diff
-                   }
-                 }, {
-                   test: [/tablet(?! pc)/i],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet
+                   }, `s${kT}`)
+                 })), (0, KT.jsx)("div", {
+                   className: "HalloweenMoon"
+                 }), (0, KT.jsx)("div", {
+                   className: "HalloweenCloud HalloweenCloud1"
+                 }), (0, KT.jsx)("div", {
+                   className: "HalloweenCloud HalloweenCloud2"
+                 }), (0, KT.jsx)("div", {
+                   className: "HalloweenHills HalloweenHillsFar"
+                 }), (0, KT.jsx)("div", {
+                   className: "HalloweenTree"
+                 }), (0, KT.jsx)("div", {
+                   className: "HalloweenManor"
+                 }), (0, KT.jsx)("div", {
+                   className: "HalloweenHills HalloweenHillsNear"
+                 }), (0, KT.jsx)(fT, {
+ ... (13 more added lines; see GitHub link above)
```

#### 618. `bundles/bloxd.io/main.js` (Changed code · before: `L9817-L9821` → after: `L24742-L24838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24742-L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L24742-L24838) · [Before (L9817-L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9817-L9821)

```diff
-                 }, {
-                   test: function(vv) {
-                     var zv = vv.test(/ipod|iphone/i),
-                       Pv = vv.test(/like (ipod|iphone)/i);
-                     return zv && !Pv
+                 }(TT), Gk) {
+                 const TT = bk.current;
+                 cT && kT ? Jk({
+                   id: kT,
+                   ofCharacter: !0
+                 }) : cT ? ek() : null !== TT && TT.id === kT && Jk(null)
+               } else kT && (cT ? Hk(kT) : dk.id === kT && Hk(null))
+             }(0, hT.b)("cosmeticsUpdated", (TT => {
+               let kT = !1;
+               for (const {
+                   local: cT,
+                   Qc: lT,
+                   Sc: MT
+                 }
+                 of TT) {
+                 if (!cT) return;
+ ... (81 more added lines; see GitHub link above)
```

#### 619. `bundles/bloxd.io/main.js` (Changed code · before: `L9823-L9848` → after: `L24840-L24864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24840-L24864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L24840-L24864) · [Before (L9823-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9823-L9848)

```diff
-                   describe: function(vv) {
-                     var zv = Sv.default.getFirstMatch(/(ipod|iphone)/i, vv);
-                     return {
-                       type: ev.PLATFORMS_MAP.mobile,
-                       vendor: "Apple",
-                       model: zv
-                     }
-                   }
-                 }, {
-                   test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.mobile,
-                       vendor: "Nexus"
-                     }
-                   }
- ... (10 more removed lines; see GitHub link above)
+                   loading: Wk,
+                   disabled: null === Tc || !Mk,
+                   analyticsClick: Kk ? {
+                     id: "shop.buy_pack",
+                     value: mT
+                   } : void 0,
+                   children: (0, WT.jsxs)("span", {
+                     className: "CosmeticShopPurchaseLabel",
+                     children: [Mk && kk("general:buy"), !Mk && (0, WT.jsx)("span", {
+                       className: "CosmeticShopPurchaseLabelPending"
+                     }), Nc && (0, WT.jsxs)(WT.Fragment, {
+                       children: [" \xb7 ", Nc]
+                     })]
+                   })
+                 }), nk && (0, WT.jsx)("div", {
+                   className: KT()("CosmeticShopPurchaseOutcome SmallTextBold", {
+ ... (9 more added lines; see GitHub link above)
```

#### 620. `bundles/bloxd.io/main.js` (Changed code · before: `L9850-L9853` → after: `L24866-L25123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24866-L25123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L24866-L25123) · [Before (L9850-L9853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9850-L9853)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.mobile,
-                       vendor: "BlackBerry"
+                   children: kk(gk ? "homePage:buyForYourself" : "homePage:sendGiftInstead")
+                 })]
+               });
+             return (0, WT.jsxs)("div", {
+               className: "CosmeticShopDetail",
+               children: [lc && (0, WT.jsx)(lc, {}), (0, WT.jsxs)("div", {
+                 className: "CosmeticShopDetailHeader",
+                 children: [(0, WT.jsx)("div", {
+                   className: "CosmeticShopDetailHeaderSide",
+                   children: (0, WT.jsx)(NT.b, {
+                     className: "CosmeticShopDetailBackButton",
+                     onClick: bT,
+                     padBack: !0,
+                     children: kk("general:back")
+                   })
+                 }), (0, WT.jsxs)("div", {
+ ... (242 more added lines; see GitHub link above)
```

#### 621. `bundles/bloxd.io/main.js` (Changed code · before: `L9856-L9858` → after: `L25211-L25279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25211-L25279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L25211-L25279) · [Before (L9856-L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9856-L9858)

```diff
-                 }, {
-                   test: function(vv) {
-                     return "bada" === vv.getBrowserName(!0)
+                 }
+               }), [kT, TT]);
+             return {
+               isCreating: kT,
+               create: MT
+             }
+           }
+ 
+           function QT(TT) {
+             let {
+               closePopup: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, OT.B)(), lT = (0, CT.useNavigatePreserveSearch)(), KT = function(TT) {
+               return [{
+ ... (53 more added lines; see GitHub link above)
```

#### 622. `bundles/bloxd.io/main.js` (Changed code · before: `L9860-L9863` → after: `L25281-L25826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25281-L25826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L25281-L25826) · [Before (L9860-L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9860-L9863)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.mobile
-                     }
+                   children: [(0, hT.jsx)(xT.e, {
+                     name: "star-christmas"
+                   }), " ", cT("studio:createGameInStudio")]
+                 })
+               })]
+             })
+           }
+ 
+           function ST(TT) {
+             let {
+               disabled: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, OT.B)();
+             return (0, tT.i)() ? null : (0, hT.jsx)("div", {
+ ... (530 more added lines; see GitHub link above)
```

#### 623. `bundles/bloxd.io/main.js` (Changed code · before: `L9865-L9872` → after: `L25828-L26251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25828-L26251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L25828-L26251) · [Before (L9865-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9865-L9872)

```diff
-                 }, {
-                   test: function(vv) {
-                     return "windows phone" === vv.getBrowserName()
-                   },
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.mobile,
-                       vendor: "Microsoft"
+                 return cT
+               }(TT, cT) : null
+             }
+             return (0, oT.e)(TT, cT)
+           }
+ 
+           function WT(TT) {
+             return "game" === TT.type && (0, GT.j)(TT.gameNameWithVariation) ? (0, GT.n)(TT.gameNameWithVariation) : null
+           }
+ 
+           function nT(TT) {
+             if (zT.e.includes(TT)) return [];
+             const kT = VT.e[TT],
+               cT = [(0, JT.k)(TT, (0, JT.e)(kT))];
+             for (const MT of null !== (lT = kT.listedVariations) && void 0 !== lT ? lT : []) {
+               var lT;
+ ... (408 more added lines; see GitHub link above)
```

#### 624. `bundles/bloxd.io/main.js` (Changed code · before: `L9874-L9878` → after: `L26253-L26283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26253-L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26253-L26283) · [Before (L9874-L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9874-L9878)

```diff
-                   }
-                 }, {
-                   test: function(vv) {
-                     var zv = Number(String(vv.getOSVersion()).split(".")[0]);
-                     return "android" === vv.getOSName(!0) && zv >= 3
+                   })]
+                 }), (0, sT.jsx)("div", {
+                   className: "CountdownConfetti",
+                   children: (0, sT.jsx)(ST.b, {
+                     showSignal: Pk ? 1 : 0
+                   })
+                 }), !Lk && Rk.length > 0 && (0, sT.jsx)("div", {
+                   className: "ThumbnailBadgesContainer",
+                   children: Rk.map((TT => (0, sT.jsx)("div", {
+                     className: "ThumbnailBadgeContainer " + TT.type,
+                     children: (0, sT.jsx)("div", {
+                       className: "ThumbnailBadgeMain",
+                       children: (0, sT.jsx)(AT.b, {
+                         badge: TT
+                       })
+                     })
+ ... (15 more added lines; see GitHub link above)
```

#### 625. `bundles/bloxd.io/main.js` (Changed code · before: `L9880-L9887` → after: `L26285-L26313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26285-L26313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26285-L26313) · [Before (L9880-L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9880-L9887)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tablet
-                     }
-                   }
-                 }, {
-                   test: function(vv) {
-                     return "android" === vv.getOSName(!0)
+                   children: [ak.englishTitle, (0, sT.jsx)("br", {})]
+                 }), nk]
+               }),
+               hideTooltip: (0, CT.isMobile)() || !nk,
+               hoverOnly: !(bT && zT),
+               children: (0, sT.jsx)(IT.e, {
+                 gameWidth: XT,
+                 useLongRatio: ek,
+                 className: OT()("GameCardContainer", {
+                   DisabledGameCardContainer: bT,
+                   UpdateCountdown: dk,
+                   ReleaseCountdown: Lk
+                 }),
+                 children: (0, sT.jsxs)("div", {
+                   ref: Vk,
+                   ...null === pk ? (0, aT.X)({
+ ... (13 more added lines; see GitHub link above)
```

#### 626. `bundles/bloxd.io/main.js` (Changed code · before: `L9889-L9896` → after: `L26315-L26316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26315-L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26315-L26316) · [Before (L9889-L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9889-L9896)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.mobile
-                     }
-                   }
-                 }, {
-                   test: function(vv) {
-                     return "macos" === vv.getOSName(!0)
+                   onClick: null !== pk || bT ? void 0 : function() {
+                     kk && (0, tT.l)(kk), null === Tk || void 0 === Tk || Tk()
```

#### 627. `bundles/bloxd.io/main.js` (Changed code · before: `L9898-L9906` → after: `L26318-L26327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26318-L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26318-L26327) · [Before (L9898-L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9898-L9906)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.desktop,
-                       vendor: "Apple"
-                     }
-                   }
-                 }, {
-                   test: function(vv) {
-                     return "windows" === vv.getOSName(!0)
+                   onMouseEnter: function() {
+                     if (Zk.start(), !mk.current) return;
+                     const TT = mk.current;
+                     TT.currentTime = 0, TT.play().then((() => {
+                       !TT.paused && Hk.current && Jk(!0)
+                     })).catch((TT => {
+                       (0, fk.d)("Failed to play video preview", TT, {
+                         url: ak.videoPreviewUrl
+                       })
+                     }))
```

#### 628. `bundles/bloxd.io/main.js` (Changed code · before: `L9908-L9915` → after: `L26329-L26330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26329-L26330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26329-L26330) · [Before (L9908-L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9908-L9915)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.desktop
-                     }
-                   }
-                 }, {
-                   test: function(vv) {
-                     return "linux" === vv.getOSName(!0)
+                   onMouseLeave: function() {
+                     Zk.cancel(), mk.current && Hk.current && (mk.current.pause(), Jk(!1))
```

#### 629. `bundles/bloxd.io/main.js` (Changed code · before: `L9917-L9920` → after: `L26332-L26450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26332-L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26332-L26450) · [Before (L9917-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9917-L9920)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.desktop
-                     }
+                   onFocus: Zk.start,
+                   onBlur: Zk.cancel,
+                   children: [(0, sT.jsx)(wT.d, {
+                     image: Ek,
+                     yieldsToCssBackground: void 0 !== ak.customClassName && Ik.e.pageCssStylesClasses()
+                   }), Xk && !bT && (0, sT.jsx)("video", {
+                     ref: bk,
+                     className: OT()("AvailableGameVideo", {
+                       AvailableGameVideoPlaying: zk
+                     }),
+                     src: ak.videoPreviewUrl,
+                     muted: !0,
+                     loop: !0,
+                     playsInline: !0,
+                     preload: "metadata"
+                   }), Wk && (0, sT.jsx)("div", {
+ ... (103 more added lines; see GitHub link above)
```
