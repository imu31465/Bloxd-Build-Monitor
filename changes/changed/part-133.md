# Changed — Bundle Modifications Report (Part 133 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `133 / 133` (**265** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 132](part-132.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/main.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 923. `bundles/bloxd.io/main.js` (Changed code · before: `L15113-L15121` → after: `L37765-L37768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37765-L37768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37765-L37768) · [Before (L15113-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15113-L15121)

```diff
-             var zv;
-             return function(vv) {
-               return "object" === typeof vv && null !== vv && !Array.isArray(vv) && "content" in vv
-             }(vv) ? {
-               content: vv.content,
-               showBackground: null === (zv = vv.showBackground) || void 0 === zv || zv
-             } : {
-               content: null !== vv && void 0 !== vv ? vv : "",
-               showBackground: !0
+             try {
+               return decodeURIComponent(TT)
+             } catch {
+               return TT
```

#### 924. `bundles/bloxd.io/main.js` (Changed code · before: `L15126` → after: `L37773-L37780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37773-L37780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37773-L37780) · [Before (L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15126)

```diff
-             return 0 === vv.length
+             const kT = (0, KT.useNavigatePreserveSearch)(),
+               cT = (0, MT.s)();
+             (0, lT.useEffect)((() => {
+               TT && fT(cT.pathname) !== fT(TT) && kT(TT, {
+                 replace: !0,
+                 state: OT
+               })
+             }), [TT, cT.pathname])
```

#### 925. `bundles/bloxd.io/main.js` (Changed code · before: `L15128-L15130` → after: `L37782-L37802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37782-L37802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37782-L37802) · [Before (L15128-L15130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15128-L15130)

```diff
- 
-           function Dz(vv) {
-             return vv.length > 0 ? vv[Fv(vv)] : void 0
+         },
+         2770: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => MT
+           });
+           var lT = cT(71);
+           const MT = TT => {
+             const [kT, cT] = (0, lT.useState)(0), [MT, KT] = (0, lT.useState)(0);
+             return (0, lT.useEffect)((() => {
+               if (!TT) return;
+               const kT = TT.current,
+                 lT = new ResizeObserver((TT => {
+                   cT(TT[0].contentRect.width), KT(TT[0].contentRect.height)
+                 }));
+               return kT && lT.observe(kT), () => {
+                 lT.unobserve(kT)
+ ... (5 more added lines; see GitHub link above)
```

#### 926. `bundles/bloxd.io/main.js` (Changed code · before: `L15133-L15134` → after: `L37815-L37818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37815-L37818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37815-L37818) · [Before (L15133-L15134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15133-L15134)

```diff
-           function Kz(vv) {
-             return Zz.fastATan2(vv[0], vv[2])
+           function fT() {
+             queueMicrotask((() => {
+               "inGame" === lT.e.get("gameState") ? !yT || 0 !== OT.size || lT.e.get("openInGameMenuName") || lT.e.get("openEverythingMenuName") || (yT = !1, (0, KT.N)()) : yT = !1
+             }))
```

#### 927. `bundles/bloxd.io/main.js` (Changed code · before: `L15137-L15139` → after: `L37821-L37841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37821-L37841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37821-L37841) · [Before (L15137-L15139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15137-L15139)

```diff
-           function Vz(vv) {
-             return [Math.sin(vv), 0, Math.cos(vv)]
-           }
+           function xT(TT, kT) {
+             const cT = (0, MT.useRef)({}).current,
+               {
+                 openInGameMenuName: xT,
+                 openEverythingMenuName: IT,
+                 gameState: AT
+               } = (0, lT.n)(["openInGameMenuName", "openEverythingMenuName", "gameState"]);
+             (0, MT.useEffect)((() => {
+               TT && kT ? (OT.add(cT), yT || (yT = !0, (0, KT.R)())) : (OT.delete(cT), fT())
+             }), [cT, kT, TT, xT, IT, AT]), (0, MT.useEffect)((() => () => {
+               OT.delete(cT), fT()
+             }), [cT])
+           }
+         },
+         2140: (TT, kT, cT) => {
+           cT.d(kT, {
+ ... (5 more added lines; see GitHub link above)
```

#### 928. `bundles/bloxd.io/main.js` (Changed code · before: `L15141-L15144` → after: `L37843-L37848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37843-L37848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37843-L37848) · [Before (L15141-L15144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15141-L15144)

```diff
-           function Uz(vv) {
-             const zv = vv.split(" ");
-             let Pv = zv[0];
-             return "Light" === Pv && (Pv += " " + zv[1]), Pv
+           function OT(TT, kT, cT) {
+             (0, lT.useEffect)((() => (0, KT.e)("pointerdown", (lT => {
+               var KT, OT;
+               const yT = lT.target;
+               yT instanceof Node && (null !== (KT = TT.current) && void 0 !== KT && KT.contains(yT) || null !== cT && void 0 !== cT && null !== (OT = cT.current) && void 0 !== OT && OT.contains(yT) || (0, MT.f)(yT) || kT())
+             }))), [TT, kT, cT])
```

#### 929. `bundles/bloxd.io/main.js` (Changed code · before: `L15148` → after: `L37861-L37874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37861-L37874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37861-L37874) · [Before (L15148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15148)

```diff
-             return `${vv} Spawn Orb`
+             let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+             (0, lT.useEffect)((() => {
+               if (!kT) return;
+               const cT = TT.current,
+                 lT = (KT ??= new IntersectionObserver((TT => {
+                   for (const kT of TT) kT.target.toggleAttribute(MT, !kT.isIntersecting)
+                 }), {
+                   rootMargin: "100px",
+                   scrollMargin: "100px"
+                 }), KT);
+               return lT.observe(cT), () => {
+                 lT.unobserve(cT), cT.removeAttribute(MT)
+               }
+             }), [TT, kT])
```

#### 930. `bundles/bloxd.io/main.js` (Changed code · before: `L15152` → after: `L37879-L37883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37879-L37883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37879-L37883) · [Before (L15152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15152)

```diff
-             return `${vv} Spawner Block`
+             (0, lT.useLayoutEffect)((() => {
+               if (TT) return document.documentElement.setAttribute(yT, ""), () => {
+                 document.documentElement.removeAttribute(yT)
+               }
+             }), [TT])
```

#### 931. `bundles/bloxd.io/main.js` (Changed code · before: `L15155-L15167` → after: `L37893-L37913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37893-L37913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37893-L37913) · [Before (L15155-L15167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15155-L15167)

```diff
-           function tz(vv, zv) {
-             return `Caught Mob ${vv.replaceAll(" ","_")} ${iv(zv)}`
-           }
-           const qz = {
-             Deer: "A Doe Through The Green",
-             Cow: "Stampede",
-             Sheep: "Grant Wool",
-             Pig: "Unforgotten Pig",
-             Horse: "Sunbathed Gallope",
-             Camel: "Hump Day",
-             Wolf: "Dreaming Canine",
-             Wildcat: "Whiskers"
-           };
+           function KT(TT, kT, cT) {
+             let KT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+             const OT = (0, lT.useRef)(cT);
+             if (TT && void 0 === kT) throw new Error("when using pointer lock, forcePointerUnlock must also be set");
+             (0, lT.useEffect)((() => () => {
+               (0, MT.o)(cT)
+             }), [cT]), (0, lT.useEffect)((() => {
+               console.assert(OT.current === cT, "Cannot change name passed to useTogglePointerLock"), OT.current = cT, TT && (kT ? (0, MT.p)(cT, {
+                 keepsMovement: KT
+               }) : (0, MT.o)(cT))
+             }), [TT, kT, cT, KT])
+           }
+         },
+         3485: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => OT,
+ ... (5 more added lines; see GitHub link above)
```

#### 932. `bundles/bloxd.io/main.js` (Changed code · before: `L15170` → after: `L37916-L37930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37916-L37930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37916-L37930) · [Before (L15170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15170)

```diff
-             return qz[vv] ? qz[vv] : `${vv} Painting`
+             const kT = (0, lT.useRef)(null),
+               cT = (0, lT.useRef)(TT);
+             cT.current = TT;
+             const MT = (0, lT.useCallback)((() => {
+                 null !== kT.current && (clearTimeout(kT.current), kT.current = null)
+               }), []),
+               OT = (0, lT.useCallback)((() => {
+                 MT(), kT.current = setTimeout((() => {
+                   kT.current = null, cT.current()
+                 }), KT)
+               }), [MT]);
+             return (0, lT.useEffect)((() => MT), [MT]), {
+               start: OT,
+               cancel: MT
+             }
```

#### 933. `bundles/bloxd.io/main.js` (Changed code · before: `L15175-L15189` → after: `L37933-L37936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37933-L37936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37933-L37936) · [Before (L15175-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15175-L15189)

```diff
-           function Az(vv, zv, Pv) {
-             const hv = [
-               ["second", 60],
-               ["minute", 60],
-               ["hour", 24],
-               ["day", 1 / 0]
-             ];
-             let Sv = Math.max(0, (Pv - zv) / 1e3),
-               ev = 0;
-             for (; Sv >= hv[ev][1];) Sv /= hv[ev][1], ev++;
-             return new Intl.NumberFormat(vv, {
-               style: "unit",
-               unit: hv[ev][0],
-               unitDisplay: "long"
-             }).format(Math.round(Sv))
+           function yT(TT) {
+             return OT((() => {
+               for (const kT of TT)(0, MT.f)(kT)
+             }))
```

#### 934. `bundles/bloxd.io/main.js` (Changed code · before: `L15193` → after: `L37950-L37999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37950-L37999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37950-L37999) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15193)

```diff
-             return !!dv.m.includes(zv) && !dv.h[zv].requiresRanks.some((zv => !vv.includes(zv)))
+             const [cT, fT] = (0, lT.useState)(!1), [xT, IT] = (0, lT.useState)(null), AT = (0, lT.useRef)(!1);
+             return {
+               purchasing: cT,
+               outcome: xT,
+               purchase: async function(lT, xT) {
+                 if (cT || AT.current) return;
+                 AT.current = !0;
+                 const CT = await (0, yT.c)(lT, xT);
+                 if (AT.current = !1, !CT) return;
+                 fT(!0), IT(null);
+                 const jT = await MT.e.purchase(lT, xT);
+                 if (fT(!1), null === jT && (null === kT || void 0 === kT || kT(xT)), null === jT && null === xT) return await (0, OT.flushClientAnalyticsEvents)(), void(0, KT.refreshWithoutConfirmation)(TT);
+                 IT({
+                   translationKey: null !== jT && void 0 !== jT ? jT : "homePage:premiumCurrencyGiftSent",
+                   failed: null !== jT,
+                   giftRecipient: xT
+ ... (34 more added lines; see GitHub link above)
```

#### 935. `bundles/bloxd.io/main.js` (Changed code · before: `L15197-L15198` → after: `L38013-L38016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38013-L38016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38013-L38016) · [Before (L15197-L15198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15197-L15198)

```diff
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-             return "gems" === (null === vv || void 0 === vv ? void 0 : vv.source) ? Math.max(0, vv.until - zv) : 0
+             var kT;
+             return Array.isArray(TT) ? [...TT] : "object" !== typeof TT || (0, MT.R)(TT) || "Object" !== (null === (kT = TT.constructor) || void 0 === kT ? void 0 : kT.name) ? TT : {
+               ...TT
+             }
```

#### 936. `bundles/bloxd.io/main.js` (Changed code · before: `L15202-L15208` → after: `L38020-L38030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38020-L38030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38020-L38030) · [Before (L15202-L15208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15202-L15208)

```diff
-             let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
-             return "gems" === (null === zv || void 0 === zv ? void 0 : zv.source) && zv.until > Pv ? Az(vv, Pv, zv.until) : ""
-           }
- 
-           function yz(vv) {
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-             return "subscription" === (null === vv || void 0 === vv ? void 0 : vv.source) && vv.until > zv
+             const cT = (0, lT.useRef)(kT);
+             (0, lT.useLayoutEffect)((() => {
+               cT.current = kT
+             })), (0, lT.useEffect)((() => {
+               const kT = KT.k.subscribe(TT, (TT => {
+                 cT.current(OT(TT))
+               }));
+               return () => {
+                 KT.k.unsubscribe(kT)
+               }
+             }), [TT])
```

#### 937. `bundles/bloxd.io/main.js` (Changed code · before: `L15212-L15235` → after: `L38034-L38044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38034-L38044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38034-L38044) · [Before (L15212-L15235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15212-L15235)

```diff
-             return zv in dv.s && (zv === dv.d || vv.includes("super"))
-           }! function(vv) {
-             vv.TWO_PI = 2 * Math.PI;
-             const zv = vv.HALF_PI = Math.PI / 2,
-               Pv = {
-                 min: 0,
-                 max: 2 * Math.PI
-               },
-               hv = {
-                 min: 0,
-                 max: 0
-               };
- 
-             function Sv(vv, zv) {
-               return vv > 0 && vv < zv ? vv : (vv % zv + zv) % zv
-             }
- ... (8 more removed lines; see GitHub link above)
+             const [cT, MT] = (0, lT.useState)(kT);
+             return yT(TT, (TT => {
+               MT(TT)
+             })), cT
+           }
+         },
+         4552: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => MT
+           });
+           var lT = cT(71);
```

#### 938. `bundles/bloxd.io/main.js` (Changed code · before: `L15237-L15295` → after: `L38046-L38061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38046-L38061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38046-L38061) · [Before (L15237-L15295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15237-L15295)

```diff
-             function pv(vv, zv, Pv) {
-               hv.min = vv, hv.max = "excludeMax" === Pv ? zv : zv + 1;
-               const Sv = gv(hv);
-               return Math.floor(Sv)
-             }
-             vv.mod = Sv, vv.clamp = function(vv, zv, Pv) {
-               return Math.min(Math.max(vv, zv), Pv)
-             }, vv.clampAbs = function(vv, zv) {
-               return Math.min(Math.max(vv, -zv), zv)
-             }, vv.initPseudoNoiseGenerator = function(vv, zv) {
-               const Pv = Math.random(),
-                 hv = 2 * Math.PI * Math.random(),
-                 Sv = Math.random(),
-                 ev = hv + 2 * Math.PI * Math.random();
-               return gv => {
-                 const pv = Math.sin(vv * Pv * gv + hv) + Math.cos(vv * Sv * gv + ev);
- ... (43 more removed lines; see GitHub link above)
+           function MT(TT, kT, cT) {
+             const [MT, KT] = (0, lT.useState)(!1), [OT, yT] = (0, lT.useState)(!1);
+             return (0, lT.useLayoutEffect)((() => {
+               const cT = TT.current;
+               if (null === cT) return;
+               const lT = () => {
+                   const TT = "x" === kT ? cT.scrollLeft : cT.scrollTop,
+                     lT = "x" === kT ? cT.scrollWidth - cT.clientWidth : cT.scrollHeight - cT.clientHeight;
+                   KT(TT > 1), yT(TT < lT - 1)
+                 },
+                 MT = new ResizeObserver(lT);
+               for (const TT of [cT, ...cT.children]) MT.observe(TT);
+               return cT.addEventListener("scroll", lT, {
+                 passive: !0
+               }), () => {
+                 MT.disconnect(), cT.removeEventListener("scroll", lT)
```

#### 939. `bundles/bloxd.io/main.js` (Changed code · before: `L15297-L15304` → after: `L38063-L38065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38063-L38065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38063-L38065) · [Before (L15297-L15304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15297-L15304)

```diff
-             }, vv.eulerYXZFromQuaternion = function(vv) {
-               const {
-                 x: zv,
-                 y: Pv,
-                 z: hv,
-                 w: Sv
-               } = vv, ev = 1 - 2 * (Pv * Pv + hv * hv), gv = 2 * (zv * hv + Pv * Sv), pv = 2 * (zv * Pv + hv * Sv), dv = 1 - 2 * (zv * zv + hv * hv), Nv = 2 * (Pv * hv - zv * Sv), lv = 2 * (zv * hv - Pv * Sv), Tv = 1 - 2 * (zv * zv + Pv * Pv), Wv = Math.asin(-Zz.clampAbs(Nv, 1));
-               return Math.abs(Nv) < .9999999 ? [Wv, Math.atan2(gv, Tv), Math.atan2(pv, dv)] : [Wv, Math.atan2(-lv, ev), 0]
+             }), [TT, kT, cT]), {
+               before: MT,
+               after: OT
```

#### 940. `bundles/bloxd.io/main.js` (Changed code · before: `L15306-L15374` → after: `L38067-L38075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38067-L38075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38067-L38075) · [Before (L15306-L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15306-L15374)

```diff
-           }(Zz || (Zz = {}));
-           Nv.k.CHAT_MSG, Nv.k.CHAT_MSG, Nv.k.PLAYER_JOIN, Nv.k.PLAYER_REPORT, Nv.k.PLAYER_NAME_CHANGE, Nv.k.ADMIN_ACTIVITY, Nv.k.MODERATION, Nv.k.LOBBY_INFO, Nv.k.TRIBE_NAME, Nv.k.TRIBE_INFO, Nv.k.FACTION_NAME, Nv.k.FACTION_INFO, Nv.k.NAME_TAG, Nv.k.BOOK, Nv.k.BOARD, Nv.k.MULTI_L … [truncated]
-           const Jz = {
-               serverUiText: "#cef3ff",
-               goldUiText: "#f5d142",
-               redUiText: "#ff9d87",
-               blueUiText: "#2671d7",
-               greenUiText: "#2eeb82",
-               yellowUiText: "#f3f351",
-               cyanUiText: "#4feded",
-               whiteUiText: "#e7e7e7",
-               pinkUiText: "#e74de7",
-               grayUiText: "#c7c7c7",
-               blackUiText: "#000000",
-               orangeUiText: "#e19835",
-               lilacUiText: "#ce91ce",
- ... (53 more removed lines; see GitHub link above)
+           }
+         },
+         2120: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => yT
+           });
+           var lT = cT(1122),
+             MT = cT(118);
+           const KT = 900;
```

#### 941. `bundles/bloxd.io/main.js` (Changed code · before: `L15376-L15379` → after: `L38077-L38078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38077-L38078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38077-L38078) · [Before (L15376-L15379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15376-L15379)

```diff
-           function oz(vv) {
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0, 0];
-             const Pv = parseInt(vv.substring(1), 16);
-             return ev().set(zv, Pv >> 16, Pv >> 8 & 255, 255 & Pv)
+           function OT(TT, kT) {
+             return TT > kT && TT >= KT
```

#### 942. `bundles/bloxd.io/main.js` (Changed code · before: `L15382-L15384` → after: `L38081-L38082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38081-L38082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38081-L38082) · [Before (L15382-L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15382-L15384)

```diff
-           function bz(vv) {
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0, 0];
-             return oz(vv, zv), ev().scale(zv, zv, 1 / 255)
+           function yT() {
+             return (0, lT.i)(OT) && MT.featureFlags.useSocialFeatures
```

#### 943. `bundles/bloxd.io/main.js` (Changed code · before: `L15386-L15387` → after: `L38084-L38095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38084-L38095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38084-L38095) · [Before (L15386-L15387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15386-L15387)

```diff
-           const rz = {
-             Green: "Lime"
+         },
+         1130: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => jT
+           });
+           var lT = cT(71),
+             MT = cT(94),
+             KT = cT(36),
+             OT = cT(1136);
+           let yT = {
+             userContext: OT.NULL_USER_CONTEXT,
+             isUserContextUpdating: !0
```

#### 944. `bundles/bloxd.io/main.js` (Changed code · before: `L15391-L15392` → after: `L38103-L38105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38103-L38105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38103-L38105) · [Before (L15391-L15392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15391-L15392)

```diff
-             var zv;
-             return null !== (zv = rz[vv]) && void 0 !== zv ? zv : vv
+             yT = TT, (0, MT.unstable_batchedUpdates)((() => {
+               for (const kT of fT) kT(TT)
+             }))
```

#### 945. `bundles/bloxd.io/main.js` (Changed code · before: `L15411-L15412` → after: `L38108-L38134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38108-L38134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38108-L38134) · [Before (L15411-L15412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15411-L15412)

```diff
-           function vP(vv) {
-             return uz["Tier 5"] / (uz[vv] || uz["Tier 1"])
+           function jT() {
+             const [TT, kT] = (0, lT.useState)(yT);
+             return (0, lT.useEffect)((() => (xT || (xT = !0, KT.k.subscribe("userContextUpdated", (TT => {
+               IT++, CT({
+                 userContext: TT,
+                 isUserContextUpdating: TT === OT.NULL_USER_CONTEXT
+               })
+             })), KT.k.subscribe("userContextIsUpdating", (() => {
+               IT++, yT.isUserContextUpdating || CT({
+                 ...yT,
+                 isUserContextUpdating: !0
+               })
+             }))), fT.add(kT), kT(yT), (yT.isUserContextUpdating || yT.userContext.hasExpired()) && function() {
+               const TT = IT;
+               AT !== TT && (AT = TT, OT.userContextManager.getCurrentUserContext().then((kT => {
+                 IT !== TT || kT === yT.userContext && !yT.isUserContextUpdating || CT({
+ ... (11 more added lines; see GitHub link above)
```

#### 946. `bundles/bloxd.io/main.js` (Changed code · before: `L15414-L15415` → after: `L38136-L38150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38136-L38150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38136-L38150) · [Before (L15414-L15415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15414-L15415)

```diff
-           const zP = 36e5,
-             PP = 24 * zP;
+         },
+         1122: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => vT,
+             f: () => IT,
+             h: () => AT,
+             i: () => tT
+           });
+           var lT = cT(71),
+             MT = cT(94);
+           const KT = 100,
+             OT = new Set;
+           let yT = null,
+             fT = !1,
+             xT = 0;
```

#### 947. `bundles/bloxd.io/main.js` (Changed code · before: `L15418` → after: `L38153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38153) · [Before (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15418)

```diff
-             return void 0 === zv ? vv : `${vv}_${zv}`
+             return kT > TT
```

#### 948. `bundles/bloxd.io/main.js` (Changed code · before: `L15421-L15422` → after: `L38156-L38157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38156-L38157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38156-L38157) · [Before (L15421-L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15421-L15422)

```diff
-           function SP(vv) {
-             return vv.split("_")[0]
+           function AT() {
+             return 0 === OT.size ? vT(IT) : fT
```

#### 949. `bundles/bloxd.io/main.js` (Changed code · before: `L15425-L15427` → after: `L38160-L38163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38160-L38163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38160-L38163) · [Before (L15425-L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15425-L15427)

```diff
-           function eP(vv) {
-             const zv = vv.split("_");
-             if (!(zv.length <= 1)) return zv.slice(1).join("_")
+           function CT() {
+             yT = null, fT = vT(IT), (0, MT.unstable_batchedUpdates)((() => {
+               for (const TT of OT) TT()
+             }))
```

#### 950. `bundles/bloxd.io/main.js` (Changed code · before: `L15431-L15433` → after: `L38166-L38169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38166-L38169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38166-L38169) · [Before (L15431-L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15431-L15433)

```diff
-           function pP(vv, zv) {
-             var Pv, hv, Sv, ev;
-             return null !== (Pv = null === vv || void 0 === vv || null === (hv = vv.attributes) || void 0 === hv || null === (Sv = hv.customAttributes) || void 0 === Sv || null === (ev = Sv.enchantments) || void 0 === ev ? void 0 : ev[zv]) && void 0 !== Pv ? Pv : null
+           function jT() {
+             null !== yT && clearTimeout(yT);
+             const TT = performance.now();
+             vT(IT) !== fT && (xT = TT + KT), TT < xT ? CT() : yT = setTimeout(CT, KT)
```

#### 951. `bundles/bloxd.io/main.js` (Changed code · before: `L15437-L15442` → after: `L38173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38173) · [Before (L15437-L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15437-L15442)

```diff
-             const zv = null === vv || void 0 === vv ? void 0 : vv.split(" ");
-             if (zv) {
-               const vv = zv[zv.length - 1];
-               if (lv.c.includes(vv)) return vv
-             }
-             return null
+             return TT(document.documentElement.clientWidth, document.documentElement.clientHeight)
```

#### 952. `bundles/bloxd.io/main.js` (Changed code · before: `L15446-L15518` → after: `L38177-L38186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38177-L38186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38177-L38186) · [Before (L15446-L15518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15446-L15518)

```diff
-             return pv.r - lv.c.length + lv.c.indexOf(vv)
-           }
- 
-           function lP(vv, zv, Pv, hv) {
-             let Sv = 0;
-             return zv > 0 && (Sv += zv), Pv > 0 && (Sv += .6), hv > 0 && (Sv += .9 * hv / 2), (vv + 5 * Sv ** .5) * (1 + .4 * Sv / (1 + Sv))
-           }
- 
-           function TP(vv, zv) {
-             const Pv = null !== vv && void 0 !== vv ? vv : 450;
-             return !zv || zv <= 0 ? Pv : Pv / 2 ** (zv / 5)
-           }! function(vv) {
-             vv.getQuickChargeMultiplier = function(vv) {
-               const zv = pP(vv, "Quick Charge");
-               return null === zv || zv <= 0 ? 1 : Math.max(1.2 ** -zv, .1)
-             }, vv.getArrowSpeedMultiplier = function(vv) {
- ... (57 more removed lines; see GitHub link above)
+             const [kT, cT] = (0, lT.useState)((() => vT(TT))), MT = (0, lT.useRef)(TT);
+             MT.current = TT;
+             const KT = (0, lT.useRef)(kT);
+             return KT.current = kT, (0, lT.useEffect)((() => {
+               const TT = () => {
+                 const TT = vT(MT.current);
+                 TT !== KT.current && (KT.current = TT, cT(TT))
+               };
+               return 0 === OT.size && (fT = vT(IT), xT = 0, window.addEventListener("resize", jT), window.addEventListener("orientationchange", jT)), OT.add(TT), TT(), () => {
+                 OT.delete(TT), 0 === OT.size && (window.removeEventListener("resize", jT), window.removeEventListener("orientationchange", jT))
```

#### 953. `bundles/bloxd.io/main.js` (Changed code · before: `L15520-L15521` → after: `L38188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38188) · [Before (L15520-L15521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15520-L15521)

