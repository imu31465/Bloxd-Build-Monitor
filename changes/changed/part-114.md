# Changed — Bundle Modifications Report (Part 114 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `114 / 153` (**426** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 113](part-113.md) · [Part 115 →](part-115.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1020 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3179-L3180` → after: `L3083-L3084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3083-L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3083-L3084) · [Before (L3179-L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3179-L3180)

```diff
-         const GB = iB(null !== (OB = dB(BB, "x")) && void 0 !== OB ? OB : BB),
-           YB = (0, xB.h)(BB).filter((BB => !(0, xB.x)(BB))),
+         const He = ae(null !== (ie = we(ee, "x")) && void 0 !== ie ? ie : ee),
+           ye = (0, re.d)(ee).filter((ee => !(0, re.r)(ee))),
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3182` → after: `L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3086) · [Before (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3182)

```diff
-         return (DB.length > 0 ? DB : YB).sort(((BB, OB) => fG(BB.getBoundingClientRect(), OB.getBoundingClientRect())))
+         return (be.length > 0 ? be : ye).sort(((ee, ie) => wH(ee.getBoundingClientRect(), ie.getBoundingClientRect())))
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3185` → after: `L3089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3089) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3185)

```diff
-         const YB = [...OB.querySelectorAll("[data-pad-row]")].filter(xB.s),
+         const ye = [...ie.querySelectorAll("[data-pad-row]")].filter(re.k),
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3208` → after: `L3112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3112) · [Before (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3208)

```diff
-         const QB = null !== (YB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== YB ? YB : null,
+         const Me = null !== (ye = null === ee || void 0 === ee ? void 0 : ee.getFocused()) && void 0 !== ye ? ye : null,
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3210` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3114) · [Before (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3210)

```diff
-           jB = null !== (DB = QB ? dB(QB, oB, OB) : null) && void 0 !== DB ? DB : uB(OB, oB);
+           Ue = null !== (be = Me ? we(Me, Ke, ie) : null) && void 0 !== be ? be : Pe(ie, Ke);
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3212` → after: `L3116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3116) · [Before (L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3212)

```diff
-         const yB = QB ? (0, eB.w)(QB) : null;
+         const Fe = Me ? (0, ne.E)(Me) : null;
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3229` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3133) · [Before (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3229)

```diff
-           jB = UG((0, eB.w)(QB), oB.map((BB => BB.getBoundingClientRect()))),
+           Ue = ZH((0, ne.E)(Me), Ke.map((ee => ee.getBoundingClientRect()))),
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3231` → after: `L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3135) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3231)

```diff
-         return BB.setFocus(null !== yB && void 0 !== yB && yB.isConnected ? yB : null !== (YB = oB[jB]) && void 0 !== YB ? YB : null, {
+         return ee.setFocus(null !== Fe && void 0 !== Fe && Fe.isConnected ? Fe : null !== (ye = Ke[Ue]) && void 0 !== ye ? ye : null, {
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3236-L3237` → after: `L3140-L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3140-L3141) · [Before (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3236-L3237)

```diff
-         const OB = (0, MB.h)(BB);
-         return (0, pB.L)(OB) || JG.s.some((BB => (0, MB.h)(BB) === OB)) ? null : OB
+         const ie = (0, oe.j)(ee);
+         return (0, fe.H)(ie) || RH.n.some((ee => (0, oe.j)(ee) === ie)) ? null : ie
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3247` → after: `L3151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3151) · [Before (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3247)

```diff
-             return null !== (OB = null === (GB = gG(BB)) || void 0 === GB ? void 0 : GB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== OB ? OB : null
+             return null !== (ie = null === (He = CH(ee)) || void 0 === He ? void 0 : He.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ie ? ie : null
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3250` → after: `L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3154) · [Before (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3250)

```diff
-         (0, oG.d)(), GB === jG.p.SETTINGS && (0, yG.m)(yB.c.get("openEverythingMenuName")) ? yB.c.set({
+         (0, FH.d)(), He === JH.r.SETTINGS && (0, oH.j)(Fe.e.get("openEverythingMenuName")) ? Fe.e.set({
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3252` → after: `L3156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3156) · [Before (L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3252)

```diff
-         }) : (0, yG.A)((0, LG.b)("padMenuShortcut"), GB, YB), BB && QB && DB && rG(BB, OB, QB, DB.closest("[data-pad-tabs]"))
+         }) : (0, oH.u)((0, LH.d)("padMenuShortcut"), He, ye), ee && Me && be && vH(ee, ie, Me, be.closest("[data-pad-tabs]"))
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3256-L3257` → after: `L3160-L3161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3160-L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3160-L3161) · [Before (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3256-L3257)

```diff
-       vG = (0, qB.d)(pB.eb),
-       sG = (0, qB.d)(pB.eb),
+       rH = (0, Te.b)(fe.Z),
+       QH = (0, Te.b)(fe.Z),
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3260-L3261` → after: `L3164-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3164-L3165) · [Before (L3260-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3260-L3261)

```diff
-             const GB = (0, MB.h)("chat");
-             return mG(OB) && BB.isHeld(GB) ? "hold" === IG.update(BB.wasPressed(GB), BB.isHeld(GB), performance.now(), ZB.d[(0, zB.k)().tapHoldTime].wheelMs) && (PB.c.consumeButton(GB), JB.o.tM(uG.r), !0) : (IG.release(), !1)
+             const He = (0, oe.j)("chat");
+             return VH(ie) && ee.isHeld(He) ? "hold" === aH.update(ee.wasPressed(He), ee.isHeld(He), performance.now(), pe.d[(0, ke.h)().tapHoldTime].wheelMs) && (Re.d.consumeButton(He), Je.h.yR(YH.o), !0) : (aH.release(), !1)
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3268` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3172) · [Before (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3268)

```diff
-           if (OB.wasPressed((0, MB.h)(oB))) {
+           if (ie.wasPressed((0, oe.j)(Ke))) {
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3281` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3185) · [Before (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3281)

```diff
-           const GB = (0, MB.h)(oB);
+           const He = (0, oe.j)(Ke);
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3285-L3288` → after: `L3189-L3192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3189-L3192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3189-L3192) · [Before (L3285-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3285-L3288)

```diff
-         return TG(OB, "pause") ? (QB || (0, yG.u)() && "menu" !== GB.layer.kind || bG(BB, YB, (0, yG.u)() ? jG.p.SETTINGS : (0, FG.b)()), !0) : !!TG(OB, "leaderboard") && ("home" === GB.layer.kind ? (BB => {
-           const OB = [...BB.querySelectorAll("[data-pad-notifications]")].find(xB.s);
-           OB && (0, eB.b)(OB)
-         })(YB) : QB || bG(BB, YB, jG.p.LOBBY_LEADERBOARD, "inGame" === yB.c.get("gameState")), !0)
+         return IH(ie, "pause") ? (Me || (0, oH.q)() && "menu" !== He.layer.kind || hH(ee, ye, (0, oH.q)() ? JH.r.SETTINGS : (0, cH.b)()), !0) : !!IH(ie, "leaderboard") && ("home" === He.layer.kind ? (ee => {
+           const ie = [...ee.querySelectorAll("[data-pad-notifications]")].find(re.k);
+           ie && (0, ne.d)(ie)
+         })(ye) : Me || hH(ee, ye, JH.r.LOBBY_LEADERBOARD, "inGame" === Fe.e.get("gameState")), !0)
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3293` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3197) · [Before (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3293)

```diff
-         if (OB.wasPressed((0, MB.h)("menuSecondary"))) {
+         if (ie.wasPressed((0, oe.j)("menuSecondary"))) {
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3296` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3200) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3296)

```diff
-           if (DB) return (0, eB.b)(DB), !0;
+           if (be) return (0, ne.d)(be), !0;
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3299` → after: `L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3203) · [Before (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3299)

```diff
-             return OB && (0, xB.t)(OB, GB.root) ? (BB.setFocus(OB, {
+             return ie && (0, re.n)(ie, He.root) ? (ee.setFocus(ie, {
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3301` → after: `L3205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3205) · [Before (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3301)

```diff
-             }), (0, eB.b)(OB)) : yB.c.set({
+             }), (0, ne.d)(ie)) : Fe.e.set({
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3309` → after: `L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3213) · [Before (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3309)

```diff
-           if (!DB || !(0, xB.s)(DB)) return void(0, yG.A)((0, LG.b)("padMenuShortcut"), jG.p.SOCIAL);
+           if (!be || !(0, re.k)(be)) return void(0, oH.u)((0, LH.d)("padMenuShortcut"), JH.r.SOCIAL);
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3311` → after: `L3215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3215) · [Before (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3311)

```diff
-           const QB = null !== (GB = null === (YB = DB.querySelector("[data-pad-friends-start]")) || void 0 === YB ? void 0 : YB.getBoundingClientRect().top) && void 0 !== GB ? GB : -1 / 0,
+           const Me = null !== (He = null === (ye = be.querySelector("[data-pad-friends-start]")) || void 0 === ye ? void 0 : ye.getBoundingClientRect().top) && void 0 !== He ? He : -1 / 0,
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3314` → after: `L3218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3218) · [Before (L3314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3314)

```diff
-             yB = jB.length > 0 ? jB : oB,
+             Fe = Ue.length > 0 ? Ue : Ke,
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3323` → after: `L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3227) · [Before (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3323)

```diff
-         const DB = (0, eB.x)(BB);
+         const be = (0, ne.G)(ee);
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3325-L3326` → after: `L3229-L3230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3229-L3230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3229-L3230) · [Before (L3325-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3325-L3326)

```diff
-         const QB = (null !== (OB = null !== (GB = null !== (YB = BB.getAttribute("aria-label")) && void 0 !== YB ? YB : BB.getAttribute("title")) && void 0 !== GB ? GB : BB.textContent) && void 0 !== OB ? OB : "").replace(/\s+/g, " ").trim();
-         return QB ? `${BB.tagName}:${QB.slice(0,100)}` : null
+         const Me = (null !== (ie = null !== (He = null !== (ye = ee.getAttribute("aria-label")) && void 0 !== ye ? ye : ee.getAttribute("title")) && void 0 !== He ? He : ee.textContent) && void 0 !== ie ? ie : "").replace(/\s+/g, " ").trim();
+         return Me ? `${ee.tagName}:${Me.slice(0,100)}` : null
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3347` → after: `L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3251) · [Before (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3347)

```diff
-           QB = (0, eB.x)(OB),
+           Me = (0, ne.G)(ie),
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3371` → after: `L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3275) · [Before (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3371)

```diff
-         return null !== (GB = null !== (YB = oB[DB.ordinal]) && void 0 !== YB ? YB : oB[0]) && void 0 !== GB ? GB : null
+         return null !== (He = null !== (ye = Ke[be.ordinal]) && void 0 !== ye ? ye : Ke[0]) && void 0 !== He ? He : null
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3377` → after: `L3281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3281) · [Before (L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3377)

```diff
-     var GY = GB(1268);
+     var by = He(1215);
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3392` → after: `L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3296) · [Before (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3392)

```diff
-             const GB = (null !== (YB = BB[QB]) && void 0 !== YB ? YB : 0) - (null !== (DB = OB[QB]) && void 0 !== DB ? DB : 0);
+             const He = (null !== (ye = ee[Me]) && void 0 !== ye ? ye : 0) - (null !== (be = ie[Me]) && void 0 !== be ? be : 0);
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3405` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3309) · [Before (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3405)

```diff
-         return null !== (GB = DY(BB.root, OB.root)) && void 0 !== GB ? GB : BB.order > OB.order
+         return null !== (He = Ky(ee.root, ie.root)) && void 0 !== He ? He : ee.order > ie.order
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3414-L3415` → after: `L3318-L3319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3318-L3319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3318-L3319) · [Before (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3414-L3415)

```diff
-           GB = "number" === typeof OB ? OB : null;
-         if (null !== GB && GB === yY && JY === (0, GY.c)()) return jY;
+           He = "number" === typeof ie ? ie : null;
+         if (null !== He && He === oy && Ry === (0, by.b)()) return Jy;
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3418-L3419` → after: `L3322-L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3322-L3323) · [Before (L3418-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3418-L3419)

```diff
-           QB = [...document.querySelectorAll("[data-pad-covers]")].filter(xB.s);
-         for (const oB of (0, GY.f)()) {
+           Me = [...document.querySelectorAll("[data-pad-covers]")].filter(re.k);
+         for (const Ke of (0, by.e)()) {
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3421` → after: `L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3325) · [Before (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3421)

```diff
-             OB = !!BB && (0, xB.s)(BB) && !oY(BB, QB);
+             ie = !!ee && (0, re.k)(ee) && !Fy(ee, Me);
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3430-L3431` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3334-L3335) · [Before (L3430-L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3430-L3431)

```diff
-         jY = YB, yY = GB, JY = (0, GY.c)();
-         for (const oB of DB)(0, GY.j)(oB);
+         Jy = ye, oy = He, Ry = (0, by.b)();
+         for (const Ke of be)(0, by.i)(Ke);
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3440` → after: `L3344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3344) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3440)

```diff
-         return null !== (BB = null === (OB = MY()) || void 0 === OB ? void 0 : OB.root) && void 0 !== BB ? BB : null
+         return null !== (ee = null === (ie = ky()) || void 0 === ie ? void 0 : ie.root) && void 0 !== ee ? ee : null
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3448` → after: `L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3352) · [Before (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3448)

```diff
-       ZY = (0, zB.k)().menuNavigation,
+       zy = (0, ke.h)().menuNavigation,
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3452-L3453` → after: `L3356-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3356-L3357) · [Before (L3452-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3452-L3453)

```diff
-     JB.o.subscribe(zB.g, (() => {
-       const BB = (0, zB.k)().menuNavigation;
+     Je.h.subscribe(ke.g, (() => {
+       const ee = (0, ke.h)().menuNavigation;
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3458` → after: `L3362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3362) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3458)

```diff
-         return null !== (BB = pY) && void 0 !== BB ? BB : (0, zB.k)().menuNavigation
+         return null !== (ee = py) && void 0 !== ee ? ee : (0, ke.h)().menuNavigation
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3485` → after: `L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3389) · [Before (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3485)

```diff
-           has: (0, xB.l)(BB)
+           has: (0, re.i)(ee)
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3511-L3512` → after: `L3415-L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3415-L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3415-L3416) · [Before (L3511-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3511-L3512)

```diff
-     var uY = GB(4963),
-       mY = GB(5515);
+     var Yy = He(4940),
+       Vy = He(5544);
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3514` → after: `L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3418) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3514)

```diff
-       FY = `${IY}, [data-pad-back]`,
+       cy = `${ay}, [data-pad-back]`,
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3545-L3546` → after: `L3449-L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3449-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3449-L3450) · [Before (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3545-L3546)

```diff
-         const GB = BB.querySelector(`${XY}[data-pad-selected='true']`);
-         return GB && OB.includes(GB) ? GB : null
+         const He = ee.querySelector(`${uy}[data-pad-selected='true']`);
+         return He && ie.includes(He) ? He : null
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3562` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3466) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3562)

```diff
-         if (jB && jB !== oB) return oB || (this.contentReturn = new WeakRef(BB)), null !== (yB = wY(jB, GB)) && void 0 !== yB ? yB : OB;
+         if (Ue && Ue !== Ke) return Ke || (this.contentReturn = new WeakRef(ee)), null !== (Fe = my(Ue, He)) && void 0 !== Fe ? Fe : ie;
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3566` → after: `L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3470) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3566)

```diff
-         return MB && JB.contains(MB) && GB.includes(MB) ? MB : null !== (QB = this.pickRegionStart(JB, dB(OB, "y", YB), GB)) && void 0 !== QB ? QB : OB
+         return oe && Je.contains(oe) && He.includes(oe) ? oe : null !== (Me = this.pickRegionStart(Je, we(ie, "y", ye), He)) && void 0 !== Me ? Me : ie
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3574` → after: `L3478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3478) · [Before (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3574)

```diff
-         return GB.some((BB => QB.contains(BB) && !BB.closest(FY))) || !OB.closest(FY) ? QB : null
+         return He.some((ee => Me.contains(ee) && !ee.closest(cy))) || !ie.closest(cy) ? Me : null
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3603` → after: `L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3507) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3603)

```diff
-         for (const QB of (0, xB.i)(BB)) {
+         for (const Me of (0, re.g)(ee)) {
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3623-L3624` → after: `L3527-L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3527-L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3527-L3528) · [Before (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3623-L3624)

```diff
-           if (GB) return OB === BB || OB.querySelectorAll(xB.d).length <= 1 ? GB : null;
-           if (OB !== BB && OB.querySelectorAll(xB.d).length > 1) return null
+           if (He) return ie === ee || ie.querySelectorAll(re.b).length <= 1 ? He : null;
+           if (ie !== ee && ie.querySelectorAll(re.b).length > 1) return null
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3629` → after: `L3533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3533) · [Before (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3629)

```diff
-         (0, eB.p)(BB, OB, GB);
+         (0, ne.t)(ee, ie, He);
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3632` → after: `L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3536) · [Before (L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3632)

```diff
-         YB !== DB && (0, eB.p)(YB, DB, DB ? (0, eB.w)(DB) : GB, {
+         ye !== be && (0, ne.t)(ye, be, be ? (0, ne.E)(be) : He, {
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3647` → after: `L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3551) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3647)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new OY, this.tabStripNav = new cY, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new yy, this.tabStripNav = new Sy, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3653` → after: `L3557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3557) · [Before (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3653)

```diff
-         const BB = PB.c.register({
+         const ee = Re.d.register({
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3655` → after: `L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3559) · [Before (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3655)

```diff
-             isActive: () => (0, lB.k)() && "focus" === kY(),
+             isActive: () => (0, qe.l)() && "focus" === Dy(),
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3662` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3566) · [Before (L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3662)

```diff
-             wakePressActs: BB => (0, PB.g)(BB) || BB === (0, MB.h)("menuConfirm") && (0, eB.B)((0, lB.d)())
+             wakePressActs: ee => (0, Re.f)(ee) || ee === (0, oe.j)("menuConfirm") && (0, ne.K)((0, qe.e)())
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3670` → after: `L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3574) · [Before (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3670)

```diff
-             (0, lB.k)() || BB.timestampMs - GB < 100 || (GB = BB.timestampMs, MY())
+             (0, qe.l)() || ee.timestampMs - He < 100 || (He = ee.timestampMs, ky())
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3683` → after: `L3587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3587) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3683)

```diff
-         const DB = null !== (OB = null === (GB = BB.closest(".Dropdown-root")) || void 0 === GB ? void 0 : GB.querySelector(".Dropdown-control")) && void 0 !== OB ? OB : BB,
+         const be = null !== (ie = null === (He = ee.closest(".Dropdown-root")) || void 0 === He ? void 0 : He.querySelector(".Dropdown-control")) && void 0 !== ie ? ie : ee,
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3690` → after: `L3594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3594) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3690)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = QB, this.lastFocusedCentre = (0, eB.w)(QB), this.rememberFocus(QB), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Me, this.lastFocusedCentre = (0, ne.E)(Me), this.rememberFocus(Me), this.notify())
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3711` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3615) · [Before (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3711)

```diff
-           this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && HY(this.focused, null, (0, eB.w)(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (ee = this.focused) && void 0 !== ee && ee.isConnected && Gy(this.focused, null, (0, ne.E)(this.focused)), this.notify()
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3731-L3733` → after: `L3635-L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3635-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3635-L3637) · [Before (L3731-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3731-L3733)

```diff
-           const OB = (0, eB.w)(BB);
-           this.lastFocusedCentre = OB, this.movedInLayer && this.rememberFocus(BB), HY(DB, BB, OB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, eB.b)(BB)
-         } else DB && HY(DB, null, (0, eB.w)(DB));
+           const ie = (0, ne.E)(ee);
+           this.lastFocusedCentre = ie, this.movedInLayer && this.rememberFocus(ee), Gy(be, ee, ie), "false" === ee.getAttribute("aria-pressed") && ee.closest("[data-pad-select-on-focus]") && (0, ne.d)(ee)
+         } else be && Gy(be, null, (0, ne.E)(be));
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3767` → after: `L3671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3671) · [Before (L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3767)

```diff
-         return (0, xB.h)(BB).filter((BB => !(0, xB.x)(BB)))
+         return (0, re.d)(ee).filter((ee => !(0, re.r)(ee)))
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3773` → after: `L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3677) · [Before (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3773)

```diff
-         const YB = null !== (OB = this.findOpenDropdown(GB)) && void 0 !== OB ? OB : GB,
+         const ye = null !== (ie = this.findOpenDropdown(He)) && void 0 !== ie ? ie : He,
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3778` → after: `L3682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3682) · [Before (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3778)

```diff
-           if (null !== this.layerKey && YB.root === this.layerRoot && OB && (0, xB.t)(OB, YB.root)) this.continueLayer(QB, OB), this.wasActive || this.resume(YB.root, DB);
+           if (null !== this.layerKey && ye.root === this.layerRoot && ie && (0, re.n)(ie, ye.root)) this.continueLayer(Me, ie), this.wasActive || this.resume(ye.root, be);
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3783` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3687) · [Before (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3783)

```diff
-             "popup" !== YB.layer.kind || YB !== GB || jB ? "menu" === YB.layer.kind && oB && "inGame" === yB.c.get("gameState") && !(0, oG.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = DB + uY.c) : (this.pressGuardExtends = OB, this.pressGuardUntilMs = DB + (O … [truncated]
+             "popup" !== ye.layer.kind || ye !== He || Ue ? "menu" === ye.layer.kind && Ke && "inGame" === Fe.e.get("gameState") && !(0, FH.h)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = be + Yy.c) : (this.pressGuardExtends = ie, this.pressGuardUntilMs = be + (i … [truncated]
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3786` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3690) · [Before (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3786)

```diff
-         if (this.layerKind = YB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(YB.root), this.validateFocus(YB, DB), DB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, MB.h)("menuConfirm")) || BB … [truncated]
+         if (this.layerKind = ye.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), ee.wokeDevice && this.focusPointedStop(ye.root), this.validateFocus(ye, be), be < this.pressGuardUntilMs && this.pressGuardExtends && (ee.wasPressed((0, oe.j)("menuConfirm")) || ee … [truncated]
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3790-L3791` → after: `L3694-L3695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3694-L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3694-L3695) · [Before (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3790-L3791)

```diff
-             return OB !== WY && (WY = OB, RY.lock()), RY.update(BB, (0, zB.k)().moveDeadzone)
-           })(BB.leftStick)) return jB = this.getHandoff(), NY = lY(jB), qY = zY(), void PB.c.handOffHeldInput();
+             return ie !== gy && (gy = ie, Ey.lock()), Ey.update(ee, (0, ke.h)().moveDeadzone)
+           })(ee.leftStick)) return Ue = this.getHandoff(), By = Ty(Ue), Xy = fy(), void Re.d.handOffHeldInput();
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3797` → after: `L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3701) · [Before (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3797)

```diff
-         if (!OB || !(0, xB.s)(OB)) return null;
+         if (!ie || !(0, re.k)(ie)) return null;
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3804` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3708) · [Before (L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3804)

```diff
-             (0, eB.l)(OB)
+             (0, ne.p)(ie)
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3814` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3718) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3814)

```diff
-         const OB = (0, lB.d)(),
+         const ie = (0, qe.e)(),
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3833` → after: `L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3737) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3833)

```diff
-         this.restoredFromMemory = null !== GB, this.setFocus(null !== GB && void 0 !== GB ? GB : this.pickInitial(BB, {
+         this.restoredFromMemory = null !== He, this.setFocus(null !== He && void 0 !== He ? He : this.pickInitial(ee, {
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3845` → after: `L3749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3749) · [Before (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3845)

```diff
-         YB && xY(YB, BB) ? this.takeOver(BB, YB, OB) : null !== (GB = this.focused) && void 0 !== GB && GB.isConnected && HY(null, this.focused, (0, eB.w)(this.focused))
+         ye && eb(ye, ee) ? this.takeOver(ee, ye, ie) : null !== (He = this.focused) && void 0 !== He && He.isConnected && Gy(null, this.focused, (0, ne.E)(this.focused))
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3849` → after: `L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3753) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3849)

```diff
-         return null !== (OB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== OB ? OB : this.pickInitial(BB, {
+         return null !== (ie = this.layerKey ? this.findRemembered(ee, this.layerKey) : null) && void 0 !== ie ? ie : this.pickInitial(ee, {
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3861` → after: `L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3765) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3861)

```diff
-           point: YB ? (0, eB.w)(YB) : null !== (GB = this.lastFocusedCentre) && void 0 !== GB ? GB : this.getLayerStartPoint(DB),
+           point: ye ? (0, ne.E)(ye) : null !== (He = this.lastFocusedCentre) && void 0 !== He ? He : this.getLayerStartPoint(be),
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3874` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3778) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3874)

```diff
-         return (0, eB.w)(null !== OB && void 0 !== OB ? OB : BB)
+         return (0, ne.E)(null !== ie && void 0 !== ie ? ie : ee)
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3881` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3785) · [Before (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3881)

```diff
-         } = OB, oB = YB instanceof HTMLElement && (0, xB.t)(YB, BB) ? YB : null;
+         } = ie, Ke = ye instanceof HTMLElement && (0, re.n)(ye, ee) ? ye : null;
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3887` → after: `L3791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3791) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3887)

```diff
-           }) : this.focusNearest(BB, QB), void(this.focused && this.focused === OB && this.focused.isConnected && HY(null, this.focused, (0, eB.w)(this.focused)))
+           }) : this.focusNearest(ee, Me), void(this.focused && this.focused === ie && this.focused.isConnected && Gy(null, this.focused, (0, ne.E)(this.focused)))
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3896` → after: `L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3800) · [Before (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3896)

```diff
-           MB = JB >= 0 ? JB : UG(QB, yB);
+           oe = Je >= 0 ? Je : ZH(Me, Fe);
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3913` → after: `L3817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3817) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3913)

```diff
-         const YB = [...BB.querySelectorAll(hY)].filter((YB => (null === GB || void 0 === GB || !GB.has(YB)) && (OB ? (0, xB.A)(YB, BB) : (0, xB.t)(YB, BB)))),
+         const ye = [...ee.querySelectorAll(ny)].filter((ye => (null === He || void 0 === He || !He.has(ye)) && (ie ? (0, re.t)(ye, ee) : (0, re.n)(ye, ee)))),
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3918-L3919` → after: `L3822-L3823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3822-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3822-L3823) · [Before (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3918-L3919)

```diff
-         const GB = [...BB.querySelectorAll(bY)].filter(xB.s);
-         for (const YB of [...(0, xB.i)(BB), ...GB]) {
+         const He = [...ee.querySelectorAll(hy)].filter(re.k);
+         for (const ye of [...(0, re.g)(ee), ...He]) {
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3937` → after: `L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3841) · [Before (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3937)

```diff
-         const QB = BB => OB ? (0, xB.h)(BB) : this.getEnabledCandidates(BB);
+         const Me = ee => ie ? (0, re.d)(ee) : this.getEnabledCandidates(ee);
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3939` → after: `L3843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3843) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3939)

```diff
-         for (const zB of (0, xB.i)(BB))
+         for (const ke of (0, re.g)(ee))
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3942` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3846) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3942)

```diff
-           if (GB && performance.now() - YB < 1e4 && (0, xB.o)(BB)) return null;
+           if (He && performance.now() - ye < 1e4 && (0, re.j)(ee)) return null;
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3948` → after: `L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3852) · [Before (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3948)

```diff
-           MB = JB.length > 0 ? JB : oB,
+           oe = Je.length > 0 ? Je : Ke,
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3956` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3860) · [Before (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3956)

```diff
-           if (DB && (0, xB.t)(DB, BB.root)) return this.pendingFocus = null, void this.setFocus(DB, {
+           if (be && (0, re.n)(be, ee.root)) return this.pendingFocus = null, void this.setFocus(be, {
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3962-L3963` → after: `L3866-L3867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3866-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3866-L3867) · [Before (L3962-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3962-L3963)

```diff
-           QB = !!DB && (0, xB.t)(DB, BB.root);
-         if (!(!QB && DB && DB === this.lastActivated && OB - this.lastActivatedAtMs < 5e3 && BB.root.contains(DB) && (0, xB.s)(DB) && (0, xB.x)(DB))) {
+           Me = !!be && (0, re.n)(be, ee.root);
+         if (!(!Me && be && be === this.lastActivated && ie - this.lastActivatedAtMs < 5e3 && ee.root.contains(be) && (0, re.k)(be) && (0, re.r)(be))) {
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3968` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3872) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3968)

```diff
-                 YB = null !== GB && void 0 !== GB ? GB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
+                 ye = null !== He && void 0 !== He ? He : this.restoredFromMemory ? null : this.pickDefault(ee.root);
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3980-L3982` → after: `L3884-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3884-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3884-L3886) · [Before (L3980-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3980-L3982)

```diff
-         if (BB.wasPressed((0, MB.h)("menuToggleCursor"))) return VY(this.getHandoff()), !0;
-         if (BB.wasPressed((0, MB.h)("menuBack"))) {
-           const BB = (0, eB.l)(OB.root);
+         if (ee.wasPressed((0, oe.j)("menuToggleCursor"))) return dy(this.getHandoff()), !0;
+         if (ee.wasPressed((0, oe.j)("menuBack"))) {
+           const ee = (0, ne.p)(ie.root);
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3985` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3889) · [Before (L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3985)

```diff
-           }) : aG(this, OB.root) || ((0, eB.f)(OB.root) ? this.returnToOpener(OB.root) : this.backToStrip(OB.root) || PY()), !0
+           }) : jH(this, ie.root) || ((0, ne.h)(ie.root) ? this.returnToOpener(ie.root) : this.backToStrip(ie.root) || qy()), !0
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3987` → after: `L3891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3891) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3987)

```diff
-         const GB = (0, MB.h)("menuConfirm");
+         const He = (0, oe.j)("menuConfirm");
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3989` → after: `L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3893) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3989)

```diff
-         BB.wasPressed(GB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (YB = null === (DB = this.focused) || void 0 === DB ? void 0 : DB.getAttribute("data-pad-repeat")) && void 0 !== YB ? YB : null, this.confirmRepeated = BB.wokeDevice, this.confirm … [truncated]
+         ee.wasPressed(He) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (ye = null === (be = this.focused) || void 0 === be ? void 0 : be.getAttribute("data-pad-repeat")) && void 0 !== ye ? ye : null, this.confirmRepeated = ee.wokeDevice, this.confirm … [truncated]
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3992` → after: `L3896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3896) · [Before (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L3992)

```diff
-           if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !(0, xB.x)(BB)) {
+           if (this.confirmPressedOn = null, ee && !this.confirmRepeated && ee === this.focused && ee.isConnected && !(0, re.r)(ee)) {
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4002` → after: `L3906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3906) · [Before (L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4002)

```diff
-         GB && null !== this.confirmRepeatKey && BB.isHeld(OB) && (GB === this.focused && GB.isConnected && !(0, xB.x)(GB) && GB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? GB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
+         He && null !== this.confirmRepeatKey && ee.isHeld(ie) && (He === this.focused && He.isConnected && !(0, re.r)(He) && He.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? He.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4006` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3910) · [Before (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4006)

```diff
-         if (!(0, zB.k)().menuBackToCategories) return !1;
+         if (!(0, ke.h)().menuBackToCategories) return !1;
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4016` → after: `L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3920) · [Before (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4016)

```diff
-           return null !== (GB = this.getEnabledCandidates(BB).find((BB => (0, eB.x)(BB) === OB))) && void 0 !== GB ? GB : null
+           return null !== (He = this.getEnabledCandidates(ee).find((ee => (0, ne.G)(ee) === ie))) && void 0 !== He ? He : null
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4021-L4022` → after: `L3925-L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3925-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3925-L3926) · [Before (L4021-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4021-L4022)

```diff
-         if ((0, mY.b)(BB) || (0, eB.A)(BB)) return;
-         this.lastActivatedKey = null !== (OB = (0, eB.x)(BB)) && void 0 !== OB ? OB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
+         if ((0, Vy.b)(ee) || (0, ne.J)(ee)) return;
+         this.lastActivatedKey = null !== (ie = (0, ne.G)(ee)) && void 0 !== ie ? ie : this.lastActivatedKey, this.lastActivated = ee, this.lastActivatedAtMs = performance.now(), this.rememberFocus(ee);
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4026` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3930) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4026)

```diff
-             YB = new Set(GB.querySelectorAll(`[data-pad-initial-area], ${bY}`)),
+             ye = new Set(He.querySelectorAll(`[data-pad-initial-area], ${hy}`)),
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4030` → after: `L3934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3934) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4030)

```diff
-             return (0, xB.t)(BB, GB) ? null : null !== (DB = this.pickDefault(GB, {
+             return (0, re.n)(ee, He) ? null : null !== (be = this.pickDefault(He, {
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4032-L4034` → after: `L3936-L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3936-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3936-L3938) · [Before (L4032-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4032-L4034)

```diff
-             })) && void 0 !== DB ? DB : this.pickNewAreaStart(GB, YB)
-           }), 5e3, (() => BB.isConnected && (0, xB.x)(BB) && performance.now() - DB < 6e4))
-         }(0, eB.b)(BB), (0, eB.i)(BB)
+             })) && void 0 !== be ? be : this.pickNewAreaStart(He, ye)
+           }), 5e3, (() => ee.isConnected && (0, re.r)(ee) && performance.now() - be < 6e4))
+         }(0, ne.d)(ee), (0, ne.l)(ee)
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4037-L4038` → after: `L3941-L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3941-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3941-L3942) · [Before (L4037-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4037-L4038)

```diff
-         const DB = mG(OB.layer.kind) ? (0, MB.h)("chat") : null;
-         for (const jB of pB.G) {
+         const be = VH(ie.layer.kind) ? (0, oe.j)("chat") : null;
+         for (const Ue of fe.A) {
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4041` → after: `L3945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3945) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4041)

```diff
-         const QB = YB ? (0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone) : {
+         const Me = ye ? (0, fe.k)(ee.leftStick, (0, ke.h)().moveDeadzone) : {
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4045` → after: `L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L3949) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4045)

```diff
-           oB = this.stickRepeat.update((0, pB.nb)(QB), GB);
+           Ke = this.stickRepeat.update((0, fe.gb)(Me), He);
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4160` → after: `L4064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4064) · [Before (L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4160)

```diff
-         (0, eB.b)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : OB.isConnected ? this.tabStripNav.pickContentStart(OB, this.getEnabledCandidates(GB), GB) : DB ? this.tabStripNav.pickReplacedContentStart(BB, DB, this.getEnabledCandidates(GB), GB) : nul … [truncated]
+         (0, ne.d)(ee), this.focusWhenFound((() => "true" !== ee.dataset.padSelected ? null : ie.isConnected ? this.tabStripNav.pickContentStart(ie, this.getEnabledCandidates(He), He) : be ? this.tabStripNav.pickReplacedContentStart(ee, be, this.getEnabledCandidates(He), He) : nul … [truncated]
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4178` → after: `L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4082) · [Before (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4178)

```diff
-         const GB = (0, pB.n)(BB.rightStick, .2);
+         const He = (0, fe.k)(ee.rightStick, .2);
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4188` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4092) · [Before (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4188)

```diff
-           const oB = null !== (DB = dB(this.focused, QB, OB.root)) && void 0 !== DB ? DB : uB(OB.root, QB);
+           const Ke = null !== (be = we(this.focused, Me, ie.root)) && void 0 !== be ? be : Pe(ie.root, Me);
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4196-L4197` → after: `L4100-L4101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4100-L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4100-L4101) · [Before (L4196-L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4196-L4197)

```diff
-     var BD = GB(8924);
-     var OD = GB(9397);
+     var Hb = He(8971);
+     var yb = He(9453);
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4268` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4172) · [Before (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4268)

```diff
-           return "function" === typeof(null === OB || void 0 === OB ? void 0 : OB.playEffect) ? OB : null
+           return "function" === typeof(null === ie || void 0 === ie ? void 0 : ie.playEffect) ? ie : null
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4270-L4271` → after: `L4174-L4175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4174-L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4174-L4175) · [Before (L4270-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4270-L4271)

```diff
-         isVibrationOn: () => (0, zB.k)().vibration,
-         isPadInUse: lB.k
+         isVibrationOn: () => (0, ke.h)().vibration,
+         isPadInUse: qe.l
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4276-L4280` → after: `L4180-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4180-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4180-L4184) · [Before (L4276-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4276-L4280)

```diff
-     var oD = GB(8932),
-       jD = GB(3262),
-       yD = GB(104),
-       JD = GB(31),
-       MD = GB(677);
+     var Fb = He(8979),
+       Jb = He(3142),
+       ob = He(107),
+       Rb = He(35),
+       kb = He(660);
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4290` → after: `L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4194) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4290)

```diff
-         return null === GB || this.deps.readReportedVisitId() === GB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(GB), this.deps.jP(OB, this.deps.getInputType()), "reported") : "notReady"
+         return null === He || this.deps.readReportedVisitId() === He ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(He), this.deps.RR(ie, this.deps.getInputType()), "reported") : "notReady"
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4294-L4298` → after: `L4198-L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4198-L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4198-L4202) · [Before (L4294-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4294-L4298)

```diff
-     var lD = GB(1400),
-       pD = GB(1822),
-       qD = GB(662),
-       ZD = GB(1480),
-       ND = GB(1253);
+     var Tb = He(1340),
+       pb = He(1768),
+       Xb = He(645),
+       zb = He(1432),
+       Bb = He(1196);
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4300` → after: `L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4204) · [Before (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4300)

```diff
-         translationKey: `controller:${BB}`
+         translationKey: `controller:${ee}`
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4362-L4363` → after: `L4266-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4266-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4266-L4267) · [Before (L4362-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4362-L4363)

```diff
-         const YB = null !== (GB = AD[BB][OB]) && void 0 !== GB ? GB : WD[OB];
-         return "string" === typeof YB ? YB : (0, DB.C)(ND.e.get().getCurrentLanguageCode(), YB.translationKey)
+         const ye = null !== (He = Ob[ee][ie]) && void 0 !== He ? He : gb[ie];
+         return "string" === typeof ye ? ye : (0, be.s)(Bb.f.get().getCurrentLanguageCode(), ye.translationKey)
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4371-L4373` → after: `L4275-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4275-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4275-L4277) · [Before (L4371-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4371-L4373)

```diff
-         const DB = (0, lB.D)(),
-           QB = null !== GB && void 0 !== GB ? GB : DB,
-           oB = (0, oD.c)(QB, OB);
+         const be = (0, qe.z)(),
+           Me = null !== He && void 0 !== He ? He : be,
+           Ke = (0, Fb.g)(Me, ie);
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4379-L4380` → after: `L4283-L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4283-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4283-L4284) · [Before (L4379-L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4379-L4380)

```diff
-             "--pad-glyph-mask": `url(${oB})`,
-             "--pad-glyph-aspect": (0, oD.b)(QB, OB)
+             "--pad-glyph-mask": `url(${Ke})`,
+             "--pad-glyph-aspect": (0, Fb.d)(Me, ie)
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4384` → after: `L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4288) · [Before (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4384)

```diff
-     var nD = GB(2e3);
+     var tb = He(1956);
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4391` → after: `L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4295) · [Before (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4391)

```diff
-       } = (0, DB.H)();
+       } = (0, be.v)();
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4400` → after: `L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4304) · [Before (L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4400)

```diff
-           return (0, wB.jsx)(nD.b, {
+           return (0, ve.jsx)(tb.e, {
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4403` → after: `L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4307) · [Before (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4403)

```diff
-             }, ` ${OB.description}`] : [{
+             }, ` ${ie.description}`] : [{
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4408` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4312) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4408)

```diff
-           return (0, wB.jsx)(nD.b, {
+           return (0, ve.jsx)(tb.e, {
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4413` → after: `L4317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4317) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4413)

```diff
-     var fD = GB(9402);
+     var wb = He(9461);
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4421` → after: `L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4325) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4421)

```diff
-           "--pad-drop-stack-hold": `${OB.holdMs}ms`
+           "--pad-drop-stack-hold": `${ie.holdMs}ms`
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4428-L4431` → after: `L4332-L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4332-L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4332-L4335) · [Before (L4428-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4428-L4431)

```diff
-     var dD = GB(9421),
-       KD = GB(9424),
-       uD = GB(9433),
-       mD = GB(9418);
+     var Pb = He(9487),
+       Ab = He(9495),
+       Yb = He(9499),
+       Vb = He(9483);
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4435` → after: `L4339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4339) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4435)

```diff
-         } = (0, yB.o)(["gameState"]), OB = (0, lB.A)(), [YB, DB] = (0, gB.useState)(!1), [QB, oB] = (0, gB.useState)(!1);
+         } = (0, Fe.m)(["gameState"]), ie = (0, qe.x)(), [ye, be] = (0, xe.useState)(!1), [Me, Ke] = (0, xe.useState)(!1);
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4442` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4346) · [Before (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4442)

```diff
-           return (qD.D ? Promise.all([GB.e(84), GB.e(103), GB.e(300), GB.e(207), GB.e(251), GB.e(250), GB.e(102)]).then((() => GB(41543))).then((BB => BB.startWasmPadGameplay)) : Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(111), GB.e(87), GB.e(85), GB.e(86), GB.e(203), GB.e … [truncated]
+           return (Xb.I ? Promise.all([He.e(84), He.e(103), He.e(300), He.e(207), He.e(251), He.e(250), He.e(102)]).then((() => He(41658))).then((ee => ee.startWasmPadGameplay)) : Promise.all([He.e(84), He.e(259), He.e(258), He.e(111), He.e(87), He.e(85), He.e(86), He.e(203), He.e … [truncated]
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4468` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4372) · [Before (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4468)

```diff
-         } = (0, DB.H)(), OB = (0, lB.A)(), {
+         } = (0, be.v)(), ie = (0, qe.x)(), {
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4471` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4375) · [Before (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4471)

```diff
-         } = (0, yB.o)(["gameState", "isUiHidden"]), {
+         } = (0, Fe.m)(["gameState", "isUiHidden"]), {
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4473-L4474` → after: `L4377-L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4377-L4378) · [Before (L4473-L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4473-L4474)

```diff
-         } = (0, zB.u)(), oB = (0, fD.i)(), jB = (0, fD.j)(), [JB, PB] = (0, gB.useState)(uD.c);
-         return (0, ZD.f)(mD.n, PB), !OB || QB || YB || "inGame" !== GB || !oB && !JB ? null : (0, wB.jsxs)("div", {
+         } = (0, ke.p)(), Ke = (0, wb.f)(), Ue = (0, wb.i)(), [Je, Re] = (0, xe.useState)(Yb.b);
+         return (0, zb.f)(Vb.q, Re), !ie || Me || ye || "inGame" !== He || !Ke && !Je ? null : (0, ve.jsxs)("div", {
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4479` → after: `L4383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4383) · [Before (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4479)

```diff
-               glyph: (0, MB.h)("actionButton")
+               glyph: (0, oe.j)("actionButton")
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4489` → after: `L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4393) · [Before (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4489)

```diff
-               glyph: (0, MB.h)("pickBlock")
+               glyph: (0, oe.j)("pickBlock")
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4499` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4403) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4499)

```diff
-         } = (0, DB.H)(), OB = (0, lB.A)(), {
+         } = (0, be.v)(), ie = (0, qe.x)(), {
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4502-L4503` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4406-L4407) · [Before (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4502-L4503)

```diff
-         } = (0, yB.o)(["gameState", "isUiHidden"]), [QB, oB] = (0, gB.useState)(dD.e);
-         return (0, ZD.f)(mD.m, oB), OB && !YB && "inGame" === GB && QB ? (0, wB.jsxs)("div", {
+         } = (0, Fe.m)(["gameState", "isUiHidden"]), [Me, Ke] = (0, xe.useState)(Pb.d);
+         return (0, zb.f)(Vb.o, Ke), ie && !ye && "inGame" === He && Me ? (0, ve.jsxs)("div", {
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4515` → after: `L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4419) · [Before (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4515)

```diff
-         } = (0, DB.H)(), OB = (0, lB.A)(), {
+         } = (0, be.v)(), ie = (0, qe.x)(), {
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4518` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4422) · [Before (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4518)

```diff
-         } = (0, yB.o)(["gameState", "isUiHidden"]), {
+         } = (0, Fe.m)(["gameState", "isUiHidden"]), {
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4520-L4521` → after: `L4424-L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4424-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4424-L4425) · [Before (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4520-L4521)

```diff
-         } = (0, zB.u)(), [oB, jB] = (0, gB.useState)(KD.d);
-         return (0, ZD.f)(mD.l, jB), OB && !YB && "inGame" === GB && oB ? (0, wB.jsxs)("div", {
+         } = (0, ke.p)(), [Ke, Ue] = (0, xe.useState)(Ab.b);
+         return (0, zb.f)(Vb.k, Ue), ie && !ye && "inGame" === He && Ke ? (0, ve.jsxs)("div", {
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4524` → after: `L4428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4428) · [Before (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4524)

```diff
-             glyph: (0, MB.h)("attack")
+             glyph: (0, oe.j)("attack")
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4530-L4534` → after: `L4434-L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4434-L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4434-L4438) · [Before (L4530-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4530-L4534)

```diff
-     var gD = GB(9439),
-       rD = GB(2050),
-       XD = GB(2653),
-       wD = GB(8913);
-     const ED = BB => BB && !(0, gD.e)(rD.e.get("shopInfo")),
+     var Cb = He(9505),
+       vb = He(2018),
+       ub = He(2532),
+       mb = He(8946);
+     const lb = ee => ee && !(0, Cb.b)(vb.c.get("shopInfo")),
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4536-L4538` → after: `L4440-L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4440-L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4440-L4442) · [Before (L4536-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4536-L4538)

```diff
-         const BB = "inGame" === (0, yB.o)(["gameState"]).gameState;
-         return (0, XD.f)("shopInfo", (() => {
-           (0, wD.e)(ED(BB))
+         const ee = "inGame" === (0, Fe.m)(["gameState"]).gameState;
+         return (0, ub.g)("shopInfo", (() => {
+           (0, mb.f)(lb(ee))
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4540` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4444) · [Before (L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4540)

```diff
-           (0, wD.e)(ED(BB))
+           (0, mb.f)(lb(ee))
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4546` → after: `L4450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4450) · [Before (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4546)

```diff
-         } = (0, DB.H)(), {
+         } = (0, be.v)(), {
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4548-L4550` → after: `L4452-L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4452-L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4452-L4454) · [Before (L4548-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4548-L4550)

```diff
-         } = (0, zB.u)();
-         (0, lB.D)();
-         const GB = (0, XO.l)();
+         } = (0, ke.p)();
+         (0, qe.z)();
+         const He = (0, vi.j)();
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4552` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4456) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4552)

```diff
-           const BB = PB.c.register({
+           const ee = Re.d.register({
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4563-L4564` → after: `L4467-L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4467-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4467-L4468) · [Before (L4563-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4563-L4564)

```diff
-           const GB = (0, sB.j)((() => {
-               "inventory" !== PB.c.getActiveConsumerName() && DG.forgetSurface()
+           const He = (0, Ge.m)((() => {
+               "inventory" !== Re.d.getActiveConsumerName() && KH.forgetSurface()
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4568` → after: `L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4472) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4568)

```diff
-               (0, lB.k)() && (0, CB.f)(OB) && OB.closest(VO) && (0, sB.i)() && (0, sB.n)(OB)
+               (0, qe.l)() && (0, Ie.g)(ie) && ie.closest(Oi) && (0, Ge.i)() && (0, Ge.r)(ie)
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4594` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4498) · [Before (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4594)

```diff
-                   glyph: (0, MB.h)(BB)
+                   glyph: (0, oe.j)(ee)
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4596` → after: `L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4500) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4596)

```diff
-                   children: BB(`controller:${DB}`)
+                   children: ee(`controller:${be}`)
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4681` → after: `L4585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4585) · [Before (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4681)

```diff
-         const GB = ((BB, OB) => [...sD[BB], OB ? CD : bD])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const He = ((ee, ie) => [...Qb[ee], ie ? Nb : hb])(ee, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4724` → after: `L4628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4628) · [Before (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4724)

```diff
-         return 1 === YB.length ? YB : BB
+         return 1 === ye.length ? ye : ee
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4726` → after: `L4630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4630) · [Before (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4726)

```diff
-     var JQ = GB(9322);
+     var RM = He(9389);
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4751` → after: `L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4655) · [Before (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4751)

```diff
-       lQ = ["KJ", "nameTag"],
+       TM = ["EJ", "nameTag"],
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4767` → after: `L4671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4671) · [Before (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4767)

```diff
-         (0, dG.h)(BB) ? (0, dG.b)().close(): (tY.noteChosenStop(BB), BB.blur())
+         (0, PH.g)(ee) ? (0, PH.e)().close(): (ib.noteChosenStop(ee), ee.blur())
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4790` → after: `L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4694) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4790)

```diff
-             (0, CB.c)(OB.target);
+             (0, Ie.d)(ie.target);
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4793` → after: `L4697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4697) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4793)

```diff
-             (0, CB.e)(OB.target, " ");
+             (0, Ie.f)(ie.target, " ");
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4796` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4700) · [Before (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4796)

```diff
-             (0, CB.e)(OB.target, "\n");
+             (0, Ie.f)(ie.target, "\n");
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4832` → after: `L4736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4736) · [Before (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4832)

```diff
-             (0, dG.h)(OB.target) && (0, dG.b)().selectNextChannel()
+             (0, PH.g)(ie.target) && (0, PH.e)().selectNextChannel()
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4840` → after: `L4744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4744) · [Before (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4840)

```diff
-         this.host.hide(), (0, dG.h)(GB) ? (0, dG.b)().submit() : (tY.noteChosenStop(GB), null === (BB = (OB = (0, dG.f)(GB)).submit) || void 0 === BB || BB.call(OB), document.activeElement === GB && GB.blur())
+         this.host.hide(), (0, PH.g)(He) ? (0, PH.e)().submit() : (ib.noteChosenStop(He), null === (ee = (ie = (0, PH.f)(He)).submit) || void 0 === ee || ee.call(ie), document.activeElement === He && He.blur())
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4854` → after: `L4758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4758) · [Before (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4854)

```diff
-         (0, CB.e)(OB, yQ(BB, GB, YB)), this.host.setState({
+         (0, Ie.f)(ie, oM(ee, He, ye)), this.host.setState({
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4864-L4865` → after: `L4768-L4769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4768-L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4768-L4769) · [Before (L4864-L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4864-L4865)

```diff
-           GB && (OB.setSelectionRange(0, OB.value.length), (0, CB.e)(OB, GB))
-         } else PQ.claim(performance.now()) && (this.host.hide(), (0, dG.b)().sendLine(this.phraseTexts[BB]))
+           He && (ie.setSelectionRange(0, ie.value.length), (0, Ie.f)(ie, He))
+         } else qM.claim(performance.now()) && (this.host.hide(), (0, PH.e)().sendLine(this.phraseTexts[ee]))
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4868` → after: `L4772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4772) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4868)

```diff
-     var RQ = GB(9346);
+     var EM = He(9413);
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4879` → after: `L4783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4783) · [Before (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4879)

```diff
-         this.host = BB, this.editor = OB, this.lastDirection = null, this.navRepeat = new pB.e((0, qB.d)(WQ)), this.commandRepeats = new Map(aD.filter((BB => {
+         this.host = ee, this.editor = ie, this.lastDirection = null, this.navRepeat = new fe.e((0, Te.b)(gM)), this.commandRepeats = new Map(jb.filter((ee => {
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4888` → after: `L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4792) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4888)

```diff
-           return [OB, (0, qB.d)(AQ)]
+           return [ie, (0, Te.b)(OM)]
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4902` → after: `L4806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4806) · [Before (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4902)

```diff
-           const GB = (0, MB.h)(QB),
+           const He = (0, oe.j)(Me),
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4906` → after: `L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4810) · [Before (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4906)

```diff
-         if (BB.wasPressed((0, MB.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
+         if (ee.wasPressed((0, oe.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4914-L4916` → after: `L4818-L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4818-L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4818-L4820) · [Before (L4914-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4914-L4916)

```diff
-         if (BB.wasPressed((0, MB.h)("keyboardClose"))) return void ZQ(OB);
-         const YB = (0, MB.h)("keyboardType");
-         if (BB.wasPressed(YB)) return PB.c.consumeButton(YB), void this.host.open(OB);
+         if (ee.wasPressed((0, oe.j)("keyboardClose"))) return void zM(ie);
+         const ye = (0, oe.j)("keyboardType");
+         if (ee.wasPressed(ye)) return Re.d.consumeButton(ye), void this.host.open(ie);
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4919` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4823) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4919)

```diff
-         if (this.lastDirection = DB, !QB || (0, dG.h)(OB)) return;
+         if (this.lastDirection = be, !Me || (0, PH.g)(ie)) return;
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4921` → after: `L4825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4825) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4921)

```diff
-         ZQ(OB), oB && PB.c.handOffHeldInput()
+         zM(ie), Ke && Re.d.handOffHeldInput()
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4925` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4829) · [Before (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4925)

```diff
-         if ("Up" === BB && 0 === OB.focus.row && "chat" === OB.kind) return (0, dG.b)().stepHistory(), void this.host.setState({
+         if ("Up" === ee && 0 === ie.focus.row && "chat" === ie.kind) return (0, PH.e)().stepHistory(), void this.host.setState({
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4957` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4861) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4957)

```diff
-         for (const OB of pB.G)
+         for (const ie of fe.A)
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4959` → after: `L4863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4863) · [Before (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4959)

```diff
-         return (0, pB.nb)((0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone))
+         return (0, fe.gb)((0, fe.k)(ee.leftStick, (0, ke.h)().moveDeadzone))
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4975` → after: `L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4879) · [Before (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4975)

```diff
-         OB && JB.o.tM(RQ.d, BB.visible)
+         ie && Je.h.yR(EM.c, ee.visible)
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4983` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4887) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4983)

```diff
-         const BB = PB.c.register({
+         const ee = Re.d.register({
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4985` → after: `L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4889) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4985)

```diff
-             isActive: () => this.state.visible || (0, CB.f)(document.activeElement),
+             isActive: () => this.state.visible || (0, Ie.g)(document.activeElement),
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4992` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4896) · [Before (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4992)

```diff
-             wakePressActs: BB => SQ.includes(BB) || !this.state.visible && BB === (0, MB.h)("keyboardType")
+             wakePressActs: ee => WM.includes(ee) || !this.state.visible && ee === (0, oe.j)("keyboardType")
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4996` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4900) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L4996)

```diff
-             (0, CB.f)(OB) && (OB === this.pendingChatInput || (0, lB.k)() ? this.open(OB) : this.state.visible && OB !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, Ie.g)(ie) && (ie === this.pendingChatInput || (0, qe.l)() ? this.open(ie) : this.state.visible && ie !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5004` → after: `L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4908) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5004)

```diff
-             BB.isTrusted && this.state.visible && (BB => !BB.repeat && !nQ.has(BB.key) && !(0, JQ.e)(BB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(BB.key))(BB) && this.hide()
+             ee.isTrusted && this.state.visible && (ee => !ee.repeat && !tM.has(ee.key) && !(0, RM.d)(ee.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(ee.key))(ee) && this.hide()
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5013` → after: `L4917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4917) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5013)

```diff
-         const QB = JB.o.subscribe(mD.e, (() => {
+         const Me = Je.h.subscribe(Vb.e, (() => {
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5016` → after: `L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4920) · [Before (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5016)

```diff
-           oB = JB.o.subscribe(RQ.f, (BB => {
+           Ke = Je.h.subscribe(EM.e, (ee => {
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5020` → after: `L4924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4924) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5020)

```diff
-           BB(), document.removeEventListener("focusin", OB, !0), document.removeEventListener("focusout", GB, !0), window.removeEventListener("keydown", YB, !0), window.removeEventListener("resize", DB), JB.o.unsubscribe(QB), JB.o.unsubscribe(oB), this.clearPendingChat(), this.hi … [truncated]
+           ee(), document.removeEventListener("focusin", ie, !0), document.removeEventListener("focusout", He, !0), window.removeEventListener("keydown", ye, !0), window.removeEventListener("resize", be), Je.h.unsubscribe(Me), Je.h.unsubscribe(Ke), this.clearPendingChat(), this.hi … [truncated]
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5024` → after: `L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4928) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5024)

```diff
-         const BB = (0, dG.b)();
+         const ee = (0, PH.e)();
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5030` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4934) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5030)

```diff
-         (0, CB.f)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
+         (0, Ie.g)(ee) ? (document.activeElement !== ee && ee.focus(), document.activeElement === ee && this.open(ee)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", ee)
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5035` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4939) · [Before (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5035)

```diff
-         this.restoreInputMode(), (0, CB.l)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, Ie.k)(ee), this.savedInputMode = ee.getAttribute("inputmode"), ee.setAttribute("inputmode", "none");
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5040-L5041` → after: `L4944-L4945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4944-L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4944-L4945) · [Before (L5040-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5040-L5041)

```diff
-           kind: (0, dG.h)(BB) ? "chat" : null !== (OB = (0, dG.f)(BB).kind) && void 0 !== OB ? OB : null,
-           accentsFirst: (YB = ND.e.get().getCurrentLanguageCode(), xD.has(YB)),
+           kind: (0, PH.g)(ee) ? "chat" : null !== (ie = (0, PH.f)(ee).kind) && void 0 !== ie ? ie : null,
+           accentsFirst: (ye = Bb.f.get().getCurrentLanguageCode(), eM.has(ye)),
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5068` → after: `L4972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4972) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5068)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, CB.f)(OB) && this.padInput.onHiddenFrame(BB, OB)
+         this.state.visible ? this.padInput.onVisibleFrame(ee) : (0, Ie.g)(ie) && this.padInput.onHiddenFrame(ee, ie)
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5084` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L4988) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5084)

```diff
-     var fQ = GB(3039);
+     var wM = He(2930);
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5102` → after: `L5006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5006) · [Before (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5102)

```diff
-         KJ: "controller:keyboardTargetBookTitle"
+         EJ: "controller:keyboardTargetBookTitle"
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5134` → after: `L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5038) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5134)

```diff
-         } = (0, DB.H)(), GB = (() => {
+         } = (0, be.v)(), He = (() => {
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5139-L5140` → after: `L5043-L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5043-L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5043-L5044) · [Before (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5139-L5140)

```diff
-         })(), YB = (0, lB.A)(), QB = (0, gB.useRef)(null);
-         (0, zB.u)(), (0, lB.D)(), (0, gB.useEffect)((() => {
+         })(), ye = (0, qe.x)(), Me = (0, xe.useRef)(null);
+         (0, ke.p)(), (0, qe.z)(), (0, xe.useEffect)((() => {
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5150` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5054) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5150)

```diff
-         const yB = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.value) && void 0 !== BB ? BB : "",
+         const Fe = null !== (ee = null === Ue || void 0 === Ue ? void 0 : Ue.value) && void 0 !== ee ? ee : "",
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5159` → after: `L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5063) · [Before (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5159)

```diff
-           })(yB, yB.startsWith("/") ? (0, fQ.g)() : [], MQ.length),
+           })(Fe, Fe.startsWith("/") ? (0, wM.f)() : [], kM.length),
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5163` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5067) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5163)

```diff
-             return null !== (GB = JB[OB]) && void 0 !== GB ? GB : ""
+             return null !== (He = Je[ie]) && void 0 !== He ? He : ""
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5207` → after: `L5111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5111) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5207)

