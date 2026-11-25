# Changed — Bundle Modifications Report (Part 006 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `6 / 56` (**271** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/160.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/160.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9)

#### 25. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L369-L374` → after: `L949-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L949-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L949-L1015) · [Before (L369-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L369-L374)

```diff
-         clientHintsRead: Op,
-         debugDeviceLines: op
-       } = await cp.e(29).then((() => cp(34291)));
-       await Op, Yp.l.save({
-         ...pp,
-         device: op()
+         t: pQ
+       } = (0, wQ.C)(), GQ = XQ ? xQ[XQ] : null, bQ = null !== XQ && BQ.has(XQ), vQ = (XQ && qQ.hudElements[XQ] || cQ.l)[2], dQ = null !== (WQ = XQ && gQ[XQ]) && void 0 !== WQ ? WQ : cQ.h, HQ = QQ => {
+         XQ && rQ(XQ, Math.min(dQ, Math.round(100 * (vQ + .1 * QQ)) / 100))
+       };
+       return (0, UQ.jsxs)(UQ.Fragment, {
+         children: [(0, UQ.jsxs)("div", {
+           className: FQ()("HudQuickName SmallTextBold", {
+             Overlap: sQ.length > 0
+           }),
+           children: [sQ.length > 0 && (0, UQ.jsx)(hQ.d, {
+             name: "triangle-exclamation"
+           }), GQ ? NQ(GQ.id, TQ, pQ, zQ) : pQ("hudLayout:fullScreenHint"), sQ.length > 0 && (0, UQ.jsx)("span", {
+             className: "HudQuickOverlap",
+             children: pQ("hudLayout:overlapsShort", {
+               names: ZQ(sQ, TQ, pQ, zQ)
+             })
+ ... (51 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L377-L401` → after: `L1018-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1018-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1018-L1044) · [Before (L377-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L377-L401)

```diff
-   },
-   39219: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => xp
-     });
-     var Op = cp(34),
-       op = cp(1308),
-       Ip = cp(3071);
-     const Sp = "Reconnecting";
-     class xp {
-       constructor(pp) {
-         this.hooks = pp, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
-           "visible" === document.visibilityState && this.controller.retryNow()
-         }, this.onPageHide = pp => {
-           pp.persisted || this.leave()
-         }, this.controller = new Ip.e((ip => pp.reconnect(ip)), {
- ... (9 more removed lines; see GitHub link above)
+     var EW = XQ(1154),
+       CW = XQ(4730);
+     const uW = "HudPreviewDoc",
+       LW = {
+         hotbar: "TouchHotbar",
+         keysAbove: "TouchHotbarKeysAbove",
+         hasShop: "TouchHotbarHasShop",
+         hasBag: "TouchHotbarHasBag"
+       },
+       kW = new Set([uW, ...Object.values(LW)]),
+       fW = new Set(cQ.z.map(rW.y)),
+       SW = new Set(rW.k),
+       tW = 'style, link[rel="stylesheet"]';
+ 
+     function oW(QQ, WQ, XQ, wQ) {
+       const qQ = new Map,
+ ... (11 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L403-L426` → after: `L1046-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1046-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1046-L1086) · [Before (L403-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L403-L426)

```diff
-         })
-       }
-       onInitialInfo(pp, ip) {
-         this.graceMs = pp, this.sessionBased = ip
-       }
-       canHoldSeat() {
-         return this.graceMs > 0 && !this.ended
-       }
-       isResuming() {
-         return "connected" !== this.controller.phase
-       }
-       onConnectionLost(pp) {
-         this.ended || this.controller.onConnectionLost(pp, this.graceMs)
-       }
-       onResuming() {
-         this.ended || this.controller.onResuming()
- ... (8 more removed lines; see GitHub link above)
+         };
+       let FQ = null;
+       const PQ = () => {
+           FQ !== (0 === TQ.size) && (FQ = 0 === TQ.size, null === wQ || void 0 === wQ || wQ(FQ))
+         },
+         gQ = QQ => {
+           const WQ = QQ.cloneNode(!0);
+           if ("LINK" === WQ.tagName) {
+             TQ.add(WQ);
+             const QQ = () => {
+               TQ.delete(WQ), PQ()
+             };
+             WQ.addEventListener("load", QQ), WQ.addEventListener("error", QQ), XQ && WQ.addEventListener("load", XQ)
+           }
+           return WQ
+         },
+ ... (25 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L428-L429` → after: `L1088-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1088-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1088-L1136) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L428-L429)

```diff
-       end() {
-         this.ended = !0, this.controller.stop()
+     }
+ 
+     function eW(QQ, WQ, XQ) {
+       let {
+         keysAbove: wQ
+       } = XQ;
+       const qQ = [...QQ.documentElement.classList].filter((QQ => !kW.has(QQ) && !SW.has(QQ))),
+         TQ = [...WQ.documentElement.classList].filter((QQ => SW.has(QQ))),
+         zQ = [uW, LW.hotbar, LW.hasShop, LW.hasBag];
+       wQ && zQ.push(LW.keysAbove), WQ.documentElement.className = [...qQ, ...zQ, ...TQ].join(" ")
+     }
+     const nW = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
+ 
+     function xW(QQ, WQ, XQ, wQ, qQ) {
+       const TQ = (0, cQ.A)(XQ, wQ, "joystick"),
+         zQ = (0, rW.z)((0, rW.K)(XQ, wQ, qQ), wQ),
+ ... (33 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L431-L437` → after: `L1138-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1138-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1138-L1216) · [Before (L431-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L431-L437)

```diff
-       onPhaseChanged(pp) {
-         const ip = (0, Ip.q)(pp);
-         ip !== this.stopped && (this.stopped = ip, this.hooks.freeze(ip));
-         const cp = "frozen" === pp || "resuming" === pp && this.frozen;
-         cp && !this.frozen ? (0, op.s)(Sp, {
-           overridesPause: !0
-         }) : !cp && this.frozen && (0, op.r)(Sp), this.frozen = cp, this.setListening("connected" !== pp), Op.m.GA(Ip.n, cp ? "frozen" : pp)
+     }
+ 
+     function OW(QQ, WQ) {
+       const [XQ, wQ] = ZW(QQ, "hotbar", (WQ => {
+         const XQ = XQ => {
+           var wQ, qQ;
+           return WQ(XQ), null !== (wQ = null === (qQ = QQ.querySelector(".HotBarGameItemsContainer")) || void 0 === qQ ? void 0 : qQ.getBoundingClientRect().width) && void 0 !== wQ ? wQ : 0
+         };
+         return [XQ(1), XQ(cQ.h)]
+       }));
+       return XQ <= 0 ? cQ.h : Math.min(cQ.h, Math.max(1, Math.floor(wQ / XQ / WQ + 1e-6) * WQ))
+     }
+     const KW = 3,
+       mW = .5,
+       MW = QQ => QQ.right - QQ.left;
+     const QX = (QQ, WQ) => Math.abs((0, iQ.b)(QQ).x - (0, iQ.b)(WQ).x) + Math.abs((0, iQ.b)(QQ).y - (0, iQ.b)(WQ).y) + Math.abs(MW(QQ) - MW(WQ));
+ ... (63 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L439-L440` → after: `L1218-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1218-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1218-L1443) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L439-L440)

```diff
-       setListening(pp) {
-         pp !== this.listening && (this.listening = pp, pp ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow … [truncated]
+       return JQ !== GQ && qQ(GQ), GQ
+     }
+ 
+     function XX(QQ, WQ, XQ, wQ, qQ) {
+       let [TQ, zQ, sQ] = WQ;
+       const FQ = cQ.v[QQ],
+         PQ = {};
+       FQ.scale && MW(wQ) > 0 && Math.abs(MW(XQ) - MW(wQ)) > mW && (PQ.scale = Math.max(cQ.i, Math.min(cQ.h, sQ * MW(XQ) / MW(wQ))));
+       const gQ = (0, iQ.b)(XQ).x - (0, iQ.b)(wQ).x,
+         JQ = (0, iQ.b)(XQ).y - (0, iQ.b)(wQ).y;
+       return FQ.move && (Math.abs(gQ) > mW || Math.abs(JQ) > mW) && (PQ.dx = TQ + gQ / qQ.width, PQ.dy = zQ + JQ / qQ.height), void 0 === PQ.scale && void 0 === PQ.dx ? null : PQ
+     }
+     let wX = 0;
+ 
+     function qX() {
+       return wX > 0
+ ... (210 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L443-L457` → after: `L1446-L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1446-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1446-L1471) · [Before (L443-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L443-L457)

```diff
-   },
-   39221: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op
-     });
-     class Op {
-       constructor(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-         this.onSilent = pp, this.now = ip, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
-           const pp = this.now(),
-             ip = pp - this.lastCheckAt <= 2e3;
-           this.lastCheckAt = pp;
-           const cp = "visible" === document.visibilityState;
-           !cp || ip && this.wasVisible || (this.resumedAt = pp), this.wasVisible = cp, cp && pp - this.lastHeardAt > 12e3 && pp - this.resumedAt > 2e3 && this.onSilent()
-         }, this.lastHeardAt = ip(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
+     var PX = XQ(9268);
+ 
+     function gX(QQ, WQ) {
+       return Object.keys(QQ).filter((QQ => QQ !== WQ)).map((WQ => QQ[WQ]))
+     }
+ 
+     function JX(QQ) {
+       return QQ.map((QQ => {
+         let {
+           id: WQ,
+           box: XQ
+         } = QQ;
+         return `${WQ}:${XQ.left},${XQ.top},${XQ.right},${XQ.bottom}`
+       })).join(";")
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L459-L460` → after: `L1473-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1473-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1473-L1488) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L459-L460)

```diff
-       heard() {
-         this.lastHeardAt = this.now()
+       const wQ = QQ => (0, iQ.v)(WQ.filter((WQ => {
+           let {
+             id: XQ
+           } = WQ;
+           return QQ(XQ)
+         })).map((QQ => {
+           let {
+             box: WQ
+           } = QQ;
+           return WQ
+         }))),
+         qQ = {};
+       for (const sQ of new Set(WQ.map((QQ => QQ.id)))) qQ[sQ] = wQ((QQ => QQ === sQ));
+       for (const [sQ, FQ] of SQ) {
+         const QQ = wQ((QQ => FQ.has(QQ)));
+         QQ && (qQ[sQ] = QQ)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L462-L463` → after: `L1490-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1490-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1490-L1495) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L462-L463)

```diff
-       dispose() {
-         clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
+       const TQ = QQ.querySelector(".TouchInventoryKeys"),
+         zQ = TQ ? (0, iQ.f)(TQ.getBoundingClientRect()) : null;
+       return {
+         boxes: qQ,
+         pieces: WQ,
+         pairHome: zQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L466-L498` → after: `L1498-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1498-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1498-L1520) · [Before (L466-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L466-L498)

```diff
-   },
-   39235: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Yp,
-       g: () => Dp
-     });
-     var Op = cp(1742),
-       op = cp(195),
-       Ip = cp(1705),
-       Sp = cp(1810),
-       xp = cp(1211),
-       Lp = cp(1149);
-     async function Yp(pp, ip) {
-       return function(pp) {
-         return "object" === typeof pp && null !== pp && pp.code === op.e.VpnIp.code
-       }(ip) && function(pp) {
- ... (17 more removed lines; see GitHub link above)
+ 
+     function IX(QQ, WQ, XQ) {
+       const wQ = WQ.right - WQ.left,
+         qQ = WQ.bottom - WQ.top;
+       return ZW(QQ, "cluster", (WQ => {
+         const TQ = XQ => {
+             WQ(XQ);
+             const wQ = [...QQ.querySelectorAll(`[${YQ}]:not(.HudPreviewGhost)`)].filter((QQ => EQ.has(QQ.getAttribute(YQ)))).map((QQ => (0, iQ.f)(QQ.getBoundingClientRect()))),
+               qQ = (0, iQ.v)(wQ);
+             return qQ ? {
+               w: qQ.right - qQ.left,
+               h: qQ.bottom - qQ.top
+             } : null
+           },
+           zQ = QQ => !QQ || QQ.w <= wQ && QQ.h <= qQ,
+           sQ = TQ(1),
+ ... (7 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L500-L506` → after: `L1522-L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1522-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1522-L1531) · [Before (L500-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L500-L506)

```diff
-     async function Dp(pp, ip) {
-       try {
-         return await ip()
-       } catch (cp) {
-         if (!await Yp(pp, cp)) throw cp
-       }
-       return ip()
+ 
+     function jX(QQ) {
+       eW(document, QQ, {
+         keysAbove: !1
+       });
+       const WQ = parseFloat(getComputedStyle(QQ.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
+         XQ = Number.isFinite(WQ) && WQ < 0;
+       return eW(document, QQ, {
+         keysAbove: XQ
+       }), (0, PX.b)(QQ), XQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L522-L537` → after: `L1535-L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1535-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1535-L1597) · [Before (L522-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L522-L537)

```diff
-       if ("object" !== typeof pp || null === pp) return !1;
-       const {
-         code: ip,
-         message: cp
-       } = pp, op = Op.e.duplicateLobbyNameError;
-       return (ip === op.code || ip === Lp) && (cp === op.text || cp === op.text + Op.l)
-     }
-     async function Dp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.e;
-       for (let op = 0;; op++) {
-         let Sp;
-         (0, Ip.j)(ip);
-         try {
-           return await pp()
-         } catch (Op) {
-           if (Sp = xp[op], void 0 === Sp || !Yp(Op)) throw Op
+       const WQ = QQ.querySelector(".TouchInventoryKey.ShopKey");
+       return null !== WQ && "1" === getComputedStyle(WQ).getPropertyValue("--touch-shop-above").trim()
+     }
+ 
+     function yX(QQ, WQ) {
+       let {
+         layout: XQ,
+         orientation: wQ,
+         viewport: TQ,
+         replicaKey: zQ,
+         joystickFixed: sQ,
+         busy: FQ
+       } = WQ;
+       const [PQ, gQ] = (0, qQ.useState)(null), [JQ, rQ] = (0, qQ.useState)({
+         boxes: {},
+         pieces: []
+ ... (47 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L539` → after: `L1599-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1599-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1599-L1606) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L539)

```diff
-         await cp(Sp, ip)
+       }), [PQ, vQ, FQ, zQ]), {
+         doc: PQ,
+         boxes: JQ.boxes,
+         pieces: JQ.pieces,
+         insets: IQ,
+         keysAbove: BQ,
+         ready: VQ,
+         settled: pQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L542` → after: `L1609-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1609-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1609-L1661) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L542)

```diff
-     const Ap = new Set([Op.e.duplicateLobbyNameError.code, Op.e.lobbyCantBeCreated.code, Op.e.roomDisposedEarlyError.code, Op.e.roomDisposedLateError.code, Op.e.serverRoomLimitReached.code]);
+     const VX = ["Above", "Below", "Left", "Right"];
+ 
+     function DX(QQ, WQ, XQ, wQ, qQ) {
+       const TQ = XQ[QQ],
+         zQ = (TQ.left + TQ.right) / 2,
+         sQ = (TQ.top + TQ.bottom) / 2,
+         FQ = (7.5 * WQ.length + 14) / wQ,
+         PQ = 18 / wQ,
+         gQ = {
+           Above: {
+             left: zQ - FQ / 2,
+             top: TQ.top - PQ,
+             right: zQ + FQ / 2,
+             bottom: TQ.top
+           },
+           Below: {
+ ... (37 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L545-L547` → after: `L1664-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L1664-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L1664-L2016) · [Before (L545-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L545-L547)

```diff
-       if (Yp(pp)) return !0;
-       const ip = (0, Sp.f)(pp);
-       return "number" === typeof ip && Ap.has(ip)
+       var WQ;
+       const {
+         layout: XQ,
+         orientation: TQ,
+         selected: zQ,
+         onSelect: sQ,
+         onMove: PQ,
+         canMove: gQ,
+         actionButtons: JQ,
+         joystickFixed: rQ,
+         presence: IQ,
+         keyNames: BQ,
+         maxHeight: yQ,
+         fill: VQ = !1,
+         apiRef: DQ
+       } = QQ, {
+ ... (337 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L569-L581` → after: `L2020-L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2020-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2020-L2023) · [Before (L569-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L569-L581)

```diff
-       if (pp instanceof op.f) return {
-         at: Sp[ip],
-         code: 0
-       };
-       const cp = (0, Op.f)(pp),
-         Lp = "number" === typeof cp ? cp : 0;
-       return null !== (0, Ip.h)(Lp).name ? {
-         at: "refused",
-         code: Lp
-       } : {
-         at: xp[ip],
-         code: Lp
-       }
+       (0, qQ.useEffect)((() => {
+         var XQ;
+         null === (XQ = QQ.current) || void 0 === XQ || XQ.toggleAttribute("inert", WQ)
+       }), [QQ, WQ])
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L583-L593` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2025) · [Before (L583-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L583-L593)

```diff
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
+     const bX = "hudFullScreen";
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L596` → after: `L2028-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2028-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2028-L2144) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L596)

```diff
-       return Sp(pp) === Op.e.gameOrPluginOnPlayerAuthRejected.code
+       let {
+         onScale: WQ,
+         onHidden: XQ,
+         onReset: TQ,
+         locked: zQ,
+         lockable: sQ,
+         onLocked: FQ,
+         onClose: gQ,
+         ...JQ
+       } = QQ;
+       const {
+         t: rQ
+       } = (0, wQ.C)(), IQ = (0, qQ.useRef)(null);
+       (0, sW.k)("popup", IQ, gQ),
+       function(QQ) {
+         const WQ = (0, qQ.useRef)(QQ);
+ ... (101 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L600` → after: `L2149-L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2149-L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2149-L2173) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L600)

```diff
-       return "object" === typeof pp && null !== pp ? pp.code : void 0
+       let {
+         info: WQ,
+         tuple: XQ,
+         props: qQ
+       } = QQ;
+       const {
+         t: TQ
+       } = (0, wQ.C)();
+       return (0, UQ.jsx)(IQ.h, {
+         name: TQ("hudLayout:size"),
+         min: cQ.i,
+         max: cQ.h,
+         step: AW,
+         initValue: XQ[2],
+         disabled: qQ.locked.has(WQ.id),
+         selectableMax: qQ.scaleCaps[WQ.id],
+ ... (9 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L604-L605` → after: `L2177-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2177-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2177-L2318) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L604-L605)

```diff
-       var ip;
-       return null !== (ip = Object.keys(op.c).find((ip => op.c[ip] === pp))) && void 0 !== ip ? ip : null
+       const {
+         t: WQ
+       } = (0, wQ.C)(), {
+         present: XQ,
+         elements: TQ,
+         selected: zQ,
+         onSelect: sQ,
+         onHidden: PQ,
+         onReset: gQ,
+         note: JQ,
+         actionButtons: rQ,
+         keyNames: IQ,
+         sizeBesidePreview: jQ,
+         locked: BQ,
+         lockable: yQ,
+         onLocked: VQ
+ ... (126 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L609` → after: `L2322-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2322-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2322-L2384) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L609)

```diff
-       return "notWhitelisted" === pp ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       let {
+         preview: WQ,
+         quick: XQ,
+         onFullScreen: TQ,
+         resting: zQ,
+         onSidePanel: sQ
+       } = QQ;
+       const {
+         t: FQ
+       } = (0, wQ.C)(), gQ = pX(), JQ = (0, qQ.useRef)(null), {
+         width: rQ
+       } = (0, PW.d)(JQ), IQ = Math.floor(gQ.width * Math.min(1, WQ.maxHeight / gQ.height)), jQ = rQ - IQ - 12, BQ = jQ >= 130, yQ = rQ > 0;
+       (0, qQ.useEffect)((() => {
+         yQ && sQ(BQ)
+       }), [yQ, BQ, sQ]);
+       const VQ = (0, iQ.s)(BQ ? IQ : rQ, gQ.width, gQ.height, WQ.maxHeight),
+ ... (47 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L611-L615` → after: `L2386-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2386-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2386-L2449) · [Before (L611-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L611-L615)

```diff
-     const Yp = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+     var hX = XQ(2572),
+       iX = XQ(4724),
+       cX = XQ(2561),
+       AX = XQ(2524);
+     const RX = QQ => {
+       const WQ = rW.o * ("sides" === QQ ? window.innerWidth : window.innerHeight);
+       return Math.min(64, 2 * Math.floor(WQ / 2))
+     };
+ 
+     function EX(QQ, WQ, XQ) {
+       const [wQ, qQ, TQ, zQ] = QQ;
+       return "sides" === WQ ? [wQ, XQ, TQ, XQ] : [XQ, qQ, XQ, zQ]
+     }
+     const CX = [null, null, null, null],
+       uX = QQ => `${QQ}px`;
+ 
+ ... (48 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L638-L639` → after: `L2453-L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2453-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2453-L2729) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L638-L639)

```diff
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
-       (0, Ip.h)(pp, xp)
+       const {
+         t: QQ
+       } = (0, wQ.C)(), WQ = (0, cQ.db)(), {
+         clientEscMenuOptions: XQ
+       } = (0, gQ.n)(["clientEscMenuOptions"]), TQ = (0, hX.f)(), zQ = WQ.hudLayouts[TQ], [sQ, FQ] = (0, qQ.useState)(null), {
+         rowIconsOpen: JQ,
+         onRowIconsOpen: rQ,
+         select: jQ
+       } = function(QQ, WQ) {
+         const [XQ, wQ] = (0, qQ.useState)((() => cQ.E.some((WQ => void 0 !== QQ.hudElements[WQ] || QQ.hudLocked.includes(WQ))))), TQ = (0, qQ.useCallback)((QQ => {
+           WQ(QQ), (0, cQ.Q)(QQ) && wQ(!0)
+         }), [WQ]);
+         return {
+           rowIconsOpen: XQ,
+           onRowIconsOpen: wQ,
+           select: TQ
+ ... (261 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L643` → after: `L2838-L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2838-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2838-L2840) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L643)

```diff
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).setItem(Yp, !0)
+       return (0, UQ.jsx)(UQ.Fragment, {
+         children: SX.map(((QQ, WQ) => (0, UQ.jsx)(QQ, {}, WQ)))
+       })
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L647-L648` → after: `L2845-L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2845-L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2845-L2985) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L647-L648)

```diff
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
-       return (0, Ip.c)(pp, xp)
+       const {
+         t: QQ
+       } = (0, wQ.C)(), {
+         isTouchScreen: WQ,
+         clientEscMenuOptions: XQ,
+         gameState: zQ
+       } = (0, gQ.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), sQ = (0, jQ.g)("ezBridging"), FQ = (0, jQ.g)("ezTowering"), yQ = "inGame" !== zQ || !0 === sQ, VQ = (0, BQ.f)(), pQ = null !== VQ && ("inGame" !== zQ || !0 === FQ), [, GQ] = (0, qQ.useReducer)((QQ => QQ  … [truncated]
+       return (0, UQ.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [bQ && (0, UQ.jsxs)("div", {
+           className: "SettingBox SettingBoxWithButton",
+           children: [(0, UQ.jsx)("div", {
+             children: QQ("controller:settingsControlsNote")
+           }), (0, UQ.jsx)(PQ.T, {
+             onClick: () => {
+               gQ.b.set({
+ ... (125 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L652-L671` → after: `L2989-L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2989-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L2989-L3111) · [Before (L652-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L652-L671)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp.l;
-       const cp = (0, Ip.c)(ip, xp),
-         Dp = function(pp) {
-           const ip = pp.getItem(Lp);
-           return "string" !== typeof ip ? null : ip
-         }(ip),
-         Ap = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).getItem(Yp)
-         }(ip);
-       let Pp;
-       return Pp = null !== cp && null !== Dp && (0, Ip.f)(ip, xp) && function(pp, ip, cp) {
-           const op = (0, Op.Mb)(pp),
-             Ip = (0, Op.Mb)(ip),
-             Sp = (0, Op.Ib)(pp),
-             xp = (0, Op.Ib)(ip);
-           return !(op !== Ip || !cp) || op === Ip && Sp === xp
- ... (4 more removed lines; see GitHub link above)
+       let {
+         noaAction: WQ,
+         forceUpdate: XQ,
+         clashesWith: sQ,
+         showPadGlyph: gQ
+       } = QQ;
+       const {
+         t: JQ
+       } = (0, wQ.C)(), rQ = (0, VQ.e)(WQ), [IQ, jQ] = (0, qQ.useState)(!1), [BQ, DQ] = (0, qQ.useState)("controls:clickToEnterNewBinding"), [pQ, GQ] = (0, qQ.useState)(null), [bQ, vQ] = (0, qQ.useState)(null), dQ = (0, qQ.useRef)(null);
+       (0, qQ.useEffect)((() => {
+         IQ && dQ.current && dQ.current.focus()
+       }), [IQ]);
+       const HQ = TQ.s[WQ].filter((QQ => zQ.f[QQ]));
+       let aQ = null;
+       const lQ = [],
+         hQ = sQ.flatMap((QQ => {
+ ... (107 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L674` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3114) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L674)

```diff
-   36674: (pp, ip, cp) => {
+   9255: (QQ, WQ, XQ) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L676-L677` → after: `L3116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3116) · [Before (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L676-L677)

```diff
-       c: () => ep,
-       d: () => jp
+       c: () => zQ
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L679-L739` → after: `L3118-L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3118-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3118-L3213) · [Before (L679-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L679-L739)

```diff
-     var Op = cp(1014),
-       op = cp(209),
-       Ip = cp(335),
-       Sp = cp(643),
-       xp = cp(337),
-       Lp = cp(1021),
-       Yp = cp(657),
-       Dp = cp(681),
-       Ap = cp(4609),
-       Pp = cp(104),
-       Wp = cp(131),
-       yp = cp(1765),
-       Up = cp(116),
-       wp = cp(36677),
-       vp = cp(44),
-       tp = cp(670),
- ... (45 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(1094),
+       TQ = XQ(1145);
+     const zQ = (0, wQ.forwardRef)((function(QQ, WQ) {
+       let {
+         icon: XQ,
+         title: wQ,
+         sub: zQ,
+         expanded: sQ,
+         onClick: FQ
+       } = QQ;
+       return (0, TQ.jsxs)("button", {
+         ref: WQ,
+         type: "button",
+         className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
+         "aria-expanded": sQ,
+ ... (80 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L741-L747` → after: `L3215-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3215-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3215-L3233) · [Before (L741-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L741-L747)

```diff
-         };
-       return null !== mp && (0, xp.vc)(mp) ? (qp.lobbyName = (0, Op.h)(mp, (0, Op.n)(ip), cp), {
-         roomName: `classic_${Lp.d}`,
-         joinOptions: qp
-       }) : {
-         roomName: ip,
-         joinOptions: qp
+         }(rQ(QQ), WQ, QQ.maxLength), "insertText")
+       },
+       VQ = QQ => {
+         BQ("delete") || IQ(QQ, (QQ => {
+           const WQ = QQ.start === QQ.end ? sQ(QQ.value, QQ.start) : QQ.start;
+           return {
+             value: QQ.value.slice(0, WQ) + QQ.value.slice(QQ.end),
+             start: WQ,
+             end: WQ
+           }
+         })(rQ(QQ)), "deleteContentBackward")
+       },
+       DQ = (QQ, WQ) => {
+         if (!JQ(QQ)) return;
+         const XQ = FQ(rQ(QQ), WQ);
+         QQ.setSelectionRange(XQ.start, XQ.end)
+ ... (3 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L751` → after: `L3255-L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3255-L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3255-L3275) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L751)

```diff
-   39258: (pp, ip, cp) => {
+   9211: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => FQ,
+       i: () => TQ,
+       j: () => zQ,
+       k: () => qQ,
+       l: () => sQ
+     });
+     var wQ = XQ(2043);
+     const qQ = "controllerPadShopOpen",
+       TQ = QQ => wQ.i.includes(QQ),
+       zQ = QQ => Object.values(QQ).some((QQ => !1 !== QQ.canBuy && !QQ.isRewardedAd)),
+       sQ = (QQ, WQ, XQ) => {
+         var wQ, qQ, zQ, sQ;
+         const FQ = QQ.filter((QQ => !TQ(QQ))),
+           PQ = null !== WQ && QQ.includes(WQ) ? WQ : null;
+ ... (5 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L756-L776` → after: `L3280-L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3280-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3280-L3302) · [Before (L756-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L756-L776)

```diff
-     const Op = "ue:",
-       op = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
-       Ip = "[A-Za-z0-9]{1,24}",
-       Sp = 15,
-       xp = new RegExp(`^${Ip}$`);
-     new RegExp(`^${Op}(${[...op,"other"].join("|")}):(?:n|k(${Ip})|b(0|[1-9][0-9]?)):([01])([01])$`);
- 
-     function Lp(pp, ip, cp, Ip, Lp) {
-       const Yp = "string" === typeof pp && op.includes(pp) ? pp : "other";
-       let Dp = "n";
-       return "string" === typeof ip ? Dp = xp.test(ip) ? `k${ip}` : "n" : "number" === typeof cp && Number.isInteger(cp) && cp >= 0 && cp <= Sp && (Dp = `b${cp}`), `${Op}${Yp}:${Dp}:${Ip?1:0}${Lp?1:0}`
-     }
-     var Yp = cp(1677),
-       Dp = cp(1770);
-     let Ap = null;
- 
- ... (5 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(1498),
+       TQ = XQ(2083),
+       zQ = XQ(1468),
+       sQ = XQ(1482),
+       FQ = XQ(1145);
+     const PQ = () => {
+         const QQ = (0, zQ.s)();
+         if ((0, wQ.useEffect)((() => {
+             (0, zQ.j)()
+           }), []), !QQ) return null;
+         const {
+           ControllerCategory: WQ
+         } = QQ;
+         return (0, FQ.jsx)(sQ.b, {
+           children: (0, FQ.jsx)(WQ, {})
+ ... (7 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L794` → after: `L3305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3305) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L794)

```diff
-   39244: (pp, ip, cp) => {
+   9048: (QQ, WQ, XQ) => {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L796` → after: `L3307-L3313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3307-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3307-L3313) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L796)

```diff
-       b: () => op,
+       B: () => aQ,
+       F: () => bQ,
+       G: () => vQ,
+       J: () => yQ,
+       M: () => FQ,
+       P: () => gQ,
+       c: () => VQ,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L801` → after: `L3317-L3322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3317-L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3317-L3322) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L801)

```diff
-       n: () => Sp
+       n: () => jQ,
+       r: () => BQ,
+       s: () => rQ,
+       t: () => IQ,
+       v: () => dQ,
+       y: () => PQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L803-L844` → after: `L3324-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L3324-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L3324-L3446) · [Before (L803-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L803-L844)

```diff
-     var Op = cp(195);
-     const op = 3e3,
-       Ip = 15e3;
- 
-     function Sp(pp) {
-       const ip = pp.endsWith(Op.l);
-       return {
-         text: (ip ? pp.slice(0, -Op.l.length) : pp) || null,
-         dropsCache: ip
-       }
-     }
-     const xp = "Either your internet isn't working or this is a bug.";
- 
-     function Lp(pp, ip) {
-       const cp = Dp(pp);
-       return null !== cp.name && "" === Op.e[cp.name].text && null !== ip ? ip : cp.reason
- ... (26 more removed lines; see GitHub link above)
+     var wQ = XQ(31),
+       qQ = XQ(1728),
+       TQ = XQ(9056),
+       zQ = XQ(9065),
+       sQ = XQ(2474);
+     const FQ = QQ => (0, zQ.h)(QQ),
+       PQ = QQ => {
+         const WQ = QQ.getBoundingClientRect();
+         return {
+           x: WQ.left + WQ.width / 2,
+           y: WQ.top + WQ.height / 2
+         }
+       },
+       gQ = (QQ, WQ, XQ) => ({
+         bubbles: !0,
+         cancelable: !0,
+ ... (107 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/161.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/161.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/161.js#L4-L174) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/161.js#L4)

```diff
-   9062: (pp, ip, cp) => {
+   36906: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       B: () => DQ,
+       b: () => TQ,
+       f: () => BQ,
+       h: () => yQ,
+       j: () => sQ,
+       n: () => rQ,
+       r: () => VQ,
+       t: () => JQ,
+       u: () => pQ,
+       y: () => jQ
+     });
+     var wQ = XQ(26),
+       qQ = XQ(31);
+     const TQ = "clientGameInventoryButtonsChanged",
+ ... (155 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6-L42` → after: `L176-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L176-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/161.js#L176-L211) · [Before (L6-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/161.js#L6-L42)

```diff
-       pageBody: () => Op
-     });
-     const Op = {
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
- ... (21 more removed lines; see GitHub link above)
+       getClientGameMapKey: () => wQ.q,
+       shopIsEmpty: () => qQ.b
+     });
+     var wQ = XQ(36900),
+       qQ = XQ(9145)
+   },
+   9153: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       return !QQ.hidden && (WQ || !QQ.isRewardedAd)
+     }
+ 
+     function qQ(QQ) {
+       return "object" === typeof QQ ? QQ.option : QQ
+     }
+ 
+     function TQ(QQ, WQ) {
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/162.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/162.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567)

#### 1. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/162.js#L4-L199) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/162.js#L4)

```diff
-   9069: (pp, ip, cp) => {
+   39354: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ,
+       g: () => zQ
+     });
+     var wQ = XQ(31);
+     let qQ = !1;
+ 
+     function TQ() {
+       return qQ
+     }
+ 
+     function zQ(QQ) {
+       qQ !== QQ && (qQ = QQ, wQ.k.mB("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L6-L7` → after: `L201-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L201-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/162.js#L201-L556) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/162.js#L6-L7)

```diff
-       pageBody: () => Op
-     });
+       LOOK_DEBUG_HEADER: () => gQ,
+       endLookDebugTake: () => VQ,
+       noteLookDroppedCopy: () => DQ,
+       saveLookCapture: () => pQ,
+       startLookDebug: () => yQ
+     });
+     var wQ = XQ(5140),
+       qQ = XQ(3045),
+       TQ = XQ(1972);
+     const zQ = new Map(Object.entries(wQ.l).map((QQ => {
+       let [WQ, XQ] = QQ;
+       return [XQ, WQ]
+     })));
+ 
+     function sQ(QQ) {
+       return (0, TQ.y)(QQ).toFixed(1)
+ ... (340 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L32` → after: `L558-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L558-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/162.js#L558-L845) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/162.js#L9-L32)

```diff
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
-       faq: [{
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
-       }, {
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
-       }, {
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
-       }, {
-         question: "What are Clovers in Lucky Bedwars?",
- ... (8 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       sQ = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function FQ(QQ, WQ) {
+       if (QQ instanceof qQ.f) return {
+         at: zQ[WQ],
+         code: 0
+       };
+       const XQ = (0, wQ.g)(QQ),
+ ... (272 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/163.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/163.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L4)

```diff
-   9072: (pp, ip, cp) => {
+   9314: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L9-L13)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L15-L16)

```diff
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L18-L19)

```diff
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L21-L22)

```diff
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L24-L25)

```diff
-         question: "What are the best Skywars kits?",
-         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L27-L28)

```diff
-         question: "What do perks do in Bloxd Skywars?",
-         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L30-L31)

```diff
-         question: "How do I get Gold in Skywars?",
-         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L33-L34)

```diff
-         question: "How many players fit in one Skywars match?",
-         answer: "Up to 12 players fight it out in each free-for-all match."
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L36-L37` → after: `L36-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/163.js#L36-L40) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/163.js#L36-L37)

```diff
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/164.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/164.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L4)

```diff
-   9079: (pp, ip, cp) => {
+   9316: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L9-L13)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L15-L16)

```diff
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L21-L22)

```diff
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L24-L25)

```diff
-         question: "What items can you get in Lucky Towers?",
-         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L27-L28)

```diff
-         question: "Which random events can happen in Lucky Towers?",
-         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/164.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/164.js#L30-L34)

```diff
-         question: "Which maps are in Lucky Towers?",
-         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
-       }, {
-         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
-         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/165.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/165.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L4)

```diff
-   9081: (pp, ip, cp) => {
+   9320: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L24-L25)

```diff
-         question: "What is the Ultra Lucky Block?",
-         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L27-L28)

```diff
-         question: "What's inside Bloxd lucky blocks?",
-         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L30-L31)

```diff
-         question: "Can other players attack me in my base?",
-         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/165.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/165.js#L33-L34)

```diff
-         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
-         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
+       }, {
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/166.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/166.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172)

#### 1. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L4)

```diff
-   9090: (pp, ip, cp) => {
+   9323: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L9-L13)

```diff
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L15-L16)

```diff
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L18-L19)

```diff
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L21-L22)

```diff
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L24-L25)

```diff
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
-         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L27-L28)

```diff
-         question: "Can I make a private server in Bloxd Survival?",
-         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L30-L31)

```diff
-         question: "What happens if I log out during a fight?",
-         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/166.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/166.js#L33-L37)

```diff
-         question: "Will my world still be there tomorrow?",
-         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
-       }, {
-         question: "Which Bloxd survival mode should I play?",
-         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/167.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/167.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L4)

```diff
-   9096: (pp, ip, cp) => {
+   9329: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L9-L13)

```diff
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L15-L16)

```diff
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L18-L19)

```diff
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L21-L22)

```diff
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L24-L25)

```diff
-         question: "Are there mobs in Bloxd Peaceful?",
-         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L27-L28)

```diff
-         question: "What's the difference between Peaceful and Survival in Bloxd?",
-         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L30-L31)

```diff
-         question: "Is Bloxd Peaceful good for beginners?",
-         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L33-L40` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/167.js#L33-L34) · [Before (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/167.js#L33-L40)

```diff
-         question: "Can I play Bloxd Peaceful with friends?",
-         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
-       }, {
-         question: "How do I keep my builds safe in Peaceful?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
-       }, {
-         question: "How do I save my progress in Bloxd Peaceful?",
-         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/168.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/168.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L4)

```diff
-   9101: (pp, ip, cp) => {
+   9333: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L9-L13)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L15-L16)

```diff
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L21-L22)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L24-L25)

```diff
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/168.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/168.js#L30-L31)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+       }, {
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/169.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/169.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L4)

```diff
-   9110: (pp, ip, cp) => {
+   9338: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L9-L13)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L15-L16)

```diff
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L18-L19)

```diff
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L21-L22)

```diff
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L24-L25)

```diff
-         question: "Do mobs carry guns in Bloxd?",
-         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L27-L28)

```diff
-         question: "Can my pets use guns?",
-         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L30-L31)

```diff
-         question: "Can I turn guns on in a private server?",
-         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L33-L34` → after: `L33-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/169.js#L33-L40) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/169.js#L33-L34)

```diff
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/170.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/170.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L4)

```diff
-   9114: (pp, ip, cp) => {
+   9343: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L9-L13)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L15-L16)

```diff
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L22)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L24-L25)

```diff
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L27-L28)

```diff
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/170.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/170.js#L30-L34)

```diff
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
-       }, {
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/171.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/171.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L4)

```diff
-   9118: (pp, ip, cp) => {
+   9346: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/171.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/171.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+       }, {
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/172.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/172.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049)

#### 1. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L4)

```diff
-   9123: (pp, ip, cp) => {
+   9352: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L30-L31)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/172.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/172.js#L33-L37)

```diff
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/173.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/173.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L4)

```diff
-   9127: (pp, ip, cp) => {
+   9360: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/173.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/173.js#L30-L34)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
-       }, {
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/174.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/174.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390)

#### 1. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L4)

```diff
-   9133: (pp, ip, cp) => {
+   9369: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L13)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L15-L16)

```diff
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L18-L19)

```diff
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L21-L22)

```diff
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L24-L25)

```diff
-         question: "Which modes does Sky Islands have?",
-         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L27-L28)

```diff
-         question: "Where do you find diamonds in Sky Islands?",
-         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/174.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/174.js#L30-L31)

```diff
-         question: "What is a diamond bounty?",
-         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+       }, {
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/175.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/175.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L4)

```diff
-   9142: (pp, ip, cp) => {
+   9378: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "How many phases are in Bloxd One Block?",
+         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "How do I get to the Hub in One Block?",
+         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "Where do One Block coins come from?",
+         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+         question: "How do I open my portal in One Block?",
+         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/175.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/175.js#L33-L37)

```diff
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
-       }, {
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "Can I have more than one island?",
+         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/176.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/176.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L4)

```diff
-   9149: (pp, ip, cp) => {
+   9381: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
+       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
+       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
+       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
+       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Bloxd Sky Islands?",
+         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How is the winner decided in Bloxd Sky Islands?",
+         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "How do I claim an island in Sky Islands?",
+         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "Which modes does Sky Islands have?",
+         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "Where do you find diamonds in Sky Islands?",
+         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/176.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/176.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "What is a diamond bounty?",
+         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/177.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/177.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L4)

```diff
-   9157: (pp, ip, cp) => {
+   9388: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
+       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
+       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
+       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
+       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Bloxd Build a Factory?",
+         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "How do you build a rocket in Bloxd Build a Factory?",
+         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "What's the goal in Build a Factory?",
+         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "How often does the Build a Factory world reset?",
+         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "What is the Persistent world in Build a Factory?",
+         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
+         question: "How do you get to the Moon in Build a Factory?",
+         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+       }, {
+         question: "What does Lunite do?",
+         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+       }, {
+         question: "What's the difference between Build a Factory and Build a Factory 2?",
+         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/178.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/178.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L4)

```diff
-   9162: (pp, ip, cp) => {
+   9392: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L9-L13)

```diff
-       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
-       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
-       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
-       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
-       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
+       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
+       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
+       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
+       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L15-L16)

```diff
-         question: "What is Bloxd Fishing?",
-         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+         question: "What is Build a Factory 2 on Bloxd?",
+         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L18-L19)

```diff
-         question: "How many fish are in Bloxd Fishing?",
-         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+         question: "Is Build a Factory 2 an idle factory game?",
+         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L21-L22)

```diff
-         question: "How do I catch Mythic fish in Bloxd Fishing?",
-         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+         question: "How do I unlock new machines in Build a Factory 2?",
+         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L24-L25)

```diff
-         question: "Where can I get better rods?",
-         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
+         question: "What's the best way to power my factory?",
+         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L27-L28)

```diff
-         question: "How do I travel between islands?",
-         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
+         question: "What are the Wilds?",
+         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/178.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/178.js#L30-L31)

```diff
-         question: "What are the catch minigames?",
-         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
+         question: "Can friends help build my factory?",
+         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/179.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/179.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L4)

```diff
-   9165: (pp, ip, cp) => {
+   9399: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L13)

```diff
-       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
-       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
-       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
-       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
-       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
+       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
+       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
+       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
+       similarGames: ["plots", "classic_creative", "fishing", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L15-L16)

```diff
-         question: "What is Cube Warfare?",
-         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+         question: "What is Bloxd Greenville?",
+         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L18-L19)

```diff
-         question: "What modes are in Cube Warfare?",
-         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+         question: "How do I earn gold in Greenville?",
+         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L21-L22)

```diff
-         question: "How does team deathmatch work in Cube Warfare?",
-         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
+         question: "Can I build my own house in Greenville?",
+         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L24-L25)

```diff
-         question: "What is Gun Game in Bloxd Cube Warfare?",
-         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
+         question: "How do I change my house in Bloxd Greenville?",
+         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L27-L28)

```diff
-         question: "How do I unlock new guns in Cube Warfare?",
-         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
+         question: "Can my friends visit my house?",
+         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L30-L43` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/179.js#L30-L31) · [Before (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/179.js#L30-L43)

```diff
-         question: "How many guns are in Cube Warfare?",
-         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
-       }, {
-         question: "What are killstreaks in Cube Warfare?",
-         answer: "Rewards for taking down opponents without being eliminated, like Healthup, Hitem, Speedy and Autoblocks. There are 3 tiers, and your streak resets when you go down."
-       }, {
-         question: "What is Collect Diamonds?",
-         answer: "A match modifier for Free-For-All and Team Deathmatch. You need 30 diamonds to win in FFA, or 100 as a team. When someone's taken down they drop all their diamonds, so you can steal theirs. Shoot the diamonds placed around the map and they'll drop too. Those resp … [truncated]
-       }, {
-         question: "What is the Explosives modifier?",
-         answer: "You keep getting explosives all match, and every takedown gives you more."
-       }, {
-         question: "What maps are in Cube Warfare?",
-         answer: "Snowbase, Sienna and Cabins, among others. You get to vote for the next one."
+         question: "Which mini-games are in Greenville?",
+         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/180.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/180.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L4)

```diff
-   9167: (pp, ip, cp) => {
+   9408: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L13)

```diff
-       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
-       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
-       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
-       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
-       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
+       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
+       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
+       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
+       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
+       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L15-L16)

```diff
-         question: "What is Bloxd Frontline?",
-         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
+         question: "What is Bloxd Fishing?",
+         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L18-L19)

```diff
-         question: "How does a team win in Bloxd Frontline?",
-         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
+         question: "How many fish are in Bloxd Fishing?",
+         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L21-L22)

```diff
-         question: "What do kits do in Bloxd Frontline?",
-         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
+         question: "How do I catch Mythic fish in Bloxd Fishing?",
+         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L24-L25)

```diff
-         question: "How do I unlock new kits?",
-         answer: "Spend gold on a mystery kit draw. Draw one you already own and you'll get gems instead, which you can use to buy a specific locked kit."
+         question: "Where can I get better rods?",
+         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L27-L28)

```diff
-         question: "Does Bloxd Frontline have vehicles?",
-         answer: "Yep. They spawn at each base and around the map. Guns and explosives can destroy them, so drive carefully."
+         question: "How do I travel between islands?",
+         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/180.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/180.js#L30-L34)

```diff
-         question: "How is Frontline different from Cube Warfare?",
-         answer: "Frontline is 12v12 objective play with points, kits and vehicles. Cube Warfare is quicker Free-For-All, Team Deathmatch and Gun Game fights where killstreaks matter most."
-       }, {
-         question: "Can I squad up with friends in Bloxd Frontline?",
-         answer: "Yes. Party up with your friends and you'll play together as a squad."
+         question: "What are the catch minigames?",
+         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/181.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/181.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L4)

```diff
-   9172: (pp, ip, cp) => {
+   9416: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L13)

```diff
-       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
-       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
-       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
-       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
-       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
+       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
+       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
+       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
+       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
+       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L15-L16)

```diff
-         question: "What is Bloxd Pirates?",
-         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
+         question: "What is Cube Warfare?",
+         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Pirates?",
-         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
+         question: "What modes are in Cube Warfare?",
+         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L21-L22)

```diff
-         question: "How do cannons work in Bloxd Pirates?",
-         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
+         question: "How does team deathmatch work in Cube Warfare?",
+         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L24-L25)

```diff
-         question: "Which kits can I pick in Bloxd Pirates?",
-         answer: "There are 26, each with its own items or powers. The Scout can double jump, the Scoundrel can go invisible and the Portalmaster makes portals. You pick one in the lobby and unlock more with Gold or gems."
+         question: "What is Gun Game in Bloxd Cube Warfare?",
+         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L27-L28)

```diff
-         question: "How do I get Gold in Bloxd Pirates?",
-         answer: "A win is worth 25 Gold. You also get 5 Gold for every spawn block you break and every final kill."
+         question: "How do I unlock new guns in Cube Warfare?",
+         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L30-L31` → after: `L30-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/181.js#L30-L43) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/181.js#L30-L31)

```diff
-         question: "What maps are in Bloxd Pirates?",
-         answer: "There are 11: Classic, Classic (4 Teams), Scurvy Shore, Cutthroat Cliffs, Treasure Island, Double Trouble, Stowaway Seas, Woesome Waters, Cannon Storm, Scorched Sails and Dynasty Docks."
+         question: "How many guns are in Cube Warfare?",
+         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
+       }, {
+         question: "What are killstreaks in Cube Warfare?",
+         answer: "Rewards for taking down opponents without being eliminated, like Healthup, Hitem, Speedy and Autoblocks. There are 3 tiers, and your streak resets when you go down."
+       }, {
+         question: "What is Collect Diamonds?",
+         answer: "A match modifier for Free-For-All and Team Deathmatch. You need 30 diamonds to win in FFA, or 100 as a team. When someone's taken down they drop all their diamonds, so you can steal theirs. Shoot the diamonds placed around the map and they'll drop too. Those resp … [truncated]
+       }, {
+         question: "What is the Explosives modifier?",
+         answer: "You keep getting explosives all match, and every takedown gives you more."
+       }, {
+         question: "What maps are in Cube Warfare?",
+         answer: "Snowbase, Sienna and Cabins, among others. You get to vote for the next one."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/182.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/182.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914)

#### 1. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L4)

```diff
-   9179: (pp, ip, cp) => {
+   9425: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L9-L13)

```diff
-       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
-       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
-       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
-       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
-       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
+       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
+       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
+       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
+       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
+       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L15-L16)

```diff
-         question: "What is Bloxd Infection?",
-         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
+         question: "What is Bloxd Frontline?",
+         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L18-L19)

```diff
-         question: "How does the infection spread in Bloxd Infection?",
-         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
+         question: "How does a team win in Bloxd Frontline?",
+         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L21-L22)

```diff
-         question: "How do humans win?",
-         answer: "Get through all the obstacles and escape before you're infected."
+         question: "What do kits do in Bloxd Frontline?",
+         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L24-L25)

```diff
-         question: "How do zombies win?",
-         answer: "By infecting every human before they escape."
+         question: "How do I unlock new kits?",
+         answer: "Spend gold on a mystery kit draw. Draw one you already own and you'll get gems instead, which you can use to buy a specific locked kit."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L27-L28)

```diff
-         question: "How are points earned?",
-         answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
+         question: "Does Bloxd Frontline have vehicles?",
+         answer: "Yep. They spawn at each base and around the map. Guns and explosives can destroy them, so drive carefully."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L30-L31)

```diff
-         question: "What kits are in Bloxd Infection?",
-         answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
+         question: "How is Frontline different from Cube Warfare?",
+         answer: "Frontline is 12v12 objective play with points, kits and vehicles. Cube Warfare is quicker Free-For-All, Team Deathmatch and Gun Game fights where killstreaks matter most."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/182.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/182.js#L33-L34)

```diff
-         question: "What's the player limit in Infection?",
-         answer: "18 players per match."
+         question: "Can I squad up with friends in Bloxd Frontline?",
+         answer: "Yes. Party up with your friends and you'll play together as a squad."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/183.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/183.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95)

#### 1. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L4)

```diff
-   9187: (pp, ip, cp) => {
+   9434: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L9-L13)

```diff
-       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
-       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
-       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
-       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
-       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
+       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
+       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
+       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
+       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
+       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L15-L16)

```diff
-         question: "What is Bloxd Murder Mystery?",
-         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
+         question: "What is Bloxd Pirates?",
+         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L18-L19)

```diff
-         question: "What are the roles in Murder Mystery?",
-         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
+         question: "How do you win in Bloxd Pirates?",
+         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L21-L22)

```diff
-         question: "Who wins a round of Murder Mystery?",
-         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
+         question: "How do cannons work in Bloxd Pirates?",
+         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L24-L25)

```diff
-         question: "How do I get a gun?",
-         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
+         question: "Which kits can I pick in Bloxd Pirates?",
+         answer: "There are 26, each with its own items or powers. The Scout can double jump, the Scoundrel can go invisible and the Portalmaster makes portals. You pick one in the lobby and unlock more with Gold or gems."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L27-L28)

```diff
-         question: "How long is a round?",
-         answer: "4 minutes."
+         question: "How do I get Gold in Bloxd Pirates?",
+         answer: "A win is worth 25 Gold. You also get 5 Gold for every spawn block you break and every final kill."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/183.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/183.js#L30-L37)

```diff
-         question: "How many people do you need to play Murder Mystery?",
-         answer: "You need at least 2 to start, and a round can hold up to 12."
-       }, {
-         question: "Can I play Murder Mystery with friends?",
-         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
-       }, {
-         question: "How do I earn gold?",
-         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
+         question: "What maps are in Bloxd Pirates?",
+         answer: "There are 11: Classic, Classic (4 Teams), Scurvy Shore, Cutthroat Cliffs, Treasure Island, Double Trouble, Stowaway Seas, Woesome Waters, Cannon Storm, Scorched Sails and Dynasty Docks."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/184.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/184.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533)

#### 1. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L4)

```diff
-   9194: (pp, ip, cp) => {
+   9439: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L9-L13)

```diff
-       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
-       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
-       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
-       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
-       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
+       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
+       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
+       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
+       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
+       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L15-L16)

```diff
-         question: "What is Bloxd Escape the Forest?",
-         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
+         question: "What is Bloxd Infection?",
+         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L18-L19)

```diff
-         question: "In Escape the Forest, how do you survive 99 nights?",
-         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
+         question: "How does the infection spread in Bloxd Infection?",
+         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L21-L22)

```diff
-         question: "How many players can team up in Escape the Forest?",
-         answer: "Up to 6 in each game, and others can join to spectate."
+         question: "How do humans win?",
+         answer: "Get through all the obstacles and escape before you're infected."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L24-L25)

```diff
-         question: "Where are the lost kids?",
-         answer: "Out in the forest. Level up your fire to find more of them, then go searching. Every kid you find adds to your day count."
+         question: "How do zombies win?",
+         answer: "By infecting every human before they escape."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L27-L28)

```diff
-         question: "What happens if you go down?",
-         answer: "A teammate can revive you with a Revive Splash Potion. You can fire a Call for Help flare too, and the Respawn Pod can bring back players who die."
+         question: "How are points earned?",
+         answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L30-L31)

```diff
-         question: "How do you escape the forest?",
-         answer: "Follow Maverick the wizard's guidance to the frozen forest, collect the portal keystones, open the portal and send the kids home."
+         question: "What kits are in Bloxd Infection?",
+         answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/184.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/184.js#L33-L34)

```diff
-         question: "Is there anything after night 99?",
-         answer: "You've beaten the challenge by then, but how much longer can you survive? Your best number of nights survived shows on your nametag."
+         question: "What's the player limit in Infection?",
+         answer: "18 players per match."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/185.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/185.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L4)

```diff
-   9201: (pp, ip, cp) => {
+   9441: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L9-L13)

```diff
-       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
-       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
-       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
-       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
-       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
+       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
+       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
+       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
+       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L15-L16)

```diff
-         question: "What is Bloxd Containment Breach?",
-         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+         question: "What is Bloxd Murder Mystery?",
+         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L18-L19)

```diff
-         question: "How many players can play Containment Breach?",
-         answer: "Up to 6 on Normal, or up to 4 on Hard."
+         question: "What are the roles in Murder Mystery?",
+         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L21-L22)

```diff
-         question: "Can I play Containment Breach solo?",
-         answer: "Not on your own, sorry. A run needs at least 2 players, so bring a friend or team up with someone in the lobby."
+         question: "Who wins a round of Murder Mystery?",
+         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L24-L25)

```diff
-         question: "What happens when you go down in Containment Breach?",
-         answer: "You become a ghost until a teammate revives you with a splash healing potion. If everyone ends up as a ghost, the run is lost."
+         question: "How do I get a gun?",
+         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L27-L28)

```diff
-         question: "How do I upgrade guns in Containment Breach?",
-         answer: "Go to the Loadout NPC and spend gold and boss parts there. Gold comes from kills, and your squad gets a boss part every time it contains an anomaly."
+         question: "How long is a round?",
+         answer: "4 minutes."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/185.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/185.js#L30-L31)

```diff
-         question: "Can I choose which anomaly I fight?",
-         answer: "Yes. Buy a Locator from the Locator NPC and arm it before you deploy. It shatters after one use."
+         question: "How many people do you need to play Murder Mystery?",
+         answer: "You need at least 2 to start, and a round can hold up to 12."
+       }, {
+         question: "Can I play Murder Mystery with friends?",
+         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
+       }, {
+         question: "How do I earn gold?",
+         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/186.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/186.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L4)

```diff
-   9207: (pp, ip, cp) => {
+   9450: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L9-L13)

```diff
-       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
-       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
-       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
-       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
-       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
+       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
+       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
+       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
+       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L15-L16)

