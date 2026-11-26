# Changed — Bundle Modifications Report (Part 087 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `87 / 116` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 086](part-086.md) · [Part 088 →](part-088.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1031 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 185. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2420` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2518) · [Before (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2420)

```diff
-           this.wasShowing = !0, this.applyFocusRequest(), VV.wokeDevice && this.focusWakePointer(!(null === yV || void 0 === yV || !yV.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, vV.i)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           this.wasShowing = !0, this.applyFocusRequest(), HH.wokeDevice && this.focusWakePointer(!(null === hH || void 0 === hH || !hH.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, GH.g)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 186. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2427` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2525) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2427)

```diff
-             kV = null !== (eV = null === (xV = nV.actionElement) || void 0 === xV ? void 0 : xV.querySelector(".DoCraftItem")) && void 0 !== eV ? eV : nV.actionElement;
+             uH = null !== (BH = null === (LH = CH.actionElement) || void 0 === LH ? void 0 : LH.querySelector(".DoCraftItem")) && void 0 !== BH ? BH : CH.actionElement;
```

#### 187. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2438` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2536) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2438)

```diff
-             pressed: VV.isHeld((0, wV.i)("inventoryPrimary"))
+             pressed: HH.isHeld((0, EH.k)("inventoryPrimary"))
```

#### 188. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2454` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2552) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2454)

```diff
-             pressHints: null !== (JV = null === (YV = nV.press) || void 0 === YV ? void 0 : YV.hints) && void 0 !== JV ? JV : null,
+             pressHints: null !== (AH = null === (rH = CH.press) || void 0 === rH ? void 0 : rH.hints) && void 0 !== AH ? AH : null,
```

#### 189. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2466` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2564) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2466)

```diff
-           const xV = (0, rV.e)();
+           const LH = (0, YH.c)();
```

#### 190. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2470` → after: `L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2568) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2470)

```diff
-           this.setFocus(null !== (eV = je(xV, JV)) && void 0 !== eV ? eV : VV ? be(xV, JV, (VV => {
+           this.setFocus(null !== (BH = xB(LH, AH)) && void 0 !== BH ? BH : HH ? QB(LH, AH, (HH => {
```

#### 191. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2477` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2575) · [Before (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2477)

```diff
-           })) : null, !1), "cursor" === (0, vV.i)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, GH.g)().inventoryNavigation && (this.pointer = {
```

#### 192. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2485` → after: `L2583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2583) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2485)

```diff
-           if (!VV || "keyboardMouse" !== QV.b.get("activeInputDevice")) return;
+           if (!HH || "keyboardMouse" !== zH.c.get("activeInputDevice")) return;
```

#### 193. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2500` → after: `L2598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2598) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2500)

```diff
-           return this.focused && null !== (VV = this.getTargets().byElement.get(this.focused)) && void 0 !== VV ? VV : null
+           return this.focused && null !== (HH = this.getTargets().byElement.get(this.focused)) && void 0 !== HH ? HH : null
```

#### 194. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2528` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2626) · [Before (L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2528)

```diff
-               })(eV, (0, IV.d)()),
+               })(BH, (0, iH.f)()),
```

#### 195. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2531` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2629) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2531)

```diff
-             YV = null !== VV || void 0 !== pV, JV = null !== (UV = null !== (yV = null !== VV && void 0 !== VV ? VV : pV) && void 0 !== yV ? yV : QV && xV.get(QV)) && void 0 !== UV ? UV : qe(eV)
+             rH = null !== HH || void 0 !== tH, AH = null !== (SH = null !== (hH = null !== HH && void 0 !== HH ? HH : tH) && void 0 !== hH ? hH : zH && LH.get(zH)) && void 0 !== SH ? SH : vB(BH)
```

#### 196. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2546` → after: `L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2644) · [Before (L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2546)

```diff
-             if ("cursor" === (0, vV.i)().inventoryNavigation) {
+             if ("cursor" === (0, GH.g)().inventoryNavigation) {
```

#### 197. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2574` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2672) · [Before (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2574)

```diff
-           this.focusTarget = eV, (null === eV || void 0 === eV ? void 0 : eV.element) !== this.focused && (this.focused = null !== (VV = null === eV || void 0 === eV ? void 0 : eV.element) && void 0 !== VV ? VV : null, eV && (this.panelMemory.set(eV.panel, eV.element), this.lastR … [truncated]
+           this.focusTarget = BH, (null === BH || void 0 === BH ? void 0 : BH.element) !== this.focused && (this.focused = null !== (HH = null === BH || void 0 === BH ? void 0 : BH.element) && void 0 !== HH ? HH : null, BH && (this.panelMemory.set(BH.panel, BH.element), this.lastR … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2578` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2676) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2578)

```diff
-             JV = xV && (0, vV.i)().cursorMagnetism ? pe(Ee(xV)) : null;
+             AH = LH && (0, GH.g)().cursorMagnetism ? tB(WB(LH)) : null;
```

#### 199. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2581` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2679) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2581)

```diff
-             moveDeadzone: (0, vV.i)().moveDeadzone,
+             moveDeadzone: (0, GH.g)().moveDeadzone,
```

#### 200. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2584` → after: `L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2682) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2584)

```diff
-             cursorSpeedPercent: (0, vV.i)().cursorSpeed,
+             cursorSpeedPercent: (0, GH.g)().cursorSpeed,
```

#### 201. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2617` → after: `L2715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2715) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2617)

```diff
-             return null !== (JV = ke(YV, eV, xV)) && void 0 !== JV ? JV : be(VV, eV)
+             return null !== (AH = uB(rH, BH, LH)) && void 0 !== AH ? AH : QB(HH, BH)
```

#### 202. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2622` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2720) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2622)

```diff
-           return !Ie.some((eV => (0, wV.i)(eV) === VV)) && !(VV === (0, wV.i)("inventory") && Vx())
+           return !iB.some((BH => (0, EH.k)(BH) === HH)) && !(HH === (0, EH.k)("inventory") && HL())
```

#### 203. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2625` → after: `L2723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2723) · [Before (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2625)

```diff
-           const xV = (0, vV.i)().inventoryNavigation,
+           const LH = (0, GH.g)().inventoryNavigation,
```

#### 204. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2631` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2729) · [Before (L2631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2631)

```diff
-           for (const QV of kV.F) {
+           for (const zH of uH.y) {
```

#### 205. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2635` → after: `L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2733) · [Before (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2635)

```diff
-           const UV = this.stickGate.update(VV.leftStick, (0, vV.i)().moveDeadzone);
+           const SH = this.stickGate.update(HH.leftStick, (0, GH.g)().moveDeadzone);
```

#### 206. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2637-L2638` → after: `L2735-L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2735-L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2735-L2736) · [Before (L2637-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2637-L2638)

```diff
-             const eV = ((VV, eV, xV, JV) => "hybrid" !== VV ? "cursor" === VV : !JV && (eV || xV))(xV, null !== this.pointer, UV, null !== YV);
-             return eV && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(VV, "cursor" === xV ? JV : {
+             const BH = ((HH, BH, LH, AH) => "hybrid" !== HH ? "cursor" === HH : !AH && (BH || LH))(LH, null !== this.pointer, SH, null !== rH);
+             return BH && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(HH, "cursor" === LH ? AH : {
```

#### 207. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2643-L2644` → after: `L2741-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2741-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2741-L2742) · [Before (L2643-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2643-L2644)

```diff
-           const yV = (0, kV.k)(VV.leftStick, (0, vV.i)().moveDeadzone),
-             pV = this.stickRepeat.update(UV ? (0, kV.gb)(yV) : null, eV);
+           const hH = (0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone),
+             tH = this.stickRepeat.update(SH ? (0, uH.Z)(hH) : null, BH);
```

#### 208. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2655-L2656` → after: `L2753-L2754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2753-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2753-L2754) · [Before (L2655-L2656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2655-L2656)

```diff
-           const VV = (0, IV.o)();
-           VV && (this.targets.invalidate(), this.setFocus((0, IV.c)(this.getTargets().targets, VV)))
+           const HH = (0, iH.q)();
+           HH && (this.targets.invalidate(), this.setFocus((0, iH.e)(this.getTargets().targets, HH)))
```

#### 209. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2660-L2661` → after: `L2758-L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2758-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2758-L2759) · [Before (L2660-L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2660-L2661)

```diff
-           const YV = VV.wasPressed((0, wV.i)("inventoryPanelPrevious")),
-             UV = VV.wasPressed((0, wV.i)("inventoryPanelNext"));
+           const rH = HH.wasPressed((0, EH.k)("inventoryPanelPrevious")),
+             SH = HH.wasPressed((0, EH.k)("inventoryPanelNext"));
```

#### 210. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2673` → after: `L2771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2771) · [Before (L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2673)

```diff
-           })(yV, Ne), nV = null !== (eV = null === (xV = this.focusTarget) || void 0 === xV ? void 0 : xV.panel) && void 0 !== eV ? eV : null, ZV = UV ? 1 : -1, 0 === QV.length ? null : QV[Qe(null === nV ? -1 : QV.indexOf(nV), QV.length, ZV)]);
+           })(hH, bB), CH = null !== (BH = null === (LH = this.focusTarget) || void 0 === LH ? void 0 : LH.panel) && void 0 !== BH ? BH : null, XH = SH ? 1 : -1, 0 === zH.length ? null : zH[zB(null === CH ? -1 : zH.indexOf(CH), zH.length, XH)]);
```

#### 211. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2678` → after: `L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2776) · [Before (L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2678)

```diff
-             kV = null !== (JV = rV.find((VV => VV.element === vV && VV.visible))) && void 0 !== JV ? JV : xx(rV, (0, IV.d)());
+             uH = null !== (AH = YH.find((HH => HH.element === GH && HH.visible))) && void 0 !== AH ? AH : LL(YH, (0, iH.f)());
```

#### 212. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2682-L2683` → after: `L2780-L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2780-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2780-L2781) · [Before (L2682-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2682-L2683)

```diff
-           const xV = (0, wV.i)("menuPageUp"),
-             JV = (0, wV.i)("menuPageDown"),
+           const LH = (0, EH.k)("menuPageUp"),
+             AH = (0, EH.k)("menuPageDown"),
```

#### 213. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2688` → after: `L2786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2786) · [Before (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2688)

```diff
-           if (!VV.wasPressed(UV ? JV : xV) && this.hasCategories) return;
+           if (!HH.wasPressed(SH ? AH : LH) && this.hasCategories) return;
```

#### 214. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2694` → after: `L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2792) · [Before (L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2694)

```diff
-               return (0, mV.q)(JV, (0, mV.D)(JV)), !0
+               return (0, wH.n)(AH, (0, wH.C)(AH)), !0
```

#### 215. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2698` → after: `L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2796) · [Before (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2698)

```diff
-             const VV = null !== (pV = null === (QV = this.focusTarget) || void 0 === QV ? void 0 : QV.scrollGroup) && void 0 !== pV ? pV : null,
+             const HH = null !== (tH = null === (zH = this.focusTarget) || void 0 === zH ? void 0 : zH.scrollGroup) && void 0 !== tH ? tH : null,
```

#### 216. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2707` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2805) · [Before (L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2707)

```diff
-           } = this.getTargets(), ZV = this.currentTarget(), vV = ZV && Ce(ZV) ? ZV : nV.find((VV => Ce(VV) && VV.visible));
+           } = this.getTargets(), XH = this.currentTarget(), GH = XH && qB(XH) ? XH : CH.find((HH => qB(HH) && HH.visible));
```

#### 217. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2713` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2811) · [Before (L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2713)

```diff
-               yV = YV.y + ("Down" === xV ? JV : -JV);
+               hH = rH.y + ("Down" === LH ? AH : -AH);
```

#### 218. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2725` → after: `L2823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2823) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2725)

```diff
-           this.setFocus(null !== rV && void 0 !== rV ? rV : vV)
+           this.setFocus(null !== YH && void 0 !== YH ? YH : GH)
```

#### 219. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2732` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2830) · [Before (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2732)

```diff
-           } = this.getTargets(), QV = this.pointer, nV = !QV && this.focusTarget && Ce(this.focusTarget) ? this.focusTarget.scrollContainer : null, wV = QV && (null === (eV = pV.find((VV => VV.clip && Be(VV.clip, QV)))) || void 0 === eV ? void 0 : eV.scrollContainer), ZV = null ! … [truncated]
+           } = this.getTargets(), zH = this.pointer, CH = !zH && this.focusTarget && qB(this.focusTarget) ? this.focusTarget.scrollContainer : null, EH = zH && (null === (BH = tH.find((HH => HH.clip && MB(HH.clip, zH)))) || void 0 === BH ? void 0 : BH.scrollContainer), XH = null ! … [truncated]
```

#### 220. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2752` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2850) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2752)

```diff
-           }, JV = this.focused ? ze(this.focused) : null, YV = JV ? (0, Ke.d)(JV) : null;
+           }, AH = this.focused ? oB(this.focused) : null, rH = AH ? (0, ZB.e)(AH) : null;
```

#### 221. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2768` → after: `L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2866) · [Before (L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2768)

```diff
-               const UV = (0, wV.i)(YV);
+               const SH = (0, EH.k)(rH);
```

#### 222. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2781-L2782` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2879-L2880) · [Before (L2781-L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2781-L2782)

```diff
-           const JV = VV.wasPressed((0, wV.i)("inventoryPrimary")) || VV.wasPressed((0, wV.i)("inventoryHotbarSwap"));
-           if (!JV && !VV.wasPressed((0, wV.i)("inventoryClose")) && !eV.isHolding()) return !(VV.wasPressed((0, wV.i)("inventory")) && Vx());
+           const AH = HH.wasPressed((0, EH.k)("inventoryPrimary")) || HH.wasPressed((0, EH.k)("inventoryHotbarSwap"));
+           if (!AH && !HH.wasPressed((0, EH.k)("inventoryClose")) && !BH.isHolding()) return !(HH.wasPressed((0, EH.k)("inventory")) && HL());
```

#### 223. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2793` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2891) · [Before (L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2793)

```diff
-           } = this.getTargets(), YV = document.querySelector(ue), UV = null !== (eV = YV && JV.get(YV)) && void 0 !== eV ? eV : xV.find((VV => "hotbar" === VV.panel));
+           } = this.getTargets(), rH = document.querySelector(aB), SH = null !== (BH = rH && AH.get(rH)) && void 0 !== BH ? BH : LH.find((HH => "hotbar" === HH.panel));
```

#### 224. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2803` → after: `L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2901) · [Before (L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2803)

```diff
-           const JV = (0, wV.i)("inventoryDrop");
+           const AH = (0, EH.k)("inventoryDrop");
```

#### 225. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2806` → after: `L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2904) · [Before (L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2806)

```diff
-               kind: "hn"
+               kind: "LX"
```

#### 226. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2811` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2909) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2811)

