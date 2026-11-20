# Changed — Bundle Modifications Report (Part 114 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `114 / 115` (**306** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 113](part-113.md) · [Part 115 →](part-115.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/main.js` (1153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 784. `bundles/bloxd.io/main.js` (Changed code · before: `L35756-L35757` → after: `L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13648) · [Before (L35756-L35757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35756-L35757)

```diff
-             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
-             return Math.round(Math.min(bT * 2 ** TT, zT) * (.75 + .5 * kT()))
+             return "intel_arc" === qq || "intel_xe_lpg_plus" === qq
```

#### 785. `bundles/bloxd.io/main.js` (Changed code · before: `L35761` → after: `L13663-L13676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13663-L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13663-L13676) · [Before (L35761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35761)

```diff
-             return kT === mT && cT ? null : TT
+             switch (qq) {
+               case "windows":
+                 return "intel" === Eq ? `windows_intel_${gq()}` : "nvidia" === Eq || "amd" === Eq ? `windows_${Eq}` : "other";
+               case "macos":
+                 return "apple" === Eq ? "mac_apple" : "mac_other";
+               case "chrome_os":
+                 return "intel" === Eq ? "chromeos_intel" : "chromeos_other";
+               case "android":
+                 return "qualcomm" === Eq || "arm" === Eq ? `android_${Eq}` : "android_other";
+               case "ios":
+                 return "ios";
+               default:
+                 return "other"
+             }
```

#### 786. `bundles/bloxd.io/main.js` (Changed code · before: `L35764-L35782` → after: `L13730-L13732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13730-L13732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13730-L13732) · [Before (L35764-L35782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35764-L35782)

```diff
-           function RT(TT, kT) {
-             return new Promise((cT => {
-               let lT = null;
-               const MT = TT => {
-                   null !== lT && clearTimeout(lT), window.removeEventListener("online", yT), kT.removeEventListener("abort", KT), cT(TT)
-                 },
-                 KT = () => {
-                   MT(!1)
-                 },
-                 OT = () => {
-                   lT = setTimeout((() => {
-                     MT(!0)
-                   }), TT)
-                 },
-                 yT = () => {
-                   window.removeEventListener("online", yT), OT()
- ... (3 more removed lines; see GitHub link above)
+           function uq(qq) {
+             var Eq, gq;
+             return null === (Eq = /\(0x(?:0000)?([0-9a-f]{4})\)/i.exec(qq)) || void 0 === Eq || null === (gq = Eq[1]) || void 0 === gq ? void 0 : gq.toLowerCase()
```

#### 787. `bundles/bloxd.io/main.js` (Changed code · before: `L35786-L35787` → after: `L13736-L13758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13736-L13758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13736-L13758) · [Before (L35786-L35787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35786-L35787)

```diff
-             const kT = Math.max(0, Math.ceil(TT / 1e3));
-             return `${Math.floor(kT/60)}:${(kT%60).toString().padStart(2,"0")}`
+             const Eq = qq.toLowerCase(),
+               gq = uq(Eq);
+             if (void 0 !== gq) {
+               for (const [qq, Eq, Yq] of mq)
+                 if (qq.includes(gq)) return {
+                   family: Eq,
+                   tier: Yq
+                 };
+               for (const [qq, Eq, Yq] of xq)
+                 if (qq.includes(gq.slice(0, 2))) return {
+                   family: Eq,
+                   tier: Yq
+                 }
+             }
+             for (const [Yq, lq, Oq] of cq)
+               if (Yq.test(Eq)) return {
+ ... (7 more added lines; see GitHub link above)
```

#### 788. `bundles/bloxd.io/main.js` (Changed code · before: `L35789-L35794` → after: `L13760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13760) · [Before (L35789-L35794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35789-L35794)

```diff
-         },
-         2753: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => MT
-           });
-           var lT = cT(71);
+           let Wq = null;
```

#### 789. `bundles/bloxd.io/main.js` (Changed code · before: `L35796-L35808` → after: `L13762-L13769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13762-L13769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13762-L13769) · [Before (L35796-L35808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35796-L35808)

```diff
-           function MT(TT) {
-             let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-             const [cT, MT] = (0, lT.useState)(Date.now);
-             return (0, lT.useEffect)((() => {
-               if (!kT) return;
-               MT(Date.now());
-               const cT = setInterval((() => {
-                 MT(Date.now())
-               }), TT);
-               return () => {
-                 clearInterval(cT)
-               }
-             }), [TT, kT]), cT
+           function Nq() {
+             var qq;
+             return Wq ??= function() {
+               const qq = (0, Yq.getOperatingSystem)();
+               if ("windows" !== qq) return Vq(qq, (0, Yq.getGpuVendor)());
+               const Eq = (0, lq.w)();
+               return null === Eq ? null : dq(Eq)
+             }(), null !== (qq = Wq) && void 0 !== qq ? qq : "other"
```

#### 790. `bundles/bloxd.io/main.js` (Changed code · before: `L35845-L35846` → after: `L13773-L13785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13773-L13785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13773-L13785) · [Before (L35845-L35846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35845-L35846)

```diff
-             const kT = document.activeElement;
-             kT instanceof HTMLElement && !TT.contains(kT) && kT.blur()
+             if (null !== Wq) return Wq;
+             const Eq = (0, Yq.getOperatingSystem)(),
+               gq = (0, lq.p)();
+             if ("windows" === Eq) {
+               const qq = null === gq ? (0, lq.t)() : gq;
+               return qq ? dq(qq) : null
+             }
+             const Oq = qq || (null === gq || void 0 === gq ? void 0 : gq.vendor);
+             return Oq ? Vq(Eq, (0, Yq.normaliseGpuVendor)(Oq)) : null
+           }
+ 
+           function Vq(qq, Eq) {
+             return Oq(qq, Eq, (() => "unknown"))
```

#### 791. `bundles/bloxd.io/main.js` (Changed code · before: `L35850` → after: `L13789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13789) · [Before (L35850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35850)

```diff
-             TT.preventDefault(), jT(TT.currentTarget)
+             return Oq("windows", (0, Yq.normaliseGpuVendor)(qq.vendor), (() => Bq(qq.renderer).tier))
```

#### 792. `bundles/bloxd.io/main.js` (Changed code · before: `L35853-L35865` → after: `L13792-L13894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13792-L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13792-L13894) · [Before (L35853-L35865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35853-L35865)

```diff
-           function tT() {
-             let {
-               disabled: TT,
-               keys: kT = ["Enter", " "],
-               stopPropagation: cT = !1,
-               focusOnClick: lT = !0
-             } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-             return {
-               role: "button",
-               tabIndex: TT ? -1 : 0,
-               "aria-disabled": !!TT || void 0,
-               ...lT ? {} : {
-                 onMouseDown: vT
+           function jq(qq, Eq) {
+             const gq = qq * Eq / 1e6;
+             return gq < 1 ? "under_1" : gq < 2 ? "1_to_2" : gq < 4 ? "2_to_4" : "4_plus"
+           }
+         }, , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             b: () => oq,
+             c: () => jq,
+             d: () => dq,
+             f: () => Qq,
+             g: () => Pq
+           });
+           var Yq = gq(96),
+             lq = gq(128),
+             Oq = gq(171),
+             mq = gq(260);
+ ... (87 more added lines; see GitHub link above)
```

#### 793. `bundles/bloxd.io/main.js` (Changed code · before: `L35867-L35868` → after: `L13896-L13905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13896-L13905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13896-L13905) · [Before (L35867-L35868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35867-L35868)

```diff
-               onKeyDown: TT ? void 0 : TT => {
-                 kT.includes(TT.key) && (TT.preventDefault(), cT && TT.stopPropagation(), TT.currentTarget.click())
+               amd: {
+                 gcn1: "amd_gcn",
+                 gcn2: "amd_gcn",
+                 gcn3: "amd_gcn",
+                 gcn4: "amd_gcn",
+                 gcn5: "amd_gcn",
+                 rdna1: "amd_rdna_1_2",
+                 rdna2: "amd_rdna_1_2",
+                 rdna3: "amd_rdna_3_plus",
+                 rdna4: "amd_rdna_3_plus"
```

#### 794. `bundles/bloxd.io/main.js` (Changed code · before: `L35870-L36053` → after: `L13907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13907) · [Before (L35870-L36053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L35870-L36053)

```diff
-             }
-           }
-           const hT = (0, lT.forwardRef)(((TT, kT) => (0, AT.jsx)("div", {
-               className: `ExitButton ${TT.className}`,
-               "data-pad-close-button": !0,
-               children: (0, AT.jsx)(FT, {
-                 ...TT,
-                 children: (0, AT.jsx)("div", {
-                   className: "ExitButtonInner",
-                   children: (0, AT.jsx)(OT.e, {
-                     name: "x"
-                   })
-                 })
-               })
-             }))),
-             NT = (0, lT.forwardRef)(((TT, kT) => (0, AT.jsx)(PT, {
- ... (168 more removed lines; see GitHub link above)
+             };
```

#### 795. `bundles/bloxd.io/main.js` (Changed code · before: `L36055-L36060` → after: `L13909-L13914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13909-L13914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13909-L13914) · [Before (L36055-L36060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36055-L36060)

```diff
-           function mT(TT) {
-             return (0, lT.forwardRef)(((kT, cT) => (0, AT.jsx)(wT, {
-               ...kT,
-               className: CT(TT, kT.className),
-               ref: cT
-             })))
+           function Vq(qq, Eq) {
+             var gq;
+             return null === (gq = qq.find((qq => {
+               let [gq] = qq;
+               return gq.test(Eq)
+             }))) || void 0 === gq ? void 0 : gq[1]
```

#### 796. `bundles/bloxd.io/main.js` (Changed code · before: `L36066-L36098` → after: `L13917-L13951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13917-L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13917-L13951) · [Before (L36066-L36098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36066-L36098)

```diff
-           function oT() {
-             return (0, AT.jsx)("svg", {
-               className: "RainbowSecondaryButtonGradientDefs",
-               "aria-hidden": !0,
-               focusable: !1,
-               children: (0, AT.jsx)("defs", {
-                 children: (0, AT.jsxs)("linearGradient", {
-                   id: "RainbowSecondaryButtonGradient",
-                   children: [(0, AT.jsx)("stop", {
-                     offset: "0%",
-                     stopColor: "#ff6b9d"
-                   }), (0, AT.jsx)("stop", {
-                     offset: "16.6%",
-                     stopColor: "#ffa64d"
-                   }), (0, AT.jsx)("stop", {
-                     offset: "33.3%",
- ... (17 more removed lines; see GitHub link above)
+           function dq(qq, Eq) {
+             var gq, lq;
+             if ((0, Oq.f)(Eq)) return "unknown";
+             if ((0, Oq.h)(Eq)) return "other";
+             const aq = Eq.toLowerCase().trim();
+             var dq;
+             if (/\b(mali|immortalis)\b/.test(aq)) return null !== (dq = Vq(xq, aq)) && void 0 !== dq ? dq : "other_arm";
+             const jq = /\badreno\D*(\d)\d\d/.exec(aq);
+             var Hq;
+             if (jq) return null !== (Hq = Aq[jq[1]]) && void 0 !== Hq ? Hq : "other_qualcomm";
+             if (/powervr|\bimg\b/.test(aq)) return /rogue|\bg[emt]\d{4}/.test(aq) ? "powervr_rogue" : /[bd]-series|\b[bd]x[met]\b/.test(aq) ? "powervr_b_d" : "other_powervr";
+             if (/xclipse/.test(aq)) return "samsung_xclipse";
+             if (/\bapple\b/.test(aq)) return "apple";
+             const oq = null !== (gq = Vq(Wq, aq)) && void 0 !== gq ? gq : (0, Yq.normaliseGpuVendor)(qq),
+               Pq = mq.h.test(aq) ? void 0 : function(qq, Eq) {
+                 switch (qq) {
+ ... (19 more added lines; see GitHub link above)
```

#### 797. `bundles/bloxd.io/main.js` (Changed code · before: `L36129-L36151` → after: `L13954-L13958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13954-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13954-L13958) · [Before (L36129-L36151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36129-L36151)

```diff
-           function GT(TT) {
-             let {
-               children: kT,
-               onClick: cT,
-               isLiked: lT,
-               className: MT,
-               isLoading: KT = !1,
-               disabled: OT = !1,
-               padSecondary: yT = !1
-             } = TT;
-             return (0, AT.jsx)(ET, {
-               onClick: cT,
-               isLoading: KT,
-               disabled: OT,
-               padSecondaryLabelKey: yT ? "controller:menusFavourite" : void 0,
-               showConfetti: lT,
- ... (7 more removed lines; see GitHub link above)
+           function jq(qq, Eq) {
+             var gq, lq, Oq;
+             const mq = (0, Yq.normaliseGpuVendor)(qq),
+               xq = Eq.toLowerCase().replace(/[^a-z0-9]/g, "");
+             return null !== (gq = null !== (lq = null === (Oq = aq[mq]) || void 0 === Oq ? void 0 : Oq[xq]) && void 0 !== lq ? lq : Nq[mq]) && void 0 !== gq ? gq : "other"
```

#### 798. `bundles/bloxd.io/main.js` (Changed code · before: `L36154-L36172` → after: `L13962-L13968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13962-L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13962-L13968) · [Before (L36154-L36172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36154-L36172)

```diff
-           function VT(TT) {
-             let {
-               children: kT,
-               onClick: cT,
-               className: lT,
-               isLoading: MT = !1,
-               disabled: KT = !1
-             } = TT;
-             return (0, AT.jsx)(ET, {
-               onClick: cT,
-               isLoading: MT,
-               disabled: KT,
-               showConfetti: !1,
-               className: CT("ReportButton", {
-                 [lT]: lT
-               }),
- ... (3 more removed lines; see GitHub link above)
+           function oq() {
+             return Hq ??= function() {
+               const qq = (0, lq.n)();
+               if (null !== qq) return dq(qq.vendor, qq.renderer);
+               const Eq = (0, lq.j)();
+               return null === Eq ? null : jq(Eq.vendor, Eq.architecture)
+             }(), Hq
```

#### 799. `bundles/bloxd.io/main.js` (Changed code · before: `L36176-L36217` → after: `L13972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13972) · [Before (L36176-L36217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36176-L36217)

```diff
-             let {
-               children: kT,
-               onClick: cT,
-               showConfetti: lT,
-               className: yT,
-               confettiClassName: fT,
-               icon: xT,
-               isLoading: IT = !1,
-               disabled: jT = !1,
-               padSecondaryLabelKey: vT
-             } = TT;
-             return (0, AT.jsxs)("div", {
-               ...tT({
-                 disabled: IT || jT,
-                 stopPropagation: !0
-               }),
- ... (26 more removed lines; see GitHub link above)
+             return "nvidia_pre_turing" === qq
```

#### 800. `bundles/bloxd.io/main.js` (Changed code · before: `L36220-L36244` → after: `L13975-L13995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13975-L13995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13975-L13995) · [Before (L36220-L36244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36220-L36244)

