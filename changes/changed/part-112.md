# Changed — Bundle Modifications Report (Part 112 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `112 / 115` (**280** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 111](part-111.md) · [Part 113 →](part-113.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/main.js` (1153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L15983-L15986` → after: `L3077-L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3077-L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3077-L3083) · [Before (L15983-L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L15983-L15986)

```diff
-             TT.lanes |= kT;
-             var cT = TT.alternate;
-             for (null !== cT && (cT.lanes |= kT), cT = TT, TT = TT.return; null !== TT;) TT.childLanes |= kT, null !== (cT = TT.alternate) && (cT.childLanes |= kT), cT = TT, TT = TT.return;
-             return 3 === cT.tag ? cT.stateNode : null
+             var gq = null == Eq.defaultValue ? "" : Eq.defaultValue,
+               Yq = null != Eq.checked ? Eq.checked : Eq.defaultChecked;
+             gq = Cq(null != Eq.value ? Eq.value : gq), qq._wrapperState = {
+               initialChecked: Yq,
+               initialValue: gq,
+               controlled: "checkbox" === Eq.type || "radio" === Eq.type ? null != Eq.checked : null != Eq.value
+             }
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L15990-L16036` → after: `L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3087) · [Before (L15990-L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L15990-L16036)

```diff
-             for (var cT = TT.callbackNode, lT = TT.suspendedLanes, MT = TT.pingedLanes, KT = TT.expirationTimes, yT = TT.pendingLanes; 0 < yT;) {
-               var fT = 31 - ic(yT),
-                 xT = 1 << fT,
-                 IT = KT[fT];
-               if (-1 === IT) {
-                 if (0 === (xT & lT) || 0 !== (xT & MT)) {
-                   IT = kT, gc(xT);
-                   var AT = Rc;
-                   KT[fT] = 10 <= AT ? IT + 250 : 6 <= AT ? IT + 5e3 : -1
-                 }
-               } else IT <= kT && (TT.expiredLanes |= xT);
-               yT &= ~xT
-             }
-             if (lT = Uc(TT, TT === sf ? kx : 0), kT = Rc, 0 === lT) null !== cT && (cT !== nK && uK(cT), TT.callbackNode = null, TT.callbackPriority = 0);
-             else {
-               if (null !== cT) {
- ... (31 more removed lines; see GitHub link above)
+             null != (Eq = Eq.checked) && Pq(qq, "checked", Eq, !1)
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L16039-L16092` → after: `L3090-L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3090-L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3090-L3103) · [Before (L16039-L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16039-L16092)

```diff
-           function ux(TT) {
-             if (bx = -1, Jx = zx = 0, 0 !== (48 & qf)) throw Error(OT(327));
-             var kT = TT.callbackNode;
-             if (lI() && TT.callbackNode !== kT) return null;
-             var cT = Uc(TT, TT === sf ? kx : 0);
-             if (0 === cT) return null;
-             var lT = cT,
-               MT = qf;
-             qf |= 16;
-             var KT = Wx();
-             for (sf === TT && kx === lT || (jx(), Yx(TT, lT));;) try {
-               ix();
-               break
-             } catch (fT) {
-               Bx(TT, fT)
-             }
- ... (38 more removed lines; see GitHub link above)
+           function lE(qq, Eq) {
+             YE(qq, Eq);
+             var gq = Cq(Eq.value),
+               Yq = Eq.type;
+             if (null != gq) "number" === Yq ? (0 === gq && "" === qq.value || qq.value != gq) && (qq.value = "" + gq) : qq.value !== "" + gq && (qq.value = "" + gq);
+             else if ("submit" === Yq || "reset" === Yq) return void qq.removeAttribute("value");
+             Eq.hasOwnProperty("value") ? mE(qq, Eq.type, gq) : Eq.hasOwnProperty("defaultValue") && mE(qq, Eq.type, Cq(Eq.defaultValue)), null == Eq.checked && null != Eq.defaultChecked && (qq.defaultChecked = !!Eq.defaultChecked)
+           }
+ 
+           function OE(qq, Eq, gq) {
+             if (Eq.hasOwnProperty("value") || Eq.hasOwnProperty("defaultValue")) {
+               var Yq = Eq.type;
+               if (!("submit" !== Yq && "reset" !== Yq || void 0 !== Eq.value && null !== Eq.value)) return;
+               Eq = "" + qq._wrapperState.initialValue, gq || Eq === qq.value || (qq.value = Eq), qq.defaultValue = Eq
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L16094` → after: `L3105-L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3105-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3105-L3109) · [Before (L16094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16094)

```diff
-             return Zx(TT, kO()), TT.callbackNode === kT ? ux.bind(null, TT) : null
+             "" !== (gq = qq.name) && (qq.name = ""), qq.defaultChecked = !!qq._wrapperState.initialChecked, "" !== gq && (qq.name = gq)
+           }
+ 
+           function mE(qq, Eq, gq) {
+             "number" === Eq && qE(qq.ownerDocument) === qq || (null == gq ? qq.defaultValue = "" + qq._wrapperState.initialValue : qq.defaultValue !== "" + gq && (qq.defaultValue = "" + gq))
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L16098-L16102` → after: `L3113-L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3113-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3113-L3120) · [Before (L16098-L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16098-L16102)

```diff
-             for (kT &= ~xx, kT &= ~fx, TT.suspendedLanes |= kT, TT.pingedLanes &= ~kT, TT = TT.expirationTimes; 0 < kT;) {
-               var cT = 31 - ic(kT),
-                 lT = 1 << cT;
-               TT[cT] = -1, kT &= ~lT
-             }
+             return qq = lq({
+               children: void 0
+             }, Eq), (Eq = function(qq) {
+               var Eq = "";
+               return Yq.Children.forEach(qq, (function(qq) {
+                 null != qq && (Eq += qq)
+               })), Eq
+             }(Eq.children)) && (qq.children = Eq), qq
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L16105-L16113` → after: `L3123-L3134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3123-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3123-L3134) · [Before (L16105-L16113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16105-L16113)

```diff
-           function dx(TT) {
-             if (0 !== (48 & qf)) throw Error(OT(327));
-             if (lI(), TT === sf && 0 !== (TT.expiredLanes & kx)) {
-               var kT = kx,
-                 cT = nx(TT, kT);
-               0 !== (Ox & fx) && (cT = nx(TT, kT = Uc(TT, kT)))
-             } else cT = nx(TT, kT = Uc(TT, 0));
-             if (0 !== TT.tag && 2 === cT && (qf |= 64, TT.hydrate && (TT.hydrate = !1, lK(TT.containerInfo)), 0 !== (kT = Yc(TT)) && (cT = nx(TT, kT))), 1 === cT) throw cT = Kx, Yx(TT, 0), Xx(TT, kT), Zx(TT, kO()), cT;
-             return TT.finishedWork = TT.current.alternate, TT.finishedLanes = kT, TI(TT), Zx(TT, kO()), null
+           function AE(qq, Eq, gq, Yq) {
+             if (qq = qq.options, Eq) {
+               Eq = {};
+               for (var lq = 0; lq < gq.length; lq++) Eq["$" + gq[lq]] = !0;
+               for (gq = 0; gq < qq.length; gq++) lq = Eq.hasOwnProperty("$" + qq[gq].value), qq[gq].selected !== lq && (qq[gq].selected = lq), lq && Yq && (qq[gq].defaultSelected = !0)
+             } else {
+               for (gq = "" + Cq(gq), Eq = null, lq = 0; lq < qq.length; lq++) {
+                 if (qq[lq].value === gq) return qq[lq].selected = !0, void(Yq && (qq[lq].defaultSelected = !0));
+                 null !== Eq || qq[lq].disabled || (Eq = qq[lq])
+               }
+               null !== Eq && (Eq.selected = !0)
+             }
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L16117-L16123` → after: `L3138-L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3138-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3138-L3143) · [Before (L16117-L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16117-L16123)

```diff
-             var cT = qf;
-             qf |= 1;
-             try {
-               return TT(kT)
-             } finally {
-               0 === (qf = cT) && (jx(), OO())
-             }
+             if (null != Eq.dangerouslySetInnerHTML) throw Error(mq(91));
+             return lq({}, Eq, {
+               value: void 0,
+               defaultValue: void 0,
+               children: "" + qq._wrapperState.initialValue
+             })
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L16127-L16132` → after: `L3147-L3160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3147-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3147-L3160) · [Before (L16127-L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16127-L16132)

```diff
-             var cT = qf;
-             qf &= -2, qf |= 8;
-             try {
-               return TT(kT)
-             } finally {
-               0 === (qf = cT) && (jx(), OO())
+             var gq = Eq.value;
+             if (null == gq) {
+               if (gq = Eq.children, Eq = Eq.defaultValue, null != gq) {
+                 if (null != Eq) throw Error(mq(92));
+                 if (Array.isArray(gq)) {
+                   if (!(1 >= gq.length)) throw Error(mq(93));
+                   gq = gq[0]
+                 }
+                 Eq = gq
+               }
+               null == Eq && (Eq = ""), gq = Eq
+             }
+             qq._wrapperState = {
+               initialValue: Cq(gq)
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L16137` → after: `L3165-L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3165-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3165-L3167) · [Before (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16137)

```diff
-             aK(lx, cx), cx |= kT, Ox |= kT
+             var gq = Cq(Eq.value),
+               Yq = Cq(Eq.defaultValue);
+             null != gq && ((gq = "" + gq) !== qq.value && (qq.value = gq), null == Eq.defaultValue && qq.defaultValue !== gq && (qq.defaultValue = gq)), null != Yq && (qq.defaultValue = "" + Yq)
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L16140-L16141` → after: `L3170-L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3170-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3170-L3185) · [Before (L16140-L16141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16140-L16141)

```diff
-           function Ux() {
-             cx = lx.current, DK(lx)
+           function WE(qq) {
+             var Eq = qq.textContent;
+             Eq === qq._wrapperState.initialValue && "" !== Eq && null !== Eq && (qq.value = Eq)
+           }
+           var NE = "http://www.w3.org/1999/xhtml",
+             aE = "http://www.w3.org/2000/svg";
+ 
+           function VE(qq) {
+             switch (qq) {
+               case "svg":
+                 return "http://www.w3.org/2000/svg";
+               case "math":
+                 return "http://www.w3.org/1998/Math/MathML";
+               default:
+                 return "http://www.w3.org/1999/xhtml"
+             }
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L16145-L16176` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3189) · [Before (L16145-L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16145-L16176)

```diff
-             TT.finishedWork = null, TT.finishedLanes = 0;
-             var cT = TT.timeoutHandle;
-             if (-1 !== cT && (TT.timeoutHandle = -1, cK(cT)), null !== Tx)
-               for (cT = Tx.return; null !== cT;) {
-                 var lT = cT;
-                 switch (lT.tag) {
-                   case 1:
-                     null !== (lT = lT.type.childContextTypes) && void 0 !== lT && zK();
-                     break;
-                   case 3:
-                     WO(), DK(PK), DK(rK), xy();
-                     break;
-                   case 5:
-                     pO(lT);
-                     break;
-                   case 4:
- ... (16 more removed lines; see GitHub link above)
+             return null == qq || "http://www.w3.org/1999/xhtml" === qq ? VE(Eq) : "http://www.w3.org/2000/svg" === qq && "foreignObject" === Eq ? "http://www.w3.org/1999/xhtml" : qq
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L16180-L16270` → after: `L3204-L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3204-L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3204-L3206) · [Before (L16180-L16270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16180-L16270)

```diff
-             for (;;) {
-               var cT = Tx;
-               try {
-                 if (vO(), Iy.current = By, hy) {
-                   for (var lT = jy.memoizedState; null !== lT;) {
-                     var MT = lT.queue;
-                     null !== MT && (MT.pending = null), lT = lT.next
-                   }
-                   hy = !1
-                 }
-                 if (Cy = 0, ty = vy = jy = null, Ny = !1, pf.current = null, null === cT || null === cT.return) {
-                   Mx = 1, Kx = kT, Tx = null;
-                   break
-                 }
-                 TT: {
-                   var KT = TT,
- ... (75 more removed lines; see GitHub link above)
+             if (Eq) {
+               var gq = qq.firstChild;
+               if (gq && gq === qq.lastChild && 3 === gq.nodeType) return void(gq.nodeValue = Eq)
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L16274-L16276` → after: `L3256-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3256-L3257) · [Before (L16274-L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16274-L16276)

```diff
-           function Wx() {
-             var TT = nf.current;
-             return nf.current = By, null === TT ? By : TT
+           function tE(qq, Eq, gq) {
+             return null == Eq || "boolean" === typeof Eq || "" === Eq ? "" : gq || "number" !== typeof Eq || 0 === Eq || QE.hasOwnProperty(qq) && QE[qq] ? ("" + Eq).trim() : Eq + "px"
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L16280-L16319` → after: `L3261-L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3261-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3261-L3265) · [Before (L16280-L16319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16280-L16319)

```diff
-             var cT = qf;
-             qf |= 16;
-             var lT = Wx();
-             for (sf === TT && kx === kT || Yx(TT, kT);;) try {
-               px();
-               break
-             } catch (MT) {
-               Bx(TT, MT)
-             }
-             if (vO(), qf = cT, nf.current = lT, null !== Tx) throw Error(OT(261));
-             return sf = null, kx = 0, Mx
-           }
- 
-           function px() {
-             for (; null !== Tx;) qx(Tx)
-           }
- ... (24 more removed lines; see GitHub link above)
+             for (var gq in qq = qq.style, Eq)
+               if (Eq.hasOwnProperty(gq)) {
+                 var Yq = 0 === gq.indexOf("--"),
+                   lq = tE(gq, Eq[gq], Yq);
+                 "float" === gq && (gq = "cssFloat"), Yq ? qq.setProperty(gq, lq) : qq[gq] = lq
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L16327-L16329` → after: `L3293-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3293-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3293-L3301) · [Before (L16327-L16329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16327-L16329)

```diff
-           function TI(TT) {
-             var kT = cO();
-             return MO(99, kI.bind(null, TT, kT)), null
+           function hE(qq, Eq) {
+             if (Eq) {
+               if (vE[qq] && (null != Eq.children || null != Eq.dangerouslySetInnerHTML)) throw Error(mq(137, qq));
+               if (null != Eq.dangerouslySetInnerHTML) {
+                 if (null != Eq.children) throw Error(mq(60));
+                 if ("object" !== typeof Eq.dangerouslySetInnerHTML || !("__html" in Eq.dangerouslySetInnerHTML)) throw Error(mq(61))
+               }
+               if (null != Eq.style && "object" !== typeof Eq.style) throw Error(mq(62))
+             }
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L16333-L16480` → after: `L3305-L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3305-L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3305-L3318) · [Before (L16333-L16480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16333-L16480)

```diff
-             do {
-               lI()
-             } while (null !== Dx);
-             if (0 !== (48 & qf)) throw Error(OT(327));
-             var cT = TT.finishedWork;
-             if (null === cT) return null;
-             if (TT.finishedWork = null, TT.finishedLanes = 0, cT === TT.current) throw Error(OT(177));
-             TT.callbackNode = null;
-             var lT = cT.lanes | cT.childLanes,
-               MT = lT,
-               KT = TT.pendingLanes & ~MT;
-             TT.pendingLanes = MT, TT.suspendedLanes = 0, TT.pingedLanes = 0, TT.expiredLanes &= MT, TT.mutableReadLanes &= MT, TT.entangledLanes &= MT, MT = TT.entanglements;
-             for (var yT = TT.eventTimes, fT = TT.expirationTimes; 0 < KT;) {
-               var xT = 31 - ic(KT),
-                 IT = 1 << xT;
-               MT[xT] = 0, yT[xT] = -1, fT[xT] = -1, KT &= ~IT
- ... (132 more removed lines; see GitHub link above)
+             if (-1 === qq.indexOf("-")) return "string" === typeof Eq.is;
+             switch (qq) {
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

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L16483-L16490` → after: `L3321-L3332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3321-L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3321-L3332) · [Before (L16483-L16490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16483-L16490)

```diff
-           function cI() {
-             for (; null !== tx;) {
-               var TT = tx.alternate;
-               Hx || null === ox || (0 !== (8 & tx.flags) ? Kc(tx, ox) && (Hx = !0) : 13 === tx.tag && Bf(TT, tx) && Kc(tx, ox) && (Hx = !0));
-               var kT = tx.flags;
-               0 !== (256 & kT) && Gf(TT, tx), 0 === (512 & kT) || Sx || (Sx = !0, KO(97, (function() {
-                 return lI(), null
-               }))), tx = tx.nextEffect
+           function bE(qq) {
+             return (qq = qq.target || qq.srcElement || window).correspondingUseElement && (qq = qq.correspondingUseElement), 3 === qq.nodeType ? qq.parentNode : qq
+           }
+           var iE = null,
+             ZE = null,
+             fE = null;
+ 
+           function ME(qq) {
+             if (qq = WO(qq)) {
+               if ("function" !== typeof iE) throw Error(mq(280));
+               var Eq = qq.stateNode;
+               Eq && (Eq = aO(Eq), iE(qq.stateNode, qq.type, Eq))
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L16495-L16497` → after: `L3341-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3341-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3341-L3345) · [Before (L16495-L16497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16495-L16497)

```diff
-             if (90 !== ax) {
-               var TT = 97 < ax ? 97 : ax;
-               return ax = 90, MO(TT, OI)
+             if (ZE) {
+               var qq = ZE,
+                 Eq = fE;
+               if (fE = ZE = null, ME(qq), Eq)
+                 for (qq = 0; qq < Eq.length; qq++) ME(Eq[qq])
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L16503-L16505` → after: `L3350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3350) · [Before (L16503-L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16503-L16505)

```diff
-             Fx.push(kT, TT), Sx || (Sx = !0, KO(97, (function() {
-               return lI(), null
-             })))
+             return qq(Eq)
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L16508-L16511` → after: `L3353-L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3353-L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3353-L3354) · [Before (L16508-L16511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16508-L16511)

```diff
-           function KI(TT, kT) {
-             rx.push(kT, TT), Sx || (Sx = !0, KO(97, (function() {
-               return lI(), null
-             })))
+           function pE(qq, Eq, gq, Yq, lq) {
+             return qq(Eq, gq, Yq, lq)
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L16515-L16531` → after: `L3363-L3387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3363-L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3363-L3387) · [Before (L16515-L16531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16515-L16531)

```diff
-             if (null === Dx) return !1;
-             var TT = Dx;
-             if (Dx = null, 0 !== (48 & qf)) throw Error(OT(331));
-             var kT = qf;
-             qf |= 32;
-             var cT = rx;
-             rx = [];
-             for (var lT = 0; lT < cT.length; lT += 2) {
-               var MT = cT[lT],
-                 KT = cT[lT + 1],
-                 yT = MT.destroy;
-               if (MT.destroy = void 0, "function" === typeof yT) try {
-                 yT()
-               } catch (xT) {
-                 if (null === KT) throw Error(OT(330));
-                 fI(KT, xT)
- ... (1 more removed lines; see GitHub link above)
+             null === ZE && null === fE || (GE(), zE())
+           }
+ 
+           function UE(qq, Eq) {
+             var gq = qq.stateNode;
+             if (null === gq) return null;
+             var Yq = aO(gq);
+             if (null === Yq) return null;
+             gq = Yq[Eq];
+             qq: switch (Eq) {
+               case "onClick":
+               case "onClickCapture":
+               case "onDoubleClick":
+               case "onDoubleClickCapture":
+               case "onMouseDown":
+               case "onMouseDownCapture":
+ ... (9 more added lines; see GitHub link above)
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L16533-L16540` → after: `L3389-L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3389-L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3389-L3398) · [Before (L16533-L16540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16533-L16540)

```diff
-             for (cT = Fx, Fx = [], lT = 0; lT < cT.length; lT += 2) {
-               MT = cT[lT], KT = cT[lT + 1];
-               try {
-                 var fT = MT.create;
-                 MT.destroy = fT()
-               } catch (xT) {
-                 if (null === KT) throw Error(OT(330));
-                 fI(KT, xT)
+             if (qq) return null;
+             if (gq && "function" !== typeof gq) throw Error(mq(231, Eq, typeof gq));
+             return gq
+           }
+           var FE = !1;
+           if (Bq) try {
+             var sE = {};
+             Object.defineProperty(sE, "passive", {
+               get: function() {
+                 FE = !0
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L16547-L16548` → after: `L3423-L3424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3423-L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3423-L3424) · [Before (L16547-L16548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16547-L16548)

```diff
-           function yI(TT, kT, cT) {
-             rO(TT, kT = Jf(0, kT = mf(cT, kT), 1)), kT = ex(), null !== (TT = Ex(TT, 1)) && (pc(TT, 1, kT), Zx(TT, kT))
+           function DE(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+             wE = !1, KE = null, XE.apply(eE, arguments)
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L16551-L16571` → after: `L3427-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3427-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3427-L3438) · [Before (L16551-L16571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16551-L16571)

```diff
-           function fI(TT, kT) {
-             if (3 === TT.tag) yI(TT, TT, kT);
-             else
-               for (var cT = TT.return; null !== cT;) {
-                 if (3 === cT.tag) {
-                   yI(cT, TT, kT);
-                   break
-                 }
-                 if (1 === cT.tag) {
-                   var lT = cT.stateNode;
-                   if ("function" === typeof cT.type.getDerivedStateFromError || "function" === typeof lT.componentDidCatch && (null === Qx || !Qx.has(lT))) {
-                     var MT = of(cT, TT = mf(kT, TT), 1);
-                     if (rO(cT, MT), MT = ex(), null !== (cT = Ex(cT, 1))) pc(cT, 1, MT), Zx(cT, MT);
-                     else if ("function" === typeof lT.componentDidCatch && (null === Qx || !Qx.has(lT))) try {
-                       lT.componentDidCatch(kT, TT)
-                     } catch (KT) {}
- ... (5 more removed lines; see GitHub link above)
+           function qg(qq) {
+             var Eq = qq,
+               gq = qq;
+             if (qq.alternate)
+               for (; Eq.return;) Eq = Eq.return;
+             else {
+               qq = Eq;
+               do {
+                 0 !== (1026 & (Eq = qq).flags) && (gq = Eq.return), qq = Eq.return
+               } while (qq)
+             }
+             return 3 === Eq.tag ? gq : null
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L16574-L16576` → after: `L3441-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3441-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3441-L3446) · [Before (L16574-L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16574-L16576)

```diff
-           function xI(TT, kT, cT) {
-             var lT = TT.pingCache;
-             null !== lT && lT.delete(kT), kT = ex(), TT.pingedLanes |= TT.suspendedLanes & cT, sf === TT && (kx & cT) === cT && (4 === Mx || 3 === Mx && (62914560 & kx) === kx && 500 > kO() - Ax ? Yx(TT, 0) : xx |= cT), Zx(TT, kT)
+           function Eg(qq) {
+             if (13 === qq.tag) {
+               var Eq = qq.memoizedState;
+               if (null === Eq && (null !== (qq = qq.alternate) && (Eq = qq.memoizedState)), null !== Eq) return Eq.dehydrated
+             }
+             return null
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L16579-L16581` → after: `L3449-L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3449-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3449-L3450) · [Before (L16579-L16581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16579-L16581)

```diff
-           function II(TT, kT) {
-             var cT = TT.stateNode;
-             null !== cT && cT.delete(kT), 0 === (kT = 0) && (0 === (2 & (kT = TT.mode)) ? kT = 1 : 0 === (4 & kT) ? kT = 99 === cO() ? 1 : 2 : (0 === zx && (zx = Ox), 0 === (kT = Wc(62914560 & ~zx)) && (kT = 4194304))), cT = ex(), null !== (TT = Ex(TT, kT)) && (pc(TT, kT, cT), Zx … [truncated]
+           function gg(qq) {
+             if (qg(qq) !== qq) throw Error(mq(188))
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L16584-L16585` → after: `L3453-L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3453-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3453-L3524) · [Before (L16584-L16585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16584-L16585)

```diff
-           function AI(TT, kT, cT, lT) {
-             this.tag = TT, this.key = cT, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = kT, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null … [truncated]
+           function Yg(qq) {
+             if (qq = function(qq) {
+                 var Eq = qq.alternate;
+                 if (!Eq) {
+                   if (null === (Eq = qg(qq))) throw Error(mq(188));
+                   return Eq !== qq ? null : qq
+                 }
+                 for (var gq = qq, Yq = Eq;;) {
+                   var lq = gq.return;
+                   if (null === lq) break;
+                   var Oq = lq.alternate;
+                   if (null === Oq) {
+                     if (null !== (Yq = lq.return)) {
+                       gq = Yq;
+                       continue
+                     }
+ ... (56 more added lines; see GitHub link above)
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L16588-L16589` → after: `L3527-L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3527-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3527-L3532) · [Before (L16588-L16589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16588-L16589)

```diff
-           function CI(TT, kT, cT, lT) {
-             return new AI(TT, kT, cT, lT)
+           function lg(qq, Eq) {
+             for (var gq = qq.alternate; null !== Eq;) {
+               if (Eq === qq || Eq === gq) return !0;
+               Eq = Eq.return
+             }
+             return !1
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L16592-L16593` → after: `L3544-L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3544-L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3544-L3551) · [Before (L16592-L16593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16592-L16593)

```diff
-           function jI(TT) {
-             return !(!(TT = TT.prototype) || !TT.isReactComponent)
+           function Hg(qq, Eq, gq, Yq, lq) {
+             return {
+               blockedOn: qq,
+               domEventName: Eq,
+               eventSystemFlags: 16 | gq,
+               nativeEvent: lq,
+               targetContainers: [Yq]
+             }
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L16597-L16612` → after: `L3555-L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3555-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3555-L3558) · [Before (L16597-L16612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16597-L16612)

```diff
-             var cT = TT.alternate;
-             return null === cT ? ((cT = CI(TT.tag, kT, TT.key, TT.mode)).elementType = TT.elementType, cT.type = TT.type, cT.stateNode = TT.stateNode, cT.alternate = TT, TT.alternate = cT) : (cT.pendingProps = kT, cT.type = TT.type, cT.flags = 0, cT.nextEffect = null, cT.firstEff … [truncated]
-               lanes: kT.lanes,
-               firstContext: kT.firstContext
-             }, cT.sibling = TT.sibling, cT.index = TT.index, cT.ref = TT.ref, cT
-           }
- 
-           function tI(TT, kT, cT, lT, MT, KT) {
-             var yT = 2;
-             if (lT = TT, "function" === typeof TT) jI(TT) && (yT = 1);
-             else if ("string" === typeof TT) yT = 5;
-             else TT: switch (TT) {
-               case PT:
-                 return hI(cT.children, MT, KT, kT);
-               case ZT:
-                 yT = 8, MT |= 16;
+             switch (qq) {
+               case "focusin":
+               case "focusout":
+                 Bg = null;
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L16614-L16615` → after: `L3560-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3560-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3560-L3562) · [Before (L16614-L16615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16614-L16615)

```diff
-               case wT:
-                 yT = 8, MT |= 1;
+               case "dragenter":
+               case "dragleave":
+                 Wg = null;
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L16617-L16648` → after: `L3564-L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3564-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3564-L3574) · [Before (L16617-L16648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16617-L16648)

```diff
-               case mT:
-                 return (TT = CI(12, cT, kT, 8 | MT)).elementType = mT, TT.type = mT, TT.lanes = KT, TT;
-               case oT:
-                 return (TT = CI(13, cT, kT, MT)).type = oT, TT.elementType = oT, TT.lanes = KT, TT;
-               case HT:
-                 return (TT = CI(19, cT, kT, MT)).elementType = HT, TT.lanes = KT, TT;
-               case uT:
-                 return NI(cT, MT, KT, kT);
-               case XT:
-                 return (TT = CI(24, cT, kT, MT)).elementType = XT, TT.lanes = KT, TT;
-               default:
-                 if ("object" === typeof TT && null !== TT) switch (TT.$$typeof) {
-                   case bT:
-                     yT = 10;
-                     break TT;
-                   case zT:
- ... (16 more removed lines; see GitHub link above)
+               case "mouseover":
+               case "mouseout":
+                 Ng = null;
+                 break;
+               case "pointerover":
+               case "pointerout":
+                 ag.delete(Eq.pointerId);
+                 break;
+               case "gotpointercapture":
+               case "lostpointercapture":
+                 Vg.delete(Eq.pointerId)
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L16657-L16658` → after: `L3578-L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3578-L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3578-L3579) · [Before (L16657-L16658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16657-L16658)

```diff
-           function NI(TT, kT, cT, lT) {
-             return (TT = CI(23, TT, lT, kT)).elementType = uT, TT.lanes = cT, TT
+           function Pg(qq, Eq, gq, Yq, lq, Oq) {
+             return null === qq || qq.nativeEvent !== Oq ? (qq = Hg(Eq, gq, Yq, lq, Oq), null !== Eq && (null !== (Eq = WO(Eq)) && mg(Eq)), qq) : (qq.eventSystemFlags |= Yq, Eq = qq.targetContainers, null !== lq && -1 === Eq.indexOf(lq) && Eq.push(lq), qq)
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L16661-L16662` → after: `L3582-L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3582-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3582-L3595) · [Before (L16661-L16662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16661-L16662)

```diff
-           function QI(TT, kT, cT) {
-             return (TT = CI(6, TT, null, kT)).lanes = cT, TT
+           function Qg(qq) {
+             var Eq = BO(qq.target);
+             if (null !== Eq) {
+               var gq = qg(Eq);
+               if (null !== gq)
+                 if (13 === (Eq = gq.tag)) {
+                   if (null !== (Eq = Eg(gq))) return qq.blockedOn = Eq, void Ag(qq.lanePriority, (function() {
+                     Oq.unstable_runWithPriority(qq.priority, (function() {
+                       xg(gq)
+                     }))
+                   }))
+                 } else if (3 === Eq && gq.stateNode.hydrate) return void(qq.blockedOn = 3 === gq.tag ? gq.stateNode.containerInfo : null)
+             }
+             qq.blockedOn = null
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L16665-L16670` → after: `L3598-L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3598-L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3598-L3605) · [Before (L16665-L16670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16665-L16670)

```diff
-           function SI(TT, kT, cT) {
-             return (kT = CI(4, null !== TT.children ? TT.children : [], TT.key, kT)).lanes = cT, kT.stateNode = {
-               containerInfo: TT.containerInfo,
-               pendingChildren: null,
-               implementation: TT.implementation
-             }, kT
+           function yg(qq) {
+             if (null !== qq.blockedOn) return !1;
+             for (var Eq = qq.targetContainers; 0 < Eq.length;) {
+               var gq = OY(qq.domEventName, qq.eventSystemFlags, Eq[0], qq.nativeEvent);
+               if (null !== gq) return null !== (Eq = WO(gq)) && mg(Eq), qq.blockedOn = gq, !1;
+               Eq.shift()
+             }
+             return !0
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L16674` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3609) · [Before (L16674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16674)

```diff
-             this.tag = kT, this.containerInfo = TT, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = cT, this.callbackNode = null, this.callbackPriority = 0, this.ev … [truncated]
+             yg(qq) && gq.delete(Eq)
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L16677-L16697` → after: `L3612-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3612-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3612-L3617) · [Before (L16677-L16697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16677-L16697)

```diff
-           function aI(TT, kT, cT, lT) {
-             var MT = kT.current,
-               KT = ex(),
-               yT = Gx(MT);
-             TT: if (cT) {
-               kT: {
-                 if (kc(cT = cT._reactInternals) !== cT || 1 !== cT.tag) throw Error(OT(170));
-                 var fT = cT;do {
-                   switch (fT.tag) {
-                     case 3:
-                       fT = fT.stateNode.context;
-                       break kT;
-                     case 1:
-                       if (bK(fT.type)) {
-                         fT = fT.stateNode.__reactInternalMemoizedMergedChildContext;
-                         break kT
- ... (5 more removed lines; see GitHub link above)
+           function rg() {
+             for (cg = !1; 0 < ug.length;) {
+               var qq = ug[0];
+               if (null !== qq.blockedOn) {
+                 null !== (qq = WO(qq.blockedOn)) && Og(qq);
+                 break
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L16699-L16703` → after: `L3619-L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3619-L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3619-L3623) · [Before (L16699-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16699-L16703)

```diff
-               if (1 === cT.tag) {
-                 var xT = cT.type;
-                 if (bK(xT)) {
-                   cT = oK(cT, xT, fT);
-                   break TT
+               for (var Eq = qq.targetContainers; 0 < Eq.length;) {
+                 var gq = OY(qq.domEventName, qq.eventSystemFlags, Eq[0], qq.nativeEvent);
+                 if (null !== gq) {
+                   qq.blockedOn = gq;
+                   break
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L16706` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3627) · [Before (L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16706)

```diff
-               cT = fT
+               null === qq.blockedOn && ug.shift()
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L16708-L16711` → after: `L3629-L3633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3629-L3633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3629-L3633) · [Before (L16708-L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16708-L16711)

```diff
-             else cT = FK;
-             return null === kT.context ? kT.context = cT : kT.pendingContext = cT, (kT = FO(KT, yT)).payload = {
-               element: TT
-             }, null !== (lT = void 0 === lT ? null : lT) && (kT.callback = lT), rO(MT, kT), Vx(MT, yT, KT), yT
+             null !== Bg && yg(Bg) && (Bg = null), null !== Wg && yg(Wg) && (Wg = null), null !== Ng && yg(Ng) && (Ng = null), ag.forEach(tg), Vg.forEach(tg)
+           }
+ 
+           function vg(qq, Eq) {
+             qq.blockedOn === Eq && (qq.blockedOn = null, cg || (cg = !0, Oq.unstable_scheduleCallback(Oq.unstable_NormalPriority, rg)))
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L16715` → after: `L3637-L3648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3637-L3648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3637-L3648) · [Before (L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16715)

```diff
-             return (TT = TT.current).child ? (TT.child.tag, TT.child.stateNode) : null
+             function Eq(Eq) {
+               return vg(Eq, qq)
+             }
+             if (0 < ug.length) {
+               vg(ug[0], qq);
+               for (var gq = 1; gq < ug.length; gq++) {
+                 var Yq = ug[gq];
+                 Yq.blockedOn === qq && (Yq.blockedOn = null)
+               }
+             }
+             for (null !== Bg && vg(Bg, qq), null !== Wg && vg(Wg, qq), null !== Ng && vg(Ng, qq), ag.forEach(Eq), Vg.forEach(Eq), gq = 0; gq < dg.length; gq++)(Yq = dg[gq]).blockedOn === qq && (Yq.blockedOn = null);
+             for (; 0 < dg.length && null === (gq = dg[0]).blockedOn;) Qg(gq), null === gq.blockedOn && dg.shift()
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L16719-L16722` → after: `L3652-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3652-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3652-L3670) · [Before (L16719-L16722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16719-L16722)

```diff
-             if (null !== (TT = TT.memoizedState) && null !== TT.dehydrated) {
-               var cT = TT.retryLane;
-               TT.retryLane = 0 !== cT && cT < kT ? cT : kT
-             }
+             var gq = {};
+             return gq[qq.toLowerCase()] = Eq.toLowerCase(), gq["Webkit" + qq] = "webkit" + Eq, gq["Moz" + qq] = "moz" + Eq, gq
+           }
+           var bg = {
+               animationend: ng("Animation", "AnimationEnd"),
+               animationiteration: ng("Animation", "AnimationIteration"),
+               animationstart: ng("Animation", "AnimationStart"),
+               transitionend: ng("Transition", "TransitionEnd")
+             },
+             ig = {},
+             Zg = {};
+ 
+           function fg(qq) {
+             if (ig[qq]) return ig[qq];
+             if (!bg[qq]) return qq;
+             var Eq, gq = bg[qq];
+ ... (3 more added lines; see GitHub link above)
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L16726` → after: `L3682-L3695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3682-L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3682-L3695) · [Before (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16726)

```diff
-             rI(TT, kT), (TT = TT.alternate) && rI(TT, kT)
+             for (var gq = 0; gq < qq.length; gq += 2) {
+               var Yq = qq[gq],
+                 lq = qq[gq + 1];
+               lq = "on" + (lq[0].toUpperCase() + lq.slice(1)), Gg.set(Yq, Eq), pg.set(Yq, lq), cq(lq, [Yq])
+             }
+           }(0, Oq.unstable_now)();
+           var kg = 8;
+ 
+           function Rg(qq) {
+             if (0 !== (1 & qq)) return kg = 15, 1;
+             if (0 !== (2 & qq)) return kg = 14, 2;
+             if (0 !== (4 & qq)) return kg = 13, 4;
+             var Eq = 24 & qq;
+             return 0 !== Eq ? (kg = 12, Eq) : 0 !== (32 & qq) ? (kg = 11, 32) : 0 !== (Eq = 192 & qq) ? (kg = 10, Eq) : 0 !== (256 & qq) ? (kg = 9, 256) : 0 !== (Eq = 3584 & qq) ? (kg = 8, Eq) : 0 !== (4096 & qq) ? (kg = 7, 4096) : 0 !== (Eq = 4186112 & qq) ? (kg = 6, Eq) : 0 !== … [truncated]
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L16729-L16736` → after: `L3698-L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3698-L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3698-L3718) · [Before (L16729-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16729-L16736)

```diff
-           function wI(TT, kT, cT) {
-             var lT = null != cT && null != cT.hydrationOptions && cT.hydrationOptions.mutableSources || null;
-             if (cT = new DI(TT, kT, null != cT && !0 === cT.hydrate), kT = CI(3, null, null, 2 === kT ? 7 : 1 === kT ? 3 : 0), cT.current = kT, kT.stateNode = cT, DO(kT), TT[IK] = cT.current, LM(8 === TT.nodeType ? TT.parentNode : TT), lT)
-               for (TT = 0; TT < lT.length; TT++) {
-                 var MT = (kT = lT[TT])._getVersion;
-                 MT = MT(kT._source), null == cT.mutableSourceEagerHydrationData ? cT.mutableSourceEagerHydrationData = [kT, MT] : cT.mutableSourceEagerHydrationData.push(kT, MT)
-               }
-             this._internalRoot = cT
+           function Ug(qq, Eq) {
+             var gq = qq.pendingLanes;
+             if (0 === gq) return kg = 0;
+             var Yq = 0,
+               lq = 0,
+               Oq = qq.expiredLanes,
+               mq = qq.suspendedLanes,
+               xq = qq.pingedLanes;
+             if (0 !== Oq) Yq = Oq, lq = kg = 15;
+             else if (0 !== (Oq = 134217727 & gq)) {
+               var Aq = Oq & ~mq;
+               0 !== Aq ? (Yq = Rg(Aq), lq = kg) : 0 !== (xq &= Oq) && (Yq = Rg(xq), lq = kg)
+             } else 0 !== (Oq = gq & ~mq) ? (Yq = Rg(Oq), lq = kg) : 0 !== xq && (Yq = Rg(xq), lq = kg);
+             if (0 === Yq) return 0;
+             if (Yq = gq & ((0 > (Yq = 31 - Cg(Yq)) ? 0 : 1 << Yq) << 1) - 1, 0 !== Eq && Eq !== Yq && 0 === (Eq & mq)) {
+               if (Rg(Eq), lq <= kg) return Eq;
+ ... (5 more added lines; see GitHub link above)
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L16740-L16773` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3722) · [Before (L16740-L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16740-L16773)

```diff
-             return !(!TT || 1 !== TT.nodeType && 9 !== TT.nodeType && 11 !== TT.nodeType && (8 !== TT.nodeType || " react-mount-point-unstable " !== TT.nodeValue))
-           }
- 
-           function bI(TT, kT, cT, lT, MT) {
-             var KT = cT._reactRootContainer;
-             if (KT) {
-               var OT = KT._internalRoot;
-               if ("function" === typeof MT) {
-                 var yT = MT;
-                 MT = function() {
-                   var TT = FI(OT);
-                   yT.call(TT)
-                 }
-               }
-               aI(kT, OT, TT, MT)
-             } else {
- ... (18 more removed lines; see GitHub link above)
+             return 0 !== (qq = -1073741825 & qq.pendingLanes) ? qq : 1073741824 & qq ? 1073741824 : 0
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L16986-L17003` → after: `L3727-L3738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3727-L3738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3727-L3738) · [Before (L16986-L17003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L16986-L17003)

```diff
-               case "input":
-                 if (Mk(TT, cT), kT = cT.name, "radio" === cT.type && null != kT) {
-                   for (cT = TT; cT.parentNode;) cT = cT.parentNode;
-                   for (cT = cT.querySelectorAll("input[name=" + JSON.stringify("" + kT) + '][type="radio"]'), kT = 0; kT < cT.length; kT++) {
-                     var lT = cT[kT];
-                     if (lT !== TT && lT.form === TT.form) {
-                       var MT = tK(lT);
-                       if (!MT) throw Error(OT(90));
-                       sT(lT), Mk(lT, MT)
-                     }
-                   }
-                 }
-                 break;
-               case "textarea":
-                 Ak(TT, cT);
-                 break;
- ... (2 more removed lines; see GitHub link above)
+               case 15:
+                 return 1;
+               case 14:
+                 return 2;
+               case 12:
+                 return 0 === (qq = Xg(24 & ~Eq)) ? sg(10, Eq) : qq;
+               case 10:
+                 return 0 === (qq = Xg(192 & ~Eq)) ? sg(8, Eq) : qq;
+               case 8:
+                 return 0 === (qq = Xg(3584 & ~Eq)) && (0 === (qq = Xg(4186112 & ~Eq)) && (qq = 512)), qq;
+               case 2:
+                 return 0 === (Eq = Xg(805306368 & ~Eq)) && (Eq = 268435456), Eq
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L17005-L17007` → after: `L3740-L3770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3740-L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3740-L3770) · [Before (L17005-L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17005-L17007)

```diff
-           }, Zk = Lx, uk = function(TT, kT, cT, lT, MT) {
-             var KT = qf;
-             qf |= 4;
+             throw Error(mq(358, qq))
+           }
+ 
+           function Xg(qq) {
+             return qq & -qq
+           }
+ 
+           function wg(qq) {
+             for (var Eq = [], gq = 0; 31 > gq; gq++) Eq.push(qq);
+             return Eq
+           }
+ 
+           function Kg(qq, Eq, gq) {
+             qq.pendingLanes |= Eq;
+             var Yq = Eq - 1;
+             qq.suspendedLanes &= Yq, qq.pingedLanes &= Yq, (qq = qq.eventTimes)[Eq = 31 - Cg(Eq)] = gq
+ ... (15 more added lines; see GitHub link above)
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L17009` → after: `L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3772) · [Before (L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17009)

```diff
-               return MO(98, TT.bind(null, kT, cT, lT, MT))
+               pE(lq, qq, Eq, gq, Yq)
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L17011` → after: `L3774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3774) · [Before (L17011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17011)

```diff
-               0 === (qf = KT) && (jx(), OO())
+               (JE = Oq) || RE()
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L17013-L17019` → after: `L3776-L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3776-L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3776-L3828) · [Before (L17013-L17019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17013-L17019)

```diff
-           }, Xk = function() {
-             0 === (49 & qf) && (function() {
-               if (null !== Px) {
-                 var TT = Px;
-                 Px = null, TT.forEach((function(TT) {
-                   TT.expiredLanes |= 24 & TT.pendingLanes, Zx(TT, kO())
-                 }))
+           }
+ 
+           function YY(qq, Eq, gq, Yq) {
+             qY(Dg, lY.bind(null, qq, Eq, gq, Yq))
+           }
+ 
+           function lY(qq, Eq, gq, Yq) {
+             var lq;
+             if (EY)
+               if ((lq = 0 === (4 & Eq)) && 0 < ug.length && -1 < jg.indexOf(qq)) qq = Hg(null, qq, Eq, gq, Yq), ug.push(qq);
+               else {
+                 var Oq = OY(qq, Eq, gq, Yq);
+                 if (null === Oq) lq && og(qq, Yq);
+                 else {
+                   if (lq) {
+                     if (-1 < jg.indexOf(qq)) return qq = Hg(Oq, qq, Eq, gq, Yq), void ug.push(qq);
+ ... (37 more added lines; see GitHub link above)
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L17031-L17035` → after: `L3831-L3954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3831-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3831-L3954) · [Before (L17031-L17035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17031-L17035)

```diff
-           };
-           var JI = {
-               Events: [jK, vK, tK, Vk, Ek, lI, {
-                 current: !1
-               }]
+             return Ul(qq, Eq, Yq, lq, gq), null
+           }
+           var mY = null,
+             xY = null,
+             AY = null;
+ 
+           function cY() {
+             if (AY) return AY;
+             var qq, Eq, gq = xY,
+               Yq = gq.length,
+               lq = "value" in mY ? mY.value : mY.textContent,
+               Oq = lq.length;
+             for (qq = 0; qq < Yq && gq[qq] === lq[qq]; qq++);
+             var mq = Yq - qq;
+             for (Eq = 1; Eq <= mq && gq[Yq - Eq] === lq[Oq - Eq]; Eq++);
+             return AY = lq.slice(qq, 1 < Eq ? 1 - Eq : void 0)
+ ... (108 more added lines; see GitHub link above)
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L17038-L17041` → after: `L3957-L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3957-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3957-L3992) · [Before (L17038-L17041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17038-L17041)

```diff
-               findFiberByHostInstance: CK,
-               bundleType: 0,
-               version: "17.0.2",
-               rendererPackageName: "react-dom"
+               8: "Backspace",
+               9: "Tab",
+               12: "Clear",
+               13: "Enter",
+               16: "Shift",
+               17: "Control",
+               18: "Alt",
+               19: "Pause",
+               20: "CapsLock",
+               27: "Escape",
+               32: " ",
+               33: "PageUp",
+               34: "PageDown",
+               35: "End",
+               36: "Home",
+               37: "ArrowLeft",
+ ... (20 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L17044-L17067` → after: `L3995-L3998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3995-L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L3995-L3998) · [Before (L17044-L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17044-L17067)

```diff
-               bundleType: oI.bundleType,
-               version: oI.version,
-               rendererPackageName: oI.rendererPackageName,
-               rendererConfig: oI.rendererConfig,
-               overrideHookState: null,
-               overrideHookStateDeletePath: null,
-               overrideHookStateRenamePath: null,
-               overrideProps: null,
-               overridePropsDeletePath: null,
-               overridePropsRenamePath: null,
-               setSuspenseHandler: null,
-               scheduleUpdate: null,
-               currentDispatcherRef: aT.ReactCurrentDispatcher,
-               findHostInstanceByFiber: function(TT) {
-                 return null === (TT = Mc(TT)) ? null : TT.stateNode
-               },
- ... (8 more removed lines; see GitHub link above)
+               Alt: "altKey",
+               Control: "ctrlKey",
+               Meta: "metaKey",
+               Shift: "shiftKey"
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L17069-L17073` → after: `L4000-L4003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4000-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4000-L4003) · [Before (L17069-L17073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17069-L17073)

```diff
-           if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
-             var eI = __REACT_DEVTOOLS_GLOBAL_HOOK__;
-             if (!eI.isDisabled && eI.supportsFiber) try {
-               GK = eI.inject(HI), VK = eI
-             } catch (Qk) {}
+ 
+           function MY(qq) {
+             var Eq = this.nativeEvent;
+             return Eq.getModifierState ? Eq.getModifierState(qq) : !!(qq = fY[qq]) && !!Eq[qq]
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L17075-L17119` → after: `L4005-L4095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4005-L4095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4005-L4095) · [Before (L17075-L17119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17075-L17119)

```diff
-           kT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JI, kT.createPortal = zI, kT.findDOMNode = function(TT) {
-             if (null == TT) return null;
-             if (1 === TT.nodeType) return TT;
-             var kT = TT._reactInternals;
-             if (void 0 === kT) {
-               if ("function" === typeof TT.render) throw Error(OT(188));
-               throw Error(OT(268, Object.keys(TT)))
-             }
-             return TT = null === (TT = Mc(kT)) ? null : TT.stateNode
-           }, kT.flushSync = function(TT, kT) {
-             var cT = qf;
-             if (0 !== (48 & cT)) return TT(kT);
-             qf |= 1;
-             try {
-               if (TT) return MO(99, TT.bind(null, kT))
-             } finally {
- ... (29 more removed lines; see GitHub link above)
+ 
+           function TY() {
+             return MY
+           }
+           var zY = lq({}, oY, {
+               key: function(qq) {
+                 if (qq.key) {
+                   var Eq = iY[qq.key] || qq.key;
+                   if ("Unidentified" !== Eq) return Eq
+                 }
+                 return "keypress" === qq.type ? 13 === (qq = uY(qq)) ? "Enter" : String.fromCharCode(qq) : "keydown" === qq.type || "keyup" === qq.type ? ZY[qq.keyCode] || "Unidentified" : ""
+               },
+               code: 0,
+               location: 0,
+               ctrlKey: 0,
+               shiftKey: 0,
+ ... (75 more added lines; see GitHub link above)
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L17121-L17143` → after: `L4097-L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4097-L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4097-L4158) · [Before (L17121-L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17121-L17143)

```diff
-           }(), TT.exports = cT(98)
-         },
-         3066: (TT, kT, cT) => {
-           kT.c = void 0;
-           var lT, MT = function(TT) {
-               if (TT && TT.__esModule) return TT;
-               if (null === TT || "object" !== yT(TT) && "function" !== typeof TT) return {
-                 default: TT
-               };
-               var kT = OT();
-               if (kT && kT.has(TT)) return kT.get(TT);
-               var cT = {},
-                 lT = Object.defineProperty && Object.getOwnPropertyDescriptor;
-               for (var MT in TT)
-                 if (Object.prototype.hasOwnProperty.call(TT, MT)) {
-                   var KT = lT ? Object.getOwnPropertyDescriptor(TT, MT) : null;
- ... (7 more removed lines; see GitHub link above)
+           }
+ 
+           function IY(qq) {
+             return "object" === typeof(qq = qq.detail) && "data" in qq ? qq.data : null
+           }
+           var eY = !1;
+           var DY = {
+             color: !0,
+             date: !0,
+             datetime: !0,
+             "datetime-local": !0,
+             email: !0,
+             month: !0,
+             number: !0,
+             password: !0,
+             range: !0,
+ ... (46 more added lines; see GitHub link above)
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L17146-L17150` → after: `L4161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4161) · [Before (L17146-L17150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17146-L17150)

```diff
-             if ("function" !== typeof WeakMap) return null;
-             var TT = new WeakMap;
-             return OT = function() {
-               return TT
-             }, TT
+             gl && (gl.detachEvent("onpropertychange", Wl), Yl = gl = null)
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L17154-L17158` → after: `L4165-L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4165-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4165-L4176) · [Before (L17154-L17158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17154-L17158)

```diff
-             return yT = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(TT) {
-               return typeof TT
-             } : function(TT) {
-               return TT && "function" === typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
-             }, yT(TT)
+             if ("value" === qq.propertyName && Ol(Yl)) {
+               var Eq = [];
+               if (El(Eq, Yl, qq, bE(qq)), qq = ll, JE) qq(Eq);
+               else {
+                 JE = !0;
+                 try {
+                   SE(qq, Eq)
+                 } finally {
+                   JE = !1, RE()
+                 }
+               }
+             }
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L17162-L17167` → after: `L4180-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4180-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4180-L4184) · [Before (L17162-L17167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17162-L17167)

```diff
-             return kT in TT ? Object.defineProperty(TT, kT, {
-               value: cT,
-               enumerable: !0,
-               configurable: !0,
-               writable: !0
-             }) : TT[kT] = cT, TT
+             "focusin" === qq ? (Bl(), Yl = gq, (gl = Eq).attachEvent("onpropertychange", Wl)) : "focusout" === qq && Bl()
+           }
+ 
+           function al(qq) {
+             if ("selectionchange" === qq || "keyup" === qq || "keydown" === qq) return Ol(Yl)
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L17171-L17174` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4188) · [Before (L17171-L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17171-L17174)

```diff
-             for (var cT = 0; cT < kT.length; cT++) {
-               var lT = kT[cT];
-               lT.enumerable = lT.enumerable || !1, lT.configurable = !0, "value" in lT && (lT.writable = !0), Object.defineProperty(TT, lT.key, lT)
-             }
+             if ("click" === qq) return Ol(Eq)
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L17177-L17180` → after: `L4191-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4191-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4191-L4207) · [Before (L17177-L17180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17177-L17180)

```diff
-           function IT(TT) {
-             return IT = Object.setPrototypeOf ? Object.getPrototypeOf : function(TT) {
-               return TT.__proto__ || Object.getPrototypeOf(TT)
-             }, IT(TT)
+           function dl(qq, Eq) {
+             if ("input" === qq || "change" === qq) return Ol(Eq)
+           }
+           var jl = "function" === typeof Object.is ? Object.is : function(qq, Eq) {
+               return qq === Eq && (0 !== qq || 1 / qq === 1 / Eq) || qq !== qq && Eq !== Eq
+             },
+             Hl = Object.prototype.hasOwnProperty;
+ 
+           function ol(qq, Eq) {
+             if (jl(qq, Eq)) return !0;
+             if ("object" !== typeof qq || null === qq || "object" !== typeof Eq || null === Eq) return !1;
+             var gq = Object.keys(qq),
+               Yq = Object.keys(Eq);
+             if (gq.length !== Yq.length) return !1;
+             for (Yq = 0; Yq < gq.length; Yq++)
+               if (!Hl.call(Eq, gq[Yq]) || !jl(qq[gq[Yq]], Eq[gq[Yq]])) return !1;
+ ... (1 more added lines; see GitHub link above)
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L17184` → after: `L4211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4211) · [Before (L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17184)

```diff
-             if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             for (; qq && qq.firstChild;) qq = qq.firstChild;
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L17189-L17207` → after: `L4216-L4223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4216-L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4216-L4223) · [Before (L17189-L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17189-L17207)

```diff
-             return CT = Object.setPrototypeOf || function(TT, kT) {
-               return TT.__proto__ = kT, TT
-             }, CT(TT, kT)
-           }
-           var jT = "Select...",
-             vT = function(TT) {
-               function kT(TT) {
-                 var cT;
-                 return function(TT, kT) {
-                   if (!(TT instanceof kT)) throw new TypeError("Cannot call a class as a function")
-                 }(this, kT), (cT = function(TT, kT) {
-                   return !kT || "object" !== yT(kT) && "function" !== typeof kT ? AT(TT) : kT
-                 }(this, IT(kT).call(this, TT))).state = {
-                   selected: cT.parseValue(TT.value, TT.options) || {
-                     label: "undefined" === typeof TT.placeholder ? jT : TT.placeholder,
-                     value: ""
- ... (3 more removed lines; see GitHub link above)
+             var gq, Yq = Pl(qq);
+             for (qq = 0; Yq;) {
+               if (3 === Yq.nodeType) {
+                 if (gq = qq + Yq.textContent.length, qq <= Eq && gq >= Eq) return {
+                   node: Yq,
+                   offset: Eq - qq
+                 };
+                 qq = gq
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L17209-L17216` → after: `L4225-L4229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4225-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4225-L4229) · [Before (L17209-L17216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17209-L17216)

```diff
-               var cT, lT, OT;
-               return function(TT, kT) {
-                 if ("function" !== typeof kT && null !== kT) throw new TypeError("Super expression must either be null or a function");
-                 TT.prototype = Object.create(kT && kT.prototype, {
-                   constructor: {
-                     value: TT,
-                     writable: !0,
-                     configurable: !0
+               qq: {
+                 for (; Yq;) {
+                   if (Yq.nextSibling) {
+                     Yq = Yq.nextSibling;
+                     break qq
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L17218-L17379` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4231) · [Before (L17218-L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17218-L17379)

```diff
-                 }), kT && CT(TT, kT)
-               }(kT, TT), cT = kT, (lT = [{
-                 key: "componentDidUpdate",
-                 value: function(TT) {
-                   if (this.props.value !== TT.value)
-                     if (this.props.value) {
-                       var kT = this.parseValue(this.props.value, this.props.options);
-                       kT !== this.state.selected && this.setState({
-                         selected: kT
-                       })
-                     } else this.setState({
-                       selected: {
-                         label: "undefined" === typeof this.props.placeholder ? jT : this.props.placeholder,
-                         value: ""
-                       }
-                     })
- ... (146 more removed lines; see GitHub link above)
+                   Yq = Yq.parentNode
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L17381-L17393` → after: `L4233-L4237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4233-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4233-L4237) · [Before (L17381-L17393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17381-L17393)

```diff
-               }]) && xT(cT.prototype, lT), OT && xT(cT, OT), kT
-             }(MT.Component);
-           vT.defaultProps = {
-             baseClassName: "Dropdown"
-           };
-           var tT = vT;
-           kT.c = tT
-         },
-         1407: TT => {
-           var kT = "undefined" !== typeof Element,
-             cT = "function" === typeof Map,
-             lT = "function" === typeof Set,
-             MT = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
+                 Yq = void 0
+               }
+               Yq = Pl(Yq)
+             }
+           }
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L17396-L17424` → after: `L4240-L4248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4240-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4240-L4248) · [Before (L17396-L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17396-L17424)

```diff
-             if (TT === OT) return !0;
-             if (TT && OT && "object" == typeof TT && "object" == typeof OT) {
-               if (TT.constructor !== OT.constructor) return !1;
-               var yT, fT, xT, IT;
-               if (Array.isArray(TT)) {
-                 if ((yT = TT.length) != OT.length) return !1;
-                 for (fT = yT; 0 !== fT--;)
-                   if (!KT(TT[fT], OT[fT])) return !1;
-                 return !0
-               }
-               if (cT && TT instanceof Map && OT instanceof Map) {
-                 if (TT.size !== OT.size) return !1;
-                 for (IT = TT.entries(); !(fT = IT.next()).done;)
-                   if (!OT.has(fT.value[0])) return !1;
-                 for (IT = TT.entries(); !(fT = IT.next()).done;)
-                   if (!KT(fT.value[1], OT.get(fT.value[0]))) return !1;
- ... (13 more removed lines; see GitHub link above)
+             return !(!qq || !Eq) && (qq === Eq || (!qq || 3 !== qq.nodeType) && (Eq && 3 === Eq.nodeType ? yl(qq, Eq.parentNode) : "contains" in qq ? qq.contains(Eq) : !!qq.compareDocumentPosition && !!(16 & qq.compareDocumentPosition(Eq))))
+           }
+ 
+           function tl() {
+             for (var qq = window, Eq = qE(); Eq instanceof qq.HTMLIFrameElement;) {
+               try {
+                 var gq = "string" === typeof Eq.contentWindow.location.href
+               } catch (Yq) {
+                 gq = !1
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L17426-L17435` → after: `L4250-L4251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4250-L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4250-L4251) · [Before (L17426-L17435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17426-L17435)

```diff
-               if (TT.constructor === RegExp) return TT.source === OT.source && TT.flags === OT.flags;
-               if (TT.valueOf !== Object.prototype.valueOf && "function" === typeof TT.valueOf && "function" === typeof OT.valueOf) return TT.valueOf() === OT.valueOf();
-               if (TT.toString !== Object.prototype.toString && "function" === typeof TT.toString && "function" === typeof OT.toString) return TT.toString() === OT.toString();
-               if ((yT = (xT = Object.keys(TT)).length) !== Object.keys(OT).length) return !1;
-               for (fT = yT; 0 !== fT--;)
-                 if (!Object.prototype.hasOwnProperty.call(OT, xT[fT])) return !1;
-               if (kT && TT instanceof Element) return !1;
-               for (fT = yT; 0 !== fT--;)
-                 if (("_owner" !== xT[fT] && "__v" !== xT[fT] && "__o" !== xT[fT] || !TT.$$typeof) && !KT(TT[xT[fT]], OT[xT[fT]])) return !1;
-               return !0
+               if (!gq) break;
+               Eq = qE((qq = Eq.contentWindow).document)
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L17437` → after: `L4253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4253) · [Before (L17437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17437)

```diff
-             return TT !== TT && OT !== OT
+             return Eq
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L17439-L17445` → after: `L4255-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4255-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4255-L4258) · [Before (L17439-L17445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17439-L17445)

```diff
-           TT.exports = function(TT, kT) {
-             try {
-               return KT(TT, kT)
-             } catch (cT) {
-               if ((cT.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
-               throw cT
-             }
+ 
+           function rl(qq) {
+             var Eq = qq && qq.nodeName && qq.nodeName.toLowerCase();
+             return Eq && ("input" === Eq && ("text" === qq.type || "search" === qq.type || "tel" === qq.type || "url" === qq.type || "password" === qq.type) || "textarea" === Eq || "true" === qq.contentEditable)
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L17447-L17686` → after: `L4260-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4260-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4260-L4294) · [Before (L17447-L17686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17447-L17686)

```diff
-         },
-         1640: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => BT,
-             e: () => Tk
-           });
-           var lT = cT(71),
-             MT = cT(1407),
-             KT = cT.n(MT),
-             OT = cT(1645),
-             yT = cT.n(OT),
-             fT = cT(1652),
-             xT = cT.n(fT),
-             IT = (TT => (TT.BASE = "base", TT.BODY = "body", TT.HEAD = "head", TT.HTML = "html", TT.LINK = "link", TT.META = "meta", TT.NOSCRIPT = "noscript", TT.SCRIPT = "script", TT.STYLE = "style", TT.TITLE = "title", TT.FRAGMENT = "Symbol(react.fragment)", TT))(IT || {}),
-             AT = {
-               rel: ["amphtml", "canonical", "alternate"]
- ... (224 more removed lines; see GitHub link above)
+           var vl = Bq && "documentMode" in document && 11 >= document.documentMode,
+             hl = null,
+             nl = null,
+             bl = null,
+             il = !1;
+ 
+           function Zl(qq, Eq, gq) {
+             var Yq = gq.window === gq ? gq.document : 9 === gq.nodeType ? gq : gq.ownerDocument;
+             il || null == hl || hl !== qE(Yq) || ("selectionStart" in (Yq = hl) && rl(Yq) ? Yq = {
+               start: Yq.selectionStart,
+               end: Yq.selectionEnd
+             } : Yq = {
+               anchorNode: (Yq = (Yq.ownerDocument && Yq.ownerDocument.defaultView || window).getSelection()).anchorNode,
+               anchorOffset: Yq.anchorOffset,
+               focusNode: Yq.focusNode,
+               focusOffset: Yq.focusOffset
+ ... (19 more added lines; see GitHub link above)
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L17688-L17701` → after: `L4296-L4318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4296-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4296-L4318) · [Before (L17688-L17701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17688-L17701)

```diff
-               })(TT)), {
-                 priority: hT,
-                 base: dT("base", kT, lT),
-                 bodyAttributes: dT("bodyAttributes", cT, lT),
-                 htmlAttributes: dT("htmlAttributes", MT, lT),
-                 link: dT("link", IT, lT),
-                 meta: dT("meta", vT, lT),
-                 noscript: dT("noscript", KT, lT),
-                 script: dT("script", tT, lT),
-                 style: dT("style", OT, lT),
-                 title: dT("title", {
-                   title: yT,
-                   titleAttributes: fT
-                 }, lT)
+               }(Yq, Eq, void 0, qq), qq.currentTarget = null
+           }
+ 
+           function pl(qq, Eq) {
+             Eq = 0 !== (4 & Eq);
+             for (var gq = 0; gq < qq.length; gq++) {
+               var Yq = qq[gq],
+                 lq = Yq.event;
+               Yq = Yq.listeners;
+               qq: {
+                 var Oq = void 0;
+                 if (Eq)
+                   for (var mq = Yq.length - 1; 0 <= mq; mq--) {
+                     var xq = Yq[mq],
+                       Aq = xq.instance,
+                       cq = xq.currentTarget;
+ ... (7 more added lines; see GitHub link above)
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L17703-L17721` → after: `L4320-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4320-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4320-L4387) · [Before (L17703-L17721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17703-L17721)

```diff
-             },
-             RT = [],
-             gT = !("undefined" === typeof window || !window.document || !window.document.createElement),
-             UT = class {
-               instances = [];
-               canUseDOM = gT;
-               context;
-               value = {
-                 setHelmet: TT => {
-                   this.context.helmet = TT
-                 },
-                 helmetInstances: {
-                   get: () => this.canUseDOM ? RT : this.instances,
-                   add: TT => {
-                     (this.canUseDOM ? RT : this.instances).push(TT)
-                   },
- ... (3 more removed lines; see GitHub link above)
+             }
+             if (CE) throw qq = IE, CE = !1, IE = null, qq
+           }
+ 
+           function Gl(qq, Eq) {
+             var gq = VO(Eq),
+               Yq = qq + "__bubble";
+             gq.has(Yq) || (Rl(Eq, qq, 2, !1), gq.add(Yq))
+           }
+           var Ll = "_reactListening" + Math.random().toString(36).slice(2);
+ 
+           function Jl(qq) {
+             qq[Ll] || (qq[Ll] = !0, xq.forEach((function(Eq) {
+               zl.has(Eq) || kl(Eq, !1, qq, null), kl(Eq, !0, qq, null)
+             })))
+           }
+ ... (52 more added lines; see GitHub link above)
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L17740-L17751` → after: `L4392-L4399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4392-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4392-L4399) · [Before (L17740-L17751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17740-L17751)

```diff
-             },
-             YT = lT.createContext({}),
-             BT = class TT extends lT.Component {
-               static canUseDOM = gT;
-               helmetData;
-               constructor(kT) {
-                 super(kT), this.helmetData = new UT(this.props.context || {}, TT.canUseDOM)
-               }
-               render() {
-                 return lT.createElement(YT.Provider, {
-                   value: this.helmetData.value
-                 }, this.props.children)
+               Yq = Yq.return
+             }! function(qq, Eq, gq) {
+               if (kE) return qq(Eq, gq);
+               kE = !0;
+               try {
+                 return LE(qq, Eq, gq)
+               } finally {
+                 kE = !1, RE()
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L17753-L17757` → after: `L4401-L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4401-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4401-L4403) · [Before (L17753-L17757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17753-L17757)

```diff
-             },
-             WT = (TT, kT) => {
-               const cT = document.head || document.querySelector("head"),
-                 lT = cT.querySelectorAll(`${TT}[${NT}]`),
-                 MT = [].slice.call(lT),
+             }((function() {
+               var Yq = Oq,
+                 lq = bE(gq),
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L17759-L17922` → after: `L4405-L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4405-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4405-L4496) · [Before (L17759-L17922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17759-L17922)

```diff
-               let OT;
-               return kT && kT.length && kT.forEach((kT => {
-                 const cT = document.createElement(TT);
-                 for (const TT in kT)
-                   if (Object.prototype.hasOwnProperty.call(kT, TT))
-                     if ("innerHTML" === TT) cT.innerHTML = kT.innerHTML;
-                     else if ("cssText" === TT) cT.styleSheet ? cT.styleSheet.cssText = kT.cssText : cT.appendChild(document.createTextNode(kT.cssText));
-                 else {
-                   const lT = TT,
-                     MT = "undefined" === typeof kT[lT] ? "" : kT[lT];
-                   cT.setAttribute(TT, MT)
-                 }
-                 cT.setAttribute(NT, "true"), MT.some(((TT, kT) => (OT = kT, cT.isEqualNode(TT)))) ? MT.splice(OT, 1) : KT.push(cT)
-               })), MT.forEach((TT => TT.parentNode?.removeChild(TT))), KT.forEach((TT => cT.appendChild(TT))), {
-                 oldTags: MT,
-                 newTags: KT
- ... (148 more removed lines; see GitHub link above)
+               qq: {
+                 var xq = pg.get(qq);
+                 if (void 0 !== xq) {
+                   var Aq = HY,
+                     cq = qq;
+                   switch (qq) {
+                     case "keypress":
+                       if (0 === uY(gq)) break qq;
+                     case "keydown":
+                     case "keyup":
+                       Aq = SY;
+                       break;
+                     case "focusin":
+                       cq = "focus", Aq = rY;
+                       break;
+                     case "focusout":
+ ... (76 more added lines; see GitHub link above)
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L17925-L17949` → after: `L4499-L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4499-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4499-L4510) · [Before (L17925-L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17925-L17949)

```diff
-               mapObjectTypeChildren(TT, kT, cT, lT) {
-                 switch (TT.type) {
-                   case "title":
-                     return {
-                       ...kT, [TT.type]: lT, titleAttributes: {
-                         ...cT
-                       }
-                     };
-                   case "body":
-                     return {
-                       ...kT, bodyAttributes: {
-                         ...cT
-                       }
-                     };
-                   case "html":
-                     return {
- ... (9 more removed lines; see GitHub link above)
+               if (0 === (7 & Eq)) {
+                 if (Aq = "mouseout" === qq || "pointerout" === qq, (!(xq = "mouseover" === qq || "pointerover" === qq) || 0 !== (16 & Eq) || !(cq = gq.relatedTarget || gq.fromElement) || !BO(cq) && !cq[cO]) && (Aq || xq) && (xq = lq.window === lq ? lq : (xq = lq.ownerDocument) ?  … [truncated]
+                   if (uq = yY, Vq = "onMouseLeave", Wq = "onMouseEnter", aq = "mouse", "pointerout" !== qq && "pointerover" !== qq || (uq = pY, Vq = "onPointerLeave", Wq = "onPointerEnter", aq = "pointer"), Bq = null == Aq ? xq : NO(Aq), Nq = null == cq ? xq : NO(cq), (xq = new u … [truncated]
+                     for (Wq = cq, aq = 0, Nq = uq = Aq; Nq; Nq = Xl(Nq)) aq++;
+                     for (Nq = 0, Vq = Wq; Vq; Vq = Xl(Vq)) Nq++;
+                     for (; 0 < aq - Nq;) uq = Xl(uq),
+                     aq--;
+                     for (; 0 < Nq - aq;) Wq = Xl(Wq),
+                     Nq--;
+                     for (; aq--;) {
+                       if (uq === Wq || null !== Wq && uq === Wq.alternate) break qq;
+                       uq = Xl(uq), Wq = Xl(Wq)
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L17952-L17960` → after: `L4517-L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4517-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4517-L4522) · [Before (L17952-L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17952-L17960)

```diff
-               }
-               mapArrayTypeChildrenToProps(TT, kT) {
-                 let cT = {
-                   ...kT
-                 };
-                 return Object.keys(TT).forEach((kT => {
-                   cT = {
-                     ...cT,
-                     [kT]: TT[kT]
+                 if ("select" === (Aq = (xq = Yq ? NO(Yq) : window).nodeName && xq.nodeName.toLowerCase()) || "input" === Aq && "file" === xq.type) var dq = ml;
+                 else if (ql(xq))
+                   if (xl) dq = dl;
+                   else {
+                     dq = al;
+                     var jq = Nl
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L17962-L17990` → after: `L4524-L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4524-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4524-L4557) · [Before (L17962-L17990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17962-L17990)

```diff
-                 })), cT
-               }
-               warnOnInvalidChildren(TT, kT) {
-                 return yT()(vT.some((kT => TT.type === kT)), "function" === typeof TT.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${vT.join(", ")} are allowed. He … [truncated]
-               }
-               mapChildrenToProps(TT, kT) {
-                 let cT = {};
-                 return lT.Children.forEach(TT, (TT => {
-                   if (!TT || !TT.props) return;
-                   const {
-                     children: lT,
-                     ...MT
-                   } = TT.props, KT = Object.keys(MT).reduce(((TT, kT) => (TT[hT[kT] || kT] = MT[kT], TT)), {});
-                   let {
-                     type: OT
-                   } = TT;
- ... (13 more removed lines; see GitHub link above)
+                 else(Aq = xq.nodeName) && "input" === Aq.toLowerCase() && ("checkbox" === xq.type || "radio" === xq.type) && (dq = Vl);
+                 switch (dq && (dq = dq(qq, Yq)) ? El(mq, dq, gq, lq) : (jq && jq(qq, xq, Yq), "focusout" === qq && (jq = xq._wrapperState) && jq.controlled && "number" === xq.type && mE(xq, "number", xq.value)), jq = Yq ? NO(Yq) : window, qq) {
+                   case "focusin":
+                     (ql(jq) || "true" === jq.contentEditable) && (hl = jq, nl = Yq, bl = null);
+                     break;
+                   case "focusout":
+                     bl = nl = hl = null;
+                     break;
+                   case "mousedown":
+                     il = !0;
+                     break;
+                   case "contextmenu":
+                   case "mouseup":
+                   case "dragend":
+                     il = !1, Zl(mq, gq, lq);
+                     break;
+ ... (18 more added lines; see GitHub link above)
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L17992-L18006` → after: `L4559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4559) · [Before (L17992-L18006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L17992-L18006)

```diff
-                 })), this.mapArrayTypeChildrenToProps(cT, kT)
-               }
-               render() {
-                 const {
-                   children: TT,
-                   ...kT
-                 } = this.props;
-                 let cT = {
-                     ...kT
-                   },
-                   {
-                     helmetData: MT
-                   } = kT;
-                 if (TT && (cT = this.mapChildrenToProps(TT, cT)), MT && !(MT instanceof UT)) {
-                   MT = new UT(MT.context, !0), delete cT.helmetData
+                   oq = void 0
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L18008-L18014` → after: `L4561-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4561-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4561-L4594) · [Before (L18008-L18014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18008-L18014)

```diff
-                 return MT ? lT.createElement(sT, {
-                   ...cT,
-                   context: MT.value
-                 }) : lT.createElement(YT.Consumer, null, (TT => lT.createElement(sT, {
-                   ...cT,
-                   context: TT
-                 })))
+                 else eY ? CY(qq, gq) && (oq = "onCompositionEnd") : "keydown" === qq && 229 === gq.keyCode && (oq = "onCompositionStart");
+                 oq && (XY && "ko" !== gq.locale && (eY || "onCompositionStart" !== oq ? "onCompositionEnd" === oq && eY && (Hq = cY()) : (xY = "value" in (mY = lq) ? mY.value : mY.textContent, eY = !0)), 0 < (jq = sl(Yq, oq)).length && (oq = new bY(oq, qq, null, gq, lq), mq.push( … [truncated]
+                   event: oq,
+                   listeners: jq
+                 }), Hq ? oq.data = Hq : null !== (Hq = IY(gq)) && (oq.data = Hq))), (Hq = sY ? function(qq, Eq) {
+                   switch (qq) {
+                     case "compositionend":
+                       return IY(Eq);
+                     case "keypress":
+                       return 32 !== Eq.which ? null : (KY = !0, wY);
+                     case "textInput":
+                       return (qq = Eq.data) === wY && KY ? null : qq;
+                     default:
+                       return null
+                   }
+                 }(qq, gq) : function(qq, Eq) {
+ ... (18 more added lines; see GitHub link above)
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L18016-L18045` → after: `L4596-L4597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4596-L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4596-L4597) · [Before (L18016-L18045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18016-L18045)

```diff
-             }
-         },
-         1382: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => Gk
-           });
-           var lT = cT(1390),
-             MT = cT(1398),
-             KT = cT(71),
-             OT = cT(94);
- 
-           function yT(TT) {
-             if (null == TT) return window;
-             if ("[object Window]" !== TT.toString()) {
-               var kT = TT.ownerDocument;
-               return kT && kT.defaultView || window
- ... (14 more removed lines; see GitHub link above)
+               pl(mq, Eq)
+             }))
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L18051-L18060` → after: `L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4600) · [Before (L18051-L18060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18051-L18060)

```diff
-           function vT(TT, kT) {
-             void 0 === kT && (kT = !1);
-             var cT = TT.getBoundingClientRect(),
-               lT = 1,
-               MT = 1;
-             if (xT(TT) && kT) {
-               var KT = TT.offsetHeight,
-                 OT = TT.offsetWidth;
-               OT > 0 && (lT = jT(cT.width) / OT || 1), KT > 0 && (MT = jT(cT.height) / KT || 1)
-             }
+           function Fl(qq, Eq, gq) {
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L18062-L18069` → after: `L4602-L4604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4602-L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4602-L4604) · [Before (L18062-L18069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18062-L18069)

```diff
-               width: cT.width / lT,
-               height: cT.height / MT,
-               top: cT.top / MT,
-               right: cT.right / lT,
-               bottom: cT.bottom / MT,
-               left: cT.left / lT,
-               x: cT.left / lT,
-               y: cT.top / MT
+               instance: qq,
+               listener: Eq,
+               currentTarget: gq
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L18073-L18077` → after: `L4608-L4612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4608-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4608-L4612) · [Before (L18073-L18077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18073-L18077)

```diff
-           function tT(TT) {
-             var kT = yT(TT);
-             return {
-               scrollLeft: kT.pageXOffset,
-               scrollTop: kT.pageYOffset
+           function sl(qq, Eq) {
+             for (var gq = Eq + "Capture", Yq = []; null !== qq;) {
+               var lq = qq,
+                 Oq = lq.stateNode;
+               5 === lq.tag && null !== Oq && (lq = Oq, null != (Oq = UE(qq, gq)) && Yq.unshift(Fl(qq, Oq, lq)), null != (Oq = UE(qq, Eq)) && Yq.push(Fl(qq, Oq, lq))), qq = qq.return
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L18082-L18135` → after: `L4618-L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4618-L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4618-L4622) · [Before (L18082-L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18082-L18135)

```diff
-             return TT ? (TT.nodeName || "").toLowerCase() : null
-           }
- 
-           function NT(TT) {
-             return ((fT(TT) ? TT.ownerDocument : TT.document) || window.document).documentElement
-           }
- 
-           function QT(TT) {
-             return vT(NT(TT)).left + tT(TT).scrollLeft
-           }
- 
-           function ST(TT) {
-             return yT(TT).getComputedStyle(TT)
-           }
- 
-           function DT(TT) {
- ... (38 more removed lines; see GitHub link above)
+             if (null === qq) return null;
+             do {
+               qq = qq.return
+             } while (qq && 5 !== qq.tag);
+             return qq || null
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L18138-L18146` → after: `L4625-L4631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4625-L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4625-L4631) · [Before (L18138-L18146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18138-L18146)

```diff
-           function FT(TT) {
-             var kT = vT(TT),
-               cT = TT.offsetWidth,
-               lT = TT.offsetHeight;
-             return Math.abs(kT.width - cT) <= 1 && (cT = kT.width), Math.abs(kT.height - lT) <= 1 && (lT = kT.height), {
-               x: TT.offsetLeft,
-               y: TT.offsetTop,
-               width: cT,
-               height: lT
+           function wl(qq, Eq, gq, Yq, lq) {
+             for (var Oq = Eq._reactName, mq = []; null !== gq && gq !== Yq;) {
+               var xq = gq,
+                 Aq = xq.alternate,
+                 cq = xq.stateNode;
+               if (null !== Aq && Aq === Yq) break;
+               5 === xq.tag && null !== cq && (xq = cq, lq ? null != (Aq = UE(gq, Oq)) && mq.unshift(Fl(gq, Aq, xq)) : lq || null != (Aq = UE(gq, Oq)) && mq.push(Fl(gq, Aq, xq))), gq = gq.return
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L18150-L18156` → after: `L4639-L4641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4639-L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4639-L4641) · [Before (L18150-L18156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18150-L18156)

```diff
-           function rT(TT) {
-             return "html" === hT(TT) ? TT : TT.assignedSlot || TT.parentNode || (IT(TT) ? TT.host : null) || NT(TT)
-           }
- 
-           function PT(TT) {
-             return ["html", "body", "#document"].indexOf(hT(TT)) >= 0 ? TT.ownerDocument.body : xT(TT) && DT(TT) ? TT : PT(rT(TT))
-           }
+           function Kl() {}
+           var Cl = null,
+             Il = null;
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L18159-L18236` → after: `L4644-L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4644-L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4644-L4649) · [Before (L18159-L18236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18159-L18236)

```diff
-             var cT;
-             void 0 === kT && (kT = []);
-             var lT = PT(TT),
-               MT = lT === (null == (cT = TT.ownerDocument) ? void 0 : cT.body),
-               KT = yT(lT),
-               OT = MT ? [KT].concat(KT.visualViewport || [], DT(lT) ? lT : []) : lT,
-               fT = kT.concat(OT);
-             return MT ? fT : fT.concat(wT(rT(OT)))
-           }
- 
-           function mT(TT) {
-             return ["table", "td", "th"].indexOf(hT(TT)) >= 0
-           }
- 
-           function bT(TT) {
-             return xT(TT) && "fixed" !== ST(TT).position ? TT.offsetParent : null
- ... (62 more removed lines; see GitHub link above)
+             switch (qq) {
+               case "button":
+               case "input":
+               case "select":
+               case "textarea":
+                 return !!Eq.autoFocus
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L18361-L18369` → after: `L4654-L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4654-L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4654-L4655) · [Before (L18361-L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18361-L18369)

```diff
-               function IT() {
-                 OT.forEach((function(TT) {
-                   return TT()
-                 })), OT = []
-               }
-               return xT.setOptions(cT).then((function(TT) {
-                 !yT && cT.onFirstUpdate && cT.onFirstUpdate(TT)
-               })), xT
-             }
+           function Dl(qq, Eq) {
+             return "textarea" === qq || "option" === qq || "noscript" === qq || "string" === typeof Eq.children || "number" === typeof Eq.children || "object" === typeof Eq.dangerouslySetInnerHTML && null !== Eq.dangerouslySetInnerHTML && null != Eq.dangerouslySetInnerHTML.__html
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L18371-L18373` → after: `L4657-L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4657-L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4657-L4658) · [Before (L18371-L18373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18371-L18373)

```diff
-           var nT = {
-             passive: !0
-           };
+           var qO = "function" === typeof setTimeout ? setTimeout : void 0,
+             EO = "function" === typeof clearTimeout ? clearTimeout : void 0;
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L18376` → after: `L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4661) · [Before (L18376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18376)

```diff
-             return TT.split("-")[0]
+             1 === qq.nodeType ? qq.textContent = "" : 9 === qq.nodeType && (null != (qq = qq.body) && (qq.textContent = ""))
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L18380` → after: `L4665-L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4665-L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4665-L4669) · [Before (L18380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18380)

```diff
-             return TT.split("-")[1]
+             for (; null != qq; qq = qq.nextSibling) {
+               var Eq = qq.nodeType;
+               if (1 === Eq || 3 === Eq) break
+             }
+             return qq
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L18384` → after: `L4673-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4673-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4673-L4684) · [Before (L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18384)

```diff
-             return ["top", "bottom"].indexOf(TT) >= 0 ? "x" : "y"
+             qq = qq.previousSibling;
+             for (var Eq = 0; qq;) {
+               if (8 === qq.nodeType) {
+                 var gq = qq.data;
+                 if ("$" === gq || "$!" === gq || "$?" === gq) {
+                   if (0 === Eq) return qq;
+                   Eq--
+                 } else "/$" === gq && Eq++
+               }
+               qq = qq.previousSibling
+             }
+             return null
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L18388-L18434` → after: `L4694-L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4694-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4694-L4703) · [Before (L18388-L18434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18388-L18434)

```diff
-             var kT, cT = TT.reference,
-               lT = TT.element,
-               MT = TT.placement,
-               KT = MT ? pT(MT) : null,
-               OT = MT ? iT(MT) : null,
-               yT = cT.x + cT.width / 2 - lT.width / 2,
-               fT = cT.y + cT.height / 2 - lT.height / 2;
-             switch (KT) {
-               case JT:
-                 kT = {
-                   x: yT,
-                   y: cT.y - lT.height
-                 };
-                 break;
-               case oT:
-                 kT = {
- ... (31 more removed lines; see GitHub link above)
+             var Eq = qq[xO];
+             if (Eq) return Eq;
+             for (var gq = qq.parentNode; gq;) {
+               if (Eq = gq[cO] || gq[xO]) {
+                 if (gq = Eq.alternate, null !== Eq.child || null !== gq && null !== gq.child)
+                   for (qq = lO(qq); null !== qq;) {
+                     if (gq = qq[xO]) return gq;
+                     qq = lO(qq)
+                   }
+                 return Eq
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L18437` → after: `L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4707) · [Before (L18437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18437)

```diff
-             return kT
+             return null
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L18447-L18499` → after: `L4711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4711) · [Before (L18447-L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18447-L18499)

```diff
-             var kT, cT = TT.popper,
-               lT = TT.popperRect,
-               MT = TT.placement,
-               KT = TT.variation,
-               OT = TT.offsets,
-               fT = TT.position,
-               xT = TT.gpuAcceleration,
-               IT = TT.adaptive,
-               AT = TT.roundOffsets,
-               CT = TT.isFixed,
-               vT = OT.x,
-               tT = void 0 === vT ? 0 : vT,
-               hT = OT.y,
-               QT = void 0 === hT ? 0 : hT,
-               DT = "function" === typeof AT ? AT({
-                 x: tT,
- ... (37 more removed lines; see GitHub link above)
+             return !(qq = qq[xO] || qq[cO]) || 5 !== qq.tag && 6 !== qq.tag && 13 !== qq.tag && 3 !== qq.tag ? null : qq
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L18544-L18546` → after: `L4715-L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4715-L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4715-L4716) · [Before (L18544-L18546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18544-L18546)

```diff
-             return TT.replace(/left|right|bottom|top/g, (function(TT) {
-               return lk[TT]
-             }))
+             if (5 === qq.tag || 6 === qq.tag) return qq.stateNode;
+             throw Error(mq(33))
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L18554-L18556` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4720) · [Before (L18554-L18556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18554-L18556)

```diff
-             return TT.replace(/start|end/g, (function(TT) {
-               return Kk[TT]
-             }))
+             return qq[AO] || null
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L18559-L18567` → after: `L4723-L4732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4723-L4732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4723-L4732) · [Before (L18559-L18567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18559-L18567)

```diff
-           function yk(TT, kT) {
-             var cT = kT.getRootNode && kT.getRootNode();
-             if (TT.contains(kT)) return !0;
-             if (cT && IT(cT)) {
-               var lT = kT;
-               do {
-                 if (lT && TT.isSameNode(lT)) return !0;
-                 lT = lT.parentNode || lT.host
-               } while (lT)
+           function VO(qq) {
+             var Eq = qq[uO];
+             return void 0 === Eq && (Eq = qq[uO] = new Set), Eq
+           }
+           var dO = [],
+             jO = -1;
+ 
+           function HO(qq) {
+             return {
+               current: qq
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L18573-L18578` → after: `L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4737) · [Before (L18573-L18578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18573-L18578)

```diff
-             return Object.assign({}, TT, {
-               left: TT.x,
-               top: TT.y,
-               right: TT.x + TT.width,
-               bottom: TT.y + TT.height
-             })
+             0 > jO || (qq.current = dO[jO], dO[jO] = null, jO--)
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L18582-L18613` → after: `L4741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4741) · [Before (L18582-L18613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18582-L18613)

```diff
-             return kT === uT ? fk(function(TT) {
-               var kT = yT(TT),
-                 cT = NT(TT),
-                 lT = kT.visualViewport,
-                 MT = cT.clientWidth,
-                 KT = cT.clientHeight,
-                 OT = 0,
-                 fT = 0;
-               return lT && (MT = lT.width, KT = lT.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (OT = lT.offsetLeft, fT = lT.offsetTop)), {
-                 width: MT,
-                 height: KT,
-                 x: OT + QT(TT),
-                 y: fT
-               }
-             }(TT)) : fT(kT) ? function(TT) {
-               var kT = vT(TT);
- ... (16 more removed lines; see GitHub link above)
+             jO++, dO[jO] = qq.current, qq.current = Eq
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L18616-L18630` → after: `L4748-L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4748-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4748-L4755) · [Before (L18616-L18630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18616-L18630)

```diff
-           function Ik(TT, kT, cT) {
-             var lT = "clippingParents" === kT ? function(TT) {
-                 var kT = wT(rT(TT)),
-                   cT = ["absolute", "fixed"].indexOf(ST(TT).position) >= 0 && xT(TT) ? zT(TT) : TT;
-                 return fT(cT) ? kT.filter((function(TT) {
-                   return fT(TT) && yk(TT, cT) && "body" !== hT(TT)
-                 })) : []
-               }(TT) : [].concat(kT),
-               MT = [].concat(lT, [cT]),
-               KT = MT[0],
-               OT = MT.reduce((function(kT, cT) {
-                 var lT = xk(TT, cT);
-                 return kT.top = AT(lT.top, kT.top), kT.right = CT(lT.right, kT.right), kT.bottom = CT(lT.bottom, kT.bottom), kT.left = AT(lT.left, kT.left), kT
-               }), xk(TT, KT));
-             return OT.width = OT.right - OT.left, OT.height = OT.bottom - OT.top, OT.x = OT.left, OT.y = OT.top, OT
+           function vO(qq, Eq) {
+             var gq = qq.type.contextTypes;
+             if (!gq) return QO;
+             var Yq = qq.stateNode;
+             if (Yq && Yq.__reactInternalMemoizedUnmaskedChildContext === Eq) return Yq.__reactInternalMemoizedMaskedChildContext;
+             var lq, Oq = {};
+             for (lq in gq) Oq[lq] = Eq[lq];
+             return Yq && ((qq = qq.stateNode).__reactInternalMemoizedUnmaskedChildContext = Eq, qq.__reactInternalMemoizedMaskedChildContext = Oq), Oq
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L18634-L18645` → after: `L4759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4759) · [Before (L18634-L18645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18634-L18645)

```diff
-             return Object.assign({}, {
-               top: 0,
-               right: 0,
-               bottom: 0,
-               left: 0
-             }, TT)
-           }
- 
-           function Ck(TT, kT) {
-             return kT.reduce((function(kT, cT) {
-               return kT[cT] = TT, kT
-             }), {})
+             return null !== (qq = qq.childContextTypes) && void 0 !== qq
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L18648-L18692` → after: `L4762-L4763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4762-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4762-L4763) · [Before (L18648-L18692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18648-L18692)

```diff
-           function jk(TT, kT) {
-             void 0 === kT && (kT = {});
-             var cT = kT,
-               lT = cT.placement,
-               MT = void 0 === lT ? TT.placement : lT,
-               KT = cT.boundary,
-               OT = void 0 === KT ? "clippingParents" : KT,
-               yT = cT.rootBoundary,
-               xT = void 0 === yT ? uT : yT,
-               IT = cT.elementContext,
-               AT = void 0 === IT ? XT : IT,
-               CT = cT.altBoundary,
-               jT = void 0 !== CT && CT,
-               tT = cT.padding,
-               hT = void 0 === tT ? 0 : tT,
-               QT = Ak("number" !== typeof hT ? hT : Ck(hT, VT)),
- ... (29 more removed lines; see GitHub link above)
+           function nO() {
+             oO(tO), oO(yO)
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L18696` → after: `L4767-L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4767-L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4767-L4768) · [Before (L18696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18696)

```diff
-             return AT(TT, CT(kT, cT))
+             if (yO.current !== QO) throw Error(mq(168));
+             PO(yO, Eq), PO(tO, gq)
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L18849-L18857` → after: `L4772-L4776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4772-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4772-L4776) · [Before (L18849-L18857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18849-L18857)

```diff
-             return void 0 === cT && (cT = {
-               x: 0,
-               y: 0
-             }), {
-               top: TT.top - kT.height - cT.y,
-               right: TT.right - kT.width + cT.x,
-               bottom: TT.bottom - kT.height + cT.y,
-               left: TT.left - kT.width - cT.x
-             }
+             var Yq = qq.stateNode;
+             if (qq = Eq.childContextTypes, "function" !== typeof Yq.getChildContext) return gq;
+             for (var Oq in Yq = Yq.getChildContext())
+               if (!(Oq in qq)) throw Error(mq(108, Kq(Eq) || "Unknown", Oq));
+             return lq({}, gq, Yq)
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L18861-L18863` → after: `L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4780) · [Before (L18861-L18863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18861-L18863)

```diff
-             return [JT, HT, oT, eT].some((function(kT) {
-               return TT[kT] >= 0
-             }))
+             return qq = (qq = qq.stateNode) && qq.__reactInternalMemoizedMergedChildContext || QO, rO = yO.current, PO(yO, qq), PO(tO, tO.current), !0
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L18865-L19201` → after: `L4782-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4782-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4782-L4809) · [Before (L18865-L19201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L18865-L19201)

```diff
-           var Sk = WT({
-               defaultModifiers: [{
-                 name: "eventListeners",
-                 enabled: !0,
-                 phase: "write",
-                 nj: function() {},
-                 effect: function(TT) {
-                   var kT = TT.state,
-                     cT = TT.instance,
-                     lT = TT.options,
-                     MT = lT.scroll,
-                     KT = void 0 === MT || MT,
-                     OT = lT.resize,
-                     fT = void 0 === OT || OT,
-                     xT = yT(kT.elements.popper),
-                     IT = [].concat(kT.scrollParents.reference, kT.scrollParents.popper);
- ... (321 more removed lines; see GitHub link above)
+ 
+           function fO(qq, Eq, gq) {
+             var Yq = qq.stateNode;
+             if (!Yq) throw Error(mq(169));
+             gq ? (qq = iO(qq, Eq, rO), Yq.__reactInternalMemoizedMergedChildContext = qq, oO(tO), oO(yO), PO(yO, qq)) : oO(tO), PO(tO, gq)
+           }
+           var MO = null,
+             TO = null,
+             zO = Oq.unstable_runWithPriority,
+             SO = Oq.unstable_scheduleCallback,
+             pO = Oq.unstable_cancelCallback,
+             GO = Oq.unstable_shouldYield,
+             LO = Oq.unstable_requestPaint,
+             JO = Oq.unstable_now,
+             kO = Oq.unstable_getCurrentPriorityLevel,
+             RO = Oq.unstable_ImmediatePriority,
+ ... (12 more added lines; see GitHub link above)
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L19205-L19208` → after: `L4830-L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4830-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4830-L4843) · [Before (L19205-L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19205-L19208)

```diff
-             var kT = KT.useRef(TT);
-             return kT.current = TT, KT.useCallback((function() {
-               return kT.current
-             }), [])
+             switch (qq) {
+               case 99:
+                 return RO;
+               case 98:
+                 return UO;
+               case 97:
+                 return FO;
+               case 96:
+                 return sO;
+               case 95:
+                 return XO;
+               default:
+                 throw Error(mq(332))
+             }
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L19213-L19228` → after: `L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4847) · [Before (L19213-L19228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19213-L19228)

```diff
-             return void 0 === TT && (TT = 0), void 0 === kT && (kT = 0),
-               function() {
-                 return {
-                   width: 0,
-                   height: 0,
-                   top: kT,
-                   right: TT,
-                   bottom: kT,
-                   left: TT,
-                   x: 0,
-                   y: 0,
-                   toJSON: function() {
-                     return null
-                   }
-                 }
-               }
+             return qq = gm(qq), zO(qq, Eq)
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L19251-L19390` → after: `L4850-L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4850-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4850-L4852) · [Before (L19251-L19390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19251-L19390)

```diff
-           function Gk(TT, kT) {
-             var cT, OT, yT;
-             void 0 === TT && (TT = {}), void 0 === kT && (kT = {});
-             var fT = Object.keys(ek).reduce((function(TT, kT) {
-                 var cT;
-                 return (0, MT.b)({}, TT, ((cT = {})[kT] = void 0 !== TT[kT] ? TT[kT] : ek[kT], cT))
-               }), TT),
-               xT = KT.useMemo((function() {
-                 return [{
-                   name: "offset",
-                   options: {
-                     offset: fT.offset
-                   }
-                 }]
-               }), Array.isArray(fT.offset) ? fT.offset : []),
-               IT = (0, MT.b)({}, kT, {
- ... (124 more removed lines; see GitHub link above)
+           function lm(qq, Eq, gq) {
+             return qq = gm(qq), SO(qq, Eq, gq)
+           }
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L19392-L19425` → after: `L4854-L4859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4854-L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4854-L4859) · [Before (L19392-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19392-L19425)

```diff
-               function TT(TT) {
-                 var kT = TT.clientX,
-                   cT = TT.clientY;
-                 Hk.getBoundingClientRect = zk(kT, cT), null == wT || wT()
-               }
-             }), [fT.followCursor, CT, wT]), KT.useEffect((function() {
-               if (null != tT && null != wT && null != fT.mutationObserverOptions) {
-                 var TT = new MutationObserver(wT);
-                 return TT.observe(tT, fT.mutationObserverOptions),
-                   function() {
-                     return TT.disconnect()
-                   }
-               }
-             }), [fT.mutationObserverOptions, tT, wT]);
-             return (0, MT.b)({
-               getArrowProps: function(TT) {
- ... (18 more removed lines; see GitHub link above)
+           function Om() {
+             if (null !== IO) {
+               var qq = IO;
+               IO = null, pO(qq)
+             }
+             mm()
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L19439-L19442` → after: `L4863-L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4863-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4863-L4879) · [Before (L19439-L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19439-L19442)

```diff
-             return OT = Object.assign ? Object.assign.bind() : function(TT) {
-               for (var kT = 1; kT < arguments.length; kT++) {
-                 var cT = arguments[kT];
-                 for (var lT in cT) Object.prototype.hasOwnProperty.call(cT, lT) && (TT[lT] = cT[lT])
+             if (!eO && null !== CO) {
+               eO = !0;
+               var qq = 0;
+               try {
+                 var Eq = CO;
+                 Ym(99, (function() {
+                   for (; qq < Eq.length; qq++) {
+                     var gq = Eq[qq];
+                     do {
+                       gq = gq(!0)
+                     } while (null !== gq)
+                   }
+                 })), CO = null
+               } catch (gq) {
+                 throw null !== CO && (CO = CO.slice(qq + 1)), SO(RO, Om), gq
+               } finally {
+ ... (1 more added lines; see GitHub link above)
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L19444-L19445` → after: `L4881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4881) · [Before (L19444-L19445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19444-L19445)

```diff
-               return TT
-             }, OT.apply(this, arguments)
+             }
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L19449-L19452` → after: `L4886-L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4886-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4886-L4889) · [Before (L19449-L19452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19449-L19452)

```diff
-             if (null == TT) return {};
-             var cT, lT, MT = {},
-               KT = Object.keys(TT);
-             for (lT = 0; lT < KT.length; lT++) cT = KT[lT], kT.indexOf(cT) >= 0 || (MT[cT] = TT[cT]);
+             if (qq && qq.defaultProps) {
+               for (var gq in Eq = lq({}, Eq), qq = qq.defaultProps) void 0 === Eq[gq] && (Eq[gq] = qq[gq]);
+               return Eq
+             }
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L19457-L19462` → after: `L4902-L4903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4902-L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4902-L4903) · [Before (L19457-L19462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19457-L19462)

```diff
-             return void 0 === TT && (TT = ""), new URLSearchParams("string" === typeof TT || Array.isArray(TT) || TT instanceof URLSearchParams ? TT : Object.keys(TT).reduce(((kT, cT) => {
-               let lT = TT[cT];
-               return kT.concat(Array.isArray(lT) ? lT.map((TT => [cT, TT])) : [
-                 [cT, lT]
-               ])
-             }), []))
+             var Eq = cm.current;
+             oO(cm), qq.type._context._currentValue = Eq
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L19467-L19474` → after: `L4907-L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4907-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4907-L4914) · [Before (L19467-L19474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19467-L19474)

```diff
-             return (0, KT.s)({
-               basename: null == kT ? void 0 : kT.basename,
-               history: (0, KT.l)({
-                 window: null == kT ? void 0 : kT.window
-               }),
-               hydrationData: (null == kT ? void 0 : kT.hydrationData) || AT(),
-               routes: (0, MT.n)(TT)
-             }).initialize()
+             for (; null !== qq;) {
+               var gq = qq.alternate;
+               if ((qq.childLanes & Eq) === Eq) {
+                 if (null === gq || (gq.childLanes & Eq) === Eq) break;
+                 gq.childLanes |= Eq
+               } else qq.childLanes |= Eq, null !== gq && (gq.childLanes |= Eq);
+               qq = qq.return
+             }
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L19477-L19482` → after: `L4917-L4935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4917-L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4917-L4935) · [Before (L19477-L19482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19477-L19482)

```diff
-           function AT() {
-             var TT;
-             let kT = null == (TT = window) ? void 0 : TT.__staticRouterHydrationData;
-             return kT && kT.errors && (kT = OT({}, kT, {
-               errors: CT(kT.errors)
-             })), kT
+           function dm(qq, Eq) {
+             um = qq, Wm = Bm = null, null !== (qq = qq.dependencies) && null !== qq.firstContext && (0 !== (qq.lanes & Eq) && (ex = !0), qq.firstContext = null)
+           }
+ 
+           function jm(qq, Eq) {
+             if (Wm !== qq && !1 !== Eq && 0 !== Eq)
+               if ("number" === typeof Eq && 1073741823 !== Eq || (Wm = qq, Eq = 1073741823), Eq = {
+                   context: qq,
+                   observedBits: Eq,
+                   next: null
+                 }, null === Bm) {
+                 if (null === um) throw Error(mq(308));
+                 Bm = Eq, um.dependencies = {
+                   lanes: 0,
+                   firstContext: Eq,
+                   responders: null
+ ... (3 more added lines; see GitHub link above)
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L19486-L19495` → after: `L4940-L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4940-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4940-L4948) · [Before (L19486-L19495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19486-L19495)

```diff
-             if (!TT) return null;
-             let kT = Object.entries(TT),
-               cT = {};
-             for (let [lT, MT] of kT)
-               if (MT && "RouteErrorResponse" === MT.__type) cT[lT] = new KT.g(MT.status, MT.statusText, MT.data, !0 === MT.internal);
-               else if (MT && "Error" === MT.__type) {
-               let TT = new Error(MT.message);
-               TT.stack = "", cT[lT] = TT
-             } else cT[lT] = MT;
-             return cT
+             qq.updateQueue = {
+               baseState: qq.memoizedState,
+               firstBaseUpdate: null,
+               lastBaseUpdate: null,
+               shared: {
+                 pending: null
+               },
+               effects: null
+             }
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L19497-L19515` → after: `L4950-L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4950-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L4950-L5024) · [Before (L19497-L19515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19497-L19515)

```diff
-           const jT = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
-             vT = lT.forwardRef((function(TT, kT) {
-               let cT, {
-                   onClick: fT,
-                   relative: IT,
-                   reloadDocument: AT,
-                   replace: CT,
-                   state: vT,
-                   target: tT,
-                   to: hT,
-                   preventScrollReset: NT
-                 } = TT,
-                 QT = yT(TT, xT),
-                 ST = !1;
-               if (jT && "string" === typeof hT && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(hT)) {
-                 cT = hT;
- ... (3 more removed lines; see GitHub link above)
+ 
+           function Pm(qq, Eq) {
+             qq = qq.updateQueue, Eq.updateQueue === qq && (Eq.updateQueue = {
+               baseState: qq.baseState,
+               firstBaseUpdate: qq.firstBaseUpdate,
+               lastBaseUpdate: qq.lastBaseUpdate,
+               shared: qq.shared,
+               effects: qq.effects
+             })
+           }
+ 
+           function Qm(qq, Eq) {
+             return {
+               eventTime: qq,
+               lane: Eq,
+               tag: 0,
+ ... (59 more added lines; see GitHub link above)
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L19517-L19528` → after: `L5026-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5026-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5026-L5038) · [Before (L19517-L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19517-L19528)

```diff
-               let DT = (0, MT.r)(hT, {
-                   relative: IT
-                 }),
-                 aT = function(TT, kT) {
-                   let {
-                     target: cT,
-                     replace: OT,
-                     state: yT,
-                     preventScrollReset: fT,
-                     relative: xT
-                   } = void 0 === kT ? {} : kT, IT = (0, MT.t)(), AT = (0, MT.s)(), CT = (0, MT.w)(TT, {
-                     relative: xT
+             }
+             if (null !== mq) {
+               for (Wq = Oq.baseState, xq = 0, Bq = uq = cq = null;;) {
+                 Aq = mq.lane;
+                 var Nq = mq.eventTime;
+                 if ((Yq & Aq) === Aq) {
+                   null !== Bq && (Bq = Bq.next = {
+                     eventTime: Nq,
+                     lane: 0,
+                     tag: mq.tag,
+                     payload: mq.payload,
+                     callback: mq.callback,
+                     next: null
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L19530-L19543` → after: `L5040-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5040-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5040-L5058) · [Before (L19530-L19543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19530-L19543)

```diff
-                   return lT.useCallback((kT => {
-                     if (function(TT, kT) {
-                         return 0 === TT.button && (!kT || "_self" === kT) && ! function(TT) {
-                           return !!(TT.metaKey || TT.altKey || TT.ctrlKey || TT.shiftKey)
-                         }(TT)
-                       }(kT, cT)) {
-                       kT.preventDefault();
-                       let cT = void 0 !== OT ? OT : (0, KT.p)(AT) === (0, KT.p)(CT);
-                       IT(TT, {
-                         replace: cT,
-                         state: yT,
-                         preventScrollReset: fT,
-                         relative: xT
-                       })
+                   qq: {
+                     var aq = qq,
+                       Vq = mq;
+                     switch (Aq = Eq, Nq = gq, Vq.tag) {
+                       case 1:
+                         if ("function" === typeof(aq = Vq.payload)) {
+                           Wq = aq.call(Nq, Wq, Aq);
+                           break qq
+                         }
+                         Wq = aq;
+                         break qq;
+                       case 3:
+                         aq.flags = -4097 & aq.flags | 64;
+                       case 0:
+                         if (null === (Aq = "function" === typeof(aq = Vq.payload) ? aq.call(Nq, Wq, Aq) : aq) || void 0 === Aq) break qq;
+                         Wq = lq({}, Wq, Aq);
+ ... (3 more added lines; see GitHub link above)
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L19545-L19612` → after: `L5060-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5060-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5060-L5073) · [Before (L19545-L19612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19545-L19612)

```diff
-                   }), [AT, IT, CT, OT, yT, cT, TT, fT, xT])
-                 }(hT, {
-                   replace: CT,
-                   state: vT,
-                   target: tT,
-                   preventScrollReset: NT,
-                   relative: IT
-                 });
-               return lT.createElement("a", OT({}, QT, {
-                 href: cT || DT,
-                 onClick: ST || AT ? fT : function(TT) {
-                   fT && fT(TT), TT.defaultPrevented || aT(TT)
-                 },
-                 ref: kT,
-                 target: tT
-               }))
- ... (52 more removed lines; see GitHub link above)
+                   }
+                   null !== mq.callback && (qq.flags |= 32, null === (Aq = Oq.effects) ? Oq.effects = [mq] : Aq.push(mq))
+                 } else Nq = {
+                   eventTime: Nq,
+                   lane: Aq,
+                   tag: mq.tag,
+                   payload: mq.payload,
+                   callback: mq.callback,
+                   next: null
+                 }, null === Bq ? (uq = Bq = Nq, cq = Wq) : Bq = Bq.next = Nq, xq |= Aq;
+                 if (null === (mq = mq.next)) {
+                   if (null === (Aq = Oq.shared.pending)) break;
+                   mq = Aq.next, Aq.next = null, Oq.lastBaseUpdate = Aq, Oq.shared.pending = null
+                 }
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L19614-L19634` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5075) · [Before (L19614-L19634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19614-L19634)

```diff
-               return TT
-             }, OT.apply(this, arguments)
-           }
-           const yT = "function" === typeof Object.is ? Object.is : function(TT, kT) {
-               return TT === kT && (0 !== TT || 1 / TT === 1 / kT) || TT !== TT && kT !== kT
-             },
-             {
-               useState: fT,
-               useEffect: xT,
-               useLayoutEffect: IT,
-               useDebugValue: AT
-             } = lT || (lT = cT.t(KT, 2));
- 
-           function CT(TT) {
-             const kT = TT.getSnapshot,
-               cT = TT.value;
- ... (5 more removed lines; see GitHub link above)
+               null === Bq && (cq = Wq), Oq.baseState = cq, Oq.firstBaseUpdate = uq, Oq.lastBaseUpdate = Bq, Oc |= xq, qq.lanes = xq, qq.memoizedState = Wq
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L19674-L19693` → after: `L5079-L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5079-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5079-L5088) · [Before (L19674-L19693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19674-L19693)

```diff
-           function DT(TT, kT) {
-             let {
-               relative: cT
-             } = void 0 === kT ? {} : kT;
-             aT() || (0, MT.t)(!1);
-             let {
-               basename: lT,
-               navigator: OT
-             } = KT.useContext(hT), {
-               hash: yT,
-               pathname: fT,
-               search: xT
-             } = bT(TT, {
-               relative: cT
-             }), IT = fT;
-             return "/" !== lT && (IT = "/" === fT ? lT : (0, MT.z)([lT, fT])), OT.createHref({
- ... (4 more removed lines; see GitHub link above)
+           function hm(qq, Eq, gq) {
+             if (qq = Eq.effects, Eq.effects = null, null !== qq)
+               for (Eq = 0; Eq < qq.length; Eq++) {
+                 var Yq = qq[Eq],
+                   lq = Yq.callback;
+                 if (null !== lq) {
+                   if (Yq.callback = null, Yq = gq, "function" !== typeof lq) throw Error(mq(191, lq));
+                   lq.call(Yq)
+                 }
+               }
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L19696-L19697` → after: `L5092-L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5092-L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5092-L5093) · [Before (L19696-L19697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19696-L19697)

```diff
-           function aT() {
-             return null != KT.useContext(NT)
+           function bm(qq, Eq, gq, Yq) {
+             gq = null === (gq = gq(Yq, Eq = qq.memoizedState)) || void 0 === gq ? Eq : lq({}, Eq, gq), qq.memoizedState = gq, 0 === qq.lanes && (qq.updateQueue.baseState = gq)
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L19700-L19701` → after: `L5122-L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5122-L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5122-L5123) · [Before (L19700-L19701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19700-L19701)

```diff
-           function FT() {
-             return aT() || (0, MT.t)(!1), KT.useContext(NT).location
+           function Zm(qq, Eq, gq, Yq, lq, Oq, mq) {
+             return "function" === typeof(qq = qq.stateNode).shouldComponentUpdate ? qq.shouldComponentUpdate(Yq, Oq, mq) : !Eq.prototype || !Eq.prototype.isPureReactComponent || (!ol(gq, Yq) || !ol(lq, Oq))
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L19704-L19705` → after: `L5126-L5130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5126-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5126-L5130) · [Before (L19704-L19705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19704-L19705)

```diff
-           function rT() {
-             return KT.useContext(NT).navigationType
+           function fm(qq, Eq, gq) {
+             var Yq = !1,
+               lq = QO,
+               Oq = Eq.contextType;
+             return "object" === typeof Oq && null !== Oq ? Oq = jm(Oq) : (lq = hO(Eq) ? rO : yO.current, Oq = (Yq = null !== (Yq = Eq.contextTypes) && void 0 !== Yq) ? vO(qq, lq) : QO), Eq = new Eq(gq, Oq), qq.memoizedState = null !== Eq.state && void 0 !== Eq.state ? Eq.state :  … [truncated]
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L19708-L19733` → after: `L5133-L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5133-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5133-L5134) · [Before (L19708-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19708-L19733)

```diff
-           function PT() {
-             aT() || (0, MT.t)(!1);
-             let {
-               basename: TT,
-               navigator: kT
-             } = KT.useContext(hT), {
-               matches: cT
-             } = KT.useContext(QT), {
-               pathname: lT
-             } = FT(), OT = JSON.stringify((0, MT.k)(cT).map((TT => TT.pathnameBase))), yT = KT.useRef(!1);
-             return KT.useEffect((() => {
-               yT.current = !0
-             })), KT.useCallback((function(cT, KT) {
-               if (void 0 === KT && (KT = {}), !yT.current) return;
-               if ("number" === typeof cT) return void kT.go(cT);
-               let fT = (0, MT.J)(cT, JSON.parse(OT), lT, "path" === KT.relative);
- ... (10 more removed lines; see GitHub link above)
+           function Mm(qq, Eq, gq, Yq) {
+             qq = Eq.state, "function" === typeof Eq.componentWillReceiveProps && Eq.componentWillReceiveProps(gq, Yq), "function" === typeof Eq.UNSAFE_componentWillReceiveProps && Eq.UNSAFE_componentWillReceiveProps(gq, Yq), Eq.state !== qq && im.enqueueReplaceState(Eq, Eq.state, … [truncated]
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L19736-L19744` → after: `L5137-L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5137-L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5137-L5141) · [Before (L19736-L19744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19736-L19744)

```diff
-           function bT(TT, kT) {
-             let {
-               relative: cT
-             } = void 0 === kT ? {} : kT, {
-               matches: lT
-             } = KT.useContext(QT), {
-               pathname: OT
-             } = FT(), yT = JSON.stringify((0, MT.k)(lT).map((TT => TT.pathnameBase)));
-             return KT.useMemo((() => (0, MT.J)(TT, JSON.parse(yT), OT, "path" === cT)), [TT, yT, OT, cT])
+           function Tm(qq, Eq, gq, Yq) {
+             var lq = qq.stateNode;
+             lq.props = gq, lq.state = qq.memoizedState, lq.refs = nm, om(qq);
+             var Oq = Eq.contextType;
+             "object" === typeof Oq && null !== Oq ? lq.context = jm(Oq) : (Oq = hO(Eq) ? rO : yO.current, lq.context = vO(qq, Oq)), rm(qq, gq, lq, Yq), lq.state = qq.memoizedState, "function" === typeof(Oq = Eq.getDerivedStateFromProps) && (bm(qq, Eq, Oq, gq), lq.state = qq.memoi … [truncated]
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L19747-L19782` → after: `L5145-L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5145-L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5145-L5157) · [Before (L19747-L19782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19747-L19782)

```diff
-           function zT() {
-             let TT = uT(),
-               kT = (0, MT.x)(TT) ? TT.status + " " + TT.statusText : TT instanceof Error ? TT.message : JSON.stringify(TT),
-               cT = TT instanceof Error ? TT.stack : null,
-               lT = "rgba(200,200,200, 0.5)",
-               OT = {
-                 padding: "0.5rem",
-                 backgroundColor: lT
-               };
-             return KT.createElement(KT.Fragment, null, KT.createElement("h2", null, "Unexpected Application Error!"), KT.createElement("h3", {
-               style: {
-                 fontStyle: "italic"
-               }
-             }, kT), cT ? KT.createElement("pre", {
-               style: OT
-             }, cT) : null, null)
- ... (20 more removed lines; see GitHub link above)
+           function Sm(qq, Eq, gq) {
+             if (null !== (qq = gq.ref) && "function" !== typeof qq && "object" !== typeof qq) {
+               if (gq._owner) {
+                 if (gq = gq._owner) {
+                   if (1 !== gq.tag) throw Error(mq(309));
+                   var Yq = gq.stateNode
+                 }
+                 if (!Yq) throw Error(mq(147, qq));
+                 var lq = "" + qq;
+                 return null !== Eq && null !== Eq.ref && "function" === typeof Eq.ref && Eq.ref._stringRef === lq ? Eq.ref : (Eq = function(qq) {
+                   var Eq = Yq.refs;
+                   Eq === nm && (Eq = Yq.refs = {}), null === qq ? delete Eq[lq] : Eq[lq] = qq
+                 }, Eq._stringRef = lq, Eq)
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L19785-L19795` → after: `L5162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5162) · [Before (L19785-L19795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19785-L19795)

```diff
-             componentDidCatch(TT, kT) {
-               console.error("React Router caught the following error during render", TT, kT)
-             }
-             render() {
-               return this.state.error ? KT.createElement(QT.Provider, {
-                 value: this.props.routeContext
-               }, KT.createElement(ST.Provider, {
-                 value: this.state.error,
-                 children: this.props.component
-               })) : this.props.children
-             }
+             return qq
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L19798-L19806` → after: `L5165-L5166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5165-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5165-L5166) · [Before (L19798-L19806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19798-L19806)

```diff
-           function oT(TT) {
-             let {
-               routeContext: kT,
-               match: cT,
-               children: lT
-             } = TT, MT = KT.useContext(vT);
-             return MT && MT.static && MT.staticContext && cT.route.errorElement && (MT.staticContext._deepestRenderedBoundaryId = cT.route.id), KT.createElement(QT.Provider, {
-               value: kT
-             }, lT)
+           function pm(qq, Eq) {
+             if ("textarea" !== qq.type) throw Error(mq(31, "[object Object]" === Object.prototype.toString.call(Eq) ? "object with keys {" + Object.keys(Eq).join(", ") + "}" : Eq))
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L19809-L19812` → after: `L5169-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5169-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5169-L5174) · [Before (L19809-L19812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19809-L19812)

```diff
-           function HT(TT, kT, cT) {
-             if (void 0 === kT && (kT = []), null == TT) {
-               if (null == cT || !cT.errors) return null;
-               TT = cT.matches
+           function Gm(qq) {
+             function Eq(Eq, gq) {
+               if (qq) {
+                 var Yq = Eq.lastEffect;
+                 null !== Yq ? (Yq.nextEffect = gq, Eq.lastEffect = gq) : Eq.firstEffect = Eq.lastEffect = gq, gq.nextEffect = null, gq.flags = 8
+               }
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L19845-L19848` → after: `L5177-L5181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5177-L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5177-L5181) · [Before (L19845-L19848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19845-L19848)

```diff
-           function VT(TT) {
-             let kT = KT.useContext(vT);
-             return kT || (0, MT.t)(!1), kT
-           }
+             function gq(gq, Yq) {
+               if (!qq) return null;
+               for (; null !== Yq;) Eq(gq, Yq), Yq = Yq.sibling;
+               return null
+             }
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L19850-L19853` → after: `L5183-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5183-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5183-L5186) · [Before (L19850-L19853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19850-L19853)

```diff
-           function ET(TT) {
-             let kT = KT.useContext(tT);
-             return kT || (0, MT.t)(!1), kT
-           }
+             function Yq(qq, Eq) {
+               for (qq = new Map; null !== Eq;) null !== Eq.key ? qq.set(Eq.key, Eq) : qq.set(Eq.index, Eq), Eq = Eq.sibling;
+               return qq
+             }
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L19855-L19862` → after: `L5188-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5188-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5188-L5190) · [Before (L19855-L19862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19855-L19862)

```diff
-           function ZT(TT) {
-             let kT = function() {
-                 let TT = KT.useContext(QT);
-                 return TT || (0, MT.t)(!1), TT
-               }(),
-               cT = kT.matches[kT.matches.length - 1];
-             return cT.route.id || (0, MT.t)(!1), cT.route.id
-           }
+             function lq(qq, Eq) {
+               return (qq = Wu(qq, Eq)).index = 0, qq.sibling = null, qq
+             }
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L19864-L19876` → after: `L5192-L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5192-L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5192-L5194) · [Before (L19864-L19876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19864-L19876)

```diff
-           function uT() {
-             var TT;
-             let kT = KT.useContext(ST),
-               cT = ET(GT.UseRouteError),
-               lT = ZT(GT.UseRouteError);
-             return kT || (null == (TT = cT.errors) ? void 0 : TT[lT])
-           }! function(TT) {
-             TT.UseBlocker = "useBlocker", TT.UseRevalidator = "useRevalidator"
-           }(eT || (eT = {})),
-           function(TT) {
-             TT.UseLoaderData = "useLoaderData", TT.UseActionData = "useActionData", TT.UseRouteError = "useRouteError", TT.UseNavigation = "useNavigation", TT.UseRouteLoaderData = "useRouteLoaderData", TT.UseMatches = "useMatches", TT.UseRevalidator = "useRevalidator"
-           }(GT || (GT = {}));
-           let XT = 0;
+             function Oq(Eq, gq, Yq) {
+               return Eq.index = Yq, qq ? null !== (Yq = Eq.alternate) ? (Yq = Yq.index) < gq ? (Eq.flags = 2, gq) : Yq : (Eq.flags = 2, gq) : gq
+             }
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L19878-L19883` → after: `L5196-L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5196-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5196-L5198) · [Before (L19878-L19883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19878-L19883)

```diff
-           function dT(TT) {
-             let {
-               router: kT
-             } = VT(eT.UseBlocker), [cT] = KT.useState((() => String(++XT))), lT = KT.useCallback((kT => "function" === typeof TT ? !!TT(kT) : !!TT), [TT]), MT = kT.getBlocker(cT, lT);
-             return KT.useEffect((() => () => kT.deleteBlocker(cT)), [kT, cT]), MT
-           }
+             function xq(Eq) {
+               return qq && null === Eq.alternate && (Eq.flags = 2), Eq
+             }
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L19885-L19918` → after: `L5200-L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5200-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5200-L5202) · [Before (L19885-L19918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19885-L19918)

```diff
-           function LT(TT) {
-             let {
-               fallbackElement: kT,
-               router: cT
-             } = TT, lT = jT(cT.subscribe, (() => cT.state), (() => cT.state)), MT = KT.useMemo((() => ({
-               createHref: cT.createHref,
-               encodeLocation: cT.encodeLocation,
-               go: TT => cT.navigate(TT),
-               push: (TT, kT, lT) => cT.navigate(TT, {
-                 state: kT,
-                 preventScrollReset: null == lT ? void 0 : lT.preventScrollReset
-               }),
-               replace: (TT, kT, lT) => cT.navigate(TT, {
-                 replace: !0,
-                 state: kT,
-                 preventScrollReset: null == lT ? void 0 : lT.preventScrollReset
- ... (18 more removed lines; see GitHub link above)
+             function Aq(qq, Eq, gq, Yq) {
+               return null === Eq || 6 !== Eq.tag ? ((Eq = du(gq, qq.mode, Yq)).return = qq, Eq) : ((Eq = lq(Eq, gq)).return = qq, Eq)
+             }
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L19920-L19937` → after: `L5204-L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5204-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5204-L5206) · [Before (L19920-L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19920-L19937)

```diff
-           function RT(TT) {
-             let {
-               to: kT,
-               replace: cT,
-               state: lT,
-               relative: OT
-             } = TT;
-             aT() || (0, MT.t)(!1);
-             let yT = KT.useContext(tT),
-               fT = PT();
-             return KT.useEffect((() => {
-               yT && "idle" !== yT.navigation.state || fT(kT, {
-                 replace: cT,
-                 state: lT,
-                 relative: OT
-               })
- ... (2 more removed lines; see GitHub link above)
+             function cq(qq, Eq, gq, Yq) {
+               return null !== Eq && Eq.elementType === gq.type ? ((Yq = lq(Eq, gq.props)).ref = Sm(qq, Eq, gq), Yq.return = qq, Yq) : ((Yq = Nu(gq.type, gq.key, gq.props, null, qq.mode, Yq)).ref = Sm(qq, Eq, gq), Yq.return = qq, Yq)
+             }
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L19939-L19946` → after: `L5208-L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5208-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5208-L5210) · [Before (L19939-L19946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19939-L19946)

```diff
-           function gT(TT) {
-             return function(TT) {
-               let kT = KT.useContext(QT).outlet;
-               return kT ? KT.createElement(wT.Provider, {
-                 value: TT
-               }, kT) : kT
-             }(TT.context)
-           }
+             function uq(qq, Eq, gq, Yq) {
+               return null === Eq || 4 !== Eq.tag || Eq.stateNode.containerInfo !== gq.containerInfo || Eq.stateNode.implementation !== gq.implementation ? ((Eq = ju(gq, qq.mode, Yq)).return = qq, Eq) : ((Eq = lq(Eq, gq.children || [])).return = qq, Eq)
+             }
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L19948-L19950` → after: `L5212-L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5212-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5212-L5214) · [Before (L19948-L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19948-L19950)

```diff
-           function UT(TT) {
-             (0, MT.t)(!1)
-           }
+             function Bq(qq, Eq, gq, Yq, Oq) {
+               return null === Eq || 7 !== Eq.tag ? ((Eq = au(gq, qq.mode, Yq, Oq)).return = qq, Eq) : ((Eq = lq(Eq, gq)).return = qq, Eq)
+             }
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L19952-L19991` → after: `L5216-L5226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5216-L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5216-L5226) · [Before (L19952-L19991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19952-L19991)

```diff
-           function YT(TT) {
-             let {
-               basename: kT = "/",
-               children: cT = null,
-               location: lT,
-               navigationType: OT = MT.f.Pop,
-               navigator: yT,
-               static: fT = !1
-             } = TT;
-             aT() && (0, MT.t)(!1);
-             let xT = kT.replace(/^\/*/, "/"),
-               IT = KT.useMemo((() => ({
-                 basename: xT,
-                 navigator: yT,
-                 static: fT
-               })), [xT, yT, fT]);
- ... (24 more removed lines; see GitHub link above)
+             function Wq(qq, Eq, gq) {
+               if ("string" === typeof Eq || "number" === typeof Eq) return (Eq = du("" + Eq, qq.mode, gq)).return = qq, Eq;
+               if ("object" === typeof Eq && null !== Eq) {
+                 switch (Eq.$$typeof) {
+                   case yq:
+                     return (gq = Nu(Eq.type, Eq.key, Eq.props, null, qq.mode, gq)).ref = Sm(qq, null, Eq), gq.return = qq, gq;
+                   case tq:
+                     return (Eq = ju(Eq, qq.mode, gq)).return = qq, Eq
+                 }
+                 if (zm(Eq) || Uq(Eq)) return (Eq = au(Eq, qq.mode, gq, null)).return = qq, Eq;
+                 pm(qq, Eq)
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L19993-L19994` → after: `L5228-L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5228-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5228-L5229) · [Before (L19993-L19994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19993-L19994)

```diff
-             }))
-           }
+               return null
+             }
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L19996-L20034` → after: `L5231-L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5231-L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5231-L5239) · [Before (L19996-L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L19996-L20034)

```diff
-           function BT(TT) {
-             let {
-               children: kT,
-               location: cT
-             } = TT, lT = KT.useContext(vT);
-             return function(TT, kT) {
-               aT() || (0, MT.t)(!1);
-               let {
-                 navigator: cT
-               } = KT.useContext(hT), lT = KT.useContext(tT), {
-                 matches: yT
-               } = KT.useContext(QT), fT = yT[yT.length - 1], xT = fT ? fT.params : {}, IT = (fT && fT.pathname, fT ? fT.pathnameBase : "/");
-               fT && fT.route;
-               let AT, CT = FT();
-               if (kT) {
-                 var jT;
- ... (23 more removed lines; see GitHub link above)
+             function Nq(qq, Eq, gq, Yq) {
+               var lq = null !== Eq ? Eq.key : null;
+               if ("string" === typeof gq || "number" === typeof gq) return null !== lq ? null : Aq(qq, Eq, "" + gq, Yq);
+               if ("object" === typeof gq && null !== gq) {
+                 switch (gq.$$typeof) {
+                   case yq:
+                     return gq.key === lq ? gq.type === rq ? Bq(qq, Eq, gq.props.children, Yq, lq) : cq(qq, Eq, gq, Yq) : null;
+                   case tq:
+                     return gq.key === lq ? uq(qq, Eq, gq, Yq) : null
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L20036-L20069` → after: `L5241-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5241-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5241-L5245) · [Before (L20036-L20069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20036-L20069)

```diff
-               }, rT) : rT
-             }(lT && !kT ? lT.router.routes : nT(kT), cT)
-           }
-           var WT;
-           ! function(TT) {
-             TT[TT.pending = 0] = "pending", TT[TT.success = 1] = "success", TT[TT.error = 2] = "error"
-           }(WT || (WT = {}));
-           new Promise((() => {}));
-           KT.Component;
- 
-           function nT(TT, kT) {
-             void 0 === kT && (kT = []);
-             let cT = [];
-             return KT.Children.forEach(TT, ((TT, lT) => {
-               if (!KT.isValidElement(TT)) return;
-               if (TT.type === KT.Fragment) return void cT.push.apply(cT, nT(TT.props.children, kT));
- ... (18 more removed lines; see GitHub link above)
+                 if (zm(gq) || Uq(gq)) return null !== lq ? null : Bq(qq, Eq, gq, Yq, null);
+                 pm(qq, gq)
+               }
+               return null
+             }
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L20071-L20084` → after: `L5247-L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5247-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5247-L5260) · [Before (L20071-L20084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20071-L20084)

```diff
-           function pT(TT) {
-             return TT.map((TT => {
-               let kT = OT({}, TT);
-               return null == kT.hasErrorBoundary && (kT.hasErrorBoundary = null != kT.errorElement), kT.children && (kT.children = pT(kT.children)), kT
-             }))
-           }
-         },
-         4251: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => FT
-           });
-           var lT = cT(1398),
-             MT = cT(1390),
-             KT = cT(4254);
+             function aq(qq, Eq, gq, Yq, lq) {
+               if ("string" === typeof Yq || "number" === typeof Yq) return Aq(Eq, qq = qq.get(gq) || null, "" + Yq, lq);
+               if ("object" === typeof Yq && null !== Yq) {
+                 switch (Yq.$$typeof) {
+                   case yq:
+                     return qq = qq.get(null === Yq.key ? gq : Yq.key) || null, Yq.type === rq ? Bq(Eq, qq, Yq.props.children, lq, Yq.key) : cq(Eq, qq, Yq, lq);
+                   case tq:
+                     return uq(Eq, qq = qq.get(null === Yq.key ? gq : Yq.key) || null, Yq, lq)
+                 }
+                 if (zm(Yq) || Uq(Yq)) return Bq(Eq, qq = qq.get(gq) || null, Yq, lq, null);
+                 pm(Eq, Yq)
+               }
+               return null
+             }
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L20086-L20121` → after: `L5262-L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5262-L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5262-L5268) · [Before (L20086-L20121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20086-L20121)

```diff
-           function OT(TT, kT) {
-             return TT.replace(new RegExp("(^|\\s)" + kT + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
-           }
-           var yT = cT(71),
-             fT = cT(94);
-           const xT = !1;
-           var IT = cT(4267),
-             AT = function(TT) {
-               return TT.scrollTop
-             },
-             CT = "unmounted",
-             jT = "exited",
-             vT = "entering",
-             tT = "entered",
-             hT = "exiting",
-             NT = function(TT) {
- ... (20 more removed lines; see GitHub link above)
+             function Vq(lq, mq, xq, Aq) {
+               for (var cq = null, uq = null, Bq = mq, Vq = mq = 0, dq = null; null !== Bq && Vq < xq.length; Vq++) {
+                 Bq.index > Vq ? (dq = Bq, Bq = null) : dq = Bq.sibling;
+                 var jq = Nq(lq, Bq, xq[Vq], Aq);
+                 if (null === jq) {
+                   null === Bq && (Bq = dq);
+                   break
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L20123-L20131` → after: `L5270-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5270-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5270-L5292) · [Before (L20123-L20131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20123-L20131)

```diff
-                 this.updateStatus(!1, kT)
-               }, cT.componentWillUnmount = function() {
-                 this.cancelNextCallback()
-               }, cT.getTimeouts = function() {
-                 var TT, kT, cT, lT = this.props.timeout;
-                 return TT = kT = cT = lT, null != lT && "number" !== typeof lT && (TT = lT.exit, kT = lT.enter, cT = void 0 !== lT.appear ? lT.appear : kT), {
-                   exit: TT,
-                   enter: kT,
-                   appear: cT
+                 qq && Bq && null === jq.alternate && Eq(lq, Bq), mq = Oq(jq, mq, Vq), null === uq ? cq = jq : uq.sibling = jq, uq = jq, Bq = dq
+               }
+               if (Vq === xq.length) return gq(lq, Bq), cq;
+               if (null === Bq) {
+                 for (; Vq < xq.length; Vq++) null !== (Bq = Wq(lq, xq[Vq], Aq)) && (mq = Oq(Bq, mq, Vq), null === uq ? cq = Bq : uq.sibling = Bq, uq = Bq);
+                 return cq
+               }
+               for (Bq = Yq(lq, Bq); Vq < xq.length; Vq++) null !== (dq = aq(Bq, lq, Vq, xq[Vq], Aq)) && (qq && null !== dq.alternate && Bq.delete(null === dq.key ? Vq : dq.key), mq = Oq(dq, mq, Vq), null === uq ? cq = dq : uq.sibling = dq, uq = dq);
+               return qq && Bq.forEach((function(qq) {
+                 return Eq(lq, qq)
+               })), cq
+             }
+ 
+             function dq(lq, xq, Aq, cq) {
+               var uq = Uq(Aq);
+               if ("function" !== typeof uq) throw Error(mq(150));
+ ... (7 more added lines; see GitHub link above)
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L20133-L20138` → after: `L5294-L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5294-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5294-L5327) · [Before (L20133-L20138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20133-L20138)

```diff
-               }, cT.updateStatus = function(TT, kT) {
-                 if (void 0 === TT && (TT = !1), null !== kT)
-                   if (this.cancelNextCallback(), kT === vT) {
-                     if (this.props.unmountOnExit || this.props.mountOnEnter) {
-                       var cT = this.props.nodeRef ? this.props.nodeRef.current : fT.findDOMNode(this);
-                       cT && AT(cT)
+                 qq && Vq && null === oq.alternate && Eq(lq, Vq), xq = Oq(oq, xq, dq), null === Bq ? uq = oq : Bq.sibling = oq, Bq = oq, Vq = jq
+               }
+               if (Hq.done) return gq(lq, Vq), uq;
+               if (null === Vq) {
+                 for (; !Hq.done; dq++, Hq = Aq.next()) null !== (Hq = Wq(lq, Hq.value, cq)) && (xq = Oq(Hq, xq, dq), null === Bq ? uq = Hq : Bq.sibling = Hq, Bq = Hq);
+                 return uq
+               }
+               for (Vq = Yq(lq, Vq); !Hq.done; dq++, Hq = Aq.next()) null !== (Hq = aq(Vq, lq, dq, Hq.value, cq)) && (qq && null !== Hq.alternate && Vq.delete(null === Hq.key ? dq : Hq.key), xq = Oq(Hq, xq, dq), null === Bq ? uq = Hq : Bq.sibling = Hq, Bq = Hq);
+               return qq && Vq.forEach((function(qq) {
+                 return Eq(lq, qq)
+               })), uq
+             }
+             return function(qq, Yq, Oq, Aq) {
+               var cq = "object" === typeof Oq && null !== Oq && Oq.type === rq && null === Oq.key;
+               cq && (Oq = Oq.props.children);
+               var uq = "object" === typeof Oq && null !== Oq;
+ ... (18 more added lines; see GitHub link above)
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L20140-L20210` → after: `L5329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5329) · [Before (L20140-L20210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20140-L20210)

```diff
-                     this.performEnter(TT)
-                   } else this.performExit();
-                 else this.props.unmountOnExit && this.state.status === jT && this.setState({
-                   status: CT
-                 })
-               }, cT.performEnter = function(TT) {
-                 var kT = this,
-                   cT = this.props.enter,
-                   lT = this.context ? this.context.isMounting : TT,
-                   MT = this.props.nodeRef ? [lT] : [fT.findDOMNode(this), lT],
-                   KT = MT[0],
-                   OT = MT[1],
-                   yT = this.getTimeouts(),
-                   IT = lT ? yT.appear : yT.enter;
-                 !TT && !cT || xT ? this.safeSetState({
-                   status: tT
- ... (55 more removed lines; see GitHub link above)
+                     Oq.type === rq ? ((Yq = au(Oq.props.children, qq.mode, Aq, Oq.key)).return = qq, qq = Yq) : ((Aq = Nu(Oq.type, Oq.key, Oq.props, null, qq.mode, Aq)).ref = Sm(qq, Yq, Oq), Aq.return = qq, qq = Aq)
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L20212-L20288` → after: `L5331-L5345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5331-L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5331-L5345) · [Before (L20212-L20288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20212-L20288)

```diff
-                   null != TT && setTimeout(this.nextCallback, TT)
-                 } else setTimeout(this.nextCallback, 0)
-               }, cT.render = function() {
-                 var TT = this.state.status;
-                 if (TT === CT) return null;
-                 var kT = this.props,
-                   cT = kT.children,
-                   lT = (kT.in, kT.mountOnEnter, kT.unmountOnExit, kT.appear, kT.enter, kT.exit, kT.timeout, kT.addEndListener, kT.onEnter, kT.onEntering, kT.onEntered, kT.onExit, kT.onExiting, kT.onExited, kT.nodeRef, (0, MT.c)(kT, ["children", "in", "mountOnEnter", "unmountOnExi … [truncated]
-                 return yT.createElement(IT.e.Provider, {
-                   value: null
-                 }, "function" === typeof cT ? cT(TT, lT) : yT.cloneElement(yT.Children.only(cT), lT))
-               }, kT
-             }(yT.Component);
- 
-           function QT() {}
-           NT.contextType = IT.e, NT.propTypes = {}, NT.defaultProps = {
- ... (61 more removed lines; see GitHub link above)
+                   return xq(qq);
+                 case tq:
+                   qq: {
+                     for (cq = Oq.key; null !== Yq;) {
+                       if (Yq.key === cq) {
+                         if (4 === Yq.tag && Yq.stateNode.containerInfo === Oq.containerInfo && Yq.stateNode.implementation === Oq.implementation) {
+                           gq(qq, Yq.sibling), (Yq = lq(Yq, Oq.children || [])).return = qq, qq = Yq;
+                           break qq
+                         }
+                         gq(qq, Yq);
+                         break
+                       }
+                       Eq(qq, Yq), Yq = Yq.sibling
+                     }(Yq = ju(Oq, qq.mode, Aq)).return = qq,
+                     qq = Yq
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L20290-L20340` → after: `L5347-L5361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5347-L5361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5347-L5361) · [Before (L20290-L20340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20290-L20340)

```diff
-                 }, kT
-               }(0, KT.c)(kT, TT);
-               var cT = kT.prototype;
-               return cT.addClass = function(TT, kT, cT) {
-                 var lT = this.getClassNames(kT)[cT + "ClassName"],
-                   MT = this.getClassNames("enter").doneClassName;
-                 "appear" === kT && "done" === cT && MT && (lT += " " + MT), "active" === cT && TT && AT(TT), lT && (this.appliedClasses[kT][cT] = lT, function(TT, kT) {
-                   TT && kT && kT.split(" ").forEach((function(kT) {
-                     return lT = kT, void((cT = TT).classList ? cT.classList.add(lT) : function(TT, kT) {
-                       return TT.classList ? !!kT && TT.classList.contains(kT) : -1 !== (" " + (TT.className.baseVal || TT.className) + " ").indexOf(" " + kT + " ")
-                     }(cT, lT) || ("string" === typeof cT.className ? cT.className = cT.className + " " + lT : cT.setAttribute("class", (cT.className && cT.className.baseVal || "") + " " + lT)));
-                     var cT, lT
-                   }))
-                 }(TT, lT))
-               }, cT.removeClasses = function(TT, kT) {
-                 var cT = this.appliedClasses[kT],
- ... (35 more removed lines; see GitHub link above)
+                   return xq(qq)
+               }
+               if ("string" === typeof Oq || "number" === typeof Oq) return Oq = "" + Oq, null !== Yq && 6 === Yq.tag ? (gq(qq, Yq.sibling), (Yq = lq(Yq, Oq)).return = qq, qq = Yq) : (gq(qq, Yq), (Yq = du(Oq, qq.mode, Aq)).return = qq, qq = Yq), xq(qq);
+               if (zm(Oq)) return Vq(qq, Yq, Oq, Aq);
+               if (Uq(Oq)) return dq(qq, Yq, Oq, Aq);
+               if (uq && pm(qq, Oq), "undefined" === typeof Oq && !cq) switch (qq.tag) {
+                 case 1:
+                 case 22:
+                 case 0:
+                 case 11:
+                 case 15:
+                   throw Error(mq(152, Kq(qq.type) || "Component"))
+               }
+               return gq(qq, Yq)
+             }
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L20342-L20349` → after: `L5363-L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5363-L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5363-L5368) · [Before (L20342-L20349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20342-L20349)

```diff
-           var OT = lT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
-             yT = Object.prototype.hasOwnProperty,
-             fT = {
-               key: !0,
-               ref: !0,
-               __self: !0,
-               __source: !0
-             };
+           var Lm = Gm(!0),
+             Jm = Gm(!1),
+             km = {},
+             Rm = HO(km),
+             Um = HO(km),
+             Fm = HO(km);
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L20351-L20365` → after: `L5370-L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5370-L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5370-L5372) · [Before (L20351-L20365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20351-L20365)

```diff
-           function xT(TT, kT, cT) {
-             var lT, KT = {},
-               xT = null,
-               IT = null;
-             for (lT in void 0 !== cT && (xT = "" + cT), void 0 !== kT.key && (xT = "" + kT.key), void 0 !== kT.ref && (IT = kT.ref), kT) yT.call(kT, lT) && !fT.hasOwnProperty(lT) && (KT[lT] = kT[lT]);
-             if (TT && TT.defaultProps)
-               for (lT in kT = TT.defaultProps) void 0 === KT[lT] && (KT[lT] = kT[lT]);
-             return {
-               $$typeof: MT,
-               type: TT,
-               key: xT,
-               ref: IT,
-               props: KT,
-               _owner: OT.current
-             }
+           function sm(qq) {
+             if (qq === km) throw Error(mq(174));
+             return qq
```

#### 372. `bundles/bloxd.io/main.js` (Changed code · before: `L20367-L20382` → after: `L5374-L5388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5374-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5374-L5388) · [Before (L20367-L20382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20367-L20382)

```diff
-           kT.jsx = xT, kT.jsxs = xT
-         },
-         80: (TT, kT, cT) => {
-           var lT = cT(87),
-             MT = 60103,
-             KT = 60106;
-           kT.Fragment = 60107, kT.StrictMode = 60108, kT.Profiler = 60114;
-           var OT = 60109,
-             yT = 60110,
-             fT = 60112;
-           kT.Suspense = 60113;
-           var xT = 60115,
-             IT = 60116;
-           if ("function" === typeof Symbol && Symbol.for) {
-             var AT = Symbol.for;
-             MT = AT("react.element"), KT = AT("react.portal"), kT.Fragment = AT("react.fragment"), kT.StrictMode = AT("react.strict_mode"), kT.Profiler = AT("react.profiler"), OT = AT("react.provider"), yT = AT("react.context"), fT = AT("react.forward_ref"), kT.Suspense = AT("rea … [truncated]
+ 
+           function Xm(qq, Eq) {
+             switch (PO(Fm, Eq), PO(Um, qq), PO(Rm, km), qq = Eq.nodeType) {
+               case 9:
+               case 11:
+                 Eq = (Eq = Eq.documentElement) ? Eq.namespaceURI : dE(null, "");
+                 break;
+               default:
+                 Eq = dE(Eq = (qq = 8 === qq ? Eq.parentNode : Eq).namespaceURI || null, qq = qq.tagName)
+             }
+             oO(Rm), PO(Rm, Eq)
+           }
+ 
+           function wm() {
+             oO(Rm), oO(Um), oO(Fm)
```

#### 373. `bundles/bloxd.io/main.js` (Changed code · before: `L20387-L20388` → after: `L5392-L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5392-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5392-L5395) · [Before (L20387-L20388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20387-L20388)

```diff
-             for (var kT = "https://reactjs.org/docs/error-decoder.html?invariant=" + TT, cT = 1; cT < arguments.length; cT++) kT += "&args[]=" + encodeURIComponent(arguments[cT]);
-             return "Minified React error #" + TT + "; visit " + kT + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
+             sm(Fm.current);
+             var Eq = sm(Rm.current),
+               gq = dE(Eq, qq.type);
+             Eq !== gq && (PO(Um, qq), PO(Rm, gq))
```

#### 374. `bundles/bloxd.io/main.js` (Changed code · before: `L20400-L20401` → after: `L5398-L5399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5398-L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5398-L5399) · [Before (L20400-L20401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20400-L20401)

```diff
-           function hT(TT, kT, cT) {
-             this.props = TT, this.context = kT, this.refs = tT, this.updater = cT || vT
+           function Cm(qq) {
+             Um.current === qq && (oO(Rm), oO(Um))
```

#### 375. `bundles/bloxd.io/main.js` (Changed code · before: `L20404` → after: `L5403-L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5403-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5403-L5425) · [Before (L20404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20404)

```diff
-           function NT() {}
+           function em(qq) {
+             for (var Eq = qq; null !== Eq;) {
+               if (13 === Eq.tag) {
+                 var gq = Eq.memoizedState;
+                 if (null !== gq && (null === (gq = gq.dehydrated) || "$?" === gq.data || "$!" === gq.data)) return Eq
+               } else if (19 === Eq.tag && void 0 !== Eq.memoizedProps.revealOrder) {
+                 if (0 !== (64 & Eq.flags)) return Eq
+               } else if (null !== Eq.child) {
+                 Eq.child.return = Eq, Eq = Eq.child;
+                 continue
+               }
+               if (Eq === qq) break;
+               for (; null === Eq.sibling;) {
+                 if (null === Eq.return || Eq.return === qq) return null;
+                 Eq = Eq.return
+               }
+ ... (7 more added lines; see GitHub link above)
```

#### 376. `bundles/bloxd.io/main.js` (Changed code · before: `L20406-L20407` → after: `L5427-L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5427-L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5427-L5429) · [Before (L20406-L20407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20406-L20407)

```diff
-           function QT(TT, kT, cT) {
-             this.props = TT, this.context = kT, this.refs = tT, this.updater = cT || vT
+           function gx(qq, Eq) {
+             var gq = uu(5, null, null, 0);
+             gq.elementType = "DELETED", gq.type = "DELETED", gq.stateNode = Eq, gq.return = qq, gq.flags = 8, null !== qq.lastEffect ? (qq.lastEffect.nextEffect = gq, qq.lastEffect = gq) : qq.firstEffect = qq.lastEffect = gq
```

#### 377. `bundles/bloxd.io/main.js` (Changed code · before: `L20428-L20438` → after: `L5432-L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5432-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5432-L5440) · [Before (L20428-L20438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20428-L20438)

```diff
-           function rT(TT, kT, cT) {
-             var lT, KT = {},
-               OT = null,
-               yT = null;
-             if (null != kT)
-               for (lT in void 0 !== kT.ref && (yT = kT.ref), void 0 !== kT.key && (OT = "" + kT.key), kT) aT.call(kT, lT) && !FT.hasOwnProperty(lT) && (KT[lT] = kT[lT]);
-             var fT = arguments.length - 2;
-             if (1 === fT) KT.children = cT;
-             else if (1 < fT) {
-               for (var xT = Array(fT), IT = 0; IT < fT; IT++) xT[IT] = arguments[IT + 2];
-               KT.children = xT
+           function Yx(qq, Eq) {
+             switch (qq.tag) {
+               case 5:
+                 var gq = qq.type;
+                 return null !== (Eq = 1 !== Eq.nodeType || gq.toLowerCase() !== Eq.nodeName.toLowerCase() ? null : Eq) && (qq.stateNode = Eq, !0);
+               case 6:
+                 return null !== (Eq = "" === qq.pendingProps || 3 !== Eq.nodeType ? null : Eq) && (qq.stateNode = Eq, !0);
+               default:
+                 return !1
```

#### 378. `bundles/bloxd.io/main.js` (Changed code · before: `L20440-L20448` → after: `L5442-L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5442-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5442-L5454) · [Before (L20440-L20448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20440-L20448)

```diff
-             if (TT && TT.defaultProps)
-               for (lT in fT = TT.defaultProps) void 0 === KT[lT] && (KT[lT] = fT[lT]);
-             return {
-               $$typeof: MT,
-               type: TT,
-               key: OT,
-               ref: yT,
-               props: KT,
-               _owner: DT.current
+           }
+ 
+           function lx(qq) {
+             if (Ex) {
+               var Eq = qx;
+               if (Eq) {
+                 var gq = Eq;
+                 if (!Yx(qq, Eq)) {
+                   if (!(Eq = YO(gq.nextSibling)) || !Yx(qq, Eq)) return qq.flags = -1025 & qq.flags | 2, Ex = !1, void(Dm = qq);
+                   gx(Dm, gq)
+                 }
+                 Dm = qq, qx = YO(Eq.firstChild)
+               } else qq.flags = -1025 & qq.flags | 2, Ex = !1, Dm = qq
```

#### 379. `bundles/bloxd.io/main.js` (Changed code · before: `L20453` → after: `L5459-L5510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5459-L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5459-L5510) · [Before (L20453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20453)

```diff
-             return "object" === typeof TT && null !== TT && TT.$$typeof === MT
+             for (qq = qq.return; null !== qq && 5 !== qq.tag && 3 !== qq.tag && 13 !== qq.tag;) qq = qq.return;
+             Dm = qq
+           }
+ 
+           function mx(qq) {
+             if (qq !== Dm) return !1;
+             if (!Ex) return Ox(qq), Ex = !0, !1;
+             var Eq = qq.type;
+             if (5 !== qq.tag || "head" !== Eq && "body" !== Eq && !Dl(Eq, qq.memoizedProps))
+               for (Eq = qx; Eq;) gx(qq, Eq), Eq = YO(Eq.nextSibling);
+             if (Ox(qq), 13 === qq.tag) {
+               if (!(qq = null !== (qq = qq.memoizedState) ? qq.dehydrated : null)) throw Error(mq(317));
+               qq: {
+                 for (qq = qq.nextSibling, Eq = 0; qq;) {
+                   if (8 === qq.nodeType) {
+                     var gq = qq.data;
+ ... (36 more added lines; see GitHub link above)
```

#### 380. `bundles/bloxd.io/main.js` (Changed code · before: `L20458-L20466` → after: `L5514-L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5514-L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5514-L5517) · [Before (L20458-L20466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20458-L20466)

```diff
-             return "object" === typeof TT && null !== TT && null != TT.key ? function(TT) {
-               var kT = {
-                 "=": "=0",
-                 ":": "=2"
-               };
-               return "$" + TT.replace(/[=:]/g, (function(TT) {
-                 return kT[TT]
-               }))
-             }("" + TT.key) : kT.toString(36)
+             if (null === Eq) return !1;
+             for (var gq = 0; gq < Eq.length && gq < qq.length; gq++)
+               if (!jl(qq[gq], Eq[gq])) return !1;
+             return !0
```

#### 381. `bundles/bloxd.io/main.js` (Changed code · before: `L20469-L20484` → after: `L5520-L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5520-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5520-L5558) · [Before (L20469-L20484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20469-L20484)

```diff
-           function bT(TT, kT, cT, lT, OT) {
-             var yT = typeof TT;
-             "undefined" !== yT && "boolean" !== yT || (TT = null);
-             var fT = !1;
-             if (null === TT) fT = !0;
-             else switch (yT) {
-               case "string":
-               case "number":
-                 fT = !0;
-                 break;
-               case "object":
-                 switch (TT.$$typeof) {
-                   case MT:
-                   case KT:
-                     fT = !0
-                 }
+           function Px(qq, Eq, gq, Yq, lq, Oq) {
+             if (Wx = Oq, Nx = Eq, Eq.memoizedState = null, Eq.updateQueue = null, Eq.lanes = 0, ux.current = null === qq || null === qq.memoizedState ? wx : Kx, qq = gq(Yq, lq), jx) {
+               Oq = 0;
+               do {
+                 if (jx = !1, !(25 > Oq)) throw Error(mq(301));
+                 Oq += 1, Vx = ax = null, Eq.updateQueue = null, ux.current = Cx, qq = gq(Yq, lq)
+               } while (jx)
+             }
+             if (ux.current = Xx, Eq = null !== ax && null !== ax.next, Wx = 0, Vx = ax = Nx = null, dx = !1, Eq) throw Error(mq(300));
+             return qq
+           }
+ 
+           function Qx() {
+             var qq = {
+               memoizedState: null,
+               baseState: null,
+ ... (23 more added lines; see GitHub link above)
```

#### 382. `bundles/bloxd.io/main.js` (Changed code · before: `L20510-L20516` → after: `L5563-L5609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5563-L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5563-L5609) · [Before (L20510-L20516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20510-L20516)

```diff
-           function zT(TT, kT, cT) {
-             if (null == TT) return TT;
-             var lT = [],
-               MT = 0;
-             return bT(TT, lT, "", "", (function(TT) {
-               return kT.call(cT, TT, MT++)
-             })), lT
+           function tx(qq, Eq) {
+             return "function" === typeof Eq ? Eq(qq) : Eq
+           }
+ 
+           function rx(qq) {
+             var Eq = yx(),
+               gq = Eq.queue;
+             if (null === gq) throw Error(mq(311));
+             gq.lastRenderedReducer = qq;
+             var Yq = ax,
+               lq = Yq.baseQueue,
+               Oq = gq.pending;
+             if (null !== Oq) {
+               if (null !== lq) {
+                 var xq = lq.next;
+                 lq.next = Oq.next, Oq.next = xq
+ ... (31 more added lines; see GitHub link above)
```

#### 383. `bundles/bloxd.io/main.js` (Changed code · before: `L20520-L20526` → after: `L5613-L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5613-L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5613-L5626) · [Before (L20520-L20526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20520-L20526)

```diff
-             if (-1 === TT._status) {
-               var kT = TT._result;
-               kT = kT(), TT._status = 0, TT._result = kT, kT.then((function(kT) {
-                 0 === TT._status && (kT = kT.default, TT._status = 1, TT._result = kT)
-               }), (function(kT) {
-                 0 === TT._status && (TT._status = 2, TT._result = kT)
-               }))
+             var Eq = yx(),
+               gq = Eq.queue;
+             if (null === gq) throw Error(mq(311));
+             gq.lastRenderedReducer = qq;
+             var Yq = gq.dispatch,
+               lq = gq.pending,
+               Oq = Eq.memoizedState;
+             if (null !== lq) {
+               gq.pending = null;
+               var xq = lq = lq.next;
+               do {
+                 Oq = qq(Oq, xq.action), xq = xq.next
+               } while (xq !== lq);
+               jl(Oq, Eq.memoizedState) || (ex = !0), Eq.memoizedState = Oq, null === Eq.baseQueue && (Eq.baseState = Oq), gq.lastRenderedState = Oq
```

#### 384. `bundles/bloxd.io/main.js` (Changed code · before: `L20528-L20529` → after: `L5628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5628) · [Before (L20528-L20529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20528-L20529)

```diff
-             if (1 === TT._status) return TT._result;
-             throw TT._result
+             return [Oq, Yq]
```

#### 385. `bundles/bloxd.io/main.js` (Changed code · before: `L20535-L20538` → after: `L5631-L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5631-L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5631-L5691) · [Before (L20535-L20538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20535-L20538)

```diff
-           function HT() {
-             var TT = oT.current;
-             if (null === TT) throw Error(jT(321));
-             return TT
+           function hx(qq, Eq, gq) {
+             var Yq = Eq._getVersion;
+             Yq = Yq(Eq._source);
+             var lq = Eq._workInProgressVersionPrimary;
+             if (null !== lq ? qq = lq === Yq : (qq = qq.mutableReadLanes, (qq = (Wx & qq) === qq) && (Eq._workInProgressVersionPrimary = Yq, Ax.push(Eq))), qq) return gq(Eq._source);
+             throw Ax.push(Eq), Error(mq(350))
+           }
+ 
+           function nx(qq, Eq, gq, Yq) {
+             var lq = IA;
+             if (null === lq) throw Error(mq(349));
+             var Oq = Eq._getVersion,
+               xq = Oq(Eq._source),
+               Aq = ux.current,
+               cq = Aq.useState((function() {
+                 return hx(lq, Eq, gq)
+ ... (45 more added lines; see GitHub link above)
```

#### 386. `bundles/bloxd.io/main.js` (Changed code · before: `L20668-L20679` → after: `L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5695) · [Before (L20668-L20679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20668-L20679)

```diff
-             lT || (lT = Error);
-             var MT = function(TT) {
-               var kT, lT;
- 
-               function MT(kT, lT, MT) {
-                 return TT.call(this, function(TT, kT, lT) {
-                   return "string" === typeof cT ? cT : cT(TT, kT, lT)
-                 }(kT, lT, MT)) || this
-               }
-               return lT = TT, (kT = MT).prototype = Object.create(lT.prototype), kT.prototype.constructor = kT, kT.__proto__ = lT, MT
-             }(lT);
-             MT.prototype.name = lT.name, MT.prototype.code = TT, kT[TT] = MT
+             return nx(yx(), qq, Eq, gq)
```

#### 387. `bundles/bloxd.io/main.js` (Changed code · before: `L20682-L20689` → after: `L5698-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5698-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5698-L5705) · [Before (L20682-L20689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20682-L20689)

```diff
-           function lT(TT, kT) {
-             if (Array.isArray(TT)) {
-               var cT = TT.length;
-               return TT = TT.map((function(TT) {
-                 return String(TT)
-               })), cT > 2 ? "one of ".concat(kT, " ").concat(TT.slice(0, cT - 1).join(", "), ", or ") + TT[cT - 1] : 2 === cT ? "one of ".concat(kT, " ").concat(TT[0], " or ").concat(TT[1]) : "of ".concat(kT, " ").concat(TT[0])
-             }
-             return "of ".concat(kT, " ").concat(String(TT))
+           function ix(qq) {
+             var Eq = Qx();
+             return "function" === typeof qq && (qq = qq()), Eq.memoizedState = Eq.baseState = qq, qq = (qq = Eq.queue = {
+               pending: null,
+               dispatch: null,
+               lastRenderedReducer: tx,
+               lastRenderedState: qq
+             }).dispatch = sx.bind(null, Nx, qq), [Eq.memoizedState, qq]
```

#### 388. `bundles/bloxd.io/main.js` (Changed code · before: `L20691-L20725` → after: `L5707-L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5707-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5707-L5717) · [Before (L20691-L20725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20691-L20725)

```diff
-           cT("ERR_INVALID_OPT_VALUE", (function(TT, kT) {
-             return 'The value "' + kT + '" is invalid for option "' + TT + '"'
-           }), TypeError), cT("ERR_INVALID_ARG_TYPE", (function(TT, kT, cT) {
-             var MT, KT, OT, yT;
-             if ("string" === typeof kT && (KT = "not ", kT.substr(!OT || OT < 0 ? 0 : +OT, KT.length) === KT) ? (MT = "must not be", kT = kT.replace(/^not /, "")) : MT = "must be", function(TT, kT, cT) {
-                 return (void 0 === cT || cT > TT.length) && (cT = TT.length), TT.substring(cT - kT.length, cT) === kT
-               }(TT, " argument")) yT = "The ".concat(TT, " ").concat(MT, " ").concat(lT(kT, "type"));
-             else {
-               var fT = function(TT, kT, cT) {
-                 return "number" !== typeof cT && (cT = 0), !(cT + kT.length > TT.length) && -1 !== TT.indexOf(kT, cT)
-               }(TT, ".") ? "property" : "argument";
-               yT = 'The "'.concat(TT, '" ').concat(fT, " ").concat(MT, " ").concat(lT(kT, "type"))
-             }
-             return yT += ". Received type ".concat(typeof cT)
-           }), TypeError), cT("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), cT("ERR_METHOD_NOT_IMPLEMENTED", (function(TT) {
-             return "The " + TT + " method is not implemented"
- ... (19 more removed lines; see GitHub link above)
+ 
+           function Zx(qq, Eq, gq, Yq) {
+             return qq = {
+               tag: qq,
+               create: Eq,
+               destroy: gq,
+               deps: Yq,
+               next: null
+             }, null === (Eq = Nx.updateQueue) ? (Eq = {
+               lastEffect: null
+             }, Nx.updateQueue = Eq, Eq.lastEffect = qq.next = qq) : null === (gq = Eq.lastEffect) ? Eq.lastEffect = qq.next = qq : (Yq = gq.next, gq.next = qq, qq.next = Yq, Eq.lastEffect = qq), qq
```

#### 389. `bundles/bloxd.io/main.js` (Changed code · before: `L20729-L20730` → after: `L5721-L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5721-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5721-L5723) · [Before (L20729-L20730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20729-L20730)

```diff
-             if (!(this instanceof xT)) return new xT(TT);
-             MT.call(this, TT), KT.call(this, TT), this.allowHalfOpen = !0, TT && (!1 === TT.readable && (this.readable = !1), !1 === TT.writable && (this.writable = !1), !1 === TT.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", IT)))
+             return qq = {
+               current: qq
+             }, Qx().memoizedState = qq
```

#### 390. `bundles/bloxd.io/main.js` (Changed code · before: `L20734` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5727) · [Before (L20734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20734)

```diff
-             this._writableState.ended || process.nextTick(AT, this)
+             return yx().memoizedState
```

#### 391. `bundles/bloxd.io/main.js` (Changed code · before: `L20737-L20738` → after: `L5730-L5732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5730-L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5730-L5732) · [Before (L20737-L20738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20737-L20738)

```diff
-           function AT(TT) {
-             TT.end()
+           function Tx(qq, Eq, gq, Yq) {
+             var lq = Qx();
+             Nx.flags |= qq, lq.memoizedState = Zx(1 | Eq, gq, void 0, void 0 === Yq ? null : Yq)
```

#### 392. `bundles/bloxd.io/main.js` (Changed code · before: `L20740-L20748` → after: `L5734-L5741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5734-L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5734-L5741) · [Before (L20740-L20748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20740-L20748)

```diff
-           Object.defineProperty(xT.prototype, "writableHighWaterMark", {
-             enumerable: !1,
-             get: function() {
-               return this._writableState.highWaterMark
-             }
-           }), Object.defineProperty(xT.prototype, "writableBuffer", {
-             enumerable: !1,
-             get: function() {
-               return this._writableState && this._writableState.getBuffer()
+ 
+           function zx(qq, Eq, gq, Yq) {
+             var lq = yx();
+             Yq = void 0 === Yq ? null : Yq;
+             var Oq = void 0;
+             if (null !== ax) {
+               var mq = ax.memoizedState;
+               if (Oq = mq.destroy, null !== Yq && ox(Yq, mq.deps)) return void Zx(Eq, gq, Oq, Yq)
```

#### 393. `bundles/bloxd.io/main.js` (Changed code · before: `L20750-L20753` → after: `L5743-L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5743-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5743-L5819) · [Before (L20750-L20753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20750-L20753)

```diff
-           }), Object.defineProperty(xT.prototype, "writableLength", {
-             enumerable: !1,
-             get: function() {
-               return this._writableState.length
+             Nx.flags |= qq, lq.memoizedState = Zx(1 | Eq, gq, Oq, Yq)
+           }
+ 
+           function Sx(qq, Eq) {
+             return Tx(516, 4, qq, Eq)
+           }
+ 
+           function px(qq, Eq) {
+             return zx(516, 4, qq, Eq)
+           }
+ 
+           function Gx(qq, Eq) {
+             return zx(4, 2, qq, Eq)
+           }
+ 
+           function Lx(qq, Eq) {
+ ... (61 more added lines; see GitHub link above)
```

#### 394. `bundles/bloxd.io/main.js` (Changed code · before: `L20755-L20758` → after: `L5821-L5956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5821-L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5821-L5956) · [Before (L20755-L20758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20755-L20758)

```diff
-           }), Object.defineProperty(xT.prototype, "destroyed", {
-             enumerable: !1,
-             get: function() {
-               return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
+           }
+           var Xx = {
+               readContext: jm,
+               useCallback: Hx,
+               useContext: Hx,
+               useEffect: Hx,
+               useImperativeHandle: Hx,
+               useLayoutEffect: Hx,
+               useMemo: Hx,
+               useReducer: Hx,
+               useRef: Hx,
+               useState: Hx,
+               useDebugValue: Hx,
+               useDeferredValue: Hx,
+               useTransition: Hx,
+               useMutableSource: Hx,
+ ... (120 more added lines; see GitHub link above)
```

#### 395. `bundles/bloxd.io/main.js` (Changed code · before: `L20760-L20782` → after: `L5958-L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5958-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5958-L5994) · [Before (L20760-L20782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20760-L20782)

```diff
-             set: function(TT) {
-               void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = TT, this._writableState.destroyed = TT)
-             }
-           })
-         },
-         4193: (TT, kT, cT) => {
-           TT.exports = MT;
-           var lT = cT(4186);
- 
-           function MT(TT) {
-             if (!(this instanceof MT)) return new MT(TT);
-             lT.call(this, TT)
-           }
-           cT(4083)(MT, lT), MT.prototype._transform = function(TT, kT, cT) {
-             cT(null, TT)
-           }
- ... (7 more removed lines; see GitHub link above)
+             Cx = {
+               readContext: jm,
+               useCallback: Rx,
+               useContext: jm,
+               useEffect: px,
+               useImperativeHandle: Jx,
+               useLayoutEffect: Gx,
+               useMemo: Ux,
+               useReducer: vx,
+               useRef: Mx,
+               useState: function() {
+                 return vx(tx)
+               },
+               useDebugValue: kx,
+               useDeferredValue: function(qq) {
+                 var Eq = vx(tx),
+ ... (21 more added lines; see GitHub link above)
```

#### 396. `bundles/bloxd.io/main.js` (Changed code · before: `L20784-L20839` → after: `L5996-L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5996-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L5996-L5997) · [Before (L20784-L20839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20784-L20839)

```diff
-             KT = cT(4107),
-             OT = cT(3719).Ov,
-             yT = cT.g.Uint8Array || function() {};
-           var fT, xT = cT(4112);
-           fT = xT && xT.debuglog ? xT.debuglog("stream") : function() {};
-           var IT, AT, CT, jT = cT(4115),
-             vT = cT(4126),
-             tT = cT(4128).getHighWaterMark,
-             hT = cT(4134).e,
-             NT = hT.ERR_INVALID_ARG_TYPE,
-             QT = hT.ERR_STREAM_PUSH_AFTER_EOF,
-             ST = hT.ERR_METHOD_NOT_IMPLEMENTED,
-             DT = hT.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
-           cT(4083)(PT, KT);
-           var aT = vT.errorOrDestroy,
-             FT = ["error", "close", "destroy", "pause", "resume"];
- ... (40 more removed lines; see GitHub link above)
+             Ix = Qq.ReactCurrentOwner,
+             ex = !1;
```

#### 397. `bundles/bloxd.io/main.js` (Changed code · before: `L20842-L20883` → after: `L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6000) · [Before (L20842-L20883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20842-L20883)

```diff
-             kT.flowing && 0 === kT.length && !kT.sync ? (kT.awaitDrain = 0, TT.emit("data", cT)) : (kT.length += kT.objectMode ? 1 : cT.length, lT ? kT.buffer.unshift(cT) : kT.buffer.push(cT), kT.needReadable && JT(TT)), HT(TT, kT)
-           }
-           Object.defineProperty(PT.prototype, "destroyed", {
-             enumerable: !1,
-             get: function() {
-               return void 0 !== this._readableState && this._readableState.destroyed
-             },
-             set: function(TT) {
-               this._readableState && (this._readableState.destroyed = TT)
-             }
-           }), PT.prototype.destroy = vT.destroy, PT.prototype._undestroy = vT.undestroy, PT.prototype._destroy = function(TT, kT) {
-             kT(TT)
-           }, PT.prototype.push = function(TT, kT) {
-             var cT, lT = this._readableState;
-             return lT.objectMode ? cT = !0 : "string" === typeof TT && ((kT = kT || lT.defaultEncoding) !== lT.encoding && (TT = OT.from(TT, kT), kT = ""), cT = !0), wT(this, TT, kT, !1, cT)
-           }, PT.prototype.unshift = function(TT) {
- ... (26 more removed lines; see GitHub link above)
+             Eq.child = null === qq ? Jm(Eq, null, gq, Yq) : Lm(Eq, qq.child, gq, Yq)
```

#### 398. `bundles/bloxd.io/main.js` (Changed code · before: `L20886-L20887` → after: `L6003-L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6003-L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6003-L6006) · [Before (L20886-L20887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20886-L20887)

```diff
-           function HT(TT, kT) {
-             kT.readingMore || (kT.readingMore = !0, process.nextTick(eT, TT, kT))
+           function qA(qq, Eq, gq, Yq, lq) {
+             gq = gq.render;
+             var Oq = Eq.ref;
+             return dm(Eq, lq), Yq = Px(qq, Eq, gq, Yq, Oq, lq), null === qq || ex ? (Eq.flags |= 1, Dx(qq, Eq, Yq, lq), Eq.child) : (Eq.updateQueue = qq.updateQueue, Eq.flags &= -517, qq.lanes &= ~lq, QA(qq, Eq, lq))
```

#### 399. `bundles/bloxd.io/main.js` (Changed code · before: `L20890-L20893` → after: `L6009-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6009-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6009-L6012) · [Before (L20890-L20893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20890-L20893)

```diff
-           function eT(TT, kT) {
-             for (; !kT.reading && !kT.ended && (kT.length < kT.highWaterMark || kT.flowing && 0 === kT.length);) {
-               var cT = kT.length;
-               if (fT("maybeReadMore read 0"), TT.read(0), cT === kT.length) break
+           function EA(qq, Eq, gq, Yq, lq, Oq) {
+             if (null === qq) {
+               var mq = gq.type;
+               return "function" !== typeof mq || Bu(mq) || void 0 !== mq.defaultProps || null !== gq.compare || void 0 !== gq.defaultProps ? ((qq = Nu(gq.type, null, Yq, Eq, Eq.mode, Oq)).ref = Eq.ref, qq.return = Eq, Eq.child = qq) : (Eq.tag = 15, Eq.type = mq, gA(qq, Eq, mq, Yq … [truncated]
```

#### 400. `bundles/bloxd.io/main.js` (Changed code · before: `L20895-L20900` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6014) · [Before (L20895-L20900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20895-L20900)

```diff
-             kT.readingMore = !1
-           }
- 
-           function GT(TT) {
-             var kT = TT._readableState;
-             kT.readableListening = TT.listenerCount("readable") > 0, kT.resumeScheduled && !kT.paused ? kT.flowing = !0 : TT.listenerCount("data") > 0 && TT.resume()
+             return mq = qq.child, 0 === (lq & Oq) && (lq = mq.memoizedProps, (gq = null !== (gq = gq.compare) ? gq : ol)(lq, Yq) && qq.ref === Eq.ref) ? QA(qq, Eq, Oq) : (Eq.flags |= 1, (qq = Wu(mq, Yq)).ref = Eq.ref, qq.return = Eq, Eq.child = qq)
```

#### 401. `bundles/bloxd.io/main.js` (Changed code · before: `L20903-L20908` → after: `L6017-L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6017-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6017-L6022) · [Before (L20903-L20908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20903-L20908)

```diff
-           function VT(TT) {
-             fT("readable nexttick read 0"), TT.read(0)
-           }
- 
-           function ET(TT, kT) {
-             fT("resume", kT.reading), kT.reading || TT.read(0), kT.resumeScheduled = !1, TT.emit("resume"), ZT(TT), kT.flowing && !kT.reading && TT.read(0)
+           function gA(qq, Eq, gq, Yq, lq, Oq) {
+             if (null !== qq && ol(qq.memoizedProps, Yq) && qq.ref === Eq.ref) {
+               if (ex = !1, 0 === (Oq & lq)) return Eq.lanes = qq.lanes, QA(qq, Eq, Oq);
+               0 !== (16384 & qq.flags) && (ex = !0)
+             }
+             return OA(qq, Eq, gq, Yq, Oq)
```

#### 402. `bundles/bloxd.io/main.js` (Changed code · before: `L20911-L20913` → after: `L6025-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6025-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6025-L6042) · [Before (L20911-L20913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20911-L20913)

```diff
-           function ZT(TT) {
-             var kT = TT._readableState;
-             for (fT("flow", kT.flowing); kT.flowing && null !== TT.read(););
+           function YA(qq, Eq, gq) {
+             var Yq = Eq.pendingProps,
+               lq = Yq.children,
+               Oq = null !== qq ? qq.memoizedState : null;
+             if ("hidden" === Yq.mode || "unstable-defer-without-hiding" === Yq.mode)
+               if (0 === (4 & Eq.mode)) Eq.memoizedState = {
+                 baseLanes: 0
+               }, kc(Eq, gq);
+               else {
+                 if (0 === (1073741824 & gq)) return qq = null !== Oq ? Oq.baseLanes | gq : gq, Eq.lanes = Eq.childLanes = 1073741824, Eq.memoizedState = {
+                   baseLanes: qq
+                 }, kc(Eq, qq), null;
+                 Eq.memoizedState = {
+                   baseLanes: 0
+                 }, kc(Eq, null !== Oq ? Oq.baseLanes : gq)
+               }
+ ... (2 more added lines; see GitHub link above)
```

#### 403. `bundles/bloxd.io/main.js` (Changed code · before: `L20917-L20918` → after: `L6046-L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6046-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6046-L6047) · [Before (L20917-L20918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20917-L20918)

```diff
-             return 0 === kT.length ? null : (kT.objectMode ? cT = kT.buffer.shift() : !TT || TT >= kT.length ? (cT = kT.pj ? kT.buffer.join("") : 1 === kT.buffer.length ? kT.buffer.first() : kT.buffer.concat(kT.length), kT.buffer.clear()) : cT = kT.buffer.consume(TT, kT.pj), cT);
-             var cT
+             var gq = Eq.ref;
+             (null === qq && null !== gq || null !== qq && qq.ref !== gq) && (Eq.flags |= 128)
```

#### 404. `bundles/bloxd.io/main.js` (Changed code · before: `L20921-L20923` → after: `L6050-L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6050-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6050-L6052) · [Before (L20921-L20923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20921-L20923)

```diff
-           function XT(TT) {
-             var kT = TT._readableState;
-             fT("endReadable", kT.endEmitted), kT.endEmitted || (kT.ended = !0, process.nextTick(dT, kT, TT))
+           function OA(qq, Eq, gq, Yq, lq) {
+             var Oq = hO(gq) ? rO : yO.current;
+             return Oq = vO(Eq, Oq), dm(Eq, lq), gq = Px(qq, Eq, gq, Yq, Oq, lq), null === qq || ex ? (Eq.flags |= 1, Dx(qq, Eq, gq, lq), Eq.child) : (Eq.updateQueue = qq.updateQueue, Eq.flags &= -517, qq.lanes &= ~lq, QA(qq, Eq, lq))
```

#### 405. `bundles/bloxd.io/main.js` (Changed code · before: `L20926-L20929` → after: `L6055-L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6055-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6055-L6078) · [Before (L20926-L20929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20926-L20929)

```diff
-           function dT(TT, kT) {
-             if (fT("endReadableNT", TT.endEmitted, TT.length), !TT.endEmitted && 0 === TT.length && (TT.endEmitted = !0, kT.readable = !1, kT.emit("end"), TT.autoDestroy)) {
-               var cT = kT._writableState;
-               (!cT || cT.autoDestroy && cT.finished) && kT.destroy()
+           function mA(qq, Eq, gq, Yq, lq) {
+             if (hO(gq)) {
+               var Oq = !0;
+               ZO(Eq)
+             } else Oq = !1;
+             if (dm(Eq, lq), null === Eq.stateNode) null !== qq && (qq.alternate = null, Eq.alternate = null, Eq.flags |= 2), fm(Eq, gq, Yq), Tm(Eq, gq, Yq, lq), Yq = !0;
+             else if (null === qq) {
+               var mq = Eq.stateNode,
+                 xq = Eq.memoizedProps;
+               mq.props = xq;
+               var Aq = mq.context,
+                 cq = gq.contextType;
+               "object" === typeof cq && null !== cq ? cq = jm(cq) : cq = vO(Eq, cq = hO(gq) ? rO : yO.current);
+               var uq = gq.getDerivedStateFromProps,
+                 Bq = "function" === typeof uq || "function" === typeof mq.getSnapshotBeforeUpdate;
+               Bq || "function" !== typeof mq.UNSAFE_componentWillReceiveProps && "function" !== typeof mq.componentWillReceiveProps || (xq !== Yq || Aq !== cq) && Mm(Eq, mq, Yq, cq), Hm = !1;
+ ... (8 more added lines; see GitHub link above)
```

#### 406. `bundles/bloxd.io/main.js` (Changed code · before: `L20933-L21108` → after: `L6083-L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6083-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6083-L6089) · [Before (L20933-L21108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L20933-L21108)

```diff
-           function LT(TT, kT) {
-             for (var cT = 0, lT = TT.length; cT < lT; cT++)
-               if (TT[cT] === kT) return cT;
-             return -1
-           }
-           PT.prototype.read = function(TT) {
-             fT("read", TT), TT = parseInt(TT, 10);
-             var kT = this._readableState,
-               cT = TT;
-             if (0 !== TT && (kT.emittedReadable = !1), 0 === TT && kT.needReadable && ((0 !== kT.highWaterMark ? kT.length >= kT.highWaterMark : kT.length > 0) || kT.ended)) return fT("read: emitReadable", kT.length, kT.ended), 0 === kT.length && kT.ended ? XT(this) : JT(this), n … [truncated]
-             if (0 === (TT = zT(TT, kT)) && kT.ended) return 0 === kT.length && XT(this), null;
-             var lT, MT = kT.needReadable;
-             return fT("need readable", MT), (0 === kT.length || kT.length - TT < kT.highWaterMark) && fT("length less than watermark", MT = !0), kT.ended || kT.reading ? fT("reading or ended", MT = !1) : MT && (fT("do read"), kT.reading = !0, kT.sync = !0, 0 === kT.length && (kT. … [truncated]
-           }, PT.prototype._read = function(TT) {
-             aT(this, new ST("_read()"))
-           }, PT.prototype.pipe = function(TT, kT) {
- ... (160 more removed lines; see GitHub link above)
+           function xA(qq, Eq, gq, Yq, lq, Oq) {
+             lA(qq, Eq);
+             var mq = 0 !== (64 & Eq.flags);
+             if (!Yq && !mq) return lq && fO(Eq, gq, !1), QA(qq, Eq, Oq);
+             Yq = Eq.stateNode, Ix.current = Eq;
+             var xq = mq && "function" !== typeof gq.getDerivedStateFromError ? null : Yq.render();
+             return Eq.flags |= 1, null !== qq && mq ? (Eq.child = Lm(Eq, qq.child, null, Oq), Eq.child = Lm(Eq, null, xq, Oq)) : Dx(qq, Eq, xq, Oq), Eq.memoizedState = Yq.state, lq && fO(Eq, gq, !0), Eq.child
```

#### 407. `bundles/bloxd.io/main.js` (Changed code · before: `L21112-L21127` → after: `L6093-L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6093-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6093-L6094) · [Before (L21112-L21127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21112-L21127)

```diff
-             if (!(this instanceof IT)) return new IT(TT);
-             fT.call(this, TT), this._transformState = {
-               afterTransform: xT.bind(this),
-               needTransform: !1,
-               transforming: !1,
-               writecb: null,
-               writechunk: null,
-               writeencoding: null
-             }, this._readableState.needReadable = !0, this._readableState.sync = !1, TT && ("function" === typeof TT.transform && (this._transform = TT.transform), "function" === typeof TT.flush && (this._flush = TT.flush)), this.on("prefinish", AT)
-           }
- 
-           function AT() {
-             var TT = this;
-             "function" !== typeof this._flush || this._readableState.destroyed ? CT(this, null, null) : this._flush((function(kT, cT) {
-               CT(TT, kT, cT)
-             }))
+             var Eq = qq.stateNode;
+             Eq.pendingContext ? bO(0, Eq.pendingContext, Eq.pendingContext !== Eq.context) : Eq.context && bO(0, Eq.context, !1), Xm(qq, Eq.containerInfo)
```

#### 408. `bundles/bloxd.io/main.js` (Changed code · before: `L21131-L21168` → after: `L6102-L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6102-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6102-L6116) · [Before (L21131-L21168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21131-L21168)

```diff
-             if (kT) return TT.emit("error", kT);
-             if (null != cT && TT.push(cT), TT._writableState.length) throw new yT;
-             if (TT._transformState.transforming) throw new OT;
-             return TT.push(null)
-           }
-           cT(4083)(IT, fT), IT.prototype.push = function(TT, kT) {
-             return this._transformState.needTransform = !1, fT.prototype.push.call(this, TT, kT)
-           }, IT.prototype._transform = function(TT, kT, cT) {
-             cT(new MT("_transform()"))
-           }, IT.prototype._write = function(TT, kT, cT) {
-             var lT = this._transformState;
-             if (lT.writecb = cT, lT.writechunk = TT, lT.writeencoding = kT, !lT.transforming) {
-               var MT = this._readableState;
-               (lT.needTransform || MT.needReadable || MT.length < MT.highWaterMark) && this._read(MT.highWaterMark)
-             }
-           }, IT.prototype._read = function(TT) {
- ... (22 more removed lines; see GitHub link above)
+             var Yq, lq = Eq.pendingProps,
+               Oq = Im.current,
+               mq = !1;
+             return (Yq = 0 !== (64 & Eq.flags)) || (Yq = (null === qq || null !== qq.memoizedState) && 0 !== (2 & Oq)), Yq ? (mq = !0, Eq.flags &= -65) : null !== qq && null === qq.memoizedState || void 0 === lq.fallback || !0 === lq.unstable_avoidThisFallback || (Oq |= 1), PO(Im … [truncated]
+               baseLanes: gq
+             }, Eq.memoizedState = NA, qq) : "number" === typeof lq.unstable_expectedLoadTime ? (qq = VA(Eq, qq, Oq, gq), Eq.child.memoizedState = {
+               baseLanes: gq
+             }, Eq.memoizedState = NA, Eq.lanes = 33554432, qq) : ((gq = Vu({
+               mode: "visible",
+               children: qq
+             }, Eq.mode, gq, null)).return = Eq, Eq.child = gq)) : (qq.memoizedState, mq ? (lq = jA(qq, Eq, lq.children, lq.fallback, gq), mq = Eq.child, Oq = qq.child.memoizedState, mq.memoizedState = null === Oq ? {
+               baseLanes: gq
+             } : {
+               baseLanes: Oq.baseLanes | gq
+             }, mq.childLanes = qq.childLanes & ~gq, Eq.memoizedState = NA, lq) : (gq = dA(qq, Eq, lq.children, gq), Eq.memoizedState = null, gq))
```

#### 409. `bundles/bloxd.io/main.js` (Changed code · before: `L21191` → after: `L6119-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6119-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6119-L6126) · [Before (L21191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21191)

```diff
-           function FT() {}
+           function VA(qq, Eq, gq, Yq) {
+             var lq = qq.mode,
+               Oq = qq.child;
+             return Eq = {
+               mode: "hidden",
+               children: Eq
+             }, 0 === (2 & lq) && null !== Oq ? (Oq.childLanes = 0, Oq.pendingProps = Eq) : Oq = Vu(Eq, lq, 0, null), gq = au(gq, lq, Yq, null), Oq.return = qq, gq.return = qq, Oq.sibling = gq, qq.child = Oq, gq
+           }
```

#### 410. `bundles/bloxd.io/main.js` (Changed code · before: `L21193-L21212` → after: `L6128-L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6128-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6128-L6133) · [Before (L21193-L21212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21193-L21212)

```diff
-           function rT(TT, kT, KT) {
-             MT = MT || cT(4138), TT = TT || {}, "boolean" !== typeof KT && (KT = kT instanceof MT), this.objectMode = !!TT.objectMode, KT && (this.objectMode = this.objectMode || !!TT.writableObjectMode), this.highWaterMark = AT(this, TT, "writableHighWaterMark", KT), this.finalC … [truncated]
-             var OT = !1 === TT.decodeStrings;
-             this.decodeStrings = !OT, this.defaultEncoding = TT.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(TT) {
-               ! function(TT, kT) {
-                 var cT = TT._writableState,
-                   lT = cT.sync,
-                   MT = cT.writecb;
-                 if ("function" !== typeof MT) throw new tT;
-                 if (function(TT) {
-                     TT.writing = !1, TT.writecb = null, TT.length -= TT.writelen, TT.writelen = 0
-                   }(cT), kT) ! function(TT, kT, cT, lT, MT) {
-                   --kT.pendingcb, cT ? (process.nextTick(MT, lT), process.nextTick(oT, TT, kT), TT._writableState.errorEmitted = !0, aT(TT, lT)) : (MT(lT), TT._writableState.errorEmitted = !0, aT(TT, lT), oT(TT, kT))
-                 }(TT, cT, lT, kT, MT);
-                 else {
-                   var KT = zT(cT) || TT.destroyed;
- ... (4 more removed lines; see GitHub link above)
+           function dA(qq, Eq, gq, Yq) {
+             var lq = qq.child;
+             return qq = lq.sibling, gq = Wu(lq, {
+               mode: "visible",
+               children: gq
+             }), 0 === (2 & Eq.mode) && (gq.lanes = Yq), gq.return = Eq, gq.sibling = null, null !== qq && (qq.nextEffect = null, qq.flags = 8, Eq.firstEffect = Eq.lastEffect = qq), Eq.child = gq
```

#### 411. `bundles/bloxd.io/main.js` (Changed code · before: `L21215-L21218` → after: `L6136-L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6136-L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6136-L6144) · [Before (L21215-L21218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21215-L21218)

```diff
-           function PT(TT) {
-             var kT = this instanceof(MT = MT || cT(4138));
-             if (!kT && !xT.call(PT, this)) return new PT(TT);
-             this._writableState = new rT(TT, this, kT), this.writable = !0, TT && ("function" === typeof TT.write && (this._write = TT.write), "function" === typeof TT.writev && (this._writev = TT.writev), "function" === typeof TT.destroy && (this._destroy = TT.destroy), "functio … [truncated]
+           function jA(qq, Eq, gq, Yq, lq) {
+             var Oq = Eq.mode,
+               mq = qq.child;
+             qq = mq.sibling;
+             var xq = {
+               mode: "hidden",
+               children: gq
+             };
+             return 0 === (2 & Oq) && Eq.child !== mq ? ((gq = Eq.child).childLanes = 0, gq.pendingProps = xq, null !== (mq = gq.lastEffect) ? (Eq.firstEffect = gq.firstEffect, Eq.lastEffect = mq, mq.nextEffect = null) : Eq.firstEffect = Eq.lastEffect = null) : gq = Wu(mq, xq), nu … [truncated]
```

#### 412. `bundles/bloxd.io/main.js` (Changed code · before: `L21221-L21222` → after: `L6147-L6150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6147-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6147-L6150) · [Before (L21221-L21222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21221-L21222)

```diff
-           function wT(TT, kT, cT, lT, MT, KT, OT) {
-             kT.writelen = lT, kT.writecb = OT, kT.writing = !0, kT.sync = !0, kT.destroyed ? kT.onwrite(new NT("write")) : cT ? TT._writev(MT, kT.onwrite) : TT._write(MT, KT, kT.onwrite), kT.sync = !1
+           function HA(qq, Eq) {
+             qq.lanes |= Eq;
+             var gq = qq.alternate;
+             null !== gq && (gq.lanes |= Eq), Vm(qq.return, Eq)
```

#### 413. `bundles/bloxd.io/main.js` (Changed code · before: `L21225-L21228` → after: `L6153-L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6153-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6153-L6163) · [Before (L21225-L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21225-L21228)

```diff
-           function mT(TT, kT, cT, lT) {
-             cT || function(TT, kT) {
-               0 === kT.length && kT.needDrain && (kT.needDrain = !1, TT.emit("drain"))
-             }(TT, kT), kT.pendingcb--, lT(), oT(TT, kT)
+           function oA(qq, Eq, gq, Yq, lq, Oq) {
+             var mq = qq.memoizedState;
+             null === mq ? qq.memoizedState = {
+               isBackwards: Eq,
+               Ma: null,
+               renderingStartTime: 0,
+               last: Yq,
+               tail: gq,
+               tailMode: lq,
+               lastEffect: Oq
+             } : (mq.isBackwards = Eq, mq.Ma = null, mq.renderingStartTime = 0, mq.last = Yq, mq.tail = gq, mq.tailMode = lq, mq.lastEffect = Oq)
```

#### 414. `bundles/bloxd.io/main.js` (Changed code · before: `L21231-L21246` → after: `L6166-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6166-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6166-L6184) · [Before (L21231-L21246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21231-L21246)

```diff
-           function bT(TT, kT) {
-             kT.bufferProcessing = !0;
-             var cT = kT.bufferedRequest;
-             if (TT._writev && cT && cT.next) {
-               var MT = kT.bufferedRequestCount,
-                 KT = new Array(MT),
-                 OT = kT.corkedRequestsFree;
-               OT.entry = cT;
-               for (var yT = 0, fT = !0; cT;) KT[yT] = cT, cT.isBuf || (fT = !1), cT = cT.next, yT += 1;
-               KT.allBuffers = fT, wT(TT, kT, !0, kT.length, KT, "", OT.finish), kT.pendingcb++, kT.lastBufferedRequest = null, OT.next ? (kT.corkedRequestsFree = OT.next, OT.next = null) : kT.corkedRequestsFree = new lT(kT), kT.bufferedRequestCount = 0
-             } else {
-               for (; cT;) {
-                 var xT = cT.chunk,
-                   IT = cT.encoding,
-                   AT = cT.callback;
-                 if (wT(TT, kT, !1, kT.objectMode ? 1 : xT.length, xT, IT, AT), cT = cT.next, kT.bufferedRequestCount--, kT.writing) break
+           function PA(qq, Eq, gq) {
+             var Yq = Eq.pendingProps,
+               lq = Yq.revealOrder,
+               Oq = Yq.tail;
+             if (Dx(qq, Eq, Yq.children, gq), 0 !== (2 & (Yq = Im.current))) Yq = 1 & Yq | 2, Eq.flags |= 64;
+             else {
+               if (null !== qq && 0 !== (64 & qq.flags)) qq: for (qq = Eq.child; null !== qq;) {
+                 if (13 === qq.tag) null !== qq.memoizedState && HA(qq, gq);
+                 else if (19 === qq.tag) HA(qq, gq);
+                 else if (null !== qq.child) {
+                   qq.child.return = qq, qq = qq.child;
+                   continue
+                 }
+                 if (qq === Eq) break qq;
+                 for (; null === qq.sibling;) {
+                   if (null === qq.return || qq.return === Eq) break qq;
+ ... (3 more added lines; see GitHub link above)
```

#### 415. `bundles/bloxd.io/main.js` (Changed code · before: `L21248` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6186) · [Before (L21248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21248)

```diff
-               null === cT && (kT.lastBufferedRequest = null)
+               Yq &= 1
```

#### 416. `bundles/bloxd.io/main.js` (Changed code · before: `L21250-L21254` → after: `L6188-L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6188-L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6188-L6210) · [Before (L21250-L21254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21250-L21254)

```diff
-             kT.bufferedRequest = cT, kT.bufferProcessing = !1
-           }
- 
-           function zT(TT) {
-             return TT.ending && 0 === TT.length && null === TT.bufferedRequest && !TT.finished && !TT.writing
+             if (PO(Im, Yq), 0 === (2 & Eq.mode)) Eq.memoizedState = null;
+             else switch (lq) {
+               case "forwards":
+                 for (gq = Eq.child, lq = null; null !== gq;) null !== (qq = gq.alternate) && null === em(qq) && (lq = gq), gq = gq.sibling;
+                 null === (gq = lq) ? (lq = Eq.child, Eq.child = null) : (lq = gq.sibling, gq.sibling = null), oA(Eq, !1, lq, gq, Oq, Eq.lastEffect);
+                 break;
+               case "backwards":
+                 for (gq = null, lq = Eq.child, Eq.child = null; null !== lq;) {
+                   if (null !== (qq = lq.alternate) && null === em(qq)) {
+                     Eq.child = lq;
+                     break
+                   }
+                   qq = lq.sibling, lq.sibling = gq, gq = lq, lq = qq
+                 }
+                 oA(Eq, !0, gq, null, Oq, Eq.lastEffect);
+                 break;
+ ... (7 more added lines; see GitHub link above)
```

#### 417. `bundles/bloxd.io/main.js` (Changed code · before: `L21257-L21260` → after: `L6213-L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6213-L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6213-L6222) · [Before (L21257-L21260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21257-L21260)

```diff
-           function JT(TT, kT) {
-             TT._final((function(cT) {
-               kT.pendingcb--, cT && aT(TT, cT), kT.prefinished = !0, TT.emit("prefinish"), oT(TT, kT)
-             }))
+           function QA(qq, Eq, gq) {
+             if (null !== qq && (Eq.dependencies = qq.dependencies), Oc |= Eq.lanes, 0 !== (gq & Eq.childLanes)) {
+               if (null !== qq && Eq.child !== qq.child) throw Error(mq(153));
+               if (null !== Eq.child) {
+                 for (gq = Wu(qq = Eq.child, qq.pendingProps), Eq.child = gq, gq.return = Eq; null !== qq.sibling;) qq = qq.sibling, (gq = gq.sibling = Wu(qq, qq.pendingProps)).return = Eq;
+                 gq.sibling = null
+               }
+               return Eq.child
+             }
+             return null
```

#### 418. `bundles/bloxd.io/main.js` (Changed code · before: `L21264-L21269` → after: `L6226-L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6226-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6226-L6235) · [Before (L21264-L21269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21264-L21269)

```diff
-             var cT = zT(kT);
-             if (cT && (function(TT, kT) {
-                 kT.prefinished || kT.finalCalled || ("function" !== typeof TT._final || kT.destroyed ? (kT.prefinished = !0, TT.emit("prefinish")) : (kT.pendingcb++, kT.finalCalled = !0, process.nextTick(JT, TT, kT)))
-               }(TT, kT), 0 === kT.pendingcb && (kT.finished = !0, TT.emit("finish"), kT.autoDestroy))) {
-               var lT = TT._readableState;
-               (!lT || lT.autoDestroy && lT.endEmitted) && TT.destroy()
+             if (!Ex) switch (qq.tailMode) {
+               case "hidden":
+                 Eq = qq.tail;
+                 for (var gq = null; null !== Eq;) null !== Eq.alternate && (gq = Eq), Eq = Eq.sibling;
+                 null === gq ? qq.tail = null : gq.sibling = null;
+                 break;
+               case "collapsed":
+                 gq = qq.tail;
+                 for (var Yq = null; null !== gq;) null !== gq.alternate && (Yq = gq), gq = gq.sibling;
+                 null === Yq ? Eq || null === qq.tail ? qq.tail = null : qq.tail.sibling = null : Yq.sibling = null
```

#### 419. `bundles/bloxd.io/main.js` (Changed code · before: `L21273-L21311` → after: `L6238-L6391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6238-L6391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6238-L6391) · [Before (L21273-L21311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21273-L21311)

```diff
-           cT(4083)(PT, OT), rT.prototype.getBuffer = function() {
-               for (var TT = this.bufferedRequest, kT = []; TT;) kT.push(TT), TT = TT.next;
-               return kT
-             },
-             function() {
-               try {
-                 Object.defineProperty(rT.prototype, "buffer", {
-                   get: KT.deprecate((function() {
-                     return this.getBuffer()
-                   }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
-                 })
-               } catch (TT) {}
-             }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (xT = Function.prototype[Symbol.hasInstance], Object.defineProperty(PT, Symbol.hasInstance, {
-               value: function(TT) {
-                 return !!xT.call(this, TT) || this === PT && (TT && TT._writableState instanceof rT)
-               }
- ... (23 more removed lines; see GitHub link above)
+ 
+           function tA(qq, Eq, gq) {
+             var Yq = Eq.pendingProps;
+             switch (Eq.tag) {
+               case 2:
+               case 16:
+               case 15:
+               case 0:
+               case 11:
+               case 7:
+               case 8:
+               case 12:
+               case 9:
+               case 14:
+                 return null;
+               case 1:
+ ... (138 more added lines; see GitHub link above)
```

#### 420. `bundles/bloxd.io/main.js` (Changed code · before: `L21313-L21430` → after: `L6393-L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6393-L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6393-L6423) · [Before (L21313-L21430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21313-L21430)

```diff
-                 var fT = kT.objectMode ? 1 : lT.length;
-                 kT.length += fT;
-                 var xT = kT.length < kT.highWaterMark;
-                 xT || (kT.needDrain = !0);
-                 if (kT.writing || kT.corked) {
-                   var IT = kT.lastBufferedRequest;
-                   kT.lastBufferedRequest = {
-                     chunk: lT,
-                     encoding: MT,
-                     isBuf: cT,
-                     callback: KT,
-                     next: null
-                   }, IT ? IT.next = kT.lastBufferedRequest : kT.bufferedRequest = kT.lastBufferedRequest, kT.bufferedRequestCount += 1
-                 } else wT(TT, kT, !1, fT, lT, MT, KT);
-                 return xT
-               }(this, MT, OT, TT, kT, cT)), KT
- ... (102 more removed lines; see GitHub link above)
+                 return null;
+               case 6:
+                 if (qq && null != Eq.stateNode) WA(qq, Eq, qq.memoizedProps, Yq);
+                 else {
+                   if ("string" !== typeof Yq && null === Eq.stateNode) throw Error(mq(166));
+                   gq = sm(Fm.current), sm(Rm.current), mx(Eq) ? (Yq = Eq.stateNode, gq = Eq.memoizedProps, Yq[xO] = Eq, Yq.nodeValue !== gq && (Eq.flags |= 4)) : ((Yq = (9 === gq.nodeType ? gq : gq.ownerDocument).createTextNode(Yq))[xO] = Eq, Eq.stateNode = Yq)
+                 }
+                 return null;
+               case 13:
+                 return oO(Im), Yq = Eq.memoizedState, 0 !== (64 & Eq.flags) ? (Eq.lanes = gq, Eq) : (Yq = null !== Yq, gq = !1, null === qq ? void 0 !== Eq.memoizedProps.fallback && mx(Eq) : gq = null !== qq.memoizedState, Yq && !gq && 0 !== (2 & Eq.mode) && (null === qq && !0 != … [truncated]
+               case 4:
+                 return wm(), uA(Eq), null === qq && Jl(Eq.stateNode.containerInfo), null;
+               case 10:
+                 return am(Eq), null;
+               case 19:
+                 if (oO(Im), null === (Yq = Eq.memoizedState)) return null;
+ ... (15 more added lines; see GitHub link above)
```

#### 421. `bundles/bloxd.io/main.js` (Changed code · before: `L21434-L21436` → after: `L6426-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6426-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6426-L6430) · [Before (L21434-L21436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21434-L21436)

```diff
-                   var MT = this[CT].read();
-                   if (null !== MT) return Promise.resolve(jT(MT, !1));
-                   cT = new Promise(this[AT])
+                   if (!xq)
+                     if (null !== (qq = em(cq))) {
+                       if (Eq.flags |= 64, xq = !0, null !== (gq = qq.updateQueue) && (Eq.updateQueue = gq, Eq.flags |= 4), yA(Yq, !0), null === Yq.tail && "hidden" === Yq.tailMode && !cq.alternate && !Ex) return null !== (Eq = Eq.lastEffect = Yq.lastEffect) && (Eq.nextEffect = nu … [truncated]
+                     } else 2 * qm() - Yq.renderingStartTime > uc && 1073741824 !== gq && (Eq.flags |= 64, xq = !0, yA(Yq, !1), Eq.lanes = 33554432);
+                   Yq.isBackwards ? (cq.sibling = Eq.child, Eq.child = cq) : (null !== (gq = Yq.last) ? gq.sibling = cq : Eq.child = cq, Yq.last = cq)
```

#### 422. `bundles/bloxd.io/main.js` (Changed code · before: `L21438-L21517` → after: `L6432-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6432-L6435) · [Before (L21438-L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21438-L21517)

```diff
-                 return this[IT] = cT, cT
-               }
-             }, Symbol.asyncIterator, (function() {
-               return this
-             })), MT(lT, "return", (function() {
-               var TT = this;
-               return new Promise((function(kT, cT) {
-                 TT[CT].destroy(null, (function(TT) {
-                   TT ? cT(TT) : kT(jT(void 0, !0))
-                 }))
-               }))
-             })), lT), hT);
-           TT.exports = function(TT) {
-             var kT, cT = Object.create(NT, (MT(kT = {}, CT, {
-               value: TT,
-               writable: !0
- ... (64 more removed lines; see GitHub link above)
+                 return null !== Yq.tail ? (gq = Yq.tail, Yq.Ma = gq, Yq.tail = gq.sibling, Yq.lastEffect = Eq.lastEffect, Yq.renderingStartTime = qm(), gq.sibling = null, Eq = Im.current, PO(Im, xq ? 1 & Eq | 2 : 1 & Eq), gq) : null;
+               case 23:
+               case 24:
+                 return Rc(), null !== qq && null !== qq.memoizedState !== (null !== Eq.memoizedState) && "unstable-defer-without-hiding" !== Yq.mode && (Eq.flags |= 4), null
```

#### 423. `bundles/bloxd.io/main.js` (Changed code · before: `L21519-L21631` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6437) · [Before (L21519-L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21519-L21631)

```diff
-             var kT, cT, xT;
-             return kT = TT, cT = [{
-               key: "push",
-               value: function(TT) {
-                 var kT = {
-                   data: TT,
-                   next: null
-                 };
-                 this.length > 0 ? this.tail.next = kT : this.head = kT, this.tail = kT, ++this.length
-               }
-             }, {
-               key: "unshift",
-               value: function(TT) {
-                 var kT = {
-                   data: TT,
-                   next: this.head
- ... (97 more removed lines; see GitHub link above)
+             throw Error(mq(156, Eq.tag))
```

#### 424. `bundles/bloxd.io/main.js` (Changed code · before: `L21635-L21656` → after: `L6441-L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6441-L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6441-L6463) · [Before (L21635-L21656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21635-L21656)

```diff
-             TT._writableState && !TT._writableState.emitClose || TT._readableState && !TT._readableState.emitClose || TT.emit("close")
-           }
- 
-           function lT(TT, kT) {
-             TT.emit("error", kT)
-           }
-           TT.exports = {
-             destroy: function(TT, MT) {
-               var KT = this,
-                 OT = this._readableState && this._readableState.destroyed,
-                 yT = this._writableState && this._writableState.destroyed;
-               return OT || yT ? (MT ? MT(TT) : TT && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(lT, this, TT)) : process.nextTick(lT, this, TT)), this) : (this._readableState && (this._readableState.destroye … [truncated]
-                 !MT && TT ? KT._writableState ? KT._writableState.errorEmitted ? process.nextTick(cT, KT) : (KT._writableState.errorEmitted = !0, process.nextTick(kT, KT, TT)) : process.nextTick(kT, KT, TT) : MT ? (process.nextTick(cT, KT), MT(TT)) : process.nextTick(cT, KT)
-               })), this)
-             },
-             undestroy: function() {
- ... (6 more removed lines; see GitHub link above)
+             switch (qq.tag) {
+               case 1:
+                 hO(qq.type) && nO();
+                 var Eq = qq.flags;
+                 return 4096 & Eq ? (qq.flags = -4097 & Eq | 64, qq) : null;
+               case 3:
+                 if (wm(), oO(tO), oO(yO), cx(), 0 !== (64 & (Eq = qq.flags))) throw Error(mq(285));
+                 return qq.flags = -4097 & Eq | 64, qq;
+               case 5:
+                 return Cm(qq), null;
+               case 13:
+                 return oO(Im), 4096 & (Eq = qq.flags) ? (qq.flags = -4097 & Eq | 64, qq) : null;
+               case 19:
+                 return oO(Im), null;
+               case 4:
+                 return wm(), null;
+ ... (7 more added lines; see GitHub link above)
```

#### 425. `bundles/bloxd.io/main.js` (Changed code · before: `L21913-L21917` → after: `L6468-L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6468-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6468-L6482) · [Before (L21913-L21917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21913-L21917)

```diff
-             return kT ? kT.map((kT => `${(0,lT.caesarCipher)(TT,0,kT)} | [${kT}]`)) : []
-           }
- 
-           function fT(TT) {
-             return [...KT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250)].map((kT => `${(0,lT.caesarCipher)(TT,0,kT)} | [${kT}]`))
+             try {
+               var gq = "",
+                 Yq = Eq;
+               do {
+                 gq += wq(Yq), Yq = Yq.return
+               } while (Yq);
+               var lq = gq
+             } catch (Oq) {
+               lq = "\nError generating stack: " + Oq.message + "\n" + Oq.stack
+             }
+             return {
+               value: qq,
+               source: Eq,
+               stack: lq
+             }
```

#### 426. `bundles/bloxd.io/main.js` (Changed code · before: `L21921` → after: `L6486-L6492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6486-L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6486-L6492) · [Before (L21921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21921)

```diff
-             return "".padEnd(kT, TT)
+             try {
+               console.error(Eq.value)
+             } catch (gq) {
+               setTimeout((function() {
+                 throw gq
+               }))
+             }
```

#### 427. `bundles/bloxd.io/main.js` (Changed code · before: `L21924-L21927` → after: `L6558-L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6558-L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6558-L6565) · [Before (L21924-L21927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21924-L21927)

```diff
-           function IT() {
-             const TT = [];
-             for (let kT = 33, cT = 0; kT < 127; kT++, cT++) TT[cT] = String.fromCharCode(kT);
-             return TT
+           function bA(qq, Eq, gq) {
+             (gq = Qm(-1, gq)).tag = 3, gq.payload = {
+               element: null
+             };
+             var Yq = Eq.value;
+             return gq.callback = function() {
+               ac || (ac = !0, Vc = Yq), hA(0, Eq)
+             }, gq
```

#### 428. `bundles/bloxd.io/main.js` (Changed code · before: `L21930-L21931` → after: `L6568-L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6568-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6568-L6584) · [Before (L21930-L21931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21930-L21931)

```diff
-           function AT() {
-             return Array.from(IT().values())
+           function iA(qq, Eq, gq) {
+             (gq = Qm(-1, gq)).tag = 3;
+             var Yq = qq.type.getDerivedStateFromError;
+             if ("function" === typeof Yq) {
+               var lq = Eq.value;
+               gq.payload = function() {
+                 return hA(0, Eq), Yq(lq)
+               }
+             }
+             var Oq = qq.stateNode;
+             return null !== Oq && "function" === typeof Oq.componentDidCatch && (gq.callback = function() {
+               "function" !== typeof Yq && (null === dc ? dc = new Set([this]) : dc.add(this), hA(0, Eq));
+               var qq = Eq.stack;
+               this.componentDidCatch(Eq.value, {
+                 componentStack: null !== qq ? qq : ""
+               })
+ ... (1 more added lines; see GitHub link above)
```

#### 429. `bundles/bloxd.io/main.js` (Changed code · before: `L21934-L21935` → after: `L6588-L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6588-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6588-L6595) · [Before (L21934-L21935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21934-L21935)

```diff
-           function CT(TT, kT) {
-             return kT = Math.ceil(kT), TT = Math.ceil(TT), Math.floor(Math.random() * (kT - TT + 1) + TT)
+           function fA(qq) {
+             var Eq = qq.ref;
+             if (null !== Eq)
+               if ("function" === typeof Eq) try {
+                 Eq(null)
+               } catch (gq) {
+                 mu(qq, gq)
+               } else Eq.current = null
```

#### 430. `bundles/bloxd.io/main.js` (Changed code · before: `L21939-L22031` → after: `L6599-L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6599-L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6599-L6613) · [Before (L21939-L22031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L21939-L22031)

```diff
-             let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-             const lT = `input: ${TT}`,
-               MT = xT(" ", TT.length - 4);
-             return `---------- ${kT} ----------\n${cT?"":`${lT}\n${`name${MT} | rotation`}\n${xT("-",39)}\n`}`
-           }
-           kT.randomRotation = MT, kT.getUniqueRotations = KT, kT.getUniformCiphers = OT, kT.getCustomCiphers = yT, kT.getRandomCiphers = fT, kT.getRepeatedChars = xT, kT.getAlphabet = function() {
-             let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-             const kT = [],
-               cT = TT ? 123 : 91;
-             for (let lT = TT ? 97 : 65, MT = 0; lT < cT; lT++, MT++) kT[MT] = String.fromCharCode(lT);
-             return kT
-           }, kT.getAsciiTable = IT, kT.getHumanReadableAscii = AT, kT.getAsciiWithoutLetters = function() {
-             const TT = AT();
-             return TT.slice(0, 32).concat(TT.slice(91, 96)).concat(TT.slice(123, 126))
-           }, kT.rand = CT, kT.findChar = function(TT, kT) {
-             return kT.findIndex((kT => kT === TT))
- ... (77 more removed lines; see GitHub link above)
+             switch (Eq.tag) {
+               case 0:
+               case 11:
+               case 15:
+               case 22:
+               case 5:
+               case 6:
+               case 4:
+               case 17:
+                 return;
+               case 1:
+                 if (256 & Eq.flags && null !== qq) {
+                   var gq = qq.memoizedProps,
+                     Yq = qq.memoizedState;
+                   Eq = (qq = Eq.stateNode).getSnapshotBeforeUpdate(Eq.elementType === Eq.type ? gq : Am(Eq.type, gq), Yq), qq.__reactInternalSnapshotBeforeUpdate = Eq
```

#### 431. `bundles/bloxd.io/main.js` (Changed code · before: `L22033-L22041` → after: `L6615-L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6615-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6615-L6617) · [Before (L22033-L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22033-L22041)

```diff
-               } else tT = !1
-             }, cT = function(TT) {
-               hT = TT, tT || (tT = !0, aT.postMessage(null))
-             }, lT = function(TT, cT) {
-               NT = CT((function() {
-                 TT(kT.unstable_now())
-               }), cT)
-             }, MT = function() {
-               jT(NT), NT = -1
+                 return;
+               case 3:
+                 return void(256 & Eq.flags && gO(Eq.stateNode.containerInfo))
```

#### 432. `bundles/bloxd.io/main.js` (Changed code · before: `L22045-L22052` → after: `L6622-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6622-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6622-L6671) · [Before (L22045-L22052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22045-L22052)

```diff
-           function FT(TT, kT) {
-             var cT = TT.length;
-             TT.push(kT);
-             TT: for (;;) {
-               var lT = cT - 1 >>> 1,
-                 MT = TT[lT];
-               if (!(void 0 !== MT && 0 < wT(MT, kT))) break TT;
-               TT[lT] = kT, TT[cT] = MT, cT = lT
+           function TA(qq, Eq, gq) {
+             switch (gq.tag) {
+               case 0:
+               case 11:
+               case 15:
+               case 22:
+                 if (null !== (Eq = null !== (Eq = gq.updateQueue) ? Eq.lastEffect : null)) {
+                   qq = Eq = Eq.next;
+                   do {
+                     if (3 === (3 & qq.tag)) {
+                       var Yq = qq.create;
+                       qq.destroy = Yq()
+                     }
+                     qq = qq.next
+                   } while (qq !== Eq)
+                 }
+ ... (34 more added lines; see GitHub link above)
```

#### 433. `bundles/bloxd.io/main.js` (Changed code · before: `L22056-L22075` → after: `L6676-L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6676-L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6676-L6684) · [Before (L22056-L22075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22056-L22075)

```diff
-           function rT(TT) {
-             return void 0 === (TT = TT[0]) ? null : TT
-           }
- 
-           function PT(TT) {
-             var kT = TT[0];
-             if (void 0 !== kT) {
-               var cT = TT.pop();
-               if (cT !== kT) {
-                 TT[0] = cT;
-                 TT: for (var lT = 0, MT = TT.length; lT < MT;) {
-                   var KT = 2 * (lT + 1) - 1,
-                     OT = TT[KT],
-                     yT = KT + 1,
-                     fT = TT[yT];
-                   if (void 0 !== OT && 0 > wT(OT, cT)) void 0 !== fT && 0 > wT(fT, OT) ? (TT[lT] = fT, TT[yT] = cT, lT = yT) : (TT[lT] = OT, TT[KT] = cT, lT = KT);
- ... (4 more removed lines; see GitHub link above)
+           function zA(qq, Eq) {
+             for (var gq = qq;;) {
+               if (5 === gq.tag) {
+                 var Yq = gq.stateNode;
+                 if (Eq) "function" === typeof(Yq = Yq.style).setProperty ? Yq.setProperty("display", "none", "important") : Yq.display = "none";
+                 else {
+                   Yq = gq.stateNode;
+                   var lq = gq.memoizedProps.style;
+                   lq = void 0 !== lq && null !== lq && lq.hasOwnProperty("display") ? lq.display : null, Yq.style.display = tE("display", lq)
```

#### 434. `bundles/bloxd.io/main.js` (Changed code · before: `L22078` → after: `L6691-L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6691-L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6691-L6696) · [Before (L22078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22078)

```diff
-               return kT
+               if (gq === qq) break;
+               for (; null === gq.sibling;) {
+                 if (null === gq.return || gq.return === qq) return;
+                 gq = gq.return
+               }
+               gq.sibling.return = gq.return, gq = gq.sibling
```

#### 435. `bundles/bloxd.io/main.js` (Changed code · before: `L22084-L22085` → after: `L6701-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6701-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6701-L6740) · [Before (L22084-L22085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22084-L22085)

```diff
-             var cT = TT.sortIndex - kT.sortIndex;
-             return 0 !== cT ? cT : TT.id - kT.id
+             if (TO && "function" === typeof TO.onCommitFiberUnmount) try {
+               TO.onCommitFiberUnmount(MO, Eq)
+             } catch (Oq) {}
+             switch (Eq.tag) {
+               case 0:
+               case 11:
+               case 14:
+               case 15:
+               case 22:
+                 if (null !== (qq = Eq.updateQueue) && null !== (qq = qq.lastEffect)) {
+                   var gq = qq = qq.next;
+                   do {
+                     var Yq = gq,
+                       lq = Yq.destroy;
+                     if (Yq = Yq.tag, void 0 !== lq)
+                       if (0 !== (4 & Yq)) Yu(Eq, gq);
+ ... (24 more added lines; see GitHub link above)
```

#### 436. `bundles/bloxd.io/main.js` (Changed code · before: `L22097-L22104` → after: `L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6744) · [Before (L22097-L22104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22097-L22104)

```diff
-             for (var kT = rT(bT); null !== kT;) {
-               if (null === kT.callback) PT(bT);
-               else {
-                 if (!(kT.startTime <= TT)) break;
-                 PT(bT), kT.sortIndex = kT.expirationTime, FT(mT, kT)
-               }
-               kT = rT(bT)
-             }
+             qq.alternate = null, qq.child = null, qq.dependencies = null, qq.firstEffect = null, qq.lastEffect = null, qq.memoizedProps = null, qq.memoizedState = null, qq.pendingProps = null, qq.return = null, qq.updateQueue = null
```

#### 437. `bundles/bloxd.io/main.js` (Changed code · before: `L22108-L22113` → after: `L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6748) · [Before (L22108-L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22108-L22113)

```diff
-             if (GT = !1, VT(TT), !eT)
-               if (null !== rT(mT)) eT = !0, cT(ZT);
-               else {
-                 var kT = rT(bT);
-                 null !== kT && lT(ET, kT.startTime - TT)
-               }
+             return 5 === qq.tag || 3 === qq.tag || 4 === qq.tag
```

#### 438. `bundles/bloxd.io/main.js` (Changed code · before: `L22116-L22132` → after: `L6751-L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6751-L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6751-L6755) · [Before (L22116-L22132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22116-L22132)

```diff
-           function ZT(TT, cT) {
-             eT = !1, GT && (GT = !1, MT()), HT = !0;
-             var KT = oT;
-             try {
-               for (VT(cT), JT = rT(mT); null !== JT && (!(JT.expirationTime > cT) || TT && !kT.unstable_shouldYield());) {
-                 var OT = JT.callback;
-                 if ("function" === typeof OT) {
-                   JT.callback = null, oT = JT.priorityLevel;
-                   var yT = OT(JT.expirationTime <= cT);
-                   cT = kT.unstable_now(), "function" === typeof yT ? JT.callback = yT : JT === rT(mT) && PT(mT), VT(cT)
-                 } else PT(mT);
-                 JT = rT(mT)
-               }
-               if (null !== JT) var fT = !0;
-               else {
-                 var xT = rT(bT);
- ... (1 more removed lines; see GitHub link above)
+           function LA(qq) {
+             qq: {
+               for (var Eq = qq.return; null !== Eq;) {
+                 if (GA(Eq)) break qq;
+                 Eq = Eq.return
```

#### 439. `bundles/bloxd.io/main.js` (Changed code · before: `L22134-L22174` → after: `L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6757) · [Before (L22134-L22174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22134-L22174)

```diff
-               return fT
-             } finally {
-               JT = null, oT = KT, HT = !1
-             }
-           }
-           var uT = KT;
-           kT.unstable_IdlePriority = 5, kT.unstable_ImmediatePriority = 1, kT.unstable_LowPriority = 4, kT.unstable_NormalPriority = 3, kT.unstable_Profiling = null, kT.unstable_UserBlockingPriority = 2, kT.unstable_cancelCallback = function(TT) {
-             TT.callback = null
-           }, kT.unstable_continueExecution = function() {
-             eT || HT || (eT = !0, cT(ZT))
-           }, kT.unstable_getCurrentPriorityLevel = function() {
-             return oT
-           }, kT.unstable_getFirstCallbackNode = function() {
-             return rT(mT)
-           }, kT.unstable_next = function(TT) {
-             switch (oT) {
- ... (25 more removed lines; see GitHub link above)
+               throw Error(mq(160))
```

#### 440. `bundles/bloxd.io/main.js` (Changed code · before: `L22177-L22191` → after: `L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6760) · [Before (L22177-L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22177-L22191)

```diff
-             oT = TT;
-             try {
-               return kT()
-             } finally {
-               oT = cT
-             }
-           }, kT.unstable_scheduleCallback = function(TT, KT, OT) {
-             var yT = kT.unstable_now();
-             switch ("object" === typeof OT && null !== OT ? OT = "number" === typeof(OT = OT.delay) && 0 < OT ? yT + OT : yT : OT = yT, TT) {
-               case 1:
-                 var fT = -1;
-                 break;
-               case 2:
-                 fT = 250;
-                 break;
+             switch (Eq = gq.stateNode, gq.tag) {
```

#### 441. `bundles/bloxd.io/main.js` (Changed code · before: `L22193` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6762) · [Before (L22193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22193)

```diff
-                 fT = 1073741823;
+                 var Yq = !1;
```

#### 442. `bundles/bloxd.io/main.js` (Changed code · before: `L22196` → after: `L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6766) · [Before (L22196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22196)

```diff
-                 fT = 1e4;
+                 Eq = Eq.containerInfo, Yq = !0;
```

#### 443. `bundles/bloxd.io/main.js` (Changed code · before: `L22199` → after: `L6769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6769) · [Before (L22199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22199)

```diff
-                 fT = 5e3
+                 throw Error(mq(161))
```

#### 444. `bundles/bloxd.io/main.js` (Changed code · before: `L22201-L22217` → after: `L6771-L6851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6771-L6851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6771-L6851) · [Before (L22201-L22217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22201-L22217)

```diff
-             return TT = {
-               id: zT++,
-               callback: KT,
-               priorityLevel: TT,
-               startTime: OT,
-               expirationTime: fT = OT + fT,
-               sortIndex: -1
-             }, OT > yT ? (TT.sortIndex = OT, FT(bT, TT), null === rT(mT) && TT === rT(bT) && (GT ? MT() : GT = !0, lT(ET, OT - yT))) : (TT.sortIndex = fT, FT(mT, TT), eT || HT || (eT = !0, cT(ZT))), TT
-           }, kT.unstable_wrapCallback = function(TT) {
-             var kT = oT;
-             return function() {
-               var cT = oT;
-               oT = kT;
-               try {
-                 return TT.apply(this, arguments)
-               } finally {
- ... (1 more removed lines; see GitHub link above)
+             16 & gq.flags && (PE(Eq, ""), gq.flags &= -17);qq: Eq: for (gq = qq;;) {
+               for (; null === gq.sibling;) {
+                 if (null === gq.return || GA(gq.return)) {
+                   gq = null;
+                   break qq
+                 }
+                 gq = gq.return
+               }
+               for (gq.sibling.return = gq.return, gq = gq.sibling; 5 !== gq.tag && 6 !== gq.tag && 18 !== gq.tag;) {
+                 if (2 & gq.flags) continue Eq;
+                 if (null === gq.child || 4 === gq.tag) continue Eq;
+                 gq.child.return = gq, gq = gq.child
+               }
+               if (!(2 & gq.flags)) {
+                 gq = gq.stateNode;
+                 break qq
+ ... (65 more added lines; see GitHub link above)
```

#### 445. `bundles/bloxd.io/main.js` (Changed code · before: `L22221-L22297` → after: `L6856-L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6856-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6856-L6869) · [Before (L22221-L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22221-L22297)

```diff
-         },
-         101: (TT, kT, cT) => {
-           TT.exports = cT(110)
-         },
-         1456: TT => {
-           ! function() {
-             var kT = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
-               cT = TT.exports,
-               lT = function() {
-                 for (var TT, cT = [
-                     ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
-                     ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
-                     ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
-                     ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
-                     ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
-                   ], lT = 0, MT = cT.length, KT = {}; lT < MT; lT++)
- ... (61 more removed lines; see GitHub link above)
+ 
+           function UA(qq, Eq) {
+             switch (Eq.tag) {
+               case 0:
+               case 11:
+               case 14:
+               case 15:
+               case 22:
+                 var gq = Eq.updateQueue;
+                 if (null !== (gq = null !== gq ? gq.lastEffect : null)) {
+                   var Yq = gq = gq.next;
+                   do {
+                     3 === (3 & Yq.tag) && (qq = Yq.destroy, Yq.destroy = void 0, void 0 !== qq && qq()), Yq = Yq.next
+                   } while (Yq !== gq)
```

#### 446. `bundles/bloxd.io/main.js` (Changed code · before: `L22299-L22303` → after: `L6871-L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6871-L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6871-L6898) · [Before (L22299-L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22299-L22303)

```diff
-               },
-               isEnabled: {
-                 enumerable: !0,
-                 get: function() {
-                   return Boolean(kT[lT.fullscreenEnabled])
+                 return;
+               case 1:
+               case 12:
+               case 17:
+                 return;
+               case 5:
+                 if (null != (gq = Eq.stateNode)) {
+                   Yq = Eq.memoizedProps;
+                   var lq = null !== qq ? qq.memoizedProps : Yq;
+                   qq = Eq.type;
+                   var Oq = Eq.updateQueue;
+                   if (Eq.updateQueue = null, null !== Oq) {
+                     for (gq[AO] = Yq, "input" === qq && "radio" === Yq.type && null != Yq.name && YE(gq, Yq), nE(qq, lq), Eq = nE(qq, Yq), lq = 0; lq < Oq.length; lq += 2) {
+                       var xq = Oq[lq],
+                         Aq = Oq[lq + 1];
+                       "style" === xq ? rE(gq, Aq) : "dangerouslySetInnerHTML" === xq ? oE(gq, Aq) : "children" === xq ? PE(gq, Aq) : Pq(gq, xq, Aq, Eq)
+ ... (12 more added lines; see GitHub link above)
```

#### 447. `bundles/bloxd.io/main.js` (Changed code · before: `L22305-L22328` → after: `L6900-L6912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6900-L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6900-L6912) · [Before (L22305-L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22305-L22328)

```diff
-               }
-             }), cT ? TT.exports = KT : window.screenfull = KT) : cT ? TT.exports = {
-               isEnabled: !1
-             } : window.screenfull = {
-               isEnabled: !1
-             }
-           }()
-         },
-         4016: (TT, kT, cT) => {
-           var lT = cT(3802),
-             MT = cT(4023),
-             KT = cT(4027)(),
-             OT = cT(3913),
-             yT = cT(3852),
-             fT = lT("%Math.floor%");
-           TT.exports = function(TT, kT) {
- ... (8 more removed lines; see GitHub link above)
+                 return;
+               case 6:
+                 if (null === Eq.stateNode) throw Error(mq(162));
+                 return void(Eq.stateNode.nodeValue = Eq.memoizedProps);
+               case 3:
+                 return void((gq = Eq.stateNode).hydrate && (gq.hydrate = !1, hg(gq.containerInfo)));
+               case 13:
+                 return null !== Eq.memoizedState && (cc = qm(), zA(Eq.child, !0)), void FA(Eq);
+               case 19:
+                 return void FA(Eq);
+               case 23:
+               case 24:
+                 return void zA(Eq, null !== Eq.memoizedState)
```

#### 448. `bundles/bloxd.io/main.js` (Changed code · before: `L22330` → after: `L6914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6914) · [Before (L22330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22330)

```diff
-             return (lT || xT || !cT) && (KT ? MT(TT, "length", kT, !0, !0) : MT(TT, "length", kT)), TT
+             throw Error(mq(163))
```

#### 449. `bundles/bloxd.io/main.js` (Changed code · before: `L22332-L22347` → after: `L6916-L6925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6916-L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6916-L6925) · [Before (L22332-L22347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22332-L22347)

```diff
-         },
-         1652: TT => {
-           TT.exports = function(TT, kT, cT, lT) {
-             var MT = cT ? cT.call(lT, TT, kT) : void 0;
-             if (void 0 !== MT) return !!MT;
-             if (TT === kT) return !0;
-             if ("object" !== typeof TT || !TT || "object" !== typeof kT || !kT) return !1;
-             var KT = Object.keys(TT),
-               OT = Object.keys(kT);
-             if (KT.length !== OT.length) return !1;
-             for (var yT = Object.prototype.hasOwnProperty.bind(kT), fT = 0; fT < KT.length; fT++) {
-               var xT = KT[fT];
-               if (!yT(xT)) return !1;
-               var IT = TT[xT],
-                 AT = kT[xT];
-               if (!1 === (MT = cT ? cT.call(lT, IT, AT, xT) : void 0) || void 0 === MT && IT !== AT) return !1
+ 
+           function FA(qq) {
+             var Eq = qq.updateQueue;
+             if (null !== Eq) {
+               qq.updateQueue = null;
+               var gq = qq.stateNode;
+               null === gq && (gq = qq.stateNode = new ZA), Eq.forEach((function(Eq) {
+                 var Yq = Au.bind(null, qq, Eq);
+                 gq.has(Eq) || (gq.add(Eq), Eq.then(Yq, Yq))
+               }))
```

#### 450. `bundles/bloxd.io/main.js` (Changed code · before: `L22351-L22354` → after: `L6928-L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6928-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6928-L6949) · [Before (L22351-L22354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22351-L22354)

```diff
-         },
-         4094: (TT, kT, cT) => {
-           TT.exports = MT;
-           var lT = cT(4089).EventEmitter;
+ 
+           function sA(qq, Eq) {
+             return null !== qq && (null === (qq = qq.memoizedState) || null !== qq.dehydrated) && (null !== (Eq = Eq.memoizedState) && null === Eq.dehydrated)
+           }
+           var XA = Math.ceil,
+             wA = Qq.ReactCurrentDispatcher,
+             KA = Qq.ReactCurrentOwner,
+             CA = 0,
+             IA = null,
+             eA = null,
+             DA = 0,
+             qc = 0,
+             Ec = HO(0),
+             gc = 0,
+             Yc = null,
+             lc = 0,
+ ... (6 more added lines; see GitHub link above)
```

#### 451. `bundles/bloxd.io/main.js` (Changed code · before: `L22357` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6952) · [Before (L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22357)

```diff
-             lT.call(this)
+             uc = qm() + 500
```

#### 452. `bundles/bloxd.io/main.js` (Changed code · before: `L22359-L22360` → after: `L6954-L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6954-L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6954-L6970) · [Before (L22359-L22360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22359-L22360)

```diff
-           cT(4083)(MT, lT), MT.Readable = cT(4101), MT.Writable = cT(4147), MT.Duplex = cT(4138), MT.Transform = cT(4186), MT.PassThrough = cT(4193), MT.finished = cT(4175), MT.pipeline = cT(4201), MT.Stream = MT, MT.prototype.pipe = function(TT, kT) {
-             var cT = this;
+           var Wc, Nc = null,
+             ac = !1,
+             Vc = null,
+             dc = null,
+             jc = !1,
+             Hc = null,
+             oc = 90,
+             Pc = [],
+             Qc = [],
+             yc = null,
+             tc = 0,
+             rc = null,
+             vc = -1,
+             hc = 0,
+             nc = 0,
+             bc = null,
+ ... (1 more added lines; see GitHub link above)
```

#### 453. `bundles/bloxd.io/main.js` (Changed code · before: `L22362-L22364` → after: `L6972-L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6972-L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6972-L6974) · [Before (L22362-L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22362-L22364)

```diff
-             function MT(kT) {
-               TT.writable && !1 === TT.write(kT) && cT.pause && cT.pause()
-             }
+           function Zc() {
+             return 0 !== (48 & CA) ? qm() : -1 !== vc ? vc : vc = qm()
+           }
```

#### 454. `bundles/bloxd.io/main.js` (Changed code · before: `L22366-L22367` → after: `L6976-L6982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6976-L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6976-L6982) · [Before (L22366-L22367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22366-L22367)

```diff
-             function KT() {
-               cT.readable && cT.resume && cT.resume()
+           function fc(qq) {
+             if (0 === (2 & (qq = qq.mode))) return 1;
+             if (0 === (4 & qq)) return 99 === Em() ? 1 : 2;
+             if (0 === hc && (hc = lc), 0 !== xm.transition) {
+               0 !== nc && (nc = null !== Ac ? Ac.pendingLanes : 0), qq = hc;
+               var Eq = 4186112 & ~nc;
+               return 0 === (Eq &= -Eq) && (0 === (Eq = (qq = 4186112 & ~qq) & -qq) && (Eq = 8192)), Eq
```

#### 455. `bundles/bloxd.io/main.js` (Changed code · before: `L22369-L22370` → after: `L6984-L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6984-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L6984-L6999) · [Before (L22369-L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22369-L22370)

```diff
-             cT.on("data", MT), TT.on("drain", KT), TT._isStdio || kT && !1 === kT.end || (cT.on("end", yT), cT.on("close", fT));
-             var OT = !1;
+             return qq = Em(), 0 !== (4 & CA) && 98 === qq ? qq = sg(12, hc) : qq = sg(qq = function(qq) {
+               switch (qq) {
+                 case 99:
+                   return 15;
+                 case 98:
+                   return 10;
+                 case 97:
+                 case 96:
+                   return 8;
+                 case 95:
+                   return 2;
+                 default:
+                   return 0
+               }
+             }(qq), hc), qq
+           }
```

#### 456. `bundles/bloxd.io/main.js` (Changed code · before: `L22372-L22374` → after: `L7001-L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7001-L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7001-L7007) · [Before (L22372-L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22372-L22374)

```diff
-             function yT() {
-               OT || (OT = !0, TT.end())
-             }
+           function Mc(qq, Eq, gq) {
+             if (50 < tc) throw tc = 0, rc = null, Error(mq(185));
+             if (null === (qq = Tc(qq, Eq))) return null;
+             Kg(qq, Eq, gq), qq === IA && (mc |= Eq, 4 === gc && pc(qq, DA));
+             var Yq = Em();
+             1 === Eq ? 0 !== (8 & CA) && 0 === (48 & CA) ? Gc(qq) : (zc(qq, gq), 0 === CA && (Bc(), Om())) : (0 === (4 & CA) || 98 !== Yq && 99 !== Yq || (null === yc ? yc = new Set([qq]) : yc.add(qq)), zc(qq, gq)), Ac = qq
+           }
```

#### 457. `bundles/bloxd.io/main.js` (Changed code · before: `L22376-L22377` → after: `L7009-L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7009-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7009-L7062) · [Before (L22376-L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22376-L22377)

```diff
-             function fT() {
-               OT || (OT = !0, "function" === typeof TT.destroy && TT.destroy())
+           function Tc(qq, Eq) {
+             qq.lanes |= Eq;
+             var gq = qq.alternate;
+             for (null !== gq && (gq.lanes |= Eq), gq = qq, qq = qq.return; null !== qq;) qq.childLanes |= Eq, null !== (gq = qq.alternate) && (gq.childLanes |= Eq), gq = qq, qq = qq.return;
+             return 3 === gq.tag ? gq.stateNode : null
+           }
+ 
+           function zc(qq, Eq) {
+             for (var gq = qq.callbackNode, Yq = qq.suspendedLanes, lq = qq.pingedLanes, Oq = qq.expirationTimes, xq = qq.pendingLanes; 0 < xq;) {
+               var Aq = 31 - Cg(xq),
+                 cq = 1 << Aq,
+                 uq = Oq[Aq];
+               if (-1 === uq) {
+                 if (0 === (cq & Yq) || 0 !== (cq & lq)) {
+                   uq = Eq, Rg(cq);
+                   var Bq = kg;
+ ... (38 more added lines; see GitHub link above)
```

#### 458. `bundles/bloxd.io/main.js` (Changed code · before: `L22380-L22381` → after: `L7066-L7080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7066-L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7066-L7080) · [Before (L22380-L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22380-L22381)

```diff
-             function xT(TT) {
-               if (IT(), 0 === lT.listenerCount(this, "error")) throw TT
+           function Sc(qq) {
+             if (vc = -1, nc = hc = 0, 0 !== (48 & CA)) throw Error(mq(327));
+             var Eq = qq.callbackNode;
+             if (Eu() && qq.callbackNode !== Eq) return null;
+             var gq = Ug(qq, qq === IA ? DA : 0);
+             if (0 === gq) return null;
+             var Yq = gq,
+               lq = CA;
+             CA |= 16;
+             var Oq = sc();
+             for (IA === qq && DA === Yq || (Bc(), Uc(qq, Yq));;) try {
+               Kc();
+               break
+             } catch (Aq) {
+               Fc(qq, Aq)
```

#### 459. `bundles/bloxd.io/main.js` (Changed code · before: `L22383-L22405` → after: `L7082-L7116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7082-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7082-L7116) · [Before (L22383-L22405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22383-L22405)

```diff
- 
-             function IT() {
-               cT.removeListener("data", MT), TT.removeListener("drain", KT), cT.removeListener("end", yT), cT.removeListener("close", fT), cT.removeListener("error", xT), TT.removeListener("error", xT), cT.removeListener("end", IT), cT.removeListener("close", IT), TT.removeListen … [truncated]
-             }
-             return cT.on("error", xT), TT.on("error", xT), cT.on("end", IT), cT.on("close", IT), TT.on("close", IT), TT.emit("pipe", cT), TT
-           }
-         },
-         4156: (TT, kT, cT) => {
-           var lT = cT(4162).Ov,
-             MT = lT.isEncoding || function(TT) {
-               switch ((TT = "" + TT) && TT.toLowerCase()) {
-                 case "hex":
-                 case "utf8":
-                 case "utf-8":
-                 case "ascii":
-                 case "binary":
- ... (7 more removed lines; see GitHub link above)
+             if (Nm(), wA.current = Oq, CA = lq, null !== eA ? Yq = 0 : (IA = null, DA = 0, Yq = gc), 0 !== (lc & mc)) Uc(qq, 0);
+             else if (0 !== Yq) {
+               if (2 === Yq && (CA |= 64, qq.hydrate && (qq.hydrate = !1, gO(qq.containerInfo)), 0 !== (gq = Fg(qq)) && (Yq = Xc(qq, gq))), 1 === Yq) throw Eq = Yc, Uc(qq, 0), pc(qq, gq), zc(qq, qm()), Eq;
+               switch (qq.finishedWork = qq.current.alternate, qq.finishedLanes = gq, Yq) {
+                 case 0:
+                 case 1:
+                   throw Error(mq(345));
+                 case 2:
+                 case 5:
+                   ec(qq);
+                   break;
+                 case 3:
+                   if (pc(qq, gq), (62914560 & gq) === gq && 10 < (Yq = cc + 500 - qm())) {
+                     if (0 !== Ug(qq, 0)) break;
+                     if (((lq = qq.suspendedLanes) & gq) !== gq) {
+                       Zc(), qq.pingedLanes |= qq.suspendedLanes & lq;
+ ... (19 more added lines; see GitHub link above)
```

#### 460. `bundles/bloxd.io/main.js` (Changed code · before: `L22407` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7118) · [Before (L22407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22407)

```diff
-                   return !1
+                   throw Error(mq(329))
```

#### 461. `bundles/bloxd.io/main.js` (Changed code · before: `L22452` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7121) · [Before (L22452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22452)

```diff
-             this.lastNeed = 0, this.lastTotal = 0, this.lastChar = lT.allocUnsafe(kT)
+             return zc(qq, qm()), qq.callbackNode === Eq ? Sc.bind(null, qq) : null
```

#### 462. `bundles/bloxd.io/main.js` (Changed code · before: `L22455-L22456` → after: `L7124-L7129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7124-L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7124-L7129) · [Before (L22455-L22456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22455-L22456)

```diff
-           function OT(TT) {
-             return TT <= 127 ? 0 : TT >> 5 === 6 ? 2 : TT >> 4 === 14 ? 3 : TT >> 3 === 30 ? 4 : TT >> 6 === 2 ? -1 : -2
+           function pc(qq, Eq) {
+             for (Eq &= ~xc, Eq &= ~mc, qq.suspendedLanes |= Eq, qq.pingedLanes &= ~Eq, qq = qq.expirationTimes; 0 < Eq;) {
+               var gq = 31 - Cg(Eq),
+                 Yq = 1 << gq;
+               qq[gq] = -1, Eq &= ~Yq
+             }
```

#### 463. `bundles/bloxd.io/main.js` (Changed code · before: `L22460-L22468` → after: `L7133-L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7133-L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7133-L7140) · [Before (L22460-L22468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22460-L22468)

```diff
-             var kT = this.lastTotal - this.lastNeed,
-               cT = function(TT, kT) {
-                 if (128 !== (192 & kT[0])) return TT.lastNeed = 0, "\ufffd";
-                 if (TT.lastNeed > 1 && kT.length > 1) {
-                   if (128 !== (192 & kT[1])) return TT.lastNeed = 1, "\ufffd";
-                   if (TT.lastNeed > 2 && kT.length > 2 && 128 !== (192 & kT[2])) return TT.lastNeed = 2, "\ufffd"
-                 }
-               }(this, TT);
-             return void 0 !== cT ? cT : this.lastNeed <= TT.length ? (TT.copy(this.lastChar, kT, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (TT.copy(this.lastChar, kT, 0, TT.length), void(this.lastNeed -= TT.length))
+             if (0 !== (48 & CA)) throw Error(mq(327));
+             if (Eu(), qq === IA && 0 !== (qq.expiredLanes & DA)) {
+               var Eq = DA,
+                 gq = Xc(qq, Eq);
+               0 !== (lc & mc) && (gq = Xc(qq, Eq = Ug(qq, Eq)))
+             } else gq = Xc(qq, Eq = Ug(qq, 0));
+             if (0 !== qq.tag && 2 === gq && (CA |= 64, qq.hydrate && (qq.hydrate = !1, gO(qq.containerInfo)), 0 !== (Eq = Fg(qq)) && (gq = Xc(qq, Eq))), 1 === gq) throw gq = Yc, Uc(qq, 0), pc(qq, Eq), zc(qq, qm()), gq;
+             return qq.finishedWork = qq.current.alternate, qq.finishedLanes = Eq, ec(qq), zc(qq, qm()), null
```

#### 464. `bundles/bloxd.io/main.js` (Changed code · before: `L22472-L22478` → after: `L7144-L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7144-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7144-L7149) · [Before (L22472-L22478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22472-L22478)

```diff
-             if ((TT.length - kT) % 2 === 0) {
-               var cT = TT.toString("utf16le", kT);
-               if (cT) {
-                 var lT = cT.charCodeAt(cT.length - 1);
-                 if (lT >= 55296 && lT <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = TT[TT.length - 2], this.lastChar[1] = TT[TT.length - 1], cT.slice(0, -1)
-               }
-               return cT
+             var gq = CA;
+             CA |= 1;
+             try {
+               return qq(Eq)
+             } finally {
+               0 === (CA = gq) && (Bc(), Om())
```

#### 465. `bundles/bloxd.io/main.js` (Changed code · before: `L22483-L22487` → after: `L7153-L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7153-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7153-L7159) · [Before (L22483-L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22483-L22487)

```diff
-           function xT(TT) {
-             var kT = TT && TT.length ? this.write(TT) : "";
-             if (this.lastNeed) {
-               var cT = this.lastTotal - this.lastNeed;
-               return kT + this.lastChar.toString("utf16le", 0, cT)
+           function Jc(qq, Eq) {
+             var gq = CA;
+             CA &= -2, CA |= 8;
+             try {
+               return qq(Eq)
+             } finally {
+               0 === (CA = gq) && (Bc(), Om())
```

#### 466. `bundles/bloxd.io/main.js` (Changed code · before: `L22493-L22503` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7164) · [Before (L22493-L22503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22493-L22503)

```diff
-             var cT = (TT.length - kT) % 3;
-             return 0 === cT ? TT.toString("base64", kT) : (this.lastNeed = 3 - cT, this.lastTotal = 3, 1 === cT ? this.lastChar[0] = TT[TT.length - 1] : (this.lastChar[0] = TT[TT.length - 2], this.lastChar[1] = TT[TT.length - 1]), TT.toString("base64", kT, TT.length - cT))
-           }
- 
-           function AT(TT) {
-             var kT = TT && TT.length ? this.write(TT) : "";
-             return this.lastNeed ? kT + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : kT
-           }
- 
-           function CT(TT) {
-             return TT.toString(this.encoding)
+             PO(Ec, qc), qc |= Eq, lc |= Eq
```

#### 467. `bundles/bloxd.io/main.js` (Changed code · before: `L22506-L22507` → after: `L7167-L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7167-L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7167-L7168) · [Before (L22506-L22507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22506-L22507)

```diff
-           function jT(TT) {
-             return TT && TT.length ? this.write(TT) : ""
+           function Rc() {
+             qc = Ec.current, oO(Ec)
```

#### 468. `bundles/bloxd.io/main.js` (Changed code · before: `L22546` → after: `L7172-L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7172-L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7172-L7203) · [Before (L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22546)

```diff
-             for (var cT in TT) kT[cT] = TT[cT]
+             qq.finishedWork = null, qq.finishedLanes = 0;
+             var gq = qq.timeoutHandle;
+             if (-1 !== gq && (qq.timeoutHandle = -1, EO(gq)), null !== eA)
+               for (gq = eA.return; null !== gq;) {
+                 var Yq = gq;
+                 switch (Yq.tag) {
+                   case 1:
+                     null !== (Yq = Yq.type.childContextTypes) && void 0 !== Yq && nO();
+                     break;
+                   case 3:
+                     wm(), oO(tO), oO(yO), cx();
+                     break;
+                   case 5:
+                     Cm(Yq);
+                     break;
+                   case 4:
+ ... (16 more added lines; see GitHub link above)
```

#### 469. `bundles/bloxd.io/main.js` (Changed code · before: `L22549-L22583` → after: `L7206-L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7206-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7206-L7295) · [Before (L22549-L22583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22549-L22583)

```diff
-           function OT(TT, kT, cT) {
-             return MT(TT, kT, cT)
-           }
-           MT.from && MT.alloc && MT.allocUnsafe && MT.allocUnsafeSlow ? TT.exports = lT : (KT(lT, kT), kT.Ov = OT), OT.prototype = Object.create(MT.prototype), KT(MT, OT), OT.from = function(TT, kT, cT) {
-             if ("number" === typeof TT) throw new TypeError("Argument must not be a number");
-             return MT(TT, kT, cT)
-           }, OT.alloc = function(TT, kT, cT) {
-             if ("number" !== typeof TT) throw new TypeError("Argument must be a number");
-             var lT = MT(TT);
-             return void 0 !== kT ? "string" === typeof cT ? lT.fill(kT, cT) : lT.fill(kT) : lT.fill(0), lT
-           }, OT.allocUnsafe = function(TT) {
-             if ("number" !== typeof TT) throw new TypeError("Argument must be a number");
-             return MT(TT)
-           }, OT.allocUnsafeSlow = function(TT) {
-             if ("number" !== typeof TT) throw new TypeError("Argument must be a number");
-             return lT.SlowBuffer(TT)
- ... (19 more removed lines; see GitHub link above)
+           function Fc(qq, Eq) {
+             for (;;) {
+               var gq = eA;
+               try {
+                 if (Nm(), ux.current = Xx, dx) {
+                   for (var Yq = Nx.memoizedState; null !== Yq;) {
+                     var lq = Yq.queue;
+                     null !== lq && (lq.pending = null), Yq = Yq.next
+                   }
+                   dx = !1
+                 }
+                 if (Wx = 0, Vx = ax = Nx = null, jx = !1, KA.current = null, null === gq || null === gq.return) {
+                   gc = 1, Yc = Eq, eA = null;
+                   break
+                 }
+                 qq: {
+ ... (74 more added lines; see GitHub link above)
```

#### 470. `bundles/bloxd.io/main.js` (Changed code · before: `L22585` → after: `L7297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7297) · [Before (L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22585)

```diff
-               return TT.apply(this, arguments)
+               break
```

#### 471. `bundles/bloxd.io/main.js` (Changed code · before: `L22600-L22601` → after: `L7301-L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7301-L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7301-L7303) · [Before (L22600-L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22600-L22601)

```diff
-           function yT(TT) {
-             return TT.call.bind(TT)
+           function sc() {
+             var qq = wA.current;
+             return wA.current = Xx, null === qq ? Xx : qq
```

#### 472. `bundles/bloxd.io/main.js` (Changed code · before: `L22613-L22615` → after: `L7307-L7312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7307-L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7307-L7312) · [Before (L22613-L22615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22613-L22615)

```diff
-             if ("object" !== typeof TT) return !1;
-             try {
-               return kT(TT), !0
+             var gq = CA;
+             CA |= 16;
+             var Yq = sc();
+             for (IA === qq && DA === Eq || Uc(qq, Eq);;) try {
+               wc();
+               break
```

#### 473. `bundles/bloxd.io/main.js` (Changed code · before: `L22617` → after: `L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7314) · [Before (L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22617)

```diff
-               return !1
+               Fc(qq, lq)
```

#### 474. `bundles/bloxd.io/main.js` (Changed code · before: `L22621-L22638` → after: `L7320-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7320-L7321) · [Before (L22621-L22638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22621-L22638)

```diff
-           function NT(TT) {
-             return "[object Map]" === IT(TT)
-           }
- 
-           function QT(TT) {
-             return "[object Set]" === IT(TT)
-           }
- 
-           function ST(TT) {
-             return "[object WeakMap]" === IT(TT)
-           }
- 
-           function DT(TT) {
-             return "[object WeakSet]" === IT(TT)
-           }
- 
- ... (2 more removed lines; see GitHub link above)
+           function wc() {
+             for (; null !== eA;) Cc(eA)
```

#### 475. `bundles/bloxd.io/main.js` (Changed code · before: `L22641-L22642` → after: `L7324-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7324-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7324-L7325) · [Before (L22641-L22642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22641-L22642)

```diff
-           function FT(TT) {
-             return "undefined" !== typeof ArrayBuffer && (aT.working ? aT(TT) : TT instanceof ArrayBuffer)
+           function Kc() {
+             for (; null !== eA && !GO();) Cc(eA)
```

#### 476. `bundles/bloxd.io/main.js` (Changed code · before: `L22646` → after: `L7329-L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7329-L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7329-L7330) · [Before (L22646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22646)

```diff
-             return "[object DataView]" === IT(TT)
+             var Eq = Wc(qq.alternate, qq, qc);
+             qq.memoizedProps = qq.pendingProps, null === Eq ? Ic(qq) : eA = Eq, KA.current = null
```

#### 477. `bundles/bloxd.io/main.js` (Changed code · before: `L22650` → after: `L7334-L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7334-L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7334-L7351) · [Before (L22650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22650)

```diff
-             return "undefined" !== typeof DataView && (rT.working ? rT(TT) : TT instanceof DataView)
+             var Eq = qq;
+             do {
+               var gq = Eq.alternate;
+               if (qq = Eq.return, 0 === (2048 & Eq.flags)) {
+                 if (null !== (gq = tA(gq, Eq, qc))) return void(eA = gq);
+                 if (24 !== (gq = Eq).tag && 23 !== gq.tag || null === gq.memoizedState || 0 !== (1073741824 & qc) || 0 === (4 & gq.mode)) {
+                   for (var Yq = 0, lq = gq.child; null !== lq;) Yq |= lq.lanes | lq.childLanes, lq = lq.sibling;
+                   gq.childLanes = Yq
+                 }
+                 null !== qq && 0 === (2048 & qq.flags) && (null === qq.firstEffect && (qq.firstEffect = Eq.firstEffect), null !== Eq.lastEffect && (null !== qq.lastEffect && (qq.lastEffect.nextEffect = Eq.firstEffect), qq.lastEffect = Eq.lastEffect), 1 < Eq.flags && (null !== qq. … [truncated]
+               } else {
+                 if (null !== (gq = rA(Eq))) return gq.flags &= 2047, void(eA = gq);
+                 null !== qq && (qq.firstEffect = qq.lastEffect = null, qq.flags |= 2048)
+               }
+               if (null !== (Eq = Eq.sibling)) return void(eA = Eq);
+               eA = Eq = qq
+ ... (2 more added lines; see GitHub link above)
```

#### 478. `bundles/bloxd.io/main.js` (Changed code · before: `L22690` → after: `L7355-L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7355-L7356) · [Before (L22690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22690)

```diff
-             return "[object SharedArrayBuffer]" === IT(TT)
+             var Eq = Em();
+             return Ym(99, Dc.bind(null, qq, Eq)), null
```

#### 479. `bundles/bloxd.io/main.js` (Changed code · before: `L22693-L22694` → after: `L7359-L7507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7359-L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7359-L7507) · [Before (L22693-L22694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22693-L22694)

```diff
-           function bT(TT) {
-             return "undefined" !== typeof wT && ("undefined" === typeof mT.working && (mT.working = mT(new wT)), mT.working ? mT(TT) : TT instanceof wT)
+           function Dc(qq, Eq) {
+             do {
+               Eu()
+             } while (null !== Hc);
+             if (0 !== (48 & CA)) throw Error(mq(327));
+             var gq = qq.finishedWork;
+             if (null === gq) return null;
+             if (qq.finishedWork = null, qq.finishedLanes = 0, gq === qq.current) throw Error(mq(177));
+             qq.callbackNode = null;
+             var Yq = gq.lanes | gq.childLanes,
+               lq = Yq,
+               Oq = qq.pendingLanes & ~lq;
+             qq.pendingLanes = lq, qq.suspendedLanes = 0, qq.pingedLanes = 0, qq.expiredLanes &= lq, qq.mutableReadLanes &= lq, qq.entangledLanes &= lq, lq = qq.entanglements;
+             for (var xq = qq.eventTimes, Aq = qq.expirationTimes; 0 < Oq;) {
+               var cq = 31 - Cg(Oq),
+                 uq = 1 << cq;
+ ... (133 more added lines; see GitHub link above)
```

#### 480. `bundles/bloxd.io/main.js` (Changed code · before: `L22697-L22698` → after: `L7510-L7518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7510-L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7510-L7518) · [Before (L22697-L22698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22697-L22698)

```diff
-           function zT(TT) {
-             return hT(TT, AT)
+           function qu() {
+             for (; null !== Nc;) {
+               var qq = Nc.alternate;
+               ic || null === bc || (0 !== (8 & Nc.flags) ? lg(Nc, bc) && (ic = !0) : 13 === Nc.tag && sA(qq, Nc) && lg(Nc, bc) && (ic = !0));
+               var Eq = Nc.flags;
+               0 !== (256 & Eq) && MA(qq, Nc), 0 === (512 & Eq) || jc || (jc = !0, lm(97, (function() {
+                 return Eu(), null
+               }))), Nc = Nc.nextEffect
+             }
```

#### 481. `bundles/bloxd.io/main.js` (Changed code · before: `L22701-L22702` → after: `L7521-L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7521-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7521-L7526) · [Before (L22701-L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22701-L22702)

```diff
-           function JT(TT) {
-             return hT(TT, CT)
+           function Eu() {
+             if (90 !== oc) {
+               var qq = 97 < oc ? 97 : oc;
+               return oc = 90, Ym(qq, lu)
+             }
+             return !1
```

#### 482. `bundles/bloxd.io/main.js` (Changed code · before: `L22705-L22706` → after: `L7529-L7532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7529-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7529-L7532) · [Before (L22705-L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22705-L22706)

```diff
-           function oT(TT) {
-             return hT(TT, jT)
+           function gu(qq, Eq) {
+             Pc.push(Eq, qq), jc || (jc = !0, lm(97, (function() {
+               return Eu(), null
+             })))
```

#### 483. `bundles/bloxd.io/main.js` (Changed code · before: `L22709-L22710` → after: `L7535-L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7535-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7535-L7538) · [Before (L22709-L22710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22709-L22710)

```diff
-           function HT(TT) {
-             return fT && hT(TT, vT)
+           function Yu(qq, Eq) {
+             Qc.push(Eq, qq), jc || (jc = !0, lm(97, (function() {
+               return Eu(), null
+             })))
```

#### 484. `bundles/bloxd.io/main.js` (Changed code · before: `L22713-L22748` → after: `L7541-L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7541-L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7541-L7558) · [Before (L22713-L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22713-L22748)

```diff
-           function eT(TT) {
-             return xT && hT(TT, tT)
-           }
-           kT.isSharedArrayBuffer = bT, kT.isAsyncFunction = function(TT) {
-             return "[object AsyncFunction]" === IT(TT)
-           }, kT.isMapIterator = function(TT) {
-             return "[object Map Iterator]" === IT(TT)
-           }, kT.isSetIterator = function(TT) {
-             return "[object Set Iterator]" === IT(TT)
-           }, kT.isGeneratorObject = function(TT) {
-             return "[object Generator]" === IT(TT)
-           }, kT.isWebAssemblyCompiledModule = function(TT) {
-             return "[object WebAssembly.Module]" === IT(TT)
-           }, kT.isNumberObject = zT, kT.isStringObject = JT, kT.isBooleanObject = oT, kT.isBigIntObject = HT, kT.isSymbolObject = eT, kT.isBoxedPrimitive = function(TT) {
-             return zT(TT) || JT(TT) || oT(TT) || HT(TT) || eT(TT)
-           }, kT.isAnyArrayBuffer = function(TT) {
- ... (20 more removed lines; see GitHub link above)
+           function lu() {
+             if (null === Hc) return !1;
+             var qq = Hc;
+             if (Hc = null, 0 !== (48 & CA)) throw Error(mq(331));
+             var Eq = CA;
+             CA |= 32;
+             var gq = Qc;
+             Qc = [];
+             for (var Yq = 0; Yq < gq.length; Yq += 2) {
+               var lq = gq[Yq],
+                 Oq = gq[Yq + 1],
+                 xq = lq.destroy;
+               if (lq.destroy = void 0, "function" === typeof xq) try {
+                 xq()
+               } catch (cq) {
+                 if (null === Oq) throw Error(mq(330));
+ ... (2 more added lines; see GitHub link above)
```

#### 485. `bundles/bloxd.io/main.js` (Changed code · before: `L22750-L22779` → after: `L7560-L7567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7560-L7567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7560-L7567) · [Before (L22750-L22779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22750-L22779)

```diff
-             cT = 1;
-             for (var lT = arguments, KT = lT.length, OT = String(TT).replace(MT, (function(TT) {
-                 if ("%%" === TT) return "%";
-                 if (cT >= KT) return TT;
-                 switch (TT) {
-                   case "%s":
-                     return String(lT[cT++]);
-                   case "%d":
-                     return Number(lT[cT++]);
-                   case "%j":
-                     try {
-                       return JSON.stringify(lT[cT++])
-                     } catch (kT) {
-                       return "[Circular]"
-                     }
-                   default:
- ... (14 more removed lines; see GitHub link above)
+             for (gq = Pc, Pc = [], Yq = 0; Yq < gq.length; Yq += 2) {
+               lq = gq[Yq], Oq = gq[Yq + 1];
+               try {
+                 var Aq = lq.create;
+                 lq.destroy = Aq()
+               } catch (cq) {
+                 if (null === Oq) throw Error(mq(330));
+                 mu(Oq, cq)
```

#### 486. `bundles/bloxd.io/main.js` (Changed code · before: `L22783-L22792` → after: `L7570-L7571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7570-L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7570-L7571) · [Before (L22783-L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22783-L22792)

```diff
-           };
-           var KT = {},
-             OT = /^$/;
- 
-           function yT(TT, cT) {
-             var lT = {
-               seen: [],
-               stylize: xT
-             };
-             return arguments.length >= 3 && (lT.depth = arguments[2]), arguments.length >= 4 && (lT.colors = arguments[3]), vT(cT) ? lT.showHidden = cT : cT && kT._extend(lT, cT), QT(lT.showHidden) && (lT.showHidden = !1), QT(lT.depth) && (lT.depth = 2), QT(lT.colors) && (lT.colo … [truncated]
+             for (Aq = qq.current.firstEffect; null !== Aq;) qq = Aq.nextEffect, Aq.nextEffect = null, 8 & Aq.flags && (Aq.sibling = null, Aq.stateNode = null), Aq = qq;
+             return CA = Eq, Om(), !0
```

#### 487. `bundles/bloxd.io/main.js` (Changed code · before: `L22795-L22797` → after: `L7574-L7575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7574-L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7574-L7575) · [Before (L22795-L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22795-L22797)

```diff
-           function fT(TT, kT) {
-             var cT = yT.styles[kT];
-             return cT ? "\x1b[" + yT.colors[cT][0] + "m" + TT + "\x1b[" + yT.colors[cT][1] + "m" : TT
+           function Ou(qq, Eq, gq) {
+             ym(qq, Eq = bA(0, Eq = vA(gq, Eq), 1)), Eq = Zc(), null !== (qq = Tc(qq, 1)) && (Kg(qq, 1, Eq), zc(qq, Eq))
```

#### 488. `bundles/bloxd.io/main.js` (Changed code · before: `L22801` → after: `L7579-L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7579-L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7579-L7598) · [Before (L22801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22801)

```diff
-             return TT
+             if (3 === qq.tag) Ou(qq, qq, Eq);
+             else
+               for (var gq = qq.return; null !== gq;) {
+                 if (3 === gq.tag) {
+                   Ou(gq, qq, Eq);
+                   break
+                 }
+                 if (1 === gq.tag) {
+                   var Yq = gq.stateNode;
+                   if ("function" === typeof gq.type.getDerivedStateFromError || "function" === typeof Yq.componentDidCatch && (null === dc || !dc.has(Yq))) {
+                     var lq = iA(gq, qq = vA(Eq, qq), 1);
+                     if (ym(gq, lq), lq = Zc(), null !== (gq = Tc(gq, 1))) Kg(gq, 1, lq), zc(gq, lq);
+                     else if ("function" === typeof Yq.componentDidCatch && (null === dc || !dc.has(Yq))) try {
+                       Yq.componentDidCatch(Eq, qq)
+                     } catch (Oq) {}
+                     break
+ ... (4 more added lines; see GitHub link above)
```

#### 489. `bundles/bloxd.io/main.js` (Changed code · before: `L22805-L22873` → after: `L7602-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7602-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7602-L7603) · [Before (L22805-L22873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22805-L22873)

```diff
-             if (TT.customInspect && cT && rT(cT.inspect) && cT.inspect !== kT.inspect && (!cT.constructor || cT.constructor.prototype !== cT)) {
-               var MT = cT.inspect(lT, TT);
-               return NT(MT) || (MT = IT(TT, MT, lT)), MT
-             }
-             var KT = function(TT, kT) {
-               if (QT(kT)) return TT.stylize("undefined", "undefined");
-               if (NT(kT)) {
-                 var cT = "'" + JSON.stringify(kT).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
-                 return TT.stylize(cT, "string")
-               }
-               if (hT(kT)) return TT.stylize("" + kT, "number");
-               if (vT(kT)) return TT.stylize("" + kT, "boolean");
-               if (tT(kT)) return TT.stylize("null", "null")
-             }(TT, cT);
-             if (KT) return KT;
-             var OT = Object.keys(cT),
- ... (53 more removed lines; see GitHub link above)
+             var Yq = qq.pingCache;
+             null !== Yq && Yq.delete(Eq), Eq = Zc(), qq.pingedLanes |= qq.suspendedLanes & gq, IA === qq && (DA & gq) === gq && (4 === gc || 3 === gc && (62914560 & DA) === DA && 500 > qm() - cc ? Uc(qq, 0) : xc |= gq), zc(qq, Eq)
```

#### 490. `bundles/bloxd.io/main.js` (Changed code · before: `L22876-L22877` → after: `L7606-L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7606-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7606-L7608) · [Before (L22876-L22877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22876-L22877)

```diff
-           function jT(TT) {
-             return Array.isArray(TT)
+           function Au(qq, Eq) {
+             var gq = qq.stateNode;
+             null !== gq && gq.delete(Eq), 0 === (Eq = 0) && (0 === (2 & (Eq = qq.mode)) ? Eq = 1 : 0 === (4 & Eq) ? Eq = 99 === Em() ? 1 : 2 : (0 === hc && (hc = lc), 0 === (Eq = Xg(62914560 & ~hc)) && (Eq = 4194304))), gq = Zc(), null !== (qq = Tc(qq, Eq)) && (Kg(qq, Eq, gq), zc … [truncated]
```

#### 491. `bundles/bloxd.io/main.js` (Changed code · before: `L22880-L22881` → after: `L7611-L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7611-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7611-L7612) · [Before (L22880-L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22880-L22881)

```diff
-           function vT(TT) {
-             return "boolean" === typeof TT
+           function cu(qq, Eq, gq, Yq) {
+             this.tag = qq, this.key = gq, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = Eq, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null … [truncated]
```

#### 492. `bundles/bloxd.io/main.js` (Changed code · before: `L22884-L22885` → after: `L7615-L7616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7615-L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7615-L7616) · [Before (L22884-L22885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22884-L22885)

```diff
-           function tT(TT) {
-             return null === TT
+           function uu(qq, Eq, gq, Yq) {
+             return new cu(qq, Eq, gq, Yq)
```

#### 493. `bundles/bloxd.io/main.js` (Changed code · before: `L22889` → after: `L7620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7620) · [Before (L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22889)

```diff
-             return "number" === typeof TT
+             return !(!(qq = qq.prototype) || !qq.isReactComponent)
```

#### 494. `bundles/bloxd.io/main.js` (Changed code · before: `L22892-L22893` → after: `L7623-L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7623-L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L7623-L7628) · [Before (L22892-L22893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L22892-L22893)

```diff
-           function NT(TT) {
-             return "string" === typeof TT
+           function Wu(qq, Eq) {
+             var gq = qq.alternate;
+             return null === gq ? ((gq = uu(qq.tag, Eq, qq.key, qq.mode)).elementType = qq.elementType, gq.type = qq.type, gq.stateNode = qq.stateNode, gq.alternate = qq, qq.alternate = gq) : (gq.pendingProps = Eq, gq.type = qq.type, gq.flags = 0, gq.nextEffect = null, gq.firstEff … [truncated]
+               lanes: Eq.lanes,
+               firstContext: Eq.firstContext
+             }, gq.sibling = qq.sibling, gq.index = qq.index, gq.ref = qq.ref, gq
```
