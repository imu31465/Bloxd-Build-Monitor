# Changed — Bundle Modifications Report (Part 008 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `8 / 56` (**306** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/202.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/202.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783)

#### 9. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L208-L234` → after: `L444-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L444-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L444-L481) · [Before (L208-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L208-L234)

```diff
-         this.host = null, this.makeDefault = null
-       }
-       setHost(pp) {
-         this.host = pp
-       }
-       setDefaultHost(pp) {
-         this.makeDefault = pp
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
-         }
-         return this.host
-       }
-       openMob(pp) {
- ... (11 more removed lines; see GitHub link above)
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(QQ, WQ) {
+         QQ !== this.userContext && this.sendHeld(), this.userContext = QQ;
+         for (const [wQ, qQ] of WQ) this.pending.set(wQ, qQ);
+         if (null !== this.timer) return;
+         const XQ = this.lastSentAt + 1100 - Date.now();
+         XQ <= 0 ? this.send(QQ) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), XQ), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
+       }
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
+       }
+ ... (22 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L237` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L484) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L237)

```diff
-   34462: (pp, ip, cp) => {
+   34405: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L239-L241` → after: `L486-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L486-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L486-L489) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L239-L241)

```diff
-       e: () => Op.b,
-       h: () => Op.e,
-       j: () => Op.i
+       e: () => DQ,
+       h: () => PQ,
+       k: () => BQ,
+       m: () => jQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L243-L330` → after: `L491-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L491-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L491-L534) · [Before (L243-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L243-L330)

```diff
-     var Op = cp(34466);
-     class op {
-       constructor(pp) {
-         this.load = pp, this.loaded = null, this.loading = null
-       }
-       run(pp) {
-         return null !== this.loaded ? pp(this.loaded) : (this.loading ??= this.load().then((pp => (this.loaded = pp, pp)), (pp => {
-           throw this.loading = null, pp
-         })), this.loading.then(pp))
-       }
-     }
-     class Ip {
-       constructor() {
-         this.mobScene = new op((() => Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(258), cp.e(98), cp.e(259), cp.e(76), cp.e(75), cp.e(256), cp.e(74), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(279), cp.e(233), cp.e(249), cp.e(261), cp.e(264), cp.e(78), cp.e … [truncated]
-       }
-       openMob(pp) {
- ... (72 more removed lines; see GitHub link above)
+     var wQ = XQ(193),
+       qQ = XQ(1302),
+       TQ = XQ(1238),
+       zQ = XQ(1165),
+       sQ = XQ(1795);
+     const FQ = {
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
+     };
+ 
+     function PQ(QQ) {
+       return FQ[QQ]
+     }
+ 
+ ... (28 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L332` → after: `L536-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L536-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L536-L567) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L332)

```diff
-     }))
+     }
+     async function BQ(QQ, WQ) {
+       const XQ = await JQ(QQ, "/index/name/update", {
+         name: WQ
+       });
+       return rQ(XQ) ? XQ : "err" in XQ ? IQ(XQ.err) : XQ.nameExists ? {
+         outcome: "taken"
+       } : (QQ.setPlayerName(WQ), {
+         outcome: "changed",
+         name: WQ
+       })
+     }
+ 
+     function yQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const wQ = 1 === WQ ? 1 : 10 ** (WQ - 1),
+ ... (16 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/203.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/203.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L6)

```diff
-   41768: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       MobPreview: () => Ap
+   34443: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => xQ,
+       f: () => vW,
+       i: () => bW,
+       m: () => HW,
+       n: () => PW,
+       r: () => JW,
+       v: () => IW,
+       x: () => dW,
+       A: () => rW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L8-L14` → after: `L16-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L16-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L16-L309) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L8-L14)

```diff
-     var Op = cp(62),
-       op = cp(1049),
-       Ip = cp.n(op),
-       Sp = cp(41773),
-       xp = cp(34462),
-       Lp = cp(41776),
-       Yp = cp(1112);
+     var wQ = XQ(307),
+       qQ = XQ(26),
+       TQ = XQ(105),
+       zQ = XQ(1698),
+       sQ = XQ(4744),
+       FQ = XQ(3146),
+       PQ = XQ(3152),
+       gQ = XQ(43);
+     const {
+       windows: JQ,
+       target: rQ,
+       stepDown: IQ,
+       stepUp: jQ,
+       noGain: BQ
+     } = PQ.c, yQ = 1e3 / 60 * 1.08, VQ = 1e3 / 55, DQ = 1e3 / 45, pQ = 1e3 / 30 * .92, GQ = 1e3 / 30 * 1.08;
+     class UQ {
+ ... (278 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L17-L34` → after: `L312-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L312-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L312-L515) · [Before (L17-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L17-L34)

```diff
-       return xp.j.openMob(pp)
-     }
-     const Ap = (0, Op.memo)((function(pp) {
-       let {
-         mobType: ip,
-         variation: cp = null,
-         animation: op = Lp.f,
-         className: xp
-       } = pp;
-       const Ap = (0, Op.useRef)(null),
-         Pp = (0, Op.useMemo)((() => ({
-           mobType: ip,
-           variation: cp,
-           animation: op
-         })), [ip, cp, op]);
-       return (0, Sp.b)(Ap, Dp, Pp), (0, Yp.jsx)("div", {
- ... (2 more removed lines; see GitHub link above)
+       return {
+         untilEpochMs: Date.now() + (QQ.untilMs - performance.now()),
+         backoffMs: QQ.backoffMs,
+         fps: QQ.fps
+       }
+     }
+ 
+     function eQ(QQ) {
+       return void 0 === QQ || "number" !== typeof QQ.fps ? null : {
+         untilMs: performance.now() + (QQ.untilEpochMs - Date.now()),
+         backoffMs: QQ.backoffMs,
+         fps: QQ.fps
+       }
+     }
+     let nQ = null;
+ 
+ ... (188 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L36` → after: `L517-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L517-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L517-L548) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L36)

```diff
-     }))
+     }
+     let DW = 0,
+       pW = 0,
+       GW = 0,
+       UW = !1;
+ 
+     function bW() {
+       DW++
+     }
+ 
+     function vW(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       yW(), null !== wW && (QQ - GW >= 1e3 && (UW = DW - pW > PQ.c.sceneChange.meshesPerSecond, pW = DW, GW = QQ), CQ.c.isHeld() ? wW.paused(QQ) : wW.frame(QQ, WQ, XQ && !document.hidden && ZQ(), UW || wQ > 0 || (0, zQ.r)()))
+     }
+ 
+     function dW() {
+ ... (16 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L38` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L550) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L38)

```diff
-   41773: (pp, ip, cp) => {
+   34448: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L42-L43` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L554-L555) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L42-L43)

```diff
-     var Op = cp(62),
-       op = cp(2835);
+     var wQ = XQ(105),
+       qQ = XQ(150);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L46-L110` → after: `L558-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L558-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L558-L571) · [Before (L46-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L46-L110)

```diff
-       const Ip = (0, Op.useRef)(null),
-         {
-           width: Sp,
-           height: xp
-         } = (0, op.d)(pp);
-       (0, Op.useEffect)((() => {
-         const cp = ip(pp.current);
-         return Ip.current = cp, () => {
-           cp.close(), Ip.current = null
-         }
-       }), [pp, ip]), (0, Op.useEffect)((() => {
-         Sp <= 0 || xp <= 0 || Ip.current.resize(Sp, xp)
-       }), [Sp, xp]), (0, Op.useEffect)((() => {
-         Ip.current.show(cp)
-       }), [cp])
-     }
- ... (49 more removed lines; see GitHub link above)
+       if ("webgpu" === QQ) return XQ ? ((0, wQ.seedGpuVendor)(XQ), {
+         vendor: XQ,
+         renderer: ""
+       }) : null;
+       try {
+         const XQ = "webgl" === QQ ? WQ.getContext("webgl2") : WQ.getContext("webgl");
+         "webgl" === QQ && XQ && (0, qQ.D)(XQ);
+         const TQ = null === XQ || void 0 === XQ ? void 0 : XQ.getExtension("WEBGL_debug_renderer_info");
+         if (XQ && TQ) {
+           const QQ = String(XQ.getParameter(TQ.UNMASKED_VENDOR_WEBGL)),
+             WQ = String(XQ.getParameter(TQ.UNMASKED_RENDERER_WEBGL));
+           return (0, wQ.seedGpuVendor)(QQ), (0, qQ.I)(QQ, WQ), {
+             vendor: QQ,
+             renderer: WQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L113-L289` → after: `L574-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/203.js#L574-L577) · [Before (L113-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/203.js#L113-L289)

```diff
-       }
-     }
-     const xp = Sp([0, 0, 0], [0, 0, 0], .07),
-       Lp = (0, op.b)((0, Op.d)(xp), "mobIdle"),
-       Yp = Sp([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       Dp = Sp([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       Ap = (0, op.b)((0, Op.d)(Yp), "gunReady"),
-       Pp = (0, op.b)((0, Op.d)(Dp), "gunAimed")
-   },
-   34466: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp,
-       e: () => op,
-       i: () => Dp
-     });
-     var Op = cp(1579);
- ... (161 more removed lines; see GitHub link above)
+         XQ && (0, qQ.I)(String(XQ.getParameter(XQ.VENDOR)), String(XQ.getParameter(XQ.RENDERER)))
+       } catch {}
+       return null
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/204.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/204.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L4)

```diff
-   34482: (pp, ip, cp) => {
+   37229: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L7` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L7-L9) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L7)

```diff
-       f: () => Ip
+       h: () => TQ,
+       j: () => sQ,
+       k: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L9` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L11-L13) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L9)

```diff
-     var Op = cp(3352);
+     var wQ = XQ(1812);
+     const qQ = ".bloxdreplay",
+       TQ = "application/octet-stream";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L12-L22` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L16) · [Before (L12-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L12-L22)

```diff
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const pp = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const ip = new BroadcastChannel(Op.j);
-         ip.postMessage({
-           stored: pp
-         }), ip.close()
-       } catch {
-         return null
-       }
-       return pp
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${qQ}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L26-L27` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L20-L23) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L26-L27)

```diff
-       const ip = "object" === typeof pp && null !== pp ? pp.stored : null;
-       return "string" === typeof ip ? ip : null
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ();
+       return (0, wQ.e)(new Blob([QQ], {
+         type: TQ
+       }), WQ), WQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L30` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L26) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L30)

```diff
-   34480: (pp, ip, cp) => {
+   37219: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L32-L34` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L28-L29) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L32-L34)

```diff
-       d: () => Sp,
-       h: () => op,
-       i: () => Ip
+       b: () => zQ,
+       e: () => TQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L36-L47` → after: `L31-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L31-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L31-L43) · [Before (L36-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L36-L47)

```diff
-     var Op = cp(3352);
-     async function op(pp, ip, cp) {
-       let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const Ip = Sp(await pp.getItem(Op.d, ip));
-       if (null === Ip || op()) return null;
-       const xp = await pp.getItem(Op.h, ip);
-       return op() ? null : (await async function(pp) {
-         await Promise.all([pp.removeItem(Op.d), pp.removeItem(Op.h)])
-       }(pp).catch(cp), {
-         pack: Ip,
-         source: "string" === typeof xp ? xp : null
-       })
+     var wQ = XQ(37221);
+     let qQ = {
+       open: async () => {
+         throw new Error(wQ.b.viewerLoadFailed.text)
+       },
+       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
+       encode: async () => null,
+       fileHandle: () => null,
+       markSaved: () => {}
+     };
+ 
+     function TQ(QQ) {
+       qQ = QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L51-L53` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L153) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L51-L53)

```diff
-       return (0, Op.u)() ? Promise.resolve(null) : op(pp, !1, (pp => {
-         console.error("Error removing temporary texture pack: ", pp)
-       }), Op.u)
+       return QQ instanceof Error && sQ.has(QQ.message) ? QQ.message : void 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L57-L59` → after: `L157-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L157-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L157-L163) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L57-L59)

```diff
-       if ("object" !== typeof pp || null === pp) return null;
-       const ip = pp.metaData;
-       return "object" !== typeof ip || null === ip || "string" !== typeof ip.id ? null : pp
+       var WQ;
+       const XQ = null !== (WQ = QQ.timeoutMs) && void 0 !== WQ ? WQ : "Error" === QQ.type ? qQ : TQ;
+       wQ.k.mB("showBottomMessage", {
+         message: QQ.text,
+         timeoutLength: XQ,
+         type: QQ.type
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L62` → after: `L166-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L166-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L166-L176) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L62)

```diff
-   51220: (pp, ip, cp) => {
+   36809: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ,
+       f: () => TQ
+     });
+     let wQ = !1;
+ 
+     function qQ() {
+       return wQ
+     }
+ 
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L64` → after: `L178-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L178-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L178-L189) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L64)

```diff
-       return null === pp.gameSource ? "player" : "customGame"
+       return wQ !== QQ && (wQ = QQ, !0)
+     }
+   },
+   34469: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => TQ,
+       d: () => qQ
+     });
+     var wQ = XQ(26);
+ 
+     function qQ(QQ, WQ) {
+       return QQ && !WQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L69-L70` → after: `L210-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L210-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L210-L215) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L69-L70)

```diff
-       g: () => yp,
-       h: () => Op
+       i: () => pQ,
+       m: () => bQ,
+       o: () => UQ,
+       r: () => yQ,
+       s: () => jQ,
+       w: () => DQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L72` → after: `L217-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L217-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L217-L226) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L72)

```diff
-     const op = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;
+     var wQ = XQ(1460),
+       qQ = XQ(37123),
+       TQ = XQ(31);
+     const zQ = "clientGameCraftableMarksChanged",
+       sQ = "clientGameCraftableLocksChanged",
+       FQ = "clientGameCraftableOrderChanged",
+       PQ = "selectCraftable";
+     let gQ = new Set,
+       JQ = new Map,
+       rQ = new Map;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L74-L75` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L228-L229) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L74-L75)