```diff
-           function ZT(TT) {
-             let {
-               children: kT,
-               onClick: cT,
-               className: lT,
-               icon: MT = "arrow-left",
-               padBack: KT = !1,
-               padDestructive: yT = !1,
-               showPress: xT = !1
-             } = TT;
-             return (0, AT.jsxs)("div", {
-               ...tT({
-                 disabled: !1
-               }),
-               "data-pad-back": KT || void 0,
-               "data-pad-destructive": yT || void 0,
- ... (9 more removed lines; see GitHub link above)
+           function Qq(qq, Eq) {
+             if (qq) {
+               const Eq = qq.trim(),
+                 gq = mq.h.test(Eq),
+                 Yq = function(qq) {
+                   var Eq, gq, Yq;
+                   const lq = /^angle \((.*)\)$/i.exec(qq);
+                   if (!lq) return qq;
+                   const Oq = lq[1].split(", "),
+                     mq = null !== (Eq = Oq[1]) && void 0 !== Eq ? Eq : Oq[0];
+                   return null !== (gq = null === (Yq = /^vulkan [\d.]+ \((.*)\)$/i.exec(mq)) || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== gq ? gq : mq.replace(/^angle metal renderer:\s*/i, "")
+                 }(Eq.replace(mq.h, "")).replace(/\s+(direct3d\d*|d3d\d+|opengl|vulkan|metal)\b.*$/i, ""),
+                 lq = (0, mq.p)(Yq),
+                 Oq = `${void 0===lq?"":`:${lq}`}${gq?":similar":""}`;
+               return `${Yq.replace(/\(0x[0-9a-f]+\)/gi,"").replace(/\((r|tm)\)|[\xae\u2122]/gi,"").toLowerCase().replace(/[^a-z0-9.-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,64-Oq.length)}${Oq}`
+             }
+ ... (5 more added lines; see GitHub link above)
```

#### 801. `bundles/bloxd.io/main.js` (Changed code · before: `L36246-L36247` → after: `L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13997) · [Before (L36246-L36247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36246-L36247)

```diff
-         },
-         4355: (TT, kT, cT) => {
+         }, , , , , , (qq, Eq, gq) => {
```

#### 802. `bundles/bloxd.io/main.js` (Changed code · before: `L36249` → after: `L13999-L14000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13999-L14000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L13999-L14000) · [Before (L36249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36249)

```diff
-             d: () => FT
+             d: () => lq,
+             h: () => Oq
```

#### 803. `bundles/bloxd.io/main.js` (Changed code · before: `L36251-L36283` → after: `L14002-L14003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14002-L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14002-L14003) · [Before (L36251-L36283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36251-L36283)

```diff
-           var lT = cT(1398);
- 
-           function MT(TT) {
-             return MT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
-               return typeof TT
-             } : function(TT) {
-               return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
-             }, MT(TT)
-           }
- 
-           function KT(TT) {
-             var kT = function(TT, kT) {
-               if ("object" != MT(TT) || !TT) return TT;
-               var cT = TT[Symbol.toPrimitive];
-               if (void 0 !== cT) {
-                 var lT = cT.call(TT, kT || "default");
- ... (17 more removed lines; see GitHub link above)
+           var Yq = gq(38);
+           const lq = "antiAliasing";
```

#### 804. `bundles/bloxd.io/main.js` (Changed code · before: `L36285-L36293` → after: `L14005-L14006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14005-L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14005-L14006) · [Before (L36285-L36293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36285-L36293)

```diff
-           function fT(TT, kT) {
-             var cT = Object.keys(TT);
-             if (Object.getOwnPropertySymbols) {
-               var lT = Object.getOwnPropertySymbols(TT);
-               kT && (lT = lT.filter((function(kT) {
-                 return Object.getOwnPropertyDescriptor(TT, kT).enumerable
-               }))), cT.push.apply(cT, lT)
-             }
-             return cT
+           function Oq() {
+             return null === Yq.i.getItem(lq) || null === Yq.i.getItem("pixelScale")
```

#### 805. `bundles/bloxd.io/main.js` (Changed code · before: `L36296-L36305` → after: `L14032-L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14032-L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14032-L14033) · [Before (L36296-L36305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36296-L36305)

```diff
-           function xT(TT) {
-             for (var kT = 1; kT < arguments.length; kT++) {
-               var cT = null != arguments[kT] ? arguments[kT] : {};
-               kT % 2 ? fT(Object(cT), !0).forEach((function(kT) {
-                 OT(TT, kT, cT[kT])
-               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : fT(Object(cT)).forEach((function(kT) {
-                 Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
-               }))
-             }
-             return TT
+           function Vq() {
+             return `${(0,xq.getBrowserName)()} ${String((0,xq.getBrowserVersion)()).split(".")[0]}`
```

#### 806. `bundles/bloxd.io/main.js` (Changed code · before: `L36308-L36311` → after: `L14036-L14044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14036-L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14036-L14044) · [Before (L36308-L36311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36308-L36311)

```diff
-           function IT(TT, kT) {
-             for (var cT = 0; cT < kT.length; cT++) {
-               var lT = kT[cT];
-               lT.enumerable = lT.enumerable || !1, lT.configurable = !0, "value" in lT && (lT.writable = !0), Object.defineProperty(TT, KT(lT.key), lT)
+           function dq() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cq.i.getItem(lq.hc);
+             if (null === qq) return null;
+             if ("object" === typeof qq && qq.browser === Vq()) {
+               let Eq = qq;
+               if (void 0 === Eq.at && (Eq = {
+                   ...Eq,
+                   at: Date.now()
+                 }, cq.i.setItem(lq.hc, Eq)), Date.now() - Eq.at < Bq) return Eq
```

#### 807. `bundles/bloxd.io/main.js` (Changed code · before: `L36317-L36319` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14050) · [Before (L36317-L36319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36317-L36319)

```diff
-             return CT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
-               return TT.__proto__ || Object.getPrototypeOf(TT)
-             }, CT(TT)
+             return "number" === typeof qq.hiddenLosses ? qq.hiddenLosses : null
```

#### 808. `bundles/bloxd.io/main.js` (Changed code · before: `L36323-L36328` → after: `L14057-L14061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14057-L14061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14057-L14061) · [Before (L36323-L36328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36323-L36328)

```diff
-             try {
-               var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
-             } catch (TT) {}
-             return (jT = function() {
-               return !!TT
-             })()
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+               Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
+             const gq = (0, Aq.f)(),
+               Yq = null !== gq && (Eq - gq < Nq || null !== qq && gq > qq);
+             return document.hidden || Yq ? "hidden" : "visible"
```

#### 809. `bundles/bloxd.io/main.js` (Changed code · before: `L36333-L36357` → after: `L14065-L14083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14065-L14083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14065-L14083) · [Before (L36333-L36357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36333-L36357)

```diff
-             var kT = jT();
-             return function() {
-               var cT, lT = CT(TT);
-               if (kT) {
-                 var KT = CT(this).constructor;
-                 cT = Reflect.construct(lT, arguments, KT)
-               } else cT = lT.apply(this, arguments);
-               return function(TT, kT) {
-                 if (kT && ("object" === MT(kT) || "function" === typeof kT)) return kT;
-                 if (void 0 !== kT) throw new TypeError("Derived constructors may only return object or undefined");
-                 return (0, vT.b)(TT)
-               }(this, cT)
-             }
-           }
-           var hT = cT(71),
-             NT = cT(1046),
- ... (9 more removed lines; see GitHub link above)
+             var Eq, gq;
+             const Yq = cq.i.setItem(lq.hc, function(qq, Eq, gq) {
+                 var Yq, lq;
+                 const mq = null === qq ? 0 : jq(qq),
+                   xq = null !== qq && gq - qq.at < Oq.k ? (null !== (Yq = qq.losses) && void 0 !== Yq ? Yq : 1) + 1 : 1;
+                 if ("hidden" === Eq && null !== mq) {
+                   if (null === qq) return {
+                     browser: Vq(),
+                     at: gq,
+                     hiddenLosses: 1,
+                     firstPage: Eq,
+                     losses: xq
+                   };
+                   const Yq = aq && mq + 1 <= Wq;
+                   return {
+                     ...qq,
+ ... (3 more added lines; see GitHub link above)
```

#### 810. `bundles/bloxd.io/main.js` (Changed code · before: `L36475-L36549` → after: `L14086-L14097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14086-L14097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14086-L14097) · [Before (L36475-L36549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36475-L36549)

```diff
-               }]) && IT(kT.prototype, cT), MT && IT(kT, MT), Object.defineProperty(kT, "prototype", {
-                 writable: !1
-               }), fT
-             }(hT.Component);
-           ST.defaultProps = {
-             prefixCls: "rc-checkbox",
-             className: "",
-             style: {},
-             type: "checkbox",
-             defaultChecked: !1,
-             onFocus: function() {},
-             onBlur: function() {},
-             onChange: function() {},
-             onKeyDown: function() {},
-             onKeyPress: function() {},
-             onKeyUp: function() {}
- ... (59 more removed lines; see GitHub link above)
+                 return {
+                   browser: Vq(),
+                   at: gq,
+                   firstPage: null === qq ? Eq : null !== (lq = qq.firstPage) && void 0 !== lq ? lq : "visible",
+                   losses: xq
+                 }
+               }(dq(), qq, Date.now())),
+               mq = null !== (Eq = cq.i.getItem(uq)) && void 0 !== Eq ? Eq : {};
+             return cq.i.setItem(uq, {
+               ...mq,
+               [qq]: (null !== (gq = mq[qq]) && void 0 !== gq ? gq : 0) + 1
+             }), Yq
```

#### 811. `bundles/bloxd.io/main.js` (Changed code · before: `L36553-L36556` → after: `L14101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14101) · [Before (L36553-L36556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36553-L36556)

```diff
-             var TT;
-             const kT = null !== (TT = document.querySelector(".WholeAppWrapperInner")) && void 0 !== TT ? TT : document.body,
-               cT = (0, AT.h)();
-             return null === cT || cT.contains(kT) ? kT : cT
+             return null !== rq()
```

#### 812. `bundles/bloxd.io/main.js` (Changed code · before: `L36559-L36581` → after: `L14104-L14108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14104-L14108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14104-L14108) · [Before (L36559-L36581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36559-L36581)

```diff
-           function tT(TT) {
-             let {
-               children: kT,
-               tooltipInner: cT,
-               hideTooltip: lT = !1,
-               delayShow: MT = 600,
-               delayHide: KT = 100,
-               placement: yT = "bottom",
-               hoverOnly: fT = !1,
-               tooltipClassName: xT = ""
-             } = TT;
-             const [IT, AT] = (0, OT.useState)(null), [jT] = (0, OT.useState)((() => new ST(AT)));
-             return jT.delayShow = MT, jT.delayHide = KT, jT.hoverOnly = fT, (0, CT.jsxs)(CT.Fragment, {
-               children: [(0, OT.cloneElement)(kT, {
-                 ref: jT.setRef
-               }), null !== IT && !lT && (0, CT.jsx)(hT, {
- ... (7 more removed lines; see GitHub link above)
+           function rq() {
+             const qq = dq();
+             if (null === qq) return null;
+             const Eq = jq(qq);
+             return aq && null !== Eq && Eq <= Wq ? null : qq
```

#### 813. `bundles/bloxd.io/main.js` (Changed code · before: `L36584-L36602` → after: `L14111-L14114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14111-L14114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14111-L14114) · [Before (L36584-L36602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36584-L36602)

```diff
-           function hT(TT) {
-             let {
-               reference: kT,
-               placement: cT,
-               className: lT,
-               onPressOutside: KT,
-               children: OT
-             } = TT;
-             return (0, xT.s)() ? (0, yT.createPortal)((0, CT.jsx)(IT, {
-               trigger: kT,
-               className: MT()("tooltip-container SmallTextLight", lT),
-               children: OT
-             }), vT()) : (0, CT.jsx)(DT, {
-               reference: kT,
-               placement: cT,
-               className: lT,
- ... (3 more removed lines; see GitHub link above)
+           function vq() {
+             var qq;
+             const Eq = rq();
+             return null !== Eq && ("ios" !== (0, xq.getOperatingSystem)() || (null !== (qq = Eq.losses) && void 0 !== qq ? qq : 1) > 1)
```

#### 814. `bundles/bloxd.io/main.js` (Changed code · before: `L36605-L36644` → after: `L14117-L14122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14117-L14122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14117-L14122) · [Before (L36605-L36644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36605-L36644)

```diff
-           function NT(TT) {
-             return "touch" === TT.pointerType || "pen" === TT.pointerType && 0 !== (1 & TT.buttons)
-           }
-           let QT = !1;
-           if ("undefined" !== typeof document) {
-             const TT = TT => {
-               QT = NT(TT)
-             };
-             document.addEventListener("pointerdown", TT, {
-               capture: !0,
-               passive: !0
-             }), document.addEventListener("pointermove", TT, {
-               capture: !0,
-               passive: !0
-             })
-           }
- ... (24 more removed lines; see GitHub link above)
+           function hq() {
+             var qq, Eq;
+             const gq = "none" === Pq ? null : cq.i.getItem(uq);
+             return null !== gq && cq.i.removeItem(uq), {
+               hidden: null !== (qq = null === gq || void 0 === gq ? void 0 : gq.hidden) && void 0 !== qq ? qq : null,
+               visible: null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.visible) && void 0 !== Eq ? Eq : null
```

#### 815. `bundles/bloxd.io/main.js` (Changed code · before: `L36648-L36688` → after: `L14126-L14127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14126-L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14126-L14127) · [Before (L36648-L36688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36648-L36688)

```diff
-           function DT(TT) {
-             let {
-               reference: kT,
-               placement: cT,
-               className: lT,
-               onPressOutside: fT,
-               children: xT
-             } = TT;
-             const {
-               getArrowProps: IT,
-               getTooltipProps: AT,
-               setTooltipRef: jT,
-               setTriggerRef: tT,
-               tooltipRef: hT
-             } = (0, KT.e)({
-               placement: cT,
- ... (25 more removed lines; see GitHub link above)
+           function nq() {
+             return null !== dq()
```

#### 816. `bundles/bloxd.io/main.js` (Changed code · before: `L36701-L36732` → after: `L14130-L14135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14130-L14135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14130-L14135) · [Before (L36701-L36732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36701-L36732)

```diff
-           function fT(TT) {
-             let {
-               errorString: kT
-             } = TT;
-             const {
-               t: cT
-             } = (0, MT.B)(), [fT, xT] = (0, lT.useState)(!1);
-             return (0, yT.jsxs)("div", {
-               className: "CopyErrorBox",
-               children: [(0, yT.jsx)("div", {
-                 className: "CopyErrorBoxBody",
-                 children: kT
-               }), (0, yT.jsxs)(OT.e, {
-                 className: "CopyErrorBoxButton",
-                 onClick: () => {
-                   navigator.clipboard.writeText(kT).then((() => {
- ... (16 more removed lines; see GitHub link above)
+           function bq() {
+             return {
+               atLoad: Hq,
+               now: cq.i.getItem(lq.hc),
+               unreported: cq.i.getItem(uq)
+             }
```

#### 817. `bundles/bloxd.io/main.js` (Changed code · before: `L36734-L36735` → after: `L14137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14137) · [Before (L36734-L36735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36734-L36735)

```diff
-         },
-         3428: (TT, kT, cT) => {
+         }, , , (qq, Eq, gq) => {
```

#### 818. `bundles/bloxd.io/main.js` (Changed code · before: `L36737` → after: `L14139-L14142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14139-L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14139-L14142) · [Before (L36737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36737)

```diff
-             b: () => OT
+             c: () => mq,
+             f: () => Bq,
+             g: () => uq,
+             j: () => cq
```

#### 819. `bundles/bloxd.io/main.js` (Changed code · before: `L36739-L36741` → after: `L14144-L14145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14144-L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14144-L14145) · [Before (L36739-L36741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36739-L36741)

```diff
-           var lT = cT(71),
-             MT = cT(2938),
-             KT = cT(1099);
+           var Yq = gq(38),
+             lq = gq(284);
```

#### 820. `bundles/bloxd.io/main.js` (Changed code · before: `L36744-L36775` → after: `L14148-L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14148-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14148-L14165) · [Before (L36744-L36775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36744-L36775)

```diff
-             let {
-               toTime: kT,
-               onReachEndOfCountdown: cT = () => {}
-             } = TT;
-             const OT = (0, MT.b)(),
-               yT = (0, lT.useRef)(!1);
-             return (0, lT.useEffect)((() => {
-               const TT = setInterval((() => {
-                 OT()
-               }), 1e3);
-               return () => {
-                 clearInterval(TT)
-               }
-             }), [OT]), (0, KT.jsx)("div", {
-               className: "CountdownTime",
-               children: function(TT) {
- ... (16 more removed lines; see GitHub link above)
+             return function(qq, Eq) {
+               const gq = lq.n[qq].bucketWeights;
+               let Yq = 0;
+               for (const lq in gq) Yq += gq[lq];
+               let Oq = 0;
+               for (const lq in gq)
+                 if (Oq += gq[lq], Eq <= Oq / Yq) return lq;
+               throw new Error(`Failed to determine A/B testing bucket: test key=${qq} user percentile=${Eq} bucket weights=${JSON.stringify(gq)}`)
+             }(qq, function(qq) {
+               const Eq = `ab_p_${qq}`;
+               let gq = NaN;
+               try {
+                 gq = parseFloat(Yq.i.getItem(Eq))
+               } catch (lq) {
+                 console.error(`Failed to parse user percentile for "${qq}", defaulting to a random percentile:`, lq)
+               }
+ ... (2 more added lines; see GitHub link above)
```

#### 821. `bundles/bloxd.io/main.js` (Changed code · before: `L36777-L36784` → after: `L14167-L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14167-L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14167-L14172) · [Before (L36777-L36784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36777-L36784)

```diff
-         },
-         3059: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => OT
-           });
-           var lT = cT(3066),
-             MT = cT(1195),
-             KT = cT(1099);
+           const mq = function() {
+               const qq = {};
+               for (const Eq in lq.n) qq[Eq] = Oq(Eq);
+               return qq
+             }(),
+             xq = new Set;
```

#### 822. `bundles/bloxd.io/main.js` (Changed code · before: `L36787-L36808` → after: `L14175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14175) · [Before (L36787-L36808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36787-L36808)

```diff
-             let {
-               options: kT,
-               value: cT,
-               onChange: OT,
-               controlClassName: yT = "",
-               arrowClassName: fT = "",
-               menuClassName: xT = "",
-               disabled: IT = !1
-             } = TT;
-             const {
-               t: AT
-             } = (0, MT.B)();
-             return (0, KT.jsx)(lT.c, {
-               controlClassName: `BloxdDropdownControl SmallTextLight ${null!==yT&&void 0!==yT?yT:""}`,
-               arrowClassName: `BloxdDropdownArrow SmallTextLight ${null!==fT&&void 0!==fT?fT:""}`,
-               menuClassName: `BloxdDropdownMenu SmallTextLight ${null!==xT&&void 0!==xT?xT:""}`,
- ... (6 more removed lines; see GitHub link above)
+             return `ab_exposed_${qq}`
```

#### 823. `bundles/bloxd.io/main.js` (Changed code · before: `L36825-L36901` → after: `L14179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14179) · [Before (L36825-L36901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36825-L36901)

```diff
-             let {
-               close: kT,
-               className: cT = "",
-               show: MT = !0,
-               children: AT = null,
-               togglePointerLock: CT = !0,
-               escDoesExit: jT = !0,
-               closeClassnameList: vT = [],
-               forcePointerUnlock: tT,
-               centerChildren: hT = !0,
-               closeOnPressBackground: NT = !0,
-               preventContextMenu: QT = !1,
-               globallyUniqueKey: ST,
-               pointerDown: DT = null,
-               pointerUp: aT = null,
-               doGameplayStartStopOnShow: FT = !1,
- ... (61 more removed lines; see GitHub link above)
+             xq.add(qq), Yq.i.setItem(Aq(qq), !0)
```

#### 824. `bundles/bloxd.io/main.js` (Changed code · before: `L36933-L36941` → after: `L14183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14183) · [Before (L36933-L36941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36933-L36941)

```diff
-             return TT ? {
-               visibility: "visible",
-               opacity: 1
-             } : {
-               position: "absolute",
-               visibility: "hidden",
-               opacity: 0,
-               pointerEvents: "none"
-             }
+             return xq.has(qq) || !0 === Yq.i.getItem(Aq(qq))
```

#### 825. `bundles/bloxd.io/main.js` (Changed code · before: `L36962-L37014` → after: `L14191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14191) · [Before (L36962-L37014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L36962-L37014)

```diff
-             let {
-               noaAction: kT,
-               keyCode: cT,
-               className: MT = "",
-               style: tT,
-               padHidesKey: hT = !1,
-               padMenuShortcut: NT
-             } = TT;
-             (0, xT.B)();
-             const {
-               isTouchScreen: QT
-             } = (0, IT.n)(["isTouchScreen"]), ST = (0, CT.s)(), DT = function(TT, kT) {
-               const [, cT] = (0, lT.useReducer)((TT => TT + 1), 0);
-               if ((0, fT.g)("customBindingsChanged", cT), TT) return (0, yT.u)(TT);
-               return null !== kT && void 0 !== kT ? kT : null
-             }(kT, cT), aT = function(TT) {
- ... (37 more removed lines; see GitHub link above)
+             return qq in Aq
```

#### 826. `bundles/bloxd.io/main.js` (Changed code · before: `L37019` → after: `L14194-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14194-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14194-L14200) · [Before (L37019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37019)

```diff
-             c: () => yT
+             d: () => Oq,
+             e: () => xq,
+             i: () => mq,
+             k: () => lq,
+             n: () => Aq,
+             p: () => Yq,
+             s: () => cq
```

#### 827. `bundles/bloxd.io/main.js` (Changed code · before: `L37021-L37102` → after: `L14202-L14412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14202-L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14202-L14412) · [Before (L37021-L37102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37021-L37102)

```diff
-           var lT = cT(71),
-             MT = cT(1099);
-           const KT = {
-             first: 0,
-             last: -1
-           };
- 
-           function OT(TT, kT, cT) {
-             let lT = 0,
-               MT = window.innerHeight;
-             if (TT) {
-               const kT = TT.getBoundingClientRect();
-               lT = kT.top, MT = kT.bottom
-             }
-             const [KT, OT] = function(TT, kT) {
-               const cT = TT.trim().split(/\s+/),
- ... (66 more removed lines; see GitHub link above)
+           const lq = "firefox_exempt",
+             Oq = "unexposed",
+             mq = "not_preturing_webgl",
+             xq = "not_intel_gen7_8",
+             Aq = {
+               bedwars_tutorial_v1: {
+                 bucketWeights: {
+                   off: 50,
+                   on: 50
+                 },
+                 recordCcuAnalytics: !0,
+                 ccuAnalyticsOtherLabels: ["game_name_with_variation"]
+               },
+               pirates_tutorial_v1: {
+                 bucketWeights: {
+                   off: 50,
+ ... (195 more added lines; see GitHub link above)
```

#### 828. `bundles/bloxd.io/main.js` (Changed code · before: `L37104-L37112` → after: `L14414-L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14414-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14414-L14416) · [Before (L37104-L37112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37104-L37112)

```diff
-                 CT = kT => {
-                   kT.target.contains(TT) && yT()
-                 };
-               document.addEventListener("scroll", CT, !0), document.addEventListener("transitionend", CT, !0), document.addEventListener("animationend", CT, !0), document.fonts.addEventListener("loadingdone", yT), window.addEventListener("resize", yT);
-               const vT = new ResizeObserver(yT);
-               vT.observe(TT);
-               for (const KT of kT ? [...cT, kT] : cT) vT.observe(KT);
-               return () => {
-                 cancelAnimationFrame(MT), document.removeEventListener("scroll", CT, !0), document.removeEventListener("transitionend", CT, !0), document.removeEventListener("animationend", CT, !0), document.fonts.removeEventListener("loadingdone", yT), window.removeEventListener … [truncated]
+                 recordCcuAnalytics: !0,
+                 ccuAnalyticsOtherLabels: ["gA", "Kx"],
+                 primaryMetric: "visit_play_minutes"
```

#### 829. `bundles/bloxd.io/main.js` (Changed code · before: `L37114-L37124` → after: `L14418-L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14418-L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14418-L14420) · [Before (L37114-L37124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37114-L37124)

```diff
-             }), [IT, fT, xT, yT]), (0, MT.jsx)("div", {
-               className: kT,
-               ref: AT,
-               children: lT.Children.map(cT, ((TT, kT) => (0, MT.jsx)("div", {
-                 className: "LazyLoadedItemWrapper",
-                 children: kT >= CT.first && kT <= CT.last && TT
-               })))
-             })
-           }
-         },
-         4545: (TT, kT, cT) => {
+             },
+             cq = new Set(["wasm_holdback_v1"])
+         }, , , , , (qq, Eq, gq) => {
```

#### 830. `bundles/bloxd.io/main.js` (Changed code · before: `L37126` → after: `L14422-L14425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14422-L14425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14422-L14425) · [Before (L37126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37126)

```diff
-             b: () => IT
+             e: () => Aq,
+             f: () => xq,
+             i: () => cq,
+             k: () => mq
```

#### 831. `bundles/bloxd.io/main.js` (Changed code · before: `L37128-L37134` → after: `L14427-L14439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14427-L14439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14427-L14439) · [Before (L37128-L37134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37128-L37134)

```diff
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT),
-             OT = cT(1061),
-             yT = cT(1470),
-             fT = cT(1099);
-           const xT = 6;
+           let Yq = null,
+             lq = null,
+             Oq = !1;
+ 
+           function mq() {
+             Oq || (Oq = !0, document.addEventListener("visibilitychange", (() => {
+               Yq = performance.now()
+             })))
+           }
+ 
+           function xq() {
+             return Yq
+           }
```

#### 832. `bundles/bloxd.io/main.js` (Changed code · before: `L37137-L37196` → after: `L14442-L14446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14442-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14442-L14446) · [Before (L37137-L37196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37137-L37196)

```diff
-             let {
-               page: kT,
-               totalPages: cT,
-               onSetPage: MT,
-               getPageHref: IT,
-               className: AT
-             } = TT;
-             if (cT <= 1) return null;
-             const CT = Math.min(Math.max(kT, 1), cT),
-               jT = function(TT, kT) {
-                 const cT = new Set([1, TT, kT]);
-                 let lT = xT - cT.size,
-                   MT = TT,
-                   KT = TT;
-                 for (; lT > 0 && (MT > 1 || KT < kT);) MT -= 1, KT += 1, KT < kT && (cT.add(KT), lT -= 1), lT > 0 && MT > 1 && (cT.add(MT), lT -= 1);
-                 return Array.from(cT).sort(((TT, kT) => TT - kT))
- ... (44 more removed lines; see GitHub link above)
+             lq = qq
+           }
+ 
+           function cq() {
+             return lq
```

#### 833. `bundles/bloxd.io/main.js` (Changed code · before: `L37198-L37199` → after: `L14448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14448) · [Before (L37198-L37199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37198-L37199)

```diff
-         },
-         3482: (TT, kT, cT) => {
+         }, , , , , , , (qq, Eq, gq) => {
```

#### 834. `bundles/bloxd.io/main.js` (Changed code · before: `L37201` → after: `L14450-L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14450-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14450-L14478) · [Before (L37201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37201)

```diff
-             d: () => aT,
+             Bb: () => kq,
+             D: () => xq,
+             Db: () => EE,
+             Eb: () => sq,
+             Fb: () => Fq,
+             G: () => lq,
+             H: () => Oq,
+             Hb: () => aq,
+             J: () => jq,
+             K: () => Hq,
+             Lb: () => Nq,
+             Nb: () => Wq,
+             O: () => wq,
+             Ob: () => eq,
+             Pb: () => Dq,
+             R: () => tq,
+ ... (13 more added lines; see GitHub link above)
```

#### 835. `bundles/bloxd.io/main.js` (Changed code · before: `L37203` → after: `L14480-L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14480-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14480-L14496) · [Before (L37203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37203)

```diff
-             g: () => ST
+             hb: () => vq,
+             hc: () => Cq,
+             j: () => Sq,
+             jb: () => dq,
+             k: () => pq,
+             kb: () => Iq,
+             o: () => Gq,
+             ob: () => Vq,
+             p: () => hq,
+             r: () => Tq,
+             rb: () => Mq,
+             sb: () => iq,
+             v: () => zq,
+             w: () => Lq,
+             wb: () => bq,
+             xb: () => mq,
+ ... (1 more added lines; see GitHub link above)
```

#### 836. `bundles/bloxd.io/main.js` (Changed code · before: `L37205-L37207` → after: `L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14498) · [Before (L37205-L37207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37205-L37207)

```diff
-           var lT = cT(71),
-             MT = cT(1046),
-             KT = cT.n(MT);
+           var Yq = gq(304);
```

#### 837. `bundles/bloxd.io/main.js` (Changed code · before: `L37209-L37216` → after: `L14500-L14513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14500-L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14500-L14513) · [Before (L37209-L37216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37209-L37216)

```diff
-               wide: {
-                 width: 16,
-                 height: 9
-               },
-               square: {
-                 width: 12,
-                 height: 12
-               }
+               characters: "fa-solid fa-user-astronaut",
+               hat: "fa-solid fa-hat-witch",
+               head: "fa-solid fa-scissors",
+               body: "fa-solid fa-shirt",
+               legs: "fa-solid fa-pants",
+               shoes: "fa-solid fa-shoe",
+               eyebrows: "fa-solid fa-face-raised-eyebrow",
+               eyes: "fa-solid fa-eye",
+               skin: "fa-solid fa-person",
+               back: "fa-solid fa-backpack",
+               cape: "fa-solid fa-bolt",
+               nameColour: "fa-solid fa-palette",
+               profileEffect: "fa-solid fa-star",
+               emote: "fa-solid fa-hand-wave"
```

#### 838. `bundles/bloxd.io/main.js` (Changed code · before: `L37218` → after: `L14515-L14568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14515-L14568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14515-L14568) · [Before (L37218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37218)

```diff
-             yT = new Map;
+             Oq = {
+               characters: "general:characters",
+               hat: "general:hat",
+               head: "general:hair",
+               body: "general:body",
+               legs: "general:legs",
+               shoes: "general:shoes",
+               eyebrows: "general:eyebrows",
+               eyes: "general:eyes",
+               skin: "general:skin",
+               back: "general:backCosmetic",
+               cape: "general:cape",
+               nameColour: "general:name",
+               profileEffect: "general:profileEffect",
+               emote: "general:emotes"
+             },
+ ... (38 more added lines; see GitHub link above)
```

#### 839. `bundles/bloxd.io/main.js` (Changed code · before: `L37221-L37291` → after: `L14571-L14573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14571-L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14571-L14573) · [Before (L37221-L37291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37221-L37291)

```diff
-             var cT;
-             const lT = `${kT}:${TT}`;
-             let MT = yT.get(lT);
-             return void 0 === MT && (MT = function(TT, kT) {
-               const {
-                 width: cT,
-                 height: lT
-               } = OT[kT], MT = function(TT, kT, cT) {
-                 if (void 0 === AT) {
-                   AT = new Int8Array(128).fill(-1);
-                   for (let TT = 0; TT < xT.length; TT++) AT[xT.charCodeAt(TT)] = TT
-                 }
-                 const lT = AT,
-                   MT = (kT, cT) => {
-                     let MT = 0;
-                     for (let KT = kT; KT < cT; KT++) {
- ... (55 more removed lines; see GitHub link above)
+             return Eq * function(qq) {
+               return "customGames" === qq ? 2 : 1
+             }(qq)
```

#### 840. `bundles/bloxd.io/main.js` (Changed code · before: `L37299-L37306` → after: `L14577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14577) · [Before (L37299-L37306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37299-L37306)

```diff
-             let kT = CT.get(TT);
-             if (void 0 === kT) {
-               kT = new Float64Array(TT * IT);
-               for (let cT = 0; cT < TT; cT++)
-                 for (let lT = 0; lT < IT; lT++) kT[cT * IT + lT] = Math.cos(Math.PI * cT * lT / TT);
-               CT.set(TT, kT)
-             }
-             return kT
+             return "boostedGames" === qq
```

#### 841. `bundles/bloxd.io/main.js` (Changed code · before: `L37310-L37311` → after: `L14581-L14586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14581-L14586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14581-L14586) · [Before (L37310-L37311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37310-L37311)

```diff
-             const kT = TT / 255;
-             return kT <= .04045 ? kT / 12.92 : Math.pow((kT + .055) / 1.055, 2.4)
+             if ("customGames" === qq) return "Top Custom Games";
+             if ("newCustomGames" === qq) return "New Games";
+             if ("updatedCustomGames" === qq) return "Updated Games";
+             if ("boostedGames" === qq) return "Boosted Games";
+             const Eq = oq[qq];
+             return Eq.endsWith("games") ? Eq : `${Eq} Games`
```

#### 842. `bundles/bloxd.io/main.js` (Changed code · before: `L37314-L37316` → after: `L14599-L14604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14599-L14604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14599-L14604) · [Before (L37314-L37316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37314-L37316)

```diff
-           function tT(TT) {
-             const kT = Math.max(0, Math.min(1, TT));
-             return kT <= .0031308 ? Math.trunc(12.92 * kT * 255 + .5) : Math.trunc(255 * (1.055 * Math.pow(kT, 1 / 2.4) - .055) + .5)
+           function Hq(qq, Eq) {
+             const {
+               categoryGroup: gq,
+               positionFromEnd: Yq
+             } = jq[qq];
+             return aq(gq, Eq) - 1 - Yq
```

#### 843. `bundles/bloxd.io/main.js` (Changed code · before: `L37318-L37321` → after: `L14606-L14619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14606-L14619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14606-L14619) · [Before (L37318-L37321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37318-L37321)

```diff
-           const hT = 54;
-           var NT = cT(1356),
-             QT = cT(1099);
-           const ST = "ProgressiveImageHost";
+           const oq = {
+               parkourObby: "Parkour Obby",
+               roleplay: "Roleplay",
+               pvp: "PvP",
+               simulator: "Simulator",
+               pve: "PvE",
+               minigames: "Minigames",
+               horror: "Horror",
+               moddedSurvival: "Modded Survival",
+               other: "Other"
+             },
+             Pq = {
+               Survival: "Modded Survival"
+             };
```

#### 844. `bundles/bloxd.io/main.js` (Changed code · before: `L37324-L37326` → after: `L14622-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14622-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14622-L14623) · [Before (L37324-L37326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37324-L37326)

```diff
-             return null !== TT.src ? {
-               backgroundImage: `url(${TT.src})`
-             } : {}
+             var Eq;
+             return null !== (Eq = Pq[qq]) && void 0 !== Eq ? Eq : qq
```

#### 845. `bundles/bloxd.io/main.js` (Changed code · before: `L37330-L37356` → after: `L14627-L14631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14627-L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14627-L14631) · [Before (L37330-L37356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37330-L37356)

```diff
-             let {
-               image: kT,
-               yieldsToCssBackground: cT = !1
-             } = TT;
-             const [MT, OT] = (0, lT.useState)(null), [yT, xT] = (0, lT.useState)(!1), IT = (0, lT.useRef)(null);
-             (0, lT.useLayoutEffect)((() => {
-               var TT;
-               const kT = null === (TT = IT.current) || void 0 === TT ? void 0 : TT.parentElement;
-               cT && kT && "none" !== getComputedStyle(kT).backgroundImage && xT(!0)
-             }), []);
-             const AT = yT || null !== kT.src && (!kT.fadeIn || MT === kT.src),
-               CT = AT || void 0 === kT.blurhash || kT.failed ? void 0 : fT(kT.blurhash, kT.aspect),
-               jT = !AT && void 0 === CT && kT.isLoading;
-             return (0, NT.b)(IT, jT), AT ? null : (0, QT.jsx)("div", {
-               ref: IT,
-               className: KT()("ProgressiveImagePlaceholder", {
- ... (11 more removed lines; see GitHub link above)
+             const Eq = qq.trim().toLowerCase();
+             return Eq ? uq.filter((qq => {
+               const gq = Qq(qq).toLowerCase();
+               return qq.toLowerCase().includes(Eq) || gq.includes(Eq)
+             })) : []
```

#### 846. `bundles/bloxd.io/main.js` (Changed code · before: `L37358-L37363` → after: `L14633-L14646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14633-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14633-L14646) · [Before (L37358-L37363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37358-L37363)

```diff
-         },
-         2108: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => MT
-           });
-           var lT = cT(1099);
+           const tq = {
+               parkourObby: ["Puzzle", "Escape", "Parkour", "Cool Parkour", "Obby", "Tower", "Two Player Parkour", "Clutch Parkour", "Challenging Parkour", "Progressive Parkour", "Themed Parkour"],
+               roleplay: ["Roleplay"],
+               pvp: ["Arena", "Duels", "Shooting"],
+               simulator: ["Simulator", "Tycoon", "Clicker"],
+               pve: ["Building", "Lucky Block", "PvE", "Adventure"],
+               minigames: ["Minigames"],
+               horror: ["Horror"],
+               moddedSurvival: ["Survival"],
+               other: ["Cool Build", "Other", "Racing", "Driving"]
+             },
+             rq = {};
+           for (const YE of Bq)
+             for (const qq of tq[YE]) rq[qq] = YE;
```

#### 847. `bundles/bloxd.io/main.js` (Changed code · before: `L37366-L37376` → after: `L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14649) · [Before (L37366-L37376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37366-L37376)

```diff
-             let {
-               top: kT = "-2px",
-               right: cT = "-2px"
-             } = TT;
-             return (0, lT.jsx)("div", {
-               className: "Dot",
-               style: {
-                 top: kT,
-                 right: cT
-               }
-             })
+             return rq[qq]
```

#### 848. `bundles/bloxd.io/main.js` (Changed code · before: `L37378-L37389` → after: `L14651-L14653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14651-L14653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14651-L14653) · [Before (L37378-L37389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37378-L37389)

```diff
-         },
-         1625: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => IT
-           });
-           var lT = cT(1535),
-             MT = cT(1242),
-             KT = cT(1559),
-             OT = cT(1195),
-             yT = cT(1628),
-             fT = cT(1637),
-             xT = cT(1099);
+           let hq = function(qq) {
+             return qq[qq.SETTINGS = 0] = "SETTINGS", qq[qq.CUSTOMISATION = 1] = "CUSTOMISATION", qq[qq.SHOP = 2] = "SHOP", qq[qq.LOBBY_LEADERBOARD = 3] = "LOBBY_LEADERBOARD", qq[qq.COSMETIC_SHOP = 4] = "COSMETIC_SHOP", qq[qq.SOCIAL = 5] = "SOCIAL", qq
+           }({});
```

#### 849. `bundles/bloxd.io/main.js` (Changed code · before: `L37391-L37399` → after: `L14655-L14657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14655-L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14655-L14657) · [Before (L37391-L37399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37391-L37399)

```diff
-           function IT() {
-             const {
-               t: TT
-             } = (0, OT.B)(), kT = (0, lT.s)(), cT = (0, KT.l)(kT.pathname) || (0, MT.f)(kT.pathname) ? null : (0, KT.P)(kT.pathname, (kT => TT(kT)));
-             return cT ? (0, xT.jsx)(fT.b, {
-               meta: cT
-             }) : "default" === kT.key || (0, yT.c)(kT.state) ? null : (0, xT.jsx)(fT.b, {
-               meta: (0, KT.bb)()
-             })
+           function nq(qq) {
+             var Eq;
+             return (0, Yq.h)(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.color) && void 0 !== Eq ? Eq : null === qq || void 0 === qq ? void 0 : qq.colour)
```

#### 850. `bundles/bloxd.io/main.js` (Changed code · before: `L37411-L37498` → after: `L14661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14661) · [Before (L37411-L37498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37411-L37498)

```diff
-             let {
-               meta: kT
-             } = TT;
-             return (0, KT.jsxs)(lT.e, {
-               children: [(0, KT.jsx)("title", {
-                 children: kT.title
-               }), (0, MT.X)(kT).map((TT => {
-                 var kT, cT;
-                 let {
-                   tag: lT,
-                   attributes: MT
-                 } = TT;
-                 const OT = `${lT}:${null!==(kT=null!==(cT=MT.name)&&void 0!==cT?cT:MT.property)&&void 0!==kT?kT:MT.rel}`;
-                 return "link" === lT ? (0, KT.jsx)("link", {
-                   ...MT
-                 }, OT) : (0, KT.jsx)("meta", {
- ... (72 more removed lines; see GitHub link above)
+             return "object" === typeof qq && "type" in qq && "ProgressBar" === qq.type
```

#### 851. `bundles/bloxd.io/main.js` (Changed code · before: `L37523-L37616` → after: `L14665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14665) · [Before (L37523-L37616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37523-L37616)

```diff
-             var kT, cT;
-             let {
-               className: MT = "",
-               icon: ST,
-               noaAction: DT = null,
-               keyboardButtonClassname: aT = "",
-               keyboardHint: FT = null,
-               onClick: rT = null,
-               onPointerDown: PT = null,
-               onPointerUp: wT = null,
-               onPointerCancel: mT = null,
-               showTouchTutorialPubSubId: bT = null,
-               touchTutorialRequested: zT = !1,
-               showRedDotPubSubId: JT = null,
-               touchIconPosition: oT = "topright",
-               isButton: HT = !1,
- ... (78 more removed lines; see GitHub link above)
+             return "object" === typeof qq && "type" in qq && "StyledKeyBinding" === qq.type
```

#### 852. `bundles/bloxd.io/main.js` (Changed code · before: `L37618-L37625` → after: `L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14667) · [Before (L37618-L37625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37618-L37625)

```diff
-         },
-         4537: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => OT
-           });
-           var lT = cT(1654),
-             MT = cT(1370),
-             KT = cT(3352);
+           const Zq = /\[\[([^[\]]+)\]\]/g;
```

#### 853. `bundles/bloxd.io/main.js` (Changed code · before: `L37628-L37630` → after: `L14670-L14675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14670-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14670-L14675) · [Before (L37628-L37630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37628-L37630)

```diff
-             (0, KT.e)("Escape", (kT => {
-               kT.repeat || (0, lT.s)() || (kT.stopPropagation(), (0, MT.i)() || TT())
-             }))
+             const Eq = [];
+             let gq = 0;
+             for (const Yq of qq.matchAll(Zq)) Yq.index > gq && Eq.push(qq.slice(gq, Yq.index)), Eq.push({
+               icon: Yq[1]
+             }), gq = Yq.index + Yq[0].length;
+             return gq < qq.length && Eq.push(qq.slice(gq)), Eq
```

#### 854. `bundles/bloxd.io/main.js` (Changed code · before: `L37639-L37643` → after: `L14678-L14682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14678-L14682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14678-L14682) · [Before (L37639-L37643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37639-L37643)

```diff
-           function MT() {
-             const [, TT] = (0, lT.useState)(0);
-             return (0, lT.useCallback)((() => {
-               TT((TT => TT + 1))
-             }), [])
+           function Mq(qq) {
+             return qq.replace(/(\s*)\[\[([^[\]]+)\]\]/g, ((Eq, gq, Yq, lq) => {
+               const Oq = qq.slice(0, lq);
+               return [Yq, `${Yq}s`, `${Yq}es`].some((qq => Oq.endsWith(qq))) ? "" : gq + Yq
+             }))
```

#### 855. `bundles/bloxd.io/main.js` (Changed code · before: `L37645-L37666` → after: `L14684-L14750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14684-L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14684-L14750) · [Before (L37645-L37666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37645-L37666)

```diff
-         },
-         2395: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => OT
-           });
-           var lT = cT(71),
-             MT = cT(1195),
-             KT = cT(2401);
- 
-           function OT(TT, kT) {
-             let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-             const {
-               t: OT,
-               selectedLanguage: yT
-             } = (0, MT.B)(), [fT, xT] = (0, lT.useState)(null);
-             return (0, lT.useEffect)((() => {
- ... (6 more removed lines; see GitHub link above)
+           const Tq = {
+               creative: "Creative",
+               survival: "Survival",
+               peaceful: "Peaceful",
+               survivaladventure: "Survival Adventure",
+               peacefuladventure: "Peaceful Adventure",
+               spectator: "Spectator"
+             },
+             zq = {
+               creative: "/textures/games/classic_creative/bloxd_creative_thumbnail_small.jpg",
+               survival: "/textures/games/classic_survival/bloxd_survival_thumbnail_small.jpg",
+               peaceful: "/textures/games/classic/bloxd_peaceful_thumbnail_small.jpg",
+               survivaladventure: "/textures/games/classic_survival/bloxd_survival_thumbnail_small.jpg",
+               peacefuladventure: "/textures/games/classic/bloxd_peaceful_thumbnail_small.jpg",
+               spectator: "/textures/games/classic_creative/bloxd_creative_thumbnail_small.jpg"
+             },
+ ... (51 more added lines; see GitHub link above)
```

#### 856. `bundles/bloxd.io/main.js` (Changed code · before: `L37668-L37698` → after: `L14752-L14798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14752-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14752-L14798) · [Before (L37668-L37698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37668-L37698)

```diff
-             }), [yT.code, TT, kT, cT]), fT
-           }
-         },
-         2582: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => MT
-           });
-           var lT = cT(31);
- 
-           function MT() {
-             const {
-               isUiHidden: TT,
-               isUiHiddenByCamera: kT
-             } = (0, lT.n)(["isUiHidden", "isUiHiddenByCamera"]);
-             return TT || kT
-           }
- ... (15 more removed lines; see GitHub link above)
+             },
+             qE = [{
+               name: "Discord",
+               handle: "discord.gg/playbloxd",
+               url: "https://discord.gg/playbloxd",
+               ...Dq.discord
+             }, {
+               name: "YouTube",
+               handle: "@playbloxd",
+               url: "https://www.youtube.com/@playbloxd",
+               color: "#FF0033",
+               icon: "youtube"
+             }, {
+               name: "TikTok",
+               handle: "@playbloxd",
+               url: "https://www.tiktok.com/@playbloxd",
+ ... (31 more added lines; see GitHub link above)
```

#### 857. `bundles/bloxd.io/main.js` (Changed code · before: `L37700-L37702` → after: `L14800-L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14800-L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14800-L14801) · [Before (L37700-L37702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37700-L37702)

```diff
-             e: () => MT,
-             h: () => KT,
-             i: () => OT
+             d: () => Oq,
+             h: () => mq
```

#### 858. `bundles/bloxd.io/main.js` (Changed code · before: `L37704-L37712` → after: `L14803-L14804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14803-L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14803-L14804) · [Before (L37704-L37712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37704-L37712)

```diff
-           var lT = cT(1122);
- 
-           function MT(TT, kT) {
-             return kT >= TT
-           }
- 
-           function KT(TT, kT) {
-             return kT >= TT && TT <= 600
-           }
+           const Yq = new RegExp("^(?:[\\s#.,%/+]|[\\w-]+(?![\\w(-])|(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color-mix|color|light-dark)\\([\\w\\s#.,%/+-]*\\))*$", "i"),
+             lq = 200;
```

#### 859. `bundles/bloxd.io/main.js` (Changed code · before: `L37714-L37715` → after: `L14806-L14807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14806-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14806-L14807) · [Before (L37714-L37715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37714-L37715)

```diff
-           function OT() {
-             return (0, lT.i)(lT.f)
+           function Oq(qq) {
+             return "string" === typeof qq && qq.length <= lq && Yq.test(qq)
```

#### 860. `bundles/bloxd.io/main.js` (Changed code · before: `L37724-L37745` → after: `L14810-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14810-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14810-L14811) · [Before (L37724-L37745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37724-L37745)

```diff
-           function MT(TT, kT) {
-             const cT = (0, lT.useRef)({
-               matches: TT,
-               callback: kT
-             });
-             (0, lT.useLayoutEffect)((() => {
-               cT.current = {
-                 matches: TT,
-                 callback: kT
-               }
-             })), (0, lT.useEffect)((() => {
-               const TT = TT => {
-                 const {
-                   matches: kT,
-                   callback: lT
-                 } = cT.current;
- ... (6 more removed lines; see GitHub link above)
+           function mq(qq) {
+             return Oq(qq) ? qq : void 0
```

#### 861. `bundles/bloxd.io/main.js` (Changed code · before: `L37747-L37748` → after: `L14813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14813) · [Before (L37747-L37748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37747-L37748)

```diff
-         },
-         1628: (TT, kT, cT) => {
+         }, , , (qq, Eq, gq) => {
```

#### 862. `bundles/bloxd.io/main.js` (Changed code · before: `L37751` → after: `L14870-L14912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14870-L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14870-L14912) · [Before (L37751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37751)

```diff
-             e: () => xT
+             cc: () => ME,
+             eb: () => IE,
+             fd: () => zq,
+             fe: () => xE,
+             g: () => mg,
+             gc: () => nE,
+             ge: () => Vg,
+             hd: () => HE,
+             ib: () => jg,
+             id: () => pE,
+             jc: () => rq,
+             k: () => gg,
+             kd: () => Bg,
+             ke: () => dq,
+             lb: () => LE,
+             ld: () => gE,
+ ... (27 more added lines; see GitHub link above)
```

#### 863. `bundles/bloxd.io/main.js` (Changed code · before: `L37753-L37758` → after: `L14914-L14922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14914-L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14914-L14922) · [Before (L37753-L37758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37753-L37758)

```diff
-           var lT = cT(71),
-             MT = cT(1535),
-             KT = cT(1530);
-           const OT = {
-             isPagePath: !0
-           };
+           var Yq = gq(315),
+             lq = gq(317),
+             Oq = gq.n(lq),
+             mq = gq(571),
+             xq = gq(598),
+             Aq = gq(576),
+             cq = gq(163),
+             uq = gq(583),
+             Bq = gq(296);
```

#### 864. `bundles/bloxd.io/main.js` (Changed code · before: `L37760-L37761` → after: `L14924-L14940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14924-L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14924-L14940) · [Before (L37760-L37761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37760-L37761)

```diff
-           function yT(TT) {
-             return !0 === (null === TT || void 0 === TT ? void 0 : TT.isPagePath)
+           function Wq(qq, Eq, gq, Yq) {
+             return function(qq, Eq) {
+               if (!qq || !Eq) return !1;
+               const {
+                 tool: gq
+               } = Eq;
+               return Array.isArray(gq) ? gq.includes(qq) : gq === qq
+             }(Yq, Eq) ? {
+               name: Eq.drops,
+               normalDrop: !1
+             } : qq ? {
+               name: qq,
+               normalDrop: !0
+             } : null !== qq ? {
+               name: gq(),
+               normalDrop: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 865. `bundles/bloxd.io/main.js` (Changed code · before: `L37765-L37769` → after: `L14944-L14948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14944-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14944-L14948) · [Before (L37765-L37769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37765-L37769)

```diff
-             try {
-               return decodeURIComponent(TT)
-             } catch {
-               return TT
-             }
+             const Eq = Math.ceil(qq / 1e3),
+               gq = Math.floor(Eq / 3600),
+               Yq = Math.floor(Eq % 3600 / 60),
+               lq = Math.floor(Eq % 60);
+             return gq > 0 ? `${gq}:${Vq(Yq)}:${Vq(lq)}` : `${Yq}:${Vq(lq)}`
```

#### 866. `bundles/bloxd.io/main.js` (Changed code · before: `L37773-L37797` → after: `L14952-L14964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14952-L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14952-L14964) · [Before (L37773-L37797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37773-L37797)

```diff
-             const kT = (0, KT.useNavigatePreserveSearch)(),
-               cT = (0, MT.s)();
-             (0, lT.useEffect)((() => {
-               TT && fT(cT.pathname) !== fT(TT) && kT(TT, {
-                 replace: !0,
-                 state: OT
-               })
-             }), [TT, cT.pathname])
-           }
-         },
-         2770: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => MT
-           });
-           var lT = cT(71);
-           const MT = TT => {
- ... (9 more removed lines; see GitHub link above)
+             let Eq;
+             ! function(qq) {
+               qq[qq.M = 1e3] = "M", qq[qq.CM = 900] = "CM", qq[qq.D = 500] = "D", qq[qq.CD = 400] = "CD", qq[qq.C = 100] = "C", qq[qq.XC = 90] = "XC", qq[qq.L = 50] = "L", qq[qq.XL = 40] = "XL", qq[qq.X = 10] = "X", qq[qq.IX = 9] = "IX", qq[qq.V = 5] = "V", qq[qq.IV = 4] = "IV",  … [truncated]
+             }(Eq || (Eq = {}));
+             let gq, Yq = "";
+             if (qq < 0) console.error("Bad number to convertNumberToRomanNumeral", qq);
+             else {
+               if (0 === qq) return "N";
+               if (!(qq > 3999)) {
+                 for (gq in Eq)
+                   if (isNaN(Number(gq)))
+                     for (; qq >= Number(Eq[gq]);) Yq += gq, qq -= Number(Eq[gq]);
+                 return Yq
```

#### 867. `bundles/bloxd.io/main.js` (Changed code · before: `L37799-L37801` → after: `L14966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14966) · [Before (L37799-L37801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37799-L37801)

```diff
-             }), [TT]), {
-               width: kT,
-               height: MT
+               console.error("Bad number to convertNumberToRomanNumeral", qq)
```

#### 868. `bundles/bloxd.io/main.js` (Changed code · before: `L37815-L37818` → after: `L14970-L14971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14970-L14971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14970-L14971) · [Before (L37815-L37818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37815-L37818)

```diff
-           function fT() {
-             queueMicrotask((() => {
-               "inGame" === lT.e.get("gameState") ? !yT || 0 !== OT.size || lT.e.get("openInGameMenuName") || lT.e.get("openEverythingMenuName") || (yT = !1, (0, KT.N)()) : yT = !1
-             }))
+           function Vq(qq) {
+             return (qq < 10 ? "0" : "") + qq
```

#### 869. `bundles/bloxd.io/main.js` (Changed code · before: `L37821-L37848` → after: `L14975-L14976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14975-L14976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14975-L14976) · [Before (L37821-L37848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37821-L37848)

```diff
-           function xT(TT, kT) {
-             const cT = (0, MT.useRef)({}).current,
-               {
-                 openInGameMenuName: xT,
-                 openEverythingMenuName: IT,
-                 gameState: AT
-               } = (0, lT.n)(["openInGameMenuName", "openEverythingMenuName", "gameState"]);
-             (0, MT.useEffect)((() => {
-               TT && kT ? (OT.add(cT), yT || (yT = !0, (0, KT.R)())) : (OT.delete(cT), fT())
-             }), [cT, kT, TT, xT, IT, AT]), (0, MT.useEffect)((() => () => {
-               OT.delete(cT), fT()
-             }), [cT])
-           }
-         },
-         2140: (TT, kT, cT) => {
-           cT.d(kT, {
- ... (12 more removed lines; see GitHub link above)
+           function jq(qq) {
+             return qq.charAt(0).toUpperCase() + qq.slice(1).toLowerCase()
```

#### 870. `bundles/bloxd.io/main.js` (Changed code · before: `L37861-L37874` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14980) · [Before (L37861-L37874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37861-L37874)

```diff
-             let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-             (0, lT.useEffect)((() => {
-               if (!kT) return;
-               const cT = TT.current,
-                 lT = (KT ??= new IntersectionObserver((TT => {
-                   for (const kT of TT) kT.target.toggleAttribute(MT, !kT.isIntersecting)
-                 }), {
-                   rootMargin: "100px",
-                   scrollMargin: "100px"
-                 }), KT);
-               return lT.observe(cT), () => {
-                 lT.unobserve(cT), cT.removeAttribute(MT)
-               }
-             }), [TT, kT])
+             return qq.charAt(0).toUpperCase() + qq.slice(1)
```

#### 871. `bundles/bloxd.io/main.js` (Changed code · before: `L37879-L37883` → after: `L14984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14984) · [Before (L37879-L37883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37879-L37883)

```diff
-             (0, lT.useLayoutEffect)((() => {
-               if (TT) return document.documentElement.setAttribute(yT, ""), () => {
-                 document.documentElement.removeAttribute(yT)
-               }
-             }), [TT])
+             return qq.split(" ").map(((qq, Eq) => 0 === Eq ? qq.toLowerCase() : jq(qq))).join("")
```

#### 872. `bundles/bloxd.io/main.js` (Changed code · before: `L37916-L37930` → after: `L14988-L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14988-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14988-L14990) · [Before (L37916-L37930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37916-L37930)

```diff
-             const kT = (0, lT.useRef)(null),
-               cT = (0, lT.useRef)(TT);
-             cT.current = TT;
-             const MT = (0, lT.useCallback)((() => {
-                 null !== kT.current && (clearTimeout(kT.current), kT.current = null)
-               }), []),
-               OT = (0, lT.useCallback)((() => {
-                 MT(), kT.current = setTimeout((() => {
-                   kT.current = null, cT.current()
-                 }), KT)
-               }), [MT]);
-             return (0, lT.useEffect)((() => MT), [MT]), {
-               start: OT,
-               cancel: MT
-             }
+             return oq(function(qq) {
+               return qq.replace(/-/g, " ")
+             }(qq))
```

#### 873. `bundles/bloxd.io/main.js` (Changed code · before: `L37934-L37936` → after: `L14994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14994) · [Before (L37934-L37936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37934-L37936)

```diff
-             return OT((() => {
-               for (const kT of TT)(0, MT.f)(kT)
-             }))
+             return qq.split(" ").map((qq => qq.toLowerCase())).join("_")
```

#### 874. `bundles/bloxd.io/main.js` (Changed code · before: `L37949-L37950` → after: `L14997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14997) · [Before (L37949-L37950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37949-L37950)

```diff
-           function fT(TT, kT) {
-             const [cT, fT] = (0, lT.useState)(!1), [xT, IT] = (0, lT.useState)(null), AT = (0, lT.useRef)(!1);
+           function yq(qq) {
```

#### 875. `bundles/bloxd.io/main.js` (Changed code · before: `L37952-L37969` → after: `L14999-L15001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14999-L15001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L14999-L15001) · [Before (L37952-L37969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L37952-L37969)

```diff
-               purchasing: cT,
-               outcome: xT,
-               purchase: async function(lT, xT) {
-                 if (cT || AT.current) return;
-                 AT.current = !0;
-                 const CT = await (0, yT.c)(lT, xT);
-                 if (AT.current = !1, !CT) return;
-                 fT(!0), IT(null);
-                 const jT = await MT.e.purchase(lT, xT);
-                 if (fT(!1), null === jT && (null === kT || void 0 === kT || kT(xT)), null === jT && null === xT) return await (0, OT.flushClientAnalyticsEvents)(), void(0, KT.refreshWithoutConfirmation)(TT);
-                 IT({
-                   translationKey: null !== jT && void 0 !== jT ? jT : "homePage:premiumCurrencyGiftSent",
-                   failed: null !== jT,
-                   giftRecipient: xT
-                 })
-               },
- ... (2 more removed lines; see GitHub link above)
+               str: qq,
+               style: {
+                 color: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sE.serverUiText
```

#### 876. `bundles/bloxd.io/main.js` (Changed code · before: `L38013-L38030` → after: `L15007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15007) · [Before (L38013-L38030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38013-L38030)

```diff
-             var kT;
-             return Array.isArray(TT) ? [...TT] : "object" !== typeof TT || (0, MT.R)(TT) || "Object" !== (null === (kT = TT.constructor) || void 0 === kT ? void 0 : kT.name) ? TT : {
-               ...TT
-             }
-           }
- 
-           function yT(TT, kT) {
-             const cT = (0, lT.useRef)(kT);
-             (0, lT.useLayoutEffect)((() => {
-               cT.current = kT
-             })), (0, lT.useEffect)((() => {
-               const kT = KT.k.subscribe(TT, (TT => {
-                 cT.current(OT(TT))
-               }));
-               return () => {
-                 KT.k.unsubscribe(kT)
- ... (2 more removed lines; see GitHub link above)
+             return Math.floor(Math.random() * qq.length)
```

#### 877. `bundles/bloxd.io/main.js` (Changed code · before: `L38033-L38037` → after: `L15010-L15011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15010-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15010-L15011) · [Before (L38033-L38037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38033-L38037)

```diff
-           function fT(TT, kT) {
-             const [cT, MT] = (0, lT.useState)(kT);
-             return yT(TT, (TT => {
-               MT(TT)
-             })), cT
+           function rq() {
+             return "cart-shopping"
```

#### 878. `bundles/bloxd.io/main.js` (Changed code · before: `L38039-L38044` → after: `L15013-L15015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15013-L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15013-L15015) · [Before (L38039-L38044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38039-L38044)

```diff
-         },
-         4552: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => MT
-           });
-           var lT = cT(71);
+           dq = dq && !1;
+           const vq = ["Yellow", "White", "Red", "Purple", "Pink", "Orange", "Magenta", "Lime", "Light Gray", "Light Blue", "Green", "Gray", "Cyan", "Brown", "Blue", "Black"],
+             hq = ["Torch", ...vq.map((qq => `${qq} Torch`))];
```

#### 879. `bundles/bloxd.io/main.js` (Changed code · before: `L38046-L38075` → after: `L15017-L15072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15017-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15017-L15072) · [Before (L38046-L38075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38046-L38075)

```diff
-           function MT(TT, kT, cT) {
-             const [MT, KT] = (0, lT.useState)(!1), [OT, yT] = (0, lT.useState)(!1);
-             return (0, lT.useLayoutEffect)((() => {
-               const cT = TT.current;
-               if (null === cT) return;
-               const lT = () => {
-                   const TT = "x" === kT ? cT.scrollLeft : cT.scrollTop,
-                     lT = "x" === kT ? cT.scrollWidth - cT.clientWidth : cT.scrollHeight - cT.clientHeight;
-                   KT(TT > 1), yT(TT < lT - 1)
-                 },
-                 MT = new ResizeObserver(lT);
-               for (const TT of [cT, ...cT.children]) MT.observe(TT);
-               return cT.addEventListener("scroll", lT, {
-                 passive: !0
-               }), () => {
-                 MT.disconnect(), cT.removeEventListener("scroll", lT)
- ... (14 more removed lines; see GitHub link above)
+           function nq(qq) {
+             var Eq;
+             return "rock" === qq.heldToolType ? qq.harvestLevel > (null !== (Eq = qq.heldToolLevel) && void 0 !== Eq ? Eq : 0) : "rock" === qq.blockHarvestType && 0 !== qq.blockHarvestLevel
+           }
+           const bq = ["Arrow", "Arrow of Slowness", "Arrow of Poison", "Arrow of Instant Damage", "Arrow of Instant Healing", "Arrow of Regeneration", "Arrow of Weakness", "Arrow of Strength", "Arrow of Defense", "Arrow of Jumping", "Arrow of Speed", "Arrow of Knockback", "Arrow  … [truncated]
+             iq = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...Yq.r.map((qq => `${qq} Spade`))],
+             Zq = ["Maple Wood Planks", "Aspen Wood Planks", "Plum Wood Planks", "Jungle Wood Planks", "Pine Wood Planks", "Cedar Wood Planks", "Palm Wood Planks", "Pear Wood Planks", "Cherry Wood Planks", "Spectral Wood Planks", "Mango Wood Planks"],
+             fq = ["Red Wool", "Yellow Wool", "White Wool", "Purple Wool", "Pink Wool", "Orange Wool", "Magenta Wool", "Lime Wool", "Light Gray Wool", "Light Blue Wool", "Green Wool", "Gray Wool", "Cyan Wool", "Brown Wool", "Blue Wool", "Black Wool"],
+             Mq = ["Maple Ladder", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "Cherry Ladder", "Spectral Ladder", "Mango Ladder", "Iron Ladder"],
+             Tq = ["Maple Log", "Aspen Log", "Plum Log", "Jungle Log", "Pine Log", "Cedar Log", "Palm Log", "Pear Log", "Cherry Log", "Spectral Log", "Mango Log"],
+             zq = ["Maple Log", "Barkless Maple Log"],
+             Sq = ["Aspen Log", "Barkless Aspen Log"],
+             pq = ["Plum Log", "Barkless Plum Log"],
+             Gq = ["Jungle Log", "Barkless Jungle Log"],
+             Lq = ["Pine Log", "Barkless Pine Log"],
+             Jq = ["Cedar Log", "Barkless Cedar Log"],
+ ... (40 more added lines; see GitHub link above)
```

#### 880. `bundles/bloxd.io/main.js` (Changed code · before: `L38078` → after: `L15075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15075) · [Before (L38078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38078)

```diff
-             return TT > kT && TT >= KT
+             return qq === Eq ? 0 !== qq || 0 !== Eq || 1 / qq === 1 / Eq : qq !== qq && Eq !== Eq
```

#### 881. `bundles/bloxd.io/main.js` (Changed code · before: `L38081-L38082` → after: `L15078-L15086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15078-L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15078-L15086) · [Before (L38081-L38082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38081-L38082)

```diff
-           function yT() {
-             return (0, lT.i)(OT) && MT.featureFlags.useSocialFeatures
+           function dE(qq, Eq) {
+             if (VE(qq, Eq)) return !0;
+             if ("object" !== typeof qq || null === qq || "object" !== typeof Eq || null === Eq) return !1;
+             const gq = Object.keys(qq),
+               Yq = Object.keys(Eq);
+             if (gq.length !== Yq.length) return !1;
+             for (let lq = 0; lq < gq.length; lq++)
+               if (!aE.call(Eq, gq[lq]) || !VE(qq[gq[lq]], Eq[gq[lq]])) return !1;
+             return !0
```

#### 882. `bundles/bloxd.io/main.js` (Changed code · before: `L38084-L38100` → after: `L15088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15088) · [Before (L38084-L38100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38084-L38100)

```diff
-         },
-         1130: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => jT
-           });
-           var lT = cT(71),
-             MT = cT(94),
-             KT = cT(36),
-             OT = cT(1136);
-           let yT = {
-             userContext: OT.NULL_USER_CONTEXT,
-             isUserContextUpdating: !0
-           };
-           const fT = new Set;
-           let xT = !1,
-             IT = 0,
- ... (1 more removed lines; see GitHub link above)
+           "function" === typeof ArrayBuffer && ArrayBuffer.isView;
```

#### 883. `bundles/bloxd.io/main.js` (Changed code · before: `L38103-L38105` → after: `L15091-L15092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15091-L15092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15091-L15092) · [Before (L38103-L38105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38103-L38105)

```diff
-             yT = TT, (0, MT.unstable_batchedUpdates)((() => {
-               for (const kT of fT) kT(TT)
-             }))
+             for (const Eq in qq) return !1;
+             return !0
```

#### 884. `bundles/bloxd.io/main.js` (Changed code · before: `L38108-L38134` → after: `L15096-L15102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15096-L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15096-L15102) · [Before (L38108-L38134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38108-L38134)

```diff
-           function jT() {
-             const [TT, kT] = (0, lT.useState)(yT);
-             return (0, lT.useEffect)((() => (xT || (xT = !0, KT.k.subscribe("userContextUpdated", (TT => {
-               IT++, CT({
-                 userContext: TT,
-                 isUserContextUpdating: TT === OT.NULL_USER_CONTEXT
-               })
-             })), KT.k.subscribe("userContextIsUpdating", (() => {
-               IT++, yT.isUserContextUpdating || CT({
-                 ...yT,
-                 isUserContextUpdating: !0
-               })
-             }))), fT.add(kT), kT(yT), (yT.isUserContextUpdating || yT.userContext.hasExpired()) && function() {
-               const TT = IT;
-               AT !== TT && (AT = TT, OT.userContextManager.getCurrentUserContext().then((kT => {
-                 IT !== TT || kT === yT.userContext && !yT.isUserContextUpdating || CT({
- ... (11 more removed lines; see GitHub link above)
+           function oE(qq) {
+             if (null === qq) return 0;
+             if ("" === qq.trim() || isNaN(qq)) return null;
+             for (let gq = 0; gq < qq.length; gq++)
+               if ("Ee+-".includes(qq.at(gq))) return null;
+             const Eq = Number(qq);
+             return Number.isInteger(Eq) && Eq >= 0 && Eq < 1e16 ? Eq : null
```

#### 885. `bundles/bloxd.io/main.js` (Changed code · before: `L38136-L38150` → after: `L15104-L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15104-L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15104-L15105) · [Before (L38136-L38150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38136-L38150)

```diff
-         },
-         1122: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => vT,
-             f: () => IT,
-             h: () => AT,
-             i: () => tT
-           });
-           var lT = cT(71),
-             MT = cT(94);
-           const KT = 100,
-             OT = new Set;
-           let yT = null,
-             fT = !1,
-             xT = 0;
+           const PE = 21,
+             QE = /^[A-Za-z0-9_-]{21}$/;
```

#### 886. `bundles/bloxd.io/main.js` (Changed code · before: `L38152-L38153` → after: `L15107-L15108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15107-L15108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15107-L15108) · [Before (L38152-L38153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38152-L38153)

```diff
-           function IT(TT, kT) {
-             return kT > TT
+           function yE(qq) {
+             return !!qq && qq.length === PE && QE.test(qq)
```

#### 887. `bundles/bloxd.io/main.js` (Changed code · before: `L38156-L38157` → after: `L15112-L15115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15112-L15115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15112-L15115) · [Before (L38156-L38157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38156-L38157)

```diff
-           function AT() {
-             return 0 === OT.size ? vT(IT) : fT
+           function rE(qq) {
+             let Eq = 2166136261;
+             for (let gq = 0; gq < qq.length; gq++) Eq ^= qq.charCodeAt(gq), Eq = Math.imul(Eq, 16777619);
+             return (Eq >>> 0).toString(36)
```

#### 888. `bundles/bloxd.io/main.js` (Changed code · before: `L38160-L38163` → after: `L15118-L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15118-L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15118-L15128) · [Before (L38160-L38163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38160-L38163)

```diff
-           function CT() {
-             yT = null, fT = vT(IT), (0, MT.unstable_batchedUpdates)((() => {
-               for (const TT of OT) TT()
-             }))
+           function vE(qq) {
+             var Eq;
+             return function(qq) {
+               return "object" === typeof qq && null !== qq && !Array.isArray(qq) && "content" in qq
+             }(qq) ? {
+               content: qq.content,
+               showBackground: null === (Eq = qq.showBackground) || void 0 === Eq || Eq
+             } : {
+               content: null !== qq && void 0 !== qq ? qq : "",
+               showBackground: !0
+             }
```

#### 889. `bundles/bloxd.io/main.js` (Changed code · before: `L38166-L38169` → after: `L15131-L15132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15131-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15131-L15132) · [Before (L38166-L38169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38166-L38169)

```diff
-           function jT() {
-             null !== yT && clearTimeout(yT);
-             const TT = performance.now();
-             vT(IT) !== fT && (xT = TT + KT), TT < xT ? CT() : yT = setTimeout(CT, KT)
+           function hE(qq) {
+             return 0 === qq.length
```

#### 890. `bundles/bloxd.io/main.js` (Changed code · before: `L38173` → after: `L15136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15136) · [Before (L38173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38173)

```diff
-             return TT(document.documentElement.clientWidth, document.documentElement.clientHeight)
+             return qq.length > 0 ? qq[tq(qq)] : void 0
```

#### 891. `bundles/bloxd.io/main.js` (Changed code · before: `L38177-L38188` → after: `L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15140) · [Before (L38177-L38188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38177-L38188)

```diff
-             const [kT, cT] = (0, lT.useState)((() => vT(TT))), MT = (0, lT.useRef)(TT);
-             MT.current = TT;
-             const KT = (0, lT.useRef)(kT);
-             return KT.current = kT, (0, lT.useEffect)((() => {
-               const TT = () => {
-                 const TT = vT(MT.current);
-                 TT !== KT.current && (KT.current = TT, cT(TT))
-               };
-               return 0 === OT.size && (fT = vT(IT), xT = 0, window.addEventListener("resize", jT), window.addEventListener("orientationchange", jT)), OT.add(TT), TT(), () => {
-                 OT.delete(TT), 0 === OT.size && (window.removeEventListener("resize", jT), window.removeEventListener("orientationchange", jT))
-               }
-             }), []), kT
+             return GE.fastATan2(qq[0], qq[2])
```

#### 892. `bundles/bloxd.io/main.js` (Changed code · before: `L38201-L38208` → after: `L15143-L15144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15143-L15144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15143-L15144) · [Before (L38201-L38208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38201-L38208)

```diff
-           function OT() {
-             const TT = document.getElementById("GenericVideoInner");
-             if (null === TT) return;
-             const kT = TT.offsetWidth,
-               cT = TT.offsetHeight;
-             if (0 === kT || 0 === cT) return;
-             const lT = Math.min(window.innerWidth / kT, window.innerHeight / cT);
-             TT.style.transformOrigin = "center center", TT.style.transform = `scale(${lT})`
+           function iE(qq) {
+             return [Math.sin(qq), 0, Math.cos(qq)]
```

#### 893. `bundles/bloxd.io/main.js` (Changed code · before: `L38211-L38213` → after: `L15147-L15150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15147-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15147-L15150) · [Before (L38211-L38213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38211-L38213)

```diff
-           function yT() {
-             const TT = document.getElementById("GenericVideoInner");
-             null !== TT && (TT.style.transform = "")
+           function ZE(qq) {
+             const Eq = qq.split(" ");
+             let gq = Eq[0];
+             return "Light" === gq && (gq += " " + Eq[1]), gq
```

#### 894. `bundles/bloxd.io/main.js` (Changed code · before: `L38238-L38250` → after: `L15154-L15155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15154-L15155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15154-L15155) · [Before (L38238-L38250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38238-L38250)

```diff
-             const {
-               lobbyName: kT
-             } = TT;
-             return KT.featureFlags.useSocialFeatures && !TT.replay && null !== kT && (0, lT.D)(kT) && (0, lT.u)(kT) === MT.c.STANDARD
-           }
-         },
-         2553: (TT, kT, cT) => {
-           cT.d(kT, {
-             c: () => OT
-           });
-           var lT = cT(1099);
-           const MT = "M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C0 5.35042 0 10 0 10C0 10 0 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 … [truncated]
-             KT = "M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z";
+             return `${qq} Spawn Orb`
+           }
```

#### 895. `bundles/bloxd.io/main.js` (Changed code · before: `L38253-L38273` → after: `L15158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15158) · [Before (L38253-L38273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38253-L38273)

```diff
-             let {
-               variant: kT = "fullColour"
-             } = TT;
-             return (0, lT.jsxs)("svg", {
-               className: "YoutubeIcon",
-               viewBox: "0 0 28.57 20",
-               "aria-hidden": !0,
-               children: ["fullColour" === kT && (0, lT.jsxs)(lT.Fragment, {
-                 children: [(0, lT.jsx)("path", {
-                   d: MT,
-                   fill: "#FF0033"
-                 }), (0, lT.jsx)("path", {
-                   d: KT,
-                   fill: "white"
-                 })]
-               }), "white" === kT && (0, lT.jsx)("path", {
- ... (5 more removed lines; see GitHub link above)
+             return `${qq} Spawner Block`
```

#### 896. `bundles/bloxd.io/main.js` (Changed code · before: `L38275-L38292` → after: `L15160-L15162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15160-L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15160-L15162) · [Before (L38275-L38292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38275-L38292)

```diff
-         },
-         2778: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => lT
-           });
-           const lT = new class {
-             constructor() {
-               this.readers = new Map
-             }
-             register(TT, kT) {
-               return this.readers.set(TT, kT), () => {
-                 this.readers.get(TT) === kT && this.readers.delete(TT)
-               }
-             }
-             read(TT) {
-               const kT = this.readers.get(TT);
- ... (2 more removed lines; see GitHub link above)
+ 
+           function TE(qq, Eq) {
+             return `Caught Mob ${qq.replaceAll(" ","_")} ${jq(Eq)}`
```

#### 897. `bundles/bloxd.io/main.js` (Changed code · before: `L38294-L38328` → after: `L15164-L15172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15164-L15172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15164-L15172) · [Before (L38294-L38328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38294-L38328)

```diff
-         },
-         3595: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => MT,
-             g: () => KT
-           });
-           var lT = cT(71);
-           const MT = new class {
-             constructor() {
-               this.mountedCounts = new Map, this.listeners = new Set
-             }
-             register(TT) {
-               var kT;
-               return this.mountedCounts.set(TT, (null !== (kT = this.mountedCounts.get(TT)) && void 0 !== kT ? kT : 0) + 1), this.notify(), () => {
-                 this.mountedCounts.set(TT, this.mountedCounts.get(TT) - 1), this.notify()
-               }
- ... (19 more removed lines; see GitHub link above)
+           const zE = {
+             Deer: "A Doe Through The Green",
+             Cow: "Stampede",
+             Sheep: "Grant Wool",
+             Pig: "Unforgotten Pig",
+             Horse: "Sunbathed Gallope",
+             Camel: "Hump Day",
+             Wolf: "Dreaming Canine",
+             Wildcat: "Whiskers"
```

#### 898. `bundles/bloxd.io/main.js` (Changed code · before: `L38332-L38338` → after: `L15176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15176) · [Before (L38332-L38338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38332-L38338)

```diff
-             const [kT, cT] = (0, lT.useState)((() => MT.isMountedByOtherThan(TT)));
-             return (0, lT.useEffect)((() => {
-               const kT = () => {
-                 cT(MT.isMountedByOtherThan(TT))
-               };
-               return kT(), MT.subscribe(kT)
-             }), [TT]), kT
+             return zE[qq] ? zE[qq] : `${qq} Painting`
```

#### 899. `bundles/bloxd.io/main.js` (Changed code · before: `L38340-L38354` → after: `L15178-L15179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15178-L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15178-L15179) · [Before (L38340-L38354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38340-L38354)

```diff
-         },
-         3519: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => KT,
-             f: () => MT,
-             h: () => yT,
-             l: () => OT
-           });
-           var lT = cT(31);
-           const MT = ["gameThumbnailDiscoverability", "storeCharacterCardFoil", "storeCharacterCardSpotlight"],
-             KT = {
-               gameThumbnailDiscoverability: "Thumbnail engagementScore",
-               storeCharacterCardFoil: "Store character cards: Foil design",
-               storeCharacterCardSpotlight: "Store character cards: Spotlight design"
-             };
+           const pE = 21e3;
+           let GE;
```

#### 900. `bundles/bloxd.io/main.js` (Changed code · before: `L38356-L38360` → after: `L15181-L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15181-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15181-L15199) · [Before (L38356-L38360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38356-L38360)

```diff
-           function OT(TT) {
-             const {
-               enabledDebugFeatures: kT
-             } = (0, lT.n)(["enabledDebugFeatures"]);
-             return !0 === kT[TT]
+           function LE(qq, Eq, gq) {
+             const Yq = [
+               ["second", 60],
+               ["minute", 60],
+               ["hour", 24],
+               ["day", 1 / 0]
+             ];
+             let lq = Math.max(0, (gq - Eq) / 1e3),
+               Oq = 0;
+             for (; lq >= Yq[Oq][1];) lq /= Yq[Oq][1], Oq++;
+             return new Intl.NumberFormat(qq, {
+               style: "unit",
+               unit: Yq[Oq][0],
+               unitDisplay: "long"
+             }).format(Math.round(lq))
+           }
+ ... (3 more added lines; see GitHub link above)
```

#### 901. `bundles/bloxd.io/main.js` (Changed code · before: `L38364-L38369` → after: `L15203-L15209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15203-L15209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15203-L15209) · [Before (L38364-L38369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38364-L38369)

```diff
-             const kT = {
-               ...lT.e.get("enabledDebugFeatures")
-             };
-             !0 === kT[TT] ? delete kT[TT] : kT[TT] = !0, lT.e.set({
-               enabledDebugFeatures: kT
-             })
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+             return "gems" === (null === qq || void 0 === qq ? void 0 : qq.source) ? Math.max(0, qq.until - Eq) : 0
+           }
+ 
+           function RE(qq, Eq) {
+             let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
+             return "gems" === (null === Eq || void 0 === Eq ? void 0 : Eq.source) && Eq.until > gq ? LE(qq, gq, Eq.until) : ""
```

#### 902. `bundles/bloxd.io/main.js` (Changed code · before: `L38408-L38415` → after: `L15213-L15214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15213-L15214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15213-L15214) · [Before (L38408-L38415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38408-L38415)

```diff
-             const kT = TT => {
-               if (Array.isArray(TT)) {
-                 const cT = TT.map(kT);
-                 return cT.every((TT => "string" === typeof TT)) ? [...cT].sort() : cT
-               }
-               return fT(TT) ? Object.fromEntries(Object.keys(TT).sort().map((cT => [cT, kT(TT[cT])]))) : TT
-             };
-             return JSON.stringify(kT(TT))
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+             return "subscription" === (null === qq || void 0 === qq ? void 0 : qq.source) && qq.until > Eq
```

#### 903. `bundles/bloxd.io/main.js` (Changed code · before: `L38417-L38651` → after: `L15216-L15228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15216-L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15216-L15228) · [Before (L38417-L38651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38417-L38651)

```diff
-           const IT = ["emotes", "perspective", "scoreboard", "tasks", "cosmetics", "invite", "settings"],
-             AT = ["joystick", "cluster", "jump", "crouch", "attack", "use", "extra", "game", "hotbar", "arrows", "inventory", "menu", ...IT, "chat", "interact"],
-             CT = TT => IT.includes(TT),
-             jT = ["landscape", "portrait"],
-             vT = ["square", "round"],
-             tT = {
-               joystick: {
-                 move: !0,
-                 scale: !0,
-                 hide: !1
-               },
-               cluster: {
-                 move: !0,
-                 scale: !0,
-                 hide: !1
-               },
- ... (219 more removed lines; see GitHub link above)
+ 
+           function FE(qq, Eq) {
+             return Eq in Aq.s && (Eq === Aq.e || qq.includes("super"))
+           }! function(qq) {
+             qq.TWO_PI = 2 * Math.PI;
+             const Eq = qq.HALF_PI = Math.PI / 2,
+               gq = {
+                 min: 0,
+                 max: 2 * Math.PI
+               },
+               Yq = {
+                 min: 0,
+                 max: 0
```

#### 904. `bundles/bloxd.io/main.js` (Changed code · before: `L38653-L38706` → after: `L15230-L15296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15230-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15230-L15296) · [Before (L38653-L38706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38653-L38706)

```diff
-               return JT(AT) ? delete CT[cT] : CT[cT] = AT, {
-                 ...TT,
-                 hudLayouts: {
-                   ...TT.hudLayouts,
-                   [kT]: {
-                     ...TT.hudLayouts[kT],
-                     hudElements: CT
-                   }
-                 }
-               }
-             },
-             UT = TT => {
-               const kT = void 0 === TT && Object.keys(VT).length > 0;
-               kT && (VT = {});
-               const cT = XT;
-               LT(void 0 === TT ? {
- ... (38 more removed lines; see GitHub link above)
+ 
+             function lq(qq, Eq) {
+               return qq > 0 && qq < Eq ? qq : (qq % Eq + Eq) % Eq
+             }
+ 
+             function Oq(qq) {
+               return xq(0, qq.length, "excludeMax")
+             }
+ 
+             function mq(qq) {
+               return qq.min + Math.random() * (qq.max - qq.min)
+             }
+ 
+             function xq(qq, Eq, gq) {
+               Yq.min = qq, Yq.max = "excludeMax" === gq ? Eq : Eq + 1;
+               const lq = mq(Yq);
+ ... (51 more added lines; see GitHub link above)
```

#### 905. `bundles/bloxd.io/main.js` (Changed code · before: `L38708-L38734` → after: `L15298-L15301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15298-L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15298-L15301) · [Before (L38708-L38734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38708-L38734)

```diff
-                 ...TT,
-                 hudLayouts: {
-                   ...TT.hudLayouts,
-                   [kT]: OT
-                 }
-               }
-             },
-             BT = TT => {
-               LT({
-                 ...XT,
-                 hudSnapCentre: TT
-               })
-             },
-             WT = TT => {
-               LT({
-                 ...XT,
- ... (11 more removed lines; see GitHub link above)
+                 x: mq * lq * Oq - Yq * xq * Aq,
+                 y: Yq * xq * Oq + mq * lq * Aq,
+                 z: Yq * lq * Aq - mq * xq * Oq,
+                 w: Yq * lq * Oq + mq * xq * Aq
```

#### 906. `bundles/bloxd.io/main.js` (Changed code · before: `L38736-L38800` → after: `L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15303) · [Before (L38736-L38800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38736-L38800)

```diff
-             }),
-             pT = () => "undefined" !== typeof window && (0, yT.e)(window.innerWidth, window.innerHeight) ? "portrait" : "landscape",
-             iT = () => {
-               const [TT, kT] = (0, lT.useState)(XT);
-               return (0, KT.g)(DT, kT), TT
-             }
-         },
-         2526: (TT, kT, cT) => {
-           cT.d(kT, {
-             B: () => FT,
-             F: () => OT,
-             J: () => DT,
-             N: () => mT,
-             R: () => aT,
-             U: () => JT,
-             b: () => CT,
- ... (49 more removed lines; see GitHub link above)
+             }, qq.eulerYXZFromQuaternion = function(qq) {
```

#### 907. `bundles/bloxd.io/main.js` (Changed code · before: `L38802-L38842` → after: `L15305-L15310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15305-L15310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15305-L15310) · [Before (L38802-L38842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38802-L38842)

```diff
-                 hudElements: cT,
-                 hudSafe: AT,
-                 hudLocked: CT,
-                 hudLockedEndsScale: tT
-               } = TT.hudLayouts[kT], hT = {};
-               void 0 !== tT && (hT[vT] = String(tT));
-               const QT = "round" === TT.hudShape ? [IT] : [];
-               1 !== TT.hudKeyOpacity && (hT[jT] = String(TT.hudKeyOpacity));
-               for (const xT of lT.w) {
-                 const TT = cT[xT];
-                 if (void 0 === TT || (0, lT.H)(TT)) continue;
-                 const [kT, IT, AT, CT] = TT;
-                 0 !== kT && (hT[MT(xT)] = String(kT)), 0 !== IT && (hT[KT(xT)] = String(IT)), 1 !== AT && (hT[OT(xT)] = String(AT)), 0 === kT && 0 === IT || QT.push(fT(xT)), 1 === CT && QT.push(yT(xT))
-               }
-               for (const lT of CT) QT.push(xT(lT));
-               const ST = {};
- ... (25 more removed lines; see GitHub link above)
+                 x: Eq,
+                 y: gq,
+                 z: Yq,
+                 w: lq
+               } = qq, Oq = 1 - 2 * (gq * gq + Yq * Yq), mq = 2 * (Eq * Yq + gq * lq), xq = 2 * (Eq * gq + Yq * lq), Aq = 1 - 2 * (Eq * Eq + Yq * Yq), cq = 2 * (gq * Yq - Eq * lq), uq = 2 * (Eq * Yq - gq * lq), Bq = 1 - 2 * (Eq * Eq + gq * gq), Wq = Math.asin(-GE.clampAbs(cq, 1));
+               return Math.abs(cq) < .9999999 ? [Wq, Math.atan2(mq, Bq), Math.atan2(xq, Aq)] : [Wq, Math.atan2(-uq, Oq), 0]
```

#### 908. `bundles/bloxd.io/main.js` (Changed code · before: `L38844-L38862` → after: `L15312-L15386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15312-L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15312-L15386) · [Before (L38844-L38862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38844-L38862)

```diff
-         },
-         2504: (TT, kT, cT) => {
-           cT.d(kT, {
-             A: () => hT,
-             B: () => jT,
-             D: () => KT,
-             H: () => fT,
-             e: () => vT,
-             i: () => tT,
-             l: () => IT,
-             p: () => AT,
-             q: () => MT,
-             t: () => CT,
-             v: () => yT,
-             w: () => xT,
-             z: () => OT
- ... (3 more removed lines; see GitHub link above)
+           }(GE || (GE = {}));
+           cq.e.CHAT_MSG, cq.e.CHAT_MSG, cq.e.PLAYER_JOIN, cq.e.PLAYER_REPORT, cq.e.PLAYER_NAME_CHANGE, cq.e.ADMIN_ACTIVITY, cq.e.MODERATION, cq.e.LOBBY_INFO, cq.e.TRIBE_NAME, cq.e.TRIBE_INFO, cq.e.FACTION_NAME, cq.e.FACTION_INFO, cq.e.NAME_TAG, cq.e.BOOK, cq.e.BOARD, cq.e.MULTI_L … [truncated]
+           const sE = {
+               serverUiText: "#cef3ff",
+               goldUiText: "#f5d142",
+               redUiText: "#ff9d87",
+               blueUiText: "#2671d7",
+               greenUiText: "#2eeb82",
+               yellowUiText: "#f3f351",
+               cyanUiText: "#4feded",
+               whiteUiText: "#e7e7e7",
+               pinkUiText: "#e74de7",
+               grayUiText: "#c7c7c7",
+               blackUiText: "#000000",
+               orangeUiText: "#e19835",
+               lilacUiText: "#ce91ce",
+ ... (59 more added lines; see GitHub link above)
```

#### 909. `bundles/bloxd.io/main.js` (Changed code · before: `L38865` → after: `L15389-L15390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15389-L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15389-L15390) · [Before (L38865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38865)

```diff
-             return TT.filter((TT => MT.has(TT)))
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0, 0];
+             return wE(qq, Eq), Oq().scale(Eq, Eq, 1 / 255)
```

#### 910. `bundles/bloxd.io/main.js` (Changed code · before: `L38868-L38870` → after: `L15396-L15398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15396-L15398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15396-L15398) · [Before (L38868-L38870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38868-L38870)

```diff
-           function OT(TT, kT) {
-             var cT, MT;
-             return (0, lT.K)(TT) && 0 === (null !== (cT = null === kT || void 0 === kT ? void 0 : kT[0]) && void 0 !== cT ? cT : 0) && 0 === (null !== (MT = null === kT || void 0 === kT ? void 0 : kT[1]) && void 0 !== MT ? MT : 0)
+           function IE(qq) {
+             var Eq;
+             return null !== (Eq = CE[qq]) && void 0 !== Eq ? Eq : qq
```

#### 911. `bundles/bloxd.io/main.js` (Changed code · before: `L38874` → after: `L15418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15418) · [Before (L38874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38874)

```diff
-             return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.C).filter((kT => !OT(kT, TT[kT])))
+             return DE["Tier 5"] / (DE[qq] || DE["Tier 1"])
```

#### 912. `bundles/bloxd.io/main.js` (Changed code · before: `L38878-L38890` → after: `L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15424) · [Before (L38878-L38890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38878-L38890)

```diff
-             const cT = kT.filter((kT => OT(kT, TT.hudElements[kT]) && !(0, lT.r)(TT.hudElements, kT))),
-               MT = yT(TT.hudElements, kT);
-             if (cT.length > 0) return {
-               inTray: cT,
-               outOfTray: MT,
-               state: "filled"
-             };
-             const KT = MT.some((kT => !(0, lT.r)(TT.hudElements, kT)));
-             return {
-               inTray: cT,
-               outOfTray: MT,
-               state: KT ? "empty" : "gone"
-             }
+             return void 0 === Eq ? qq : `${qq}_${Eq}`
```

#### 913. `bundles/bloxd.io/main.js` (Changed code · before: `L38893-L38894` → after: `L15427-L15428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15427-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15427-L15428) · [Before (L38893-L38894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38893-L38894)

```diff
-           function xT(TT, kT, cT) {
-             return cT && MT.has(TT) && OT(TT, kT.hudElements[TT])
+           function lg(qq) {
+             return qq.split("_")[0]
```

#### 914. `bundles/bloxd.io/main.js` (Changed code · before: `L38900-L38906` → after: `L15432-L15433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15432-L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15432-L15433) · [Before (L38900-L38906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38900-L38906)

```diff
-             const {
-               minWidth: kT,
-               minHeight: cT
-             } = TT.style;
-             return TT.style.minWidth = "", TT.style.minHeight = "", () => {
-               TT.style.minWidth = kT, TT.style.minHeight = cT
-             }
+             const Eq = qq.split("_");
+             if (!(Eq.length <= 1)) return Eq.slice(1).join("_")
```

#### 915. `bundles/bloxd.io/main.js` (Changed code · before: `L38909-L38912` → after: `L15437-L15443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15437-L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15437-L15443) · [Before (L38909-L38912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38909-L38912)

```diff
-           function jT(TT, kT, cT) {
-             const lT = TT.style;
-             let MT = "",
-               KT = "";
+           function xg(qq, Eq) {
+             var gq, Yq, lq, Oq;
+             return null !== (gq = null === qq || void 0 === qq || null === (Yq = qq.attributes) || void 0 === Yq || null === (lq = Yq.customAttributes) || void 0 === lq || null === (Oq = lq.enchantments) || void 0 === Oq ? void 0 : Oq[Eq]) && void 0 !== gq ? gq : null
+           }
+ 
+           function Ag(qq) {
+             const Eq = null === qq || void 0 === qq ? void 0 : qq.split(" ");
```

#### 916. `bundles/bloxd.io/main.js` (Changed code · before: `L38914-L38917` → after: `L15445-L15446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15445-L15446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15445-L15446) · [Before (L38914-L38917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38914-L38917)

```diff
-               CT(TT);
-               const kT = cT(),
-                 lT = TT.getBoundingClientRect();
-               kT(), MT = `${lT.width}px`, KT = `${lT.height}px`
+               const qq = Eq[Eq.length - 1];
+               if (uq.c.includes(qq)) return qq
```

#### 917. `bundles/bloxd.io/main.js` (Changed code · before: `L38919` → after: `L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15448) · [Before (L38919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38919)

```diff
-             lT.minWidth !== MT && (lT.minWidth = MT), lT.minHeight !== KT && (lT.minHeight = KT)
+             return null
```

#### 918. `bundles/bloxd.io/main.js` (Changed code · before: `L38925-L38944` → after: `L15452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15452) · [Before (L38925-L38944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38925-L38944)

```diff
-             const kT = TT.querySelector(IT);
-             if (!kT) return;
-             const cT = [vT, tT].flatMap((TT => [...kT.querySelectorAll(`:scope > .${TT}`)].map((kT => ({
-               icon: kT,
-               name: TT
-             })))));
-             jT(kT, cT.length > 0, (() => {
-               for (const {
-                   icon: TT,
-                   name: kT
-                 }
-                 of cT) TT.classList.remove(kT);
-               return () => {
-                 for (const {
-                     icon: TT,
-                     name: kT
- ... (4 more removed lines; see GitHub link above)
+             return xq.u - uq.c.length + uq.c.indexOf(qq)
```

#### 919. `bundles/bloxd.io/main.js` (Changed code · before: `L38962-L38963` → after: `L15455-L15457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15455-L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15455-L15457) · [Before (L38962-L38963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38962-L38963)

```diff
-           function fT(TT) {
-             return "fixed_shown" === TT || "fixed_hidden" === TT
+           function ug(qq, Eq, gq, Yq) {
+             let lq = 0;
+             return Eq > 0 && (lq += Eq), gq > 0 && (lq += .6), Yq > 0 && (lq += .9 * Yq / 2), (qq + 5 * lq ** .5) * (1 + .4 * lq / (1 + lq))
```

#### 920. `bundles/bloxd.io/main.js` (Changed code · before: `L38986-L38987` → after: `L15460-L15510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15460-L15510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15460-L15510) · [Before (L38986-L38987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38986-L38987)

```diff
-           function xT(TT) {
-             return KT.C.some((kT => TT.classList.contains((0, OT.y)(kT))))
+           function Bg(qq, Eq) {
+             const gq = null !== qq && void 0 !== qq ? qq : 450;
+             return !Eq || Eq <= 0 ? gq : gq / 2 ** (Eq / 5)
+           }! function(qq) {
+             qq.getQuickChargeMultiplier = function(qq) {
+               const Eq = xg(qq, "Quick Charge");
+               return null === Eq || Eq <= 0 ? 1 : Math.max(1.2 ** -Eq, .1)
+             }, qq.getArrowSpeedMultiplier = function(qq) {
+               const Eq = xg(qq, "Arrow Speed");
+               return null === Eq || Eq <= 0 ? 1 : (1.2 * Eq + 1) ** .5
+             }, qq.getFirecrackerCooldownMultiplier = function(qq) {
+               const Eq = xg(qq, "Firecracker Cooldown");
+               return null === Eq || Eq <= 0 ? 1 : Math.max(.85 ** Eq, .4)
+             }, qq.getFirecrackerBoostMultiplier = function(qq) {
+               const Eq = xg(qq, "Firecracker Boost");
+               return null === Eq || Eq <= 0 ? 1 : Math.min(1 + .15 * Eq, 2)
+ ... (35 more added lines; see GitHub link above)
```

#### 921. `bundles/bloxd.io/main.js` (Changed code · before: `L38991-L39009` → after: `L15513-L15527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15513-L15527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15513-L15527) · [Before (L38991-L39009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L38991-L39009)

```diff
-           function AT(TT, kT, cT, lT) {
-             const MT = xT(TT),
-               OT = MT ? function(TT, kT, cT) {
-                 for (const [xT, IT, AT] of fT) {
-                   var lT;
-                   const MT = TT.querySelector(`.TouchComponentsButtons ${xT} > .TouchKey`),
-                     OT = null !== (lT = null === MT || void 0 === MT ? void 0 : MT.getBoundingClientRect().width) && void 0 !== lT ? lT : 0;
-                   if (OT > 0) return 5 * OT / AT / (0, KT.y)(kT, cT, IT)[2] / (0, KT.y)(kT, cT, "cluster")[2]
-                 }
-                 const MT = TT.querySelector(".TouchComponentsButtons");
-                 if (!MT) return null;
-                 const OT = MT.ownerDocument.createElement("div");
-                 OT.className = IT, OT.style.cssText = "position: absolute; visibility: hidden; width: calc(5 * var(--touch-unit-base)); height: 0", MT.append(OT);
-                 const yT = OT.getBoundingClientRect().width;
-                 return OT.remove(), yT > 0 ? yT : null
-               }(kT, cT, lT) : null;
- ... (3 more removed lines; see GitHub link above)
+           function Ng(qq, Eq) {
+             return "string" === typeof qq ? [{
+               str: qq,
+               style: Eq
+             }] : (gq = qq, Array.isArray(gq) ? qq.flatMap((qq => Ng(qq, Eq))) : "entityName" in qq || "translationKey" in qq ? [{
+               str: qq,
+               style: Eq
+             }] : (0, Bq.wb)(qq) ? [qq] : [{
+               ...qq,
+               style: {
+                 ...Eq,
+                 ...qq.style
+               }
+             }]);
+             var gq
```

#### 922. `bundles/bloxd.io/main.js` (Changed code · before: `L39012-L39026` → after: `L15530-L15534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15530-L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15530-L15534) · [Before (L39012-L39026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39012-L39026)

```diff
-           function CT() {
-             const TT = document.documentElement;
-             let kT = null;
-             const cT = () => {
-                 if (AT(TT, document, (0, KT.q)(), (0, KT.n)()), !xT(TT)) return;
-                 const cT = document.querySelector(".BottomRightElements");
-                 cT !== kT && (kT && fT.unobserve(kT), kT = cT, kT && fT.observe(kT))
-               },
-               fT = new ResizeObserver(cT);
-             cT(), window.addEventListener("resize", cT);
-             const IT = [(0, lT.m)(MT.c, cT), (0, lT.m)(OT.c, cT)];
-             return () => {
-               fT.disconnect(), window.removeEventListener("resize", cT);
-               for (const TT of IT) TT();
-               TT.style.removeProperty(yT)
+           function ag(qq, Eq, gq) {
+             const Yq = !qq || "Empty Bottle" === Eq;
+             return {
+               shouldModifySelectedSlot: Yq,
+               shouldModifyEmptySlot: Yq && 1 !== gq
```

#### 923. `bundles/bloxd.io/main.js` (Changed code · before: `L39038-L39047` → after: `L15538-L15539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15538-L15539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15538-L15539) · [Before (L39038-L39047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39038-L39047)

```diff
-           function KT() {
-             const [TT, kT] = (0, lT.useState)(MT.n);
-             return (0, lT.useEffect)((() => {
-               const TT = () => {
-                 kT((0, MT.n)())
-               };
-               return window.addEventListener("resize", TT), () => {
-                 window.removeEventListener("resize", TT)
-               }
-             }), []), TT
+           function Vg(qq, Eq, gq, Yq) {
+             return qq && Eq && !gq && Yq
```

#### 924. `bundles/bloxd.io/main.js` (Changed code · before: `L39050-L39051` → after: `L15543-L15559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15543-L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15543-L15559) · [Before (L39050-L39051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39050-L39051)

```diff
-           function OT() {
-             return (0, MT.W)().hudLayouts[KT()]
+           function jg(qq, Eq, gq) {
+             let Yq;
+             Yq = "getEngineStats" in qq ? qq.getEngineStats().blockMetadata : qq;
+             let lq = dg.get(Yq);
+             if (!lq) {
+               const qq = new Set(Object.keys(Yq).map((qq => Yq[qq].id)));
+               qq.add(0), lq = {
+                 blockIds: [...qq],
+                 maxBlockId: Math.max(...qq)
+               }, dg.set(Yq, lq)
+             }
+             const {
+               blockIds: Oq,
+               maxBlockId: mq
+             } = lq, xq = new gq(mq + 1);
+             for (const Aq of Oq) xq[Aq] = Number(Eq(Aq));
+ ... (1 more added lines; see GitHub link above)
```

#### 925. `bundles/bloxd.io/main.js` (Changed code · before: `L39053-L39054` → after: `L15561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15561) · [Before (L39053-L39054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39053-L39054)

```diff
-         },
-         1095: (TT, kT, cT) => {
+         }, , , , , , , , (qq, Eq, gq) => {
```

#### 926. `bundles/bloxd.io/main.js` (Changed code · before: `L39056-L39059` → after: `L15563-L15565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15563-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15563-L15565) · [Before (L39056-L39059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39056-L39059)

```diff
-             c: () => tT,
-             g: () => ST,
-             k: () => NT,
-             n: () => QT,
+             e: () => Aq,
+             i: () => mq,
+             m: () => Oq,
```

#### 927. `bundles/bloxd.io/main.js` (Changed code · before: `L39061-L39063` → after: `L15567-L15568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15567-L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15567-L15568) · [Before (L39061-L39063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39061-L39063)

```diff
-             p: () => vT,
-             q: () => AT,
-             s: () => jT
+             r: () => Yq,
+             v: () => xq
```

#### 928. `bundles/bloxd.io/main.js` (Changed code · before: `L39065-L39069` → after: `L15570-L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15570-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15570-L15644) · [Before (L39065-L39069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39065-L39069)

```diff
-           const lT = {
-             solid: () => Promise.all([cT.e(135), cT.e(37)]).then((() => cT(6690))).then((TT => TT.solidIcons)),
-             regular: () => cT.e(36).then((() => cT(7977))).then((TT => TT.regularIcons)),
-             duotone: () => cT.e(35).then((() => cT(8011))).then((TT => TT.duotoneIcons)),
-             brands: () => cT.e(34).then((() => cT(8031))).then((TT => TT.brandsIcons))
+           const Yq = ["Amethite", "Magmasteel", "Rubellite", "Serpentite"],
+             lq = ["", " Fragment", " Pickaxe", " Axe", " Spade", " Sword", " Hoe", " Helmet", " Chestplate", " Leggings", " Boots", " Gauntlets", " Bow", " Crossbow", " Crossbow Charged", " Spear", " Dagger", " Boomerang", " Club", " Mace", " Whip"],
+             Oq = Yq.map((qq => `${qq} Boomerang`)),
+             mq = ["Cursemetal", "Kingly Amethite", "Kingly Diamond"],
+             xq = ["Sanguine", "Spectral", "Geo", "Astral"],
+             Aq = ["Voltplate", "Nova", "Jet", "Nova Jet"]
+         }, , (qq, Eq, gq) => {
+           var Yq = gq(319);
+           qq.exports = {
+             EPSILON: gq(327),
+             ZERO: Yq(),
+             create: Yq,
+             clone: gq(335),
+             angle: gq(343),
+             gq: gq(346),
+             copy: gq(355),
+ ... (59 more added lines; see GitHub link above)
```

#### 929. `bundles/bloxd.io/main.js` (Changed code · before: `L39071-L39082` → after: `L15646-L15652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15646-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15646-L15652) · [Before (L39071-L39082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39071-L39082)

```diff
-           var MT = cT(1082);
-           const KT = new Map,
-             OT = new Map,
-             yT = 1e4,
-             fT = 3,
-             xT = new Map,
-             IT = new Set;
- 
-           function AT(TT) {
-             return IT.add(TT), () => {
-               IT.delete(TT)
-             }
+           var Yq = gq(346),
+             lq = gq(349),
+             Oq = gq(353)
+         }, , , qq => {
+           qq.exports = function(qq, Eq, gq) {
+             var Yq = new Float32Array(3);
+             return Yq[0] = qq, Yq[1] = Eq, Yq[2] = gq, Yq
```

#### 930. `bundles/bloxd.io/main.js` (Changed code · before: `L39084-L39085` → after: `L15654-L15683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15654-L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15654-L15683) · [Before (L39084-L39085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39084-L39085)

```diff
-           let CT = TT => {
-             TT()
+         }, , , qq => {
+           qq.exports = function(qq, Eq) {
+             var gq = Eq[0],
+               Yq = Eq[1],
+               lq = Eq[2],
+               Oq = gq * gq + Yq * Yq + lq * lq;
+             Oq > 0 && (Oq = 1 / Math.sqrt(Oq), qq[0] = Eq[0] * Oq, qq[1] = Eq[1] * Oq, qq[2] = Eq[2] * Oq);
+             return qq
+           }
+         }, , , , qq => {
+           qq.exports = function(qq, Eq) {
+             return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2]
+           }
+         }, , qq => {
+           qq.exports = function(qq, Eq) {
+             return qq[0] = Eq[0], qq[1] = Eq[1], qq[2] = Eq[2], qq
+ ... (14 more added lines; see GitHub link above)
```

#### 931. `bundles/bloxd.io/main.js` (Changed code · before: `L39087-L39089` → after: `L15685-L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15685-L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15685-L15807) · [Before (L39087-L39089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39087-L39089)

```diff
- 
-           function jT(TT) {
-             CT = TT
+           var Yq = gq(327)
+         }, , , , , , , , qq => {
+           qq.exports = function(qq, Eq) {
+             return qq[0] === Eq[0] && qq[1] === Eq[1] && qq[2] === Eq[2]
+           }
+         }, , , , , , qq => {
+           qq.exports = function(qq, Eq, gq) {
+             return qq[0] = Eq[0] + gq[0], qq[1] = Eq[1] + gq[1], qq[2] = Eq[2] + gq[2], qq
+           }
+         }, , , , , , qq => {
+           qq.exports = function(qq, Eq, gq) {
+             return qq[0] = Eq[0] - gq[0], qq[1] = Eq[1] - gq[1], qq[2] = Eq[2] - gq[2], qq
+           }
+         }, , , , , , (qq, Eq, gq) => {
+           qq.exports = gq(385)
+         }, , , qq => {
+ ... (107 more added lines; see GitHub link above)
```

#### 932. `bundles/bloxd.io/main.js` (Changed code · before: `L39091-L39095` → after: `L15809-L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15809-L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15809-L15815) · [Before (L39091-L39095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39091-L39095)

```diff
- 
-           function vT() {
-             CT((() => {
-               for (const TT of IT) TT()
-             }))
+         }, , , , , , , , qq => {
+           qq.exports = function(qq, Eq, gq) {
+             var Yq = Eq[0],
+               lq = Eq[1],
+               Oq = Eq[2],
+               mq = gq[3] * Yq + gq[7] * lq + gq[11] * Oq + gq[15];
+             return mq = mq || 1, qq[0] = (gq[0] * Yq + gq[4] * lq + gq[8] * Oq + gq[12]) / mq, qq[1] = (gq[1] * Yq + gq[5] * lq + gq[9] * Oq + gq[13]) / mq, qq[2] = (gq[2] * Yq + gq[6] * lq + gq[10] * Oq + gq[14]) / mq, qq
```

#### 933. `bundles/bloxd.io/main.js` (Changed code · before: `L39097-L39103` → after: `L15817-L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15817-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15817-L15822) · [Before (L39097-L39103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39097-L39103)

```diff
- 
-           function tT(TT, kT) {
-             var cT;
-             const lT = (null !== (cT = xT.get(TT)) && void 0 !== cT ? cT : 0) + 1;
-             xT.set(TT, lT), lT < fT && setTimeout((() => {
-               kT(), vT()
-             }), yT)
+         }, , , , , , , , qq => {
+           qq.exports = function(qq, Eq, gq) {
+             var Yq = Eq[0],
+               lq = Eq[1],
+               Oq = Eq[2];
+             return qq[0] = Yq * gq[0] + lq * gq[3] + Oq * gq[6], qq[1] = Yq * gq[1] + lq * gq[4] + Oq * gq[7], qq[2] = Yq * gq[2] + lq * gq[5] + Oq * gq[8], qq
```

#### 934. `bundles/bloxd.io/main.js` (Changed code · before: `L39105-L39116` → after: `L15824-L15837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15824-L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15824-L15837) · [Before (L39105-L39116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39105-L39116)

```diff
- 
-           function hT(TT) {
-             const kT = KT.get(TT);
-             if (kT) return Promise.resolve(kT);
-             const cT = OT.get(TT);
-             if (cT) return cT;
-             const yT = lT[TT]().then((kT => (KT.set(TT, kT), OT.delete(TT), vT(), kT)));
-             return yT.catch((kT => {
-               console.warn(`Failed to load the "${TT}" icon kit`, kT), (0, MT.vt)(kT), tT(`kit:${TT}`, (() => {
-                 OT.delete(TT)
-               }))
-             })), OT.set(TT, yT), yT
+         }, , , , , qq => {
+           qq.exports = function(qq, Eq, gq) {
+             var Yq = Eq[0],
+               lq = Eq[1],
+               Oq = Eq[2],
+               mq = gq[0],
+               xq = gq[1],
+               Aq = gq[2],
+               cq = gq[3],
+               uq = cq * Yq + xq * Oq - Aq * lq,
+               Bq = cq * lq + Aq * Yq - mq * Oq,
+               Wq = cq * Oq + mq * lq - xq * Yq,
+               Nq = -mq * Yq - xq * lq - Aq * Oq;
+             return qq[0] = uq * cq + Nq * -mq + Bq * -Aq - Wq * -xq, qq[1] = Bq * cq + Nq * -xq + Wq * -mq - uq * -Aq, qq[2] = Wq * cq + Nq * -Aq + uq * -xq - Bq * -mq, qq
```

#### 935. `bundles/bloxd.io/main.js` (Changed code · before: `L39118-L39120` → after: `L15839-L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15839-L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15839-L15847) · [Before (L39118-L39120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39118-L39120)

```diff
- 
-           function NT(TT) {
-             return KT.get(TT)
+         }, , , , , , qq => {
+           qq.exports = function(qq, Eq, gq, Yq) {
+             var lq = gq[1],
+               Oq = gq[2],
+               mq = Eq[1] - lq,
+               xq = Eq[2] - Oq,
+               Aq = Math.sin(Yq),
+               cq = Math.cos(Yq);
+             return qq[0] = Eq[0], qq[1] = lq + mq * cq - xq * Aq, qq[2] = Oq + mq * Aq + xq * cq, qq
```

#### 936. `bundles/bloxd.io/main.js` (Changed code · before: `L39122-L39124` → after: `L15849-L15857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15849-L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15849-L15857) · [Before (L39122-L39124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39122-L39124)

```diff
- 
-           function QT(TT) {
-             return ST(TT, "brands") ? "brands" : "solid"
+         }, , , qq => {
+           qq.exports = function(qq, Eq, gq, Yq) {
+             var lq = gq[0],
+               Oq = gq[2],
+               mq = Eq[0] - lq,
+               xq = Eq[2] - Oq,
+               Aq = Math.sin(Yq),
+               cq = Math.cos(Yq);
+             return qq[0] = lq + xq * Aq + mq * cq, qq[1] = Eq[1], qq[2] = Oq + xq * cq - mq * Aq, qq
```

#### 937. `bundles/bloxd.io/main.js` (Changed code · before: `L39126-L39130` → after: `L15859-L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15859-L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15859-L15867) · [Before (L39126-L39130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39126-L39130)

```diff
- 
-           function ST(TT, kT) {
-             var cT;
-             const lT = KT.get(kT);
-             return lT ? null !== (cT = lT[TT]) && void 0 !== cT ? cT : null : (hT(kT), null)
+         }, , , qq => {
+           qq.exports = function(qq, Eq, gq, Yq) {
+             var lq = gq[0],
+               Oq = gq[1],
+               mq = Eq[0] - lq,
+               xq = Eq[1] - Oq,
+               Aq = Math.sin(Yq),
+               cq = Math.cos(Yq);
+             return qq[0] = lq + mq * cq - xq * Aq, qq[1] = Oq + mq * Aq + xq * cq, qq[2] = Eq[2], qq
```

#### 938. `bundles/bloxd.io/main.js` (Changed code · before: `L39132-L39133` → after: `L15869-L15879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15869-L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15869-L15879) · [Before (L39132-L39133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39132-L39133)

```diff
-         },
-         1079: (TT, kT, cT) => {
+         }, , , , (qq, Eq, gq) => {
+           qq.exports = function(qq, Eq, gq, lq, Oq, mq) {
+             var xq, Aq;
+             Eq || (Eq = 3);
+             gq || (gq = 0);
+             Aq = lq ? Math.min(lq * Eq + gq, qq.length) : qq.length;
+             for (xq = gq; xq < Aq; xq += Eq) Yq[0] = qq[xq], Yq[1] = qq[xq + 1], Yq[2] = qq[xq + 2], Oq(Yq, Yq, mq), qq[xq] = Yq[0], qq[xq + 1] = Yq[1], qq[xq + 2] = Yq[2];
+             return qq
+           };
+           var Yq = gq(319)()
+         }, , , , , , , , , (qq, Eq, gq) => {
```

#### 939. `bundles/bloxd.io/main.js` (Changed code · before: `L39135-L39142` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15881) · [Before (L39135-L39142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39135-L39142)

```diff
-             e: () => KT.g,
-             f: () => AT,
-             g: () => KT.k,
-             j: () => KT.n,
-             l: () => IT,
-             n: () => KT.o,
-             o: () => CT,
-             s: () => KT.q
+             e: () => Yq
```

#### 940. `bundles/bloxd.io/main.js` (Changed code · before: `L39144-L39209` → after: `L15883-L15890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15883-L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15883-L15890) · [Before (L39144-L39209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39144-L39209)

```diff
-           var lT = cT(94),
-             MT = cT(1082),
-             KT = cT(1095);
-           (0, KT.s)(lT.unstable_batchedUpdates);
-           const OT = {
-             "fa-solid": "solid",
-             fas: "solid",
-             "fa-regular": "regular",
-             far: "regular",
-             "fa-duotone": "duotone",
-             fad: "duotone",
-             "fa-brands": "brands",
-             fab: "brands"
-           };
- 
-           function yT(TT) {
- ... (50 more removed lines; see GitHub link above)
+           class Yq {
+             constructor(qq, Eq) {
+               this.keyToValueTable = qq, this.valueToKeyTable = void 0;
+               const gq = {};
+               for (const Yq in this.keyToValueTable) {
+                 const qq = this.keyToValueTable[Yq];
+                 if (void 0 !== gq[qq]) throw new Error(`Duplicate value found in bi-directional table: ${String(qq)}`);
+                 gq[qq] = "string" === Eq ? Yq : Number(Yq)
```

#### 941. `bundles/bloxd.io/main.js` (Changed code · before: `L39212-L39215` → after: `L15894-L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15894-L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15894-L15898) · [Before (L39212-L39215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39212-L39215)

```diff
-             return {
-               name: TT,
-               kit: kT,
-               extraClasses: ""
+             get(qq) {
+               return this.keyToValueTable[qq]
+             }
+             reverseGet(qq) {
+               return this.valueToKeyTable[qq]
```

#### 942. `bundles/bloxd.io/main.js` (Changed code · before: `L39218-L39269` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15901) · [Before (L39218-L39269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39218-L39269)

```diff
-         },
-         3592: (TT, kT, cT) => {
-           cT.d(kT, {
-             b: () => fT
-           });
-           var lT = cT(3589),
-             MT = cT(1953),
-             KT = cT(36);
-           const OT = 1e4,
-             yT = new Set;
- 
-           function fT(TT) {
-             let {
-               playerId: kT,
-               playerName: cT,
-               chatMsgId: fT,
- ... (36 more removed lines; see GitHub link above)
+         }, , , , , (qq, Eq, gq) => {
```

#### 943. `bundles/bloxd.io/main.js` (Changed code · before: `L39272` → after: `L15904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15904) · [Before (L39272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39272)

```diff
-             i: () => fT,
+             f: () => Aq,
```

#### 944. `bundles/bloxd.io/main.js` (Changed code · before: `L39274` → after: `L15906-L15910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15906-L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15906-L15910) · [Before (L39274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39274)

```diff
-             m: () => yT
+             m: () => xq,
+             o: () => cq,
+             p: () => mq,
+             s: () => Nq,
+             w: () => Yq
```

#### 945. `bundles/bloxd.io/main.js` (Changed code · before: `L39276` → after: `L15912-L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15912-L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15912-L15914) · [Before (L39276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39276)

```diff
-           var lT = cT(71);
+           const Yq = ["developer", "admin", "super", "youtuber", "creatorLevel1", "creatorLevel2", "creatorLevel3"],
+             lq = ["creatorLevel1", "creatorLevel2", "creatorLevel3"];
+           const Oq = new Set(["developer", "youtuber", ...lq]);
```

#### 946. `bundles/bloxd.io/main.js` (Changed code · before: `L39279-L39280` → after: `L15917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15917) · [Before (L39279-L39280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39279-L39280)

```diff
-             const kT = TT();
-             return "function" === typeof kT ? kT : () => {}
+             return qq.some((qq => Oq.has(qq)))
```

#### 947. `bundles/bloxd.io/main.js` (Changed code · before: `L39283-L39285` → after: `L15920-L16003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15920-L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L15920-L16003) · [Before (L39283-L39285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39283-L39285)

```diff
-               inGameUi: !1,
-               shown: !0,
-               whenShown: MT
+               developer: {
+                 icon: "wrench",
+                 mainRGB: "#a4a4a4",
+                 bracketRGB: "#cef3ff",
+                 chatTag: [{
+                   str: "Dev",
+                   strRGB: "#cef3ff"
+                 }],
+                 nameTag: {
+                   iconShadowRGB: "#838383"
+                 },
+                 visible: !0
+               },
+               admin: {
+                 icon: "person-military-pointing",
+                 mainRGB: "#556c7d",
+ ... (68 more added lines; see GitHub link above)
```

#### 948. `bundles/bloxd.io/main.js` (Changed code · before: `L39287-L39307` → after: `L16005-L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16005-L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16005-L16039) · [Before (L39287-L39307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39287-L39307)

```diff
-             OT = (0, lT.createContext)(KT);
- 
-           function yT() {
-             return (0, lT.useContext)(OT)
-           }
-           class fT {
-             constructor(TT) {
-               this.isShown = TT, this.inGameUi = !0, this.waiting = new Set
-             }
-             get shown() {
-               return this.isShown
-             }
-             whenShown(TT) {
-               if (this.isShown) return MT(TT);
-               let kT = null;
-               const cT = () => {
- ... (5 more removed lines; see GitHub link above)
+             Aq = "none",
+             cq = [Aq, "super", "super_inverted", "youtuber", "pig", "cow_normal", "cow_cream", "sheep", "creator_level1", "creator_level2", "creator_level3"],
+             uq = {
+               [Aq]: {
+                 requiresRanks: []
+               },
+               super: {
+                 requiresRanks: ["super"]
+               },
+               super_inverted: {
+                 requiresRanks: ["super"]
+               },
+               youtuber: {
+                 requiresRanks: ["super", "youtuber"]
+               },
+               pig: {
+ ... (19 more added lines; see GitHub link above)
```

#### 949. `bundles/bloxd.io/main.js` (Changed code · before: `L39309-L39317` → after: `L16041-L16207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16041-L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16041-L16207) · [Before (L39309-L39317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39309-L39317)

```diff
-             }
-             show() {
-               if (this.isShown) return;
-               this.isShown = !0;
-               const TT = [...this.waiting];
-               this.waiting.clear();
-               for (const kT of TT) kT()
-             }
-           }
+             },
+             Bq = {
+               creatorLevel1: "creator_level1",
+               creatorLevel2: "creator_level2",
+               creatorLevel3: "creator_level3"
+             };
+           new Set(Object.values(Bq));
+           const Wq = "default",
+             Nq = {
+               [Wq]: "#dff8ff",
+               yellow: "#ffff66",
+               lime: "#b3ff66",
+               green: "#66ff66",
+               aqua: "#66ffb3",
+               cyan: "#66ffff",
+               blue: "#66bcff",
+ ... (151 more added lines; see GitHub link above)
```

#### 950. `bundles/bloxd.io/main.js` (Changed code · before: `L39320-L39327` → after: `L16210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16210) · [Before (L39320-L39327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39320-L39327)

```diff
-             let {
-               children: kT
-             } = TT;
-             const cT = yT(),
-               [MT, KT] = (0, lT.useState)(cT.shown);
-             return (0, lT.useEffect)((() => cT.whenShown((() => {
-               KT(!0)
-             }))), [cT]), MT ? (0, lT.createElement)(lT.Fragment, null, kT) : null
+             return void 0 === qq || null === qq
```

#### 951. `bundles/bloxd.io/main.js` (Changed code · before: `L39329-L39339` → after: `L16212-L16214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16212-L16214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16212-L16214) · [Before (L39329-L39339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39329-L39339)

```diff
-         },
-         4543: (TT, kT, cT) => {
-           cT.d(kT, {
-             d: () => MT,
-             f: () => KT,
-             g: () => yT,
-             k: () => OT,
-             o: () => fT
-           });
-           var lT = cT(1532);
-           const MT = "page";
+           const cq = 32,
+             uq = 0 | Math.log2(cq),
+             Bq = cq - 1 | 0;
```

#### 952. `bundles/bloxd.io/main.js` (Changed code · before: `L39342-L39343` → after: `L16217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16217) · [Before (L39342-L39343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39342-L39343)

```diff
-             const kT = null === TT ? NaN : Number(TT);
-             return Number.isInteger(kT) && kT >= 1 ? kT : 1
+             return qq >> uq
```

#### 953. `bundles/bloxd.io/main.js` (Changed code · before: `L39346-L39347` → after: `L16220-L16221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16220-L16221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16220-L16221) · [Before (L39346-L39347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39346-L39347)

```diff
-           function OT(TT, kT) {
-             yT(TT, MT, 1 === kT ? null : String(kT))
+           function Nq(qq) {
+             return qq << uq
```

#### 954. `bundles/bloxd.io/main.js` (Changed code · before: `L39350-L39351` → after: `L16224-L16225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16224-L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16224-L16225) · [Before (L39350-L39351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39350-L39351)

```diff
-           function yT(TT, kT, cT) {
-             null === cT ? TT.delete(kT) : TT.set(kT, cT)
+           function aq(qq) {
+             return [qq[0] >> uq, qq[1] >> uq, qq[2] >> uq]
```

#### 955. `bundles/bloxd.io/main.js` (Changed code · before: `L39354-L39363` → after: `L16228-L16229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16228-L16229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16228-L16229) · [Before (L39354-L39363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39354-L39363)

```diff
-           function fT() {
-             const [TT, kT] = (0, lT.k)();
-             return [TT, function(TT) {
-               kT((kT => {
-                 const cT = new URLSearchParams(kT);
-                 return TT(cT), cT
-               }), {
-                 replace: !0
-               })
-             }]
+           function Vq(qq) {
+             return qq & Bq
```

#### 956. `bundles/bloxd.io/main.js` (Changed code · before: `L39365-L39396` → after: `L16231-L16233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16231-L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16231-L16233) · [Before (L39365-L39396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39365-L39396)

```diff
-         },
-         3371: (TT, kT, cT) => {
-           cT.d(kT, {
-             e: () => jT,
-             g: () => CT,
-             j: () => AT,
-             k: () => vT,
-             o: () => tT
-           });
-           var lT = cT(71),
-             MT = cT(1539),
-             KT = cT(1535),
-             OT = cT(31),
-             yT = cT(1953),
-             fT = cT(3125),
-             xT = cT(1530);
- ... (16 more removed lines; see GitHub link above)
+ 
+           function dq(qq) {
+             return [qq[0] & Bq, qq[1] & Bq, qq[2] & Bq]
```

#### 957. `bundles/bloxd.io/main.js` (Changed code · before: `L39399-L39404` → after: `L16236-L16237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16236-L16237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16236-L16237) · [Before (L39399-L39404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39399-L39404)

```diff
-           function CT() {
-             var TT;
-             let kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/";
-             null === (TT = IT) || void 0 === TT || TT.abortController.abort(), yT.gameBridge.send("leaveGame", {
-               reloadPath: kT
-             })
+           function jq(qq) {
+             return `${Wq(qq[0])}|${Wq(qq[1])}|${Wq(qq[2])}`
```

#### 958. `bundles/bloxd.io/main.js` (Changed code · before: `L39407-L39410` → after: `L16240-L16241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16240-L16241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16240-L16241) · [Before (L39407-L39410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39407-L39410)

```diff
-           function jT() {
-             yT.gameBridge.latest("connectedGame").replay || yT.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), (0, xT.navigateToHomePage)()
+           function Hq(qq, Eq, gq) {
+             return [0 | Math.floor(qq / cq), 0 | Math.floor(Eq / cq), 0 | Math.floor(gq / cq)]
```

#### 959. `bundles/bloxd.io/main.js` (Changed code · before: `L39413-L39418` → after: `L16244-L16245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16244-L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16244-L16245) · [Before (L39413-L39418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39413-L39418)

```diff
-           function vT() {
-             (0, lT.useEffect)((() => () => {
-               CT(null), (0, fT.e)(), OT.e.set({
-                 gameState: "landingPage"
-               })
-             }), [])
+           function oq(qq) {
+             return JSON.stringify(qq)
```

#### 960. `bundles/bloxd.io/main.js` (Changed code · before: `L39421-L39448` → after: `L16249-L16250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16249-L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16249-L16250) · [Before (L39421-L39448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39421-L39448)

```diff
-           function tT() {
-             const TT = (0, lT.useRef)(!1),
-               kT = (0, lT.useCallback)((kT => {
-                 let {
-                   currentLocation: cT,
-                   nextLocation: lT,
-                   historyAction: KT
-                 } = kT;
-                 return !(cT.pathname === lT.pathname && cT.search === lT.search || !yT.gameBridge.latest("connectedGame").replay) && (TT.current = KT === MT.f.Pop, !0)
-               }), []),
-               cT = (0, KT.o)(kT);
-             (0, lT.useEffect)((() => {
-               if ("blocked" !== cT.state) return;
-               const {
-                 pathname: kT,
-                 search: lT,
- ... (12 more removed lines; see GitHub link above)
+           function Qq(qq) {
+             return qq === Pq ? Pq : qq
```

#### 961. `bundles/bloxd.io/main.js` (Changed code · before: `L39450-L39451` → after: `L16252-L16260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16252-L16260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16252-L16260) · [Before (L39450-L39451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39450-L39451)

```diff
-         },
-         3336: (TT, kT, cT) => {
+           const yq = Yq.e * Number(atob("NQ==")) + Number(atob("MTM="));
+           async function tq(qq) {
+             return new Promise((Eq => {
+               setTimeout((() => {
+                 Eq()
+               }), qq)
+             }))
+           }
+         }, , (qq, Eq, gq) => {
```

#### 962. `bundles/bloxd.io/main.js` (Changed code · before: `L39453-L39455` → after: `L16262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16262) · [Before (L39453-L39455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39453-L39455)

```diff
-             c: () => OT,
-             g: () => fT,
-             k: () => KT
+             e: () => Yq
```

#### 963. `bundles/bloxd.io/main.js` (Changed code · before: `L39457-L39481` → after: `L16264-L16265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16264-L16265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16264-L16265) · [Before (L39457-L39481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39457-L39481)

```diff
-           var lT = cT(1532),
-             MT = cT(1099);
-           const KT = new Date("2026-10-05T09:00:00Z"),
-             OT = "PrivacyPopup",
-             yT = "#85baff";
- 
-           function fT() {
-             return (0, MT.jsxs)(MT.Fragment, {
-               children: [(0, MT.jsx)("br", {}), "We use cookies and similar technologies for the website's functionality, to analyse its usage, and to support advertising (personalized only with your consent). For more details, please refer to our updated", " ", (0, MT.jsx)(lT.e, … [truncated]
-                 to: "/privacy-policy",
-                 style: {
-                   color: yT
-                 },
-                 children: "Privacy Policy"
-               }), ".", (0, MT.jsx)("br", {}), (0, MT.jsx)("br", {}), "If you're under 13, please ask an adult to review and approve it for you. If you're an adult, you can approve it yourself. By continuing to use bloxd.io, you (or your adult) agree to the updated", " ", (0, MT.j … [truncated]
-                 to: "/privacy-policy",
- ... (9 more removed lines; see GitHub link above)
+           const Yq = 869
+         }, , , , , (qq, Eq, gq) => {
```

#### 964. `bundles/bloxd.io/main.js` (Changed code · before: `L39485-L39486` → after: `L16269-L16270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16269-L16270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16269-L16270) · [Before (L39485-L39486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39485-L39486)

```diff
-             f: () => IT,
-             j: () => vT,
+             e: () => jq,
+             i: () => Hq,
```

#### 965. `bundles/bloxd.io/main.js` (Changed code · before: `L39490-L39492` → after: `L16274-L16283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16274-L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16274-L16283) · [Before (L39490-L39492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39490-L39492)

```diff
-           var lT = cT(3536),
-             MT = cT(71),
-             KT = cT(1099);
+           var Yq = gq(296),
+             lq = gq(611),
+             Oq = gq(104),
+             mq = gq.n(Oq),
+             xq = gq(670),
+             Aq = gq(278),
+             cq = gq(38),
+             uq = gq(118),
+             Bq = gq(678);
+           const Wq = !0 === cq.i.getItem("useWebGpu");
```

#### 966. `bundles/bloxd.io/main.js` (Changed code · before: `L39495-L39540` → after: `L16286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16286) · [Before (L39495-L39540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39495-L39540)

```diff
-             let cT = null,
-               OT = !1,
-               yT = null;
- 
-             function fT(kT) {
-               if (null === cT) {
-                 OT = kT;
-                 const lT = TT();
-                 cT = lT, lT.then((TT => {
-                   yT = TT
-                 }), (() => {
-                   cT = null
-                 }))
-               }
-               return cT
-             }
- ... (30 more removed lines; see GitHub link above)
+             return qq === (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "webgl_default") && !Eq
```

#### 967. `bundles/bloxd.io/main.js` (Changed code · before: `L39542-L39546` → after: `L16288-L16291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16288-L16291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16288-L16291) · [Before (L39542-L39546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39542-L39546)

```diff
-           var yT = cT(698),
-             fT = cT(1348);
-           const xT = OT((() => Promise.all([cT.e(106), cT.e(107), cT.e(102), cT.e(104), cT.e(209), cT.e(115)]).then((() => cT(36130)))), (0, KT.jsx)(fT.d, {})),
-             IT = OT((() => Promise.all([cT.e(109), cT.e(387)]).then((() => cT(8922)))), (0, KT.jsx)(fT.d, {})),
-             AT = OT((() => cT.e(211).then((() => cT(36180)))), (0, KT.jsx)(fT.d, {}));
+           const aq = !Bq.d && Nq(Aq.c.webgl_holdback_v1, Wq) && !(lq.v && !0 === cq.i.getItem(uq.A)),
+             Vq = Yq.ac && !aq,
+             dq = Yq.ac && !Vq,
+             jq = Nq(Aq.c.intel_gen9_lite_v1, Wq);
```

#### 968. `bundles/bloxd.io/main.js` (Changed code · before: `L39549-L39551` → after: `L16294-L16295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16294-L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16294-L16295) · [Before (L39549-L39551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39549-L39551)

```diff
-             (0, lT.e)().then((() => {
-               TT.startsWith("/game/") ? xT.preload() : TT.startsWith("/place/") && AT.preload()
-             }))
+             const Eq = mq().getParser(qq);
+             return "Safari" === Eq.getBrowserName() && "26" === (0, xq.d)("Safari", Eq.getBrowserVersion(), null)
```

#### 969. `bundles/bloxd.io/main.js` (Changed code · before: `L39555-L39569` → after: `L16300-L16301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16300-L16301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16300-L16301) · [Before (L39555-L39569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39555-L39569)

```diff
-             (0, yT.c)((() => {
-               /^\/(play|studio)(\/|$)/.test(window.location.pathname) || TT()
-             }))
-           }
- 
-           function vT() {
-             jT((() => {
-               xT.preload().then(IT.preload)
-             }))
-           }
- 
-           function tT() {
-             jT((() => {
-               IT.preload()
-             }))
+             const Eq = !0 === qq ? "webgl_default" : qq;
+             return "string" === typeof Eq && Nq(Aq.c.gpu_class_webgl_v1, Wq, Eq)
```

#### 970. `bundles/bloxd.io/main.js` (Changed code · before: `L39571-L39572` → after: `L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16303) · [Before (L39571-L39572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39571-L39572)

```diff
-         },
-         2492: (TT, kT, cT) => {
+         }, , , , , , (qq, Eq, gq) => {
```

#### 971. `bundles/bloxd.io/main.js` (Changed code · before: `L39574` → after: `L16305-L16306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16305-L16306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16305-L16306) · [Before (L39574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39574)

```diff
-             d: () => IT,
+             e: () => Bq,
+             g: () => Vq,
```

#### 972. `bundles/bloxd.io/main.js` (Changed code · before: `L39576` → after: `L16308-L16313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16308-L16313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16308-L16313) · [Before (L39576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39576)

```diff
-             j: () => AT
+             k: () => Pq,
+             m: () => tq,
+             q: () => rq,
+             u: () => yq,
+             v: () => Qq,
+             w: () => vq
```

#### 973. `bundles/bloxd.io/main.js` (Changed code · before: `L39578-L39583` → after: `L16315-L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16315-L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16315-L16325) · [Before (L39578-L39583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39578-L39583)

```diff
-           var lT = cT(1996),
-             MT = cT(118),
-             KT = cT(2501),
-             OT = cT(2504),
-             yT = cT(2454),
-             fT = cT(2512);
+           const Yq = ["refused", "unsupported", "oom", "kills", "gpu", "blockedAfterLoss"];
+           var lq = gq(614),
+             Oq = gq(634),
+             mq = gq(136),
+             xq = gq(642),
+             Aq = gq(658);
+           const cq = {
+             iosWeb: 0,
+             iosApp: 0,
+             androidApp: 10
+           };
```

#### 974. `bundles/bloxd.io/main.js` (Changed code · before: `L39585-L39587` → after: `L16327-L16328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16327-L16328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16327-L16328) · [Before (L39585-L39587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39585-L39587)

```diff
-           function xT() {
-             const TT = (0, lT.e)("connectedGame", fT.b);
-             return MT.featureFlags.canUseInviteLinks ? [yT.k] : TT ? [yT.r] : []
+           function uq(qq, Eq, gq) {
+             return "mobileIos" === gq ? "iosApp" : "mobileAndroid" === gq ? "androidApp" : /iPad|iPhone|iPod/.test(qq) || "MacIntel" === qq && Eq > 1 ? "iosWeb" : null
```

#### 975. `bundles/bloxd.io/main.js` (Changed code · before: `L39590-L39592` → after: `L16335-L16337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16335-L16337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16335-L16337) · [Before (L39590-L39592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39590-L39592)

```diff
-           function IT(TT, kT) {
-             const cT = [...TT, ...kT];
-             return (0, OT.D)(KT.C).flatMap((TT => cT.filter((kT => kT.hudId === TT))))
+           function Vq(qq) {
+             const Eq = new URLSearchParams(qq).get("client");
+             return "wasm" === Eq || "js" === Eq ? Eq : null
```

#### 976. `bundles/bloxd.io/main.js` (Changed code · before: `L39595-L39597` → after: `L16340-L16374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16340-L16374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16340-L16374) · [Before (L39595-L39597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39595-L39597)

```diff
-           function AT() {
-             const TT = IT((0, yT.l)(), xT());
-             return KT.C.filter((kT => !OT.q.has(kT) || TT.some((TT => TT.hudId === kT))))
+           function dq(qq) {
+             var Eq, gq;
+             const Yq = Vq(qq.search);
+             if ("wasm" === Yq) return {
+               client: "wasm",
+               reason: "address"
+             };
+             const lq = qq.hostname === Bq,
+               Oq = "iosWeb" === qq.surface || "iosApp" === qq.surface,
+               mq = !lq && null !== qq.surface && qq.bucket >= qq.shareCaps[qq.surface],
+               xq = !lq && qq.bucket >= (Aq = qq.share, cq = qq.defaultShare, "number" === typeof Aq && Number.isInteger(Aq) && Aq >= 0 && Aq <= 100 ? Aq : cq);
+             var Aq, cq;
+             const uq = "wasm" === (null === (Eq = qq.rule) || void 0 === Eq ? void 0 : Eq.client) && (!Oq || qq.rule.iosCapOverride);
+             return mq && !uq ? {
+               client: "js",
+               reason: Oq ? "ios" : "share"
+ ... (19 more added lines; see GitHub link above)
```

#### 977. `bundles/bloxd.io/main.js` (Changed code · before: `L39611-L39617` → after: `L16377-L16390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16377-L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16377-L16390) · [Before (L39611-L39617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39611-L39617)

```diff
-           function yT(TT, kT, cT) {
-             let lT = null;
-             for (const KT of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
-               const OT = KT.getBoundingClientRect();
-               var MT;
-               if (OT.height > 0 && OT.top > cT && OT.left < kT && OT.right > TT) lT = Math.min(null !== (MT = lT) && void 0 !== MT ? MT : OT.top, OT.top)
-             }
+           function jq(qq) {
+             const Eq = (0, Oq.i)(Nq, qq);
+             return gq = Eq, Yq.includes(gq) ? Eq : null;
+             var gq
+           }
+ 
+           function Hq(qq) {
+             var Eq;
+             const gq = Number(null !== (Eq = (0, Oq.l)(qq, Wq)) && void 0 !== Eq ? Eq : NaN);
+             if (Number.isInteger(gq) && gq >= 0 && gq < 100) return gq;
+             const Yq = Math.floor(100 * Math.random());
+             try {
+               null === qq || void 0 === qq || qq.setItem(Wq, String(Yq))
+             } catch {}
```

#### 978. `bundles/bloxd.io/main.js` (Changed code · before: `L39621-L39625` → after: `L16394-L16401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16394-L16401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16394-L16401) · [Before (L39621-L39625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39621-L39625)

```diff
-           function fT(TT, kT) {
-             const {
-               isTouchScreen: cT
-             } = (0, MT.n)(["isTouchScreen"]), fT = (0, lT.useRef)(null);
-             (0, KT.g)(OT, (() => {
+           function oq() {
+             try {
+               return window.sessionStorage
+             } catch {
+               return null
+             }
+           }
+           const Pq = function() {
```

#### 979. `bundles/bloxd.io/main.js` (Changed code · before: `L39627-L39639` → after: `L16403-L16405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16403-L16405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16403-L16405) · [Before (L39627-L39639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39627-L39639)

```diff
-               null === (TT = fT.current) || void 0 === TT || TT.call(fT)
-             })), (0, lT.useEffect)((() => {
-               const lT = null === TT || void 0 === TT ? void 0 : TT.closest(kT),
-                 MT = document.querySelector(".BottomRightElements");
-               if (!cT || !TT || !lT || !MT) return;
-               const KT = () => {
-                 ! function(TT, kT) {
-                   const cT = TT.getBoundingClientRect(),
-                     lT = yT(cT.left, cT.right, -1 / 0),
-                     MT = kT.getBoundingClientRect().bottom + parseFloat(getComputedStyle(kT).bottom),
-                     KT = null === lT ? "0px" : `${Math.ceil(MT-lT+4)}px`;
-                   kT.style.getPropertyValue("--touch-keys-reach") !== KT && kT.style.setProperty("--touch-keys-reach", KT)
-                 }(TT, lT)
+               if ("undefined" === typeof window) return {
+                 client: "js",
+                 reason: "build"
```

#### 980. `bundles/bloxd.io/main.js` (Changed code · before: `L39641-L39644` → after: `L16407-L16427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16407-L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16407-L16427) · [Before (L39641-L39644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39641-L39644)

```diff
-               fT.current = KT;
-               const OT = new ResizeObserver(KT);
-               return OT.observe(TT), OT.observe(MT), window.addEventListener("resize", KT), () => {
-                 fT.current = null, OT.disconnect(), window.removeEventListener("resize", KT), lT.style.setProperty("--touch-keys-reach", "0px")
+               const Eq = (0, Oq.f)(),
+                 gq = null === Vq(window.location.search) && (0, lq.D)("wasm").filter((qq => !0 !== qq.unconfirmed)).length >= 2,
+                 Yq = {
+                   search: window.location.search,
+                   hostname: window.location.hostname,
+                   share: window.__bloxdWasmClientShare,
+                   defaultShare: 0,
+                   bucket: Hq(Eq),
+                   declined: gq ? "kills" : null !== (qq = jq(Eq)) && void 0 !== qq ? qq : jq(oq()),
+                   surface: uq(navigator.platform, navigator.maxTouchPoints, mq.n),
+                   shareCaps: cq,
+                   jsClientGpu: Aq.q,
+                   rule: (0, xq.i)()
+                 };
+               var Bq;
+               if (gq && (yq("kills"), "wasm" === (null === (Bq = Yq.rule) || void 0 === Bq ? void 0 : Bq.client))) {
+ ... (5 more added lines; see GitHub link above)
```

#### 981. `bundles/bloxd.io/main.js` (Changed code · before: `L39646` → after: `L16429-L16434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16429-L16434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16429-L16434) · [Before (L39646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39646)

```diff
-             }), [cT, TT, kT])
+               return dq(Yq)
+             }(),
+             Qq = "wasm" === Pq.client;
+ 
+           function yq(qq) {
+             (0, Oq.c)(Nq, qq, aq.has(qq) ? oq() : (0, Oq.f)())
```

#### 982. `bundles/bloxd.io/main.js` (Changed code · before: `L39664-L39676` → after: `L16438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16438) · [Before (L39664-L39676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39664-L39676)

```diff
-             return null !== xT || (xT = (async () => {
-               try {
-                 const TT = await KT.userContextManager.getCurrentUserContext();
-                 ! function(TT) {
-                   yT = TT;
-                   for (const kT of fT) kT(TT)
-                 }(await MT.d.getCustomGamePlaces(TT))
-               } catch (TT) {
-                 console.error("Failed to fetch custom game places", TT)
-               } finally {
-                 xT = null
-               }
-             })()), xT
+             console.warn("[bloxd-client-choice] the GL render device's recovery gave up: this tab's later pages play the JS client"), yq("blockedAfterLoss"), rq("decline")
```

#### 983. `bundles/bloxd.io/main.js` (Changed code · before: `L39679-L39699` → after: `L16441-L16443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16441-L16443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16441-L16443) · [Before (L39679-L39699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39679-L39699)

```diff
-           function jT() {
-             let {
-               refresh: TT = !1
-             } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-             const [kT, cT] = (0, lT.useState)(yT);
-             return (0, lT.useEffect)((() => (fT.add(cT), null !== yT ? cT(yT) : CT(), () => {
-               fT.delete(cT)
-             })), []), (0, lT.useEffect)((() => {
-               if (TT) return IT++, null === AT && (AT = setInterval(CT, OT)), () => {
-                 IT--, 0 === IT && null !== AT && (clearInterval(AT), AT = null)
-               }
-             }), [TT]), kT
-           }
-         },
-         3022: (TT, kT, cT) => {
-           cT.d(kT, {
- ... (5 more removed lines; see GitHub link above)
+           function rq(qq) {
+             "wasm" === Pq.client && "rule" === Pq.reason && (0, xq.x)(qq)
+           }
```

#### 984. `bundles/bloxd.io/main.js` (Changed code · before: `L39701-L39749` → after: `L16445-L16447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16445-L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16445-L16447) · [Before (L39701-L39749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39701-L39749)

```diff
-           function OT() {
-             const [TT, kT] = (0, lT.useState)({
-               id: null,
-               seq: 0,
-               ended: !1
-             }), cT = (0, lT.useCallback)((TT => {
-               kT((kT => kT.id !== TT || kT.ended ? {
-                 id: TT,
-                 seq: kT.seq + 1,
-                 ended: !1
-               } : {
-                 id: null,
-                 seq: kT.seq + 1,
-                 ended: !1
-               }))
-             }), []), OT = (0, lT.useCallback)((TT => {
- ... (33 more removed lines; see GitHub link above)
+           function vq(qq) {
+             const Eq = new URL(qq);
+             return Eq.searchParams.set("client", "js"), Eq.toString()
```

#### 985. `bundles/bloxd.io/main.js` (Changed code · before: `L39751-L39752` → after: `L16449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16449) · [Before (L39751-L39752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39751-L39752)

```diff
-         },
-         2563: (TT, kT, cT) => {
+         }, , , (qq, Eq, gq) => {
```

#### 986. `bundles/bloxd.io/main.js` (Changed code · before: `L39756-L39758` → after: `L16462-L16467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16462-L16467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16462-L16467) · [Before (L39756-L39758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39756-L39758)

```diff
-             j: () => NT,
-             k: () => hT,
-             o: () => tT
+             i: () => Zq,
+             m: () => Mq,
+             o: () => Jq,
+             s: () => kq,
+             t: () => jq,
+             x: () => Fq
```

#### 987. `bundles/bloxd.io/main.js` (Changed code · before: `L39760-L39766` → after: `L16469-L16483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16469-L16483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16469-L16483) · [Before (L39760-L39766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39760-L39766)

```diff
-           var lT = cT(71),
-             MT = cT(339),
-             KT = cT(31),
-             OT = cT(1461),
-             yT = cT(1518),
-             fT = cT(1136);
-           const xT = 15e3;
+           var Yq = gq(307),
+             lq = gq(616),
+             Oq = gq(136),
+             mq = gq(38),
+             xq = gq(623);
+           const Aq = "playingMarker",
+             cq = "pageKills",
+             uq = "appPlayingMarker",
+             Bq = 5e3,
+             Wq = 20,
+             Nq = 18e5,
+             aq = 1e3,
+             Vq = "bloxd-page-kill",
+             dq = 1048576,
+             jq = (0, lq.d)();
```

#### 988. `bundles/bloxd.io/main.js` (Changed code · before: `L39768` → after: `L16485-L16488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16485-L16488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16485-L16488) · [Before (L39768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39768)

```diff
-             AT = 0,
+             oq = !1,
+             Pq = !1,
+             Qq = null,
+             yq = null,
```

#### 989. `bundles/bloxd.io/main.js` (Changed code · before: `L39771-L39781` → after: `L16491-L16510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16491-L16510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16491-L16510) · [Before (L39771-L39781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39771-L39781)

```diff
-           function jT() {
-             return null !== IT || (IT = (async () => {
-               try {
-                 const TT = await fT.userContextManager.getCurrentUserContext();
-                 KT.e.set({
-                   gameCcus: await yT.d.getGameCcus(TT)
-                 })
-               } catch (TT) {
-                 console.error("Failed to fetch game CCUs", TT)
-               } finally {
-                 IT = null
+           function rq(qq, Eq) {
+             ! function() {
+               if (Pq) return;
+               Pq = !0, document.addEventListener("visibilitychange", Uq), window.addEventListener("pagehide", (() => {
+                 oq = !0, Rq()
+               })), window.addEventListener("pageshow", (qq => {
+                 oq = !1, qq.persisted && null !== Hq && (Cq(), Uq())
+               }))
+             }(), hq();
+             const gq = {
+               client: qq,
+               snapshot: Eq,
+               startedAt: Date.now(),
+               beat: setInterval(Uq, Bq),
+               appCopy: Sq(),
+               hiddenAt: null
+ ... (4 more added lines; see GitHub link above)
```

#### 990. `bundles/bloxd.io/main.js` (Changed code · before: `L39783-L39787` → after: `L16512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16512) · [Before (L39783-L39787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39783-L39787)

```diff
-             })()), IT
-           }
- 
-           function vT() {
-             null === KT.e.get("gameCcus") && jT()
+             }
```

#### 991. `bundles/bloxd.io/main.js` (Changed code · before: `L39791-L39815` → after: `L16516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16516) · [Before (L39791-L39815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39791-L39815)

```diff
-             const {
-               gameCcus: TT
-             } = (0, KT.n)(["gameCcus"]);
-             return (0, lT.useEffect)((() => {
-               vT()
-             }), [TT]), TT
-           }
- 
-           function hT(TT) {
-             const [, kT] = (0, lT.useReducer)((TT => TT + 1), 0), cT = TT(KT.e.get("gameCcus")), MT = (0, lT.useRef)({
-               select: TT,
-               value: cT
-             });
-             (0, lT.useLayoutEffect)((() => {
-               MT.current = {
-                 select: TT,
- ... (9 more removed lines; see GitHub link above)
+             Uq()
```

#### 992. `bundles/bloxd.io/main.js` (Changed code · before: `L39819-L39821` → after: `L16520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16520) · [Before (L39819-L39821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39819-L39821)

```diff
-             (0, lT.useEffect)((() => (vT(), AT++, null === CT && (CT = setInterval(jT, xT)), () => {
-               AT--, 0 === AT && null !== CT && (clearInterval(CT), CT = null)
-             })), [])
+             null !== Hq && (clearInterval(Hq.beat), Hq = null, Rq())
```

#### 993. `bundles/bloxd.io/main.js` (Changed code · before: `L39824-L39827` → after: `L16523-L16534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16523-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16523-L16534) · [Before (L39824-L39827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39824-L39827)

```diff
-           function QT(TT, kT) {
-             var cT;
-             if (null === kT) return null;
-             return null !== (cT = kT["classic_survivalFactory" === TT ? "survivalFactory" : TT]) && void 0 !== cT ? cT : 0
+           function nq(qq) {
+             return function(qq) {
+               let {
+                 client: Eq,
+                 visibleOnly: gq = !1
+               } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+               const Yq = Date.now() - qq;
+               return bq().filter((qq => qq.at >= Yq && (void 0 === Eq || qq.client === Eq) && (!gq || qq.visible)))
+             }(Nq, {
+               client: qq,
+               visibleOnly: !0
+             })
```

#### 994. `bundles/bloxd.io/main.js` (Changed code · before: `L39830-L39837` → after: `L16537-L16547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16537-L16547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16537-L16547) · [Before (L39830-L39837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39830-L39837)

```diff
-           function ST(TT) {
-             if (null === TT) return 0;
-             let kT = 0;
-             const cT = new Set;
-             for (const lT in TT) {
-               if ("ranked" === lT || "survivalFactory" === lT) continue;
-               const KT = (0, MT.Lb)(lT);
-               "classic" === KT ? (kT += TT[lT], cT.add(lT)) : KT in TT && !cT.has(KT) && (kT += TT[KT], cT.add(KT))
+           function bq() {
+             if (null === yq) {
+               const qq = pq();
+               if (null !== qq && !fq()) {
+                 const Eq = Zq(qq, Date.now());
+                 tq = "reload" === Mq() ? Eq : {
+                   ...Eq,
+                   unconfirmed: !0
+                 }
+               }
+               yq = [...Lq(), ...null === tq ? [] : [tq]]
```

#### 995. `bundles/bloxd.io/main.js` (Changed code · before: `L39856-L39872` → after: `L16552-L16556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16552-L16556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16552-L16556) · [Before (L39856-L39872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39856-L39872)

```diff
-           function xT(TT) {
-             const kT = (0, fT.m)(),
-               cT = kT.inGameUi ? [] : ["gameState"],
-               {
-                 gameState: MT
-               } = (0, yT.n)(cT),
-               xT = () => {
-                 var kT;
-                 return null !== (kT = OT.b.values[TT]) && void 0 !== kT ? kT : null
-               },
-               [AT, CT] = (0, lT.useState)(xT);
-             return IT(TT, CT), (0, lT.useEffect)((() => {
-               CT((TT => {
-                 const kT = xT();
-                 return TT === kT ? TT : (0, KT.c)(kT)
-               }))
- ... (1 more removed lines; see GitHub link above)
+           function iq() {
+             if (null !== yq && null !== tq) {
+               const qq = tq;
+               yq = yq.filter((Eq => Eq !== qq)), tq = null
+             }
```

#### 996. `bundles/bloxd.io/main.js` (Changed code · before: `L39876-L39886` → after: `L16560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16560) · [Before (L39876-L39886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39876-L39886)

```diff
-             const cT = (0, lT.useRef)(kT);
-             cT.current = kT, (0, lT.useEffect)((() => OT.b.subscribe(TT, (TT => {
-               cT.current((0, KT.c)(TT))
-             }))), [TT])
-           }
- 
-           function AT(TT) {
-             const {
-               content: kT,
-               showBackground: cT
-             } = (0, MT.md)(xT(TT));
+             const gq = sq(qq.snapshot);
```

#### 997. `bundles/bloxd.io/main.js` (Changed code · before: `L39888-L39941` → after: `L16562-L16566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16562-L16566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16562-L16566) · [Before (L39888-L39941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39888-L39941)

```diff
-               content: kT,
-               showBackground: cT,
-               hasText: !(0, MT.qc)(kT)
-             }
-           }
-           const CT = [];
- 
-           function jT() {
-             const TT = xT("headerChips");
-             return TT && 0 !== TT.length ? TT.map((TT => {
-               const {
-                 content: kT,
-                 showBackground: cT
-               } = (0, MT.md)(TT);
-               return {
-                 content: kT,
- ... (38 more removed lines; see GitHub link above)
+               at: qq.visible ? qq.beatAt : Eq,
+               client: qq.client,
+               visible: qq.visible,
+               ...null === gq ? {} : {
+                 distance: gq
```

#### 998. `bundles/bloxd.io/main.js` (Changed code · before: `L39946-L39948` → after: `L16571-L16572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16571-L16572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16571-L16572) · [Before (L39946-L39948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39946-L39948)

```diff
-           function NT(TT, kT, cT) {
-             const lT = TT.filter((TT => !yT.q.includes(TT) && !kT.includes(TT)));
-             lT.length > 0 && console.warn(`client_ecs_*_ms: no ${cT} for ${lT.join(", ")} (frontendMetricDefinitions.ts)`)
+           function fq() {
+             return null !== window.opener && "navigate" === Mq() && 1 === history.length
```

#### 999. `bundles/bloxd.io/main.js` (Changed code · before: `L39951-L39970` → after: `L16575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16575) · [Before (L39951-L39970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39951-L39970)

```diff
-           function QT(TT, kT) {
-             const cT = function(TT, kT) {
-               if (TT.runs < 10) return null;
-               const cT = kT.map((() => 0));
-               cT[kT.indexOf("total")] = TT.loopMs;
-               const lT = kT.indexOf("other");
-               for (const [MT, KT] of TT.byComponent) {
-                 const TT = kT.indexOf(MT);
-                 cT[-1 === TT ? lT : TT] += KT.ms
-               }
-               return cT.map((kT => kT / TT.runs))
-             }(TT, kT);
-             return cT && TT.reset(), cT
-           }
-           var ST = cT(2842),
-             DT = cT(2844),
- ... (4 more removed lines; see GitHub link above)
+           function Mq() {
```

#### 1000. `bundles/bloxd.io/main.js` (Changed code · before: `L39972-L40025` → after: `L16577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16577) · [Before (L39972-L40025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L39972-L40025)

```diff
-             const lT = null !== (cT = FT.get(TT)) && void 0 !== cT ? cT : function(TT) {
-               const kT = new Set;
-               FT.set(TT, kT);
-               const cT = TT.pN;
-               return TT.pN = function() {
-                 const TT = performance.now();
-                 cT(...arguments);
-                 const lT = performance.now() - TT;
-                 for (const cT of kT) cT(lT)
-               }, kT
-             }(TT);
-             return lT.add(kT), () => {
-               lT.delete(kT)
-             }
-           }
-           class PT {
- ... (38 more removed lines; see GitHub link above)
+             return null === (qq = performance.getEntriesByType("navigation")[0]) || void 0 === qq ? void 0 : qq.type
```

#### 1001. `bundles/bloxd.io/main.js` (Changed code · before: `L40029-L40176` → after: `L16581-L16583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16581-L16583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16581-L16583) · [Before (L40029-L40176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40029-L40176)

```diff
-             return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
-           }
-           class mT {
-             constructor(TT, kT) {
-               this.device = TT, this.results = kT, this.timestamps = void 0, this.submit = void 0, this.recording = !1, this.submits = 0, this.lastSubmitMs = 0, this.generation = 0, this.readbackPending = !1, this.donePending = !1, this.timestamps = TT.features.has("timestamp-que … [truncated]
-                 return {
-                   querySet: TT.createQuerySet({
-                     type: "timestamp",
-                     count: 2
-                   }),
-                   resolveBuffer: TT.createBuffer({
-                     size: bT,
-                     usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
-                   }),
-                   readBuffer: TT.createBuffer({
-                     size: bT,
- ... (132 more removed lines; see GitHub link above)
+             bq();
+             const qq = pq();
+             return mq.k.removeItem(Aq), qq
```

#### 1002. `bundles/bloxd.io/main.js` (Changed code · before: `L40179-L40212` → after: `L16586-L16597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16586-L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16586-L16597) · [Before (L40179-L40212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40179-L40212)

```diff
-           function JT(TT, kT) {
-             if (TT.started) return;
-             const cT = new PT((0, MT.f)(kT.gv).gpuTimerSource());
-             TT.start((() => kT.FQ), cT, "js");
-             let lT = null;
-             (0, aT.b)("js", (() => {
-               const TT = (0, MT.f)(kT.gv);
-               return `${TT.backendName} (${TT.choice}), frames at the browser's animation frame rate, uncapped`
-             }), (TT => {
-               lT = TT
-             })), rT(kT.container.EQ, (kT => {
-               var cT;
-               TT.pN(kT), null === (cT = lT) || void 0 === cT || cT.jsTick(kT)
-             })), kT.on("beforeRender", (() => {
-               TT.isSampling() && cT.onFrameStart() && TT.onGpuSampleStarted()
-             })), kT.prependListener("afterRender", (() => {
- ... (18 more removed lines; see GitHub link above)
+           function zq() {
+             if (!Sq()) return null;
+             const qq = mq.i.getItem(uq);
+             return mq.i.removeItem(uq),
+               function(qq) {
+                 if (!Gq(qq)) return !1;
+                 const {
+                   visit: Eq,
+                   hiddenAt: gq
+                 } = qq;
+                 return (null === Eq || "string" === typeof Eq && (0, Yq.Pc)(Eq)) && (null === gq || "number" === typeof gq)
+               }(qq) ? qq : null
```

#### 1003. `bundles/bloxd.io/main.js` (Changed code · before: `L40223` → after: `L16601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16601) · [Before (L40223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40223)

```diff
-             return Promise.resolve().then((() => cT(3644)))
+             return "mobileAndroid" === Oq.n || "mobileIos" === Oq.n
```

#### 1004. `bundles/bloxd.io/main.js` (Changed code · before: `L40229-L40230` → after: `L16604-L16606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16604-L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16604-L16606) · [Before (L40229-L40230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40229-L40230)

```diff
-           function RT(TT, kT) {
-             return TT ? !TT.wasmReady || null !== kT && void 0 !== kT && kT.stoppedTicks ? "wasm_stopped" : "in_wasm" : "js"
+           function pq() {
+             const qq = mq.k.getItem(Aq);
+             return Gq(qq) ? qq : null
```

#### 1005. `bundles/bloxd.io/main.js` (Changed code · before: `L40234-L40535` → after: `L16610-L16611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16610-L16611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16610-L16611) · [Before (L40234-L40535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40234-L40535)

```diff
-             return null !== TT && void 0 !== TT && TT.clientLightCompletions ? TT.clientLightWasmCompletions === TT.clientLightCompletions ? "wasm" : 0 === TT.clientLightWasmCompletions ? "js" : "mixed" : "none"
-           }(0, tT.e)("https://unpkg.com/bytebrew-web-sdk@1.0.1", {}, !1).then((() => {
-             window.ByteBrewSDK ? window.ByteBrewSDK.ByteBrew.initializeByteBrew("T74de8IIz", "L0h+F+6ecvR0wIxnJIv7rFi6Pda7Hf1YIhLS0jNkIoUeZu2LkOaPNQPkun8nLKh+", AT.d.toString()) : console.error("ByteBrewSDK undefined after loadScript")
-           })).catch((TT => {
-             console.warn("Failed to load Bytebrew SDK:", TT.stack)
-           }));
-           const UT = new class {
-             constructor() {
-               this.fpsOverTime = null, this.initialFps = null, this.frameTimingTracker = new DT.d, this.ecsTimingTelemetry = new hT, this.worldgenStatsProvider = null, this.rendererMsaa = null, this.colyseusPingInfo = {
-                 id: 0,
-                 start: null,
-                 end: null
-               }, this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.pendingWasmPhysicsFailures = 0, this.pendingWasmLightFailures = 0, setInterval((() => {
-                 const TT = (0, lT.f)();
-                 if (TT) {
-                   JT(this.frameTimingTracker, TT), this.ecsTimingTelemetry.start(TT), this.logAnalytics(), this.colyseusPingInfo.id += 1, this.colyseusPingInfo.start = performance.now(), this.colyseusPingInfo.end = null;
- ... (286 more removed lines; see GitHub link above)
+             const Eq = qq;
+             return "object" === typeof Eq && null !== Eq && 1 === Eq.v && "string" === typeof Eq.page && ("wasm" === Eq.client || "js" === Eq.client) && "number" === typeof Eq.startedAt && "number" === typeof Eq.beatAt && "boolean" === typeof Eq.visible && "object" === typeof Eq. … [truncated]
```

#### 1006. `bundles/bloxd.io/main.js` (Changed code · before: `L40544-L40545` → after: `L16614-L16616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16614-L16616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16614-L16616) · [Before (L40544-L40545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40544-L40545)

```diff
-           function lT(TT, kT) {
-             return 1e3 / TT >= .85 * kT
+           function Lq() {
+             const qq = mq.k.getItem(cq);
+             return Array.isArray(qq) ? qq : []
```

#### 1007. `bundles/bloxd.io/main.js` (Changed code · before: `L40549` → after: `L16620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16620) · [Before (L40549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40549)

```diff
-             return null !== TT && TT >= 48
+             mq.k.setItem(cq, [...Lq(), qq].slice(-Wq))
```

#### 1008. `bundles/bloxd.io/main.js` (Changed code · before: `L40553` → after: `L16624-L16635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16624-L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16624-L16635) · [Before (L40553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40553)

```diff
-             return 1e3 / (MT(TT) ? TT : 60)
+             return "undefined" === typeof BroadcastChannel ? Promise.resolve(!1) : new Promise((Eq => {
+               const gq = new BroadcastChannel(Vq),
+                 Yq = setTimeout((() => {
+                   gq.close(), Eq(!1)
+                 }), aq);
+               gq.onmessage = lq => {
+                 var Oq;
+                 (null === (Oq = lq.data) || void 0 === Oq ? void 0 : Oq.alive) === qq && (clearTimeout(Yq), gq.close(), Eq(!0))
+               }, gq.postMessage({
+                 ask: qq
+               })
+             }))
```

#### 1009. `bundles/bloxd.io/main.js` (Changed code · before: `L40562-L40569` → after: `L16638-L16640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16638-L16640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16638-L16640) · [Before (L40562-L40569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40562-L40569)

```diff
-           function yT(TT, kT) {
-             let {
-               busyMs: cT,
-               frameMs: lT
-             } = TT;
-             if (cT / kT < .9) return null;
-             const MT = lT - cT;
-             return cT / lT >= .85 || MT < 3 ? "main_saturated" : MT < kT + 2 ? "main_partial" : null
+           function Rq() {
+             var qq;
+             null === (qq = Qq) || void 0 === qq || qq.close(), Qq = null, mq.k.removeItem(Aq), mq.i.removeItem(uq)
```

#### 1010. `bundles/bloxd.io/main.js` (Changed code · before: `L40572-L40577` → after: `L16643-L16673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16643-L16673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16643-L16673) · [Before (L40572-L40577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40572-L40577)

```diff
-           function fT(TT, kT) {
-             let {
-               busyMs: cT,
-               frameMs: lT
-             } = TT;
-             return cT / kT <= .6 || lT - cT >= kT + 6 ? "downstream" : "unclear"
+           function Uq() {
+             const qq = Hq;
+             if (null === qq || oq) return;
+             const Eq = {
+               v: 1,
+               page: jq,
+               client: qq.client,
+               startedAt: qq.startedAt,
+               beatAt: Date.now(),
+               visible: "visible" === document.visibilityState,
+               snapshot: {
+                 ...wq(),
+                 ...Xq(qq)
+               }
+             };
+             if (mq.k.setItem(Aq, Eq)) {
+ ... (15 more added lines; see GitHub link above)
```

#### 1011. `bundles/bloxd.io/main.js` (Changed code · before: `L40582-L40585` → after: `L16678-L16679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16678-L16679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16678-L16679) · [Before (L40582-L40585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40582-L40585)

```diff
-               frameMs: kT,
-               refreshHz: cT,
-               windowRefreshHz: xT,
-               slowFrames: IT
+               renderDistance: Eq,
+               renderDistanceVertical: gq
```

#### 1012. `bundles/bloxd.io/main.js` (Changed code · before: `L40587-L40598` → after: `L16681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16681) · [Before (L40587-L40598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40587-L40598)

```diff
-             if (null === kT) return "unknown";
-             const AT = MT(cT);
-             if (AT && lT(kT, cT)) return "cap";
-             if (!AT && lT(kT, 48)) return "unknown";
-             const CT = KT(cT);
-             var jT;
-             if (AT && cT > 60 && lT(kT, 60)) return null === IT ? OT.unclear : OT[null !== (jT = yT(IT, CT)) && void 0 !== jT ? jT : fT(IT, CT)];
-             if (null === IT) return "unknown";
-             const vT = yT(IT, CT);
-             if (null !== vT) return vT;
-             const tT = AT ? null : null !== cT && void 0 !== cT ? cT : xT;
-             return null !== tT && !MT(xT) && lT(kT, tT) ? "throttled" : fT(IT, CT)
+             return "number" === typeof Eq && "number" === typeof gq ? [Eq, gq] : null
```

#### 1013. `bundles/bloxd.io/main.js` (Changed code · before: `L40600-L40676` → after: `L16683-L16688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16683-L16688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16683-L16688) · [Before (L40600-L40676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40600-L40676)

```diff
-           var IT = cT(31),
-             AT = cT(1082),
-             CT = cT(1089);
-           const jT = {
-             perMin: null,
-             timeShare: null,
-             scriptShare: null
-           };
-           class vT {
-             constructor() {
-               var TT, kT;
-               this.supported = "undefined" !== typeof PerformanceObserver && null !== (TT = null === (kT = PerformanceObserver.supportedEntryTypes) || void 0 === kT ? void 0 : kT.includes("long-animation-frame")) && void 0 !== TT && TT, this.totals = {
-                 count: 0,
-                 durationMs: 0,
-                 scriptMs: 0,
-                 foregroundMs: 0
- ... (61 more removed lines; see GitHub link above)
+ 
+           function Xq(qq) {
+             try {
+               return qq.snapshot()
+             } catch (Eq) {
+               return console.warn("Couldn't read the page kill snapshot", Eq), {}
```

#### 1014. `bundles/bloxd.io/main.js` (Changed code · before: `L40678-L40679` → after: `L16690-L16699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16690-L16699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16690-L16699) · [Before (L40678-L40679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40678-L40679)

```diff
-             closeVisibleSpan(TT) {
-               null !== this.visibleSinceMs && (this.totals.foregroundMs += TT - this.visibleSinceMs, this.visibleSinceMs = null)
+           }
+ 
+           function wq() {
+             var qq, Eq;
+             const gq = performance.memory;
+             return {
+               deviceMemory: null !== (qq = navigator.deviceMemory) && void 0 !== qq ? qq : null,
+               cores: null !== (Eq = navigator.hardwareConcurrency) && void 0 !== Eq ? Eq : null,
+               jsHeapMiB: gq ? Kq(gq.DH) : null,
+               jsHeapLimitMiB: gq ? Kq(gq.RP) : null
```

#### 1015. `bundles/bloxd.io/main.js` (Changed code · before: `L40682-L40685` → after: `L16702-L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16702-L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16702-L16717) · [Before (L40682-L40685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40682-L40685)

```diff
-           const tT = 5e3;
-           class hT {
-             constructor() {
-               this.worker = null, this.workerClockOffsetMs = 0, this.recentFastestMs = [], this.bucketEndsAtMs = -1 / 0
+ 
+           function Kq(qq) {
+             return Math.round(qq / dq * 10) / 10
+           }
+ 
+           function Cq() {
+             if (null === Qq && "undefined" !== typeof BroadcastChannel) try {
+               const qq = new BroadcastChannel(Vq);
+               qq.onmessage = Eq => {
+                 var gq;
+                 (null === (gq = Eq.data) || void 0 === gq ? void 0 : gq.ask) === jq && qq.postMessage({
+                   alive: jq
+                 })
+               }, Qq = qq
+             } catch (qq) {
+               console.warn("Couldn't open the page kill channel", qq)
```

#### 1016. `bundles/bloxd.io/main.js` (Changed code · before: `L40687-L40688` → after: `L16719-L16752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16719-L16752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16719-L16752) · [Before (L40687-L40688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40687-L40688)

```diff
-             get running() {
-               return null !== this.worker
+           }
+         }, , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             d: () => Yq
+           });
+           let Yq = function() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
+             return crypto.getRandomValues(new Uint8Array(qq)).reduce(((qq, Eq) => qq += (Eq &= 63) < 36 ? Eq.toString(36) : Eq < 62 ? (Eq - 26).toString(36).toUpperCase() : Eq > 62 ? "-" : "_"), "")
+           }
+         }, , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             e: () => Nq,
+             h: () => Vq,
+             l: () => Wq,
+             o: () => jq,
+             peekVisitSessionId: () => aq
+ ... (18 more added lines; see GitHub link above)
```

#### 1017. `bundles/bloxd.io/main.js` (Changed code · before: `L40690-L40694` → after: `L16754-L16765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16754-L16765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16754-L16765) · [Before (L40690-L40694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40690-L40694)

```diff
-             start(TT) {
-               try {
-                 this.worker = new Worker(URL.createObjectURL(new Blob(['\nlet timer = 0\nlet intended = 0\nlet echoed = []\nconst schedule = () => {\n\tintended += -Math.log(1 - Math.random()) * 50\n\ttimer = setTimeout(() => {\n\t\tconst now = performance.now()\n\t\tif (now - in … [truncated]
-                   type: "text/javascript"
-                 })))
+           }
+ 
+           function Nq() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oq.k;
+             const Eq = (0, lq.c)(qq, Aq),
+               gq = null !== Eq && (0, lq.d)(qq, Aq),
+               mq = gq ? Eq : (0, Yq.d)();
+             (0, lq.h)(qq, Aq, mq);
+             const xq = uq ? "return" : "load";
+             if (uq = !0, !gq)
+               for (const Yq of Bq) try {
+                 Yq(mq, xq)
```

#### 1018. `bundles/bloxd.io/main.js` (Changed code · before: `L40696-L40722` → after: `L16767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16767) · [Before (L40696-L40722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40696-L40722)

```diff
-                 return void console.warn("Main-thread busy probe: worker didn't start, so main_busy_share stays null", lT)
-               }
-               const kT = this.worker;
-               kT.onerror = TT => {
-                 console.warn("Main-thread busy probe: worker failed, so main_busy_share stays null", TT.message), kT.terminate(), this.worker = null
-               }, kT.onmessage = cT => {
-                 if ("number" === typeof cT.data) return void(this.workerClockOffsetMs = cT.data - performance.timeOrigin);
-                 const [lT, MT] = cT.data;
-                 kT.postMessage(lT);
-                 for (let kT = 0; kT < MT.length; kT += 2) {
-                   const cT = MT[kT + 1];
-                   TT(MT[kT] + this.workerClockOffsetMs, cT - this.baselineRoundTripMs(cT))
-                 }
-               };
-               const cT = () => {
-                 var TT;
- ... (11 more removed lines; see GitHub link above)
+                 console.error("Visit started listener failed", cq)
```

#### 1019. `bundles/bloxd.io/main.js` (Changed code · before: `L40724-L40726` → after: `L16769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16769) · [Before (L40724-L40726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40724-L40726)

```diff
-               const cT = this.recentFastestMs.length - 1;
-               return this.recentFastestMs[cT] = Math.min(this.recentFastestMs[cT], TT), Math.min(...this.recentFastestMs)
-             }
+             return mq
```

#### 1020. `bundles/bloxd.io/main.js` (Changed code · before: `L40728-L40761` → after: `L16771-L16785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16771-L16785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16771-L16785) · [Before (L40728-L40761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40728-L40761)

```diff
-           const NT = 4096;
-           class QT {
-             constructor() {
-               this.spanEndMs = new Float64Array(NT), this.spanCounted = new Uint8Array(NT), this.spanHead = 0, this.spanCount = 0, this.pending = [], this.spare = [], this.probes = [], this.delaySumMs = 0
-             }
-             onFrameStart(TT, kT) {
-               this.spanCount === NT && (this.spanHead = this.spanHead + 1 & 4095, this.spanCount--);
-               const cT = this.spanHead + this.spanCount & 4095;
-               for (this.spanEndMs[cT] = TT, this.spanCounted[cT] = kT ? 1 : 0, this.spanCount++; this.spanEndMs[this.spanHead] < TT - 5e3;) this.spanHead = this.spanHead + 1 & 4095, this.spanCount--;
-               if (0 === this.pending.length) return;
-               const lT = this.pending;
-               this.pending = this.spare, this.spare = lT;
-               for (let MT = 0; MT < lT.length; MT += 2) this.onProbe(lT[MT], lT[MT + 1]);
-               lT.length = 0
-             }
-             onProbe(TT, kT) {
- ... (18 more removed lines; see GitHub link above)
+ 
+           function aq() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oq.k;
+             const Eq = (0, lq.c)(qq, Aq);
+             return null !== Eq && (0, lq.d)(qq, Aq) ? Eq : null
+           }
+ 
+           function Vq(qq) {
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oq.k;
+             dq(), (0, lq.f)(Eq, Aq);
+             const gq = setInterval((() => {
+               qq() ? (0, lq.d)(Eq, Aq) ? (0, lq.f)(Eq, Aq) : Nq(Eq) : cq === gq && dq()
+             }), mq);
+             return cq = gq, () => {
+               cq === gq && dq()
```

#### 1021. `bundles/bloxd.io/main.js` (Changed code · before: `L40766-L40769` → after: `L16845-L16848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16845-L16848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16845-L16848) · [Before (L40766-L40769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40766-L40769)

```diff
-             return TT.filter((TT => {
-               let [, kT] = TT;
-               return kT
-             })).length / TT.length
+             var Eq, gq;
+             let lq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xq();
+             const [Oq, Aq] = null !== (Eq = null === (gq = mq(lq, qq)) || void 0 === gq ? void 0 : gq.split(":")) && void 0 !== Eq ? Eq : [];
+             return Oq === String(Yq.e) && void 0 !== Aq ? Aq : null
```

#### 1022. `bundles/bloxd.io/main.js` (Changed code · before: `L40773-L40784` → after: `L16852-L16855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16852-L16855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16852-L16855) · [Before (L40773-L40784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40773-L40784)

```diff
-             const cT = TT.filter((TT => {
-                 let [cT] = TT;
-                 return cT >= 1.5 * kT
-               })),
-               lT = cT.length >= 20 ? cT : TT;
-             let MT = 0;
-             for (const [OT] of lT) MT += 1 / OT;
-             const KT = lT.length / MT;
-             return {
-               busyMs: ST(lT) * KT,
-               frameMs: KT
-             }
+             let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xq();
+             try {
+               null === gq || void 0 === gq || gq.setItem(qq, `${String(Yq.e)}:${Eq}`)
+             } catch {}
```

#### 1023. `bundles/bloxd.io/main.js` (Changed code · before: `L40786-L40817` → after: `L16857-L16859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16857-L16859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16857-L16859) · [Before (L40786-L40817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40786-L40817)

```diff
-           const aT = {
-             frameMs: null,
-             tickMs: null,
-             frameLimiter: "unknown",
-             mainBusyShare: null,
-             mainProbeDelayMs: null,
-             longAnimationFramesPerMin: null,
-             longAnimationFrameTimeShare: null,
-             longAnimationFrameScriptShare: null,
-             gpuPassMs: null,
-             gpuSubmitToDoneMs: null
-           };
-           class FT {
-             constructor(TT) {
-               this.minFrameIntervals = TT, this.frameTimeSumMs = 0, this.frameTimeCount = 0, this.tickMsSum = 0, this.foregroundFrames = 0, this.longAnimationFrameTracker = new vT, this.busyProbe = new hT, this.busyShare = new QT, this.intervalsToSkip = 0, this.gpuSource = null
-             }
- ... (16 more removed lines; see GitHub link above)
+ 
+           function mq(qq, Eq) {
+             try {
```

#### 1024. `bundles/bloxd.io/main.js` (Changed code · before: `L40819` → after: `L16861-L16863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16861-L16863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16861-L16863) · [Before (L40819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40819)

```diff
-               null === (TT = this.gpuSource) || void 0 === TT || TT.reset()
+               return null !== (gq = null === qq || void 0 === qq ? void 0 : qq.getItem(Eq)) && void 0 !== gq ? gq : null
+             } catch {
+               return null
```

#### 1025. `bundles/bloxd.io/main.js` (Changed code · before: `L40821-L40845` → after: `L16865-L16871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16865-L16871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16865-L16871) · [Before (L40821-L40845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40821-L40845)

```diff
-             snapshotAndReset(TT, kT) {
-               var cT, lT, MT;
-               const OT = this.frameTimeCount >= this.minFrameIntervals,
-                 yT = OT ? this.frameTimeSumMs / this.frameTimeCount : null,
-                 fT = this.longAnimationFrameTracker.snapshotAndReset(),
-                 IT = this.busyShare.snapshotAndReset(this.busyProbe.running, KT(TT)),
-                 AT = null === (cT = this.gpuSource) || void 0 === cT ? void 0 : cT.snapshotAndReset(),
-                 CT = {
-                   frameMs: yT,
-                   tickMs: OT ? this.tickMsSum / this.foregroundFrames : null,
-                   frameLimiter: xT({
-                     frameMs: yT,
-                     refreshHz: TT,
-                     windowRefreshHz: kT,
-                     slowFrames: IT.slowFrames
-                   }),
- ... (9 more removed lines; see GitHub link above)
+           }
+ 
+           function xq() {
+             try {
+               return window.localStorage
+             } catch {
+               return null
```

#### 1026. `bundles/bloxd.io/main.js` (Changed code · before: `L40848-L40849` → after: `L16874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16874) · [Before (L40848-L40849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40848-L40849)

```diff
-         },
-         2844: (TT, kT, cT) => {
+         }, , , , , , , , (qq, Eq, gq) => {
```

#### 1027. `bundles/bloxd.io/main.js` (Changed code · before: `L40851` → after: `L16876-L16885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16876-L16885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16876-L16885) · [Before (L40851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40851)

```diff
-             d: () => KT
+             d: () => oq,
+             g: () => jq,
+             i: () => Vq,
+             m: () => dq,
+             n: () => Hq,
+             r: () => uq,
+             u: () => cq,
+             x: () => aq,
+             y: () => Nq,
+             z: () => Wq
```

#### 1028. `bundles/bloxd.io/main.js` (Changed code · before: `L40853-L40863` → after: `L16887-L16898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16887-L16898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16887-L16898) · [Before (L40853-L40863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40853-L40863)

```diff
-           var lT = cT(2840),
-             MT = cT(2842);
-           class KT {
-             constructor() {
-               this.paused = null, this.cpuFrameMsSum = 0, this.cpuFrameMsCount = 0, this.renderTickStartMs = -1, this.dropNextInterval = !1, this.prevRenderTickBeginMs = -1, this.prevAnimationFrameMs = -1, this.prevAnimationFrameIntervalMs = -1, this.adjacentPairMaxMs = new Float … [truncated]
-             }
-             get started() {
-               return null !== this.paused
-             }
-             start(TT, kT, cT) {
-               this.paused = TT, this.limiterTelemetry.start(kT, cT)
+           var Yq, lq = gq(645),
+             Oq = gq(650),
+             mq = gq(634);
+           const xq = "bloxdDiagClaim";
+ 
+           function Aq(qq, Eq) {
+             if (null === qq) return null;
+             let gq;
+             try {
+               gq = JSON.parse(qq)
+             } catch {
+               return null
```

#### 1029. `bundles/bloxd.io/main.js` (Changed code · before: `L40865-L40872` → after: `L16900-L16909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16900-L16909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16900-L16909) · [Before (L40865-L40872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40865-L40872)

```diff
-             onAnimationFrame(TT) {
-               if (this.isSampling()) {
-                 if (-1 !== this.prevAnimationFrameMs) {
-                   const kT = TT - this.prevAnimationFrameMs;
-                   if (kT < 1.5 || kT > 400) return void this.resetAnimationFrameChain(); - 1 !== this.prevAnimationFrameIntervalMs && this.adjacentPairs < 8192 && (this.adjacentPairMaxMs[this.adjacentPairs++] = Math.max(kT, this.prevAnimationFrameIntervalMs)), this.prevAnimationF … [truncated]
-                 }
-                 this.prevAnimationFrameMs = TT
-               } else this.discardRefreshWindow()
+             if ("object" !== typeof gq || null === gq) return null;
+             const {
+               claim: Yq,
+               accountId: mq,
+               badOutcome: xq
+             } = gq, Aq = (0, lq.b)(Yq);
+             return null === Aq || Eq >= Aq.expMs || null !== mq && "string" !== typeof mq || null !== xq && !Oq.b.includes(xq) ? null : {
+               claim: Aq,
+               accountId: mq,
+               badOutcome: xq
```

#### 1030. `bundles/bloxd.io/main.js` (Changed code · before: `L40874-L40881` → after: `L16911-L16921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16911-L16921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16911-L16921) · [Before (L40874-L40881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40874-L40881)

```diff
-             onFrameStart(TT) {
-               if (!this.isSampling()) return this.limiterTelemetry.onFrameStart(TT, null, !1), void this.resetRenderTickChain();
-               const kT = TT - this.prevRenderTickBeginMs;
-               if (this.limiterTelemetry.onFrameStart(TT, -1 !== this.prevRenderTickBeginMs && kT <= 400 ? kT : null, !0), -1 !== this.prevRenderTickBeginMs && !this.dropNextInterval) {
-                 const kT = TT - this.prevRenderTickBeginMs;
-                 kT >= 1.5 && kT <= 400 && (this.frameIntervalSumMs += kT, this.frameIntervalSumSqMs += kT * kT, this.frameIntervalCount++)
-               }
-               this.dropNextInterval = !1, this.prevRenderTickBeginMs = TT, this.renderTickStartMs = TT
+           }
+           const cq = Aq((0, mq.l)((0, mq.f)(), xq), Date.now()),
+             uq = null !== (Yq = null === cq || void 0 === cq ? void 0 : cq.claim) && void 0 !== Yq ? Yq : null,
+             Bq = null === (null === cq || void 0 === cq ? void 0 : cq.badOutcome) ? cq.claim : null;
+ 
+           function Wq(qq) {
+             const Eq = (0, mq.f)();
+             try {
+               null === qq ? null === Eq || void 0 === Eq || Eq.removeItem(xq) : null === Eq || void 0 === Eq || Eq.setItem(xq, JSON.stringify(qq))
+             } catch (gq) {
+               console.warn("Couldn't keep the diag claim", gq)
```

#### 1031. `bundles/bloxd.io/main.js` (Changed code · before: `L40883-L40884` → after: `L16923-L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16923-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16923-L16941) · [Before (L40883-L40884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40883-L40884)

```diff
-             onFrameEnd(TT) {
-               this.onFrameCpu(TT - this.renderTickStartMs)
+           }
+ 
+           function Nq() {
+             return Aq((0, mq.l)((0, mq.f)(), xq), Date.now())
+           }
+ 
+           function aq(qq) {
+             const Eq = Nq();
+             null !== Eq && null === Eq.badOutcome && Eq.claim.claimId === (null === uq || void 0 === uq ? void 0 : uq.claimId) && Wq({
+               ...Eq,
+               badOutcome: qq
+             })
+           }
+ 
+           function Vq() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bq;
+ ... (3 more added lines; see GitHub link above)
```

#### 1032. `bundles/bloxd.io/main.js` (Changed code · before: `L40886-L40887` → after: `L16943-L16990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16943-L16990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16943-L16990) · [Before (L40886-L40887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40886-L40887)

```diff
-             onFrameCpu(TT) {
-               document.hidden || this.renderTickStartMs < 0 ? this.renderTickStartMs = -1 : (this.renderTickStartMs = -1, TT >= 0 && TT < 100 ? (this.cpuFrameMsSum += TT, this.cpuFrameMsCount++) : TT >= 100 && (this.dropNextInterval = !0))
+           }
+ 
+           function dq() {
+             var qq;
+             let Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bq;
+             return null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.arm.renderer) && void 0 !== qq ? qq : null
+           }
+ 
+           function jq(qq) {
+             var Eq;
+             let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bq;
+             return null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.arm.clientOptions[qq]) && void 0 !== Eq ? Eq : null
+           }
+ 
+           function Hq() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uq;
+ ... (32 more added lines; see GitHub link above)
```

#### 1033. `bundles/bloxd.io/main.js` (Changed code · before: `L40889-L40890` → after: `L16992-L16993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16992-L16993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16992-L16993) · [Before (L40889-L40890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40889-L40890)

```diff
-             onGpuSampleStarted() {
-               this.limiterTelemetry.onGpuSampleStarted()
+             fail(qq) {
+               this.errors.push(`${this.where}${qq}`)
```

#### 1034. `bundles/bloxd.io/main.js` (Changed code · before: `L40892-L40893` → after: `L16995-L16996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16995-L16996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16995-L16996) · [Before (L40892-L40893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40892-L40893)

```diff
-             pN(TT) {
-               this.isSampling() && this.limiterTelemetry.pN(TT)
+             onlyKnown(qq) {
+               for (const Eq of Object.keys(this.fields)) qq.includes(Eq) || this.fail(`unknown field ${JSON.stringify(Eq)}`)
```

#### 1035. `bundles/bloxd.io/main.js` (Changed code · before: `L40895-L40896` → after: `L16998-L16999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16998-L16999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L16998-L16999) · [Before (L40895-L40896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40895-L40896)

```diff
-             onVisibilityChange() {
-               this.resetRenderTickChain(), this.discardRefreshWindow()
+             has(qq) {
+               return void 0 !== this.fields[qq]
```

#### 1036. `bundles/bloxd.io/main.js` (Changed code · before: `L40898-L40932` → after: `L17001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17001) · [Before (L40898-L40932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40898-L40932)

```diff
-             snapshotAndReset() {
-               var TT;
-               const kT = this.cpuFrameMsCount > 0 ? this.cpuFrameMsSum / this.cpuFrameMsCount : null;
-               this.cpuFrameMsSum = 0, this.cpuFrameMsCount = 0;
-               let cT = null;
-               this.isSampling() || this.discardRefreshWindow(), this.adjacentPairs >= 30 && (cT = function(TT) {
-                 const kT = Math.max(3, Math.floor(.1 * (TT.length - 1))),
-                   cT = OT(1e3 / TT[kT]),
-                   lT = function(TT) {
-                     const kT = 3,
-                       cT = 1.1 * TT[kT];
-                     let lT = kT + 1;
-                     for (; lT < TT.length && TT[lT] <= cT;) lT++;
-                     return TT[kT + Math.floor((lT - 1 - kT) / 2)]
-                   }(TT),
-                   MT = OT(1e3 / lT);
- ... (19 more removed lines; see GitHub link above)
+             string(qq, Eq, gq) {
```

#### 1037. `bundles/bloxd.io/main.js` (Changed code · before: `L40934-L40948` → after: `L17003-L17004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17003-L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17003-L17004) · [Before (L40934-L40948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40934-L40948)

```diff
-               null !== cT && this.refreshRateVoteCounts.set(cT, (null !== (KT = this.refreshRateVoteCounts.get(cT)) && void 0 !== KT ? KT : 0) + 1);
-               this.latchedRefreshHz = this.computeHighestConfirmedRefreshHz();
-               const yT = null === cT ? null : this.latchedRefreshHz;
-               let fT = null;
-               if (null !== yT && null !== lT && null !== kT) {
-                 1e3 / lT < .85 * yT && (fT = Math.min(1, Math.max(0, kT / lT)))
-               }
-               this.adjacentPairs = 0, this.frameIntervalSumMs = 0, this.frameIntervalSumSqMs = 0, this.frameIntervalCount = 0;
-               return {
-                 cpuFrameMs: kT,
-                 refreshHz: yT,
-                 cpuBottleneck: fT,
-                 frameIntervalCv: MT,
-                 ...this.limiterTelemetry.snapshotAndReset(null !== (TT = this.latchedRefreshHz) && void 0 !== TT ? TT : this.provisionalRefreshHz(), cT)
-               }
+               const lq = null !== (Yq = this.fields[qq]) && void 0 !== Yq ? Yq : gq;
+               return "string" === typeof lq && Eq.test(lq) ? lq : (this.fail(`${qq} must be a string matching ${String(Eq)}`), "")
```

#### 1038. `bundles/bloxd.io/main.js` (Changed code · before: `L40950-L40954` → after: `L17006-L17011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17006-L17011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17006-L17011) · [Before (L40950-L40954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40950-L40954)

```diff
-             provisionalRefreshHz() {
-               let TT = null,
-                 kT = 2;
-               for (const [cT, lT] of this.refreshRateVoteCounts) lT > kT && (TT = cT, kT = lT);
-               return TT
+             whole(qq, Eq, gq, Yq) {
+               var lq;
+               const Oq = null !== (lq = this.fields[qq]) && void 0 !== lq ? lq : Yq;
+               return function(qq, Eq, gq) {
+                 return Number.isInteger(qq) && qq >= Eq && qq <= gq
+               }(Oq, Eq, gq) ? Oq : (this.fail(`${qq} must be a whole number from ${Eq} to ${gq}`), Eq)
```

#### 1039. `bundles/bloxd.io/main.js` (Changed code · before: `L40956-L40957` → after: `L17013-L17015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17013-L17015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17013-L17015) · [Before (L40956-L40957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40956-L40957)

```diff
-             isSampling() {
-               return !document.hidden && null !== this.paused && !this.paused()
+             wholeOrNull(qq, Eq, gq) {
+               var Yq;
+               return null === (null !== (Yq = this.fields[qq]) && void 0 !== Yq ? Yq : null) ? null : this.whole(qq, Eq, gq)
```

#### 1040. `bundles/bloxd.io/main.js` (Changed code · before: `L40959-L40960` → after: `L17017-L17020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17017-L17020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17017-L17020) · [Before (L40959-L40960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40959-L40960)

```diff
-             resetRenderTickChain() {
-               this.prevRenderTickBeginMs = -1, this.renderTickStartMs = -1, this.dropNextInterval = !1, this.limiterTelemetry.reset()
+             boolean(qq) {
+               const Eq = this.fields[qq];
+               if ("boolean" === typeof Eq) return Eq;
+               void 0 !== Eq && this.fail(`${qq} must be true or false`)
```

#### 1041. `bundles/bloxd.io/main.js` (Changed code · before: `L40962-L40963` → after: `L17022-L17051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17022-L17051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17022-L17051) · [Before (L40962-L40963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40962-L40963)

```diff
-             resetAnimationFrameChain() {
-               this.prevAnimationFrameMs = -1, this.prevAnimationFrameIntervalMs = -1
+             oneOf(qq, Eq) {
+               let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+               const Yq = this.fields[qq];
+               return mq(Eq, Yq) ? Yq : ((gq || void 0 !== Yq && null !== Yq) && this.fail(`${qq} must be one of ${Eq.join(", ")}`), null)
+             }
+             list(qq, Eq) {
+               let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+                 Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+               const lq = this.fields[qq];
+               if (void 0 === lq) return;
+               if (Array.isArray(lq) && lq.length >= Yq && lq.length <= gq && new Set(lq).size === lq.length && lq.every((qq => Eq instanceof RegExp ? "string" === typeof qq && Eq.test(qq) : mq(Eq, qq)))) return lq;
+               {
+                 const lq = Eq instanceof RegExp ? `strings matching ${String(Eq)}` : `values from ${Eq.join(", ")}`;
+                 this.fail(`${qq} must be a list of ${Yq} to ${gq} distinct ${lq}`)
+               }
+             }
+ ... (14 more added lines; see GitHub link above)
```

#### 1042. `bundles/bloxd.io/main.js` (Changed code · before: `L40965-L40966` → after: `L17053-L17057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17053-L17057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17053-L17057) · [Before (L40965-L40966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40965-L40966)

```diff
-             discardRefreshWindow() {
-               this.resetAnimationFrameChain(), this.adjacentPairs = 0
+             object(qq) {
+               var Eq;
+               let gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+               const Yq = null !== (Eq = this.fields[qq]) && void 0 !== Eq ? Eq : gq ? null : {};
+               return Oq(Yq) || this.fail(`${qq} must be an object`), new xq(Oq(Yq) ? Yq : {}, `${this.where}${qq}.`, this.errors)
```

#### 1043. `bundles/bloxd.io/main.js` (Changed code · before: `L40968-L40976` → after: `L17059-L17061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17059-L17061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17059-L17061) · [Before (L40968-L40976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40968-L40976)

```diff
-             computeHighestConfirmedRefreshHz() {
-               let TT = 0;
-               for (const cT of this.refreshRateVoteCounts.values()) TT += cT;
-               if (TT < 20) return this.latchedRefreshHz;
-               let kT = this.latchedRefreshHz;
-               for (const [cT, lT] of this.refreshRateVoteCounts) {
-                 lT >= 5 && lT >= .05 * TT && (null === kT || cT > kT) && (kT = cT)
-               }
-               return kT
+             objects(qq, Eq, gq) {
+               const Yq = this.fields[qq];
+               return !Array.isArray(Yq) || Yq.length < Eq || Yq.length > gq || !Yq.every(Oq) ? (this.fail(`${qq} must be a list of ${Eq} to ${gq} objects`), []) : Yq.map(((Eq, gq) => new xq(Eq, `${this.where}${qq}[${gq}].`, this.errors)))
```

#### 1044. `bundles/bloxd.io/main.js` (Changed code · before: `L40981-L40985` → after: `L17080-L17085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17080-L17085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17080-L17085) · [Before (L40981-L40985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40981-L40985)

```diff
-             let kT = lT.d[0],
-               cT = Math.abs(TT - kT);
-             for (const MT of lT.d) {
-               const lT = Math.abs(TT - MT);
-               lT < cT && (kT = MT, cT = lT)
+             const Eq = Object.keys(Wq);
+             qq.onlyKnown(Eq);
+             const gq = {};
+             for (const Yq of Eq) {
+               const Eq = qq.oneOf(Yq, Wq[Yq]);
+               null !== Eq && (gq[Yq] = Eq)
```

#### 1045. `bundles/bloxd.io/main.js` (Changed code · before: `L40989-L41030` → after: `L17089-L17098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17089-L17098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17089-L17098) · [Before (L40989-L41030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L40989-L41030)

```diff
-         },
-         1805: (TT, kT, cT) => {
-           cT.d(kT, {
-             c: () => yT
-           });
-           var lT = cT(47),
-             MT = cT(1772),
-             KT = cT(1814),
-             OT = cT(328);
-           const yT = new class {
-             constructor() {
-               this.homepageRecorded = !1, this.secondsToLoadOrReloadHomepage = null, this.gameLoadStart = null, this.gameLoadOrReloadStart = null, this.secondsToLoadGame = null, this.secondsToLoadOrReloadGame = null, this.engineConstructedThisPageLoad = !1
-             }
-             markHomepageLoadEnd() {
-               if (this.homepageRecorded || !KT.e) return;
-               this.homepageRecorded = !0;
- ... (26 more removed lines; see GitHub link above)
+ 
+           function Hq(qq, Eq) {
+             var gq, Yq;
+             return qq.onlyKnown(["armId", "faro", "topics", "client", "renderer", "clientOptions"]), {
+               armId: null !== Eq && void 0 !== Eq ? Eq : qq.string("armId", dq),
+               faro: null === (gq = qq.boolean("faro")) || void 0 === gq || gq,
+               topics: null !== (Yq = qq.list("topics", uq, uq.length, 0)) && void 0 !== Yq ? Yq : [],
+               client: qq.oneOf("client", Aq),
+               renderer: qq.oneOf("renderer", Bq),
+               clientOptions: jq(qq.object("clientOptions"))
```

#### 1046. `bundles/bloxd.io/main.js` (Changed code · before: `L41033-L41034` → after: `L17101-L17118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17101-L17118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17101-L17118) · [Before (L41033-L41034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41033-L41034)

```diff
-         },
-         2913: (TT, kT, cT) => {
+ 
+           function oq(qq) {
+             var Eq;
+             if (!Oq(qq)) return null;
+             const gq = [],
+               Yq = new xq(qq, "", gq);
+             Yq.onlyKnown(["claimId", "ruleId", "arm", "perClientLines", "iosCapOverride", "expMs"]);
+             const lq = {
+               claimId: Yq.string("claimId", aq),
+               ruleId: Yq.string("ruleId", Vq),
+               arm: Hq(Yq.object("arm"), null),
+               perClientLines: Yq.whole("perClientLines", 1, Nq),
+               iosCapOverride: null !== (Eq = Yq.boolean("iosCapOverride")) && void 0 !== Eq && Eq,
+               expMs: Yq.whole("expMs", 0, Number.MAX_SAFE_INTEGER)
+             };
+             return gq.length > 0 ? null : lq
+ ... (2 more added lines; see GitHub link above)
```

#### 1047. `bundles/bloxd.io/main.js` (Changed code · before: `L41036-L41038` → after: `L17120-L17133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17120-L17133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17120-L17133) · [Before (L41036-L41038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41036-L41038)

```diff
-             c: () => IT,
-             d: () => yT,
-             g: () => xT
+             b: () => lq,
+             d: () => Yq
+           });
+           const Yq = "/index/diag/match",
+             lq = ["webgpuLoss", "decline", "pageKill", "reloadOntoJs", "noTerrain"]
+         }, , , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             b: () => Wq,
+             f: () => oq,
+             j: () => vq,
+             m: () => rq,
+             q: () => hq,
+             r: () => Vq,
+             s: () => Hq
```

#### 1048. `bundles/bloxd.io/main.js` (Changed code · before: `L41040-L41041` → after: `L17135-L17147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17135-L17147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17135-L17147) · [Before (L41040-L41041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41040-L41041)

```diff
-           var lT = cT(1814),
-             MT = cT(2916);
+           var Yq = gq(179),
+             lq = gq(263),
+             Oq = gq(660),
+             mq = gq(634),
+             xq = gq(96),
+             Aq = gq(128),
+             cq = gq(126),
+             uq = gq(275),
+             Bq = gq(663);
+           const Wq = new Map([
+             ["intel_gen7_8", "all"],
+             ["nvidia_pre_turing", "webgl"]
+           ]);
```

#### 1049. `bundles/bloxd.io/main.js` (Changed code · before: `L41043-L41045` → after: `L17149-L17150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17149-L17150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17149-L17150) · [Before (L41043-L41045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41043-L41045)

```diff
-           function KT() {
-             var TT, kT;
-             return null !== (TT = null === (kT = performance.getEntriesByType("navigation")[0]) || void 0 === kT ? void 0 : kT.activationStart) && void 0 !== TT ? TT : 0
+           function Nq(qq) {
+             return null !== qq && "all" === Wq.get(qq)
```

#### 1050. `bundles/bloxd.io/main.js` (Changed code · before: `L41047-L41141` → after: `L17152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17152) · [Before (L41047-L41141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41047-L41141)

```diff
-           const OT = "undefined" !== typeof document ? document : null,
-             yT = new class {
-               constructor(TT) {
-                 this.visit = void 0, this.visitEndedAtMs = 1 / 0, this.visitInteractionCount = null, this.firstInput = null, this.longestInteractions = [], this.interactionIds = new Set, this.fcpStartMs = null, this.lcpStartMs = null, this.firstHiddenAtMs = void 0, this.readActiv … [truncated]
-               }
-               inVisit(TT) {
-                 return ("open" === this.visit || "ended" === this.visit) && TT < this.visitEndedAtMs
-               }
-               pageHidden(TT) {
-                 this.firstHiddenAtMs = Math.min(this.firstHiddenAtMs, TT)
-               }
-               firstInputEntry(TT) {
-                 var kT;
-                 null === this.firstInput && this.inVisit(TT.startTime) && (this.firstInput = {
-                   id: null !== (kT = TT.interactionId) && void 0 !== kT ? kT : 0,
-                   latencyMs: TT.duration
- ... (79 more removed lines; see GitHub link above)
+           const aq = "wasmClientMisdrawnGpu";
```

#### 1051. `bundles/bloxd.io/main.js` (Changed code · before: `L41144-L41147` → after: `L17155-L17166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17155-L17166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17155-L17166) · [Before (L41144-L41147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41144-L41147)

```diff
-             const kT = yT;
-             if (!0 !== (null === OT || void 0 === OT ? void 0 : OT.prerendering)) {
-               const TT = KT();
-               for (const cT of performance.getEntriesByType("visibility-state")) "hidden" === cT.name && cT.startTime >= TT && kT.pageHidden(cT.startTime)
+             if (Nq(qq)) try {
+               window.localStorage.setItem(aq, qq)
+             } catch {}
+           }
+           const dq = new Set(["android", "ios"]),
+             jq = new Set(["windows", "chrome_os"]);
+ 
+           function Hq() {
+             try {
+               return (0, xq.getOperatingSystem)()
+             } catch {
+               return null
```

#### 1052. `bundles/bloxd.io/main.js` (Changed code · before: `L41177-L41179` → after: `L17177-L17182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17177-L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17177-L17182) · [Before (L41177-L41179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41177-L41179)

```diff
-             for (const cT of null !== (TT = null === (kT = fT) || void 0 === kT ? void 0 : kT.takeRecords()) && void 0 !== TT ? TT : []) {
-               var TT, kT;
-               yT.eventTiming(cT)
+             try {
+               var qq;
+               const Eq = JSON.parse(null !== (qq = window.localStorage.getItem(Pq)) && void 0 !== qq ? qq : "null");
+               return (null === Eq || void 0 === Eq ? void 0 : Eq.browser) === (0, uq.c)() && "string" === typeof Eq.gl ? Eq : null
+             } catch {
+               return null
```

#### 1053. `bundles/bloxd.io/main.js` (Changed code · before: `L41183-L41192` → after: `L17185-L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17185-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17185-L17226) · [Before (L41183-L41192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41183-L41192)

```diff
-         },
-         1499: (TT, kT, cT) => {
-           cT.d(kT, {
-             c: () => yT,
-             d: () => fT
-           });
-           var lT = cT(211),
-             MT = cT(31),
-             KT = cT(1508);
-           const OT = ["gameNameWithVariation", "customGamePlace", "gameAnalyticsId"];
+ 
+           function yq(qq, Eq) {
+             try {
+               window.localStorage.setItem(Pq, JSON.stringify({
+                 browser: (0, uq.c)(),
+                 gl: qq,
+                 adapter: Eq
+               }))
+             } catch {}
+           }
+           let tq = null;
+ 
+           function rq() {
+             var qq;
+             null === tq && (tq = function() {
+               let qq = null;
+ ... (26 more added lines; see GitHub link above)
```

#### 1054. `bundles/bloxd.io/main.js` (Changed code · before: `L41195-L41199` → after: `L17229-L17253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17229-L17253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17229-L17253) · [Before (L41195-L41199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41195-L41199)

```diff
-             const TT = MT.e.get("router");
-             return null === TT ? {
-               route: "",
-               game: ""
-             } : fT(TT.state.matches)
+             var qq;
+             const Eq = Hq();
+             if (null !== Eq && Yq.i.includes((0, xq.getSoftwareRenderer)())) return !0;
+             const gq = (0, mq.l)((0, mq.f)(), aq);
+             if (Nq(gq)) return nq(gq);
+             if (null === Eq || !jq.has(Eq)) return !1;
+             const lq = Qq(),
+               Oq = oq(null !== (qq = null === lq || void 0 === lq ? void 0 : lq.adapter) && void 0 !== qq ? qq : null, Eq, (() => null));
+             if (null !== Oq && !Nq(Oq)) return !1;
+             const Aq = null === lq || Nq(lq.gl) ? rq() : lq.gl;
+             if (null === Aq || !Nq(Aq)) return !1;
+             const uq = navigator.gpu;
+             return void 0 !== (null === lq || void 0 === lq ? void 0 : lq.adapter) || void 0 === uq ? (Vq(Aq), nq(Aq)) : (null !== lq || null !== Qq()) && (function(qq, Eq) {
+               (0, Bq.c)((() => {
+                 (0, cq.n)(qq, !1).then((qq => {
+                   const gq = Qq();
+ ... (9 more added lines; see GitHub link above)
```

#### 1055. `bundles/bloxd.io/main.js` (Changed code · before: `L41203-L41216` → after: `L17257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17257) · [Before (L41203-L41216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41203-L41216)

```diff
-             let kT = "",
-               cT = "";
-             for (const lT of TT) {
-               const TT = lT.route.path;
-               TT && (kT = TT.startsWith("/") ? TT : `${kT.replace(/\/$/,"")}/${TT}`);
-               for (const kT of OT) {
-                 var MT;
-                 cT = null !== (MT = lT.params[kT]) && void 0 !== MT ? MT : cT
-               }
-             }
-             return {
-               route: (0, KT.d)(kT, lT.L, "other"),
-               game: (0, KT.d)(cT, lT.y, "other")
-             }
+             return (0, Oq.l)(qq), !(0, Oq.k)(qq)
```

#### 1056. `bundles/bloxd.io/main.js` (Changed code · before: `L41218-L41219` → after: `L17259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17259) · [Before (L41218-L41219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41218-L41219)

```diff
-         },
-         2888: (TT, kT, cT) => {
+         }, , (qq, Eq, gq) => {
```

#### 1057. `bundles/bloxd.io/main.js` (Changed code · before: `L41221-L41223` → after: `L17261-L17266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17261-L17266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17261-L17266) · [Before (L41221-L41223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41221-L41223)

```diff
-             b: () => lT,
-             f: () => MT,
-             g: () => KT
+             e: () => Bq,
+             h: () => Vq,
+             j: () => aq,
+             k: () => Aq,
+             l: () => Nq,
+             o: () => Wq
```

#### 1058. `bundles/bloxd.io/main.js` (Changed code · before: `L41225` → after: `L17268-L17283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17268-L17283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17268-L17283) · [Before (L41225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41225)

```diff
-           const lT = 15e3;
+           var Yq = gq(284),
+             lq = gq(278),
+             Oq = gq(623),
+             mq = gq(634);
+           const xq = new Map([
+             ["nvidia_pre_turing", {
+               test: "preturing_wasm_v1",
+               populationKey: "preTuringWasmPopulation",
+               exemptLabel: Yq.i
+             }],
+             ["intel_gen7_8", {
+               test: "intel_gen78_wasm_v1",
+               populationKey: "intelGen78WasmPopulation",
+               exemptLabel: Yq.e
+             }]
+           ]);
```

#### 1059. `bundles/bloxd.io/main.js` (Changed code · before: `L41227-L41228` → after: `L17285-L17287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17285-L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17285-L17287) · [Before (L41227-L41228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41227-L41228)

```diff
-           function MT(TT, kT) {
-             return TT[kT]
+           function Aq(qq) {
+             const Eq = xq.get(qq);
+             return void 0 !== Eq && "wasm_webgl" === lq.c[Eq.test]
```

#### 1060. `bundles/bloxd.io/main.js` (Changed code · before: `L41231-L41233` → after: `L17291-L17295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17291-L17295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17291-L17295) · [Before (L41231-L41233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41231-L41233)

```diff
-           function KT(TT, kT) {
-             const cT = MT(TT, kT);
-             return "number" === typeof cT && Number.isFinite(cT) ? cT : void 0
+           function uq(qq) {
+             const Eq = xq.get(qq);
+             if (void 0 === Eq) return !1;
+             let gq = cq.get(qq);
+             return void 0 === gq && (gq = (0, mq.i)(Eq.populationKey) === qq, cq.set(qq, gq)), gq
```

#### 1061. `bundles/bloxd.io/main.js` (Changed code · before: `L41235-L41247` → after: `L17297-L17379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17297-L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17297-L17379) · [Before (L41235-L41247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41235-L41247)

```diff
-         },
-         1082: (TT, kT, cT) => {
-           cT.r(kT), cT.d(kT, {
-             filterFaroItem: () => VT,
-             getPageType: () => oT,
-             isPageLoadSampled: () => NT,
-             vt: () => gT,
-             logClientMeasurement: () => RT,
-             logDiagItem: () => dT,
-             setDiagFaroAttributes: () => ZT,
-             setFaroUser: () => uT,
-             startWebVitalsLogging: () => LT,
-             thisPageLoadSampled: () => QT
+           async function Bq(qq) {
+             const {
+               reportAnalyticsClick: Eq
+             } = await Promise.resolve().then((() => gq(1448)));
+             Eq({
+               id: "device.gpu_family",
+               value: qq
+             })
+           }
+ 
+           function Wq(qq) {
+             Bq(qq).catch((qq => {
+               console.warn("The GPU measuring arm's population went unreported on this visit", qq)
+             }))
+           }
+ 
+ ... (67 more added lines; see GitHub link above)
```

#### 1062. `bundles/bloxd.io/main.js` (Changed code · before: `L41249-L41261` → after: `L17381-L17395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17381-L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17381-L17395) · [Before (L41249-L41261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41249-L41261)

```diff
-           var lT = cT(232),
-             MT = cT(623),
-             KT = cT(666),
-             OT = cT(159),
-             yT = cT(1085),
-             fT = cT(651),
-             xT = cT(1089);
-           const IT = "https://jotunn.bloxd.io/r",
-             AT = .01,
-             CT = 100,
-             jT = /\.js(?:[?#]|$)/,
-             vT = /:(wasm-function\[\d+\]):0x([0-9a-f]+)$/,
-             tT = /^([0-9a-f]{16})\.(\d+)\.?$/;
+           const Yq = 30,
+             lq = 10,
+             Oq = 120,
+             mq = 5
+         }, , , , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             b: () => Oq,
+             c: () => lq,
+             e: () => Yq,
+             f: () => mq,
+             j: () => xq
+           });
+           const Yq = 1.2,
+             lq = Math.PI - .1,
+             Oq = 120;
```

#### 1063. `bundles/bloxd.io/main.js` (Changed code · before: `L41263-L41264` → after: `L17397-L17398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17397-L17398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17397-L17398) · [Before (L41263-L41264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41263-L41264)

```diff
-           function hT() {
-             return !(0, lT.l)() && !(0, OT.c)()
+           function mq(qq) {
+             return Math.min(Yq * qq / 100, lq)
```

#### 1064. `bundles/bloxd.io/main.js` (Changed code · before: `L41267-L41269` → after: `L17401-L17406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17401-L17406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17401-L17406) · [Before (L41267-L41269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41267-L41269)

```diff
-           function NT() {
-             let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
-             return hT() && ((0, lT.g)() || TT() < AT)
+           function xq(qq) {
+             let {
+               touchscreenSensitivity: Eq,
+               cameraFOV: gq
+             } = qq;
+             return Eq * Math.tan(mq(gq) / 2) / Math.tan(mq(Oq) / 2)
```

#### 1065. `bundles/bloxd.io/main.js` (Changed code · before: `L41271-L41277` → after: `L17408-L17450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17408-L17450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17408-L17450) · [Before (L41271-L41277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41271-L41277)

```diff
-           const QT = NT() || hT() && (0, KT.m)(),
-             ST = null === KT.q ? 10 : 50,
-             DT = new Set;
-           let aT, FT, rT = 0,
-             PT = 0,
-             wT = null,
-             mT = null;
+         }, , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             b: () => Pq,
+             f: () => Qq,
+             g: () => oq,
+             k: () => yq
+           });
+           var Yq = gq(1015),
+             lq = gq(707),
+             Oq = gq(713),
+             mq = gq(716),
+             xq = gq(721),
+             Aq = gq(726),
+             cq = gq(729),
+             uq = gq(985),
+             Bq = gq(1006),
+ ... (27 more added lines; see GitHub link above)
```

#### 1066. `bundles/bloxd.io/main.js` (Changed code · before: `L41279-L41280` → after: `L17452-L17453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17452-L17453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17452-L17453) · [Before (L41279-L41280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41279-L41280)

```diff
-           function bT(TT) {
-             return "true" === (null === TT || void 0 === TT ? void 0 : TT.fatal)
+           function oq() {
+             return jq
```

#### 1067. `bundles/bloxd.io/main.js` (Changed code · before: `L41285` → after: `L17456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17456) · [Before (L41285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41285)

```diff
-           function oT(TT) {
+           function Pq() {
```

#### 1068. `bundles/bloxd.io/main.js` (Changed code · before: `L41287-L41288` → after: `L17458-L17459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17458-L17459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17458-L17459) · [Before (L41287-L41288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41287-L41288)

```diff
-             const cT = null !== (kT = TT.toLowerCase().split("/")[1]) && void 0 !== kT ? kT : "";
-             return zT.has(cT) ? "home" : JT.has(cT) ? "game" : "play" === cT ? "play" : "other"
+             const Eq = null !== (qq = oq().availableGameNamesWithVariation.categoryGroup) && void 0 !== qq ? qq : [];
+             return (0, uq.g)(Eq)
```

#### 1069. `bundles/bloxd.io/main.js` (Changed code · before: `L41292` → after: `L17463-L17464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17463-L17464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17463-L17464) · [Before (L41292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41292)

```diff
-             return oT("undefined" === typeof location ? "/" : location.pathname)
+             const qq = (0, Bq.d)(oq());
+             return Yq.g.filter((Eq => qq.includes(Eq)))
```

#### 1070. `bundles/bloxd.io/main.js` (Changed code · before: `L41296-L41321` → after: `L17467-L17494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17467-L17494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17467-L17494) · [Before (L41296-L41321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41296-L41321)

```diff
-           function GT(TT) {
-             const kT = TT.payload;
-             if (!kT.stacktrace) return TT;
-             const lT = new URL(cT.p, location.href).href,
-               MT = kT.stacktrace.frames.map((TT => function(TT, kT) {
-                 const cT = vT.exec(TT.filename),
-                   lT = cT && tT.exec(TT.function);
-                 return cT && lT ? {
-                   ...TT,
-                   filename: `app:///wasm/${lT[1]}`,
-                   function: cT[1],
-                   lineno: 1,
-                   colno: parseInt(cT[2], 16) - Number(lT[2])
-                 } : TT.filename.startsWith(kT) ? {
-                   ...TT,
-                   filename: `app:///${TT.filename.slice(kT.length).split(/[?#]/)[0]}`
- ... (10 more removed lines; see GitHub link above)
+           function yq(qq, Eq) {
+             const gq = qq.trim().toLowerCase();
+             if (!gq) return [];
+             const Yq = new Set((0, Vq.Vb)(gq));
+             return (0, Bq.d)(oq()).filter((qq => {
+               if ((0, dq.j)(qq)) return !1;
+               const lq = cq.c[qq];
+               return !(0, aq.H)(lq) && (Eq(lq.title).toLowerCase().includes(gq) || Eq(lq.description).toLowerCase().includes(gq) || Yq.has(lq.type))
+             }))
+           }
+         }, , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             c: () => Yq
+           });
+           const Yq = {
+             title: "Escape the Forest",
+ ... (12 more added lines; see GitHub link above)
```

#### 1071. `bundles/bloxd.io/main.js` (Changed code · before: `L41325-L41341` → after: `L17498-L17527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17498-L17527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17498-L17527) · [Before (L41325-L41341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41325-L41341)

```diff
- 
-           function VT(TT) {
-             if ("exception" === TT.type) {
-               const {
-                 context: lT,
-                 stacktrace: MT
-               } = TT.payload;
-               if (! function(TT) {
-                   return void 0 !== (null === TT || void 0 === TT ? void 0 : TT.fatal)
-                 }(lT)) {
-                 var kT;
-                 const TT = (null !== (kT = null === MT || void 0 === MT ? void 0 : MT.frames) && void 0 !== kT ? kT : []).find((TT => jT.test(TT.filename)));
-                 if (TT && (cT = TT.filename, yT.c.some((TT => cT.includes(TT))))) return null
-               }
-               if (!bT(lT)) {
-                 if (rT >= ST) return null;
- ... (1 more removed lines; see GitHub link above)
+         }, , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             d: () => Yq
+           });
+           const Yq = {
+             title: "bloxd.io",
+             availableGameNamesWithVariation: {
+               topGameGroup: [
+                 [
+                   ["classic", "classic_creative", "plots", "greenville", "oneBlock", "eviltower", "doodle", "parkour", "hideseek"]
+                 ]
+               ]
+             },
+             homeRowSize: 6,
+             y8AppId: "634d5cecb4439c4ae71e9d1f",
+             gameConfigOverrides: {
+ ... (14 more added lines; see GitHub link above)
```

#### 1072. `bundles/bloxd.io/main.js` (Changed code · before: `L41345-L41352` → after: `L17530-L17707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17530-L17707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17530-L17707) · [Before (L41345-L41352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41345-L41352)

```diff
-             var cT;
-             return ET("measurement" === TT.type ? function(TT) {
-               const kT = TT.payload,
-                 cT = {
-                   ...kT.context,
-                   page_type: eT,
-                   sent_page_type: HT(),
-                   site: OT.u
+           }
+         }, , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             d: () => lq
+           });
+           const Yq = new Set(["schematicTester", "testGym"]);
+           const lq = {
+             title: "bloxd.io",
+             availableGameNamesWithVariation: {
+               topGameGroup: [
+                 [
+                   [...Yq]
+                 ]
+               ]
+             },
+             homeRowSize: 11
+ ... (162 more added lines; see GitHub link above)
```

#### 1073. `bundles/bloxd.io/main.js` (Changed code · before: `L41354-L41372` → after: `L17709-L17733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17709-L17733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17709-L17733) · [Before (L41354-L41372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41354-L41372)

```diff
-                 {
-                   longest_script_source_url: lT,
-                   longest_script_invoker: MT,
-                   longest_script_invoker_type: KT,
-                   longest_script_source_function_name: yT
-                 } = cT;
-               lT && (cT.longest_script_source_url = (0, xT.m)(lT));
-               MT && (cT.longest_script_invoker = (0, xT.i)(MT, KT));
-               yT && (cT.longest_script_source_function_name = (0, xT.f)(yT));
-               delete cT.resource_url, delete cT.resource_delivery_type, delete cT.resource_initiator_type;
-               const IT = (0, fT.peekVisitSessionId)(),
-                 AT = null === IT ? TT.meta : {
-                   ...TT.meta,
-                   session: {
-                     ...TT.meta.session,
-                     id: IT
- ... (3 more removed lines; see GitHub link above)
+                 thumbnailUseLongRatio: !1,
+                 useRejoinLastLobbyButton: !1,
+                 additionalMetaTags: []
+               },
+               testGym: Aq.e,
+               dressUp: Rq.c,
+               eatToGrow: Iq.d,
+               backrooms: eq.b,
+               heroesvbrainrots: sq.e,
+               coreDefenders: Xq.c,
+               containmentBreach: wq.e,
+               containmentBreach_contained: {
+                 ...wq.e,
+                 variationTitle: "Contained"
+               },
+               containmentBreach_breached: {
+ ... (9 more added lines; see GitHub link above)
```

#### 1074. `bundles/bloxd.io/main.js` (Changed code · before: `L41374-L41378` → after: `L17735-L18329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17735-L18329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L17735-L18329) · [Before (L41374-L41378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41374-L41378)

```diff
-                 meta: AT,
-                 payload: {
-                   ...kT,
-                   context: cT
-                 }
+                 variationTitle: "12v12"
+               },
+               shooting: cq.e,
+               shooting_ffa: {
+                 ...cq.e,
+                 badges: [{
+                   type: "updated",
+                   dateAdded: new Date("2025-11-13T14:00:00Z")
+                 }],
+                 variationTitle: "Free\u2011For\u2011All",
+                 variationThumbnailPicture: "warfare_mode_ffa_small"
+               },
+               shooting_tdm: {
+                 ...cq.e,
+                 badges: [{
+                   type: "updated",
+ ... (579 more added lines; see GitHub link above)
```

#### 1075. `bundles/bloxd.io/main.js` (Changed code · before: `L41380-L41381` → after: `L18331-L18358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18331-L18358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L18331-L18358) · [Before (L41380-L41381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41380-L41381)

```diff
-             }(TT) : TT)
-           }
+             };
+           for (const mE in gE) gE[mE].firebaseConfig && (gE[mE].firebaseConfig.authDomain = "bloxd-ee1aa.firebaseapp.com");
+           Dq.c.localGameName && void 0 === gE[Dq.c.localGameName] && (gE[Dq.c.localGameName] = {
+             ...xq.e,
+             title: Dq.c.localGameName
+           });
+           const YE = {
+             "PBIhIlqvK-D1VhspOCUNZ": {
+               title: "\ud83c\udf3eGrow & Farm",
+               smallPicture: "bloxd_simulator_thumbnail_small",
+               largePicture: "bloxd_simulator_thumbnail_large"
+             },
+             "EhfHqCzt4B0-y-MWhBfRj": {
+               title: "Dungeons",
+               smallPicture: "bloxd_dungeon_thumbnail_small",
+               largePicture: "bloxd_dungeon_thumbnail_large"
+ ... (12 more added lines; see GitHub link above)
```

#### 1076. `bundles/bloxd.io/main.js` (Changed code · before: `L41385-L41395` → after: `L18362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L18362) · [Before (L41385-L41395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41385-L41395)

```diff
-             const cT = null === (kT = TT.meta.page) || void 0 === kT ? void 0 : kT.url;
-             return cT ? {
-               ...TT,
-               meta: {
-                 ...TT.meta,
-                 page: {
-                   ...TT.meta.page,
-                   url: cT.split(/[?#]/)[0]
-                 }
-               }
-             } : TT
+             return null !== (Eq = (0, Yq.b)(gE, qq)) && void 0 !== Eq ? Eq : null
```

#### 1077. `bundles/bloxd.io/main.js` (Changed code · before: `L41399` → after: `L18366-L18367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18366-L18367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L18366-L18367) · [Before (L41399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41399)

```diff
-             mT = TT
+             var Eq, gq;
+             return null !== (Eq = null === (gq = lE(qq)) || void 0 === gq ? void 0 : gq.shaderPackPolicy) && void 0 !== Eq ? Eq : "strict"
```

#### 1078. `bundles/bloxd.io/main.js` (Changed code · before: `L41401-L41403` → after: `L18369-L18392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18369-L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L18369-L18392) · [Before (L41401-L41403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41401-L41403)

```diff
- 
-           function uT(TT) {
-             aT = TT, null !== wT && XT((() => {}), "Failed to name the player in Faro")
+         }, , , , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             b: () => Yq
+           });
+           const Yq = {
+             type: "Parkour",
+             title: "game:bloxdHop",
+             description: "game:bloxdHopDescription",
+             smallPicture: "bloxd_bloxdhop_thumbnail_small",
+             largePicture: "bloxd_bloxdhop_thumbnail_large",
+             thumbnailUseLongRatio: !0,
+             badges: [],
+             useRejoinLastLobbyButton: !1,
+             additionalMetaTags: [],
+             firebaseConfig: {
+               apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+ ... (8 more added lines; see GitHub link above)
```

#### 1079. `bundles/bloxd.io/main.js` (Changed code · before: `L41405-L41443` → after: `L18394-L18428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18394-L18428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L18394-L18428) · [Before (L41405-L41443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41405-L41443)

```diff
- 
-           function XT(TT, kT) {
-             (wT ??= cT.e(31).then((() => cT(6676))).then((TT => TT.initializeFaro({
-               url: IT,
-               app: {
-                 name: "bloxd-web",
-                 version: String(MT.d),
-                 release: String(MT.d),
-                 environment: (0, lT.g)() ? "preprod" : "prod"
-               },
-               instrumentations: QT ? [new TT.WebVitalsInstrumentation] : [],
-               webVitalsInstrumentation: {
-                 trackAttributionSources: !0
-               },
-               sessionTracking: {
-                 enabled: !1
- ... (23 more removed lines; see GitHub link above)
+         }, , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             c: () => Yq
+           });
+           const Yq = {
+             type: "Simulator",
+             title: "Fishing",
+             description: "A relaxing fishing game, set on a string of unique islands. Explore, catch fish, and discover the secrets of this mysterious land.",
+             smallPicture: "bloxd_fishing_thumbnail_small_v2",
+             largePicture: "bloxd_fishing_thumbnail_large_v2",
+             thumbnailUseLongRatio: !0,
+             badges: [],
+             useRejoinLastLobbyButton: !1,
+             additionalMetaTags: [],
+             gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19",
+             shaderPackPolicy: "allow"
+ ... (19 more added lines; see GitHub link above)
```

#### 1080. `bundles/bloxd.io/main.js` (Changed code · before: `L41445-L41452` → after: `L18430-L19070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18430-L19070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L18430-L19070) · [Before (L41445-L41452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41445-L41452)

```diff
- 
-           function dT(TT, kT) {
-             hT() && XT((cT => {
-               cT.api.pushLog([TT], {
-                 context: kT,
-                 skipDedupe: !0
-               })
-             }), "Failed to send a diag log item")
+         }, , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             e: () => Yq
+           });
+           const Yq = {
+             type: "Other",
+             title: "Bloxd",
+             description: "An example game",
+             smallPicture: "bloxd_testGame_thumbnail_small",
+             largePicture: "bloxd_testGame_thumbnail_large",
+             thumbnailUseLongRatio: !1,
+             badges: [],
+             useRejoinLastLobbyButton: !1,
+             additionalMetaTags: [],
+             firebaseConfig: {
+               apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+ ... (625 more added lines; see GitHub link above)
```

#### 1081. `bundles/bloxd.io/main.js` (Changed code · before: `L41454-L41456` → after: `L19072-L19123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19072-L19123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19072-L19123) · [Before (L41454-L41456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41454-L41456)

```diff
- 
-           function LT() {
-             QT && XT((() => {}), "Failed to start web vitals logging")
+         }, , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             c: () => Yq
+           });
+           const Yq = {
+             type: "Minigames",
+             title: "Simon Says",
+             description: "A simple Simon Says game.",
+             smallPicture: "bloxd_simon_says_thumbnail_small",
+             largePicture: "bloxd_simon_says_thumbnail_large",
+             thumbnailUseLongRatio: !0,
+             badges: [],
+             useRejoinLastLobbyButton: !1,
+             additionalMetaTags: []
+           }
+         }, , , , , (qq, Eq, gq) => {
+ ... (36 more added lines; see GitHub link above)
```

#### 1082. `bundles/bloxd.io/main.js` (Changed code · before: `L41458-L41467` → after: `L19125-L19159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19125-L19159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19125-L19159) · [Before (L41458-L41467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41458-L41467)

```diff
- 
-           function RT(TT, kT, cT) {
-             QT && XT((lT => {
-               lT.api.pushMeasurement({
-                 type: TT,
-                 values: kT
-               }, {
-                 context: cT
-               })
-             }), "Failed to log client measurement")
+         }, , , , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             c: () => Yq
+           });
+           const Yq = {
+             type: "Roleplay",
+             title: "Dress Up",
+             description: "Express yourself! Dress up your character to match the theme, then strut the catwalk and get voted on by other players.",
+             smallPicture: "bloxd_dress_up_thumbnail_small",
+             largePicture: "bloxd_dress_up_thumbnail_large",
+             thumbnailUseLongRatio: !0,
+             useRejoinLastLobbyButton: !1,
+             additionalMetaTags: [],
+             gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19",
+             shaderPackPolicy: "allow"
+           }
+ ... (19 more added lines; see GitHub link above)
```

#### 1083. `bundles/bloxd.io/main.js` (Changed code · before: `L41469-L41488` → after: `L19161-L19177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19161-L19177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19161-L19177) · [Before (L41469-L41488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41469-L41488)

```diff
- 
-           function gT(TT) {
-             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-             if (QT) try {
-               const cT = function(TT) {
-                   return TT instanceof Error ? TT : new Error("string" === typeof TT ? TT : String(TT))
-                 }(TT),
-                 lT = `${cT.name}: ${cT.message}`;
-               if ((0, yT.e)(lT)) return;
-               const MT = `${lT}|${JSON.stringify(kT)}`,
-                 KT = bT(kT);
-               if (DT.has(MT) || !KT && DT.size - PT >= CT) return;
-               DT.add(MT), KT && PT++, XT((TT => {
-                 TT.api.pushError(cT, {
-                   context: kT
-                 })
- ... (4 more removed lines; see GitHub link above)
+         }, , , , , , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             e: () => Yq
+           });
+           const Yq = {
+             type: "Simulator",
+             title: "Football",
+             description: "Two teams battle it out on the pitch!",
+             smallPicture: "bloxd_goalRush_thumbnail_small",
+             largePicture: "bloxd_goalRush_thumbnail_large",
+             thumbnailUseLongRatio: !0,
+             useRejoinLastLobbyButton: !1,
+             badges: [{
+               type: "updated",
+               dateAdded: new Date("2026-04-27T13:00:00Z")
+             }],
+ ... (1 more added lines; see GitHub link above)
```

#### 1084. `bundles/bloxd.io/main.js` (Changed code · before: `L41490-L41491` → after: `L19179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19179) · [Before (L41490-L41491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41490-L41491)

```diff
-         },
-         703: (TT, kT, cT) => {
+         }, , (qq, Eq, gq) => {
```

#### 1085. `bundles/bloxd.io/main.js` (Changed code · before: `L41493` → after: `L19181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19181) · [Before (L41493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41493)

```diff
-             d: () => KT
+             e: () => Yq
```

#### 1086. `bundles/bloxd.io/main.js` (Changed code · before: `L41495-L41507` → after: `L19183-L19212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19183-L19212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19183-L19212) · [Before (L41495-L41507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41495-L41507)

```diff
-           var lT = cT(211);
-           const MT = new Set(["Safari", "Chrome", "Firefox", "Microsoft Edge"]);
- 
-           function KT(TT, kT, cT) {
-             if (null !== cT) {
-               const TT = `ios_app_${parseInt(cT,10)}`;
-               if (lT.h.test(TT)) return TT;
-               console.warn("The iOS app passed an iOS version with no major browser_major takes", cT)
-             }
-             if (!MT.has(TT)) return null;
-             if (!kT) return "Safari" === TT ? "webview" : null;
-             const KT = kT.split(".")[0];
-             return lT.h.test(KT) ? KT : null
+           const Yq = {
+             type: "Simulator",
+             title: "Heroes vs Brainrots",
+             description: "Fight as heroes or brainrots in this free-for-all PvP arena.",
+             smallPicture: "bloxd_heroesvbrainrots_thumbnail_small",
+             largePicture: "bloxd_heroesvbrainrots_thumbnail_large",
+             thumbnailUseLongRatio: !0,
+             badges: [],
+             useRejoinLastLobbyButton: !1,
+             additionalMetaTags: [],
+             gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+           }
+         }, , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             c: () => Yq
+           });
+ ... (14 more added lines; see GitHub link above)
```

#### 1087. `bundles/bloxd.io/main.js` (Changed code · before: `L41509-L41510` → after: `L19214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19214) · [Before (L41509-L41510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41509-L41510)

```diff
-         },
-         1497: (TT, kT, cT) => {
+         }, , , , , , , (qq, Eq, gq) => {
```

#### 1088. `bundles/bloxd.io/main.js` (Changed code · before: `L41512` → after: `L19216-L19281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19216-L19281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19216-L19281) · [Before (L41512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41512)

```diff
-             e: () => IT,
+             e: () => Yq
+           });
+           const Yq = {
+             type: "Horror",
+             title: "game:containmentBreach",
+             description: "game:containmentBreachDescription",
+             smallPicture: "bloxd_containment_breach_thumbnail_small_red_eyes",
+             largePicture: "bloxd_containment_breach_thumbnail_large_red_eyes",
+             videoPreview: "bloxd_containment_breach_preview_video",
+             thumbnailUseLongRatio: !1,
+             badges: [],
+             useRejoinLastLobbyButton: !1,
+             urlGameNameWithoutVariation: "scpContainmentBreach",
+             additionalMetaTags: []
+           }
+         }, , (qq, Eq, gq) => {
+ ... (50 more added lines; see GitHub link above)
```

#### 1089. `bundles/bloxd.io/main.js` (Changed code · before: `L41514-L41515` → after: `L19283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19283) · [Before (L41514-L41515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41514-L41515)

```diff
-             i: () => AT,
-             reportAnalyticsClick: () => jT
+             g: () => Bq
```