```diff
-         question: "What is Bloxd Horror Hotel?",
-         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+         question: "What is Bloxd Escape the Forest?",
+         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L18-L19)

```diff
-         question: "Does Horror Hotel really have infinite rooms?",
-         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+         question: "In Escape the Forest, how do you survive 99 nights?",
+         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L21-L22)

```diff
-         question: "How do I upgrade my room in Horror Hotel?",
-         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+         question: "How many players can team up in Escape the Forest?",
+         answer: "Up to 6 in each game, and others can join to spectate."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L24-L25)

```diff
-         question: "What is the max room level in Horror Hotel?",
-         answer: "Level 22. Once you hit it, your room is maxed out."
+         question: "Where are the lost kids?",
+         answer: "Out in the forest. Level up your fire to find more of them, then go searching. Every kid you find adds to your day count."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L27-L28)

```diff
-         question: "Can friends visit my hotel room?",
-         answer: "Yes, as long as their room level is high enough. You can also choose whether to allow visitors, editors and PvP."
+         question: "What happens if you go down?",
+         answer: "A teammate can revive you with a Revive Splash Potion. You can fire a Call for Help flare too, and the Respawn Pod can bring back players who die."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/186.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/186.js#L30-L31)

```diff
-         question: "Is Horror Hotel scary?",
-         answer: "A bit! It's spooky, with odd guests, eerie sounds and a skinwalker lurking about. It's creepy rather than gory, and you can explore at your own pace."
+         question: "How do you escape the forest?",
+         answer: "Follow Maverick the wizard's guidance to the frozen forest, collect the portal keystones, open the portal and send the kids home."
+       }, {
+         question: "Is there anything after night 99?",
+         answer: "You've beaten the challenge by then, but how much longer can you survive? Your best number of nights survived shows on your nametag."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/187.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/187.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623)