```diff
-             }]);
-             var Pv
+             }), []), kT
```

#### 954. `bundles/bloxd.io/main.js` (Changed code · before: `L15524-L15529` → after: `L38201-L38208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38201-L38208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38201-L38208) · [Before (L15524-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15524-L15529)

```diff
-           function aP(vv, zv, Pv) {
-             const hv = !vv || "Empty Bottle" === zv;
-             return {
-               shouldModifySelectedSlot: hv,
-               shouldModifyEmptySlot: hv && 1 !== Pv
-             }
+           function OT() {
+             const TT = document.getElementById("GenericVideoInner");
+             if (null === TT) return;
+             const kT = TT.offsetWidth,
+               cT = TT.offsetHeight;
+             if (0 === kT || 0 === cT) return;
+             const lT = Math.min(window.innerWidth / kT, window.innerHeight / cT);
+             TT.style.transformOrigin = "center center", TT.style.transform = `scale(${lT})`
```

#### 955. `bundles/bloxd.io/main.js` (Changed code · before: `L15532-L15533` → after: `L38211-L38213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38211-L38213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38211-L38213) · [Before (L15532-L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15532-L15533)

```diff
-           function sP(vv, zv, Pv, hv) {
-             return vv && zv && !Pv && hv
+           function yT() {
+             const TT = document.getElementById("GenericVideoInner");
+             null !== TT && (TT.style.transform = "")
```

#### 956. `bundles/bloxd.io/main.js` (Changed code · before: `L15535` → after: `L38215-L38235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38215-L38235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38215-L38235) · [Before (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15535)

```diff
-           const CP = new WeakMap;
+           const fT = (0, MT.memo)((function() {
+             return (0, KT.jsxs)("div", {
+               className: "GenericVideoWrapper",
+               id: "GenericVideoWrapper",
+               style: {
+                 display: "none"
+               },
+               children: [(0, KT.jsx)(lT.d, {}), (0, KT.jsx)("div", {
+                 id: "GenericVideoInner",
+                 className: "GenericVideo"
+               })]
+             })
+           }))
+         },
+         2512: (TT, kT, cT) => {
+           cT.d(kT, {
+ ... (5 more added lines; see GitHub link above)
```

#### 957. `bundles/bloxd.io/main.js` (Changed code · before: `L15537-L15547` → after: `L38237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38237) · [Before (L15537-L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15537-L15547)

```diff
-           function iP(vv, zv, Pv) {
-             let hv;
-             hv = "getEngineStats" in vv ? vv.getEngineStats().blockMetadata : vv;
-             let Sv = CP.get(hv);
-             if (!Sv) {
-               const vv = new Set(Object.keys(hv).map((vv => hv[vv].id)));
-               vv.add(0), Sv = {
-                 blockIds: [...vv],
-                 maxBlockId: Math.max(...vv)
-               }, CP.set(hv, Sv)
-             }
+           function OT(TT) {
```

#### 958. `bundles/bloxd.io/main.js` (Changed code · before: `L15549-L15553` → after: `L38239-L38241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38239-L38241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38239-L38241) · [Before (L15549-L15553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15549-L15553)

```diff
-               blockIds: ev,
-               maxBlockId: gv
-             } = Sv, pv = new Pv(gv + 1);
-             for (const dv of ev) pv[dv] = Number(zv(dv));
-             return pv
+               lobbyName: kT
+             } = TT;
+             return KT.featureFlags.useSocialFeatures && !TT.replay && null !== kT && (0, lT.D)(kT) && (0, lT.u)(kT) === MT.c.STANDARD
```

#### 959. `bundles/bloxd.io/main.js` (Changed code · before: `L15555` → after: `L38243-L38244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38243-L38244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38243-L38244) · [Before (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15555)

```diff
-         }, , , , , , , , , (vv, zv, Pv) => {
+         },
+         2553: (TT, kT, cT) => {
```

#### 960. `bundles/bloxd.io/main.js` (Changed code · before: `L15557-L15562` → after: `L38246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38246) · [Before (L15557-L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15557-L15562)

```diff
-             c: () => dv,
-             d: () => gv,
-             h: () => ev,
-             j: () => Sv,
-             k: () => hv,
-             l: () => pv
+             c: () => OT
```

#### 961. `bundles/bloxd.io/main.js` (Changed code · before: `L15564-L15816` → after: `L38248-L38273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38248-L38273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38248-L38273) · [Before (L15564-L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15564-L15816)

```diff
-           const hv = ["Amethite", "Magmasteel", "Rubellite", "Serpentite"],
-             Sv = ["", " Fragment", " Pickaxe", " Axe", " Spade", " Sword", " Hoe", " Helmet", " Chestplate", " Leggings", " Boots", " Gauntlets", " Bow", " Crossbow", " Crossbow Charged", " Spear", " Dagger", " Boomerang", " Club", " Mace", " Whip"],
-             ev = hv.map((vv => `${vv} Boomerang`)),
-             gv = ["Cursemetal", "Kingly Amethite", "Kingly Diamond"],
-             pv = ["Sanguine", "Spectral", "Geo", "Astral"],
-             dv = ["Voltplate", "Nova", "Jet", "Nova Jet"]
-         }, , , , , , (vv, zv, Pv) => {
-           var hv = Pv(331);
-           vv.exports = {
-             EPSILON: Pv(333),
-             ZERO: hv(),
-             create: hv,
-             clone: Pv(339),
-             angle: Pv(345),
-             dv: Pv(352),
-             copy: Pv(374),
- ... (237 more removed lines; see GitHub link above)
+           var lT = cT(1099);
+           const MT = "M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C0 5.35042 0 10 0 10C0 10 0 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 … [truncated]
+             KT = "M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z";
+ 
+           function OT(TT) {
+             let {
+               variant: kT = "fullColour"
+             } = TT;
+             return (0, lT.jsxs)("svg", {
+               className: "YoutubeIcon",
+               viewBox: "0 0 28.57 20",
+               "aria-hidden": !0,
+               children: ["fullColour" === kT && (0, lT.jsxs)(lT.Fragment, {
+                 children: [(0, lT.jsx)("path", {
+                   d: MT,
+                   fill: "#FF0033"
+ ... (10 more added lines; see GitHub link above)
```

#### 962. `bundles/bloxd.io/main.js` (Changed code · before: `L15818-L15831` → after: `L38275-L38292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38275-L38292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38275-L38292) · [Before (L15818-L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15818-L15831)

```diff
-         }, , , , , , , vv => {
-           vv.exports = function(vv, zv, Pv) {
-             var hv = zv[0],
-               Sv = zv[1],
-               ev = zv[2],
-               gv = Pv[0],
-               pv = Pv[1],
-               dv = Pv[2],
-               Nv = Pv[3],
-               lv = Nv * hv + pv * ev - dv * Sv,
-               Tv = Nv * Sv + dv * hv - gv * ev,
-               Wv = Nv * ev + gv * Sv - pv * hv,
-               wv = -gv * hv - pv * Sv - dv * ev;
-             return vv[0] = lv * Nv + wv * -gv + Tv * -dv - Wv * -pv, vv[1] = Tv * Nv + wv * -pv + Wv * -gv - lv * -dv, vv[2] = Wv * Nv + wv * -dv + lv * -pv - Tv * -gv, vv
+         },
+         2778: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => lT
+           });
+           const lT = new class {
+             constructor() {
+               this.readers = new Map
+             }
+             register(TT, kT) {
+               return this.readers.set(TT, kT), () => {
+                 this.readers.get(TT) === kT && this.readers.delete(TT)
+               }
+             }
+             read(TT) {
+               const kT = this.readers.get(TT);
+ ... (2 more added lines; see GitHub link above)
```

#### 963. `bundles/bloxd.io/main.js` (Changed code · before: `L15833-L15841` → after: `L38294-L38338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38294-L38338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38294-L38338) · [Before (L15833-L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15833-L15841)

```diff
-         }, , vv => {
-           vv.exports = function(vv, zv, Pv, hv) {
-             var Sv = Pv[1],
-               ev = Pv[2],
-               gv = zv[1] - Sv,
-               pv = zv[2] - ev,
-               dv = Math.sin(hv),
-               Nv = Math.cos(hv);
-             return vv[0] = zv[0], vv[1] = Sv + gv * Nv - pv * dv, vv[2] = ev + gv * dv + pv * Nv, vv
+         },
+         3595: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => MT,
+             g: () => KT
+           });
+           var lT = cT(71);
+           const MT = new class {
+             constructor() {
+               this.mountedCounts = new Map, this.listeners = new Set
+             }
+             register(TT) {
+               var kT;
+               return this.mountedCounts.set(TT, (null !== (kT = this.mountedCounts.get(TT)) && void 0 !== kT ? kT : 0) + 1), this.notify(), () => {
+                 this.mountedCounts.set(TT, this.mountedCounts.get(TT) - 1), this.notify()
+               }
+ ... (29 more added lines; see GitHub link above)
```

#### 964. `bundles/bloxd.io/main.js` (Changed code · before: `L15843-L15851` → after: `L38340-L38360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38340-L38360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38340-L38360) · [Before (L15843-L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15843-L15851)

