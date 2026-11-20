# Changed — Bundle Modifications Report (Part 014 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `14 / 115` (**332** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 30. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L629-L652` → after: `L2908-L2913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR2908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L2908-L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L2908-L2913) · [Before (L629-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L629-L652)

```diff
-           kT.push({
-             kind: "customButton",
-             id: KT.id,
-             icon: KT.icon,
-             description: KT.description
-           })
-         }
-         return kT
-       },
-       KT = TT => TT.length >= 2,
-       OT = TT => "specialAction" !== TT.kind,
-       yT = (TT, kT) => {
-         if (null === TT || null === kT) return TT === kT;
-         if (TT.kind !== kT.kind) return !1;
-         switch (TT.kind) {
-           case "reload":
- ... (8 more removed lines; see GitHub link above)
+           return null !== (Eq = null === (gq = Oq.g.find((Eq => Eq.id === qq))) || void 0 === gq ? void 0 : gq.actions) && void 0 !== Eq ? Eq : []
+         }));
+       for (const Yq of bq) {
+         if (Yq === Eq) continue;
+         const qq = Oq.u[Yq];
+         for (const Eq of qq) vq.includes(Eq) && nq.push(Bq(Oq.x[Yq].translationKey, Oq.x[Yq].params))
```

#### 31. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L655` → after: `L3016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3016) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L655)

```diff
-   8762: (TT, kT, cT) => {
+   8609: (qq, Eq, gq) => {
```

#### 32. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L659-L660` → after: `L3019-L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3019-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3019-L3023) · [Before (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L659-L660)

```diff
-       f: () => AT,
-       i: () => vT
+       i: () => dq,
+       k: () => uq,
+       m: () => Hq,
+       p: () => oq,
+       t: () => Wq
```

#### 33. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L662-L668` → after: `L3025-L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3025-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3025-L3041) · [Before (L662-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L662-L668)

