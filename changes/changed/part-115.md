# Changed — Bundle Modifications Report (Part 115 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `115 / 142` (**422** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 114](part-114.md) · [Part 116 →](part-116.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1012 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 201. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2607` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2511) · [Before (L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2607)

```diff
-           this.setFocus(null !== Wp && void 0 !== Wp ? Wp : Pp)
+           this.setFocus(null !== pT && void 0 !== pT ? pT : LT)
```

#### 202. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2614` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2518) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2614)

```diff
-           } = this.getTargets(), Lp = this.pointer, Yp = !Lp && this.focusTarget && Ti(this.focusTarget) ? this.focusTarget.scrollContainer : null, Dp = Lp && (null === (ip = xp.find((pp => pp.clip && Hi(pp.clip, Lp)))) || void 0 === ip ? void 0 : ip.scrollContainer), Ap = null ! … [truncated]
+           } = this.getTargets(), HT = this.pointer, kT = !HT && this.focusTarget && sU(this.focusTarget) ? this.focusTarget.scrollContainer : null, jT = HT && (null === (UT = nT.find((TT => TT.clip && vU(TT.clip, HT)))) || void 0 === UT ? void 0 : UT.scrollContainer), lT = null ! … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2634` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2538) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2634)

```diff
-           }, Op = this.focused ? Ei(this.focused) : null, op = Op ? (0, Zi.d)(Op) : null;
+           }, WT = this.focused ? wU(this.focused) : null, zT = WT ? (0, GU.b)(WT) : null;
```

#### 204. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2650` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2554) · [Before (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2650)

```diff
-               const Ip = (0, Dp.g)(op);
+               const MT = (0, jT.i)(zT);
```

#### 205. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2663-L2664` → after: `L2567-L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2567-L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2567-L2568) · [Before (L2663-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2663-L2664)

```diff
-           const Op = pp.wasPressed((0, Dp.g)("inventoryPrimary")) || pp.wasPressed((0, Dp.g)("inventoryHotbarSwap"));
-           if (!Op && !pp.wasPressed((0, Dp.g)("inventoryClose")) && !ip.isHolding()) return !(pp.wasPressed((0, Dp.g)("inventory")) && Oc());
+           const WT = TT.wasPressed((0, jT.i)("inventoryPrimary")) || TT.wasPressed((0, jT.i)("inventoryHotbarSwap"));
+           if (!WT && !TT.wasPressed((0, jT.i)("inventoryClose")) && !UT.isHolding()) return !(TT.wasPressed((0, jT.i)("inventory")) && Tm());
```

#### 206. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2675` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2579) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2675)

```diff
-           } = this.getTargets(), op = document.querySelector(si), Ip = null !== (ip = op && Op.get(op)) && void 0 !== ip ? ip : cp.find((pp => "hotbar" === pp.panel));
+           } = this.getTargets(), zT = document.querySelector(EU), MT = null !== (UT = zT && WT.get(zT)) && void 0 !== UT ? UT : mT.find((TT => "hotbar" === TT.panel));
```

#### 207. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2685` → after: `L2589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2589) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2685)

```diff
-           const Op = (0, Dp.g)("inventoryDrop");
+           const WT = (0, jT.i)("inventoryDrop");
```

#### 208. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2688` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2592) · [Before (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2688)

```diff
-               kind: "sx"
+               kind: "fn"
```

#### 209. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2693` → after: `L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2597) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2693)

```diff
-             return void(pp && (this.dropFrom(pp, !1, cp), this.dropLatch.press(pp, this.focusKey(), ip, wp.e[(0, Pp.h)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(TT && (this.dropFrom(TT, !1, mT), this.dropLatch.press(TT, this.focusKey(), UT, cT.e[(0, LT.k)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 210. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2697` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2601) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2697)

```diff
-           Ip && ((pp, ip, cp) => "sx" === pp.kind ? ip : !ip && cp(pp.idx))(Ip, cp.isHolding(), cp.hasItemAt) && (this.dropFrom(Ip, !0, cp), this.afterAction())
+           MT && ((TT, UT, mT) => "fn" === TT.kind ? UT : !UT && mT(TT.idx))(MT, mT.isHolding(), mT.hasItemAt) && (this.dropFrom(MT, !0, mT), this.afterAction())
```

#### 211. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2700` → after: `L2604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2604) · [Before (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2700)

```diff
-           "sx" === pp.kind ? cp.dropHeld(ip, this.slotPoint()) : cp.dropSlot(pp.idx, ip)
+           "fn" === TT.kind ? mT.dropHeld(UT, this.slotPoint()) : mT.dropSlot(TT.idx, UT)
```

#### 212. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2738` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2642) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2738)

```diff
-               (0, gp.k)(Ip, (0, gp.q)(Ip));
+               (0, ST.p)(MT, (0, ST.x)(MT));
```

#### 213. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2741` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2645) · [Before (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2741)

```diff
-               (0, gp.B)(Ip) && (0, gp.z)(Ip);
+               (0, ST.J)(MT) && (0, ST.I)(MT);
```

#### 214. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2772` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2676) · [Before (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2772)

```diff
-           })(pp, this.state) || (this.state = pp, Yp.m.GA(bi.g, pp))
+           })(TT, this.state) || (this.state = TT, kT.j.EZ(PU.e, TT))
```

#### 215. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2776-L2779` → after: `L2680-L2683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2680-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2680-L2683) · [Before (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2776-L2779)

```diff
-     var Yc = cp(8835),
-       Dc = cp(322),
-       Ac = cp(1650),
-       Pc = cp(8318);
+     var gm = mT(8837),
+       nm = mT(351),
+       Hm = mT(1752),
+       km = mT(8300);
```

#### 216. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2781` → after: `L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2685) · [Before (L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2781)

```diff
-       yc = pp => pp instanceof HTMLElement && (0, Vp.t)(pp) && !(0, Vp.z)(pp),
+       lm = TT => TT instanceof HTMLElement && (0, AT.r)(TT) && !(0, AT.t)(TT),
```

#### 217. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2785` → after: `L2689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2689) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2785)

```diff
-         for (const op of null !== (cp = null === (Op = pp.parentElement) || void 0 === Op ? void 0 : Op.children) && void 0 !== cp ? cp : []) {
+         for (const zT of null !== (mT = null === (WT = TT.parentElement) || void 0 === WT ? void 0 : WT.children) && void 0 !== mT ? mT : []) {
```

#### 218. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2844` → after: `L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2748) · [Before (L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2844)

```diff
-           Op[cp] && !(op ? Ip : Sp) || xp.add(cp)
+           WT[mT] && !(zT ? MT : gT) || nT.add(mT)
```

#### 219. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2913-L2915` → after: `L2817-L2819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2817-L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2817-L2819) · [Before (L2913-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2913-L2915)

```diff
-     var Ec = cp(1698),
-       Xc = cp(8839),
-       lc = cp(8843);
+     var wm = mT(1799),
+       tm = mT(8841),
+       am = mT(8847);
```

#### 220. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2917-L2919` → after: `L2821-L2823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2821-L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2821-L2823) · [Before (L2917-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2917-L2919)

```diff
-         if ("death" !== pp || "inGame" !== Lp.c.get("gameState") || "off" === (0, Pp.h)().quickChat || null === (0, Ec.b)()) return !1;
-         const ip = (0, Dp.g)("chat");
-         return ip !== (0, Dp.g)("menuConfirm") && ip !== (0, Dp.g)("menuBack")
+         if ("death" !== TT || "inGame" !== HT.b.get("gameState") || "off" === (0, LT.k)().quickChat || null === (0, wm.d)()) return !1;
+         const UT = (0, jT.i)("chat");
+         return UT !== (0, jT.i)("menuConfirm") && UT !== (0, jT.i)("menuBack")
```

#### 221. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2922` → after: `L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2826) · [Before (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2922)

```diff
-     var Bc = cp(4379),
+     var Im = mT(4380),
```

#### 222. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2924` → after: `L2828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2828) · [Before (L2924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2924)

```diff
-       Tc = cp(8858);
+       sm = mT(8856);
```

#### 223. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2927` → after: `L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2831) · [Before (L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2927)

```diff
-         for (const cp of pp.querySelectorAll("[data-pad-tabs]"))(0, Vp.t)(cp) && (!ip || Number(cp.dataset.padTabs) < Number(ip.dataset.padTabs)) && (ip = cp);
+         for (const mT of TT.querySelectorAll("[data-pad-tabs]"))(0, AT.r)(mT) && (!UT || Number(mT.dataset.padTabs) < Number(UT.dataset.padTabs)) && (UT = mT);
```

#### 224. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2936` → after: `L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2840) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2936)

```diff
-               for (const Op of (0, Vp.i)(ip)) {
+               for (const WT of (0, AT.k)(UT)) {
```

#### 225. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2952` → after: `L2856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2856) · [Before (L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2952)

```diff
-         })([...cp.querySelectorAll("[data-pad-tab]")].filter((pp => (0, Vp.t)(pp) && !(0, Vp.z)(pp))), Op);
+         })([...mT.querySelectorAll("[data-pad-tab]")].filter((TT => (0, AT.r)(TT) && !(0, AT.t)(TT))), WT);
```

#### 226. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2954` → after: `L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2858) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2954)

```diff
-         const Sp = null !== (op = null === pp || void 0 === pp ? void 0 : pp.getFocused()) && void 0 !== op ? op : null,
+         const gT = null !== (zT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== zT ? zT : null,
```

#### 227. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2957` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2861) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2957)

```diff
-         (0, gp.b)(Ip), pp && (Lp ? bc(pp, ip, Lp, cp) : pp.setFocus(Ip, {
+         (0, ST.d)(MT), TT && (HT ? Pm(TT, UT, HT, mT) : TT.setFocus(MT, {
```

#### 228. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2963-L2964` → after: `L2867-L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2867-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2867-L2868) · [Before (L2963-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2963-L2964)

```diff
-         const cp = Jp(null !== (ip = Mp(pp, "x")) && void 0 !== ip ? ip : pp),
-           Op = (0, Vp.e)(pp).filter((pp => !(0, Vp.z)(pp))),
+         const mT = IT(null !== (UT = dT(TT, "x")) && void 0 !== UT ? UT : TT),
+           WT = (0, AT.h)(TT).filter((TT => !(0, AT.t)(TT))),
```

#### 229. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2966` → after: `L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2870) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2966)

```diff
-         return (op.length > 0 ? op : Op).sort(((pp, ip) => Mc(pp.getBoundingClientRect(), ip.getBoundingClientRect())))
+         return (zT.length > 0 ? zT : WT).sort(((TT, UT) => xm(TT.getBoundingClientRect(), UT.getBoundingClientRect())))
```

#### 230. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2969` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2873) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2969)

```diff
-         const Op = [...ip.querySelectorAll("[data-pad-row]")].filter(Vp.t),
+         const WT = [...UT.querySelectorAll("[data-pad-row]")].filter(AT.r),
```

#### 231. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2992` → after: `L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2896) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2992)

```diff
-         const Ip = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.getFocused()) && void 0 !== Op ? Op : null,
+         const MT = null !== (WT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== WT ? WT : null,
```

#### 232. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2994` → after: `L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2898) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2994)

```diff
-           xp = null !== (op = Ip ? Mp(Ip, Sp, ip) : null) && void 0 !== op ? op : Ep(ip, Sp);
+           nT = null !== (zT = MT ? dT(MT, gT, UT) : null) && void 0 !== zT ? zT : tT(UT, gT);
```

#### 233. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2996` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2900) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2996)

```diff
-         const Lp = Ip ? (0, gp.q)(Ip) : null;
+         const HT = MT ? (0, ST.x)(MT) : null;
```

#### 234. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3013` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2917) · [Before (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3013)

```diff
-           xp = qc((0, gp.q)(Ip), Sp.map((pp => pp.getBoundingClientRect()))),
+           nT = Jm((0, ST.x)(MT), gT.map((TT => TT.getBoundingClientRect()))),
```

#### 235. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3015` → after: `L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2919) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3015)

```diff
-         return pp.setFocus(null !== Lp && void 0 !== Lp && Lp.isConnected ? Lp : null !== (Op = Sp[xp]) && void 0 !== Op ? Op : null, {
+         return TT.setFocus(null !== HT && void 0 !== HT && HT.isConnected ? HT : null !== (WT = gT[nT]) && void 0 !== WT ? WT : null, {
```

#### 236. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3020-L3021` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2924-L2925) · [Before (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3020-L3021)

```diff
-         const ip = (0, Dp.g)(pp);
-         return (0, yp.C)(ip) || Pc.s.some((pp => (0, Dp.g)(pp) === ip)) ? null : ip
+         const UT = (0, jT.i)(TT);
+         return (0, BT.D)(UT) || km.r.some((TT => (0, jT.i)(TT) === UT)) ? null : UT
```

#### 237. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3031` → after: `L2935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2935) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3031)

```diff
-             return null !== (ip = null === (cp = fc(pp)) || void 0 === cp ? void 0 : cp.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ip ? ip : null
+             return null !== (UT = null === (mT = Fm(TT)) || void 0 === mT ? void 0 : mT.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== UT ? UT : null
```

#### 238. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3034` → after: `L2938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2938) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3034)

```diff
-         (0, Yc.b)(), cp === Dc.n.SETTINGS && (0, Ac.j)(Lp.c.get("openEverythingMenuName")) ? Lp.c.set({
+         (0, gm.d)(), mT === nm.k.SETTINGS && (0, Hm.g)(HT.b.get("openEverythingMenuName")) ? HT.b.set({
```

#### 239. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3036` → after: `L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2940) · [Before (L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3036)

```diff
-         }) : (0, Ac.q)((0, Tc.b)("padMenuShortcut"), cp, Op), pp && Ip && op && bc(pp, ip, Ip, op.closest("[data-pad-tabs]"))
+         }) : (0, Hm.s)((0, sm.e)("padMenuShortcut"), mT, WT), TT && MT && zT && Pm(TT, UT, MT, zT.closest("[data-pad-tabs]"))
```

#### 240. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3039-L3041` → after: `L2943-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2943-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2943-L2945) · [Before (L3039-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3039-L3041)