```diff
-     function Ip(pp) {
-       return "" === pp || "string" === typeof pp && op.test(pp)
+     function IQ() {
+       return gQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L79-L89` → after: `L233-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L233-L239) · [Before (L79-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L79-L89)

```diff
-       return "object" === typeof pp && null !== pp && ("earth" === pp.type || Object.entries(pp).every((pp => {
-         let [ip, cp] = pp;
-         return "type" === ip || Ip(cp)
-       })))
-     }
-     const xp = /(?:src|image|image-set|cross-fade)\(/i,
-       Lp = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
-       Yp = /url\(/gi,
-       Dp = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
-       Ap = new Set([...Dp.map((pp => new URL(pp).origin)), "https://fonts.gstatic.com"]),
-       Pp = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
+       const WQ = new Set(QQ);
+       (0, qQ.d)(WQ, gQ) || (gQ = WQ, TQ.k.mB(zQ, gQ))
+     }
+ 
+     function BQ() {
+       return JQ
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L92-L110` → after: `L242-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L242-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L242-L246) · [Before (L92-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L92-L110)

```diff
-       var ip, cp;
-       if (pp.includes("\\") || xp.test(pp)) return !0;
-       const Op = [...pp.matchAll(Lp)];
-       return Op.length !== (null !== (ip = null === (cp = pp.match(Yp)) || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0) || !Op.every((pp => {
-         var ip, cp, Op;
-         let {
-           groups: op
-         } = pp;
-         return function(pp) {
-           try {
-             return Dp.every((ip => {
-               const cp = new URL(pp, ip);
-               return "data:" === cp.protocol || Ap.has(cp.origin) || Pp.has(cp.href)
-             }))
-           } catch {
-             return !1
- ... (3 more removed lines; see GitHub link above)
+       0 === QQ.size && 0 === JQ.size || (JQ = new Map(QQ), TQ.k.mB(sQ, JQ))
+     }
+ 
+     function VQ() {
+       return rQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L114-L117` → after: `L250-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L250-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L250-L276) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L114-L117)

```diff
-       var ip, cp, Op, op, xp, Lp, Yp;
-       const Dp = [...Object.values(null !== (ip = pp.textureOverrides) && void 0 !== ip ? ip : {}), ...Object.values(null !== (cp = pp.modelOverrides) && void 0 !== cp ? cp : {})],
-         Ap = [...Object.values(null !== (Op = null === (op = pp.customCss) || void 0 === op ? void 0 : op.fontFaces) && void 0 !== Op ? Op : {}), ...Object.values(null !== (xp = null === (Lp = pp.customCss) || void 0 === Lp ? void 0 : Lp.classStyles) && void 0 !== xp ? xp : {})]. … [truncated]
-       return !Dp.every(Ip) || !Object.values(null !== (Yp = pp.skyBoxes) && void 0 !== Yp ? Yp : {}).every(Sp) || Ap.some((pp => "string" === typeof pp && Wp(pp)))
+       QQ.length === rQ.size && QQ.every(((QQ, WQ) => rQ.get(QQ) === WQ)) || (rQ = new Map(QQ.map(((QQ, WQ) => [QQ, WQ]))), TQ.k.mB(FQ, rQ))
+     }
+ 
+     function pQ(QQ, WQ, XQ, wQ) {
+       if (! function(QQ, WQ, XQ) {
+           return QQ.size > 0 || WQ.size > 0 || XQ.size > 0
+         }(WQ, XQ, wQ)) return QQ;
+       const qQ = QQ => {
+         const wQ = XQ.get(QQ.name);
+         var qQ;
+         return wQ ? null !== (qQ = wQ.stepsAway) && void 0 !== qQ ? qQ : 1 : WQ.has(QQ.name) ? -1 : 0
+       };
+       return [...QQ].sort(((QQ, WQ) => qQ(QQ) - qQ(WQ) || ((QQ, WQ) => {
+         const XQ = wQ.get(QQ.name),
+           qQ = wQ.get(WQ.name);
+         return void 0 === XQ || void 0 === qQ ? (void 0 === XQ ? 1 : 0) - (void 0 === qQ ? 1 : 0) : Number(WQ.haveIngredients) - Number(QQ.haveIngredients) || XQ - qQ
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L123` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L281-L282) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L123)

```diff
-         ...pp
+         variation: QQ,
+         itemName: WQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L125-L137` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L284) · [Before (L125-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L125-L137)

```diff
-       return pp.textureOverrides && (cp.textureOverrides = vp(pp.textureOverrides, Ip, "texture")), pp.modelOverrides && (cp.modelOverrides = vp(pp.modelOverrides, Ip, "model")), pp.skyBoxes && (cp.skyBoxes = vp(pp.skyBoxes, Sp, "sky")), pp.customCss && (cp.customCss = function(p … [truncated]
-         const ip = pp => vp(pp, (pp => "string" === typeof pp && !Wp(pp)), "CSS"),
-           {
-             fontFaces: cp,
-             classStyles: Op
-           } = wp(pp) ? pp : {},
-           op = {};
-         for (const [Ip, Sp] of Object.entries(wp(Op) ? Op : {})) op[Ip] = ip(Sp);
-         return {
-           fontFaces: (Array.isArray(cp) ? cp : []).map(ip),
-           classStyles: op
-         }
-       }(pp.customCss)), cp
+       TQ.k.mB(PQ, XQ)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L140-L141` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L287-L288) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L140-L141)

```diff
-     function wp(pp) {
-       return "object" === typeof pp && null !== pp && !Array.isArray(pp)
+     function bQ() {
+       jQ([]), yQ(new Map), DQ([])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L144-L160` → after: `L291-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L291-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L291-L300) · [Before (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L144-L160)

```diff
-     function vp(pp, ip, cp) {
-       const Op = Object.entries(wp(pp) ? pp : {}),
-         op = Op.filter((pp => {
-           let [, cp] = pp;
-           return !ip(cp)
-         }));
-       if (op.length > 0) {
-         const pp = op.map((pp => {
-           let [ip] = pp;
-           return ip
-         }));
-         console.warn(`Ignoring a custom game texture pack's ${cp} files that name another site: ${pp.join(", ")}`)
-       }
-       return Object.fromEntries(Op.filter((pp => {
-         let [, cp] = pp;
-         return ip(cp)
- ... (1 more removed lines; see GitHub link above)
+     function vQ() {
+       return (0, wQ.e)(zQ, IQ)
+     }
+ 
+     function dQ() {
+       return (0, wQ.e)(sQ, BQ)
+     }
+ 
+     function HQ() {
+       return (0, wQ.e)(FQ, VQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L163` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L303) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L163)

```diff
-   51229: (pp, ip, cp) => {
+   37112: (QQ, WQ, XQ) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L167` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L321-L323) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L167)

```diff
-       h: () => tp
+       e: () => qQ,
+       h: () => zQ,
+       k: () => FQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L169-L182` → after: `L325-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L325-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L325-L361) · [Before (L169-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L169-L182)

```diff
-     var Op = cp(1014),
-       op = cp(2187),
-       Ip = cp(3335),
-       Sp = cp(3352),
-       xp = cp(34482),
-       Lp = cp(34480),
-       Yp = cp(51220),
-       Dp = cp(41200),
-       Ap = cp(41174),
-       Pp = cp(5183);
-     const Wp = {
-       pack: null,
-       gameSource: null
-     };
+     var wQ = XQ(36870);
+     const qQ = "data-camera-fade",
+       TQ = "data-letterbox-bar";
+ 
+     function zQ(QQ) {
+       return QQ instanceof Element && QQ.hasAttribute(TQ)
+     }
+     let sQ = null;
+ 
+     function FQ(QQ) {
+       sQ = QQ
+     }
+ 
+     function PQ() {
+       const QQ = document.createElement("div"),
+         {
+ ... (21 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L185` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L364) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L185)

```diff
-         this.host = pp, this.ready = void 0, this.state = Wp, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+         this.getContainer = QQ, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L187-L190` → after: `L366-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L366-L374) · [Before (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L187-L190)

```diff
-       readyWithin(pp) {
-         return Promise.race([this.ready, new Promise((ip => {
-           setTimeout(ip, pp)
-         }))])
+       setFade(QQ, WQ) {
+         var XQ;
+         if (!this.elements && WQ <= 0) return;
+         const {
+           fade: wQ
+         } = this.getElements(), qQ = null !== (XQ = sQ) && void 0 !== XQ ? XQ : this.getContainer();
+         wQ.parentElement !== qQ && qQ.appendChild(wQ);
+         const TQ = this.markHost(WQ > 0 ? sQ : null, WQ >= 1);
+         (QQ !== this.colour || WQ !== this.alpha || TQ) && (QQ !== this.colour && (wQ.style.background = QQ), wQ.style.opacity = String(WQ), wQ.style.display = WQ > 0 ? "" : "none", this.fadeKeeperHosts(WQ), this.colour = QQ, this.alpha = WQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L192-L193` → after: `L376-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L376-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L376-L380) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L192-L193)

```diff
-       current() {
-         return this.state
+       fadeKeeperHosts(QQ) {
+         var WQ;
+         const XQ = null === (WQ = this.markedHost) || void 0 === WQ ? void 0 : WQ.parentElement;
+         if (XQ)
+           for (const wQ of XQ.querySelectorAll("[data-camera-keeper-host]")) wQ.style.setProperty("--camera-fade-alpha", String(QQ))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L195-L199` → after: `L382-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L382-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L382-L391) · [Before (L195-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L195-L199)

```diff
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
-         }
+       setLetterbox(QQ, WQ) {
+         if (QQ === this.letterbox) return;
+         if (!this.elements && !QQ) return;
+         const {
+           top: XQ,
+           bottom: wQ
+         } = this.getElements();
+         this.letterbox = QQ;
+         const qQ = !WQ || "function" === typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 400ms ease-in-out";
+         XQ.style.transition = qQ, wQ.style.transition = qQ, XQ.style.transform = QQ ? "translateY(0)" : "translateY(-100%)", wQ.style.transform = QQ ? "translateY(0)" : "translateY(100%)"
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L201-L204` → after: `L393-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L393-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L393-L397) · [Before (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L201-L204)

```diff
-       onPlayerPackChange(pp) {
-         return this.ownListeners.add(pp), () => {
-           this.ownListeners.delete(pp)
-         }
+       clear() {
+         const {
+           elements: QQ
+         } = this;
+         QQ && (this.markHost(null, !1), QQ.fade.remove(), QQ.top.remove(), QQ.bottom.remove(), this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L206-L207` → after: `L399-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L399-L405) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L206-L207)

```diff
-       isUsingCustomGameTexturePack(pp) {
-         return (0, Ap.e)(this.state, pp)
+       markHost(QQ, WQ) {
+         var XQ;
+         const wQ = QQ !== this.markedHost;
+         if (!wQ && WQ === this.markedCovered) return !1;
+         var TQ, zQ;
+         wQ && (null === (TQ = this.markedHost) || void 0 === TQ || null === (zQ = TQ.parentElement) || void 0 === zQ || zQ.removeAttribute(qQ));
+         return null === QQ || void 0 === QQ || null === (XQ = QQ.parentElement) || void 0 === XQ || XQ.setAttribute(qQ, WQ ? "covered" : ""), this.markedHost = QQ, this.markedCovered = WQ, wQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L209-L210` → after: `L407-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L407-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L407-L419) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L209-L210)

```diff
-       setGamePackConfirm(pp) {
-         this.confirmGamePack = pp
+       getElements() {
+         if (this.elements) return this.elements;
+         const QQ = gQ("top"),
+           WQ = gQ("bottom");
+         QQ.style.transform = "translateY(-100%)", WQ.style.transform = "translateY(100%)";
+         const XQ = PQ();
+         XQ.style.top = "0", XQ.style.bottom = "0", XQ.style.display = "none", XQ.setAttribute("data-camera-fade-layer", "");
+         const wQ = this.getContainer();
+         return wQ.appendChild(QQ), wQ.appendChild(WQ), QQ.getBoundingClientRect(), this.elements = {
+           fade: XQ,
+           top: QQ,
+           bottom: WQ
+         }, this.elements
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L212-L216` → after: `L421-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L421-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L421-L467) · [Before (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L212-L216)

```diff
-       subscribe(pp) {
-         return this.listeners.set(pp, null), this.ready.then((() => {
-           this.deliver(pp)
-         })), () => {
-           this.listeners.delete(pp)
+     }
+   },
+   37265: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ,
+       g: () => qQ,
+       h: () => TQ,
+       l: () => wQ,
+       p: () => gQ,
+       t: () => JQ,
+       x: () => FQ
+     });
+     const wQ = [0, 0, 1, 1],
+       qQ = [.42, 0, 1, 1],
+       TQ = [0, 0, .58, 1],
+       zQ = [.42, 0, .58, 1];
+ ... (31 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L219-L257` → after: `L473-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L473-L480) · [Before (L219-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L219-L257)

```diff
-       async setPlayerPack(pp) {
-         const ip = wp(pp) ? null : pp;
-         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ip), this.change({
-           pack: ip,
-           gameSource: null
-         }, !1);
-         const cp = await this.storePlayerPack(ip);
-         return cp && this.announce(), cp
-       }
-       async packForGame(pp, ip, cp) {
-         await this.readyWithin(Math.max(0, (null !== cp && void 0 !== cp ? cp : performance.now() + Dp.b) - performance.now()));
-         const op = ++this.picks,
-           Ip = (0, Op.j)(pp) ? (0, Op.o)(pp) : null;
-         if (null === Ip) return void this.usePlayerPack();
-         let Sp;
-         const xp = function(pp) {
- ... (23 more removed lines; see GitHub link above)
+       if (!JQ) {
+         let QQ = 0,
+           WQ = 1;
+         gQ = XQ;
+         for (let qQ = 0; qQ < 12; qQ++) {
+           const qQ = FQ(wQ, TQ, gQ);
+           if (Math.abs(qQ - XQ) < 1e-6) break;
+           XQ > qQ ? QQ = gQ : WQ = gQ, gQ = (QQ + WQ) / 2
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L270-L280` → after: `L483-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L483-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L483-L497) · [Before (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L270-L280)

```diff
-       holdsOtherGamePack(pp) {
-         return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(pp)
-       }
-       async confirmed(pp, ip) {
-         const cp = this.confirmGamePack;
-         if (null === cp) return !0;
-         try {
-           return await cp(pp, ip)
-         } catch (Op) {
-           return this.host.warn(`the texture pack prompt of ${ip} failed: the pack is skipped`, Op), !1
-         }
+       return FQ(qQ, zQ, gQ)
+     }
+ 
+     function JQ(QQ) {
+       switch (QQ) {
+         case "linear":
+           return wQ;
+         case "easeIn":
+           return qQ;
+         case "easeOut":
+           return TQ;
+         case "easeInOut":
+           return zQ;
+         default:
+           return QQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L282-L291` → after: `L499-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L499-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L499-L527) · [Before (L282-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L282-L291)

```diff
-       async readPlayerPack() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (null !== pp && this.ownAnnouncements.delete(pp)) return;
-         await this.ready;
-         const ip = this.ownChanges;
-         let cp;
-         try {
-           cp = await this.host.store.getItem(Sp.b, !0)
-         } catch (op) {
-           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", op)
+     }
+   },
+   36870: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ,
+       e: () => qQ,
+       h: () => TQ
+     });
+     const wQ = .12,
+       qQ = 1 - 2 * wQ;
+ 
+     function TQ(QQ) {
+       return Math.abs(QQ) > qQ
+     }
+   },
+   34455: (QQ, WQ, XQ) => {
+ ... (13 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L306-L321` → after: `L530-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L530-L531) · [Before (L306-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L306-L321)

```diff
-       async readStored() {
-         const {
-           store: pp,
-           warn: ip
-         } = this.host;
-         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Lp.h)(pp, !0, (pp => {
-           ip("the custom game's texture pack wasn't removed from storage", pp)
-         })).then((pp => {
-           this.takeOneShot(pp)
-         }), (pp => {
-           ip("the custom game's texture pack didn't read: the player's own shows", pp)
-         })), pp.getItem(Sp.b, !0).then((pp => {
-           this.takeStoredOwn(pp)
-         }), (pp => {
-           ip("the stored texture pack didn't read: the default pack shows", pp), this.takeStoredOwn(null)
-         }))]), this.update()
+       isHeld() {
+         return this.holding && qQ() !== this.heldOrientation && (this.holding = !1), this.holding
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L323-L328` → after: `L533-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L533-L536) · [Before (L323-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L323-L328)

```diff
-       takeOneShot(pp) {
-         var ip;
-         null === pp || this.Ry || this.changes > 0 || this.picks > 0 || ((0, Yp.g)(pp.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
-           pack: pp.pack,
-           gameSource: null !== (ip = pp.source) && void 0 !== ip ? ip : ""
-         }))
+       hold() {
+         this.heldOrientation = qQ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, wQ.jB)(new Error("Game view size held for 60 s"))
+         }), 6e4)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L330-L337` → after: `L538-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L538-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L538-L545) · [Before (L330-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L330-L337)

```diff
-       takeStoredOwn(pp) {
-         if (this.playerPicked || this.Ry) return;
-         if (this.ownChanges++, this.setOwn(vp(pp)), this.onGamePack) return;
-         const ip = {
-           pack: this.playerPack,
-           gameSource: null
-         };
-         0 === this.changes ? this.state = ip : this.change(ip, !1)
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const QQ of this.resizers) QQ()
+           }
+         }), 1e3)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L339-L349` → after: `L547-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L547-L552) · [Before (L339-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L339-L349)

```diff
-       async update() {
-         const pp = this.playerPack,
-           ip = null === pp || void 0 === pp ? void 0 : pp.metaData.id;
-         if (!pp || !ip || !this.host.fetchLatest || ip === op.b || ip === op.q.CUSTOM) return;
-         const cp = op.r[ip];
-         if (void 0 === cp || pp.metaData.version >= cp) return;
-         let Op;
-         try {
-           Op = vp(await this.host.fetchLatest(ip))
-         } catch (Ip) {
-           return void this.host.warn(`texture pack ${ip} didn't update to version ${cp}`, Ip)
+       heldSizer(QQ) {
+         let WQ = !1;
+         return () => {
+           if (WQ && this.isHeld()) return null;
+           const XQ = QQ();
+           return WQ ||= null !== XQ, XQ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L360-L365` → after: `L555-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L555-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L555-L557) · [Before (L360-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L360-L365)

```diff
-       setOwn(pp) {
-         this.playerPack = pp;
-         for (const cp of [...this.ownListeners]) try {
-           cp()
-         } catch (ip) {
-           this.host.warn("a texture pack listener threw", ip)
+       onRelease(QQ) {
+         return this.resizers.add(QQ), () => {
+           this.resizers.delete(QQ)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L368-L372` → after: `L560-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L560-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L560-L620) · [Before (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L368-L372)

```diff
-       usePlayerPack() {
-         this.onGamePack && this.change({
-           pack: this.playerPack,
-           gameSource: null
-         }, !1)
+     }
+   },
+   36814: (QQ, WQ, XQ) => {
+     const wQ = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, XQ(1226).d)(wQ)
+   },
+   37123: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       return QQ.size === WQ.size && [...QQ].every((QQ => WQ.has(QQ)))
+     }
+     XQ.d(WQ, {
+       d: () => wQ
+     })
+   },
+   37041: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+ ... (45 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L374-L379` → after: `L622-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L622-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L622-L632) · [Before (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L374-L379)

```diff
-       async storePlayerPack(pp) {
-         try {
-           return null === pp ? (await this.host.store.removeItem(Sp.b), !0) : await this.host.store.setItem(Sp.b, pp)
-         } catch (ip) {
-           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ip), !1
-         }
+     }
+ 
+     function PQ(QQ, WQ, XQ) {
+       const qQ = FQ(QQ, WQ),
+         {
+           numLines: zQ,
+           charsPerLine: sQ
+         } = wQ[XQ];
+       return {
+         numLines: Math.max(1, Math.floor(zQ / TQ * qQ.height)),
+         charsPerLine: Math.max(1, Math.floor(sQ * qQ.width))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L381-L385` → after: `L634-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L634-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L634-L671) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L381-L385)

```diff
-       change(pp, ip) {
-         if (!this.Ry) {
-           this.changes++, this.onGamePack = ip, this.state = pp;
-           for (const pp of [...this.listeners.keys()]) this.deliver(pp)
-         }
+     }
+ 
+     function gQ(QQ, WQ, XQ, wQ) {
+       const {
+         numLines: qQ,
+         charsPerLine: TQ
+       } = PQ(XQ, wQ, WQ);
+       return pQ(QQ, qQ, TQ, !1)
+     }
+     const JQ = 32e3;
+ 
+     function rQ(QQ) {
+       return QQ.slice(0, JQ)
+     }
+     const IQ = 512e3,
+       jQ = 64,
+ ... (22 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L387-L394` → after: `L673-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L673-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L673-L689) · [Before (L387-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L387-L394)

```diff
-       deliver(pp) {
-         if (!this.Ry && this.listeners.has(pp) && this.listeners.get(pp) !== this.state) {
-           this.listeners.set(pp, this.state);
-           try {
-             pp(this.state)
-           } catch (ip) {
-             this.host.warn("a texture pack listener threw", ip)
-           }
+     };
+ 
+     function DQ(QQ, WQ) {
+       const {
+         numLines: XQ,
+         charsPerLine: wQ
+       } = VQ[WQ];
+       return pQ(QQ, XQ, wQ, !1)
+     }
+ 
+     function pQ(QQ, WQ, XQ, wQ, qQ) {
+       (qQ || wQ) && (QQ = QQ.slice(0, null !== qQ && void 0 !== qQ ? qQ : WQ * XQ));
+       const TQ = QQ.split("\n");
+       if (TQ.length > WQ && TQ.splice(WQ, TQ.length - WQ), !wQ)
+         for (let zQ = 0; zQ < TQ.length; zQ++) {
+           const QQ = TQ[zQ];
+ ... (1 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L396` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L691) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L396)

```diff
-       }
+       return TQ.join("\n")
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L398-L402` → after: `L693-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L693-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L693-L777) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L398-L402)

```diff
-     async function Up(pp, ip, cp) {
-       const Op = (0, Lp.d)(await cp.fetchPack(ip));
-       if (null !== Op) return {
-         pack: Op,
-         key: ip
+   },
+   34516: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => gQ,
+       c: () => rQ,
+       d: () => JQ,
+       h: () => zQ,
+       k: () => PQ,
+       m: () => FQ
+     });
+     var wQ = XQ(402);
+     const qQ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       TQ = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+ ... (69 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L404-L410` → after: `L779-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L779-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L779-L783) · [Before (L404-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L404-L410)

```diff
-       const op = await cp.packKey(pp);
-       if (null === op) return null;
-       const Ip = (0, Lp.d)(await cp.fetchPack(op));
-       if (null === Ip) throw new Error(`no texture pack at ${op}`);
-       return {
-         pack: Ip,
-         key: op
+ 
+     function zQ(QQ) {
+       var WQ;
+       return null !== (WQ = TQ[QQ]) && void 0 !== WQ ? WQ : {
+         translationKey: ""
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L415` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L840) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L415)

```diff
-       return null === pp || pp.metaData.id === op.b
+       return qQ.includes(QQ)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L419-L420` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L844-L845) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L419-L420)

```diff
-       const ip = (0, Lp.d)(pp);
-       return wp(ip) ? null : ip
+       var WQ;
+       return !0 === (null === QQ || void 0 === QQ || null === (WQ = QQ.customAttributes) || void 0 === WQ ? void 0 : WQ.cannotEnchant)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L422-L424` → after: `L847-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L847-L848) · [Before (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L422-L424)

```diff
-     async function tp(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ip.d;
-       if (null === pp.pack) return null;
+ 
+     function gQ(QQ, WQ) {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L426-L428` → after: `L850-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L850-L852) · [Before (L426-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L426-L428)

```diff
-         packAssets: Op
-       } = await Promise.all([cp.e(206), cp.e(45)]).then((() => cp(61592)));
-       return Op(pp, ip)
+         max: XQ
+       } = sQ[QQ].at(-1);
+       return WQ <= XQ
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L432-L437` → after: `L856-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L856-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/204.js#L856-L893) · [Before (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/204.js#L432-L437)

```diff
-       const ip = (0, Sp.v)();
-       return null === ip ? () => {} : (ip.onmessage = ip => {
-         pp.readPlayerPack((0, xp.f)(ip.data))
-       }, () => {
-         ip.close()
-       })
+       const WQ = Math.sin(QQ / 80),
+         XQ = QQ => {
+           if (QQ <= 0) return 0;
+           if (QQ > 1) return 1;
+           let WQ = 0;
+           const XQ = [1, 7, 21, 35, 35, 21, 7, 1];
+           for (let wQ = 0; wQ < XQ.length; wQ++) {
+             WQ += (wQ % 2 === 0 ? 1 : -1) * XQ[wQ] * Math.pow(QQ, 2 + wQ) / (2 + wQ)
+           }
+           return 72 * WQ
+         },
+         wQ = .3 - .78 * WQ,
+         qQ = .5 - .78 * WQ,
+         TQ = .6 - .7 * WQ,
+         zQ = .8 - .6 * WQ;
+       let sQ = XQ(wQ),
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/205.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/205.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530)

#### 1. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L4-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L4-L360) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L4)

```diff
-   34484: (pp, ip, cp) => {
+   39376: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => sQ,
+       f: () => TQ
+     });
+     var wQ = XQ(4357);
+     let qQ = null;
+ 
+     function TQ(QQ) {
+       return null !== qQ && QQ === qQ
+     }
+ 
+     function zQ() {
+       this.EY = !1, this.stopPropagation = !1, this.kY = !1, this.disabled = !1
+     }
+     class sQ {
+ ... (341 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L6-L9` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L362) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L6-L9)

```diff
-       packDisplayName: () => yp,
-       packModelMessage: () => Up,
-       packModelSummary: () => vp,
-       refusedPackModels: () => wp
+       startPadGameplay: () => UQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L11-L36` → after: `L364-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L364-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L364-L412) · [Before (L11-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L11-L36)

```diff
-     var Op = cp(34493),
-       op = cp(34496);
-     const Ip = "DRACO",
-       Sp = 0,
-       xp = 1,
-       Lp = 0,
-       Yp = 1,
-       Dp = 32768;
- 
-     function Ap(pp) {
-       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
-       let cp = 0;
-       const Op = () => {
-           if (cp >= pp.byteLength) throw new RangeError("past the stream");
-           return pp[cp++]
-         },
- ... (10 more removed lines; see GitHub link above)
+     XQ(40787);
+     var wQ = XQ(40790),
+       qQ = XQ(3984),
+       TQ = XQ(26),
+       zQ = XQ(39346),
+       sQ = XQ(3907),
+       FQ = XQ(39370),
+       PQ = XQ(31),
+       gQ = XQ(2997),
+       JQ = XQ(38713),
+       rQ = XQ(9220),
+       IQ = XQ(40796);
+     const jQ = {
+       yawRadPerSec: 0,
+       pitchRadPerSec: 0
+     };
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L38-L79` → after: `L414-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L414-L422) · [Before (L38-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L38-L79)

```diff
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let pp = 0; pp < Ip.length; pp++)
-           if (Op() !== Ip.charCodeAt(pp)) return null;
-         const ip = Op(),
-           Pp = Op(),
-           Wp = Op(),
-           yp = Op(),
-           Up = Op() | Op() << 8;
-         if (2 !== ip) return null;
-         0 !== (Up & Dp) && function(pp, ip, cp) {
-           const Op = () => {
-               ip(cp())
-             },
-             op = () => {
- ... (26 more removed lines; see GitHub link above)
+         })();
+         return {
+           update: (WQ, XQ, wQ) => {
+             QQ.update((0, gQ.f)(), WQ, XQ, wQ)
+           },
+           release: QQ.release,
+           uninstall: () => {
+             const WQ = (0, gQ.f)();
+             WQ && QQ.uninstall(WQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L82-L141` → after: `L425-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L425-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L425-L524) · [Before (L82-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L82-L141)

```diff
-         if (yp !== Yp) return null;
-         Op(), Pp < 2 && Ap();
-         const vp = Ap();
-         return {
-           faces: Ap(),
-           vertices: vp
-         }
-       } catch {
-         return null
-       }
-     }
- 
-     function Pp(pp, ip, cp) {
-       var Op, op;
-       if (null === (Op = null === (op = pp.extensionsUsed) || void 0 === op ? void 0 : op.includes("KHR_draco_mesh_compression")) || void 0 === Op || !Op) return null;
-       for (const yp of null !== (Ip = pp.meshes) && void 0 !== Ip ? Ip : []) {
- ... (44 more removed lines; see GitHub link above)
+       };
+     var GQ = XQ(40802);
+     XQ(37953), XQ(9106);
+     XQ(9128).c;
+     const UQ = () => {
+       const QQ = (0, GQ.d)((() => {
+           const QQ = {
+             x: 0,
+             y: 0,
+             magnitude: 0,
+             headingOffset: 0,
+             jumpHeld: !1,
+             jumpPressedSinceTick: !1,
+             crouchHeld: !1,
+             running: !1,
+             sprintHeld: !1
+ ... (84 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L143-L147` → after: `L526-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L526-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L526-L576) · [Before (L143-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L143-L147)

```diff
-         } catch {
-           ip = "is not a binary glTF 2.0 file"
-         } else ip = "loads data from outside the file";
-         ip && (Sp[xp] = ip, cp && console.warn(Up(pp, xp, ip)))
-       }
+         })()),
+         WQ = (0, wQ.d)(),
+         XQ = null,
+         TQ = null;
+       return () => {
+         QQ(), WQ(), null === XQ || void 0 === XQ || XQ(), null === TQ || void 0 === TQ || TQ()
+       }
+     }
+   },
+   36906: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       B: () => DQ,
+       b: () => TQ,
+       f: () => BQ,
+       h: () => yQ,
+       j: () => sQ,
+ ... (35 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L151-L157` → after: `L580-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L580-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/205.js#L580-L727) · [Before (L151-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/205.js#L151-L157)

```diff
-     function vp(pp, ip) {
-       const cp = Object.keys(ip);
-       if (0 === cp.length) return null;
-       if (1 === cp.length) return Up(pp, cp[0], ip[cp[0]]);
-       const Op = cp.map((pp => `"${pp}" ${ip[pp]}`)).join("; ");
-       return `Texture pack "${pp}": ${cp.length} models were not loaded (${Op}). The default models are used instead.`
-     }
+     function IQ() {
+       return sQ().filter((QQ => QQ.panel && !QQ.disabled))
+     }
+ 
+     function jQ(QQ) {
+       const WQ = IQ(),
+         XQ = WQ.findIndex((QQ => QQ.id === FQ));
+       return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
+     }
+ 
+     function BQ() {
+       return null !== FQ && IQ().length > 1
+     }
+ 
+     function yQ() {
+       PQ(null)
+ ... (132 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/206.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/206.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L4-L8` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L29) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L8)

```diff
-   34493: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => lp,
-       e: () => Xp,
-       f: () => Ep
+   34529: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       MAX_BLOCK_ID: () => wQ,
+       armourReductionOf: () => tQ,
+       clipSizeOf: () => SQ,
+       creativeAltNames: () => zW,
+       creativeCategoryOf: () => mQ,
+       creativeItemCategories: () => sQ,
+       creativeItemCategoryIcons: () => FQ,
+       creativeItemIds: () => KQ,
+       descriptionOf: () => LQ,
+       displayNameOf: () => uQ,
+       dropsNothing: () => nQ,
+       enchantmentPerksOf: () => ZQ,
+       gunTypeOf: () => eQ,
+       harvestsNullLevelOf: () => xQ,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L10-L22` → after: `L31-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L31-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L31-L35) · [Before (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L10-L22)

```diff
-     var Op = cp(34496);
-     const op = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
+     const wQ = 8558,
+       qQ = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       TQ = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       zQ = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       sQ = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L24-L67` → after: `L37-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L37-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L37-L51) · [Before (L24-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L24-L67)

```diff
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
-         bounds: 16,
-         attributeMembers: 32
-       },
-       Sp = 1048576,
-       xp = "is not a binary glTF 2.0 file",
-       Lp = "loads data from outside the file",
-       Yp = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
-       Dp = {
-         POSITION: "VEC3",
-         NORMAL: "VEC3",
-         TEXCOORD_0: "VEC2",
-         COLOR_0: "VEC4"
- ... (28 more removed lines; see GitHub link above)
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+         worldTools: "Code Block"
+       };
+     var PQ = XQ(3555),
+       gQ = XQ(3559);
+     const JQ = Object.freeze([]);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L70` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L54-L58) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L70)

```diff
-       return pp.toLocaleString("en-US")
+       let WQ = null;
+       return XQ => {
+         var wQ;
+         return WQ ??= (0, gQ.E)(QQ, 10091), null !== (wQ = WQ[XQ]) && void 0 !== wQ ? wQ : 0
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L74` → after: `L62-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L62-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L62-L68) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L74)

```diff
-       return pp > ip ? `has ${wp(pp)} ${cp} (the limit is ${wp(ip)})` : null
+       const wQ = rQ(QQ);
+       let qQ = null,
+         TQ = [];
+       return QQ => {
+         const zQ = wQ(QQ);
+         if (0 !== zQ) return null === qQ && (qQ = WQ.split(gQ.v), TQ = new Array(qQ.length)), TQ[zQ - 1] ??= XQ(qQ[zQ - 1])
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L77-L78` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L71-L72) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L77-L78)

```diff
-     function tp(pp, ip) {
-       return Number.isInteger(pp) && pp >= 0 && pp < (null !== ip && void 0 !== ip ? ip : 0)
+     function jQ(QQ) {
+       return QQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L82` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L76) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L82)

```diff
-       return Number.isInteger(pp) && pp >= 0
+       return QQ === gQ.g ? null : (0, gQ.H)(QQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L85-L86` → after: `L84-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L84-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L84-L108) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L85-L86)

```diff
-     function dp(pp, ip) {
-       return void 0 !== pp && (!Array.isArray(pp) || pp.length > ip)
+     function UQ(QQ, WQ, XQ) {
+       GQ !== (0, PQ.f)() && (GQ = (0, PQ.f)(), DQ.clear(), pQ.clear());
+       let wQ = QQ.get(WQ);
+       return void 0 === wQ && (wQ = XQ(), void 0 !== wQ && QQ.set(WQ, wQ)), wQ
+     }
+     const bQ = IQ("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       vQ = IQ("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       dQ = IQ(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       HQ = IQ("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       aQ = IQ(">W]+#%#)$)%9$", "none|sniper", jQ),
+       lQ = IQ("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", jQ),
+       hQ = rQ("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
+       iQ = rQ("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
+       cQ = IQ("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (QQ => "" === QQ ? null : Number(QQ))),
+       AQ = IQ("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
+       RQ = IQ(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L89-L90` → after: `L111-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L111-L116) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L89-L90)

```diff
-     function ep(pp, ip) {
-       return "object" === typeof pp && null !== pp && Object.keys(pp).length > ip
+     function LQ(QQ) {
+       const WQ = VQ(QQ);
+       return null !== WQ ? WQ : UQ(pQ, QQ, (() => {
+         var WQ;
+         return null !== (WQ = (0, gQ.I)(uQ(QQ))) && void 0 !== WQ ? WQ : void 0
+       }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L94-L95` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L120) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L94-L95)

```diff
-       var ip;
-       return `${pp.normalized?"normalized ":""}${null!==(ip=Op.f[pp.componentType])&&void 0!==ip?ip:pp.componentType} ${pp.type}`
+       return bQ(QQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L99-L103` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L124) · [Before (L99-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L99-L103)

```diff
-       const ip = ip => {
-         var cp;
-         return null !== (cp = pp[ip]) && void 0 !== cp ? cp : -1
-       };
-       return 255 === ip(0) && 216 === ip(1) ? "JPEG" : 82 === ip(0) && 73 === ip(1) && 87 === ip(8) && 69 === ip(9) ? "WebP" : 171 === ip(0) && 75 === ip(1) && 84 === ip(2) && 88 === ip(3) ? "KTX2" : "non-PNG"
+       return vQ(QQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L107` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L128) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L107)

```diff
-       return pp.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ip, cp) => pp[cp] === ip)) && 73 === pp[12] && 72 === pp[13] && 68 === pp[14] && 82 === pp[15]
+       return dQ(QQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L111` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L132) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L111)

```diff
-       return /^[aeiou]/i.test(pp) ? `an ${pp}` : `a ${pp}`
+       return HQ(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L115-L116` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L136) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L115-L116)

```diff
-       const ip = pp.byteStride;
-       return void 0 === ip || Number.isInteger(ip) && ip >= 4 && ip <= 252 && ip % 4 === 0
+       return aQ(QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L119-L124` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L139-L140) · [Before (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L119-L124)

```diff
-     function Mp(pp, ip, cp) {
-       var Op, op;
-       const Ip = null === (Op = pp.bufferViews) || void 0 === Op ? void 0 : Op[cp];
-       if (!Ip || !ip || 0 !== Ip.buffer) return null;
-       const Sp = null !== (op = Ip.byteOffset) && void 0 !== op ? op : 0;
-       return !Hp(Sp) || !Hp(Ip.byteLength) || Sp + Ip.byteLength > ip.byteLength ? null : ip.subarray(Sp, Sp + Ip.byteLength)
+     function eQ(QQ) {
+       return lQ(QQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L127-L139` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L143-L144) · [Before (L127-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L127-L139)

```diff
-     function Cp(pp, ip) {
-       var cp, op, Ip;
-       const Sp = Op.r[ip.type],
-         xp = Op.c[ip.componentType];
-       if (!Sp || !xp || !Number.isInteger(ip.count) || ip.count < 0) return !1;
-       if (void 0 === ip.bufferView) return !0;
-       const Lp = null === (cp = pp.bufferViews) || void 0 === cp ? void 0 : cp[ip.bufferView],
-         Yp = null !== (op = ip.byteOffset) && void 0 !== op ? op : 0;
-       if (!Lp || !Hp(Yp) || Yp % xp !== 0) return !1;
-       const Dp = Sp * xp,
-         Ap = null !== (Ip = Lp.byteStride) && void 0 !== Ip ? Ip : Dp;
-       if (Ap < Dp) return !1;
-       return (0 === ip.count ? 0 : Yp + Ap * (ip.count - 1) + Dp) <= Lp.byteLength
+     function nQ(QQ) {
+       return 0 !== iQ(QQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L143` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L148) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L143)