```diff
-     var lT = cT(71),
-       MT = cT(36),
-       KT = cT(1461),
-       OT = cT(8767),
-       yT = cT(8777);
-     let fT = null;
-     const xT = () => fT,
+     var Yq = gq(1646),
+       lq = gq(1716);
+     const Oq = qq => qq >= 56320 && qq <= 57343,
+       mq = qq => qq >= 55296 && qq <= 56319,
+       xq = (qq, Eq) => Eq >= 2 && Oq(qq.charCodeAt(Eq - 1)) && mq(qq.charCodeAt(Eq - 2)) ? Eq - 2 : Math.max(0, Eq - 1),
+       Aq = (qq, Eq) => {
+         let gq;
+         var Yq, lq;
+         return gq = qq.start !== qq.end ? Eq < 0 ? qq.start : qq.end : Eq < 0 ? xq(qq.value, qq.start) : (Yq = qq.value, (lq = qq.start) + 1 < Yq.length && mq(Yq.charCodeAt(lq)) && Oq(Yq.charCodeAt(lq + 1)) ? lq + 2 : Math.min(Yq.length, lq + 1)), {
+           value: qq.value,
+           start: gq,
+           end: gq
+         }
+       },
+       cq = ["text", "search", "url", "email", "tel", "password", "number"],
+       uq = qq => !(!(0, lq.b)(qq) || qq.isContentEditable || qq.hasAttribute("data-pad-no-osk")) && (qq instanceof HTMLTextAreaElement || qq instanceof HTMLInputElement && cq.includes(qq.type)),
+ ... (1 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L670` → after: `L3043-L3051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3043-L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3043-L3051) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L670)

```diff
-         (0, OT.g)(fT, TT) || (fT = TT, MT.k.nt(yT.e, fT))
+         var Eq, gq;
+         const {
+           value: Yq
+         } = qq;
+         return {
+           value: Yq,
+           start: null !== (Eq = qq.selectionStart) && void 0 !== Eq ? Eq : Yq.length,
+           end: null !== (gq = qq.selectionEnd) && void 0 !== gq ? gq : Yq.length
+         }
```

#### 35. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L672-L674` → after: `L3053-L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3053-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3053-L3059) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L672-L674)

```diff
-       AT = () => {
-         const [TT, kT] = (0, lT.useState)(xT);
-         return (0, KT.g)(yT.e, kT), TT
+       Nq = (qq, Eq, gq) => {
+         if (qq.readOnly) return;
+         const lq = qq instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
+         Object.getOwnPropertyDescriptor(lq, "value").set.call(qq, Eq.value), Bq(qq) && qq.setSelectionRange(Eq.start, Eq.end), (0, Yq.h)(qq, new InputEvent("input", {
+           bubbles: !0,
+           inputType: gq
+         }))
```

#### 36. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L677-L678` → after: `L3062-L3077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3062-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3062-L3077) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L677-L678)

```diff
-     const jT = TT => {
-         TT !== CT && (CT = TT, MT.k.nt(yT.h, TT))
+     const Vq = (qq, Eq) => !!document.execCommand(qq, !1, Eq) || (aq || (aq = !0, console.warn(`execCommand("${qq}") failed; the on-screen keyboard is setting the value directly`)), !1),
+       dq = (qq, Eq) => {
+         Vq("insertText", Eq) || Nq(qq, function(qq, Eq) {
+           let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+           const Yq = qq.value.slice(0, qq.start),
+             lq = qq.value.slice(qq.end);
+           let Oq = gq < 0 ? Eq.length : Math.max(0, gq - Yq.length - lq.length);
+           Oq > 0 && Oq < Eq.length && mq(Eq.charCodeAt(Oq - 1)) && Oq--;
+           const xq = Eq.slice(0, Oq),
+             Aq = Yq.length + xq.length;
+           return {
+             value: Yq + xq + lq,
+             start: Aq,
+             end: Aq
+           }
+         }(Wq(qq), Eq, qq.maxLength), "insertText")
```

#### 37. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L680-L682` → after: `L3079-L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3079-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3079-L3095) · [Before (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L680-L682)

```diff
-       vT = () => {
-         const [TT, kT] = (0, lT.useState)(CT);
-         return (0, KT.g)(yT.h, kT), TT
+       jq = qq => {
+         Vq("delete") || Nq(qq, (qq => {
+           const Eq = qq.start === qq.end ? xq(qq.value, qq.start) : qq.start;
+           return {
+             value: qq.value.slice(0, Eq) + qq.value.slice(qq.end),
+             start: Eq,
+             end: Eq
+           }
+         })(Wq(qq)), "deleteContentBackward")
+       },
+       Hq = (qq, Eq) => {
+         if (!Bq(qq)) return;
+         const gq = Aq(Wq(qq), Eq);
+         qq.setSelectionRange(gq.start, gq.end)
+       },
+       oq = qq => {
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L685` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3098) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L685)

```diff
-   8777: (TT, kT, cT) => {
+   8814: (qq, Eq, gq) => {
```

#### 39. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L687-L689` → after: `L3100-L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3100-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3100-L3120) · [Before (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L687-L689)

```diff
-       b: () => KT,
-       e: () => lT,
-       h: () => MT,
+       b: () => xq
+     });
+     var Yq = gq(24),
+       lq = gq(3311),
+       Oq = gq(1336),
+       mq = gq(1367);
+     const xq = async () => {
+       if ((0, mq.c)()) {
+         if (!0 !== await Oq.NotificationProvider.showPromptPopup({
+             title: "controller:menusLeaveGameTitle",
+             confirmText: "controller:menusLeaveGameLeave",
+             cancelText: "controller:menusLeaveGameStay",
+             destructive: !0
+           }).getResult() || "inGame" !== Yq.b.get("gameState")) return
+       }(0, lq.e)()
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L691-L693` → after: `L3122-L3123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3122-L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3122-L3123) · [Before (L691-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L691-L693)

```diff
-       n: () => fT,
-       q: () => xT,
-       u: () => OT
+       m: () => lq,
+       n: () => xq
```

#### 41. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L695-L701` → after: `L3125-L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3125-L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3125-L3135) · [Before (L695-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L695-L701)

```diff
-     const lT = "controllerActionHintChanged",
-       MT = "controllerActionWheelHintChanged",
-       KT = "controllerOpenChat",
-       OT = "controllerSneakToggledChanged",
-       yT = "controllerAttackLatchedChanged",
-       fT = "controllerDropStackHoldChanged",
-       xT = "controllerPickBlockHintChanged"
+     var Yq = gq(1928);
+     const lq = "controllerPadShopOpen",
+       Oq = qq => Yq.g.includes(qq),
+       mq = qq => Object.values(qq).some((qq => !1 !== qq.canBuy && !qq.isRewardedAd)),
+       xq = (qq, Eq, gq) => {
+         var Yq, lq, mq, xq;
+         const Aq = qq.filter((qq => !Oq(qq))),
+           cq = null !== Eq && qq.includes(Eq) ? Eq : null;
+         return null !== cq && !Oq(cq) && gq(cq) ? cq : null !== (Yq = null !== (lq = null !== (mq = null !== (xq = Aq.find(gq)) && void 0 !== xq ? xq : Aq[0]) && void 0 !== mq ? mq : cq) && void 0 !== lq ? lq : qq[0]) && void 0 !== Yq ? Yq : null
+       },
+       Aq = qq => qq.userInput || qq.isRewardedAd || "boolean" === typeof qq.isSelected ? null : JSON.stringify([qq.image, qq.cost, qq.currency, qq.amount, qq.customTitle, qq.buyButtonText, qq.description, qq.canBuy])
```

#### 42. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L703` → after: `L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3137) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L703)

```diff
-   8719: (TT, kT, cT) => {
+   8837: (qq, Eq, gq) => {
```

#### 43. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L706-L708` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3140) · [Before (L706-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L706-L708)

```diff
-       h: () => KT,
-       i: () => fT,
-       l: () => yT
+       i: () => uq
```

#### 44. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L710-L729` → after: `L3142-L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3142-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3142-L3158) · [Before (L710-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L710-L729)

```diff
-     var lT = cT(1461),
-       MT = cT(1420);
-     const KT = "controllerInventoryCursorChanged",
-       OT = {
-         showing: !1,
-         kind: null,
-         holding: !1,
-         slotHasItem: !1,
-         pressHints: null,
-         hasCategories: !1,
-         hasList: !1,
-         openButtonCloses: !1,
-         steppingSlots: !1,
-         quickMoveToHotbar: !1,
-         dropStackHold: null,
-         hotbarPicking: !1
- ... (4 more removed lines; see GitHub link above)
+     var Yq = gq(57),
+       lq = gq(1416),
+       Oq = gq(1985),
+       mq = gq(1380),
+       xq = gq(1401),
+       Aq = gq(1070);
+     const cq = () => {
+         const qq = (0, mq.t)();
+         if ((0, Yq.useEffect)((() => {
+             (0, mq.j)()
+           }), []), !qq) return null;
+         const {
+           ControllerCategory: Eq
+         } = qq;
+         return (0, Aq.jsx)(xq.d, {
+           children: (0, Aq.jsx)(Eq, {})
+ ... (1 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L732-L733` → after: `L3161-L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3161-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3161-L3164) · [Before (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L732-L733)

```diff
-         var TT, kT;
-         return null !== (TT = null === (kT = (0, MT.g)()) || void 0 === kT ? void 0 : kT.isPadSteppingSlots()) && void 0 !== TT && TT
+         var qq;
+         const Eq = (0, mq.t)(),
+           [, gq] = (0, Yq.useReducer)((qq => qq + 1), 0);
+         return (0, lq.f)(Oq.b, gq), null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.hasActivePad()) && void 0 !== qq && qq
```

#### 46. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L736` → after: `L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3167) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L736)

```diff
-   8716: (TT, kT, cT) => {
+   8618: (qq, Eq, gq) => {
```

#### 47. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L738` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3169) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L738)

```diff
-       c: () => CT,
+       e: () => Yq,
```

#### 48. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L742-L744` → after: `L3174-L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3174-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3174-L3177) · [Before (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L742-L744)

```diff
-       o: () => KT,
-       q: () => IT,
-       s: () => AT
+       p: () => Oq,
+       t: () => Nq,
+       w: () => mq,
+       y: () => Wq
```

#### 49. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L746-L761` → after: `L3179-L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3179-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3179-L3194) · [Before (L746-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L746-L761)

```diff
-     let lT = null;
-     const MT = new Set,
-       KT = TT => (lT = TT, () => {
-         if (lT === TT) {
-           lT = null;
-           for (const TT of MT) TT()
-         }
-       }),
-       OT = TT => (MT.add(TT), () => {
-         MT.delete(TT)
-       }),
-       yT = () => lT,
-       fT = () => null !== lT;
-     let xT = null;
-     const IT = TT => {
-         xT = TT
+     const Yq = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(", … [truncated]
+       lq = (qq, Eq) => {
+         if ("function" === typeof qq.checkVisibility) return !qq.checkVisibility({
+           visibilityProperty: !0,
+           checkVisibilityCSS: !0,
+           opacityProperty: Eq,
+           checkOpacity: Eq
+         });
+         const {
+           visibility: gq
+         } = getComputedStyle(qq);
+         if ("hidden" === gq || "collapse" === gq) return !0;
+         if (!Eq) return !1;
+         for (let Yq = qq; Yq; Yq = Yq.parentElement)
+           if ("0" === getComputedStyle(Yq).opacity) return !0;
+         return !1
```

#### 50. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L763-L765` → after: `L3196-L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3196-L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3196-L3199) · [Before (L763-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L763-L765)

```diff
-       AT = () => {
-         const TT = xT;
-         return xT = null, TT
+       Oq = qq => {
+         if (!qq.isConnected || lq(qq, !0)) return !1;
+         const Eq = qq.getBoundingClientRect();
+         return Eq.width > 0 && Eq.height > 0
```

#### 51. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L767-L778` → after: `L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3201) · [Before (L767-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L767-L778)

```diff
-       CT = (TT, kT) => {
-         var cT, lT;
-         return null !== (cT = null !== (lT = TT.find((TT => TT.element === kT))) && void 0 !== lT ? lT : TT.find((TT => TT.element.contains(kT)))) && void 0 !== cT ? cT : null
-       }
-   },
-   8725: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => KT,
-       d: () => OT
-     });
-     var lT = cT(71);
-     const MT = new WeakMap,
+       mq = qq => !!qq.matches(":disabled, [aria-disabled='true']") || "button" === qq.getAttribute("role") && "-1" === qq.getAttribute("tabindex"),
```

#### 52. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L780-L781` → after: `L3203-L3205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3203-L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3203-L3205) · [Before (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L780-L781)

```diff
-         var kT, cT;
-         return null !== (kT = null === (cT = MT.get(TT)) || void 0 === cT ? void 0 : cT.current) && void 0 !== kT ? kT : null
+         var Eq;
+         if (qq.closest("[data-pad-ignore]")) return !0;
+         return !!(null === (Eq = qq.parentElement) || void 0 === Eq ? void 0 : Eq.closest("[data-pad-focusable]"))
```

#### 53. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L783-L812` → after: `L3207-L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3207-L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3207-L3209) · [Before (L783-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L783-L812)

```diff
-       OT = (TT, kT) => {
-         const cT = (0, lT.useRef)(kT);
-         cT.current = kT;
-         const KT = (0, lT.useRef)(null);
-         (0, lT.useEffect)((() => {
-           const kT = TT.current,
-             lT = KT.current;
-           kT !== lT && (lT && MT.get(lT) === cT && MT.delete(lT), KT.current = kT, kT && MT.set(kT, cT))
-         })), (0, lT.useEffect)((() => () => {
-           const TT = KT.current;
-           TT && MT.get(TT) === cT && MT.delete(TT), KT.current = null
-         }), [])
-       }
-   },
-   8857: (TT, kT, cT) => {
-     cT.d(kT, {
- ... (14 more removed lines; see GitHub link above)
+       Aq = qq => {
+         const Eq = qq.querySelectorAll(Yq);
+         return qq.matches(Yq) ? [qq, ...Eq] : Eq
```

#### 54. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L816-L817` → after: `L3212-L3214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3212-L3214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3212-L3214) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L816-L817)

```diff
-         var kT, cT;
-         return null !== (kT = null === (cT = (0, KT.g)()) || void 0 === cT ? void 0 : cT.getPadGlyphIconName(TT)) && void 0 !== kT ? kT : `${fT}xbox/${TT}`
+         const Eq = [];
+         for (const gq of Aq(qq)) !xq(gq) && Oq(gq) && Eq.push(gq);
+         return Eq
```

#### 55. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L819` → after: `L3216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3216) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L819)

```diff
-       IT = TT => TT.startsWith(fT),
+       uq = new WeakMap,
```

#### 56. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L821-L822` → after: `L3218-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3218-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3218-L3222) · [Before (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L821-L822)

```diff
-         var kT, cT;
-         return IT(TT) && null !== (kT = null === (cT = (0, KT.g)()) || void 0 === cT ? void 0 : cT.getPadGlyphIconUrl(TT)) && void 0 !== kT ? kT : null
+         const Eq = uq.get(qq);
+         if (Eq && Wq(Eq, qq)) return !0;
+         for (const gq of Aq(qq))
+           if (!xq(gq) && Oq(gq)) return uq.set(qq, gq), !0;
+         return uq.delete(qq), !1
```

#### 57. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L824` → after: `L3224-L3225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3224-L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3224-L3225) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L824)

```diff
-       CT = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", OT.d, MT.d, MT.b],
+       Wq = (qq, Eq) => Eq.contains(qq) && qq.matches(Yq) && !xq(qq) && Oq(qq),
+       Nq = (qq, Eq) => Wq(qq, Eq) && !mq(qq),
```

#### 58. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L826-L853` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3227-L3229) · [Before (L826-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L826-L853)

```diff
-         const kT = CT.map((kT => lT.k.subscribe(kT, TT)));
-         return () => {
-           for (const TT of kT) lT.k.unsubscribe(TT)
-         }
-       }
-   },
-   8691: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => MT,
-       g: () => lT
-     });
-     const lT = "controllerOpenKeyboard",
-       MT = "controllerKeyboardVisible"
-   },
-   8746: (TT, kT, cT) => {
-     cT.d(kT, {
- ... (12 more removed lines; see GitHub link above)
+         for (const Eq of qq.querySelectorAll("[data-pad-initial-area]"))
+           if (!lq(Eq, !1)) return !0;
+         return !1
```

#### 59. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L855-L857` → after: `L3231-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3231-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3231-L3237) · [Before (L855-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L855-L857)

```diff
-       KT = () => {
-         var TT;
-         return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
+       Vq = qq => {
+         const Eq = Eq => {
+           let gq = 0;
+           for (let Yq = Eq.parentElement; Yq && Yq !== qq; Yq = Yq.parentElement) gq++;
+           return gq
+         };
+         return [...qq.querySelectorAll("[data-pad-initial-area]")].filter(Oq).sort(((qq, gq) => Eq(gq) - Eq(qq)))
```

#### 60. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L860` → after: `L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3240) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L860)

```diff
-   8840: (TT, kT, cT) => {
+   8601: (qq, Eq, gq) => {
```

#### 61. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L862` → after: `L3242-L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3242-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3242-L3251) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L862)

```diff
-       e: () => MT,
+       B: () => rq,
+       D: () => cq,
+       F: () => hq,
+       G: () => yq,
+       H: () => tq,
+       L: () => dq,
+       P: () => Aq,
+       S: () => uq,
+       b: () => jq,
+       f: () => vq,
```

#### 62. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L868` → after: `L3256-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3256-L3257) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L868)

```diff
-       u: () => IT
+       v: () => Wq,
+       y: () => Nq
```

#### 63. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L870-L876` → after: `L3259-L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3259-L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3259-L3264) · [Before (L870-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L870-L876)

```diff
-     const lT = "controllerActionWheelOpen",
-       MT = "controllerActionWheelAim",
-       KT = "controllerActionWheelCommit",
-       OT = "controllerActionWheelClose",
-       yT = "controllerActionWheelPick";
-     let fT = !1;
-     const xT = () => fT,
+     var Yq = gq(31),
+       lq = gq(1646),
+       Oq = gq(8604),
+       mq = gq(8609),
+       xq = gq(8618);
+     const Aq = qq => (0, mq.k)(qq),
```

#### 64. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L878-L888` → after: `L3266-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3266-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3266-L3270) · [Before (L878-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L878-L888)

```diff
-         fT = TT
-       }
-   },
-   8836: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => KT,
-       i: () => MT
-     });
-     let lT = 0;
-     const MT = () => {
-         lT++
+         const Eq = qq.getBoundingClientRect();
+         return {
+           x: Eq.left + Eq.width / 2,
+           y: Eq.top + Eq.height / 2
+         }
```

#### 65. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L890-L923` → after: `L3272-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3272-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3272-L3288) · [Before (L890-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L890-L923)

```diff
-       KT = () => lT
-   },
-   8737: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => fT,
-       g: () => MT,
-       i: () => OT,
-       l: () => KT,
-       n: () => lT,
-       q: () => xT
-     });
-     const lT = "controllerQuickChatWheelOpen",
-       MT = "controllerQuickChatWheelAim",
-       KT = "controllerQuickChatWheelCommit",
-       OT = "controllerQuickChatWheelClose";
-     let yT = !1;
- ... (18 more removed lines; see GitHub link above)
+       uq = (qq, Eq, gq) => ({
+         bubbles: !0,
+         cancelable: !0,
+         composed: !0,
+         view: window,
+         clientX: qq.x,
+         clientY: qq.y,
+         screenX: qq.x,
+         screenY: qq.y,
+         button: Eq,
+         buttons: gq,
+         pointerId: 1,
+         pointerType: "mouse",
+         isPrimary: !0
+       }),
+       Bq = (qq, Eq) => {
+ ... (1 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L925-L928` → after: `L3290-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3290-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3290-L3293) · [Before (L925-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L925-L928)

```diff
-       hitLanded: {
-         pattern: [20],
-         priority: 2,
-         minGapMs: 80
+       Wq = function(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const Yq = 0 === gq ? 1 : 2;
+         Bq(qq, new PointerEvent("pointerdown", uq(Eq, gq, Yq))), Bq(qq, new MouseEvent("mousedown", uq(Eq, gq, Yq)))
```

#### 67. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L930-L933` → after: `L3295-L3297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3295-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3295-L3297) · [Before (L930-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L930-L933)

```diff
-       damageTaken: {
-         pattern: [45],
-         priority: 3,
-         minGapMs: 250
+       Nq = function(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         Bq(qq, new PointerEvent("pointerup", uq(Eq, gq, 0))), Bq(qq, new MouseEvent("mouseup", uq(Eq, gq, 0)))
```

#### 68. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L935-L938` → after: `L3299-L3342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3299-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3299-L3342) · [Before (L935-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L935-L938)

```diff
-       fishBite: {
-         pattern: null,
-         priority: 3,
-         minGapMs: 0
+       aq = function(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         Wq(qq, Eq, gq), Nq(qq, Eq, gq), Bq(qq, 0 === gq ? new MouseEvent("click", uq(Eq, 0, 0)) : new MouseEvent("contextmenu", uq(Eq, 2, 0)))
+       },
+       Vq = function(qq, Eq, gq) {
+         let {
+           leaveBelow: Yq = null,
+           enterBelow: lq = null
+         } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+         if (qq !== Eq) {
+           if (null !== qq && void 0 !== qq && qq.isConnected) {
+             const lq = {
+               ...uq(gq, 0, 0),
+               relatedTarget: Eq
+             };
+             Bq(qq, new PointerEvent("pointerout", lq)), Bq(qq, new MouseEvent("mouseout", lq));
+ ... (28 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L940-L943` → after: `L3344-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3344-L3345) · [Before (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L940-L943)

```diff
-       death: {
-         pattern: [60, 70, 120],
-         priority: 4,
-         minGapMs: 0
+       dq = qq => {
+         Yq.i.TV(Oq.e, qq)
```

#### 70. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L945-L948` → after: `L3347-L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3347-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3347-L3351) · [Before (L945-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L945-L948)

```diff
-       lockReady: {
-         pattern: [8],
-         priority: 2,
-         minGapMs: 0
+       jq = qq => {
+         if (Aq(qq)) return void dq(qq);
+         const Eq = qq.hasAttribute("data-pad-focusable") ? qq.querySelector("a[href]") : null,
+           gq = null !== Eq && void 0 !== Eq ? Eq : qq;
+         aq(gq, cq(gq))
```

#### 71. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L950-L953` → after: `L3353-L3356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3353-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3353-L3356) · [Before (L950-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L950-L953)

```diff
-       lockLocked: {
-         pattern: [15, 50, 15],
-         priority: 2,
-         minGapMs: 0
+       Hq = ".Dropdown-root.is-open",
+       oq = qq => {
+         const Eq = qq.querySelector(".Dropdown-control");
+         return jq(Eq), Eq
```

#### 72. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L955-L969` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3358) · [Before (L955-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L955-L969)

```diff
-       autorunLedgeStop: {
-         pattern: [40],
-         priority: 3,
-         minGapMs: 0
-       }
-     };
- 
-     function yT() {
-       return (0, KT.isMobile)() && "function" === typeof navigator.vibrate
-     }
-     const fT = new class {
-       constructor(TT) {
-         this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
-       }
-       play(TT, kT) {
+       Pq = qq => {
```

#### 73. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L971-L980` → after: `L3360-L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3360-L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3360-L3361) · [Before (L971-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L971-L980)

```diff
-         if (!this.deps.enabled()) return;
-         const lT = OT[TT],
-           MT = null !== kT && void 0 !== kT ? kT : lT.pattern;
-         if (null === MT) return void console.warn("No vibration pattern for", TT);
-         const KT = this.deps.now();
-         KT - this.lastAnyAt < 40 && lT.priority < this.playingPriority || KT - (null !== (cT = this.lastAt.get(TT)) && void 0 !== cT ? cT : -1 / 0) < lT.minGapMs || KT < this.playingUntil && lT.priority < this.playingPriority || (this.lastAt.set(TT, KT), this.lastAnyAt = KT, this … [truncated]
-       }
-     }({
-       vibrate: TT => {
-         navigator.vibrate([...TT])
+         const gq = null !== (Eq = qq.closest(Hq)) && void 0 !== Eq ? Eq : qq.querySelector(Hq);
+         return gq ? oq(gq) : null
```

#### 74. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L982-L1018` → after: `L3363-L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3363-L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3363-L3371) · [Before (L982-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L982-L1018)

```diff
-       now: () => performance.now(),
-       enabled: () => yT() && lT.e.get("isTouchScreen") && lT.e.get("clientEscMenuOptions").vibration && !(0, MT.e)()
-     })
-   },
-   8802: (TT, kT, cT) => {
-     cT.d(kT, {
-       b: () => OT
-     });
-     var lT = cT(8808),
-       MT = cT(617),
-       KT = cT(159);
- 
-     function OT(TT) {
-       var kT, cT;
-       if ((0, MT.R)(TT)) return !0;
-       const OT = null !== (kT = null === (cT = KT.p[KT.u]) || void 0 === cT ? void 0 : cT.adConfig.showRewardedAds) && void 0 !== kT && kT;
- ... (21 more removed lines; see GitHub link above)
+       Qq = qq => {
+         for (const Eq of document.querySelectorAll(Hq)) Eq.contains(qq) || oq(Eq)
+       },
+       yq = qq => null !== qq.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
+       tq = qq => {
+         const Eq = qq ? document.elementFromPoint(qq.x, qq.y) : null;
+         return !(null === Eq || void 0 === Eq || !Eq.closest("[data-pad-repeat]"))
+       },
+       rq = qq => {
```

#### 75. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1020-L1093` → after: `L3373-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3373-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3373-L3381) · [Before (L1020-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L1020-L1093)

```diff
-         return null !== (cT = function(TT, kT) {
-           if ("string" === typeof TT) return TT;
-           const cT = "str" in TT ? TT.str : TT;
-           if ("string" === typeof cT) return cT;
-           if ("entityName" in cT) return cT.entityName;
-           if (kT && "translationKey" in cT) return `{${cT.translationKey}${void 0===cT.params?"":` ${JSON.stringify(cT.params)}`}}`;
-           return null
-         }(TT, kT)) && void 0 !== cT ? cT : " "
-       })).join("")
-     }
-   },
-   8855: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => IT,
-       f: () => yT,
-       i: () => fT
- ... (58 more removed lines; see GitHub link above)
+         return null !== (Eq = [...qq.querySelectorAll("[data-pad-back]")].find(xq.p)) && void 0 !== Eq ? Eq : null
+       },
+       vq = qq => {
+         const Eq = rq(qq);
+         return !!Eq && (jq(Eq), !0)
+       },
+       hq = qq => {
+         var Eq, gq, Yq, lq;
+         return null !== (Eq = null !== (gq = null !== (Yq = qq.getAttribute("data-pad-key")) && void 0 !== Yq ? Yq : qq.getAttribute("href")) && void 0 !== gq ? gq : null === (lq = qq.querySelector("a[href]")) || void 0 === lq ? void 0 : lq.getAttribute("href")) && void 0 !== Eq  … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1095-L1110` → after: `L3383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/151.js#L3383) · [Before (L1095-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/151.js#L1095-L1110)

```diff
-       return TT.cost
-     }
- 
-     function OT(TT, kT, cT) {
-       var lT;
-       const MT = null !== (lT = cT.excludedPlayers) && void 0 !== lT ? lT : [kT];
-       return TT.filter((TT => !MT.includes(TT)))
-     }
-     cT.d(kT, {
-       e: () => KT,
-       h: () => MT,
-       l: () => OT,
-       p: () => lT
-     })
-   },
-   8849: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/152.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/152.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f)

#### 1. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L4` → after: `L4-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L4-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L4-L543) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L4)

```diff
-   36432: (TT, kT, cT) => {
+   8750: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Zq,
+       e: () => hq,
+       i: () => nq
+     });
+     var Yq = gq(57),
+       lq = gq(4367),
+       Oq = gq(1101),
+       mq = gq(1416),
+       xq = gq(31),
+       Aq = gq(3294),
+       cq = gq(2189),
+       uq = gq(1226),
+       Bq = gq(8794),
+       Wq = gq(1904),
+ ... (524 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L7-L83` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L546) · [Before (L7-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L7-L83)

```diff
-       B: () => QT,
-       d: () => KT,
-       h: () => tT,
-       k: () => hT,
-       l: () => yT,
-       p: () => CT,
-       q: () => NT,
-       s: () => AT,
-       w: () => ST
-     });
-     var lT = cT(31),
-       MT = cT(36);
-     const KT = "clientGameInventoryButtonsChanged",
-       OT = new Map;
- 
-     function yT() {
- ... (61 more removed lines; see GitHub link above)
+       D: () => lq,
```

#### 3. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L91-L98` → after: `L867-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L867-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L867-L960) · [Before (L91-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L91-L98)

```diff
-       q: () => IT
-     });
-     var lT = cT(31),
-       MT = cT(36),
-       KT = cT(1292),
-       OT = cT(36432);
-     const yT = "clientGameUiChanged";
-     let fT = null;
+       r: () => cq,
+       u: () => uq
+     });
+     const Yq = "controllerActionWheelOpen",
+       lq = "controllerActionWheelAim",
+       Oq = "controllerActionWheelCommit",
+       mq = "controllerActionWheelClose",
+       xq = "controllerActionWheelPick";
+     let Aq = !1;
+     const cq = () => Aq,
+       uq = qq => {
+         Aq = qq
+       }
+   },
+   8773: (qq, Eq, gq) => {
+     gq.d(Eq, {
+ ... (78 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L101-L154` → after: `L963-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L963-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L963-L992) · [Before (L101-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L101-L154)

```diff
-       return fT
-     }
- 
-     function IT(TT, kT) {
-       const cT = {
-         content: TT,
-         menu: kT
-       };
-       return fT = cT, MT.k.nt(yT, fT, !0), () => {
-         fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
-       }
-     }
-     let AT = null;
- 
-     function CT() {
-       return AT
- ... (38 more removed lines; see GitHub link above)
+       return (0, Oq.isMobile)() && "function" === typeof navigator.vibrate
+     }
+     const Aq = new class {
+       constructor(qq) {
+         this.deps = qq, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
+       }
+       play(qq, Eq) {
+         var gq;
+         if (!this.deps.enabled()) return;
+         const Yq = mq[qq],
+           lq = null !== Eq && void 0 !== Eq ? Eq : Yq.pattern;
+         if (null === lq) return void console.warn("No vibration pattern for", qq);
+         const Oq = this.deps.now();
+         Oq - this.lastAnyAt < 40 && Yq.priority < this.playingPriority || Oq - (null !== (gq = this.lastAt.get(qq)) && void 0 !== gq ? gq : -1 / 0) < Yq.minGapMs || Oq < this.playingUntil && Yq.priority < this.playingPriority || (this.lastAt.set(qq, Oq), this.lastAnyAt = Oq, this … [truncated]
+       }
+     }({
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L158-L159` → after: `L996-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L996-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L996-L997) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L158-L159)

```diff
-       if ((0, MT.R)(TT)) return !0;
-       const OT = null !== (kT = null === (cT = KT.p[KT.u]) || void 0 === cT ? void 0 : cT.adConfig.showRewardedAds) && void 0 !== kT && kT;
+       if ((0, lq.H)(qq)) return !0;
+       const mq = null !== (Eq = null === (gq = Oq.k[Oq.n]) || void 0 === gq ? void 0 : gq.adConfig.showRewardedAds) && void 0 !== Eq && Eq;
```

#### 6. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L164` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L1002) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L164)

```diff
-             if ((0, lT.p)(kT.items[TT], OT)) return !1
+             if ((0, Yq.h)(Eq.items[qq], mq)) return !1
```

#### 7. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L169-L177` → after: `L1007-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L1007-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L1007-L1079) · [Before (L169-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L169-L177)

```diff
-   42149: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       getClientGameMapKey: () => lT.h,
-       shopIsEmpty: () => MT.b
-     });
-     var lT = cT(36423),
-       MT = cT(8802)
-   },
-   8808: (TT, kT, cT) => {
+   8742: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => lq,
+       e: () => Yq
+     });
+     const Yq = 100;
+ 
+     function lq(qq) {
+       let {
+         translationKeys: Eq = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return qq.map((qq => {
+         var gq;
+         return null !== (gq = function(qq, Eq) {
+           if ("string" === typeof qq) return qq;
+           const gq = "str" in qq ? qq.str : qq;
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L198` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L1100) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L198)

```diff
-       const MT = null !== (lT = cT.excludedPlayers) && void 0 !== lT ? lT : [kT];
+       const lq = null !== (Yq = gq.excludedPlayers) && void 0 !== Yq ? Yq : [Eq];
```

#### 9. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L202-L205` → after: `L1104-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L1104-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L1104-L1107) · [Before (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L202-L205)

```diff
-       e: () => KT,
-       h: () => MT,
-       l: () => OT,
-       p: () => lT
+       d: () => Oq,
+       f: () => lq,
+       g: () => mq,
+       h: () => Yq
```

#### 10. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L207` → after: `L1109-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L1109-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/152.js#L1109-L1110) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/152.js#L207)

```diff
-   }
+   },
+   8787: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/153.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/153.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3)

#### 1. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/153.js#L4-L169) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/153.js#L4)

```diff
-   40795: (TT, kT, cT) => {
+   36662: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Oq,
+       d: () => Vq,
+       g: () => dq,
+       h: () => xq,
+       l: () => Wq,
+       m: () => jq,
+       o: () => Bq,
+       p: () => oq,
+       r: () => aq,
+       v: () => Hq
+     });
+     var Yq = gq(24),
+       lq = gq(31);
+     const Oq = "clientGameInventoryButtonsChanged",
+ ... (150 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L6-L47` → after: `L171-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L171-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/153.js#L171-L177) · [Before (L6-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/153.js#L6-L47)

```diff
-       openCharacterPreview: () => BT
-     });
-     var lT = cT(37943),
-       MT = cT(2790),
-       KT = cT(602),
-       OT = cT(36971),
-       yT = cT(2268),
-       fT = cT(36955),
-       xT = cT(39448),
-       IT = cT(39716),
-       AT = cT(40703),
-       CT = cT(36885),
-       jT = cT(39868),
-       vT = cT(37086),
-       tT = cT(39889),
-       hT = cT(40752),
- ... (26 more removed lines; see GitHub link above)
+       getClientGameMapKey: () => Yq.j,
+       shopIsEmpty: () => lq.d
+     });
+     var Yq = gq(36657),
+       lq = gq(8723)
+   },
+   8729: (qq, Eq, gq) => {
```

#### 3. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L49-L144` → after: `L179-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L179-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/153.js#L179-L184) · [Before (L49-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/153.js#L49-L144)

```diff
-       TT.isVisible = kT;
-       for (const cT of TT.getChildMeshes()) cT.isVisible = kT
-     }
-     class wT {
-       constructor(TT, kT, cT) {
-         this.et = TT, this.thinInstMgr = kT, this.mJ = cT, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
-       }
-       loadModel(TT, kT, cT) {
-         const lT = (0, DT.g)(TT, kT);
-         return lT in this.modelCache || (this.modelCache[lT] = (async () => {
-           try {
-             const lT = await (0, DT.k)(TT, this.et),
-               MT = new Map;
-             for (const TT of lT.getNodes()) MT.set(TT.name, TT);
-             const KT = (0, DT.e)(null !== kT && void 0 !== kT ? kT : TT, this.et);
-             (0, DT.o)(lT, KT, {
- ... (80 more removed lines; see GitHub link above)
+       return !qq.hidden && (Eq || !qq.isRewardedAd)
+     }
+ 
+     function lq(qq) {
+       return "object" === typeof qq ? qq.option : qq
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L147-L483` → after: `L187-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L187-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/153.js#L187-L194) · [Before (L147-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/153.js#L147-L483)

```diff
-       XT.width = TT, XT.height = kT, zT.resize()
-     }
-     let gT = 0;
-     class UT {
-       constructor(TT, kT) {
-         this.framing = kT, this.ready = uT, this.dev = {
-           canvas: () => XT,
-           isolateHead(TT) {
-             const kT = GT.getNodeNames(VT);
-             for (let cT = 0; cT < kT.length; cT++) "HeadMesh" !== kT[cT] && "__root__" !== kT[cT] && "TorsoNode" !== kT[cT] && GT.setNodeEnabled(VT, cT, !1);
-             if (TT) {
-               const TT = GT.getNamedNode(VT, "HeadMesh");
-               GT.setNodeDisableColorWrite(VT, TT, !0, (TT => {
-                 const kT = new tT.StandardMaterial(`${TT.name}_depthOnly`, TT.NJ());
-                 return kT.disableColorWrite = !0, kT
-               }))
- ... (321 more removed lines; see GitHub link above)
+       var gq;
+       if ("dropdown" === (null === (gq = qq.userInput) || void 0 === gq ? void 0 : gq.type) && "object" === typeof qq.userInput.dropdownOptions[0]) {
+         for (const gq of qq.userInput.dropdownOptions)
+           if (lq(gq) === Eq) return "object" === typeof gq ? gq.cost : qq.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", qq, "input:", Eq)
+       }
+       return qq.cost
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L486-L707` → after: `L197-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L197-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/153.js#L197-L205) · [Before (L486-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/153.js#L486-L707)

```diff
-       let lT = FT.get(cT);
-       lT || (lT = new Map, FT.set(cT, lT));
-       const {
-         url: MT
-       } = TT;
-       let KT = lT.get(MT);
-       return KT || (KT = async function(TT, kT, cT) {
-         const {
-           width: lT,
-           height: MT
-         } = TT.getSize(), KT = Math.round(MT / lT), yT = kT && kT.byteLength === lT * lT * KT * 4 ? kT : TT._readPixelsSync();
-         return new aT.d(yT, lT, lT, KT, DT.d.TEXTUREFORMAT_RGBA, cT, !0, !1, OT.c.NEAREST_NEAREST_MIPLINEAR)
-       }(TT, kT, cT), lT.set(MT, KT), KT.catch((() => {
-         lT.delete(MT)
-       }))), KT
-     }
- ... (206 more removed lines; see GitHub link above)
+       var Yq;
+       const lq = null !== (Yq = gq.excludedPlayers) && void 0 !== Yq ? Yq : [Eq];
+       return qq.filter((qq => !lq.includes(qq)))
+     }
+     gq.d(Eq, {
+       d: () => Oq,
+       f: () => lq,
+       g: () => mq,
+       h: () => Yq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 1. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L4-L37` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L4-L17) · [Before (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L4-L37)

```diff
-   40701: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       openMobLineupPreview: () => dT,
-       openMobPreview: () => XT,
-       openPetPreview: () => LT
-     });
-     var lT = cT(39448),
-       MT = cT(39716),
-       KT = cT(40703),
-       OT = cT(37086),
-       yT = cT(36885),
-       fT = cT(39868),
-       xT = cT(40726),
-       IT = cT(38304),
-       AT = cT(36976),
-       CT = cT(36955),
- ... (18 more removed lines; see GitHub link above)
+   38757: (qq, Eq, gq) => {
+     var Yq = {
+       "./cape_cow_cream.png": 28352,
+       "./cape_cow_normal.png": 28360,
+       "./cape_creator_level1.png": 28369,
+       "./cape_creator_level2.png": 28371,
+       "./cape_creator_level3.png": 28377,
+       "./cape_none.png": 28385,
+       "./cape_pig.png": 28390,
+       "./cape_sheep.png": 28392,
+       "./cape_super.png": 28394,
+       "./cape_super_inverted.png": 28399,
+       "./cape_youtuber.png": 28404
+     };
```

#### 2. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L39-L56` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L19-L21) · [Before (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L39-L56)

```diff
-     function oT() {
-       if (null !== bT) return bT;
-       const TT = document.createElement("canvas");
-       TT.classList.add("MobPreviewCanvas");
-       const kT = new lT.d(TT, !0, {
-         preserveDrawingBuffer: !0
-       });
-       kT.QcT = (0, DT.f)().gv.engine.QcT;
-       const cT = new MT.c(kT);
-       cT.clearColor = new OT.e(0, 0, 0, 0), cT.ambientColor = new OT.Color3(1, 1, 1);
-       const xT = new KT.e("Eh", Math.PI / 2, Math.PI / 2, FT, yT.Fv.Zero(), cT),
-         IT = new fT.b("light", new yT.Fv(-.1, 1, -.3), cT);
-       return IT.diffuse = new OT.Color3(1, 1, 1), IT.specular = new OT.Color3(1, 1, 1), IT.groundColor = new OT.Color3(.5, .5, .5), bT = {
-         engine: kT,
-         et: cT,
-         canvas: TT,
- ... (2 more removed lines; see GitHub link above)
+     function lq(qq) {
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 3. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L60-L62` → after: `L25-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L25-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L25-L71) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L60-L62)

```diff
-       return zT[TT] ??= (0, hT.v)(TT, oT().et, !0).catch((kT => {
-         throw delete zT[TT], kT
-       })), zT[TT]
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
+       }
+       return Yq[qq]
+     }
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 38757
+   },
+   40917: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       openCharacterPreview: () => Xq
+     });
+     var Yq = gq(38074),
+       lq = gq(2668),
+ ... (31 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L66-L69` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L75-L76) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L66-L69)

```diff
-       let kT = JT.get(TT);
-       return kT || (kT = ST.x[TT].loadModel(oT().et, !1).then((TT => (TT.PD(!1), TT)), (kT => {
-         throw JT.delete(TT), kT
-       })), JT.set(TT, kT)), kT
+       qq.unfreezeWorldMatrix();
+       for (const Eq of qq.getChildren()) tq(Eq)
```

#### 5. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L72-L88` → after: `L79-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L79-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L79-L115) · [Before (L72-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L72-L88)

```diff
-     function GT(TT) {
-       var kT, cT, lT;
-       let {
-         mobType: MT,
-         variation: KT,
-         animation: OT
-       } = TT, fT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, FT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wT = null !== (kT = null === fT || void 0 === fT ? void 0 : fT.size) && void 0 !== kT ? kT : 1,
-         mT = null !== (cT = null === fT || void 0 === fT ? void 0 : fT.cosmetics) && void 0 !== cT ? cT : [],
-         bT = null !== (lT = null === fT || void 0 === fT ? void 0 : fT.Gw) && void 0 !== lT ? lT : null;
-       let zT = !1,
-         JT = null,
-         GT = null;
-       const {
-         engine: VT,
-         et: ET
- ... (1 more removed lines; see GitHub link above)
+     function rq(qq, Eq) {
+       qq.isVisible = Eq;
+       for (const gq of qq.getChildMeshes()) gq.isVisible = Eq
+     }
+     class vq {
+       constructor(qq, Eq, gq) {
+         this.PV = qq, this.thinInstMgr = Eq, this.KJ = gq, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(qq, Eq, gq) {
+         const Yq = (0, Pq.g)(qq, Eq);
+         return Yq in this.modelCache || (this.modelCache[Yq] = (async () => {
+           try {
+             const Yq = await (0, Pq.j)(qq, this.PV),
+               lq = new Map;
+             for (const qq of Yq.getNodes()) lq.set(qq.name, qq);
+             const Oq = (0, Pq.c)(null !== Eq && void 0 !== Eq ? Eq : qq, this.PV);
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L90-L121` → after: `L117-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L117-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L117-L160) · [Before (L90-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L90-L121)

```diff
-         null === (TT = GT) || void 0 === TT || TT.render(VT.getDeltaTime())
-       })), uT = null === bT ? null : eT(bT).catch((TT => (console.error(`Mob preview: could not load ${bT}`, TT), null)));
-       return Promise.all([HT(MT), uT]).then((TT => {
-         var kT, cT, lT;
-         let [fT, HT] = TT;
-         if (zT) return;
-         const eT = (0, DT.f)().gv.PJ,
-           {
-             hitBoxDimensions: VT
-           } = (0, IT.d)(MT),
-           ET = rT / Math.max(VT.height, VT.width);
-         if (JT = (0, hT.j)(MT, ET * wT, !0, !0), eT.setPosition(JT, FT, -VT.height * ET / 2, 0), eT.setRotationEulerY(JT, PT), fT.meshApi instanceof QT.b && mT.length > 0)
-           for (const [MT, KT] of mT) fT.meshApi.updatePlayerCosmetic(null, JT, MT, KT, !0);
-         else fT.meshApi.updateVariation(JT, MT, null !== KT && void 0 !== KT ? KT : "default");
-         null !== bT && null !== HT && function(TT, kT, cT, lT) {
-           var MT;
- ... (16 more removed lines; see GitHub link above)
+         const {
+           thinInstMgr: Yq,
+           KJ: lq
+         } = this;
+         this.cosmeticNames[qq] = Eq;
+         const Oq = this.attachmentsByType[qq];
+         if (Oq)
+           for (const {
+               mesh: xq,
+               destNode: Aq,
+               bones: cq
+             }
+             of Oq) {
+             null !== cq && (0, Hq.vb)(this.shownBones, cq), rq(xq, !1);
+             const qq = Yq.getNamedNode(lq, Aq);
+             Yq.detachTransformNodeIfFound(xq, lq, qq)
+ ... (28 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L124-L130` → after: `L163-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L163-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L163-L172) · [Before (L124-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L124-L130)

```diff
- 
-     function VT(TT, kT) {
-       return GT({
-         mobType: "NPC",
-         variation: null,
-         animation: TT.animation
-       }, TT, kT)
+     var hq = gq(37203),
+       nq = (gq(40860), gq(40236), gq(40862), gq(9321));
+     let bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq;
+     const Lq = document.createElement("canvas");
+     async function Jq() {
+       await new Promise((qq => {
+         setTimeout((() => {
+           qq()
+         }), 100)
+       }))
```

#### 8. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L133-L160` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L177-L178) · [Before (L133-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L133-L160)

```diff
-     function ET(TT) {
-       let {
-         mobType: kT,
-         variation: cT,
-         metaInfo: lT,
-         tamed: MT
-       } = TT, KT = !1, OT = null, yT = 0;
-       const fT = (0, DT.f)(),
-         xT = fT.gv.PJ,
-         IT = TT => {
-           yT += mT * (TT / 1e3) % (2 * Math.PI), xT.setRotationEulerY(OT, yT)
-         };
-       return HT(kT).then((TT => {
-         if (KT) return;
-         OT = (0, hT.j)(kT, wT, !0, !0), xT.setPosition(OT, 0, -wT, 0), TT.meshApi.updateVariation(OT, kT, cT);
-         const yT = {
- ... (12 more removed lines; see GitHub link above)
+     function Rq(qq, Eq) {
+       Lq.width = qq, Lq.height = Eq, bq.resize()
```

#### 9. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L164-L171` → after: `L183-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L183-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L183-L201) · [Before (L164-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L164-L171)

```diff
-         this.place = kT, this.remove = null;
-         const {
-           engine: cT,
-           et: lT,
-           canvas: MT
-         } = oT();
-         TT.appendChild(MT), cT.resize(), cT.runRenderLoop((() => {
-           lT.render()
+         this.framing = Eq, this.ready = Gq, this.dev = {
+           canvas: () => Lq,
+           isolateHead(qq) {
+             const Eq = Tq.getNodeNames(zq);
+             for (let gq = 0; gq < Eq.length; gq++) "HeadMesh" !== Eq[gq] && "__root__" !== Eq[gq] && "TorsoNode" !== Eq[gq] && Tq.setNodeEnabled(zq, gq, !1);
+             if (qq) {
+               const qq = Tq.getNamedNode(zq, "HeadMesh");
+               Tq.setNodeDisableColorWrite(zq, qq, !0, (qq => {
+                 const Eq = new Vq.StandardMaterial(`${qq.name}_depthOnly`, qq.ZJ());
+                 return Eq.disableColorWrite = !0, Eq
+               }))
+             }
+             Tq.setPosition(zq, 0, -12, 0)
+           }
+         }, this.closed = !1, this.resetCamera();
+         const gq = qq.getBoundingClientRect();
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L174-L183` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L204-L205) · [Before (L174-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L174-L183)

```diff
-       show(TT) {
-         var kT;
-         null === (kT = this.remove) || void 0 === kT || kT.call(this), this.remove = this.place(TT)
-       }
-       resize(TT, kT) {
-         const {
-           engine: cT,
-           canvas: lT
-         } = oT();
-         lT.width = TT, lT.height = kT, cT.resize()
+       isReady() {
+         return !!fq
```

#### 11. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L185-L187` → after: `L207-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L207-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L207-L238) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L185-L187)

```diff
-       close() {
-         var TT;
-         oT().engine.stopRenderLoop(), null === (TT = this.remove) || void 0 === TT || TT.call(this), this.remove = null
+       setCosmetic(qq, Eq) {
+         ! function(qq, Eq) {
+           if (!fq) return;
+           const mq = (0, lq.e)();
+           mq.uL(!1), Yq.d.Player.meshApi.updatePlayerCosmetic(mq.oR, zq, qq, Eq, !0), "cape" === qq && (Eq === Oq.f ? Mq.hG(!1) : (Mq.hG(!0), Mq.material.diffuseTexture = new dq.d(gq(38757)(`./cape_${Eq}.png`), Mq.ZJ(), {
+             invertY: !1,
+             samplingMode: dq.d.NEAREST_NEAREST_MIPLINEAR
+           })));
+           kq[qq] = pq.update(qq, Eq)
+         }(qq, Eq)
+       }
+       playEmote(qq) {
+         if (!Sq) return;
+         if (!qq) return void Sq.stopAnimation(Aq.g.Emote);
+         const Eq = (0, mq.g)((0, xq.i)(qq).animation);
+         Sq.startAnimation(Eq, Aq.g.Emote, 0, xq.e)
+ ... (16 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L189-L195` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L240-L241) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L189-L195)

```diff
-     }
-     class uT {
-       constructor(TT) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new ZT(TT, (() => () => {}))
+       setOrbit(qq) {
+         sq(qq)
```

#### 13. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L197-L198` → after: `L243-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L243-L244) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L197-L198)

```diff
-       show(TT) {
-         TT.figures !== this.view.figures && this.preload(TT.figures), this.view = TT, this.place()
+       resetCamera() {
+         iq.inertialAlphaOffset = 0, iq.inertialBetaOffset = 0, iq.inertialRadiusOffset = 0, sq(nq.c[this.framing])
```

#### 14. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L201` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L247) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L201)

```diff
-         this.preview.resize(TT, kT), this.aspect = TT / kT, this.place()
+         Rq(qq, Eq)
```

#### 15. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L204-L233` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L250) · [Before (L204-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L204-L233)

```diff
-         this.preview.close();
-         for (const TT of this.placed) null === TT || void 0 === TT || TT.remove();
-         this.placed = []
-       }
-       preload(TT) {
-         const kT = () => {};
-         HT("NPC").catch(kT);
-         for (const {
-             Gw: cT
-           }
-           of TT) null !== cT && eT(cT).catch(kT)
-       }
-       place() {
-         const {
-           figures: TT,
-           shown: kT
- ... (14 more removed lines; see GitHub link above)
+         this.closed || (this.closed = !0, Uq--, 0 === Uq && bq.stopRenderLoop())
```

#### 16. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L238-L242` → after: `L255-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L255-L261) · [Before (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L238-L242)

```diff
-       return new ZT(TT, GT)
-     }
- 
-     function dT(TT) {
-       return new uT(TT)
+       let {
+         yaw: Eq,
+         pitch: gq,
+         radius: Yq,
+         target: lq
+       } = qq;
+       iq.alpha = Eq, iq.beta = gq, Yq && (iq.radius = Yq), lq && iq.target.set(lq[0], lq[1], lq[2])
```

#### 17. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L245-L246` → after: `L264-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L264-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L264-L291) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L245-L246)

```diff
-     function LT(TT) {
-       return new ZT(TT, ET)
+     function Xq(qq, Eq) {
+       return qq.appendChild(Lq), bq || function() {
+         bq = new cq.b(Lq, !0, {
+           preserveDrawingBuffer: !0
+         });
+         const qq = (0, lq.e)();
+         bq.vYq = qq.Ma.engine.vYq, Zq = new uq.e(bq), Zq.clearColor = new aq.e(0, 0, 0, 0), Zq.ambientColor = new aq.Color3(1, 1, 1), iq = new Bq.b("td", 0, 0, 1, Wq.Na.Zero(), Zq), iq.attachControl(Lq, !0), iq.panningSensibility = 0, Gq = (0, Yq.u)("Player", Zq, !0).then((Eq =>  … [truncated]
+           fq = Eq.meshApi, Mq = Eq.capeMesh, Tq = qq.Ma.LJ;
+           const gq = 8.33;
+           zq = (0, Yq.j)("Player", gq, !0, !0), Tq.setPosition(zq, 0, -8.33, 0);
+           const lq = Tq.getNamedNode(zq, "BodyMesh");
+           Tq.attachTransformNode(Mq, zq, lq), Tq.set(zq, "aOpacity", 1), Tq.vR(zq, "aOpacity", 1), pq = new vq(Zq, Tq, zq), Sq = new jq.AnimatorState, Sq.wB = qq, Sq.thinInstMgr = Tq, Sq.KJ = zq, Sq.egq = Tq.hYq(zq, 0), Sq.modelLifeformType = "Player", Sq.nodeNameAliases = (0, hq … [truncated]
+           const Oq = Mq.yR().boundingBox;
+           Mq.position.y = ((24 - Oq.maximum.y + Oq.minimum.y) / 2 - 1 / 32) / gq, Mq.position.z = -1 / gq, Mq.rotationQuaternion = null;
+           const mq = Math.PI / 18,
+             xq = Oq.maximum.y / gq;
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L249` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L294) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L249)

```diff
-   38624: (TT, kT, cT) => {
+   38755: (qq, Eq, gq) => {
```

#### 19. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L253-L257` → after: `L298-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L298-L302) · [Before (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L253-L257)

```diff
-     var lT = cT(36994),
-       MT = cT(37005),
-       KT = cT(37269),
-       OT = cT(37013),
-       yT = cT(36996);
+     var Yq = gq(37212),
+       lq = gq(37228),
+       Oq = gq(37443),
+       mq = gq(37230),
+       xq = gq(37220);
```

#### 20. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L260` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L305) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L260)

```diff
-       return `\n\t\t\t\t${(0,yT.w)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,xq.t)(qq,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 21. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L262` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L307) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L262)

```diff
-         (0, yT.y)(TT, "float", "s", "sin(ang)")
+         (0, xq.B)(qq, "float", "s", "sin(ang)")
```

#### 22. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L265` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L310) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L265)

```diff
-         (0, yT.y)(TT, "float", "c", "cos(ang)")
+         (0, xq.B)(qq, "float", "c", "cos(ang)")
```

#### 23. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L268` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L313) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L268)

```diff
-         (0, yT.l)(TT, "mat2", "c", "s", "-s", "c")
+         (0, xq.n)(qq, "mat2", "c", "s", "-s", "c")
```

#### 24. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L274-L275` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L319-L320) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L274-L275)

```diff
-       let cT = (0, yT.Db)(TT, "skele" + (kT - 1));
-       for (let MT = kT - 2; MT >= 0; MT--) cT = (0, yT.xb)(TT, `boneIdx == ${MT}`, (0, yT.Db)(TT, `skele${MT}`), cT);
+       let gq = (0, xq.Eb)(qq, "skele" + (Eq - 1));
+       for (let lq = Eq - 2; lq >= 0; lq--) gq = (0, xq.tb)(qq, `boneIdx == ${lq}`, (0, xq.Eb)(qq, `skele${lq}`), gq);
```

#### 25. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L277` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L322) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L277)

```diff
-       return `\n\t\t\t\t${(0,yT.y)(TT,"int","boneIdx",(0,yT.Ab)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,yT.y)(TT,"vec3","bone",cT)}\n\t\t\t\t${(0,yT.y)(TT,"vec2","pivot",(0,yT.l)(TT,"vec2","0.0",`${(0,yT.Kb)(TT,"position")}.z`))}\n\t\t\t\t${(0,yT.ab)(TT)?`posit … [truncated]
+       return `\n\t\t\t\t${(0,xq.B)(qq,"int","boneIdx",(0,xq.xb)(qq,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xq.B)(qq,"vec3","bone",gq)}\n\t\t\t\t${(0,xq.B)(qq,"vec2","pivot",(0,xq.n)(qq,"vec2","0.0",`${(0,xq.Ib)(qq,"position")}.z`))}\n\t\t\t\t${(0,xq.ab)(qq)?`posit … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L281` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L326) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L281)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,yT.l)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xq.n)(qq,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 27. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L287` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L332) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L287)

```diff
-         xkT(TT, kT) {
+         ogq(qq, Eq) {
```

#### 28. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L296-L298` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L341-L343) · [Before (L296-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L296-L298)

```diff
-           ...(0, lT.c)("CAPE"),
-           BLOXD_CAPE_BONES: `${TT}`,
-           BLOXD_CAPE_MAX_Y: (0, MT.qb)(kT)
+           ...(0, Yq.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${qq}`,
+           BLOXD_CAPE_MAX_Y: (0, lq.ob)(Eq)
```

#### 29. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L301` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L346) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L301)

```diff
-           return (0, KT.b)(function(TT) {
+           return (0, Oq.c)(function(qq) {
```

#### 30. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L304` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L349) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L304)

```diff
-               name: `skele${cT}`,
+               name: `skele${gq}`,
```

#### 31. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L311` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L356) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L311)

```diff
-           for (let kT = 0; kT < this.skeleLen; kT++) TT.updateVector3(`skele${kT}`, AT.xkT(this.skele, 3 * kT))
+           for (let Eq = 0; Eq < this.skeleLen; Eq++) qq.updateVector3(`skele${Eq}`, Bq.ogq(this.skele, 3 * Eq))
```

#### 32. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L326` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L371) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L326)

```diff
-   38525: (TT, kT, cT) => {
+   38662: (qq, Eq, gq) => {
```

#### 33. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L328-L329` → after: `L373-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L373-L374) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L328-L329)

```diff
-       c: () => IT,
-       d: () => AT
+       d: () => uq,
+       e: () => Bq
```

#### 34. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L331-L334` → after: `L376-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L376-L379) · [Before (L331-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L331-L334)

```diff
-     var lT = cT(36994),
-       MT = cT(37269),
-       KT = cT(36996),
-       OT = cT(37013);
+     var Yq = gq(37212),
+       lq = gq(37443),
+       Oq = gq(37220),
+       mq = gq(37230);
```

#### 35. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L349-L350` → after: `L394-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L394-L395) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L349-L350)

```diff
-         defines: () => (0, lT.c)("TEXT_SAMPLER"),
-         getUniforms: TT => (0, MT.b)(fT, "fragment", TT),
+         defines: () => (0, Yq.b)("TEXT_SAMPLER"),
+         getUniforms: qq => (0, lq.c)(Aq, "fragment", qq),
```

#### 36. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L357` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L402) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L357)

```diff
-           const cT = (0, KT.I)(kT, `vec4 ${xT}(sampler2D s, vec2 uv, float bias)`, `fn ${xT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+           const gq = (0, Oq.I)(Eq, `vec4 ${cq}(sampler2D s, vec2 uv, float bias)`, `fn ${cq}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
```

#### 37. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L359-L360` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L404-L405) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L359-L360)

```diff
-             MT = `${(0,KT.T)(kT,"vDiffuseUV")} + uvOffset`,
-             OT = (0, KT.I)(kT, `${xT}(diffuseSampler, ${MT}, ${(0,KT.Db)(kT,yT)})`, `${xT}(diffuseSampler, diffuseSamplerSampler, ${MT}, ${(0,KT.Db)(kT,yT)})`);
+             lq = `${(0,Oq.U)(Eq,"vDiffuseUV")} + uvOffset`,
+             mq = (0, Oq.I)(Eq, `${cq}(diffuseSampler, ${lq}, ${(0,Oq.Eb)(Eq,xq)})`, `${cq}(diffuseSampler, diffuseSamplerSampler, ${lq}, ${(0,Oq.Eb)(Eq,xq)})`);
```

#### 38. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L362-L363` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L407-L408) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L362-L363)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${cT} {\n\t\t\t\t\t${(0,KT.y)(kT,"vec4","texel",lT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,KT … [truncated]
-             [(0, KT.C)(kT)]: `baseColor = ${OT};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${gq} {\n\t\t\t\t\t${(0,Oq.B)(Eq,"vec4","texel",Yq)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Oq … [truncated]
+             [(0, Oq.C)(Eq)]: `baseColor = ${mq};`
```

#### 39. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L369` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L414) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L369)

```diff
-   40739: (TT, kT, cT) => {
+   40862: (qq, Eq, gq) => {
```

#### 40. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L376-L386` → after: `L421-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L421-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L421-L431) · [Before (L376-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L376-L386)

```diff
-     var lT = cT(40747),
-       MT = cT(37868);
-     class KT extends((0, lT.i)(MT.b)) {}(0, lT.j)(MT.b, KT);
-     var OT = cT(36985);
-     class yT extends((0, lT.i)(OT.h)) {}(0, lT.j)(OT.h, yT);
-     var fT = cT(37709);
-     class xT extends((0, lT.i)(fT.e)) {}(0, lT.j)(fT.e, xT);
-     var IT = cT(37253),
-       AT = cT(39889),
-       CT = cT(37250);
-     class jT extends((0, lT.i)(CT.g)) {
+     var Yq = gq(40869),
+       lq = gq(37987);
+     class Oq extends((0, Yq.h)(lq.c)) {}(0, Yq.i)(lq.c, Oq);
+     var mq = gq(37206);
+     class xq extends((0, Yq.h)(mq.h)) {}(0, Yq.i)(mq.h, xq);
+     var Aq = gq(37828);
+     class cq extends((0, Yq.h)(Aq.e)) {}(0, Yq.i)(Aq.e, cq);
+     var uq = gq(37429),
+       Bq = gq(40003),
+       Wq = gq(37421);
+     class Nq extends((0, Yq.h)(Wq.f)) {
```

#### 41. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L388` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L433) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L388)

```diff
-         super(TT, kT, cT), (0, IT.h)(TT)
+         super(qq, Eq, gq), (0, uq.l)(qq)
```

#### 42. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L391` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L436) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L391)

```diff
-         (0, IT.i)(this._material), super.dispose(TT)
+         (0, uq.n)(this._material), super.dispose(qq)
```

#### 43. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L393` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L438) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L393)

```diff
-     }(0, lT.j)(CT.g, jT), (0, CT.j)({
+     }(0, Yq.i)(Wq.f, Nq), (0, Wq.i)({
```

#### 44. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L397-L406` → after: `L442-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L442-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L442-L451) · [Before (L397-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L397-L406)

```diff
-     var vT = cT(38525);
-     class tT extends((0, lT.i)(vT.d)) {}(0, lT.j)(vT.d, tT);
-     var hT = cT(38624),
-       NT = cT(37098),
-       QT = cT(37982),
-       ST = cT(37050);
-     class DT extends((0, lT.i)(hT.d)) {}(0, lT.j)(hT.d, DT);
-     class aT extends((0, lT.i)(NT.d)) {}(0, lT.j)(NT.d, aT);
-     class FT extends((0, lT.i)(QT.j)) {}(0, lT.j)(QT.j, FT);
-     class rT extends((0, lT.i)(ST.b)) {}(0, lT.j)(ST.b, rT)
+     var aq = gq(38662);
+     class Vq extends((0, Yq.h)(aq.e)) {}(0, Yq.i)(aq.e, Vq);
+     var dq = gq(38755),
+       jq = gq(37295),
+       Hq = gq(38114),
+       oq = gq(37253);
+     class Pq extends((0, Yq.h)(dq.d)) {}(0, Yq.i)(dq.d, Pq);
+     class Qq extends((0, Yq.h)(jq.d)) {}(0, Yq.i)(jq.d, Qq);
+     class yq extends((0, Yq.h)(Hq.l)) {}(0, Yq.i)(Hq.l, yq);
+     class tq extends((0, Yq.h)(oq.e)) {}(0, Yq.i)(oq.e, tq)
```

#### 45. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L408` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L453) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L408)

```diff
-   40747: (TT, kT, cT) => {
+   40869: (qq, Eq, gq) => {
```

#### 46. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L411-L412` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L456-L457) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L411-L412)

```diff
-       i: () => QT,
-       j: () => BT
+       h: () => Hq,
+       i: () => Xq
```

#### 47. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L414-L427` → after: `L459-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L459-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L459-L472) · [Before (L414-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L414-L427)

```diff
-     var lT = cT(39889),
-       MT = cT(40749),
-       KT = cT(40787),
-       OT = cT(40752),
-       yT = cT(37678),
-       fT = cT(37686),
-       xT = cT(37692),
-       IT = cT(37695),
-       AT = cT(37034),
-       CT = cT(37041),
-       jT = cT(40761),
-       vT = cT(37013),
-       tT = cT(37016),
-       hT = cT(36996);
+     var Yq = gq(40003),
+       lq = gq(40878),
+       Oq = gq(40910),
+       mq = gq(40883),
+       xq = gq(37803),
+       Aq = gq(37815),
+       cq = gq(37818),
+       uq = gq(37821),
+       Bq = gq(37242),
+       Wq = gq(37244),
+       Nq = gq(40889),
+       aq = gq(37230),
+       Vq = gq(37233),
+       dq = gq(37220);
```

#### 48. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L433` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L478) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L433)

```diff
-         nj: TT
+         LN: qq
```

#### 49. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L438` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L483) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L438)

```diff
-       const kT = class extends jT.c {
+       const Eq = class extends Nq.d {
```

#### 50. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L440-L441` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L485-L486) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L440-L441)

```diff
-             const lT = (0, tT.cb)(kT),
-               MT = lT && (0, tT.x)(lT, TT.name);
+             const Yq = (0, Vq.T)(Eq),
+               lq = Yq && (0, Vq.u)(Yq, qq.name);
```

#### 51. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L443` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L488) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L443)

```diff
-             super(kT, TT.name, TT.priority, MT ? MT.defines : TT.defines(...OT), !1), this.featureState = void 0, this.featureState = cT, this._pluginManager._addPlugin(this), this._enable(!0), (0, tT.B)(this._material, TT, this.featureState, this._pluginDefineNames)
+             super(Eq, qq.name, qq.priority, lq ? lq.defines : qq.defines(...mq), !1), this.featureState = void 0, this.featureState = gq, this._pluginManager._addPlugin(this), this._enable(!0), (0, Vq.w)(this._material, qq, this.featureState, this._pluginDefineNames)
```

#### 52. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L449` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L494) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L449)

```diff
-             return TT === hT.b.GLSL || TT === hT.b.WGSL
+             return qq === dq.d.GLSL || qq === dq.d.WGSL
```

#### 53. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L452-L453` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L497-L498) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L452-L453)

```diff
-         cT = (0, vT.j)(TT);
-       for (const [lT, MT] of Object.entries(vT.b)) {
+         gq = (0, aq.k)(qq);
+       for (const [Yq, lq] of Object.entries(aq.d)) {
```

#### 54. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L466-L468` → after: `L511-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L511-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L511-L513) · [Before (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L466-L468)

```diff
-     class ST extends(QT(yT.b)) {}
-     var DT = cT(39448),
-       aT = cT(40769);
+     class oq extends(Hq(xq.e)) {}
+     var Pq = gq(39585),
+       Qq = gq(40898);
```

#### 55. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L482-L483` → after: `L527-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L527-L528) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L482-L483)

```diff
-         } = TT.getSize(), KT = Math.round(MT / lT), yT = kT && kT.byteLength === lT * lT * KT * 4 ? kT : TT._readPixelsSync();
-         return new aT.d(yT, lT, lT, KT, DT.d.TEXTUREFORMAT_RGBA, cT, !0, !1, OT.c.NEAREST_NEAREST_MIPLINEAR)
+         } = qq.getSize(), Oq = Math.round(lq / Yq), xq = Eq && Eq.byteLength === Yq * Yq * Oq * 4 ? Eq : qq._readPixelsSync();
+         return new Qq.c(xq, Yq, Yq, Oq, Pq.b.TEXTUREFORMAT_RGBA, gq, !0, !1, mq.d.NEAREST_NEAREST_MIPLINEAR)
```

#### 56. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L488-L489` → after: `L533-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L533-L534) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L488-L489)

```diff
-     var PT = cT(37700);
-     class wT extends(QT(fT.g)) {
+     var rq = gq(37823);
+     class vq extends(Hq(Aq.j)) {
```

#### 57. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L494` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L539) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L494)

```diff
-               console.error(`Failed to build texture array for atlas ${kT}`, TT)
+               console.error(`Failed to build texture array for atlas ${Eq}`, qq)
```

#### 58. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L506-L507` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L551-L552) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L506-L507)

```diff
-           yT = MT.useWebGL2 ? await rT(TT, null !== (cT = null === (lT = MT.sources.pixels) || void 0 === lT ? void 0 : lT[kT]) && void 0 !== cT ? cT : null, this._material.NJ()) : null;
-         (0, PT.d)(this._material, MT, kT, yT, KT, Math.round(OT / KT), this._material.shaderLanguage)
+           xq = lq.useWebGL2 ? await tq(qq, null !== (gq = null === (Yq = lq.sources.pixels) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : null, this._material.ZJ()) : null;
+         (0, rq.e)(this._material, lq, Eq, xq, Oq, Math.round(mq / Oq), this._material.shaderLanguage)
```

#### 59. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L510-L518` → after: `L555-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L555-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L555-L563) · [Before (L510-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L510-L518)

```diff
-     var mT = cT(40774),
-       bT = cT(39926),
-       zT = cT(36885),
-       JT = cT(40778),
-       oT = cT(40038),
-       HT = cT(39917),
-       eT = cT(40726),
-       GT = cT(37442),
-       VT = cT(40781);
+     var hq = gq(40901),
+       nq = gq(40055),
+       bq = gq(37131),
+       iq = gq(40905),
+       Zq = gq(40176),
+       fq = gq(40040),
+       Mq = gq(40857),
+       Tq = gq(37586),
+       zq = gq(40908);
```

#### 60. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L530-L534` → after: `L575-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L575-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L575-L579) · [Before (L530-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L530-L534)

```diff
-       TransformNode: eT.b,
-       Ov: mT.e,
-       VertexBuffer: mT.i,
-       BoundingInfo: bT.e,
-       Fv: zT.Fv,
+       TransformNode: Mq.e,
+       IN: hq.e,
+       VertexBuffer: hq.f,
+       BoundingInfo: nq.d,
+       Na: bq.Na,
```

#### 61. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L538-L540` → after: `L583-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L583-L585) · [Before (L538-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L538-L540)

```diff
-       MirroredGeometry: VT.d,
-       meshFromArrays: VT.h,
-       plainMeshFromArrays: VT.j
+       MirroredGeometry: zq.b,
+       meshFromArrays: zq.f,
+       plainMeshFromArrays: zq.i
```

#### 62. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L542-L544` → after: `L587-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L587-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L587-L589) · [Before (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L542-L544)

```diff
-     (0, GT.i)(ZT);
-     var uT = cT(37253);
-     class XT extends(QT(IT.h)) {
+     (0, Tq.e)(pq);
+     var Gq = gq(37429);
+     class Lq extends(Hq(uq.g)) {
```

#### 63. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L550-L552` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L595-L597) · [Before (L550-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L550-L552)

```diff
-           const lT = (0, tT.cb)(TT);
-           lT && (lT.disableLighting = !0, (0, tT.ab)(lT))
-         }(0, uT.h)(TT)
+           const Yq = (0, Vq.T)(qq);
+           Yq && (Yq.disableLighting = !0, (0, Vq.Q)(Yq))
+         }(0, Gq.l)(qq)
```

#### 64. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L555` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L600) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L555)

```diff
-         (0, uT.i)(this._material), super.dispose(TT)
+         (0, Gq.n)(this._material), super.dispose(qq)
```

#### 65. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L567` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L612) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L567)

```diff
-     }(0, IT.g)({
+     }(0, uq.c)({
```

#### 66. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L570-L572` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L615-L617) · [Before (L570-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L570-L572)

```diff
-     var LT = cT(37127),
-       RT = cT(37452);
-     const gT = new RegExp(`^#define ${xT.e}\\s*$`, "m");
+     var kq = gq(37313),
+       Rq = gq(37601);
+     const Uq = new RegExp(`^#define ${cq.c}\\s*$`, "m");
```

#### 67. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L575` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L620) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L575)

```diff
-         super(TT, kT), this.yv = !1, kT.ditherOnlyWhileFading && (RT.e.add(TT), this.prewarmDitherTwins(TT))
+         super(qq, Eq), this.eN = !1, Eq.ditherOnlyWhileFading && (Rq.g.add(qq), this.prewarmDitherTwins(qq))
```

#### 68. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L587` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L632) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L587)

```diff
-           KT && !gT.test(lT.defines) && TT.NJ().onAfterRenderObservable.addOnce((() => {
+           Oq && !Uq.test(Yq.defines) && qq.ZJ().onAfterRenderObservable.addOnce((() => {
```

#### 69. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L593` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L638) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L593)

```diff
-         if (this.yv || TT.VkT()) return !1;
+         if (this.eN || qq.bM()) return !1;
```

#### 70. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L604` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L649) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L604)

```diff
-         this.yv = !0, super.dispose(TT)
+         this.eN = !0, super.dispose(qq)
```

#### 71. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L612` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L657) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L612)

```diff
-     BT(yT.b, ST), BT(fT.g, wT), BT(xT.j, UT), BT(IT.h, XT), (0, AT.c)({
+     Xq(xq.e, oq), Xq(Aq.j, vq), Xq(cq.j, Fq), Xq(uq.g, Lq), (0, Bq.e)({
```

#### 72. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L615` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L660) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L615)

```diff
-         return (0, LT.s)(TT, cT), cT.detailMap._pluginDefineNames
+         return (0, kq.t)(qq, gq), gq.detailMap._pluginDefineNames
```

#### 73. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L618` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L663) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L618)

```diff
-         (0, LT.Y)(TT.mirror, kT, cT)
+         (0, kq.W)(qq.mirror, Eq, gq)
```

#### 74. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L622` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L667) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L622)

```diff
-         if (!lT) throw new Error(`${kT.feature.name} has no plugin class (registerPluginClass)`);
+         if (!Yq) throw new Error(`${Eq.feature.name} has no plugin class (registerPluginClass)`);
```

#### 75. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L635-L636` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L680-L681) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L635-L636)

```diff
-           const cT = new OT.c(lT, kT, MT, KT, yT);
-           return Object.assign(cT, xT), void(0, CT.M)(TT, cT)
+           const gq = new mq.d(Yq, Eq, lq, Oq, xq);
+           return Object.assign(gq, cq), void(0, Wq.B)(qq, gq)
```

#### 76. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L641` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L686) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L641)

```diff
-               kT(new Error(`${fT.context}: ${(null===cT||void 0===cT?void 0:cT.message)||TT||"Failed to load texture"}`))
+               Eq(new Error(`${Aq.context}: ${(null===gq||void 0===gq?void 0:gq.message)||qq||"Failed to load texture"}`))
```

#### 77. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L658` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L703) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L658)

```diff
-           NT = new OT.c(null, kT, hT);
+           jq = new mq.d(null, Eq, dq);
```

#### 78. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L661` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L706) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L661)

```diff
-         QT && (QT.label = tT), TT.uvSet = NT.coordinatesIndex, TT.matrix.set((0, LT.R)(NT)), (0, CT.M)(TT, NT)
+         Hq && (Hq.label = Vq), qq.uvSet = jq.coordinatesIndex, qq.matrix.set((0, kq.R)(jq)), (0, Wq.B)(qq, jq)
```

#### 79. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L672-L675` → after: `L717-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L717-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L717-L720) · [Before (L672-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L672-L675)

```diff
-         } = TT.sampler, IT = xT === (0, CT.B)(yT) ? null : () => {
-           (0, LT.N)(AT, xT)
-         }, AT = new MT.b(lT, kT, null, yT, KT, IT, null, (0, CT.x)(fT));
-         AT.coordinatesMode = OT.c.SKYBOX_MODE, (0, CT.M)(TT, AT)
+         } = qq.sampler, uq = cq === (0, Wq.v)(xq) ? null : () => {
+           (0, kq.Q)(Bq, cq)
+         }, Bq = new lq.e(Yq, Eq, null, xq, Oq, uq, null, (0, Wq.u)(Aq));
+         Bq.coordinatesMode = mq.d.SKYBOX_MODE, (0, Wq.B)(qq, Bq)
```

#### 80. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L684` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L729) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L684)

```diff
-           wrap: IT = OT.c.CLAMP_ADDRESSMODE
+           wrap: uq = mq.d.CLAMP_ADDRESSMODE
```

#### 81. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L686` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L731) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L686)

```diff
-         const AT = new KT.d(kT, {
+         const Bq = new Oq.e(Eq, {
```

#### 82. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L691` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L736) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L691)

```diff
-         const CT = (0, LT.E)(AT);
+         const Wq = (0, kq.F)(Bq);
```

#### 83. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L696` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L741) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L696)

```diff
-   40781: (TT, kT, cT) => {
+   40908: (qq, Eq, gq) => {
```

#### 84. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L698-L700` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L743-L745) · [Before (L698-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L698-L700)

```diff
-       d: () => IT,
-       h: () => AT,
-       j: () => CT
+       b: () => uq,
+       f: () => Bq,
+       i: () => Wq
```

#### 85. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L702-L708` → after: `L747-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L747-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L747-L753) · [Before (L702-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L702-L708)

```diff
-     var lT = cT(40774),
-       MT = cT(39689),
-       KT = cT(39926),
-       OT = cT(40042),
-       yT = cT(40778),
-       fT = cT(40038),
-       xT = cT(37308);
+     var Yq = gq(40901),
+       lq = gq(39817),
+       Oq = gq(40055),
+       mq = gq(40180),
+       xq = gq(40905),
+       Aq = gq(40176),
+       cq = gq(37481);
```

#### 86. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L717` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L762) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L717)

```diff
-         (0, xT.i)(TT), this.model = TT, null === (kT = this.onLinked) || void 0 === kT || kT.call(this, TT)
+         (0, cq.q)(qq), this.model = qq, null === (Eq = this.onLinked) || void 0 === Eq || Eq.call(this, qq)
```

#### 87. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L744` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L789) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L744)

```diff
-         this.link(new xT.d(TT, kT, this.getTotalVertices(), new Float64Array(cT.acT()), new Float64Array(lT.acT())))
+         this.link(new cq.h(qq, Eq, this.getTotalVertices(), new Float64Array(gq.bYq()), new Float64Array(Yq.bYq())))
```

#### 88. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L748-L749` → after: `L793-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L793-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L793-L794) · [Before (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L748-L749)

```diff
-         const kT = new IT(TT, this.NJ()),
-           cT = this.FcT(void 0, !0);
+         const Eq = new uq(qq, this.ZJ()),
+           gq = this.iYq(void 0, !0);
```

#### 89. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L764-L765` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L809-L810) · [Before (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L764-L765)

```diff
-           const CT = TT.getIsInstanced() ? (cT instanceof Array ? 4 * cT.length : cT.byteLength) / IT : this.getTotalVertices(),
-             jT = (0, MT.m)(cT, yT, fT, xT, IT, CT, !0),
+           const Wq = qq.getIsInstanced() ? (gq instanceof Array ? 4 * gq.length : gq.byteLength) / uq : this.getTotalVertices(),
+             Nq = (0, lq.r)(gq, xq, Aq, cq, uq, Wq, !0),
```

#### 90. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L774` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L819) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L774)

```diff
-           kT.setVerticesBuffer(new lT.i(this.Dv(), jT, KT, vT), CT)
+           Eq.setVerticesBuffer(new Yq.f(this.Ba(), Nq, Oq, aq), Wq)
```

#### 91. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L776` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L821) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L776)

```diff
-         return kT._updatable = OT, kT._boundingInfo = new KT.e(this.extend.minimum, this.extend.maximum), kT.relink(), kT
+         return Eq._updatable = mq, Eq._boundingInfo = new Oq.d(this.extend.minimum, this.extend.maximum), Eq.relink(), Eq
```

#### 92. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L779` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L824) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L779)

```diff
-         const fT = TT[0].NJ(),
+         const Aq = qq[0].ZJ(),
```

#### 93. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L800` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L845) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L800)

```diff
-         this.model && ((0, xT.p)(this.model), this.model = null)
+         this.model && ((0, cq.x)(this.model), this.model = null)
```

#### 94. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L806` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L851) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L806)

```diff
-       const MT = (0, xT.h)(kT),
+       const lq = (0, cq.n)(Eq),
```

#### 95. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L815` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L860) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L815)

```diff
-       tT.positions = KT, tT.normals = null !== AT && void 0 !== AT ? AT : null, tT.uvs = null !== CT && void 0 !== CT ? CT : null, tT.indices = jT;
+       Vq.positions = Oq, Vq.normals = null !== Bq && void 0 !== Bq ? Bq : null, Vq.uvs = null !== Wq && void 0 !== Wq ? Wq : null, Vq.indices = Nq;
```

#### 96. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L842` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L887) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L842)

```diff
-   8855: (TT, kT, cT) => {
+   8794: (qq, Eq, gq) => {
```

#### 97. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L845-L846` → after: `L890-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L890-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L890-L891) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L845-L846)

```diff
-       f: () => yT,
-       i: () => fT
+       g: () => xq,
+       j: () => Aq
```

#### 98. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L848-L850` → after: `L893-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L893-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L893-L895) · [Before (L848-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L848-L850)

```diff
-     var lT = cT(2260),
-       MT = cT(1244),
-       KT = cT(2268);
+     var Yq = gq(2182),
+       lq = gq(1226),
+       Oq = gq(2189);
```

#### 99. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L859` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L904) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L859)

```diff
-         if ((0, KT.g)(TT) && !kT.has(TT) && (kT.add(TT), cT.push(TT), cT.length >= MT.n)) break
+         if ((0, Oq.k)(qq) && !Eq.has(qq) && (Eq.add(qq), gq.push(qq), gq.length >= lq.o)) break
```

#### 100. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L868` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L913) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L868)

```diff
-         if ((0, KT.g)(lT) && !kT.has(lT) && (kT.add(lT), cT.push(lT), cT.length >= MT.n)) break;
+         if ((0, Oq.k)(Yq) && !Eq.has(Yq) && (Eq.add(Yq), gq.push(Yq), gq.length >= lq.o)) break;
```

#### 101. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L873` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L918) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L873)

```diff
-       return fT(KT.e)
+       return Aq(Oq.f)
```

#### 102. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L878` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L923) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L878)

```diff
-       return "emote" === TT ? xT() : null !== (kT = AT[TT][0]) && void 0 !== kT ? kT : CT[TT]
+       return "emote" === qq ? cq() : null !== (Eq = Bq[qq][0]) && void 0 !== Eq ? Eq : Wq[qq]
```

#### 103. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L880` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L925) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L880)

```diff
-     const AT = MT.u.reduce(((TT, kT) => {
+     const Bq = lq.w.reduce(((qq, Eq) => {
```

#### 104. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L882` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L927) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L882)

```diff
-         for (const KT in lT.e[kT]) {
+         for (const Oq in Yq.f[Eq]) {
```

#### 105. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L884` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L929) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L884)

```diff
-           "default" === (null === (MT = (0, lT.j)(kT, KT)) || void 0 === MT ? void 0 : MT.cosmeticPack) && cT.push(KT)
+           "default" === (null === (lq = (0, Yq.l)(Eq, Oq)) || void 0 === lq ? void 0 : lq.cosmeticPack) && gq.push(Oq)
```

#### 106. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L888` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/154.js#L933) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/154.js#L888)

```diff
-       CT = MT.u.reduce(((TT, kT) => (TT[kT] = Object.keys(lT.e[kT])[0], TT)), {})
+       Wq = lq.w.reduce(((qq, Eq) => (qq[Eq] = Object.keys(Yq.f[Eq])[0], qq)), {})
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (59 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4-L2817` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L4-L8) · [Before (L4-L2817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4-L2817)

```diff
-   38914: (TT, kT, cT) => {
-     function lT(TT) {
-       return !(!TT.lobbyLeaderboardInfo && !TT.lobbyManage)
-     }
-     cT.d(kT, {
-       b: () => lT
-     })
-   },
-   38888: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => KT,
-       h: () => OT
-     });
-     var lT = cT(36);
-     let MT = !1;
- 
- ... (2798 more removed lines; see GitHub link above)
+   40829: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       openMobLineupPreview: () => Jq,
+       openMobPreview: () => Lq,
+       openPetPreview: () => kq
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2819-L2947` → after: `L10-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L10-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L10-L34) · [Before (L2819-L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L2819-L2947)

```diff
-     var lT = cT(3644),
-       MT = cT(8802),
-       KT = cT(36496),
-       OT = cT(1452),
-       yT = cT(36573),
-       fT = cT(38837),
-       xT = cT(38789),
-       IT = cT(3732),
-       AT = cT(37732),
-       CT = cT(1244),
-       jT = cT(328),
-       vT = cT(36),
-       tT = cT(1974),
-       hT = cT(118),
-       NT = cT(47),
-       QT = cT(2009),
- ... (113 more removed lines; see GitHub link above)
+     var Yq = gq(39585),
+       lq = gq(39833),
+       Oq = gq(40832),
+       mq = gq(37286),
+       xq = gq(37131),
+       Aq = gq(39988),
+       cq = gq(40857),
+       uq = gq(38455),
+       Bq = gq(37203),
+       Wq = gq(37183),
+       Nq = gq(37125),
+       aq = gq(38366),
+       Vq = gq(38364),
+       dq = gq(38074),
+       jq = gq(38130),
+       Hq = gq(38102),
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2949-L4006` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L36-L37) · [Before (L2949-L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L2949-L4006)

```diff
-     const Ik = () => xk;
-     let Ak, Ck, jk;
-     var vk, tk, hk, Nk, Qk, Sk, Dk, ak, Fk;
-     const rk = [0, 1, 8, 255, "length", 2, "f", "c", 16, "undefined", void 0, "b", 194, 3, 153, 223, 63, 6, "fromCodePoint", 7, 12, "push", null, 10, 18, 132, "j", "h", 91, 5, 209, 8191, 88, 13, 14, "e", 86, 177, !1, !0, "d", 173, 192, 178, 166, 9, 222, 4, 89, 101, 22, "i", 138,  … [truncated]
- 
-     function Pk(...TT) {
-       return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(TT) {
-         var kT, cT, lT, MT, KT, OT, yT;
-         for (bk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = rk[0], KT = rk[0], OT = -rk[1]), yT = rk[0]; yT < cT; yT++) {
-           var fT = 't^fD*kwg&6j}xAW>?%"7;@HiBrLdhJnpoEOb0,9)v`{8(:#yleRPGqCFcmUXQYKZaVIsM53STN[]u<=|24!+_./~1z$'.indexOf(kT[yT]);
-           if (fT !== -rk[1])
-             if (OT < rk[0]) OT = fT;
-             else {
-               bk(OT += fT * rk[28], MT |= OT << KT, KT += (OT & rk[31]) > rk[32] ? rk[33] : rk[34]);
-               do {
-                 bk(lT.push(MT & rk[3]), MT >>= rk[2], KT -= rk[2])
- ... (1042 more removed lines; see GitHub link above)
+     const bq = {},
+       iq = new Map;
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4009-L4046` → after: `L40-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L40-L56) · [Before (L4009-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4009-L4046)

```diff
-       xT.clear()
-     }
- 
-     function CT() {
-       for (const TT of xT.ids()) {
-         const kT = xT.getName(TT);
-         void 0 !== kT && OT.c.delete(kT)
-       }
-       AT(), yT.k.nt("playerRosterChanged", xT.ids())
-     }
- 
-     function jT(TT, kT) {
-       var cT, lT;
-       if (xT.has(TT)) return xT.getSetting(TT, kT);
-       const MT = (0, fT.f)();
-       return null === (cT = MT.IH[MT.jH]) || void 0 === cT || null === (lT = cT[TT]) || void 0 === lT ? void 0 : lT[kT]
- ... (22 more removed lines; see GitHub link above)
+       if (null !== nq) return nq;
+       const qq = document.createElement("canvas");
+       qq.classList.add("MobPreviewCanvas");
+       const Eq = new Yq.b(qq, !0, {
+         preserveDrawingBuffer: !0
+       });
+       Eq.vYq = (0, Pq.e)().Ma.engine.vYq;
+       const gq = new lq.e(Eq);
+       gq.clearColor = new mq.e(0, 0, 0, 0), gq.ambientColor = new mq.Color3(1, 1, 1);
+       const cq = new Oq.b("td", Math.PI / 2, Math.PI / 2, yq, xq.Na.Zero(), gq),
+         uq = new Aq.d("light", new xq.Na(-.1, 1, -.3), gq);
+       return uq.diffuse = new mq.Color3(1, 1, 1), uq.specular = new mq.Color3(1, 1, 1), uq.groundColor = new mq.Color3(.5, .5, .5), nq = {
+         engine: Eq,
+         PV: gq,
+         canvas: qq,
+         camera: cq
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4050-L4054` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L60-L62) · [Before (L4050-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4050-L4054)

```diff
-       let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xT.getSettings(TT);
-       if (kT) {
-         (0, MT.f)(TT);
-         for (const cT in kT)(0, MT.b)(TT, cT, kT[cT])
-       }
+       return bq[qq] ??= (0, dq.u)(qq, Zq().PV, !0).catch((Eq => {
+         throw delete bq[qq], Eq
+       })), bq[qq]
```

#### 6. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4058-L4140` → after: `L66-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L66-L69) · [Before (L4058-L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4058-L4140)

```diff
-       return TT === (0, fT.f)().W9 || (0, fT.c)().client.hasEntity(TT)
-     }(0, KT.onGameReset)(AT)
-   },
-   37930: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => mT,
-       d: () => FT,
-       g: () => PT,
-       h: () => wT,
-       k: () => bT
-     });
-     var lT = cT(36885),
-       MT = cT(37939),
-       KT = cT(350),
-       OT = cT.n(KT),
-       yT = cT(3343);
- ... (67 more removed lines; see GitHub link above)
+       let Eq = iq.get(qq);
+       return Eq || (Eq = oq.C[qq].loadModel(Zq().PV, !1).then((qq => (qq.hG(!1), qq)), (Eq => {
+         throw iq.delete(qq), Eq
+       })), iq.set(qq, Eq)), Eq
```

#### 7. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4144-L4207` → after: `L73-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L73-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L73-L121) · [Before (L4144-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4144-L4207)

```diff
-       var kT, cT;
-       return 1 / (null !== (kT = null === (cT = TT.gv.WkT()) || void 0 === cT ? void 0 : cT.projectionMatrix[0]) && void 0 !== kT ? kT : TT.gv.NJ().activeCamera.getProjectionMatrix().m[0])
-     }
- 
-     function bT(TT, kT, cT) {
-       const lT = TT.gv.WkT(),
-         MT = lT ? lT.worldMatrix : TT.gv.NJ().activeCamera.getWorldMatrix().m,
-         KT = TT.QC;
-       for (let OT = 0; OT < 3; OT++) kT[OT] = MT[12 + OT] + KT[OT], cT[OT] = MT[8 + OT];
-       OT().normalize(cT, cT)
-     }
- 
-     function zT(TT, kT) {
-       const cT = TT.QC,
-         lT = TT.gv.WkT(),
-         MT = lT ? DT.I5(lT.eye[0], lT.eye[1], lT.eye[2]) : TT.gv.camera.globalPosition;
- ... (48 more removed lines; see GitHub link above)
+       var Eq, gq, Yq;
+       let {
+         mobType: lq,
+         variation: Oq,
+         animation: mq
+       } = qq, Aq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const vq = null !== (Eq = null === Aq || void 0 === Aq ? void 0 : Aq.size) && void 0 !== Eq ? Eq : 1,
+         hq = null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.cosmetics) && void 0 !== gq ? gq : [],
+         nq = null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq.aZ) && void 0 !== Yq ? Yq : null;
+       let bq = !1,
+         iq = null,
+         Tq = null;
+       const {
+         engine: zq,
+         PV: Sq
+       } = Zq(), pq = Sq.onBeforeRenderObservable.add((() => {
+ ... (33 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4209-L4210` → after: `L123-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L123-L159) · [Before (L4209-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4209-L4210)

```diff
-       onResumed() {
-         this.controller.stop()
+     }
+ 
+     function zq(qq, Eq) {
+       return Tq({
+         mobType: "NPC",
+         variation: null,
+         animation: qq.animation
+       }, qq, Eq)
+     }
+ 
+     function Sq(qq) {
+       let {
+         mobType: Eq,
+         variation: gq,
+         metaInfo: Yq,
+         tamed: lq
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4212-L4215` → after: `L161-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L161-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L161-L172) · [Before (L4212-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4212-L4215)

```diff
-       leave() {
-         const TT = this.isResuming() && !this.controller.awaitingResumeOnRoom,
-           kT = this.controller.heldToken;
-         this.end(), TT && "" !== kT && this.hooks.releaseSeat(kT)
+     }
+     class pq {
+       constructor(qq, Eq) {
+         this.place = Eq, this.remove = null;
+         const {
+           engine: gq,
+           PV: Yq,
+           canvas: lq
+         } = Zq();
+         qq.appendChild(lq), gq.resize(), gq.runRenderLoop((() => {
+           Yq.render()
+         }))
```

#### 10. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4217-L4218` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L174-L176) · [Before (L4217-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4217-L4218)

```diff
-       end() {
-         this.ended = !0, this.controller.stop()
+       show(qq) {
+         var Eq;
+         null === (Eq = this.remove) || void 0 === Eq || Eq.call(this), this.remove = this.place(qq)
```

#### 11. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4220-L4224` → after: `L178-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L178-L183) · [Before (L4220-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4220-L4224)

```diff
-       onPhaseChanged(TT) {
-         const kT = "frozen" === TT || "resuming" === TT;
-         kT !== this.stopped && (this.stopped = kT, this.hooks.freeze(kT));
-         const cT = "frozen" === TT || "resuming" === TT && this.frozen;
-         cT && !this.frozen ? (0, MT.p)(OT) : !cT && this.frozen && (0, MT.o)(OT), this.frozen = cT, this.setListening("connected" !== TT), lT.k.nt(KT.p, cT ? "frozen" : TT)
+       resize(qq, Eq) {
+         const {
+           engine: gq,
+           canvas: Yq
+         } = Zq();
+         Yq.width = qq, Yq.height = Eq, gq.resize()
```

#### 12. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4226-L4227` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L185-L187) · [Before (L4226-L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4226-L4227)

```diff
-       setListening(TT) {
-         TT !== this.listening && (this.listening = TT, TT ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow … [truncated]
+       close() {
+         var qq;
+         Zq().engine.stopRenderLoop(), null === (qq = this.remove) || void 0 === qq || qq.call(this), this.remove = null
```

#### 13. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4237-L4244` → after: `L192-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L192-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L192-L195) · [Before (L4237-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4237-L4244)

```diff
-         let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-         this.onSilent = TT, this.now = kT, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
-           const TT = this.now(),
-             kT = TT - this.lastCheckAt <= 2e3;
-           this.lastCheckAt = TT;
-           const cT = "visible" === document.visibilityState;
-           !cT || kT && this.wasVisible || (this.resumedAt = TT), this.wasVisible = cT, cT && TT - this.lastHeardAt > 12e3 && TT - this.resumedAt > 2e3 && this.onSilent()
-         }, this.lastHeardAt = kT(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new pq(qq, (() => () => {}))
```

#### 14. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4246-L4247` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L197-L198) · [Before (L4246-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4246-L4247)

```diff
-       heard() {
-         this.lastHeardAt = this.now()
+       show(qq) {
+         qq.figures !== this.view.figures && this.preload(qq.figures), this.view = qq, this.place()
```

#### 15. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4249-L4250` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L200-L201) · [Before (L4249-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4249-L4250)

```diff
-       dispose() {
-         clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
+       resize(qq, Eq) {
+         this.preview.resize(qq, Eq), this.aspect = qq / Eq, this.place()
```

#### 16. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4252-L4316` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L203-L206) · [Before (L4252-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4252-L4316)

```diff
-     }
-   },
-   38837: (TT, kT, cT) => {
-     cT.d(kT, {
-       b: () => CT
-     });
-     var lT = cT(218),
-       MT = cT(350),
-       KT = cT.n(MT),
-       OT = cT(36573),
-       yT = cT(36580),
-       fT = cT(2790);
-     const xT = lT.f.Iw * lT.f.playerEyeToHeightRatio,
-       IT = 250,
-       AT = 1.1,
-       CT = new class {
- ... (49 more removed lines; see GitHub link above)
+       close() {
+         this.preview.close();
+         for (const qq of this.placed) null === qq || void 0 === qq || qq.remove();
+         this.placed = []
```

#### 17. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4318-L4356` → after: `L208-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L208-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L208-L214) · [Before (L4318-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4318-L4356)

```diff
-   },
-   38875: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => xT,
-       e: () => IT
-     });
-     var lT = cT(1730),
-       MT = cT(218),
-       KT = cT(1710),
-       OT = cT(1790),
-       yT = cT(1202),
-       fT = cT(1136);
-     async function xT(TT, kT) {
-       return function(TT) {
-         return "object" === typeof TT && null !== TT && TT.code === MT.c.VpnIp.code
-       }(kT) && function(TT) {
- ... (23 more removed lines; see GitHub link above)
+       preload(qq) {
+         const Eq = () => {};
+         fq("NPC").catch(Eq);
+         for (const {
+             aZ: gq
+           }
+           of qq) null !== gq && Mq(gq).catch(Eq)
```

#### 18. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4358-L4391` → after: `L216-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L216-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L216-L233) · [Before (L4358-L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4358-L4391)

```diff
-       return kT()
-     }
-   },
-   38868: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => CT,
-       e: () => IT
-     });
-     var lT = cT(218),
-       MT = cT(1828),
-       KT = cT(1833),
-       OT = cT(8924);
-     const yT = [250, 500, 1e3, 2e3, 1250],
-       fT = 406;
- 
-     function xT(TT) {
- ... (18 more removed lines; see GitHub link above)
+       place() {
+         const {
+           figures: qq,
+           shown: Eq
+         } = this.view, gq = qq.map(((gq, Yq) => {
+           var lq;
+           const Oq = null !== (lq = this.placed[Yq]) && void 0 !== lq ? lq : null;
+           if (!Eq[Yq]) return null === Oq || void 0 === Oq || Oq.remove(), null;
+           const mq = (xq = (Yq + .5) / qq.length, Aq = this.aspect, (.5 - xq) * (2 * yq * Math.tan(Zq().camera.fov / 2)) * Aq);
+           var xq, Aq;
+           return null !== Oq && Oq.figure === gq && Oq.x === mq ? Oq : (null === Oq || void 0 === Oq || Oq.remove(), {
+             figure: gq,
+             x: mq,
+             remove: zq(gq, mq)
+           })
+         }));
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4397-L4399` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L238) · [Before (L4397-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4397-L4399)

```diff
-       if (xT(TT)) return !0;
-       const kT = (0, OT.f)(TT);
-       return "number" === typeof kT && AT.has(kT)
+       return new pq(qq, Tq)
```

#### 20. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4410` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L242) · [Before (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4410)

```diff
-       return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
+       return new Gq(qq)
```

#### 21. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4413-L4421` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L245-L246) · [Before (L4413-L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4413-L4421)

```diff
-     function KT(TT, kT) {
-       "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([cT.e(106), cT.e(107), cT.e(102), cT.e(104), cT.e(210)]).then((() => cT(41307))).then((cT => {
-         let {
-           runClientGameMessage: lT
-         } = cT;
-         lT(TT, kT)
-       })).catch((kT => {
-         console.error(`Game message ${TT} failed`, kT)
-       })) : lT.k.nt("showPetUi", kT) : lT.k.nt("refetchCode")
+     function kq(qq) {
+       return new pq(qq, Sq)
```

#### 22. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4424` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L249) · [Before (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4424)

```diff
-   8924: (TT, kT, cT) => {
+   38755: (qq, Eq, gq) => {
```

#### 23. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4426-L4430` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L251) · [Before (L4426-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4426-L4430)

```diff
-       b: () => KT,
-       f: () => OT,
-       j: () => yT,
-       l: () => xT,
-       n: () => fT
+       d: () => Wq
```

#### 24. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4432-L4440` → after: `L253-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L253-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L253-L270) · [Before (L4432-L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4432-L4440)

```diff
-     var lT = cT(218),
-       MT = cT(4611);
- 
-     function KT(TT) {
-       return OT(TT) === lT.c.gameOrPluginOnPlayerAuthRejected.code
-     }
- 
-     function OT(TT) {
-       return "object" === typeof TT && null !== TT ? TT.code : void 0
+     var Yq = gq(37212),
+       lq = gq(37228),
+       Oq = gq(37443),
+       mq = gq(37230),
+       xq = gq(37220);
+ 
+     function Aq(qq) {
+       return `\n\t\t\t\t${(0,xq.t)(qq,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, xq.B)(qq, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, xq.B)(qq, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, xq.n)(qq, "mat2", "c", "s", "-s", "c")
+ ... (2 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4443-L4445` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L273-L277) · [Before (L4443-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4443-L4445)

```diff
-     function yT(TT) {
-       var kT;
-       return null !== (kT = Object.keys(MT.d).find((kT => MT.d[kT] === TT))) && void 0 !== kT ? kT : null
+     function cq(qq, Eq) {
+       let gq = (0, xq.Eb)(qq, "skele" + (Eq - 1));
+       for (let lq = Eq - 2; lq >= 0; lq--) gq = (0, xq.tb)(qq, `boneIdx == ${lq}`, (0, xq.Eb)(qq, `skele${lq}`), gq);
+       const Yq = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,xq.B)(qq,"int","boneIdx",(0,xq.xb)(qq,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xq.B)(qq,"vec3","bone",gq)}\n\t\t\t\t${(0,xq.B)(qq,"vec2","pivot",(0,xq.n)(qq,"vec2","0.0",`${(0,xq.Ib)(qq,"position")}.z`))}\n\t\t\t\t${(0,xq.ab)(qq)?`posit … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4449` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L281) · [Before (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4449)

```diff
-       return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xq.n)(qq,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 27. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4452-L4456` → after: `L284-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L284-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L284-L324) · [Before (L4452-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4452-L4456)

```diff
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
-     }
+         x: 0,
+         y: 0,
+         z: 0,
+         ogq(qq, Eq) {
+           return this.x = qq[Eq], this.y = qq[Eq + 1], this.z = qq[Eq + 2], this
+         }
+       },
+       Wq = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (qq, Eq) => ({
+           ...(0, Yq.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${qq}`,
+           BLOXD_CAPE_MAX_Y: (0, lq.ob)(Eq)
+         }),
+ ... (25 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4458` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L326) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4458)

```diff
-   38879: (TT, kT, cT) => {
+   38662: (qq, Eq, gq) => {
```

#### 29. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4460-L4461` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L328-L329) · [Before (L4460-L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4460-L4461)

```diff
-       c: () => lT,
-       f: () => MT
+       d: () => uq,
+       e: () => Bq
```

#### 30. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4463-L4468` → after: `L331-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L331-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L331-L367) · [Before (L4463-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4463-L4468)

```diff
-     const lT = 45e3;
-     class MT extends Error {
-       constructor() {
-         super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
-       }
-     }
+     var Yq = gq(37212),
+       lq = gq(37443),
+       Oq = gq(37220),
+       mq = gq(37230);
+     const xq = "bloxdTextLodBias",
+       Aq = [{
+         name: xq,
+         type: "float"
+       }],
+       cq = "bloxdTextSample",
+       uq = {
+         planes: -.5,
+         boards: -.5
+       },
+       Bq = {
+         name: "TextSampler",
+ ... (21 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4470-L4472` → after: `L369-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L369-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L369-L374) · [Before (L4470-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4470-L4472)

```diff
-   38808: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => IT
+   40862: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       CapeMaterialPlugin: () => Pq,
+       HueTintMaterialPlugin: () => Qq,
+       LifeformMaterialPlugin: () => yq,
+       OverlayMaterialPlugin: () => tq
```

#### 32. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4474-L4491` → after: `L376-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L376-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L376-L406) · [Before (L4474-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4474-L4491)

```diff
-     var lT = cT(1226),
-       MT = cT(1333),
-       KT = cT(31),
-       OT = cT(1316),
-       yT = cT(1327),
-       fT = cT(1530),
-       xT = cT(36284);
- 
-     function IT(TT) {
-       let {
-         tc: kT,
-         hc: cT
-       } = TT;
-       const IT = null !== kT && void 0 !== kT ? kT : (0, yT.b)().gameNameWithVariation;
-       (0, lT.H)(IT) && ((0, xT.l)(), (0, OT.$)((() => {
-         console.log("Received matchmaking order from game server to game", kT), (0, KT.l)("inGameReplay"), (0, fT.navigatePreserveSearch)((0, MT.c)(IT, null !== cT && void 0 !== cT ? cT : void 0))
- ... (2 more removed lines; see GitHub link above)
+     var Yq = gq(40869),
+       lq = gq(37987);
+     class Oq extends((0, Yq.h)(lq.c)) {}(0, Yq.i)(lq.c, Oq);
+     var mq = gq(37206);
+     class xq extends((0, Yq.h)(mq.h)) {}(0, Yq.i)(mq.h, xq);
+     var Aq = gq(37828);
+     class cq extends((0, Yq.h)(Aq.e)) {}(0, Yq.i)(Aq.e, cq);
+     var uq = gq(37429),
+       Bq = gq(40003),
+       Wq = gq(37421);
+     class Nq extends((0, Yq.h)(Wq.f)) {
+       constructor(qq, Eq, gq) {
+         super(qq, Eq, gq), (0, uq.l)(qq)
+       }
+       dispose(qq) {
+         (0, uq.n)(this._material), super.dispose(qq)
+ ... (15 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4493` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L408) · [Before (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4493)

```diff
-   38799: (TT, kT, cT) => {
+   40869: (qq, Eq, gq) => {
```

#### 34. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4495-L4496` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L410) · [Before (L4495-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4495-L4496)

```diff
-       d: () => fT,
-       g: () => OT,
+       e: () => Jq,
```

#### 35. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4498` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L412) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4498)

```diff
-       k: () => xT
+       i: () => Xq
```

#### 36. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4500-L4502` → after: `L414-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L414-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L414-L427) · [Before (L4500-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4500-L4502)

```diff
-     var lT = cT(36),
-       MT = cT(1363);
-     const KT = new Map;
+     var Yq = gq(40003),
+       lq = gq(40878),
+       Oq = gq(40910),
+       mq = gq(40883),
+       xq = gq(37803),
+       Aq = gq(37815),
+       cq = gq(37818),
+       uq = gq(37821),
+       Bq = gq(37242),
+       Wq = gq(37244),
+       Nq = gq(40889),
+       aq = gq(37230),
+       Vq = gq(37233),
+       dq = gq(37220);
```

#### 37. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4505-L4508` → after: `L430-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L430-L434) · [Before (L4505-L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4505-L4508)

```diff
-       lT.k.nt("newUiRequest", {
-         id: TT,
-         clientParameters: kT
-       }, !0)
+       return Object.assign((function(qq, gq, Yq, lq) {
+         return Eq(this.featureState, qq, gq, Yq, lq)
+       }), {
+         LN: qq
+       })
```

#### 38. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4512-L4520` → after: `L438-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L438-L464) · [Before (L4512-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4512-L4520)

```diff
-       lT.k.nt("removeUiRequest", TT, !0);
-       const kT = KT.get(TT);
-       kT && (kT.tearDownNotification(), KT.delete(TT))
-     }
- 
-     function fT() {
-       lT.k.nt("clearUiRequests");
-       for (const TT of KT.values()) TT.tearDownNotification();
-       KT.clear()
+       const Eq = class extends Nq.d {
+           constructor(Eq, gq) {
+             const Yq = (0, Vq.T)(Eq),
+               lq = Yq && (0, Vq.u)(Yq, qq.name);
+             for (var Oq = arguments.length, mq = new Array(Oq > 2 ? Oq - 2 : 0), xq = 2; xq < Oq; xq++) mq[xq - 2] = arguments[xq];
+             super(Eq, qq.name, qq.priority, lq ? lq.defines : qq.defines(...mq), !1), this.featureState = void 0, this.featureState = gq, this._pluginManager._addPlugin(this), this._enable(!0), (0, Vq.w)(this._material, qq, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return qq.className
+           }
+           isCompatible(qq) {
+             return qq === dq.d.GLSL || qq === dq.d.WGSL
+           }
+         },
+         gq = (0, aq.k)(qq);
+       for (const [Yq, lq] of Object.entries(aq.d)) {
+ ... (11 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4524-L4549` → after: `L472-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L472-L475) · [Before (L4524-L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4524-L4549)

```diff
-       const lT = MT.NotificationProvider.showPromptPopup({
-         title: kT,
-         confirmText: "general:yes",
-         cancelText: "general:no",
-         unlockPointerKey: "uiRequestPopup"
-       });
-       KT.set(TT, lT), lT.getResult().then((kT => {
-         KT.delete(TT), "notificationTornDown" !== kT && cT(kT)
-       }))
-     }
-   },
-   38819: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => yT,
-       d: () => fT,
-       g: () => xT
- ... (10 more removed lines; see GitHub link above)
+       let Yq = yq.get(gq);
+       Yq || (Yq = new Map, yq.set(gq, Yq));
+       const {
+         url: lq
```

#### 40. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4551` → after: `L477-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L477-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L477-L556) · [Before (L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4551)

```diff
-       return !(0, lT.K)(kT) || null !== cT && (cT.startsWith("testGym") || (0, MT.j)(cT))
+       let Oq = Yq.get(lq);
+       return Oq || (Oq = async function(qq, Eq, gq) {
+         const {
+           width: Yq,
+           height: lq
+         } = qq.getSize(), Oq = Math.round(lq / Yq), xq = Eq && Eq.byteLength === Yq * Yq * Oq * 4 ? Eq : qq._readPixelsSync();
+         return new Qq.c(xq, Yq, Yq, Oq, Pq.b.TEXTUREFORMAT_RGBA, gq, !0, !1, mq.d.NEAREST_NEAREST_MIPLINEAR)
+       }(qq, Eq, gq), Yq.set(lq, Oq), Oq.catch((() => {
+         Yq.delete(lq)
+       }))), Oq
+     }
+     var rq = gq(37823);
+     class vq extends(Hq(Aq.j)) {
+       constructor(qq, Eq) {
+         super(qq, Eq), Eq.textures.forEach(((qq, Eq) => {
+           qq.mirror.onLoadObservable.add((qq => {
+ ... (64 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4554-L4555` → after: `L559-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L559-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L559-L605) · [Before (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4554-L4555)

```diff
-     function fT(TT) {
-       return TT.jl === KT.b.Leave || TT.jl === KT.b.Cursor
+     function Jq(qq, Eq) {
+       if (!(Eq instanceof Yq.StandardMaterial) || Eq.specularTexture) return;
+       const {
+         r: gq,
+         g: lq,
+         b: Oq
+       } = Eq.specularColor;
+       0 === gq && 0 === lq && 0 === Oq && (qq.SPECULARTERM = !1)
+     }(0, uq.c)({
+       disableUnusedSpecularTerm: Jq
+     });
+     var kq = gq(37313),
+       Rq = gq(37601);
+     const Uq = new RegExp(`^#define ${cq.c}\\s*$`, "m");
+     class Fq extends(Hq(cq.j)) {
+       constructor(qq, Eq) {
+ ... (31 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4558-L4574` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L609-L610) · [Before (L4558-L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4558-L4574)

```diff
-     function xT(TT) {
-       OT.k.nt("codeCollab", {
-         type: TT.jl,
-         docKey: TT.vl,
-         version: TT.tl,
-         editorCount: TT.hl,
-         peers: TT.Nl,
-         updates: TT.Ql,
-         playerId: TT.Sl,
-         playerName: TT.Dl,
-         colour: TT.al,
-         anchor: TT.Fl,
-         head: TT.rl,
-         existingCursors: TT.Pl,
-         files: TT.wl,
-         engineSettings: TT.ml
- ... (1 more removed lines; see GitHub link above)
+     function Xq(qq, Eq) {
+       sq.set(qq, Eq)
```

#### 43. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4577` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L696) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4577)

```diff
-   38832: (TT, kT, cT) => {
+   40908: (qq, Eq, gq) => {
```

#### 44. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4579` → after: `L698-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L698-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L698-L700) · [Before (L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4579)

```diff
-       d: () => lT
+       b: () => uq,
+       f: () => Bq,
+       i: () => Wq
```

#### 45. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4581` → after: `L702-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L702-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L702-L709) · [Before (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4581)

```diff
-     class lT {
+     var Yq = gq(40901),
+       lq = gq(39817),
+       Oq = gq(40055),
+       mq = gq(40180),
+       xq = gq(40905),
+       Aq = gq(40176),
+       cq = gq(37481);
+     class uq extends mq.d {
```

#### 46. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4583` → after: `L711-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L711-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L711-L713) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4583)

```diff
-         this.members = new Map
+         super(...arguments), this.model = null, this.onGeometryUpdated = (qq, Eq) => {
+           this.releaseUnlessInstanced(Eq)
+         }, this.onLinked = null
```

#### 47. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4585-L4602` → after: `L715-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L715-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L715-L737) · [Before (L4585-L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4585-L4602)

```diff
-       apply(TT) {
-         const kT = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const lT of TT.yk) {
-           let TT = this.members.get(lT.fk);
-           if (TT || (TT = {
-               name: null,
-               settings: {}
-             }, this.members.set(lT.fk, TT), kT.added.push(lT.fk)), null !== lT.xk && (TT.name = lT.xk), null !== lT.Ik || lT.Ak.length > 0) {
-             const cT = null === lT.Ik ? {} : JSON.parse(lT.Ik);
-             Object.assign(TT.settings, cT);
-             for (const kT of lT.Ak) delete TT.settings[kT], cT[kT] = void 0;
-             kT.settingChanges.push({
- ... (2 more removed lines; see GitHub link above)
+       link(qq) {
+         var Eq;
+         (0, cq.q)(qq), this.model = qq, null === (Eq = this.onLinked) || void 0 === Eq || Eq.call(this, qq)
+       }
+       relink() {
+         this.release();
+         const qq = [];
+         for (const lq of Object.values(this._vertexBuffers))
+           if (!lq.getIsInstanced()) {
+             const {
+               byteOffset: Eq,
+               byteStride: gq,
+               type: Yq,
+               normalized: Oq
+             } = lq;
+             qq.push({
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4604-L4612` → after: `L739-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L739-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L739-L774) · [Before (L4604-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4604-L4612)

```diff
-           }
-         }
-         for (const lT of TT.Ck) {
-           const TT = this.members.get(lT);
-           var cT;
-           if (TT) this.members.delete(lT), kT.removed.push({
-             playerId: lT,
-             name: null !== (cT = TT.name) && void 0 !== cT ? cT : void 0
-           })
+           } const Eq = this._indices.length ? this._indices : null,
+           {
+             minimum: gq,
+             maximum: Yq
+           } = this.extend;
+         this.link(new cq.h(qq, Eq, this.getTotalVertices(), new Float64Array(gq.bYq()), new Float64Array(Yq.bYq())))
+       }
+       copy(qq) {
+         if (!this.model) return super.copy(qq);
+         const Eq = new uq(qq, this.ZJ()),
+           gq = this.iYq(void 0, !0);
+         gq && Eq.setIndices(gq);
+         let mq = !1;
+         for (const Oq in this._vertexBuffers) {
+           const qq = this._vertexBuffers[Oq],
+             gq = qq.getData();
+ ... (20 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4614-L4617` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L776) · [Before (L4614-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4614-L4617)

```diff
-         return kT
-       }
-       has(TT) {
-         return this.members.has(TT)
+         return Eq._updatable = mq, Eq._boundingInfo = new Oq.d(this.extend.minimum, this.extend.maximum), Eq.relink(), Eq
```

#### 50. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4619-L4620` → after: `L778-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L778-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L778-L787) · [Before (L4619-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4619-L4620)

```diff
-       ids() {
-         return [...this.members.keys()]
+       static mergeMeshes(qq, Eq, gq, Yq, lq, Oq) {
+         const Aq = qq[0].ZJ(),
+           cq = new xq.c(qq[0].name + "_merged", Aq),
+           Bq = new uq(mq.d.RandomId(), Aq, void 0, !1, cq);
+         try {
+           if (!xq.c.MergeMeshes(qq, Eq, gq, cq, lq, Oq)) return cq.dispose(), null
+         } catch (Wq) {
+           throw cq.dispose(), Wq
+         }
+         return Bq.relink(), cq
```

#### 51. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4622-L4624` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L789-L790) · [Before (L4622-L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4622-L4624)

```diff
-       getName(TT) {
-         var kT, cT;
-         return null !== (kT = null === (cT = this.members.get(TT)) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : void 0
+       removeVerticesData(qq) {
+         this.releaseUnlessInstanced(qq), super.removeVerticesData(qq)
```

#### 52. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4626-L4628` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L792-L793) · [Before (L4626-L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4626-L4628)

```diff
-       getSettings(TT) {
-         var kT;
-         return null === (kT = this.members.get(TT)) || void 0 === kT ? void 0 : kT.settings
+       dispose() {
+         this.release(), super.dispose()
```

#### 53. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4630` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L795) · [Before (L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4630)

```diff
-       getSetting(TT, kT) {
+       releaseUnlessInstanced(qq) {
```

#### 54. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4632` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L797) · [Before (L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4632)

```diff
-         return null === (cT = this.members.get(TT)) || void 0 === cT ? void 0 : cT.settings[kT]
+         qq && null !== (Eq = this.getVertexBuffer(qq)) && void 0 !== Eq && Eq.getIsInstanced() || this.release()
```

#### 55. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4634-L4635` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L799-L800) · [Before (L4634-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4634-L4635)

```diff
-       clear() {
-         this.members.clear()
+       release() {
+         this.model && ((0, cq.x)(this.model), this.model = null)
```

#### 56. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4639` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L842) · [Before (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4639)

```diff
-   38856: (TT, kT, cT) => {
+   8794: (qq, Eq, gq) => {
```

#### 57. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4641-L4642` → after: `L844-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L844-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L844-L846) · [Before (L4641-L4642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4641-L4642)

```diff
-       c: () => lT,
-       e: () => MT
+       e: () => uq,
+       g: () => xq,
+       j: () => Aq
```

#### 58. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4644` → after: `L848-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L848-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L848-L851) · [Before (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4644)

```diff
-     const lT = ["description", "label"];
+     var Yq = gq(2182),
+       lq = gq(1226),
+       Oq = gq(2189);
+     const mq = ",";
```

#### 59. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4647-L4650` → after: `L854-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L854-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/155.js#L854-L859) · [Before (L4647-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/155.js#L4647-L4650)

```diff
-       const kT = TT.type;
-       return {
-         type: kT,
-         params: TT[kT]
+       if (!qq) return [];
+       const Eq = new Set,
+         gq = [];
+       for (const Yq of qq.split(mq)) {
+         const qq = Yq.trim();
+         if ((0, Oq.k)(qq) && !Eq.has(qq) && (Eq.add(qq), gq.push(qq), gq.length >= lq.o)) break
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 1. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L6` → after: `L4-L1934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L4-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/156.js#L4-L1934) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/156.js#L4-L6)

```diff
-   8954: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       pageBody: () => lT
+   39056: (qq, Eq, gq) => {
+     function Yq(qq) {
+       return !(!qq.lobbyLeaderboardInfo && !qq.lobbyManage)
+     }
+     gq.d(Eq, {
+       d: () => Yq
+     })
+   },
+   39024: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq,
+       c: () => mq
+     });
+     var Yq = gq(31);
+     let lq = !1;
+ 
+ ... (1915 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L9-L41` → after: `L2913-L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2913-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/156.js#L2913-L4361) · [Before (L9-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/156.js#L9-L41)

```diff
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
-       faq: [{
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
-       }, {
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
-       }, {
-         question: "What happens after your bed is destroyed?",
-         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
-       }, {
-         question: "What do the Bedwars generators do?",
- ... (17 more removed lines; see GitHub link above)
+       forward: "freeCamForward",
+       backward: "freeCamBackward",
+       left: "freeCamLeft",
+       right: "freeCamRight",
+       jump: "freeCamUp",
+       crouch: "freeCamDown"
+     };
+ 
+     function qE() {
+       var qq, Eq;
+       return !(null === (qq = (0, hq.b)().client) || void 0 === qq || null === (Eq = qq.freeCameraController) || void 0 === Eq || !Eq.movesFly())
+     }
+ 
+     function EE(qq) {
+       const Eq = qq.on.bind(qq);
+       qq.on = (qq, gq) => {
+ ... (1433 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L4)

```diff
-   8963: (TT, kT, cT) => {
+   8883: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L9-L13)

```diff
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L15-L16)

```diff
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L18-L19)

```diff
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L21-L22)

```diff
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L24-L25)

```diff
-         question: "What are Clovers in Lucky Bedwars?",
-         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L27-L28)

```diff
-         question: "What's inside Evil Lucky Blocks?",
-         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L30-L31` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/157.js#L30-L40) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/157.js#L30-L31)

```diff
-         question: "What are the Lucky Bedwars events?",
-         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
+       }, {
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
+       }, {
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L4)

```diff
-   8967: (TT, kT, cT) => {
+   8886: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L9-L13)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L15-L16)

```diff
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L18-L19)

```diff
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L21-L22)

```diff
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L24-L25)

```diff
-         question: "What are the best Skywars kits?",
-         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L27-L28)

```diff
-         question: "What do perks do in Bloxd Skywars?",
-         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/158.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/158.js#L30-L37)

```diff
-         question: "How do I get Gold in Skywars?",
-         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
-       }, {
-         question: "How many players fit in one Skywars match?",
-         answer: "Up to 12 players fight it out in each free-for-all match."
-       }, {
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   8969: (TT, kT, cT) => {
+   8888: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L9-L13)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L15-L16)

```diff
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L21-L22)

```diff
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L24-L25)

```diff
-         question: "What items can you get in Lucky Towers?",
-         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L27-L28)

```diff
-         question: "Which random events can happen in Lucky Towers?",
-         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L30-L31)

```diff
-         question: "Which maps are in Lucky Towers?",
-         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/159.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/159.js#L33-L34)

```diff
-         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
-         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
+       }, {
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L4)

```diff
-   8973: (TT, kT, cT) => {
+   8894: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L24-L25)

```diff
-         question: "What is the Ultra Lucky Block?",
-         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L27-L28)

```diff
-         question: "What's inside Bloxd lucky blocks?",
-         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L30-L31)

```diff
-         question: "Can other players attack me in my base?",
-         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
```

#### 9. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/160.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/160.js#L33-L34)

```diff
-         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
-         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   8977: (TT, kT, cT) => {
+   8900: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L9-L13)

```diff
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L15-L16)

```diff
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L18-L19)

```diff
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L21-L22)

```diff
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L24-L25)

```diff
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
-         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L27-L28)

```diff
-         question: "Can I make a private server in Bloxd Survival?",
-         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L30-L31)

```diff
-         question: "What happens if I log out during a fight?",
-         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/161.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/161.js#L33-L37)

```diff
-         question: "Will my world still be there tomorrow?",
-         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
-       }, {
-         question: "Which Bloxd survival mode should I play?",
-         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   8983: (TT, kT, cT) => {
+   8908: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L9-L13)

```diff
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L15-L16)

```diff
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L18-L19)

```diff
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L21-L22)

```diff
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L24-L25)

```diff
-         question: "Are there mobs in Bloxd Peaceful?",
-         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L27-L28)

```diff
-         question: "What's the difference between Peaceful and Survival in Bloxd?",
-         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L30-L31)

```diff
-         question: "Is Bloxd Peaceful good for beginners?",
-         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
```

#### 9. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L33-L34)

```diff
-         question: "Can I play Bloxd Peaceful with friends?",
-         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
```

#### 10. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L36-L40` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/162.js#L36-L37) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/162.js#L36-L40)

```diff
-         question: "How do I keep my builds safe in Peaceful?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
-       }, {
-         question: "How do I save my progress in Bloxd Peaceful?",
-         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   8985: (TT, kT, cT) => {
+   8912: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L9-L13)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L15-L16)

```diff
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L21-L22)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L24-L25)

```diff
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L31` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/163.js#L30-L40) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/163.js#L30-L31)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+       }, {
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   8990: (TT, kT, cT) => {
+   8915: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L9-L13)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L15-L16)

```diff
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L18-L19)

```diff
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L21-L22)

```diff
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L24-L25)

```diff
-         question: "Do mobs carry guns in Bloxd?",
-         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L27-L28)

```diff
-         question: "Can my pets use guns?",
-         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/164.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/164.js#L30-L34)

```diff
-         question: "Can I turn guns on in a private server?",
-         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
-       }, {
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   8992: (TT, kT, cT) => {
+   8918: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L9-L13)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L15-L16)

```diff
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L21-L22)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L24-L25)

```diff
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L27-L28)

```diff
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L30-L31)

```diff
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
```

#### 9. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/165.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/165.js#L33-L34)

```diff
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   8995: (TT, kT, cT) => {
+   8922: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/166.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/166.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
+       }, {
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   8997: (TT, kT, cT) => {
+   8928: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/167.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/167.js#L30-L37)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
-       }, {
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   9e3: (TT, kT, cT) => {
+   8936: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L30-L31)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
```

#### 9. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/168.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/168.js#L33-L34)

```diff
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```