#### 1. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L4-L7242` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/187.js#L4) · [Before (L4-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/187.js#L4-L7242)

```diff
-   9322: (pp, ip) => {
-     ip.discordURLBuilder = function(pp) {
-       var ip;
-       const cp = (null === (ip = null === window || void 0 === window ? void 0 : window.location) || void 0 === ip ? void 0 : ip.hostname) || "localhost",
-         Op = pp.hostname.split("."),
-         op = !pp.hostname.includes("trycloudflare.com") && !pp.hostname.includes("discordsays.com") && Op.length > 2 ? `/${Op[0]}` : "";
-       return pp.pathname.startsWith("/.proxy") ? `${pp.protocol}//${cp}${op}${pp.pathname}${pp.search}` : `${pp.protocol}//${cp}/.proxy/colyseus${op}${pp.pathname}${pp.search}`
-     }
-   },
-   9314: (pp, ip, cp) => {
-     var Op, op, Ip, Sp, xp = cp(9230),
-       Lp = cp(9318),
-       Yp = cp(9281);
-     Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, ip.Auth = class {
-       constructor(pp) {
-         this.http = pp, this.settings = {
- ... (7223 more removed lines; see GitHub link above)
+   9453: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L7244-L7784` → after: `L6-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L6-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/187.js#L6-L32) · [Before (L7244-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/187.js#L7244-L7784)

```diff
-       __addDisposableResource: () => Np,
-       __assign: () => Ip,
-       __asyncDelegator: () => Rp,
-       __asyncGenerator: () => mp,
-       __asyncValues: () => qp,
-       __await: () => kp,
-       __awaiter: () => yp,
-       __classPrivateFieldGet: () => Qp,
-       __classPrivateFieldIn: () => Bp,
-       __classPrivateFieldSet: () => Jp,
-       __createBinding: () => wp,
-       __decorate: () => xp,
-       __disposeResources: () => fp,
-       __esDecorate: () => Yp,
-       __exportStar: () => vp,
-       __extends: () => op,
- ... (525 more removed lines; see GitHub link above)
+       pageBody: () => wQ
+     });
+     const wQ = {
+       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
+       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
+       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
+       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
+       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       faq: [{
+         question: "What is Bloxd Containment Breach?",
+         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+       }, {
+         question: "How many players can play Containment Breach?",
+         answer: "Up to 6 on Normal, or up to 4 on Hard."
+       }, {
+         question: "Can I play Containment Breach solo?",
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/188.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/188.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/188.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/188.js#L4-L7)

```diff
-   9436: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => op,
-       h: () => Ip
+   9458: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       pageBody: () => wQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L9-L1367` → after: `L8-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/188.js#L8-L33) · [Before (L9-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/188.js#L9-L1367)

```diff
-     var Op = cp(9385);
-     const op = "Air",
-       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27343: pp => {
-     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33475: pp => {
-     pp.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33477: pp => {
-     pp.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27351: pp => {
-     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1343 more removed lines; see GitHub link above)
+     const wQ = {
+       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
+       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
+       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
+       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
+       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       faq: [{
+         question: "What is Bloxd Horror Hotel?",
+         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+       }, {
+         question: "Does Horror Hotel really have infinite rooms?",
+         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+       }, {
+         question: "How do I upgrade my room in Horror Hotel?",
+         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+       }, {
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/189.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/189.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L4-L5` → after: `L4-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L4-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L4-L304) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L4-L5)

```diff
-   37951: (pp, ip, cp) => {
-     var Op = cp(37956);
+   9562: (QQ, WQ) => {
+     WQ.discordURLBuilder = function(QQ) {
+       var WQ;
+       const XQ = (null === (WQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === WQ ? void 0 : WQ.hostname) || "localhost",
+         wQ = QQ.hostname.split("."),
+         qQ = !QQ.hostname.includes("trycloudflare.com") && !QQ.hostname.includes("discordsays.com") && wQ.length > 2 ? `/${wQ[0]}` : "";
+       return QQ.pathname.startsWith("/.proxy") ? `${QQ.protocol}//${XQ}${qQ}${QQ.pathname}${QQ.search}` : `${QQ.protocol}//${XQ}/.proxy/colyseus${qQ}${QQ.pathname}${QQ.search}`
+     }
+   },
+   9552: (QQ, WQ, XQ) => {
+     var wQ, qQ, TQ, zQ, sQ = XQ(9476),
+       FQ = XQ(9554),
+       PQ = XQ(9528);
+     wQ = new WeakMap, qQ = new WeakMap, TQ = new WeakMap, zQ = new WeakMap, WQ.Auth = class {
+       constructor(QQ) {
+         this.http = QQ, this.settings = {
+ ... (285 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L8-L10` → after: `L307-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L307-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L307-L354) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L8-L10)

```diff
-       for (var ip, cp, op = 0, Ip = pp.length, Sp = 0; Sp < pp.length;) {
-         for (ip = pp[Sp], cp = 0; Sp < Ip && pp[Sp] === ip;) ++Sp, ++cp;
-         op += Op.log2(cp) / 7 | 0, op += Op.log2(ip >>> 0) / 7 | 0, op += 2
+       var WQ = Object.create(null);
+       return QQ && Object.keys(QQ).forEach((function(XQ) {
+         if ("default" !== XQ) {
+           var wQ = Object.getOwnPropertyDescriptor(QQ, XQ);
+           Object.defineProperty(WQ, XQ, wQ.get ? wQ : {
+             enumerable: !0,
+             get: function() {
+               return QQ[XQ]
+             }
+           })
+         }
+       })), WQ.default = QQ, Object.freeze(WQ)
+     }
+     var TQ = qQ(XQ(9548));
+     WQ.HTTP = class {
+       constructor(QQ) {
+ ... (32 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L14-L22` → after: `L357-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L357-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L357-L377) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L14-L22)

```diff
-     ip.size = op, ip.encode = function(pp, ip) {
-       ip || (ip = new Uint8Array(op(pp)));
-       for (var cp, Op, Ip = 0, Sp = ip.length, xp = 0; xp < pp.length;) {
-         for (cp = pp[xp], Op = 0; xp < pp.length && pp[xp] === cp;) ++xp, ++Op;
-         for (; Ip < Sp && Op >= 128;) ip[Ip++] = 128 + (127 & Op), Op >>>= 7;
-         if (Ip >= Sp) throw new Error("RLE buffer overflow");
-         for (ip[Ip++] = Op, cp >>>= 0; Ip < Sp && cp >= 128;) ip[Ip++] = 128 + (127 & cp), cp >>>= 7;
-         if (Ip >= Sp) throw new Error("RLE buffer overflow");
-         ip[Ip++] = cp
+   },
+   9516: (QQ, WQ) => {
+     var XQ, wQ;
+     WQ.Protocol = void 0, (XQ = WQ.Protocol || (WQ.Protocol = {}))[XQ.HANDSHAKE = 9] = "HANDSHAKE", XQ[XQ.JOIN_ROOM = 10] = "JOIN_ROOM", XQ[XQ.ERROR = 11] = "ERROR", XQ[XQ.LEAVE_ROOM = 12] = "LEAVE_ROOM", XQ[XQ.ROOM_DATA = 13] = "ROOM_DATA", XQ[XQ.ROOM_STATE = 14] = "ROOM_STATE", … [truncated]
+   },
+   9484: (QQ, WQ, XQ) => {
+     var wQ = XQ(9491),
+       qQ = XQ(9516),
+       TQ = XQ(9524),
+       zQ = XQ(9528),
+       sQ = XQ(9534),
+       FQ = XQ(9499),
+       PQ = XQ(9536),
+       gQ = XQ(9482),
+       JQ = XQ(9541);
+     class rQ {
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L24-L32` → after: `L379-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L379-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L379-L419) · [Before (L24-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L24-L32)

```diff
-       return ip
-     }, ip.decode = function(pp, ip) {
-       for (var cp, Op, op, Ip, Sp = ip.length, xp = pp.length, Lp = 0, Yp = 0; Yp < xp;) {
-         for (cp = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) cp += (127 & pp[Yp++]) << Op, Op += 7;
-         if (cp += pp[Yp++] << Op, Yp >= xp) throw new Error("RLE buffer underrun");
-         if (Lp + cp > Sp) throw new Error("Chunk buffer overflow");
-         for (op = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) op += (127 & pp[Yp++]) << Op, Op += 7;
-         if (Yp >= xp) throw new Error("RLE buffer underrun");
-         for (op += pp[Yp++] << Op, Ip = 0; Ip < cp; ++Ip) ip[Lp++] = op
+       connect(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
+           qQ = arguments.length > 3 ? arguments[3] : void 0,
+           TQ = arguments.length > 4 ? arguments[4] : void 0;
+         const zQ = new wQ.Connection(qQ.protocol);
+         if (XQ.connection = zQ, zQ.events.onmessage = rQ.prototype.onMessageCallback.bind(XQ), zQ.events.onclose = function(QQ) {
+             var wQ;
+             if (!XQ.hasJoined) return null === (wQ = console.warn) || void 0 === wQ || wQ.call(console, `Room connection was closed unexpectedly (${QQ.code}): ${QQ.reason}`), void XQ.onError.invoke(QQ.code, QQ.reason);
+             QQ.code === gQ.CloseCode.DEVMODE_RESTART && WQ ? WQ() : (XQ.mV.invoke(QQ.code, QQ.reason), XQ.destroy())
+           }, zQ.events.onerror = function(QQ) {
+             var WQ;
+             null === (WQ = console.warn) || void 0 === WQ || WQ.call(console, `Room, onError (${QQ.code}): ${QQ.reason}`), XQ.onError.invoke(QQ.code, QQ.reason)
+           }, "h3" === qQ.protocol) {
+           const WQ = new URL(QQ);
+           zQ.connect(WQ.origin, qQ)
+         } else zQ.connect(QQ, TQ)
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L37-L88` → after: `L694-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L694-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L694-L845) · [Before (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L37-L88)

```diff
-   37956: (pp, ip) => {
-     function cp(pp) {
-       var ip = 32;
-       return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
-     }
-     ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
-       return (pp > 0) - (pp < 0)
-     }, ip.abs = function(pp) {
-       var ip = pp >> 31;
-       return (pp ^ ip) - ip
-     }, ip.min = function(pp, ip) {
-       return ip ^ (pp ^ ip) & -(pp < ip)
-     }, ip.max = function(pp, ip) {
-       return pp ^ (pp ^ ip) & -(pp < ip)
-     }, ip.isPow2 = function(pp) {
-       return !(pp & pp - 1) && !!pp
- ... (36 more removed lines; see GitHub link above)
+   9497: (QQ, WQ, XQ) => {
+     var wQ = XQ(9476),
+       qQ = XQ(9499);
+     WQ.H3TransportTransport = class {
+       constructor(QQ) {
+         this.events = QQ, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
+       }
+       connect(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const XQ = WQ.fingerprint && {
+           serverCertificateHashes: [{
+             algorithm: "sha-256",
+             value: new Uint8Array(WQ.fingerprint).buffer
+           }]
+         } || void 0;
+         this.wt = new WebTransport(QQ, XQ), this.wt.ready.then((QQ => {
+ ... (136 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L91` → after: `L848-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L848-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L848-L880) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L91)

```diff
-   40009: (pp, ip, cp) => {
+   9513: QQ => {
+     QQ.exports = function() {
+       throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
+     }
+   },
+   9548: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       WQ.headers = QQ.headers || {}, WQ.statusMessage = QQ.statusText, WQ.statusCode = QQ.status, WQ.data = QQ.response
+     }
+ 
+     function qQ(QQ, WQ, XQ) {
+       return new Promise((function(qQ, TQ) {
+         XQ = XQ || {};
+         var zQ, sQ, FQ, PQ = new XMLHttpRequest,
+           gQ = XQ.body,
+           JQ = XQ.headers || {};
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L93-L95` → after: `L882-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L882-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L882-L887) · [Before (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L93-L95)

```diff
-       emptyColumnHeight: () => dp,
-       loadHeatmapSchematic: () => ep,
-       readSchematicBlocks: () => jp
+       del: () => FQ,
+       get: () => TQ,
+       patch: () => sQ,
+       post: () => zQ,
+       put: () => PQ,
+       send: () => qQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L97-L168` → after: `L889-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L889-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L889-L935) · [Before (L97-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L97-L168)

```diff
-     var Op = cp(3844),
-       op = cp.n(Op),
-       Ip = cp(3824),
-       Sp = cp(37951),
-       xp = cp(195),
-       Lp = cp(9338);
-     const Yp = [{
-         name: "x",
-         type: "int"
-       }, {
-         name: "y",
-         type: "int"
-       }, {
-         name: "z",
-         type: "int"
-       }],
- ... (56 more removed lines; see GitHub link above)
+     var TQ = qQ.bind(qQ, "GET"),
+       zQ = qQ.bind(qQ, "POST"),
+       sQ = qQ.bind(qQ, "PATCH"),
+       FQ = qQ.bind(qQ, "DELETE"),
+       PQ = qQ.bind(qQ, "PUT")
+   },
+   9541: (QQ, WQ, XQ) => {
+     var wQ, qQ, TQ;
+     XQ.r(WQ), XQ.d(WQ, {
+       ALWAYS: () => YW,
+       C1: () => UQ,
+       DECIMAL_FIT: () => ZW,
+       DECIMAL_ROUND: () => NW,
+       Decoder: () => FW,
+       Encoder: () => nW,
+       FLOAT32_OPTIONS: () => IW,
+ ... (31 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L170-L196` → after: `L937-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L937-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L937-L1003) · [Before (L170-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L170-L196)

```diff
-         Water: [63, 118, 228],
-         Lava: [232, 110, 30]
-       },
-       wp = [150, 150, 150],
-       vp = 16,
-       tp = 4096,
-       Hp = xp.g.Qy,
-       dp = -2147483648;
-     async function ep(pp) {
-       const ip = await jp(new Uint8Array(await pp.arrayBuffer()), await async function() {
-         const {
-           averageColors: pp
-         } = await cp.e(207).then((() => cp(34510))), ip = new Map;
-         return cp => {
-           var Op, op, Ip, Sp, xp;
-           const Yp = ip.get(cp);
- ... (11 more removed lines; see GitHub link above)
+         useRecords: !1,
+         mapsAsObjects: !0
+       };
+     class GQ {}
+     const UQ = new GQ;
+     UQ.name = "MessagePack 0xC1";
+     var bQ, vQ, dQ, HQ = !1,
+       aQ = 2;
+     try {
+       new Function("")
+     } catch (wX) {
+       aQ = 1 / 0
+     }
+     class lQ {
+       constructor(QQ) {
+         QQ && (!1 === QQ.useRecords && void 0 === QQ.mapsAsObjects && (QQ.mapsAsObjects = !0), QQ.sequential && !1 !== QQ.trusted && (QQ.trusted = !0, QQ.structures || 0 == QQ.useRecords || (QQ.structures = [], QQ.maxSharedStructures || (QQ.maxSharedStructures = 0))), QQ.structur … [truncated]
+ ... (51 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L199-L248` → after: `L1006-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1006-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L1006-L1050) · [Before (L199-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L199-L248)

```diff
-     async function jp(pp, ip) {
-       var cp;
-       if (pp.byteLength < 4) throw new Error("The file is too short to be a schematic.");
-       const Op = new DataView(pp.buffer, pp.byteOffset, pp.byteLength).getUint32(0, !0);
-       if (Op > yp) throw new Error("The file isn't a schematic this version of Bloxd can read.");
-       const op = (Op >= Wp ? Pp : Ap).decode(Ip.my.from(pp.subarray(4)), 0).value;
-       if (!op) throw new Error("The file isn't a schematic.");
-       if (0 === op.chunkData.length) throw new Error("The schematic has no blocks in it.");
-       const xp = null !== (cp = op.pasteOffset) && void 0 !== cp ? cp : {
-           x: 0,
-           y: 0,
-           z: 0
-         },
-         Lp = [xp.x, xp.y, xp.z].map((pp => Math.floor(pp / Hp))),
-         Yp = op.chunkData.map((pp => ({
-           x: pp.x + Lp[0],
- ... (34 more removed lines; see GitHub link above)
+ 
+     function hQ(QQ) {
+       try {
+         if (!BQ.trusted && !HQ) {
+           let QQ = FQ.sharedLength || 0;
+           QQ < FQ.length && (FQ.length = QQ)
+         }
+         let WQ;
+         if (BQ.randomAccessStructure && qQ[zQ] < 64 && qQ[zQ] >= 32 && bQ ? (WQ = bQ(qQ, zQ, TQ, BQ), qQ = null, QQ && QQ.lazy || !WQ || (WQ = WQ.toJSON()), zQ = TQ) : WQ = cQ(), gQ && (zQ = gQ.postBundlePosition, gQ = null), HQ && (FQ.restoreStructures = null), zQ == TQ) FQ && F … [truncated]
+         else {
+           if (zQ > TQ) throw new Error("Unexpected end of MessagePack data");
+           if (!HQ) {
+             let QQ;
+             try {
+               QQ = JSON.stringify(WQ, ((QQ, WQ) => "bigint" === typeof WQ ? `${WQ}n` : WQ)).slice(0, 100)
+             } catch (wX) {
+ ... (29 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L250-L271` → after: `L1052-L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1052-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L1052-L1219) · [Before (L250-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L250-L271)

```diff
-               const Lp = pp[Up(Ip, op, Sp)];
-               if (0 === Lp) continue;
-               const Yp = cp[0] + Ip,
-                 Dp = cp[1] + op,
-                 Ap = cp[2] + Sp,
-                 Pp = ip(Lp);
-               if (null === Pp) continue;
-               const Wp = Sp * Hp + Ip;
-               Dp > xp.heights[Wp] && (xp.heights[Wp] = Dp, xp.colours.set(Pp, 3 * Wp));
-               !kp(Lp) && (kp(Op(Ip + 1, op, Sp)) || kp(Op(Ip - 1, op, Sp)) || kp(Op(Ip, op + 1, Sp)) || kp(Op(Ip, op - 1, Sp)) || kp(Op(Ip, op, Sp + 1)) || kp(Op(Ip, op, Sp - 1))) && (ep.push(Yp, Dp, Ap), jp.push(Pp[0], Pp[1], Pp[2]))
-             }
-         Ip % vp === vp - 1 && await Rp()
-       }
-       if (0 === ep.length) throw new Error("The schematic has no blocks in it.");
-       return {
-         name: op.name,
- ... (6 more removed lines; see GitHub link above)
+               let QQ = mQ();
+               "__proto__" === QQ && (QQ = "__proto_"), WQ[QQ] = cQ()
+             }
+             return WQ
+           } {
+             let WQ = new Map;
+             for (let XQ = 0; XQ < QQ; XQ++) WQ.set(cQ(), cQ());
+             return WQ
+           }
+         } {
+           QQ -= 144;
+           let WQ = new Array(QQ);
+           for (let XQ = 0; XQ < QQ; XQ++) WQ[XQ] = cQ();
+           return BQ.freezeData ? Object.freeze(WQ) : WQ
+         }
+       }
+ ... (152 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L276-L278` → after: `L1225-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L1225-L1227) · [Before (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L276-L278)

```diff
-       if (0 === pp) return !0;
-       const ip = Lp.e[pp];
-       return void 0 === ip || ip.tW || ip.transTex || !1 === ip.solid
+       let WQ = new Array(QQ);
+       for (let XQ = 0; XQ < QQ; XQ++) WQ[XQ] = cQ();
+       return BQ.freezeData ? Object.freeze(WQ) : WQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L282-L289` → after: `L1231-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1231-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L1231-L1333) · [Before (L282-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L282-L289)

```diff
-       let ip = 1 / 0,
-         cp = -1 / 0,
-         Op = 1 / 0,
-         op = -1 / 0;
-       for (const {
-           chunkX: yp,
-           chunkZ: Up,
-           heights: wp
+       if (BQ.mapsAsObjects) {
+         let WQ = {};
+         for (let XQ = 0; XQ < QQ; XQ++) {
+           let QQ = mQ();
+           "__proto__" === QQ && (QQ = "__proto_"), WQ[QQ] = cQ()
+         }
+         return WQ
+       } {
+         let WQ = new Map;
+         for (let XQ = 0; XQ < QQ; XQ++) WQ.set(cQ(), cQ());
+         return WQ
+       }
+     }
+     var nQ = String.fromCharCode;
+ 
+     function xQ(QQ) {
+ ... (87 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L330-L332` → after: `L1339-L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1339-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/189.js#L1339-L7784) · [Before (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/189.js#L330-L332)

```diff
-       return new Promise((pp => {
-         setTimeout(pp, 0)
-       }))
+       let QQ, WQ = qQ[zQ++];
+       if (WQ < 192) QQ = WQ - 160;
+       else switch (WQ) {
+         case 217:
+           QQ = qQ[zQ++];
+           break;
+         case 218:
+           QQ = rQ.getUint16(zQ), zQ += 2;
+           break;
+         case 219:
+           QQ = rQ.getUint32(zQ), zQ += 4;
+           break;
+         default:
+           throw new Error("Expected string")
+       }
+       return tQ(QQ)
+ ... (6430 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/190.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/190.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/190.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/190.js#L4-L13)

```diff
-   40670: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       FORMER_BLOCK_IMAGE_NAMES: () => Op.e,
-       textureAnimationData: () => op.l,
-       textureNameToIndex: () => op.p
-     });
-     var Op = cp(38954),
-       op = cp(9338)
-   },
-   9436: (pp, ip, cp) => {
+   9679: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L15-L16` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/190.js#L6-L7) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/190.js#L15-L16)

```diff
-       d: () => op,
-       h: () => Ip
+       b: () => qQ,
+       c: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L18` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/190.js#L9) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/190.js#L18)

```diff
-     var Op = cp(9385);
+     var wQ = XQ(9634);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L20` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/190.js#L11) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/190.js#L20)

```diff
-       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L22-L32` → after: `L13-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L13-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/190.js#L13-L1367) · [Before (L22-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/190.js#L22-L32)

```diff
-   38954: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op,
-       f: () => op
-     });
-     const Op = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((pp => [pp, `${pp}_block`])));
- 
-     function op(pp) {
-       var ip;
-       return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : pp
-     }
+   27574: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   33540: QQ => {
+     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   33545: QQ => {
+     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   27578: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   27584: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAHHUlEQVR4nO3dP2vkRhgGcDX7YVxsYzfTuDl3Smdz1ZKwgnQGE8xyMTHxBULOcezjmgSTS2PwQbKBI80Rc+Ai5AO4MiFNiu2uSLmFmzBBy84yO9Y7mpFmpJHmKZ7Ca2lW0vx2RtLoTzJ+up+IDDc2a0Uuy2V56ZNdJ2Fb … [truncated]
+   },
+   33548: QQ => {
+ ... (1339 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/191.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/191.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L4-L20` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L4-L5) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L4-L20)

```diff
-   40818: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Lp,
-       f: () => xp,
-       i: () => Sp
-     });
-     var Op = cp(40824),
-       op = cp(4903),
-       Ip = cp(40831);
- 
-     function Sp(pp) {
-       return pp.payloadKind === op.kc.Msgpack ? (0, Op.c)(pp.payload) : void 0
-     }
- 
-     function xp(pp, ip) {
-       if (ip.payloadKind === op.kc.Bytes || ip.payloadKind === op.kc.MsgpackBin) return (0, Ip.b)(pp, ip.payload)
- ... (1 more removed lines; see GitHub link above)
+   38002: (QQ, WQ, XQ) => {
+     var wQ = XQ(38010);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L23-L61` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L8-L10) · [Before (L23-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L23-L61)

```diff
-       return null !== pp && "object" === typeof pp
-     }
-   },
-   40837: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Ap,
-       d: () => Pp,
-       e: () => Wp,
-       h: () => Dp,
-       i: () => wp
-     });
-     var Op = cp(4903),
-       op = cp(40842);
-     const Ip = new Map,
-       Sp = new Set,
-       xp = new Set;
- ... (23 more removed lines; see GitHub link above)
+       for (var WQ, XQ, qQ = 0, TQ = QQ.length, zQ = 0; zQ < QQ.length;) {
+         for (WQ = QQ[zQ], XQ = 0; zQ < TQ && QQ[zQ] === WQ;) ++zQ, ++XQ;
+         qQ += wQ.log2(XQ) / 7 | 0, qQ += wQ.log2(WQ >>> 0) / 7 | 0, qQ += 2
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L64-L71` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L14-L22) · [Before (L64-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L64-L71)

```diff
-     const yp = "A raw message listener threw";
- 
-     function Up(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp;
-       for (const Op of ip) try {
-         Op()
-       } catch (cp) {
-         pp ? (0, op.i)(cp, yp) : console.error(yp, cp)
+     WQ.size = qQ, WQ.encode = function(QQ, WQ) {
+       WQ || (WQ = new Uint8Array(qQ(QQ)));
+       for (var XQ, wQ, TQ = 0, zQ = WQ.length, sQ = 0; sQ < QQ.length;) {
+         for (XQ = QQ[sQ], wQ = 0; sQ < QQ.length && QQ[sQ] === XQ;) ++sQ, ++wQ;
+         for (; TQ < zQ && wQ >= 128;) WQ[TQ++] = 128 + (127 & wQ), wQ >>>= 7;
+         if (TQ >= zQ) throw new Error("RLE buffer overflow");
+         for (WQ[TQ++] = wQ, XQ >>>= 0; TQ < zQ && XQ >= 128;) WQ[TQ++] = 128 + (127 & XQ), XQ >>>= 7;
+         if (TQ >= zQ) throw new Error("RLE buffer overflow");
+         WQ[TQ++] = XQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L73-L90` → after: `L24-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L24-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L24-L32) · [Before (L73-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L73-L90)

```diff
-     }
-     const wp = {
-       fire: function(pp) {
-         if ("connection" === pp.type) {
-           const ip = pp.phase === Op.H.Activated && pp.conn !== Lp && pp.conn > Yp,
-             cp = (pp.phase === Op.H.Left || pp.phase === Op.H.Closed) && pp.conn === Lp;
-           return void(ip || cp ? (Lp = ip ? pp.conn : 0, Up(!0)) : pp.phase === Op.H.Resumed && 0 !== Lp && pp.conn > Yp && (Lp = pp.conn, Up(!0, xp)))
-         }
-         const ip = Ip.get(pp.VD);
-         if (ip && pp.conn === Lp && 0 !== Lp)
-           for (const Op of ip) try {
-             Op(pp)
-           } catch (cp) {
-             (0, op.i)(cp, yp)
-           }
-       },
- ... (2 more removed lines; see GitHub link above)
+       return WQ
+     }, WQ.decode = function(QQ, WQ) {
+       for (var XQ, wQ, qQ, TQ, zQ = WQ.length, sQ = QQ.length, FQ = 0, PQ = 0; PQ < sQ;) {
+         for (XQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) XQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
+         if (XQ += QQ[PQ++] << wQ, PQ >= sQ) throw new Error("RLE buffer underrun");
+         if (FQ + XQ > zQ) throw new Error("Chunk buffer overflow");
+         for (qQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) qQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
+         if (PQ >= sQ) throw new Error("RLE buffer underrun");
+         for (qQ += QQ[PQ++] << wQ, TQ = 0; TQ < XQ; ++TQ) WQ[FQ++] = qQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L94-L126` → after: `L37-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L37-L88) · [Before (L94-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L94-L126)

```diff
-   40806: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Yp,
-       h: () => Lp,
-       k: () => xp
-     });
-     var Op = cp(1284),
-       op = cp(40769);
-     const Ip = new TextDecoder,
-       Sp = new TextEncoder;
- 
-     function xp(pp, ip) {
-       const cp = pp.queries.entityName(ip);
-       if (cp === op.Dc) return;
-       const Sp = pp.memoryData(pp.scratch(), 4 + cp, 4, "entity_name's answer");
-       if (!Sp) return;
- ... (17 more removed lines; see GitHub link above)
+   38010: (QQ, WQ) => {
+     function XQ(QQ) {
+       var WQ = 32;
+       return (QQ &= -QQ) && WQ--, 65535 & QQ && (WQ -= 16), 16711935 & QQ && (WQ -= 8), 252645135 & QQ && (WQ -= 4), 858993459 & QQ && (WQ -= 2), 1431655765 & QQ && (WQ -= 1), WQ
+     }
+     WQ.INT_BITS = 32, WQ.INT_MAX = 2147483647, WQ.INT_MIN = -1 << 31, WQ.sign = function(QQ) {
+       return (QQ > 0) - (QQ < 0)
+     }, WQ.abs = function(QQ) {
+       var WQ = QQ >> 31;
+       return (QQ ^ WQ) - WQ
+     }, WQ.min = function(QQ, WQ) {
+       return WQ ^ (QQ ^ WQ) & -(QQ < WQ)
+     }, WQ.max = function(QQ, WQ) {
+       return QQ ^ (QQ ^ WQ) & -(QQ < WQ)
+     }, WQ.isPow2 = function(QQ) {
+       return !(QQ & QQ - 1) && !!QQ
+ ... (36 more added lines; see GitHub link above)
```