```diff
-       Kc = pp => null !== (0, Nc.b)() && "popup" !== pp.layer.kind && !fc(pp.root) && !sc(pp.root),
-       Vc = (0, Up.e)(yp.R),
-       pO = (0, Up.e)(yp.R),
+       Dm = TT => null !== (0, Qm.e)() && "popup" !== TT.layer.kind && !Fm(TT.root) && !hm(TT.root),
+       om = (0, ZT.e)(BT.Z),
+       Am = (0, ZT.e)(BT.Z),
```

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3044-L3045` → after: `L2948-L2949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2948-L2949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2948-L2949) · [Before (L3044-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3044-L3045)

```diff
-             const cp = (0, Dp.g)("chat");
-             return Qc(ip) && pp.isHeld(cp) ? "hold" === Jc.update(pp.wasPressed(cp), pp.isHeld(cp), performance.now(), wp.e[(0, Pp.h)().tapHoldTime].wheelMs) && (Ap.d.consumeButton(cp), Yp.m.GA(lc.n), !0) : (Jc.release(), !1)
+             const mT = (0, jT.i)("chat");
+             return ym(UT) && TT.isHeld(mT) ? "hold" === Xm.update(TT.wasPressed(mT), TT.isHeld(mT), performance.now(), cT.e[(0, LT.k)().tapHoldTime].wheelMs) && (lT.e.consumeButton(mT), kT.j.EZ(am.m), !0) : (Xm.release(), !1)
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3052` → after: `L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2956) · [Before (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3052)

```diff
-           if (ip.wasPressed((0, Dp.g)(Sp))) {
+           if (UT.wasPressed((0, jT.i)(gT))) {
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3058` → after: `L2962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2962) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3058)

```diff
-               null !== (op = (0, Nc.b)()) && void 0 !== op && op(xp) && pp && ip && bc(pp, Op, ip, null)
+               null !== (zT = (0, Qm.e)()) && void 0 !== zT && zT(nT) && TT && UT && Pm(TT, WT, UT, null)
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3065` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2969) · [Before (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3065)

```diff
-           const cp = (0, Dp.g)(Sp);
+           const mT = (0, jT.i)(gT);
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3069-L3072` → after: `L2973-L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2973-L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2973-L2976) · [Before (L3069-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3069-L3072)

```diff
-         return Zc(ip, "pause") ? (Ip || (0, Ac.n)() && "menu" !== cp.layer.kind || zc(pp, Op, (0, Ac.n)() ? Dc.n.SETTINGS : (0, Bc.d)()), !0) : !!Zc(ip, "leaderboard") && ("home" === cp.layer.kind ? (pp => {
-           const ip = [...pp.querySelectorAll("[data-pad-notifications]")].find(Vp.t);
-           ip && (0, gp.b)(ip)
-         })(Op) : Ip || zc(pp, Op, Dc.n.LOBBY_LEADERBOARD, "inGame" === Lp.c.get("gameState")), !0)
+         return Nm(UT, "pause") ? (MT || (0, Hm.m)() && "menu" !== mT.layer.kind || Em(TT, WT, (0, Hm.m)() ? nm.k.SETTINGS : (0, Im.d)()), !0) : !!Nm(UT, "leaderboard") && ("home" === mT.layer.kind ? (TT => {
+           const UT = [...TT.querySelectorAll("[data-pad-notifications]")].find(AT.r);
+           UT && (0, ST.d)(UT)
+         })(WT) : MT || Em(TT, WT, nm.k.LOBBY_LEADERBOARD, "inGame" === HT.b.get("gameState")), !0)
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3077` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2981) · [Before (L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3077)

```diff
-         if (ip.wasPressed((0, Dp.g)("menuSecondary"))) {
+         if (UT.wasPressed((0, jT.i)("menuSecondary"))) {
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3080` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2984) · [Before (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3080)

```diff
-           if (op) return (0, gp.b)(op), !0;
+           if (zT) return (0, ST.d)(zT), !0;
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3083` → after: `L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2987) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3083)

```diff
-             return ip && (0, Vp.v)(ip, cp.root) ? (pp.setFocus(ip, {
+             return UT && (0, AT.s)(UT, mT.root) ? (TT.setFocus(UT, {
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3085` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2989) · [Before (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3085)

```diff
-             }), (0, gp.b)(ip)) : Lp.c.set({
+             }), (0, ST.d)(UT)) : HT.b.set({
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3093` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2997) · [Before (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3093)

```diff
-           if (!op || !(0, Vp.t)(op)) return void(0, Ac.q)((0, Tc.b)("padMenuShortcut"), Dc.n.SOCIAL);
+           if (!zT || !(0, AT.r)(zT)) return void(0, Hm.s)((0, sm.e)("padMenuShortcut"), nm.k.SOCIAL);
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3095` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2999) · [Before (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3095)

```diff
-           const Ip = null !== (cp = null === (Op = op.querySelector("[data-pad-friends-start]")) || void 0 === Op ? void 0 : Op.getBoundingClientRect().top) && void 0 !== cp ? cp : -1 / 0,
+           const MT = null !== (mT = null === (WT = zT.querySelector("[data-pad-friends-start]")) || void 0 === WT ? void 0 : WT.getBoundingClientRect().top) && void 0 !== mT ? mT : -1 / 0,
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3098` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3002) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3098)

```diff
-             Lp = xp.length > 0 ? xp : Sp,
+             HT = nT.length > 0 ? nT : gT,
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3107` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3011) · [Before (L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3107)

```diff
-         const op = (0, gp.r)(pp);
+         const zT = (0, ST.z)(TT);
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3109-L3110` → after: `L3013-L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3013-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3013-L3014) · [Before (L3109-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3109-L3110)

```diff
-         const Ip = (null !== (ip = null !== (cp = null !== (Op = pp.getAttribute("aria-label")) && void 0 !== Op ? Op : pp.getAttribute("title")) && void 0 !== cp ? cp : pp.textContent) && void 0 !== ip ? ip : "").replace(/\s+/g, " ").trim();
-         return Ip ? `${pp.tagName}:${Ip.slice(0,100)}` : null
+         const MT = (null !== (UT = null !== (mT = null !== (WT = TT.getAttribute("aria-label")) && void 0 !== WT ? WT : TT.getAttribute("title")) && void 0 !== mT ? mT : TT.textContent) && void 0 !== UT ? UT : "").replace(/\s+/g, " ").trim();
+         return MT ? `${TT.tagName}:${MT.slice(0,100)}` : null
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3131` → after: `L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3035) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3131)

```diff
-           Ip = (0, gp.r)(ip),
+           MT = (0, ST.z)(UT),
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3155` → after: `L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3059) · [Before (L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3155)

```diff
-         return null !== (cp = null !== (Op = Sp[op.ordinal]) && void 0 !== Op ? Op : Sp[0]) && void 0 !== cp ? cp : null
+         return null !== (mT = null !== (WT = gT[zT.ordinal]) && void 0 !== WT ? WT : gT[0]) && void 0 !== mT ? mT : null
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3161` → after: `L3065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3065) · [Before (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3161)

```diff
-     var IO = cp(1295);
+     var WW = mT(1376);
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3176` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3080) · [Before (L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3176)

```diff
-             const cp = (null !== (Op = pp[Ip]) && void 0 !== Op ? Op : 0) - (null !== (op = ip[Ip]) && void 0 !== op ? op : 0);
+             const mT = (null !== (WT = TT[MT]) && void 0 !== WT ? WT : 0) - (null !== (zT = UT[MT]) && void 0 !== zT ? zT : 0);
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3189` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3093) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3189)