```diff
-       return pp > op.fileBytes ? `is ${(pp/Sp).toFixed(1)} MiB (the limit is ${op.fileBytes/Sp} MiB)` : null
+       return cQ(QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L146-L380` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L151-L152) · [Before (L146-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L146-L380)

```diff
-     function Xp(pp, ip) {
-       try {
-         return function(pp, ip) {
-           var cp, Sp, Ap, wp, Hp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap;
-           const np = Array.isArray(pp.extensionsUsed) && pp.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(pp, ip) {
-               var cp, Op;
-               const {
-                 items: op,
-                 perFile: Sp,
-                 surfaces: xp,
-                 few: Lp,
-                 bounds: Yp,
-                 attributeMembers: Dp
-               } = Ip;
-               if (dp(pp.extensionsRequired, Lp) || dp(pp.animations, 1 / 0) || dp(pp.skins, 1 / 0)) return !0;
- ... (219 more removed lines; see GitHub link above)
+     function YQ(QQ) {
+       return 0 !== hQ(QQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L384-L395` → after: `L156-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L156-L159) · [Before (L384-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L384-L395)

```diff
-       const ip = Ep(pp.byteLength);
-       if (ip) return ip;
-       try {
-         const {
-           json: ip,
-           bin: cp
-         } = (0, Op.B)(pp);
-         return Xp(ip, cp)
-       } catch (cp) {
-         if (cp instanceof Op.o) return cp.reason;
-         throw cp
-       }
+       const WQ = AQ(QQ);
+       if (void 0 === WQ || WQ.startsWith(gQ.r)) return null === WQ || void 0 === WQ ? void 0 : WQ.slice(gQ.r.length);
+       const XQ = (0, PQ.e)(QQ);
+       return void 0 === XQ ? void 0 : `${XQ}${gQ.v}${WQ}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L397-L415` → after: `L161-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L161-L164) · [Before (L397-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L397-L415)

```diff
-   },
-   34496: (pp, ip, cp) => {
-     cp.d(ip, {
-       B: () => Yp,
-       c: () => Wp,
-       f: () => Pp,
-       h: () => Up,
-       k: () => Ip,
-       o: () => op,
-       r: () => yp,
-       s: () => Dp,
-       w: () => Ap,
-       y: () => Sp
-     });
-     var Op = cp(34503);
-     class op extends Error {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function ZQ(QQ) {
+       var WQ;
+       return null !== (WQ = RQ(QQ)) && void 0 !== WQ ? WQ : JQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L417-L419` → after: `L166-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L166-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L166-L174) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L417-L419)

```diff
-     class Ip extends Error {
-       constructor(pp) {
-         super(pp), this.name = "GlbError"
+     let OQ = null;
+ 
+     function KQ() {
+       if (null === OQ) {
+         const QQ = [],
+           WQ = new gQ.z(qQ);
+         let XQ = 0;
+         for (; !WQ.done;) XQ += (0, gQ.N)(WQ.next()), QQ.push(XQ);
+         OQ = Object.freeze(QQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L424` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L180) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L424)

```diff
-       return Reflect.get(pp, "scene")
+       return EQ(QQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L429` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L183) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L429)