```diff
-           className: XB()(dG.o, "top" === GB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: Ce()(PH.j, "top" === He.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5212` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5116) · [Before (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5212)

```diff
-             "--pad-keyboard-height": `${GB.maxHeightPx}px`
+             "--pad-keyboard-height": `${He.maxHeightPx}px`
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5260` → after: `L5164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5164) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5260)

```diff
-                       glyph: (0, MB.h)(oB)
+                       glyph: (0, oe.j)(Ke)
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5287` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5191) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5287)

```diff
-         } = (0, CB.o)(OB), JB = "password" === OB.type ? "\u2022".repeat(oB.length) : oB;
+         } = (0, Ie.m)(ie), Je = "password" === ie.type ? "\u2022".repeat(Ke.length) : Ke;
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5315-L5316` → after: `L5219-L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5219-L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5219-L5220) · [Before (L5315-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5315-L5316)

```diff
-     var LQ = GB(1434),
-       gQ = GB(3848);
+     var LM = He(1385),
+       CM = He(3773);
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5319` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5223) · [Before (L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5319)

```diff
-         return OB.map(MB.h)
+         return ie.map(oe.j)
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5333` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5237) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5333)

```diff
-         for (const GB of BB)(0, xB.s)(GB) && OB.push(GB.getBoundingClientRect());
+         for (const He of ee)(0, re.k)(He) && ie.push(He.getBoundingClientRect());
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5344` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5248) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5344)