```diff
-         return null !== (cp = xO(pp.root, ip.root)) && void 0 !== cp ? cp : pp.order > ip.order
+         return null !== (mT = MW(TT.root, UT.root)) && void 0 !== mT ? mT : TT.order > UT.order
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3198-L3199` → after: `L3102-L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3102-L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3102-L3103) · [Before (L3198-L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3198-L3199)

```diff
-           cp = "number" === typeof ip ? ip : null;
-         if (null !== cp && cp === AO && PO === (0, IO.c)()) return DO;
+           mT = "number" === typeof UT ? UT : null;
+         if (null !== mT && mT === kW && jW === (0, WW.d)()) return HW;
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3202-L3203` → after: `L3106-L3107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3106-L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3106-L3107) · [Before (L3202-L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3202-L3203)

```diff
-           Ip = [...document.querySelectorAll("[data-pad-covers]")].filter(Vp.t);
-         for (const Sp of (0, IO.g)()) {
+           MT = [...document.querySelectorAll("[data-pad-covers]")].filter(AT.r);
+         for (const gT of (0, WW.e)()) {
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3205` → after: `L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3109) · [Before (L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3205)

```diff
-             ip = !!pp && (0, Vp.t)(pp) && !YO(pp, Ip);
+             UT = !!TT && (0, AT.r)(TT) && !nW(TT, MT);
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3214-L3215` → after: `L3118-L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3118-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3118-L3119) · [Before (L3214-L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3214-L3215)

```diff
-         DO = Op, AO = cp, PO = (0, IO.c)();
-         for (const Sp of op)(0, IO.k)(Sp);
+         HW = WT, kW = mT, jW = (0, WW.d)();
+         for (const gT of zT)(0, WW.f)(gT);
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3224` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3128) · [Before (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3224)

```diff
-         return null !== (pp = null === (ip = WO()) || void 0 === ip ? void 0 : ip.root) && void 0 !== pp ? pp : null
+         return null !== (TT = null === (UT = lW()) || void 0 === UT ? void 0 : UT.root) && void 0 !== TT ? TT : null
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3232` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3136) · [Before (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3232)

```diff
-       HO = (0, Pp.h)().menuNavigation,
+       vW = (0, LT.k)().menuNavigation,
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3236-L3237` → after: `L3140-L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3140-L3141) · [Before (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3236-L3237)

```diff
-     Yp.m.subscribe(Pp.g, (() => {
-       const pp = (0, Pp.h)().menuNavigation;
+     kT.j.subscribe(LT.g, (() => {
+       const TT = (0, LT.k)().menuNavigation;
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3242` → after: `L3146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3146) · [Before (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3242)

```diff
-         return null !== (pp = vO) && void 0 !== pp ? pp : (0, Pp.h)().menuNavigation
+         return null !== (TT = ZW) && void 0 !== TT ? TT : (0, LT.k)().menuNavigation
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3269` → after: `L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3173) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3269)

```diff
-           has: (0, Vp.l)(pp)
+           has: (0, AT.n)(TT)
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3295-L3296` → after: `L3199-L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3199-L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3199-L3200) · [Before (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3295-L3296)

```diff
-     var lO = cp(4643),
-       QO = cp(5149);
+     var aW = mT(4653),
+       yW = mT(5123);
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3298` → after: `L3202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3202) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3298)

```diff
-       BO = `${JO}, [data-pad-back]`,
+       IW = `${XW}, [data-pad-back]`,
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3329-L3330` → after: `L3233-L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3233-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3233-L3234) · [Before (L3329-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3329-L3330)

```diff
-         const cp = pp.querySelector(`${hO}[data-pad-selected='true']`);
-         return cp && ip.includes(cp) ? cp : null
+         const mT = TT.querySelector(`${VW}[data-pad-selected='true']`);
+         return mT && UT.includes(mT) ? mT : null
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3346` → after: `L3250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3250) · [Before (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3346)

```diff
-         if (xp && xp !== Sp) return Sp || (this.contentReturn = new WeakRef(pp)), null !== (Lp = aO(xp, cp)) && void 0 !== Lp ? Lp : ip;
+         if (nT && nT !== gT) return gT || (this.contentReturn = new WeakRef(TT)), null !== (HT = uW(nT, mT)) && void 0 !== HT ? HT : UT;
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3350` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3254) · [Before (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3350)

```diff
-         return Dp && Yp.contains(Dp) && cp.includes(Dp) ? Dp : null !== (Ip = this.pickRegionStart(Yp, Mp(ip, "y", Op), cp)) && void 0 !== Ip ? Ip : ip
+         return jT && kT.contains(jT) && mT.includes(jT) ? jT : null !== (MT = this.pickRegionStart(kT, dT(UT, "y", WT), mT)) && void 0 !== MT ? MT : UT
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3358` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3262) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3358)

```diff
-         return cp.some((pp => Ip.contains(pp) && !pp.closest(BO))) || !ip.closest(BO) ? Ip : null
+         return mT.some((TT => MT.contains(TT) && !TT.closest(IW))) || !UT.closest(IW) ? MT : null
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3387` → after: `L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3291) · [Before (L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3387)

```diff
-         for (const Ip of (0, Vp.i)(pp)) {
+         for (const MT of (0, AT.k)(TT)) {
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3407-L3408` → after: `L3311-L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3311-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3311-L3312) · [Before (L3407-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3407-L3408)

```diff
-           if (cp) return ip === pp || ip.querySelectorAll(Vp.b).length <= 1 ? cp : null;
-           if (ip !== pp && ip.querySelectorAll(Vp.b).length > 1) return null
+           if (mT) return UT === TT || UT.querySelectorAll(AT.d).length <= 1 ? mT : null;
+           if (UT !== TT && UT.querySelectorAll(AT.d).length > 1) return null
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3413` → after: `L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3317) · [Before (L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3413)

```diff
-         (0, gp.m)(pp, ip, cp);
+         (0, ST.r)(TT, UT, mT);
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3416` → after: `L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3320) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3416)

```diff
-         Op !== op && (0, gp.m)(Op, op, op ? (0, gp.q)(op) : cp, {
+         WT !== zT && (0, ST.r)(WT, zT, zT ? (0, ST.x)(zT) : mT, {
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3431` → after: `L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3335) · [Before (L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3431)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new oO, this.tabStripNav = new FO, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new mW, this.tabStripNav = new rW, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3437` → after: `L3341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3341) · [Before (L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3437)

```diff
-         const pp = Ap.d.register({
+         const TT = lT.e.register({
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3439` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3343) · [Before (L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3439)

```diff
-             isActive: () => (0, Wp.n)() && "focus" === CO(),
+             isActive: () => (0, pT.m)() && "focus" === dW(),
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3446` → after: `L3350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3350) · [Before (L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3446)

```diff
-             wakePressActs: pp => (0, Ap.f)(pp) || pp === (0, Dp.g)("menuConfirm") && (0, gp.v)((0, Wp.d)())
+             wakePressActs: TT => (0, lT.g)(TT) || TT === (0, jT.i)("menuConfirm") && (0, ST.H)((0, pT.e)())
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3448-L3449` → after: `L3352-L3353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3352-L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3352-L3353) · [Before (L3448-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3448-L3449)

```diff
-           ip = (0, IO.o)((pp => {
-             const ip = (0, IO.t)(pp);
+           UT = (0, WW.j)((TT => {
+             const UT = (0, WW.n)(TT);
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3454` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3358) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3454)

```diff
-             (0, Wp.n)() || pp.timestampMs - cp < 100 || (cp = pp.timestampMs, WO())
+             (0, pT.m)() || TT.timestampMs - mT < 100 || (mT = TT.timestampMs, lW())
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3467` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3371) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3467)

```diff
-         const op = null !== (ip = null === (cp = pp.closest(".Dropdown-root")) || void 0 === cp ? void 0 : cp.querySelector(".Dropdown-control")) && void 0 !== ip ? ip : pp,
+         const zT = null !== (UT = null === (mT = TT.closest(".Dropdown-root")) || void 0 === mT ? void 0 : mT.querySelector(".Dropdown-control")) && void 0 !== UT ? UT : TT,
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3470` → after: `L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3374) · [Before (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3470)

```diff
-         const Sp = (0, IO.t)(Op.layer);
+         const gT = (0, WW.n)(WT.layer);
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3474` → after: `L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3378) · [Before (L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3474)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Ip, this.lastFocusedCentre = (0, gp.q)(Ip), this.rememberFocus(Ip), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = MT, this.lastFocusedCentre = (0, ST.x)(MT), this.rememberFocus(MT), this.notify())
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3495` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3399) · [Before (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3495)

```diff
-           this.stickRepeat.reset(), null !== (pp = this.focused) && void 0 !== pp && pp.isConnected && KO(this.focused, null, (0, gp.q)(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (TT = this.focused) && void 0 !== TT && TT.isConnected && DW(this.focused, null, (0, ST.x)(this.focused)), this.notify()
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3515-L3517` → after: `L3419-L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3419-L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3419-L3421) · [Before (L3515-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3515-L3517)

```diff
-           const ip = (0, gp.q)(pp);
-           this.lastFocusedCentre = ip, this.movedInLayer && this.rememberFocus(pp), KO(op, pp, ip), "false" === pp.getAttribute("aria-pressed") && pp.closest("[data-pad-select-on-focus]") && (0, gp.b)(pp)
-         } else op && KO(op, null, (0, gp.q)(op));
+           const UT = (0, ST.x)(TT);
+           this.lastFocusedCentre = UT, this.movedInLayer && this.rememberFocus(TT), DW(zT, TT, UT), "false" === TT.getAttribute("aria-pressed") && TT.closest("[data-pad-select-on-focus]") && (0, ST.d)(TT)
+         } else zT && DW(zT, null, (0, ST.x)(zT));
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3532` → after: `L3436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3436) · [Before (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3532)

```diff
-         const Ip = (0, IO.t)(ip.layer);
+         const MT = (0, WW.n)(UT.layer);
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3551` → after: `L3455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3455) · [Before (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3551)

```diff
-         return (0, Vp.e)(pp).filter((pp => !(0, Vp.z)(pp)))
+         return (0, AT.h)(TT).filter((TT => !(0, AT.t)(TT)))
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3557` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3461) · [Before (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3557)

```diff
-         const Op = null !== (ip = this.findOpenDropdown(cp)) && void 0 !== ip ? ip : cp,
+         const WT = null !== (UT = this.findOpenDropdown(mT)) && void 0 !== UT ? UT : mT,
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3559` → after: `L3463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3463) · [Before (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3559)

```diff
-           Ip = (0, IO.t)(Op.layer);
+           MT = (0, WW.n)(WT.layer);
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3562` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3466) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3562)

```diff
-           if (null !== this.layerKey && Op.root === this.layerRoot && ip && (0, Vp.v)(ip, Op.root)) this.continueLayer(Ip, ip), this.wasActive || this.resume(Op.root, op);
+           if (null !== this.layerKey && WT.root === this.layerRoot && UT && (0, AT.s)(UT, WT.root)) this.continueLayer(MT, UT), this.wasActive || this.resume(WT.root, zT);
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3567` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3471) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3567)

```diff
-             "popup" !== Op.layer.kind || Op !== cp || xp ? "menu" === Op.layer.kind && Sp && "inGame" === Lp.c.get("gameState") && !(0, Yc.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = op + lO.c) : (this.pressGuardExtends = ip, this.pressGuardUntilMs = op + (i … [truncated]
+             "popup" !== WT.layer.kind || WT !== mT || nT ? "menu" === WT.layer.kind && gT && "inGame" === HT.b.get("gameState") && !(0, gm.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = zT + aW.d) : (this.pressGuardExtends = UT, this.pressGuardUntilMs = zT + (U … [truncated]
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3570` → after: `L3474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3474) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3570)

```diff
-         if (this.layerKind = Op.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), pp.wokeDevice && this.focusPointedStop(Op.root), this.validateFocus(Op, op), op < this.pressGuardUntilMs && this.pressGuardExtends && (pp.wasPressed((0, Dp.g)("menuConfirm")) || pp … [truncated]
+         if (this.layerKind = WT.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), TT.wokeDevice && this.focusPointedStop(WT.root), this.validateFocus(WT, zT), zT < this.pressGuardUntilMs && this.pressGuardExtends && (TT.wasPressed((0, jT.i)("menuConfirm")) || TT … [truncated]
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3574-L3575` → after: `L3478-L3479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3478-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3478-L3479) · [Before (L3574-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3574-L3575)

```diff
-             return ip !== uO && (uO = ip, eO.lock()), eO.update(pp, (0, Pp.h)().moveDeadzone)
-           })(pp.leftStick)) return xp = this.getHandoff(), dO = wO(xp), tO = UO(), void Ap.d.handOffHeldInput();
+             return UT !== iW && (iW = UT, qW.lock()), qW.update(TT, (0, LT.k)().moveDeadzone)
+           })(TT.leftStick)) return nT = this.getHandoff(), fW = BW(nT), cW = pW(), void lT.e.handOffHeldInput();
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3581` → after: `L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3485) · [Before (L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3581)

```diff
-         if (!ip || !(0, Vp.t)(ip)) return null;
+         if (!UT || !(0, AT.r)(UT)) return null;
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3588` → after: `L3492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3492) · [Before (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3588)

```diff
-             (0, gp.g)(ip)
+             (0, ST.n)(UT)
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3598` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3502) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3598)

```diff
-         const ip = (0, Wp.d)(),
+         const UT = (0, pT.e)(),
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3617` → after: `L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3521) · [Before (L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3617)

```diff
-         this.restoredFromMemory = null !== cp, this.setFocus(null !== cp && void 0 !== cp ? cp : this.pickInitial(pp, {
+         this.restoredFromMemory = null !== mT, this.setFocus(null !== mT && void 0 !== mT ? mT : this.pickInitial(TT, {
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3629` → after: `L3533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3533) · [Before (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3629)

```diff
-         Op && io(Op, pp) ? this.takeOver(pp, Op, ip) : null !== (cp = this.focused) && void 0 !== cp && cp.isConnected && KO(null, this.focused, (0, gp.q)(this.focused))
+         WT && RW(WT, TT) ? this.takeOver(TT, WT, UT) : null !== (mT = this.focused) && void 0 !== mT && mT.isConnected && DW(null, this.focused, (0, ST.x)(this.focused))
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3633` → after: `L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3537) · [Before (L3633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3633)

```diff
-         return null !== (ip = this.layerKey ? this.findRemembered(pp, this.layerKey) : null) && void 0 !== ip ? ip : this.pickInitial(pp, {
+         return null !== (UT = this.layerKey ? this.findRemembered(TT, this.layerKey) : null) && void 0 !== UT ? UT : this.pickInitial(TT, {
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3645` → after: `L3549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3549) · [Before (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3645)

```diff
-           point: Op ? (0, gp.q)(Op) : null !== (cp = this.lastFocusedCentre) && void 0 !== cp ? cp : this.getLayerStartPoint(op),
+           point: WT ? (0, ST.x)(WT) : null !== (mT = this.lastFocusedCentre) && void 0 !== mT ? mT : this.getLayerStartPoint(zT),
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3658` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3562) · [Before (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3658)

```diff
-         return (0, gp.q)(null !== ip && void 0 !== ip ? ip : pp)
+         return (0, ST.x)(null !== UT && void 0 !== UT ? UT : TT)
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3665` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3569) · [Before (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3665)

```diff
-         } = ip, Sp = Op instanceof HTMLElement && (0, Vp.v)(Op, pp) ? Op : null;
+         } = UT, gT = WT instanceof HTMLElement && (0, AT.s)(WT, TT) ? WT : null;
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3671` → after: `L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3575) · [Before (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3671)

```diff
-           }) : this.focusNearest(pp, Ip), void(this.focused && this.focused === ip && this.focused.isConnected && KO(null, this.focused, (0, gp.q)(this.focused)))
+           }) : this.focusNearest(TT, MT), void(this.focused && this.focused === UT && this.focused.isConnected && DW(null, this.focused, (0, ST.x)(this.focused)))
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3680` → after: `L3584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3584) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3680)

```diff
-           Dp = Yp >= 0 ? Yp : qc(Ip, Lp);
+           jT = kT >= 0 ? kT : Jm(MT, HT);
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3697` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3601) · [Before (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3697)

```diff
-         const Op = [...pp.querySelectorAll(gO)].filter((Op => (null === cp || void 0 === cp || !cp.has(Op)) && (ip ? (0, Vp.C)(Op, pp) : (0, Vp.v)(Op, pp)))),
+         const WT = [...TT.querySelectorAll(KW)].filter((WT => (null === mT || void 0 === mT || !mT.has(WT)) && (UT ? (0, AT.w)(WT, TT) : (0, AT.s)(WT, TT)))),
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3702-L3703` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3606-L3607) · [Before (L3702-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3702-L3703)

```diff
-         const cp = [...pp.querySelectorAll(zO)].filter(Vp.t);
-         for (const Op of [...(0, Vp.i)(pp), ...cp]) {
+         const mT = [...TT.querySelectorAll(EW)].filter(AT.r);
+         for (const WT of [...(0, AT.k)(TT), ...mT]) {
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3721` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3625) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3721)

```diff
-         const Ip = pp => ip ? (0, Vp.e)(pp) : this.getEnabledCandidates(pp);
+         const MT = TT => UT ? (0, AT.h)(TT) : this.getEnabledCandidates(TT);
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3723` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3627) · [Before (L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3723)

```diff
-         for (const Pp of (0, Vp.i)(pp))
+         for (const LT of (0, AT.k)(TT))
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3726` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3630) · [Before (L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3726)

```diff
-           if (cp && performance.now() - Op < 1e4 && (0, Vp.p)(pp)) return null;
+           if (mT && performance.now() - WT < 1e4 && (0, AT.o)(TT)) return null;
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3732` → after: `L3636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3636) · [Before (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3732)

```diff
-           Dp = Yp.length > 0 ? Yp : Sp,
+           jT = kT.length > 0 ? kT : gT,
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3740` → after: `L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3644) · [Before (L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3740)

```diff
-           if (op && (0, Vp.v)(op, pp.root)) return this.pendingFocus = null, void this.setFocus(op, {
+           if (zT && (0, AT.s)(zT, TT.root)) return this.pendingFocus = null, void this.setFocus(zT, {
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3746-L3747` → after: `L3650-L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3650-L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3650-L3651) · [Before (L3746-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3746-L3747)

```diff
-           Ip = !!op && (0, Vp.v)(op, pp.root);
-         if (!(!Ip && op && op === this.lastActivated && ip - this.lastActivatedAtMs < 5e3 && pp.root.contains(op) && (0, Vp.t)(op) && (0, Vp.z)(op))) {
+           MT = !!zT && (0, AT.s)(zT, TT.root);
+         if (!(!MT && zT && zT === this.lastActivated && UT - this.lastActivatedAtMs < 5e3 && TT.root.contains(zT) && (0, AT.r)(zT) && (0, AT.t)(zT))) {
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3752` → after: `L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3656) · [Before (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3752)

```diff
-                 Op = null !== cp && void 0 !== cp ? cp : this.restoredFromMemory ? null : this.pickDefault(pp.root);
+                 WT = null !== mT && void 0 !== mT ? mT : this.restoredFromMemory ? null : this.pickDefault(TT.root);
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3764-L3766` → after: `L3668-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3668-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3668-L3670) · [Before (L3764-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3764-L3766)

```diff
-         if (pp.wasPressed((0, Dp.g)("menuToggleCursor"))) return kO(this.getHandoff()), !0;
-         if (pp.wasPressed((0, Dp.g)("menuBack"))) {
-           const pp = (0, gp.g)(ip.root);
+         if (TT.wasPressed((0, jT.i)("menuToggleCursor"))) return OW(this.getHandoff()), !0;
+         if (TT.wasPressed((0, jT.i)("menuBack"))) {
+           const TT = (0, ST.n)(UT.root);
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3769` → after: `L3673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3673) · [Before (L3769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3769)

```diff
-           }) : Gc(this, ip.root) || ((0, gp.c)(ip.root) ? this.returnToOpener(ip.root) : this.backToStrip(ip.root) || yO()), !0
+           }) : Sm(this, UT.root) || ((0, ST.g)(UT.root) ? this.returnToOpener(UT.root) : this.backToStrip(UT.root) || LW()), !0
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3771` → after: `L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3675) · [Before (L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3771)

```diff
-         const cp = (0, Dp.g)("menuConfirm");
+         const mT = (0, jT.i)("menuConfirm");
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3773` → after: `L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3677) · [Before (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3773)

```diff
-         pp.wasPressed(cp) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Op = null === (op = this.focused) || void 0 === op ? void 0 : op.getAttribute("data-pad-repeat")) && void 0 !== Op ? Op : null, this.confirmRepeated = pp.wokeDevice, this.confirm … [truncated]
+         TT.wasPressed(mT) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (WT = null === (zT = this.focused) || void 0 === zT ? void 0 : zT.getAttribute("data-pad-repeat")) && void 0 !== WT ? WT : null, this.confirmRepeated = TT.wokeDevice, this.confirm … [truncated]
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3776` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3680) · [Before (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3776)

```diff
-           if (this.confirmPressedOn = null, pp && !this.confirmRepeated && pp === this.focused && pp.isConnected && !(0, Vp.z)(pp)) {
+           if (this.confirmPressedOn = null, TT && !this.confirmRepeated && TT === this.focused && TT.isConnected && !(0, AT.t)(TT)) {
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3786` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3690) · [Before (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3786)

```diff
-         cp && null !== this.confirmRepeatKey && pp.isHeld(ip) && (cp === this.focused && cp.isConnected && !(0, Vp.z)(cp) && cp.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? cp.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
+         mT && null !== this.confirmRepeatKey && TT.isHeld(UT) && (mT === this.focused && mT.isConnected && !(0, AT.t)(mT) && mT.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? mT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3790` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3694) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3790)

```diff
-         if (!(0, Pp.h)().menuBackToCategories) return !1;
+         if (!(0, LT.k)().menuBackToCategories) return !1;
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3800` → after: `L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3704) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3800)

```diff
-           return null !== (cp = this.getEnabledCandidates(pp).find((pp => (0, gp.r)(pp) === ip))) && void 0 !== cp ? cp : null
+           return null !== (mT = this.getEnabledCandidates(TT).find((TT => (0, ST.z)(TT) === UT))) && void 0 !== mT ? mT : null
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3805-L3806` → after: `L3709-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3709-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3709-L3710) · [Before (L3805-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3805-L3806)

```diff
-         if ((0, QO.e)(pp) || (0, gp.t)(pp)) return;
-         this.lastActivatedKey = null !== (ip = (0, gp.r)(pp)) && void 0 !== ip ? ip : this.lastActivatedKey, this.lastActivated = pp, this.lastActivatedAtMs = performance.now(), this.rememberFocus(pp);
+         if ((0, yW.e)(TT) || (0, ST.D)(TT)) return;
+         this.lastActivatedKey = null !== (UT = (0, ST.z)(TT)) && void 0 !== UT ? UT : this.lastActivatedKey, this.lastActivated = TT, this.lastActivatedAtMs = performance.now(), this.rememberFocus(TT);
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3810` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3714) · [Before (L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3810)

```diff
-             Op = new Set(cp.querySelectorAll(`[data-pad-initial-area], ${zO}`)),
+             WT = new Set(mT.querySelectorAll(`[data-pad-initial-area], ${EW}`)),
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3814` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3718) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3814)

```diff
-             return (0, Vp.v)(pp, cp) ? null : null !== (op = this.pickDefault(cp, {
+             return (0, AT.s)(TT, mT) ? null : null !== (zT = this.pickDefault(mT, {
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3816-L3818` → after: `L3720-L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3720-L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3720-L3722) · [Before (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3816-L3818)

```diff
-             })) && void 0 !== op ? op : this.pickNewAreaStart(cp, Op)
-           }), 5e3, (() => pp.isConnected && (0, Vp.z)(pp) && performance.now() - op < 6e4))
-         }(0, gp.b)(pp), (0, gp.e)(pp)
+             })) && void 0 !== zT ? zT : this.pickNewAreaStart(mT, WT)
+           }), 5e3, (() => TT.isConnected && (0, AT.t)(TT) && performance.now() - zT < 6e4))
+         }(0, ST.d)(TT), (0, ST.k)(TT)
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3821-L3822` → after: `L3725-L3726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3725-L3726) · [Before (L3821-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3821-L3822)

```diff
-         const op = Qc(ip.layer.kind) ? (0, Dp.g)("chat") : null;
-         for (const xp of yp.w) {
+         const zT = ym(UT.layer.kind) ? (0, jT.i)("chat") : null;
+         for (const nT of BT.y) {
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3825` → after: `L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3729) · [Before (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3825)

```diff
-         const Ip = Op ? (0, yp.h)(pp.leftStick, (0, Pp.h)().moveDeadzone) : {
+         const MT = WT ? (0, BT.j)(TT.leftStick, (0, LT.k)().moveDeadzone) : {
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3829` → after: `L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3733) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3829)

```diff
-           Sp = this.stickRepeat.update((0, yp._)(Ip), cp);
+           gT = this.stickRepeat.update((0, BT.fb)(MT), mT);
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3944` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3848) · [Before (L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3944)

```diff
-         (0, gp.b)(pp), this.focusWhenFound((() => "true" !== pp.dataset.padSelected ? null : ip.isConnected ? this.tabStripNav.pickContentStart(ip, this.getEnabledCandidates(cp), cp) : op ? this.tabStripNav.pickReplacedContentStart(pp, op, this.getEnabledCandidates(cp), cp) : nul … [truncated]
+         (0, ST.d)(TT), this.focusWhenFound((() => "true" !== TT.dataset.padSelected ? null : UT.isConnected ? this.tabStripNav.pickContentStart(UT, this.getEnabledCandidates(mT), mT) : zT ? this.tabStripNav.pickReplacedContentStart(TT, zT, this.getEnabledCandidates(mT), mT) : nul … [truncated]
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3962` → after: `L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3866) · [Before (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3962)

```diff
-         const cp = (0, yp.h)(pp.rightStick, .2);
+         const mT = (0, BT.j)(TT.rightStick, .2);
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3972` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3876) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3972)

```diff
-           const Sp = null !== (op = Mp(this.focused, Ip, ip.root)) && void 0 !== op ? op : Ep(ip.root, Ip);
+           const gT = null !== (zT = dT(this.focused, MT, UT.root)) && void 0 !== zT ? zT : tT(UT.root, MT);
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3980-L3981` → after: `L3884-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3884-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3884-L3885) · [Before (L3980-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L3980-L3981)

```diff
-     var Oo = cp(8346);
-     var oo = cp(8861);
+     var Uz = mT(8344);
+     var mz = mT(8859);
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4052` → after: `L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3956) · [Before (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4052)

```diff
-           return "function" === typeof(null === ip || void 0 === ip ? void 0 : ip.playEffect) ? ip : null
+           return "function" === typeof(null === UT || void 0 === UT ? void 0 : UT.playEffect) ? UT : null
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4054-L4055` → after: `L3958-L3959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3958-L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3958-L3959) · [Before (L4054-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4054-L4055)

```diff
-         isVibrationOn: () => (0, Pp.h)().vibration,
-         isPadInUse: Wp.n
+         isVibrationOn: () => (0, LT.k)().vibration,
+         isPadInUse: pT.m
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4061-L4062` → after: `L3965-L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3965-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3965-L3966) · [Before (L4061-L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4061-L4062)

```diff
-       Do = cp(3003),
-       Ao = cp(116),
+       Hz = mT(3047),
+       kz = mT(115),
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4064` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3968) · [Before (L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4064)

```diff
-       Wo = cp(670);
+       lz = mT(696);
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4074` → after: `L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3978) · [Before (L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4074)

```diff
-         return null === cp || this.deps.readReportedVisitId() === cp ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(cp), this.deps.Yy(ip, this.deps.getInputType()), "reported") : "notReady"
+         return null === mT || this.deps.readReportedVisitId() === mT ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(mT), this.deps.Gp(UT, this.deps.getInputType()), "reported") : "notReady"
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4078-L4082` → after: `L3982-L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3982-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3982-L3986) · [Before (L4078-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4078-L4082)

```diff
-     var wo = cp(1372),
-       vo = cp(1765),
-       to = cp(657),
-       Ho = cp(1476),
-       eo = cp(1260);
+     var Bz = mT(1457),
+       Zz = mT(1863),
+       cz = mT(681),
+       vz = mT(1567),
+       fz = mT(1345);
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4084` → after: `L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L3988) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4084)

```diff
-         translationKey: `controller:${pp}`
+         translationKey: `controller:${TT}`
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4146-L4147` → after: `L4050-L4051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4050-L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4050-L4051) · [Before (L4146-L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4146-L4147)

```diff
-         const Op = null !== (cp = ko[pp][ip]) && void 0 !== cp ? cp : jo[ip];
-         return "string" === typeof Op ? Op : (0, op.B)(eo.g.get().getCurrentLanguageCode(), Op.translationKey)
+         const WT = null !== (mT = bz[TT][UT]) && void 0 !== mT ? mT : iz[UT];
+         return "string" === typeof WT ? WT : (0, zT.v)(fz.f.get().getCurrentLanguageCode(), WT.translationKey)
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4155-L4156` → after: `L4059-L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4059-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4059-L4060) · [Before (L4155-L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4155-L4156)

```diff
-         const op = (0, Wp.I)(),
-           Ip = null !== cp && void 0 !== cp ? cp : op,
+         const zT = (0, pT.D)(),
+           MT = null !== mT && void 0 !== mT ? mT : zT,
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4163-L4164` → after: `L4067-L4068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4067-L4068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4067-L4068) · [Before (L4163-L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4163-L4164)

```diff
-             "--pad-glyph-mask": `url(${Sp})`,
-             "--pad-glyph-aspect": (0, Yo.c)(Ip, ip)
+             "--pad-glyph-mask": `url(${gT})`,
+             "--pad-glyph-aspect": (0, nz.d)(MT, UT)
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4168` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4072) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4168)

```diff
-     var qo = cp(1929);
+     var Yz = mT(2023);
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4175` → after: `L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4079) · [Before (L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4175)

```diff
-       } = (0, op.H)();
+       } = (0, zT.z)();
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4187` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4091) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4187)

```diff
-             }, ` ${ip.description}`] : [{
+             }, ` ${UT.description}`] : [{
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4197` → after: `L4101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4101) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4197)

```diff
-     var Co = cp(8869);
+     var xz = mT(8861);
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4205` → after: `L4109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4109) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4205)

```diff
-           "--pad-drop-stack-hold": `${ip.holdMs}ms`
+           "--pad-drop-stack-hold": `${UT.holdMs}ms`
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4212-L4215` → after: `L4116-L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4116-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4116-L4119) · [Before (L4212-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4212-L4215)

```diff
-     var Xo = cp(8885),
-       Qo = cp(8887),
-       Jo = cp(8890),
-       Bo = cp(8883);
+     var wz = mT(8880),
+       tz = mT(8888),
+       az = mT(8892),
+       yz = mT(8876);
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4219` → after: `L4123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4123) · [Before (L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4219)

```diff
-         } = (0, Lp.o)(["gameState"]), ip = (0, Wp.H)(), [Op, op] = (0, Np.useState)(!1), [Ip, Sp] = (0, Np.useState)(!1);
+         } = (0, HT.h)(["gameState"]), UT = (0, pT.B)(), [WT, zT] = (0, sT.useState)(!1), [MT, gT] = (0, sT.useState)(!1);
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4226` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4130) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4226)

```diff
-           return (to.z ? Promise.all([cp.e(73), cp.e(90), cp.e(273), cp.e(191), cp.e(229), cp.e(228), cp.e(89)]).then((() => cp(40730))).then((pp => pp.startWasmPadGameplay)) : Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(98), cp.e(76), cp.e(75), cp.e(74), cp.e(187), cp.e(23 … [truncated]
+           return (cz.B ? Promise.all([mT.e(73), mT.e(90), mT.e(273), mT.e(191), mT.e(229), mT.e(228), mT.e(89)]).then((() => mT(40666))).then((TT => TT.startWasmPadGameplay)) : Promise.all([mT.e(73), mT.e(237), mT.e(236), mT.e(98), mT.e(76), mT.e(75), mT.e(74), mT.e(187), mT.e(23 … [truncated]
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4252` → after: `L4156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4156) · [Before (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4252)

```diff
-         } = (0, op.H)(), ip = (0, Wp.H)(), {
+         } = (0, zT.z)(), UT = (0, pT.B)(), {
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4255` → after: `L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4159) · [Before (L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4255)

```diff
-         } = (0, Lp.o)(["gameState", "isUiHidden"]), {
+         } = (0, HT.h)(["gameState", "isUiHidden"]), {
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4257-L4258` → after: `L4161-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4161-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4161-L4162) · [Before (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4257-L4258)

```diff
-         } = (0, Pp.s)(), Sp = (0, Co.h)(), xp = (0, Co.i)(), [Yp, Ap] = (0, Np.useState)(Jo.e);
-         return (0, Ho.f)(Bo.m, Ap), !ip || Ip || Op || "inGame" !== cp || !Sp && !Yp ? null : (0, bp.jsxs)("div", {
+         } = (0, LT.n)(), gT = (0, xz.h)(), nT = (0, xz.j)(), [kT, lT] = (0, sT.useState)(az.c);
+         return (0, vz.g)(yz.t, lT), !UT || MT || WT || "inGame" !== mT || !gT && !kT ? null : (0, VT.jsxs)("div", {
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4263` → after: `L4167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4167) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4263)

```diff
-               glyph: (0, Dp.g)("actionButton")
+               glyph: (0, jT.i)("actionButton")
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4273` → after: `L4177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4177) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4273)

```diff
-               glyph: (0, Dp.g)("pickBlock")
+               glyph: (0, jT.i)("pickBlock")
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4283` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4187) · [Before (L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4283)

```diff
-         } = (0, op.H)(), ip = (0, Wp.H)(), {
+         } = (0, zT.z)(), UT = (0, pT.B)(), {
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4286-L4287` → after: `L4190-L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4190-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4190-L4191) · [Before (L4286-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4286-L4287)

```diff
-         } = (0, Lp.o)(["gameState", "isUiHidden"]), [Ip, Sp] = (0, Np.useState)(Xo.e);
-         return (0, Ho.f)(Bo.k, Sp), ip && !Op && "inGame" === cp && Ip ? (0, bp.jsxs)("div", {
+         } = (0, HT.h)(["gameState", "isUiHidden"]), [MT, gT] = (0, sT.useState)(wz.c);
+         return (0, vz.g)(yz.p, gT), UT && !WT && "inGame" === mT && MT ? (0, VT.jsxs)("div", {
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4299` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4203) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4299)

```diff
-         } = (0, op.H)(), ip = (0, Wp.H)(), {
+         } = (0, zT.z)(), UT = (0, pT.B)(), {
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4302` → after: `L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4206) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4302)

```diff
-         } = (0, Lp.o)(["gameState", "isUiHidden"]), {
+         } = (0, HT.h)(["gameState", "isUiHidden"]), {
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4304-L4305` → after: `L4208-L4209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4208-L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4208-L4209) · [Before (L4304-L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4304-L4305)

```diff
-         } = (0, Pp.s)(), [Sp, xp] = (0, Np.useState)(Qo.b);
-         return (0, Ho.f)(Bo.i, xp), ip && !Op && "inGame" === cp && Sp ? (0, bp.jsxs)("div", {
+         } = (0, LT.n)(), [gT, nT] = (0, sT.useState)(tz.e);
+         return (0, vz.g)(yz.l, nT), UT && !WT && "inGame" === mT && gT ? (0, VT.jsxs)("div", {
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4308` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4212) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4308)

```diff
-             glyph: (0, Dp.g)("attack")
+             glyph: (0, jT.i)("attack")
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4314-L4318` → after: `L4218-L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4218-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4218-L4222) · [Before (L4314-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4314-L4318)

```diff
-     var ho = cp(8895),
-       ao = cp(1982),
-       no = cp(2492),
-       Fo = cp(8334);
-     const go = pp => pp && !(0, ho.b)(ao.c.get("shopInfo")),
+     var Fz = mT(8894),
+       Pz = mT(2067),
+       Vz = mT(2552),
+       uz = mT(8325);
+     const Cz = TT => TT && !(0, Fz.d)(Pz.d.get("shopInfo")),
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4320-L4321` → after: `L4224-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4224-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4224-L4225) · [Before (L4320-L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4320-L4321)

```diff
-         const pp = "inGame" === (0, Lp.o)(["gameState"]).gameState;
-         return (0, no.e)("shopInfo", (() => {
+         const TT = "inGame" === (0, HT.h)(["gameState"]).gameState;
+         return (0, Vz.d)("shopInfo", (() => {
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4330` → after: `L4234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4234) · [Before (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4330)

```diff
-         } = (0, op.H)(), {
+         } = (0, zT.z)(), {
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4332-L4334` → after: `L4236-L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4236-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4236-L4238) · [Before (L4332-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4332-L4334)

```diff
-         } = (0, Pp.s)();
-         (0, Wp.I)();
-         const cp = (0, bi.l)();
+         } = (0, LT.n)();
+         (0, pT.D)();
+         const mT = (0, PU.k)();
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4336` → after: `L4240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4240) · [Before (L4336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4336)

```diff
-           const pp = Ap.d.register({
+           const TT = lT.e.register({
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4347-L4348` → after: `L4251-L4252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4251-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4251-L4252) · [Before (L4347-L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4347-L4348)

```diff
-           const cp = (0, Kp.i)((() => {
-               "inventory" !== Ap.d.getActiveConsumerName() && xc.forgetSurface()
+           const mT = (0, oT.j)((() => {
+               "inventory" !== lT.e.getActiveConsumerName() && zm.forgetSurface()
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4352` → after: `L4256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4256) · [Before (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4352)

```diff
-               (0, Wp.n)() && (0, Zp.g)(ip) && ip.closest(ji) && (0, Kp.e)() && (0, Kp.p)(ip)
+               (0, pT.m)() && (0, ET.f)(UT) && UT.closest(bU) && (0, oT.i)() && (0, oT.n)(UT)
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4378` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4282) · [Before (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4378)

```diff
-                   glyph: (0, Dp.g)(pp)
+                   glyph: (0, jT.i)(TT)
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4380` → after: `L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4284) · [Before (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4380)

```diff
-                   children: pp(`controller:${op}`)
+                   children: TT(`controller:${zT}`)
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4465` → after: `L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4369) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4465)

```diff
-         const cp = ((pp, ip) => [...cI[pp], ip ? Vo : Ko])(pp, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const mT = ((TT, UT) => [...Az[TT], UT ? hz : Ez])(TT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4508` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4412) · [Before (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4508)

```diff
-         return 1 === Op.length ? Op : pp
+         return 1 === WT.length ? WT : TT
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4510` → after: `L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4414) · [Before (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4510)

```diff
-     var yI = cp(8785);
+     var jM = mT(8787);
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4535` → after: `L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4439) · [Before (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4535)

```diff
-       tI = ["Ux", "nameTag"],
+       BM = ["rg", "nameTag"],
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4551` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4455) · [Before (L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4551)

```diff
-         (0, Ec.f)(pp) ? (0, Ec.b)().close(): (co.noteChosenStop(pp), pp.blur())
+         (0, wm.i)(TT) ? (0, wm.d)().close(): (Tz.noteChosenStop(TT), TT.blur())
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4577` → after: `L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4481) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4577)

```diff
-             (0, Zp.c)(ip.target, " ");
+             (0, ET.e)(UT.target, " ");
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4580` → after: `L4484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4484) · [Before (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4580)

```diff
-             (0, Zp.c)(ip.target, "\n");
+             (0, ET.e)(UT.target, "\n");
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4583` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4487) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4583)

```diff
-             (0, Zp.j)(ip.target, -1);
+             (0, ET.h)(UT.target, -1);
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4586` → after: `L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4490) · [Before (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4586)

```diff
-             (0, Zp.j)(ip.target, 1);
+             (0, ET.h)(UT.target, 1);
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4616` → after: `L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4520) · [Before (L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4616)

```diff
-             (0, Ec.f)(ip.target) && (0, Ec.b)().selectNextChannel()
+             (0, wm.i)(UT.target) && (0, wm.d)().selectNextChannel()
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4624` → after: `L4528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4528) · [Before (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4624)

```diff
-         this.host.hide(), (0, Ec.f)(cp) ? (0, Ec.b)().submit() : (co.noteChosenStop(cp), null === (pp = (ip = (0, Ec.e)(cp)).submit) || void 0 === pp || pp.call(ip), document.activeElement === cp && cp.blur())
+         this.host.hide(), (0, wm.i)(mT) ? (0, wm.d)().submit() : (Tz.noteChosenStop(mT), null === (TT = (UT = (0, wm.e)(mT)).submit) || void 0 === TT || TT.call(UT), document.activeElement === mT && mT.blur())
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4638` → after: `L4542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4542) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4638)

```diff
-         (0, Zp.c)(ip, WI(pp, cp, Op)), this.host.setState({
+         (0, ET.e)(UT, kM(TT, mT, WT)), this.host.setState({
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4648-L4649` → after: `L4552-L4553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4552-L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4552-L4553) · [Before (L4648-L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4648-L4649)

```diff
-           cp && (ip.setSelectionRange(0, ip.value.length), (0, Zp.c)(ip, cp))
-         } else wI.claim(performance.now()) && (this.host.hide(), (0, Ec.b)().sendLine(this.phraseTexts[pp]))
+           mT && (UT.setSelectionRange(0, UT.value.length), (0, ET.e)(UT, mT))
+         } else LM.claim(performance.now()) && (this.host.hide(), (0, wm.d)().sendLine(this.phraseTexts[TT]))
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4652` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4556) · [Before (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4652)

```diff
-     var jI = cp(8807);
+     var qM = mT(8804);
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4663` → after: `L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4567) · [Before (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4663)

```diff
-         this.host = pp, this.editor = ip, this.lastDirection = null, this.navRepeat = new yp.b((0, Up.e)(kI)), this.commandRepeats = new Map(Zo.filter((pp => {
+         this.host = TT, this.editor = UT, this.lastDirection = null, this.navRepeat = new BT.d((0, ZT.e)(iM)), this.commandRepeats = new Map(Sz.filter((TT => {
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4686` → after: `L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4590) · [Before (L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4686)

```diff
-           const cp = (0, Dp.g)(Ip),
+           const mT = (0, jT.i)(MT),
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4690` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4594) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4690)

```diff
-         if (pp.wasPressed((0, Dp.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
+         if (TT.wasPressed((0, jT.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4698-L4700` → after: `L4602-L4604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4602-L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4602-L4604) · [Before (L4698-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4698-L4700)

```diff
-         if (pp.wasPressed((0, Dp.g)("keyboardClose"))) return void eI(ip);
-         const Op = (0, Dp.g)("keyboardType");
-         if (pp.wasPressed(Op)) return Ap.d.consumeButton(Op), void this.host.open(ip);
+         if (TT.wasPressed((0, jT.i)("keyboardClose"))) return void vM(UT);
+         const WT = (0, jT.i)("keyboardType");
+         if (TT.wasPressed(WT)) return lT.e.consumeButton(WT), void this.host.open(UT);
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4703` → after: `L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4607) · [Before (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4703)

```diff
-         if (this.lastDirection = op, !Ip || (0, Ec.f)(ip)) return;
+         if (this.lastDirection = zT, !MT || (0, wm.i)(UT)) return;
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4705` → after: `L4609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4609) · [Before (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4705)

```diff
-         eI(ip), Sp && Ap.d.handOffHeldInput()
+         vM(UT), gT && lT.e.handOffHeldInput()
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4709` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4613) · [Before (L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4709)

```diff
-         if ("Up" === pp && 0 === ip.focus.row && "chat" === ip.kind) return (0, Ec.b)().stepHistory(), void this.host.setState({
+         if ("Up" === TT && 0 === UT.focus.row && "chat" === UT.kind) return (0, wm.d)().stepHistory(), void this.host.setState({
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4741` → after: `L4645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4645) · [Before (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4741)

```diff
-         for (const ip of yp.w)
+         for (const UT of BT.y)
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4743` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4647) · [Before (L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4743)

```diff
-         return (0, yp._)((0, yp.h)(pp.leftStick, (0, Pp.h)().moveDeadzone))
+         return (0, BT.fb)((0, BT.j)(TT.leftStick, (0, LT.k)().moveDeadzone))
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4759` → after: `L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4663) · [Before (L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4759)

```diff
-         ip && Yp.m.GA(jI.b, pp.visible)
+         UT && kT.j.EZ(qM.c, TT.visible)
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4767` → after: `L4671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4671) · [Before (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4767)

```diff
-         const pp = Ap.d.register({
+         const TT = lT.e.register({
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4769` → after: `L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4673) · [Before (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4769)

```diff
-             isActive: () => this.state.visible || (0, Zp.g)(document.activeElement),
+             isActive: () => this.state.visible || (0, ET.f)(document.activeElement),
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4776` → after: `L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4680) · [Before (L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4776)

```diff
-             wakePressActs: pp => qI.includes(pp) || !this.state.visible && pp === (0, Dp.g)("keyboardType")
+             wakePressActs: TT => eM.includes(TT) || !this.state.visible && TT === (0, jT.i)("keyboardType")
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4780` → after: `L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4684) · [Before (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4780)

```diff
-             (0, Zp.g)(ip) && (ip === this.pendingChatInput || (0, Wp.n)() ? this.open(ip) : this.state.visible && ip !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, ET.f)(UT) && (UT === this.pendingChatInput || (0, pT.m)() ? this.open(UT) : this.state.visible && UT !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4788` → after: `L4692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4692) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4788)

```diff
-             pp.isTrusted && this.state.visible && (pp => !pp.repeat && !MI.has(pp.key) && !(0, yI.d)(pp.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(pp.key))(pp) && this.hide()
+             TT.isTrusted && this.state.visible && (TT => !TT.repeat && !YM.has(TT.key) && !(0, jM.e)(TT.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(TT.key))(TT) && this.hide()
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4797` → after: `L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4701) · [Before (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4797)

```diff
-         const Ip = Yp.m.subscribe(Bo.d, (() => {
+         const MT = kT.j.subscribe(yz.c, (() => {
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4800` → after: `L4704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4704) · [Before (L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4800)

```diff
-           Sp = Yp.m.subscribe(jI.e, (pp => {
+           gT = kT.j.subscribe(qM.g, (TT => {
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4804` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4708) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4804)

```diff
-           pp(), document.removeEventListener("focusin", ip, !0), document.removeEventListener("focusout", cp, !0), window.removeEventListener("keydown", Op, !0), window.removeEventListener("resize", op), Yp.m.unsubscribe(Ip), Yp.m.unsubscribe(Sp), this.clearPendingChat(), this.hi … [truncated]
+           TT(), document.removeEventListener("focusin", UT, !0), document.removeEventListener("focusout", mT, !0), window.removeEventListener("keydown", WT, !0), window.removeEventListener("resize", zT), kT.j.unsubscribe(MT), kT.j.unsubscribe(gT), this.clearPendingChat(), this.hi … [truncated]
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4808` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4712) · [Before (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4808)

```diff
-         const pp = (0, Ec.b)();
+         const TT = (0, wm.d)();
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4814` → after: `L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4718) · [Before (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4814)

```diff
-         (0, Zp.g)(pp) ? (document.activeElement !== pp && pp.focus(), document.activeElement === pp && this.open(pp)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", pp)
+         (0, ET.f)(TT) ? (document.activeElement !== TT && TT.focus(), document.activeElement === TT && this.open(TT)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", TT)
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4819` → after: `L4723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4723) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4819)

```diff
-         this.restoreInputMode(), (0, Zp.k)(pp), this.savedInputMode = pp.getAttribute("inputmode"), pp.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, ET.i)(TT), this.savedInputMode = TT.getAttribute("inputmode"), TT.setAttribute("inputmode", "none");
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4824-L4825` → after: `L4728-L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4728-L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4728-L4729) · [Before (L4824-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4824-L4825)

```diff
-           kind: (0, Ec.f)(pp) ? "chat" : null !== (ip = (0, Ec.e)(pp).kind) && void 0 !== ip ? ip : null,
-           accentsFirst: (Op = eo.g.get().getCurrentLanguageCode(), OI.has(Op)),
+           kind: (0, wm.i)(TT) ? "chat" : null !== (UT = (0, wm.e)(TT).kind) && void 0 !== UT ? UT : null,
+           accentsFirst: (WT = fz.f.get().getCurrentLanguageCode(), Rz.has(WT)),
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4852` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4756) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4852)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(pp) : (0, Zp.g)(ip) && this.padInput.onHiddenFrame(pp, ip)
+         this.state.visible ? this.padInput.onVisibleFrame(TT) : (0, ET.f)(UT) && this.padInput.onHiddenFrame(TT, UT)
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4868` → after: `L4772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4772) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4868)

```diff
-     var EI = cp(3722);
+     var xM = mT(3732);
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4886` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4790) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4886)

```diff
-         Ux: "controller:keyboardTargetBookTitle"
+         rg: "controller:keyboardTargetBookTitle"
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4918` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4822) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4918)

```diff
-         } = (0, op.H)(), cp = (() => {
+         } = (0, zT.z)(), mT = (() => {
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4923-L4924` → after: `L4827-L4828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4827-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4827-L4828) · [Before (L4923-L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4923-L4924)

```diff
-         })(), Op = (0, Wp.H)(), Ip = (0, Np.useRef)(null);
-         (0, Pp.s)(), (0, Wp.I)(), (0, Np.useEffect)((() => {
+         })(), WT = (0, pT.B)(), MT = (0, sT.useRef)(null);
+         (0, LT.n)(), (0, pT.D)(), (0, sT.useEffect)((() => {
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4934` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4838) · [Before (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4934)

```diff
-         const Lp = null !== (pp = null === xp || void 0 === xp ? void 0 : xp.value) && void 0 !== pp ? pp : "",
+         const HT = null !== (TT = null === nT || void 0 === nT ? void 0 : nT.value) && void 0 !== TT ? TT : "",
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4943` → after: `L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4847) · [Before (L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4943)

```diff
-           })(Lp, Lp.startsWith("/") ? (0, EI.f)() : [], UI.length),
+           })(HT, HT.startsWith("/") ? (0, xM.d)() : [], lM.length),
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4947` → after: `L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4851) · [Before (L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4947)

```diff
-             return null !== (cp = Yp[ip]) && void 0 !== cp ? cp : ""
+             return null !== (mT = kT[UT]) && void 0 !== mT ? mT : ""
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4991` → after: `L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4895) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4991)

```diff
-           className: fp()(Ec.k, "top" === cp.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: PT()(wm.n, "top" === mT.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4996` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4900) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4996)

```diff
-             "--pad-keyboard-height": `${cp.maxHeightPx}px`
+             "--pad-keyboard-height": `${mT.maxHeightPx}px`
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5044` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4948) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5044)

```diff
-                       glyph: (0, Dp.g)(Sp)
+                       glyph: (0, jT.i)(gT)
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5071` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4975) · [Before (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5071)

```diff
-         } = (0, Zp.o)(ip), Yp = "password" === ip.type ? "\u2022".repeat(Sp.length) : Sp;
+         } = (0, ET.m)(UT), kT = "password" === UT.type ? "\u2022".repeat(gT.length) : gT;
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5099-L5100` → after: `L5003-L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5003-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5003-L5004) · [Before (L5099-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5099-L5100)

```diff
-     var bI = cp(1419),
-       hI = cp(3532);
+     var sM = mT(1513),
+       FM = mT(3524);
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5103` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5007) · [Before (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5103)

```diff
-         return ip.map(Dp.g)
+         return UT.map(jT.i)
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5117` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5021) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5117)

```diff
-         for (const cp of pp)(0, Vp.t)(cp) && ip.push(cp.getBoundingClientRect());
+         for (const mT of TT)(0, AT.r)(mT) && UT.push(mT.getBoundingClientRect());
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5128` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5032) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5128)

```diff
-         if (((0, hI.k)(null === ip || void 0 === ip ? void 0 : ip.layer.kind, (0, hI.o)()) || Op) && cp.push(...rI(document.querySelectorAll(FI.join(",")))), 0 === cp.length) return null;
+         if (((0, FM.f)(null === UT || void 0 === UT ? void 0 : UT.layer.kind, (0, FM.j)()) || WT) && mT.push(...KM(document.querySelectorAll(uM.join(",")))), 0 === mT.length) return null;
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5132` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5036) · [Before (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5132)

```diff
-         } = pp.getBoundingClientRect(), Sp = window.innerHeight - 8, xp = (0, hI.s)(Sp, {
+         } = TT.getBoundingClientRect(), gT = window.innerHeight - 8, nT = (0, FM.o)(gT, {
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5140` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5044) · [Before (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5140)

```diff
-           cp = pp ? `${Math.round(window.innerHeight-pp.getBoundingClientRect().top)}px` : "";
+           mT = TT ? `${Math.round(window.innerHeight-TT.getBoundingClientRect().top)}px` : "";
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5146` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5050) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5146)

```diff
-         } = (0, op.H)(), {
+         } = (0, zT.z)(), {
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5148-L5149` → after: `L5052-L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5052-L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5052-L5053) · [Before (L5148-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5148-L5149)

```diff
-         } = (0, Pp.s)(), cp = (0, Wp.H)(), [Op, Ip] = (0, Np.useState)(!1), [Sp, Yp] = (0, Np.useState)([]), [Up, wp] = (0, Np.useState)(null), vp = (0, Np.useRef)(null), tp = (0, Np.useRef)(null);
-         (0, Ho.f)(jI.b, (pp => {
+         } = (0, LT.n)(), mT = (0, pT.B)(), [WT, MT] = (0, sT.useState)(!1), [gT, kT] = (0, sT.useState)([]), [ZT, cT] = (0, sT.useState)(null), vT = (0, sT.useRef)(null), fT = (0, sT.useRef)(null);
+         (0, vz.g)(qM.c, (TT => {
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5151` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5055) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5151)

```diff
-         })), (0, Ho.f)(hI.r, (() => {
+         })), (0, vz.g)(FM.n, (() => {
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5162-L5163` → after: `L5066-L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5066-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5066-L5067) · [Before (L5162-L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5162-L5163)

```diff
-                 const ip = Ap.d.getActiveConsumerName(),
-                   cp = (0, hI.i)();
+                 const UT = lT.e.getActiveConsumerName(),
+                   mT = (0, FM.e)();
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5165-L5166` → after: `L5069-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5069-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5069-L5070) · [Before (L5165-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5165-L5166)

```diff
-                   const pp = (0, Dp.g)(cp),
-                     ip = "emoteWheel" === cp && "wheel" === (0, Pp.h)().emoteButton || !(0, yp.D)(Ap.d.getLastFrame().values, pp) ? {
+                   const TT = (0, jT.i)(mT),
+                     UT = "emoteWheel" === mT && "wheel" === (0, LT.k)().emoteButton || !(0, BT.H)(lT.e.getLastFrame().values, TT) ? {
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5174` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5078) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5174)

```diff
-                     glyphs: [(0, Dp.t)(pp)],
+                     glyphs: [(0, jT.y)(TT)],
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5182` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5086) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5182)

```diff
-                 if (!Op || "focus" !== ip && "cursor" !== ip) return (0, hI.e)(Dp.g);
+                 if (!WT || "focus" !== UT && "cursor" !== UT) return (0, FM.b)(jT.i);
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5188-L5189` → after: `L5092-L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5092-L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5092-L5093) · [Before (L5188-L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5188-L5189)

```diff
-                   Sp = (0, gp.p)(Op.root),
-                   xp = Sp ? !(0, Vp.z)(Sp) : Boolean(Op.layer.close),
+                   gT = (0, ST.w)(WT.root),
+                   nT = gT ? !(0, AT.t)(gT) : Boolean(WT.layer.close),
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5216` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5120) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5216)

```diff
-                 }) : wp && (0, gp.t)(wp) ? op.push({
+                 }) : cT && (0, ST.D)(cT) ? zT.push({
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5239-L5240` → after: `L5143-L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5143-L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5143-L5144) · [Before (L5239-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5239-L5240)

```diff
-                 const Hp = Lp.c.get("openEverythingMenuName");
-                 return "inGame" === Lp.c.get("gameState") && "popup" !== Op.layer.kind && null !== Hp && ((0, Ac.j)(Hp) ? op.push(...nI("leaderboard", "controller:menusClose")) : Hp !== Dc.n.LOBBY_LEADERBOARD && op.push(...nI("leaderboard", "controller:menusLobby"))), op.push({
+                 const qT = HT.b.get("openEverythingMenuName");
+                 return "inGame" === HT.b.get("gameState") && "popup" !== WT.layer.kind && null !== qT && ((0, Hm.g)(qT) ? zT.push(...VM("leaderboard", "controller:menusClose")) : qT !== nm.k.LOBBY_LEADERBOARD && zT.push(...VM("leaderboard", "controller:menusLobby"))), zT.push({
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5246` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5150) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5246)

```diff
-               Op = ((pp, ip) => `${pp.map((pp=>`${pp.glyphs.join("+")}:${pp.labelKey}`)).join("|")}@${ip}`)(ip, cp);
+               WT = ((TT, UT) => `${TT.map((TT=>`${TT.glyphs.join("+")}:${TT.labelKey}`)).join("|")}@${UT}`)(UT, mT);
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5280-L5281` → after: `L5184-L5185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5184-L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5184-L5185) · [Before (L5280-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5280-L5281)

```diff
-     var KI = cp(1770);
-     const VI = [Vp.b, "label", "[data-pad-slider]"].join(","),
+     var EM = mT(1870);
+     const hM = [AT.d, "label", "[data-pad-slider]"].join(","),
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5288` → after: `L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5192) · [Before (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5288)

```diff
-           const cp = document.documentElement.classList.contains(Wp.y) ? ip[ip.length - 1] : void 0;
+           const mT = document.documentElement.classList.contains(pT.t) ? UT[UT.length - 1] : void 0;
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5316` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5220) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5316)

```diff
-           })) && lp(cp, pp, ip) ? cp : null
+           })) && yT(mT, TT, UT) ? mT : null
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5325` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5229) · [Before (L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5325)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5331` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5235) · [Before (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5331)

```diff
-           const pp = Ap.d.register({
+           const TT = lT.e.register({
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5340` → after: `L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5244) · [Before (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5340)

```diff
-               wakePressActs: pp => (0, Ap.f)(pp) || pp === (0, Dp.g)("menuConfirm") && (0, gp.v)((0, Wp.d)())
+               wakePressActs: TT => (0, lT.g)(TT) || TT === (0, jT.i)("menuConfirm") && (0, ST.H)((0, pT.e)())
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5342` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5246) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5342)

```diff
-             ip = (0, IO.o)((pp => {
+             UT = (0, WW.j)((TT => {
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5346` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5250) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5346)

```diff
-             cp = Yp.m.subscribe("appManagerUpdated|activeInputDevice", (pp => {
+             mT = kT.j.subscribe("appManagerUpdated|activeInputDevice", (TT => {
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5350` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5254) · [Before (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5350)

```diff
-             pp(), ip(), Yp.m.unsubscribe(cp), this.deactivate()
+             TT(), UT(), kT.j.unsubscribe(mT), this.deactivate()
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5357` → after: `L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5261) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5357)

```diff
-           return this.active && !this.hidden && (0, Wp.n)()
+           return this.active && !this.hidden && (0, pT.m)()
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5366` → after: `L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5270) · [Before (L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5366)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.GA()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.EZ()
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5387` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5291) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5387)

```diff
-           }, this.GA())
+           }, this.EZ())
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5394-L5397` → after: `L5298-L5301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5298-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5298-L5301) · [Before (L5394-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5394-L5397)

```diff
-           const cp = pp.wokeDevice ? (0, Wp.d)() : null;
-           if (cp && this.jumpTo(cp), !(0, Wp.n)()) return void this.hide();
-           const Op = (0, Dp.g)("menuToggleCursor");
-           if (pp.wasPressed(Op)) return Ap.d.consumeButton(Op), void kO(this.getHandoff(null));
+           const mT = TT.wokeDevice ? (0, pT.e)() : null;
+           if (mT && this.jumpTo(mT), !(0, pT.m)()) return void this.hide();
+           const WT = (0, jT.i)("menuToggleCursor");
+           if (TT.wasPressed(WT)) return lT.e.consumeButton(WT), void OW(this.getHandoff(null));
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5399-L5402` → after: `L5303-L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5303-L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5303-L5306) · [Before (L5399-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5399-L5402)

```diff
-           const op = (0, Dp.g)("menuConfirm"),
-             Ip = (0, Dp.g)("menuSecondary");
-           if (pp.wasPressed((0, Dp.g)("menuBack"))) return (0, gp.g)(ip.root) || (0, gp.c)(ip.root) || yO(), void this.GA();
-           if (iO(null, pp, ip)) return pp.wasReleased(op) && this.press && (this.updateHit(!1), this.updateConfirm(pp, op)), void this.GA();
+           const zT = (0, jT.i)("menuConfirm"),
+             MT = (0, jT.i)("menuSecondary");
+           if (TT.wasPressed((0, jT.i)("menuBack"))) return (0, ST.n)(UT.root) || (0, ST.g)(UT.root) || LW(), void this.EZ();
+           if (Rm(null, TT, UT)) return TT.wasReleased(zT) && this.press && (this.updateHit(!1), this.updateConfirm(TT, zT)), void this.EZ();
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5414` → after: `L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5318) · [Before (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5414)

```diff
-             xp = (0, Pp.h)().moveDeadzone,
+             nT = (0, LT.k)().moveDeadzone,
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5416` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5320) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5416)

```diff
-               const cp = (0, yp.h)(pp, dp(ip));
+               const mT = (0, BT.j)(TT, iT(UT));
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5422` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5326) · [Before (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5422)

```diff
-             if (!Lp && !kp(pp.rightStick) && !ip && !cp && !pp.wokeDevice) return void this.GA();
+             if (!HT && !eT(TT.rightStick) && !UT && !mT && !TT.wokeDevice) return void this.EZ();
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5425` → after: `L5329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5329) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5425)

```diff
-             }, pp.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.GA()
+             }, TT.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.EZ()
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5434` → after: `L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5338) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5434)