```diff
-     function Yp(pp) {
+     function MQ(QQ, WQ) {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L431-L459` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L185) · [Before (L431-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L431-L459)

```diff
-       const cp = pp instanceof Uint8Array ? pp : new Uint8Array(pp),
-         Ip = (0, Op.f)(cp);
-       if (null === Ip) throw new op(Lp);
-       const Sp = Ip.json,
-         {
-           jsonEnd: Yp,
-           length: Dp
-         } = Ip,
-         Ap = new DataView(cp.buffer, cp.byteOffset, cp.byteLength);
-       let Pp = -1,
-         Wp = 0;
-       for (let wp = Yp; wp < Dp;) {
-         if (wp + 8 > Dp) throw new op(Lp);
-         const pp = Ap.getUint32(wp, !0),
-           ip = Ap.getUint32(wp + 4, !0);
-         if (wp + 8 + pp > Dp || ip === Op.b || ip === xp && -1 !== Pp) throw new op(Lp);
- ... (13 more removed lines; see GitHub link above)
+       return 0 !== ((null !== (XQ = CQ(QQ)) && void 0 !== XQ ? XQ : 0) & WQ)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L463-L469` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L189) · [Before (L463-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L463-L469)

```diff
-       const ip = pp.slice(pp.indexOf(",") + 1),
-         cp = Uint8Array.fromBase64;
-       if (cp) return cp(ip).buffer;
-       const Op = atob(ip),
-         op = new Uint8Array(Op.length);
-       for (let Ip = 0; Ip < Op.length; Ip++) op[Ip] = Op.charCodeAt(Ip);
-       return op.buffer
+       return MQ(QQ, gQ.d.OnlyInSearch)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L471-L475` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L191-L193) · [Before (L471-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L471-L475)

```diff
-     async function Ap(pp) {
-       if (pp.startsWith("data:")) return Dp(pp);
-       const ip = await fetch(pp);
-       if (!ip.ok) throw new Ip(`fetching ${pp} failed: ${ip.status} ${ip.statusText}`);
-       return await ip.arrayBuffer()
+ 
+     function WW(QQ) {
+       return MQ(QQ, gQ.d.OnlyInCategory)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L525-L540` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L197) · [Before (L525-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L525-L540)

```diff
-       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
-       if (pp.byteLength < 20 || ip.getUint32(0, !0) !== Op || 2 !== ip.getUint32(4, !0)) return null;
-       const cp = Math.min(ip.getUint32(8, !0), pp.byteLength),
-         Ip = ip.getUint32(12, !0);
-       if (ip.getUint32(16, !0) !== op || 20 + Ip > cp) return null;
-       let Sp;
-       try {
-         Sp = JSON.parse((new TextDecoder).decode(pp.subarray(20, 20 + Ip)))
-       } catch {
-         return null
-       }
-       return "object" === typeof Sp && null !== Sp ? {
-         json: Sp,
-         jsonEnd: 20 + Ip,
-         length: cp
-       } : null
+       return MQ(QQ, gQ.d.DevOnly)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L545-L554` → after: `L206-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L206-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/206.js#L206-L225) · [Before (L545-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/206.js#L545-L554)

```diff
-       const cp = null === (ip = Ip(pp)) || void 0 === ip ? void 0 : ip.json;
-       if (void 0 === cp || !Array.isArray(cp.extensionsUsed) || !cp.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
-       const Op = cp.meshes;
-       return Array.isArray(Op) && Op.some((pp => {
-         const ip = null === pp || void 0 === pp ? void 0 : pp.primitives;
-         return Array.isArray(ip) && ip.some((pp => {
-           const ip = null === pp || void 0 === pp ? void 0 : pp.extensions;
-           return null != (null === ip || void 0 === ip ? void 0 : ip.KHR_draco_mesh_compression)
-         }))
-       }))
+       const TQ = null !== (qQ = CQ(QQ)) && void 0 !== qQ ? qQ : 0;
+       return 0 !== (TQ & gQ.d.DisabledInPublicLobbies) && WQ || 0 !== (TQ & gQ.d.DisabledInProduction) && !0 || !XQ || !wQ && 0 !== (TQ & gQ.d.DevOnly)
+     }
+     let TW = null;
+ 
+     function zW() {
+       if (null === TW) {
+         const QQ = zQ.split(gQ.v),
+           WQ = new Map,
+           XQ = new gQ.z(TQ);
+         let wQ = 0,
+           qQ = 0;
+         for (; !XQ.done;) {
+           wQ += (0, gQ.N)(XQ.next());
+           const TQ = XQ.next();
+           WQ.set(wQ, Object.freeze(QQ.slice(qQ, qQ + TQ))), qQ += TQ
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/207.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/207.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L15)

```diff
-   34510: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       animatedBlockTextures: () => Lp,
-       armourAtlasUrl: () => Sp,
-       averageColors: () => Yp,
-       blockAtlasUrls: () => Ip,
-       blockAtlasWidth: () => Op,
-       buildHash: () => Ap,
-       builtTextureIndexFingerprint: () => Dp,
-       imagesPerAtlas: () => op,
-       outputHash: () => Pp,
-       rotatedBlockTextures: () => xp
+   41772: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L17-L521` → after: `L8-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L8-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/207.js#L8-L123) · [Before (L17-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/207.js#L17-L521)

```diff
-     const Op = 8,
-       op = [256, 256, 256, 256, 256, 256, 114],
-       Ip = [cp(34515), cp(34524), cp(34531), cp(34533), cp(34539), cp(34547), cp(34554)],
-       Sp = cp(34558),
-       xp = {
-         "alloy_kiln_top[rot[1": cp(34560),
-         "alloy_kiln_top[rot[2": cp(34566),
-         "alloy_kiln_top[rot[3": cp(34569),
-         "alloy_kiln_top[rot[4": cp(34572),
-         "auto_bench_top[rot[1": cp(34575),
-         "auto_bench_top[rot[2": cp(34578),
-         "auto_bench_top[rot[3": cp(34584),
-         "auto_bench_top[rot[4": cp(34593),
-         "belt_tunnel_exit_top[rot[1": cp(34601),
-         "belt_tunnel_exit_top[rot[2": cp(34605),
-         "belt_tunnel_exit_top[rot[3": cp(34610),
- ... (489 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(2978);
+ 
+     function TQ(QQ, WQ, XQ) {
+       const TQ = (0, wQ.useRef)(null),
+         {
+           width: zQ,
+           height: sQ
+         } = (0, qQ.d)(QQ);
+       (0, wQ.useEffect)((() => {
+         const XQ = WQ(QQ.current);
+         return TQ.current = XQ, () => {
+           XQ.close(), TQ.current = null
+         }
+       }), [QQ, WQ]), (0, wQ.useEffect)((() => {
+         zQ <= 0 || sQ <= 0 || TQ.current.resize(zQ, sQ)
+ ... (100 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L524-L10902` → after: `L126-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L126-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/207.js#L126-L332) · [Before (L524-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/207.js#L524-L10902)

```diff
-         Unloaded: [
-           [244, 0, 255],
-           [0, 0, 0]
-         ],
-         Dirt: [
-           [133, 98, 77],
-           [139, 102, 80],
-           [127, 92, 74]
-         ],
-         "Messy Dirt": [
-           [123, 87, 59],
-           [129, 90, 62],
-           [118, 81, 57]
-         ],
-         "Grass Block": [
-           [93, 141, 53],
- ... (10363 more removed lines; see GitHub link above)
+         player: TQ,
+         store: {
+           ...TQ,
+           radius: 33,
+           target: [0, 3.9, 0]
+         }
+       };
+ 
+     function sQ(QQ, WQ) {
+       QQ instanceof Promise ? QQ.then(WQ).catch((QQ => {
+         console.error("Couldn't open the preview", QQ)
+       })) : WQ(QQ)
+     }
+     class FQ {
+       constructor(QQ) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, sQ(QQ, (QQ => {
+ ... (191 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/208.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/208.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L4)

```diff
-   36453: (pp, ip, cp) => {
+   41766: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L6-L20` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L6-L14) · [Before (L6-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L6-L20)

```diff
-       WasmTextureWorker: () => tp
-     });
-     var Op = cp(629),
-       op = cp(3296),
-       Ip = cp(36455),
-       Sp = cp.n(Ip);
- 
-     function xp() {
-       return Sp()('(()=>{var pp={d:(ip,cp)=>{for(var Op in cp)pp.o(cp,Op)&&!pp.o(ip,Op)&&Object.defineProperty(ip,Op,{enumerable:!0,get:cp[Op]})},o:(pp,ip)=>Object.prototype.hasOwnProperty.call(pp,ip),r:pp=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(p … [truncated]
-     }
-     var Lp = cp(36464),
-       Yp = cp(3322),
-       Dp = cp(3335),
-       Ap = cp(3333),
-       Pp = cp(3305);
+       MobPreview: () => JQ
+     });
+     var wQ = XQ(61),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(41772),
+       sQ = XQ(34541),
+       FQ = XQ(41774),
+       PQ = XQ(1145);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L23-L29` → after: `L17-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L17-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L17-L70) · [Before (L23-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L23-L29)

```diff
-       return "" === pp ? [] : pp.split("\0")
-     }
- 
-     function yp(pp) {
-       if ("" !== pp)
-         for (const ip of pp.split("\n")) console.error(ip)
-     }
+       return sQ.h.openMob(QQ)
+     }
+     const JQ = (0, wQ.memo)((function(QQ) {
+       let {
+         mobType: WQ,
+         variation: XQ = null,
+         animation: qQ = FQ.h,
+         className: sQ
+       } = QQ;
+       const JQ = (0, wQ.useRef)(null),
+         rQ = (0, wQ.useMemo)((() => ({
+           mobType: WQ,
+           variation: XQ,
+           animation: qQ
+         })), [WQ, XQ, qQ]);
+       return (0, zQ.e)(JQ, gQ, rQ), (0, PQ.jsx)("div", {
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L32-L64` → after: `L73-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L73-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L73-L93) · [Before (L32-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L32-L64)

```diff
-       return async function(pp, ip) {
-         const cp = Object.keys(pp),
-           Op = [],
-           op = new Map,
-           Ip = new Uint32Array(cp.length);
-         for (const [Sp, xp] of cp.entries()) {
-           const {
-             url: ip
-           } = pp[xp];
-           op.has(ip) || (op.set(ip, Op.length), Op.push(ip)), Ip[Sp] = op.get(ip)
-         }
-         return {
-           sources: await ip(Op),
-           names: cp.join("\0"),
-           sourceOfName: Ip
-         }
- ... (17 more removed lines; see GitHub link above)
+       let [XQ, wQ, qQ] = QQ;
+       return [0, .5, 1].map((QQ => ({
+         timeFraction: QQ,
+         rotation: {
+           Zw: "catmull-rom-spline",
+           point: [XQ, wQ, qQ + (.5 === QQ ? WQ : 0)]
+         }
+       })))
+     }
+ 
+     function zQ(QQ, WQ, XQ) {
+       return {
+         ew: 3200,
+         loop: !0,
+         xw: {
+           Root: {
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L66-L69` → after: `L95-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L95-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L95-L110) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L66-L69)

```diff
-             })));
-             return new Map(ip)
-           } finally {
-             ip.removeEventListener("abort", Op)
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((QQ => ({
+               timeFraction: QQ,
+               rotation: {
+                 Zw: "catmull-rom-spline",
+                 point: [0, .25 === QQ ? .12 : .75 === QQ ? -.12 : 0, 0]
+               }
+             })))
+           },
+           ArmLeftMesh: {
+             timeline: TQ(QQ, XQ)
+           },
+           ArmRightMesh: {
+             timeline: TQ(WQ, -XQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L71-L286` → after: `L112-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L112-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L112-L122) · [Before (L71-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L71-L286)

```diff
-         }(pp.filter((pp => !pp.startsWith("data:"))), ip);
-         return Promise.all(pp.map((pp => {
-           var ip;
-           return (0, Pp.d)(null !== (ip = cp.get(pp)) && void 0 !== ip ? ip : pp)
-         })))
-       }))
-     }
- 
-     function wp(pp, ip) {
-       const cp = Dp.l.from(pp, ip ? Dp.k.Optional : Dp.k.Error);
-       return cp.code !== Dp.k.Fetch && cp.code !== Dp.k.Error && (0, Yp.f)(cp.message), cp
-     }
- 
-     function vp(pp) {
-       return pp.message ? new Error(`the texture worker failed: ${pp.message}`) : new Dp.l(Dp.k.Load, "the texture worker failed to start")
-     }
- ... (200 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     const sQ = zQ([0, 0, 0], [0, 0, 0], .07),
+       FQ = (0, qQ.e)((0, wQ.f)(sQ), "mobIdle"),
+       PQ = zQ([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       gQ = zQ([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       JQ = (0, qQ.e)((0, wQ.f)(PQ), "gunReady"),
+       rQ = (0, qQ.e)((0, wQ.f)(gQ), "gunAimed")
+   },
+   34548: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L290-L294` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L126-L128) · [Before (L290-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L290-L294)

```diff
-       e: () => Ip,
-       g: () => Sp
-     });
-     const Op = 1024,
-       op = 1024 * Op;
+       f: () => gQ
+     });
+     var wQ = XQ(1626);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L297-L326` → after: `L131-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L131-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/208.js#L131-L289) · [Before (L297-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/208.js#L297-L326)

```diff
-       return 2 ** Math.floor(Math.log2(Math.max(1, pp / op)))
-     }
- 
-     function Sp(pp) {
-       return (pp / op).toFixed(1)
-     }
-   },
-   36455: pp => {
-     pp.exports = function(pp, ip, cp, Op) {
-       var op = self || window;
-       try {
-         try {
-           var Ip;
-           try {
-             Ip = new op.Blob([pp])
-           } catch (Yp) {
- ... (14 more removed lines; see GitHub link above)
+       var WQ;
+       return {
+         ...zQ.store,
+         yaw: zQ.store.yaw + (null !== (WQ = wQ.c[QQ].previewYaw) && void 0 !== WQ ? WQ : 0)
+       }
+     }
+     const TQ = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       zQ = {
+         player: TQ,
+         store: {
+           ...TQ,
+ ... (143 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/209.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/209.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L4)

```diff
-   41741: (pp, ip, cp) => {
+   36693: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L7)

```diff
-       loadGlbAsset: () => ei,
-       loadGlbTree: () => di
+       default: () => XW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L9-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L8-L12) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L9-L12)

```diff
-     var Op = cp(38124),
-       op = cp(41745),
-       Ip = cp(36455),
-       Sp = cp.n(Ip);
+     var wQ = XQ(61);
+     const qQ = "newPlayerDeal",
+       TQ = 36e5,
+       zQ = [4, 12, 20, 20, 30];
+     const sQ = 12 * TQ;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L14-L15)

```diff
-     function xp() {
-       return Sp()('(()=>{class pp extends Error{}function ip(ip,cp){const Op=ip._malloc(cp);if(0===Op)throw new pp(`Draco: the decoder\'s heap refused ${cp} bytes`);return Op}function cp(pp){return{[pp.DT_FLOAT32]:[Float32Array,5126],[pp.DT_INT8]:[Int8Array,5120],[pp.DT_INT16]:[I … [truncated]
+     function FQ(QQ) {
+       return QQ - sQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L34-L35` → after: `L18-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L18-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L18-L23) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L34-L35)

```diff
-     function vp() {
-       if (!Dp) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+     function PQ(QQ, WQ, XQ) {
+       const wQ = FQ(XQ);
+       return WQ >= wQ && WQ < XQ && (null === QQ.lastShownAt || QQ.lastShownAt < wQ)
+     }
+ 
+     function gQ(QQ, WQ) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L37-L38` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L25-L28) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L37-L38)

```diff
-         scriptUrl: pp,
-         wasmBinaryUrl: ip
+         arrival: XQ,
+         now: wQ,
+         endsAt: qQ,
+         playedOnDevice: sQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L40-L63` → after: `L30-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L30-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L30-L59) · [Before (L40-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L40-L63)

```diff
-       return Ap ??= fetch(ip).then((pp => {
-         if (!pp.ok) throw new Error(`Draco: fetching ${ip} failed: ${pp.status}`);
-         return pp.arrayBuffer()
-       })), Ap.catch((() => {
-         Ap = null
-       })), Up.workersStarted++, Ap.then((ip => new Promise(((cp, Op) => {
-         const op = new xp;
-         op.onerror = pp => {
-           op.onmessage = null, op.onerror = null, op.terminate(), Op(new Error("Draco: the decode worker failed to start" + (pp.message ? `: ${pp.message}` : " (its script did not load)")))
-         }, op.onmessage = pp => {
-           let {
-             data: ip
-           } = pp;
-           op.onmessage = null, op.onerror = null, "initDone" === ip.id ? cp(op) : (op.terminate(), Op(new Error(`Draco: ${"initError"===ip.id?ip.message:"the worker did not start"}`)))
-         };
-         const Ip = ip.slice(0),
- ... (8 more removed lines; see GitHub link above)
+       return !(wQ >= qQ || !sQ) && (!(!PQ(QQ, wQ, qQ) && 0 !== QQ.shownCount && null !== QQ.lastShownAt) || "open" === XQ && wQ - QQ.lastShownAt >= (FQ = QQ.shownCount, zQ[Math.min(Math.max(FQ, 1), zQ.length) - 1] * TQ));
+       var FQ
+     }
+     var JQ = XQ(382),
+       rQ = XQ(1532),
+       IQ = XQ(26),
+       jQ = XQ(2359),
+       BQ = XQ(3267),
+       yQ = XQ(3276),
+       VQ = XQ(2030),
+       DQ = XQ(1238),
+       pQ = XQ(1165);
+     var GQ = XQ(1404),
+       UQ = XQ(43),
+       bQ = XQ(698),
+       vQ = XQ(2652),
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L66-L92` → after: `L62-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L62-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L62-L97) · [Before (L66-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L66-L92)

```diff
-       const ip = Pp.indexOf(pp); - 1 !== ip && Pp.splice(ip, 1);
-       const cp = Wp.shift();
-       cp && dp(cp)
-     }
- 
-     function Hp(pp, ip) {
-       pp.busy = !0, pp.releaseTimer && (clearTimeout(pp.releaseTimer), pp.releaseTimer = null);
-       pp.worker.then((cp => {
-         const Op = yp++;
-         cp.onmessage = op => {
-           let {
-             data: Ip
-           } = op;
-           if (("decoded" === Ip.id || "decodeError" === Ip.id) && Ip.seq === Op) {
-             if (cp.onmessage = null, cp.onerror = null, "decoded" === Ip.id) return Up.decodes++, ip.resolve({
-               indices: Ip.indices,
- ... (11 more removed lines; see GitHub link above)
+       let {
+         shownView: WQ,
+         close: XQ
+       } = QQ;
+       const {
+         t: qQ
+       } = (0, AQ.C)(), TQ = (0, hQ.Q)(), {
+         purchaseUnderWay: zQ,
+         notice: sQ,
+         needsLogin: FQ,
+         buyPack: PQ
+       } = (0, LQ.d)("popup", ((QQ, WQ) => {
+         XQ(!1), (0, cQ.d)(QQ, WQ)
+       })), gQ = null === TQ;
+       (0, wQ.useEffect)((() => {
+         gQ && XQ(!1)
+ ... (20 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L94-L107` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L99-L111) · [Before (L94-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L94-L107)

```diff
-         }, cp.onerror = Op => {
-           cp.onmessage = null, cp.onerror = null, cp.terminate(), ip.reject(new Error(`Draco: the decode worker failed: ${Op.message}`)), tp(pp)
-         };
-         const op = {
-           id: "decode",
-           seq: Op,
-           data: ip.data,
-           attributeIds: ip.attributeIds,
-           expected: ip.expected
-         };
-         cp.postMessage(op, [ip.data.buffer])
-       }), (cp => {
-         ip.reject(cp instanceof Error ? cp : new Error(String(cp))), tp(pp)
-       }))
+         }), (0, kQ.jsx)(EQ.h, {
+           notice: sQ,
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, kQ.jsx)(EQ.c, {
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, kQ.jsx)(RQ.h, {
+           className: "NewPlayerDealNoThanks",
+           onClick: () => {
+             XQ(!0)
+           },
+           children: qQ("newPlayerDeal:noThanks")
+         })]
+       })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L111-L123` → after: `L115-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L115-L121) · [Before (L111-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L111-L123)

```diff
-       const ip = Pp.find((pp => !pp.busy));
-       if (ip) Hp(ip, pp);
-       else {
-         if (Pp.length < wp) {
-           const ip = {
-             worker: vp(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return Pp.push(ip), Up.mostWorkers = Math.max(Up.mostWorkers, Pp.length), void Hp(ip, pp)
-         }
-         Wp.push(pp)
-       }
+       let {
+         arm: WQ,
+         children: XQ
+       } = QQ;
+       return (0, wQ.useEffect)((() => {
+         (0, hQ.M)(!0)
+       }), []), (0, hQ.S)(WQ, "popup"), XQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L126-L134` → after: `L124-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L124-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L124-L141) · [Before (L126-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L126-L134)

```diff
-     function ep(pp, ip, cp) {
-       return new Promise(((Op, op) => {
-         dp({
-           data: new Int8Array(pp.buffer, pp.byteOffset, pp.byteLength).slice(),
-           attributeIds: ip,
-           expected: cp,
-           resolve: Op,
-           reject: op
-         })
+     function tQ(QQ) {
+       let WQ = null;
+       GQ.NotificationProvider.showCustomPopup({
+         body: XQ => (0, kQ.jsx)(SQ, {
+           arm: QQ.arm,
+           children: (0, kQ.jsx)(fQ, {
+             shownView: QQ,
+             close: QQ => {
+               WQ ??= QQ, XQ()
+             }
+           })
+         }),
+         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
+         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
+         disableExitButton: !0,
+         unlockPointerKey: "NewPlayerDealPopup"
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L137-L147` → after: `L144-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L144-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L144-L147) · [Before (L137-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L137-L147)

```diff
-     var jp = cp(37693),
-       kp = cp(37698),
-       mp = cp(34496),
-       Rp = cp(34493);
-     const qp = {
-       index: -1,
-       magFilter: void 0,
-       minFilter: void 0,
-       wrapS: void 0,
-       wrapT: void 0
-     };
+     const oQ = 2500,
+       eQ = 6e4;
+     const nQ = 500,
+       xQ = 6e4;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L150-L348` → after: `L150-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L150-L156) · [Before (L150-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L150-L348)

```diff
-       const ip = (0, Rp.f)(pp.byteLength);
-       if (ip) throw new mp.o(ip);
-       const {
-         json: cp,
-         bin: Op
-       } = (0, mp.B)(pp), op = (0, Rp.e)(cp, Op);
-       if (op) throw new mp.o(op);
-       try {
-         return function(pp, ip) {
-           var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp;
-           const vp = new Map,
-             tp = cp => {
-               let Op = vp.get(cp);
-               if (!Op) {
-                 var op;
-                 const Ip = pp.bufferViews[cp],
- ... (183 more removed lines; see GitHub link above)
+       const WQ = Date.now() + xQ;
+       return new Promise((XQ => {
+         const wQ = () => {
+           QQ() ? (0, HQ.g)() || GQ.NotificationProvider.hasPopup() || (0, dQ.h)() || (0, hQ.s)() || null !== IQ.b.get("openEverythingMenuName") ? Date.now() > WQ ? XQ(!1) : setTimeout(wQ, nQ) : XQ(!0) : XQ(!1)
+         };
+         wQ()
+       }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L350` → after: `L158-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L158-L160) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L350)

```diff
-     const Ep = new WeakMap;
+     const NQ = "newPlayerDealPointerDeferred_";
+     let ZQ = !1,
+       OQ = null;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L354-L355` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L164) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L354-L355)

```diff
-       const Op = null !== (cp = Ep.get(pp)) && void 0 !== cp ? cp : ip(pp);
-       return Ep.set(pp, Op), Op
+       return (null === (XQ = OQ) || void 0 === XQ ? void 0 : XQ.accountId) === WQ && OQ.shownCount === QQ.shownCount
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L358-L375` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L167-L168) · [Before (L358-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L358-L375)

```diff
-     function lp(pp) {
-       const ip = pp.bufferView,
-         cp = 5125 === pp.componentType ? Uint32Array : Uint16Array,
-         Op = ip.bytes.buffer,
-         op = ip.bytes.byteOffset + (pp.byteOffset || 0);
-       return op % cp.BYTES_PER_ELEMENT !== 0 ? new cp(Op.slice(op, op + pp.count * cp.BYTES_PER_ELEMENT), 0) : new cp(Op, op, pp.count)
-     }
- 
-     function Qp(pp, ip) {
-       if (pp.min && pp.max) return [new Float64Array(pp.min), new Float64Array(pp.max)];
-       const cp = ip.find((pp => {
-           let {
-             kind: ip
-           } = pp;
-           return "position" === ip
-         })),
- ... (2 more removed lines; see GitHub link above)
+     function mQ(QQ, WQ, XQ) {
+       return !!KQ(WQ, XQ) && (OQ = null, (0, hQ.y)(XQ), tQ(QQ), !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L377-L384` → after: `L170-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L170-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L170-L175) · [Before (L377-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L377-L384)

```diff
- 
-     function Jp(pp) {
-       const ip = pp.attributes.map((pp => {
-           var ip, cp;
-           let {
-             kind: Op,
-             accessor: op
-           } = pp;
+     async function MQ(QQ, WQ, XQ, wQ) {
+       if (ZQ) return !1;
+       let qQ;
+       ZQ = !0;
+       try {
+         qQ = await async function(QQ) {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L386-L400` → after: `L177-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L177-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L177-L183) · [Before (L386-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L386-L400)

```diff
-             bufferView: Ip,
-             numComponents: Sp
-           } = op;
-           if (!Ip) {
-             return {
-               kind: Op,
-               data: Xp(op, (() => new Float32Array(Sp * op.count))),
-               offset: 0,
-               stride: 4 * Sp,
-               components: Sp,
-               glType: 5126,
-               isNormalized: !1
-             }
-           }
-           const xp = null !== (ip = Ip.byteStride) && void 0 !== ip ? ip : Sp * mp.c[op.componentType];
+             newPlayerDeal: WQ,
+             counted: XQ
+           } = await (0, pQ.postJsonWithMetricsCookiesAndJsonResponse)(`${DQ.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
+             shownCount: QQ
+           }, {
+             retries: 1
+           });
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L402-L408` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L185-L186) · [Before (L402-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L402-L408)

```diff
-             kind: Op,
-             data: Ip.bytes,
-             offset: null !== (cp = op.byteOffset) && void 0 !== cp ? cp : 0,
-             stride: xp,
-             components: Sp,
-             glType: op.componentType,
-             isNormalized: op.normalized
+             newPlayerDeal: WQ,
+             counted: !0 === XQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L410-L477` → after: `L188-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L188-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L188-L197) · [Before (L410-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L410-L477)

```diff
-         })),
-         cp = pp.indices,
-         Op = cp && Xp(cp, lp),
-         op = pp.position;
-       return new kp.f(ip, Op, op.count, ...Qp(op, ip))
-     }
-     const Bp = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
- 
-     function Np(pp, ip) {
-       const cp = ip.attributes.map((pp => {
-         let {
-           kind: ip,
-           data: cp,
-           size: Op,
-           byteOffset: op,
-           byteStride: Ip,
- ... (52 more removed lines; see GitHub link above)
+         }(WQ.shownCount)
+       } catch (TQ) {
+         return console.error("New player deal: counting a showing of its popup failed", TQ), !1
+       } finally {
+         ZQ = !1
+       }
+       return (0, hQ.O)(XQ, qQ.newPlayerDeal), qQ.counted && null !== qQ.newPlayerDeal && (OQ = {
+         accountId: wQ,
+         shownCount: qQ.newPlayerDeal.shownCount
+       }, "landingPage" === IQ.b.get("gameState") && mQ(QQ, qQ.newPlayerDeal, wQ)), !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L479-L482` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L199) · [Before (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L479-L482)

```diff
-     const gp = {
-       33071: 0,
-       33648: 2
-     };
+     let QW = null;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L484` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L201) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L484)

```diff
-     function Gp(pp) {
+     function WW(QQ, WQ, XQ, qQ, TQ) {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L486` → after: `L203-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L203-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L203-L277) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L486)

```diff
-       return null !== (ip = gp[null !== pp && void 0 !== pp ? pp : 10497]) && void 0 !== ip ? ip : 1
+       const {
+         gameState: sQ
+       } = (0, IQ.n)(["gameState"]), rQ = "landingPage" === sQ, {
+         pointing: jQ
+       } = (0, vQ.f)(), BQ = (0, wQ.useRef)(jQ);
+       BQ.current = jQ;
+       const yQ = (0, wQ.useRef)(QQ);
+       yQ.current = QQ;
+       const DQ = (0, wQ.useRef)(WQ);
+       DQ.current = WQ;
+       const pQ = (0, wQ.useRef)(XQ);
+       pQ.current = XQ;
+       const [GQ, dQ] = (0, wQ.useState)(null), HQ = (0, wQ.useRef)(0), aQ = (0, wQ.useRef)(0), lQ = (0, wQ.useRef)(!1), hQ = (0, wQ.useCallback)((QQ => {
+         "open" === function(QQ) {
+           const WQ = QQ ? (0, bQ.d)() : (0, bQ.peekVisitSessionId)(),
+             XQ = null !== WQ && WQ === QW ? "return" : "open";
+ ... (59 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L489-L490` → after: `L280-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L280-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L280-L366) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L489-L490)

```diff
-     function rp(pp) {
-       return 9728 === pp.minFilter || 9729 === pp.minFilter
+     function XW() {
+       const {
+         userContext: QQ
+       } = (0, lQ.c)(), WQ = (0, jQ.usePurchasesAllowed)(), [XQ, TQ] = (0, wQ.useState)(iQ.j);
+       (0, wQ.useEffect)((() => (TQ((0, iQ.j)()), (0, iQ.l)(TQ))), []);
+       const zQ = (0, hQ.b)(QQ);
+       ! function(QQ, WQ, XQ) {
+         const [TQ, zQ] = (0, wQ.useState)(0);
+         (0, wQ.useEffect)((() => {
+           if (!WQ || null === QQ) return;
+           if (null !== XQ) return void(0, hQ.J)(QQ, (0, iQ.e)());
+           if (null !== (0, hQ.h)(QQ)) return;
+           let wQ, TQ = !1;
+           return (0, yQ.getBillingClient)().getOfferings(qQ).then((WQ => {
+             let {
+               offering: XQ
+ ... (71 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L505-L507` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L389-L390) · [Before (L505-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L505-L507)

```diff
-         translation: cp,
-         rotation: Op,
-         scale: op
+         endsAt: WQ,
+         className: XQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L509-L510` → after: `L392-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L392-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L392-L399) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L509-L510)

```diff
-       const Ip = new Float32Array(16);
-       return (0, jp.d)(op, 0, Op, 0, cp, 0, Ip), ip && (0, jp.m)(Ip, ip, 0, Ip), Ip
+       return (0, IQ.jsxs)("span", {
+         className: TQ()("NewPlayerDealClock", XQ),
+         children: [(0, IQ.jsx)(PQ.d, {
+           name: "hourglass"
+         }), (0, IQ.jsx)(FQ.h, {
+           toTime: WQ
+         })]
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L689-L694` → after: `L403-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L403-L447) · [Before (L689-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L689-L694)

```diff
-       if (null === pp || void 0 === pp || !pp.min || !pp.max) return null;
-       const [ip, cp, Op] = pp.min, [op, Ip, Sp] = pp.max, {
-         BoundingInfo: xp,
-         Zy: Lp
-       } = (0, Vp.e)();
-       return new xp(new Lp(ip, cp, Op), new Lp(op, Ip, Sp))
+       let {
+         offered: WQ,
+         needsLogin: XQ,
+         busy: wQ,
+         highlight: qQ,
+         onBuy: FQ
+       } = QQ;
+       const {
+         t: PQ
+       } = (0, zQ.C)(), {
+         pack: jQ
+       } = WQ, BQ = (0, JQ.i)(WQ.package);
+       return (0, IQ.jsxs)("div", {
+         className: TQ()("NewPlayerDealPack", {
+           NewPlayerDealPackHighlight: qQ
+         }),
+ ... (29 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L698-L750` → after: `L451-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L451-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L451-L474) · [Before (L698-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L698-L750)

```diff
-       (0, ii.f)(pp) || (pp.geometry && pp.geometry.useBoundingInfoFromGeometry ? pp._updateBoundingInfo() : pp.refreshBoundingInfo(!0, !0))
-     }
-     class Ii {
-       constructor(pp, ip) {
-         this.pw = pp, this.decode = ip, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(pp) {
-         let ip = this.viewData.get(pp.index);
-         return ip || (ip = this.bufferData.then((() => pp.bytes)), this.viewData.set(pp.index, ip)), ip
-       }
-       viewBuffer(pp) {
-         let ip = this.viewBuffers.get(pp.index);
-         return ip || (ip = this.viewBytes(pp).then((pp => new((0, Vp.e)().my)(this.pw.gy(), pp, !1))), this.viewBuffers.set(pp.index, ip)), ip
-       }
-       vertexBuffer(pp, ip) {
-         const {
- ... (37 more removed lines; see GitHub link above)
+       let {
+         view: WQ,
+         needsLogin: XQ,
+         busy: qQ,
+         highlight: sQ,
+         onBuy: FQ
+       } = QQ;
+       const {
+         t: PQ
+       } = (0, zQ.C)();
+       return (0, IQ.jsxs)("div", {
+         className: TQ()("NewPlayerDealPacks", WQ.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [WQ.packs.map(((QQ, WQ) => (0, IQ.jsxs)(wQ.Fragment, {
+           children: [WQ > 0 && (0, IQ.jsx)("div", {
+             className: "NewPlayerDealDivider",
+             "aria-hidden": !0,
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L752-L782` → after: `L476-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L476-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L476-L484) · [Before (L752-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L752-L782)

```diff
-             const Ip = Np(ip, op);
-             if (Op) return Ip;
-             const Sp = Oi(ip.position),
-               xp = new((0, Vp.e)().MirroredGeometry)(cp.name, this.pw);
-             Sp && (xp._boundingInfo = Sp, xp.useBoundingInfoFromGeometry = !0), Ip.indexData && xp.setIndices(Ip.indexData);
-             for (const pp of Ip.vertexAttributes) xp.setVerticesBuffer(this.layoutVertexBuffer(pp.data, pp), Ip.vertexCount);
-             return xp.link(Ip), xp
-           })), this.dracoGeometry.set(Ip.bufferView.index, Sp)), Sp
-         }
-         const Sp = [],
-           xp = Jp(ip);
-         if (Op) return cp.isUnIndexed = !xp.indexData, cp.hasVertexAlpha = (0, ci.g)(ip), Promise.resolve(xp);
-         const Lp = new((0, Vp.e)().MirroredGeometry)(cp.name, this.pw),
-           {
-             indexData: Yp
-           } = xp;
- ... (15 more removed lines; see GitHub link above)
+           })]
+         }, QQ.pack.packageId))), (0, IQ.jsx)("div", {
+           className: "NewPlayerDealUnder",
+           children: (0, IQ.jsx)("span", {
+             className: "NewPlayerDealLimit",
+             children: PQ("newPlayerDeal:limit")
+           })
+         })]
+       })
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L784-L790` → after: `L486-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L486-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L486-L512) · [Before (L784-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L784-L790)

```diff
-     var Si, xi = cp(37542),
-       Li = cp(37313),
-       Yi = cp(38118),
-       Di = cp(37475),
-       Ai = cp(37519),
-       Pi = cp(2849),
-       Wi = cp(37505);
+   },
+   34568: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => HQ,
+       d: () => lQ
+     });
+     XQ(34562);
+     var wQ = XQ(3330),
+       qQ = XQ(1532),
+       TQ = XQ(2359),
+       zQ = XQ(3320),
+       sQ = XQ(3294),
+       FQ = XQ(3322),
+       PQ = XQ(3276),
+       gQ = XQ(1226),
+       JQ = XQ(1404),
+ ... (11 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L793-L796` → after: `L515-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L515-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L515-L518) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L793-L796)

```diff
-       pp.metadata = pp.metadata || {};
-       const cp = pp._internalMetadata = pp._internalMetadata || {},
-         Op = cp.sE = cp.sE || {};
-       (Op.pointers = Op.pointers || []).push(ip)
+       null !== QQ && (0, VQ.o)(QQ) || ((0, qQ.reportAnalyticsClick)({
+         id: "store.purchase_done",
+         value: `self:${WQ.pack.packageId}`
+       }), null !== QQ && (0, VQ.u)(QQ), HQ(WQ.pack.gems))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L799-L803` → after: `L521-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L521-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L521-L538) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L799-L803)

```diff
-     function Ui(pp, ip) {
-       if (ip && Object.keys(ip).length > 0) {
-         const cp = pp.metadata = pp.metadata || {};
-         (cp.sE = cp.sE || {}).extras = ip
-       }
+     function dQ(QQ, WQ, XQ) {
+       const qQ = (0, VQ.b)(WQ);
+       switch (QQ.kind) {
+         case "completed":
+           vQ(qQ, XQ);
+           break;
+         case "pending":
+           TQ = QQ.intentId, zQ = () => {
+             yQ.e.refresh(), vQ(qQ, XQ)
+           }, bQ || (bQ = !0, UQ.listen()), UQ.follow(TQ, zQ);
+           break;
+         case "unknownPackage":
+           (0, VQ.O)(WQ, null);
+           break;
+         case "failed":
+           QQ.errorKey === wQ.e.newPlayerDealUnavailable && (0, VQ.O)(WQ, null)
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L806-L1014` → after: `L541-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L541-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L541-L549) · [Before (L806-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L806-L1014)

```diff
-     function wi(pp, ip) {
-       ip.position = pp.translation ? Li.Zy.FromArray(pp.translation) : Li.Zy.Zero(), ip.rotationQuaternion = pp.rotation ? Li.Quaternion.FromArray(pp.rotation) : Li.Quaternion.Identity(), ip.ei = pp.scale ? Li.Zy.FromArray(pp.scale) : Li.Zy.One()
-     }
-     class vi {
-       constructor(pp, ip) {
-         if (this.pw = pp, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ip) {
-           const ip = pp.gy(),
-             cp = pp.Kl.add((() => {
-               this.dispose()
-             })),
-             Op = ip.Fy.add((() => {
-               for (const pp of [...this.geometries, ...this.meshes, ...this.textures]) pp._rebuild()
-             }));
-           this.release = () => {
-             pp.Kl.remove(cp), ip.Fy.remove(Op)
-           }
- ... (193 more removed lines; see GitHub link above)
+     function HQ(QQ) {
+       JQ.NotificationProvider.showCustomPopup({
+         body: WQ => (0, GQ.jsx)(aQ, {
+           gems: QQ,
+           close: WQ
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L1017-L1039` → after: `L552-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L552-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L552-L576) · [Before (L1017-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L1017-L1039)

```diff
-     function Hi() {
-       xi.e.dracoDecodes = Up.decodes, xi.e.dracoWorkersStarted = Up.workersStarted, xi.e.dracoMostWorkers = Up.mostWorkers
-     }
-     async function di(pp, ip, cp, op, Ip) {
-       try {
-         return await async function(pp, ip, cp, op, Ip, Sp) {
-           var xp;
-           let Lp;
-           const Yp = null === (xp = (0, Pi.g)()) || void 0 === xp ? void 0 : xp.WU,
-             Dp = null !== Yp && void 0 !== Yp && Yp.yU && ip === Yp.Gl() ? Yp : null,
-             Ap = Ip && !Dp;
-           return await Kp(pp, ip, cp, op, Op.e, (pp => (Lp = new vi(ip, Ap), new ti(pp, ip, Lp, Ap, new Ii(ip, op), Sp, Dp).load())), !Ip), Lp
-         }(pp, ip, cp, ep, op, Ip)
-       } finally {
-         Hi()
-       }
- ... (7 more removed lines; see GitHub link above)
+     function aQ(QQ) {
+       let {
+         gems: WQ,
+         close: XQ
+       } = QQ;
+       const {
+         t: wQ
+       } = (0, gQ.C)();
+       return (0, GQ.jsxs)("div", {
+         className: "NewPlayerDealAdded",
+         children: [(0, GQ.jsxs)("div", {
+           className: "NewPlayerDealAddedHead",
+           children: [(0, GQ.jsx)(jQ.d, {
+             name: "circle-check"
+           }), (0, GQ.jsx)(BQ.d, {
+             amount: WQ
+ ... (9 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L1054-L1077` → after: `L580-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L580-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L580-L605) · [Before (L1054-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L1054-L1077)

```diff
-       return (0, Op.isDiscordClient)() ? `https://${op.c.discordDomain}/${pp.href}` : pp.href
-     }
-     const Sp = {
-       scriptUrl: Ip(new cp.U(cp(41749))),
-       wasmBinaryUrl: Ip(new cp.U(cp(41755)))
-     }
-   },
-   36455: pp => {
-     pp.exports = function(pp, ip, cp, Op) {
-       var op = self || window;
-       try {
-         try {
-           var Ip;
-           try {
-             Ip = new op.Blob([pp])
-           } catch (Yp) {
- ... (8 more removed lines; see GitHub link above)
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.d;
+       const {
+         userContext: XQ
+       } = (0, rQ.c)(), {
+         purchaseUnderWay: wQ,
+         notice: qQ,
+         buy: FQ
+       } = (0, sQ.b)(WQ), PQ = (0, DQ.j)(), gQ = XQ.mayBuy() || (0, TQ.guestsMayBuy)(), JQ = null === PQ ? !gQ : PQ.guest && !XQ.isLoggedIn();
+       return {
+         purchaseUnderWay: wQ,
+         notice: qQ,
+         needsLogin: JQ,
+         buyPack: function(wQ, qQ) {
+           (0, VQ.F)("new_player_deal.buy", (0, pQ.e)(wQ.arm, QQ, qQ.pack.packageId)), null === PQ ? FQ(function(QQ) {
+             return {
+               sku: QQ.pack.packageId,
+ ... (10 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L1085-L1090` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/209.js#L610) · [Before (L1085-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/209.js#L1085-L1090)

```diff
-   41755: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
-   },
-   41749: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
-   }
+   34562: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L6)

```diff
-   41764: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => Ip
+   34587: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ,
+       d: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L8-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L8-L9)

```diff
-     var Op = cp(36455),
-       op = cp.n(Op);
+     var wQ = XQ(3523);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L12` → after: `L12-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L12-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L12-L27) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L12)

```diff
-       return op()('/*! For license information please see sn3sfj.procGen.worker.b125915b.worker.js.LICENSE.txt */\n(()=>{var pp={79:pp=>{const ip="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,cp=()=>ip.now(),Op=pp=>pp===1/0||(pp= … [truncated]
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const WQ = new BroadcastChannel(wQ.k);
+         WQ.postMessage({
+           stored: QQ
+         }), WQ.close()
+       } catch {
+         return null
+       }
+       return QQ
+     }
+ 
+     function TQ(QQ) {
+       const WQ = "object" === typeof QQ && null !== QQ ? QQ.stored : null;
+       return "string" === typeof WQ ? WQ : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L15-L18` → after: `L30-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L30-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L30-L287) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L15-L18)

```diff
-   36455: pp => {
-     pp.exports = function(pp, ip, cp, Op) {
-       var op = self || window;
-       try {
+   34583: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ,
+       e: () => qQ,
+       f: () => TQ
+     });
+     var wQ = XQ(3523);
+     async function qQ(QQ, WQ, XQ) {
+       let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
+       const TQ = zQ(await QQ.getItem(wQ.f, WQ));
+       if (null === TQ || qQ()) return null;
+       const sQ = await QQ.getItem(wQ.g, WQ);
+       return qQ() ? null : (await async function(QQ) {
+         await Promise.all([QQ.removeItem(wQ.f), QQ.removeItem(wQ.g)])
+       }(QQ).catch(XQ), {
+         pack: TQ,
+ ... (242 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L20` → after: `L289-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L289-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L289-L389) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L20)

```diff
-           var Ip;
+           XQ = await this.host.store.getItem(zQ.c, !0)
+         } catch (qQ) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", qQ)
+         }
+         if (this.zj || this.ownChanges !== WQ) return;
+         const wQ = VQ(XQ);
+         (0, rQ.b)(wQ, this.playerPack) || (this.ownChanges++, this.setOwn(wQ), this.onGamePack || this.change({
+           pack: wQ,
+           gameSource: null
+         }, !1))
+       }
+       joinedWithout() {
+         this.picks++
+       }
+       dispose() {
+         this.zj = !0, this.listeners.clear()
+ ... (85 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L22` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L391) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L22)

```diff
-             Ip = new op.Blob([pp])
+             QQ(this.state)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L24` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/210.js#L393) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/210.js#L24)

```diff
-             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
+             this.host.warn("a texture pack listener threw", WQ)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/211.js#L4)

```diff
-   41785: (pp, ip, cp) => {
+   34589: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/211.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/211.js#L6)

```diff
-       default: () => Ip
+       packDisplayName: () => jQ,
+       packModelMessage: () => BQ,
+       packModelSummary: () => VQ,
+       refusedPackModels: () => yQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L8-L9` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/211.js#L11-L18) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/211.js#L8-L9)

```diff
-     var Op = cp(36455),
-       op = cp.n(Op);
+     var wQ = XQ(34591),
+       qQ = XQ(34596);
+     const TQ = "DRACO",
+       zQ = 0,
+       sQ = 1,
+       FQ = 0,
+       PQ = 1,
+       gQ = 32768;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L11-L17` → after: `L20-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/211.js#L20-L39) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/211.js#L11-L17)

```diff
-     function Ip() {
-       return op()('(()=>{var pp={13:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/bloxd_wasm_bg.f1177b9ed1fe02dfded8.wasm"},21:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/bloxd_wasm_textures_bg.d7d41d4f0bb8769a2dc8.wasm"},6:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/zstdDecodeWorker. … [truncated]
-     }
-   },
-   36455: pp => {
-     pp.exports = function(pp, ip, cp, Op) {
-       var op = self || window;
+     function JQ(QQ) {
+       const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
+       let XQ = 0;
+       const wQ = () => {
+           if (XQ >= QQ.byteLength) throw new RangeError("past the stream");
+           return QQ[XQ++]
+         },
+         qQ = () => {
+           if (XQ + 4 > QQ.byteLength) throw new RangeError("past the stream");
+           const wQ = WQ.getUint32(XQ, !0);
+           return XQ += 4, wQ
+         },
+         JQ = () => {
+           let QQ = 0;
+           for (let WQ = 0; WQ < 35; WQ += 7) {
+             const XQ = wQ();
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L19-L24` → after: `L41-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L41-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/211.js#L41-L79) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/211.js#L19-L24)

```diff
-         try {
-           var Ip;
-           try {
-             Ip = new op.Blob([pp])
-           } catch (Yp) {
-             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
+         for (let QQ = 0; QQ < TQ.length; QQ++)
+           if (wQ() !== TQ.charCodeAt(QQ)) return null;
+         const WQ = wQ(),
+           rQ = wQ(),
+           IQ = wQ(),
+           jQ = wQ(),
+           BQ = wQ() | wQ() << 8;
+         if (2 !== WQ) return null;
+         0 !== (BQ & gQ) && function(QQ, WQ, XQ) {
+           const wQ = () => {
+               WQ(XQ())
+             },
+             qQ = () => {
+               let XQ = 1,
+                 qQ = !0;
+               for (; XQ > 0;) {
+ ... (23 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L33-L35` → after: `L82-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L82-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/211.js#L82-L90) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/211.js#L33-L35)

```diff
-       } catch (Yp) {
-         if (!Op) throw Error("Inline worker is not supported");
-         return new op[ip](Op, cp)
+         if (jQ !== PQ) return null;
+         wQ(), rQ < 2 && JQ();
+         const VQ = JQ();
+         return {
+           faces: JQ(),
+           vertices: VQ
+         }
+       } catch {
+         return null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L2)

```diff
- export const ids = [212, 213];
+ export const ids = [212];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4-L116` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L4) · [Before (L4-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L116)

```diff
-   36469: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       CAPPED_COUNTS_VISIT_CAP: () => Ip,
-       reportCappedWasmFailure: () => Lp,
-       reportUncappedWasmFailure: () => xp,
-       reportWasmCrash: () => op,
-       reportWasmFailure: () => Sp
-     });
-     var Op = cp(3025);
- 
-     function op(pp) {
-       (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
-     }
-     const Ip = Op.b - 4;
- 
-     function Sp(pp, ip, cp) {
- ... (97 more removed lines; see GitHub link above)
+   34591: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L123-L125` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L10-L67) · [Before (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L123-L125)

```diff
-     var Op = cp(36472),
-       op = cp(10);
-     const Ip = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+     var wQ = XQ(34596);
+     const qQ = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       TQ = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L128-L130` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L70) · [Before (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L128-L130)

```diff
-       if (pp instanceof WebAssembly.RuntimeError) return !0;
-       const ip = pp instanceof Error ? pp.stack : void 0;
-       return "string" === typeof ip && Ip.test(ip)
+       return QQ.toLocaleString("en-US")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L134-L890` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L74) · [Before (L134-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L134-L890)

```diff
-       var op;
-       const Sp = pp instanceof Error ? pp.name : "thrown",
-         xp = (pp instanceof Error && null !== (op = pp.stack) && void 0 !== op ? op : "").split("\n").filter((pp => Ip.test(pp))).slice(0, 8).map((pp => pp.trim())),
-         Lp = null === ip ? "wasm memory unknown" : `wasm memory ${Math.round(ip/2**20)} MB`,
-         Yp = null === cp.panic ? "" : `, panic: ${(0,Op.j)(cp.panic)}`,
-         Dp = `${Sp}: ${pp instanceof Error?pp.message:String(pp)}`;
-       return `${(0,Op.q)(cp.kind,cp.refusedBytes)} ${Dp} (${Lp})${Yp}${xp.length>0?` | ${xp.join(" < ")}`:""}`
-     }
-     const Lp = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
- 
-     function Yp(pp) {
-       var ip;
-       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(pp instanceof Error) || !Lp.test(pp.message)) return {};
-       if (!("detached" in cp)) return {
-         arrayBufferDetached: "absent"
- ... (741 more removed lines; see GitHub link above)
+       return QQ > WQ ? `has ${yQ(QQ)} ${XQ} (the limit is ${yQ(WQ)})` : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L894-L910` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L78) · [Before (L894-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L894-L910)

```diff
-       let cp, Op;
-       try {
-         const op = Yi(pp, ei.OTfo),
-           Ip = ui,
-           Sp = Wi(ip, ei.OTfo, ei.eB4D),
-           xp = ui,
-           Lp = ei.wDxd(op, Ip, Sp, xp);
-         return cp = Lp[0], Op = Lp[1], Kp(Lp[0], Lp[1])
-       } finally {
-         ei.ie3R(cp, Op, 1)
-       }
-     }
- 
-     function yp() {
-       const pp = ei.aKO2();
-       var ip = Gp(pp[0], pp[1]).slice();
- ... (1 more removed lines; see GitHub link above)
+       return Number.isInteger(QQ) && QQ >= 0 && QQ < (null !== WQ && void 0 !== WQ ? WQ : 0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L914` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L82) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L914)

```diff
-       return 0 !== ei.tywj(pp)
+       return Number.isInteger(QQ) && QQ >= 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L918-L921` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L86) · [Before (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L918-L921)

```diff
-       const cp = Wi(pp, ei.OTfo, ei.eB4D),
-         Op = ui,
-         op = ei.yNNu(cp, Op, ip);
-       if (op[1]) throw yi(op[0])
+       return void 0 !== QQ && (!Array.isArray(QQ) || QQ.length > WQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L924-L929` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L89-L90) · [Before (L924-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L924-L929)

```diff
-     function vp() {
-       ei.QQdP()
-     }
- 
-     function tp() {
-       return ei.YS8X() >>> 0
+     function UQ(QQ, WQ) {
+       return "object" === typeof QQ && null !== QQ && Object.keys(QQ).length > WQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L933` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L94-L95) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L933)

```diff
-       return 0 !== ei.ICS5(pp)
+       var WQ;
+       return `${QQ.normalized?"normalized ":""}${null!==(WQ=wQ.d[QQ.componentType])&&void 0!==WQ?WQ:QQ.componentType} ${QQ.type}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L937` → after: `L99-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L99-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L99-L103) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L937)

```diff
-       return 0 !== ei.og2A(pp)
+       const WQ = WQ => {
+         var XQ;
+         return null !== (XQ = QQ[WQ]) && void 0 !== XQ ? XQ : -1
+       };
+       return 255 === WQ(0) && 216 === WQ(1) ? "JPEG" : 82 === WQ(0) && 73 === WQ(1) && 87 === WQ(8) && 69 === WQ(9) ? "WebP" : 171 === WQ(0) && 75 === WQ(1) && 84 === WQ(2) && 88 === WQ(3) ? "KTX2" : "non-PNG"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L941-L989` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L107) · [Before (L941-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L941-L989)

```diff
-       ei.HU7F(pp)
-     }
- 
-     function jp() {
-       return ei.QMSK() >>> 0
-     }
- 
-     function kp() {
-       return ei.FuNC() >>> 0
-     }
- 
-     function mp() {
-       return 0 !== ei.JY57()
-     }
- 
-     function Rp() {
- ... (33 more removed lines; see GitHub link above)
+       return QQ.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((WQ, XQ) => QQ[XQ] === WQ)) && 73 === QQ[12] && 72 === QQ[13] && 68 === QQ[14] && 82 === QQ[15]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L993-L1020` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L111) · [Before (L993-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L993-L1020)

```diff
-       ei.fptS(np(pp))
-     }
- 
-     function Qp() {
-       return {
-         __proto__: null,
-         WViy: {
-           __proto__: null,
-           Ctp7: function(pp, ip) {
-             return np(Error(Kp(pp, ip)))
-           },
-           VmwI: function(pp, ip) {
-             throw new Error(Kp(pp, ip))
-           },
-           HFlW: function(pp) {
-             Ii(pp).call()
- ... (12 more removed lines; see GitHub link above)
+       return /^[aeiou]/i.test(QQ) ? `an ${QQ}` : `a ${QQ}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1057-L1059` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L115-L116) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1057-L1059)

```diff
-       xi === Si.length && Si.push(Si.length + 1);
-       const ip = xi;
-       return xi = Si[ip], Si[ip] = pp, ip
+       const WQ = QQ.byteStride;
+       return void 0 === WQ || Number.isInteger(WQ) && WQ >= 4 && WQ <= 252 && WQ % 4 === 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1062-L1063` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L119-L124) · [Before (L1062-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1062-L1063)

```diff
-     function Fp(pp, ip) {
-       if (!(pp instanceof ip)) throw new Error(`expected instance of ${ip.name}`)
+     function lQ(QQ, WQ, XQ) {
+       var wQ, qQ;
+       const TQ = null === (wQ = QQ.bufferViews) || void 0 === wQ ? void 0 : wQ[XQ];
+       if (!TQ || !WQ || 0 !== TQ.buffer) return null;
+       const zQ = null !== (qQ = TQ.byteOffset) && void 0 !== qQ ? qQ : 0;
+       return !pQ(zQ) || !pQ(TQ.byteLength) || zQ + TQ.byteLength > WQ.byteLength ? null : WQ.subarray(zQ, zQ + TQ.byteLength)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1067` → after: `L128-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L128-L139) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1067)

```diff
-       return pp >>>= 0, zp().subarray(pp / 8, pp / 8 + ip)
+       var XQ, qQ, TQ;
+       const zQ = wQ.k[WQ.type],
+         sQ = wQ.b[WQ.componentType];
+       if (!zQ || !sQ || !Number.isInteger(WQ.count) || WQ.count < 0) return !1;
+       if (void 0 === WQ.bufferView) return !0;
+       const FQ = null === (XQ = QQ.bufferViews) || void 0 === XQ ? void 0 : XQ[WQ.bufferView],
+         PQ = null !== (qQ = WQ.byteOffset) && void 0 !== qQ ? qQ : 0;
+       if (!FQ || !pQ(PQ) || PQ % sQ !== 0) return !1;
+       const gQ = zQ * sQ,
+         JQ = null !== (TQ = FQ.byteStride) && void 0 !== TQ ? TQ : gQ;
+       if (JQ < gQ) return !1;
+       return (0 === WQ.count ? 0 : PQ + JQ * (WQ.count - 1) + gQ) <= FQ.byteLength
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1070-L1071` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L142-L143) · [Before (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1070-L1071)

```diff
-     function Gp(pp, ip) {
-       return pp >>>= 0, ci().subarray(pp / 4, pp / 4 + ip)
+     function iQ(QQ) {
+       return QQ > qQ.fileBytes ? `is ${(QQ/zQ).toFixed(1)} MiB (the limit is ${qQ.fileBytes/zQ} MiB)` : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1075-L1080` → after: `L147-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L147-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L147-L380) · [Before (L1075-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1075-L1080)

```diff
-       return pp >>>= 0, oi().subarray(pp / 1, pp / 1 + ip)
-     }
-     let Zp = null;
- 
-     function zp() {
-       return null !== Zp && 0 !== Zp.byteLength || (Zp = new Float64Array(ei.memory.buffer)), Zp
+       try {
+         return function(QQ, WQ) {
+           var XQ, zQ, JQ, yQ, pQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ;
+           const oQ = Array.isArray(QQ.extensionsUsed) && QQ.extensionsUsed.includes("KHR_draco_mesh_compression");
+           if (function(QQ, WQ) {
+               var XQ, wQ;
+               const {
+                 items: qQ,
+                 perFile: zQ,
+                 surfaces: sQ,
+                 few: FQ,
+                 bounds: PQ,
+                 attributeMembers: gQ
+               } = TQ;
+               if (GQ(QQ.extensionsRequired, FQ) || GQ(QQ.animations, 1 / 0) || GQ(QQ.skins, 1 / 0)) return !0;
+               if (null !== (XQ = QQ.animations) && void 0 !== XQ && XQ.length || null !== (wQ = QQ.skins) && void 0 !== wQ && wQ.length) return !1;
+ ... (218 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1084-L1091` → after: `L383-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L383-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L383-L395) · [Before (L1084-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1084-L1091)

```diff
-     function Kp(pp, ip) {
-       return function(pp, ip) {
-         vi += ip, vi >= wi && (Ui = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), Ui.decode(), vi = ip);
-         return Ui.decode(oi().subarray(pp, pp + ip))
-       }(pp >>> 0, ip)
+     function AQ(QQ) {
+       const WQ = iQ(QQ.byteLength);
+       if (WQ) return WQ;
+       try {
+         const {
+           json: WQ,
+           bin: XQ
+         } = (0, wQ.u)(QQ);
+         return cQ(WQ, XQ)
+       } catch (XQ) {
+         if (XQ instanceof wQ.i) return XQ.reason;
+         throw XQ
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1093-L1097` → after: `L397-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L397-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L397-L415) · [Before (L1093-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1093-L1097)

```diff
-     let Vp = null;
-     let ii = null;
- 
-     function ci() {
-       return null !== ii && 0 !== ii.byteLength || (ii = new Uint32Array(ei.memory.buffer)), ii
+   },
+   34596: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => IQ,
+       d: () => rQ,
+       f: () => BQ,
+       h: () => TQ,
+       i: () => qQ,
+       k: () => jQ,
+       l: () => gQ,
+       o: () => JQ,
+       s: () => zQ,
+       u: () => PQ
+     });
+     var wQ = XQ(34604);
+     class qQ extends Error {
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1099-L1102` → after: `L417-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L417-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L417-L420) · [Before (L1099-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1099-L1102)

```diff
-     let Oi = null;
- 
-     function oi() {
-       return null !== Oi && 0 !== Oi.byteLength || (Oi = new Uint8Array(ei.memory.buffer)), Oi
+     class TQ extends Error {
+       constructor(QQ) {
+         super(QQ), this.name = "GlbError"
+       }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1106` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L424) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1106)

```diff
-       return Si[pp]
+       return Reflect.get(QQ, "scene")
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1108-L1110` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L426-L427) · [Before (L1108-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1108-L1110)

```diff
-     let Si = new Array(1024).fill(void 0);
-     Si.push(void 0, null, !0, !1);
-     let xi = Si.length;
+     const sQ = 5130562,
+       FQ = "is not a binary glTF 2.0 file";
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1113-L1154` → after: `L430-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L430-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L430-L453) · [Before (L1113-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1113-L1154)

```diff
-       return void 0 === pp || null === pp
-     }
- 
-     function Yi(pp, ip) {
-       const cp = ip(2 * pp.length, 2) >>> 0;
-       return (null !== Vp && 0 !== Vp.byteLength || (Vp = new Uint16Array(ei.memory.buffer)), Vp).set(pp, cp / 2), ui = pp.length, cp
-     }
- 
-     function Di(pp, ip) {
-       const cp = ip(4 * pp.length, 4) >>> 0;
-       return ci().set(pp, cp / 4), ui = pp.length, cp
-     }
- 
-     function Ai(pp, ip) {
-       const cp = ip(1 * pp.length, 1) >>> 0;
-       return oi().set(pp, cp / 1), ui = pp.length, cp
- ... (26 more removed lines; see GitHub link above)
+       var WQ;
+       const XQ = QQ instanceof Uint8Array ? QQ : new Uint8Array(QQ),
+         TQ = (0, wQ.f)(XQ);
+       if (null === TQ) throw new qQ(FQ);
+       const zQ = TQ.json,
+         {
+           jsonEnd: PQ,
+           length: gQ
+         } = TQ,
+         JQ = new DataView(XQ.buffer, XQ.byteOffset, XQ.byteLength);
+       let rQ = -1,
+         IQ = 0;
+       for (let yQ = PQ; yQ < gQ;) {
+         if (yQ + 8 > gQ) throw new qQ(FQ);
+         const QQ = JQ.getUint32(yQ, !0),
+           WQ = JQ.getUint32(yQ + 4, !0);
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1156-L1177` → after: `L455-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L455-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L455-L458) · [Before (L1156-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1156-L1177)

```diff
-       return ui = Sp, op
-     }
- 
-     function yi(pp) {
-       const ip = Ii(pp);
-       return function(pp) {
-         pp < 1028 || (Si[pp] = xi, xi = pp)
-       }(pp), ip
-     }
-     let Ui = new TextDecoder("utf-8", {
-       ignoreBOM: !0,
-       fatal: !0
-     });
-     Ui.decode();
-     const wi = 2146435072;
-     let vi = 0;
- ... (6 more removed lines; see GitHub link above)
+       return {
+         json: zQ,
+         bin: jQ,
+         fileBytes: XQ.byteLength
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1187-L1193` → after: `L463-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L463-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L463-L469) · [Before (L1187-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1187-L1193)

```diff
-       if (void 0 !== ei) return ei;
-       void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
-         module: pp
-       } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const ip = Qp();
-       pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
-       return ji(new WebAssembly.Instance(pp, ip), pp)
+       const WQ = QQ.slice(QQ.indexOf(",") + 1),
+         XQ = Uint8Array.fromBase64;
+       if (XQ) return XQ(WQ).buffer;
+       const wQ = atob(WQ),
+         qQ = new Uint8Array(wQ.length);
+       for (let TQ = 0; TQ < wQ.length; TQ++) qQ[TQ] = wQ.charCodeAt(TQ);
+       return qQ.buffer
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1196-L1232` → after: `L472-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L472-L475) · [Before (L1196-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1196-L1232)

```diff
-       if (void 0 !== ei) return ei;
-       void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
-         module_or_path: pp
-       } = pp) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const ip = Qp();
-       ("string" === typeof pp || "function" === typeof Request && pp instanceof Request || "function" === typeof URL && pp instanceof URL) && (pp = fetch(pp));
-       const {
-         instance: cp,
-         module: Op
-       } = await async function(pp, ip) {
-         if ("function" === typeof Response && pp instanceof Response) {
-           if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
-           if ("function" === typeof WebAssembly.instantiateStreaming) try {
-             return await WebAssembly.instantiateStreaming(pp, ip)
-           } catch (cp) {
-             if (! function(pp) {
- ... (21 more removed lines; see GitHub link above)
+       if (QQ.startsWith("data:")) return gQ(QQ);
+       const WQ = await fetch(QQ);
+       if (!WQ.ok) throw new TQ(`fetching ${QQ} failed: ${WQ.status} ${WQ.statusText}`);
+       return await WQ.arrayBuffer()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1245-L1260` → after: `L478-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L478-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L478-L513) · [Before (L1245-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1245-L1260)

```diff
-       name: op.d,
-       url: () => new cp.U(cp(36521)),
-       init: Op.default,
-       bindings: Op
-     };
- 
-     function xp() {
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp,
-         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp,
-         cp = arguments.length > 2 ? arguments[2] : void 0;
-       return (0, Ip.k)(pp, ip, cp)
-     }
- 
-     function Lp(pp) {
-       return (0, op.R)((() => pp), Op, Sp)
-     }
+         5120: "i8",
+         5121: "u8",
+         5122: "i16",
+         5123: "u16",
+         5125: "u32",
+         5126: "f32"
+       },
+       IQ = {
+         5120: 1,
+         5121: 1,
+         5122: 2,
+         5123: 2,
+         5125: 4,
+         5126: 4
+       },
+       jQ = {
+ ... (20 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1262-L1272` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L515) · [Before (L1262-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1262-L1272)

```diff
-   36495: (pp, ip, cp) => {
-     function Op(pp, ip) {
-       return new Error(`${pp}: ${ip instanceof Error?`${ip.name}: ${ip.message}`:String(ip)}`, {
-         cause: ip
-       })
-     }
-     cp.d(ip, {
-       c: () => Op
-     })
-   },
-   36486: (pp, ip, cp) => {
+   34604: (QQ, WQ, XQ) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1274` → after: `L517-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L517-L518) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1274)

```diff
-       d: () => Sp,
+       b: () => qQ,
+       f: () => TQ,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1277-L1279` → after: `L521-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L521-L522) · [Before (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1277-L1279)

```diff
-     var Op = cp(2970),
-       op = cp(6762),
-       Ip = cp(36495);
+     const wQ = 1179937895,
+       qQ = 1313821514;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1281-L1324` → after: `L524-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L524-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L524-L534) · [Before (L1281-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1281-L1324)

```diff
-     function Sp() {
-       return new URL(new cp.U(cp(36503)).href, globalThis.location?.href).href
-     }
-     let xp = null;
- 
-     function Lp() {
-       return xp ??= (async () => (0, Op.C)(new URL(Sp()), (0, op.e)("bloxd_wasm_textures")))().catch((pp => {
-         throw (0, Ip.c)((0, Op.J)(pp), pp)
-       })), xp
-     }
-   },
-   36472: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op,
-       h: () => Ip,
-       j: () => Lp,
- ... (28 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
+       if (QQ.byteLength < 20 || WQ.getUint32(0, !0) !== wQ || 2 !== WQ.getUint32(4, !0)) return null;
+       const XQ = Math.min(WQ.getUint32(8, !0), QQ.byteLength),
+         TQ = WQ.getUint32(12, !0);
+       if (WQ.getUint32(16, !0) !== qQ || 20 + TQ > XQ) return null;
+       let zQ;
+       try {
+         zQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, 20 + TQ)))
+       } catch {
+         return null
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L1330` → after: `L544-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L544-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/212.js#L544-L554) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/212.js#L1330)

```diff
-       return pp.replace(/\s*\n\s*/g, " / ").slice(0, xp)
+       var WQ;
+       const XQ = null === (WQ = TQ(QQ)) || void 0 === WQ ? void 0 : WQ.json;
+       if (void 0 === XQ || !Array.isArray(XQ.extensionsUsed) || !XQ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
+       const wQ = XQ.meshes;
+       return Array.isArray(wQ) && wQ.some((QQ => {
+         const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.primitives;
+         return Array.isArray(WQ) && WQ.some((QQ => {
+           const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.extensions;
+           return null != (null === WQ || void 0 === WQ ? void 0 : WQ.KHR_draco_mesh_compression)
+         }))
+       }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/213.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/213.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/213.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/213.js#L4)

```diff
-   36469: (pp, ip, cp) => {
+   34609: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L6-L10` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/213.js#L6-L15) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/213.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => Ip,
-       reportCappedWasmFailure: () => Lp,
-       reportUncappedWasmFailure: () => xp,
-       reportWasmCrash: () => op,
-       reportWasmFailure: () => Sp
+       animatedBlockTextures: () => FQ,
+       armourAtlasUrl: () => zQ,
+       averageColors: () => PQ,
+       blockAtlasUrls: () => TQ,
+       blockAtlasWidth: () => wQ,
+       buildHash: () => JQ,
+       builtTextureIndexFingerprint: () => gQ,
+       imagesPerAtlas: () => qQ,
+       outputHash: () => rQ,
+       rotatedBlockTextures: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L12-L29` → after: `L17-L10902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L17-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/213.js#L17-L10902) · [Before (L12-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/213.js#L12-L29)

```diff
-     var Op = cp(3025);
- 
-     function op(pp) {
-       (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
-     }
-     const Ip = Op.b - 4;
- 
-     function Sp(pp, ip, cp) {
-       (0, Op.reportClientError)(pp, ip, cp, !1)
-     }
- 
-     function xp(pp, ip, cp) {
-       (0, Op.reportClientError)(pp, ip, cp, !1, 1 / 0)
-     }
- 
-     function Lp(pp, ip, cp) {
- ... (2 more removed lines; see GitHub link above)
+     const wQ = 8,
+       qQ = [256, 256, 256, 256, 256, 256, 114],
+       TQ = [XQ(34616), XQ(34624), XQ(34630), XQ(34638), XQ(34645), XQ(34648), XQ(34656)],
+       zQ = XQ(34665),
+       sQ = {
+         "alloy_kiln_top[rot[1": XQ(34668),
+         "alloy_kiln_top[rot[2": XQ(34671),
+         "alloy_kiln_top[rot[3": XQ(34673),
+         "alloy_kiln_top[rot[4": XQ(34682),
+         "auto_bench_top[rot[1": XQ(34689),
+         "auto_bench_top[rot[2": XQ(34693),
+         "auto_bench_top[rot[3": XQ(34695),
+         "auto_bench_top[rot[4": XQ(34701),
+         "belt_tunnel_exit_top[rot[1": XQ(34703),
+         "belt_tunnel_exit_top[rot[2": XQ(34705),
+         "belt_tunnel_exit_top[rot[3": XQ(34712),
+ ... (10870 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L21` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L6) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L21)

```diff
-   41014: (pp, ip, cp) => {
-     function Op(pp, ip, cp) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(pp, ip).getContext("2d", cp);
-       const Op = document.createElement("canvas");
-       return Op.width = pp, Op.height = ip, Op.getContext("2d", cp)
-     }
- 
-     function op(pp, ip) {
-       return pp.getContext("2d", ip)
-     }
-     cp.d(ip, {
-       c: () => op,
-       e: () => Op
-     })
-   },
-   40978: (pp, ip, cp) => {
- ... (2 more removed lines; see GitHub link above)
+   36536: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       WasmTextureWorker: () => DQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L23-L26` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L8-L11) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L23-L26)

```diff
-     const Op = 1 << 20,
-       op = 1 << 21,
-       Ip = 1024,
-       Sp = 2048;
+     var wQ = XQ(651),
+       qQ = XQ(3465),
+       TQ = XQ(36540),
+       zQ = XQ.n(TQ);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L28-L32` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L13-L14) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L28-L32)

```diff
-     function xp(pp, ip, cp) {
-       const xp = pp + Op,
-         Lp = ip + Ip,
-         Yp = cp + Op;
-       return xp < 0 || xp >= op || Yp < 0 || Yp >= op || Lp < 0 || Lp >= Sp ? -1 : (xp * op + Yp) * Sp + Lp
+     function sQ() {
+       return zQ()('(()=>{var QQ={d:(WQ,XQ)=>{for(var wQ in XQ)QQ.o(XQ,wQ)&&!QQ.o(WQ,wQ)&&Object.defineProperty(WQ,wQ,{enumerable:!0,get:XQ[wQ]})},o:(QQ,WQ)=>Object.prototype.hasOwnProperty.call(QQ,WQ),r:QQ=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L34-L51` → after: `L16-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L16-L20) · [Before (L34-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L34-L51)

```diff
-   },
-   40976: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op,
-       f: () => Sp,
-       j: () => op,
-       k: () => Ip,
-       l: () => Dp,
-       n: () => Yp,
-       r: () => Lp,
-       v: () => xp
-     });
-     cp(3572);
-     cp(40978);
- 
-     function Op(pp) {}
- ... (2 more removed lines; see GitHub link above)
+     var FQ = XQ(36543),
+       PQ = XQ(3497),
+       gQ = XQ(3514),
+       JQ = XQ(3507),
+       rQ = XQ(3473);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L53-L180` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L22-L23) · [Before (L53-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L53-L180)

```diff
-     function Ip(pp) {}
- 
-     function Sp(pp) {}
- 
-     function xp(pp) {}
- 
-     function Lp(pp, ip, cp) {}
- 
-     function Yp(pp) {}
- 
-     function Dp(pp) {}
-   },
-   40967: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Hp,
-       e: () => yp,
- ... (112 more removed lines; see GitHub link above)
+     function IQ(QQ) {
+       return "" === QQ ? [] : QQ.split("\0")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L185-L188` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L27-L28) · [Before (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L185-L188)

```diff
-       if (0 === pp) return xp;
-       const ip = new Ip.c(Op.Yb);
-       for (let cp = 0; cp < Op.Yb; cp++) ip[cp] = pp >>> 8 * cp & 255;
-       return ip
+       if ("" !== QQ)
+         for (const WQ of QQ.split("\n")) console.error(WQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L238-L248` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L32-L41) · [Before (L238-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L238-L248)

```diff
-       pp.forEachWorkerOut(((cp, op, Ip) => {
-         if ((0, Op.ee)(cp)) try {
-           var Sp;
-           null === (Sp = ip.worldgen) || void 0 === Sp || Sp.take(cp, Ip)
-         } catch (Lp) {
-           pp.crash(jp, Lp)
-         } else try {
-           var xp;
-           null === (xp = ip.mesh) || void 0 === xp || xp.take(cp, op, Ip)
-         } catch (Lp) {
-           pp.crash(lp, Lp)
+       return async function(QQ, WQ) {
+         const XQ = Object.keys(QQ),
+           wQ = [],
+           qQ = new Map,
+           TQ = new Uint32Array(XQ.length);
+         for (const [zQ, sQ] of XQ.entries()) {
+           const {
+             url: WQ
+           } = QQ[sQ];
+           qQ.has(WQ) || (qQ.set(WQ, wQ.length), wQ.push(WQ)), TQ[zQ] = qQ.get(WQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L255-L261` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L80-L81) · [Before (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L255-L261)

```diff
-       let cp = !1;
-       const Op = () => {
-         cp = !1, ip()
-       };
-       return () => {
-         !cp && pp.cursor >= Jp && (cp = !0, queueMicrotask(Op))
-       }
+       const XQ = gQ.o.from(QQ, WQ ? gQ.m.Optional : gQ.m.Error);
+       return XQ.code !== gQ.m.Fetch && XQ.code !== gQ.m.Error && (0, PQ.g)(XQ.message), XQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L266-L289` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L85) · [Before (L266-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L266-L289)

```diff
-       return Ep.has(pp.site) ? pp.error instanceof WebAssembly.RuntimeError || (0, op.g)(pp.error) : !Np.has(pp.site) && pp.error instanceof Error
-     }
-     const fp = "events",
-       bp = [],
-       hp = "debugLog",
-       ap = "terrainTextures",
-       np = "sunShadowTextures",
-       Fp = new TextDecoder;
- 
-     function gp(pp, ip) {
-       const {
-         site: cp,
-         error: op,
-         header: Ip
-       } = pp, Sp = Ip ? (0, Op._d)(Ip.lastError) : "noFrame", xp = `CORE-${cp===Up?Sp:cp}`, Lp = null === op || void 0 === op ? "" : ` ${(0,Dp.h)(op)}`, Yp = {
-         site: cp,
- ... (8 more removed lines; see GitHub link above)
+       return QQ.message ? new Error(`the texture worker failed: ${QQ.message}`) : new gQ.o(gQ.m.Load, "the texture worker failed to start")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L292-L425` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L88-L91) · [Before (L292-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L292-L425)

```diff
-       constructor(pp, ip, cp) {
-         this.core = pp, this.memory = ip, this.handlers = cp, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
-           ptr: 0,
-           len: 0,
-           net: bp,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Yp(pp, ip)
-       }
-       get netKeptFrames() {
-         return this.keptFrames
-       }
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
-       }
-       hasPendingCommands() {
- ... (118 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.worker = QQ, this.failure = void 0, this.abandonStep = null, QQ.addEventListener("error", (QQ => {
+           QQ.preventDefault(), this.failure ??= VQ(QQ)
+         }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L427-L431` → after: `L93-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L93-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L93-L99) · [Before (L427-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L427-L431)

```diff
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: pp
-         } = this.rings;
+       static async generateRequired(QQ, WQ, XQ, TQ) {
+         let zQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : gQ.c,
+           PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const rQ = (0, FQ.j)();
+         if (null !== rQ) throw yQ(new gQ.o(gQ.m.Load, rQ), !1);
+         let IQ;
+         const VQ = new AbortController;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L433-L442` → after: `L101-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L101-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L101-L105) · [Before (L433-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L433-L442)

```diff
-           const ip = this.unsentUiPrefs;
-           ip && pp.writeRecord(Op.wb.UiPrefs, 0, ip.nametagCutDistance, 0, (0, Op.we)(ip)) && (this.unsentUiPrefs = null);
-           const cp = this.unsentEnvPrefs;
-           cp && pp.writeRecord(Op.wb.EnvPrefs, (0, Op.ce)(cp), cp.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const op = this.unsentLookPrefs;
-           op && pp.writeRecord(Op.wb.Sensitivity, 0, op.mouse, op.touch, (0, Ap.n)(op.fovPercent)) && (this.unsentLookPrefs = null);
-           let Ip = 0;
-           for (const {
-               aux: Op,
-               payload: Sp
+           IQ = new DQ(function() {
+             try {
+               return new sQ
+             } catch (QQ) {
+               throw new gQ.o(gQ.m.Load, `the texture worker failed to start: ${(0,JQ.i)(QQ)}`)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L444-L447` → after: `L107-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L107-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L107-L192) · [Before (L444-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L444-L447)

```diff
-             of this.unsentOptions) {
-             if (!pp.writeOptions(Op, Sp)) {
-               if (pp.cursor > 0) break;
-               this.optionsDropped++
+           }());
+           const rQ = (0, FQ.b)().catch((QQ => {
+               throw new gQ.o(gQ.m.Load, function(QQ) {
+                 return `the texture module didn't load (${(0,JQ.i)(QQ)})`
+               }(QQ))
+             })),
+             yQ = (async () => {
+               const TQ = function(QQ, WQ, XQ) {
+                 const wQ = [],
+                   qQ = new Map,
+                   TQ = QQ => {
+                     let WQ = qQ.get(QQ);
+                     return void 0 === WQ && (WQ = wQ.length, wQ.push(QQ), qQ.set(QQ, WQ)), WQ
+                   },
+                   zQ = [],
+                   sQ = [],
+ ... (70 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L449` → after: `L194-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L194-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L194-L198) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L449)

```diff
-             Ip++
+             return XQ
+           }(vQ, dQ.imagesPerAtlas.length)), jQ(aQ), {
+             assets: dQ,
+             layerCap: HQ,
+             worker: IQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L551-L571` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L202) · [Before (L551-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L551-L571)

```diff
-           null === (Sp = Ip.gSp) || void 0 === Sp || Sp.call(Ip, pp, ip, cp, Op, op)
-         }))
-       }
-       takeSunShadowWarnings() {
-         return this.callCore(np, [], (pp => {
-           var ip, cp;
-           return null !== (ip = null === (cp = pp.KSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : []
-         }))
-       }
-       sunShadowsHeld() {
-         return this.callCore(np, null, (pp => {
-           var ip, cp;
-           return null !== (ip = null === (cp = pp.sSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : null
-         }))
-       }
-       callCore(pp, ip, cp) {
- ... (5 more removed lines; see GitHub link above)
+           throw VQ.abort(), null === (pQ = IQ) || void 0 === pQ || pQ.terminate(), yQ(GQ, !1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L574-L682` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L205-L206) · [Before (L574-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L574-L682)

```diff
-       readEvents(pp) {
-         this.netOffsets.length = 0;
-         const ip = this.headerView(),
-           cp = ip[Op.nb.EventsPtr],
-           op = ip[Op.nb.EventsLen];
-         if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === op) return bp;
-         const Ip = [],
-           Sp = this.memory().buffer;
-         if (cp % 4 !== 0 || cp + op > Sp.byteLength) return this.crash(fp, `events of ${op} bytes at ${cp} outside ${Sp.byteLength} bytes of memory`), bp;
-         const xp = new DataView(Sp, cp, op),
-           Lp = this.rings.net,
-           Yp = (ip, cp) => ip + cp <= pp ? Lp.copyWritten(ip, cp) : null;
-         let Dp = 0;
-         for (; Dp < op;) {
-           const pp = Dp + Op.$,
-             ip = pp <= op ? xp.getUint32(Dp, !0) : -1,
- ... (93 more removed lines; see GitHub link above)
+       async generateOptional() {
+         let QQ;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L684` → after: `L208-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L208-L210) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L684)

```diff
-           pp()
+           QQ = await this.request({
+             type: "optional"
+           }, [])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L686` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L212) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L686)

```diff
-           this.crashOn(Cp, ip)
+           throw yQ(WQ, !0)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L688-L746` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L214) · [Before (L688-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L688-L746)

```diff
-           this.atSendsStop = !1
-         }
-         return !this.stopped
-       }
-       forEachNetOut(pp) {
-         this.forEachOut(dp, "net-out", Op.nb.NetOutPtr, Op.nb.NetOutLen, Op.Zb, 0, ((ip, cp, op, Ip) => {
-           const Sp = (0, Op.ie)(cp);
-           Sp === Op._b.Frame ? pp((0, Op.he)(cp), op) : this.crash(dp, `net-out record at ${Ip} is kind ${Sp}, not a frame`)
-         }))
-       }
-       forEachWorkerOut(pp) {
-         this.forEachOut(ep, "worker-out", Op.nb.WorkerOutPtr, Op.nb.WorkerOutLen, Op.Gd, 4, ((ip, cp, op, Ip) => {
-           const Sp = 255 & ip,
-             xp = Sp === Op.Wd.Init ? this.initOf(op, Ip) : op;
-           null !== xp && pp(Sp, ip >>> 8 & 16777215, xp)
-         }))
- ... (43 more removed lines; see GitHub link above)
+           this.terminate()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L749-L756` → after: `L233-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L233-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L233-L277) · [Before (L749-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L749-L756)

```diff
-       crashOn(pp, ip) {
-         ip instanceof op.b ? this.crash(fp, ip.message) : this.crash(pp, ip)
-       }
-       crash(pp, ip) {
-         this.stopped || (this.stopped = !0, this.handlers.onCrash({
-           site: pp,
-           error: ip,
-           header: this.lastHeader
+       terminate() {
+         var QQ;
+         this.worker.terminate(), null === (QQ = this.abandonStep) || void 0 === QQ || QQ.call(this)
+       }
+       request(QQ, WQ, XQ) {
+         return new Promise(((wQ, qQ) => {
+           if (void 0 !== this.failure) return void qQ(this.failure);
+           let TQ = gQ.q.None,
+             zQ = 0,
+             sQ = null;
+           const FQ = () => {
+             var QQ;
+             null === (QQ = sQ) || void 0 === QQ || QQ.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
+           };
+           this.abandonStep = () => {
+             FQ(), qQ(new Error("the texture worker was terminated"))
+ ... (29 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L832-L837` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L282-L283) · [Before (L832-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L832-L837)

```diff
-     function op() {
-       return cp(41055)
-     }
- 
-     function Ip(pp) {
-       return ["pl", "ru", "tr", "uk", "vi"].includes(pp)
+     function pQ(QQ, WQ) {
+       return WQ > 0 ? `${QQ}, its module's memory ${Math.round(WQ/2**20)} MiB` : QQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L845` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L286) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L845)

```diff
-   36484: (pp, ip, cp) => {
+   36559: (QQ, WQ, XQ) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L849-L850` → after: `L289-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L289-L291) · [Before (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L849-L850)

```diff
-       e: () => Sp,
-       h: () => Ap
+       g: () => qQ,
+       j: () => TQ,
+       n: () => zQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L852-L854` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L293-L294) · [Before (L852-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L852-L854)

```diff
-     var Op = cp(36472),
-       op = cp(10);
-     const Ip = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+     const wQ = 1024,
+       qQ = 1024 * wQ;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L857-L869` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L297) · [Before (L857-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L857-L869)

```diff
-       if (pp instanceof WebAssembly.RuntimeError) return !0;
-       const ip = pp instanceof Error ? pp.stack : void 0;
-       return "string" === typeof ip && Ip.test(ip)
-     }
- 
-     function xp(pp, ip, cp) {
-       var op;
-       const Sp = pp instanceof Error ? pp.name : "thrown",
-         xp = (pp instanceof Error && null !== (op = pp.stack) && void 0 !== op ? op : "").split("\n").filter((pp => Ip.test(pp))).slice(0, 8).map((pp => pp.trim())),
-         Lp = null === ip ? "wasm memory unknown" : `wasm memory ${Math.round(ip/2**20)} MB`,
-         Yp = null === cp.panic ? "" : `, panic: ${(0,Op.j)(cp.panic)}`,
-         Dp = `${Sp}: ${pp instanceof Error?pp.message:String(pp)}`;
-       return `${(0,Op.q)(cp.kind,cp.refusedBytes)} ${Dp} (${Lp})${Yp}${xp.length>0?` | ${xp.join(" < ")}`:""}`
+       return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L874-L897` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L301) · [Before (L874-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L874-L897)

```diff
-       var ip;
-       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(pp instanceof Error) || !Lp.test(pp.message)) return {};
-       if (!("detached" in cp)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, op.V)(null === (ip = (0, op.N)(cp, "detached")) || void 0 === ip ? void 0 : ip.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
-     }
-     const Dp = 500;
- 
-     function Ap(pp) {
-       let ip = "[object Object]";
-       try {
-         ip = String(pp)
- ... (8 more removed lines; see GitHub link above)
+       return (QQ / qQ).toFixed(1)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L900-L938` → after: `L304-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L304-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/214.js#L304-L324) · [Before (L900-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/214.js#L900-L938)

```diff
-   41049: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
-   },
-   41055: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
-   },
-   36472: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op,
-       h: () => Ip,
-       j: () => Lp,
-       n: () => Sp,
-       q: () => op
-     });
-     const Op = /^alloc_failed (\d+) bytes$/;
- 
- ... (23 more removed lines; see GitHub link above)
+   36540: QQ => {
+     QQ.exports = function(QQ, WQ, XQ, wQ) {
+       var qQ = self || window;
+       try {
+         try {
+           var TQ;
+           try {
+             TQ = new qQ.Blob([QQ])
+           } catch (PQ) {
+             (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
+           }
+           var zQ = qQ.URL || qQ.webkitURL,
+             sQ = zQ.createObjectURL(TQ),
+             FQ = new qQ[WQ](sQ, XQ);
+           return zQ.revokeObjectURL(sQ), FQ
+         } catch (PQ) {
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/215.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/215.js` (59 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166)

#### 1. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L8)

```diff
-   36689: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp,
-       f: () => op,
-       g: () => Ip
+   41732: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       loadGlbAsset: () => pW,
+       loadGlbTree: () => DW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L10-L75` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L9-L12) · [Before (L10-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L10-L75)

```diff
-     var Op = cp(1819);
-     class op extends Error {
-       constructor(pp) {
-         super("The game server didn't answer in time"), this.leg = pp, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const Ip = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
- ... (50 more removed lines; see GitHub link above)
+     var wQ = XQ(38191),
+       qQ = XQ(41740),
+       TQ = XQ(36540),
+       zQ = XQ.n(TQ);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L77-L78` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L14-L15) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L77-L78)

```diff
-     function Ip(pp) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, pp / op)))
+     function sQ() {
+       return zQ()('(()=>{class QQ extends Error{}function WQ(WQ,XQ){const wQ=WQ._malloc(XQ);if(0===wQ)throw new QQ(`Draco: the decoder\'s heap refused ${XQ} bytes`);return wQ}function XQ(QQ){return{[QQ.DT_FLOAT32]:[Float32Array,5126],[QQ.DT_INT8]:[Int8Array,5120],[QQ.DT_INT16]:[I … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L81-L82` → after: `L34-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L34-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L34-L62) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L81-L82)

```diff
-     function Sp(pp) {
-       return (pp / op).toFixed(1)
+     function VQ() {
+       if (!gQ) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+       const {
+         scriptUrl: QQ,
+         wasmBinaryUrl: WQ
+       } = gQ;
+       return JQ ??= fetch(WQ).then((QQ => {
+         if (!QQ.ok) throw new Error(`Draco: fetching ${WQ} failed: ${QQ.status}`);
+         return QQ.arrayBuffer()
+       })), JQ.catch((() => {
+         JQ = null
+       })), BQ.workersStarted++, JQ.then((WQ => new Promise(((XQ, wQ) => {
+         const qQ = new sQ;
+         qQ.onerror = QQ => {
+           qQ.onmessage = null, qQ.onerror = null, qQ.terminate(), wQ(new Error("Draco: the decode worker failed to start" + (QQ.message ? `: ${QQ.message}` : " (its script did not load)")))
+         }, qQ.onmessage = QQ => {
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L108` → after: `L66-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L66-L68) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L108)

```diff
-       return Math.floor(op * pp / Ip)
+       const WQ = rQ.indexOf(QQ); - 1 !== WQ && rQ.splice(WQ, 1);
+       const XQ = IQ.shift();
+       XQ && GQ(XQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L111-L120` → after: `L71-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L71-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L71-L107) · [Before (L111-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L111-L120)

```diff
-     function Dp(pp) {
-       const ip = Ap(pp);
-       let cp = Op.g.maxChunkHorizAddDistance,
-         op = Op.g.maxChunkVertAddDistance;
-       if (Pp(cp + 1, op + 1) <= ip) return null;
-       for (; Pp(cp + 1, op + 1) > ip && (cp > 0 || op > 0);) cp > op ? cp-- : op--;
-       return {
-         horizontal: cp,
-         vertical: op
-       }
+     function pQ(QQ, WQ) {
+       QQ.busy = !0, QQ.releaseTimer && (clearTimeout(QQ.releaseTimer), QQ.releaseTimer = null);
+       QQ.worker.then((XQ => {
+         const wQ = jQ++;
+         XQ.onmessage = qQ => {
+           let {
+             data: TQ
+           } = qQ;
+           if (("decoded" === TQ.id || "decodeError" === TQ.id) && TQ.seq === wQ) {
+             if (XQ.onmessage = null, XQ.onerror = null, "decoded" === TQ.id) return BQ.decodes++, WQ.resolve({
+               indices: TQ.indices,
+               attributes: TQ.attributes,
+               totalVertices: TQ.totalVertices
+             }), void(() => {
+               const WQ = IQ.shift();
+               WQ ? pQ(QQ, WQ) : (QQ.busy = !1, QQ.releaseTimer = setTimeout((() => {
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L124-L133` → after: `L111-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L111-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L111-L123) · [Before (L124-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L124-L133)

```diff
-       return pp - Math.floor(pp / 6)
-     }
- 
-     function Pp(pp, ip) {
-       const cp = Math.max(pp, ip);
-       let Op = 0;
-       for (let op = -cp; op <= cp; op++)
-         for (let Ip = -cp; Ip <= cp; Ip++)
-           for (let Sp = -cp; Sp <= cp; Sp++) Wp(pp, ip, op, Ip, Sp) && Op++;
-       return Op
+       const WQ = rQ.find((QQ => !QQ.busy));
+       if (WQ) pQ(WQ, QQ);
+       else {
+         if (rQ.length < yQ) {
+           const WQ = {
+             worker: VQ(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return rQ.push(WQ), BQ.mostWorkers = Math.max(BQ.mostWorkers, rQ.length), void pQ(WQ, QQ)
+         }
+         IQ.push(QQ)
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L136-L138` → after: `L126-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L126-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L126-L135) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L136-L138)

```diff
-     function Wp(pp, ip, cp, Op, op) {
-       const Ip = cp * cp + op * op;
-       return pp === ip ? Ip + Op * Op <= pp * pp : pp > ip ? Math.abs(Op) <= ip && Ip + Op * Op <= pp * pp : Ip <= pp * pp && Ip + Op * Op <= ip * ip
+     function UQ(QQ, WQ, XQ) {
+       return new Promise(((wQ, qQ) => {
+         GQ({
+           data: new Int8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength).slice(),
+           attributeIds: WQ,
+           expected: XQ,
+           resolve: wQ,
+           reject: qQ
+         })
+       }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L140-L163` → after: `L137-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L137-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L137-L147) · [Before (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L140-L163)

```diff
-   },
-   36679: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => dp,
-       g: () => Xp,
-       j: () => Ep,
-       m: () => Cp,
-       p: () => Mp
-     });
-     var Op = cp(195),
-       op = cp(104),
-       Ip = cp(131),
-       Sp = cp(291),
-       xp = cp(4485),
-       Lp = cp(659),
-       Yp = cp(36682),
- ... (8 more removed lines; see GitHub link above)
+     var bQ = XQ(37748),
+       vQ = XQ(37762),
+       dQ = XQ(34596),
+       HQ = XQ(34591);
+     const aQ = {
+       index: -1,
+       magFilter: void 0,
+       minFilter: void 0,
+       wrapS: void 0,
+       wrapT: void 0
+     };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L167-L179` → after: `L153-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L153-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L153-L313) · [Before (L167-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L167-L179)

```diff
-         os: ip,
-         deviceMemory: cp
-       } = pp;
-       if ("ios" === ip) switch ((0, Sp.i)(pp)) {
-         case "ipad_m":
-           return {
-             footprintBytes: Hp(Yp.d), basis: "ipad-m", namesLimit: !1
-           };
-         case "ipad":
-           return {
-             footprintBytes: vp, basis: "ipad", namesLimit: !0
-           };
-         case "iphone_6gb":
+         json: XQ,
+         bin: wQ
+       } = (0, dQ.u)(QQ), qQ = (0, HQ.d)(XQ, wQ);
+       if (qQ) throw new dQ.i(qQ);
+       try {
+         return function(QQ, WQ) {
+           var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ;
+           const VQ = new Map,
+             DQ = XQ => {
+               let wQ = VQ.get(XQ);
+               if (!wQ) {
+                 var qQ;
+                 const TQ = QQ.bufferViews[XQ],
+                   zQ = null !== (qQ = TQ.byteOffset) && void 0 !== qQ ? qQ : 0;
+                 wQ = {
+                   index: XQ,
+ ... (145 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L181-L185` → after: `L315-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L315-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L315-L321) · [Before (L181-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L181-L185)

```diff
-             footprintBytes: wp, basis: "iphone-6gb", namesLimit: !0
-           };
-         case "iphone":
-           return {
-             footprintBytes: vp, basis: "iphone", namesLimit: !0
+             json: QQ,
+             rootNodes: null !== (jQ = null === (BQ = QQ.scenes) || void 0 === BQ || null === (yQ = BQ[AQ]) || void 0 === yQ ? void 0 : yQ.nodes) && void 0 !== jQ ? jQ : [],
+             nodes: vQ,
+             meshes: bQ,
+             materials: hQ,
+             textures: iQ,
+             images: cQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L187-L199` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L323-L325) · [Before (L187-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L187-L199)

```diff
-       }
-       return "number" === typeof cp && Number.isFinite(cp) && cp > 0 ? {
-         footprintBytes: cp * Pp * Up,
-         basis: `memory-${cp}`,
-         namesLimit: !0
-       } : "android" === ip ? {
-         footprintBytes: vp,
-         basis: "android",
-         namesLimit: !0
-       } : {
-         footprintBytes: Hp(Yp.k),
-         basis: "unreported",
-         namesLimit: !1
+         }(XQ, wQ)
+       } catch (TQ) {
+         throw TQ instanceof dQ.h ? TQ : new dQ.h(`reading the GLB failed: ${TQ instanceof Error?TQ.message:String(TQ)}`)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L202-L218` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L328) · [Before (L202-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L202-L218)

```diff
- 
-     function Hp(pp) {
-       return Wp + pp * yp
-     }
- 
-     function dp() {
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp(),
-         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ip.siteUsed;
-       if ("android" !== pp.os || "mobileAndroid" === ip) return !0;
-       const {
-         footprintBytes: cp,
-         basis: Op
-       } = tp(pp);
-       return "android" === Op || cp > 2 * Pp
-     }
- 
- ... (1 more removed lines; see GitHub link above)
+     async function hQ(QQ, WQ) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L220-L242` → after: `L330-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L330-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L330-L346) · [Before (L220-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L220-L242)

```diff
-       let {
-         footprintBytes: Sp,
-         basis: xp,
-         namesLimit: Lp
-       } = tp(pp);
-       if (cp) {
-         const pp = Math.min(Sp, Hp(Yp.d));
-         Sp = Wp + Math.max(0, pp - Wp) / 2, xp += "+killed", Lp = !0
-       }
-       null !== ip && Hp(ip) < Sp && (Sp = Hp(ip), xp += "+learned", Lp = !0);
-       const Dp = function(pp) {
-           const ip = Math.floor((pp - Wp) / yp);
-           return Math.min(Yp.d, Math.max(Yp.i, ip))
-         }(Sp),
-         Ap = Lp && Dp < Yp.d ? Math.min(Dp, Yp.g) : Dp,
-         Pp = (0, Yp.o)(Ap);
- ... (7 more removed lines; see GitHub link above)
+       const qQ = QQ.draco;
+       if (!qQ) throw new dQ.h("not a Draco primitive");
+       let TQ;
+       try {
+         TQ = await WQ(qQ.bufferView.bytes, qQ.attributeIds, qQ.expected)
+       } catch (PQ) {
+         throw new dQ.h(`Draco decoding failed: ${PQ instanceof Error?PQ.message:String(PQ)}`)
+       }
+       const {
+         vertices: zQ,
+         indices: sQ,
+         components: FQ
+       } = qQ.expected;
+       if (TQ.totalVertices !== zQ || (null !== (XQ = null === (wQ = TQ.indices) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== XQ ? XQ : 0) !== sQ || TQ.attributes.some((QQ => QQ.size !== FQ[QQ.kind] || QQ.data.length !== zQ * QQ.size))) throw new dQ.h("Draco decoding gave  … [truncated]
+       for (const gQ of TQ.attributes) {
+         const QQ = qQ.normalized[gQ.kind];
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L245-L247` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L350) · [Before (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L245-L247)

```diff
-     let jp = null,
-       kp = null,
-       mp = null;
+     const iQ = new WeakMap;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L249-L254` → after: `L352-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L352-L355) · [Before (L249-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L249-L254)

```diff
-     function Rp() {
-       return jp ??= {
-         os: (0, op.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, Sp.l)()
-       }, jp
+     function cQ(QQ, WQ) {
+       var XQ;
+       const wQ = null !== (XQ = iQ.get(QQ)) && void 0 !== XQ ? XQ : WQ(QQ);
+       return iQ.set(QQ, wQ), wQ
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L257-L258` → after: `L358-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L358-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L358-L363) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L257-L258)

```diff
-     function qp() {
-       return ep(Rp(), (0, xp.f)(), (0, Lp.J)("wasm").length > 0)
+     function AQ(QQ) {
+       const WQ = QQ.bufferView,
+         XQ = 5125 === QQ.componentType ? Uint32Array : Uint16Array,
+         wQ = WQ.bytes.buffer,
+         qQ = WQ.bytes.byteOffset + (QQ.byteOffset || 0);
+       return qQ % XQ.BYTES_PER_ELEMENT !== 0 ? new XQ(wQ.slice(qQ, qQ + QQ.count * XQ.BYTES_PER_ELEMENT), 0) : new XQ(wQ, qQ, QQ.count)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L261-L262` → after: `L366-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L366-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L366-L375) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L261-L262)

```diff
-     function Mp() {
-       return mp ??= (0, Dp.p)(ep(Rp(), null, !1).chunkCap), mp
+     function RQ(QQ, WQ) {
+       if (QQ.min && QQ.max) return [new Float64Array(QQ.min), new Float64Array(QQ.max)];
+       const XQ = WQ.find((QQ => {
+           let {
+             kind: WQ
+           } = QQ;
+           return "position" === WQ
+         })),
+         wQ = XQ ? (0, vQ.i)(XQ, QQ.count) : new Float32Array(0);
+       return (0, vQ.r)(wQ.length / 3, ((QQ, WQ) => wQ[3 * QQ + WQ]))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L265-L266` → after: `L378-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L378-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L378-L414) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L265-L266)

```diff
-     function Cp() {
-       return kp ??= qp(), kp
+     function EQ(QQ) {
+       const WQ = QQ.attributes.map((QQ => {
+           var WQ, XQ;
+           let {
+             kind: wQ,
+             accessor: qQ
+           } = QQ;
+           const {
+             bufferView: TQ,
+             numComponents: zQ
+           } = qQ;
+           if (!TQ) {
+             return {
+               kind: wQ,
+               data: cQ(qQ, (() => new Float32Array(zQ * qQ.count))),
+               offset: 0,
+ ... (21 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L269-L271` → after: `L418-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L418-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L418-L438) · [Before (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L269-L271)

```diff
-     function Ep() {
-       var pp;
-       return (null !== (pp = kp) && void 0 !== pp ? pp : qp()).basis
+     function uQ(QQ, WQ) {
+       const XQ = WQ.attributes.map((QQ => {
+         let {
+           kind: WQ,
+           data: XQ,
+           size: wQ,
+           byteOffset: qQ,
+           byteStride: TQ,
+           normalized: zQ
+         } = QQ;
+         return {
+           kind: WQ,
+           data: XQ,
+           offset: qQ,
+           stride: TQ,
+           components: wQ,
+ ... (5 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L274-L275` → after: `L441-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L441-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L441-L443) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L274-L275)

```diff
-     function Xp(pp, ip) {
-       return pp.setChunkCap(ip.chunkCap)
+     function LQ(QQ) {
+       const WQ = QQ.lastIndexOf("/");
+       return WQ < 0 ? QQ : QQ.substring(WQ + 1)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L298` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L447-L448) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L298)

```diff
-       return "footprint" !== pp
+       const WQ = QQ.lastIndexOf("/");
+       return WQ < 0 ? "" : QQ.substring(0, WQ + 1)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L307-L308` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L452) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L307-L308)

```diff
-       const ip = Up + (0, op.n)(pp) + pp * wp;
-       return Math.ceil((2 * yp + ip) / Ip) * Ip
+       return QQ.name || `node${QQ.index}`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L312-L313` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L455-L456) · [Before (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L312-L313)

```diff
-         targetBytes: Sp,
-         leastBytes: Lp
+         rotation: [0, 1, 0, 0],
+         scale: [1, 1, -1]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L316-L317` → after: `L459-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L459-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L459-L471) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L316-L317)

```diff
-         targetBytes: xp,
-         leastBytes: Lp
+         9728: 12,
+         9729: 2,
+         9984: 9,
+         9985: 11,
+         9986: 10
+       },
+       oQ = {
+         9728: 1,
+         9729: 7,
+         9984: 4,
+         9985: 5,
+         9986: 8,
+         9987: 6
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L321-L324` → after: `L475-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L475-L477) · [Before (L321-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L321-L324)

```diff
-       return {
-         targetBytes: pp,
-         leastBytes: 0
-       }
+       var WQ, XQ, wQ, qQ;
+       const TQ = null !== (WQ = QQ.minFilter) && void 0 !== WQ ? WQ : 9987;
+       return 9729 === (null !== (XQ = QQ.magFilter) && void 0 !== XQ ? XQ : 9729) ? null !== (wQ = tQ[TQ]) && void 0 !== wQ ? wQ : 3 : null !== (qQ = oQ[TQ]) && void 0 !== qQ ? qQ : 4
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L328` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L485-L486) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L328)

```diff
-       return pp >= op.d ? tp : Hp
+       var WQ;
+       return null !== (WQ = nQ[null !== QQ && void 0 !== QQ ? QQ : 10497]) && void 0 !== WQ ? WQ : 1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L332-L333` → after: `L489-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L489-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L489-L510) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L332-L333)

```diff
-     function kp(pp, ip, cp) {
-       return pp + ip + jp > cp
+     function YQ(QQ) {
+       return 9728 === QQ.minFilter || 9729 === QQ.minFilter
+     }
+ 
+     function NQ(QQ) {
+       var WQ, XQ, wQ;
+       const qQ = Float64Array.from(null !== (WQ = QQ.scale) && void 0 !== WQ ? WQ : [1, 1, 1]);
+       return QQ.hasCamera && (qQ[0] = -1), {
+         translation: Float64Array.from(null !== (XQ = QQ.translation) && void 0 !== XQ ? XQ : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (wQ = QQ.rotation) && void 0 !== wQ ? wQ : [0, 0, 0, 1]),
+         scale: qQ
+       }
+     }
+ 
+     function ZQ(QQ, WQ) {
+       let {
+ ... (6 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L342-L353` → after: `L513-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L513-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L513-L561) · [Before (L342-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L342-L353)

```diff
-       constructor(pp, ip, cp) {
-         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mp;
-         this.memory = pp, this.readPeakStoredChunks = ip, this.onError = cp, this.clock = Op, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.ma … [truncated]
-           reserves: 0,
-           allocations: 0
-         }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
-       }
-       setShed(pp, ip, cp) {
-         this.shedding = {
-           shed: pp,
-           Yy: ip,
-           readDistanceInUse: cp
+       constructor(QQ, WQ, XQ, wQ) {
+         this.model = QQ, this.decode = WQ, this.fileInfo = XQ, this.uniqueRootUrl = wQ, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
+         const qQ = new Set,
+           TQ = (WQ, XQ) => {
+             const wQ = QQ.nodes[WQ];
+             if (this.parents.has(wQ)) throw new dQ.h(`/nodes/${WQ}: Invalid recursive node hierarchy`);
+             this.parents.set(wQ, XQ);
+             const zQ = null === wQ.mesh ? [] : QQ.meshes[wQ.mesh].primitives,
+               sQ = zQ.map((QQ => {
+                 const WQ = zQ.length > 1;
+                 return {
+                   name: WQ ? `${fQ(wQ)}_primitive${QQ.index}` : fQ(wQ),
+                   node: wQ,
+                   primitive: QQ,
+                   part: WQ,
+                   geometry: null
+ ... (33 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L356-L357` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L566-L567) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L356-L357)

```diff
-       shedDistanceInUse() {
-         return this.distanceInUse
+       subtree(QQ) {
+         return [...this.own.get(QQ), ...QQ.children.flatMap((QQ => this.subtree(this.model.nodes[QQ])))]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L359-L360` → after: `L569-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L569-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L569-L575) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L359-L360)

```diff
-       setFootprint(pp) {
-         this.footprint = pp
+       worldMatrix(QQ, WQ, XQ) {
+         let wQ = ZQ(NQ(WQ ? SQ : {}), null);
+         const qQ = [];
+         for (let zQ = QQ.part ? QQ.node : this.parentOf(QQ.node); zQ; zQ = this.parentOf(zQ)) qQ.unshift(zQ);
+         for (const zQ of qQ) wQ = ZQ(NQ(zQ), wQ);
+         const TQ = NQ(QQ.part ? {} : QQ.node);
+         return void 0 !== XQ && TQ.scale.fill(XQ), ZQ(TQ, wQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L362-L365` → after: `L577-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L577-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L577-L582) · [Before (L362-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L362-L365)

```diff
-       setCeiling(pp) {
-         this.ceilingBytes = pp, this.call((() => {
-           this.memory.setCeiling(pp)
-         }), void 0)
+       floats(QQ) {
+         const {
+           vertexAttributes: WQ,
+           vertexCount: XQ
+         } = QQ.geometry;
+         return new Map(WQ.map((QQ => [QQ.kind, (0, vQ.i)(QQ, XQ)])))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L367-L369` → after: `L584-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L584-L590) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L367-L369)

```diff
-       ceilingMayRefuse(pp, ip) {
-         var cp;
-         return kp(this.memory.memoryBytes(), pp, null !== (cp = this.ceilingBytes) && void 0 !== cp ? cp : ip)
+       imageUrl(QQ) {
+         return function(QQ, WQ, XQ) {
+           let {
+             name: wQ
+           } = WQ;
+           return `data:${QQ}${wQ}#image${XQ}`
+         }(this.uniqueRootUrl, this.fileInfo, QQ)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L371` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L592-L593) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L371)

```diff
-       reserveAtJoin(pp) {
+       textureDesc(QQ, WQ) {
+         var XQ;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L373-L374` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L595-L596) · [Before (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L373-L374)

```diff
-           targetBytes: ip,
-           leastBytes: cp
+           texture: wQ,
+           transform: qQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L376-L383` → after: `L598-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L598-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L598-L637) · [Before (L376-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L376-L383)

```diff
-         const Op = this.memory.memoryBytes(),
-           op = Op + cp,
-           Ip = Math.max(ip + (this.ballastOn() ? Dp : 0), op),
-           Sp = this.call((() => this.memory.reserveUpFront(Ip) ? "target" : Ip > op && this.memory.reserveUpFront(op) ? "least" : "none"), "none");
-         if (this.stopped) return !1;
-         if ("target" !== Sp) {
-           const pp = "least" === Sp ? `took ${op} bytes instead` : "frames grow it in steps";
-           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Ip} bytes was refused at ${Op} bytes; ${pp}`)
+         const {
+           sampler: TQ,
+           image: zQ
+         } = this.model.textures[wQ], {
+           bufferView: sQ,
+           mimeType: FQ,
+           name: PQ
+         } = this.model.images[zQ], gQ = qQ && {
+           ...qQ.offset ? {
+             uOffset: qQ.offset[0],
+             vOffset: qQ.offset[1]
+           } : {},
+           uRotationCenter: 0,
+           vRotationCenter: 0,
+           ...qQ.rotation ? {
+             wAng: -qQ.rotation
+ ... (24 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L412-L413` → after: `L640-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L640-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L640-L681) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L412-L413)

```diff
-       noteMeshWorker(pp, ip) {
-         this.noteWorker(`Mesh${pp}`, ip)
+     }
+     async function KQ(QQ, WQ, XQ, wQ, qQ, TQ) {
+       let zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       const sQ = function(QQ, WQ, XQ) {
+           return "string" !== typeof WQ ? {
+             url: "",
+             rootUrl: QQ,
+             name: XQ()
+           } : WQ ? WQ.startsWith("data:") ? {
+             url: WQ,
+             rootUrl: QQ,
+             name: ""
+           } : QQ ? {
+             url: QQ + WQ,
+             rootUrl: QQ,
+             name: WQ
+ ... (26 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L415-L416` → after: `L683-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L683-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L683-L702) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L415-L416)

```diff
-       meshWorkerGone(pp) {
-         this.workerGone(`Mesh${pp}`)
+     }
+     var mQ = XQ(37855),
+       MQ = XQ(37720),
+       QW = XQ(38177);
+ 
+     function WW(QQ) {
+       if (null === QQ || void 0 === QQ || !QQ.min || !QQ.max) return null;
+       const [WQ, XQ, wQ] = QQ.min, [qQ, TQ, zQ] = QQ.max, {
+         BoundingInfo: sQ,
+         vj: FQ
+       } = (0, mQ.d)();
+       return new sQ(new FQ(WQ, XQ, wQ), new FQ(qQ, TQ, zQ))
+     }
+ 
+     function XW(QQ) {
+       (0, MQ.g)(QQ) || (QQ.geometry && QQ.geometry.useBoundingInfoFromGeometry ? QQ._updateBoundingInfo() : QQ.refreshBoundingInfo(!0, !0))
+ ... (4 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L418-L419` → after: `L704-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L704-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L704-L706) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L418-L419)

```diff
-       noteWorldgen(pp) {
-         this.noteWorker("Worldgen", pp)
+       viewBytes(QQ) {
+         let WQ = this.viewData.get(QQ.index);
+         return WQ || (WQ = this.bufferData.then((() => QQ.bytes)), this.viewData.set(QQ.index, WQ)), WQ
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L421-L422` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L708-L710) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L421-L422)

```diff
-       worldgenGone() {
-         this.workerGone("Worldgen")
+       viewBuffer(QQ) {
+         let WQ = this.viewBuffers.get(QQ.index);
+         return WQ || (WQ = this.viewBytes(QQ).then((QQ => new((0, mQ.d)().Tj)(this.cB.Uj(), QQ, !1))), this.viewBuffers.set(QQ.index, WQ)), WQ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L424-L429` → after: `L712-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L712-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L712-L722) · [Before (L424-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L424-L429)

```diff
-       noteWorker(pp, ip) {
-         const cp = this.workers.get(pp);
-         null !== cp && void 0 !== cp && cp.gone && (this.replacedRefusals.reserves += cp.stats.reservesRefused, this.replacedRefusals.allocations += cp.stats.allocationsRefused), this.workers.set(pp, {
-           stats: ip,
-           gone: !1
-         })
+       vertexBuffer(QQ, WQ) {
+         const {
+           kind: XQ,
+           data: wQ
+         } = WQ, qQ = `${QQ.index}:${XQ}`;
+         let TQ = this.vertexBuffers.get(qQ);
+         if (!TQ) {
+           const zQ = QQ.bufferView;
+           TQ = zQ ? this.viewBuffer(zQ).then((QQ => this.layoutVertexBuffer(QQ, WQ))) : Promise.resolve(wQ).then((QQ => new((0, mQ.d)().VertexBuffer)(this.cB.Uj(), QQ, XQ, !1))), this.vertexBuffers.set(qQ, TQ)
+         }
+         return TQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L431-L433` → after: `L724-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L724-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L724-L734) · [Before (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L431-L433)

```diff
-       workerGone(pp) {
-         const ip = this.workers.get(pp);
-         ip && (ip.gone = !0)
+       layoutVertexBuffer(QQ, WQ) {
+         let {
+           kind: XQ,
+           offset: wQ,
+           stride: qQ,
+           components: TQ,
+           glType: zQ,
+           isNormalized: sQ
+         } = WQ;
+         const FQ = this.cB.Uj();
+         return new((0, mQ.d)().VertexBuffer)(FQ, QQ, XQ, !1, void 0, qQ, void 0, wQ, TQ, zQ, sQ, !0, void 0, !0)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L435-L441` → after: `L736-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L736-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L736-L741) · [Before (L435-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L435-L441)

```diff
-       details() {
-         var pp, ip;
-         const cp = {
-           wasmMemoryNow: `${(0,Op.g)(this.memory.memoryBytes())} MiB`
-         };
-         null !== this.joinReserveTaken && (cp.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (cp.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
-         const op = this.main;
+       load(QQ, WQ, XQ) {
+         const wQ = (0, MQ.g)(XQ),
+           qQ = QQ => {
+             wQ || (XQ._delayInfo = XQ._delayInfo || [], -1 === XQ._delayInfo.indexOf(QQ) && XQ._delayInfo.push(QQ))
+           },
+           TQ = WQ.draco;
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L443-L446` → after: `L743-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L743-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L743-L759) · [Before (L443-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L443-L446)

```diff
-           cp.wasmMemoryMain = qp(op);
-           const pp = Math.max(0, op.peakLiveBytes - this.ballastPeakBytes),
-             ip = 0 === this.peakStoredChunks ? "-" : (pp / this.peakStoredChunks / Op.b).toFixed(1);
-           cp.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ip} KiB`
+           for (const QQ in TQ.attributeIds) qQ(QQ);
+           let zQ = this.dracoGeometry.get(TQ.bufferView.index);
+           return zQ || (zQ = this.viewBytes(TQ.bufferView).then((async () => {
+             let qQ;
+             try {
+               qQ = await hQ(WQ, this.decode)
+             } catch (FQ) {
+               throw new dQ.h(`${QQ}: ${FQ instanceof Error?FQ.message:String(FQ)}`)
+             }
+             const TQ = uQ(WQ, qQ);
+             if (wQ) return TQ;
+             const zQ = WW(WQ.position),
+               sQ = new((0, mQ.d)().MirroredGeometry)(XQ.name, this.cB);
+             zQ && (sQ._boundingInfo = zQ, sQ.useBoundingInfoFromGeometry = !0), TQ.indexData && sQ.setIndices(TQ.indexData);
+             for (const QQ of TQ.vertexAttributes) sQ.setVerticesBuffer(this.layoutVertexBuffer(QQ.data, QQ), TQ.vertexCount);
+             return sQ.link(TQ), sQ
+ ... (1 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L449-L460` → after: `L772-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L772-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L772-L777) · [Before (L449-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L449-L460)

```diff
-             stats: Sp,
-             gone: xp
-           }] of this.workers) cp[`wasmMemory${Op}`] = qp(Sp) + (xp ? " (gone)" : "");
-         const Ip = null !== (pp = null === (ip = this.footprint) || void 0 === ip ? void 0 : ip.describe()) && void 0 !== pp ? pp : null;
-         return null !== Ip && (cp.wasmMemoryFootprint = Ip), cp
-       }
-       pageKillSnapshot() {
-         var pp, ip, cp, op, Ip;
-         let Sp = (null !== (pp = null === (ip = this.main) || void 0 === ip ? void 0 : ip.reservesRefused) && void 0 !== pp ? pp : 0) + this.replacedRefusals.reserves,
-           xp = (null !== (cp = null === (op = this.main) || void 0 === op ? void 0 : op.allocationsRefused) && void 0 !== cp ? cp : 0) + this.replacedRefusals.allocations;
-         for (const {
-             stats: Op
+             kind: JQ,
+             accessor: rQ
+           }] of WQ.attributes.entries()) qQ(JQ), zQ.push(this.vertexBuffer(rQ, sQ.vertexAttributes[gQ]).then((QQ => {
+           if ("position" === QQ.getKind()) {
+             const QQ = WW(rQ);
+             QQ && (FQ._boundingInfo = QQ, FQ.useBoundingInfoFromGeometry = !0)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L462-L471` → after: `L779-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L779-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L779-L802) · [Before (L462-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L462-L471)

```diff
-           of this.workers.values()) Sp += Op.reservesRefused, xp += Op.allocationsRefused;
-         return {
-           wasmMainMiB: Number((0, Op.g)(this.memory.memoryBytes())),
-           wasmWorkersMiB: Number((0, Op.g)(this.workersMemoryBytes())),
-           peakStoredChunks: this.peakStoredChunks,
-           refusedReserves: Sp,
-           refusedAllocations: xp,
-           sheds: this.sheds,
-           ...null === (Ip = this.footprint) || void 0 === Ip ? void 0 : Ip.snapshot()
-         }
+           FQ.setVerticesBuffer(QQ, sQ.vertexCount)
+         })));
+         return (0, QW.d)(WQ) && (XQ.hasVertexAlpha = !0), Promise.all(zQ).then((() => (FQ.link(sQ), FQ)))
+       }
+     }
+     var qW, TW = XQ(37600),
+       zW = XQ(37367),
+       sW = XQ(38186),
+       FW = XQ(37535),
+       PW = XQ(37582),
+       gW = XQ(2997),
+       JW = XQ(37565);
+ 
+     function rW(QQ, WQ) {
+       QQ.metadata = QQ.metadata || {};
+       const XQ = QQ._internalMetadata = QQ._internalMetadata || {},
+ ... (8 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L473-L477` → after: `L804-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L804-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L804-L820) · [Before (L473-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L473-L477)

```diff
-       workersMemoryBytes() {
-         let pp = 0;
-         for (const {
-             stats: ip,
-             gone: cp
+     }
+ 
+     function jW(QQ, WQ) {
+       WQ.position = QQ.translation ? zW.vj.FromArray(QQ.translation) : zW.vj.Zero(), WQ.rotationQuaternion = QQ.rotation ? zW.Quaternion.FromArray(QQ.rotation) : zW.Quaternion.Identity(), WQ.oB = QQ.scale ? zW.vj.FromArray(QQ.scale) : zW.vj.One()
+     }
+     class BW {
+       constructor(QQ, WQ) {
+         if (this.cB = QQ, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, WQ) {
+           const WQ = QQ.Uj(),
+             XQ = QQ.yE.add((() => {
+               this.dispose()
+             })),
+             wQ = WQ.Gj.add((() => {
+               for (const QQ of [...this.geometries, ...this.meshes, ...this.textures]) QQ._rebuild()
+             }));
+           this.release = () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L479-L480` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L822) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L479-L480)

```diff
-           of this.workers.values()) pp += cp ? 0 : ip.memoryBytes;
-         return pp
+         }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L482-L483` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L824-L825) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L482-L483)

```diff
-       checkFootprint() {
-         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
+       getNodes() {
+         return [...this.meshes, ...this.transformNodes]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L485-L486` → after: `L827-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L827-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L827-L835) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L485-L486)

```diff
-       step() {
-         this.pendingSince = null, this.call((() => this.memory.reserveAhead(Yp)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
+       addAllToScene() {
+         if (this.release) {
+           this.release(), this.release = null;
+           for (const QQ of this.meshes) this.cB.hwQ(QQ);
+           for (const QQ of this.materials) this.cB.addMaterial(QQ);
+           for (const QQ of this.geometries) this.cB.addGeometry(QQ);
+           for (const QQ of this.transformNodes) this.cB.addTransformNode(QQ);
+           for (const QQ of this.textures) this.cB.addTexture(QQ)
+         }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L488-L489` → after: `L837-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L837-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L837-L843) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L488-L489)

```diff
-       ballastOn() {
-         return null !== this.shedding
+       dispose() {
+         var QQ;
+         for (const WQ of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
+           for (const QQ of WQ.slice()) QQ.dispose();
+           WQ.length = 0
+         }
+         null === (QQ = this.release) || void 0 === QQ || QQ.call(this), this.release = null
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L491-L495` → after: `L845-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L845-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L845-L848) · [Before (L491-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L491-L495)

```diff
-       takeBallast(pp) {
-         if (!this.ballastOn() || null === this.joinReserveTaken) return;
-         this.ballastCheckAt = pp + 1e3;
-         const ip = this.call((() => this.memory.takeBallast()), 0);
-         this.ballastPeakBytes = Math.max(this.ballastPeakBytes, ip)
+     }
+     class yW {
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         this.asset = QQ, this.cB = WQ, this.tree = XQ, this.geometryData = qQ, this.materials = TQ, this.lite = zQ, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = wQ ? XQ : null
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L497-L498` → after: `L850-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L850-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L850-L859) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L497-L498)

```diff
-       takePressure() {
-         return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
+       create(QQ) {
+         if (this.lite) return QQ();
+         const WQ = this.cB;
+         WQ._blockEntityCollection = !!this.container;
+         try {
+           const WQ = QQ();
+           return this.container && (WQ._parentContainer = this.container), WQ
+         } finally {
+           WQ._blockEntityCollection = !1
+         }
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L500-L501` → after: `L861-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L861-L862) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L500-L501)

```diff
-       stopSteps(pp) {
-         this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${pp}: frames grow on demand from here`)
+       node(QQ, WQ) {
+         return this.create((() => this.lite ? WQ ? (0, sW.f)(this.lite, QQ) : (0, sW.w)(this.lite, QQ) : WQ ? new((0, mQ.d)().Mesh)(QQ, this.cB) : new((0, mQ.d)().TransformNode)(QQ, this.cB)))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L503` → after: `L864-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L864-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L864-L876) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L503)

```diff
-       shedFor(pp) {
+       async load() {
+         var QQ;
+         this.asset.model.json.nodes && this.createRoot();
+         const WQ = this.lite ? null : this.cB,
+           XQ = null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.blockMaterialDirtyMechanism) && void 0 !== QQ && QQ;
+         let wQ;
+         WQ && (WQ.blockMaterialDirtyMechanism = !0);
+         try {
+           wQ = this.loadScene()
+         } finally {
+           null === WQ || void 0 === WQ || WQ._forceBlockMaterialDirtyMechanism(XQ)
+         }
+         await wQ;
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L505` → after: `L878-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L878-L879) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L505)

```diff
-           shedding: ip
+           root: qQ,
+           tree: TQ
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L507-L510` → after: `L881-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L881-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L881-L891) · [Before (L507-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L507-L510)

```diff
-         if (null === ip) return;
-         this.pendingSince = null;
-         const cp = this.call((() => ip.shed(pp)), null);
-         this.stopped || (null !== cp ? (this.sheds++, this.shedCap = cp, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), ip.Yy(pp, this.sheds, this.details())) : Ap(pp) && this.stopSteps("nothing is left to shed"))
+         qQ && (qQ.UH(!0), TQ.meshes.push(qQ), TQ.rootNodes.push(qQ));
+         for (const sQ of this.asset.model.nodes) {
+           const QQ = this.nodeObjects.get(sQ.index);
+           QQ && ["TransformNode", "LiteNode"].includes(QQ.getClassName()) && TQ.transformNodes.push(QQ);
+           for (const WQ of null !== (zQ = this.nodePrimitives.get(sQ.index)) && void 0 !== zQ ? zQ : []) {
+             var zQ;
+             TQ.meshes.push(WQ);
+             const QQ = WQ.geometry;
+             QQ && !TQ.geometries.includes(QQ) && TQ.geometries.push(QQ)
+           }
+         }
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L512-L517` → after: `L893-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L893-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L893-L926) · [Before (L512-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L512-L517)

```diff
-       call(pp, ip) {
-         if (this.stopped) return ip;
-         try {
-           return pp()
-         } catch (cp) {
-           return this.stop(), this.onError(cp), ip
+       createRoot() {
+         const QQ = this.node("__root__", !0);
+         this.root = QQ, QQ.UH(!1), this.cB.useRightHandedSystem || jW(SQ, QQ)
+       }
+       loadScene() {
+         const QQ = [];
+         for (const WQ of this.asset.model.rootNodes) QQ.push(this.loadNode(this.asset.model.nodes[WQ], (QQ => {
+           QQ.parent = this.root
+         })));
+         return QQ.push(Promise.resolve()), Promise.all(QQ).then((() => {}))
+       }
+       loadNode(QQ, WQ) {
+         const XQ = `/nodes/${QQ.index}`,
+           wQ = [],
+           qQ = qQ => {
+             if (rW(qQ, XQ), jW(QQ, qQ), QQ.hasCamera && !this.cB.useRightHandedSystem) {
+ ... (18 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L523-L524` → after: `L1054-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1054-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/215.js#L1054-L1082) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/215.js#L523-L524)

```diff
-       const ip = (pp, ip) => `${pp}/${(0,Op.g)(ip)}`;
-       return `memory ${(0,Op.g)(pp.memoryBytes)} live ${(0,Op.g)(pp.liveBytes)} peak ${(0,Op.g)(pp.peakLiveBytes)} unused ${(0,Op.g)(pp.unusedBytes)} ceiling ${(0,Op.g)(pp.ceilingBytes)} MiB; grows upFront ${ip(pp.grows.upFront,pp.grownBytes.upFront)} ahead ${ip(pp.grows.ahead,pp … [truncated]
+       return (0, wQ.isDiscordClient)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
+     }
+     const zQ = {
+       scriptUrl: TQ(new XQ.U(XQ(41742))),
+       wasmBinaryUrl: TQ(new XQ.U(XQ(41750)))
+     }
+   },
+   36540: QQ => {
+     QQ.exports = function(QQ, WQ, XQ, wQ) {
+       var qQ = self || window;
+       try {
+         try {
+           var TQ;
+           try {
+             TQ = new qQ.Blob([QQ])
+           } catch (PQ) {
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/216.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/216.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800)

#### 1. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/216.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/216.js#L4)

```diff
-   36527: (pp, ip, cp) => {
+   41757: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/216.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/216.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => xp,
-       ITEM_SPRITES: () => Ip,
-       ITEM_SPRITES_WITHOUT_FILE: () => Sp,
-       ITEM_SPRITE_RUNS: () => op,
-       MAX_SPRITE_ITEM_ID: () => Op
+       default: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L12-L16` → after: `L8-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/216.js#L8-L37) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/216.js#L12-L16)

```diff
-     const Op = 10090,
-       op = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       Ip = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       Sp = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       xp = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var wQ = XQ(36540),
+       qQ = XQ.n(wQ);
+ 
+     function TQ() {
+       return qQ()('/*! For license information please see 8104he.procGen.worker.05ee4d34.worker.js.LICENSE.txt */\n(()=>{var QQ={58:QQ=>{const WQ="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,XQ=()=>WQ.now(),wQ=QQ=>QQ===1/0||(QQ= … [truncated]
+     }
+   },
+   36540: QQ => {
+     QQ.exports = function(QQ, WQ, XQ, wQ) {
+       var qQ = self || window;
+       try {
+         try {
+           var TQ;
+           try {
+             TQ = new qQ.Blob([QQ])
+           } catch (PQ) {
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/217.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/217.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L4)

```diff
-   36539: (pp, ip, cp) => {
+   41782: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L6)

```diff
-       CreateCustomLobby: () => Ep
+       default: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L8-L34` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L8-L9) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L8-L34)

```diff
-     cp(36543);
-     var Op = cp(4719),
-       op = cp(62),
-       Ip = cp(1692),
-       Sp = cp(1049),
-       xp = cp.n(Sp),
-       Lp = cp(3224),
-       Yp = cp(1149),
-       Dp = cp(1211),
-       Ap = cp(4677),
-       Pp = cp(1480),
-       Wp = cp(36549),
-       yp = cp(1201),
-       Up = cp(1356),
-       wp = cp(1538),
-       vp = cp(25),
- ... (11 more removed lines; see GitHub link above)
+     var wQ = XQ(36540),
+       qQ = XQ.n(wQ);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L36-L503` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L11-L12) · [Before (L36-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L36-L503)

```diff
-     function Ep(pp) {
-       var ip, cp, Sp, Ep;
-       let {
-         gameNameWithVariation: Xp,
-         close: lp,
-         initialDefaultGamemode: Qp
-       } = pp;
-       const {
-         t: Jp
-       } = (0, yp.H)(), Bp = (0, wp.useNavigatePreserveSearch)(), [Np, Tp] = (0, op.useState)("Enter"), [fp, bp] = (0, op.useState)(""), hp = op.useRef(null), ap = null === (ip = ep.c[Xp]) || void 0 === ip ? void 0 : ip.showWorldsInsteadOfCustomLobbies, np = ap ? 1 : null === (cp  … [truncated]
-       Qp || (Qp = "classic_creative" === Xp || "classic_creativeFlat" === Xp ? "creative" : "classic" === Xp ? "peaceful" : "survival");
-       const Gp = {
-         baseOptions: {
-           gameNameWithVariation: ap ? "classic" : Xp,
-           name: "",
-           visibility: "unlisted"
- ... (452 more removed lines; see GitHub link above)
+     function TQ() {
+       return qQ()('(()=>{var QQ={18:(QQ,WQ,XQ)=>{QQ.exports=XQ.p+"static/media/bloxd_wasm_bg.b7e23ad43b7e82dd6e75.wasm"},26:(QQ,WQ,XQ)=>{QQ.exports=XQ.p+"static/media/bloxd_wasm_textures_bg.18bca44e8fe1e421dfd7.wasm"},14:(QQ,WQ,XQ)=>{QQ.exports=XQ.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L506-L592` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L15-L24) · [Before (L506-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L506-L592)

```diff
-   36549: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Dp,
-       g: () => Pp
-     });
-     var Op = cp(62),
-       op = cp(1372),
-       Ip = cp(1201),
-       Sp = cp(1361),
-       xp = cp(3581),
-       Lp = cp(5048),
-       Yp = cp(1112);
- 
-     function Dp(pp) {
-       let {
-         loading: ip,
- ... (71 more removed lines; see GitHub link above)
+   36540: QQ => {
+     QQ.exports = function(QQ, WQ, XQ, wQ) {
+       var qQ = self || window;
+       try {
+         try {
+           var TQ;
+           try {
+             TQ = new qQ.Blob([QQ])
+           } catch (PQ) {
+             (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L594-L702` → after: `L26-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L26-L36) · [Before (L594-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L594-L702)

```diff
-         })]
-       })
-     }
- 
-     function Pp(pp) {
-       let {
-         ownedSchematics: ip,
-         currentWorldSchematicId: cp,
-         onClose: Op
-       } = pp;
-       op.NotificationProvider.showCustomPopup({
-         body: pp => (0, Yp.jsx)(Ap, {
-           ownedSchematics: ip,
-           currentWorldSchematicId: cp,
-           onClose: pp
-         }),
- ... (93 more removed lines; see GitHub link above)
+           var zQ = qQ.URL || qQ.webkitURL,
+             sQ = zQ.createObjectURL(TQ),
+             FQ = new qQ[WQ](sQ, XQ);
+           return zQ.revokeObjectURL(sQ), FQ
+         } catch (PQ) {
+           return new qQ[WQ]("data:application/javascript,".concat(encodeURIComponent(QQ)), XQ)
+         }
+       } catch (PQ) {
+         if (!wQ) throw Error("Inline worker is not supported");
+         return new qQ[WQ](wQ, XQ)
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L704-L705` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/217.js#L38) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/217.js#L704-L705)

```diff
-   },
-   36543: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 1. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L4)

```diff
-   36549: (pp, ip, cp) => {
+   41028: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ, XQ) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(QQ, WQ).getContext("2d", XQ);
+       const wQ = document.createElement("canvas");
+       return wQ.width = QQ, wQ.height = WQ, wQ.getContext("2d", XQ)
+     }
+ 
+     function qQ(QQ, WQ) {
+       return QQ.getContext("2d", WQ)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L6` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L6)

```diff
-       c: () => Dp,
+       e: () => qQ,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L9-L15` → after: `L46-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L46-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L46-L182) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L9-L15)

```diff
-     var Op = cp(62),
-       op = cp(1372),
-       Ip = cp(1201),
-       Sp = cp(1361),
-       xp = cp(3581),
-       Lp = cp(5048),
-       Yp = cp(1112);
+     XQ(3723);
+     XQ(40994);
+ 
+     function wQ(QQ) {}
+ 
+     function qQ(QQ) {}
+ 
+     function TQ(QQ) {}
+ 
+     function zQ(QQ) {}
+ 
+     function sQ(QQ) {}
+ 
+     function FQ(QQ, WQ, XQ) {}
+ 
+     function PQ(QQ) {}
+ ... (121 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L18-L51` → after: `L185-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L185-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L185-L212) · [Before (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L18-L51)

```diff
-       let {
-         loading: ip,
-         schematics: cp,
-         onSchematicPicked: Op,
-         selectedSchematicIdList: op = [],
-         disableAutoExport: Lp
-       } = pp;
-       const {
-         t: Dp
-       } = (0, Ip.H)();
-       return (0, Yp.jsxs)("div", {
-         className: "SchematicList",
-         children: [ip && (0, Yp.jsx)(Sp.c, {}), !ip && 0 === cp.length && (0, Yp.jsx)("div", {
-           className: "NoSchematicsText",
-           children: Dp("worldBuilder:noSavedSchematic")
-         }), !ip && cp.map((pp => (0, Yp.jsx)(xp.g, {
- ... (18 more removed lines; see GitHub link above)
+       if (0 === QQ) return sQ;
+       const WQ = new TQ.c(wQ.Xb);
+       for (let XQ = 0; XQ < wQ.Xb; XQ++) WQ[XQ] = QQ >>> 8 * XQ & 255;
+       return WQ
+     }
+     class PQ {
+       constructor(QQ, WQ) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new zQ(WQ, {
+           ptr: () => QQ.iJ(),
+           yJ: () => QQ.TzQ(),
+           reserve: WQ => QQ.VzQ(WQ)
+         }), this.net = new zQ(WQ, {
+           ptr: () => QQ.jzQ(),
+           yJ: () => QQ.IzQ(),
+           reserve: WQ => QQ.DzQ(WQ)
+         }), this.worker = new zQ(WQ, {
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L55-L59` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L266-L275) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L55-L59)

```diff
-       let {
-         ownedSchematics: ip,
-         currentWorldSchematicId: cp,
-         onClose: op
-       } = pp;
+       return iQ.has(QQ.site) ? QQ.error instanceof WebAssembly.RuntimeError || (0, qQ.j)(QQ.error) : !uQ.has(QQ.site) && QQ.error instanceof Error
+     }
+     const kQ = "events",
+       fQ = [],
+       SQ = "debugLog",
+       tQ = "terrainTextures",
+       oQ = "sunShadowTextures",
+       eQ = new TextDecoder;
+ 
+     function nQ(QQ, WQ) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L61-L80` → after: `L277-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L277-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L277-L674) · [Before (L61-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L61-L80)

```diff
-         t: Sp
-       } = (0, Ip.H)(), [xp, Ap] = (0, Op.useState)(null);
-       return (0, Yp.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === xp && (0, Yp.jsxs)(Yp.Fragment, {
-           children: [(0, Yp.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: Sp("worldBuilder:schematicList")
-           }), (0, Yp.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: Sp("worldBuilder:clickSchematicForOptions")
-           }), (0, Yp.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, Yp.jsx)(Dp, {
-               loading: !1,
-               schematics: ip,
- ... (4 more removed lines; see GitHub link above)
+         site: XQ,
+         error: qQ,
+         header: TQ
+       } = QQ, zQ = TQ ? (0, wQ.de)(TQ.lastError) : "noFrame", sQ = `CORE-${XQ===BQ?zQ:XQ}`, FQ = null === qQ || void 0 === qQ ? "" : ` ${(0,gQ.j)(qQ)}`, PQ = {
+         site: XQ,
+         wasmBuild: WQ.wasm,
+         clientVersion: WQ.client
+       };
+       return TQ && (PQ.status = String(TQ.status), PQ.lastError = zQ, PQ.lastErrorCode = String(TQ.lastError), PQ.lastErrorDetail = String(TQ.lastErrorDetail), PQ.errorCount = String(TQ.errorCount), PQ.frameIndex = String(TQ.frameIndex), PQ.tickIndex = String(TQ.tickIndex)), {
+         code: sQ,
+         message: `core ${XQ}, last error ${zQ};${FQ}`,
+         details: PQ
+       }
+     }
+     class xQ {
+       constructor(QQ, WQ, XQ) {
+ ... (382 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L92-L93` → after: `L677-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L677-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L677-L788) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L92-L93)

```diff
-         })]
-       })
+           gQ = QQ + (0, wQ.te)(FQ)
+         }
+         return TQ
+       }
+       takeSends(QQ) {
+         this.atSendsStop = !0;
+         try {
+           QQ()
+         } catch (WQ) {
+           this.crashOn(hQ, WQ)
+         } finally {
+           this.atSendsStop = !1
+         }
+         return !this.stopped
+       }
+       forEachNetOut(QQ) {
+ ... (96 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L97-L111` → after: `L800-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L800-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L800-L814) · [Before (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L97-L111)

```diff
-       let {
-         ownedSchematics: ip,
-         currentWorldSchematicId: cp,
-         onClose: Op
-       } = pp;
-       op.NotificationProvider.showCustomPopup({
-         body: pp => (0, Yp.jsx)(Ap, {
-           ownedSchematics: ip,
-           currentWorldSchematicId: cp,
-           onClose: pp
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: Op,
-         unlockPointerKey: "schematicListPopup"
-       })
+       qQ = {
+         scanned: !1
+       };
+       try {
+         return QQ()
+       } finally {
+         qQ = null
+       }
+     }
+ 
+     function zQ() {
+       const QQ = qQ;
+       if (null === QQ) return (0, wQ.f)();
+       const WQ = (0, wQ.f)(!QQ.scanned);
+       return QQ.scanned = !0, WQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L114-L116` → after: `L817-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L817-L819) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L114-L116)

```diff
-   41985: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       runClientGameMessage: () => Cp
+   41039: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L118-L131` → after: `L821-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L821-L830) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L118-L131)

```diff
-     var Op = cp(3824),
-       op = cp(3837),
-       Ip = cp(1349),
-       Sp = cp(36549),
-       xp = cp(5076),
-       Lp = cp(1049),
-       Yp = cp.n(Lp),
-       Dp = cp(62),
-       Ap = cp(1372),
-       Pp = cp(1480),
-       Wp = cp(337),
-       yp = cp(1201),
-       Up = cp(1060),
-       wp = cp(1112);
+     const wQ = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+   },
+   41056: (QQ, WQ, XQ) => {
+     function wQ() {
+       return XQ(41062)
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L133-L194` → after: `L832-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L832-L833) · [Before (L133-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L133-L194)

```diff
-     function vp(pp) {
-       let {
-         onFilePicked: ip
-       } = pp;
-       const {
-         t: cp
-       } = (0, yp.H)(), [Op, op] = (0, Dp.useState)(null), {
-         getRootProps: Ip,
-         getInputProps: Sp,
-         isDragActive: Lp
-       } = (0, xp.c)({
-         onDrop: pp => {
-           pp.length > 0 && op(pp[0])
-         },
-         useFsAccessApi: !1
-       }), Ap = Op && Op.size > 1024 * Wp.Tc;
- ... (46 more removed lines; see GitHub link above)
+     function qQ() {
+       return XQ(41070)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L198-L238` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L837) · [Before (L198-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L198-L238)

```diff
-       let {
-         ownedSchematics: ip,
-         onClose: cp,
-         onChosenPreset: Op,
-         onChosenFile: op
-       } = pp;
-       const {
-         t: Ip
-       } = (0, yp.H)();
-       return (0, wp.jsxs)(wp.Fragment, {
-         children: [(0, wp.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: Ip("worldBuilder:loadSchematic")
-         }), (0, wp.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: Ip("worldBuilder:chooseOneOfYourSchematics")
- ... (25 more removed lines; see GitHub link above)
+       return ["pl", "ru", "tr", "uk", "vi"].includes(QQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L240-L243` → after: `L839-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L839-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L839-L854) · [Before (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L240-L243)

```diff
-     var Hp = cp(5048),
-       dp = cp(1692),
-       ep = cp(4462),
-       jp = cp(1234);
+     XQ.d(WQ, {
+       c: () => TQ,
+       f: () => wQ,
+       g: () => qQ
+     })
+   },
+   36568: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => sQ,
+       f: () => PQ,
+       g: () => zQ,
+       j: () => JQ
+     });
+     var wQ = XQ(36552),
+       qQ = XQ(12);
+     const TQ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
```