```diff
-         if (((0, gQ.g)(null === OB || void 0 === OB ? void 0 : OB.layer.kind, (0, gQ.h)()) || YB) && GB.push(...hQ(document.querySelectorAll(wQ.join(",")))), 0 === GB.length) return null;
+         if (((0, CM.i)(null === ie || void 0 === ie ? void 0 : ie.layer.kind, (0, CM.k)()) || ye) && He.push(...nM(document.querySelectorAll(mM.join(",")))), 0 === He.length) return null;
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5356` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5260) · [Before (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5356)

```diff
-           GB = BB ? `${Math.round(window.innerHeight-BB.getBoundingClientRect().top)}px` : "";
+           He = ee ? `${Math.round(window.innerHeight-ee.getBoundingClientRect().top)}px` : "";
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5362` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5266) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5362)

```diff
-         } = (0, DB.H)(), {
+         } = (0, be.v)(), {
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5364-L5365` → after: `L5268-L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5268-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5268-L5269) · [Before (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5364-L5365)

```diff
-         } = (0, zB.u)(), GB = (0, lB.A)(), [YB, QB] = (0, gB.useState)(!1), [oB, JB] = (0, gB.useState)([]), [qB, ZB] = (0, gB.useState)(null), NB = (0, gB.useRef)(null), RB = (0, gB.useRef)(null);
-         (0, ZD.f)(RQ.d, (BB => {
+         } = (0, ke.p)(), He = (0, qe.x)(), [ye, Me] = (0, xe.useState)(!1), [Ke, Je] = (0, xe.useState)([]), [Te, pe] = (0, xe.useState)(null), Xe = (0, xe.useRef)(null), ze = (0, xe.useRef)(null);
+         (0, zb.f)(EM.c, (ee => {
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5378-L5379` → after: `L5282-L5283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5282-L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5282-L5283) · [Before (L5378-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5378-L5379)

```diff
-                 const OB = PB.c.getActiveConsumerName(),
-                   GB = (0, gQ.f)();
+                 const ie = Re.d.getActiveConsumerName(),
+                   He = (0, CM.g)();
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5381-L5382` → after: `L5285-L5286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5285-L5286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5285-L5286) · [Before (L5381-L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5381-L5382)

```diff
-                   const BB = (0, MB.h)(GB),
-                     OB = "emoteWheel" === GB && "wheel" === (0, zB.k)().emoteButton || !(0, pB.P)(PB.c.getLastFrame().values, BB) ? {
+                   const ee = (0, oe.j)(He),
+                     ie = "emoteWheel" === He && "wheel" === (0, ke.h)().emoteButton || !(0, fe.L)(Re.d.getLastFrame().values, ee) ? {
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5390` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5294) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5390)

```diff
-                     glyphs: [(0, MB.y)(BB)],
+                     glyphs: [(0, oe.w)(ee)],
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5398` → after: `L5302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5302) · [Before (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5398)

```diff
-                 if (!YB || "focus" !== OB && "cursor" !== OB) return (0, gQ.c)(MB.h);
+                 if (!ye || "focus" !== ie && "cursor" !== ie) return (0, CM.c)(oe.j);
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5404-L5405` → after: `L5308-L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5308-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5308-L5309) · [Before (L5404-L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5404-L5405)

```diff
-                   oB = (0, eB.u)(YB.root),
-                   jB = oB ? !(0, xB.x)(oB) : Boolean(YB.layer.close),
+                   Ke = (0, ne.B)(ye.root),
+                   Ue = Ke ? !(0, re.r)(Ke) : Boolean(ye.layer.close),
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5432` → after: `L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5336) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5432)

```diff
-                 }) : ZB && (0, eB.A)(ZB) ? DB.push({
+                 }) : pe && (0, ne.J)(pe) ? be.push({
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5455-L5456` → after: `L5359-L5360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5359-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5359-L5360) · [Before (L5455-L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5455-L5456)

```diff
-                 const WB = yB.c.get("openEverythingMenuName");
-                 return "inGame" === yB.c.get("gameState") && "popup" !== YB.layer.kind && null !== WB && ((0, yG.m)(WB) ? DB.push(...XQ("leaderboard", "controller:menusClose")) : WB !== jG.p.LOBBY_LEADERBOARD && DB.push(...XQ("leaderboard", "controller:menusLobby"))), DB.push({
+                 const Be = Fe.e.get("openEverythingMenuName");
+                 return "inGame" === Fe.e.get("gameState") && "popup" !== ye.layer.kind && null !== Be && ((0, oH.j)(Be) ? be.push(...uM("leaderboard", "controller:menusClose")) : Be !== JH.r.LOBBY_LEADERBOARD && be.push(...uM("leaderboard", "controller:menusLobby"))), be.push({
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5462` → after: `L5366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5366) · [Before (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5462)

```diff
-               YB = ((BB, OB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${OB}`)(OB, GB);
+               ye = ((ee, ie) => `${ee.map((ee=>`${ee.glyphs.join("+")}:${ee.labelKey}`)).join("|")}@${ie}`)(ie, He);
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5496-L5497` → after: `L5400-L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5400-L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5400-L5401) · [Before (L5496-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5496-L5497)

```diff
-     var bQ = GB(1825);
-     const CQ = [xB.d, "label", "[data-pad-slider]"].join(","),
+     var hM = He(1774);
+     const NM = [re.b, "label", "[data-pad-slider]"].join(","),
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5504` → after: `L5408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5408) · [Before (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5504)

```diff
-           const GB = document.documentElement.classList.contains(lB.q) ? OB[OB.length - 1] : void 0;
+           const He = document.documentElement.classList.contains(qe.r) ? ie[ie.length - 1] : void 0;
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5532` → after: `L5436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5436) · [Before (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5532)

```diff
-           })) && IB(GB, BB, OB) ? GB : null
+           })) && Ye(He, ee, ie) ? He : null
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5541` → after: `L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5445) · [Before (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5541)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5547` → after: `L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5451) · [Before (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5547)

```diff
-           const BB = PB.c.register({
+           const ee = Re.d.register({
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5556` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5460) · [Before (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5556)

```diff
-               wakePressActs: BB => (0, PB.g)(BB) || BB === (0, MB.h)("menuConfirm") && (0, eB.B)((0, lB.d)())
+               wakePressActs: ee => (0, Re.f)(ee) || ee === (0, oe.j)("menuConfirm") && (0, ne.K)((0, qe.e)())
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5562` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5466) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5562)

```diff
-             GB = JB.o.subscribe("appManagerUpdated|activeInputDevice", (BB => {
+             He = Je.h.subscribe("appManagerUpdated|activeInputDevice", (ee => {
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5566` → after: `L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5470) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5566)

```diff
-             BB(), OB(), JB.o.unsubscribe(GB), this.deactivate()
+             ee(), ie(), Je.h.unsubscribe(He), this.deactivate()
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5573` → after: `L5477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5477) · [Before (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5573)

```diff
-           return this.active && !this.hidden && (0, lB.k)()
+           return this.active && !this.hidden && (0, qe.l)()
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5582` → after: `L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5486) · [Before (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5582)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.tM()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.yR()
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5603` → after: `L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5507) · [Before (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5603)

```diff
-           }, this.tM())
+           }, this.yR())
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5610-L5613` → after: `L5514-L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5514-L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5514-L5517) · [Before (L5610-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5610-L5613)

```diff
-           const GB = BB.wokeDevice ? (0, lB.d)() : null;
-           if (GB && this.jumpTo(GB), !(0, lB.k)()) return void this.hide();
-           const YB = (0, MB.h)("menuToggleCursor");
-           if (BB.wasPressed(YB)) return PB.c.consumeButton(YB), void VY(this.getHandoff(null));
+           const He = ee.wokeDevice ? (0, qe.e)() : null;
+           if (He && this.jumpTo(He), !(0, qe.l)()) return void this.hide();
+           const ye = (0, oe.j)("menuToggleCursor");
+           if (ee.wasPressed(ye)) return Re.d.consumeButton(ye), void dy(this.getHandoff(null));
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5615-L5618` → after: `L5519-L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5519-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5519-L5522) · [Before (L5615-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5615-L5618)

```diff
-           const DB = (0, MB.h)("menuConfirm"),
-             QB = (0, MB.h)("menuSecondary");
-           if (BB.wasPressed((0, MB.h)("menuBack"))) return (0, eB.l)(OB.root) || (0, eB.f)(OB.root) || PY(), void this.tM();
-           if (xG(null, BB, OB)) return BB.wasReleased(DB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, DB)), void this.tM();
+           const be = (0, oe.j)("menuConfirm"),
+             Me = (0, oe.j)("menuSecondary");
+           if (ee.wasPressed((0, oe.j)("menuBack"))) return (0, ne.p)(ie.root) || (0, ne.h)(ie.root) || qy(), void this.yR();
+           if (ey(null, ee, ie)) return ee.wasReleased(be) && this.press && (this.updateHit(!1), this.updateConfirm(ee, be)), void this.yR();
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5630` → after: `L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5534) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5630)

```diff
-             jB = (0, zB.k)().moveDeadzone,
+             Ue = (0, ke.h)().moveDeadzone,
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5632` → after: `L5536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5536) · [Before (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5632)

```diff
-               const GB = (0, pB.n)(BB, AB(OB));
+               const He = (0, fe.k)(ee, Ee(ie));
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5638` → after: `L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5542) · [Before (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5638)

```diff
-             if (!yB && !nB(BB.rightStick) && !OB && !GB && !BB.wokeDevice) return void this.tM();
+             if (!Fe && !de(ee.rightStick) && !ie && !He && !ee.wokeDevice) return void this.yR();
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5641` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5545) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5641)

```diff
-             }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.tM()
+             }, ee.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.yR()
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5650` → after: `L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5554) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5650)

```diff
-             cursorSpeedPercent: (0, zB.k)().cursorSpeed,
+             cursorSpeedPercent: (0, ke.h)().cursorSpeed,
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5659` → after: `L5563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5563) · [Before (L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5659)

```diff
-           (qB || ZB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(qB), this.updateConfirm(BB, DB), this.updateSecondary(BB, QB), this.updateScroll(BB, OB), this.tM()
+           (Te || pe || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Te), this.updateConfirm(ee, be), this.updateSecondary(ee, Me), this.updateScroll(ee, ie), this.yR()
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5685` → after: `L5589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5589) · [Before (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5685)

```diff
-           const YB = null !== GB && void 0 !== GB ? GB : tY.pickInitial(OB.root, {
+           const ye = null !== He && void 0 !== He ? He : ib.pickInitial(ie.root, {
```

#### 468. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5690` → after: `L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5594) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5690)

```diff
-           YB && (this.pendingPageStart = null, this.jumpTo((0, eB.w)(YB)))
+           ye && (this.pendingPageStart = null, this.jumpTo((0, ne.E)(ye)))
```

#### 469. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5700` → after: `L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5604) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5700)

```diff
-             YB = GB && BB.order <= this.layerOrder ? GB : tY.getLayerStartPoint(BB.root);
+             ye = He && ee.order <= this.layerOrder ? He : ib.getLayerStartPoint(ee.root);
```

#### 470. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5707` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5611) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5707)

```diff
-             element: null !== (OB = this.interactive) && void 0 !== OB ? OB : this.findDraggedSliderNearby(),
+             element: null !== (ie = this.interactive) && void 0 !== ie ? ie : this.findDraggedSliderNearby(),
```

#### 471. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5718` → after: `L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5622) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5718)

```diff
-           return GB >= OB.top - 40 && GB <= OB.bottom + 40 ? BB : null
+           return He >= ie.top - 40 && He <= ie.bottom + 40 ? ee : null
```

#### 472. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5722-L5723` → after: `L5626-L5627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5626-L5627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5626-L5627) · [Before (L5722-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5722-L5723)

```diff
-           const OB = pB.G.find((OB => BB.wasPressed(OB)));
-           return !!OB && (GB = this.getHandoff(OB), NY = lY(GB), qY = null, RY.lock(), PB.c.handOffHeldInput(), !0);
+           const ie = fe.A.find((ie => ee.wasPressed(ie)));
+           return !!ie && (He = this.getHandoff(ie), By = Ty(He), Xy = null, Ey.lock(), Re.d.handOffHeldInput(), !0);
```

#### 473. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5737` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5641) · [Before (L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5737)

```diff
-           const GB = (0, zB.k)().cursorMagnetism && !(0, bQ.c)(BB) && !BB.closest("[data-pad-slider]"),
+           const He = (0, ke.h)().cursorMagnetism && !(0, hM.e)(ee) && !ee.closest("[data-pad-slider]"),
```

#### 474. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5751` → after: `L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5655) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5751)

```diff
-             YB = GB && !(0, NB.p)(GB) && (BB => {
+             ye = He && !(0, Xe.n)(He) && (ee => {
```

#### 475. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5755-L5756` → after: `L5659-L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5659-L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5659-L5660) · [Before (L5755-L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5755-L5756)

```diff
-             })(GB) ? GB : null;
-           if (YB !== this.hit) return (0, eB.p)(this.hit, YB, OB), this.hit = YB, void this.setInteractive(YB ? (BB => {
+             })(He) ? He : null;
+           if (ye !== this.hit) return (0, ne.t)(this.hit, ye, ie), this.hit = ye, void this.setInteractive(ye ? (ee => {
```

#### 476. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5760-L5761` → after: `L5664-L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5664-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5664-L5665) · [Before (L5760-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5760-L5761)

```diff
-               const BB = null !== (GB = null === (YB = OB.parentElement) || void 0 === YB ? void 0 : YB.closest("[data-pad-focusable]")) && void 0 !== GB ? GB : OB;
-               return (0, xB.x)(BB) ? {
+               const ee = null !== (He = null === (ye = ie.parentElement) || void 0 === ye ? void 0 : ye.closest("[data-pad-focusable]")) && void 0 !== He ? He : ie;
+               return (0, re.r)(ee) ? {
```

#### 477. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5778` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5682) · [Before (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5778)

```diff
-           BB && YB && (0, eB.p)(YB, YB, OB)
+           ee && ye && (0, ne.t)(ye, ye, ie)
```

#### 478. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5788` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5692) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5788)

```diff
-           this.hit && (0, eB.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
+           this.hit && (0, ne.t)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
```

#### 479. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5795` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5699) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5795)

```diff
-           if (!BB || (0, eB.A)(BB)) return {
+           if (!ee || (0, ne.J)(ee)) return {
```

#### 480. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5804` → after: `L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5708) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5804)

```diff
-           } : ((0, eB.q)(BB, this.getPoint()), {
+           } : ((0, ne.v)(ee, this.getPoint()), {
```

#### 481. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5833-L5834` → after: `L5737-L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5737-L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5737-L5738) · [Before (L5833-L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5833-L5834)

```diff
-             const BB = null !== QB && void 0 !== QB ? QB : GB.target.isConnected ? GB.target : null;
-             BB && (0, eB.t)(BB, DB);
+             const ee = null !== Me && void 0 !== Me ? Me : He.target.isConnected ? He.target : null;
+             ee && (0, ne.z)(ee, be);
```

#### 482. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5840` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5744) · [Before (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5840)

```diff
-             OB && (tY.noteCursorActivation(OB), (0, NB.g)(OB, new MouseEvent("click", (0, eB.J)(DB, 0, 0))), (0, eB.i)(OB), (0, eB.I)(OB) && (0, eB.E)(OB))
+             ie && (ib.noteCursorActivation(ie), (0, Xe.e)(ie, new MouseEvent("click", (0, ne.Q)(be, 0, 0))), (0, ne.l)(ie), (0, ne.N)(ie) && (0, ne.L)(ie))
```

#### 483. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5845-L5846` → after: `L5749-L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5749-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5749-L5750) · [Before (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846)

```diff
-           const YB = null !== (BB = null === (OB = this.hit) || void 0 === OB ? void 0 : OB.closest("[data-pad-repeat]")) && void 0 !== BB ? BB : null;
-           this.repeatStop = YB, this.repeatKey = null !== (GB = null === YB || void 0 === YB ? void 0 : YB.getAttribute("data-pad-repeat")) && void 0 !== GB ? GB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           const ye = null !== (ee = null === (ie = this.hit) || void 0 === ie ? void 0 : ie.closest("[data-pad-repeat]")) && void 0 !== ee ? ee : null;
+           this.repeatStop = ye, this.repeatKey = null !== (He = null === ye || void 0 === ye ? void 0 : ye.getAttribute("data-pad-repeat")) && void 0 !== He ? He : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 484. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5852` → after: `L5756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5756) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5852)

```diff
-           BB.isConnected && !(0, xB.x)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && OB && BB.contains(OB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, tY.noteCursorActivation(BB), (0, NB.g … [truncated]
+           ee.isConnected && !(0, re.r)(ee) && ee.getAttribute("data-pad-repeat") === this.repeatKey && ie && ee.contains(ie) ? ee.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, ib.noteCursorActivation(ee), (0, Xe.e … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5858` → after: `L5762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5762) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5858)

```diff
-           "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, eB.t)(BB.target, this.getPoint())
+           "slider" === ee.kind && ee.adjuster.endDrag(), "pointer" === ee.kind && ee.target.isConnected && (0, ne.z)(ee.target, this.getPoint())
```

#### 486. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5864` → after: `L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5768) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5864)

```diff
-           BB.wasPressed(OB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(OB) && (this.secondaryArmed = !1, BB.wasReleased(OB) && this.hit && (0, eB.n)(this.hit, this.getPoint(), 2))
+           ee.wasPressed(ie) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !ee.isHeld(ie) && (this.secondaryArmed = !1, ee.wasReleased(ie) && this.hit && (0, ne.s)(this.hit, this.getPoint(), 2))
```

#### 487. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5912` → after: `L5816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5816) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5912)

```diff
-           OB = (0, lB.A)();
+           ie = (0, qe.x)();
```

#### 488. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5932` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5836) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5932)

```diff
-                 return null !== OB && void 0 !== OB && OB.isConnected ? OB : null
+                 return null !== ie && void 0 !== ie && ie.isConnected ? ie : null
```

#### 489. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5935` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5839) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5935)

```diff
-               const jB = null !== (OB = null === DB || void 0 === DB ? void 0 : DB.closest("[data-pad-reticle-box]")) && void 0 !== OB ? OB : DB;
+               const Ue = null !== (ie = null === be || void 0 === be ? void 0 : be.closest("[data-pad-reticle-box]")) && void 0 !== ie ? ie : be;
```

#### 490. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5970` → after: `L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5874) · [Before (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L5970)

```diff
-         BB.style.transform = `translate3d(${OB.x}px, ${OB.y}px, 0)`, BB.classList.toggle("Visible", OB.visible), BB.classList.toggle("Pressed", OB.pressed)
+         ee.style.transform = `translate3d(${ie.x}px, ${ie.y}px, 0)`, ee.classList.toggle("Visible", ie.visible), ee.classList.toggle("Pressed", ie.pressed)
```

#### 491. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6014` → after: `L5918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5918) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6014)

```diff
-                     return null !== (GB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent")))) && void 0 !== GB ? GB : null
+                     return null !== (He = [...ee.querySelectorAll("button")].find((ee => !ee.matches(".fc-cta-consent")))) && void 0 !== He ? He : null
```

#### 492. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6033` → after: `L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5937) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6033)

```diff
-             const BB = (0, lB.k)() ? MY() : null,
+             const ee = (0, qe.l)() ? ky() : null,
```

#### 493. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6056` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5960) · [Before (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6056)

```diff
-         } = (0, zB.u)(), OB = (0, LQ.s)() && BB;
+         } = (0, ke.p)(), ie = (0, LM.A)() && ee;
```

#### 494. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6065-L6068` → after: `L5969-L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5969-L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5969-L5972) · [Before (L6065-L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6065-L6068)

```diff
-     var yo = GB(9457),
-       Jo = GB(9478),
-       Mo = GB(9469);
-     GB(9482);
+     var oK = He(9518),
+       RK = He(9539),
+       kK = He(9529);
+     He(9548);
```

#### 495. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6077` → after: `L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5981) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6077)

```diff
-           jB((0, Mo.C)(BB, OB, oB.current))
+           Ue((0, kK.E)(ee, ie, Ke.current))
```

#### 496. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6079-L6080` → after: `L5983-L5984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5983-L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5983-L5984) · [Before (L6079-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6079-L6080)

```diff
-         (0, gB.useLayoutEffect)((() => (OB(GB), (0, gQ.q)(BB, GB), JB.o.tM(gQ.l), () => {
-           OB(!1), (0, gQ.q)(BB, !1), JB.o.tM(gQ.l)
+         (0, xe.useLayoutEffect)((() => (ie(He), (0, CM.q)(ee, He), Je.h.yR(CM.l), () => {
+           ie(!1), (0, CM.q)(ee, !1), Je.h.yR(CM.l)
```

#### 497. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6087` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L5991) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6087)

```diff
-           (0, yG.r)() && yB()
+           (0, oH.o)() && Fe()
```

#### 498. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6115-L6116` → after: `L6019-L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6019-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6019-L6020) · [Before (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6115-L6116)

```diff
-               width: 2 * Mo.o + "rem",
-               height: 2 * Mo.o + "rem"
+               width: 2 * kK.s + "rem",
+               height: 2 * kK.s + "rem"
```

#### 499. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6120` → after: `L6024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6024) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6120)

```diff
-               viewBox: `0 0 ${Mo.j} ${Mo.j}`,
+               viewBox: `0 0 ${kK.p} ${kK.p}`,
```

#### 500. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6122` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6026) · [Before (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6122)

```diff
-                 d: (0, Mo.r)(BB, GB, Mo.f, Mo.g, Mo.i),
+                 d: (0, kK.u)(ee, He, kK.g, kK.i, kK.m),
```

#### 501. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6129-L6131` → after: `L6033-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6033-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6033-L6035) · [Before (L6129-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6129-L6131)

```diff
-                 cx: Mo.f,
-                 cy: Mo.f,
-                 r: Mo.i
+                 cx: kK.g,
+                 cy: kK.g,
+                 r: kK.m
```

#### 502. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6134-L6136` → after: `L6038-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6038-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6038-L6040) · [Before (L6134-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6134-L6136)

```diff
-                 cx: Mo.f,
-                 cy: Mo.f,
-                 r: Mo.g
+                 cx: kK.g,
+                 cy: kK.g,
+                 r: kK.i
```

#### 503. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6139` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6043) · [Before (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6139)

```diff
-                 d: (0, Mo.r)(YB, GB, Mo.f, Mo.g, Mo.i)
+                 d: (0, kK.u)(ye, He, kK.g, kK.i, kK.m)
```

#### 504. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6142` → after: `L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6046) · [Before (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6142)

```diff
-               const OB = (0, Mo.x)(BB, GB);
+               const ie = (0, kK.z)(ee, He);
```

#### 505. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6148-L6149` → after: `L6052-L6053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6052-L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6052-L6053) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6148-L6149)

```diff
-                   left: `calc(50% + ${Mo.d*Math.cos(OB)}rem)`,
-                   top: `calc(50% + ${Mo.d*Math.sin(OB)}rem)`
+                   left: `calc(50% + ${kK.e*Math.cos(ie)}rem)`,
+                   top: `calc(50% + ${kK.e*Math.sin(ie)}rem)`
```

#### 506. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6165-L6168` → after: `L6069-L6072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6069-L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6069-L6072) · [Before (L6165-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6165-L6168)

```diff
-         } = (0, DB.H)(), OB = Po("chat", uG.t), GB = (0, gB.useMemo)((() => MQ.map((OB => BB(OB)))), [BB]);
-         return (0, ZD.f)(uG.r, (() => {
-           OB.open || (0, yo.f)() || (0, Jo.q)() || "inGame" !== yB.c.get("gameState") || (0, yG.r)() || !(0, dG.b)() || OB.show()
-         })), (0, ZD.f)(uG.i, (BB => {
+         } = (0, be.v)(), ie = qK("chat", YH.r), He = (0, xe.useMemo)((() => kM.map((ie => ee(ie)))), [ee]);
+         return (0, zb.f)(YH.o, (() => {
+           ie.open || (0, oK.f)() || (0, RK.q)() || "inGame" !== Fe.e.get("gameState") || (0, oH.o)() || !(0, PH.e)() || ie.show()
+         })), (0, zb.f)(YH.g, (ee => {
```

#### 507. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6170` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6074) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6170)

```diff
-         })), (0, ZD.f)(uG.n, (() => {
+         })), (0, zb.f)(YH.m, (() => {
```

#### 508. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6174` → after: `L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6078) · [Before (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6174)

```diff
-           null !== YB ? PQ.claim(performance.now()) && (OB.close(), null === (BB = (0, dG.b)()) || void 0 === BB || BB.sendLine(GB[YB])) : OB.close()
+           null !== ye ? qM.claim(performance.now()) && (ie.close(), null === (ee = (0, PH.e)()) || void 0 === ee || ee.sendLine(He[ye])) : ie.close()
```

#### 509. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6187` → after: `L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6091) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6187)

```diff
-         } = (0, DB.H)(), OB = Po("actionButton", Jo.s), [GB, YB] = (0, gB.useState)([]);
+         } = (0, be.v)(), ie = qK("actionButton", RK.u), [He, ye] = (0, xe.useState)([]);
```

#### 510. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6189-L6190` → after: `L6093-L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6093-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6093-L6094) · [Before (L6189-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6189-L6190)

```diff
-             OB.open || (0, yo.f)() || (0, uG.e)() || "inGame" !== yB.c.get("gameState") || (0, yG.r)() || (YB(BB), OB.show())
-           })), (0, ZD.f)(Jo.b, (BB => {
+             ie.open || (0, oK.f)() || (0, YH.e)() || "inGame" !== Fe.e.get("gameState") || (0, oH.o)() || (ye(ee), ie.show())
+           })), (0, zb.f)(RK.d, (ee => {
```

#### 511. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6195` → after: `L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6099) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6195)

```diff
-             OB.close(), null !== BB && JB.o.tM(Jo.p, GB[BB])
+             ie.close(), null !== ee && Je.h.yR(RK.o, He[ee])
```

#### 512. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6214` → after: `L6118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6118) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6214)

```diff
-     var No = GB(92);
+     var zK = He(97);
```

#### 513. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6218` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6122) · [Before (L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6218)

```diff
-           YB = (0, lB.f)(),
+           ye = (0, qe.h)(),
```

#### 514. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6220` → after: `L6124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6124) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6220)

```diff
-             const BB = [JB.o.subscribe(OD.g, (() => {
+             const ee = [Je.h.subscribe(yb.f, (() => {
```

#### 515. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6222` → after: `L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6126) · [Before (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6222)

```diff
-               })), JB.o.subscribe("damagedByOtherPlayer", (() => {
+               })), Je.h.subscribe("damagedByOtherPlayer", (() => {
```

#### 516. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6224` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6128) · [Before (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6224)

```diff
-               })), JB.o.subscribe("yourAttackHit", (BB => {
+               })), Je.h.subscribe("yourAttackHit", (ee => {
```

#### 517. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6234` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6138) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6234)

```diff
-               for (const OB of BB) JB.o.unsubscribe(OB);
+               for (const ie of ee) Je.h.unsubscribe(ie);
```

#### 518. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6243-L6244` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6147-L6148) · [Before (L6243-L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6243-L6244)

```diff
-                 const BB = JD.i.getItem(zD);
-                 return "string" === typeof BB ? BB : null
+                 const ee = Rb.m.getItem(fb);
+                 return "string" === typeof ee ? ee : null
```

#### 519. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6247` → after: `L6151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6151) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6247)

```diff
-                 JD.i.setItem(zD, BB)
+                 Rb.m.setItem(fb, ee)
```

#### 520. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6249` → after: `L6153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6153) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6249)

```diff
-               isPadActive: lB.k,
+               isPadActive: qe.l,
```

#### 521. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6252` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6156) · [Before (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6252)

```diff
-                 return null !== (BB = null === (OB = oB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : null
+                 return null !== (ee = null === (ie = Ke.g.getActivePad()) || void 0 === ie ? void 0 : ie.family) && void 0 !== ee ? ee : null
```

#### 522. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6255-L6256` → after: `L6159-L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6159-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6159-L6160) · [Before (L6255-L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6255-L6256)

```diff
-               getInputType: yD.d,
-               jP: jD.logControllerUsedToGtag
+               getInputType: ob.b,
+               RR: Jb.logControllerUsedToGtag
```

#### 523. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6265` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6169) · [Before (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6265)

```diff
-               DB = JB.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               be = Je.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 524. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6272` → after: `L6176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6176) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6272)

```diff
-               JB.o.unsubscribe(DB), QB(), null !== GB && clearTimeout(GB)
+               Je.h.unsubscribe(be), Me(), null !== He && clearTimeout(He)
```

#### 525. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6276-L6277` → after: `L6180-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6180-L6181) · [Before (L6276-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6276-L6277)

```diff
-             const YB = (0, lB.p)(BB, GB);
-             PB.c.dispatch(BB, OB, YB)
+             const ye = (0, qe.o)(ee, He);
+             Re.d.dispatch(ee, ie, ye)
```

#### 526. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6279` → after: `L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6183) · [Before (L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6279)

```diff
-         let MB = null !== (BB = null === (OB = oB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : null;
+         let oe = null !== (ee = null === (ie = Ke.g.getActivePad()) || void 0 === ie ? void 0 : ie.family) && void 0 !== ee ? ee : null;
```

#### 527. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6282-L6283` → after: `L6186-L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6186-L6187) · [Before (L6282-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6282-L6283)

```diff
-             (PB.c.reset(), (0, lB.s)(), JB.o.tM(oB.c, BB), (null !== (OB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== OB ? OB : null) !== MB) && (MB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== GB ? GB : null, JB.o.tM(zB. … [truncated]
-             !BB && (0, lB.k)() && (0, lB.w)(yB.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (Re.d.reset(), (0, qe.s)(), Je.h.yR(Ke.c, ee), (null !== (ie = null === ee || void 0 === ee ? void 0 : ee.family) && void 0 !== ie ? ie : null) !== oe) && (oe = null !== (He = null === ee || void 0 === ee ? void 0 : ee.family) && void 0 !== He ? He : null, Je.h.yR(ke. … [truncated]
+             !ee && (0, qe.l)() && (0, qe.t)(Fe.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 528. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6286` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6190) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6286)

```diff
-             "visible" !== document.visibilityState && PB.c.clear()
+             "visible" !== document.visibilityState && Re.d.clear()
```

#### 529. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6289` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6193) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6289)

```diff
-             PB.c.clear()
+             Re.d.clear()
```

#### 530. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6291` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6195) · [Before (L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6291)

```diff
-         document.addEventListener("visibilitychange", qB), window.addEventListener("blur", ZB), oB.g.start(), (0, oD.g)();
+         document.addEventListener("visibilitychange", Te), window.addEventListener("blur", pe), Ke.g.start(), (0, Fb.m)();
```

#### 531. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6301-L6304` → after: `L6205-L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6205-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6205-L6208) · [Before (L6301-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6301-L6304)

```diff
-     var Ao = GB(8906),
-       Vo = GB(9485);
-     const So = new Set(oD.f),
-       no = BB => `${Vo.j}${(0,zB.o)()}/${BB}`,
+     var gK = He(8940),
+       OK = He(9555);
+     const dK = new Set(Fb.k),
+       WK = ee => `${OK.m}${(0,ke.k)()}/${ee}`,
```

#### 532. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6306-L6308` → after: `L6210-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6210-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6210-L6212) · [Before (L6306-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6306-L6308)

```diff
-         if (!(0, Vo.h)(BB)) return null;
-         const [OB, GB] = BB.slice(Vo.j.length).split("/");
-         return (0, Ao.g)(OB) && So.has(GB) ? (0, oD.c)(OB, GB) : null
+         if (!(0, OK.l)(ee)) return null;
+         const [ie, He] = ee.slice(OK.m.length).split("/");
+         return (0, gK.f)(ie) && dK.has(He) ? (0, Fb.g)(ie, He) : null
```

#### 533. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6310` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6214) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6310)

```diff
-     var fo = GB(9490);
+     var ZK = He(9558);
```

#### 534. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6314` → after: `L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6218) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6314)

```diff
-         } = (0, DB.H)(), OB = (0, lB.A)(), {
+         } = (0, be.v)(), ie = (0, qe.x)(), {
```

#### 535. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6317` → after: `L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6221) · [Before (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6317)

```diff
-         } = (0, yB.o)(["gameState", "isUiHidden"]), {
+         } = (0, Fe.m)(["gameState", "isUiHidden"]), {
```

#### 536. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6320-L6321` → after: `L6224-L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6224-L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6224-L6225) · [Before (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6320-L6321)

```diff
-         } = (0, zB.u)(), [jB, JB] = (0, gB.useState)(fo.e);
-         return (0, ZD.f)(mD.q, JB), OB && !YB && "inGame" === GB && jB ? (0, wB.jsxs)("div", {
+         } = (0, ke.p)(), [Ue, Je] = (0, xe.useState)(ZK.e);
+         return (0, zb.f)(Vb.s, Je), ie && !ye && "inGame" === He && Ue ? (0, ve.jsxs)("div", {
```

#### 537. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6324` → after: `L6228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6228) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6324)

```diff
-             glyph: (0, MB.h)("toggle" === oB ? "sneak" : "sneakToggle")
+             glyph: (0, oe.j)("toggle" === Ke ? "sneak" : "sneakToggle")
```

#### 538. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6374` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6278) · [Before (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6374)

```diff
-               QB.style.transform = `translate3d(${Math.round(oB)}px, ${Math.round(jB)}px, 0)`, QB.style.visibility = "visible"
+               Me.style.transform = `translate3d(${Math.round(Ke)}px, ${Math.round(Ue)}px, 0)`, Me.style.visibility = "visible"
```

#### 539. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6391-L6395` → after: `L6295-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6295-L6299) · [Before (L6391-L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6391-L6395)

```diff
-     var mo = GB(1383),
-       Io = GB(9498),
-       Fo = GB(1485),
-       io = GB(9506),
-       Lo = GB(9513);
+     var AK = He(1323),
+       YK = He(9566),
+       VK = He(1438),
+       aK = He(9570),
+       cK = He(9575);
```

#### 540. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6417` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6321) · [Before (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6417)

```diff
-         } = (0, DB.H)(), OB = (0, lB.A)(), GB = (0, Io.e)(), YB = (0, XD.g)("_tasks"), QB = (0, XD.g)("_availableLeaderboards");
+         } = (0, be.v)(), ie = (0, qe.x)(), He = (0, YK.b)(), ye = (0, ub.i)("_tasks"), Me = (0, ub.i)("_availableLeaderboards");
```

#### 541. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6438` → after: `L6342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6342) · [Before (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6438)

```diff
-             } = go[OB], DB = "leave" === OB ? Fo.Q : Fo.f;
+             } = xK[ie], be = "leave" === ie ? VK.G : VK.c;
```

#### 542. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6445-L6446` → after: `L6349-L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6349-L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6349-L6350) · [Before (L6445-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6445-L6446)

```diff
-                       return JB.o.tM(Lo.k), void yB.c.set({
-                         openEverythingMenuName: jG.p.SHOP
+                       return Je.h.yR(cK.m), void Fe.e.set({
+                         openEverythingMenuName: JH.r.SHOP
```

#### 543. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6449` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6353) · [Before (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6449)

```diff
-                       return void JB.o.tM("toggleMenu", "retentionFeatures");
+                       return void Je.h.yR("toggleMenu", "retentionFeatures");
```

#### 544. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6451` → after: `L6355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6355) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6451)

```diff
-                       return void JB.o.tM("toggleMenu", "inviteLink");
+                       return void Je.h.yR("toggleMenu", "inviteLink");
```

#### 545. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6459` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6363) · [Before (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6459)

```diff
-                 children: [(0, wB.jsx)(mo.b, {
+                 children: [(0, ve.jsx)(AK.e, {
```

#### 546. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6469-L6470` → after: `L6373-L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6373-L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6373-L6374) · [Before (L6469-L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6469-L6470)

```diff
-     var Xo = GB(2085);
-     const wo = pB.E,
+     var CK = He(2046);
+     const vK = fe.w,
```

#### 547. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6475` → after: `L6379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6379) · [Before (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6475)

```diff
-         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(pB.bb).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
+         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(fe.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
```

#### 548. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6500` → after: `L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6404) · [Before (L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6500)

```diff
-           continues: (0, lB.j)(BB)
+           continues: (0, qe.i)(ee)
```

#### 549. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6513-L6514` → after: `L6417-L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6417-L6418) · [Before (L6513-L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6513-L6514)

```diff
-         const DB = (0, pB.t)(BB.values, this.previousHeld),
-           QB = null === GB ? -1 : (0, pB.p)(GB),
+         const be = (0, fe.q)(ee.values, this.previousHeld),
+           Me = null === He ? -1 : (0, fe.l)(He),
```

#### 550. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6535` → after: `L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6439) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6535)

```diff
-     const ao = new Set([...Xo.k, ...Xo.y]),
+     const SK = new Set([...CK.j, ...CK.B]),
```

#### 551. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6539` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6443) · [Before (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6539)

```diff
-       })(BB, Xo.t, ao),
+       })(ee, CK.q, SK),
```

#### 552. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6547-L6548` → after: `L6451-L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6451-L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6451-L6452) · [Before (L6547-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6547-L6548)

```diff
-             } = YB.onKeyDown(BB, !(0, lB.G)(BB) || (0, BD.j)() || (0, yG.r)(), eo(BB.code));
-             GB && (BB.stopImmediatePropagation(), co(BB) && BB.preventDefault()), DB && ((0, lB.w)("keyboardMouse"), OB())
+             } = ye.onKeyDown(ee, !(0, qe.B)(ee) || (0, Hb.e)() || (0, oH.o)(), nK(ee.code));
+             He && (ee.stopImmediatePropagation(), mK(ee) && ee.preventDefault()), be && ((0, qe.t)("keyboardMouse"), ie())
```

#### 553. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6558` → after: `L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6462) · [Before (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6558)

```diff
-             const DB = PB.c.getActiveConsumerName(),
+             const be = Re.d.getActiveConsumerName(),
```

#### 554. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6560` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6464) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6560)

```diff
-               oB = QB ? (0, MB.h)("menuBack") : null,
+               Ke = Me ? (0, oe.j)("menuBack") : null,
```

#### 555. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6568-L6569` → after: `L6472-L6473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6472-L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6472-L6473) · [Before (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6568-L6569)

```diff
-               const BB = (0, zB.k)().swapSticks ? "right" : "left";
-               PB.c.consumeAllHeld(YB.consumeLeavesMoveStick() ? BB : null)
+               const ee = (0, ke.h)().swapSticks ? "right" : "left";
+               Re.d.consumeAllHeld(ye.consumeLeavesMoveStick() ? ee : null)
```

#### 556. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6573` → after: `L6477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6477) · [Before (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6573)

```diff
-           JB = (0, BD.m)(`pressToContinue:${BB}`, (() => YB.blocksGameplay()));
+           Je = (0, Hb.g)(`pressToContinue:${ee}`, (() => ye.blocksGameplay()));
```

#### 557. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6583-L6586` → after: `L6487-L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6487-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6487-L6490) · [Before (L6583-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6583-L6586)

```diff
-     var bo = GB(5480),
-       Co = GB(3857),
-       Ho = GB(3544),
-       vo = GB(8909);
+     var sK = He(5501),
+       IK = He(3779),
+       hK = He(3442),
+       NK = He(8944);
```

#### 558. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6606` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6510) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6606)

```diff
-         } = (0, DB.H)();
+         } = (0, be.v)();
```

#### 559. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6620` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6524) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6620)

```diff
-             }), (0, wB.jsx)(Ho.c, {
+             }), (0, ve.jsx)(hK.e, {
```

#### 560. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6640` → after: `L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6544) · [Before (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6640)

```diff
-         const QB = (0, zB.u)();
+         const Me = (0, ke.p)();
```

#### 561. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6650-L6651` → after: `L6554-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6554-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6554-L6555) · [Before (L6650-L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6650-L6651)

```diff
-             (0, zB.q)({
-               [OB]: (0, vo.w)(BB, YB)
+             (0, ke.l)({
+               [ie]: (0, NK.q)(ee, ye)
```

#### 562. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6656-L6657` → after: `L6560-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6560-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6560-L6561) · [Before (L6656-L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6656-L6657)

```diff
-     var Bj = GB(9518),
-       Oj = GB(9520);
+     var eU = He(9584),
+       iU = He(9588);
```

#### 563. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6660-L6661` → after: `L6564-L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6564-L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6564-L6565) · [Before (L6660-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6660-L6661)

```diff
-         const [OB] = [...BB.controllers].sort(((BB, OB) => Oj.p[BB] - Oj.p[OB]));
-         return Oj.n[OB]
+         const [ie] = [...ee.controllers].sort(((ee, ie) => iU.i[ee] - iU.i[ie]));
+         return iU.h[ie]
```

#### 564. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6664` → after: `L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6568) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6664)

```diff
-         (0, Bj.b)().allowPhoneMotion().catch((OB => {
+         (0, eU.d)().allowPhoneMotion().catch((ie => {
```

#### 565. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6680` → after: `L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6584) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6680)

```diff
-         } = (0, DB.H)(), [YB, QB] = (0, gB.useState)(null), oB = `${OB.controllers.join(",")}|${OB.phoneMotion}`;
+         } = (0, be.v)(), [ye, Me] = (0, xe.useState)(null), Ke = `${ie.controllers.join(",")}|${ie.phoneMotion}`;
```

#### 566. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6685` → after: `L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6589) · [Before (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6685)

```diff
-           (0, Bj.b)().connectController().then((BB => {
+           (0, eU.d)().connectController().then((ee => {
```

#### 567. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6702` → after: `L6606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6606) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6702)

```diff
-               }), (0, wB.jsx)(Fo.f, {
+               }), (0, ve.jsx)(VK.c, {
```

#### 568. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6716` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6620) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6716)

```diff
-             }), (0, wB.jsx)(Fo.f, {
+             }), (0, ve.jsx)(VK.c, {
```

#### 569. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6735` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6639) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6735)

```diff
-         } = (0, DB.H)(), OB = (0, zB.u)(), GB = (0, Bj.c)(), YB = (0, lB.D)(), QB = !GB.hidSupported && GB.phoneSupported && !GB.padConnected, oB = (GB.hidSupported || GB.phoneSupported) && !QB, jB = (0, MB.h)("pause");
+         } = (0, be.v)(), ie = (0, ke.p)(), He = (0, eU.g)(), ye = (0, qe.z)(), Me = !He.hidSupported && He.phoneSupported && !He.padConnected, Ke = (He.hidSupported || He.phoneSupported) && !Me, Ue = (0, oe.j)("pause");
```

#### 570. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6750` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6654) · [Before (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6750)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 571. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6755` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6659) · [Before (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6755)

```diff
-               const DB = (0, Bj.b)(),
+               const be = (0, eU.d)(),
```

#### 572. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6771-L6772` → after: `L6675-L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6675-L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6675-L6676) · [Before (L6771-L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6771-L6772)

```diff
-               range: vo.O,
-               format: vo.J
+               range: NK.K,
+               format: NK.C
```

#### 573. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6775` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6679) · [Before (L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6775)

```diff
-               hint: "aiming" === OB.gyroActivation && (0, wB.jsx)(Co.d, {
+               hint: "aiming" === ie.gyroActivation && (0, ve.jsx)(IK.e, {
```

#### 574. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6777` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6681) · [Before (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6777)

```diff
-                   button: Co.f
+                   button: IK.g
```

#### 575. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6779` → after: `L6683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6683) · [Before (L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6779)

```diff
-                 glyph: (0, MB.h)("use")
+                 glyph: (0, oe.j)("use")
```

#### 576. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6781` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6685) · [Before (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6781)

```diff
-               options: vo.N,
+               options: NK.I,
```

#### 577. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6784` → after: `L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6688) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6784)

```diff
-                 (0, zB.q)({
+                 (0, ke.l)({
```

#### 578. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6791` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6695) · [Before (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6791)

```diff
-               options: vo.s.filter((BB => BB !== jB || BB === OB.gyroButton)).map((BB => ({
+               options: NK.m.filter((ee => ee !== Ue || ee === ie.gyroButton)).map((ee => ({
```

#### 579. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6797` → after: `L6701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6701) · [Before (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6797)

```diff
-                 (0, zB.q)({
+                 (0, ke.l)({
```

#### 580. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6805` → after: `L6709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6709) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6805)

```diff
-     var yj = GB(1964);
+     var FU = He(1913);
```

#### 581. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6809` → after: `L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6713) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6809)

```diff
-       } = (0, DB.H)(), OB = (0, zB.u)(), GB = (0, lB.D)();
+       } = (0, be.v)(), ie = (0, ke.p)(), He = (0, qe.z)();
```

#### 582. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6815` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6719) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6815)

```diff
-           checked: (0, MB.L)(OB.swapConfirmBack, GB),
+           checked: (0, oe.C)(ie.swapConfirmBack, He),
```

#### 583. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6817-L6819` → after: `L6721-L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6721-L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6721-L6723) · [Before (L6817-L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6817-L6819)

```diff
-             (0, zB.q)({
-               swapConfirmBack: BB === (0, MB.L)(null, GB) ? null : BB
-             }), yj.d.showMessage({
+             (0, ke.l)({
+               swapConfirmBack: ee === (0, oe.C)(null, He) ? null : ee
+             }), FU.f.showMessage({
```

#### 584. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6827` → after: `L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6731) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6827)

```diff
-           options: vo.q,
+           options: NK.l,
```

#### 585. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6830` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6734) · [Before (L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6830)

```diff
-             (0, zB.q)({
+             (0, ke.l)({
```

#### 586. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6837` → after: `L6741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6741) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6837)

```diff
-           options: vo.lb,
+           options: NK.tb,
```

#### 587. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6840` → after: `L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6744) · [Before (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6840)

```diff
-             (0, zB.q)({
+             (0, ke.l)({
```

#### 588. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6847` → after: `L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6751) · [Before (L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6847)

```diff
-           options: vo.F,
+           options: NK.w,
```

#### 589. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6850` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6754) · [Before (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6850)

```diff
-             (0, zB.q)({
+             (0, ke.l)({
```

#### 590. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6857` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6761) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6857)

```diff
-           options: vo.n,
+           options: NK.k,
```

#### 591. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6860` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6764) · [Before (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6860)

```diff
-             (0, zB.q)({
+             (0, ke.l)({
```

#### 592. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6868` → after: `L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6772) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6868)

```diff
-             (0, zB.q)({
+             (0, ke.l)({
```

#### 593. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6876` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6780) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6876)

```diff
-     var Mj = GB(9529);
+     var oU = He(9595);
```

#### 594. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6896` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6800) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6896)

```diff
-       }(PB.c),
+       }(Re.d),
```

#### 595. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6931` → after: `L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6835) · [Before (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6931)

```diff
-         } = (0, DB.H)();
+         } = (0, be.v)();
```

#### 596. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6946` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6850) · [Before (L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6946)

```diff
-                     glyph: "move" === OB.stick ? (0, MB.s)() : (0, MB.p)()
+                     glyph: "move" === ie.stick ? (0, oe.p)() : (0, oe.o)()
```

#### 597. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6955` → after: `L6859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6859) · [Before (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6955)

```diff
-         } = OB, PB = (0, MB.h)(JB), zB = (0, MB.i)(JB), lB = PB !== zB && (0, MB.c)(JB, zB);
+         } = ie, Re = (0, oe.j)(Je), ke = (0, oe.l)(Je), qe = Re !== ke && (0, oe.b)(Je, ke);
```

#### 598. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6964` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6868) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6964)

```diff
-               children: yB(vo.j[JB])
+               children: Fe(NK.e[Je])
```

#### 599. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6985` → after: `L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6889) · [Before (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L6985)

```diff
-                   children: (0, wB.jsx)(mo.b, {
+                   children: (0, ve.jsx)(AK.e, {
```

#### 600. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7009-L7011` → after: `L6913-L6915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6913-L6915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6913-L6915) · [Before (L7009-L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7009-L7011)

```diff
-                 children: (0, wB.jsx)(Co.d, {
-                   text: yB((0, MB.c)(JB, (0, MB.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
-                     button: Co.f
+                 children: (0, ve.jsx)(IK.e, {
+                   text: Fe((0, oe.b)(Je, (0, oe.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
+                     button: IK.g
```

#### 601. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7013` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6917) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7013)

```diff
-                   glyph: (0, MB.h)("menuBack")
+                   glyph: (0, oe.j)("menuBack")
```

#### 602. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7019` → after: `L6923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6923) · [Before (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7019)

```diff
-             children: (0, wB.jsx)(Co.d, {
+             children: (0, ve.jsx)(IK.e, {
```

#### 603. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7021-L7022` → after: `L6925-L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6925-L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6925-L6926) · [Before (L7021-L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7021-L7022)

```diff
-                 action: yB(vo.j[BB]),
-                 button: Co.f
+                 action: Fe(NK.e[ee]),
+                 button: IK.g
```

#### 604. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7024` → after: `L6928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6928) · [Before (L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7024)

```diff
-               glyph: (0, MB.h)(BB)
+               glyph: (0, oe.j)(ee)
```

#### 605. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7029` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6933) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7029)

```diff
-               animationDuration: `${vo.t}ms`
+               animationDuration: `${NK.n}ms`
```

#### 606. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7041-L7042` → after: `L6945-L6946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6945-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6945-L6946) · [Before (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7041-L7042)

```diff
-         } = (0, DB.H)(), YB = (0, zB.u)();
-         (0, lB.D)();
+         } = (0, be.v)(), ye = (0, ke.p)();
+         (0, qe.z)();
```

#### 607. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7046-L7048` → after: `L6950-L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6950-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6950-L6952) · [Before (L7046-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7046-L7048)

```diff
-             const GB = (0, zB.k)().bindings;
-             (0, MB.E)(BB, OB);
-             const YB = (0, MB.v)(GB, BB);
+             const He = (0, ke.h)().bindings;
+             (0, oe.z)(ee, ie);
+             const ye = (0, oe.t)(He, ee);
```

#### 608. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7056-L7057` → after: `L6960-L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6960-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6960-L6961) · [Before (L7056-L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7056-L7057)

```diff
-               const DB = (0, MB.h)("menuBack"),
-                 QB = new vo.c(DB, (0, MB.h)("menuConfirm"), (BB => (0, MB.c)(GB, BB)));
+               const be = (0, oe.j)("menuBack"),
+                 Me = new NK.c(be, (0, oe.j)("menuConfirm"), (ee => (0, oe.b)(He, ee)));
```

#### 609. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7064` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6968) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7064)

```diff
-                       isDown: BB => (0, pB.P)(YB.frame.values, BB)
+                       isDown: ee => (0, fe.L)(ye.frame.values, ee)
```

#### 610. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7066` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6970) · [Before (L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7066)

```diff
-                   null === (jB = BB.current) || void 0 === jB || jB.style.setProperty("width", 100 * QB.getBindHoldProgress(yB) + "%"), JB && ("bind" === JB.kind ? (PB.c.consumeButton(JB.button), OB(GB, JB.button)) : PB.c.consumeButton(DB), oB())
+                   null === (Ue = ee.current) || void 0 === Ue || Ue.style.setProperty("width", 100 * Me.getBindHoldProgress(Fe) + "%"), Je && ("bind" === Je.kind ? (Re.d.consumeButton(Je.button), ie(He, Je.button)) : Re.d.consumeButton(be), Ke())
```

#### 611. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7071` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6975) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7071)

```diff
-                 timeoutMs: vo.t
+                 timeoutMs: NK.n
```

#### 612. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7083` → after: `L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L6987) · [Before (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7083)

```diff
-           }), vo.hb);
+           }), NK.sb);
```

#### 613. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7097` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7001) · [Before (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7097)

```diff
-           }), (0, wB.jsx)(Fo.Q, {
+           }), (0, ve.jsx)(VK.G, {
```

#### 614. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7101` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7005) · [Before (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7101)

```diff
-               ZB(null), jB(null), (0, MB.H)()
+               pe(null), Ue(null), (0, oe.A)()
```

#### 615. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7104` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7008) · [Before (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7104)

```diff
-           }), OB, vo.bb.map(((BB, OB) => (0, wB.jsx)(Mj.d, {
+           }), ie, NK.jb.map(((ee, ie) => (0, ve.jsx)(oU.b, {
```

#### 616. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7126` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7030) · [Before (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7126)

```diff
-         } = (0, DB.H)();
+         } = (0, be.v)();
```

#### 617. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7171` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7075) · [Before (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7171)

```diff
-         } = (0, DB.H)(), OB = (() => {
+         } = (0, be.v)(), ie = (() => {
```

#### 618. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7176` → after: `L7080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7080) · [Before (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7176)

```diff
-         })(), GB = Rj((0, zB.u)()), YB = (0, gB.useRef)(null), QB = (0, gB.useRef)(null), jB = (0, gB.useRef)([]), yB = (0, gB.useRef)(null), JB = (0, gB.useRef)(null), [lB, qB] = (BB => {
+         })(), He = zU((0, ke.p)()), ye = (0, xe.useRef)(null), Me = (0, xe.useRef)(null), Ue = (0, xe.useRef)([]), Fe = (0, xe.useRef)(null), Je = (0, xe.useRef)(null), [qe, Te] = (ee => {
```

#### 619. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7178-L7179` → after: `L7082-L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7082-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7082-L7083) · [Before (L7178-L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7178-L7179)

```diff
-             const OB = (0, MB.h)("menuBack"),
-               YB = new vo.f;
+             const ie = (0, oe.j)("menuBack"),
+               ye = new NK.d;
```

#### 620. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7185` → after: `L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7089) · [Before (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7185)

```diff
-                   sJ: GB.isHeld(OB)
+                   lJ: He.isHeld(ie)
```

#### 621. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7187` → after: `L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7091) · [Before (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7187)

```diff
-                 null === (QB = BB.current) || void 0 === QB || QB.style.setProperty("width", 100 * oB + "%"), oB >= 1 && (PB.c.consumeButton(OB), DB())
+                 null === (Me = ee.current) || void 0 === Me || Me.style.setProperty("width", 100 * Ke + "%"), Ke >= 1 && (Re.d.consumeButton(ie), be())
```

#### 622. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7198-L7199` → after: `L7102-L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7102-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7102-L7103) · [Before (L7198-L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7198-L7199)

```diff
-             for (const GB of pB.db) {
-               const OB = (0, pB.p)(GB),
+             for (const He of fe.W) {
+               const ie = (0, fe.l)(He),
```

#### 623. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7203` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7107) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7203)

```diff
-               YB.classList.toggle("Pressed", DB >= pB.E), (0, pB.R)(OB) && YB.style.setProperty("--trigger-fill", `${Math.round(100*DB)}%`)
+               ye.classList.toggle("Pressed", be >= fe.w), (0, fe.N)(ie) && ye.style.setProperty("--trigger-fill", `${Math.round(100*be)}%`)
```

#### 624. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7205-L7206` → after: `L7109-L7110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7109-L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7109-L7110) · [Before (L7205-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7205-L7206)

```diff
-             const OB = Rj((0, zB.k)());
-             Nj(yB.current, BB.leftStick, OB.left.deadzone, BB.values[(0, pB.p)("LS")] >= pB.E), Nj(JB.current, BB.rightStick, OB.right.deadzone, BB.values[(0, pB.p)("RS")] >= pB.E)
+             const ie = zU((0, ke.h)());
+             XU(Fe.current, ee.leftStick, ie.left.deadzone, ee.values[(0, fe.l)("LS")] >= fe.w), XU(Je.current, ee.rightStick, ie.right.deadzone, ee.values[(0, fe.l)("RS")] >= fe.w)
```

#### 625. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7208` → after: `L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7112) · [Before (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7208)

```diff
-           return OB || BB((0, pB.A)()), oB.g.onFrame(BB)
+           return ie || ee((0, fe.u)()), Ke.g.onFrame(ee)
```

#### 626. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7217` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7121) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7217)

```diff
-         const ZB = vo.Y.find((BB => BB.value === (null === OB || void 0 === OB ? void 0 : OB.family)));
+         const pe = NK.bb.find((ee => ee.value === (null === ie || void 0 === ie ? void 0 : ie.family)));
```

#### 627. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7237` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7141) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7237)

```diff
-             }), (OB || lB) && (0, wB.jsx)(Fo.f, {
+             }), (ie || qe) && (0, ve.jsx)(VK.c, {
```

#### 628. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7249` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7153) · [Before (L7249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7249)

```diff
-             children: [(0, wB.jsx)(Co.d, {
+             children: [(0, ve.jsx)(IK.e, {
```

#### 629. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7251` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7155) · [Before (L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7251)

```diff
-                 button: Co.f
+                 button: IK.g
```

#### 630. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7253` → after: `L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7157) · [Before (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7253)

```diff
-               glyph: (0, MB.h)("menuBack")
+               glyph: (0, oe.j)("menuBack")
```

#### 631. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7266-L7267` → after: `L7170-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7170-L7171) · [Before (L7266-L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7266-L7267)

```diff
-               children: pB.db.map((BB => {
-                 const GB = (0, pB.p)(BB);
+               children: fe.W.map((ee => {
+                 const He = (0, fe.l)(ee);
```

#### 632. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7272` → after: `L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7176) · [Before (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7272)

```diff
-                   className: (0, pB.R)(GB) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
+                   className: (0, fe.N)(He) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
```

#### 633. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7290` → after: `L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7194) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7290)

```diff
-         } = (0, DB.H)(), OB = (0, zB.u)(), [GB, YB] = (0, gB.useState)(!1);
+         } = (0, be.v)(), ie = (0, ke.p)(), [He, ye] = (0, xe.useState)(!1);
```

#### 634. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7295` → after: `L7199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7199) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7295)

```diff
-           }), vo.hb);
+           }), NK.sb);
```

#### 635. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7306-L7307` → after: `L7210-L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7210-L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7210-L7211) · [Before (L7306-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7306-L7307)

```diff
-             range: vo.eb,
-             format: vo.M
+             range: NK.kb,
+             format: NK.F
```

#### 636. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7311-L7312` → after: `L7215-L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7215-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7215-L7216) · [Before (L7311-L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7311-L7312)

```diff
-             range: vo.eb,
-             format: vo.M
+             range: NK.kb,
+             format: NK.F
```

#### 637. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7316-L7317` → after: `L7220-L7221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7220-L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7220-L7221) · [Before (L7316-L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7316-L7317)

```diff
-             range: vo.l,
-             format: vo.M
+             range: NK.h,
+             format: NK.F
```

#### 638. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7321` → after: `L7225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7225) · [Before (L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7321)

```diff
-             options: vo.V,
+             options: NK.X,
```

#### 639. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7324` → after: `L7228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7228) · [Before (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7324)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 640. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7332` → after: `L7236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7236) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7332)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 641. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7340` → after: `L7244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7244) · [Before (L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7340)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 642. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7347-L7348` → after: `L7251-L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7251-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7251-L7252) · [Before (L7347-L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7347-L7348)

```diff
-             range: vo.B,
-             format: vo.G
+             range: NK.t,
+             format: NK.z
```

#### 643. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7354-L7355` → after: `L7258-L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7258-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7258-L7259) · [Before (L7354-L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7354-L7355)

```diff
-             range: vo.B,
-             format: vo.G
+             range: NK.t,
+             format: NK.z
```

#### 644. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7360` → after: `L7264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7264) · [Before (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7360)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 645. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7367` → after: `L7271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7271) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7367)

```diff
-             options: vo.gb,
+             options: NK.ob,
```

#### 646. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7370` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7274) · [Before (L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7370)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 647. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7378` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7282) · [Before (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7378)

```diff
-             options: vo.Y,
+             options: NK.bb,
```

#### 648. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7381` → after: `L7285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7285) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7381)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 649. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7389` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7293) · [Before (L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7389)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 650. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7397` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7301) · [Before (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7397)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 651. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7404-L7405` → after: `L7308-L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7308-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7308-L7309) · [Before (L7404-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7404-L7405)

```diff
-             range: vo.x,
-             format: vo.M
+             range: NK.r,
+             format: NK.F
```

#### 652. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7410` → after: `L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7314) · [Before (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7410)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 653. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7418` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7322) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7418)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 654. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7424` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7328) · [Before (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7424)

```diff
-               children: [MB.e.map((GB => (0, wB.jsx)(bo.c, {
+               children: [oe.f.map((He => (0, ve.jsx)(sK.c, {
```

#### 655. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7426` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7330) · [Before (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7426)

```diff
-                 checked: (0, MB.C)(GB, OB),
+                 checked: (0, oe.x)(He, ie),
```

#### 656. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7428` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7332) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7428)

```diff
-                   YB(!(0, MB.N)(GB, BB))
+                   ye(!(0, oe.F)(He, ee))
```

#### 657. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7444` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7348) · [Before (L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7444)

```diff
-             options: vo.W,
+             options: NK.$,
```

#### 658. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7447` → after: `L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7351) · [Before (L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7447)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 659. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7454` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7358) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7454)

```diff
-             options: vo.Q,
+             options: NK.O,
```

#### 660. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7457` → after: `L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7361) · [Before (L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7457)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 661. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7464` → after: `L7368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7368) · [Before (L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7464)

```diff
-             options: vo.$,
+             options: NK.fb,
```

#### 662. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7467` → after: `L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7371) · [Before (L7467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7467)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 663. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7477` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7381) · [Before (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7477)

```diff
-               (0, zB.q)({
+               (0, ke.l)({
```

#### 664. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7486-L7487` → after: `L7390-L7391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7390-L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7390-L7391) · [Before (L7486-L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7486-L7487)

```diff
-     (0, DB.b)(YB);
-     for (const fj of (0, QB.o)()) fj.connected ? oB.g.handleConnectionEvent(fj) : oB.g.handleDisconnectionEvent(fj);
+     (0, be.c)(ye);
+     for (const tU of (0, Me.m)()) tU.connected ? Ke.g.handleConnectionEvent(tU) : Ke.g.handleDisconnectionEvent(tU);
```

#### 665. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7498` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7402) · [Before (L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7498)

```diff
-   8885: (BB, OB, GB) => {
+   8917: (ee, ie, He) => {
```

#### 666. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7500-L7501` → after: `L7404-L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7404-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/controller.js#L7404-L7405) · [Before (L7500-L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/controller.js#L7500-L7501)

```diff
-       b: () => yB,
-       c: () => JB
+       c: () => Fe,
+       e: () => Je
```