```diff
-             cursorSpeedPercent: (0, Pp.h)().cursorSpeed,
+             cursorSpeedPercent: (0, LT.k)().cursorSpeed,
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5443` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5347) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5443)

```diff
-           (Up || wp || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Up), this.updateConfirm(pp, op), this.updateSecondary(pp, Ip), this.updateScroll(pp, ip), this.GA()
+           (ZT || cT || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(ZT), this.updateConfirm(TT, zT), this.updateSecondary(TT, MT), this.updateScroll(TT, UT), this.EZ()
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5449` → after: `L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5353) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5449)

```diff
-               key: (0, IO.t)(pp.layer),
+               key: (0, WW.n)(TT.layer),
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5469` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5373) · [Before (L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5469)

```diff
-           const Op = null !== cp && void 0 !== cp ? cp : co.pickInitial(ip.root, {
+           const WT = null !== mT && void 0 !== mT ? mT : Tz.pickInitial(UT.root, {
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5474` → after: `L5378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5378) · [Before (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5474)

```diff
-           Op && (this.pendingPageStart = null, this.jumpTo((0, gp.q)(Op)))
+           WT && (this.pendingPageStart = null, this.jumpTo((0, ST.x)(WT)))
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5484` → after: `L5388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5388) · [Before (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5484)

```diff
-             Op = cp && pp.order <= this.layerOrder ? cp : co.getLayerStartPoint(pp.root);
+             WT = mT && TT.order <= this.layerOrder ? mT : Tz.getLayerStartPoint(TT.root);
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5491` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5395) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5491)

```diff
-             element: null !== (ip = this.interactive) && void 0 !== ip ? ip : this.findDraggedSliderNearby(),
+             element: null !== (UT = this.interactive) && void 0 !== UT ? UT : this.findDraggedSliderNearby(),
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5502` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5406) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5502)

```diff
-           return cp >= ip.top - 40 && cp <= ip.bottom + 40 ? pp : null
+           return mT >= UT.top - 40 && mT <= UT.bottom + 40 ? TT : null
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5506-L5507` → after: `L5410-L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5410-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5410-L5411) · [Before (L5506-L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5506-L5507)

```diff
-           const ip = yp.w.find((ip => pp.wasPressed(ip)));
-           return !!ip && (cp = this.getHandoff(ip), dO = wO(cp), tO = null, eO.lock(), Ap.d.handOffHeldInput(), !0);
+           const UT = BT.y.find((UT => TT.wasPressed(UT)));
+           return !!UT && (mT = this.getHandoff(UT), fW = BW(mT), cW = null, qW.lock(), lT.e.handOffHeldInput(), !0);
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5521` → after: `L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5425) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5521)

```diff
-           const cp = (0, Pp.h)().cursorMagnetism && !(0, KI.b)(pp) && !pp.closest("[data-pad-slider]"),
+           const mT = (0, LT.k)().cursorMagnetism && !(0, EM.e)(TT) && !TT.closest("[data-pad-slider]"),
```

#### 468. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5535` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5439) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5535)

```diff
-             Op = cp && !(0, vp.u)(cp) && (pp => {
+             WT = mT && !(0, vT.q)(mT) && (TT => {
```

#### 469. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5539-L5540` → after: `L5443-L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5443-L5444) · [Before (L5539-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5539-L5540)

```diff
-             })(cp) ? cp : null;
-           if (Op !== this.hit) return (0, gp.m)(this.hit, Op, ip), this.hit = Op, void this.setInteractive(Op ? (pp => {
+             })(mT) ? mT : null;
+           if (WT !== this.hit) return (0, ST.r)(this.hit, WT, UT), this.hit = WT, void this.setInteractive(WT ? (TT => {
```

#### 470. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5544-L5545` → after: `L5448-L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5448-L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5448-L5449) · [Before (L5544-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5544-L5545)

```diff
-               const pp = null !== (cp = null === (Op = ip.parentElement) || void 0 === Op ? void 0 : Op.closest("[data-pad-focusable]")) && void 0 !== cp ? cp : ip;
-               return (0, Vp.z)(pp) ? {
+               const TT = null !== (mT = null === (WT = UT.parentElement) || void 0 === WT ? void 0 : WT.closest("[data-pad-focusable]")) && void 0 !== mT ? mT : UT;
+               return (0, AT.t)(TT) ? {
```

#### 471. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5562` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5466) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5562)

```diff
-           pp && Op && (0, gp.m)(Op, Op, ip)
+           TT && WT && (0, ST.r)(WT, WT, UT)
```

#### 472. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5572` → after: `L5476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5476) · [Before (L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5572)

```diff
-           this.hit && (0, gp.m)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
+           this.hit && (0, ST.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
```

#### 473. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5579` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5483) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5579)

```diff
-           if (!pp || (0, gp.t)(pp)) return {
+           if (!TT || (0, ST.D)(TT)) return {
```

#### 474. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5588` → after: `L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5492) · [Before (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5588)

```diff
-           } : ((0, gp.n)(pp, this.getPoint()), {
+           } : ((0, ST.s)(TT, this.getPoint()), {
```

#### 475. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5617-L5618` → after: `L5521-L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5521-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5521-L5522) · [Before (L5617-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5617-L5618)

```diff
-             const pp = null !== Ip && void 0 !== Ip ? Ip : cp.target.isConnected ? cp.target : null;
-             pp && (0, gp.o)(pp, op);
+             const TT = null !== MT && void 0 !== MT ? MT : mT.target.isConnected ? mT.target : null;
+             TT && (0, ST.t)(TT, zT);
```

#### 476. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5624` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5528) · [Before (L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5624)

```diff
-             ip && (co.noteCursorActivation(ip), (0, vp.g)(ip, new MouseEvent("click", (0, gp.F)(op, 0, 0))), (0, gp.e)(ip), (0, gp.B)(ip) && (0, gp.z)(ip))
+             UT && (Tz.noteCursorActivation(UT), (0, vT.g)(UT, new MouseEvent("click", (0, ST.M)(zT, 0, 0))), (0, ST.k)(UT), (0, ST.J)(UT) && (0, ST.I)(UT))
```

#### 477. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5629-L5630` → after: `L5533-L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5533-L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5533-L5534) · [Before (L5629-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5629-L5630)

```diff
-           const Op = null !== (pp = null === (ip = this.hit) || void 0 === ip ? void 0 : ip.closest("[data-pad-repeat]")) && void 0 !== pp ? pp : null;
-           this.repeatStop = Op, this.repeatKey = null !== (cp = null === Op || void 0 === Op ? void 0 : Op.getAttribute("data-pad-repeat")) && void 0 !== cp ? cp : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           const WT = null !== (TT = null === (UT = this.hit) || void 0 === UT ? void 0 : UT.closest("[data-pad-repeat]")) && void 0 !== TT ? TT : null;
+           this.repeatStop = WT, this.repeatKey = null !== (mT = null === WT || void 0 === WT ? void 0 : WT.getAttribute("data-pad-repeat")) && void 0 !== mT ? mT : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 478. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5636` → after: `L5540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5540) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5636)

```diff
-           pp.isConnected && !(0, Vp.z)(pp) && pp.getAttribute("data-pad-repeat") === this.repeatKey && ip && pp.contains(ip) ? pp.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, co.noteCursorActivation(pp), (0, vp.g … [truncated]
+           TT.isConnected && !(0, AT.t)(TT) && TT.getAttribute("data-pad-repeat") === this.repeatKey && UT && TT.contains(UT) ? TT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Tz.noteCursorActivation(TT), (0, vT.g … [truncated]
```

#### 479. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5642` → after: `L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5546) · [Before (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5642)

```diff
-           "slider" === pp.kind && pp.adjuster.endDrag(), "pointer" === pp.kind && pp.target.isConnected && (0, gp.o)(pp.target, this.getPoint())
+           "slider" === TT.kind && TT.adjuster.endDrag(), "pointer" === TT.kind && TT.target.isConnected && (0, ST.t)(TT.target, this.getPoint())
```

#### 480. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5648` → after: `L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5552) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5648)

```diff
-           pp.wasPressed(ip) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !pp.isHeld(ip) && (this.secondaryArmed = !1, pp.wasReleased(ip) && this.hit && (0, gp.k)(this.hit, this.getPoint(), 2))
+           TT.wasPressed(UT) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !TT.isHeld(UT) && (this.secondaryArmed = !1, TT.wasReleased(UT) && this.hit && (0, ST.p)(this.hit, this.getPoint(), 2))
```

#### 481. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5696` → after: `L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5600) · [Before (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5696)

```diff
-           ip = (0, Wp.H)();
+           UT = (0, pT.B)();
```

#### 482. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5716` → after: `L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5620) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5716)

```diff
-                 return null !== ip && void 0 !== ip && ip.isConnected ? ip : null
+                 return null !== UT && void 0 !== UT && UT.isConnected ? UT : null
```

#### 483. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5719` → after: `L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5623) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5719)

```diff
-               const xp = null !== (ip = null === op || void 0 === op ? void 0 : op.closest("[data-pad-reticle-box]")) && void 0 !== ip ? ip : op;
+               const nT = null !== (UT = null === zT || void 0 === zT ? void 0 : zT.closest("[data-pad-reticle-box]")) && void 0 !== UT ? UT : zT;
```

#### 484. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5754` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5658) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5754)

```diff
-         pp.style.transform = `translate3d(${ip.x}px, ${ip.y}px, 0)`, pp.classList.toggle("Visible", ip.visible), pp.classList.toggle("Pressed", ip.pressed)
+         TT.style.transform = `translate3d(${UT.x}px, ${UT.y}px, 0)`, TT.classList.toggle("Visible", UT.visible), TT.classList.toggle("Pressed", UT.pressed)
```

#### 485. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5796` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5700) · [Before (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5796)

```diff
-             return (0, IO.q)({
+             return (0, WW.m)({
```

#### 486. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5807` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5711) · [Before (L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5807)

```diff
-                     return null !== (cp = [...pp.querySelectorAll("button")].find((pp => !pp.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== cp ? cp : null
+                     return null !== (mT = [...TT.querySelectorAll("button")].find((TT => !TT.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== mT ? mT : null
```

#### 487. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5826` → after: `L5730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5730) · [Before (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5826)

```diff
-             const pp = (0, Wp.n)() ? WO() : null,
+             const TT = (0, pT.m)() ? lW() : null,
```

#### 488. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5839` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5743) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5839)

```diff
-           const pp = (0, vp.n)(document.body),
+           const TT = (0, vT.j)(document.body),
```

#### 489. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5849` → after: `L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5753) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5849)

```diff
-         } = (0, Pp.s)(), ip = (0, bI.r)() && pp;
+         } = (0, LT.n)(), UT = (0, sM.w)() && TT;
```

#### 490. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5858-L5861` → after: `L5762-L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5762-L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5762-L5765) · [Before (L5858-L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5858-L5861)

```diff
-     var yS = cp(8900),
-       US = cp(8928),
-       wS = cp(8917);
-     cp(8937);
+     var jg = mT(8903),
+       lg = mT(8925),
+       Lg = mT(8918);
+     mT(8933);
```

#### 491. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5870` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5774) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5870)

```diff
-           xp((0, wS.A)(pp, ip, Sp.current))
+           nT((0, Lg.F)(TT, UT, gT.current))
```

#### 492. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5872-L5874` → after: `L5776-L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5776-L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5776-L5778) · [Before (L5872-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5872-L5874)

```diff
-         (0, Np.useLayoutEffect)((() => (ip(cp), (0, hI.y)(pp, cp), Yp.m.GA(hI.r), () => {
-           ip(!1), (0, hI.y)(pp, !1), Yp.m.GA(hI.r)
-         })), [cp, pp, ip]), (0, Ho.f)("appManagerUpdated|activeInputDevice", (pp => {
+         (0, sT.useLayoutEffect)((() => (UT(mT), (0, FM.q)(TT, mT), kT.j.EZ(FM.n), () => {
+           UT(!1), (0, FM.q)(TT, !1), kT.j.EZ(FM.n)
+         })), [mT, TT, UT]), (0, vz.g)("appManagerUpdated|activeInputDevice", (TT => {
```

#### 493. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5876` → after: `L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5780) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5876)

```diff
-         })), (0, Ho.f)("appManagerUpdated|gameState", (pp => {
+         })), (0, vz.g)("appManagerUpdated|gameState", (TT => {
```

#### 494. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5882` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5786) · [Before (L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5882)

```diff
-         return (0, Ho.f)("appManagerUpdated|openEverythingMenuName", Pp), (0, Ho.f)("appManagerUpdated|openInGameMenuName", Pp), {
+         return (0, vz.g)("appManagerUpdated|openEverythingMenuName", LT), (0, vz.g)("appManagerUpdated|openInGameMenuName", LT), {
```

#### 495. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5908-L5909` → after: `L5812-L5813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5812-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5812-L5813) · [Before (L5908-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5908-L5909)

```diff
-               width: 2 * wS.r + "rem",
-               height: 2 * wS.r + "rem"
+               width: 2 * Lg.u + "rem",
+               height: 2 * Lg.u + "rem"
```

#### 496. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5913` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5817) · [Before (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5913)

```diff
-               viewBox: `0 0 ${wS.m} ${wS.m}`,
+               viewBox: `0 0 ${Lg.p} ${Lg.p}`,
```

#### 497. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5915` → after: `L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5819) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5915)

```diff
-                 d: (0, wS.t)(pp, cp, wS.f, wS.h, wS.k),
+                 d: (0, Lg.y)(TT, mT, Lg.i, Lg.l, Lg.o),
```

#### 498. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5922-L5924` → after: `L5826-L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5826-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5826-L5828) · [Before (L5922-L5924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5922-L5924)

```diff
-                 cx: wS.f,
-                 cy: wS.f,
-                 r: wS.k
+                 cx: Lg.i,
+                 cy: Lg.i,
+                 r: Lg.o
```

#### 499. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5927-L5929` → after: `L5831-L5833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5831-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5831-L5833) · [Before (L5927-L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5927-L5929)

```diff
-                 cx: wS.f,
-                 cy: wS.f,
-                 r: wS.h
+                 cx: Lg.i,
+                 cy: Lg.i,
+                 r: Lg.l
```

#### 500. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5932` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5836) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5932)

```diff
-                 d: (0, wS.t)(Op, cp, wS.f, wS.h, wS.k)
+                 d: (0, Lg.y)(WT, mT, Lg.i, Lg.l, Lg.o)
```

#### 501. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5935` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5839) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5935)

```diff
-               const ip = (0, wS.w)(pp, cp);
+               const UT = (0, Lg.D)(TT, mT);
```

#### 502. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5941-L5942` → after: `L5845-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846) · [Before (L5941-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5941-L5942)

```diff
-                   left: `calc(50% + ${wS.c*Math.cos(ip)}rem)`,
-                   top: `calc(50% + ${wS.c*Math.sin(ip)}rem)`
+                   left: `calc(50% + ${Lg.e*Math.cos(UT)}rem)`,
+                   top: `calc(50% + ${Lg.e*Math.sin(UT)}rem)`
```

#### 503. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5958-L5961` → after: `L5862-L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5862-L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5862-L5865) · [Before (L5958-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5958-L5961)

```diff
-         } = (0, op.H)(), ip = vS("chat", lc.r), cp = (0, Np.useMemo)((() => UI.map((ip => pp(ip)))), [pp]);
-         return (0, Ho.f)(lc.n, (() => {
-           ip.open || (0, yS.f)() || (0, US.x)() || "inGame" !== Lp.c.get("gameState") || (0, Ac.l)() || !(0, Ec.b)() || ip.show()
-         })), (0, Ho.f)(lc.h, (pp => {
+         } = (0, zT.z)(), UT = pg("chat", am.q), mT = (0, sT.useMemo)((() => lM.map((UT => TT(UT)))), [TT]);
+         return (0, vz.g)(am.m, (() => {
+           UT.open || (0, jg.e)() || (0, lg.o)() || "inGame" !== HT.b.get("gameState") || (0, Hm.l)() || !(0, wm.d)() || UT.show()
+         })), (0, vz.g)(am.g, (TT => {
```

#### 504. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5963` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5867) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5963)

```diff
-         })), (0, Ho.f)(lc.m, (() => {
+         })), (0, vz.g)(am.k, (() => {
```

#### 505. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5967-L5968` → after: `L5871-L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5871-L5872) · [Before (L5967-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5967-L5968)

```diff
-           null !== Op ? wI.claim(performance.now()) && (ip.close(), null === (pp = (0, Ec.b)()) || void 0 === pp || pp.sendLine(cp[Op])) : ip.close()
-         })), (0, Ho.f)(lc.l, ip.close), ip.open ? (0, bp.jsx)(tS, {
+           null !== WT ? LM.claim(performance.now()) && (UT.close(), null === (TT = (0, wm.d)()) || void 0 === TT || TT.sendLine(mT[WT])) : UT.close()
+         })), (0, vz.g)(am.j, UT.close), UT.open ? (0, VT.jsx)(Bg, {
```

#### 506. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5980-L5983` → after: `L5884-L5887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5884-L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5884-L5887) · [Before (L5980-L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5980-L5983)

```diff
-         } = (0, op.H)(), ip = vS("actionButton", US.z), [cp, Op] = (0, Np.useState)([]);
-         if ((0, Ho.f)(US.p, (pp => {
-             ip.open || (0, yS.f)() || (0, lc.d)() || "inGame" !== Lp.c.get("gameState") || (0, Ac.l)() || (Op(pp), ip.show())
-           })), (0, Ho.f)(US.e, (pp => {
+         } = (0, zT.z)(), UT = pg("actionButton", lg.s), [mT, WT] = (0, sT.useState)([]);
+         if ((0, vz.g)(lg.k, (TT => {
+             UT.open || (0, jg.e)() || (0, am.c)() || "inGame" !== HT.b.get("gameState") || (0, Hm.l)() || (WT(TT), UT.show())
+           })), (0, vz.g)(lg.c, (TT => {
```

#### 507. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5985` → after: `L5889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5889) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5985)

```diff
-           })), (0, Ho.f)(US.l, (() => {
+           })), (0, vz.g)(lg.j, (() => {
```

#### 508. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5988-L5989` → after: `L5892-L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5892-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5892-L5893) · [Before (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L5988-L5989)

```diff
-             ip.close(), null !== pp && Yp.m.GA(US.t, cp[pp])
-           })), (0, Ho.f)(US.i, ip.close), !ip.open) return null;
+             UT.close(), null !== TT && kT.j.EZ(lg.n, mT[TT])
+           })), (0, vz.g)(lg.g, UT.close), !UT.open) return null;
```

#### 509. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6007` → after: `L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5911) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6007)

```diff
-     var uS = cp(104);
+     var fg = mT(102);
```

#### 510. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6010` → after: `L5914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5914) · [Before (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6010)

```diff
-         const cp = (0, vp.n)(document.getElementById("root")),
+         const mT = (0, vT.j)(document.getElementById("root")),
```

#### 511. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6013` → after: `L5917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5917) · [Before (L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6013)

```diff
-             const pp = [Yp.m.subscribe(oo.f, (() => {
+             const TT = [kT.j.subscribe(mz.c, (() => {
```

#### 512. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6015` → after: `L5919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5919) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6015)

```diff
-               })), Yp.m.subscribe("damagedByOtherPlayer", (() => {
+               })), kT.j.subscribe("damagedByOtherPlayer", (() => {
```

#### 513. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6017` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5921) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6017)

```diff
-               })), Yp.m.subscribe("yourAttackHit", (pp => {
+               })), kT.j.subscribe("yourAttackHit", (TT => {
```

#### 514. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6027` → after: `L5931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5931) · [Before (L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6027)

```diff
-               for (const ip of pp) Yp.m.unsubscribe(ip);
+               for (const UT of TT) kT.j.unsubscribe(UT);
```

#### 515. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6033` → after: `L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5937) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6033)

```diff
-               getVisitId: Wo.g,
+               getVisitId: lz.d,
```

#### 516. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6036-L6037` → after: `L5940-L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5940-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5940-L5941) · [Before (L6036-L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6036-L6037)

```diff
-                 const pp = Po.l.getItem(Uo);
-                 return "string" === typeof pp ? pp : null
+                 const TT = jz.m.getItem(pz);
+                 return "string" === typeof TT ? TT : null
```

#### 517. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6040` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5944) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6040)

```diff
-                 Po.l.setItem(Uo, pp)
+                 jz.m.setItem(pz, TT)
```

#### 518. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6042` → after: `L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5946) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6042)

```diff
-               isPadActive: Wp.n,
+               isPadActive: pT.m,
```

#### 519. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6045` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5949) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6045)

```diff
-                 return null !== (pp = null === (ip = Sp.e.getActivePad()) || void 0 === ip ? void 0 : ip.family) && void 0 !== pp ? pp : null
+                 return null !== (TT = null === (UT = gT.e.getActivePad()) || void 0 === UT ? void 0 : UT.family) && void 0 !== TT ? TT : null
```

#### 520. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6048-L6049` → after: `L5952-L5953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5952-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5952-L5953) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6048-L6049)

```diff
-               getInputType: Ao.c,
-               Yy: Do.logControllerUsedToGtag
+               getInputType: kz.b,
+               Gp: Hz.logControllerUsedToGtag
```

#### 521. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6058` → after: `L5962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5962) · [Before (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6058)

```diff
-               op = Yp.m.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               zT = kT.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 522. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6061` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5965) · [Before (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6061)

```diff
-               Ip = (0, Wo.m)((() => {
+               MT = (0, lz.g)((() => {
```

#### 523. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6065` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5969) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6065)

```diff
-               Yp.m.unsubscribe(op), Ip(), null !== cp && clearTimeout(cp)
+               kT.j.unsubscribe(zT), MT(), null !== mT && clearTimeout(mT)
```

#### 524. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6069-L6070` → after: `L5973-L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5973-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5973-L5974) · [Before (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6069-L6070)

```diff
-             const Op = (0, Wp.u)(pp, cp);
-             Ap.d.dispatch(pp, ip, Op)
+             const WT = (0, pT.r)(TT, mT);
+             lT.e.dispatch(TT, UT, WT)
```

#### 525. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6072` → after: `L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5976) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6072)

```diff
-         let Dp = null !== (pp = null === (ip = Sp.e.getActivePad()) || void 0 === ip ? void 0 : ip.family) && void 0 !== pp ? pp : null;
+         let jT = null !== (TT = null === (UT = gT.e.getActivePad()) || void 0 === UT ? void 0 : UT.family) && void 0 !== TT ? TT : null;
```

#### 526. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6075-L6076` → after: `L5979-L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5979-L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5979-L5980) · [Before (L6075-L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6075-L6076)

```diff
-             (Ap.d.reset(), (0, Wp.A)(), Yp.m.GA(Sp.c, pp), (null !== (ip = null === pp || void 0 === pp ? void 0 : pp.family) && void 0 !== ip ? ip : null) !== Dp) && (Dp = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.family) && void 0 !== cp ? cp : null, Yp.m.GA(Pp. … [truncated]
-             !pp && (0, Wp.n)() && (0, Wp.E)(Lp.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (lT.e.reset(), (0, pT.w)(), kT.j.EZ(gT.d, TT), (null !== (UT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== UT ? UT : null) !== jT) && (jT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== mT ? mT : null, kT.j.EZ(LT. … [truncated]
+             !TT && (0, pT.m)() && (0, pT.x)(HT.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 527. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6079` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5983) · [Before (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6079)

```diff
-             "visible" !== document.visibilityState && Ap.d.clear()
+             "visible" !== document.visibilityState && lT.e.clear()
```

#### 528. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6082` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5986) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6082)

```diff
-             Ap.d.clear()
+             lT.e.clear()
```

#### 529. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6084` → after: `L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5988) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6084)

```diff
-         document.addEventListener("visibilitychange", Up), window.addEventListener("blur", wp), Sp.e.start(), (0, Yo.k)();
+         document.addEventListener("visibilitychange", ZT), window.addEventListener("blur", cT), gT.e.start(), (0, nz.m)();
```

#### 530. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6094-L6097` → after: `L5998-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5998-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L5998-L6001) · [Before (L6094-L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6094-L6097)

```diff
-     var mS = cp(8327),
-       RS = cp(8944);
-     const qS = new Set(Yo.h),
-       MS = pp => `${RS.o}${(0,Pp.k)()}/${pp}`,
+     var bg = mT(8313),
+       Og = mT(8941);
+     const eg = new Set(nz.k),
+       Yg = TT => `${Og.m}${(0,LT.l)()}/${TT}`,
```

#### 531. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6099-L6101` → after: `L6003-L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6003-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6003-L6005) · [Before (L6099-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6099-L6101)

```diff
-         if (!(0, RS.l)(pp)) return null;
-         const [ip, cp] = pp.slice(RS.o.length).split("/");
-         return (0, mS.f)(ip) && qS.has(cp) ? (0, Yo.g)(ip, cp) : null
+         if (!(0, Og.k)(TT)) return null;
+         const [UT, mT] = TT.slice(Og.m.length).split("/");
+         return (0, bg.g)(UT) && eg.has(mT) ? (0, nz.g)(UT, mT) : null
```

#### 532. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6103` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6007) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6103)

```diff
-     var ES = cp(8952);
+     var xg = mT(8950);
```

#### 533. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6107` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6011) · [Before (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6107)

```diff
-         } = (0, op.H)(), ip = (0, Wp.H)(), {
+         } = (0, zT.z)(), UT = (0, pT.B)(), {
```

#### 534. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6110` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6014) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6110)

```diff
-         } = (0, Lp.o)(["gameState", "isUiHidden"]), {
+         } = (0, HT.h)(["gameState", "isUiHidden"]), {
```

#### 535. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6113-L6114` → after: `L6017-L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6017-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6017-L6018) · [Before (L6113-L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6113-L6114)

```diff
-         } = (0, Pp.s)(), [xp, Yp] = (0, Np.useState)(ES.b);
-         return (0, Ho.f)(Bo.p, Yp), ip && !Op && "inGame" === cp && xp ? (0, bp.jsxs)("div", {
+         } = (0, LT.n)(), [nT, kT] = (0, sT.useState)(xg.d);
+         return (0, vz.g)(yz.w, kT), UT && !WT && "inGame" === mT && nT ? (0, VT.jsxs)("div", {
```

#### 536. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6117` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6021) · [Before (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6117)

```diff
-             glyph: (0, Dp.g)("toggle" === Sp ? "sneak" : "sneakToggle")
+             glyph: (0, jT.i)("toggle" === gT ? "sneak" : "sneakToggle")
```

#### 537. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6167` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6071) · [Before (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6167)

```diff
-               Ip.style.transform = `translate3d(${Math.round(Sp)}px, ${Math.round(xp)}px, 0)`, Ip.style.visibility = "visible"
+               MT.style.transform = `translate3d(${Math.round(gT)}px, ${Math.round(nT)}px, 0)`, MT.style.visibility = "visible"
```

#### 538. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6184-L6188` → after: `L6088-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6088-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6088-L6092) · [Before (L6184-L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6184-L6188)

```diff
-     var JS = cp(1060),
-       BS = cp(8961),
-       NS = cp(1480),
-       TS = cp(8967),
-       fS = cp(8972);
+     var ag = mT(1135),
+       yg = mT(8953),
+       Xg = mT(1569),
+       Ig = mT(8955),
+       Qg = mT(8964);
```

#### 539. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6210` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6114) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6210)

```diff
-         } = (0, op.H)(), ip = (0, Wp.H)(), cp = (0, BS.d)(), Op = (0, no.i)("_tasks"), Ip = (0, no.i)("_availableLeaderboards");
+         } = (0, zT.z)(), UT = (0, pT.B)(), mT = (0, yg.d)(), WT = (0, Vz.f)("_tasks"), MT = (0, Vz.f)("_availableLeaderboards");
```

#### 540. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6231` → after: `L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6135) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6231)

```diff
-             } = bS[ip], op = "leave" === ip ? NS.K : NS.f;
+             } = sg[UT], zT = "leave" === UT ? Xg.I : Xg.e;
```

#### 541. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6238-L6239` → after: `L6142-L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6142-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6142-L6143) · [Before (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6238-L6239)

```diff
-                       return Yp.m.GA(fS.i), void Lp.c.set({
-                         openEverythingMenuName: Dc.n.SHOP
+                       return kT.j.EZ(Qg.m), void HT.b.set({
+                         openEverythingMenuName: nm.k.SHOP
```

#### 542. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6242` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6146) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6242)

```diff
-                       return void Yp.m.GA("toggleMenu", "retentionFeatures");
+                       return void kT.j.EZ("toggleMenu", "retentionFeatures");
```

#### 543. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6244` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6148) · [Before (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6244)

```diff
-                       return void Yp.m.GA("toggleMenu", "inviteLink");
+                       return void kT.j.EZ("toggleMenu", "inviteLink");
```

#### 544. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6246` → after: `L6150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6150) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6246)

```diff
-                       (0, TS.b)()
+                       (0, Ig.d)()
```

#### 545. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6252` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6156) · [Before (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6252)

```diff
-                 children: [(0, bp.jsx)(JS.d, {
+                 children: [(0, VT.jsx)(ag.c, {
```

#### 546. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6262-L6263` → after: `L6166-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6166-L6167) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6262-L6263)

```diff
-     var aS = cp(2012);
-     const nS = yp.u,
+     var Pg = mT(2104);
+     const Vg = BT.v,
```

#### 547. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6268` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6172) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6268)

```diff
-         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(yp.N).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
+         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(BT.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
```

#### 548. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6293` → after: `L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6197) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6293)

```diff
-           continues: (0, Wp.j)(pp)
+           continues: (0, pT.i)(TT)
```

#### 549. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6306-L6307` → after: `L6210-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6210-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6210-L6211) · [Before (L6306-L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6306-L6307)

```diff
-         const op = (0, yp.m)(pp.values, this.previousHeld),
-           Ip = null === cp ? -1 : (0, yp.i)(cp),
+         const zT = (0, BT.p)(TT.values, this.previousHeld),
+           MT = null === mT ? -1 : (0, BT.k)(mT),
```

#### 550. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6328` → after: `L6232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6232) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6328)

```diff
-     const rS = new Set([...aS.i, ...aS.B]),
+     const Kg = new Set([...Pg.l, ...Pg.A]),
```

#### 551. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6332` → after: `L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6236) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6332)

```diff
-       })(pp, aS.t, rS),
+       })(TT, Pg.v, Kg),
```

#### 552. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6340-L6341` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6244-L6245) · [Before (L6340-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6340-L6341)

```diff
-             } = Op.onKeyDown(pp, !(0, Wp.J)(pp) || (0, Oo.f)() || (0, Ac.l)(), ZS(pp.code));
-             cp && (pp.stopImmediatePropagation(), gS(pp) && pp.preventDefault()), op && ((0, Wp.E)("keyboardMouse"), ip())
+             } = WT.onKeyDown(TT, !(0, pT.F)(TT) || (0, Uz.j)() || (0, Hm.l)(), Sg(TT.code));
+             mT && (TT.stopImmediatePropagation(), Cg(TT) && TT.preventDefault()), zT && ((0, pT.x)("keyboardMouse"), UT())
```

#### 553. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6351` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6255) · [Before (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6351)

```diff
-             const op = Ap.d.getActiveConsumerName(),
+             const zT = lT.e.getActiveConsumerName(),
```

#### 554. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6353` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6257) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6353)

```diff
-               Sp = Ip ? (0, Dp.g)("menuBack") : null,
+               gT = MT ? (0, jT.i)("menuBack") : null,
```

#### 555. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6359` → after: `L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6263) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6359)

```diff
-               } = Op.onPadFrame(pp, xp, Sp, (0, Wp.r)(pp));
+               } = WT.onPadFrame(TT, nT, gT, (0, pT.n)(TT));
```

#### 556. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6361-L6362` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6265-L6266) · [Before (L6361-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6361-L6362)

```diff
-               const pp = (0, Pp.h)().swapSticks ? "right" : "left";
-               Ap.d.consumeAllHeld(Op.consumeLeavesMoveStick() ? pp : null)
+               const TT = (0, LT.k)().swapSticks ? "right" : "left";
+               lT.e.consumeAllHeld(WT.consumeLeavesMoveStick() ? TT : null)
```

#### 557. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6366` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6270) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6366)

```diff
-           Yp = (0, Oo.i)(`pressToContinue:${pp}`, (() => Op.blocksGameplay()));
+           kT = (0, Uz.k)(`pressToContinue:${TT}`, (() => WT.blocksGameplay()));
```

#### 558. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6376-L6379` → after: `L6280-L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6280-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6280-L6283) · [Before (L6376-L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6376-L6379)

```diff
-     var sS = cp(5113),
-       KS = cp(3537),
-       VS = cp(3224),
-       px = cp(8331);
+     var Ng = mT(5090),
+       Eg = mT(3530),
+       hg = mT(3267),
+       Dg = mT(8322);
```

#### 559. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6399` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6303) · [Before (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6399)

```diff
-         } = (0, op.H)();
+         } = (0, zT.z)();
```

#### 560. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6433-L6434` → after: `L6337-L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6337-L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6337-L6338) · [Before (L6433-L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6433-L6434)

```diff
-         const Ip = (0, Pp.s)();
-         return (0, bp.jsx)(sS.i, {
+         const MT = (0, LT.n)();
+         return (0, VT.jsx)(Ng.j, {
```

#### 561. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6443` → after: `L6347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6347) · [Before (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6443)

```diff
-             (0, Pp.o)({
+             (0, LT.m)({
```

#### 562. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6449-L6450` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6353-L6354) · [Before (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6449-L6450)

```diff
-     var ox = cp(8979),
-       Ix = cp(8988);
+     var Tn = mT(8967),
+       Un = mT(8970);
```

#### 563. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6453-L6454` → after: `L6357-L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6357-L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6357-L6358) · [Before (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6453-L6454)

```diff
-         const [ip] = [...pp.controllers].sort(((pp, ip) => Ix.o[pp] - Ix.o[ip]));
-         return Ix.k[ip]
+         const [UT] = [...TT.controllers].sort(((TT, UT) => Un.p[TT] - Un.p[UT]));
+         return Un.n[UT]
```

#### 564. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6457` → after: `L6361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6361) · [Before (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6457)

```diff
-         (0, ox.e)().allowPhoneMotion().catch((ip => {
+         (0, Tn.b)().allowPhoneMotion().catch((UT => {
```

#### 565. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6473` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6377) · [Before (L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6473)

```diff
-         } = (0, op.H)(), [Op, Ip] = (0, Np.useState)(null), Sp = `${ip.controllers.join(",")}|${ip.phoneMotion}`;
+         } = (0, zT.z)(), [WT, MT] = (0, sT.useState)(null), gT = `${UT.controllers.join(",")}|${UT.phoneMotion}`;
```

#### 566. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6478` → after: `L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6382) · [Before (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6478)

```diff
-           (0, ox.e)().connectController().then((pp => {
+           (0, Tn.b)().connectController().then((TT => {
```

#### 567. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6495` → after: `L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6399) · [Before (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6495)

```diff
-               }), (0, bp.jsx)(NS.f, {
+               }), (0, VT.jsx)(Xg.e, {
```

#### 568. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6509` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6413) · [Before (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6509)

```diff
-             }), (0, bp.jsx)(NS.f, {
+             }), (0, VT.jsx)(Xg.e, {
```

#### 569. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6528` → after: `L6432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6432) · [Before (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6528)

```diff
-         } = (0, op.H)(), ip = (0, Pp.s)(), cp = (0, ox.i)(), Op = (0, Wp.I)(), Ip = !cp.hidSupported && cp.phoneSupported && !cp.padConnected, Sp = (cp.hidSupported || cp.phoneSupported) && !Ip, xp = (0, Dp.g)("pause");
+         } = (0, zT.z)(), UT = (0, LT.n)(), mT = (0, Tn.e)(), WT = (0, pT.D)(), MT = !mT.hidSupported && mT.phoneSupported && !mT.padConnected, gT = (mT.hidSupported || mT.phoneSupported) && !MT, nT = (0, jT.i)("pause");
```

#### 570. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6543` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6447) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6543)

```diff
-               (0, Pp.o)({
+               (0, LT.m)({
```

#### 571. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6548` → after: `L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6452) · [Before (L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6548)

```diff
-               const op = (0, ox.e)(),
+               const zT = (0, Tn.b)(),
```

#### 572. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6565` → after: `L6469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6469) · [Before (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6565)

```diff
-               format: px.J
+               format: Dg.H
```

#### 573. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6570` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6474) · [Before (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6570)

```diff
-                   button: KS.g
+                   button: Eg.e
```

#### 574. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6572` → after: `L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6476) · [Before (L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6572)

```diff
-                 glyph: (0, Dp.g)("use")
+                 glyph: (0, jT.i)("use")
```

#### 575. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6574` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6478) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6574)

```diff
-               options: px.N,
+               options: Dg.L,
```

#### 576. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6577` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6481) · [Before (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6577)

```diff
-                 (0, Pp.o)({
+                 (0, LT.m)({
```

#### 577. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6590` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6494) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6590)

```diff
-                 (0, Pp.o)({
+                 (0, LT.m)({
```

#### 578. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6598` → after: `L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6502) · [Before (L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6598)

```diff
-     var Px = cp(1880);
+     var Hn = mT(1976);
```

#### 579. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6602` → after: `L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6506) · [Before (L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6602)

```diff
-       } = (0, op.H)(), ip = (0, Pp.s)(), cp = (0, Wp.I)();
+       } = (0, zT.z)(), UT = (0, LT.n)(), mT = (0, pT.D)();
```

#### 580. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6608` → after: `L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6512) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6608)

```diff
-           checked: (0, Dp.D)(ip.swapConfirmBack, cp),
+           checked: (0, jT.G)(UT.swapConfirmBack, mT),
```

#### 581. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6610-L6611` → after: `L6514-L6515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6514-L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6514-L6515) · [Before (L6610-L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6610-L6611)

```diff
-             (0, Pp.o)({
-               swapConfirmBack: pp === (0, Dp.D)(null, cp) ? null : pp
+             (0, LT.m)({
+               swapConfirmBack: TT === (0, jT.G)(null, mT) ? null : TT
```

#### 582. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6620` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6524) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6620)

```diff
-           options: px.p,
+           options: Dg.q,
```

#### 583. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6623` → after: `L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6527) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6623)

```diff
-             (0, Pp.o)({
+             (0, LT.m)({
```

#### 584. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6630` → after: `L6534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6534) · [Before (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6630)

```diff
-           options: px.qb,
+           options: Dg.rb,
```

#### 585. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6633` → after: `L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6537) · [Before (L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6633)

```diff
-             (0, Pp.o)({
+             (0, LT.m)({
```

#### 586. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6640` → after: `L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6544) · [Before (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6640)

```diff
-           options: px.E,
+           options: Dg.D,
```

#### 587. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6643` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6547) · [Before (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6643)

```diff
-             (0, Pp.o)({
+             (0, LT.m)({
```

#### 588. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6650` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6554) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6650)

```diff
-           options: px.m,
+           options: Dg.n,
```

#### 589. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6653` → after: `L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6557) · [Before (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6653)

```diff
-             (0, Pp.o)({
+             (0, LT.m)({
```

#### 590. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6661` → after: `L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6565) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6661)

```diff
-             (0, Pp.o)({
+             (0, LT.m)({
```

#### 591. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6669` → after: `L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6573) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6669)

```diff
-     var yx = cp(8990);
+     var jn = mT(8972);
```

#### 592. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6689` → after: `L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6593) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6689)

```diff
-       }(Ap.d),
+       }(lT.e),
```

#### 593. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6724` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6628) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6724)

```diff
-         } = (0, op.H)();
+         } = (0, zT.z)();
```

#### 594. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6739` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6643) · [Before (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6739)

```diff
-                     glyph: "move" === ip.stick ? (0, Dp.p)() : (0, Dp.o)()
+                     glyph: "move" === UT.stick ? (0, jT.t)() : (0, jT.r)()
```

#### 595. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6748` → after: `L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6652) · [Before (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6748)

```diff
-         } = ip, Ap = (0, Dp.g)(Yp), Pp = (0, Dp.j)(Yp), Wp = Ap !== Pp && (0, Dp.c)(Yp, Pp);
+         } = UT, lT = (0, jT.i)(kT), LT = (0, jT.m)(kT), pT = lT !== LT && (0, jT.e)(kT, LT);
```

#### 596. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6757` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6661) · [Before (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6757)

```diff
-               children: Lp(px.j[Yp])
+               children: HT(Dg.h[kT])
```

#### 597. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6778` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6682) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6778)

```diff
-                   children: (0, bp.jsx)(JS.d, {
+                   children: (0, VT.jsx)(ag.c, {
```

#### 598. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6803-L6804` → after: `L6707-L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6707-L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6707-L6708) · [Before (L6803-L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6803-L6804)

```diff
-                   text: Lp((0, Dp.c)(Yp, (0, Dp.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
-                     button: KS.g
+                   text: HT((0, jT.e)(kT, (0, jT.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
+                     button: Eg.e
```

#### 599. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6806` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6710) · [Before (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6806)

```diff
-                   glyph: (0, Dp.g)("menuBack")
+                   glyph: (0, jT.i)("menuBack")
```

#### 600. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6814-L6815` → after: `L6718-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6718-L6719) · [Before (L6814-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6814-L6815)

```diff
-                 action: Lp(px.j[pp]),
-                 button: KS.g
+                 action: HT(Dg.h[TT]),
+                 button: Eg.e
```

#### 601. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6817` → after: `L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6721) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6817)

```diff
-               glyph: (0, Dp.g)(pp)
+               glyph: (0, jT.i)(TT)
```

#### 602. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6822` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6726) · [Before (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6822)

```diff
-               animationDuration: `${px.v}ms`
+               animationDuration: `${Dg.t}ms`
```

#### 603. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6834-L6835` → after: `L6738-L6739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6738-L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6738-L6739) · [Before (L6834-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6834-L6835)

```diff
-         } = (0, op.H)(), Op = (0, Pp.s)();
-         (0, Wp.I)();
+         } = (0, zT.z)(), WT = (0, LT.n)();
+         (0, pT.D)();
```

#### 604. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6839-L6841` → after: `L6743-L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6743-L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6743-L6745) · [Before (L6839-L6841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6839-L6841)

```diff
-             const cp = (0, Pp.h)().bindings;
-             (0, Dp.y)(pp, ip);
-             const Op = (0, Dp.q)(cp, pp);
+             const mT = (0, LT.k)().bindings;
+             (0, jT.D)(TT, UT);
+             const WT = (0, jT.u)(mT, TT);
```

#### 605. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6849-L6850` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6753-L6754) · [Before (L6849-L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6849-L6850)

```diff
-               const op = (0, Dp.g)("menuBack"),
-                 Ip = new px.c(op, (0, Dp.g)("menuConfirm"), (pp => (0, Dp.c)(cp, pp)));
+               const zT = (0, jT.i)("menuBack"),
+                 MT = new Dg.c(zT, (0, jT.i)("menuConfirm"), (TT => (0, jT.e)(mT, TT)));
```

#### 606. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6857` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6761) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6857)

```diff
-                       isDown: pp => (0, yp.D)(Op.frame.values, pp)
+                       isDown: TT => (0, BT.H)(WT.frame.values, TT)
```

#### 607. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6859` → after: `L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6763) · [Before (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6859)

```diff
-                   null === (xp = pp.current) || void 0 === xp || xp.style.setProperty("width", 100 * Ip.getBindHoldProgress(Lp) + "%"), Yp && ("bind" === Yp.kind ? (Ap.d.consumeButton(Yp.button), ip(cp, Yp.button)) : Ap.d.consumeButton(op), Sp())
+                   null === (nT = TT.current) || void 0 === nT || nT.style.setProperty("width", 100 * MT.getBindHoldProgress(HT) + "%"), kT && ("bind" === kT.kind ? (lT.e.consumeButton(kT.button), UT(mT, kT.button)) : lT.e.consumeButton(zT), gT())
```

#### 608. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6864` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6768) · [Before (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6864)

```diff
-                 timeoutMs: px.v
+                 timeoutMs: Dg.t
```

#### 609. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6876` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6780) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6876)

```diff
-           }), px.ob);
+           }), Dg.pb);
```

#### 610. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6890` → after: `L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6794) · [Before (L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6890)

```diff
-           }), (0, bp.jsx)(NS.K, {
+           }), (0, VT.jsx)(Xg.I, {
```

#### 611. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6894` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6798) · [Before (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6894)

```diff
-               wp(null), xp(null), (0, Dp.A)()
+               cT(null), nT(null), (0, jT.F)()
```

#### 612. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6897` → after: `L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6801) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6897)

```diff
-           }), ip, px.db.map(((pp, ip) => (0, bp.jsx)(yx.c, {
+           }), UT, Dg.hb.map(((TT, UT) => (0, VT.jsx)(jn.d, {
```

#### 613. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6919` → after: `L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6823) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6919)

```diff
-         } = (0, op.H)();
+         } = (0, zT.z)();
```

#### 614. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6964` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6868) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6964)

```diff
-         } = (0, op.H)(), ip = (() => {
+         } = (0, zT.z)(), UT = (() => {
```

#### 615. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6966` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6870) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6966)

```diff
-           return (0, Ho.f)(Sp.c, (() => {
+           return (0, vz.g)(gT.d, (() => {
```

#### 616. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6969` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6873) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6969)

```diff
-         })(), cp = ux((0, Pp.s)()), Op = (0, Np.useRef)(null), Ip = (0, Np.useRef)(null), xp = (0, Np.useRef)([]), Lp = (0, Np.useRef)(null), Yp = (0, Np.useRef)(null), [Wp, Up] = (pp => {
+         })(), mT = qn((0, LT.n)()), WT = (0, sT.useRef)(null), MT = (0, sT.useRef)(null), nT = (0, sT.useRef)([]), HT = (0, sT.useRef)(null), kT = (0, sT.useRef)(null), [pT, ZT] = (TT => {
```

#### 617. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6971-L6972` → after: `L6875-L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6875-L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6875-L6876) · [Before (L6971-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6971-L6972)

```diff
-             const ip = (0, Dp.g)("menuBack"),
-               Op = new px.g;
+             const UT = (0, jT.i)("menuBack"),
+               WT = new Dg.f;
```

#### 618. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6978` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6882) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6978)

```diff
-                   sx: cp.isHeld(ip)
+                   fn: mT.isHeld(UT)
```

#### 619. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6980` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6884) · [Before (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6980)

```diff
-                 null === (Ip = pp.current) || void 0 === Ip || Ip.style.setProperty("width", 100 * Sp + "%"), Sp >= 1 && (Ap.d.consumeButton(ip), op())
+                 null === (MT = TT.current) || void 0 === MT || MT.style.setProperty("width", 100 * gT + "%"), gT >= 1 && (lT.e.consumeButton(UT), zT())
```

#### 620. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6991-L6992` → after: `L6895-L6896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6895-L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6895-L6896) · [Before (L6991-L6992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6991-L6992)

```diff
-             for (const cp of yp.Q) {
-               const ip = (0, yp.i)(cp),
+             for (const mT of BT.X) {
+               const UT = (0, BT.k)(mT),
```

#### 621. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6996` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6900) · [Before (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6996)

```diff
-               Op.classList.toggle("Pressed", op >= yp.u), (0, yp.E)(ip) && Op.style.setProperty("--trigger-fill", `${Math.round(100*op)}%`)
+               WT.classList.toggle("Pressed", zT >= BT.v), (0, BT.L)(UT) && WT.style.setProperty("--trigger-fill", `${Math.round(100*zT)}%`)
```

#### 622. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6998-L6999` → after: `L6902-L6903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6902-L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L6902-L6903) · [Before (L6998-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L6998-L6999)

```diff
-             const ip = ux((0, Pp.h)());
-             ex(Lp.current, pp.leftStick, ip.left.deadzone, pp.values[(0, yp.i)("LS")] >= yp.u), ex(Yp.current, pp.rightStick, ip.right.deadzone, pp.values[(0, yp.i)("RS")] >= yp.u)
+             const UT = qn((0, LT.k)());
+             fn(HT.current, TT.leftStick, UT.left.deadzone, TT.values[(0, BT.k)("LS")] >= BT.v), fn(kT.current, TT.rightStick, UT.right.deadzone, TT.values[(0, BT.k)("RS")] >= BT.v)
```