```diff
-             return void(VV && (this.dropFrom(VV, !1, xV), this.dropLatch.press(VV, this.focusKey(), eV, EV.b[(0, vV.i)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(HH && (this.dropFrom(HH, !1, LH), this.dropLatch.press(HH, this.focusKey(), BH, WH.c[(0, GH.g)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 227. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2815` → after: `L2913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2913) · [Before (L2815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2815)

```diff
-           UV && ((VV, eV, xV) => "hn" === VV.kind ? eV : !eV && xV(VV.idx))(UV, xV.isHolding(), xV.hasItemAt) && (this.dropFrom(UV, !0, xV), this.afterAction())
+           SH && ((HH, BH, LH) => "LX" === HH.kind ? BH : !BH && LH(HH.idx))(SH, LH.isHolding(), LH.hasItemAt) && (this.dropFrom(SH, !0, LH), this.afterAction())
```

#### 228. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2818` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2916) · [Before (L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2818)

```diff
-           "hn" === VV.kind ? xV.dropHeld(eV, this.slotPoint()) : xV.dropSlot(VV.idx, eV)
+           "LX" === HH.kind ? LH.dropHeld(BH, this.slotPoint()) : LH.dropSlot(HH.idx, BH)
```

#### 229. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2838` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2936) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2838)

```diff
-           switch (UV && ex.has(VV) && (0, BV.x)(UV), VV) {
+           switch (SH && BL.has(HH) && (0, MH.y)(SH), HH) {
```

#### 230. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2856` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2954) · [Before (L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2856)

```diff
-               (0, mV.q)(UV, (0, mV.D)(UV));
+               (0, wH.n)(SH, (0, wH.C)(SH));
```

#### 231. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2859` → after: `L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2957) · [Before (L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2859)

```diff
-               (0, mV.M)(UV) && (0, mV.L)(UV);
+               (0, wH.S)(SH) && (0, wH.O)(SH);
```

#### 232. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2890` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2988) · [Before (L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2890)

```diff
-           })(VV, this.state) || (this.state = VV, nV.h.QZ(oe.g, VV))
+           })(HH, this.state) || (this.state = HH, CH.k.AX(NB.g, HH))
```

#### 233. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2894-L2897` → after: `L2992-L2995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2992-L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2992-L2995) · [Before (L2894-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2894-L2897)

```diff
-     var yx = xV(9320),
-       px = xV(364),
-       Qx = xV(1725),
-       nx = xV(8804);
+     var hL = LH(9390),
+       tL = LH(304),
+       zL = LH(1659),
+       CL = LH(8875);
```

#### 234. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2899` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L2997) · [Before (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2899)

```diff
-       Zx = VV => VV instanceof HTMLElement && (0, dV.n)(VV) && !(0, dV.v)(VV),
+       XL = HH => HH instanceof HTMLElement && (0, pH.u)(HH) && !(0, pH.x)(HH),
```

#### 235. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2903` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3001) · [Before (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2903)

```diff
-         for (const YV of null !== (xV = null === (JV = VV.parentElement) || void 0 === JV ? void 0 : JV.children) && void 0 !== xV ? xV : []) {
+         for (const rH of null !== (LH = null === (AH = HH.parentElement) || void 0 === AH ? void 0 : AH.children) && void 0 !== LH ? LH : []) {
```

#### 236. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2962` → after: `L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3060) · [Before (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L2962)

```diff
-           JV[xV] && !(YV ? UV : yV) || pV.add(xV)
+           AH[LH] && !(rH ? SH : hH) || tH.add(LH)
```

#### 237. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3031-L3033` → after: `L3129-L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3129-L3131) · [Before (L3031-L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3031-L3033)

```diff
-     var Mx = xV(1775),
-       zx = xV(9326),
-       Gx = xV(9333);
+     var mL = LH(1711),
+       oL = LH(9399),
+       IL = LH(9407);
```

#### 238. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3035-L3042` → after: `L3133-L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3133-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3133-L3140) · [Before (L3035-L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3035-L3042)

```diff
-         if ("death" !== VV || "inGame" !== QV.b.get("gameState") || "off" === (0, vV.i)().quickChat || null === (0, Mx.e)()) return !1;
-         const eV = (0, wV.i)("chat");
-         return eV !== (0, wV.i)("menuConfirm") && eV !== (0, wV.i)("menuBack")
-       },
-       Rx = new zx.d;
-     var gx = xV(4690),
-       Dx = xV(9335),
-       ix = xV(9338);
+         if ("death" !== HH || "inGame" !== zH.c.get("gameState") || "off" === (0, GH.g)().quickChat || null === (0, mL.e)()) return !1;
+         const BH = (0, EH.k)("chat");
+         return BH !== (0, EH.k)("menuConfirm") && BH !== (0, EH.k)("menuBack")
+       },
+       lL = new oL.b;
+     var KL = LH(4685),
+       cL = LH(9412),
+       eL = LH(9419);
```

#### 239. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3045` → after: `L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3143) · [Before (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3045)

```diff
-         for (const xV of VV.querySelectorAll("[data-pad-tabs]"))(0, dV.n)(xV) && (!eV || Number(xV.dataset.padTabs) < Number(eV.dataset.padTabs)) && (eV = xV);
+         for (const LH of HH.querySelectorAll("[data-pad-tabs]"))(0, pH.u)(LH) && (!BH || Number(LH.dataset.padTabs) < Number(BH.dataset.padTabs)) && (BH = LH);
```

#### 240. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3054` → after: `L3152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3152) · [Before (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3054)

```diff
-               for (const JV of (0, dV.h)(eV)) {
+               for (const AH of (0, pH.l)(BH)) {
```

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3070` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3168) · [Before (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3070)

```diff
-         })([...xV.querySelectorAll("[data-pad-tab]")].filter((VV => (0, dV.n)(VV) && !(0, dV.v)(VV))), JV);
+         })([...LH.querySelectorAll("[data-pad-tab]")].filter((HH => (0, pH.u)(HH) && !(0, pH.x)(HH))), AH);
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3072` → after: `L3170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3170) · [Before (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3072)

```diff
-         const yV = null !== (YV = null === VV || void 0 === VV ? void 0 : VV.getFocused()) && void 0 !== YV ? YV : null,
+         const hH = null !== (rH = null === HH || void 0 === HH ? void 0 : HH.getFocused()) && void 0 !== rH ? rH : null,
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3081-L3082` → after: `L3179-L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3179-L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3179-L3180) · [Before (L3081-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3081-L3082)

```diff
-         const xV = DV(null !== (eV = MV(VV, "x")) && void 0 !== eV ? eV : VV),
-           JV = (0, dV.f)(VV).filter((VV => !(0, dV.v)(VV))),
+         const LH = cH(null !== (BH = mH(HH, "x")) && void 0 !== BH ? BH : HH),
+           AH = (0, pH.h)(HH).filter((HH => !(0, pH.x)(HH))),
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3084` → after: `L3182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3182) · [Before (L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3084)

```diff
-         return (YV.length > 0 ? YV : JV).sort(((VV, eV) => Nx(VV.getBoundingClientRect(), eV.getBoundingClientRect())))
+         return (rH.length > 0 ? rH : AH).sort(((HH, BH) => bL(HH.getBoundingClientRect(), BH.getBoundingClientRect())))
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3087` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3185) · [Before (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3087)

```diff
-         const JV = [...eV.querySelectorAll("[data-pad-row]")].filter(dV.n),
+         const AH = [...BH.querySelectorAll("[data-pad-row]")].filter(pH.u),
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3110` → after: `L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3208) · [Before (L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3110)

```diff
-         const UV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.getFocused()) && void 0 !== JV ? JV : null,
+         const SH = null !== (AH = null === HH || void 0 === HH ? void 0 : HH.getFocused()) && void 0 !== AH ? AH : null,
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3112` → after: `L3210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3210) · [Before (L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3112)

```diff
-           pV = null !== (YV = UV ? MV(UV, yV, eV) : null) && void 0 !== YV ? YV : GV(eV, yV);
+           tH = null !== (rH = SH ? mH(SH, hH, BH) : null) && void 0 !== rH ? rH : IH(BH, hH);
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3114` → after: `L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3212) · [Before (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3114)

```diff
-         const QV = UV ? (0, mV.D)(UV) : null;
+         const zH = SH ? (0, wH.C)(SH) : null;
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3131` → after: `L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3229) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3131)

```diff
-           pV = Ax((0, mV.D)(UV), yV.map((VV => VV.getBoundingClientRect()))),
+           tH = OL((0, wH.C)(SH), hH.map((HH => HH.getBoundingClientRect()))),
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3133` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3231) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3133)