```diff
-         }, , , , , vv => {
-           vv.exports = function(vv, zv, Pv, hv) {
-             var Sv = Pv[0],
-               ev = Pv[2],
-               gv = zv[0] - Sv,
-               pv = zv[2] - ev,
-               dv = Math.sin(hv),
-               Nv = Math.cos(hv);
-             return vv[0] = Sv + pv * dv + gv * Nv, vv[1] = zv[1], vv[2] = ev + pv * Nv - gv * dv, vv
+         },
+         3519: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => KT,
+             f: () => MT,
+             h: () => yT,
+             l: () => OT
+           });
+           var lT = cT(31);
+           const MT = ["gameThumbnailDiscoverability", "storeCharacterCardFoil", "storeCharacterCardSpotlight"],
+             KT = {
+               gameThumbnailDiscoverability: "Thumbnail engagementScore",
+               storeCharacterCardFoil: "Store character cards: Foil design",
+               storeCharacterCardSpotlight: "Store character cards: Spotlight design"
+             };
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 965. `bundles/bloxd.io/main.js` (Changed code · before: `L15853-L15861` → after: `L38362-L38369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38362-L38369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38362-L38369) · [Before (L15853-L15861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15853-L15861)

```diff
-         }, , , , , , vv => {
-           vv.exports = function(vv, zv, Pv, hv) {
-             var Sv = Pv[0],
-               ev = Pv[1],
-               gv = zv[0] - Sv,
-               pv = zv[1] - ev,
-               dv = Math.sin(hv),
-               Nv = Math.cos(hv);
-             return vv[0] = Sv + gv * Nv - pv * dv, vv[1] = ev + gv * dv + pv * Nv, vv[2] = zv[2], vv
+ 
+           function yT(TT) {
+             const kT = {
+               ...lT.e.get("enabledDebugFeatures")
+             };
+             !0 === kT[TT] ? delete kT[TT] : kT[TT] = !0, lT.e.set({
+               enabledDebugFeatures: kT
+             })
```

#### 966. `bundles/bloxd.io/main.js` (Changed code · before: `L15863-L15873` → after: `L38371-L38372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38371-L38372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38371-L38372) · [Before (L15863-L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15863-L15873)

```diff
-         }, , , , , (vv, zv, Pv) => {
-           vv.exports = function(vv, zv, Pv, Sv, ev, gv) {
-             var pv, dv;
-             zv || (zv = 3);
-             Pv || (Pv = 0);
-             dv = Sv ? Math.min(Sv * zv + Pv, vv.length) : vv.length;
-             for (pv = Pv; pv < dv; pv += zv) hv[0] = vv[pv], hv[1] = vv[pv + 1], hv[2] = vv[pv + 2], ev(hv, hv, gv), vv[pv] = hv[0], vv[pv + 1] = hv[1], vv[pv + 2] = hv[2];
-             return vv
-           };
-           var hv = Pv(331)()
-         }, , , , , (vv, zv, Pv) => {
+         },
+         2501: (TT, kT, cT) => {
```

#### 967. `bundles/bloxd.io/main.js` (Changed code · before: `L15875` → after: `L38374-L38398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38374-L38398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38374-L38398) · [Before (L15875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15875)

```diff
-             e: () => hv
+             c: () => oT,
+             d: () => QT,
+             g: () => NT,
+             k: () => hT,
+             n: () => pT,
+             o: () => ST,
+             q: () => dT,
+             r: () => zT,
+             s: () => tT,
+             w: () => AT,
+             y: () => RT,
+             C: () => IT,
+             D: () => vT,
+             H: () => JT,
+             J: () => bT,
+             K: () => CT,
+ ... (9 more added lines; see GitHub link above)
```

#### 968. `bundles/bloxd.io/main.js` (Changed code · before: `L15877-L15879` → after: `L38400-L38816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38400-L38816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38400-L38816) · [Before (L15877-L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15877-L15879)

```diff
-           class hv {
-             constructor(vv, zv) {
-               this.keyToValueTable = vv, this.valueToKeyTable = void 0;
+           var lT = cT(71),
+             MT = cT(36),
+             KT = cT(1461),
+             OT = cT(47),
+             yT = cT(1117);
+           const fT = TT => "object" === typeof TT && null !== TT && !Array.isArray(TT);
+ 
+           function xT(TT) {
+             const kT = TT => {
+               if (Array.isArray(TT)) {
+                 const cT = TT.map(kT);
+                 return cT.every((TT => "string" === typeof TT)) ? [...cT].sort() : cT
+               }
+               return fT(TT) ? Object.fromEntries(Object.keys(TT).sort().map((cT => [cT, kT(TT[cT])]))) : TT
+             };
+             return JSON.stringify(kT(TT))
+ ... (401 more added lines; see GitHub link above)
```

#### 969. `bundles/bloxd.io/main.js` (Changed code · before: `L15881-L15884` → after: `L38818-L38840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38818-L38840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38818-L38840) · [Before (L15881-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15881-L15884)

```diff
-               for (const hv in this.keyToValueTable) {
-                 const vv = this.keyToValueTable[hv];
-                 if (void 0 !== Pv[vv]) throw new Error(`Duplicate value found in bi-directional table: ${String(vv)}`);
-                 Pv[vv] = "string" === zv ? hv : Number(hv)
+               return null !== AT && rT.forEach(((TT, kT) => {
+                 const cT = AT[kT];
+                 null !== cT && (ST[TT] = `min(${cT}px, ${100*NT}${kT%2===0?"vh":"vw"})`)
+               })), {
+                 elementVars: hT,
+                 safeVars: ST,
+                 classes: QT
+               }
+             },
+             zT = (TT, kT, cT) => {
+               let lT = !1;
+               for (const MT of kT) {
+                 const kT = cT[MT];
+                 TT.style.getPropertyValue(MT) !== (null !== kT && void 0 !== kT ? kT : "") && (lT = !0, void 0 === kT ? TT.style.removeProperty(MT) : TT.style.setProperty(MT, kT))
+               }
+               return lT
+ ... (7 more added lines; see GitHub link above)
```

#### 970. `bundles/bloxd.io/main.js` (Changed code · before: `L15886` → after: `L38842-L38889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38842-L38889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38842-L38889) · [Before (L15886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15886)

```diff
-               this.valueToKeyTable = Pv
+               return cT
+             }
+         },
+         2504: (TT, kT, cT) => {
+           cT.d(kT, {
+             A: () => hT,
+             B: () => jT,
+             D: () => KT,
+             H: () => fT,
+             e: () => vT,
+             i: () => tT,
+             l: () => IT,
+             p: () => AT,
+             q: () => MT,
+             t: () => CT,
+             v: () => yT,
+ ... (32 more added lines; see GitHub link above)
```

#### 971. `bundles/bloxd.io/main.js` (Changed code · before: `L15888-L15889` → after: `L38891-L38905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38891-L38905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38891-L38905) · [Before (L15888-L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15888-L15889)

```diff
-             get(vv) {
-               return this.keyToValueTable[vv]
+           }
+ 
+           function xT(TT, kT, cT) {
+             return cT && MT.has(TT) && OT(TT, kT.hudElements[TT])
+           }
+           const IT = ".TopRightIcons",
+             AT = "Gone";
+ 
+           function CT(TT) {
+             const {
+               minWidth: kT,
+               minHeight: cT
+             } = TT.style;
+             return TT.style.minWidth = "", TT.style.minHeight = "", () => {
+               TT.style.minWidth = kT, TT.style.minHeight = cT
```

#### 972. `bundles/bloxd.io/main.js` (Changed code · before: `L15891-L15892` → after: `L38907-L38917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38907-L38917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38907-L38917) · [Before (L15891-L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15891-L15892)

```diff
-             reverseGet(vv) {
-               return this.valueToKeyTable[vv]
+           }
+ 
+           function jT(TT, kT, cT) {
+             const lT = TT.style;
+             let MT = "",
+               KT = "";
+             if (kT) {
+               CT(TT);
+               const kT = cT(),
+                 lT = TT.getBoundingClientRect();
+               kT(), MT = `${lT.width}px`, KT = `${lT.height}px`
```

#### 973. `bundles/bloxd.io/main.js` (Changed code · before: `L15895` → after: `L38946-L38947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38946-L38947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38946-L38947) · [Before (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15895)

```diff
-         }, , , , (vv, zv, Pv) => {
+         },
+         4396: (TT, kT, cT) => {
```

#### 974. `bundles/bloxd.io/main.js` (Changed code · before: `L15897-L15900` → after: `L38949-L38951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38949-L38951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38949-L38951) · [Before (L15897-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15897-L15900)

```diff
-             d: () => Wv,
-             e: () => dv,
-             h: () => lv,
-             j: () => pv,
+             c: () => OT,
+             g: () => yT,
+             k: () => KT,
```

#### 975. `bundles/bloxd.io/main.js` (Changed code · before: `L15902-L15904` → after: `L38953-L38954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38953-L38954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38953-L38954) · [Before (L15902-L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15902-L15904)

```diff
-             o: () => gv,
-             s: () => wv,
-             w: () => hv
+             p: () => lT,
+             q: () => fT
```

#### 976. `bundles/bloxd.io/main.js` (Changed code · before: `L15906-L15908` → after: `L38956-L38960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38956-L38960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38956-L38960) · [Before (L15906-L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15906-L15908)

```diff
-           const hv = ["developer", "admin", "super", "youtuber", "creatorLevel1", "creatorLevel2", "creatorLevel3"],
-             Sv = ["creatorLevel1", "creatorLevel2", "creatorLevel3"];
-           const ev = new Set(["developer", "youtuber", ...Sv]);
+           const lT = 50,
+             MT = 30,
+             KT = 90,
+             OT = 100,
+             yT = 135;
```

#### 977. `bundles/bloxd.io/main.js` (Changed code · before: `L15911` → after: `L38963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38963) · [Before (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15911)

```diff
-             return vv.some((vv => ev.has(vv)))
+             return "fixed_shown" === TT || "fixed_hidden" === TT
```

#### 978. `bundles/bloxd.io/main.js` (Changed code · before: `L15913-L16030` → after: `L38965-L39018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R38965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L38965-L39018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L38965-L39018) · [Before (L15913-L16030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15913-L16030)

```diff
-           const pv = {
-               developer: {
-                 icon: "wrench",
-                 mainRGB: "#a4a4a4",
-                 bracketRGB: "#cef3ff",
-                 chatTag: [{
-                   str: "Dev",
-                   strRGB: "#cef3ff"
-                 }],
-                 nameTag: {
-                   iconShadowRGB: "#838383"
-                 },
-                 visible: !0
-               },
-               admin: {
-                 icon: "person-military-pointing",
- ... (102 more removed lines; see GitHub link above)
+         },
+         4403: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => CT,
+             d: () => AT
+           });
+           var lT = cT(36),
+             MT = cT(3348),
+             KT = cT(2501),
+             OT = cT(2526);
+           const yT = "--touch-key-size",
+             fT = [
+               [".TouchSlotJ", "jump", 5],
+               [".TouchSlotC", "crouch", 5],
+               [".TouchSlotU", "use", 5],
+               [".TouchSlotX", "extra", 5],
+ ... (38 more added lines; see GitHub link above)
```

#### 979. `bundles/bloxd.io/main.js` (Changed code · before: `L16032-L16033` → after: `L39020-L39045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39020-L39045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39020-L39045) · [Before (L16032-L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16032-L16033)

```diff
-               creator_level3: {
-                 requiresRanks: ["super", "creatorLevel3"]
+               fT = new ResizeObserver(cT);
+             cT(), window.addEventListener("resize", cT);
+             const IT = [(0, lT.m)(MT.c, cT), (0, lT.m)(OT.c, cT)];
+             return () => {
+               fT.disconnect(), window.removeEventListener("resize", cT);
+               for (const TT of IT) TT();
+               TT.style.removeProperty(yT)
+             }
+           }
+         },
+         2521: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => OT,
+             c: () => KT
+           });
+           var lT = cT(71),
+ ... (10 more added lines; see GitHub link above)
```

#### 980. `bundles/bloxd.io/main.js` (Changed code · before: `L16035-L16056` → after: `L39047-L39054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39047-L39054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39047-L39054) · [Before (L16035-L16056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16035-L16056)

```diff
-             },
-             Tv = {
-               creatorLevel1: "creator_level1",
-               creatorLevel2: "creator_level2",
-               creatorLevel3: "creator_level3"
-             };
-           new Set(Object.values(Tv));
-           const Wv = "default",
-             wv = {
-               [Wv]: "#dff8ff",
-               yellow: "#ffff66",
-               lime: "#b3ff66",
-               green: "#66ff66",
-               aqua: "#66ffb3",
-               cyan: "#66ffff",
-               blue: "#66bcff",
- ... (6 more removed lines; see GitHub link above)
+             }), []), TT
+           }
+ 
+           function OT() {
+             return (0, MT.W)().hudLayouts[KT()]
+           }
+         },
+         1095: (TT, kT, cT) => {
```

#### 981. `bundles/bloxd.io/main.js` (Changed code · before: `L16083-L16085` → after: `L39063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39063) · [Before (L16083-L16085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16083-L16085)

```diff
-             u: () => wv,
-             v: () => av,
-             y: () => dv
+             s: () => jT
```

#### 982. `bundles/bloxd.io/main.js` (Changed code · before: `L16087-L16176` → after: `L39065-L39133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39065-L39133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39065-L39133) · [Before (L16087-L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16087-L16176)

```diff
-           const hv = ["Iron Goofy Golem", "Gold Goofy Golem", "Diamond Goofy Golem", "Moonstone Goofy Golem"],
-             Sv = ["Pig", "Cow", "Sheep", "Horse", "Camel", ...hv],
-             ev = ["Deer"],
-             gv = ["Bear", "Stag", "Gold Watermelon Stag", "Gorilla"],
-             pv = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem", "Draugr Warper", "Frost Wraith", "Draugr Reaver", "Stalker", "Crone", "Iron Guardian", "Gold Guardian", "Diamond … [truncated]
-             dv = [...Sv, ...ev, "Slime", "Wolf", "Wildcat", "Spirit Golem", "Spirit Wolf", "Spirit Bear", "Spirit Stag", "Spirit Gorilla", ...gv, ...pv],
-             Nv = [...dv, "NPC", "67", "Bobino Musculino", "Capitano Explovissimo", "Desert Fennec", "Armour Collector", "Furnace Knight", "Lil Knight", "Glass Gremlin", "Glass Bro", "Lord Vulcan", "Zombie", "Skeleton", "Mummy", "Scorpion", "Vulcanite", "Evil Tome", "Magma Toad"],
-             lv = ["Gold Watermelon Stag", ...hv],
-             Tv = (new Set(pv), new Set([...pv, ...gv])),
-             Wv = ["default", "flaking", "patchy", "shedding", "bare", "stone"],
-             wv = {
-               Pig: ["default"],
-               Cow: ["default", "cream"],
-               Sheep: ["default", "black", "red", "orange", "pink", "purple", "yellow", "blue", "brown", "cyan", "gray", "green", "lightBlue", "lightGray", "lime", "magenta"],
-               Horse: ["default", "black", "brown", "cream"],
-               Camel: ["default", "brown"],
- ... (74 more removed lines; see GitHub link above)
+           const lT = {
+             solid: () => Promise.all([cT.e(135), cT.e(37)]).then((() => cT(6690))).then((TT => TT.solidIcons)),
+             regular: () => cT.e(36).then((() => cT(7977))).then((TT => TT.regularIcons)),
+             duotone: () => cT.e(35).then((() => cT(8011))).then((TT => TT.duotoneIcons)),
+             brands: () => cT.e(34).then((() => cT(8031))).then((TT => TT.brandsIcons))
+           };
+           var MT = cT(1082);
+           const KT = new Map,
+             OT = new Map,
+             yT = 1e4,
+             fT = 3,
+             xT = new Map,
+             IT = new Set;
+ 
+           function AT(TT) {
+             return IT.add(TT), () => {
+ ... (53 more added lines; see GitHub link above)
```

#### 983. `bundles/bloxd.io/main.js` (Changed code · before: `L16178-L16187` → after: `L39135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39135) · [Before (L16178-L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16178-L16187)

```diff
-             A: () => Nv,
-             D: () => Gv,
-             L: () => jv,
-             N: () => dv,
-             R: () => fv,
-             V: () => Fv,
-             Y: () => Wv,
-             _: () => sv,
-             ab: () => av,
-             eb: () => iv,
+             e: () => KT.g,
```

#### 984. `bundles/bloxd.io/main.js` (Changed code · before: `L16189-L16191` → after: `L39137-L39138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39137-L39138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39137-L39138) · [Before (L16189-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16189-L16191)

```diff
-             ib: () => cv,
-             k: () => Sv,
-             kb: () => Cv,
+             g: () => KT.k,
+             j: () => KT.n,
```

#### 985. `bundles/bloxd.io/main.js` (Changed code · before: `L16193-L16195` → after: `L39140-L39274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39140-L39274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39140-L39274) · [Before (L16193-L16195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16193-L16195)

```diff
-             p: () => pv,
-             r: () => gv,
-             x: () => wv
+             n: () => KT.o,
+             o: () => CT,
+             s: () => KT.q
+           });
+           var lT = cT(94),
+             MT = cT(1082),
+             KT = cT(1095);
+           (0, KT.s)(lT.unstable_batchedUpdates);
+           const OT = {
+             "fa-solid": "solid",
+             fas: "solid",
+             "fa-regular": "regular",
+             far: "regular",
+             "fa-duotone": "duotone",
+             fad: "duotone",
+             "fa-brands": "brands",
+ ... (119 more added lines; see GitHub link above)
```

#### 986. `bundles/bloxd.io/main.js` (Changed code · before: `L16197-L16201` → after: `L39276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39276) · [Before (L16197-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16197-L16201)

```diff
-           var hv = Pv(628);
-           const Sv = 36,
-             ev = 10,
-             gv = 51,
-             pv = 46;
+           var lT = cT(71);
```

#### 987. `bundles/bloxd.io/main.js` (Changed code · before: `L16204` → after: `L39279-L39280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39279-L39280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39279-L39280) · [Before (L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16204)

```diff
-             return void 0 === vv || null === vv
+             const kT = TT();
+             return "function" === typeof kT ? kT : () => {}
```

#### 988. `bundles/bloxd.io/main.js` (Changed code · before: `L16206-L16208` → after: `L39282-L39287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39282-L39287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39282-L39287) · [Before (L16206-L16208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16206-L16208)

```diff
-           const Nv = 32,
-             lv = 0 | Math.log2(Nv),
-             Tv = Nv - 1 | 0;
+           const KT = {
+               inGameUi: !1,
+               shown: !0,
+               whenShown: MT
+             },
+             OT = (0, lT.createContext)(KT);
```

#### 989. `bundles/bloxd.io/main.js` (Changed code · before: `L16210-L16211` → after: `L39289-L39316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39289-L39316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39289-L39316) · [Before (L16210-L16211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16210-L16211)

```diff
-           function Wv(vv) {
-             return vv >> lv
+           function yT() {
+             return (0, lT.useContext)(OT)
+           }
+           class fT {
+             constructor(TT) {
+               this.isShown = TT, this.inGameUi = !0, this.waiting = new Set
+             }
+             get shown() {
+               return this.isShown
+             }
+             whenShown(TT) {
+               if (this.isShown) return MT(TT);
+               let kT = null;
+               const cT = () => {
+                 kT = MT(TT)
+               };
+ ... (12 more added lines; see GitHub link above)
```

#### 990. `bundles/bloxd.io/main.js` (Changed code · before: `L16215` → after: `L39320-L39327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39320-L39327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39320-L39327) · [Before (L16215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16215)

```diff
-             return vv << lv
+             let {
+               children: kT
+             } = TT;
+             const cT = yT(),
+               [MT, KT] = (0, lT.useState)(cT.shown);
+             return (0, lT.useEffect)((() => cT.whenShown((() => {
+               KT(!0)
+             }))), [cT]), MT ? (0, lT.createElement)(lT.Fragment, null, kT) : null
```

#### 991. `bundles/bloxd.io/main.js` (Changed code · before: `L16219` → after: `L39342-L39343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39342-L39343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39342-L39343) · [Before (L16219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16219)

```diff
-             return [vv[0] >> lv, vv[1] >> lv, vv[2] >> lv]
+             const kT = null === TT ? NaN : Number(TT);
+             return Number.isInteger(kT) && kT >= 1 ? kT : 1
```

#### 992. `bundles/bloxd.io/main.js` (Changed code · before: `L16222-L16223` → after: `L39346-L39347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39346-L39347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39346-L39347) · [Before (L16222-L16223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16222-L16223)

```diff
-           function sv(vv) {
-             return vv & Tv
+           function OT(TT, kT) {
+             yT(TT, MT, 1 === kT ? null : String(kT))
```

#### 993. `bundles/bloxd.io/main.js` (Changed code · before: `L16226-L16227` → after: `L39350-L39351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39350-L39351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39350-L39351) · [Before (L16226-L16227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16226-L16227)

```diff
-           function Cv(vv) {
-             return [vv[0] & Tv, vv[1] & Tv, vv[2] & Tv]
+           function yT(TT, kT, cT) {
+             null === cT ? TT.delete(kT) : TT.set(kT, cT)
```

#### 994. `bundles/bloxd.io/main.js` (Changed code · before: `L16230-L16231` → after: `L39354-L39396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39354-L39396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39354-L39396) · [Before (L16230-L16231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16230-L16231)

```diff
-           function iv(vv) {
-             return `${Wv(vv[0])}|${Wv(vv[1])}|${Wv(vv[2])}`
+           function fT() {
+             const [TT, kT] = (0, lT.k)();
+             return [TT, function(TT) {
+               kT((kT => {
+                 const cT = new URLSearchParams(kT);
+                 return TT(cT), cT
+               }), {
+                 replace: !0
+               })
+             }]
+           }
+         },
+         3371: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => jT,
+             g: () => CT,
+ ... (27 more added lines; see GitHub link above)
```

#### 995. `bundles/bloxd.io/main.js` (Changed code · before: `L16234-L16235` → after: `L39399-L39404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39399-L39404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39399-L39404) · [Before (L16234-L16235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16234-L16235)

```diff
-           function cv(vv, zv, Pv) {
-             return [0 | Math.floor(vv / Nv), 0 | Math.floor(zv / Nv), 0 | Math.floor(Pv / Nv)]
+           function CT() {
+             var TT;
+             let kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/";
+             null === (TT = IT) || void 0 === TT || TT.abortController.abort(), yT.gameBridge.send("leaveGame", {
+               reloadPath: kT
+             })
```

#### 996. `bundles/bloxd.io/main.js` (Changed code · before: `L16238-L16239` → after: `L39407-L39410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39407-L39410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39407-L39410) · [Before (L16238-L16239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16238-L16239)

```diff
-           function Gv(vv) {
-             return JSON.stringify(vv)
+           function jT() {
+             yT.gameBridge.latest("connectedGame").replay || yT.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, xT.navigateToHomePage)()
```

#### 997. `bundles/bloxd.io/main.js` (Changed code · before: `L16243-L16244` → after: `L39413-L39418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39413-L39418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39413-L39418) · [Before (L16243-L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16243-L16244)

```diff
-           function jv(vv) {
-             return vv === mv ? mv : vv
+           function vT() {
+             (0, lT.useEffect)((() => () => {
+               CT(null), (0, fT.e)(), OT.e.set({
+                 gameState: "landingPage"
+               })
+             }), [])
```

#### 998. `bundles/bloxd.io/main.js` (Changed code · before: `L16246-L16252` → after: `L39420-L39448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39420-L39448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39420-L39448) · [Before (L16246-L16252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16246-L16252)

```diff
-           const fv = hv.c * Number(atob("NQ==")) + Number(atob("MTM="));
-           async function Fv(vv) {
-             return new Promise((zv => {
-               setTimeout((() => {
-                 zv()
-               }), vv)
-             }))
+ 
+           function tT() {
+             const TT = (0, lT.useRef)(!1),
+               kT = (0, lT.useCallback)((kT => {
+                 let {
+                   currentLocation: cT,
+                   nextLocation: lT,
+                   historyAction: KT
+                 } = kT;
+                 return !(cT.pathname === lT.pathname && cT.search === lT.search || !yT.gameBridge.latest("connectedGame").replay) && (TT.current = KT === MT.f.Pop, !0)
+               }), []),
+               cT = (0, KT.o)(kT);
+             (0, lT.useEffect)((() => {
+               if ("blocked" !== cT.state) return;
+               const {
+                 pathname: kT,
+ ... (13 more added lines; see GitHub link above)
```

#### 999. `bundles/bloxd.io/main.js` (Changed code · before: `L16254` → after: `L39450-L39451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39450-L39451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39450-L39451) · [Before (L16254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16254)

```diff
-         }, , (vv, zv, Pv) => {
+         },
+         3336: (TT, kT, cT) => {
```

#### 1000. `bundles/bloxd.io/main.js` (Changed code · before: `L16256` → after: `L39453-L39455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39453-L39455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39453-L39455) · [Before (L16256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16256)

```diff
-             c: () => hv
+             c: () => OT,
+             g: () => fT,
+             k: () => KT
```

#### 1001. `bundles/bloxd.io/main.js` (Changed code · before: `L16258-L16259` → after: `L39457-L39481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39457-L39481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39457-L39481) · [Before (L16258-L16259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16258-L16259)

```diff
-           const hv = 868
-         }, , (vv, zv, Pv) => {
+           var lT = cT(1532),
+             MT = cT(1099);
+           const KT = new Date("2026-10-05T09:00:00Z"),
+             OT = "PrivacyPopup",
+             yT = "#85baff";
+ 
+           function fT() {
+             return (0, MT.jsxs)(MT.Fragment, {
+               children: [(0, MT.jsx)("br", {}), "We use cookies and similar technologies for the website's functionality, to analyse its usage, and to support advertising (personalized only with your consent). For more details, please refer to our updated", " ", (0, MT.jsx)(lT.e, … [truncated]
+                 to: "/privacy-policy",
+                 style: {
+                   color: yT
+                 },
+                 children: "Privacy Policy"
+               }), ".", (0, MT.jsx)("br", {}), (0, MT.jsx)("br", {}), "If you're under 13, please ask an adult to review and approve it for you. If you're an adult, you can approve it yourself. By continuing to use bloxd.io, you (or your adult) agree to the updated", " ", (0, MT.j … [truncated]
+                 to: "/privacy-policy",
+ ... (9 more added lines; see GitHub link above)
```

#### 1002. `bundles/bloxd.io/main.js` (Changed code · before: `L16261-L16266` → after: `L39483-L39488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39483-L39488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39483-L39488) · [Before (L16261-L16266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16261-L16266)

```diff
-             e: () => mv,
-             i: () => Cv,
-             k: () => iv,
-             m: () => cv,
-             n: () => Gv,
-             p: () => sv
+             c: () => AT,
+             d: () => xT,
+             f: () => IT,
+             j: () => vT,
+             l: () => CT,
+             o: () => tT
```

#### 1003. `bundles/bloxd.io/main.js` (Changed code · before: `L16268-L16277` → after: `L39490-L39492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39490-L39492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39490-L39492) · [Before (L16268-L16277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16268-L16277)

```diff
-           var hv = Pv(302),
-             Sv = Pv(635),
-             ev = Pv(77),
-             gv = Pv.n(ev),
-             pv = Pv(692),
-             dv = Pv(284),
-             Nv = Pv(39),
-             lv = Pv(90),
-             Tv = Pv(700);
-           const Wv = !0 === Nv.h.getItem("useWebGpu");
+           var lT = cT(3536),
+             MT = cT(71),
+             KT = cT(1099);
```

#### 1004. `bundles/bloxd.io/main.js` (Changed code · before: `L16280` → after: `L39495-L39540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39495-L39540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39495-L39540) · [Before (L16280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16280)

```diff
-             return vv === (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "webgl_default") && !zv
+             let cT = null,
+               OT = !1,
+               yT = null;
+ 
+             function fT(kT) {
+               if (null === cT) {
+                 OT = kT;
+                 const lT = TT();
+                 cT = lT, lT.then((TT => {
+                   yT = TT
+                 }), (() => {
+                   cT = null
+                 }))
+               }
+               return cT
+             }
+ ... (30 more added lines; see GitHub link above)
```

#### 1005. `bundles/bloxd.io/main.js` (Changed code · before: `L16282-L16285` → after: `L39542-L39546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39542-L39546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39542-L39546) · [Before (L16282-L16285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16282-L16285)

```diff
-           const av = !Tv.e && wv(dv.d.webgl_holdback_v1, Wv) && !(Sv.r && !0 === Nv.h.getItem(lv.p)),
-             sv = hv.Zb && !av,
-             Cv = hv.Zb && !sv,
-             iv = wv(dv.d.intel_gen9_lite_v1, Wv);
+           var yT = cT(698),
+             fT = cT(1348);
+           const xT = OT((() => Promise.all([cT.e(106), cT.e(107), cT.e(102), cT.e(104), cT.e(209), cT.e(115)]).then((() => cT(36130)))), (0, KT.jsx)(fT.d, {})),
+             IT = OT((() => Promise.all([cT.e(109), cT.e(387)]).then((() => cT(8922)))), (0, KT.jsx)(fT.d, {})),
+             AT = OT((() => cT.e(211).then((() => cT(36180)))), (0, KT.jsx)(fT.d, {}));
```

#### 1006. `bundles/bloxd.io/main.js` (Changed code · before: `L16288-L16289` → after: `L39549-L39551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39549-L39551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39549-L39551) · [Before (L16288-L16289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16288-L16289)

```diff
-             const zv = gv().getParser(vv);
-             return "Safari" === zv.getBrowserName() && "26" === (0, pv.d)("Safari", zv.getBrowserVersion(), null)
+             (0, lT.e)().then((() => {
+               TT.startsWith("/game/") ? xT.preload() : TT.startsWith("/place/") && AT.preload()
+             }))
```

#### 1007. `bundles/bloxd.io/main.js` (Changed code · before: `L16294-L16295` → after: `L39555-L39557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39555-L39557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39555-L39557) · [Before (L16294-L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16294-L16295)

```diff
-             const zv = !0 === vv ? "webgl_default" : vv;
-             return "string" === typeof zv && wv(dv.d.gpu_class_webgl_v1, Wv, zv)
+             (0, yT.c)((() => {
+               /^\/(play|studio)(\/|$)/.test(window.location.pathname) || TT()
+             }))
```

#### 1008. `bundles/bloxd.io/main.js` (Changed code · before: `L16321-L16322` → after: `L39560-L39563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39560-L39563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39560-L39563) · [Before (L16321-L16322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16321-L16322)

```diff
-           function lv(vv, zv, Pv) {
-             return "mobileIos" === Pv ? "iosApp" : "mobileAndroid" === Pv ? "androidApp" : /iPad|iPhone|iPod/.test(vv) || "MacIntel" === vv && zv > 1 ? "iosWeb" : null
+           function vT() {
+             jT((() => {
+               xT.preload().then(IT.preload)
+             }))
```

#### 1009. `bundles/bloxd.io/main.js` (Changed code · before: `L16329-L16331` → after: `L39566-L39569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39566-L39569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39566-L39569) · [Before (L16329-L16331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16329-L16331)

```diff
-           function sv(vv) {
-             const zv = new URLSearchParams(vv).get("client");
-             return "wasm" === zv || "js" === zv ? zv : null
+           function tT() {
+             jT((() => {
+               IT.preload()
+             }))
```

#### 1010. `bundles/bloxd.io/main.js` (Changed code · before: `L16334-L16368` → after: `L39585-L39587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39585-L39587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39585-L39587) · [Before (L16334-L16368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16334-L16368)

```diff
-           function Cv(vv) {
-             var zv, Pv;
-             const hv = sv(vv.search);
-             if ("wasm" === hv) return {
-               client: "wasm",
-               reason: "address"
-             };
-             const Sv = vv.hostname === Tv,
-               ev = "iosWeb" === vv.surface || "iosApp" === vv.surface,
-               gv = !Sv && null !== vv.surface && vv.bucket >= vv.shareCaps[vv.surface],
-               pv = !Sv && vv.bucket >= (dv = vv.share, Nv = vv.defaultShare, "number" === typeof dv && Number.isInteger(dv) && dv >= 0 && dv <= 100 ? dv : Nv);
-             var dv, Nv;
-             const lv = "wasm" === (null === (zv = vv.rule) || void 0 === zv ? void 0 : zv.client) && (!ev || vv.rule.iosCapOverride);
-             return gv && !lv ? {
-               client: "js",
-               reason: ev ? "ios" : "share"
- ... (19 more removed lines; see GitHub link above)
+           function xT() {
+             const TT = (0, lT.e)("connectedGame", fT.b);
+             return MT.featureFlags.canUseInviteLinks ? [yT.k] : TT ? [yT.r] : []
```

#### 1011. `bundles/bloxd.io/main.js` (Changed code · before: `L16371-L16374` → after: `L39590-L39592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39590-L39592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39590-L39592) · [Before (L16371-L16374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16371-L16374)

```diff
-           function iv(vv) {
-             const zv = (0, ev.j)(wv, vv);
-             return Pv = zv, hv.includes(Pv) ? zv : null;
-             var Pv
+           function IT(TT, kT) {
+             const cT = [...TT, ...kT];
+             return (0, OT.D)(KT.C).flatMap((TT => cT.filter((kT => kT.hudId === TT))))
```

#### 1012. `bundles/bloxd.io/main.js` (Changed code · before: `L16377-L16385` → after: `L39595-L39597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39595-L39597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39595-L39597) · [Before (L16377-L16385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16377-L16385)

```diff
-           function cv(vv) {
-             var zv;
-             const Pv = Number(null !== (zv = (0, ev.l)(vv, Wv)) && void 0 !== zv ? zv : NaN);
-             if (Number.isInteger(Pv) && Pv >= 0 && Pv < 100) return Pv;
-             const hv = Math.floor(100 * Math.random());
-             try {
-               null === vv || void 0 === vv || vv.setItem(Wv, String(hv))
-             } catch {}
-             return hv
+           function AT() {
+             const TT = IT((0, yT.l)(), xT());
+             return KT.C.filter((kT => !OT.q.has(kT) || TT.some((TT => TT.hudId === kT))))
```

#### 1013. `bundles/bloxd.io/main.js` (Changed code · before: `L16388-L16392` → after: `L39611-L39616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39611-L39616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39611-L39616) · [Before (L16388-L16392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16388-L16392)

```diff
-           function Gv() {
-             try {
-               return window.sessionStorage
-             } catch {
-               return null
+           function yT(TT, kT, cT) {
+             let lT = null;
+             for (const KT of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
+               const OT = KT.getBoundingClientRect();
+               var MT;
+               if (OT.height > 0 && OT.top > cT && OT.left < kT && OT.right > TT) lT = Math.min(null !== (MT = lT) && void 0 !== MT ? MT : OT.top, OT.top)
```

#### 1014. `bundles/bloxd.io/main.js` (Changed code · before: `L16395` → after: `L39620-L39625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39620-L39625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39620-L39625) · [Before (L16395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16395)

```diff
-           const mv = function() {
+ 
+           function fT(TT, kT) {
+             const {
+               isTouchScreen: cT
+             } = (0, MT.n)(["isTouchScreen"]), fT = (0, lT.useRef)(null);
+             (0, KT.g)(OT, (() => {
```

#### 1015. `bundles/bloxd.io/main.js` (Changed code · before: `L16397-L16399` → after: `L39627-L39639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39627-L39639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39627-L39639) · [Before (L16397-L16399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16397-L16399)

```diff
-               if ("undefined" === typeof window) return {
-                 client: "js",
-                 reason: "build"
+               null === (TT = fT.current) || void 0 === TT || TT.call(fT)
+             })), (0, lT.useEffect)((() => {
+               const lT = null === TT || void 0 === TT ? void 0 : TT.closest(kT),
+                 MT = document.querySelector(".BottomRightElements");
+               if (!cT || !TT || !lT || !MT) return;
+               const KT = () => {
+                 ! function(TT, kT) {
+                   const cT = TT.getBoundingClientRect(),
+                     lT = yT(cT.left, cT.right, -1 / 0),
+                     MT = kT.getBoundingClientRect().bottom + parseFloat(getComputedStyle(kT).bottom),
+                     KT = null === lT ? "0px" : `${Math.ceil(MT-lT+4)}px`;
+                   kT.style.getPropertyValue("--touch-keys-reach") !== KT && kT.style.setProperty("--touch-keys-reach", KT)
+                 }(TT, lT)
```

#### 1016. `bundles/bloxd.io/main.js` (Changed code · before: `L16401-L16421` → after: `L39641-L39644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39641-L39644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39641-L39644) · [Before (L16401-L16421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16401-L16421)

```diff
-               const zv = (0, ev.i)(),
-                 Pv = null === sv(window.location.search) && (0, Sv.G)("wasm").filter((vv => !0 !== vv.unconfirmed)).length >= 2,
-                 hv = {
-                   search: window.location.search,
-                   hostname: window.location.hostname,
-                   share: window.__bloxdWasmClientShare,
-                   defaultShare: 0,
-                   bucket: cv(zv),
-                   declined: Pv ? "kills" : null !== (vv = iv(zv)) && void 0 !== vv ? vv : iv(Gv()),
-                   surface: lv(navigator.platform, navigator.maxTouchPoints, gv.o),
-                   shareCaps: Nv,
-                   jsClientGpu: dv.p,
-                   rule: (0, pv.l)()
-                 };
-               var Tv;
-               if (Pv && (fv("kills"), "wasm" === (null === (Tv = hv.rule) || void 0 === Tv ? void 0 : Tv.client))) {
- ... (5 more removed lines; see GitHub link above)
+               fT.current = KT;
+               const OT = new ResizeObserver(KT);
+               return OT.observe(TT), OT.observe(MT), window.addEventListener("resize", KT), () => {
+                 fT.current = null, OT.disconnect(), window.removeEventListener("resize", KT), lT.style.setProperty("--touch-keys-reach", "0px")
```

#### 1017. `bundles/bloxd.io/main.js` (Changed code · before: `L16423-L16428` → after: `L39646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39646) · [Before (L16423-L16428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16423-L16428)

```diff
-               return Cv(hv)
-             }(),
-             jv = "wasm" === mv.client;
- 
-           function fv(vv) {
-             (0, ev.e)(wv, vv, av.has(vv) ? Gv() : (0, ev.i)())
+             }), [cT, TT, kT])
```

#### 1018. `bundles/bloxd.io/main.js` (Changed code · before: `L16432` → after: `L39664-L39676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39664-L39676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39664-L39676) · [Before (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16432)

```diff
-             console.warn("[bloxd-client-choice] the GL render device's recovery gave up: this tab's later pages play the JS client"), fv("blockedAfterLoss"), Yv("decline")
+             return null !== xT || (xT = (async () => {
+               try {
+                 const TT = await KT.userContextManager.getCurrentUserContext();
+                 ! function(TT) {
+                   yT = TT;
+                   for (const kT of fT) kT(TT)
+                 }(await MT.d.getCustomGamePlaces(TT))
+               } catch (TT) {
+                 console.error("Failed to fetch custom game places", TT)
+               } finally {
+                 xT = null
+               }
+             })()), xT
```

#### 1019. `bundles/bloxd.io/main.js` (Changed code · before: `L16435-L16437` → after: `L39679-L39699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39679-L39699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39679-L39699) · [Before (L16435-L16437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16435-L16437)

```diff
-           function Yv(vv) {
-             "wasm" === mv.client && "rule" === mv.reason && (0, pv.z)(vv)
-           }
+           function jT() {
+             let {
+               refresh: TT = !1
+             } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+             const [kT, cT] = (0, lT.useState)(yT);
+             return (0, lT.useEffect)((() => (fT.add(cT), null !== yT ? cT(yT) : CT(), () => {
+               fT.delete(cT)
+             })), []), (0, lT.useEffect)((() => {
+               if (TT) return IT++, null === AT && (AT = setInterval(CT, OT)), () => {
+                 IT--, 0 === IT && null !== AT && (clearInterval(AT), AT = null)
+               }
+             }), [TT]), kT
+           }
+         },
+         3022: (TT, kT, cT) => {
+           cT.d(kT, {
+ ... (5 more added lines; see GitHub link above)
```

#### 1020. `bundles/bloxd.io/main.js` (Changed code · before: `L16439-L16441` → after: `L39701-L39749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39701-L39749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39701-L39749) · [Before (L16439-L16441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16439-L16441)

```diff
-           function nv(vv) {
-             const zv = new URL(vv);
-             return zv.searchParams.set("client", "js"), zv.toString()
+           function OT() {
+             const [TT, kT] = (0, lT.useState)({
+               id: null,
+               seq: 0,
+               ended: !1
+             }), cT = (0, lT.useCallback)((TT => {
+               kT((kT => kT.id !== TT || kT.ended ? {
+                 id: TT,
+                 seq: kT.seq + 1,
+                 ended: !1
+               } : {
+                 id: null,
+                 seq: kT.seq + 1,
+                 ended: !1
+               }))
+             }), []), OT = (0, lT.useCallback)((TT => {
+ ... (33 more added lines; see GitHub link above)
```

#### 1021. `bundles/bloxd.io/main.js` (Changed code · before: `L16443` → after: `L39751-L39752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39751-L39752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39751-L39752) · [Before (L16443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16443)

```diff
-         }, , , , , , , , , (vv, zv, Pv) => {
+         },
+         2563: (TT, kT, cT) => {
```

#### 1022. `bundles/bloxd.io/main.js` (Changed code · before: `L16455` → after: `L39755-L39756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39755-L39756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39755-L39756) · [Before (L16455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16455)

```diff
-             i: () => Vv,
+             h: () => ST,
+             j: () => NT,
```

#### 1023. `bundles/bloxd.io/main.js` (Changed code · before: `L16457-L16461` → after: `L39758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39758) · [Before (L16457-L16461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16457-L16461)

```diff
-             o: () => Uv,
-             q: () => xv,
-             u: () => Lv,
-             v: () => Hv,
-             w: () => iv
+             o: () => tT
```

#### 1024. `bundles/bloxd.io/main.js` (Changed code · before: `L16463-L16482` → after: `L39760-L39768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39760-L39768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39760-L39768) · [Before (L16463-L16482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16463-L16482)

```diff
-           var hv = Pv(312),
-             Sv = Pv(646),
-             ev = Pv(108),
-             gv = Pv(39),
-             pv = Pv(650);
-           const dv = "playingMarker",
-             Nv = "pageKills",
-             lv = "appPlayingMarker",
-             Tv = 5e3,
-             Wv = 20,
-             wv = 18e5,
-             av = 1e3,
-             sv = "bloxd-page-kill",
-             Cv = 1048576,
-             iv = (0, Sv.d)();
-           let cv = null,
- ... (4 more removed lines; see GitHub link above)
+           var lT = cT(71),
+             MT = cT(339),
+             KT = cT(31),
+             OT = cT(1461),
+             yT = cT(1518),
+             fT = cT(1136);
+           const xT = 15e3;
+           let IT = null,
+             AT = 0,
```

#### 1025. `bundles/bloxd.io/main.js` (Changed code · before: `L16485-L16504` → after: `L39771-L39781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39771-L39781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39771-L39781) · [Before (L16485-L16504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16485-L16504)

```diff
-           function Yv(vv, zv) {
-             ! function() {
-               if (mv) return;
-               mv = !0, document.addEventListener("visibilitychange", yv), window.addEventListener("pagehide", (() => {
-                 Gv = !0, Mv()
-               })), window.addEventListener("pageshow", (vv => {
-                 Gv = !1, vv.persisted && null !== cv && (rv(), yv())
-               }))
-             }(), Ov();
-             const Pv = {
-               client: vv,
-               snapshot: zv,
-               startedAt: Date.now(),
-               beat: setInterval(yv, Tv),
-               appCopy: Iv(),
-               hiddenAt: null
- ... (4 more removed lines; see GitHub link above)
+           function jT() {
+             return null !== IT || (IT = (async () => {
+               try {
+                 const TT = await fT.userContextManager.getCurrentUserContext();
+                 KT.e.set({
+                   gameCcus: await yT.d.getGameCcus(TT)
+                 })
+               } catch (TT) {
+                 console.error("Failed to fetch game CCUs", TT)
+               } finally {
+                 IT = null
```

#### 1026. `bundles/bloxd.io/main.js` (Changed code · before: `L16506` → after: `L39783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39783) · [Before (L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16506)

```diff
-             }
+             })()), IT
```

#### 1027. `bundles/bloxd.io/main.js` (Changed code · before: `L16510` → after: `L39787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39787) · [Before (L16510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16510)

```diff
-             yv()
+             null === KT.e.get("gameCcus") && jT()
```

#### 1028. `bundles/bloxd.io/main.js` (Changed code · before: `L16514` → after: `L39791-L39796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39791-L39796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39791-L39796) · [Before (L16514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16514)

```diff
-             null !== cv && (clearInterval(cv.beat), cv = null, Mv())
+             const {
+               gameCcus: TT
+             } = (0, KT.n)(["gameCcus"]);
+             return (0, lT.useEffect)((() => {
+               vT()
+             }), [TT]), TT
```

#### 1029. `bundles/bloxd.io/main.js` (Changed code · before: `L16518-L16528` → after: `L39800-L39815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39800-L39815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39800-L39815) · [Before (L16518-L16528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16518-L16528)

```diff
-             return function(vv) {
-               let {
-                 client: zv,
-                 visibleOnly: Pv = !1
-               } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-               const hv = Date.now() - vv;
-               return Kv().filter((vv => vv.at >= hv && (void 0 === zv || vv.client === zv) && (!Pv || vv.visible)))
-             }(wv, {
-               client: vv,
-               visibleOnly: !0
-             })
+             const [, kT] = (0, lT.useReducer)((TT => TT + 1), 0), cT = TT(KT.e.get("gameCcus")), MT = (0, lT.useRef)({
+               select: TT,
+               value: cT
+             });
+             (0, lT.useLayoutEffect)((() => {
+               MT.current = {
+                 select: TT,
+                 value: cT
+               }
+             }));
+             const yT = (0, lT.useCallback)((() => {
+               MT.current.select(KT.e.get("gameCcus")) !== MT.current.value && kT()
+             }), []);
+             return (0, OT.g)("appManagerUpdated|gameCcus", yT), (0, lT.useEffect)((() => {
+               yT(), vT()
+             }), [yT]), cT
```

#### 1030. `bundles/bloxd.io/main.js` (Changed code · before: `L16532-L16541` → after: `L39819-L39837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39819-L39837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39819-L39837) · [Before (L16532-L16541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16532-L16541)

```diff
-             if (null === fv) {
-               const vv = Qv();
-               if (null !== vv && !Rv()) {
-                 const zv = Uv(vv, Date.now());
-                 Fv = "reload" === xv() ? zv : {
-                   ...zv,
-                   unconfirmed: !0
-                 }
-               }
-               fv = [...Av(), ...null === Fv ? [] : [Fv]]
+             (0, lT.useEffect)((() => (vT(), AT++, null === CT && (CT = setInterval(jT, xT)), () => {
+               AT--, 0 === AT && null !== CT && (clearInterval(CT), CT = null)
+             })), [])
+           }
+ 
+           function QT(TT, kT) {
+             var cT;
+             if (null === kT) return null;
+             return null !== (cT = kT["classic_survivalFactory" === TT ? "survivalFactory" : TT]) && void 0 !== cT ? cT : 0
+           }
+ 
+           function ST(TT) {
+             if (null === TT) return 0;
+             let kT = 0;
+             const cT = new Set;
+             for (const lT in TT) {
+ ... (3 more added lines; see GitHub link above)
```

#### 1031. `bundles/bloxd.io/main.js` (Changed code · before: `L16546-L16550` → after: `L39856-L39872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39856-L39872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39856-L39872) · [Before (L16546-L16550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16546-L16550)

```diff
-           function Vv() {
-             if (null !== fv && null !== Fv) {
-               const vv = Fv;
-               fv = fv.filter((zv => zv !== vv)), Fv = null
-             }
+           function xT(TT) {
+             const kT = (0, fT.m)(),
+               cT = kT.inGameUi ? [] : ["gameState"],
+               {
+                 gameState: MT
+               } = (0, yT.n)(cT),
+               xT = () => {
+                 var kT;
+                 return null !== (kT = OT.b.values[TT]) && void 0 !== kT ? kT : null
+               },
+               [AT, CT] = (0, lT.useState)(xT);
+             return IT(TT, CT), (0, lT.useEffect)((() => {
+               CT((TT => {
+                 const kT = xT();
+                 return TT === kT ? TT : (0, KT.c)(kT)
+               }))
+ ... (1 more added lines; see GitHub link above)
```

#### 1032. `bundles/bloxd.io/main.js` (Changed code · before: `L16554` → after: `L39876-L39886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39876-L39886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39876-L39886) · [Before (L16554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16554)

```diff
-             const Pv = Jv(vv.snapshot);
+             const cT = (0, lT.useRef)(kT);
+             cT.current = kT, (0, lT.useEffect)((() => OT.b.subscribe(TT, (TT => {
+               cT.current((0, KT.c)(TT))
+             }))), [TT])
+           }
+ 
+           function AT(TT) {
+             const {
+               content: kT,
+               showBackground: cT
+             } = (0, MT.md)(xT(TT));
```

#### 1033. `bundles/bloxd.io/main.js` (Changed code · before: `L16556-L16561` → after: `L39888-L39890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39888-L39890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39888-L39890) · [Before (L16556-L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16556-L16561)

```diff
-               at: vv.visible ? vv.beatAt : zv,
-               client: vv.client,
-               visible: vv.visible,
-               ...null === Pv ? {} : {
-                 distance: Pv
-               }
+               content: kT,
+               showBackground: cT,
+               hasText: !(0, MT.qc)(kT)
```

#### 1034. `bundles/bloxd.io/main.js` (Changed code · before: `L16566` → after: `L39896-L39943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39896-L39943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39896-L39943) · [Before (L16566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16566)

```diff
-             return null !== window.opener && "navigate" === xv() && 1 === history.length
+             const TT = xT("headerChips");
+             return TT && 0 !== TT.length ? TT.map((TT => {
+               const {
+                 content: kT,
+                 showBackground: cT
+               } = (0, MT.md)(TT);
+               return {
+                 content: kT,
+                 showBackground: cT,
+                 hasText: !(0, MT.qc)(kT)
+               }
+             })) : CT
+           }
+         },
+         2784: (TT, kT, cT) => {
+           cT.d(kT, {
+ ... (32 more added lines; see GitHub link above)
```

#### 1035. `bundles/bloxd.io/main.js` (Changed code · before: `L16569` → after: `L39946-L39970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39946-L39970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39946-L39970) · [Before (L16569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16569)

```diff
-           function xv() {
+           function NT(TT, kT, cT) {
+             const lT = TT.filter((TT => !yT.q.includes(TT) && !kT.includes(TT)));
+             lT.length > 0 && console.warn(`client_ecs_*_ms: no ${cT} for ${lT.join(", ")} (frontendMetricDefinitions.ts)`)
+           }
+ 
+           function QT(TT, kT) {
+             const cT = function(TT, kT) {
+               if (TT.runs < 10) return null;
+               const cT = kT.map((() => 0));
+               cT[kT.indexOf("total")] = TT.loopMs;
+               const lT = kT.indexOf("other");
+               for (const [MT, KT] of TT.byComponent) {
+                 const TT = kT.indexOf(MT);
+                 cT[-1 === TT ? lT : TT] += KT.ms
+               }
+               return cT.map((kT => kT / TT.runs))
+ ... (9 more added lines; see GitHub link above)
```

#### 1036. `bundles/bloxd.io/main.js` (Changed code · before: `L16571` → after: `L39972-L40025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R39972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L39972-L40025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L39972-L40025) · [Before (L16571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16571)

```diff
-             return null === (vv = performance.getEntriesByType("navigation")[0]) || void 0 === vv ? void 0 : vv.type
+             const lT = null !== (cT = FT.get(TT)) && void 0 !== cT ? cT : function(TT) {
+               const kT = new Set;
+               FT.set(TT, kT);
+               const cT = TT.pN;
+               return TT.pN = function() {
+                 const TT = performance.now();
+                 cT(...arguments);
+                 const lT = performance.now() - TT;
+                 for (const cT of kT) cT(lT)
+               }, kT
+             }(TT);
+             return lT.add(kT), () => {
+               lT.delete(kT)
+             }
+           }
+           class PT {
+ ... (38 more added lines; see GitHub link above)
```

#### 1037. `bundles/bloxd.io/main.js` (Changed code · before: `L16575-L16577` → after: `L40029-L40176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40029-L40176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40029-L40176) · [Before (L16575-L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16575-L16577)

```diff
-             Kv();
-             const vv = Qv();
-             return gv.l.removeItem(dv), vv
+             return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
+           }
+           class mT {
+             constructor(TT, kT) {
+               this.device = TT, this.results = kT, this.timestamps = void 0, this.submit = void 0, this.recording = !1, this.submits = 0, this.lastSubmitMs = 0, this.generation = 0, this.readbackPending = !1, this.donePending = !1, this.timestamps = TT.features.has("timestamp-que … [truncated]
+                 return {
+                   querySet: TT.createQuerySet({
+                     type: "timestamp",
+                     count: 2
+                   }),
+                   resolveBuffer: TT.createBuffer({
+                     size: bT,
+                     usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
+                   }),
+                   readBuffer: TT.createBuffer({
+                     size: bT,
+ ... (132 more added lines; see GitHub link above)
```

#### 1038. `bundles/bloxd.io/main.js` (Changed code · before: `L16580-L16591` → after: `L40179-L40212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40179-L40212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40179-L40212) · [Before (L16580-L16591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16580-L16591)

```diff
-           function qv() {
-             if (!Iv()) return null;
-             const vv = gv.h.getItem(lv);
-             return gv.h.removeItem(lv),
-               function(vv) {
-                 if (!Zv(vv)) return !1;
-                 const {
-                   visit: zv,
-                   hiddenAt: Pv
-                 } = vv;
-                 return (null === zv || "string" === typeof zv && (0, hv.uc)(zv)) && (null === Pv || "number" === typeof Pv)
-               }(vv) ? vv : null
+           function JT(TT, kT) {
+             if (TT.started) return;
+             const cT = new PT((0, MT.f)(kT.gv).gpuTimerSource());
+             TT.start((() => kT.FQ), cT, "js");
+             let lT = null;
+             (0, aT.b)("js", (() => {
+               const TT = (0, MT.f)(kT.gv);
+               return `${TT.backendName} (${TT.choice}), frames at the browser's animation frame rate, uncapped`
+             }), (TT => {
+               lT = TT
+             })), rT(kT.container.EQ, (kT => {
+               var cT;
+               TT.pN(kT), null === (cT = lT) || void 0 === cT || cT.jsTick(kT)
+             })), kT.on("beforeRender", (() => {
+               TT.isSampling() && cT.onFrameStart() && TT.onGpuSampleStarted()
+             })), kT.prependListener("afterRender", (() => {
+ ... (18 more added lines; see GitHub link above)
```

#### 1039. `bundles/bloxd.io/main.js` (Changed code · before: `L16595` → after: `L40223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40223) · [Before (L16595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16595)

```diff
-             return "mobileAndroid" === ev.o || "mobileIos" === ev.o
+             return Promise.resolve().then((() => cT(3644)))
```

#### 1040. `bundles/bloxd.io/main.js` (Changed code · before: `L16598-L16600` → after: `L40229-L40230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40229-L40230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40229-L40230) · [Before (L16598-L16600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16598-L16600)

```diff
-           function Qv() {
-             const vv = gv.l.getItem(dv);
-             return Zv(vv) ? vv : null
+           function RT(TT, kT) {
+             return TT ? !TT.wasmReady || null !== kT && void 0 !== kT && kT.stoppedTicks ? "wasm_stopped" : "in_wasm" : "js"
```

#### 1041. `bundles/bloxd.io/main.js` (Changed code · before: `L16604-L16605` → after: `L40234-L40535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40234-L40535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40234-L40535) · [Before (L16604-L16605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16604-L16605)

```diff
-             const zv = vv;
-             return "object" === typeof zv && null !== zv && 1 === zv.v && "string" === typeof zv.page && ("wasm" === zv.client || "js" === zv.client) && "number" === typeof zv.startedAt && "number" === typeof zv.beatAt && "boolean" === typeof zv.visible && "object" === typeof zv. … [truncated]
+             return null !== TT && void 0 !== TT && TT.clientLightCompletions ? TT.clientLightWasmCompletions === TT.clientLightCompletions ? "wasm" : 0 === TT.clientLightWasmCompletions ? "js" : "mixed" : "none"
+           }(0, tT.e)("https://unpkg.com/bytebrew-web-sdk@1.0.1", {}, !1).then((() => {
+             window.ByteBrewSDK ? window.ByteBrewSDK.ByteBrew.initializeByteBrew("T74de8IIz", "L0h+F+6ecvR0wIxnJIv7rFi6Pda7Hf1YIhLS0jNkIoUeZu2LkOaPNQPkun8nLKh+", AT.d.toString()) : console.error("ByteBrewSDK undefined after loadScript")
+           })).catch((TT => {
+             console.warn("Failed to load Bytebrew SDK:", TT.stack)
+           }));
+           const UT = new class {
+             constructor() {
+               this.fpsOverTime = null, this.initialFps = null, this.frameTimingTracker = new DT.d, this.ecsTimingTelemetry = new hT, this.worldgenStatsProvider = null, this.rendererMsaa = null, this.colyseusPingInfo = {
+                 id: 0,
+                 start: null,
+                 end: null
+               }, this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.pendingWasmPhysicsFailures = 0, this.pendingWasmLightFailures = 0, setInterval((() => {
+                 const TT = (0, lT.f)();
+                 if (TT) {
+                   JT(this.frameTimingTracker, TT), this.ecsTimingTelemetry.start(TT), this.logAnalytics(), this.colyseusPingInfo.id += 1, this.colyseusPingInfo.start = performance.now(), this.colyseusPingInfo.end = null;
+ ... (286 more added lines; see GitHub link above)
```

#### 1042. `bundles/bloxd.io/main.js` (Changed code · before: `L16608-L16610` → after: `L40544-L40545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40544-L40545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40544-L40545) · [Before (L16608-L16610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16608-L16610)

```diff
-           function Av() {
-             const vv = gv.l.getItem(Nv);
-             return Array.isArray(vv) ? vv : []
+           function lT(TT, kT) {
+             return 1e3 / TT >= .85 * kT
```

#### 1043. `bundles/bloxd.io/main.js` (Changed code · before: `L16614` → after: `L40549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40549) · [Before (L16614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16614)

```diff
-             gv.l.setItem(Nv, [...Av(), vv].slice(-Wv))
+             return null !== TT && TT >= 48
```

#### 1044. `bundles/bloxd.io/main.js` (Changed code · before: `L16618-L16634` → after: `L40553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40553) · [Before (L16618-L16634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16618-L16634)

```diff
-             return "undefined" === typeof BroadcastChannel ? Promise.resolve(!1) : new Promise((zv => {
-               const Pv = new BroadcastChannel(sv),
-                 hv = setTimeout((() => {
-                   Pv.close(), zv(!1)
-                 }), av);
-               Pv.onmessage = Sv => {
-                 var ev;
-                 (null === (ev = Sv.data) || void 0 === ev ? void 0 : ev.alive) === vv && (clearTimeout(hv), Pv.close(), zv(!0))
-               }, Pv.postMessage({
-                 ask: vv
-               })
-             }))
-           }
- 
-           function Mv() {
-             var vv;
- ... (1 more removed lines; see GitHub link above)
+             return 1e3 / (MT(TT) ? TT : 60)
```

#### 1045. `bundles/bloxd.io/main.js` (Changed code · before: `L16637-L16663` → after: `L40562-L40569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40562-L40569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40562-L40569) · [Before (L16637-L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16637-L16663)

```diff
-           function yv() {
-             const vv = cv;
-             if (null === vv || Gv) return;
-             const zv = {
-               v: 1,
-               page: iv,
-               client: vv.client,
-               startedAt: vv.startedAt,
-               beatAt: Date.now(),
-               visible: "visible" === document.visibilityState,
-               snapshot: {
-                 ...ov(),
-                 ...Ev(vv)
-               }
-             };
-             if (gv.l.setItem(dv, zv)) {
- ... (11 more removed lines; see GitHub link above)
+           function yT(TT, kT) {
+             let {
+               busyMs: cT,
+               frameMs: lT
+             } = TT;
+             if (cT / kT < .9) return null;
+             const MT = lT - cT;
+             return cT / lT >= .85 || MT < 3 ? "main_saturated" : MT < kT + 2 ? "main_partial" : null
```

#### 1046. `bundles/bloxd.io/main.js` (Changed code · before: `L16666-L16667` → after: `L40572-L40577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40572-L40577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40572-L40577) · [Before (L16666-L16667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16666-L16667)

```diff
-           function Bv() {
-             return null === cv ? null : Jv(Ev(cv))
+           function fT(TT, kT) {
+             let {
+               busyMs: cT,
+               frameMs: lT
+             } = TT;
+             return cT / kT <= .6 || lT - cT >= kT + 6 ? "downstream" : "unclear"
```

#### 1047. `bundles/bloxd.io/main.js` (Changed code · before: `L16672-L16673` → after: `L40582-L40585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40582-L40585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40582-L40585) · [Before (L16672-L16673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16672-L16673)

```diff
-               renderDistance: zv,
-               renderDistanceVertical: Pv
+               frameMs: kT,
+               refreshHz: cT,
+               windowRefreshHz: xT,
+               slowFrames: IT
```

#### 1048. `bundles/bloxd.io/main.js` (Changed code · before: `L16675` → after: `L40587-L40598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40587-L40598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40587-L40598) · [Before (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16675)

```diff
-             return "number" === typeof zv && "number" === typeof Pv ? [zv, Pv] : null
+             if (null === kT) return "unknown";
+             const AT = MT(cT);
+             if (AT && lT(kT, cT)) return "cap";
+             if (!AT && lT(kT, 48)) return "unknown";
+             const CT = KT(cT);
+             var jT;
+             if (AT && cT > 60 && lT(kT, 60)) return null === IT ? OT.unclear : OT[null !== (jT = yT(IT, CT)) && void 0 !== jT ? jT : fT(IT, CT)];
+             if (null === IT) return "unknown";
+             const vT = yT(IT, CT);
+             if (null !== vT) return vT;
+             const tT = AT ? null : null !== cT && void 0 !== cT ? cT : xT;
+             return null !== tT && !MT(xT) && lT(kT, tT) ? "throttled" : fT(IT, CT)
```

#### 1049. `bundles/bloxd.io/main.js` (Changed code · before: `L16677-L16682` → after: `L40600-L40635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40600-L40635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40600-L40635) · [Before (L16677-L16682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16677-L16682)

```diff
- 
-           function Ev(vv) {
-             try {
-               return vv.snapshot()
-             } catch (zv) {
-               return console.warn("Couldn't read the page kill snapshot", zv), {}
+           var IT = cT(31),
+             AT = cT(1082),
+             CT = cT(1089);
+           const jT = {
+             perMin: null,
+             timeShare: null,
+             scriptShare: null
+           };
+           class vT {
+             constructor() {
+               var TT, kT;
+               this.supported = "undefined" !== typeof PerformanceObserver && null !== (TT = null === (kT = PerformanceObserver.supportedEntryTypes) || void 0 === kT ? void 0 : kT.includes("long-animation-frame")) && void 0 !== TT && TT, this.totals = {
+                 count: 0,
+                 durationMs: 0,
+                 scriptMs: 0,
+                 foregroundMs: 0
+ ... (20 more added lines; see GitHub link above)
```

#### 1050. `bundles/bloxd.io/main.js` (Changed code · before: `L16684-L16693` → after: `L40637-L40638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40637-L40638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40637-L40638) · [Before (L16684-L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16684-L16693)

```diff
-           }
- 
-           function ov() {
-             var vv, zv;
-             const Pv = performance.memory;
-             return {
-               deviceMemory: null !== (vv = navigator.deviceMemory) && void 0 !== vv ? vv : null,
-               cores: null !== (zv = navigator.hardwareConcurrency) && void 0 !== zv ? zv : null,
-               jsHeapMiB: Pv ? bv(Pv.sG) : null,
-               jsHeapLimitMiB: Pv ? bv(Pv.iG) : null
+             markFrame(TT) {
+               this.blockingFromMs = TT, this.blockingMs = 0
```

#### 1051. `bundles/bloxd.io/main.js` (Changed code · before: `L16695-L16711` → after: `L40640-L40641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40640-L40641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40640-L40641) · [Before (L16695-L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16695-L16711)

```diff
-           }
- 
-           function bv(vv) {
-             return Math.round(vv / Cv * 10) / 10
-           }
- 
-           function rv() {
-             if (null === jv && "undefined" !== typeof BroadcastChannel) try {
-               const vv = new BroadcastChannel(sv);
-               vv.onmessage = zv => {
-                 var Pv;
-                 (null === (Pv = zv.data) || void 0 === Pv ? void 0 : Pv.ask) === iv && vv.postMessage({
-                   alive: iv
-                 })
-               }, jv = vv
-             } catch (vv) {
- ... (1 more removed lines; see GitHub link above)
+             blockingSinceMark() {
+               return null === this.observer ? null : (this.onEntries(this.observer.takeRecords()), this.blockingMs)
```

#### 1052. `bundles/bloxd.io/main.js` (Changed code · before: `L16713-L16746` → after: `L40643-L40679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40643-L40679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40643-L40679) · [Before (L16713-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16713-L16746)

```diff
-           }
-         }, , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => hv
-           });
-           let hv = function() {
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
-             return crypto.getRandomValues(new Uint8Array(vv)).reduce(((vv, zv) => vv += (zv &= 63) < 36 ? zv.toString(36) : zv < 62 ? (zv - 26).toString(36).toUpperCase() : zv > 62 ? "-" : "_"), "")
-           }
-         }, , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => wv,
-             h: () => sv,
-             i: () => Wv,
-             j: () => iv,
-             peekVisitSessionId: () => av
- ... (18 more removed lines; see GitHub link above)
+             snapshotAndReset() {
+               const TT = performance.now();
+               this.closeVisibleSpan(TT), this.closeWorstFrameWindow();
+               const kT = this.supported ? function(TT) {
+                 const {
+                   count: kT,
+                   durationMs: cT,
+                   scriptMs: lT,
+                   foregroundMs: MT
+                 } = TT;
+                 return MT < 5e3 ? jT : {
+                   perMin: 6e4 * kT / MT,
+                   timeShare: Math.min(1, cT / MT),
+                   scriptShare: Math.min(1, lT / MT)
+                 }
+               }(this.totals) : jT;
+ ... (21 more added lines; see GitHub link above)
```

#### 1053. `bundles/bloxd.io/main.js` (Changed code · before: `L16749-L16759` → after: `L40682-L40694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40682-L40694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40682-L40694) · [Before (L16749-L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16749-L16759)

```diff
- 
-           function wv() {
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.l;
-             const zv = (0, Sv.d)(vv, dv),
-               Pv = null !== zv && (0, Sv.g)(vv, dv),
-               gv = Pv ? zv : (0, hv.d)();
-             (0, Sv.j)(vv, dv, gv);
-             const pv = lv ? "return" : "load";
-             if (lv = !0, !Pv)
-               for (const hv of Tv) try {
-                 hv(gv, pv)
+           const tT = 5e3;
+           class hT {
+             constructor() {
+               this.worker = null, this.workerClockOffsetMs = 0, this.recentFastestMs = [], this.bucketEndsAtMs = -1 / 0
+             }
+             get running() {
+               return null !== this.worker
+             }
+             start(TT) {
+               try {
+                 this.worker = new Worker(URL.createObjectURL(new Blob(['\nlet timer = 0\nlet intended = 0\nlet echoed = []\nconst schedule = () => {\n\tintended += -Math.log(1 - Math.random()) * 50\n\ttimer = setTimeout(() => {\n\t\tconst now = performance.now()\n\t\tif (now - in … [truncated]
+                   type: "text/javascript"
+                 })))
```

#### 1054. `bundles/bloxd.io/main.js` (Changed code · before: `L16761` → after: `L40696-L40722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40696-L40722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40696-L40722) · [Before (L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16761)

```diff
-                 console.error("Visit started listener failed", Nv)
+                 return void console.warn("Main-thread busy probe: worker didn't start, so main_busy_share stays null", lT)
+               }
+               const kT = this.worker;
+               kT.onerror = TT => {
+                 console.warn("Main-thread busy probe: worker failed, so main_busy_share stays null", TT.message), kT.terminate(), this.worker = null
+               }, kT.onmessage = cT => {
+                 if ("number" === typeof cT.data) return void(this.workerClockOffsetMs = cT.data - performance.timeOrigin);
+                 const [lT, MT] = cT.data;
+                 kT.postMessage(lT);
+                 for (let kT = 0; kT < MT.length; kT += 2) {
+                   const cT = MT[kT + 1];
+                   TT(MT[kT] + this.workerClockOffsetMs, cT - this.baselineRoundTripMs(cT))
+                 }
+               };
+               const cT = () => {
+                 var TT;
+ ... (11 more added lines; see GitHub link above)
```

#### 1055. `bundles/bloxd.io/main.js` (Changed code · before: `L16763-L16779` → after: `L40724-L40725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40724-L40725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40724-L40725) · [Before (L16763-L16779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16763-L16779)

```diff
-             return gv
-           }
- 
-           function av() {
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.l;
-             const zv = (0, Sv.d)(vv, dv);
-             return null !== zv && (0, Sv.g)(vv, dv) ? zv : null
-           }
- 
-           function sv(vv) {
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.l;
-             Cv(), (0, Sv.i)(zv, dv);
-             const Pv = setInterval((() => {
-               vv() ? (0, Sv.g)(zv, dv) ? (0, Sv.i)(zv, dv) : wv(zv) : Nv === Pv && Cv()
-             }), gv);
-             return Nv = Pv, () => {
- ... (1 more removed lines; see GitHub link above)
+               const cT = this.recentFastestMs.length - 1;
+               return this.recentFastestMs[cT] = Math.min(this.recentFastestMs[cT], TT), Math.min(...this.recentFastestMs)
```

#### 1056. `bundles/bloxd.io/main.js` (Changed code · before: `L16782-L16827` → after: `L40728-L40762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40728-L40762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40728-L40762) · [Before (L16782-L16827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16782-L16827)

```diff
- 
-           function Cv() {
-             null !== Nv && (clearInterval(Nv), Nv = null)
-           }
- 
-           function iv() {
-             wv();
-             let vv = Date.now();
-             const zv = () => {
-               Date.now() - vv >= pv && (vv = Date.now(), wv())
-             };
-             for (const Pv of ["pointerdown", "keydown", "wheel"]) window.addEventListener(Pv, zv, {
-               capture: !0,
-               passive: !0
-             });
-             document.addEventListener("visibilitychange", (() => {
- ... (30 more removed lines; see GitHub link above)
+           const NT = 4096;
+           class QT {
+             constructor() {
+               this.spanEndMs = new Float64Array(NT), this.spanCounted = new Uint8Array(NT), this.spanHead = 0, this.spanCount = 0, this.pending = [], this.spare = [], this.probes = [], this.delaySumMs = 0
+             }
+             onFrameStart(TT, kT) {
+               this.spanCount === NT && (this.spanHead = this.spanHead + 1 & 4095, this.spanCount--);
+               const cT = this.spanHead + this.spanCount & 4095;
+               for (this.spanEndMs[cT] = TT, this.spanCounted[cT] = kT ? 1 : 0, this.spanCount++; this.spanEndMs[this.spanHead] < TT - 5e3;) this.spanHead = this.spanHead + 1 & 4095, this.spanCount--;
+               if (0 === this.pending.length) return;
+               const lT = this.pending;
+               this.pending = this.spare, this.spare = lT;
+               for (let MT = 0; MT < lT.length; MT += 2) this.onProbe(lT[MT], lT[MT + 1]);
+               lT.length = 0
+             }
+             onProbe(TT, kT) {
+ ... (19 more added lines; see GitHub link above)
```

#### 1057. `bundles/bloxd.io/main.js` (Changed code · before: `L16839-L16849` → after: `L40766-L40769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40766-L40769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40766-L40769) · [Before (L16839-L16849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16839-L16849)

```diff
-             var zv, Pv;
-             let Sv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pv();
-             const [ev, dv] = null !== (zv = null === (Pv = gv(Sv, vv)) || void 0 === Pv ? void 0 : Pv.split(":")) && void 0 !== zv ? zv : [];
-             return ev === String(hv.c) && void 0 !== dv ? dv : null
-           }
- 
-           function ev(vv, zv) {
-             let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pv();
-             try {
-               null === Pv || void 0 === Pv || Pv.setItem(vv, `${String(hv.c)}:${zv}`)
-             } catch {}
+             return TT.filter((TT => {
+               let [, kT] = TT;
+               return kT
+             })).length / TT.length
```

#### 1058. `bundles/bloxd.io/main.js` (Changed code · before: `L16853-L16857` → after: `L40773-L40783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40773-L40783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40773-L40783) · [Before (L16853-L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16853-L16857)

```diff
-             try {
-               var Pv;
-               return null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.getItem(zv)) && void 0 !== Pv ? Pv : null
-             } catch {
-               return null
+             const cT = TT.filter((TT => {
+                 let [cT] = TT;
+                 return cT >= 1.5 * kT
+               })),
+               lT = cT.length >= 20 ? cT : TT;
+             let MT = 0;
+             for (const [OT] of lT) MT += 1 / OT;
+             const KT = lT.length / MT;
+             return {
+               busyMs: ST(lT) * KT,
+               frameMs: KT
```

#### 1059. `bundles/bloxd.io/main.js` (Changed code · before: `L16860-L16865` → after: `L40786-L40800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40786-L40800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40786-L40800) · [Before (L16860-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16860-L16865)

```diff
- 
-           function pv() {
-             try {
-               return window.localStorage
-             } catch {
-               return null
+           const aT = {
+             frameMs: null,
+             tickMs: null,
+             frameLimiter: "unknown",
+             mainBusyShare: null,
+             mainProbeDelayMs: null,
+             longAnimationFramesPerMin: null,
+             longAnimationFrameTimeShare: null,
+             longAnimationFrameScriptShare: null,
+             gpuPassMs: null,
+             gpuSubmitToDoneMs: null
+           };
+           class FT {
+             constructor(TT) {
+               this.minFrameIntervals = TT, this.frameTimeSumMs = 0, this.frameTimeCount = 0, this.tickMsSum = 0, this.foregroundFrames = 0, this.longAnimationFrameTracker = new vT, this.busyProbe = new hT, this.busyShare = new QT, this.intervalsToSkip = 0, this.gpuSource = null
```

#### 1060. `bundles/bloxd.io/main.js` (Changed code · before: `L16867-L16892` → after: `L40802-L40805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40802-L40805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40802-L40805) · [Before (L16867-L16892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16867-L16892)

```diff
-           }
-         }, , , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             C: () => wv,
-             G: () => Wv,
-             e: () => Gv,
-             i: () => iv,
-             l: () => sv,
-             m: () => Cv,
-             p: () => cv,
-             s: () => lv,
-             v: () => Nv,
-             z: () => av
-           });
-           var hv, Sv = Pv(670),
-             ev = Pv(678),
- ... (10 more removed lines; see GitHub link above)
+             start(TT, kT) {
+               this.gpuSource = TT, this.longAnimationFrameTracker.start(kT), this.busyProbe.start(((TT, kT) => {
+                 this.busyShare.onProbe(TT, kT)
+               }))
```

#### 1061. `bundles/bloxd.io/main.js` (Changed code · before: `L16894-L16903` → after: `L40807-L40808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40807-L40808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40807-L40808) · [Before (L16894-L16903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16894-L16903)

```diff
-             if ("object" !== typeof Pv || null === Pv) return null;
-             const {
-               claim: hv,
-               accountId: gv,
-               badOutcome: pv
-             } = Pv, dv = (0, Sv.b)(hv);
-             return null === dv || zv >= dv.expMs || null !== gv && "string" !== typeof gv || null !== pv && !ev.d.includes(pv) ? null : {
-               claim: dv,
-               accountId: gv,
-               badOutcome: pv
+             pN(TT) {
+               this.tickMsSum += TT
```

#### 1062. `bundles/bloxd.io/main.js` (Changed code · before: `L16905-L16915` → after: `L40810-L40811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40810-L40811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40810-L40811) · [Before (L16905-L16915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16905-L16915)

```diff
-           }
-           const Nv = dv((0, gv.l)((0, gv.i)(), pv), Date.now()),
-             lv = null !== (hv = null === Nv || void 0 === Nv ? void 0 : Nv.claim) && void 0 !== hv ? hv : null,
-             Tv = null === (null === Nv || void 0 === Nv ? void 0 : Nv.badOutcome) ? Nv.claim : null;
- 
-           function Wv(vv) {
-             const zv = (0, gv.i)();
-             try {
-               null === vv ? null === zv || void 0 === zv || zv.removeItem(pv) : null === zv || void 0 === zv || zv.setItem(pv, JSON.stringify(vv))
-             } catch (Pv) {
-               console.warn("Couldn't keep the diag claim", Pv)
+             onGpuSampleStarted() {
+               this.intervalsToSkip = 2
```

#### 1063. `bundles/bloxd.io/main.js` (Changed code · before: `L16917-L16935` → after: `L40813-L40845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40813-L40845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40813-L40845) · [Before (L16917-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16917-L16935)

```diff
-           }
- 
-           function wv() {
-             return dv((0, gv.l)((0, gv.i)(), pv), Date.now())
-           }
- 
-           function av(vv) {
-             const zv = wv();
-             null !== zv && null === zv.badOutcome && zv.claim.claimId === (null === lv || void 0 === lv ? void 0 : lv.claimId) && Wv({
-               ...zv,
-               badOutcome: vv
-             })
-           }
- 
-           function sv() {
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tv;
- ... (3 more removed lines; see GitHub link above)
+             onFrameStart(TT, kT, cT) {
+               const lT = null !== kT && 0 === this.intervalsToSkip;
+               this.intervalsToSkip = Math.max(0, this.intervalsToSkip - 1), this.busyShare.onFrameStart(TT, lT), lT && (this.frameTimeSumMs += kT, this.frameTimeCount++), cT && this.foregroundFrames++
+             }
+             reset() {
+               var TT;
+               null === (TT = this.gpuSource) || void 0 === TT || TT.reset()
+             }
+             snapshotAndReset(TT, kT) {
+               var cT, lT, MT;
+               const OT = this.frameTimeCount >= this.minFrameIntervals,
+                 yT = OT ? this.frameTimeSumMs / this.frameTimeCount : null,
+                 fT = this.longAnimationFrameTracker.snapshotAndReset(),
+                 IT = this.busyShare.snapshotAndReset(this.busyProbe.running, KT(TT)),
+                 AT = null === (cT = this.gpuSource) || void 0 === cT ? void 0 : cT.snapshotAndReset(),
+                 CT = {
+ ... (17 more added lines; see GitHub link above)
```

#### 1064. `bundles/bloxd.io/main.js` (Changed code · before: `L16938-L16968` → after: `L40848-L40849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40848-L40849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40848-L40849) · [Before (L16938-L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16938-L16968)

```diff
- 
-           function Cv() {
-             var vv;
-             let zv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tv;
-             return null !== (vv = null === zv || void 0 === zv ? void 0 : zv.arm.renderer) && void 0 !== vv ? vv : null
-           }
- 
-           function iv(vv) {
-             var zv;
-             let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tv;
-             return null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.arm.clientOptions[vv]) && void 0 !== zv ? zv : null
-           }
- 
-           function cv() {
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lv;
-             return !0 === (null === vv || void 0 === vv ? void 0 : vv.arm.faro)
- ... (15 more removed lines; see GitHub link above)
+         },
+         2844: (TT, kT, cT) => {
```

#### 1065. `bundles/bloxd.io/main.js` (Changed code · before: `L16970` → after: `L40851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40851) · [Before (L16970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16970)

```diff
-             b: () => Cv
+             d: () => KT
```

#### 1066. `bundles/bloxd.io/main.js` (Changed code · before: `L16972-L16980` → after: `L40853-L40854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40853-L40854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40853-L40854) · [Before (L16972-L16980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16972-L16980)

```diff
-           const hv = ["js", "wasm"];
- 
-           function Sv(vv) {
-             return "object" === typeof vv && null !== vv && !Array.isArray(vv)
-           }
- 
-           function ev(vv, zv) {
-             return vv.includes(zv)
-           }
+           var lT = cT(2840),
+             MT = cT(2842);
```

#### 1067. `bundles/bloxd.io/main.js` (Changed code · before: `L16982-L16983` → after: `L40856-L40857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40856-L40857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40856-L40857) · [Before (L16982-L16983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16982-L16983)

```diff
-             constructor(vv, zv, Pv) {
-               this.fields = vv, this.where = zv, this.errors = Pv
+             constructor() {
+               this.paused = null, this.cpuFrameMsSum = 0, this.cpuFrameMsCount = 0, this.renderTickStartMs = -1, this.dropNextInterval = !1, this.prevRenderTickBeginMs = -1, this.prevAnimationFrameMs = -1, this.prevAnimationFrameIntervalMs = -1, this.adjacentPairMaxMs = new Float … [truncated]
```

#### 1068. `bundles/bloxd.io/main.js` (Changed code · before: `L16985-L16986` → after: `L40859-L40860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40859-L40860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40859-L40860) · [Before (L16985-L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16985-L16986)

```diff
-             fail(vv) {
-               this.errors.push(`${this.where}${vv}`)
+             get started() {
+               return null !== this.paused
```

#### 1069. `bundles/bloxd.io/main.js` (Changed code · before: `L16988-L16989` → after: `L40862-L40863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40862-L40863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40862-L40863) · [Before (L16988-L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16988-L16989)

```diff
-             onlyKnown(vv) {
-               for (const zv of Object.keys(this.fields)) vv.includes(zv) || this.fail(`unknown field ${JSON.stringify(zv)}`)
+             start(TT, kT, cT) {
+               this.paused = TT, this.limiterTelemetry.start(kT, cT)
```

#### 1070. `bundles/bloxd.io/main.js` (Changed code · before: `L16991-L16992` → after: `L40865-L40872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40865-L40872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40865-L40872) · [Before (L16991-L16992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16991-L16992)

```diff
-             has(vv) {
-               return void 0 !== this.fields[vv]
+             onAnimationFrame(TT) {
+               if (this.isSampling()) {
+                 if (-1 !== this.prevAnimationFrameMs) {
+                   const kT = TT - this.prevAnimationFrameMs;
+                   if (kT < 1.5 || kT > 400) return void this.resetAnimationFrameChain(); - 1 !== this.prevAnimationFrameIntervalMs && this.adjacentPairs < 8192 && (this.adjacentPairMaxMs[this.adjacentPairs++] = Math.max(kT, this.prevAnimationFrameIntervalMs)), this.prevAnimationF … [truncated]
+                 }
+                 this.prevAnimationFrameMs = TT
+               } else this.discardRefreshWindow()
```

#### 1071. `bundles/bloxd.io/main.js` (Changed code · before: `L16994-L16997` → after: `L40874-L40881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40874-L40881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40874-L40881) · [Before (L16994-L16997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16994-L16997)

```diff
-             string(vv, zv, Pv) {
-               var hv;
-               const Sv = null !== (hv = this.fields[vv]) && void 0 !== hv ? hv : Pv;
-               return "string" === typeof Sv && zv.test(Sv) ? Sv : (this.fail(`${vv} must be a string matching ${String(zv)}`), "")
+             onFrameStart(TT) {
+               if (!this.isSampling()) return this.limiterTelemetry.onFrameStart(TT, null, !1), void this.resetRenderTickChain();
+               const kT = TT - this.prevRenderTickBeginMs;
+               if (this.limiterTelemetry.onFrameStart(TT, -1 !== this.prevRenderTickBeginMs && kT <= 400 ? kT : null, !0), -1 !== this.prevRenderTickBeginMs && !this.dropNextInterval) {
+                 const kT = TT - this.prevRenderTickBeginMs;
+                 kT >= 1.5 && kT <= 400 && (this.frameIntervalSumMs += kT, this.frameIntervalSumSqMs += kT * kT, this.frameIntervalCount++)
+               }
+               this.dropNextInterval = !1, this.prevRenderTickBeginMs = TT, this.renderTickStartMs = TT
```

#### 1072. `bundles/bloxd.io/main.js` (Changed code · before: `L16999-L17004` → after: `L40883-L40884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40883-L40884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40883-L40884) · [Before (L16999-L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L16999-L17004)

```diff
-             whole(vv, zv, Pv, hv) {
-               var Sv;
-               const ev = null !== (Sv = this.fields[vv]) && void 0 !== Sv ? Sv : hv;
-               return function(vv, zv, Pv) {
-                 return Number.isInteger(vv) && vv >= zv && vv <= Pv
-               }(ev, zv, Pv) ? ev : (this.fail(`${vv} must be a whole number from ${zv} to ${Pv}`), zv)
+             onFrameEnd(TT) {
+               this.onFrameCpu(TT - this.renderTickStartMs)
```

#### 1073. `bundles/bloxd.io/main.js` (Changed code · before: `L17006-L17008` → after: `L40886-L40887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40886-L40887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40886-L40887) · [Before (L17006-L17008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17006-L17008)

```diff
-             wholeOrNull(vv, zv, Pv) {
-               var hv;
-               return null === (null !== (hv = this.fields[vv]) && void 0 !== hv ? hv : null) ? null : this.whole(vv, zv, Pv)
+             onFrameCpu(TT) {
+               document.hidden || this.renderTickStartMs < 0 ? this.renderTickStartMs = -1 : (this.renderTickStartMs = -1, TT >= 0 && TT < 100 ? (this.cpuFrameMsSum += TT, this.cpuFrameMsCount++) : TT >= 100 && (this.dropNextInterval = !0))
```

#### 1074. `bundles/bloxd.io/main.js` (Changed code · before: `L17010-L17013` → after: `L40889-L40890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40889-L40890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40889-L40890) · [Before (L17010-L17013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17010-L17013)

```diff
-             boolean(vv) {
-               const zv = this.fields[vv];
-               if ("boolean" === typeof zv) return zv;
-               void 0 !== zv && this.fail(`${vv} must be true or false`)
+             onGpuSampleStarted() {
+               this.limiterTelemetry.onGpuSampleStarted()
```

#### 1075. `bundles/bloxd.io/main.js` (Changed code · before: `L17015-L17044` → after: `L40892-L40893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40892-L40893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40892-L40893) · [Before (L17015-L17044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17015-L17044)

```diff
-             oneOf(vv, zv) {
-               let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-               const hv = this.fields[vv];
-               return ev(zv, hv) ? hv : ((Pv || void 0 !== hv && null !== hv) && this.fail(`${vv} must be one of ${zv.join(", ")}`), null)
-             }
-             list(vv, zv) {
-               let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
-                 hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-               const Sv = this.fields[vv];
-               if (void 0 === Sv) return;
-               if (Array.isArray(Sv) && Sv.length >= hv && Sv.length <= Pv && new Set(Sv).size === Sv.length && Sv.every((vv => zv instanceof RegExp ? "string" === typeof vv && zv.test(vv) : ev(zv, vv)))) return Sv;
-               {
-                 const Sv = zv instanceof RegExp ? `strings matching ${String(zv)}` : `values from ${zv.join(", ")}`;
-                 this.fail(`${vv} must be a list of ${hv} to ${Pv} distinct ${Sv}`)
-               }
-             }
- ... (14 more removed lines; see GitHub link above)
+             pN(TT) {
+               this.isSampling() && this.limiterTelemetry.pN(TT)
```

#### 1076. `bundles/bloxd.io/main.js` (Changed code · before: `L17046` → after: `L40895-L40932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40895-L40932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40895-L40932) · [Before (L17046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17046)

```diff
-             object(vv) {
+             onVisibilityChange() {
+               this.resetRenderTickChain(), this.discardRefreshWindow()
+             }
+             snapshotAndReset() {
+               var TT;
+               const kT = this.cpuFrameMsCount > 0 ? this.cpuFrameMsSum / this.cpuFrameMsCount : null;
+               this.cpuFrameMsSum = 0, this.cpuFrameMsCount = 0;
+               let cT = null;
+               this.isSampling() || this.discardRefreshWindow(), this.adjacentPairs >= 30 && (cT = function(TT) {
+                 const kT = Math.max(3, Math.floor(.1 * (TT.length - 1))),
+                   cT = OT(1e3 / TT[kT]),
+                   lT = function(TT) {
+                     const kT = 3,
+                       cT = 1.1 * TT[kT];
+                     let lT = kT + 1;
+                     for (; lT < TT.length && TT[lT] <= cT;) lT++;
+ ... (22 more added lines; see GitHub link above)
```

#### 1077. `bundles/bloxd.io/main.js` (Changed code · before: `L17048-L17050` → after: `L40934-L40948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40934-L40948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40934-L40948) · [Before (L17048-L17050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17048-L17050)

```diff
-               let Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-               const hv = null !== (zv = this.fields[vv]) && void 0 !== zv ? zv : Pv ? null : {};
-               return Sv(hv) || this.fail(`${vv} must be an object`), new gv(Sv(hv) ? hv : {}, `${this.where}${vv}.`, this.errors)
+               null !== cT && this.refreshRateVoteCounts.set(cT, (null !== (KT = this.refreshRateVoteCounts.get(cT)) && void 0 !== KT ? KT : 0) + 1);
+               this.latchedRefreshHz = this.computeHighestConfirmedRefreshHz();
+               const yT = null === cT ? null : this.latchedRefreshHz;
+               let fT = null;
+               if (null !== yT && null !== lT && null !== kT) {
+                 1e3 / lT < .85 * yT && (fT = Math.min(1, Math.max(0, kT / lT)))
+               }
+               this.adjacentPairs = 0, this.frameIntervalSumMs = 0, this.frameIntervalSumSqMs = 0, this.frameIntervalCount = 0;
+               return {
+                 cpuFrameMs: kT,
+                 refreshHz: yT,
+                 cpuBottleneck: fT,
+                 frameIntervalCv: MT,
+                 ...this.limiterTelemetry.snapshotAndReset(null !== (TT = this.latchedRefreshHz) && void 0 !== TT ? TT : this.provisionalRefreshHz(), cT)
+               }
```

#### 1078. `bundles/bloxd.io/main.js` (Changed code · before: `L17052-L17054` → after: `L40950-L40954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40950-L40954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40950-L40954) · [Before (L17052-L17054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17052-L17054)

```diff
-             objects(vv, zv, Pv) {
-               const hv = this.fields[vv];
-               return !Array.isArray(hv) || hv.length < zv || hv.length > Pv || !hv.every(Sv) ? (this.fail(`${vv} must be a list of ${zv} to ${Pv} objects`), []) : hv.map(((zv, Pv) => new gv(zv, `${this.where}${vv}[${Pv}].`, this.errors)))
+             provisionalRefreshHz() {
+               let TT = null,
+                 kT = 2;
+               for (const [cT, lT] of this.refreshRateVoteCounts) lT > kT && (TT = cT, kT = lT);
+               return TT
```

#### 1079. `bundles/bloxd.io/main.js` (Changed code · before: `L17056-L17075` → after: `L40956-L40957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40956-L40957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40956-L40957) · [Before (L17056-L17075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17056-L17075)

```diff
-           }
-           const pv = ["renderlite", "renderprobe", "frame", "webgpuloss"],
-             dv = ["lite", "webgl2"],
-             Nv = {
-               terrainFetch: ["texture", "storage"],
-               indirectDraws: ["off", "on"],
-               sceneDepth: ["off", "on"]
-             },
-             lv = 5e3,
-             Tv = /^[0-9a-f]{16}$/;
-           const Wv = /^[a-z0-9][a-z0-9._@-]{0,63}$/,
-             wv = /^[a-z0-9_-]{1,16}$/;
- 
-           function av(vv) {
-             const zv = Object.keys(Nv);
-             vv.onlyKnown(zv);
- ... (4 more removed lines; see GitHub link above)
+             isSampling() {
+               return !document.hidden && null !== this.paused && !this.paused()
```

#### 1080. `bundles/bloxd.io/main.js` (Changed code · before: `L17077-L17088` → after: `L40959-L40976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40959-L40976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40959-L40976) · [Before (L17077-L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17077-L17088)

```diff
-             return Pv
-           }
- 
-           function sv(vv, zv) {
-             var Pv, Sv;
-             return vv.onlyKnown(["armId", "faro", "topics", "client", "renderer", "clientOptions"]), {
-               armId: null !== zv && void 0 !== zv ? zv : vv.string("armId", wv),
-               faro: null === (Pv = vv.boolean("faro")) || void 0 === Pv || Pv,
-               topics: null !== (Sv = vv.list("topics", pv, pv.length, 0)) && void 0 !== Sv ? Sv : [],
-               client: vv.oneOf("client", hv),
-               renderer: vv.oneOf("renderer", dv),
-               clientOptions: av(vv.object("clientOptions"))
+             resetRenderTickChain() {
+               this.prevRenderTickBeginMs = -1, this.renderTickStartMs = -1, this.dropNextInterval = !1, this.limiterTelemetry.reset()
+             }
+             resetAnimationFrameChain() {
+               this.prevAnimationFrameMs = -1, this.prevAnimationFrameIntervalMs = -1
+             }
+             discardRefreshWindow() {
+               this.resetAnimationFrameChain(), this.adjacentPairs = 0
+             }
+             computeHighestConfirmedRefreshHz() {
+               let TT = 0;
+               for (const cT of this.refreshRateVoteCounts.values()) TT += cT;
+               if (TT < 20) return this.latchedRefreshHz;
+               let kT = this.latchedRefreshHz;
+               for (const [cT, lT] of this.refreshRateVoteCounts) {
+                 lT >= 5 && lT >= .05 * TT && (null === kT || cT > kT) && (kT = cT)
+ ... (2 more added lines; see GitHub link above)
```

#### 1081. `bundles/bloxd.io/main.js` (Changed code · before: `L17093-L17106` → after: `L40981-L40987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40981-L40987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40981-L40987) · [Before (L17093-L17106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17093-L17106)

```diff
-             var zv;
-             if (!Sv(vv)) return null;
-             const Pv = [],
-               hv = new gv(vv, "", Pv);
-             hv.onlyKnown(["claimId", "ruleId", "arm", "perClientLines", "iosCapOverride", "expMs"]);
-             const ev = {
-               claimId: hv.string("claimId", Tv),
-               ruleId: hv.string("ruleId", Wv),
-               arm: sv(hv.object("arm"), null),
-               perClientLines: hv.whole("perClientLines", 1, lv),
-               iosCapOverride: null !== (zv = hv.boolean("iosCapOverride")) && void 0 !== zv && zv,
-               expMs: hv.whole("expMs", 0, Number.MAX_SAFE_INTEGER)
-             };
-             return Pv.length > 0 ? null : ev
+             let kT = lT.d[0],
+               cT = Math.abs(TT - kT);
+             for (const MT of lT.d) {
+               const lT = Math.abs(TT - MT);
+               lT < cT && (kT = MT, cT = lT)
+             }
+             return kT
```

#### 1082. `bundles/bloxd.io/main.js` (Changed code · before: `L17108` → after: `L40989-L40990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40989-L40990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40989-L40990) · [Before (L17108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17108)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+         },
+         1805: (TT, kT, cT) => {
```

#### 1083. `bundles/bloxd.io/main.js` (Changed code · before: `L17110-L17111` → after: `L40992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40992) · [Before (L17110-L17111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17110-L17111)

```diff
-             d: () => Sv,
-             h: () => hv
+             c: () => yT
```

#### 1084. `bundles/bloxd.io/main.js` (Changed code · before: `L17113-L17115` → after: `L40994-L41034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R40994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L40994-L41034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L40994-L41034) · [Before (L17113-L17115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17113-L17115)

```diff
-           const hv = "/index/diag/match",
-             Sv = ["webgpuLoss", "decline", "pageKill", "reloadOntoJs", "noTerrain"]
-         }, , (vv, zv, Pv) => {
+           var lT = cT(47),
+             MT = cT(1772),
+             KT = cT(1814),
+             OT = cT(328);
+           const yT = new class {
+             constructor() {
+               this.homepageRecorded = !1, this.secondsToLoadOrReloadHomepage = null, this.gameLoadStart = null, this.gameLoadOrReloadStart = null, this.secondsToLoadGame = null, this.secondsToLoadOrReloadGame = null, this.engineConstructedThisPageLoad = !1
+             }
+             markHomepageLoadEnd() {
+               if (this.homepageRecorded || !KT.e) return;
+               this.homepageRecorded = !0;
+               const TT = performance.now() / 1e3;
+               this.secondsToLoadOrReloadHomepage = TT, MT.h && lT.e.setItem(OT.Gb, TT)
+             }
+             markGameLoadStart() {
+               if (!KT.e) return this.gameLoadStart = null, void(this.gameLoadOrReloadStart = null);
+ ... (25 more added lines; see GitHub link above)
```

#### 1085. `bundles/bloxd.io/main.js` (Changed code · before: `L17118-L17123` → after: `L41038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41038) · [Before (L17118-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17118-L17123)

```diff
-             h: () => Gv,
-             j: () => nv,
-             m: () => Yv,
-             p: () => Ov,
-             s: () => sv,
-             u: () => cv
+             g: () => xT
```

#### 1086. `bundles/bloxd.io/main.js` (Changed code · before: `L17125-L17137` → after: `L41040-L41041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41040-L41041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41040-L41041) · [Before (L17125-L17137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17125-L17137)

```diff
-           var hv = Pv(162),
-             Sv = Pv(266),
-             ev = Pv(686),
-             gv = Pv(660),
-             pv = Pv(73),
-             dv = Pv(101),
-             Nv = Pv(93),
-             lv = Pv(278),
-             Tv = Pv(688);
-           const Wv = new Map([
-             ["intel_gen7_8", "all"],
-             ["nvidia_pre_turing", "webgl"]
-           ]);
+           var lT = cT(1814),
+             MT = cT(2916);
```

#### 1087. `bundles/bloxd.io/main.js` (Changed code · before: `L17139-L17140` → after: `L41043-L41045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41043-L41045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41043-L41045) · [Before (L17139-L17140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17139-L17140)

```diff
-           function wv(vv) {
-             return null !== vv && "all" === Wv.get(vv)
+           function KT() {
+             var TT, kT;
+             return null !== (TT = null === (kT = performance.getEntriesByType("navigation")[0]) || void 0 === kT ? void 0 : kT.activationStart) && void 0 !== TT ? TT : 0
```

#### 1088. `bundles/bloxd.io/main.js` (Changed code · before: `L17142` → after: `L41047-L41141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41047-L41141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41047-L41141) · [Before (L17142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17142)

```diff
-           const av = "wasmClientMisdrawnGpu";
+           const OT = "undefined" !== typeof document ? document : null,
+             yT = new class {
+               constructor(TT) {
+                 this.visit = void 0, this.visitEndedAtMs = 1 / 0, this.visitInteractionCount = null, this.firstInput = null, this.longestInteractions = [], this.interactionIds = new Set, this.fcpStartMs = null, this.lcpStartMs = null, this.firstHiddenAtMs = void 0, this.readActiv … [truncated]
+               }
+               inVisit(TT) {
+                 return ("open" === this.visit || "ended" === this.visit) && TT < this.visitEndedAtMs
+               }
+               pageHidden(TT) {
+                 this.firstHiddenAtMs = Math.min(this.firstHiddenAtMs, TT)
+               }
+               firstInputEntry(TT) {
+                 var kT;
+                 null === this.firstInput && this.inVisit(TT.startTime) && (this.firstInput = {
+                   id: null !== (kT = TT.interactionId) && void 0 !== kT ? kT : 0,
+                   latencyMs: TT.duration
+ ... (79 more added lines; see GitHub link above)
```

#### 1089. `bundles/bloxd.io/main.js` (Changed code · before: `L17145-L17156` → after: `L41144-L41147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41144-L41147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41144-L41147) · [Before (L17145-L17156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17145-L17156)

```diff
-             if (wv(vv)) try {
-               window.localStorage.setItem(av, vv)
-             } catch {}
-           }
-           const Cv = new Set(["android", "ios"]),
-             iv = new Set(["windows", "chrome_os"]);
- 
-           function cv() {
-             try {
-               return (0, pv.getOperatingSystem)()
-             } catch {
-               return null
+             const kT = yT;
+             if (!0 !== (null === OT || void 0 === OT ? void 0 : OT.prerendering)) {
+               const TT = KT();
+               for (const cT of performance.getEntriesByType("visibility-state")) "hidden" === cT.name && cT.startTime >= TT && kT.pageHidden(cT.startTime)
```

#### 1090. `bundles/bloxd.io/main.js` (Changed code · before: `L17167-L17172` → after: `L41177-L41179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41177-L41179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41177-L41179) · [Before (L17167-L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17167-L17172)

```diff
-             try {
-               var vv;
-               const zv = JSON.parse(null !== (vv = window.localStorage.getItem(mv)) && void 0 !== vv ? vv : "null");
-               return (null === zv || void 0 === zv ? void 0 : zv.browser) === (0, lv.d)() && "string" === typeof zv.gl ? zv : null
-             } catch {
-               return null
+             for (const cT of null !== (TT = null === (kT = fT) || void 0 === kT ? void 0 : kT.takeRecords()) && void 0 !== TT ? TT : []) {
+               var TT, kT;
+               yT.eventTiming(cT)
```

#### 1091. `bundles/bloxd.io/main.js` (Changed code · before: `L17175-L17249` → after: `L41183-L41184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41183-L41184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41183-L41184) · [Before (L17175-L17249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17175-L17249)

```diff
- 
-           function fv(vv, zv) {
-             try {
-               window.localStorage.setItem(mv, JSON.stringify({
-                 browser: (0, lv.d)(),
-                 gl: vv,
-                 adapter: zv
-               }))
-             } catch {}
-           }
-           let Fv = null;
- 
-           function Yv() {
-             var vv;
-             null === Fv && (Fv = function() {
-               let vv = null;
- ... (59 more removed lines; see GitHub link above)
+         },
+         1499: (TT, kT, cT) => {
```

#### 1092. `bundles/bloxd.io/main.js` (Changed code · before: `L17251-L17256` → after: `L41186-L41187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41186-L41187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41186-L41187) · [Before (L17251-L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17251-L17256)

```diff
-             d: () => Tv,
-             g: () => sv,
-             h: () => av,
-             i: () => dv,
-             m: () => wv,
-             o: () => Wv
+             c: () => yT,
+             d: () => fT
```

#### 1093. `bundles/bloxd.io/main.js` (Changed code · before: `L17258-L17307` → after: `L41189-L41192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41189-L41192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41189-L41192) · [Before (L17258-L17307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17258-L17307)

```diff
-           var hv = Pv(292),
-             Sv = Pv(284),
-             ev = Pv(650),
-             gv = Pv(660);
-           const pv = new Map([
-             ["nvidia_pre_turing", {
-               test: "preturing_wasm_v1",
-               populationKey: "preTuringWasmPopulation",
-               exemptLabel: hv.g
-             }],
-             ["intel_gen7_8", {
-               test: "intel_gen78_wasm_v1",
-               populationKey: "intelGen78WasmPopulation",
-               exemptLabel: hv.c
-             }]
-           ]);
- ... (34 more removed lines; see GitHub link above)
+           var lT = cT(211),
+             MT = cT(31),
+             KT = cT(1508);
+           const OT = ["gameNameWithVariation", "customGamePlace", "gameAnalyticsId"];
```

#### 1094. `bundles/bloxd.io/main.js` (Changed code · before: `L17310` → after: `L41195-L41199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41195-L41199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41195-L41199) · [Before (L17310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17310)

```diff
-             return [...pv.keys()].filter((vv => lv(vv)))
+             const TT = MT.e.get("router");
+             return null === TT ? {
+               route: "",
+               game: ""
+             } : fT(TT.state.matches)
```

#### 1095. `bundles/bloxd.io/main.js` (Changed code · before: `L17314-L17343` → after: `L41203-L41215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41203-L41215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41203-L41215) · [Before (L17314-L17343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17314-L17343)

```diff
-             for (const [zv, Pv] of pv)
-               if (Pv.test === vv) return lv(zv) ? null : Pv.exemptLabel;
-             return null
-           }
-         }, , (vv, zv, Pv) => {
-           function hv(vv) {
-             const zv = () => {
-               "function" === typeof window.requestIdleCallback ? window.requestIdleCallback(vv, {
-                 timeout: 5e3
-               }) : setTimeout(vv, 1e3)
-             };
-             "complete" === document.readyState ? zv() : window.addEventListener("load", zv, {
-               once: !0
-             })
-           }
-           Pv.d(zv, {
- ... (14 more removed lines; see GitHub link above)
+             let kT = "",
+               cT = "";
+             for (const lT of TT) {
+               const TT = lT.route.path;
+               TT && (kT = TT.startsWith("/") ? TT : `${kT.replace(/\/$/,"")}/${TT}`);
+               for (const kT of OT) {
+                 var MT;
+                 cT = null !== (MT = lT.params[kT]) && void 0 !== MT ? MT : cT
+               }
+             }
+             return {
+               route: (0, KT.d)(kT, lT.L, "other"),
+               game: (0, KT.d)(cT, lT.y, "other")
```

#### 1096. `bundles/bloxd.io/main.js` (Changed code · before: `L17350-L17375` → after: `L41218-L41219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41218-L41219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41218-L41219) · [Before (L17350-L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17350-L17375)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             e: () => hv
-           });
-           const hv = "undefined" !== typeof navigator && navigator.userAgent.includes("Firefox/")
-         }, , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             c: () => hv
-           });
-           const hv = Object.keys({
-             toastAndTray: !0,
-             trayOnly: !0,
-             off: !0
-           })
-         }, , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
- ... (10 more removed lines; see GitHub link above)
+         },
+         2888: (TT, kT, cT) => {
```

#### 1097. `bundles/bloxd.io/main.js` (Changed code · before: `L17378-L17381` → after: `L41222-L41223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41222-L41223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41222-L41223) · [Before (L17378-L17381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17378-L17381)

```diff
-             e: () => Sv,
-             g: () => hv,
-             j: () => gv,
-             k: () => pv
+             f: () => MT,
+             g: () => KT
```

#### 1098. `bundles/bloxd.io/main.js` (Changed code · before: `L17383-L17385` → after: `L41225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41225) · [Before (L17383-L17385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17383-L17385)

```diff
-           const hv = 1.2,
-             Sv = Math.PI - .1,
-             ev = 120;
+           const lT = 15e3;
```

#### 1099. `bundles/bloxd.io/main.js` (Changed code · before: `L17387-L17388` → after: `L41227-L41228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41227-L41228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41227-L41228) · [Before (L17387-L17388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17387-L17388)

```diff
-           function gv(vv) {
-             return Math.min(hv * vv / 100, Sv)
+           function MT(TT, kT) {
+             return TT[kT]
```

#### 1100. `bundles/bloxd.io/main.js` (Changed code · before: `L17391-L17396` → after: `L41231-L41233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41231-L41233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41231-L41233) · [Before (L17391-L17396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17391-L17396)

```diff
-           function pv(vv) {
-             let {
-               touchscreenSensitivity: zv,
-               cameraFOV: Pv
-             } = vv;
-             return zv * Math.tan(gv(Pv) / 2) / Math.tan(gv(ev) / 2)
+           function KT(TT, kT) {
+             const cT = MT(TT, kT);
+             return "number" === typeof cT && Number.isFinite(cT) ? cT : void 0
```

#### 1101. `bundles/bloxd.io/main.js` (Changed code · before: `L17398-L17403` → after: `L41235-L41247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41235-L41247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41235-L41247) · [Before (L17398-L17403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17398-L17403)

```diff
-         }, , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             e: () => mv,
-             h: () => jv,
-             k: () => Gv,
-             m: () => fv
+         },
+         1082: (TT, kT, cT) => {
+           cT.r(kT), cT.d(kT, {
+             filterFaroItem: () => VT,
+             getPageType: () => oT,
+             isPageLoadSampled: () => NT,
+             vt: () => gT,
+             logClientMeasurement: () => RT,
+             logDiagItem: () => dT,
+             setDiagFaroAttributes: () => ZT,
+             setFaroUser: () => uT,
+             startWebVitalsLogging: () => LT,
+             thisPageLoadSampled: () => QT
```

#### 1102. `bundles/bloxd.io/main.js` (Changed code · before: `L17405-L17440` → after: `L41249-L41261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41249-L41261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41249-L41261) · [Before (L17405-L17440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17405-L17440)

```diff
-           var hv = Pv(1027),
-             Sv = Pv(729),
-             ev = Pv(738),
-             gv = Pv(746),
-             pv = Pv(748),
-             dv = Pv(757),
-             Nv = Pv(763),
-             lv = Pv(997),
-             Tv = Pv(1024),
-             Wv = Pv(108),
-             wv = Pv(209),
-             av = Pv(626),
-             sv = Pv(302),
-             Cv = Pv(1002);
-           const iv = function() {
-               let vv = "bloxd.io";
- ... (20 more removed lines; see GitHub link above)
+           var lT = cT(232),
+             MT = cT(623),
+             KT = cT(666),
+             OT = cT(159),
+             yT = cT(1085),
+             fT = cT(651),
+             xT = cT(1089);
+           const IT = "https://jotunn.bloxd.io/r",
+             AT = .01,
+             CT = 100,
+             jT = /\.js(?:[?#]|$)/,
+             vT = /:(wasm-function\[\d+\]):0x([0-9a-f]+)$/,
+             tT = /^([0-9a-f]{16})\.(\d+)\.?$/;
```

#### 1103. `bundles/bloxd.io/main.js` (Changed code · before: `L17443` → after: `L41264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41264) · [Before (L17443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17443)

```diff
-             return iv
+             return !(0, lT.l)() && !(0, OT.c)()
```

#### 1104. `bundles/bloxd.io/main.js` (Changed code · before: `L17448-L17449` → after: `L41287-L41288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41287-L41288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41287-L41288) · [Before (L17448-L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17448-L17449)

```diff
-             const zv = null !== (vv = Gv().availableGameNamesWithVariation.categoryGroup) && void 0 !== vv ? vv : [];
-             return (0, lv.i)(zv)
+             const cT = null !== (kT = TT.toLowerCase().split("/")[1]) && void 0 !== kT ? kT : "";
+             return zT.has(cT) ? "home" : JT.has(cT) ? "game" : "play" === cT ? "play" : "other"
```

#### 1105. `bundles/bloxd.io/main.js` (Changed code · before: `L17453-L17454` → after: `L41292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41292) · [Before (L17453-L17454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17453-L17454)

```diff
-             const vv = (0, Tv.d)(Gv());
-             return hv.f.filter((zv => vv.includes(zv)))
+             return oT("undefined" === typeof location ? "/" : location.pathname)
```

#### 1106. `bundles/bloxd.io/main.js` (Changed code · before: `L17457-L17484` → after: `L41296-L41321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41296-L41321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41296-L41321) · [Before (L17457-L17484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17457-L17484)

```diff
-           function fv(vv, zv) {
-             const Pv = vv.trim().toLowerCase();
-             if (!Pv) return [];
-             const hv = new Set((0, sv.Pb)(Pv));
-             return (0, Tv.d)(Gv()).filter((vv => {
-               if ((0, Cv.l)(vv)) return !1;
-               const Sv = Nv.e[vv];
-               return !(0, av.N)(Sv) && (zv(Sv.title).toLowerCase().includes(Pv) || zv(Sv.description).toLowerCase().includes(Pv) || hv.has(Sv.type))
-             }))
-           }
-         }, , , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             e: () => hv
-           });
-           const hv = {
-             title: "Escape the Forest",
- ... (12 more removed lines; see GitHub link above)
+           function GT(TT) {
+             const kT = TT.payload;
+             if (!kT.stacktrace) return TT;
+             const lT = new URL(cT.p, location.href).href,
+               MT = kT.stacktrace.frames.map((TT => function(TT, kT) {
+                 const cT = vT.exec(TT.filename),
+                   lT = cT && tT.exec(TT.function);
+                 return cT && lT ? {
+                   ...TT,
+                   filename: `app:///wasm/${lT[1]}`,
+                   function: cT[1],
+                   lineno: 1,
+                   colno: parseInt(cT[2], 16) - Number(lT[2])
+                 } : TT.filename.startsWith(kT) ? {
+                   ...TT,
+                   filename: `app:///${TT.filename.slice(kT.length).split(/[?#]/)[0]}`
+ ... (10 more added lines; see GitHub link above)
```

#### 1107. `bundles/bloxd.io/main.js` (Changed code · before: `L17488-L17517` → after: `L41325-L41337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41325-L41337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41325-L41337) · [Before (L17488-L17517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17488-L17517)

```diff
-         }, , , , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => hv
-           });
-           const hv = {
-             title: "bloxd.io",
-             availableGameNamesWithVariation: {
-               topGameGroup: [
-                 [
-                   ["classic", "classic_creative", "plots", "greenville", "oneBlock", "eviltower", "doodle", "parkour", "hideseek"]
-                 ]
-               ]
-             },
-             homeRowSize: 6,
-             y8AppId: "634d5cecb4439c4ae71e9d1f",
-             gameConfigOverrides: {
- ... (14 more removed lines; see GitHub link above)
+ 
+           function VT(TT) {
+             if ("exception" === TT.type) {
+               const {
+                 context: lT,
+                 stacktrace: MT
+               } = TT.payload;
+               if (! function(TT) {
+                   return void 0 !== (null === TT || void 0 === TT ? void 0 : TT.fatal)
+                 }(lT)) {
+                 var kT;
+                 const TT = (null !== (kT = null === MT || void 0 === MT ? void 0 : MT.frames) && void 0 !== kT ? kT : []).find((TT => jT.test(TT.filename)));
+                 if (TT && (cT = TT.filename, yT.c.some((TT => cT.includes(TT))))) return null
```

#### 1108. `bundles/bloxd.io/main.js` (Changed code · before: `L17519-L18319` → after: `L41339-L41341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41339-L41341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41339-L41341) · [Before (L17519-L18319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L17519-L18319)

```diff
-             }
-           }
-         }, , , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             b: () => Sv
-           });
-           const hv = new Set(["schematicTester", "testGym"]);
-           const Sv = {
-             title: "bloxd.io",
-             availableGameNamesWithVariation: {
-               topGameGroup: [
-                 [
-                   [...hv]
-                 ]
-               ]
-             },
- ... (785 more removed lines; see GitHub link above)
+               if (!bT(lT)) {
+                 if (rT >= ST) return null;
+                 rT++
```

#### 1109. `bundles/bloxd.io/main.js` (Changed code · before: `L18321-L18346` → after: `L41343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41343) · [Before (L18321-L18346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18321-L18346)

```diff
-             };
-           for (const gz in Pz) Pz[gz].firebaseConfig && (Pz[gz].firebaseConfig.authDomain = "bloxd-ee1aa.firebaseapp.com");
-           uv.e.localGameName && void 0 === Pz[uv.e.localGameName] && (Pz[uv.e.localGameName] = {
-             ...pv.d,
-             title: uv.e.localGameName
-           });
-           const hz = {
-             "PBIhIlqvK-D1VhspOCUNZ": {
-               title: "\ud83c\udf3eGrow & Farm",
-               smallPicture: "bloxd_simulator_thumbnail_small",
-               largePicture: "bloxd_simulator_thumbnail_large"
-             },
-             "EhfHqCzt4B0-y-MWhBfRj": {
-               title: "Dungeons",
-               smallPicture: "bloxd_dungeon_thumbnail_small",
-               largePicture: "bloxd_dungeon_thumbnail_large"
- ... (10 more removed lines; see GitHub link above)
+               return ET(GT(TT))
```

#### 1110. `bundles/bloxd.io/main.js` (Changed code · before: `L18348` → after: `L41345-L41381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41345-L41381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41345-L41381) · [Before (L18348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18348)

```diff
-           };
+             var cT;
+             return ET("measurement" === TT.type ? function(TT) {
+               const kT = TT.payload,
+                 cT = {
+                   ...kT.context,
+                   page_type: eT,
+                   sent_page_type: HT(),
+                   site: OT.u
+                 },
+                 {
+                   longest_script_source_url: lT,
+                   longest_script_invoker: MT,
+                   longest_script_invoker_type: KT,
+                   longest_script_source_function_name: yT
+                 } = cT;
+               lT && (cT.longest_script_source_url = (0, xT.m)(lT));
+ ... (21 more added lines; see GitHub link above)
```

#### 1111. `bundles/bloxd.io/main.js` (Changed code · before: `L18352` → after: `L41385-L41395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41385-L41395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41385-L41395) · [Before (L18352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18352)

```diff
-             return null !== (zv = (0, hv.b)(Pz, vv)) && void 0 !== zv ? zv : null
+             const cT = null === (kT = TT.meta.page) || void 0 === kT ? void 0 : kT.url;
+             return cT ? {
+               ...TT,
+               meta: {
+                 ...TT.meta,
+                 page: {
+                   ...TT.meta.page,
+                   url: cT.split(/[?#]/)[0]
+                 }
+               }
+             } : TT
```

#### 1112. `bundles/bloxd.io/main.js` (Changed code · before: `L18356-L18784` → after: `L41399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41399) · [Before (L18356-L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18356-L18784)

```diff
-             var zv, Pv;
-             return null !== (zv = null === (Pv = Sz(vv)) || void 0 === Pv ? void 0 : Pv.shaderPackPolicy) && void 0 !== zv ? zv : "strict"
-           }
-         }, , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             b: () => hv
-           });
-           const hv = {
-             type: "Parkour",
-             title: "game:bloxdHop",
-             description: "game:bloxdHopDescription",
-             smallPicture: "bloxd_bloxdhop_thumbnail_small",
-             largePicture: "bloxd_bloxdhop_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
- ... (413 more removed lines; see GitHub link above)
+             mT = TT
```

#### 1113. `bundles/bloxd.io/main.js` (Changed code · before: `L18786-L18908` → after: `L41401-L41403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41401-L41403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41401-L41403) · [Before (L18786-L18908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18786-L18908)

```diff
-         }, , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             e: () => hv
-           });
-           const hv = {
-             type: "Minigames",
-             title: "game:murderMystery",
-             description: "game:murderMysteryDescription",
-             smallPicture: "bloxd_mudermystery_thumbnail_small",
-             largePicture: "bloxd_mudermystery_thumbnail_large",
-             thumbnailUseLongRatio: !1,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: [],
-             firebaseConfig: {
-               apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
- ... (107 more removed lines; see GitHub link above)
+ 
+           function uT(TT) {
+             aT = TT, null !== wT && XT((() => {}), "Failed to name the player in Faro")
```

#### 1114. `bundles/bloxd.io/main.js` (Changed code · before: `L18910-L18945` → after: `L41405-L41443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41405-L41443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41405-L41443) · [Before (L18910-L18945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18910-L18945)

```diff
-         }, , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => hv
-           });
-           const hv = {
-             type: "Horror",
-             title: "game:ninetyNineNightsEscapeTheForest",
-             description: "game:ninetyNineNightsDescription",
-             smallPicture: "bloxd_99_nights_thumbnail_small_v4",
-             largePicture: "bloxd_99_nights_thumbnail_large_v4",
-             videoPreview: "bloxd_99_nights_preview_video_2",
-             thumbnailUseLongRatio: !0,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
-             urlGameNameWithoutVariation: "escape-the-forest",
-             additionalMetaTags: [],
- ... (20 more removed lines; see GitHub link above)
+ 
+           function XT(TT, kT) {
+             (wT ??= cT.e(31).then((() => cT(6676))).then((TT => TT.initializeFaro({
+               url: IT,
+               app: {
+                 name: "bloxd-web",
+                 version: String(MT.d),
+                 release: String(MT.d),
+                 environment: (0, lT.g)() ? "preprod" : "prod"
+               },
+               instrumentations: QT ? [new TT.WebVitalsInstrumentation] : [],
+               webVitalsInstrumentation: {
+                 trackAttributionSources: !0
+               },
+               sessionTracking: {
+                 enabled: !1
+ ... (23 more added lines; see GitHub link above)
```

#### 1115. `bundles/bloxd.io/main.js` (Changed code · before: `L18947-L18983` → after: `L41445-L41452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41445-L41452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41445-L41452) · [Before (L18947-L18983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18947-L18983)

```diff
-         }, , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => hv
-           });
-           const hv = {
-             type: "Parkour",
-             title: "game:rocketObby",
-             description: "Use rocket jumps to beat challenging maps!",
-             smallPicture: "bloxd_rocketobby_thumbnail_small_1",
-             largePicture: "bloxd_rocketobby_thumbnail_large_1",
-             thumbnailUseLongRatio: !1,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: [],
-             customLobbyCustomSchematicLimit: 1,
-             listedVariations: ["rocketParkour_sheep", "rocketParkour_january"],
- ... (21 more removed lines; see GitHub link above)
+ 
+           function dT(TT, kT) {
+             hT() && XT((cT => {
+               cT.api.pushLog([TT], {
+                 context: kT,
+                 skipDedupe: !0
+               })
+             }), "Failed to send a diag log item")
```

#### 1116. `bundles/bloxd.io/main.js` (Changed code · before: `L18985-L19024` → after: `L41454-L41456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41454-L41456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41454-L41456) · [Before (L18985-L19024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L18985-L19024)

```diff
-         }, , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             c: () => hv
-           });
-           const hv = {
-             type: "Duels",
-             title: "game:1v1Fights",
-             description: "",
-             smallPicture: "bloxd_ranked_pvp_thumbnail_small",
-             largePicture: "bloxd_ranked_pvp_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             badges: [{
-               type: "ranked"
-             }],
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: [],
- ... (24 more removed lines; see GitHub link above)
+ 
+           function LT() {
+             QT && XT((() => {}), "Failed to start web vitals logging")
```

#### 1117. `bundles/bloxd.io/main.js` (Changed code · before: `L19026-L19060` → after: `L41458-L41467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41458-L41467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41458-L41467) · [Before (L19026-L19060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19026-L19060)

```diff
-         }, , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             c: () => hv
-           });
-           const hv = {
-             type: "Simulator",
-             title: "Work at a Restaurant",
-             description: "Work at a restaurant, serving customers and cooking food!",
-             smallPicture: "bloxd_cooking_thumbnail_small",
-             largePicture: "bloxd_cooking_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: [],
-             shaderPackPolicy: "allow"
-           }
- ... (19 more removed lines; see GitHub link above)
+ 
+           function RT(TT, kT, cT) {
+             QT && XT((lT => {
+               lT.api.pushMeasurement({
+                 type: TT,
+                 values: kT
+               }, {
+                 context: cT
+               })
+             }), "Failed to log client measurement")
```

#### 1118. `bundles/bloxd.io/main.js` (Changed code · before: `L19062-L19113` → after: `L41469-L41488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41469-L41488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41469-L41488) · [Before (L19062-L19113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19062-L19113)

```diff
-         }, , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => hv
-           });
-           const hv = {
-             type: "Minigames",
-             title: "Simon Says",
-             description: "A simple Simon Says game.",
-             smallPicture: "bloxd_simon_says_thumbnail_small",
-             largePicture: "bloxd_simon_says_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: []
-           }
-         }, , , , , (vv, zv, Pv) => {
- ... (36 more removed lines; see GitHub link above)
+ 
+           function gT(TT) {
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+             if (QT) try {
+               const cT = function(TT) {
+                   return TT instanceof Error ? TT : new Error("string" === typeof TT ? TT : String(TT))
+                 }(TT),
+                 lT = `${cT.name}: ${cT.message}`;
+               if ((0, yT.e)(lT)) return;
+               const MT = `${lT}|${JSON.stringify(kT)}`,
+                 KT = bT(kT);
+               if (DT.has(MT) || !KT && DT.size - PT >= CT) return;
+               DT.add(MT), KT && PT++, XT((TT => {
+                 TT.api.pushError(cT, {
+                   context: kT
+                 })
+ ... (4 more added lines; see GitHub link above)
```

#### 1119. `bundles/bloxd.io/main.js` (Changed code · before: `L19115` → after: `L41490-L41491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41490-L41491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41490-L41491) · [Before (L19115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19115)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+         },
+         703: (TT, kT, cT) => {
```

#### 1120. `bundles/bloxd.io/main.js` (Changed code · before: `L19119-L19149` → after: `L41495-L41507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41495-L41507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41495-L41507) · [Before (L19119-L19149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19119-L19149)

```diff
-           const hv = {
-             type: "Roleplay",
-             title: "Dress Up",
-             description: "Express yourself! Dress up your character to match the theme, then strut the catwalk and get voted on by other players.",
-             smallPicture: "bloxd_dress_up_thumbnail_small",
-             largePicture: "bloxd_dress_up_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: [],
-             gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19",
-             shaderPackPolicy: "allow"
-           }
-         }, , , , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             c: () => hv
-           });
- ... (15 more removed lines; see GitHub link above)
+           var lT = cT(211);
+           const MT = new Set(["Safari", "Chrome", "Firefox", "Microsoft Edge"]);
+ 
+           function KT(TT, kT, cT) {
+             if (null !== cT) {
+               const TT = `ios_app_${parseInt(cT,10)}`;
+               if (lT.h.test(TT)) return TT;
+               console.warn("The iOS app passed an iOS version with no major browser_major takes", cT)
+             }
+             if (!MT.has(TT)) return null;
+             if (!kT) return "Safari" === TT ? "webview" : null;
+             const KT = kT.split(".")[0];
+             return lT.h.test(KT) ? KT : null
```

#### 1121. `bundles/bloxd.io/main.js` (Changed code · before: `L19151` → after: `L41509-L41510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41509-L41510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41509-L41510) · [Before (L19151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19151)

```diff
-         }, , , , , , (vv, zv, Pv) => {
+         },
+         1497: (TT, kT, cT) => {
```

#### 1122. `bundles/bloxd.io/main.js` (Changed code · before: `L19153` → after: `L41512-L41515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41512-L41515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41512-L41515) · [Before (L19153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19153)

```diff
-             b: () => hv
+             e: () => IT,
+             f: () => CT,
+             i: () => AT,
+             reportAnalyticsClick: () => jT
```

#### 1123. `bundles/bloxd.io/main.js` (Changed code · before: `L19155-L19167` → after: `L41517-L41530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41517-L41530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41517-L41530) · [Before (L19155-L19167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19155-L19167)

```diff
-           const hv = {
-             type: "Simulator",
-             title: "Football",
-             description: "Two teams battle it out on the pitch!",
-             smallPicture: "bloxd_goalRush_thumbnail_small",
-             largePicture: "bloxd_goalRush_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             useRejoinLastLobbyButton: !1,
-             badges: [{
-               type: "updated",
-               dateAdded: new Date("2026-04-27T13:00:00Z")
-             }],
-             additionalMetaTags: []
+           var lT = cT(211),
+             MT = cT(1499),
+             KT = cT(1514),
+             OT = cT(1508);
+           const yT = "data-analytics-id",
+             fT = "data-analytics-value",
+             xT = new Set(lT.n);
+ 
+           function IT(TT) {
+             var kT;
+             return void 0 === TT || arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? {} : {
+               [yT]: TT.id,
+               [fT]: null !== (kT = TT.value) && void 0 !== kT ? kT : ""
+             }
```

#### 1124. `bundles/bloxd.io/main.js` (Changed code · before: `L19169-L19202` → after: `L41532-L41538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41532-L41538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41532-L41538) · [Before (L19169-L19202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19169-L19202)

```diff
-         }, , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             c: () => hv
-           });
-           const hv = {
-             type: "Simulator",
-             title: "Heroes vs Brainrots",
-             description: "Fight as heroes or brainrots in this free-for-all PvP arena.",
-             smallPicture: "bloxd_heroesvbrainrots_thumbnail_small",
-             largePicture: "bloxd_heroesvbrainrots_thumbnail_large",
-             thumbnailUseLongRatio: !0,
-             badges: [],
-             useRejoinLastLobbyButton: !1,
-             additionalMetaTags: [],
-             gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
-           }
- ... (18 more removed lines; see GitHub link above)
+ 
+           function AT() {
+             document.addEventListener("click", (TT => {
+               TT.target instanceof Element && CT(TT.target)
+             }), {
+               capture: !0
+             })
```

#### 1125. `bundles/bloxd.io/main.js` (Changed code · before: `L19300` → after: `L41543-L41550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41543-L41550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41543-L41550) · [Before (L19300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19300)

```diff
-             return null !== (zv = Nv.find((zv => zv === vv))) && void 0 !== zv ? zv : null
+             const cT = TT.closest(`[${yT}]`),
+               lT = null === cT || void 0 === cT ? void 0 : cT.getAttribute(yT);
+             cT && lT && (! function(TT) {
+               return xT.has(TT)
+             }(lT) ? console.warn(`Unknown analytics click id "${lT}", add it to CLIENT_ANALYTICS_CLICK_IDS`) : jT({
+               id: lT,
+               value: null !== (kT = cT.getAttribute(fT)) && void 0 !== kT ? kT : ""
+             }))
```

#### 1126. `bundles/bloxd.io/main.js` (Changed code · before: `L19304-L19309` → after: `L41554-L41560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41554-L41560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41554-L41560) · [Before (L19304-L19309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19304-L19309)

```diff
-             const zv = new Set;
-             for (const Pv of vv) {
-               const vv = lv(Pv);
-               vv && zv.add(vv)
-             }
-             return [...zv].sort()
+             var kT;
+             (0, KT.h)({
+               type: "click",
+               elementId: TT.id,
+               elementValue: (0, OT.d)(null !== (kT = TT.value) && void 0 !== kT ? kT : "", lT.t, "other"),
+               ...(0, MT.c)()
+             })
```

#### 1127. `bundles/bloxd.io/main.js` (Changed code · before: `L19311` → after: `L41562-L41563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41562-L41563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41562-L41563) · [Before (L19311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19311)

```diff
-         }, , , , , (vv, zv, Pv) => {
+         },
+         1514: (TT, kT, cT) => {
```

#### 1128. `bundles/bloxd.io/main.js` (Changed code · before: `L19314-L19320` → after: `L41566-L41567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41566-L41567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41566-L41567) · [Before (L19314-L19320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19314-L19320)

```diff
-             g: () => ev,
-             k: () => Cv,
-             l: () => pv,
-             m: () => sv,
-             q: () => lv,
-             t: () => av,
-             u: () => wv
+             flushClientAnalyticsEvents: () => PT,
+             h: () => ST
```

#### 1129. `bundles/bloxd.io/main.js` (Changed code · before: `L19322-L19325` → after: `L41569-L41584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41569-L41584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41569-L41584) · [Before (L19322-L19325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19322-L19325)

```diff
-           var hv = Pv(1006),
-             Sv = Pv(312);
-           const ev = "default",
-             gv = /^[A-Za-z0-9_-]{1,32}$/;
+           var lT = cT(211),
+             MT = cT(1518),
+             KT = cT(1298),
+             OT = cT(1136),
+             yT = cT(651),
+             fT = cT(1508);
+           const xT = 15e3,
+             IT = 5e3,
+             AT = new Set(["visitStarted", "mobileIdMapping", "adRevenue", "milestone", "clientError"]),
+             CT = 100,
+             jT = [];
+           let vT = null,
+             tT = 0,
+             hT = !1,
+             NT = Promise.resolve(),
+             QT = !1;
```

#### 1130. `bundles/bloxd.io/main.js` (Changed code · before: `L19328` → after: `L41587-L41594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41587-L41594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41587-L41594) · [Before (L19328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19328)

```diff
-             return dv((0, Sv.Kb)(vv))
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, yT.d)();
+             jT.push({
+               event: {
+                 ...TT,
+                 visitSessionId: kT
+               },
+               queuedAtMs: performance.now()
+             }), jT.length > CT && jT.splice(0, jT.length - CT), wT()
```

#### 1131. `bundles/bloxd.io/main.js` (Changed code · before: `L19332-L19333` → after: `L41599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41599) · [Before (L19332-L19333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19332-L19333)

```diff
-             var zv;
-             return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.startsWith(hv.f)) && void 0 !== zv && zv
+             return DT.add(TT)
```

#### 1132. `bundles/bloxd.io/main.js` (Changed code · before: `L19336-L19337` → after: `L41602-L41603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41602-L41603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41602-L41603) · [Before (L19336-L19337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19336-L19337)

```diff
-           function Nv(vv) {
-             return vv && dv(vv) ? vv.split("|")[1] : null
+           function FT() {
+             DT.callEach(void 0, "a client analytics flushing listener")
```

#### 1133. `bundles/bloxd.io/main.js` (Changed code · before: `L19340-L19341` → after: `L41606-L41612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41606-L41612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41606-L41612) · [Before (L19340-L19341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19340-L19341)

```diff
-           function lv(vv) {
-             return Nv((0, Sv.Kb)(vv))
+           function rT() {
+             return null !== vT && clearTimeout(vT), mT()
+           }
+           async function PT() {
+             FT();
+             for (let TT = Math.ceil(jT.length / lT.V) + 1; TT > 0; TT--)
+               if (await rT(), 0 === jT.length && !hT) return
```

#### 1134. `bundles/bloxd.io/main.js` (Changed code · before: `L19344-L19345` → after: `L41615-L41663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41615-L41663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41615-L41663) · [Before (L19344-L19345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19344-L19345)

```diff
-           function Tv(vv, zv) {
-             return zv && zv !== ev ? `${hv.f}|${vv}|${zv}` : `${hv.f}|${vv}`
+           function wT() {
+             if (hT) return;
+             if (QT && "hidden" === document.visibilityState) return void rT();
+             const TT = jT.some((TT => {
+                 let {
+                   event: kT
+                 } = TT;
+                 return AT.has(kT.type)
+               })),
+               kT = performance.now() + (TT ? IT : xT);
+             if (null !== vT) {
+               if (tT <= kT) return;
+               clearTimeout(vT)
+             }
+             tT = kT, vT = setTimeout(mT, kT - performance.now())
+           }
+ ... (33 more added lines; see GitHub link above)
```

#### 1135. `bundles/bloxd.io/main.js` (Changed code · before: `L19349` → after: `L41667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41667) · [Before (L19349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19349)

```diff
-             return `classic_${Tv(vv,zv)}`
+             return Math.min(Math.max(Math.round(TT), 0), kT)
```

#### 1136. `bundles/bloxd.io/main.js` (Changed code · before: `L19352-L19353` → after: `L41681-L41689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41681-L41689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41681-L41689) · [Before (L19352-L19353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19352-L19353)

```diff
-           function wv(vv) {
-             return Wv(vv)
+           function KT(TT, kT, cT) {
+             const KT = Array.from((yT = kT, yT.replace(/\b[a-z][a-z0-9+.-]*:\/\/\S+/gi, "<url>").replace(/"[^"]*"/g, '"<value>"').replace(/\d+/g, "#").replace(/[\uD800-\uDFFF]/gu, "?").replace(/\s+/g, " ").trim())).slice(0, lT.T).join("");
+             var yT;
+             const fT = (0, MT.d)(cT, lT.v, "other");
+             return {
+               code: fT,
+               message: KT,
+               fingerprint: OT(`${TT}|${fT}|${KT}`)
+             }
```

#### 1137. `bundles/bloxd.io/main.js` (Changed code · before: `L19357` → after: `L41693-L41695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41693-L41695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41693-L41695) · [Before (L19357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19357)

```diff
-             return "string" === typeof vv && gv.test(vv)
+             let kT = 2166136261;
+             for (let cT = 0; cT < TT.length; cT++) kT ^= TT.charCodeAt(cT), kT = Math.imul(kT, 16777619);
+             return (kT >>> 0).toString(16).padStart(8, "0")
```

#### 1138. `bundles/bloxd.io/main.js` (Changed code · before: `L19360-L19365` → after: `L41717-L41764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41717-L41764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41717-L41764) · [Before (L19360-L19365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19360-L19365)

```diff
-           function sv(vv) {
-             let zv = vv;
-             if (vv.startsWith("classic_")) {
-               const Pv = (0, Sv.Kb)(vv);
-               if (!Pv) return null;
-               zv = Pv
+           function tT(TT, kT) {
+             let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
+               lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+               tT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jT,
+               hT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
+               QT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
+             try {
+               const jT = function(TT) {
+                 if (TT instanceof Error) return `${TT.name}: ${TT.message}`;
+                 if ("string" === typeof TT) return TT;
+                 if ((0, MT.x)(TT)) return `${TT.status} ${TT.statusText}`;
+                 return String(TT)
+               }(kT);
+               if (null === document.body || (0, KT.e)(jT) || "unhandled_rejection" === TT && (0, KT.i)(jT)) return;
+               const {
+                 code: ST,
+ ... (32 more added lines; see GitHub link above)
```

#### 1139. `bundles/bloxd.io/main.js` (Changed code · before: `L19374-L19375` → after: `L41768-L41784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41768-L41784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41768-L41784) · [Before (L19374-L19375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19374-L19375)

```diff
-           function Cv(vv, zv, Pv) {
-             return `${vv}|${zv&&zv!==ev?zv:ev}|${Pv}`
+           function hT() {
+             window.addEventListener("error", (TT => {
+               var kT;
+               TT.filename && new URL(TT.filename, location.href).origin !== location.origin || null === TT.error && TT.message.startsWith("Script error") || (TT.error instanceof SyntaxError && TT.filename ? tT("uncaught", new SyntaxError(`${TT.error.message} (in ${new URL(TT.file … [truncated]
+             })), window.addEventListener("unhandledrejection", (TT => {
+               tT("unhandled_rejection", TT.reason)
+             }))
+           }
+ 
+           function NT(TT) {
+             let {
+               budgetTier: kT,
+               renderDistance: cT,
+               renderBackend: MT
+             } = TT;
+             const KT = {};
+ ... (1 more added lines; see GitHub link above)
```

#### 1140. `bundles/bloxd.io/main.js` (Changed code · before: `L19377` → after: `L41786-L41787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41786-L41787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41786-L41787) · [Before (L19377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19377)

```diff
-         }, , , , (vv, zv, Pv) => {
+         },
+         2861: (TT, kT, cT) => {
```

#### 1141. `bundles/bloxd.io/main.js` (Changed code · before: `L19379` → after: `L41789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41789) · [Before (L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19379)

```diff
-             b: () => gv,
+             d: () => xT,
```

#### 1142. `bundles/bloxd.io/main.js` (Changed code · before: `L19381-L19394` → after: `L41791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41791) · [Before (L19381-L19394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19381-L19394)

```diff
-             g: () => ev,
-             j: () => Sv
-           });
-           const hv = "playerSchematic",
-             Sv = "classic_worlds",
-             ev = "classic";
-           let gv = function(vv) {
-             return vv[vv.STANDARD = 0] = "STANDARD", vv[vv.DISCORD_GUILD = 1] = "DISCORD_GUILD", vv[vv.DISCORD_DM = 2] = "DISCORD_DM", vv
-           }({})
-         }, , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             e: () => dv,
-             i: () => pv,
-             k: () => Nv
+             h: () => DT
```

#### 1143. `bundles/bloxd.io/main.js` (Changed code · before: `L19396-L19399` → after: `L41793-L41797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41793-L41797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41793-L41797) · [Before (L19396-L19399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19396-L19399)

```diff
-           var hv = Pv(1002),
-             Sv = Pv(312),
-             ev = Pv(1006);
-           const gv = ["classic_survivalFactory", "classic_survivalFactoryPersistent"];
+           var lT = cT(208),
+             MT = cT(2865),
+             KT = cT(2821),
+             OT = cT(47);
+           const yT = new Set(["Ix", "Ax", "Cx", "jx", "vx", "tx"]);
```

#### 1144. `bundles/bloxd.io/main.js` (Changed code · before: `L19401-L19402` → after: `L41799-L41861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41799-L41861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41799-L41861) · [Before (L19401-L19402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19401-L19402)

```diff
-           function pv(vv, zv) {
-             return (0, hv.l)(vv) ? dv((0, hv.q)(vv)) : vv !== ev.g || zv ? gv.includes(vv) ? "classic_survivalFactory" : "classic" === (0, Sv.Pb)(vv) ? vv : (0, Sv.Pb)(vv) : "classic_worlds"
+           function fT(TT) {
+             return yT.has(TT)
+           }
+ 
+           function xT(TT) {
+             return {
+               Ix: CT("deviceMemory" in navigator ? navigator.deviceMemory : void 0),
+               Ax: (kT = navigator.hardwareConcurrency, kT ? IT(jT, kT, "17_plus") : "unreported"),
+               Cx: NT(TT.refreshHz),
+               jx: (0, MT.d)(),
+               vx: QT(TT.msaa, TT.autoMsaaOff),
+               tx: DT((0, KT.j)())
+             };
+             var kT
+           }
+ 
+ ... (47 more added lines; see GitHub link above)
```

#### 1145. `bundles/bloxd.io/main.js` (Changed code · before: `L19405-L19406` → after: `L41864-L41865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41864-L41865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41864-L41865) · [Before (L19405-L19406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19405-L19406)

```diff
-           function dv(vv) {
-             return (0, hv.u)(vv)
+           function QT(TT, kT) {
+             return null === TT ? lT.c : TT ? "on" : kT ? "auto_off" : "off"
```

#### 1146. `bundles/bloxd.io/main.js` (Changed code · before: `L19410-L19411` → after: `L41874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41874) · [Before (L19410-L19411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19410-L19411)

```diff
-             const zv = (0, hv.q)(vv);
-             return zv && (0, Sv.uc)(zv) ? zv : null
+             return IT(ST, Math.round(TT), "1701_plus")
```

#### 1147. `bundles/bloxd.io/main.js` (Changed code · before: `L19413-L19420` → after: `L41876-L41877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41876-L41877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41876-L41877) · [Before (L19413-L19420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19413-L19420)

```diff
-         }, , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             b: () => Sv,
-             e: () => hv
-           });
-           const hv = ["arcadeMode", "backrooms", "bedwars", "bedwars_1v1", "bedwars_4v4", "bedwars_4v4v4v4", "bedwars_duo", "bedwars_solo", "bedwars_trio", "bingo", "bridge", "bridgeBattle", "buildAFactory2", "classic", "classic_2d", "classic_anarchy", "classic_creative", "classi … [truncated]
-             Sv = ["ranked", "customGames", "survivalFactory", "parkourPlace"]
-         }, , , , , , , (vv, zv, Pv) => {
+         },
+         2898: (TT, kT, cT) => {
```

#### 1148. `bundles/bloxd.io/main.js` (Changed code · before: `L19422-L19429` → after: `L41879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41879) · [Before (L19422-L19429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19422-L19429)

```diff
-             const zv = [],
-               Pv = vv => {
-                 if (Array.isArray(vv))
-                   for (const zv of vv) Pv(zv);
-                 else zv.push(vv)
-               };
-             for (const hv of Object.values(vv.availableGameNamesWithVariation)) hv && Pv(hv);
-             return zv
+             return "matchmake_failed" === TT || "disconnect" === TT || "unhandled_rejection" === TT
```

#### 1149. `bundles/bloxd.io/main.js` (Changed code · before: `L19434` → after: `L41884-L41885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41884-L41885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41884-L41885) · [Before (L19434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19434)

```diff
-         }, , , (vv, zv, Pv) => {
+         },
+         2873: (TT, kT, cT) => {
```

#### 1150. `bundles/bloxd.io/main.js` (Changed code · before: `L19436` → after: `L41887-L41891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41887-L41891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41887-L41891) · [Before (L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19436)

```diff
-             d: () => pv,
+             C: () => hT,
+             E: () => zT,
+             H: () => xT,
+             K: () => mT,
+             e: () => MT,
```

#### 1151. `bundles/bloxd.io/main.js` (Changed code · before: `L19439` → after: `L41894-L41900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41894-L41900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41894-L41900) · [Before (L19439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19439)

```diff
-             j: () => Sv
+             j: () => CT,
+             k: () => aT,
+             logError: () => FT,
+             n: () => wT,
+             r: () => DT,
+             v: () => rT,
+             y: () => PT
```

#### 1152. `bundles/bloxd.io/main.js` (Changed code · before: `L19441-L19449` → after: `L41902-L41904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41902-L41904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41902-L41904) · [Before (L19441-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19441-L19449)

```diff
-           const hv = ["parkourPlace"];
- 
-           function Sv(vv) {
-             return hv.includes(vv)
-           }
-           const ev = {
-               parkourPlace: "parkourObby"
-             },
-             gv = "classic_playerSchematic|dR2m6qyt6euJs6N6nmMpD",
+           var lT = cT(260);
+           const MT = "G-DXF16YBENG",
+             KT = [..."AT AX BE BG CY CZ DE DK EE ES FI FR GF GP GR HR HU IE IT LT LU LV MF MQ MT NL PL PT RE RO SE SI SK YT IS LI NO CH".split(" "), ...lT.ukCountryCodes],
```

#### 1153. `bundles/bloxd.io/main.js` (Changed code · before: `L19451-L19493` → after: `L41906-L41910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41906-L41910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41906-L41910) · [Before (L19451-L19493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19451-L19493)

```diff
-               parkourPlace: [{
-                 id: "coolParkour",
-                 category: "Cool Parkour",
-                 displayTranslationKey: "customGame:coolParkour",
-                 tintColour: "#3478db",
-                 selectedGames: ["classic_playerSchematic|jIfAJMhswKPXQjVMG5Bo4", "classic_playerSchematic|d9obQf6_rqQKEcaT9Tm2a", "classic_playerSchematic|OU880KInxcJrP66zAlGCU", "classic_playerSchematic|EXTuVGBlNOGyBQqNp4zY6"],
-                 maxGames: 4
-               }, {
-                 id: "progressiveParkour",
-                 category: "Progressive Parkour",
-                 displayTranslationKey: "customGame:progressiveParkour",
-                 tintColour: "#dda52b",
-                 selectedGames: ["classic_playerSchematic|M585tnYwJh6YCXy2kP3C8", "classic_playerSchematic|uY3Rm1dEWcLEZytq11p82", "classic_playerSchematic|C1EaM-ygaqQJC94AIOkHa", "classic_playerSchematic|7IVl8eWQk2oXfB97zL_B5", "classic_playerSchematic|4QTGKw4ZMZN2N_pnmIDQk", "cl … [truncated]
-                 maxGames: 6
-               }, {
-                 id: "themedParkour",
- ... (27 more removed lines; see GitHub link above)
+               ad_storage: "denied",
+               ad_user_data: "denied",
+               ad_personalization: "denied",
+               analytics_storage: "denied",
+               wait_for_update: 500
```

#### 1154. `bundles/bloxd.io/main.js` (Changed code · before: `L19496-L19566` → after: `L41913-L41915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41913-L41915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41913-L41915) · [Before (L19496-L19566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19496-L19566)

```diff
-           function dv(vv, zv) {
-             return vv.filter((vv => ev[vv] === zv))
-           }
-         }, , , , , , , , (vv, zv) => {
-           var Pv;
-           ! function() {
-             var hv = {}.hasOwnProperty;
- 
-             function Sv() {
-               for (var vv = [], zv = 0; zv < arguments.length; zv++) {
-                 var Pv = arguments[zv];
-                 if (Pv) {
-                   var ev = typeof Pv;
-                   if ("string" === ev || "number" === ev) vv.push(Pv);
-                   else if (Array.isArray(Pv)) {
-                     if (Pv.length) {
- ... (55 more removed lines; see GitHub link above)
+           function yT() {
+             for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
+             window.dataLayer.push(arguments)
```

#### 1155. `bundles/bloxd.io/main.js` (Changed code · before: `L19568-L19580` → after: `L41917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41917) · [Before (L19568-L19580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19568-L19580)

```diff
-         }, , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             b: () => av,
-             e: () => dv.l
-           });
-           var hv = Pv(52),
-             Sv = Pv(1035),
-             ev = Pv.n(Sv),
-             gv = Pv(312),
-             pv = Pv(1049),
-             dv = Pv(1052),
-             Nv = Pv(1082);
-           const lv = pv.g;
+           let fT = !1;
```

#### 1156. `bundles/bloxd.io/main.js` (Changed code · before: `L19582-L19587` → after: `L41919-L41926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41919-L41926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41919-L41926) · [Before (L19582-L19587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19582-L19587)

```diff
-           function Tv(vv, zv, Pv) {
-             if (vv()) return void Pv();
-             const hv = (0, dv.t)((() => {
-               vv() ? Pv() : zv()
-             }));
-             return zv(), hv
+           function xT() {
+             fT || (fT = !0, window.dataLayer ??= [], window.gtag ??= yT, yT("consent", "default", {
+               ...OT,
+               region: KT
+             }), yT("consent", "default", {
+               ...OT,
+               analytics_storage: "granted"
+             }), yT("js", new Date))
```

#### 1157. `bundles/bloxd.io/main.js` (Changed code · before: `L19589-L19636` → after: `L41928-L41929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41928-L41929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41928-L41929) · [Before (L19589-L19636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19589-L19636)

```diff
-           const Wv = hv.forwardRef((function(vv, zv) {
-             let {
-               name: Pv,
-               kit: Sv = "solid",
-               className: gv,
-               ...pv
-             } = vv;
-             const {
-               name: Wv,
-               kit: wv,
-               extraClasses: av
-             } = (0, dv.s)(Pv || "", Sv), sv = function(vv, zv, Pv) {
-               const [, Sv] = (0, hv.useState)(0), ev = Pv ? (0, dv.j)(zv) : void 0;
-               if ((0, hv.useEffect)((() => {
-                   if (Pv && !ev) return Tv((() => void 0 !== (0, dv.j)(zv)), (() => (0, dv.o)(zv)), (() => {
-                     Sv((vv => vv + 1))
- ... (32 more removed lines; see GitHub link above)
+           const IT = "fps",
+             AT = 3e5;
```

#### 1158. `bundles/bloxd.io/main.js` (Changed code · before: `L19638-L19646` → after: `L41931-L41932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41931-L41932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41931-L41932) · [Before (L19638-L19646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19638-L19646)

```diff
-           function wv(vv, zv) {
-             let {
-               style: Pv,
-               ...hv
-             } = vv, {
-               style: Sv,
-               ...ev
-             } = zv;
-             return (0, gv.Ud)(hv, ev) && (0, gv.Ud)(Pv, Sv)
+           function CT(TT, kT, cT, lT) {
+             return null !== TT && TT !== kT && (null === cT || lT - cT >= AT)
```

#### 1159. `bundles/bloxd.io/main.js` (Changed code · before: `L19648-L19683` → after: `L41934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41934) · [Before (L19648-L19683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19648-L19683)

```diff
-           const av = hv.memo(Wv, wv)
-         }, , , , , , , (vv, zv) => {
-           var Pv = "circle-question",
-             hv = [62108, "question-circle"],
-             Sv = "f059",
-             ev = "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5. … [truncated]
-           zv.e = {
-             prefix: "fas",
-             iconName: Pv,
-             icon: [512, 512, hv, Sv, ev]
-           }, zv.g = zv.e
-         }, , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             d: () => ev.g,
-             g: () => Tv,
-             j: () => ev.h,
- ... (20 more removed lines; see GitHub link above)
+           let jT = {};
```

#### 1160. `bundles/bloxd.io/main.js` (Changed code · before: `L19685-L19686` → after: `L41936-L41937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41936-L41937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41936-L41937) · [Before (L19685-L19686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19685-L19686)

```diff
-           function pv(vv) {
-             return vv.startsWith("fa-") ? vv.slice(3) : vv
+           function vT() {
+             return "function" === typeof window.gtag
```

#### 1161. `bundles/bloxd.io/main.js` (Changed code · before: `L19688` → after: `L41939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41939) · [Before (L19688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19688)

```diff
-           let dv, Nv;
+           let tT = !1;
```

#### 1162. `bundles/bloxd.io/main.js` (Changed code · before: `L19691-L19705` → after: `L41942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41942) · [Before (L19691-L19705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19691-L19705)

```diff
-             if (dv) return Promise.resolve(dv);
-             if (Nv) return Nv;
-             const vv = Promise.all([Pv.e(32).then((() => Pv(6390))), Pv.e(32).then((() => Pv(6395)))]).then((vv => {
-               let [zv, Pv] = vv;
-               zv.config.autoAddCss = !1;
-               const hv = {
-                 FontAwesomeIcon: Pv.FontAwesomeIcon
-               };
-               return dv = hv, Nv = void 0, (0, ev.q)(), hv
-             }));
-             return vv.catch((vv => {
-               console.warn("Failed to load the icon renderer", vv), (0, Sv.ws)(vv), (0, ev.e)("renderer", (() => {
-                 Nv = void 0
-               }))
-             })), Nv = vv, vv
+             tT = !0
```

#### 1163. `bundles/bloxd.io/main.js` (Changed code · before: `L19709` → after: `L41946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41946) · [Before (L19709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19709)

```diff
-             return dv
+             return tT && vT()
```

#### 1164. `bundles/bloxd.io/main.js` (Changed code · before: `L19712-L19769` → after: `L41949-L41957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41949-L41957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41949-L41957) · [Before (L19712-L19769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19712-L19769)

```diff
-           function Wv(vv, zv) {
-             if (/\s/.test(vv) || vv.startsWith("fa-")) {
-               const zv = function(vv) {
-                 const zv = vv.trim().split(/\s+/).filter(Boolean),
-                   Pv = vv => vv in gv;
-                 let hv = "solid";
-                 for (const ev of zv) Pv(ev) && (hv = gv[ev]);
-                 let Sv = zv.find((vv => !Pv(vv) && null !== (0, ev.g)(pv(vv), hv)));
-                 if (void 0 === Sv) {
-                   const vv = zv.filter((vv => !Pv(vv)));
-                   Sv = vv[vv.length - 1]
-                 }
-                 const dv = Sv ? pv(Sv) : "",
-                   Nv = zv.filter((vv => vv !== Sv && !Pv(vv) && vv.startsWith("fa-"))).join(" ");
-                 return {
-                   name: dv,
- ... (42 more removed lines; see GitHub link above)
+           function QT(TT, kT, cT, lT) {
+             if (vT()) {
+               const TT = {
+                 event_category: cT,
+                 ...kT
+               };
+               window.gtag("event", lT ? `${cT}_${lT}` : cT, TT)
+             } else console.log(`${TT}: gtag not available`)
+           }
```

#### 1165. `bundles/bloxd.io/main.js` (Changed code · before: `L19771-L19772` → after: `L41959-L41960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41959-L41960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41959-L41960) · [Before (L19771-L19772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19771-L19772)

```diff
-           function Cv() {
-             return !(0, hv.m)() && !(0, gv.b)()
+           function ST(TT, kT) {
+             console.log("customAnalyticsEvent currently does nothing")
```

#### 1166. `bundles/bloxd.io/main.js` (Changed code · before: `L19775-L19777` → after: `L41963-L41986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41963-L41986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41963-L41986) · [Before (L19775-L19777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19775-L19777)

```diff
-           function iv() {
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
-             return Cv() && ((0, hv.h)() || vv() < Tv)
+           function DT(TT, kT) {
+             QT("logAnalytics", {
+               send_to: MT,
+               event_label: "initial_and_over_time_fps",
+               custom_parameter_fps_over_time: Math.round(TT),
+               custom_parameter_initial_fps: Math.round(kT)
+             }, IT)
+           }
+ 
+           function aT(TT, kT) {
+             QT("logControllerUsed", {
+               send_to: MT,
+               event_label: TT,
+               custom_parameter_pad_family: TT,
+               custom_parameter_input_type: kT
+             }, "controller", "used")
+ ... (8 more added lines; see GitHub link above)
```

#### 1167. `bundles/bloxd.io/main.js` (Changed code · before: `L19788` → after: `L41990-L41997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R41990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L41990-L41997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L41990-L41997) · [Before (L19788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19788)

```diff
-             return "true" === (null === vv || void 0 === vv ? void 0 : vv.fatal)
+             let {
+               type: kT,
+               location1: cT,
+               location2: lT,
+               location3: MT,
+               score: KT
+             } = TT;
+             console.log("progressionEvent currently does nothing")
```

#### 1168. `bundles/bloxd.io/main.js` (Changed code · before: `L19794-L19796` → after: `L42001-L42008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42001-L42008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42001-L42008) · [Before (L19794-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19794-L19796)

```diff
-             var zv;
-             const Pv = null !== (zv = vv.toLowerCase().split("/")[1]) && void 0 !== zv ? zv : "";
-             return Kv.has(Pv) ? "home" : Vv.has(Pv) ? "game" : "play" === Pv ? "play" : "other"
+             let {
+               type: kT,
+               resourceType: cT,
+               amount: lT,
+               category: MT,
+               itemName: KT
+             } = TT;
+             console.log("resourceEvent currently does nothing")
```

#### 1169. `bundles/bloxd.io/main.js` (Changed code · before: `L19799-L19800` → after: `L42011-L42018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42011-L42018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42011-L42018) · [Before (L19799-L19800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19799-L19800)

```diff
-           function Rv() {
-             return Uv("undefined" === typeof location ? "/" : location.pathname)
+           function wT(TT) {
+             let {
+               cat1: kT,
+               cat2: cT,
+               cat3: lT,
+               value: MT
+             } = TT, KT = kT;
+             cT && (KT += ":" + cT), lT && (KT += ":" + lT), ST()
```

#### 1170. `bundles/bloxd.io/main.js` (Changed code · before: `L19805-L19830` → after: `L42022-L42031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42022-L42031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42022-L42031) · [Before (L19805-L19830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19805-L19830)

```diff
-             const zv = vv.payload;
-             if (!zv.stacktrace) return vv;
-             const hv = new URL(Pv.p, location.href).href,
-               Sv = zv.stacktrace.frames.map((vv => function(vv, zv) {
-                 const Pv = av.exec(vv.filename),
-                   hv = Pv && sv.exec(vv.function);
-                 return Pv && hv ? {
-                   ...vv,
-                   filename: `app:///wasm/${hv[1]}`,
-                   function: Pv[1],
-                   lineno: 1,
-                   colno: parseInt(Pv[2], 16) - Number(hv[2])
-                 } : vv.filename.startsWith(zv) ? {
-                   ...vv,
-                   filename: `app:///${vv.filename.slice(zv.length).split(/[?#]/)[0]}`
-                 } : vv
- ... (10 more removed lines; see GitHub link above)
+             let {
+               leaveEventType: kT,
+               category: cT,
+               subCategory: lT,
+               value: MT
+             } = TT;
+             console.log(kT, cT, lT, MT), jT[kT] = {
+               category: cT,
+               subCategory: lT,
+               value: MT
```

#### 1171. `bundles/bloxd.io/main.js` (Changed code · before: `L19834-L19835` → after: `L42035-L42036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42035-L42036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42035-L42036) · [Before (L19834-L19835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19834-L19835)

```diff
-           function qv(vv) {
-             if ("exception" === vv.type) {
+           function bT() {
+             for (const TT in jT) {
```

#### 1172. `bundles/bloxd.io/main.js` (Changed code · before: `L19837-L19851` → after: `L42038-L42043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42038-L42043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42038-L42043) · [Before (L19837-L19851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19837-L19851)

```diff
-                 context: hv,
-                 stacktrace: Sv
-               } = vv.payload;
-               if (! function(vv) {
-                   return void 0 !== (null === vv || void 0 === vv ? void 0 : vv.fatal)
-                 }(hv)) {
-                 var zv;
-                 const vv = (null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.frames) && void 0 !== zv ? zv : []).find((vv => wv.test(vv.filename)));
-                 if (vv && (Pv = vv.filename, pv.e.some((vv => Pv.includes(vv))))) return null
-               }
-               if (!Dv(hv)) {
-                 if (Fv >= Gv) return null;
-                 Fv++
-               }
-               return Iv(tv(vv))
+                 category: kT,
+                 subCategory: cT,
+                 value: lT
+               } = jT[TT];
+               let MT = TT;
+               kT && (MT += ":" + kT), cT && (MT += ":" + cT), ST()
```

#### 1173. `bundles/bloxd.io/main.js` (Changed code · before: `L19891-L19903` → after: `L42047-L42048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42047-L42048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42047-L42048) · [Before (L19891-L19903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19891-L19903)

```diff
-           function Iv(vv) {
-             var zv;
-             const Pv = null === (zv = vv.meta.page) || void 0 === zv ? void 0 : zv.url;
-             return Pv ? {
-               ...vv,
-               meta: {
-                 ...vv.meta,
-                 page: {
-                   ...vv.meta.page,
-                   url: Pv.split(/[?#]/)[0]
-                 }
-               }
-             } : vv
+           function zT() {
+             bT(), jT = {}
```

#### 1174. `bundles/bloxd.io/main.js` (Changed code · before: `L19906-L19907` → after: `L42066-L42080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42066-L42080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42066-L42080) · [Before (L19906-L19907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19906-L19907)

```diff
-           function Qv(vv) {
-             Ov = vv
+           function KT(TT, kT, cT) {
+             switch (TT) {
+               case "windows":
+                 return "intel" === kT ? `windows_intel_${cT()}` : "nvidia" === kT || "amd" === kT ? `windows_${kT}` : "other";
+               case "macos":
+                 return "apple" === kT ? "mac_apple" : "mac_other";
+               case "chrome_os":
+                 return "intel" === kT ? "chromeos_intel" : "chromeos_other";
+               case "android":
+                 return "qualcomm" === kT || "arm" === kT ? `android_${kT}` : "android_other";
+               case "ios":
+                 return "ios";
+               default:
+                 return "other"
+             }
```

#### 1175. `bundles/bloxd.io/main.js` (Changed code · before: `L19911-L19951` → after: `L42135-L42136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42135-L42136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42135-L42136) · [Before (L19911-L19951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19911-L19951)

```diff
-             jv = vv, null !== nv && Av((() => {}), "Failed to name the player in Faro")
-           }
- 
-           function Av(vv, zv) {
-             (nv ??= Pv.e(31).then((() => Pv(6404))).then((vv => vv.initializeFaro({
-               url: lv,
-               app: {
-                 name: "bloxd-web",
-                 version: String(Sv.c),
-                 release: String(Sv.c),
-                 environment: (0, hv.h)() ? "preprod" : "prod"
-               },
-               instrumentations: cv ? [new vv.WebVitalsInstrumentation] : [],
-               webVitalsInstrumentation: {
-                 trackAttributionSources: !0
-               },
- ... (25 more removed lines; see GitHub link above)
+             var kT, cT;
+             return null === (kT = /\(0x(?:0000)?([0-9a-f]{4})\)/i.exec(TT)) || void 0 === kT || null === (cT = kT[1]) || void 0 === cT ? void 0 : cT.toLowerCase()
```

#### 1176. `bundles/bloxd.io/main.js` (Changed code · before: `L19954-L19960` → after: `L42139-L42162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42139-L42162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42139-L42162) · [Before (L19954-L19960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19954-L19960)

```diff
-           function Lv(vv, zv) {
-             Cv() && Av((Pv => {
-               Pv.api.pushLog([vv], {
-                 context: zv,
-                 skipDedupe: !0
-               })
-             }), "Failed to send a diag log item")
+           function AT(TT) {
+             const kT = TT.toLowerCase(),
+               cT = IT(kT);
+             if (void 0 !== cT) {
+               for (const [TT, kT, lT] of OT)
+                 if (TT.includes(cT)) return {
+                   family: kT,
+                   tier: lT
+                 };
+               for (const [TT, kT, lT] of yT)
+                 if (TT.includes(cT.slice(0, 2))) return {
+                   family: kT,
+                   tier: lT
+                 }
+             }
+             for (const [lT, MT, KT] of xT)
+ ... (8 more added lines; see GitHub link above)
```

#### 1177. `bundles/bloxd.io/main.js` (Changed code · before: `L19964` → after: `L42167-L42173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42167-L42173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42167-L42173) · [Before (L19964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19964)

```diff
-             cv && Av((() => {}), "Failed to start web vitals logging")
+             var TT;
+             return CT ??= function() {
+               const TT = (0, lT.getOperatingSystem)();
+               if ("windows" !== TT) return tT(TT, (0, lT.getGpuVendor)());
+               const kT = (0, MT.r)();
+               return null === kT ? null : hT(kT)
+             }(), null !== (TT = CT) && void 0 !== TT ? TT : "other"
```

#### 1178. `bundles/bloxd.io/main.js` (Changed code · before: `L19967-L19975` → after: `L42176-L42182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42176-L42182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42176-L42182) · [Before (L19967-L19975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19967-L19975)

```diff
-           function Mv(vv, zv, Pv) {
-             cv && Av((hv => {
-               hv.api.pushMeasurement({
-                 type: vv,
-                 values: zv
-               }, {
-                 context: Pv
-               })
-             }), "Failed to log client measurement")
+           function vT(TT) {
+             if (null !== CT) return CT;
+             const kT = (0, lT.getOperatingSystem)(),
+               cT = (0, MT.p)();
+             if ("windows" === kT) return cT ? hT(cT) : null;
+             const KT = TT || (null === cT || void 0 === cT ? void 0 : cT.vendor);
+             return KT ? tT(kT, (0, lT.normaliseGpuVendor)(KT)) : null
```

#### 1179. `bundles/bloxd.io/main.js` (Changed code · before: `L19978-L19996` → after: `L42185-L42186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42185-L42186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42185-L42186) · [Before (L19978-L19996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L19978-L19996)

```diff
-           function yv(vv) {
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-             if (cv) try {
-               const Pv = function(vv) {
-                   return vv instanceof Error ? vv : new Error("string" === typeof vv ? vv : String(vv))
-                 }(vv),
-                 hv = `${Pv.name}: ${Pv.message}`;
-               if ((0, pv.h)(hv)) return;
-               const Sv = `${hv}|${JSON.stringify(zv)}`,
-                 ev = Dv(zv);
-               if (mv.has(Sv) || !ev && mv.size - Yv >= Wv) return;
-               mv.add(Sv), ev && Yv++, Av((vv => {
-                 vv.api.pushError(Pv, {
-                   context: zv
-                 })
-               }), "Failed to log client error")
- ... (3 more removed lines; see GitHub link above)
+           function tT(TT, kT) {
+             return KT(TT, kT, (() => "unknown"))
```

#### 1180. `bundles/bloxd.io/main.js` (Changed code · before: `L20008` → after: `L42190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42190) · [Before (L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20008)

```diff
-             return "TypeError: Load failed" === vv
+             return KT("windows", (0, lT.normaliseGpuVendor)(TT.vendor), (() => AT(TT.renderer).tier))
```

#### 1181. `bundles/bloxd.io/main.js` (Changed code · before: `L20011-L20012` → after: `L42193-L42195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42193-L42195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42193-L42195) · [Before (L20011-L20012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20011-L20012)

```diff
-           function gv(vv) {
-             return Sv.some((zv => vv.includes(zv)))
+           function NT(TT, kT) {
+             const cT = TT * kT / 1e6;
+             return cT < 1 ? "under_1" : cT < 2 ? "1_to_2" : cT < 4 ? "2_to_4" : "4_plus"
```

#### 1182. `bundles/bloxd.io/main.js` (Changed code · before: `L20014` → after: `L42197-L42198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42197-L42198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42197-L42198) · [Before (L20014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20014)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+         },
+         298: (TT, kT, cT) => {
```

#### 1183. `bundles/bloxd.io/main.js` (Changed code · before: `L20019-L20021` → after: `L42203-L42204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42203-L42204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42203-L42204) · [Before (L20019-L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20019-L20021)

```diff
-             k: () => pv,
-             n: () => ev,
-             q: () => gv
+             l: () => aT,
+             n: () => DT
```

#### 1184. `bundles/bloxd.io/main.js` (Changed code · before: `L20023-L20024` → after: `L42206-L42309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42206-L42309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42206-L42309) · [Before (L20023-L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20023-L20024)

```diff
-           const hv = "long_animation_frame_worst",
-             Sv = 100;
+           var lT = cT(118),
+             MT = cT(150),
+             KT = cT(197),
+             OT = cT(291);
+           const yT = [
+               [/mali-t\d/, "mali_midgard"],
+               [/\bg(31|51|52|71|72|76)\b/, "mali_bifrost"],
+               [/\bg(57|68|77|78|310|510|610|615|710|715)\b/, "mali_valhall"],
+               [/\bg(620|625|720|725|925)\b/, "mali_5th_gen"]
+             ],
+             fT = {
+               3: "adreno_3_5",
+               4: "adreno_3_5",
+               5: "adreno_3_5",
+               6: "adreno_6",
+               7: "adreno_7",
+ ... (88 more added lines; see GitHub link above)
```

#### 1185. `bundles/bloxd.io/main.js` (Changed code · before: `L20026-L20029` → after: `L42311-L42370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42311-L42370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42311-L42370) · [Before (L20026-L20029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20026-L20029)

```diff
-           function ev(vv) {
-             let zv = 0;
-             for (const Pv of vv.scripts) zv += Pv.duration;
-             return Math.min(zv, vv.duration)
+           function tT(TT, kT) {
+             var cT;
+             return null === (cT = TT.find((TT => {
+               let [cT] = TT;
+               return cT.test(kT)
+             }))) || void 0 === cT ? void 0 : cT[1]
+           }
+ 
+           function hT(TT, kT) {
+             var cT, MT;
+             if ((0, KT.c)(kT)) return "unknown";
+             if ((0, KT.f)(kT)) return "other";
+             const vT = kT.toLowerCase().trim();
+             var hT;
+             if (/\b(mali|immortalis)\b/.test(vT)) return null !== (hT = tT(yT, vT)) && void 0 !== hT ? hT : "other_arm";
+             const NT = /\badreno\D*(\d)\d\d/.exec(vT);
+ ... (44 more added lines; see GitHub link above)
```

#### 1186. `bundles/bloxd.io/main.js` (Changed code · before: `L20033-L20040` → after: `L42374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42374) · [Before (L20033-L20040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20033-L20040)

```diff
-             if ("" === vv) return "";
-             let zv;
-             try {
-               zv = new URL(vv)
-             } catch {
-               return console.warn("A long animation frame's script has no absolute URL", vv.split(/[?#]/)[0]), vv.split(/[?#]/)[0].slice(0, Sv)
-             }
-             return "data:" === zv.protocol ? "data:" : "blob:" === zv.protocol ? `blob:${zv.origin}` : `${zv.protocol}//${zv.host}${zv.pathname}`.slice(0, Sv)
+             return "nvidia_pre_turing" === TT
```

#### 1187. `bundles/bloxd.io/main.js` (Changed code · before: `L20044-L20047` → after: `L42378-L42433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R42378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L42378-L42433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L42378-L42433) · [Before (L20044-L20047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L20044-L20047)

```diff
-             return "classic-script" === zv || "module-script" === zv ? gv(vv) : vv.replace(/(\[src=)(.*)(\][^\]]*)$/, ((vv, zv, Pv, hv) => `${zv}${function(vv){let zv;try{zv=new URL(vv)}catch{return""}return""===zv.host?"":`
-                   $ {
-                     zv.protocol
-                   } //${zv.host}`}(Pv)}${hv}`)).slice(0,Sv)}function dv(vv){return vv.slice(0,Sv)}class Nv{constructor(vv,zv){this.client=vv,this.send=zv,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(vv){this.windowLo … [truncated]
+             if (TT) {
+               const kT = TT.trim(),
+                 cT = OT.e.test(kT),
+                 lT = function(TT) {
+                   var kT, cT, lT;
+                   const MT = /^angle \((.*)\)$/i.exec(TT);
+                   if (!MT) return TT;
+                   const KT = MT[1].split(", "),
+                     OT = null !== (kT = KT[1]) && void 0 !== kT ? kT : KT[0];
+                   return null !== (cT = null === (lT = /^vulkan [\d.]+ \((.*)\)$/i.exec(OT)) || void 0 === lT ? void 0 : lT[1]) && void 0 !== cT ? cT : OT.replace(/^angle metal renderer:\s*/i, "")
+                 }(kT.replace(OT.e, "")).replace(/\s+(direct3d\d*|d3d\d+|opengl|vulkan|metal)\b.*$/i, ""),
+                 MT = (0, OT.p)(lT),
+                 KT = `${void 0===MT?"":`:${MT}`}${cT?":similar":""}`;
+               return `${lT.replace(/\(0x[0-9a-f]+\)/gi,"").replace(/\((r|tm)\)|[\xae\u2122]/gi,"").toLowerCase().replace(/[^a-z0-9.-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,64-KT.length)}${KT}`
+             }
+             if (kT) {
+ ... (40 more added lines; see GitHub link above)
```