```diff
-         return VV.setFocus(null !== QV && void 0 !== QV && QV.isConnected ? QV : null !== (JV = yV[pV]) && void 0 !== JV ? JV : null, {
+         return HH.setFocus(null !== zH && void 0 !== zH && zH.isConnected ? zH : null !== (AH = hH[tH]) && void 0 !== AH ? AH : null, {
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3138-L3139` → after: `L3236-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3236-L3237) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3138-L3139)

```diff
-         const eV = (0, wV.i)(VV);
-         return (0, kV.J)(eV) || nx.n.some((VV => (0, wV.i)(VV) === eV)) ? null : eV
+         const BH = (0, EH.k)(HH);
+         return (0, uH.D)(BH) || CL.u.some((HH => (0, EH.k)(HH) === BH)) ? null : BH
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3149` → after: `L3247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3247) · [Before (L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3149)

```diff
-             return null !== (eV = null === (xV = Cx(VV)) || void 0 === xV ? void 0 : xV.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== eV ? eV : null
+             return null !== (BH = null === (LH = qL(HH)) || void 0 === LH ? void 0 : LH.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== BH ? BH : null
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3152` → after: `L3250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3250) · [Before (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3152)

```diff
-         (0, yx.d)(), xV === px.q.SETTINGS && (0, Qx.k)(QV.b.get("openEverythingMenuName")) ? QV.b.set({
+         (0, hL.c)(), LH === tL.o.SETTINGS && (0, zL.n)(zH.c.get("openEverythingMenuName")) ? zH.c.set({
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3154` → after: `L3252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3252) · [Before (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3154)

```diff
-         }) : (0, Qx.t)((0, ix.c)("padMenuShortcut"), xV, JV), VV && UV && YV && ax(VV, eV, UV, YV.closest("[data-pad-tabs]"))
+         }) : (0, zL.B)((0, eL.c)("padMenuShortcut"), LH, AH), HH && SH && rH && gL(HH, BH, SH, rH.closest("[data-pad-tabs]"))
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3158-L3159` → after: `L3256-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3256-L3257) · [Before (L3158-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3158-L3159)

```diff
-       Sx = (0, bV.e)(kV.ab),
-       Ix = (0, bV.e)(kV.ab),
+       JL = (0, QH.d)(uH.T),
+       iL = (0, QH.d)(uH.T),
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3162-L3163` → after: `L3260-L3261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3260-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3260-L3261) · [Before (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3162-L3163)

```diff
-             const xV = (0, wV.i)("chat");
-             return Wx(eV) && VV.isHeld(xV) ? "hold" === Rx.update(VV.wasPressed(xV), VV.isHeld(xV), performance.now(), EV.b[(0, vV.i)().tapHoldTime].wheelMs) && (ZV.c.consumeButton(xV), nV.h.QZ(Gx.o), !0) : (Rx.release(), !1)
+             const LH = (0, EH.k)("chat");
+             return fL(BH) && HH.isHeld(LH) ? "hold" === lL.update(HH.wasPressed(LH), HH.isHeld(LH), performance.now(), WH.c[(0, GH.g)().tapHoldTime].wheelMs) && (XH.b.consumeButton(LH), CH.k.AX(IL.p), !0) : (lL.release(), !1)
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3170` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3268) · [Before (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3170)

```diff
-           if (eV.wasPressed((0, wV.i)(yV))) {
+           if (BH.wasPressed((0, EH.k)(hH))) {
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3183` → after: `L3281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3281) · [Before (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3183)

```diff
-           const xV = (0, wV.i)(yV);
+           const LH = (0, EH.k)(hH);
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3187-L3188` → after: `L3285-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3285-L3286) · [Before (L3187-L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3187-L3188)

```diff
-         return Kx(eV, "pause") ? (UV || (0, Qx.q)() && "menu" !== xV.layer.kind || Hx(VV, JV, (0, Qx.q)() ? px.q.SETTINGS : (0, gx.b)()), !0) : !!Kx(eV, "leaderboard") && ("home" === xV.layer.kind ? (VV => {
-           const eV = [...VV.querySelectorAll("[data-pad-notifications]")].find(dV.n);
+         return ZL(BH, "pause") ? (SH || (0, zL.x)() && "menu" !== LH.layer.kind || dL(HH, AH, (0, zL.x)() ? tL.o.SETTINGS : (0, KL.e)()), !0) : !!ZL(BH, "leaderboard") && ("home" === LH.layer.kind ? (HH => {
+           const BH = [...HH.querySelectorAll("[data-pad-notifications]")].find(pH.u);
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3190` → after: `L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3288) · [Before (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3190)

```diff
-         })(JV) : UV || Hx(VV, JV, px.q.LOBBY_LEADERBOARD, "inGame" === QV.b.get("gameState")), !0)
+         })(AH) : SH || dL(HH, AH, tL.o.LOBBY_LEADERBOARD, "inGame" === zH.c.get("gameState")), !0)
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3195` → after: `L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3293) · [Before (L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3195)

```diff
-         if (eV.wasPressed((0, wV.i)("menuSecondary"))) {
+         if (BH.wasPressed((0, EH.k)("menuSecondary"))) {
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3201` → after: `L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3299) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3201)

```diff
-             return eV && (0, dV.r)(eV, xV.root) ? (VV.setFocus(eV, {
+             return BH && (0, pH.w)(BH, LH.root) ? (HH.setFocus(BH, {
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3203` → after: `L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3301) · [Before (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3203)

```diff
-             }), (0, mV.c)(eV)) : QV.b.set({
+             }), (0, wH.c)(BH)) : zH.c.set({
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3211` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3309) · [Before (L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3211)

```diff
-           if (!YV || !(0, dV.n)(YV)) return void(0, Qx.t)((0, ix.c)("padMenuShortcut"), px.q.SOCIAL);
+           if (!rH || !(0, pH.u)(rH)) return void(0, zL.B)((0, eL.c)("padMenuShortcut"), tL.o.SOCIAL);
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3213` → after: `L3311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3311) · [Before (L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3213)

```diff
-           const UV = null !== (xV = null === (JV = YV.querySelector("[data-pad-friends-start]")) || void 0 === JV ? void 0 : JV.getBoundingClientRect().top) && void 0 !== xV ? xV : -1 / 0,
+           const SH = null !== (LH = null === (AH = rH.querySelector("[data-pad-friends-start]")) || void 0 === AH ? void 0 : AH.getBoundingClientRect().top) && void 0 !== LH ? LH : -1 / 0,
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3216` → after: `L3314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3314) · [Before (L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3216)

```diff
-             QV = pV.length > 0 ? pV : yV,
+             zH = tH.length > 0 ? tH : hH,
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3225` → after: `L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3323) · [Before (L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3225)

```diff
-         const YV = (0, mV.F)(VV);
+         const rH = (0, wH.G)(HH);
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3227-L3228` → after: `L3325-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3325-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3325-L3326) · [Before (L3227-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3227-L3228)

```diff
-         const UV = (null !== (eV = null !== (xV = null !== (JV = VV.getAttribute("aria-label")) && void 0 !== JV ? JV : VV.getAttribute("title")) && void 0 !== xV ? xV : VV.textContent) && void 0 !== eV ? eV : "").replace(/\s+/g, " ").trim();
-         return UV ? `${VV.tagName}:${UV.slice(0,100)}` : null
+         const SH = (null !== (BH = null !== (LH = null !== (AH = HH.getAttribute("aria-label")) && void 0 !== AH ? AH : HH.getAttribute("title")) && void 0 !== LH ? LH : HH.textContent) && void 0 !== BH ? BH : "").replace(/\s+/g, " ").trim();
+         return SH ? `${HH.tagName}:${SH.slice(0,100)}` : null
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3249` → after: `L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3347) · [Before (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3249)

```diff
-           UV = (0, mV.F)(eV),
+           SH = (0, wH.G)(BH),
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3273` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3371) · [Before (L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3273)

```diff
-         return null !== (xV = null !== (JV = yV[YV.ordinal]) && void 0 !== JV ? JV : yV[0]) && void 0 !== xV ? xV : null
+         return null !== (LH = null !== (AH = hH[rH.ordinal]) && void 0 !== AH ? AH : hH[0]) && void 0 !== LH ? LH : null
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3279` → after: `L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3377) · [Before (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3279)

```diff
-     var xJ = xV(1309);
+     var LA = LH(1214);
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3294` → after: `L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3392) · [Before (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3294)

```diff
-             const xV = (null !== (JV = VV[UV]) && void 0 !== JV ? JV : 0) - (null !== (YV = eV[UV]) && void 0 !== YV ? YV : 0);
+             const LH = (null !== (AH = HH[SH]) && void 0 !== AH ? AH : 0) - (null !== (rH = BH[SH]) && void 0 !== rH ? rH : 0);
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3307` → after: `L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3405) · [Before (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3307)

```diff
-         return null !== (xV = YJ(VV.root, eV.root)) && void 0 !== xV ? xV : VV.order > eV.order
+         return null !== (LH = rA(HH.root, BH.root)) && void 0 !== LH ? LH : HH.order > BH.order
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3316` → after: `L3414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3414) · [Before (L3316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3316)

```diff
-           xV = "number" === typeof eV ? eV : null;
+           LH = "number" === typeof BH ? BH : null;
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3320` → after: `L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3418) · [Before (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3320)

```diff
-           UV = [...document.querySelectorAll("[data-pad-covers]")].filter(dV.n);
+           SH = [...document.querySelectorAll("[data-pad-covers]")].filter(pH.u);
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3323` → after: `L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3421) · [Before (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3323)

```diff
-             eV = !!VV && (0, dV.n)(VV) && !yJ(VV, UV);
+             BH = !!HH && (0, pH.u)(HH) && !hA(HH, SH);
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3333` → after: `L3431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3431) · [Before (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3333)

```diff
-         for (const yV of YV)(0, xJ.g)(yV);
+         for (const hH of rH)(0, LA.h)(hH);
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3342` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3440) · [Before (L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3342)

```diff
-         return null !== (VV = null === (eV = wJ()) || void 0 === eV ? void 0 : eV.root) && void 0 !== VV ? VV : null
+         return null !== (HH = null === (BH = EA()) || void 0 === BH ? void 0 : BH.root) && void 0 !== HH ? HH : null
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3350` → after: `L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3448) · [Before (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3350)

```diff
-       EJ = (0, vV.i)().menuNavigation,
+       WA = (0, GH.g)().menuNavigation,
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3354-L3355` → after: `L3452-L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3452-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3452-L3453) · [Before (L3354-L3355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3354-L3355)

```diff
-     nV.h.subscribe(vV.g, (() => {
-       const VV = (0, vV.i)().menuNavigation;
+     CH.k.subscribe(GH.e, (() => {
+       const HH = (0, GH.g)().menuNavigation;
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3360` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3458) · [Before (L3360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3360)

```diff
-         return null !== (VV = kJ) && void 0 !== VV ? VV : (0, vV.i)().menuNavigation
+         return null !== (HH = uA) && void 0 !== HH ? HH : (0, GH.g)().menuNavigation
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3387` → after: `L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3485) · [Before (L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3387)

```diff
-           has: (0, dV.k)(VV)
+           has: (0, pH.p)(HH)
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3413-L3414` → after: `L3511-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3511-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3511-L3512) · [Before (L3413-L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3413-L3414)

```diff
-     var GJ = xV(5029),
-       WJ = xV(5536);
+     var IA = LH(4954),
+       fA = LH(5513);
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3416` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3514) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3416)

```diff
-       gJ = `${RJ}, [data-pad-back]`,
+       KA = `${lA}, [data-pad-back]`,
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3447-L3448` → after: `L3545-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3545-L3546) · [Before (L3447-L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3447-L3448)

```diff
-         const xV = VV.querySelector(`${oJ}[data-pad-selected='true']`);
-         return xV && eV.includes(xV) ? xV : null
+         const LH = HH.querySelector(`${NA}[data-pad-selected='true']`);
+         return LH && BH.includes(LH) ? LH : null
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3464` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3562) · [Before (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3464)

```diff
-         if (pV && pV !== yV) return yV || (this.contentReturn = new WeakRef(VV)), null !== (QV = cJ(pV, xV)) && void 0 !== QV ? QV : eV;
+         if (tH && tH !== hH) return hH || (this.contentReturn = new WeakRef(HH)), null !== (zH = RA(tH, LH)) && void 0 !== zH ? zH : BH;
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3468` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3566) · [Before (L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3468)

```diff
-         return wV && nV.contains(wV) && xV.includes(wV) ? wV : null !== (UV = this.pickRegionStart(nV, MV(eV, "y", JV), xV)) && void 0 !== UV ? UV : eV
+         return EH && CH.contains(EH) && LH.includes(EH) ? EH : null !== (SH = this.pickRegionStart(CH, mH(BH, "y", AH), LH)) && void 0 !== SH ? SH : BH
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3476` → after: `L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3574) · [Before (L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3476)

```diff
-         return xV.some((VV => UV.contains(VV) && !VV.closest(gJ))) || !eV.closest(gJ) ? UV : null
+         return LH.some((HH => SH.contains(HH) && !HH.closest(KA))) || !BH.closest(KA) ? SH : null
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3505` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3603) · [Before (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3505)

```diff
-         for (const UV of (0, dV.h)(VV)) {
+         for (const SH of (0, pH.l)(HH)) {
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3525-L3526` → after: `L3623-L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3623-L3624) · [Before (L3525-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3525-L3526)

```diff
-           if (xV) return eV === VV || eV.querySelectorAll(dV.c).length <= 1 ? xV : null;
-           if (eV !== VV && eV.querySelectorAll(dV.c).length > 1) return null
+           if (LH) return BH === HH || BH.querySelectorAll(pH.e).length <= 1 ? LH : null;
+           if (BH !== HH && BH.querySelectorAll(pH.e).length > 1) return null
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3534` → after: `L3632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3632) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3534)

```diff
-         JV !== YV && (0, mV.r)(JV, YV, YV ? (0, mV.D)(YV) : xV, {
+         AH !== rH && (0, wH.r)(AH, rH, rH ? (0, wH.C)(rH) : LH, {
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3549` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3647) · [Before (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3549)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new eJ, this.tabStripNav = new lJ, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new BA, this.tabStripNav = new nA, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3555` → after: `L3653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3653) · [Before (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3555)

```diff
-         const VV = ZV.c.register({
+         const HH = XH.b.register({
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3564` → after: `L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3662) · [Before (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3564)

```diff
-             wakePressActs: VV => (0, ZV.g)(VV) || VV === (0, wV.i)("menuConfirm") && (0, mV.K)((0, rV.e)())
+             wakePressActs: HH => (0, XH.e)(HH) || HH === (0, EH.k)("menuConfirm") && (0, wH.K)((0, YH.c)())
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3566-L3567` → after: `L3664-L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3664-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3664-L3665) · [Before (L3566-L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3566-L3567)

```diff
-           eV = (0, xJ.k)((VV => {
-             const eV = (0, xJ.r)(VV);
+           BH = (0, LA.i)((HH => {
+             const BH = (0, LA.q)(HH);
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3571` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3669) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3571)

```diff
-         const JV = yV.f.onFrame((VV => {
+         const AH = hH.i.onFrame((HH => {
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3575` → after: `L3673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3673) · [Before (L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3575)

```diff
-             VV.isTrusted && VV.target instanceof Element && yV.f.getActivePad() && this.noteChosenStop(VV.target)
+             HH.isTrusted && HH.target instanceof Element && hH.i.getActivePad() && this.noteChosenStop(HH.target)
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3585` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3683) · [Before (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3585)

```diff
-         const YV = null !== (eV = null === (xV = VV.closest(".Dropdown-root")) || void 0 === xV ? void 0 : xV.querySelector(".Dropdown-control")) && void 0 !== eV ? eV : VV,
+         const rH = null !== (BH = null === (LH = HH.closest(".Dropdown-root")) || void 0 === LH ? void 0 : LH.querySelector(".Dropdown-control")) && void 0 !== BH ? BH : HH,
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3588` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3686) · [Before (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3588)

```diff
-         const yV = (0, xJ.r)(JV.layer);
+         const hH = (0, LA.q)(AH.layer);
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3592` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3690) · [Before (L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3592)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = UV, this.lastFocusedCentre = (0, mV.D)(UV), this.rememberFocus(UV), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = SH, this.lastFocusedCentre = (0, wH.C)(SH), this.rememberFocus(SH), this.notify())
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3613` → after: `L3711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3711) · [Before (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3613)

```diff
-           this.stickRepeat.reset(), null !== (VV = this.focused) && void 0 !== VV && VV.isConnected && sJ(this.focused, null, (0, mV.D)(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (HH = this.focused) && void 0 !== HH && HH.isConnected && sA(this.focused, null, (0, wH.C)(this.focused)), this.notify()
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3633` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3731) · [Before (L3633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3633)

```diff
-           const eV = (0, mV.D)(VV);
+           const BH = (0, wH.C)(HH);
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3635` → after: `L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3733) · [Before (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3635)

```diff
-         } else YV && sJ(YV, null, (0, mV.D)(YV));
+         } else rH && sA(rH, null, (0, wH.C)(rH));
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3650` → after: `L3748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3748) · [Before (L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3650)

```diff
-         const UV = (0, xJ.r)(eV.layer);
+         const SH = (0, LA.q)(BH.layer);
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3669` → after: `L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3767) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3669)

```diff
-         return (0, dV.f)(VV).filter((VV => !(0, dV.v)(VV)))
+         return (0, pH.h)(HH).filter((HH => !(0, pH.x)(HH)))
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3675` → after: `L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3773) · [Before (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3675)

```diff
-         const JV = null !== (eV = this.findOpenDropdown(xV)) && void 0 !== eV ? eV : xV,
+         const AH = null !== (BH = this.findOpenDropdown(LH)) && void 0 !== BH ? BH : LH,
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3677` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3775) · [Before (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3677)

```diff
-           UV = (0, xJ.r)(JV.layer);
+           SH = (0, LA.q)(AH.layer);
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3680` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3778) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3680)

```diff
-           if (null !== this.layerKey && JV.root === this.layerRoot && eV && (0, dV.r)(eV, JV.root)) this.continueLayer(UV, eV), this.wasActive || this.resume(JV.root, YV);
+           if (null !== this.layerKey && AH.root === this.layerRoot && BH && (0, pH.w)(BH, AH.root)) this.continueLayer(SH, BH), this.wasActive || this.resume(AH.root, rH);
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3685` → after: `L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3783) · [Before (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3685)

```diff
-             "popup" !== JV.layer.kind || JV !== xV || pV ? "menu" === JV.layer.kind && yV && "inGame" === QV.b.get("gameState") && !(0, yx.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = YV + GJ.e) : (this.pressGuardExtends = eV, this.pressGuardUntilMs = YV + (e … [truncated]
+             "popup" !== AH.layer.kind || AH !== LH || tH ? "menu" === AH.layer.kind && hH && "inGame" === zH.c.get("gameState") && !(0, hL.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = rH + IA.c) : (this.pressGuardExtends = BH, this.pressGuardUntilMs = rH + (B … [truncated]
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3688` → after: `L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3786) · [Before (L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3688)

```diff
-         if (this.layerKind = JV.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), VV.wokeDevice && this.focusPointedStop(JV.root), this.validateFocus(JV, YV), YV < this.pressGuardUntilMs && this.pressGuardExtends && (VV.wasPressed((0, wV.i)("menuConfirm")) || VV … [truncated]
+         if (this.layerKind = AH.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), HH.wokeDevice && this.focusPointedStop(AH.root), this.validateFocus(AH, rH), rH < this.pressGuardUntilMs && this.pressGuardExtends && (HH.wasPressed((0, EH.k)("menuConfirm")) || HH … [truncated]
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3692-L3693` → after: `L3790-L3791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3790-L3791) · [Before (L3692-L3693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3692-L3693)

```diff
-             return eV !== qJ && (qJ = eV, jJ.lock()), jJ.update(VV, (0, vV.i)().moveDeadzone)
-           })(VV.leftStick)) return pV = this.getHandoff(), BJ = rJ(pV), bJ = vJ(), void ZV.c.handOffHeldInput();
+             return BH !== vA && (vA = BH, xA.lock()), xA.update(HH, (0, GH.g)().moveDeadzone)
+           })(HH.leftStick)) return tH = this.getHandoff(), MA = YA(tH), QA = GA(), void XH.b.handOffHeldInput();
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3699` → after: `L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3797) · [Before (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3699)

```diff
-         if (!eV || !(0, dV.n)(eV)) return null;
+         if (!BH || !(0, pH.u)(BH)) return null;
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3706` → after: `L3804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3804) · [Before (L3706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3706)

```diff
-             (0, mV.m)(eV)
+             (0, wH.l)(BH)
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3716` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3814) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3716)

```diff
-         const eV = (0, rV.e)(),
+         const BH = (0, YH.c)(),
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3735` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3833) · [Before (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3735)

```diff
-         this.restoredFromMemory = null !== xV, this.setFocus(null !== xV && void 0 !== xV ? xV : this.pickInitial(VV, {
+         this.restoredFromMemory = null !== LH, this.setFocus(null !== LH && void 0 !== LH ? LH : this.pickInitial(HH, {
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3747` → after: `L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3845) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3747)

```diff
-         JV && dJ(JV, VV) ? this.takeOver(VV, JV, eV) : null !== (xV = this.focused) && void 0 !== xV && xV.isConnected && sJ(null, this.focused, (0, mV.D)(this.focused))
+         AH && pA(AH, HH) ? this.takeOver(HH, AH, BH) : null !== (LH = this.focused) && void 0 !== LH && LH.isConnected && sA(null, this.focused, (0, wH.C)(this.focused))
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3751` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3849) · [Before (L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3751)

```diff
-         return null !== (eV = this.layerKey ? this.findRemembered(VV, this.layerKey) : null) && void 0 !== eV ? eV : this.pickInitial(VV, {
+         return null !== (BH = this.layerKey ? this.findRemembered(HH, this.layerKey) : null) && void 0 !== BH ? BH : this.pickInitial(HH, {
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3763` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3861) · [Before (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3763)

```diff
-           point: JV ? (0, mV.D)(JV) : null !== (xV = this.lastFocusedCentre) && void 0 !== xV ? xV : this.getLayerStartPoint(YV),
+           point: AH ? (0, wH.C)(AH) : null !== (LH = this.lastFocusedCentre) && void 0 !== LH ? LH : this.getLayerStartPoint(rH),
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3776` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3874) · [Before (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3776)

```diff
-         return (0, mV.D)(null !== eV && void 0 !== eV ? eV : VV)
+         return (0, wH.C)(null !== BH && void 0 !== BH ? BH : HH)
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3783` → after: `L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3881) · [Before (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3783)

```diff
-         } = eV, yV = JV instanceof HTMLElement && (0, dV.r)(JV, VV) ? JV : null;
+         } = BH, hH = AH instanceof HTMLElement && (0, pH.w)(AH, HH) ? AH : null;
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3789` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3887) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3789)

```diff
-           }) : this.focusNearest(VV, UV), void(this.focused && this.focused === eV && this.focused.isConnected && sJ(null, this.focused, (0, mV.D)(this.focused)))
+           }) : this.focusNearest(HH, SH), void(this.focused && this.focused === BH && this.focused.isConnected && sA(null, this.focused, (0, wH.C)(this.focused)))
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3798` → after: `L3896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3896) · [Before (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3798)

```diff
-           wV = nV >= 0 ? nV : Ax(UV, QV);
+           EH = CH >= 0 ? CH : OL(SH, zH);
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3815` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3913) · [Before (L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3815)

```diff
-         const JV = [...VV.querySelectorAll(LJ)].filter((JV => (null === xV || void 0 === xV || !xV.has(JV)) && (eV ? (0, dV.x)(JV, VV) : (0, dV.r)(JV, VV)))),
+         const AH = [...HH.querySelectorAll(FA)].filter((AH => (null === LH || void 0 === LH || !LH.has(AH)) && (BH ? (0, pH.y)(AH, HH) : (0, pH.w)(AH, HH)))),
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3820-L3821` → after: `L3918-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3918-L3919) · [Before (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3820-L3821)

```diff
-         const xV = [...VV.querySelectorAll(HJ)].filter(dV.n);
-         for (const JV of [...(0, dV.h)(VV), ...xV]) {
+         const LH = [...HH.querySelectorAll(dA)].filter(pH.u);
+         for (const AH of [...(0, pH.l)(HH), ...LH]) {
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3839` → after: `L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3937) · [Before (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3839)

```diff
-         const UV = VV => eV ? (0, dV.f)(VV) : this.getEnabledCandidates(VV);
+         const SH = HH => BH ? (0, pH.h)(HH) : this.getEnabledCandidates(HH);
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3841` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3939) · [Before (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3841)

```diff
-         for (const vV of (0, dV.h)(VV))
+         for (const GH of (0, pH.l)(HH))
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3844` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3942) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3844)

```diff
-           if (xV && performance.now() - JV < 1e4 && (0, dV.m)(VV)) return null;
+           if (LH && performance.now() - AH < 1e4 && (0, pH.r)(HH)) return null;
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3850` → after: `L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3948) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3850)

```diff
-           wV = nV.length > 0 ? nV : yV,
+           EH = CH.length > 0 ? CH : hH,
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3858` → after: `L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3956) · [Before (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3858)

```diff
-           if (YV && (0, dV.r)(YV, VV.root)) return this.pendingFocus = null, void this.setFocus(YV, {
+           if (rH && (0, pH.w)(rH, HH.root)) return this.pendingFocus = null, void this.setFocus(rH, {
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3864-L3865` → after: `L3962-L3963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3962-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3962-L3963) · [Before (L3864-L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3864-L3865)

```diff
-           UV = !!YV && (0, dV.r)(YV, VV.root);
-         if (!(!UV && YV && YV === this.lastActivated && eV - this.lastActivatedAtMs < 5e3 && VV.root.contains(YV) && (0, dV.n)(YV) && (0, dV.v)(YV))) {
+           SH = !!rH && (0, pH.w)(rH, HH.root);
+         if (!(!SH && rH && rH === this.lastActivated && BH - this.lastActivatedAtMs < 5e3 && HH.root.contains(rH) && (0, pH.u)(rH) && (0, pH.x)(rH))) {
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3870` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3968) · [Before (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3870)

```diff
-                 JV = null !== xV && void 0 !== xV ? xV : this.restoredFromMemory ? null : this.pickDefault(VV.root);
+                 AH = null !== LH && void 0 !== LH ? LH : this.restoredFromMemory ? null : this.pickDefault(HH.root);
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3882-L3884` → after: `L3980-L3982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3980-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3980-L3982) · [Before (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3882-L3884)

```diff
-         if (VV.wasPressed((0, wV.i)("menuToggleCursor"))) return FJ(this.getHandoff()), !0;
-         if (VV.wasPressed((0, wV.i)("menuBack"))) {
-           const VV = (0, mV.m)(eV.root);
+         if (HH.wasPressed((0, EH.k)("menuToggleCursor"))) return TA(this.getHandoff()), !0;
+         if (HH.wasPressed((0, EH.k)("menuBack"))) {
+           const HH = (0, wH.l)(BH.root);
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3887` → after: `L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3985) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3887)

```diff
-           }) : fx(this, eV.root) || ((0, mV.g)(eV.root) ? this.returnToOpener(eV.root) : this.backToStrip(eV.root) || ZJ()), !0
+           }) : DL(this, BH.root) || ((0, wH.f)(BH.root) ? this.returnToOpener(BH.root) : this.backToStrip(BH.root) || XA()), !0
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3889` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3987) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3889)

```diff
-         const xV = (0, wV.i)("menuConfirm");
+         const LH = (0, EH.k)("menuConfirm");
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3891` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3989) · [Before (L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3891)

```diff
-         VV.wasPressed(xV) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (JV = null === (YV = this.focused) || void 0 === YV ? void 0 : YV.getAttribute("data-pad-repeat")) && void 0 !== JV ? JV : null, this.confirmRepeated = VV.wokeDevice, this.confirm … [truncated]
+         HH.wasPressed(LH) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (AH = null === (rH = this.focused) || void 0 === rH ? void 0 : rH.getAttribute("data-pad-repeat")) && void 0 !== AH ? AH : null, this.confirmRepeated = HH.wokeDevice, this.confirm … [truncated]
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3894` → after: `L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L3992) · [Before (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3894)

```diff
-           if (this.confirmPressedOn = null, VV && !this.confirmRepeated && VV === this.focused && VV.isConnected && !(0, dV.v)(VV)) {
+           if (this.confirmPressedOn = null, HH && !this.confirmRepeated && HH === this.focused && HH.isConnected && !(0, pH.x)(HH)) {
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3904` → after: `L4002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4002) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3904)

```diff
-         xV && null !== this.confirmRepeatKey && VV.isHeld(eV) && (xV === this.focused && xV.isConnected && !(0, dV.v)(xV) && xV.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? xV.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
+         LH && null !== this.confirmRepeatKey && HH.isHeld(BH) && (LH === this.focused && LH.isConnected && !(0, pH.x)(LH) && LH.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? LH.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3908` → after: `L4006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4006) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3908)

```diff
-         if (!(0, vV.i)().menuBackToCategories) return !1;
+         if (!(0, GH.g)().menuBackToCategories) return !1;
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3918` → after: `L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4016) · [Before (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3918)

```diff
-           return null !== (xV = this.getEnabledCandidates(VV).find((VV => (0, mV.F)(VV) === eV))) && void 0 !== xV ? xV : null
+           return null !== (LH = this.getEnabledCandidates(HH).find((HH => (0, wH.G)(HH) === BH))) && void 0 !== LH ? LH : null
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3923-L3924` → after: `L4021-L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4021-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4021-L4022) · [Before (L3923-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3923-L3924)

```diff
-         if ((0, WJ.e)(VV) || (0, mV.G)(VV)) return;
-         this.lastActivatedKey = null !== (eV = (0, mV.F)(VV)) && void 0 !== eV ? eV : this.lastActivatedKey, this.lastActivated = VV, this.lastActivatedAtMs = performance.now(), this.rememberFocus(VV);
+         if ((0, fA.d)(HH) || (0, wH.I)(HH)) return;
+         this.lastActivatedKey = null !== (BH = (0, wH.G)(HH)) && void 0 !== BH ? BH : this.lastActivatedKey, this.lastActivated = HH, this.lastActivatedAtMs = performance.now(), this.rememberFocus(HH);
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3928` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4026) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3928)

```diff
-             JV = new Set(xV.querySelectorAll(`[data-pad-initial-area], ${HJ}`)),
+             AH = new Set(LH.querySelectorAll(`[data-pad-initial-area], ${dA}`)),
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3932` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4030) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3932)

```diff
-             return (0, dV.r)(VV, xV) ? null : null !== (YV = this.pickDefault(xV, {
+             return (0, pH.w)(HH, LH) ? null : null !== (rH = this.pickDefault(LH, {
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3934-L3936` → after: `L4032-L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4032-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4032-L4034) · [Before (L3934-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3934-L3936)

```diff
-             })) && void 0 !== YV ? YV : this.pickNewAreaStart(xV, JV)
-           }), 5e3, (() => VV.isConnected && (0, dV.v)(VV) && performance.now() - YV < 6e4))
-         }(0, mV.c)(VV), (0, mV.k)(VV)
+             })) && void 0 !== rH ? rH : this.pickNewAreaStart(LH, AH)
+           }), 5e3, (() => HH.isConnected && (0, pH.x)(HH) && performance.now() - rH < 6e4))
+         }(0, wH.c)(HH), (0, wH.h)(HH)
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3939-L3940` → after: `L4037-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4037-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4037-L4038) · [Before (L3939-L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3939-L3940)

```diff
-         const YV = Wx(eV.layer.kind) ? (0, wV.i)("chat") : null;
-         for (const pV of kV.F) {
+         const rH = fL(BH.layer.kind) ? (0, EH.k)("chat") : null;
+         for (const tH of uH.y) {
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3943` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4041) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3943)

```diff
-         const UV = JV ? (0, kV.k)(VV.leftStick, (0, vV.i)().moveDeadzone) : {
+         const SH = AH ? (0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone) : {
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3947` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4045) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3947)

```diff
-           yV = this.stickRepeat.update((0, kV.gb)(UV), xV);
+           hH = this.stickRepeat.update((0, uH.Z)(SH), LH);
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3968` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4066) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L3968)

```diff
-           QV = pV ? (0, WJ.e)(yV) : null;
+           zH = tH ? (0, fA.d)(hH) : null;
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4080` → after: `L4178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4178) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4080)

```diff
-         const xV = (0, kV.k)(VV.rightStick, .2);
+         const LH = (0, uH.f)(HH.rightStick, .2);
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4090` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4188) · [Before (L4090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4090)

```diff
-           const yV = null !== (YV = MV(this.focused, UV, eV.root)) && void 0 !== YV ? YV : GV(eV.root, UV);
+           const hH = null !== (rH = mH(this.focused, SH, BH.root)) && void 0 !== rH ? rH : IH(BH.root, SH);
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4098-L4099` → after: `L4196-L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4196-L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4196-L4197) · [Before (L4098-L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4098-L4099)

```diff
-     var VY = xV(8843);
-     var eY = xV(9340);
+     var Hr = LH(8913);
+     var Br = LH(9426);
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4170-L4172` → after: `L4268-L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4268-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4268-L4270) · [Before (L4170-L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4170-L4172)

```diff
-           return "function" === typeof(null === eV || void 0 === eV ? void 0 : eV.playEffect) ? eV : null
-         })(yV.f.getActiveGamepad()),
-         isVibrationOn: () => (0, vV.i)().vibration,
+           return "function" === typeof(null === BH || void 0 === BH ? void 0 : BH.playEffect) ? BH : null
+         })(hH.i.getActiveGamepad()),
+         isVibrationOn: () => (0, GH.g)().vibration,
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4178-L4182` → after: `L4276-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4276-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4276-L4280) · [Before (L4178-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4178-L4182)

```diff
-     var yY = xV(8852),
-       pY = xV(3245),
-       QY = xV(115),
-       nY = xV(40),
-       wY = xV(701);
+     var hr = LH(8920),
+       tr = LH(3209),
+       zr = LH(101),
+       Cr = LH(30),
+       Er = LH(656);
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4192` → after: `L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4290) · [Before (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4192)

```diff
-         return null === xV || this.deps.readReportedVisitId() === xV ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(xV), this.deps.EZ(eV, this.deps.getInputType()), "reported") : "notReady"
+         return null === LH || this.deps.readReportedVisitId() === LH ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(LH), this.deps.XX(BH, this.deps.getInputType()), "reported") : "notReady"
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4196-L4200` → after: `L4294-L4298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4294-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4294-L4298) · [Before (L4196-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4196-L4200)

```diff
-     var rY = xV(1439),
-       kY = xV(1838),
-       bY = xV(686),
-       EY = xV(1542),
-       BY = xV(1279);
+     var Yr = LH(1352),
+       ur = LH(1789),
+       Qr = LH(642),
+       Wr = LH(1450),
+       Mr = LH(1194);
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4202` → after: `L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4300) · [Before (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4202)

```diff
-         translationKey: `controller:${VV}`
+         translationKey: `controller:${HH}`
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4264-L4265` → after: `L4362-L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4362-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4362-L4363) · [Before (L4264-L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4264-L4265)

```diff
-         const JV = null !== (xV = tY[VV][eV]) && void 0 !== xV ? xV : qY[eV];
-         return "string" === typeof JV ? JV : (0, YV.u)(BY.c.get().getCurrentLanguageCode(), JV.translationKey)
+         const AH = null !== (LH = Pr[HH][BH]) && void 0 !== LH ? LH : vr[BH];
+         return "string" === typeof AH ? AH : (0, rH.u)(Mr.g.get().getCurrentLanguageCode(), AH.translationKey)
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4273-L4275` → after: `L4371-L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4371-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4371-L4373) · [Before (L4273-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4273-L4275)

```diff
-         const YV = (0, rV.x)(),
-           UV = null !== xV && void 0 !== xV ? xV : YV,
-           yV = (0, yY.g)(UV, eV);
+         const rH = (0, YH.v)(),
+           SH = null !== LH && void 0 !== LH ? LH : rH,
+           hH = (0, hr.d)(SH, BH);
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4281-L4282` → after: `L4379-L4380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4379-L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4379-L4380) · [Before (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4281-L4282)

```diff
-             "--pad-glyph-mask": `url(${yV})`,
-             "--pad-glyph-aspect": (0, yY.d)(UV, eV)
+             "--pad-glyph-mask": `url(${hH})`,
+             "--pad-glyph-aspect": (0, hr.c)(SH, BH)
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4286` → after: `L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4384) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4286)

```diff
-     var PY = xV(2021);
+     var Vr = LH(1967);
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4293` → after: `L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4391) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4293)

```diff
-       } = (0, YV.A)();
+       } = (0, rH.B)();
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4305` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4403) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4305)

```diff
-             }, ` ${eV.description}`] : [{
+             }, ` ${BH.description}`] : [{
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4315` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4413) · [Before (L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4315)

```diff
-     var NY = xV(9346);
+     var br = LH(9433);
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4323` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4421) · [Before (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4323)

```diff
-           "--pad-drop-stack-hold": `${eV.holdMs}ms`
+           "--pad-drop-stack-hold": `${BH.holdMs}ms`
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4330-L4333` → after: `L4428-L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4428-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4428-L4431) · [Before (L4330-L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4330-L4333)

```diff
-     var MY = xV(9379),
-       zY = xV(9386),
-       GY = xV(9390),
-       WY = xV(9372);
+     var mr = LH(9453),
+       or = LH(9458),
+       Ir = LH(9463),
+       fr = LH(9450);
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4337` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4435) · [Before (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4337)

```diff
-         } = (0, QV.l)(["gameState"]), eV = (0, rV.w)(), [JV, YV] = (0, CV.useState)(!1), [UV, yV] = (0, CV.useState)(!1);
+         } = (0, zH.m)(["gameState"]), BH = (0, YH.s)(), [AH, rH] = (0, qH.useState)(!1), [SH, hH] = (0, qH.useState)(!1);
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4344` → after: `L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4442) · [Before (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4344)

```diff
-           return (bY.I ? Promise.all([xV.e(84), xV.e(103), xV.e(296), xV.e(205), xV.e(247), xV.e(246), xV.e(102)]).then((() => xV(41821))).then((VV => VV.startWasmPadGameplay)) : Promise.all([xV.e(84), xV.e(255), xV.e(254), xV.e(111), xV.e(87), xV.e(85), xV.e(86), xV.e(201), xV.e … [truncated]
+           return (Qr.K ? Promise.all([LH.e(84), LH.e(103), LH.e(300), LH.e(207), LH.e(251), LH.e(250), LH.e(102)]).then((() => LH(41856))).then((HH => HH.startWasmPadGameplay)) : Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(111), LH.e(87), LH.e(85), LH.e(86), LH.e(203), LH.e … [truncated]
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4370` → after: `L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4468) · [Before (L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4370)

```diff
-         } = (0, YV.A)(), eV = (0, rV.w)(), {
+         } = (0, rH.B)(), BH = (0, YH.s)(), {
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4373` → after: `L4471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4471) · [Before (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4373)

```diff
-         } = (0, QV.l)(["gameState", "isUiHidden"]), {
+         } = (0, zH.m)(["gameState", "isUiHidden"]), {
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4375-L4376` → after: `L4473-L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4473-L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4473-L4474) · [Before (L4375-L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4375-L4376)

```diff
-         } = (0, vV.p)(), yV = (0, NY.e)(), pV = (0, NY.f)(), [nV, ZV] = (0, CV.useState)(GY.e);
-         return (0, EY.g)(WY.n, ZV), !eV || UV || JV || "inGame" !== xV || !yV && !nV ? null : (0, cV.jsxs)("div", {
+         } = (0, GH.n)(), hH = (0, br.m)(), tH = (0, br.q)(), [CH, XH] = (0, qH.useState)(Ir.b);
+         return (0, Wr.d)(fr.n, XH), !BH || SH || AH || "inGame" !== LH || !hH && !CH ? null : (0, RH.jsxs)("div", {
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4381` → after: `L4479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4479) · [Before (L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4381)

```diff
-               glyph: (0, wV.i)("actionButton")
+               glyph: (0, EH.k)("actionButton")
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4391` → after: `L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4489) · [Before (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4391)

```diff
-               glyph: (0, wV.i)("pickBlock")
+               glyph: (0, EH.k)("pickBlock")
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4401` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4499) · [Before (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4401)

```diff
-         } = (0, YV.A)(), eV = (0, rV.w)(), {
+         } = (0, rH.B)(), BH = (0, YH.s)(), {
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4404-L4405` → after: `L4502-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4502-L4503) · [Before (L4404-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4404-L4405)

```diff
-         } = (0, QV.l)(["gameState", "isUiHidden"]), [UV, yV] = (0, CV.useState)(MY.e);
-         return (0, EY.g)(WY.l, yV), eV && !JV && "inGame" === xV && UV ? (0, cV.jsxs)("div", {
+         } = (0, zH.m)(["gameState", "isUiHidden"]), [SH, hH] = (0, qH.useState)(mr.c);
+         return (0, Wr.d)(fr.j, hH), BH && !AH && "inGame" === LH && SH ? (0, RH.jsxs)("div", {
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4417` → after: `L4515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4515) · [Before (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4417)

```diff
-         } = (0, YV.A)(), eV = (0, rV.w)(), {
+         } = (0, rH.B)(), BH = (0, YH.s)(), {
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4420` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4518) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4420)

```diff
-         } = (0, QV.l)(["gameState", "isUiHidden"]), {
+         } = (0, zH.m)(["gameState", "isUiHidden"]), {
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4422-L4423` → after: `L4520-L4521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4520-L4521) · [Before (L4422-L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4422-L4423)

```diff
-         } = (0, vV.p)(), [yV, pV] = (0, CV.useState)(zY.c);
-         return (0, EY.g)(WY.j, pV), eV && !JV && "inGame" === xV && yV ? (0, cV.jsxs)("div", {
+         } = (0, GH.n)(), [hH, tH] = (0, qH.useState)(or.c);
+         return (0, Wr.d)(fr.i, tH), BH && !AH && "inGame" === LH && hH ? (0, RH.jsxs)("div", {
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4426` → after: `L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4524) · [Before (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4426)

```diff
-             glyph: (0, wV.i)("attack")
+             glyph: (0, EH.k)("attack")
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4432-L4436` → after: `L4530-L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4530-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4530-L4534) · [Before (L4432-L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4432-L4436)

```diff
-     var CY = xV(9396),
-       aY = xV(2080),
-       oY = xV(2693),
-       cY = xV(8828);
-     const hY = VV => VV && !(0, CY.c)(aY.c.get("shopInfo")),
+     var qr = LH(9467),
+       gr = LH(2036),
+       Nr = LH(2628),
+       Rr = LH(8897);
+     const jr = HH => HH && !(0, qr.d)(gr.e.get("shopInfo")),
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4438-L4440` → after: `L4536-L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4536-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4536-L4538) · [Before (L4438-L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4438-L4440)

```diff
-         const VV = "inGame" === (0, QV.l)(["gameState"]).gameState;
-         return (0, oY.g)("shopInfo", (() => {
-           (0, cY.h)(hY(VV))
+         const HH = "inGame" === (0, zH.m)(["gameState"]).gameState;
+         return (0, Nr.f)("shopInfo", (() => {
+           (0, Rr.e)(jr(HH))
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4442` → after: `L4540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4540) · [Before (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4442)

```diff
-           (0, cY.h)(hY(VV))
+           (0, Rr.e)(jr(HH))
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4448` → after: `L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4546) · [Before (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4448)

```diff
-         } = (0, YV.A)(), {
+         } = (0, rH.B)(), {
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4450-L4452` → after: `L4548-L4550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4548-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4548-L4550) · [Before (L4450-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4450-L4452)

```diff
-         } = (0, vV.p)();
-         (0, rV.x)();
-         const xV = (0, oe.o)();
+         } = (0, GH.n)();
+         (0, YH.v)();
+         const LH = (0, NB.m)();
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4454` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4552) · [Before (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4454)

```diff
-           const VV = ZV.c.register({
+           const HH = XH.b.register({
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4465-L4466` → after: `L4563-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4563-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4563-L4564) · [Before (L4465-L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4465-L4466)

```diff
-           const xV = (0, IV.h)((() => {
-               "inventory" !== ZV.c.getActiveConsumerName() && Yx.forgetSurface()
+           const LH = (0, iH.i)((() => {
+               "inventory" !== XH.b.getActiveConsumerName() && rL.forgetSurface()
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4470` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4568) · [Before (L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4470)

```diff
-               (0, rV.j)() && (0, uV.h)(eV) && eV.closest(Fe) && (0, IV.e)() && (0, IV.l)(eV)
+               (0, YH.j)() && (0, aH.k)(BH) && BH.closest(TB) && (0, iH.h)() && (0, iH.n)(BH)
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4496` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4594) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4496)

```diff
-                   glyph: (0, wV.i)(VV)
+                   glyph: (0, EH.k)(HH)
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4498` → after: `L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4596) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4498)

```diff
-                   children: VV(`controller:${YV}`)
+                   children: HH(`controller:${rH}`)
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4583` → after: `L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4681) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4583)

```diff
-         const xV = ((VV, eV) => [...IY[VV], eV ? uY : HY])(VV, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const LH = ((HH, BH) => [...ir[HH], BH ? ar : dr])(HH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4626` → after: `L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4724) · [Before (L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4626)

```diff
-         return 1 === JV.length ? JV : VV
+         return 1 === AH.length ? AH : HH
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4628` → after: `L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4726) · [Before (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4628)

```diff
-     var nU = xV(9274);
+     var CS = LH(9339);
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4653` → after: `L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4751) · [Before (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4653)

```diff
-       rU = ["vn", "nameTag"],
+       YS = ["qh", "nameTag"],
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4692` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4790) · [Before (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4692)

```diff
-             (0, uV.b)(eV.target);
+             (0, aH.d)(BH.target);
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4695` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4793) · [Before (L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4695)

```diff
-             (0, uV.f)(eV.target, " ");
+             (0, aH.h)(BH.target, " ");
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4698` → after: `L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4796) · [Before (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4698)

```diff
-             (0, uV.f)(eV.target, "\n");
+             (0, aH.h)(BH.target, "\n");
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4701` → after: `L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4799) · [Before (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4701)

```diff
-             (0, uV.l)(eV.target, -1);
+             (0, aH.o)(BH.target, -1);
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4704` → after: `L4802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4802) · [Before (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4704)

```diff
-             (0, uV.l)(eV.target, 1);
+             (0, aH.o)(BH.target, 1);
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4742` → after: `L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4840) · [Before (L4742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4742)

```diff
-         this.host.hide(), (0, Mx.l)(xV) ? (0, Mx.e)().submit() : (OJ.noteChosenStop(xV), null === (VV = (eV = (0, Mx.i)(xV)).submit) || void 0 === VV || VV.call(eV), document.activeElement === xV && xV.blur())
+         this.host.hide(), (0, mL.l)(LH) ? (0, mL.e)().submit() : (yA.noteChosenStop(LH), null === (HH = (BH = (0, mL.h)(LH)).submit) || void 0 === HH || HH.call(BH), document.activeElement === LH && LH.blur())
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4756` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4854) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4756)

```diff
-         (0, uV.f)(eV, QU(VV, xV, JV)), this.host.setState({
+         (0, aH.h)(BH, zS(HH, LH, AH)), this.host.setState({
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4766` → after: `L4864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4864) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4766)

```diff
-           xV && (eV.setSelectionRange(0, eV.value.length), (0, uV.f)(eV, xV))
+           LH && (BH.setSelectionRange(0, BH.value.length), (0, aH.h)(BH, LH))
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4770` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4868) · [Before (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4770)

```diff
-     var jU = xV(9293);
+     var xS = LH(9361);
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4781` → after: `L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4879) · [Before (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4781)

```diff
-         this.host = VV, this.editor = eV, this.lastDirection = null, this.navRepeat = new kV.d((0, bV.e)(qU)), this.commandRepeats = new Map(fY.filter((VV => {
+         this.host = HH, this.editor = BH, this.lastDirection = null, this.navRepeat = new uH.b((0, QH.d)(vS)), this.commandRepeats = new Map(Dr.filter((HH => {
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4790` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4888) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4790)

```diff
-           return [eV, (0, bV.e)(tU)]
+           return [BH, (0, QH.d)(PS)]
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4804` → after: `L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4902) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4804)

```diff
-           const xV = (0, wV.i)(UV),
+           const LH = (0, EH.k)(SH),
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4808` → after: `L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4906) · [Before (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4808)

```diff
-         if (VV.wasPressed((0, wV.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
+         if (HH.wasPressed((0, EH.k)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4816-L4818` → after: `L4914-L4916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4914-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4914-L4916) · [Before (L4816-L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4816-L4818)

```diff
-         if (VV.wasPressed((0, wV.i)("keyboardClose"))) return void EU(eV);
-         const JV = (0, wV.i)("keyboardType");
-         if (VV.wasPressed(JV)) return ZV.c.consumeButton(JV), void this.host.open(eV);
+         if (HH.wasPressed((0, EH.k)("keyboardClose"))) return void WS(BH);
+         const AH = (0, EH.k)("keyboardType");
+         if (HH.wasPressed(AH)) return XH.b.consumeButton(AH), void this.host.open(BH);
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4823` → after: `L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4921) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4823)

```diff
-         EU(eV), yV && ZV.c.handOffHeldInput()
+         WS(BH), hH && XH.b.handOffHeldInput()
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4859` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4957) · [Before (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4859)

```diff
-         for (const eV of kV.F)
+         for (const BH of uH.y)
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4861` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4959) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4861)

```diff
-         return (0, kV.gb)((0, kV.k)(VV.leftStick, (0, vV.i)().moveDeadzone))
+         return (0, uH.Z)((0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone))
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4877` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4975) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4877)

```diff
-         eV && nV.h.QZ(jU.e, VV.visible)
+         BH && CH.k.AX(xS.c, HH.visible)
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4885` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4983) · [Before (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4885)

```diff
-         const VV = ZV.c.register({
+         const HH = XH.b.register({
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4887` → after: `L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4985) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4887)

```diff
-             isActive: () => this.state.visible || (0, uV.h)(document.activeElement),
+             isActive: () => this.state.visible || (0, aH.k)(document.activeElement),
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4894` → after: `L4992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4992) · [Before (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4894)

```diff
-             wakePressActs: VV => TU.includes(VV) || !this.state.visible && VV === (0, wV.i)("keyboardType")
+             wakePressActs: HH => US.includes(HH) || !this.state.visible && HH === (0, EH.k)("keyboardType")
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4898` → after: `L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L4996) · [Before (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4898)

```diff
-             (0, uV.h)(eV) && (eV === this.pendingChatInput || (0, rV.j)() ? this.open(eV) : this.state.visible && eV !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, aH.k)(BH) && (BH === this.pendingChatInput || (0, YH.j)() ? this.open(BH) : this.state.visible && BH !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4906` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5004) · [Before (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4906)

```diff
-             VV.isTrusted && this.state.visible && (VV => !VV.repeat && !PU.has(VV.key) && !(0, nU.d)(VV.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(VV.key))(VV) && this.hide()
+             HH.isTrusted && this.state.visible && (HH => !HH.repeat && !VS.has(HH.key) && !(0, CS.b)(HH.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(HH.key))(HH) && this.hide()
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4915` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5013) · [Before (L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4915)

```diff
-         const UV = nV.h.subscribe(WY.d, (() => {
+         const SH = CH.k.subscribe(fr.c, (() => {
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4918` → after: `L5016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5016) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4918)

```diff
-           yV = nV.h.subscribe(jU.f, (VV => {
+           hH = CH.k.subscribe(xS.e, (HH => {
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4922` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5020) · [Before (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4922)

```diff
-           VV(), document.removeEventListener("focusin", eV, !0), document.removeEventListener("focusout", xV, !0), window.removeEventListener("keydown", JV, !0), window.removeEventListener("resize", YV), nV.h.unsubscribe(UV), nV.h.unsubscribe(yV), this.clearPendingChat(), this.hi … [truncated]
+           HH(), document.removeEventListener("focusin", BH, !0), document.removeEventListener("focusout", LH, !0), window.removeEventListener("keydown", AH, !0), window.removeEventListener("resize", rH), CH.k.unsubscribe(SH), CH.k.unsubscribe(hH), this.clearPendingChat(), this.hi … [truncated]
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4932` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5030) · [Before (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4932)

```diff
-         (0, uV.h)(VV) ? (document.activeElement !== VV && VV.focus(), document.activeElement === VV && this.open(VV)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", VV)
+         (0, aH.k)(HH) ? (document.activeElement !== HH && HH.focus(), document.activeElement === HH && this.open(HH)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", HH)
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4937` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5035) · [Before (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4937)

```diff
-         this.restoreInputMode(), (0, uV.m)(VV), this.savedInputMode = VV.getAttribute("inputmode"), VV.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, aH.p)(HH), this.savedInputMode = HH.getAttribute("inputmode"), HH.setAttribute("inputmode", "none");
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4942-L4943` → after: `L5040-L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5040-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5040-L5041) · [Before (L4942-L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4942-L4943)

```diff
-           kind: (0, Mx.l)(VV) ? "chat" : null !== (eV = (0, Mx.i)(VV).kind) && void 0 !== eV ? eV : null,
-           accentsFirst: (JV = BY.c.get().getCurrentLanguageCode(), dY.has(JV)),
+           kind: (0, mL.l)(HH) ? "chat" : null !== (BH = (0, mL.h)(HH).kind) && void 0 !== BH ? BH : null,
+           accentsFirst: (AH = Mr.g.get().getCurrentLanguageCode(), pr.has(AH)),
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4970` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5068) · [Before (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4970)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(VV) : (0, uV.h)(eV) && this.padInput.onHiddenFrame(VV, eV)
+         this.state.visible ? this.padInput.onVisibleFrame(HH) : (0, aH.k)(BH) && this.padInput.onHiddenFrame(HH, BH)
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4986` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5084) · [Before (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L4986)

```diff
-     var NU = xV(3054);
+     var bS = LH(2991);
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5004` → after: `L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5102) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5004)

```diff
-         vn: "controller:keyboardTargetBookTitle"
+         qh: "controller:keyboardTargetBookTitle"
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5036` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5134) · [Before (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5036)

```diff
-         } = (0, YV.A)(), xV = (() => {
+         } = (0, rH.B)(), LH = (() => {
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5041-L5042` → after: `L5139-L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5139-L5140) · [Before (L5041-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5041-L5042)

```diff
-         })(), JV = (0, rV.w)(), UV = (0, CV.useRef)(null);
-         (0, vV.p)(), (0, rV.x)(), (0, CV.useEffect)((() => {
+         })(), AH = (0, YH.s)(), SH = (0, qH.useRef)(null);
+         (0, GH.n)(), (0, YH.v)(), (0, qH.useEffect)((() => {
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5052` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5150) · [Before (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5052)

```diff
-         const QV = null !== (VV = null === pV || void 0 === pV ? void 0 : pV.value) && void 0 !== VV ? VV : "",
+         const zH = null !== (HH = null === tH || void 0 === tH ? void 0 : tH.value) && void 0 !== HH ? HH : "",
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5061` → after: `L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5159) · [Before (L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5061)

```diff
-           })(QV, QV.startsWith("/") ? (0, NU.i)() : [], wU.length),
+           })(zH, zH.startsWith("/") ? (0, bS.d)() : [], ES.length),
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5065` → after: `L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5163) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5065)

```diff
-             return null !== (xV = nV[eV]) && void 0 !== xV ? xV : ""
+             return null !== (LH = CH[BH]) && void 0 !== LH ? LH : ""
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5109` → after: `L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5207) · [Before (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5109)

```diff
-           className: oV()(Mx.r, "top" === xV.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: NH()(mL.n, "top" === LH.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5114` → after: `L5212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5212) · [Before (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5114)

```diff
-             "--pad-keyboard-height": `${xV.maxHeightPx}px`
+             "--pad-keyboard-height": `${LH.maxHeightPx}px`
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5162` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5260) · [Before (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5162)

```diff
-                       glyph: (0, wV.i)(yV)
+                       glyph: (0, EH.k)(hH)
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5189` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5287) · [Before (L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5189)

```diff
-         } = (0, uV.o)(eV), nV = "password" === eV.type ? "\u2022".repeat(yV.length) : yV;
+         } = (0, aH.s)(BH), CH = "password" === BH.type ? "\u2022".repeat(hH.length) : hH;
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5217-L5218` → after: `L5315-L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5315-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5315-L5316) · [Before (L5217-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5217-L5218)

```diff
-     var iU = xV(1473),
-       CU = xV(3866);
+     var eS = LH(1390),
+       qS = LH(3795);
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5221` → after: `L5319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5319) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5221)

```diff
-         return eV.map(wV.i)
+         return BH.map(EH.k)
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5235` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5333) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5235)

```diff
-         for (const xV of VV)(0, dV.n)(xV) && eV.push(xV.getBoundingClientRect());
+         for (const LH of HH)(0, pH.u)(LH) && BH.push(LH.getBoundingClientRect());
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5246` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5344) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5246)

```diff
-         if (((0, CU.h)(null === eV || void 0 === eV ? void 0 : eV.layer.kind, (0, CU.k)()) || JV) && xV.push(...LU(document.querySelectorAll(cU.join(",")))), 0 === xV.length) return null;
+         if (((0, qS.f)(null === BH || void 0 === BH ? void 0 : BH.layer.kind, (0, qS.g)()) || AH) && LH.push(...FS(document.querySelectorAll(RS.join(",")))), 0 === LH.length) return null;
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5250` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5348) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5250)

```diff
-         } = VV.getBoundingClientRect(), yV = window.innerHeight - 8, pV = (0, CU.r)(yV, {
+         } = HH.getBoundingClientRect(), hH = window.innerHeight - 8, tH = (0, qS.j)(hH, {
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5258` → after: `L5356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5356) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5258)

```diff
-           xV = VV ? `${Math.round(window.innerHeight-VV.getBoundingClientRect().top)}px` : "";
+           LH = HH ? `${Math.round(window.innerHeight-HH.getBoundingClientRect().top)}px` : "";
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5264` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5362) · [Before (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5264)

```diff
-         } = (0, YV.A)(), {
+         } = (0, rH.B)(), {
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5266-L5267` → after: `L5364-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5364-L5365) · [Before (L5266-L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5266-L5267)

```diff
-         } = (0, vV.p)(), xV = (0, rV.w)(), [JV, UV] = (0, CV.useState)(!1), [yV, nV] = (0, CV.useState)([]), [bV, EV] = (0, CV.useState)(null), BV = (0, CV.useRef)(null), jV = (0, CV.useRef)(null);
-         (0, EY.g)(jU.e, (VV => {
+         } = (0, GH.n)(), LH = (0, YH.s)(), [AH, SH] = (0, qH.useState)(!1), [hH, CH] = (0, qH.useState)([]), [QH, WH] = (0, qH.useState)(null), MH = (0, qH.useRef)(null), xH = (0, qH.useRef)(null);
+         (0, Wr.d)(xS.c, (HH => {
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5269` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5367) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5269)

```diff
-         })), (0, EY.g)(CU.n, (() => {
+         })), (0, Wr.d)(qS.i, (() => {
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5280-L5281` → after: `L5378-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5378-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5378-L5379) · [Before (L5280-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5280-L5281)

```diff
-                 const eV = ZV.c.getActiveConsumerName(),
-                   xV = (0, CU.e)();
+                 const BH = XH.b.getActiveConsumerName(),
+                   LH = (0, qS.d)();
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5283-L5284` → after: `L5381-L5382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5381-L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5381-L5382) · [Before (L5283-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5283-L5284)

```diff
-                   const VV = (0, wV.i)(xV),
-                     eV = "emoteWheel" === xV && "wheel" === (0, vV.i)().emoteButton || !(0, kV.M)(ZV.c.getLastFrame().values, VV) ? {
+                   const HH = (0, EH.k)(LH),
+                     BH = "emoteWheel" === LH && "wheel" === (0, GH.g)().emoteButton || !(0, uH.G)(XH.b.getLastFrame().values, HH) ? {
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5292` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5390) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5292)

```diff
-                     glyphs: [(0, wV.w)(VV)],
+                     glyphs: [(0, EH.z)(HH)],
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5300` → after: `L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5398) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5300)

```diff
-                 if (!JV || "focus" !== eV && "cursor" !== eV) return (0, CU.c)(wV.i);
+                 if (!AH || "focus" !== BH && "cursor" !== BH) return (0, qS.b)(EH.k);
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5306-L5307` → after: `L5404-L5405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5404-L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5404-L5405) · [Before (L5306-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5306-L5307)

```diff
-                   yV = (0, mV.B)(JV.root),
-                   pV = yV ? !(0, dV.v)(yV) : Boolean(JV.layer.close),
+                   hH = (0, wH.z)(AH.root),
+                   tH = hH ? !(0, pH.x)(hH) : Boolean(AH.layer.close),
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5331` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5429) · [Before (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5331)

```diff
-                 EV && (0, WJ.e)(EV) ? YV.push({
+                 WH && (0, fA.d)(WH) ? rH.push({
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5334` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5432) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5334)

```diff
-                 }) : EV && (0, mV.G)(EV) ? YV.push({
+                 }) : WH && (0, wH.I)(WH) ? rH.push({
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5357-L5358` → after: `L5455-L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5455-L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5455-L5456) · [Before (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5357-L5358)

```diff
-                 const qV = QV.b.get("openEverythingMenuName");
-                 return "inGame" === QV.b.get("gameState") && "popup" !== JV.layer.kind && null !== qV && ((0, Qx.k)(qV) ? YV.push(...oU("leaderboard", "controller:menusClose")) : qV !== px.q.LOBBY_LEADERBOARD && YV.push(...oU("leaderboard", "controller:menusLobby"))), YV.push({
+                 const vH = zH.c.get("openEverythingMenuName");
+                 return "inGame" === zH.c.get("gameState") && "popup" !== AH.layer.kind && null !== vH && ((0, zL.n)(vH) ? rH.push(...NS("leaderboard", "controller:menusClose")) : vH !== tL.o.LOBBY_LEADERBOARD && rH.push(...NS("leaderboard", "controller:menusLobby"))), rH.push({
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5364` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5462) · [Before (L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5364)

```diff
-               JV = ((VV, eV) => `${VV.map((VV=>`${VV.glyphs.join("+")}:${VV.labelKey}`)).join("|")}@${eV}`)(eV, xV);
+               AH = ((HH, BH) => `${HH.map((HH=>`${HH.glyphs.join("+")}:${HH.labelKey}`)).join("|")}@${BH}`)(BH, LH);
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5398-L5399` → after: `L5496-L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5496-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5496-L5497) · [Before (L5398-L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5398-L5399)

```diff
-     var HU = xV(1840);
-     const uU = [dV.c, "label", "[data-pad-slider]"].join(","),
+     var dS = LH(1797);
+     const aS = [pH.e, "label", "[data-pad-slider]"].join(","),
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5434` → after: `L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5532) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5434)

```diff
-           })) && RV(xV, VV, eV) ? xV : null
+           })) && lH(LH, HH, BH) ? LH : null
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5443` → after: `L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5541) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5443)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5449` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5547) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5449)

```diff
-           const VV = ZV.c.register({
+           const HH = XH.b.register({
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5458` → after: `L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5556) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5458)

```diff
-               wakePressActs: VV => (0, ZV.g)(VV) || VV === (0, wV.i)("menuConfirm") && (0, mV.K)((0, rV.e)())
+               wakePressActs: HH => (0, XH.e)(HH) || HH === (0, EH.k)("menuConfirm") && (0, wH.K)((0, YH.c)())
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5460` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5558) · [Before (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5460)

```diff
-             eV = (0, xJ.k)((VV => {
+             BH = (0, LA.i)((HH => {
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5464` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5562) · [Before (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5464)

```diff
-             xV = nV.h.subscribe("appManagerUpdated|activeInputDevice", (VV => {
+             LH = CH.k.subscribe("appManagerUpdated|activeInputDevice", (HH => {
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5468` → after: `L5566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5566) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5468)

```diff
-             VV(), eV(), nV.h.unsubscribe(xV), this.deactivate()
+             HH(), BH(), CH.k.unsubscribe(LH), this.deactivate()
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5484` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5582) · [Before (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5484)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.QZ()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.AX()
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5505` → after: `L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5603) · [Before (L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5505)

```diff
-           }, this.QZ())
+           }, this.AX())
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5512` → after: `L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5610) · [Before (L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5512)

```diff
-           const xV = VV.wokeDevice ? (0, rV.e)() : null;
+           const LH = HH.wokeDevice ? (0, YH.c)() : null;
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5514-L5515` → after: `L5612-L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5612-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5612-L5613) · [Before (L5514-L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5514-L5515)

```diff
-           const JV = (0, wV.i)("menuToggleCursor");
-           if (VV.wasPressed(JV)) return ZV.c.consumeButton(JV), void FJ(this.getHandoff(null));
+           const AH = (0, EH.k)("menuToggleCursor");
+           if (HH.wasPressed(AH)) return XH.b.consumeButton(AH), void TA(this.getHandoff(null));
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5517-L5520` → after: `L5615-L5618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5615-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5615-L5618) · [Before (L5517-L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5517-L5520)

```diff
-           const YV = (0, wV.i)("menuConfirm"),
-             UV = (0, wV.i)("menuSecondary");
-           if (VV.wasPressed((0, wV.i)("menuBack"))) return (0, mV.m)(eV.root) || (0, mV.g)(eV.root) || ZJ(), void this.QZ();
-           if (dx(null, VV, eV)) return VV.wasReleased(YV) && this.press && (this.updateHit(!1), this.updateConfirm(VV, YV)), void this.QZ();
+           const rH = (0, EH.k)("menuConfirm"),
+             SH = (0, EH.k)("menuSecondary");
+           if (HH.wasPressed((0, EH.k)("menuBack"))) return (0, wH.l)(BH.root) || (0, wH.f)(BH.root) || XA(), void this.AX();
+           if (pL(null, HH, BH)) return HH.wasReleased(rH) && this.press && (this.updateHit(!1), this.updateConfirm(HH, rH)), void this.AX();
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5532` → after: `L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5630) · [Before (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5532)

```diff
-             pV = (0, vV.i)().moveDeadzone,
+             tH = (0, GH.g)().moveDeadzone,
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5534` → after: `L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5632) · [Before (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5534)

```diff
-               const xV = (0, kV.k)(VV, tV(eV));
+               const LH = (0, uH.f)(HH, PH(BH));
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5540` → after: `L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5638) · [Before (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5540)

```diff
-             if (!QV && !PV(VV.rightStick) && !eV && !xV && !VV.wokeDevice) return void this.QZ();
+             if (!zH && !VH(HH.rightStick) && !BH && !LH && !HH.wokeDevice) return void this.AX();
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5543` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5641) · [Before (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5543)

```diff
-             }, VV.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.QZ()
+             }, HH.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.AX()
```

#### 468. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5552` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5650) · [Before (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5552)

```diff
-             cursorSpeedPercent: (0, vV.i)().cursorSpeed,
+             cursorSpeedPercent: (0, GH.g)().cursorSpeed,
```

#### 469. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5561` → after: `L5659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5659) · [Before (L5561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5561)

```diff
-           (bV || EV || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(bV), this.updateConfirm(VV, YV), this.updateSecondary(VV, UV), this.updateScroll(VV, eV), this.QZ()
+           (QH || WH || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(QH), this.updateConfirm(HH, rH), this.updateSecondary(HH, SH), this.updateScroll(HH, BH), this.AX()
```

#### 470. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5567` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5665) · [Before (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5567)

```diff
-               key: (0, xJ.r)(VV.layer),
+               key: (0, LA.q)(HH.layer),
```

#### 471. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5587` → after: `L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5685) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5587)

```diff
-           const JV = null !== xV && void 0 !== xV ? xV : OJ.pickInitial(eV.root, {
+           const AH = null !== LH && void 0 !== LH ? LH : yA.pickInitial(BH.root, {
```

#### 472. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5592` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5690) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5592)

```diff
-           JV && (this.pendingPageStart = null, this.jumpTo((0, mV.D)(JV)))
+           AH && (this.pendingPageStart = null, this.jumpTo((0, wH.C)(AH)))
```

#### 473. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5602` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5700) · [Before (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5602)

```diff
-             JV = xV && VV.order <= this.layerOrder ? xV : OJ.getLayerStartPoint(VV.root);
+             AH = LH && HH.order <= this.layerOrder ? LH : yA.getLayerStartPoint(HH.root);
```

#### 474. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5609` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5707) · [Before (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5609)

```diff
-             element: null !== (eV = this.interactive) && void 0 !== eV ? eV : this.findDraggedSliderNearby(),
+             element: null !== (BH = this.interactive) && void 0 !== BH ? BH : this.findDraggedSliderNearby(),
```

#### 475. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5620` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5718) · [Before (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5620)

```diff
-           return xV >= eV.top - 40 && xV <= eV.bottom + 40 ? VV : null
+           return LH >= BH.top - 40 && LH <= BH.bottom + 40 ? HH : null
```

#### 476. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5624-L5625` → after: `L5722-L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5722-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5722-L5723) · [Before (L5624-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5624-L5625)

```diff
-           const eV = kV.F.find((eV => VV.wasPressed(eV)));
-           return !!eV && (xV = this.getHandoff(eV), BJ = rJ(xV), bJ = null, jJ.lock(), ZV.c.handOffHeldInput(), !0);
+           const BH = uH.y.find((BH => HH.wasPressed(BH)));
+           return !!BH && (LH = this.getHandoff(BH), MA = YA(LH), QA = null, xA.lock(), XH.b.handOffHeldInput(), !0);
```

#### 477. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5639` → after: `L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5737) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5639)

```diff
-           const xV = (0, vV.i)().cursorMagnetism && !(0, HU.b)(VV) && !VV.closest("[data-pad-slider]"),
+           const LH = (0, GH.g)().cursorMagnetism && !(0, dS.e)(HH) && !HH.closest("[data-pad-slider]"),
```

#### 478. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5657` → after: `L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5755) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5657)

```diff
-             })(xV) ? xV : null;
+             })(LH) ? LH : null;
```

#### 479. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5662-L5663` → after: `L5760-L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5760-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5760-L5761) · [Before (L5662-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5662-L5663)

```diff
-               const VV = null !== (xV = null === (JV = eV.parentElement) || void 0 === JV ? void 0 : JV.closest("[data-pad-focusable]")) && void 0 !== xV ? xV : eV;
-               return (0, dV.v)(VV) ? {
+               const HH = null !== (LH = null === (AH = BH.parentElement) || void 0 === AH ? void 0 : AH.closest("[data-pad-focusable]")) && void 0 !== LH ? LH : BH;
+               return (0, pH.x)(HH) ? {
```

#### 480. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5697` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5795) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5697)

```diff
-           if (!VV || (0, mV.G)(VV)) return {
+           if (!HH || (0, wH.I)(HH)) return {
```

#### 481. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5700` → after: `L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5798) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5700)

```diff
-           const eV = (0, WJ.e)(VV),
+           const BH = (0, fA.d)(HH),
```

#### 482. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5706` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5804) · [Before (L5706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5706)

```diff
-           } : ((0, mV.u)(VV, this.getPoint()), {
+           } : ((0, wH.t)(HH, this.getPoint()), {
```

#### 483. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5735-L5736` → after: `L5833-L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5833-L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5833-L5834) · [Before (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5735-L5736)

```diff
-             const VV = null !== UV && void 0 !== UV ? UV : xV.target.isConnected ? xV.target : null;
-             VV && (0, mV.y)(VV, YV);
+             const HH = null !== SH && void 0 !== SH ? SH : LH.target.isConnected ? LH.target : null;
+             HH && (0, wH.v)(HH, rH);
```

#### 484. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5742` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5840) · [Before (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5742)

```diff
-             eV && (OJ.noteCursorActivation(eV), (0, BV.f)(eV, new MouseEvent("click", (0, mV.O)(YV, 0, 0))), (0, mV.k)(eV), (0, mV.M)(eV) && (0, mV.L)(eV))
+             BH && (yA.noteCursorActivation(BH), (0, MH.h)(BH, new MouseEvent("click", (0, wH.U)(rH, 0, 0))), (0, wH.h)(BH), (0, wH.S)(BH) && (0, wH.O)(BH))
```

#### 485. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5747-L5748` → after: `L5845-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846) · [Before (L5747-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5747-L5748)

```diff
-           const JV = null !== (VV = null === (eV = this.hit) || void 0 === eV ? void 0 : eV.closest("[data-pad-repeat]")) && void 0 !== VV ? VV : null;
-           this.repeatStop = JV, this.repeatKey = null !== (xV = null === JV || void 0 === JV ? void 0 : JV.getAttribute("data-pad-repeat")) && void 0 !== xV ? xV : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           const AH = null !== (HH = null === (BH = this.hit) || void 0 === BH ? void 0 : BH.closest("[data-pad-repeat]")) && void 0 !== HH ? HH : null;
+           this.repeatStop = AH, this.repeatKey = null !== (LH = null === AH || void 0 === AH ? void 0 : AH.getAttribute("data-pad-repeat")) && void 0 !== LH ? LH : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 486. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5754` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5852) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5754)

```diff
-           VV.isConnected && !(0, dV.v)(VV) && VV.getAttribute("data-pad-repeat") === this.repeatKey && eV && VV.contains(eV) ? VV.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, OJ.noteCursorActivation(VV), (0, BV.f … [truncated]
+           HH.isConnected && !(0, pH.x)(HH) && HH.getAttribute("data-pad-repeat") === this.repeatKey && BH && HH.contains(BH) ? HH.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, yA.noteCursorActivation(HH), (0, MH.h … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5760` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5858) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5760)

```diff
-           "slider" === VV.kind && VV.adjuster.endDrag(), "pointer" === VV.kind && VV.target.isConnected && (0, mV.y)(VV.target, this.getPoint())
+           "slider" === HH.kind && HH.adjuster.endDrag(), "pointer" === HH.kind && HH.target.isConnected && (0, wH.v)(HH.target, this.getPoint())
```

#### 488. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5766` → after: `L5864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5864) · [Before (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5766)

```diff
-           VV.wasPressed(eV) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !VV.isHeld(eV) && (this.secondaryArmed = !1, VV.wasReleased(eV) && this.hit && (0, mV.q)(this.hit, this.getPoint(), 2))
+           HH.wasPressed(BH) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !HH.isHeld(BH) && (this.secondaryArmed = !1, HH.wasReleased(BH) && this.hit && (0, wH.n)(this.hit, this.getPoint(), 2))
```

#### 489. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5814` → after: `L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5912) · [Before (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5814)

```diff
-           eV = (0, rV.w)();
+           BH = (0, YH.s)();
```

#### 490. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5834` → after: `L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5932) · [Before (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5834)

```diff
-                 return null !== eV && void 0 !== eV && eV.isConnected ? eV : null
+                 return null !== BH && void 0 !== BH && BH.isConnected ? BH : null
```

#### 491. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5837` → after: `L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5935) · [Before (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5837)

```diff
-               const pV = null !== (eV = null === YV || void 0 === YV ? void 0 : YV.closest("[data-pad-reticle-box]")) && void 0 !== eV ? eV : YV;
+               const tH = null !== (BH = null === rH || void 0 === rH ? void 0 : rH.closest("[data-pad-reticle-box]")) && void 0 !== BH ? BH : rH;
```

#### 492. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5872` → after: `L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L5970) · [Before (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5872)

```diff
-         VV.style.transform = `translate3d(${eV.x}px, ${eV.y}px, 0)`, VV.classList.toggle("Visible", eV.visible), VV.classList.toggle("Pressed", eV.pressed)
+         HH.style.transform = `translate3d(${BH.x}px, ${BH.y}px, 0)`, HH.classList.toggle("Visible", BH.visible), HH.classList.toggle("Pressed", BH.pressed)
```

#### 493. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5914` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6003) · [Before (L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5914)

```diff
-             return (0, xJ.o)({
+             return (0, LA.m)({
```

#### 494. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5925` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6014) · [Before (L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5925)

```diff
-                     return null !== (xV = [...VV.querySelectorAll("button")].find((VV => !VV.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== xV ? xV : null
+                     return null !== (LH = [...HH.querySelectorAll("button")].find((HH => !HH.matches(".fc-cta-consent")))) && void 0 !== LH ? LH : null
```

#### 495. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5943` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6032) · [Before (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5943)

```diff
-           xV = yV.f.onFrame((() => {
+           LH = hH.i.onFrame((() => {
```

#### 496. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5957` → after: `L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6046) · [Before (L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5957)

```diff
-           const VV = (0, BV.l)(document.body),
+           const HH = (0, MH.n)(document.body),
```

#### 497. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5967` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6056) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5967)

```diff
-         } = (0, vV.p)(), eV = (0, iU.E)() && VV;
+         } = (0, GH.n)(), BH = (0, eS.y)() && HH;
```

#### 498. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5976-L5979` → after: `L6065-L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6065-L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6065-L6068) · [Before (L5976-L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5976-L5979)

```diff
-     var ny = xV(9408),
-       wy = xV(9422),
-       Zy = xV(9416);
-     xV(9424);
+     var zh = LH(9484),
+       Ch = LH(9509),
+       Eh = LH(9499);
+     LH(9511);
```

#### 499. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5988` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6077) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5988)

```diff
-           pV((0, Zy.D)(VV, eV, yV.current))
+           tH((0, Eh.F)(HH, BH, hH.current))
```

#### 500. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5990-L5992` → after: `L6079-L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6079-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6079-L6081) · [Before (L5990-L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5990-L5992)

```diff
-         (0, CV.useLayoutEffect)((() => (eV(xV), (0, CU.v)(VV, xV), nV.h.QZ(CU.n), () => {
-           eV(!1), (0, CU.v)(VV, !1), nV.h.QZ(CU.n)
-         })), [xV, VV, eV]), (0, EY.g)("appManagerUpdated|activeInputDevice", (VV => {
+         (0, qH.useLayoutEffect)((() => (BH(LH), (0, qS.o)(HH, LH), CH.k.AX(qS.i), () => {
+           BH(!1), (0, qS.o)(HH, !1), CH.k.AX(qS.i)
+         })), [LH, HH, BH]), (0, Wr.d)("appManagerUpdated|activeInputDevice", (HH => {
```

#### 501. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5994` → after: `L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6083) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5994)

```diff
-         })), (0, EY.g)("appManagerUpdated|gameState", (VV => {
+         })), (0, Wr.d)("appManagerUpdated|gameState", (HH => {
```

#### 502. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5998` → after: `L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6087) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L5998)

```diff
-           (0, Qx.n)() && QV()
+           (0, zL.t)() && zH()
```

#### 503. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6000` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6089) · [Before (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6000)

```diff
-         return (0, EY.g)("appManagerUpdated|openEverythingMenuName", vV), (0, EY.g)("appManagerUpdated|openInGameMenuName", vV), {
+         return (0, Wr.d)("appManagerUpdated|openEverythingMenuName", GH), (0, Wr.d)("appManagerUpdated|openInGameMenuName", GH), {
```

#### 504. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6026-L6027` → after: `L6115-L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6115-L6116) · [Before (L6026-L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6026-L6027)

```diff
-               width: 2 * Zy.q + "rem",
-               height: 2 * Zy.q + "rem"
+               width: 2 * Eh.u + "rem",
+               height: 2 * Eh.u + "rem"
```

#### 505. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6031` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6120) · [Before (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6031)

```diff
-               viewBox: `0 0 ${Zy.l} ${Zy.l}`,
+               viewBox: `0 0 ${Eh.p} ${Eh.p}`,
```

#### 506. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6033` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6122) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6033)

```diff
-                 d: (0, Zy.s)(VV, xV, Zy.e, Zy.g, Zy.h),
+                 d: (0, Eh.w)(HH, LH, Eh.i, Eh.m, Eh.n),
```

#### 507. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6040-L6042` → after: `L6129-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6129-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6129-L6131) · [Before (L6040-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6040-L6042)

```diff
-                 cx: Zy.e,
-                 cy: Zy.e,
-                 r: Zy.h
+                 cx: Eh.i,
+                 cy: Eh.i,
+                 r: Eh.n
```

#### 508. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6045-L6047` → after: `L6134-L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6134-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6134-L6136) · [Before (L6045-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6045-L6047)

```diff
-                 cx: Zy.e,
-                 cy: Zy.e,
-                 r: Zy.g
+                 cx: Eh.i,
+                 cy: Eh.i,
+                 r: Eh.m
```

#### 509. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6050` → after: `L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6139) · [Before (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6050)

```diff
-                 d: (0, Zy.s)(JV, xV, Zy.e, Zy.g, Zy.h)
+                 d: (0, Eh.w)(AH, LH, Eh.i, Eh.m, Eh.n)
```

#### 510. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6053` → after: `L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6142) · [Before (L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6053)

```diff
-               const eV = (0, Zy.A)(VV, xV);
+               const BH = (0, Eh.C)(HH, LH);
```

#### 511. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6059-L6060` → after: `L6148-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6148-L6149) · [Before (L6059-L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6059-L6060)

```diff
-                   left: `calc(50% + ${Zy.d*Math.cos(eV)}rem)`,
-                   top: `calc(50% + ${Zy.d*Math.sin(eV)}rem)`
+                   left: `calc(50% + ${Eh.e*Math.cos(BH)}rem)`,
+                   top: `calc(50% + ${Eh.e*Math.sin(BH)}rem)`
```

#### 512. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6076-L6079` → after: `L6165-L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6165-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6165-L6168) · [Before (L6076-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6076-L6079)

```diff
-         } = (0, YV.A)(), eV = vy("chat", Gx.s), xV = (0, CV.useMemo)((() => wU.map((eV => VV(eV)))), [VV]);
-         return (0, EY.g)(Gx.o, (() => {
-           eV.open || (0, ny.e)() || (0, wy.r)() || "inGame" !== QV.b.get("gameState") || (0, Qx.n)() || !(0, Mx.e)() || eV.show()
-         })), (0, EY.g)(Gx.f, (VV => {
+         } = (0, rH.B)(), BH = Xh("chat", IL.q), LH = (0, qH.useMemo)((() => ES.map((BH => HH(BH)))), [HH]);
+         return (0, Wr.d)(IL.p, (() => {
+           BH.open || (0, zh.g)() || (0, Ch.r)() || "inGame" !== zH.c.get("gameState") || (0, zL.t)() || !(0, mL.e)() || BH.show()
+         })), (0, Wr.d)(IL.i, (HH => {
```

#### 513. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6081` → after: `L6170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6170) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6081)

```diff
-         })), (0, EY.g)(Gx.k, (() => {
+         })), (0, Wr.d)(IL.o, (() => {
```

#### 514. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6086` → after: `L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6175) · [Before (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6086)

```diff
-         })), (0, EY.g)(Gx.g, eV.close), eV.open ? (0, cV.jsx)(ry, {
+         })), (0, Wr.d)(IL.k, BH.close), BH.open ? (0, RH.jsx)(Gh, {
```

#### 515. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6098-L6101` → after: `L6187-L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6187-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6187-L6190) · [Before (L6098-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6098-L6101)

```diff
-         } = (0, YV.A)(), eV = vy("actionButton", wy.s), [xV, JV] = (0, CV.useState)([]);
-         if ((0, EY.g)(wy.j, (VV => {
-             eV.open || (0, ny.e)() || (0, Gx.c)() || "inGame" !== QV.b.get("gameState") || (0, Qx.n)() || (JV(VV), eV.show())
-           })), (0, EY.g)(wy.d, (VV => {
+         } = (0, rH.B)(), BH = Xh("actionButton", Ch.t), [LH, AH] = (0, qH.useState)([]);
+         if ((0, Wr.d)(Ch.l, (HH => {
+             BH.open || (0, zh.g)() || (0, IL.e)() || "inGame" !== zH.c.get("gameState") || (0, zL.t)() || (AH(HH), BH.show())
+           })), (0, Wr.d)(Ch.d, (HH => {
```

#### 516. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6103` → after: `L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6192) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6103)

```diff
-           })), (0, EY.g)(wy.g, (() => {
+           })), (0, Wr.d)(Ch.i, (() => {
```

#### 517. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6106-L6107` → after: `L6195-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6195-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6195-L6196) · [Before (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6106-L6107)

```diff
-             eV.close(), null !== VV && nV.h.QZ(wy.n, xV[VV])
-           })), (0, EY.g)(wy.f, eV.close), !eV.open) return null;
+             BH.close(), null !== HH && CH.k.AX(Ch.p, LH[HH])
+           })), (0, Wr.d)(Ch.f, BH.close), !BH.open) return null;
```

#### 518. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6125` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6214) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6125)

```diff
-     var By = xV(99);
+     var Wh = LH(81);
```

#### 519. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6128-L6129` → after: `L6217-L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6217-L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6217-L6218) · [Before (L6128-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6128-L6129)

```diff
-         const xV = (0, BV.l)(document.getElementById("root")),
-           JV = (0, rV.h)(),
+         const LH = (0, MH.n)(document.getElementById("root")),
+           AH = (0, YH.e)(),
```

#### 520. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6131` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6220) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6131)

```diff
-             const VV = [nV.h.subscribe(eY.d, (() => {
+             const HH = [CH.k.subscribe(Br.g, (() => {
```

#### 521. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6133` → after: `L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6222) · [Before (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6133)

```diff
-               })), nV.h.subscribe("damagedByOtherPlayer", (() => {
+               })), CH.k.subscribe("damagedByOtherPlayer", (() => {
```

#### 522. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6135` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6224) · [Before (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6135)

```diff
-               })), nV.h.subscribe("yourAttackHit", (VV => {
+               })), CH.k.subscribe("yourAttackHit", (HH => {
```

#### 523. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6141` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6230) · [Before (L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6141)

```diff
-               eV = yV.f.onActivePadChanged((VV => {
+               BH = hH.i.onActivePadChanged((HH => {
```

#### 524. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6145` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6234) · [Before (L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6145)

```diff
-               for (const eV of VV) nV.h.unsubscribe(eV);
+               for (const BH of HH) CH.k.unsubscribe(BH);
```

#### 525. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6151` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6240) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6151)

```diff
-               getVisitId: wY.f,
+               getVisitId: Er.c,
```

#### 526. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6154-L6155` → after: `L6243-L6244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6243-L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6243-L6244) · [Before (L6154-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6154-L6155)

```diff
-                 const VV = nY.q.getItem(vY);
-                 return "string" === typeof VV ? VV : null
+                 const HH = Cr.f.getItem(Gr);
+                 return "string" === typeof HH ? HH : null
```

#### 527. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6158` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6247) · [Before (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6158)

```diff
-                 nY.q.setItem(vY, VV)
+                 Cr.f.setItem(Gr, HH)
```

#### 528. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6163` → after: `L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6252) · [Before (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6163)

```diff
-                 return null !== (VV = null === (eV = yV.f.getActivePad()) || void 0 === eV ? void 0 : eV.family) && void 0 !== VV ? VV : null
+                 return null !== (HH = null === (BH = hH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : null
```

#### 529. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6166-L6167` → after: `L6255-L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6255-L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6255-L6256) · [Before (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6166-L6167)

```diff
-               getInputType: QY.c,
-               EZ: pY.logControllerUsedToGtag
+               getInputType: zr.d,
+               XX: tr.logControllerUsedToGtag
```

#### 530. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6176` → after: `L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6265) · [Before (L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6176)

```diff
-               YV = nV.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               rH = CH.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 531. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6179` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6268) · [Before (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6179)

```diff
-               UV = (0, wY.n)((() => {
+               SH = (0, Er.k)((() => {
```

#### 532. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6183` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6272) · [Before (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6183)

```diff
-               nV.h.unsubscribe(YV), UV(), null !== xV && clearTimeout(xV)
+               CH.k.unsubscribe(rH), SH(), null !== LH && clearTimeout(LH)
```

#### 533. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6186-L6188` → after: `L6275-L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6275-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6275-L6277) · [Before (L6186-L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6186-L6188)

```diff
-           pV = yV.f.onFrame(((VV, eV, xV) => {
-             const JV = (0, rV.l)(VV, xV);
-             ZV.c.dispatch(VV, eV, JV)
+           tH = hH.i.onFrame(((HH, BH, LH) => {
+             const AH = (0, YH.o)(HH, LH);
+             XH.b.dispatch(HH, BH, AH)
```

#### 534. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6190-L6191` → after: `L6279-L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6279-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6279-L6280) · [Before (L6190-L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6190-L6191)

```diff
-         let wV = null !== (VV = null === (eV = yV.f.getActivePad()) || void 0 === eV ? void 0 : eV.family) && void 0 !== VV ? VV : null;
-         const kV = yV.f.onActivePadChanged((VV => {
+         let EH = null !== (HH = null === (BH = hH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : null;
+         const uH = hH.i.onActivePadChanged((HH => {
```

#### 535. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6193-L6194` → after: `L6282-L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6282-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6282-L6283) · [Before (L6193-L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6193-L6194)

```diff
-             (ZV.c.reset(), (0, rV.r)(), nV.h.QZ(yV.c, VV), (null !== (eV = null === VV || void 0 === VV ? void 0 : VV.family) && void 0 !== eV ? eV : null) !== wV) && (wV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.family) && void 0 !== xV ? xV : null, nV.h.QZ(vV. … [truncated]
-             !VV && (0, rV.j)() && (0, rV.u)(QV.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (XH.b.reset(), (0, YH.q)(), CH.k.AX(hH.e, HH), (null !== (BH = null === HH || void 0 === HH ? void 0 : HH.family) && void 0 !== BH ? BH : null) !== EH) && (EH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.family) && void 0 !== LH ? LH : null, CH.k.AX(GH. … [truncated]
+             !HH && (0, YH.j)() && (0, YH.r)(zH.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 536. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6197` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6286) · [Before (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6197)

```diff
-             "visible" !== document.visibilityState && ZV.c.clear()
+             "visible" !== document.visibilityState && XH.b.clear()
```

#### 537. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6200` → after: `L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6289) · [Before (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6200)

```diff
-             ZV.c.clear()
+             XH.b.clear()
```

#### 538. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6202` → after: `L6291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6291) · [Before (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6202)

```diff
-         document.addEventListener("visibilitychange", bV), window.addEventListener("blur", EV), yV.f.start(), (0, yY.j)();
+         document.addEventListener("visibilitychange", QH), window.addEventListener("blur", WH), hH.i.start(), (0, hr.j)();
```

#### 539. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6205` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6294) · [Before (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6205)

```diff
-           xV(), JV(), YV(), UV(), pV(), kV(), document.removeEventListener("visibilitychange", bV), window.removeEventListener("blur", EV), yV.f.stop(), null === jV || void 0 === jV || jV()
+           LH(), AH(), rH(), SH(), tH(), uH(), document.removeEventListener("visibilitychange", QH), window.removeEventListener("blur", WH), hH.i.stop(), null === xH || void 0 === xH || xH()
```

#### 540. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6212-L6215` → after: `L6301-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6301-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6301-L6304) · [Before (L6212-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6212-L6215)

```diff
-     var ty = xV(8816),
-       Fy = xV(9428);
-     const Ty = new Set(yY.i),
-       Py = VV => `${Fy.m}${(0,vV.j)()}/${VV}`,
+     var vh = LH(8882),
+       Ph = LH(9520);
+     const Th = new Set(hr.g),
+       Uh = HH => `${Ph.j}${(0,GH.i)()}/${HH}`,
```

#### 541. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6217-L6219` → after: `L6306-L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6306-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6306-L6308) · [Before (L6217-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6217-L6219)

```diff
-         if (!(0, Fy.i)(VV)) return null;
-         const [eV, xV] = VV.slice(Fy.m.length).split("/");
-         return (0, ty.h)(eV) && Ty.has(xV) ? (0, yY.g)(eV, xV) : null
+         if (!(0, Ph.h)(HH)) return null;
+         const [BH, LH] = HH.slice(Ph.j.length).split("/");
+         return (0, vh.h)(BH) && Th.has(LH) ? (0, hr.d)(BH, LH) : null
```

#### 542. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6221` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6310) · [Before (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6221)

```diff
-     var Ny = xV(9435);
+     var Oh = LH(9522);
```

#### 543. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6225` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6314) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6225)

```diff
-         } = (0, YV.A)(), eV = (0, rV.w)(), {
+         } = (0, rH.B)(), BH = (0, YH.s)(), {
```

#### 544. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6228` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6317) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6228)

```diff
-         } = (0, QV.l)(["gameState", "isUiHidden"]), {
+         } = (0, zH.m)(["gameState", "isUiHidden"]), {
```

#### 545. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6231-L6232` → after: `L6320-L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6320-L6321) · [Before (L6231-L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6231-L6232)

```diff
-         } = (0, vV.p)(), [pV, nV] = (0, CV.useState)(Ny.d);
-         return (0, EY.g)(WY.o, nV), eV && !JV && "inGame" === xV && pV ? (0, cV.jsxs)("div", {
+         } = (0, GH.n)(), [tH, CH] = (0, qH.useState)(Oh.d);
+         return (0, Wr.d)(fr.o, CH), BH && !AH && "inGame" === LH && tH ? (0, RH.jsxs)("div", {
```

#### 546. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6235` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6324) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6235)

```diff
-             glyph: (0, wV.i)("toggle" === yV ? "sneak" : "sneakToggle")
+             glyph: (0, EH.k)("toggle" === hH ? "sneak" : "sneakToggle")
```

#### 547. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6285` → after: `L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6374) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6285)

```diff
-               UV.style.transform = `translate3d(${Math.round(yV)}px, ${Math.round(pV)}px, 0)`, UV.style.visibility = "visible"
+               SH.style.transform = `translate3d(${Math.round(hH)}px, ${Math.round(tH)}px, 0)`, SH.style.visibility = "visible"
```

#### 548. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6302-L6306` → after: `L6391-L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6391-L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6391-L6395) · [Before (L6302-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6302-L6306)

```diff
-     var Gy = xV(1414),
-       Wy = xV(9438),
-       Ry = xV(1551),
-       gy = xV(9445),
-       Dy = xV(9453);
+     var oh = LH(1315),
+       Ih = LH(9528),
+       fh = LH(1455),
+       lh = LH(9537),
+       Kh = LH(9540);
```

#### 549. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6328` → after: `L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6417) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6328)

```diff
-         } = (0, YV.A)(), eV = (0, rV.w)(), xV = (0, Wy.c)(), JV = (0, oY.j)("_tasks"), UV = (0, oY.j)("_availableLeaderboards");
+         } = (0, rH.B)(), BH = (0, YH.s)(), LH = (0, Ih.b)(), AH = (0, Nr.j)("_tasks"), SH = (0, Nr.j)("_availableLeaderboards");
```

#### 550. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6349` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6438) · [Before (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6349)

```diff
-             } = iy[eV], YV = "leave" === eV ? Ry.E : Ry.f;
+             } = ch[BH], rH = "leave" === BH ? fh.O : fh.i;
```

#### 551. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6356-L6357` → after: `L6445-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6445-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6445-L6446) · [Before (L6356-L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6356-L6357)

```diff
-                       return nV.h.QZ(Dy.h), void QV.b.set({
-                         openEverythingMenuName: px.q.SHOP
+                       return CH.k.AX(Kh.n), void zH.c.set({
+                         openEverythingMenuName: tL.o.SHOP
```

#### 552. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6360` → after: `L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6449) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6360)

```diff
-                       return void nV.h.QZ("toggleMenu", "retentionFeatures");
+                       return void CH.k.AX("toggleMenu", "retentionFeatures");
```

#### 553. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6362` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6451) · [Before (L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6362)

```diff
-                       return void nV.h.QZ("toggleMenu", "inviteLink");
+                       return void CH.k.AX("toggleMenu", "inviteLink");
```

#### 554. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6370` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6459) · [Before (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6370)

```diff
-                 children: [(0, cV.jsx)(Gy.b, {
+                 children: [(0, RH.jsx)(oh.c, {
```

#### 555. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6380-L6381` → after: `L6469-L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6469-L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6469-L6470) · [Before (L6380-L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6380-L6381)

```diff
-     var ay = xV(2116);
-     const oy = kV.C,
+     var qh = LH(2064);
+     const gh = uH.v,
```

#### 556. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6386` → after: `L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6475) · [Before (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6386)

```diff
-         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(kV.X).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
+         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(uH.Q).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
```

#### 557. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6411` → after: `L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6500) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6411)

```diff
-           continues: (0, rV.i)(VV)
+           continues: (0, YH.g)(HH)
```

#### 558. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6424-L6425` → after: `L6513-L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6513-L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6513-L6514) · [Before (L6424-L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6424-L6425)

```diff
-         const YV = (0, kV.t)(VV.values, this.previousHeld),
-           UV = null === xV ? -1 : (0, kV.n)(xV),
+         const rH = (0, uH.o)(HH.values, this.previousHeld),
+           SH = null === LH ? -1 : (0, uH.i)(LH),
```

#### 559. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6446` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6535) · [Before (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6446)

```diff
-     const Ly = new Set([...ay.k, ...ay.z]),
+     const nh = new Set([...qh.m, ...qh.G]),
```

#### 560. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6450` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6539) · [Before (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6450)

```diff
-       })(VV, ay.t, Ly),
+       })(HH, qh.w, nh),
```

#### 561. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6458-L6459` → after: `L6547-L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6547-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6547-L6548) · [Before (L6458-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6458-L6459)

```diff
-             } = JV.onKeyDown(VV, !(0, rV.y)(VV) || (0, VY.l)() || (0, Qx.n)(), fy(VV.code));
-             xV && (VV.stopImmediatePropagation(), hy(VV) && VV.preventDefault()), YV && ((0, rV.u)("keyboardMouse"), eV())
+             } = AH.onKeyDown(HH, !(0, YH.z)(HH) || (0, Hr.g)() || (0, zL.t)(), Fh(HH.code));
+             LH && (HH.stopImmediatePropagation(), Rh(HH) && HH.preventDefault()), rH && ((0, YH.r)("keyboardMouse"), BH())
```

#### 562. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6468-L6469` → after: `L6557-L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6557-L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6557-L6558) · [Before (L6468-L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6468-L6469)

```diff
-         const QV = yV.f.onFrame((VV => {
-             const YV = ZV.c.getActiveConsumerName(),
+         const zH = hH.i.onFrame((HH => {
+             const rH = XH.b.getActiveConsumerName(),
```

#### 563. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6471` → after: `L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6560) · [Before (L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6471)

```diff
-               yV = UV ? (0, wV.i)("menuBack") : null,
+               hH = SH ? (0, EH.k)("menuBack") : null,
```

#### 564. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6477` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6566) · [Before (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6477)

```diff
-               } = JV.onPadFrame(VV, pV, yV, (0, rV.k)(VV));
+               } = AH.onPadFrame(HH, tH, hH, (0, YH.n)(HH));
```

#### 565. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6479-L6480` → after: `L6568-L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6568-L6569) · [Before (L6479-L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6479-L6480)

```diff
-               const VV = (0, vV.i)().swapSticks ? "right" : "left";
-               ZV.c.consumeAllHeld(JV.consumeLeavesMoveStick() ? VV : null)
+               const HH = (0, GH.g)().swapSticks ? "right" : "left";
+               XH.b.consumeAllHeld(AH.consumeLeavesMoveStick() ? HH : null)
```

#### 566. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6484` → after: `L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6573) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6484)

```diff
-           nV = (0, VY.o)(`pressToContinue:${VV}`, (() => JV.blocksGameplay()));
+           CH = (0, Hr.h)(`pressToContinue:${HH}`, (() => AH.blocksGameplay()));
```

#### 567. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6494-L6497` → after: `L6583-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6583-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6583-L6586) · [Before (L6494-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6494-L6497)

```diff
-     var Ky = xV(5500),
-       Hy = xV(3872),
-       uy = xV(3551),
-       sy = xV(8825);
+     var wh = LH(5478),
+       Zh = LH(3799),
+       dh = LH(3473),
+       ah = LH(8889);
```

#### 568. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6517` → after: `L6606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6606) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6517)

```diff
-         } = (0, YV.A)();
+         } = (0, rH.B)();
```

#### 569. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6531` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6620) · [Before (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6531)

```diff
-             }), (0, cV.jsx)(uy.c, {
+             }), (0, RH.jsx)(dh.b, {
```

#### 570. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6551-L6552` → after: `L6640-L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6640-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6640-L6641) · [Before (L6551-L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6551-L6552)

```diff
-         const UV = (0, vV.p)();
-         return (0, cV.jsx)(Ky.m, {
+         const SH = (0, GH.n)();
+         return (0, RH.jsx)(wh.f, {
```

#### 571. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6561-L6562` → after: `L6650-L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6650-L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6650-L6651) · [Before (L6561-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6561-L6562)

```diff
-             (0, vV.n)({
-               [eV]: (0, sy.w)(VV, JV)
+             (0, GH.k)({
+               [BH]: (0, ah.t)(HH, AH)
```

#### 572. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6567-L6568` → after: `L6656-L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6656-L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6656-L6657) · [Before (L6567-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6567-L6568)

```diff
-     var Oy = xV(9462),
-       Vp = xV(9467);
+     var ph = LH(9543),
+       yh = LH(9550);
```

#### 573. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6571` → after: `L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6660) · [Before (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6571)

```diff
-         const [eV] = [...VV.controllers].sort(((VV, eV) => Vp.q[VV] - Vp.q[eV]));
+         const [BH] = [...HH.controllers].sort(((HH, BH) => yh.r[HH] - yh.r[BH]));
```

#### 574. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6575` → after: `L6664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6664) · [Before (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6575)

```diff
-         (0, Oy.c)().allowPhoneMotion().catch((eV => {
+         (0, ph.d)().allowPhoneMotion().catch((BH => {
```

#### 575. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6591` → after: `L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6680) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6591)

```diff
-         } = (0, YV.A)(), [JV, UV] = (0, CV.useState)(null), yV = `${eV.controllers.join(",")}|${eV.phoneMotion}`;
+         } = (0, rH.B)(), [AH, SH] = (0, qH.useState)(null), hH = `${BH.controllers.join(",")}|${BH.phoneMotion}`;
```

#### 576. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6596` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6685) · [Before (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6596)

```diff
-           (0, Oy.c)().connectController().then((VV => {
+           (0, ph.d)().connectController().then((HH => {
```

#### 577. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6613` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6702) · [Before (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6613)

```diff
-               }), (0, cV.jsx)(Ry.f, {
+               }), (0, RH.jsx)(fh.i, {
```

#### 578. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6627` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6716) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6627)

```diff
-             }), (0, cV.jsx)(Ry.f, {
+             }), (0, RH.jsx)(fh.i, {
```

#### 579. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6646` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6735) · [Before (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6646)

```diff
-         } = (0, YV.A)(), eV = (0, vV.p)(), xV = (0, Oy.e)(), JV = (0, rV.x)(), UV = !xV.hidSupported && xV.phoneSupported && !xV.padConnected, yV = (xV.hidSupported || xV.phoneSupported) && !UV, pV = (0, wV.i)("pause");
+         } = (0, rH.B)(), BH = (0, GH.n)(), LH = (0, ph.f)(), AH = (0, YH.v)(), SH = !LH.hidSupported && LH.phoneSupported && !LH.padConnected, hH = (LH.hidSupported || LH.phoneSupported) && !SH, tH = (0, EH.k)("pause");
```

#### 580. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6656` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6745) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6656)

```diff
-           }), yV && (0, cV.jsx)(Ky.e, {
+           }), hH && (0, RH.jsx)(wh.c, {
```

#### 581. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6661` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6750) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6661)

```diff
-               (0, vV.n)({
+               (0, GH.k)({
```

#### 582. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6666` → after: `L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6755) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6666)

```diff
-               const YV = (0, Oy.c)(),
+               const rH = (0, ph.d)(),
```

#### 583. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6682-L6683` → after: `L6771-L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6771-L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6771-L6772) · [Before (L6682-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6682-L6683)

```diff
-               range: sy.R,
-               format: sy.H
+               range: ah.L,
+               format: ah.E
```

#### 584. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6686` → after: `L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6775) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6686)

```diff
-               hint: "aiming" === eV.gyroActivation && (0, cV.jsx)(Hy.e, {
+               hint: "aiming" === BH.gyroActivation && (0, RH.jsx)(Zh.c, {
```

#### 585. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6688` → after: `L6777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6777) · [Before (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6688)

```diff
-                   button: Hy.g
+                   button: Zh.e
```

#### 586. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6690` → after: `L6779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6779) · [Before (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6690)

```diff
-                 glyph: (0, wV.i)("use")
+                 glyph: (0, EH.k)("use")
```

#### 587. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6692` → after: `L6781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6781) · [Before (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6692)

```diff
-               options: sy.O,
+               options: ah.J,
```

#### 588. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6695` → after: `L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6784) · [Before (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6695)

```diff
-                 (0, vV.n)({
+                 (0, GH.k)({
```

#### 589. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6702` → after: `L6791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6791) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6702)

```diff
-               options: sy.t.filter((VV => VV !== pV || VV === eV.gyroButton)).map((VV => ({
+               options: ah.q.filter((HH => HH !== tH || HH === BH.gyroButton)).map((HH => ({
```

#### 590. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6708` → after: `L6797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6797) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6708)

```diff
-                 (0, vV.n)({
+                 (0, GH.k)({
```

#### 591. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6716` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6805) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6716)

```diff
-     var pp = xV(1976);
+     var ht = LH(1922);
```

#### 592. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6720` → after: `L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6809) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6720)

```diff
-       } = (0, YV.A)(), eV = (0, vV.p)(), xV = (0, rV.x)();
+       } = (0, rH.B)(), BH = (0, GH.n)(), LH = (0, YH.v)();
```

#### 593. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6724` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6813) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6724)

```diff
-         }), (0, cV.jsx)(Ky.e, {
+         }), (0, RH.jsx)(wh.c, {
```

#### 594. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6726` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6815) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6726)

```diff
-           checked: (0, wV.E)(eV.swapConfirmBack, xV),
+           checked: (0, EH.L)(BH.swapConfirmBack, LH),
```

#### 595. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6728-L6730` → after: `L6817-L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6817-L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6817-L6819) · [Before (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6728-L6730)

```diff
-             (0, vV.n)({
-               swapConfirmBack: VV === (0, wV.E)(null, xV) ? null : VV
-             }), pp.e.showMessage({
+             (0, GH.k)({
+               swapConfirmBack: HH === (0, EH.L)(null, LH) ? null : HH
+             }), ht.h.showMessage({
```

#### 596. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6738` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6827) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6738)

```diff
-           options: sy.r,
+           options: ah.n,
```

#### 597. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6741` → after: `L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6830) · [Before (L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6741)

```diff
-             (0, vV.n)({
+             (0, GH.k)({
```

#### 598. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6748` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6837) · [Before (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6748)

```diff
-           options: sy.qb,
+           options: ah.sb,
```

#### 599. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6751` → after: `L6840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6840) · [Before (L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6751)

```diff
-             (0, vV.n)({
+             (0, GH.k)({
```

#### 600. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6758` → after: `L6847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6847) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6758)

```diff
-           options: sy.D,
+           options: ah.A,
```

#### 601. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6761` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6850) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6761)

```diff
-             (0, vV.n)({
+             (0, GH.k)({
```

#### 602. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6768` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6857) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6768)

```diff
-           options: sy.o,
+           options: ah.k,
```

#### 603. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6771` → after: `L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6860) · [Before (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6771)

```diff
-             (0, vV.n)({
+             (0, GH.k)({
```

#### 604. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6775` → after: `L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6864) · [Before (L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6775)

```diff
-         }), (0, cV.jsx)(Ky.e, {
+         }), (0, RH.jsx)(wh.c, {
```

#### 605. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6779` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/controller.js#L6868) · [Before (L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/controller.js#L6779)

```diff
-             (0, vV.n)({
+             (0, GH.k)({
```
