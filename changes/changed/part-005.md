# Changed — Bundle Modifications Report (Part 005 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `5 / 56` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/136.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/136.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00)

#### 15. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L234` → after: `L367-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L367-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L367-L388) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L234)

```diff
-     function wp() {
+     function PQ(QQ) {
+       let {
+         slotsLeft: WQ,
+         slotsRight: XQ,
+         width: wQ,
+         height: qQ,
+         zoneRight: TQ,
+         rowTop: zQ,
+         besideBottom: PQ,
+         obstacles: gQ
+       } = QQ;
+       const JQ = Math.max(0, Math.floor(XQ - WQ - wQ)),
+         rQ = null === TQ ? 0 : Math.min(JQ, Math.max(0, Math.ceil(TQ + sQ - WQ))),
+         IQ = WQ + rQ - sQ,
+         jQ = WQ + rQ + wQ + sQ,
+         BQ = gQ.filter((QQ => QQ.left < jQ && QQ.right > IQ));
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L236-L294` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L390-L391) · [Before (L236-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L236-L294)

```diff
-         __proto__: null,
-         I55b: {
-           __proto__: null,
-           zRQP: function(pp, ip) {
-             return tp(Error(kp(pp, ip)))
-           },
-           cbpg: function(pp) {
-             return null === Mp(pp)
-           },
-           kLY8: function(pp) {
-             return "string" === typeof Mp(pp)
-           },
-           gK6A: function(pp, ip) {
-             const cp = Mp(ip),
-               Op = "string" === typeof cp ? cp : void 0;
-             var op, Ip = void 0 === (op = Op) || null === op ? 0 : function(pp, ip, cp) {
- ... (43 more removed lines; see GitHub link above)
+         shift: rQ,
+         rise: yQ === PQ ? null : Math.ceil(zQ - yQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L304-L306` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L396) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L304-L306)

```diff
-       Ep === Cp.length && Cp.push(Cp.length + 1);
-       const ip = Ep;
-       return Ep = Cp[ip], Cp[ip] = pp, ip
+       return Array.from(QQ.children).filter((QQ => !QQ.classList.contains("HotBarRow")))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L309-L314` → after: `L399-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L399-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L399-L410) · [Before (L309-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L309-L314)

```diff
-     function Hp(pp, ip) {
-       pp >>>= 0;
-       const cp = jp(),
-         Op = [];
-       for (let op = pp; op < pp + 4 * ip; op += 4) Op.push(Qp(cp.getUint32(op, !0)));
-       return Op
+     function JQ(QQ) {
+       return function(QQ) {
+         const WQ = [],
+           XQ = (QQ, wQ) => {
+             const qQ = QQ.getBoundingClientRect();
+             if (qQ.width > 0 && qQ.height > 0) WQ.push(QQ);
+             else if (wQ < 2)
+               for (const WQ of Array.from(QQ.children)) XQ(WQ, wQ + 1)
+           };
+         for (const wQ of QQ) XQ(wQ, 0);
+         return WQ
+       }(gQ(QQ).flatMap((QQ => QQ.classList.contains("AuraBarWrapper") ? [] : QQ.classList.contains("BottomScreenStatBarList") ? Array.from(QQ.children) : [QQ])))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L317-L318` → after: `L413-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L413-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L413-L418) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L317-L318)

```diff
-     function dp(pp, ip) {
-       return pp >>>= 0, qp().subarray(pp / 1, pp / 1 + ip)
+     function rQ(QQ) {
+       var WQ;
+       const XQ = QQ.getBoundingClientRect();
+       if (0 === XQ.width) return null;
+       const wQ = null === (WQ = QQ.parentElement) || void 0 === WQ ? void 0 : WQ.getBoundingClientRect();
+       return wQ && wQ.width > 0 ? Math.min(XQ.right, wQ.left + wQ.width * IQ) : XQ.right
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L320` → after: `L420-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L420-L423) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L320)

```diff
-     let ep = null;
+     const IQ = .35,
+       jQ = new WeakMap,
+       BQ = ".BottomScreenMessage, [role='status']",
+       yQ = new WeakMap;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L322-L323` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L425-L426) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L322-L323)

```diff
-     function jp() {
-       return null !== ep && ep.buffer === hp.memory.buffer || (ep = new DataView(hp.memory.buffer)), ep
+     function VQ(QQ) {
+       DQ(QQ) && DQ(QQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L326-L333` → after: `L429-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L429-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L429-L476) · [Before (L326-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L326-L333)

```diff
-     function kp(pp, ip) {
-       return function(pp, ip) {
-         Np += ip, Np >= Bp && (Jp = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), Jp.decode(), Np = ip);
-         return Jp.decode(qp().subarray(pp, pp + ip))
-       }(pp >>> 0, ip)
+     function DQ(QQ) {
+       var WQ, XQ, wQ, qQ, TQ, zQ;
+       const sQ = QQ.documentElement.classList;
+       if (!sQ.contains("TouchHotbar") || sQ.contains("TouchHotbarKeysAbove") || sQ.contains("HudMove-inventory") || sQ.contains("HudLocked-inventory") || null === (WQ = QQ.defaultView) || void 0 === WQ || null === (XQ = WQ.matchMedia) || void 0 === XQ || !XQ.call(WQ, pQ).matches) … [truncated]
+       const gQ = QQ.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
+         IQ = null === gQ || void 0 === gQ ? void 0 : gQ.parentElement,
+         VQ = null === gQ || void 0 === gQ ? void 0 : gQ.closest(".BottomMiddleElements"),
+         DQ = null === VQ || void 0 === VQ ? void 0 : VQ.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
+       if (!gQ || !IQ || !VQ || !DQ || VQ.classList.contains("TouchInventoryOpen")) return !1;
+       const GQ = gQ.getBoundingClientRect();
+       if (0 === GQ.width) return !1;
+       const UQ = QQ.querySelector(".JoystickZone"),
+         bQ = DQ.getBoundingClientRect(),
+         vQ = IQ.getBoundingClientRect().top,
+         dQ = null === (wQ = VQ.querySelector(":scope > .AuraBarWrapper")) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect(),
+         HQ = JQ(VQ),
+ ... (32 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L335-L336` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L478) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L335-L336)

```diff
-     let mp = null;
-     let Rp = null;
+     const pQ = "(orientation: landscape) and (max-height: 500px)";
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L338-L339` → after: `L480-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L480-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L480-L519) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L338-L339)

```diff
-     function qp() {
-       return null !== Rp && 0 !== Rp.byteLength || (Rp = new Uint8Array(hp.memory.buffer)), Rp
+     function GQ(QQ, WQ, XQ) {
+       (0, wQ.useLayoutEffect)((() => {
+         var WQ;
+         const wQ = null === (WQ = QQ.current) || void 0 === WQ ? void 0 : WQ.closest(".BottomMiddleElements");
+         if (!wQ || XQ) return;
+         const sQ = new ResizeObserver((() => {
+             IQ(!1)
+           })),
+           FQ = () => {
+             sQ.disconnect();
+             const QQ = document.querySelector(".JoystickZone");
+             for (const WQ of [QQ, wQ, wQ.querySelector(".HotBarGameItemsContainer"), ...JQ(wQ)]) WQ && sQ.observe(WQ)
+           };
+         let PQ = null,
+           rQ = !1;
+         const IQ = QQ => {
+ ... (24 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L343` → after: `L540-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L540-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L540-L572) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L343)

```diff
-       return Cp[pp]
+       let {
+         show: WQ,
+         onClose: XQ
+       } = QQ;
+       const {
+         requestedGameNameWithVariation: wQ,
+         lobbyName: qQ,
+         shownLobbyName: TQ
+       } = (0, gQ.e)("connectedGame"), FQ = (0, sQ.c)(wQ, qQ, !1);
+       return PQ.featureFlags.canUseInviteLinks && (0, rQ.jsx)(zQ.b, {
+         show: WQ,
+         close: XQ,
+         padShowsHud: !0,
+         togglePointerLock: !1,
+         globallyUniqueKey: "InviteLinkBox",
+         doGameplayStartStopOnShow: !0,
+ ... (17 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L349-L351` → after: `L575-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L575-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L575-L602) · [Before (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L349-L351)

```diff
-     function Xp(pp, ip) {
-       const cp = ip(4 * pp.length, 4) >>> 0;
-       return (null !== mp && 0 !== mp.byteLength || (mp = new Uint32Array(hp.memory.buffer)), mp).set(pp, cp / 4), ap = pp.length, cp
+     function jQ() {
+       var QQ;
+       const {
+         t: WQ
+       } = (0, FQ.C)(), XQ = null !== (QQ = BQ(PQ.featureFlags.canUseInviteLinks)) && void 0 !== QQ ? QQ : "Loading Link...", [TQ, zQ] = (0, qQ.useState)(0), [sQ, gQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0);
+       return (0, qQ.useEffect)((() => {
+         const QQ = setTimeout((() => {
+           gQ()
+         }), 1100);
+         return () => {
+           clearTimeout(QQ)
+         }
+       }), [TQ]), PQ.featureFlags.canUseInviteLinks && (0, rQ.jsxs)("div", {
+         className: "InviteLinkInnerWrapper",
+         children: [(0, rQ.jsx)("div", {
+           className: "InviteLinkInner",
+ ... (12 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L354-L358` → after: `L605-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L605-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L605-L617) · [Before (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L354-L358)

```diff
-     function lp(pp, ip) {
-       const cp = ip(4 * pp.length, 4) >>> 0,
-         Op = jp();
-       for (let op = 0; op < pp.length; op++) Op.setUint32(cp + 4 * op, tp(pp[op]), !0);
-       return ap = pp.length, cp
+     function BQ(QQ) {
+       const [WQ, XQ] = (0, qQ.useState)(null);
+       return (0, qQ.useEffect)((() => {
+         if (!QQ) return;
+         let WQ = !0;
+         return (0, TQ.x)().then((QQ => {
+           WQ && XQ(QQ)
+         })).catch((QQ => {
+           console.error("Failed to get invite link:", QQ)
+         })), () => {
+           WQ = !1
+         }
+       }), [QQ]), WQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L362-L365` → after: `L631-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L631-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L631-L635) · [Before (L362-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L362-L365)

```diff
-       const ip = Mp(pp);
-       return function(pp) {
-         pp < 1028 || (Cp[pp] = Ep, Ep = pp)
-       }(pp), ip
+       const WQ = Math.floor(QQ / 3600),
+         XQ = Math.floor(QQ % 3600 / 60),
+         wQ = Math.floor(QQ % 60),
+         qQ = `${XQ.toString().padStart(2,"0")}:${wQ.toString().padStart(2,"0")}`;
+       return WQ > 0 ? `${WQ}:${qQ}` : qQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L367-L369` → after: `L637-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L637-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L637-L661) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L367-L369)

```diff
-     let Jp = new TextDecoder("utf-8", {
-       ignoreBOM: !0,
-       fatal: !0
+     const PQ = (0, wQ.memo)((function(QQ) {
+       let {
+         className: WQ
+       } = QQ;
+       const {
+         recording: XQ,
+         seconds: wQ
+       } = (0, zQ.e)("replayRecorder");
+       return XQ ? (0, sQ.jsxs)("div", {
+         className: TQ()("RecordingIndicator", WQ),
+         children: [(0, sQ.jsx)("span", {
+           className: "RecordingIndicatorDot"
+         }), (0, sQ.jsx)("span", {
+           className: "RecordingIndicatorLabel",
+           children: "REC"
+         }), (0, sQ.jsx)("span", {
+ ... (9 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L371-L380` → after: `L663-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L663-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L663-L680) · [Before (L371-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L371-L380)

```diff
-     Jp.decode();
-     const Bp = 2146435072;
-     let Np = 0;
-     const Tp = new TextEncoder;
-     "encodeInto" in Tp || (Tp.encodeInto = function(pp, ip) {
-       const cp = Tp.encode(pp);
-       return ip.set(cp), {
-         read: pp.length,
-         written: cp.length
-       }
+     var wQ = XQ(4859),
+       qQ = XQ(4863);
+ 
+     function TQ(QQ) {
+       let {
+         children: WQ,
+         showing: XQ,
+         globallyUniqueKey: TQ,
+         alwaysMountChildren: zQ = !1,
+         doGameplayStartStopOnShow: sQ = !0,
+         keepsMovement: FQ = !1
+       } = QQ;
+       return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
+     }
+   },
+   6960: (QQ, WQ, XQ) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L382` → after: `L682-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L682-L683) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L382)

```diff
-     let fp, bp, hp, ap = 0;
+     var wQ = XQ(61),
+       qQ = XQ(43);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L385` → after: `L686-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L686-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L686-L690) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L385)

```diff
-       return bp = pp, hp = pp.exports, fp = ip, ep = null, mp = null, Rp = null, hp.MKfo(), hp
+       var XQ;
+       const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
+       return [TQ, WQ => {
+         qQ.i.setItem(QQ, WQ), zQ(WQ)
+       }]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L389-L395` → after: `L718-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L718-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L718-L721) · [Before (L389-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L389-L395)

```diff
-       if (void 0 !== hp) return hp;
-       void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
-         module: pp
-       } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const ip = wp();
-       pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
-       return np(new WebAssembly.Instance(pp, ip), pp)
+       return {
+         x: (QQ.left + QQ.right) / 2,
+         y: (QQ.top + QQ.bottom) / 2
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L397-L434` → after: `L723-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L723-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L723-L730) · [Before (L397-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L397-L434)

```diff
-     async function gp(pp) {
-       if (void 0 !== hp) return hp;
-       void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
-         module_or_path: pp
-       } = pp) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const ip = wp();
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
- ... (22 more removed lines; see GitHub link above)
+ 
+     function TQ(QQ) {
+       return 0 === QQ.length ? null : QQ.reduce(((QQ, WQ) => ({
+         left: Math.min(QQ.left, WQ.left),
+         top: Math.min(QQ.top, WQ.top),
+         right: Math.max(QQ.right, WQ.right),
+         bottom: Math.max(QQ.bottom, WQ.bottom)
+       })))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L436-L443` → after: `L732-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L732-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L732-L740) · [Before (L436-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L436-L443)

```diff
-     var Gp = cp(2970),
-       rp = cp(6762);
-     class Zp extends Error {
-       stage;
-       constructor(pp, ip) {
-         super((0, Gp.B)(pp, ip), {
-           cause: ip
-         }), this.name = "BloxdShaderPackWasmLoadError", this.stage = pp
+ 
+     function zQ(QQ, WQ) {
+       const XQ = Math.max(0, (WQ - (QQ.right - QQ.left)) / 2),
+         wQ = Math.max(0, (WQ - (QQ.bottom - QQ.top)) / 2);
+       return {
+         left: QQ.left - XQ,
+         top: QQ.top - wQ,
+         right: QQ.right + XQ,
+         bottom: QQ.bottom + wQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L449-L455` → after: `L744-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L744-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L744-L753) · [Before (L449-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L449-L455)

```diff
-     function Kp() {
-       return zp ? Promise.resolve(zp) : (sp || (sp = async function() {
-         let pp;
-         try {
-           pp = await (0, Gp.C)(new cp.U(cp(6770)), (0, rp.e)("bloxd_wasm_shader_pack"))
-         } catch (ip) {
-           throw new Zp((0, Gp.J)(ip), ip)
+     function sQ(QQ, WQ) {
+       return WQ.x >= QQ.left && WQ.x <= QQ.right && WQ.y >= QQ.top && WQ.y <= QQ.bottom
+     }
+ 
+     function FQ(QQ, WQ, XQ) {
+       let wQ = null,
+         TQ = 1 / 0;
+       for (const {
+           id: qQ,
+           box: zQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L457-L462` → after: `L755-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L755-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L755-L763) · [Before (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L457-L462)

```diff
-         try {
-           await gp({
-             module_or_path: pp
-           })
-         } catch (ip) {
-           throw new Zp("instantiate", ip)
+         of WQ) {
+         const WQ = (zQ.right - zQ.left) * (zQ.bottom - zQ.top);
+         sQ(zQ, QQ) && WQ < TQ && (TQ = WQ, wQ = qQ)
+       }
+       if (null !== wQ) return wQ;
+       let FQ = 1 / 0;
+       for (const {
+           id: PQ,
+           box: gQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L464-L467` → after: `L765-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L765-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L765-L771) · [Before (L464-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L464-L467)

```diff
-         return zp = Op, zp
-       }(), sp.then(void 0, (() => {
-         sp = null
-       }))), sp)
+         of WQ) {
+         if (!sQ(zQ(gQ, XQ), QQ)) continue;
+         const WQ = qQ(gQ),
+           TQ = Math.hypot(QQ.x - WQ.x, QQ.y - WQ.y);
+         TQ < FQ && (FQ = TQ, wQ = PQ)
+       }
+       return wQ
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L471-L478` → after: `L774-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L774-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L774-L780) · [Before (L471-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L471-L478)

```diff
-     function ii(pp) {
-       let [ip, cp, Op, op] = pp;
-       const Ip = {
-         file: ip,
-         line: cp,
-         message: Op
-       };
-       return op && (Ip.variants = op.map(Vp.m)), Ip
+     function PQ(QQ, WQ, XQ) {
+       return {
+         left: XQ.left,
+         top: XQ.top,
+         right: QQ - XQ.right,
+         bottom: WQ - XQ.bottom
+       }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L481-L482` → after: `L783-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L783-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L783-L788) · [Before (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L481-L482)

```diff
-     function ci(pp) {
-       return JSON.parse(pp).map(ii)
+     function gQ(QQ, WQ, XQ, wQ) {
+       const qQ = (QQ, WQ, XQ) => Math.max(Math.min(WQ, 0), Math.min(Math.max(XQ, 0), QQ));
+       return {
+         x: qQ(WQ, wQ.left - QQ.left, wQ.right - QQ.right),
+         y: qQ(XQ, wQ.top - QQ.top, wQ.bottom - QQ.bottom)
+       }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L485-L487` → after: `L791-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L791-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L791-L798) · [Before (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L485-L487)

```diff
-     function Oi(pp, ip) {
-       if (!Number.isInteger(pp) || pp < 0 || pp > 4294967295) throw new Error(`${ip} ${pp} is not a whole number from 0 to 4294967295`);
-       return pp
+     function JQ(QQ, WQ, XQ, wQ, qQ) {
+       const TQ = QQ.dx * wQ + WQ,
+         zQ = QQ.dy * qQ + XQ,
+         sQ = QQ => Math.max(-1, Math.min(1, QQ));
+       return {
+         dx: sQ(TQ / wQ),
+         dy: sQ(zQ / qQ)
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L490-L491` → after: `L801-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L801-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L801-L806) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L490-L491)

```diff
-     function oi(pp) {
-       return [pp.named.map((pp => pp.name)), Uint32Array.from(pp.named, (pp => Oi(pp.id, "Texture ID")))]
+     function rQ(QQ, WQ, XQ, wQ) {
+       return WQ <= 0 || XQ <= 0 ? 1 : Math.max(.05, Math.min(1, QQ / WQ, wQ / XQ))
+     }
+ 
+     function IQ(QQ, WQ, XQ) {
+       return Math.min(QQ.right, WQ.right) - Math.max(QQ.left, WQ.left) > XQ && Math.min(QQ.bottom, WQ.bottom) - Math.max(QQ.top, WQ.top) > XQ
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L498-L502` → after: `L810-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L810-L813) · [Before (L498-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L498-L502)

```diff
-       if (xi.has(pp)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
-       try {
-         return ip()
-       } catch (cp) {
-         throw cp instanceof WebAssembly.RuntimeError && xi.add(pp), cp
+       const XQ = (QQ, WQ, XQ, wQ) => WQ - QQ > wQ - XQ ? XQ - QQ > WQ - wQ ? wQ - WQ : XQ - QQ : QQ < XQ ? XQ - QQ : WQ > wQ ? wQ - WQ : 0;
+       return {
+         x: XQ(QQ.left, QQ.right, WQ.left, WQ.right),
+         y: XQ(QQ.top, QQ.bottom, WQ.top, WQ.bottom)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L507-L566` → after: `L863-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L863-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L863-L914) · [Before (L507-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L507-L566)

```diff
-       let ip = Si.get(pp);
-       if (!ip) {
-         let cp, Op;
-         ip = {
-           ipp: (ip, cp) => Li(pp, (() => function(pp, ip, cp) {
-             const Op = pp.ipp(ip.map((pp => pp.path)), ip.map((pp => pp.source)), ...oi(cp), cp.aliases.map((pp => pp.name)), cp.aliases.map((pp => pp.texture)), cp.aliases.map((pp => pp.kind)));
-             let op = !1;
-             try {
-               const pp = Op.validationModuleCodes,
-                 ip = Array.from(Op.validationModuleKeys, ((ip, cp) => ({
-                   key: (0, Vp.m)(ip),
-                   code: pp[cp]
-                 }))),
-                 cp = {
-                   errors: ci(Op.pIp),
-                   offInStrict: ci(Op.iIp),
- ... (44 more removed lines; see GitHub link above)
+       return QQ ? ["X"] : ["P", "X"]
+     }
+     const sQ = Object.freeze({
+       faces: null,
+       names: Object.freeze({}),
+       shop: !0,
+       bag: !0,
+       sprint: !0,
+       items: null,
+       rowIcons: wQ.E,
+       pinnedIcons: Object.freeze({
+         rightOfCamera: null,
+         leftEnd: null
+       })
+     });
+ 
+ ... (36 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L575-L589` → after: `L919-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L919-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L919-L925) · [Before (L575-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L575-L589)

```diff
-     function yi() {
-       return Wi ??= async function() {
-         if ("undefined" === typeof WebAssembly) return Ui("unsupported", "This browser has no WebAssembly"), null;
-         const pp = (0, Ai.loadShaderPackTextures)().then((() => !0), (pp => (console.error("Could not load the shader pack textures, so shader packs can't run", pp), !1)));
-         try {
-           const ip = await async function() {
-             let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kp;
-             return Yi(await pp())
-           }();
-           return await pp ? ip : null
-         } catch (ip) {
-           const pp = ip instanceof Error ? ip.message : String(ip);
-           return Ui(Di.d[ip instanceof Zp ? ip.stage : "instantiate"], pp), null
-         }
-       }(), Wi
+     function gQ(QQ, WQ) {
+       const {
+         faces: XQ
+       } = QQ;
+       if (null === XQ) return [];
+       const wQ = new Set(Object.keys(XQ).map((QQ => TQ[QQ])));
+       return zQ(WQ).filter((QQ => !wQ.has(TQ[QQ])))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L593` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L929) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L593)

```diff
-       (0, Di.j)(Pi, `Shader pack wasm ${pp}, so shader packs can't run: ${ip}`, ip, `shader_pack_${pp}`)
+       QQ.replaceChildren(...[...WQ.childNodes].map((QQ => QQ.cloneNode(!0))))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L596-L597` → after: `L932-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L932-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L932-L938) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L596-L597)

```diff
-   6770: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/bloxd_wasm_shader_pack_bg.2232ef6cb61f10878c8f.wasm"
+   34415: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ,
+       d: () => wQ
+     });
+     const wQ = "image/jpeg",
+       qQ = "jpg"
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L599` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L940) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L599)

```diff
-   6762: (pp, ip, cp) => {
+   34417: (QQ, WQ, XQ) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L601` → after: `L942-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L942-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L942-L944) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L601)

```diff
-       e: () => Sp
+       e: () => FQ,
+       h: () => PQ,
+       l: () => gQ
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L603-L618` → after: `L946-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L946-L950) · [Before (L603-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L603-L618)

```diff
-     var Op = cp(2970);
-     const op = {
-       bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
-       bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
-       bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
-       bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
-       bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
-       bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
-       bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
-       bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
-       bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
-       bloxd_wasm_anim: () => "12c4beb6cacfbdea124da1b78d9d3bb64d476f26a1d82ae9031fb1eb6b45b89d",
-       bloxd_wasm_textures: () => "8da34a927a2e21429dd7b220d476b1d909f2b62d3b85d0f3e892b23b3c44d36f",
-       bloxd_wasm_shader_pack: () => "5e1ab13681c364aca3fb9e7bad689eb7302538f98091c87c0994a7538b0e884b"
-     };
-     var Ip = cp(4791);
+     var wQ = XQ(1747),
+       qQ = XQ(3480),
+       TQ = XQ(105),
+       zQ = XQ(1812),
+       sQ = XQ(34415);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L620-L626` → after: `L952-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L952-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L952-L979) · [Before (L620-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L620-L626)

```diff
-     function Sp(pp) {
-       const ip = Object.prototype.hasOwnProperty.call(op, pp) ? op[pp]() : void 0;
-       if (void 0 !== ip) return {
-         sha256: ip,
-         onMismatch: Ip.v
-       };
-       throw new Op.g(`${pp} has no release digest, so this build refuses it`)
+     function FQ() {
+       return !(0, TQ.isMobileApp)() || wQ.e.supports("photos")
+     }
+     async function PQ(QQ) {
+       var WQ, XQ;
+       if ((0, TQ.isMobileApp)()) {
+         const {
+           saved: WQ
+         } = await wQ.e.request("photos.save", {
+           data: await (0, qQ.f)(QQ),
+           mimeType: sQ.d
+         });
+         return WQ ? "saved" : "denied"
+       }
+       return (0, TQ.isIOS)() && null !== (WQ = (XQ = navigator).canShare) && void 0 !== WQ && WQ.call(XQ, {
+         files: [QQ]
+ ... (12 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L629` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L982) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L629)

```diff
-   6780: (pp, ip, cp) => {
+   34413: (QQ, WQ, XQ) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L631-L634` → after: `L984-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L984-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L984-L986) · [Before (L631-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L631-L634)

```diff
-       c: () => dp,
-       g: () => ep,
-       i: () => tp,
-       m: () => vp
+       d: () => PQ,
+       f: () => gQ,
+       j: () => JQ
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L636-L647` → after: `L988-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L988-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L988-L993) · [Before (L636-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L636-L647)

```diff
-     var Op = cp(6788);
-     const op = 6,
-       Ip = 3,
-       Sp = 1,
-       xp = 2,
-       Lp = 4,
-       Yp = 8,
-       Dp = 16,
-       Ap = 32,
-       Pp = 64,
-       Wp = 128,
-       yp = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
+     var wQ = XQ(26),
+       qQ = XQ(34393),
+       TQ = XQ(1698),
+       zQ = XQ(34415);
+     const sQ = 8294400,
+       FQ = .92;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L649-L653` → after: `L995-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L995-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L995-L998) · [Before (L649-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L649-L653)

```diff
-     function Up(pp) {
-       if (!pp) return 0;
-       const ip = yp.indexOf(pp);
-       if (ip <= 0) throw new Error(`"${pp}" is not a shader pack hook function`);
-       return ip
+     function PQ() {
+       (0, TQ.e)(), wQ.b.set({
+         screenshotMode: !0
+       })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L656-L659` → after: `L1001-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1001-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1001-L1064) · [Before (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L656-L659)

```diff
-     function wp(pp) {
-       if (0 === pp) return null;
-       const ip = yp[pp];
-       if (void 0 === ip) throw new Error(`${pp} is not a shader pack hook function id`);
+     function gQ() {
+       wQ.b.set({
+         screenshotMode: !1
+       })
+     }
+     async function JQ() {
+       const {
+         width: QQ,
+         height: WQ,
+         scale: XQ
+       } = function(QQ, WQ, XQ) {
+         const wQ = Math.max(1, QQ),
+           qQ = Math.max(1, WQ),
+           TQ = Math.min(Math.max(1, XQ), Math.sqrt(sQ / (wQ * qQ)));
+         return {
+           width: Math.round(wQ * TQ),
+ ... (48 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L664` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1114) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L664)

```diff
-       const ip = Op.d.length;
+       var WQ;
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L666-L667` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1116-L1117) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L666-L667)

```diff
-         strict: pp >= ip,
-         program: Op.d[pp % ip]
+         ...zQ.store,
+         yaw: zQ.store.yaw + (null !== (WQ = wQ.c[QQ].previewYaw) && void 0 !== WQ ? WQ : 0)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L671-L672` → after: `L1135-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1135-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1135-L1138) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L671-L672)

```diff
-     function tp(pp) {
-       return Number(pp.strict) * Op.d.length + Op.d.indexOf(pp.program)
+     function sQ(QQ, WQ) {
+       QQ instanceof Promise ? QQ.then(WQ).catch((QQ => {
+         console.error("Couldn't open the preview", QQ)
+       })) : WQ(QQ)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L674-L676` → after: `L1140-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1140-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1140-L1160) · [Before (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L674-L676)

```diff
- 
-     function Hp(pp) {
-       return "" === pp ? [] : pp.split(" ")
+     class FQ {
+       constructor(QQ) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, sQ(QQ, (QQ => {
+           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
+         }))
+       }
+       show(QQ) {
+         var WQ;
+         this.view = QQ, null === (WQ = this.opened) || void 0 === WQ || WQ.show(QQ)
+       }
+       resize(QQ, WQ) {
+         var XQ;
+         this.size = {
+           width: QQ,
+           height: WQ
+         }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
+ ... (5 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L678-L689` → after: `L1162-L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1162-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1162-L1204) · [Before (L678-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L678-L689)

```diff
- 
-     function dp(pp) {
-       const ip = {
-         variantFlags: new Uint8Array(op),
-         hooks: new Uint8Array(op * Ip),
-         moduleCodes: Array(op).fill(""),
-         reads: Array(2 * op).fill("")
-       };
-       for (const cp of pp) {
-         const pp = tp(cp.key),
-           Op = (pp, ip) => null === cp.hooks.surface || cp.reads.fragment.includes(pp) ? 0 : ip;
-         ip.variantFlags[pp] = (cp.sceneDepth ? Sp : 0) | (cp.movesVertices ? xp : 0) | (cp.sunShadow ? Lp : 0) | (cp.airShadow ? Yp : 0) | (cp.discards ? Dp : 0) | Op("localPosition", Ap) | Op("enchantSpeed", Pp) | Op("enchantTier", Wp), ip.hooks[pp * Ip] = Up(cp.hooks.vertex), i … [truncated]
+     class PQ {
+       constructor(QQ) {
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), sQ(QQ, (QQ => {
+           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
+         }))
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var QQ, WQ;
+         return null !== (QQ = null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.isReady()) && void 0 !== QQ && QQ
+       }
+       setCosmetic(QQ, WQ) {
+         var XQ;
+         null === (XQ = this.opened) || void 0 === XQ || XQ.setCosmetic(QQ, WQ)
+ ... (27 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L693-L718` → after: `L1207-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1207-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1207-L1220) · [Before (L693-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L693-L718)

```diff
- 
-     function ep(pp) {
-       const {
-         hooks: ip,
-         moduleCodes: cp,
-         reads: Op
-       } = pp;
-       return Array.from(pp.variantFlags, ((pp, op) => {
-         const Ap = op * Ip;
-         return {
-           key: vp(op),
-           hooks: {
-             vertex: wp(ip[Ap]),
-             surface: wp(ip[Ap + 1]),
-             light: wp(ip[Ap + 2])
-           },
- ... (10 more removed lines; see GitHub link above)
+     const gQ = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
+       }
+       setHost(QQ) {
+         this.host = QQ
+       }
+       setDefaultHost(QQ) {
+         this.makeDefault = QQ
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L720` → after: `L1222-L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1222-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1222-L1284) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L720)

```diff
-       }))
+         return this.host
+       }
+       openMob(QQ) {
+         return new FQ(this.current().openMob(QQ))
+       }
+       openPet(QQ) {
+         return new FQ(this.current().openPet(QQ))
+       }
+       openMobLineup(QQ) {
+         return new FQ(this.current().openMobLineup(QQ))
+       }
+       openCharacter(QQ, WQ) {
+         return new PQ(this.current().openCharacter(QQ, WQ))
+       }
+     }
+   },
+ ... (47 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L723` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1287) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L723)

```diff
-   6788: (pp, ip, cp) => {
+   9246: (QQ, WQ, XQ) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L726-L729` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1290) · [Before (L726-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L726-L729)

```diff
-       e: () => Sp,
-       f: () => xp,
-       h: () => op,
-       i: () => Ip
+       e: () => FQ
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L731` → after: `L1292-L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1292-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1292-L1336) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L731)

```diff
-     const Op = ["terrain", "liquid", "model"];
+     var wQ = XQ(26),
+       qQ = XQ(1376),
+       TQ = XQ(105);
+     const zQ = {
+       blockMined: {
+         pattern: [18],
+         priority: 1,
+         minGapMs: 120
+       },
+       hitLanded: {
+         pattern: [20],
+         priority: 2,
+         minGapMs: 80
+       },
+       damageTaken: {
+         pattern: [45],
+ ... (29 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L734-L740` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1339) · [Before (L734-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L734-L740)

```diff
-       const pp = [];
-       for (const ip of [!1, !0])
-         for (const cp of Op) pp.push({
-           strict: ip,
-           program: cp
-         });
-       return pp
+       return (0, TQ.isMobile)() && "function" === typeof navigator.vibrate
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L742-L744` → after: `L1341-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1341-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1341-L1364) · [Before (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L742-L744)

```diff
- 
-     function Ip(pp) {
-       return `${pp.strict?"strict":"allow"}.${pp.program}`
+     const FQ = new class {
+       constructor(QQ) {
+         this.deps = QQ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
+       }
+       play(QQ, WQ) {
+         var XQ;
+         if (!this.deps.enabled()) return;
+         const wQ = zQ[QQ],
+           qQ = null !== WQ && void 0 !== WQ ? WQ : wQ.pattern;
+         if (null === qQ) return void console.warn("No vibration pattern for", QQ);
+         const TQ = this.deps.now();
+         TQ - this.lastAnyAt < 40 && wQ.priority < this.playingPriority || TQ - (null !== (XQ = this.lastAt.get(QQ)) && void 0 !== XQ ? XQ : -1 / 0) < wQ.minGapMs || TQ < this.playingUntil && wQ.priority < this.playingPriority || (this.lastAt.set(QQ, TQ), this.lastAnyAt = TQ, this … [truncated]
+       }
+     }({
+       vibrate: QQ => {
+         navigator.vibrate([...QQ])
+ ... (8 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L748` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1368) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L748)

```diff
-       return !pp.hooks.vertex && !pp.hooks.surface && !pp.hooks.light
+       return "object" === typeof QQ ? QQ.option : QQ
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L752` → after: `L1372-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1372-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/136.js#L1372-L1378) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/136.js#L752)

```diff
-       return "off" !== ip && (null === pp || pp.some((pp => pp.key.strict === ("strict" === ip) && !Sp(pp))))
+       var XQ;
+       if ("dropdown" === (null === (XQ = QQ.userInput) || void 0 === XQ ? void 0 : XQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
+         for (const XQ of QQ.userInput.dropdownOptions)
+           if (qQ(XQ) === WQ) return "object" === typeof XQ ? XQ.cost : QQ.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", WQ)
+       }
+       return QQ.cost
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/137.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/137.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137];
+ export const ids = [137, 140, 141];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L4-L510` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/137.js#L4) · [Before (L4-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/137.js#L4-L510)

```diff
-   36519: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => zp,
-       f: () => ii,
-       i: () => Kp,
-       k: () => Zp
-     });
-     var Op = cp(2963),
-       op = cp(2980),
-       Ip = cp(6762),
-       Sp = cp(4791),
-       xp = cp(2975),
-       Lp = cp(2970);
-     const Yp = "bloxd-wasmDownloaded",
-       Dp = 12;
- 
- ... (491 more removed lines; see GitHub link above)
+   6972: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L514` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/137.js#L8-L9) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/137.js#L514)

```diff
-     var Op = cp(2970);
+     var wQ = XQ(5386),
+       qQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L516-L527` → after: `L11-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L11-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/137.js#L11-L15) · [Before (L516-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/137.js#L516-L527)

```diff
-       bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
-       bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
-       bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
-       bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
-       bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
-       bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
-       bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
-       bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
-       bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
-       bloxd_wasm_anim: () => "12c4beb6cacfbdea124da1b78d9d3bb64d476f26a1d82ae9031fb1eb6b45b89d",
-       bloxd_wasm_textures: () => "8da34a927a2e21429dd7b220d476b1d909f2b62d3b85d0f3e892b23b3c44d36f",
-       bloxd_wasm_shader_pack: () => "5e1ab13681c364aca3fb9e7bad689eb7302538f98091c87c0994a7538b0e884b"
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L529-L537` → after: `L17-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L17-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/137.js#L17-L501) · [Before (L529-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/137.js#L529-L537)

```diff
-     var Ip = cp(4791);
- 
-     function Sp(pp) {
-       const ip = Object.prototype.hasOwnProperty.call(op, pp) ? op[pp]() : void 0;
-       if (void 0 !== ip) return {
-         sha256: ip,
-         onMismatch: Ip.v
-       };
-       throw new Op.g(`${pp} has no release digest, so this build refuses it`)
+ 
+     function zQ(QQ) {
+       let {
+         diagnostics: WQ,
+         more: XQ = 0,
+         t: zQ
+       } = QQ;
+       return (0, qQ.jsxs)("ul", {
+         className: "ShaderPackDiagnostics",
+         children: [WQ.map(((QQ, WQ) => {
+           const XQ = (0, wQ.i)(QQ),
+             sQ = function(QQ, WQ) {
+               const XQ = (0, wQ.e)(null !== QQ && void 0 !== QQ ? QQ : []);
+               if (0 === XQ.length) return null;
+               return XQ.map((QQ => QQ.map((QQ => WQ(TQ[QQ]))).join(", "))).join("; ")
+             }(QQ.variants, zQ);
+ ... (469 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/138.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/138.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/138.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/138.js#L4)

```diff
-   6772: (pp, ip, cp) => {
+   6984: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/138.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/138.js#L6-L7)

```diff
-       loadShaderPackTextures: () => Sp,
-       shaderPackTextures: () => xp
+       loadPageShaderPackCompiler: () => rW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L9` → after: `L8-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L8-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/138.js#L8-L445) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/138.js#L9)

```diff
-     var Op = cp(5167);
+     var wQ = {};
+     XQ.r(wQ), XQ.d(wQ, {
+       HqQ: () => qQ,
+       JQQ: () => TQ,
+       default: () => nQ,
+       aqQ: () => zQ,
+       lqQ: () => sQ,
+       initSync: () => eQ,
+       QJ: () => FQ,
+       gwQ: () => PQ,
+       hqQ: () => gQ,
+       iqQ: () => JQ,
+       XE: () => rQ,
+       cqQ: () => IQ,
+       WE: () => jQ,
+       RqQ: () => BQ
+ ... (422 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L14-L25` → after: `L450-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L450-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/138.js#L450-L486) · [Before (L14-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/138.js#L14-L25)

```diff
-       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: ip,
-           textureNameToIndex: cp,
-           textureAnimationData: Ip
-         } = pp;
-         return op ??= (0, Op.j)(cp, Ip, ip), op
-       })), Ip
-     }
- 
-     function xp() {
-       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return ZQ ? Promise.resolve(ZQ) : (OQ || (OQ = async function() {
+         let QQ;
+         try {
+           QQ = await (0, xQ.H)(new XQ.U(XQ(6994)), (0, YQ.b)("bloxd_wasm_shader_pack"))
+         } catch (WQ) {
+           throw new NQ((0, xQ.L)(WQ), WQ)
+         }
+         try {
+           await nQ({
+             module_or_path: QQ
+           })
+         } catch (WQ) {
+           throw new NQ("instantiate", WQ)
+         }
+         return ZQ = wQ, ZQ
+       }(), OQ.then(void 0, (() => {
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/139.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/139.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L2)

```diff
- export const ids = [138, 139];
+ export const ids = [139];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L4-L19` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L4-L9) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L4-L19)

```diff
-   6798: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       forgetShaderPackActiveHint: () => Cp,
-       isOtherApiVersion: () => mp,
-       isShaderPackActive: () => dp,
-       isShaderPackChangePending: () => kp,
-       markShaderPackChangePending: () => jp,
-       pageShaderPackValidationVersion: () => Rp,
-       reconcileStoredShaderPackHint: () => Mp,
-       removeShaderPack: () => Hp,
-       replaceShaderPack: () => wp,
-       saveShaderPack: () => Up,
-       shaderPackNeedsCheck: () => qp,
-       storedPackOutcome: () => ep,
-       storedShaderPackFiles: () => Pp,
-       toStoredShaderPack: () => Ap
+   36608: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => ZQ,
+       g: () => MQ,
+       h: () => KQ,
+       k: () => NQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L21-L27` → after: `L11-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L11-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L11-L298) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L21-L27)

```diff
-     var Op = cp(5167),
-       op = cp(5159),
-       Ip = cp(44),
-       Sp = cp(3564),
-       xp = cp(6804),
-       Lp = cp(6772);
-     const Yp = "shaderPackChangePending";
+     var wQ = XQ(3107),
+       qQ = XQ(3122),
+       TQ = XQ(6987),
+       zQ = XQ(5002),
+       sQ = XQ(3117),
+       FQ = XQ(3110);
+     const PQ = "bloxd-wasmDownloaded",
+       gQ = 12;
+ 
+     function JQ(QQ) {
+       return QQ.pathname.slice(QQ.pathname.lastIndexOf("/") + 1)
+     }
+ 
+     function rQ() {
+       try {
+         if ("undefined" === typeof localStorage) return null;
+ ... (272 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L32-L37` → after: `L460-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L460-L463) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L32-L37)

```diff
-         manifest: pp.manifest,
-         files: (0, Op.v)(pp.files),
-         validation: ip,
-         ...cp && {
-           listing: cp
-         }
+         build: QQ,
+         workers: WQ,
+         memoryMaximumBytes: XQ,
+         loaded: TQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L42-L47` → after: `L468-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L468-L469) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L42-L47)

```diff
-       return Object.keys(pp.files).map((ip => ({
-         path: ip,
-         source: pp.files[ip]
-       })))
-     }
-     let Wp = Promise.resolve();
+       return YQ.get(QQ)
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L50-L59` → after: `L472-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L472-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L472-L495) · [Before (L50-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L50-L59)

```diff
-       const ip = Wp.then(pp);
-       return Wp = ip.catch((() => {})), ip
-     }
- 
-     function Up(pp, ip) {
-       return yp((() => vp(pp, ip)))
-     }
- 
-     function wp(pp, ip, cp) {
-       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
+       const WQ = performance.now(),
+         XQ = xQ.get(QQ.name);
+       xQ.delete(QQ.name);
+       const wQ = !0 === XQ?.downloaded ? XQ : void 0;
+       return void 0 !== XQ && void 0 === wQ && XQ.cancel.abort(), (0, qQ.i)(((XQ, TQ) => {
+         const zQ = (wQ, qQ) => {
+             YQ.set(QQ.name, {
+               path: qQ,
+               ms: performance.now() - WQ
+             }), XQ(wQ)
+           },
+           sQ = () => {
+             (0, qQ.v)(QW(QQ), (QQ => {
+               let {
+                 module: WQ,
+                 path: XQ
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L62-L108` → after: `L498-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L498-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L498-L529) · [Before (L62-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L62-L108)

```diff
-       const cp = await Ip.g.setItem(xp.e, pp);
-       return cp && Ep(pp, ip), cp
-     }
-     async function tp() {
-       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
-     }
- 
-     function Hp() {
-       return yp(tp)
-     }
- 
-     function dp(pp, ip) {
-       return "active" === ep(pp, ip).kind
-     }
- 
-     function ep(pp, ip) {
- ... (31 more removed lines; see GitHub link above)
+       const {
+         module: XQ
+       } = await QW(QQ, {
+         retries: WQ
+       });
+       return XQ
+     }
+     async function QW(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return await fQ(QQ, (0, TQ.b)(QQ.name), WQ)
+     }
+   },
+   6987: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L111-L161` → after: `L532-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L532-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/139.js#L532-L537) · [Before (L111-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/139.js#L111-L161)

```diff
-       return !(0, op.k)(pp.manifest.apiVersion)
-     }
- 
-     function Rp(pp) {
-       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
-     }
- 
-     function qp(pp, ip) {
-       var cp;
-       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
-     }
- 
-     function Mp(pp) {
-       return yp((async () => {
-         Ep(await (0, xp.f)(!0), pp)
-       }))
- ... (35 more removed lines; see GitHub link above)
+       const WQ = Object.prototype.hasOwnProperty.call(qQ, QQ) ? qQ[QQ]() : void 0;
+       if (void 0 !== WQ) return {
+         sha256: WQ,
+         onMismatch: TQ.v
+       };
+       throw new wQ.i(`${QQ} has no release digest, so this build refuses it`)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/140.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/140.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L4-L2636` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/140.js#L4-L7) · [Before (L4-L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/140.js#L4-L2636)

```diff
-   38993: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Yp,
-       h: () => Pp,
-       l: () => Wp,
-       p: () => wp,
-       q: () => Ap,
-       t: () => Dp,
-       x: () => Sp,
-       y: () => yp
-     });
-     var Op = cp(316),
-       op = cp(1749);
-     const Ip = "A valid external Instance reference no longer exists.";
- 
-     function Sp(pp) {
- ... (2617 more removed lines; see GitHub link above)
+   7002: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       loadShaderPackTextures: () => zQ,
+       shaderPackTextures: () => sQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L2638-L2726` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/140.js#L9) · [Before (L2638-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/140.js#L2638-L2726)

```diff
-     var Op = cp(209),
-       op = cp(25),
-       Ip = cp(3657),
-       Sp = cp(316),
-       xp = cp(44),
-       Lp = cp(40911),
-       Yp = cp(36679),
-       Dp = cp(40938),
-       Ap = (cp(40976), cp(41025)),
-       Pp = cp(40962);
-     const Wp = "wasmJoinBuild";
-     let yp = null,
-       Up = null,
-       wp = null;
- 
-     function vp(pp) {
- ... (73 more removed lines; see GitHub link above)
+     var wQ = XQ(5396);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L2732-L3936` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/140.js#L14) · [Before (L2732-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/140.js#L2732-L3936)

```diff
-       return Tp ??= lp().then((async pp => {
-         const ip = null !== pp && !(0, Lp.s)(pp),
-           cp = {
-             indirectHangs: ip && await (0, Lp.T)(pp, window.location.search),
-             storagePullBreaks: ip && (0, Lp.ab)(pp, window.location.search),
-             splitPassBreaks: ip && (0, Lp._)(pp, window.location.search),
-             earlySky: ip && (0, Lp.Q)(pp, window.location.search),
-             instancedTerrain: ip ? (0, Lp.V)(pp, window.location.search) : null,
-             cellLight: ip && await (0, Ip.j)("cellLight"),
-             framesAhead: (0, Lp.k)(window.location.search),
-             webGpuRestores: !ip || (0, Lp.eb)(pp, (0, Yp.c)()),
-             bufferCopiesCrash: ip && (0, Lp.N)(pp, window.location.search)
-           };
-         return fp = cp.indirectHangs, bp = !cp.webGpuRestores, cp
-       })), Tp
-     }
- ... (1189 more removed lines; see GitHub link above)
+       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L3938-L3939` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/140.js#L16-L18) · [Before (L3938-L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/140.js#L3938-L3939)

```diff
-           id: Op,
-           rotation: op
+           FORMER_BLOCK_IMAGE_NAMES: WQ,
+           textureNameToIndex: XQ,
+           textureAnimationData: TQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L3941` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/140.js#L20) · [Before (L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/140.js#L3941)

```diff
-         ip[cp] = 65535 & Op | (3 & op) << 16
+         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L3961-L3966` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/140.js#L25) · [Before (L3961-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/140.js#L3961-L3966)

```diff
-       const pp = [];
-       for (const ip of [!1, !0])
-         for (const cp of Op) pp.push({
-           strict: ip,
-           program: cp
-         });
+       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 1. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L2)

```diff
- export const ids = [141];
+ export const ids = [140, 141];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L4-L9` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L19) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L9)

```diff
-   6780: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => dp,
-       g: () => ep,
-       i: () => tp,
-       m: () => vp
+   7024: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       forgetShaderPackActiveHint: () => hQ,
+       isOtherApiVersion: () => dQ,
+       isShaderPackActive: () => GQ,
+       isShaderPackChangePending: () => vQ,
+       markShaderPackChangePending: () => bQ,
+       pageShaderPackValidationVersion: () => HQ,
+       reconcileStoredShaderPackHint: () => lQ,
+       removeShaderPack: () => pQ,
+       replaceShaderPack: () => yQ,
+       saveShaderPack: () => BQ,
+       shaderPackNeedsCheck: () => aQ,
+       storedPackOutcome: () => UQ,
+       storedShaderPackFiles: () => rQ,
+       toStoredShaderPack: () => JQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L11-L22` → after: `L21-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L21-L28) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L11-L22)

```diff
-     var Op = cp(6788);
-     const op = 6,
-       Ip = 3,
-       Sp = 1,
-       xp = 2,
-       Lp = 4,
-       Yp = 8,
-       Dp = 16,
-       Ap = 32,
-       Pp = 64,
-       Wp = 128,
-       yp = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
+     var wQ = XQ(5396),
+       qQ = XQ(5394),
+       TQ = XQ(43),
+       zQ = XQ(3716),
+       sQ = XQ(7026),
+       FQ = XQ(7002);
+     const PQ = "shaderPackChangePending";
+     let gQ = null;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L24-L39` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L30) · [Before (L24-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L24-L39)

```diff
-     function Up(pp) {
-       if (!pp) return 0;
-       const ip = yp.indexOf(pp);
-       if (ip <= 0) throw new Error(`"${pp}" is not a shader pack hook function`);
-       return ip
-     }
- 
-     function wp(pp) {
-       if (0 === pp) return null;
-       const ip = yp[pp];
-       if (void 0 === ip) throw new Error(`${pp} is not a shader pack hook function id`);
-       return ip
-     }
- 
-     function vp(pp) {
-       const ip = Op.d.length;
+     function JQ(QQ, WQ, XQ) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L41-L42` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L32-L37) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L41-L42)

```diff
-         strict: pp >= ip,
-         program: Op.d[pp % ip]
+         manifest: QQ.manifest,
+         files: (0, wQ.w)(QQ.files),
+         validation: WQ,
+         ...XQ && {
+           listing: XQ
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L47` → after: `L42-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L42-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L42-L107) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L47)

```diff
-       return Number(pp.strict) * Op.d.length + Op.d.indexOf(pp.program)
+       return Object.keys(QQ.files).map((WQ => ({
+         path: WQ,
+         source: QQ.files[WQ]
+       })))
+     }
+     let IQ = Promise.resolve();
+ 
+     function jQ(QQ) {
+       const WQ = IQ.then(QQ);
+       return IQ = WQ.catch((() => {})), WQ
+     }
+ 
+     function BQ(QQ, WQ) {
+       return jQ((() => VQ(QQ, WQ)))
+     }
+ 
+ ... (50 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L51` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L111) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L51)

```diff
-       return "" === pp ? [] : pp.split(" ")
+       return !(0, qQ.g)(QQ.manifest.apiVersion)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L55-L66` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L115-L120) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L55-L66)

```diff
-       const ip = {
-         variantFlags: new Uint8Array(op),
-         hooks: new Uint8Array(op * Ip),
-         moduleCodes: Array(op).fill(""),
-         reads: Array(2 * op).fill("")
-       };
-       for (const cp of pp) {
-         const pp = tp(cp.key),
-           Op = (pp, ip) => null === cp.hooks.surface || cp.reads.fragment.includes(pp) ? 0 : ip;
-         ip.variantFlags[pp] = (cp.sceneDepth ? Sp : 0) | (cp.movesVertices ? xp : 0) | (cp.sunShadow ? Lp : 0) | (cp.airShadow ? Yp : 0) | (cp.discards ? Dp : 0) | Op("localPosition", Ap) | Op("enchantSpeed", Pp) | Op("enchantTier", Wp), ip.hooks[pp * Ip] = Up(cp.hooks.vertex), i … [truncated]
-       }
-       return ip
+       return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
+     }
+ 
+     function aQ(QQ, WQ) {
+       var XQ;
+       return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L70-L94` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L124-L125) · [Before (L70-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L70-L94)

```diff
-       const {
-         hooks: ip,
-         moduleCodes: cp,
-         reads: Op
-       } = pp;
-       return Array.from(pp.variantFlags, ((pp, op) => {
-         const Ap = op * Ip;
-         return {
-           key: vp(op),
-           hooks: {
-             vertex: wp(ip[Ap]),
-             surface: wp(ip[Ap + 1]),
-             light: wp(ip[Ap + 2])
-           },
-           moduleCode: cp[op],
-           sceneDepth: 0 !== (pp & Sp),
- ... (9 more removed lines; see GitHub link above)
+       return jQ((async () => {
+         iQ(await (0, sQ.f)(!0), QQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L157-L164` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L130-L132) · [Before (L157-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L157-L164)

```diff
-       const pp = Ap.map((pp => {
-         let {
-           name: ip,
-           type: cp
-         } = pp;
-         return `    ${ip}: ${cp},\n`
-       })).join("");
-       return `struct ${Yp} {\n${pp}}\n@group(${Op}) @binding(${op}) var<uniform> ${Dp}: ${Yp};\n`
+       return jQ((async () => {
+         TQ.i.removeItem(zQ.c)
+       }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L168-L171` → after: `L136-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L136-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L136-L156) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L168-L171)

```diff
-       const cp = new DataView(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pp),
-         [Op, op, Ip, Sp, xp, Lp] = Ap;
-       cp.setFloat32(Op.offset, ip.seconds, !0), cp.setUint32(op.offset, ip.lit ? 1 : 0, !0);
-       for (let Yp = 0; Yp < 3; Yp++) cp.setInt32(Ip.offset + 4 * Yp, ip.renderOffset[Yp], !0), cp.setFloat32(Sp.offset + 4 * Yp, ip.opp[Yp], !0), cp.setFloat32(xp.offset + 4 * Yp, ip.eyePosition[Yp], !0), cp.setFloat32(Lp.offset + 4 * Yp, ip.shadowDirection[Yp], !0)
+       GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
+     }
+   },
+   7002: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       loadShaderPackTextures: () => zQ,
+       shaderPackTextures: () => sQ
+     });
+     var wQ = XQ(5396);
+     let qQ = null,
+       TQ = null;
+ 
+     function zQ() {
+       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: WQ,
+ ... (5 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L201-L206` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/141.js#L160) · [Before (L201-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/141.js#L201-L206)

```diff
-       const pp = [];
-       for (const ip of [!1, !0])
-         for (const cp of Op) pp.push({
-           strict: ip,
-           program: cp
-         });
+       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/142.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/142.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088)

#### 1. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L8)

```diff
-   41994: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       compilePagePack: () => Yp,
-       prefetchCompiler: () => xp,
-       reconcileHint: () => Lp
+   34346: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => sQ,
+       e: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L10-L13` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L9-L11) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L10-L13)

```diff
-     var Op = cp(6758),
-       op = cp(6798),
-       Ip = cp(6772),
-       Sp = cp(6792);
+     var wQ = XQ(307),
+       qQ = XQ(150),
+       TQ = XQ(34354);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L16-L20` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L14-L15) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L16-L20)

```diff
-       (0, Op.loadPageShaderPackCompiler)()
-     }
-     async function Lp() {
-       const pp = await (0, Op.loadPageShaderPackCompiler)();
-       await (pp ? (0, op.reconcileStoredShaderPackHint)(pp) : (0, op.forgetShaderPackActiveHint)())
+       var QQ, WQ, XQ;
+       return null !== (QQ = (0, wQ.h)(null !== (WQ = null === (XQ = (0, qQ.n)()) || void 0 === XQ ? void 0 : XQ.renderer) && void 0 !== WQ ? WQ : null, (0, qQ.j)())) && void 0 !== QQ ? QQ : "unknown"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L22-L52` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L17-L20) · [Before (L22-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L22-L52)

```diff
-     async function Yp(pp) {
-       const ip = await (0, Op.loadPageShaderPackCompiler)();
-       if (!ip) return {
-         status: "none"
-       };
-       const cp = await (0, Sp.e)(pp, ip),
-         xp = (0, op.storedPackOutcome)(cp, ip);
-       if ("none" === xp.kind) return {
-         status: "none"
-       };
-       const Lp = ip.ipp((0, op.storedShaderPackFiles)(cp), (0, Ip.shaderPackTextures)());
-       if ("blocked" === xp.kind) return {
-         status: "blocked",
-         messageKey: xp.messageKey,
-         variants: 0 === Lp.errors.length ? Lp.variants : null
-       };
- ... (15 more removed lines; see GitHub link above)
+ 
+     function sQ(QQ, WQ, XQ, wQ, qQ) {
+       const zQ = null === WQ ? "untimed" : `${Math.round(WQ)} ms`;
+       return `frames stalled, ${XQ}, gpu ${(0,TQ.b)(qQ)}, blocking ${zQ}, drawn ${Math.round(QQ)} ms apart, timers ${wQ.timers}, timer gap ${Math.round(wQ.longestGapMs)} ms`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L55-L70` → after: `L23-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L23-L32) · [Before (L55-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L55-L70)

```diff
-   6798: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       forgetShaderPackActiveHint: () => Cp,
-       isOtherApiVersion: () => mp,
-       isShaderPackActive: () => dp,
-       isShaderPackChangePending: () => kp,
-       markShaderPackChangePending: () => jp,
-       pageShaderPackValidationVersion: () => Rp,
-       reconcileStoredShaderPackHint: () => Mp,
-       removeShaderPack: () => Hp,
-       replaceShaderPack: () => wp,
-       saveShaderPack: () => Up,
-       shaderPackNeedsCheck: () => qp,
-       storedPackOutcome: () => ep,
-       storedShaderPackFiles: () => Pp,
-       toStoredShaderPack: () => Ap
+   39038: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => PQ,
+       h: () => rQ,
+       l: () => IQ,
+       n: () => yQ,
+       o: () => JQ,
+       s: () => gQ,
+       v: () => zQ,
+       z: () => jQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L72-L79` → after: `L34-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L34-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L34-L79) · [Before (L72-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L72-L79)

```diff
-     var Op = cp(5167),
-       op = cp(5159),
-       Ip = cp(44),
-       Sp = cp(3564),
-       xp = cp(6804),
-       Lp = cp(6772);
-     const Yp = "shaderPackChangePending";
-     let Dp = null;
+     var wQ = XQ(374),
+       qQ = XQ(1783);
+     const TQ = "A valid external Instance reference no longer exists.";
+ 
+     function zQ(QQ) {
+       return QQ.includes(TQ)
+     }
+     const sQ = [
+         [1e4, "<10s", "lt10s"],
+         [6e4, "<1m", "lt1m"],
+         [3e5, "<5m", "lt5m"],
+         [18e5, "<30m", "lt30m"],
+         [1 / 0, "30m+", "ge30m"]
+       ],
+       FQ = [
+         [1e3, "lt1s"],
+ ... (30 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L83-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L87-L88) · [Before (L83-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L83-L88)

```diff
-         manifest: pp.manifest,
-         files: (0, Op.v)(pp.files),
-         validation: ip,
-         ...cp && {
-           listing: cp
-         }
+         page: null === sQ ? zQ : `${zQ}${rQ(sQ)}`,
+         code: `${QQ}_${null===sQ?zQ:`${zQ}_${IQ(sQ)}`}_${BQ(XQ)}`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L93-L96` → after: `L93-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L93-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L93-L99) · [Before (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L93-L96)

```diff
-       return Object.keys(pp.files).map((ip => ({
-         path: ip,
-         source: pp.files[ip]
-       })))
+       if ((0, qQ.e)()) return "ad_open";
+       const WQ = (0, qQ.d)();
+       return null === WQ ? "ad_none" : `ad_${IQ(QQ-WQ.endedAt)}_${WQ.pageHid?"h":"v"}`
+     }
+ 
+     function yQ(QQ) {
+       return DQ(FQ, QQ)[1]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L101-L102` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L103) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L101-L102)

```diff
-       const ip = Wp.then(pp);
-       return Wp = ip.catch((() => {})), ip
+       return DQ(sQ, QQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L106` → after: `L107-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L107-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L107-L134) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L106)

```diff
-       return yp((() => vp(pp, ip)))
+       var XQ;
+       return null !== (XQ = QQ.find((QQ => {
+         let [XQ] = QQ;
+         return WQ < XQ
+       }))) && void 0 !== XQ ? XQ : QQ[QQ.length - 1]
+     }
+   },
+   34354: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return String(QQ).replace(/\d/g, (QQ => String.fromCharCode(97 + Number(QQ))))
+     }
+     XQ.d(WQ, {
+       b: () => wQ
+     })
+   },
+   40864: (QQ, WQ, XQ) => {
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L109-L110` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L137-L138) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L109-L110)

```diff
-     function wp(pp, ip, cp) {
-       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
+     function qQ(QQ) {
+       return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L112-L114` → after: `L140-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L140-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L140-L144) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L112-L114)

```diff
-     async function vp(pp, ip) {
-       const cp = await Ip.g.setItem(xp.e, pp);
-       return cp && Ep(pp, ip), cp
+     const TQ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+ 
+     function zQ(QQ) {
+       var WQ;
+       return QQ instanceof WebAssembly.RuntimeError || QQ instanceof wQ || qQ(QQ) && TQ.test(null !== (WQ = QQ.stack) && void 0 !== WQ ? WQ : "")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L116-L117` → after: `L146-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L146-L157) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L116-L117)

```diff
-     async function tp() {
-       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
+ 
+     function sQ(QQ, WQ) {
+       if (zQ(QQ)) throw QQ;
+       console.error(WQ, QQ)
+     }
+ 
+     function FQ(QQ, WQ, XQ, qQ, TQ) {
+       if (WQ % qQ !== 0 || WQ + XQ > QQ.byteLength) throw new wQ(`${TQ}: ${XQ} bytes at ${WQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
+     }
+ 
+     function PQ(QQ, WQ, XQ, wQ, qQ) {
+       return 0 === XQ ? null : (FQ(WQ, XQ, wQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(WQ, XQ, wQ))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L121` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L244) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L121)

```diff
-       return yp(tp)
+       return "ios" === (0, rQ.getOperatingSystem)() ? "ios" : "other"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L125` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L251) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L125)

```diff
-       return "active" === ep(pp, ip).kind
+       return AQ.has(QQ) ? "android_arm" === QQ && WQ === EQ ? "webgpu_default" : "webgl_default" : null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L128` → after: `L254-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L254-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L254-L268) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L128)

```diff
-     function ep(pp, ip) {
+     function kQ(QQ) {
+       return function(QQ) {
+         try {
+           return QQ()
+         } catch {
+           return null
+         }
+       }((() => {
+         var WQ, XQ, wQ, zQ;
+         const sQ = null !== (WQ = null === (XQ = QQ.info) || void 0 === XQ ? void 0 : XQ.vendor) && void 0 !== WQ ? WQ : "";
+         return "windows" === (0, rQ.getOperatingSystem)() && "" !== sQ && "intel" !== (0, rQ.normaliseGpuVendor)(sQ) ? null : ((0, rQ.seedGpuVendor)(sQ), LQ((0, qQ.g)(), (0, TQ.e)(sQ, null !== (wQ = null === (zQ = QQ.info) || void 0 === zQ ? void 0 : zQ.architecture) && void 0 != … [truncated]
+       }))
+     }
+ 
+     function fQ() {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L130-L149` → after: `L270-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L270-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L270-L328) · [Before (L130-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L130-L149)

```diff
-       return null === pp ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : mp(pp) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : qp(pp, ip) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : pp.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (4 more removed lines; see GitHub link above)
+       return {
+         gpu: null !== (QQ = navigator.gpu) && void 0 !== QQ ? QQ : null,
+         webgl2: HQ.g,
+         webgl1: () => function(QQ) {
+           let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UQ.d;
+           try {
+             WQ = QQ.getContext("webgl")
+           } catch {
+             WQ = null
+           }
+           if (null === WQ) return [hQ];
+           const wQ = [];
+           try {
+             for (const qQ of XQ.extensions) null === WQ.getExtension(qQ) && wQ.push(qQ);
+             for (const [qQ, TQ] of Object.entries(XQ.limits)) {
+               const QQ = WQ[qQ],
+ ... (43 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L154` → after: `L333-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L333-L346) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L154)

```diff
-       Ip.l.setItem(Yp, performance.timeOrigin)
+       let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       if ((0, sQ.m)("render") && "webgl1" === (0, sQ.k)("renderer")) return "webgl1";
+       const WQ = [() => new URLSearchParams(window.location.search).get(gQ.c), () => jQ.i.getItem(gQ.d), () => {
+         const WQ = localStorage.getItem(lQ);
+         return null !== WQ && QQ && localStorage.removeItem(lQ), "1" === WQ ? "webgl2" : null
+       }];
+       for (const XQ of WQ) {
+         let QQ = null;
+         try {
+           QQ = oQ(XQ())
+         } catch {}
+         if (null !== QQ) return QQ
+       }
+       return null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L157-L158` → after: `L349-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L349-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L349-L354) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L157-L158)

```diff
-     function kp() {
-       return Ip.l.getItem(Yp) === performance.timeOrigin
+     function tQ(QQ) {
+       try {
+         return QQ()
+       } catch {
+         return !1
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L162` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L358) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L162)

```diff
-       return !(0, op.k)(pp.manifest.apiVersion)
+       return "lite" === QQ ? "webgpu" : "webgl2" === QQ || "babylon" === QQ ? "webgl" : null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L166` → after: `L362-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L362-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L362-L429) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L166)

```diff
-       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
+       return "none" === QQ || "compatibility_mode" === QQ
+     }
+     async function nQ() {
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fQ();
+       const WQ = await async function(QQ) {
+         const WQ = YQ(QQ),
+           {
+             source: XQ
+           } = WQ,
+           wQ = !WQ.asked,
+           qQ = "gpu" in WQ && WQ.heldBack,
+           zQ = function(QQ) {
+             let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+             return qQ && !eQ(QQ) ? {
+               reason: "webgl_holdback",
+               adapter: null,
+ ... (52 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L170-L171` → after: `L433-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L433-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L433-L437) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L170-L171)

```diff
-       var cp;
-       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
+       let {
+         source: XQ,
+         asked: wQ
+       } = WQ;
+       return wQ || "default" === XQ ? (0, dQ.i)(wQ, QQ.defaultCompatibility) : void 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L175-L177` → after: `L441-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L441-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L441-L473) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L175-L177)

```diff
-       return yp((async () => {
-         Ep(await (0, xp.f)(!0), pp)
-       }))
+       const WQ = QQ.override(),
+         XQ = QQ.webGpuSetting(),
+         wQ = null === WQ && !0 !== XQ && QQ.xI(),
+         qQ = null !== WQ || null !== XQ || wQ ? null : QQ.claimed(),
+         TQ = null !== WQ ? "override" : !0 === XQ ? "setting" : wQ ? "pack" : !1 === XQ ? "setting" : null !== qQ ? "claim" : "default",
+         zQ = function(QQ) {
+           return "override" === QQ || "setting" === QQ
+         }(TQ);
+       if ("webgl" === WQ || "webgl1" === WQ || "webgl" === qQ || "setting" === TQ && !1 === XQ) return {
+         source: TQ,
+         asked: zQ,
+         refused: "not_requested"
+       };
+       if (!QQ.gpu) return {
+         source: TQ,
+         asked: zQ,
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L181-L183` → after: `L477-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L477-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L477-L526) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L181-L183)

```diff
-       return yp((async () => {
-         Ip.h.removeItem(Sp.d)
-       }))
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           ...fQ(),
+           override: () => SQ(!1)
+         },
+         WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rQ.isWebKit,
+         XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RQ;
+       try {
+         if (!WQ()) return !1;
+         const wQ = YQ(QQ);
+         if (!("gpu" in wQ) || wQ.heldBack) return !1;
+         const qQ = "default" === wQ.source ? LQ(XQ(), "apple") : null;
+         return null === qQ || !QQ.gpuClassOnWebGl(qQ)
+       } catch (wQ) {
+         return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", wQ), !1
+       }
+     }
+ ... (34 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L187` → after: `L530-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L530-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L530-L647) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L187)

```diff
-       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
+       if ("webgpu" !== QQ.backend) return !1;
+       const XQ = TW(QQ, WQ, "skyOrder", "early", "last");
+       return null !== XQ ? XQ : null !== QQ.adapter && (0, TQ.e)(QQ.adapter.vendor, QQ.adapter.architecture) === EQ
+     }
+ 
+     function QW(QQ, WQ) {
+       if ("webgpu" !== QQ.backend) return !1;
+       const XQ = TW(QQ, WQ, "uploadCopies", "off", "on");
+       return null !== XQ ? XQ : null !== QQ.adapter && "powervr_rogue" === (0, TQ.e)(QQ.adapter.vendor, QQ.adapter.architecture)
+     }
+ 
+     function WW(QQ, WQ, XQ) {
+       if ("webgpu" !== QQ.backend) return !1;
+       const wQ = TW(QQ, WQ, "sceneDepth", "off", "on");
+       return null !== wQ ? wQ : null !== QQ.adapter && (0, yQ.l)(QQ.adapter, XQ)
+     }
+ ... (102 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L190` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L650) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L190)

```diff
-   6792: (pp, ip, cp) => {
+   41034: (QQ, WQ, XQ) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L193` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L671-L672) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L193)

```diff
-       h: () => xp
+       g: () => rQ,
+       i: () => JQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L195-L216` → after: `L674-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L674-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L674-L737) · [Before (L195-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L195-L216)

```diff
-     var Op = cp(6798),
-       op = cp(6772),
-       Ip = cp(118);
-     const Sp = 100;
-     async function xp(pp, ip) {
-       var cp;
-       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
-       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
-       if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
-       const xp = await async function(pp) {
-         if (!pp) return null;
-         try {
-           const ip = await (0, Ip.s)(pp);
-           return ip ? await ip.requestDevice() : null
-         } catch (ip) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ip), null
- ... (6 more removed lines; see GitHub link above)
+     const wQ = 2e3,
+       qQ = "unavailable";
+     let TQ = () => Promise.resolve().then((() => XQ(3179))),
+       zQ = null,
+       sQ = null,
+       FQ = PQ();
+ 
+     function PQ() {
+       let QQ = () => {};
+       return {
+         promise: new Promise((WQ => {
+           QQ = () => {
+             WQ(null)
+           }
+         })),
+         resolve: QQ
+ ... (48 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L219-L240` → after: `L740-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L740-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L740-L742) · [Before (L219-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L219-L240)

```diff
-         const ip = await Promise.all(Sp.validationModules.map((ip => async function(pp, ip, cp) {
-           ip.pushErrorScope("validation");
-           const Op = ip.createShaderModule({
-               code: cp.code
-             }),
-             op = ip.popErrorScope(),
-             {
-               messages: Ip
-             } = await Op.getCompilationInfo(),
-             Sp = Ip.filter((pp => "error" === pp.type)).map((ip => pp.mapValidationMessage(cp, ip))),
-             xp = await op;
-           xp && 0 === Sp.length && Sp.push({
-             file: null,
-             line: 0,
-             message: xp.message,
-             variants: [cp.key]
- ... (6 more removed lines; see GitHub link above)
+         return IQ(await Promise.race([gQ(), TQ, FQ.promise]), QQ, WQ, XQ)
+       } catch {
+         return IQ(null, QQ, WQ, XQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L242` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L744) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L242)

```diff
-         xp.destroy()
+         clearTimeout(qQ)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L245-L258` → after: `L747-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L747-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L747-L920) · [Before (L245-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L245-L258)

```diff
-     async function Lp(pp, ip) {
-       var cp;
-       if (!(0, Op.shaderPackNeedsCheck)(pp, ip) || (0, Op.isOtherApiVersion)(pp)) return pp;
-       const op = await xp(ip, (0, Op.storedShaderPackFiles)(pp));
-       if (!op) return pp;
-       const Ip = !1 === (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) && !pp.validation.fromRecheck,
-         Sp = {
-           ...pp,
-           validation: Ip ? op : {
-             ...op,
-             fromRecheck: !0
-           }
-         };
-       return await (0, Op.replaceShaderPack)(pp, Sp, ip) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Sp
+   },
+   40963: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       BUILT_IN_ANIMATIONS_SITE: () => KQ,
+       CORE_ERRORS_SITE: () => SQ,
+       EVENT_OVERFLOW_SITE: () => OQ,
+       FIRST_VIEW_SITE: () => QW,
+       JOIN_SITE: () => oQ,
+       LEAVE_SITE: () => eQ,
+       MAIN_THREAD_SITE: () => WW,
+       MODEL_FEED_SITE: () => nQ,
+       MODEL_POOL_SITE: () => xQ,
+       NON_FATAL_LOKI_REPORTS_PER_PAGE: () => TW,
+       NON_FATAL_REPORTS_PER_SESSION: () => vW,
+       PREVIEW_ANIMATIONS_SITE: () => ZQ,
+       RENDER_RELOAD_SITE: () => NQ,
+ ... (158 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L261-L267` → after: `L924-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L924-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/142.js#L924-L1064) · [Before (L261-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/142.js#L261-L267)

```diff
-     function Yp(pp, ip, cp) {
-       return {
-         headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
-         ok: 0 === ip.length,
-         errors: ip.slice(0, Sp),
-         moreErrors: Math.max(0, ip.length - Sp),
-         offInStrict: cp
+     function JW(QQ) {
+       const WQ = gW;
+       return gW = QQ, WQ
+     }
+     let rW = () => {};
+ 
+     function IW(QQ) {
+       const WQ = rW;
+       return rW = QQ, WQ
+     }
+     let jW = "unpicked",
+       BW = !1;
+ 
+     function yW(QQ) {
+       jW = QQ
+     }
+ ... (125 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/143.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/143.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L5-L2461` → after: `L4-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L4-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/143.js#L4-L98) · [Before (L5-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/143.js#L5-L2461)

```diff
-   6849: (pp, ip, cp) => {
-     var Op = cp(6855);
-     ip.e = {
-       prefix: Op.prefix,
-       iconName: Op.iconName,
-       icon: [Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData]
-     }, ip.g = ip.e, Op.prefix, Op.iconName, Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData, Op.aliases
-   },
-   6858: (pp, ip, cp) => {
-     var Op = cp(6861);
-     ip.e = {
-       prefix: Op.prefix,
-       iconName: Op.iconName,
-       icon: [Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData]
-     }, ip.g = ip.e, Op.prefix, Op.iconName, Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData, Op.aliases
-   },
- ... (2441 more removed lines; see GitHub link above)
+   7007: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => GQ,
+       i: () => UQ,
+       k: () => DQ,
+       n: () => VQ
+     });
+     var wQ = XQ(7015);
+     const qQ = 6,
+       TQ = 3,
+       zQ = 1,
+       sQ = 2,
+       FQ = 4,
+       PQ = 8,
+       gQ = 16,
+       JQ = 32,
+ ... (79 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L2464-L2469` → after: `L102-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L102-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/143.js#L102-L124) · [Before (L2464-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/143.js#L2464-L2469)

```diff
-       c: () => Ip
-     });
-     var Op = {
-         prefix: "fas",
-         iconName: "shirt",
-         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       d: () => wQ,
+       h: () => rQ,
+       i: () => gQ,
+       k: () => yQ,
+       n: () => TQ,
+       p: () => sQ,
+       r: () => FQ,
+       t: () => zQ,
+       w: () => BQ,
+       z: () => IQ
+     });
+     const wQ = 3,
+       qQ = 0,
+       TQ = 1,
+       zQ = 2,
+       sQ = {
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L2471-L2472` → after: `L126-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L126-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/143.js#L126-L245) · [Before (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/143.js#L2471-L2472)

```diff
-       op = Op,
-       Ip = Op
+       FQ = 10,
+       PQ = "BloxdPackInputs",
+       gQ = "bloxdPackInputs",
+       JQ = [{
+         name: "seconds",
+         type: "f32",
+         offset: 0
+       }, {
+         name: "lit",
+         type: "u32",
+         offset: 4
+       }, {
+         name: "renderOffset",
+         type: "vec3i",
+         offset: 16
+       }, {
+ ... (104 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/144.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/144.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L4-L84` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L4-L8) · [Before (L4-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L4-L84)

```diff
-   8205: (pp, ip) => {
-     var cp = "youtube",
-       Op = [61802],
-       op = "f167",
-       Ip = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     ip.c = {
-       prefix: "fab",
-       iconName: cp,
-       icon: [576, 512, Op, op, Ip]
-     }, ip.e = ip.c
-   },
-   6983: (pp, ip) => {
-     Object.defineProperty(ip, "__esModule", {
-       value: !0
-     });
-     var cp = "bolt",
- ... (65 more removed lines; see GitHub link above)
+   41988: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       compilePagePack: () => PQ,
+       prefetchCompiler: () => sQ,
+       reconcileHint: () => FQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L86-L88` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L10-L13) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L86-L88)

```diff
-     var Op = cp(3405);
-     let op = null,
-       Ip = null;
+     var wQ = XQ(6984),
+       qQ = XQ(7024),
+       TQ = XQ(7002),
+       zQ = XQ(7018);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L91-L183` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L16) · [Before (L91-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L91-L183)

```diff
-       return Ip ??= cp.e(216).then((() => cp(36527))).then((pp => {
-         let {
-           ITEM_SPRITES: ip,
-           ITEM_SPRITES_WITHOUT_FILE: cp,
-           ITEM_FILES_WITHOUT_SPRITE: Ip
-         } = pp;
-         op = function(pp, ip, cp) {
-           const op = new Set,
-             Ip = (0, Op.w)(ip);
-           let Sp = 0;
-           for (const [Op, xp] of pp.entries()) Op === Ip[Sp] ? Sp++ : op.add(xp);
-           if ("" !== cp)
-             for (const xp of cp.split(Op.p)) op.add(xp);
-           return op
-         }(ip.split(Op.p), cp, Ip)
-       }), (pp => {
- ... (77 more removed lines; see GitHub link above)
+       (0, wQ.loadPageShaderPackCompiler)()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L185-L200` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L18-L20) · [Before (L185-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L185-L200)

```diff
-     const jp = new Map(Object.entries(dp).map((pp => {
-       let [ip, cp] = pp;
-       return [ip, ep(cp)]
-     })));
-     let kp = !1;
-     const mp = new Set;
-     var Rp = cp(41046);
-     const qp = "Jetbrains Mono",
-       Mp = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
-       Cp = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
- 
-     function Ep(pp) {
-       return pp.split(",").map((pp => {
-         const [ip, cp = ip] = pp.slice(2).split("-");
-         return [parseInt(ip, 16), parseInt(cp, 16)]
-       }))
+     async function FQ() {
+       const QQ = await (0, wQ.loadPageShaderPackCompiler)();
+       await (QQ ? (0, qQ.reconcileStoredShaderPackHint)(QQ) : (0, qQ.forgetShaderPackActiveHint)())
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L202-L220` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L22-L25) · [Before (L202-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L202-L220)

```diff
-     const Xp = {
-         latin: Ep(Mp),
-         rest: Ep(Cp)
-       },
-       lp = new RegExp(`[${Xp.rest.map((pp=>{let[ip,cp]=pp;return`\\u{${ip.toString(16)}}-\\u{${cp.toString(16)}}`})).join("")}]`, "u");
- 
-     function Qp(pp) {
-       return ip => {
-         console.warn(`[bloxd-wasm-client] the text font's ${pp} file did not load`, ip)
-       }
-     }
-     const Jp = 397,
-       Bp = 1,
-       Np = {
-         translate: pp => [pp],
-         keyBindingText: pp => pp,
- ... (3 more removed lines; see GitHub link above)
+     async function PQ(QQ) {
+       const WQ = await (0, wQ.loadPageShaderPackCompiler)();
+       if (!WQ) return {
+         status: "none"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L222-L255` → after: `L27-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L27-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L27-L50) · [Before (L222-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L222-L255)

```diff
-     let Tp = null,
-       fp = 0,
-       bp = "none";
- 
-     function hp() {
-       return fp
-     }
- 
-     function ap() {
-       fp++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? bp = "all" : "none" === bp && (bp = "notBoards")
-     }(0, Lp.v)((() => {
-       (function() {
-         const pp = kp;
-         return kp = !1, pp
-       })() && ap(!1)
-     }));
- ... (18 more removed lines; see GitHub link above)
+       const XQ = await (0, zQ.e)(QQ, WQ),
+         sQ = (0, qQ.storedPackOutcome)(XQ, WQ);
+       if ("none" === sQ.kind) return {
+         status: "none"
+       };
+       const FQ = WQ.JQQ((0, qQ.storedShaderPackFiles)(XQ), (0, TQ.shaderPackTextures)());
+       if ("blocked" === sQ.kind) return {
+         status: "blocked",
+         messageKey: sQ.messageKey,
+         variants: 0 === FQ.errors.length ? FQ.variants : null
+       };
+       if (FQ.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", FQ.errors), {
+         status: "none"
+       };
+       const {
+         name: PQ,
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L280-L281` → after: `L54-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L54-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L54-L79) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L280-L281)

```diff
-     const rp = new Map,
-       Zp = new Map;
+   },
+   7024: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       forgetShaderPackActiveHint: () => hQ,
+       isOtherApiVersion: () => dQ,
+       isShaderPackActive: () => GQ,
+       isShaderPackChangePending: () => vQ,
+       markShaderPackChangePending: () => bQ,
+       pageShaderPackValidationVersion: () => HQ,
+       reconcileStoredShaderPackHint: () => lQ,
+       removeShaderPack: () => pQ,
+       replaceShaderPack: () => yQ,
+       saveShaderPack: () => BQ,
+       shaderPackNeedsCheck: () => aQ,
+       storedPackOutcome: () => UQ,
+       storedShaderPackFiles: () => rQ,
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L284-L307` → after: `L82-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L82-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L82-L87) · [Before (L284-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L284-L307)

```diff
-       var Op;
-       const op = cp ? `${pp}#${cp.join(",")}` : pp,
-         Ip = rp.get(op);
-       if (Ip) return Ip.image;
-       const Sp = {
-         image: null !== (Op = Zp.get(op)) && void 0 !== Op ? Op : null
-       };
-       return rp.set(op, Sp), ip().then((async pp => {
-         if (null === pp) return null;
-         const ip = new Image;
-         ip.crossOrigin = "anonymous", ip.src = pp, await ip.decode();
-         const Op = await createImageBitmap(ip);
-         if (!cp) return Op;
-         try {
-           return function(pp, ip) {
-             let [cp, Op, op] = ip;
- ... (8 more removed lines; see GitHub link above)
+       return {
+         manifest: QQ.manifest,
+         files: (0, wQ.w)(QQ.files),
+         validation: WQ,
+         ...XQ && {
+           listing: XQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L410` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L93-L96) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L410)

```diff
-       return `bolder ${pp}px 'Jetbrains Mono'`
+       return Object.keys(QQ.files).map((WQ => ({
+         path: WQ,
+         source: QQ.files[WQ]
+       })))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L414` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L101-L102) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L414)

```diff
-       return "object" === typeof pp && null !== pp
+       const WQ = IQ.then(QQ);
+       return IQ = WQ.catch((() => {})), WQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L418-L419` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L106) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L418-L419)

```diff
-       const cp = "number" === typeof pp ? pp : "string" === typeof pp ? Number(pp.replace("px", "")) : NaN;
-       return Number.isFinite(cp) && cp > 0 ? cp : ip
+       return jQ((() => VQ(QQ, WQ)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L422-L423` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L109-L110) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L422-L423)

```diff
-     function Wp(pp) {
-       return Ap(pp) ? pp : void 0
+     function yQ(QQ, WQ, XQ) {
+       return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L425-L428` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L112-L114) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L425-L428)

```diff
- 
-     function yp(pp) {
-       const ip = "number" === typeof pp ? Sp.v[pp] : pp;
-       return "string" === typeof ip && Object.hasOwn(Sp.g, ip) ? Sp.g[ip] : void 0
+     async function VQ(QQ, WQ) {
+       const XQ = await TQ.f.setItem(sQ.b, QQ);
+       return XQ && iQ(QQ, WQ), XQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L430-L432` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L116-L117) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L430-L432)

```diff
- 
-     function Up(pp, ip) {
-       return "string" === typeof pp ? pp : Ap(pp) ? "string" === typeof pp.translationKey ? ip.translate(pp.translationKey, pp.params).map((pp => "string" === typeof pp ? pp : pp.icon)).join("") : "string" === typeof pp.entityName ? ip.shownPlayerName(pp.entityName) : "" : void 0 … [truncated]
+     async function DQ() {
+       await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L435-L496` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L120-L121) · [Before (L435-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L435-L496)

```diff
-     function wp(pp, ip, cp, Op) {
-       if (!Array.isArray(pp)) return [];
-       const op = [];
-       for (const Dp of pp) {
-         var Ip, Sp;
-         if (Ap(Dp) && "chatTag" in Dp) {
-           op.push({
-             kind: "rank",
-             rank: Dp
-           });
-           continue
-         }
-         if (Ap(Dp) && "icon" in Dp && !("mainRGB" in Dp)) {
-           var Yp;
-           op.push({
-             kind: "icon",
- ... (46 more removed lines; see GitHub link above)
+     function pQ() {
+       return jQ(DQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L500-L502` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L125) · [Before (L500-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L500-L502)

```diff
-       const cp = vp(pp),
-         Op = vp(ip);
-       return void 0 === pp && !Op || !cp && void 0 === ip ? 0 : cp !== Op ? .5 * Lp.HORIZONTAL_PADDING : 0
+       return "active" === UQ(QQ, WQ).kind
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L505-L548` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L128) · [Before (L505-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L505-L548)

```diff
-     function Hp(pp) {
-       return "rank" === pp.kind ? Lp.DEFAULT_FONT_SIZE : pp.size
-     }
- 
-     function dp(pp, ip, cp) {
-       return "icon" === pp.kind ? pp.size : "rank" === pp.kind ? function(pp, ip) {
-         const cp = ip.rankIcon(pp.rank.icon);
-         return cp ? Yp * (cp.width / cp.height) : Yp
-       }(pp, cp) + Lp.HORIZONTAL_PADDING : (cp.glyphsShown(pp.text), ip.font = Dp(pp.size), ip.measureText(pp.text).width)
-     }
- 
-     function ep(pp, ip, cp) {
-       if (0 === pp.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
- ... (28 more removed lines; see GitHub link above)
+     function UQ(QQ, WQ) {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L550-L578` → after: `L130-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L130-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L130-L149) · [Before (L550-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L550-L578)

```diff
-       if ("icon" === pp.kind) {
-         const Op = Ip.iconImage(pp.icon);
-         return Op && Sp.push({
-           image: Op,
-           x: ip,
-           y: cp + Lp.VERTICAL_PADDING / 2,
-           size: pp.size
-         }), pp.size
-       }
-       if ("rank" === pp.kind) {
-         const Sp = null !== xp && void 0 !== xp ? xp : dp(pp, op, Ip);
-         return function(pp, ip, cp, Op, op, Ip, Sp) {
-           var xp, Dp;
-           const {
-             rank: Ap
-           } = pp;
- ... (13 more removed lines; see GitHub link above)
+       return null === QQ ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : dQ(QQ) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : aQ(QQ, WQ) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : QQ.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L593-L604` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L153-L154) · [Before (L593-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L593-L604)

```diff
-     function mp(pp, ip) {
-       for (const {
-           image: cp,
-           x: Op,
-           y: op,
-           size: Ip
-         }
-         of pp) ip.imageSmoothingEnabled = !1, ip.drawImage(cp, Op, op, Ip, Ip)
-     }
- 
-     function Rp(pp, ip, cp, Op, op, Ip) {
-       pp.save(), pp.translate(cp, Op), pp.scale(op, op), pp.fillStyle = Ip, pp.fill(ip), pp.restore()
+     function bQ() {
+       TQ.m.setItem(PQ, performance.timeOrigin)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L607-L693` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L157-L158) · [Before (L607-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L607-L693)

```diff
-     function qp(pp, ip, cp) {
-       const Op = "object" === typeof pp && null !== pp ? pp : {},
-         op = function(pp, ip, cp) {
-           if (!Array.isArray(pp) || 0 === pp.length) return [];
-           const Op = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const Sp of wp(pp, Lp.DEFAULT_FONT_SIZE, cp)) {
-             if ("text" !== Sp.kind) {
-               Op[Op.length - 1].items.push({
-                 content: Sp,
-                 chars: 1,
-                 size: {
- ... (71 more removed lines; see GitHub link above)
+     function vQ() {
+       return TQ.m.getItem(PQ) === performance.timeOrigin
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L725-L730` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L162) · [Before (L725-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L725-L730)

```diff
-       return "object" !== typeof pp || null === pp || Array.isArray(pp) ? void 0 : pp
-     }
-     const bp = new Set(Mp.d);
- 
-     function hp(pp, ip) {
-       return "string" === typeof pp ? Pp(pp, ip) : ip
+       return !(0, qQ.g)(QQ.manifest.apiVersion)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L734` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L166) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L734)

```diff
-       return hp(pp.width, lp)
+       return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L739-L920` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L171) · [Before (L739-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L739-L920)

```diff
-       const Op = null !== (cp = pp.applyTo) && void 0 !== cp ? cp : "both";
-       return "both" === Op || Op === ip
-     }
- 
-     function Fp(pp) {
-       const ip = ap(pp);
-       return "glow" === pp.style ? ip * Qp : Math.ceil(ip / 2) + 1
-     }
- 
-     function gp(pp, ip, cp) {
-       var Op, op;
-       const Ip = null !== (Op = fp(pp.info)) && void 0 !== Op ? Op : {},
-         xp = "string" === typeof pp.name ? pp.name : "",
-         Yp = Ip.subtitle;
-       if (Array.isArray(Ip.content) && 0 === Ip.content.length && !(Array.isArray(Yp) && Yp.length > 0)) return null;
-       const Dp = "number" === typeof pp.hideNameSeed ? pp.hideNameSeed : null,
- ... (166 more removed lines; see GitHub link above)
+       return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L955-L961` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L175-L176) · [Before (L955-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L955-L961)

```diff
-       Vp.i.load().then((() => {
-         if (pp()) return;
-         const ip = (0, op.e)(1, 1, {
-           willReadFrequently: !0
-         });
-         var cp;
-         ip && (cp = ip.canvas, wi.map((pp => ki(pp, cp))))
+       return jQ((async () => {
+         iQ(await (0, sQ.f)(!0), QQ)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L967` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L181-L183) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L967)

```diff
-       Di.clear(), Ai.clear()
+       return jQ((async () => {
+         TQ.i.removeItem(zQ.c)
+       }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L971-L976` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L187) · [Before (L971-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L971-L976)

```diff
-       const cp = pp.get(ip);
-       return void 0 !== cp && (pp.delete(ip), pp.set(ip, cp)), cp
-     }
- 
-     function ei(pp, ip, cp) {
-       pp.set(ip, cp), pp.size > Oi && pp.delete(pp.keys().next().value)
+       GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L978-L998` → after: `L189-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L189-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L189-L210) · [Before (L978-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L978-L998)

```diff
- 
-     function ui(pp, ip, cp) {
-       if (pp === ii.Nametag) {
-         let pp = di(Di, ip);
-         return void 0 === pp && (pp = gp(JSON.parse(ip), cp, Li), ei(Di, ip, pp)), pp
-       }
-       if (pp === ii.MultilineText) {
-         var op;
-         const pp = JSON.parse(ip),
-           Op = JSON.stringify(null !== (op = pp.box) && void 0 !== op ? op : null),
-           Ip = "number" === typeof pp.shown ? pp.shown : null;
-         let Sp = di(Ai, Op);
-         void 0 === Sp && (Sp = qp(pp.box, cp, Li), ei(Ai, Op, Sp));
-         const xp = null === Ip ? null : Math.min(Math.max(0, Math.floor(Ip)), Sp.chars),
-           Lp = Sp;
-         return {
- ... (5 more removed lines; see GitHub link above)
+   },
+   7018: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => FQ,
+       g: () => sQ
+     });
+     var wQ = XQ(7024),
+       qQ = XQ(7002),
+       TQ = XQ(134);
+     const zQ = 100;
+     async function sQ(QQ, WQ) {
+       var XQ;
+       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
+       const zQ = QQ.JQQ(WQ, (0, qQ.shaderPackTextures)());
+       if (zQ.errors.length > 0) return PQ(QQ, zQ.errors, zQ.offInStrict);
+       const sQ = await async function(QQ) {
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L1001-L1052` → after: `L244-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L244-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L244-L255) · [Before (L1001-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L1001-L1052)

```diff
-       if (pp === ii.Board) return function(pp, ip) {
-         var cp;
-         if (!ip.canSeePlayerWrittenText) return null;
-         const {
-           shared: op,
-           w: Ip = 0,
-           h: Sp = 0
-         } = pp, xp = !Ip;
-         let Lp;
-         if (xp) {
-           var Yp, Dp;
-           Lp = null !== (Yp = null === op || void 0 === op || null === (Dp = op.text) || void 0 === Dp ? void 0 : Dp.toString()) && void 0 !== Yp ? Yp : ""
-         } else {
-           if ("string" !== typeof(null === op || void 0 === op ? void 0 : op.text)) return null;
-           Lp = op.text
-         }
- ... (36 more removed lines; see GitHub link above)
+     }
+     async function FQ(QQ, WQ) {
+       var XQ;
+       if (!(0, wQ.shaderPackNeedsCheck)(QQ, WQ) || (0, wQ.isOtherApiVersion)(QQ)) return QQ;
+       const qQ = await sQ(WQ, (0, wQ.storedShaderPackFiles)(QQ));
+       if (!qQ) return QQ;
+       const TQ = !1 === (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) && !QQ.validation.fromRecheck,
+         zQ = {
+           ...QQ,
+           validation: TQ ? qQ : {
+             ...qQ,
+             fromRecheck: !0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L1054-L1056` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L257-L258) · [Before (L1054-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L1054-L1056)

```diff
-         }
-       }(JSON.parse(ip), Li, ci);
-       throw new Error(`unknown text plane kind ${pp}`)
+         };
+       return await (0, wQ.replaceShaderPack)(QQ, zQ, WQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), zQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L1060-L1105` → after: `L261-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L261-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/144.js#L261-L267) · [Before (L1060-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/144.js#L1060-L1105)

```diff
-     function ki(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (pp.length < 2) return [0, 0];
-         const Ip = (0, op.c)(ip);
-         if (!Ip) return [0, 0];
-         const Sp = ti();
-         Sp !== Yi && (Yi = Sp, Hi());
-         const [xp] = pp, Lp = xi.decode(pp.subarray(1));
-         let Yp;
-         xp !== ii.Board && xp !== ii.Leaderboard || !Li.canSeePlayerWrittenText || Li.glyphsShown(Lp), Ip.save();
-         try {
-           Yp = ui(xp, Lp, Ip)
-         } finally {
-           Ip.restore()
- ... (30 more removed lines; see GitHub link above)
+     function PQ(QQ, WQ, XQ) {
+       return {
+         headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
+         ok: 0 === WQ.length,
+         errors: WQ.slice(0, zQ),
+         moreErrors: Math.max(0, WQ.length - zQ),
+         offInStrict: XQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/145.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/145.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L5-L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L5-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/145.js#L5-L2461) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/145.js#L4)

```diff
-   8212: (pp, ip, cp) => {
+   7067: (QQ, WQ, XQ) => {
+     var wQ = XQ(7075);
+     WQ.c = {
+       prefix: wQ.prefix,
+       iconName: wQ.iconName,
+       icon: [wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData]
+     }, WQ.d = WQ.c, wQ.prefix, wQ.iconName, wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData, wQ.aliases
+   },
+   7077: (QQ, WQ, XQ) => {
+     var wQ = XQ(7086);
+     WQ.c = {
+       prefix: wQ.prefix,
+       iconName: wQ.iconName,
+       icon: [wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData]
+     }, WQ.f = WQ.c, wQ.prefix, wQ.iconName, wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData, wQ.aliases
+   },
+ ... (2441 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L6` → after: `L2463-L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L2463-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/145.js#L2463-L2464) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/145.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => op
+       c: () => qQ,
+       g: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L8-L12` → after: `L2466-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L2466-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/145.js#L2466-L2472) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/145.js#L8-L12)

```diff
-     var Op = cp(3837);
- 
-     function op(pp) {
-       return Op.h.toBuffer(pp)
-     }
+     var wQ = {
+         prefix: "fas",
+         iconName: "shirt",
+         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       },
+       qQ = wQ,
+       TQ = wQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/146.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/146.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L4-L8` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L4-L17) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L4-L8)

```diff
-   8218: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       BloxdDiscordSDK: () => Up,
-       DiscordLoginCancelledError: () => yp,
-       discordPopupTimeoutMs: () => Wp
+   8443: (QQ, WQ) => {
+     var XQ = "youtube",
+       wQ = [61802],
+       qQ = "f167",
+       TQ = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     WQ.d = {
+       prefix: "fab",
+       iconName: XQ,
+       icon: [576, 512, wQ, qQ, TQ]
+     }, WQ.g = WQ.d
+   },
+   7213: (QQ, WQ) => {
+     Object.defineProperty(WQ, "__esModule", {
+       value: !0
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L10-L36` → after: `L19-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L19-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L19-L182) · [Before (L10-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L10-L36)

```diff
-     var Op = cp(156),
-       op = cp(1236),
-       Ip = cp(1149),
-       Sp = cp(1162),
-       xp = cp.n(Sp),
-       Lp = cp(1211),
-       Yp = cp(44),
-       Dp = cp(640),
-       Ap = cp(1372),
-       Pp = cp(1087);
-     const Wp = 6e5;
-     class yp extends Error {
-       constructor() {
-         super(...arguments), this.name = Ip.discordLoginCancelledErrorName
-       }
-     }
- ... (11 more removed lines; see GitHub link above)
+     var XQ = "bolt",
+       wQ = [9889, "zap"],
+       qQ = "f0e7",
+       TQ = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     WQ.definition = {
+       prefix: "fas",
+       iconName: XQ,
+       icon: [448, 512, wQ, qQ, TQ]
+     }, WQ.faBolt = WQ.definition, WQ.prefix = "fas", WQ.iconName = XQ, WQ.width = 448, WQ.height = 512, WQ.ligatures = wQ, WQ.unicode = qQ, WQ.svgPathData = TQ, WQ.aliases = wQ
+   },
+   7947: (QQ, WQ) => {
+     var XQ = "person-military-pointing",
+       wQ = [],
+       qQ = "e54a",
+       TQ = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
+     WQ.b = {
+ ... (148 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L38-L39` → after: `L184-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L184-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L184-L210) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L38-L39)

```diff
-       resetPopupState() {
-         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+     }
+     const bQ = new Map(Object.entries(GQ).map((QQ => {
+       let [WQ, XQ] = QQ;
+       return [WQ, UQ(XQ)]
+     })));
+     let vQ = !1;
+     const dQ = new Set;
+     var HQ = XQ(41056);
+     const aQ = "Jetbrains Mono",
+       lQ = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
+       hQ = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
+ 
+     function iQ(QQ) {
+       return QQ.split(",").map((QQ => {
+         const [WQ, XQ = WQ] = QQ.slice(2).split("-");
+         return [parseInt(WQ, 16), parseInt(XQ, 16)]
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L41` → after: `L212-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L212-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L212-L259) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L41)

```diff
-       failPopup(pp) {
+     }
+     const EQ = 397,
+       CQ = 1,
+       uQ = {
+         translate: QQ => [QQ],
+         keyBindingText: QQ => QQ,
+         isFriend: () => !1,
+         hiddenNames: {},
+         loadsFontRest: !1
+       };
+     let LQ = null,
+       kQ = 0,
+       fQ = "none";
+ 
+     function SQ() {
+       return kQ
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L43-L102` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L261) · [Before (L43-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L43-L102)

```diff
-         const cp = this.popupWindowPromiseReject;
-         null === (ip = this.popupWindow) || void 0 === ip || ip.close(), this.resetPopupState(), null === cp || void 0 === cp || cp(pp)
-       }
-       openDiscordOAuthWindow() {
-         const pp = Pp.c.discordClientID;
-         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${pp}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
-       }
-       async showDiscordAuthPrompt() {
-         return new Promise(((pp, ip) => {
-           Ap.NotificationProvider.showPromptPopup({
-             title: "Discord Login Required",
-             confirmText: "Continue",
-             confirmTooltip: "Open Discord login window",
-             cancelText: "Cancel",
-             cancelTooltip: "Cancel Discord login"
-           }).getResult().then((cp => {
- ... (44 more removed lines; see GitHub link above)
+         this.restWanted || (this.restWanted = !0, null === (QQ = this.rest) || void 0 === QQ || QQ.load())
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L104-L106` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L263-L264) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L104-L106)

```diff
-       hasCurrentUser() {
-         const pp = Yp.e.getItem(this.bloxdDiscordRefreshTokenKey);
-         return !(0, Dp.G)(pp)
+       loadFor(QQ) {
+         !this.restWanted && AQ.test(QQ) && this.loadRest()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L108-L111` → after: `L266-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L266-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L266-L296) · [Before (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L108-L111)

```diff
-       async getCurrentUser(pp) {
-         const ip = Yp.e.getItem(this.bloxdDiscordRefreshTokenKey);
-         if (!ip) return null;
-         let cp;
+     }(tQ);
+ 
+     function eQ(QQ) {
+       Object.assign(uQ, QQ), uQ.loadsFontRest && oQ.loadRest(), tQ(!1)
+     }
+ 
+     function nQ(QQ) {
+       QQ !== LQ && (LQ = QQ, tQ())
+     }
+ 
+     function xQ(QQ) {
+       if ("none" === fQ || null === QQ) return;
+       QQ(EQ, "all" === fQ ? 0 : CQ, new Uint8Array(0)) && (fQ = "none")
+     }
+     const YQ = new Map,
+       NQ = new Map;
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L113-L125` → after: `L298-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L298-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L298-L443) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L113-L125)

```diff
-           const Op = await xp()((async () => {
-             try {
-               return await (0, Ip.postJsonWithMetricsCookiesAndJsonResponse)(`${Lp.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: ip
-               }, {
-                 retries: 0
-               }, pp.getMetricsCookies())
-             } catch (cp) {
-               if (wp(cp)) throw new(xp().AbortError)(cp);
-               throw cp
-             }
-           }), {
-             retries: 3
+           return function(QQ, WQ) {
+             let [XQ, wQ, qQ] = WQ;
+             const TQ = (0, PQ.g)(QQ.width, QQ.height),
+               {
+                 canvas: zQ
+               } = TQ;
+             return TQ.drawImage(QQ, 0, 0), TQ.globalCompositeOperation = "multiply", TQ.fillStyle = `rgb(${XQ}, ${wQ}, ${qQ})`, TQ.fillRect(0, 0, zQ.width, zQ.height), TQ.globalCompositeOperation = "destination-in", TQ.drawImage(QQ, 0, 0), zQ
+           }(wQ, XQ)
+         } finally {
+           wQ.close()
+         }
+       })).then((QQ => {
+         YQ.get(qQ) === zQ && NQ.delete(qQ), QQ !== zQ.image && (zQ.image = QQ, tQ(!1))
+       }), (WQ => {
+         console.warn(`[bloxd-wasm-client] text icon ${QQ} did not load`, WQ), YQ.get(qQ) === zQ && (YQ.delete(qQ), NQ.delete(qQ), null !== zQ.image && tQ(!1))
+       })), zQ.image
+ ... (130 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L127-L129` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L445) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L127-L129)

```diff
-           cp = Op.accessToken, Yp.e.setItem(this.bloxdDiscordRefreshTokenKey, Op.refreshToken)
-         } catch (Op) {
-           return wp(Op) ? (Yp.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Op), null)
+           continue
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L131-L132` → after: `L447-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L447-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L447-L598) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L131-L132)

```diff
-         return {
-           accessToken: cp
+         if (JQ(gQ) && "icon" in gQ && !("mainRGB" in gQ)) {
+           var PQ;
+           qQ.push({
+             kind: "icon",
+             icon: String(gQ.icon),
+             size: rQ(null === (PQ = IQ(gQ.style)) || void 0 === PQ ? void 0 : PQ.fontSize, FQ.DEFAULT_FONT_SIZE)
+           });
+           continue
+         }
+         if (JQ(gQ) && (0, sQ.zb)(gQ)) {
+           qQ.push({
+             kind: "text",
+             text: "",
+             size: WQ,
+             colour: wQ
+           });
+ ... (136 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L135-L136` → after: `L671-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L671-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L671-L692) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L135-L136)

```diff
-       signOut() {
-         this.failPopup(new yp("Signed out of Discord during login")), Yp.e.removeItem(this.bloxdDiscordRefreshTokenKey)
+       const gQ = "string" === typeof wQ.backgroundColor ? wQ.backgroundColor : "#22283b";
+       return {
+         width: zQ,
+         height: sQ,
+         chars: PQ,
+         draw: (QQ, WQ) => {
+           const wQ = [];
+           if (QQ.fillStyle = gQ, QQ.fillRect(0, 0, zQ, sQ), null === WQ)
+             for (const TQ of qQ) TQ.items.length > 0 && bQ(TQ.items.map((QQ => QQ.content)), 0, TQ.y, TQ.height, QQ, XQ, wQ);
+           else {
+             let TQ = 0;
+             for (const zQ of qQ)
+               for (const qQ of zQ.items) {
+                 if (TQ >= WQ) break;
+                 vQ("text" === qQ.content.kind ? {
+                   ...qQ.content,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L141` → after: `L744-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L744-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/146.js#L744-L1106) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/146.js#L141)

```diff
-       return pp instanceof Op.e && 435 === pp.httpCode
+       const WQ = tQ(QQ);
+       return "glow" === QQ.style ? WQ * RQ : Math.ceil(WQ / 2) + 1
+     }
+ 
+     function nQ(QQ, WQ, XQ) {
+       var wQ, qQ;
+       const TQ = null !== (wQ = kQ(QQ.info)) && void 0 !== wQ ? wQ : {},
+         sQ = "string" === typeof QQ.name ? QQ.name : "",
+         PQ = TQ.subtitle;
+       if (Array.isArray(TQ.content) && 0 === TQ.content.length && !(Array.isArray(PQ) && PQ.length > 0)) return null;
+       const gQ = "number" === typeof QQ.hideNameSeed ? QQ.hideNameSeed : null,
+         JQ = "" === sQ || !0 === QQ.mesh ? sQ : (0, hQ.c)(sQ, !XQ.canSeeRealPlayerNames, gQ);
+       if (!JQ && !TQ.content) return null;
+       const rQ = "string" === typeof QQ.colour ? QQ.colour : "default",
+         IQ = Object.hasOwn(zQ.s, rQ) ? zQ.s[rQ] : void 0,
+         BQ = TQ.content ? yQ(TQ.content, FQ.DEFAULT_FONT_SIZE, XQ, IQ) : [{
+ ... (347 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/147.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/147.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39)

#### 1. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/147.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/147.js#L4-L6)

```diff
-   8220: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       BloxdFirebaseSdk: () => Pp
+   8449: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       encodeBinaryMessageWithMetricsCookies: () => qQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L8-L161` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/147.js#L8-L11) · [Before (L8-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/147.js#L8-L161)

```diff
-     var Op = cp(1860),
-       op = cp(3003),
-       Ip = cp(108),
-       Sp = cp(104),
-       xp = cp(1705),
-       Lp = cp(2080);
-     const Yp = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
-     };
-     var Dp = cp(3025),
-       Ap = cp(1742);
- ... (138 more removed lines; see GitHub link above)
+     var wQ = XQ(3984);
+ 
+     function qQ(QQ) {
+       return wQ.j.toBuffer(QQ)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/148.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/148.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L4)

```diff
-   8224: (pp, ip, cp) => {
+   8453: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L6)

```diff
-       BloxdDiscordActivitySdk: () => tp
+       BloxdDiscordSDK: () => BQ,
+       DiscordLoginCancelledError: () => jQ,
+       discordPopupTimeoutMs: () => IQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L8-L63` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L10-L25) · [Before (L8-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L8-L63)

```diff
-     var Op = cp(8232),
-       op = cp(1236),
-       Ip = cp(1201),
-       Sp = cp(640),
-       xp = cp(1260),
-       Lp = cp(1765),
-       Yp = cp(1349),
-       Dp = cp(768),
-       Ap = cp(25),
-       Pp = cp(1087),
-       Wp = function(pp) {
-         return pp.APPLICATION_COMMANDS = "applications.commands", pp.IDENTIFY = "identify", pp.EMAIL = "email", pp.GUILDS = "guilds", pp.READ_DM_CHANNELS = "dm_channels.read", pp.WRITE_ACTIVITIES = "rpc.activities.write", pp
-       }(Wp || {}),
-       yp = function(pp) {
-         return pp[pp.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", pp[pp.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", pp[pp.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", pp[pp.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", pp[pp.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", pp[pp.RATELIMITE … [truncated]
-       }(yp || {}),
- ... (40 more removed lines; see GitHub link above)
+     var wQ = XQ(193),
+       qQ = XQ(1263),
+       TQ = XQ(1165),
+       zQ = XQ(1186),
+       sQ = XQ.n(zQ),
+       FQ = XQ(1238),
+       PQ = XQ(43),
+       gQ = XQ(663),
+       JQ = XQ(1404),
+       rQ = XQ(1118);
+     const IQ = 6e5;
+     class jQ extends Error {
+       constructor() {
+         super(...arguments), this.name = TQ.discordLoginCancelledErrorName
+       }
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L65-L114` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L27-L35) · [Before (L65-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L65-L114)

```diff
-       constructor(pp) {
-         this.discordSdk = pp, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
-       }
-       static async setup() {
-         console.log("Setting up Discord SDK with client id", Pp.c.discordClientID);
-         const pp = new Op.c(Pp.c.discordClientID);
-         let ip = !1;
-         setTimeout((() => {
-           ip || (console.warn("Discord SDK took too long to initialize"), (0, Lp.reloadBloxd)())
-         }), 15e3), await pp.ready(), ip = !0;
-         try {
-           const {
-             enabled: ip
-           } = await pp.commands.encourageHardwareAcceleration();
-           ip || console.warn("Hardware acceleration not enabled in the Discord client")
-         } catch (op) {
- ... (34 more removed lines; see GitHub link above)
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const QQ = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (WQ => {
+           var XQ;
+           if (WQ.origin !== QQ || "oauth_authentication_discord" !== (null === (XQ = WQ.data) || void 0 === XQ ? void 0 : XQ.type)) return;
+           if ("string" !== typeof WQ.data.code || !WQ.data.code) return void this.failPopup(new jQ("Discord authentication was cancelled on Discord"));
+           const wQ = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === wQ || void 0 === wQ || wQ(WQ.data.code)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L117` → after: `L38-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L38-L41) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L117)

```diff
-       async getInGameDescriptions() {
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+       }
+       failPopup(QQ) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L120-L130` → after: `L91-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L91-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L91-L132) · [Before (L120-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L120-L130)

```diff
-           requestedGameNameWithVariation: ip
-         } = (0, Yp.d)(), cp = (0, Dp.i)(ip), Op = null !== (pp = vp[ip]) && void 0 !== pp ? pp : wp[cp.type], op = await (0, Ip.D)(xp.c.ENGLISH, cp.title), Lp = (0, Yp.d)();
-         if ((0, Yp.i)(Lp)) return {
-           primary: `${Op} in a Discord World`
-         };
-         const Ap = `${Op} in ${op}`;
-         return (0, Sp.G)(Lp.lobbyName) ? {
-           primary: Ap
-         } : {
-           primary: Ap,
-           secondary: `Lobby ${Lp.lobbyName}`
+           accessToken: XQ,
+           refreshToken: wQ
+         } = await sQ()((async () => await (0, TQ.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+           authorizationCode: QQ,
+           bloxdClientEnvironment: rQ.d.clientEnvironment,
+           instanceId: null
+         }, {
+           retries: 0
+         }, WQ.getMetricsCookies())), {
+           retries: 3
+         });
+         return console.log("Discord access token received:", wQ, this.bloxdDiscordRefreshTokenKey), PQ.b.setItem(this.bloxdDiscordRefreshTokenKey, wQ), XQ
+       }
+       hasCurrentUser() {
+         const QQ = PQ.b.getItem(this.bloxdDiscordRefreshTokenKey);
+         return !(0, gQ.G)(QQ)
+ ... (26 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L133-L138` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L135-L136) · [Before (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L133-L138)

```diff
-       getCurrentChannelType() {
-         const {
-           channelId: pp,
-           guildId: ip
-         } = this.getCurrentChannelAndGuild();
-         return null !== ip ? op.c.GUILD : null !== pp ? op.c.DM : null
+       signOut() {
+         this.failPopup(new jQ("Signed out of Discord during login")), PQ.b.removeItem(this.bloxdDiscordRefreshTokenKey)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L140-L249` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/148.js#L138-L141) · [Before (L140-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/148.js#L140-L249)

```diff
-       getRequiredScopeForCurrentChannel() {
-         const pp = this.getCurrentChannelType(),
-           ip = [Wp.APPLICATION_COMMANDS, Wp.IDENTIFY, Wp.EMAIL, Wp.GUILDS, Wp.WRITE_ACTIVITIES];
-         switch (pp) {
-           case op.c.DM:
-           case op.c.GUILD:
-             return [...ip];
-           default:
-             throw new Error(`Unknown Discord channel type: ${pp}`)
-         }
-       }
-       getCurrentChannelAndGuild() {
-         const {
-           channelId: pp,
-           guildId: ip
-         } = this.discordSdk;
- ... (94 more removed lines; see GitHub link above)
+     }
+ 
+     function yQ(QQ) {
+       return QQ instanceof wQ.b && 435 === QQ.httpCode
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/149.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/149.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4-L4534` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L4-L13) · [Before (L4-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4-L4534)

```diff
-   8232: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => YI,
-       g: () => Tc
-     });
-     var Op = {};
-     cp.r(Op), cp.d(Op, {
-       b: () => SO,
-       h: () => YO,
-       f: () => LO,
-       k: () => Kc,
-       n: () => sc,
-       r: () => XO,
-       u: () => iO,
-       v: () => JO,
-       x: () => mO,
- ... (4515 more removed lines; see GitHub link above)
+   8455: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       BloxdFirebaseSdk: () => rQ
+     });
+     var wQ = XQ(1898),
+       qQ = XQ(3158),
+       TQ = XQ(121),
+       zQ = XQ(105),
+       sQ = XQ(1747),
+       FQ = XQ(2115);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4536-L4638` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L15-L20) · [Before (L4536-L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4536-L4638)

```diff
-       [NO.READY]: {
-         payload: TO.extend({
-           evt: Yc(NO.READY),
-           data: Ki({
-             v: Ni(),
-             config: Ki({
-               cdn_host: Bi().optional(),
-               api_endpoint: Bi(),
-               environment: Bi()
-             }),
-             user: Ki({
-               id: Bi(),
-               username: Bi(),
-               discriminator: Bi(),
-               avatar: Bi().optional()
-             }).optional()
- ... (87 more removed lines; see GitHub link above)
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4640-L4831` → after: `L22-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L22-L31) · [Before (L4640-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4640-L4831)

```diff
-     const nO = Ki({}).nullable(),
-       FO = Ki({
-         code: Bi()
-       }),
-       gO = Ki({
-         guilds: si(Ki({
-           id: Bi(),
-           name: Bi()
-         }))
-       }),
-       GO = Ki({
-         id: Bi(),
-         name: Bi(),
-         icon_url: Bi().optional(),
-         members: si(iO)
-       }),
- ... (176 more removed lines; see GitHub link above)
+     var gQ = XQ(3176),
+       JQ = XQ(1776);
+     class rQ {
+       constructor() {}
+       static async setup() {
+         try {
+           return await rQ.setupInternal()
+         } catch (QQ) {
+           return console.error("Failed to setup Firebase SDK:", QQ), null
+         }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4833-L4840` → after: `L33-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L33-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L33-L50) · [Before (L4833-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4833-L4840)

```diff
-     }
- 
-     function Uo(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
-       const cp = zc[pp].response,
-         Op = Vc.extend({
-           cmd: Yc(pp),
-           data: cp
+       static async setupInternal() {
+         const QQ = await Promise.all([XQ.e(274), XQ.e(273)]).then((() => XQ(40746))),
+           WQ = await Promise.all([XQ.e(274), XQ.e(275)]).then((() => XQ(40773))),
+           IQ = await Promise.all([XQ.e(274), XQ.e(276)]).then((() => XQ(40779))),
+           jQ = QQ.initializeApp({
+             ...PQ,
+             measurementId: qQ.bloxdGa4MeasurementId
+           });
+         (0, qQ.setUpGtag)(), window.gtag("config", qQ.bloxdGa4MeasurementId), (0, qQ.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const BQ = WQ.getAnalytics(jQ),
+           yQ = {
+             portal: TQ.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         WQ.setUserProperties(BQ, yQ);
+         const VQ = IQ.initializeAuth(jQ, {
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4842-L4846` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L52-L55) · [Before (L4842-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4842-L4846)

```diff
-       return cp => async op => {
-         const Ip = await cp({
-           cmd: pp,
-           args: op,
-           transfer: ip(op)
+         IQ.useDeviceLanguage(VQ);
+         const DQ = new IQ.GoogleAuthProvider;
+         DQ.setCustomParameters({
+           prompt: "select_account"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4848-L4893` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L57-L61) · [Before (L4848-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4848-L4893)

```diff
-         return Op.parse(Ip).data
-       }
-     }
-     const wo = Uo(Gc.AUTHENTICATE),
-       vo = pp => yo(pp, Kc.AUTHORIZE, FO),
-       to = pp => yo(pp, Kc.CAPTURE_LOG, nO),
-       Ho = pp => yo(pp, Kc.ENCOURAGE_HW_ACCELERATION, So),
-       eo = pp => yo(pp, Kc.GET_ENTITLEMENTS_EMBEDDED, co),
-       uo = pp => yo(pp, Kc.GET_SKUS_EMBEDDED, io),
-       jo = pp => yo(pp, Kc.GET_CHANNEL_PERMISSIONS, xo),
-       ko = pp => yo(pp, Kc.GET_PLATFORM_BEHAVIORS, Lo),
-       mo = pp => yo(pp, Kc.OPEN_EXTERNAL_LINK, nO),
-       Ro = pp => yo(pp, Kc.OPEN_INVITE_DIALOG, nO),
-       qo = Uo(Gc.OPEN_SHARE_MOMENT_DIALOG);
-     SO.SW({
-       state: !0,
- ... (30 more removed lines; see GitHub link above)
+         const pQ = new IQ.OAuthProvider(wQ.i[wQ.d.APPLE]),
+           GQ = new IQ.OAuthProvider(wQ.i[wQ.d.MICROSOFT]);
+         GQ.setCustomParameters({
+           prompt: "select_account",
+           tenant: "consumers"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4895-L5229` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L63-L66) · [Before (L4895-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L4895-L5229)

```diff
-         return async pp => {
-           try {
-             const Op = await ip({
-               cmd: cp,
-               args: pp,
-               transfer: Ip(pp)
-             });
-             return Sp.parse(Op).data
-           } catch (Op) {
-             if (Op.code === Bc.INVALID_PAYLOAD) {
-               const Op = op(pp),
-                 xp = await ip({
-                   cmd: cp,
-                   args: Op,
-                   transfer: Ip(Op)
-                 });
- ... (319 more removed lines; see GitHub link above)
+         const UQ = {
+           [wQ.d.GOOGLE]: DQ,
+           [wQ.d.APPLE]: pQ,
+           [wQ.d.MICROSOFT]: GQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L5231-L5259` → after: `L68-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L68-L77) · [Before (L5231-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L5231-L5259)

```diff
-         SI.forEach((ip => {
-           ! function(pp, ip, cp) {
-             const Op = pp[ip],
-               op = pp;
-             Op && (pp[ip] = function() {
-               const pp = [].slice.call(arguments),
-                 Ip = "" + pp.join(" ");
-               cp(ip, Ip), Op.apply(op, pp)
-             })
-           }(console, ip, pp)
-         }))
-       }
-       handleClose(pp) {
-         Ao.parse(pp)
-       }
-       handleHandshake() {}
- ... (13 more removed lines; see GitHub link above)
+         window.gtag("set", {
+           cookie_flags: "SameSite=None;Secure"
+         }), await new Promise((QQ => {
+           const WQ = IQ.onIdTokenChanged(VQ, (XQ => {
+             WQ(), QQ()
+           }))
+         }));
+         class bQ extends rQ {
+           setUserProperties(QQ) {
+             WQ.setUserProperties(BQ, QQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L5261-L5591` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L79-L80) · [Before (L5261-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L5261-L5591)

```diff
-           if (null == Op.nonce) return void console.error("Missing nonce", pp);
-           null === (cp = this.pendingCommands.get(Op.nonce)) || void 0 === cp || cp.resolve(Op), this.pendingCommands.delete(Op.nonce)
-         }
-       }
-       _getSearch() {
-         return "undefined" === typeof window ? "" : window.location.search
-       }
-     }
-     var DI, AI = 1e9,
-       PI = !0,
-       WI = "[DecimalError] ",
-       yI = WI + "Invalid argument: ",
-       UI = WI + "Exponent out of range: ",
-       wI = Math.floor,
-       vI = Math.pow,
-       tI = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
- ... (315 more removed lines; see GitHub link above)
+           onIdTokenChanged(QQ) {
+             IQ.onIdTokenChanged(VQ, QQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L5593-L5664` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L82-L83) · [Before (L5593-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L5593-L5664)

```diff
-           if (Ap[Dp] += Ip, Ap[Dp] != HI) break;
-           Ap[Dp--] = 0, Ip = 1
-         }
-       for (Op = Ap.length; 0 === Ap[--Op];) Ap.pop();
-       if (PI && (pp.e > eI || pp.e < -eI)) throw Error(UI + MI(pp));
-       return pp
-     }
- 
-     function JI(pp, ip) {
-       var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp = pp.constructor,
-         Wp = Pp.precision;
-       if (!pp.s || !ip.s) return ip.s ? ip.s = -ip.s : ip = new Pp(pp), PI ? QI(ip, Wp) : ip;
-       if (Lp = pp.d, Ap = ip.d, Op = ip.e, Yp = pp.e, Lp = Lp.slice(), Sp = Yp - Op) {
-         for ((Dp = Sp < 0) ? (cp = Lp, Sp = -Sp, xp = Ap.length) : (cp = Ap, Op = Yp, xp = Lp.length), Sp > (op = Math.max(Math.ceil(Wp / 7), xp) + 2) && (Sp = op, cp.length = 1), cp.reverse(), op = Sp; op--;) cp.push(0);
-         cp.reverse()
-       } else {
- ... (56 more removed lines; see GitHub link above)
+           canSignIn() {
+             return !0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L5666-L5930` → after: `L85-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L85-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L85-L108) · [Before (L5666-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L5666-L5930)

```diff
-           return pp === ~~pp && pp < 1e7 ? (ip.e = 0, void(ip.d = [pp])) : lI(ip, pp.toString())
-         }
-         if ("string" !== typeof pp) throw Error(yI + pp);
-         if (45 === pp.charCodeAt(0) ? (pp = pp.slice(1), ip.s = -1) : ip.s = 1, !tI.test(pp)) throw Error(yI + pp);
-         lI(ip, pp)
-       }
-       if (Ip.prototype = uI, Ip.ROUND_UP = 0, Ip.ROUND_DOWN = 1, Ip.ROUND_CEIL = 2, Ip.ROUND_FLOOR = 3, Ip.ROUND_HALF_UP = 4, Ip.ROUND_HALF_DOWN = 5, Ip.ROUND_HALF_EVEN = 6, Ip.ROUND_HALF_CEIL = 7, Ip.ROUND_HALF_FLOOR = 8, Ip.clone = pp, Ip.config = Ip.set = TI, void 0 === ip &&  … [truncated]
-         for (op = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], cp = 0; cp < op.length;) ip.hasOwnProperty(Op = op[cp++]) || (ip[Op] = this[Op]);
-       return Ip.config(ip), Ip
-     }({
-       precision: 20,
-       rounding: 4,
-       toExpNeg: -7,
-       toExpPos: 21,
-       LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-     });
- ... (249 more removed lines; see GitHub link above)
+           async signInWithPopup(QQ) {
+             var WQ;
+             const XQ = await IQ.signInWithPopup(VQ, UQ[QQ]);
+             return null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.user) && void 0 !== WQ ? WQ : null
+           }
+           async getCurrentUser(QQ) {
+             const WQ = VQ.currentUser;
+             if (!WQ) return null;
+             const {
+               signInProvider: XQ
+             } = await WQ.getIdTokenResult(!1);
+             return XQ === wQ.i[QQ] ? WQ : null
+           }
+           async signOut(QQ) {
+             null !== await this.getCurrentUser(QQ) && await IQ.signOut(VQ)
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L5932-L5997` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L110-L112) · [Before (L5932-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L5932-L5997)

```diff
-         return pp
-       };
- 
-       function Qi(pp, ip) {
-         return pp && li(pp, ip, Wc)
-       }
- 
-       function Ji(pp, ip) {
-         for (var cp = 0, Op = (ip = Zi(ip, pp) ? [ip] : ai(ip)).length; null != pp && cp < Op;) pp = pp[Vi(ip[cp++])];
-         return cp && cp == Op ? pp : void 0
-       }
- 
-       function Bi(pp, ip) {
-         return null != pp && ip in Object(pp)
-       }
- 
- ... (50 more removed lines; see GitHub link above)
+         class dQ extends rQ {
+           setUserProperties(QQ) {
+             WQ.setUserProperties(BQ, QQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L5999-L6065` → after: `L114-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L114-L118) · [Before (L5999-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L5999-L6065)

```diff
-           if (!qp) return !1;
-           return Dp || (Dp = new Mi),
-             function(pp, ip, cp, Op, op, Ip) {
-               var Sp = 2 & op,
-                 xp = Wc(pp),
-                 Lp = xp.length,
-                 Yp = Wc(ip),
-                 Dp = Yp.length;
-               if (Lp != Dp && !Sp) return !1;
-               var Ap = Lp;
-               for (; Ap--;) {
-                 var Pp = xp[Ap];
-                 if (!(Sp ? Pp in ip : Vp.call(ip, Pp))) return !1
-               }
-               var Wp = Ip.get(pp);
-               if (Wp && Ip.get(ip)) return Wp == ip;
- ... (51 more removed lines; see GitHub link above)
+           onIdTokenChanged(QQ) {
+             IQ.onIdTokenChanged(VQ, QQ)
+           }
+           canSignIn(QQ) {
+             return null !== (0, FQ.c)(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6067-L6074` → after: `L120-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L120-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L120-L127) · [Before (L6067-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L6067-L6074)

```diff
-         }(pp[0], pp[1]) : function(pp) {
-           var ip = function(pp) {
-             var ip = Wc(pp),
-               cp = ip.length;
-             for (; cp--;) {
-               var Op = ip[cp],
-                 op = pp[Op];
-               ip[cp] = [Op, op, zi(op)]
+           async signInWithPopup(QQ) {
+             const WQ = (0, FQ.c)(QQ);
+             if (null === WQ) return console.warn(`The app can't sign in with ${QQ}; check canSignIn first`), null;
+             try {
+               return await vQ(WQ, "signIn")
+             } catch (XQ) {
+               if (XQ instanceof JQ.c && "timeout" === XQ.code) return null;
+               throw (0, gQ.reportClientError)("login_failed", XQ, `app_${WQ}`), XQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6104-L6109` → after: `L130-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L130-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L130-L143) · [Before (L6104-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L6104-L6109)

```diff
-         }(pp) : function(pp) {
-           return Zi(pp) ? (ip = Vi(pp), function(pp) {
-             return null == pp ? void 0 : pp[ip]
-           }) : function(pp) {
-             return function(ip) {
-               return Ji(ip, pp)
+           async getCurrentUser(QQ) {
+             const WQ = VQ.currentUser;
+             if (WQ) {
+               const {
+                 signInProvider: XQ
+               } = await WQ.getIdTokenResult(!1);
+               if (XQ === wQ.i[QQ]) return WQ
+             }
+             const XQ = (0, FQ.c)(QQ);
+             if (null === XQ) return null;
+             try {
+               return await vQ(XQ, "getCurrentUser")
+             } catch (qQ) {
+               return console.error(`Failed to get the current ${QQ} user from the app:`, qQ), null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6150-L6155` → after: `L146-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L146-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L146-L156) · [Before (L6150-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L6150-L6155)

```diff
-           if (Pp) {
-             if (!hp(ip, (function(pp, ip) {
-                 if (!Pp.has(ip) && (Wp === pp || cp(Wp, pp, Op, op, Ip))) return Pp.add(ip)
-               }))) {
-               Ap = !1;
-               break
+           async signOut(QQ) {
+             const WQ = (0, FQ.c)(QQ);
+             null !== WQ && sQ.e.request(`${WQ}.signOut`, {}).catch((WQ => {
+               console.error(`Failed to sign out of ${QQ} in the app:`, WQ)
+             }));
+             const XQ = VQ.currentUser;
+             if (XQ) {
+               const {
+                 signInProvider: WQ
+               } = await XQ.getIdTokenResult(!1);
+               WQ === wQ.i[QQ] && await IQ.signOut(VQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6162-L6236` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L160) · [Before (L6162-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L6162-L6236)

```diff
-         return Ip.delete(pp), Ip.delete(ip), Ap
-       }
- 
-       function Fi(pp, ip) {
-         var cp = pp.__data__;
-         return function(pp) {
-           var ip = typeof pp;
-           return "string" == ip || "number" == ip || "symbol" == ip || "boolean" == ip ? "__proto__" !== pp : null === pp
-         }(ip) ? cp["string" == typeof ip ? "string" : "hash"] : cp.map
-       }
- 
-       function gi(pp, ip) {
-         var cp = function(pp, ip) {
-           return null == pp ? void 0 : pp[ip]
-         }(pp, ip);
-         return Ti(cp) ? cp : void 0
- ... (59 more removed lines; see GitHub link above)
+         return (0, zQ.isMobileApp)() ? (await sQ.e.ready, new dQ) : new bQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6238-L6329` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/149.js#L162) · [Before (L6238-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/149.js#L6238-L6329)

```diff
- 
-       function pc(pp) {
-         if (null != pp) {
-           try {
-             return Kp.call(pp)
-           } catch (ip) {}
-           try {
-             return pp + ""
-           } catch (ip) {}
-         }
-         return ""
-       }
- 
-       function ic(pp, ip) {
-         if ("function" != typeof pp || ip && "function" != typeof ip) throw new TypeError("Expected a function");
-         var cp = function() {
- ... (76 more removed lines; see GitHub link above)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/150.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/150.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L4)

```diff
-   8241: (pp, ip, cp) => {
+   8463: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L6-L7)

```diff
-       BloxdMsnAccountSdk: () => Ap,
-       MsnSdkAdaptor: () => Up
+       BloxdDiscordActivitySdk: () => pQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L9-L89` → after: `L8-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L8-L57) · [Before (L9-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L9-L89)

```diff
-     var Op = cp(1341),
-       op = cp(1194),
-       Ip = cp(3575),
-       Sp = cp(640),
-       xp = cp(1755);
-     const Lp = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
-     let Yp = null;
- 
-     function Dp() {
-       return Yp ??= async function() {
-         await (0, op.b)(Lp, {}, !1);
-         for (let pp = 0; pp < 50 && !window.$msstart; pp++) await (0, Sp.M)(100)
-       }(), Yp
-     }
-     class Ap {
-       constructor() {}
- ... (65 more removed lines; see GitHub link above)
+     var wQ = XQ(8470),
+       qQ = XQ(1263),
+       TQ = XQ(1226),
+       zQ = XQ(663),
+       sQ = XQ(1285),
+       FQ = XQ(1802),
+       PQ = XQ(1376),
+       gQ = XQ(814),
+       JQ = XQ(26),
+       rQ = XQ(1118),
+       IQ = XQ(2447),
+       jQ = function(QQ) {
+         return QQ.APPLICATION_COMMANDS = "applications.commands", QQ.IDENTIFY = "identify", QQ.EMAIL = "email", QQ.GUILDS = "guilds", QQ.READ_DM_CHANNELS = "dm_channels.read", QQ.WRITE_ACTIVITIES = "rpc.activities.write", QQ
+       }(jQ || {}),
+       BQ = function(QQ) {
+         return QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITE … [truncated]
+ ... (34 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L92-L101` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L60-L63) · [Before (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L92-L101)

```diff
-         leaderboard: {
-           1: ["right", "left"],
-           5: ["top", "left"]
-         },
-         square: {
-           1: []
-         },
-         skyscraper: {
-           2: []
-         }
+         goalRush: "Playing",
+         heroesvbrainrots: "Battling",
+         hideseek: "Playing",
+         bingo: "Playing"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L103-L105` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L65-L67) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L103-L105)

```diff
-     class Up extends Op.b {
-       constructor() {
-         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+     class pQ {
+       constructor(QQ) {
+         this.discordSdk = QQ, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L108-L147` → after: `L70-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L70-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L70-L99) · [Before (L108-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L108-L147)

```diff
-         return await Dp(), new Up
-       }
-       playVideoAd(pp, ip) {
-         this.playVideoOrRewarded("video", pp, pp)
-       }
-       playRewarded(pp, ip) {
-         this.playVideoOrRewarded("rewarded", pp, ip)
-       }
-       canShowBloxdAd(pp) {
-         for (const ip in yp)
-           if (pp.adId in yp[ip]) return !1;
-         return !0
-       }
-       async renderBanner(pp) {
-         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Ip.d)(pp)}: msn placement is already showing so not requesting`);
-         const ip = yp[pp.adType][pp.adId];
- ... (24 more removed lines; see GitHub link above)
+         console.log("Setting up Discord SDK with client id", rQ.d.discordClientID);
+         const QQ = new wQ.b(rQ.d.discordClientID);
+         let WQ = !1;
+         setTimeout((() => {
+           WQ || (console.warn("Discord SDK took too long to initialize"), (0, FQ.reloadBloxd)())
+         }), 15e3), await QQ.ready(), WQ = !0;
+         try {
+           const {
+             enabled: WQ
+           } = await QQ.commands.encourageHardwareAcceleration();
+           WQ || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (qQ) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", qQ)
+         }
+         const XQ = new pQ(QQ);
+         return XQ.isMobilePlatform() && (XQ.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L149-L154` → after: `L101-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L101-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L101-L213) · [Before (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L149-L154)

```diff
-         } else console.warn(`AD ${(0,Ip.d)(pp)}: couldn't find an msn unit that fit screen size`)
-       }
-       async clearBanner(pp) {
-         null !== this.currentlyShowingBannerPlacement && (0, Ip.d)(pp) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Ip.d)(pp)}: Attempting to clear msn banner ads for banner`, pp), await this.clearAllBannerAds())
-       }
-       async clearAllBannerAds() {
+         }
+         WQ === this.activityUpdateId && await this.discordSdk.commands.setActivity({
+           activity: {
+             type: yQ.PLAYING,
+             details: XQ,
+             state: wQ,
+             assets: {
+               large_image: "icon",
+               large_text: XQ
+             },
+             timestamps: {
+               start: this.startTime
+             }
+           }
+         }).catch((QQ => {
+           console.error(`Failed to update Discord activity rich presence with description="${XQ}":`, QQ)
+ ... (97 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L156-L157` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L215-L218) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L156-L157)

```diff
-           if (this.isCurrentlyClearingAllBanners) return;
-           this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
+           const {
+             locale: QQ
+           } = await this.discordSdk.commands.userSettingsGetLocale();
+           return QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L159-L177` → after: `L220-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L220-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L220-L261) · [Before (L159-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L159-L177)

```diff
-           console.log("AD: Error while clearing all msn banner ads", pp)
-         } finally {
-           this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
-         }
-       }
-       playVideoOrRewarded(pp, ip, cp) {
-         const Op = ip => {
-           console.error(`AD: Error while playing MSN ${pp} ad: `, ip), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), cp()
-         };
-         if (window.$msstart) {
-           console.log(`AD: Attempting to play MSN ${pp} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
-           const cp = async () => {
-             try {
-               const cp = await window.$msstart.loadAdsAsync("rewarded" === pp),
-                 Op = await window.$msstart.showAdsAsync(cp.instanceId);
-               this.clearAllBannerAds(), await Op.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${pp} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ip()
- ... (3 more removed lines; see GitHub link above)
+           return console.error("Failed to get user locale from Discord:", QQ.stack), null
+         }
+       }
+       async getChannelName(QQ) {
+         return this.discordSdk.commands.getChannel({
+           channel_id: QQ
+         }).then((QQ => QQ.name)).catch((QQ => "Your Current Discord Chat"))
+       }
+       async getDiscordContextFromChannelId(QQ) {
+         const WQ = await this.getChannelName(QQ);
+         return qQ.k.from({
+           type: qQ.d.DM,
+           channelId: QQ,
+           channelName: WQ
+         })
+       }
+ ... (26 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L179-L209` → after: `L263-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L263-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/150.js#L263-L271) · [Before (L179-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/150.js#L179-L209)

```diff
-           window.adStartSoPause(null, {
-             preventMovement: !0
-           }), cp()
-         } else Op(`AD: Can't play MSN ${pp} ad because sdk is not loaded`)
-       }
-     }
- 
-     function wp(pp) {
-       let ip, cp;
-       switch (pp.placement) {
-         case "top":
-           ip = (window.innerWidth - pp.width) / 2, cp = Pp;
-           break;
-         case "right":
-           ip = window.innerWidth - pp.width - Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10;
-           break;
- ... (15 more removed lines; see GitHub link above)
+         JQ.b.set({
+           notchSize: {
+             top: WQ("top", window.innerHeight),
+             right: Math.max(WQ("right", window.innerWidth), 7),
+             bottom: 0,
+             left: WQ("left", window.innerWidth)
+           }
+         })
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/151.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/151.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L4)

```diff
-   8248: (pp, ip, cp) => {
+   8470: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => TT,
+       e: () => CX
+     });
+     var wQ = {};
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L11-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L11-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => Ip
+       c: () => ww,
+       k: () => zw,
+       g: () => Tw,
+       l: () => ZX,
+       p: () => NX,
+       t: () => hw,
+       x: () => mX,
+       A: () => Rw,
+       E: () => bw,
+       G: () => Aw,
+       I: () => OX,
+       K: () => dw,
+       M: () => lw,
+       O: () => iw,
+       T: () => KX,
+       R: () => Ww,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L10` → after: `L30-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L30-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L30-L476) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L10)

```diff
-     var Op = cp(1341),
-       op = cp(1194);
-     class Ip extends Op.b {
+     var qQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+ 
+     function TQ(QQ) {
+       return QQ && QQ.__esModule && Object.prototype.hasOwnProperty.call(QQ, "default") ? QQ.default : QQ
+     }
+     var zQ = {
+       exports: {}
+     };
+     ! function(QQ) {
+       var WQ = Object.prototype.hasOwnProperty,
+         XQ = "~";
+ 
+       function wQ() {}
+ 
+       function qQ(QQ, WQ, XQ) {
+         this.NI = QQ, this.context = WQ, this.once = XQ || !1
+ ... (431 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L12` → after: `L478-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L478-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L478-L638) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L12)

```diff
-         super(), this.setOnEndCb = pp, this.name = "gamedistribution"
+         this.spa = this.safeParseAsync, this._def = QQ, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
+       }
+       get description() {
+         return this._def.description
+       }
+       _getType(QQ) {
+         return JQ(QQ.data)
+       }
+       _getOrReturnCtx(QQ, WQ) {
+         return WQ || {
+           common: QQ.parent.common,
+           data: QQ.data,
+           parsedType: JQ(QQ.data),
+           schemaErrorMap: this._def.errorMap,
+           path: QQ.path,
+           parent: QQ.parent
+ ... (145 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L14` → after: `L640-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L640-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L640-L693) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L14)

```diff
-       static async setup() {
+       brand() {
+         return new lW({
+           typeName: RW.ZodBranded,
+           type: this,
+           ...cQ(this._def)
+         })
+       } catch (QQ) {
+         const WQ = "function" === typeof QQ ? QQ : () => QQ;
+         return new dW({
+           ...cQ(this._def),
+           innerType: this,
+           catchValue: WQ,
+           typeName: RW.ZodCatch
+         })
+       }
+       describe(QQ) {
+ ... (38 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L17-L52` → after: `L1038-L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L1038-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L1038-L2065) · [Before (L17-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L17-L52)

```diff
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: cp => {
-             const Op = () => {
-               ip && (window.adCompleteSoResume(), ip = !1), pp && (pp(), pp = null)
-             };
-             switch (cp.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), ip = !1, pp ? (pp(), pp = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), ip = !0;
-                 break;
-               case "SDK_ERROR":
- ... (20 more removed lines; see GitHub link above)
+         const XQ = new pQ;
+         for (const wQ of this._def.checks)
+           if ("int" === wQ.kind) sQ.isInteger(QQ.data) || (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
+             code: rQ.invalid_type,
+             expected: "integer",
+             received: "float",
+             message: wQ.message
+           }), XQ.ij());
+           else if ("min" === wQ.kind) {
+           (wQ.inclusive ? QQ.data < wQ.value : QQ.data <= wQ.value) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
+             code: rQ.too_small,
+             minimum: wQ.value,
+             type: "number",
+             inclusive: wQ.inclusive,
+             exact: !1,
+             message: wQ.message
+ ... (1012 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L55-L56` → after: `L2068-L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L2068-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L2068-L2107) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L55-L56)

```diff
-       playVideoAd(pp, ip) {
-         this.setOnEndCb(pp), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+     }
+     FW.create = (QQ, WQ, XQ) => new FW({
+       left: QQ,
+       right: WQ,
+       typeName: RW.ZodIntersection,
+       ...cQ(XQ)
+     });
+     class PW extends AQ {
+       _parse(QQ) {
+         const {
+           status: WQ,
+           ctx: XQ
+         } = this._processInputParams(QQ);
+         if (XQ.parsedType !== gQ.array) return DQ(XQ, {
+           code: rQ.invalid_type,
+           expected: gQ.array,
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L58-L61` → after: `L2109-L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L2109-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/151.js#L2109-L2113) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/151.js#L58-L61)

```diff
-       renderBanner(pp) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(pp.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, pp.divId), window.gdsdk.showAd … [truncated]
-           containerId: pp.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((pp => console.info(pp)))) : console.error("window.gdsdk.AdType.Display is undefined")
+       rest(QQ) {
+         return new PW({
+           ...this._def,
+           rest: QQ
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/152.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/152.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L4)

```diff
-   8252: (pp, ip, cp) => {
+   8477: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => Ip
+       BloxdMsnAccountSdk: () => JQ,
+       MsnSdkAdaptor: () => BQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L8-L10` → after: `L9-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L9-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L9-L103) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L8-L10)

```diff
-     var Op = cp(1341),
-       op = cp(1194);
-     class Ip extends Op.b {
+     var wQ = XQ(1368),
+       qQ = XQ(1216),
+       TQ = XQ(3727),
+       zQ = XQ(663),
+       sQ = XQ(1786);
+     const FQ = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let PQ = null;
+ 
+     function gQ() {
+       return PQ ??= async function() {
+         await (0, qQ.d)(FQ, {}, !1);
+         for (let QQ = 0; QQ < 50 && !window.$msstart; QQ++) await (0, zQ.L)(100)
+       }(), PQ
+     }
+     class JQ {
+       constructor() {}
+ ... (79 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L12-L24` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L105) · [Before (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L12-L24)

```diff
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const pp = document.getElementsByClassName("ads-popup");
-         for (const ip of pp) ip instanceof HTMLElement && (ip.style.position = "fixed")
-       }
-       doAdBreakComplete() {
-         this.adBreakCompleteCallback()
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L27` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L108) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L27)

```diff
-         return await (0, op.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, op.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Ip
+         return await gQ(), new BQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L30-L31` → after: `L111-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L111-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L111-L179) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L30-L31)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+         this.playVideoOrRewarded("video", QQ, QQ)
+       }
+       playRewarded(QQ, WQ) {
+         this.playVideoOrRewarded("rewarded", QQ, WQ)
+       }
+       canShowBloxdAd(QQ) {
+         for (const WQ in jQ)
+           if (QQ.adId in jQ[WQ]) return !1;
+         return !0
+       }
+       async renderBanner(QQ) {
+         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,TQ.b)(QQ)}: msn placement is already showing so not requesting`);
+         const WQ = jQ[QQ.adType][QQ.adId];
+         if ((0, zQ.G)(WQ)) return void console.warn(`AD ${(0,TQ.b)(QQ)}: no msn placement is configured for this bloxd placement so not showing any ad`);
+         const XQ = [];
+         for (const wQ of WQ)
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L33-L53` → after: `L181-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L181-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/152.js#L181-L209) · [Before (L33-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/152.js#L33-L53)

```diff
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), pp()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
-       }
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
-       }
-       onGameplayStop() {}
-       onGameEntered() {
-         try {
-           window.parent.cmgGameEvent("start")
- ... (5 more removed lines; see GitHub link above)
+           }), XQ()
+         } else wQ(`AD: Can't play MSN ${QQ} ad because sdk is not loaded`)
+       }
+     }
+ 
+     function yQ(QQ) {
+       let WQ, XQ;
+       switch (QQ.placement) {
+         case "top":
+           WQ = (window.innerWidth - QQ.width) / 2, XQ = rQ;
+           break;
+         case "right":
+           WQ = window.innerWidth - QQ.width - rQ, XQ = window.innerHeight / 2 - QQ.height / 2 - 10;
+           break;
+         case "left":
+           WQ = rQ, XQ = window.innerHeight / 2 - QQ.height / 2 - 10
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/153.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/153.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L4)

```diff
-   8260: (pp, ip, cp) => {
+   8482: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L6)

```diff
-       AdMobSdkAdaptor: () => Dp
+       GameDistributionSdkAdaptor: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L8-L40` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L8-L10) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L8-L40)

```diff
-     var Op = cp(1341),
-       op = cp(25),
-       Ip = cp(1705),
-       Sp = cp(131),
-       xp = cp(3575),
-       Lp = cp(337);
-     const Yp = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (17 more removed lines; see GitHub link above)
+     var wQ = XQ(1368),
+       qQ = XQ(1216);
+     class TQ extends wQ.c {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L42-L50` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L12) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L42-L50)

```diff
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Yp[pp], Ip.b.on("ads.bannerStatus", (pp => {
-           let {
-             placementId: ip,
-             shown: cp,
-             error: Op
-           } = pp;
-           const op = !this.bannerFirstResponseSeen.has(ip);
-           this.bannerFirstResponseSeen.add(ip), op ? cp ? console.log(`AD ${ip}: AdMob banner loaded`) : console.warn(`AD ${ip}: AdMob banner failed to load: ${Op}`) : cp || console.warn(`AD ${ip}: AdMob banner refresh failed: ${Op}`)
-         }))
+         super(), this.setOnEndCb = QQ, this.name = "gamedistribution"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L53-L75` → after: `L15-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L15-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L15-L52) · [Before (L53-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L53-L75)

```diff
-         const pp = "mobileIos" === Sp.siteUsed ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${pp}`), new Dp(pp)
-       }
-       muteGameDuring(pp) {
-         return this.fullScreenAdsInFlight++, op.c.set({
-           soundOnFromAd: !1
-         }), pp.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && op.c.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(pp, ip) {
-         const cp = this.adUnitIds.rewarded;
-         this.muteGameDuring(Ip.b.request("ads.showRewarded", {
-           placementId: cp
- ... (7 more removed lines; see GitHub link above)
+         let QQ;
+         let WQ;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: XQ => {
+             const wQ = () => {
+               WQ && (window.adCompleteSoResume(), WQ = !1), QQ && (QQ(), QQ = null)
+             };
+             switch (XQ.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), WQ = !1, QQ ? (QQ(), QQ = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), WQ = !0;
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L79-L86` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L56) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L79-L86)

```diff
-         const cp = this.adUnitIds.interstitial;
-         this.muteGameDuring(Ip.b.request("ads.showInterstitial", {
-           placementId: cp
-         })).then((() => {
-           pp()
-         }), (ip => {
-           console.warn(`AD ${cp}: AdMob interstitial failed:`, ip), pp()
-         }))
+         this.setOnEndCb(QQ), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L89-L117` → after: `L59-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/153.js#L59-L61) · [Before (L89-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/153.js#L89-L117)

```diff
-         const ip = (0, xp.d)(pp),
-           cp = this.adUnitIds.banners[ip];
-         if (void 0 === cp) return;
-         const Op = document.getElementById(pp.divId);
-         if (!Op) return void console.warn(`AD ${ip}: AdMob renderBanner called but div ${pp.divId} is not in DOM`);
-         const op = Op.getBoundingClientRect(),
-           Sp = window.innerWidth,
-           Yp = window.innerHeight;
-         if (0 === Sp || 0 === Yp) return void console.warn(`AD ${ip}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const Dp = {
-           x1: Lp.d.clamp(op.left / Sp * 100, 0, 100),
-           y1: Lp.d.clamp(op.top / Yp * 100, 0, 100),
-           x2: Lp.d.clamp(op.right / Sp * 100, 0, 100),
-           y2: Lp.d.clamp(op.bottom / Yp * 100, 0, 100)
-         };
-         this.bannerPlacementByBloxdId.set(ip, cp), console.log(`AD ${ip}: AdMob renderBanner placementId=${cp} box=`, Dp), Ip.b.emit("ads.showBanner", {
- ... (13 more removed lines; see GitHub link above)
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(QQ.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, QQ.divId), window.gdsdk.showAd … [truncated]
+           containerId: QQ.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((QQ => console.info(QQ)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/154.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/154.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L4-L6)

```diff
-   8269: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Yp
+   8486: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CoolMathGamesSdkAdaptor: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L8-L54` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L8-L10) · [Before (L8-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L8-L54)

```diff
-     var Op = cp(3003);
-     const op = [1, 8, 9],
-       Ip = 5,
-       Sp = 200,
-       xp = 150;
- 
-     function Lp(pp, ip) {
-       let cp = 0;
-       pp("addEventListener", 2, ((pp, Sp) => {
-         if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const xp = function(pp) {
-           const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
-           return pp.gdprApplies && ip ? op.every((ip => !0 === pp.purpose.consents[ip])) : null
-         }(pp);
-         if (null === xp) return;
-         const Lp = ++cp;
- ... (31 more removed lines; see GitHub link above)
+     var wQ = XQ(1368),
+       qQ = XQ(1216);
+     class TQ extends wQ.c {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L56` → after: `L12-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L12-L24) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L56)

```diff
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Lp
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const QQ = document.getElementsByClassName("ads-popup");
+         for (const WQ of QQ) WQ instanceof HTMLElement && (WQ.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L59-L72` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L27) · [Before (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L59-L72)

```diff
-         return (0, Ip.canonicaliseZonesWhenIdle)(Lp), (0, xp.setUpGtag)(), await (0, op.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, Sp.b)("inMobi"), new Yp
-       }
-       playRewarded(pp, ip) {
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const cp = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: cp
-             })
-           })), window.adStartSoPause(pp, {
-             onFailCb: ip
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ip()
+         return await (0, qQ.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, qQ.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new TQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L75-L77` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L30-L32) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L75-L77)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ip ? ` (alias: ${ip})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: ip
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L79` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L34-L36) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L79)

```diff
-         })), window.adStartSoPause(pp)) : (pp(), console.error("AIP ad lib not loaded, no ad playing"))
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), QQ()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L81-L92` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L38-L43) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L81-L92)

```diff
-       renderBanner(pp) {
-         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: ip,
-           alias: cp
-         } = pp;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: ip,
-             alias: cp
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(pp.divId), cp ? `(alias: ${cp})` : "")
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L94-L97` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L45-L51) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L94-L97)

```diff
-       clearBanner(pp) {
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(pp.divId)
-         })), console.log(`AD: Clearing aip banner ad ${pp.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L99-L110` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/154.js#L53) · [Before (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/154.js#L99-L110)

```diff
-       setBannerAutoRefreshEnabled(pp, ip) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(pp.divId, ip)
-         }))
-       }
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(pp, ip) {
-             ip.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
-       }
+       onGameExited() {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/155.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/155.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L4-L6)

```diff
-   8269: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Yp
+   8493: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       AdMobSdkAdaptor: () => gQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L8-L55` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L8-L50) · [Before (L8-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L8-L55)

```diff
-     var Op = cp(3003);
-     const op = [1, 8, 9],
-       Ip = 5,
-       Sp = 200,
-       xp = 150;
- 
-     function Lp(pp, ip) {
-       let cp = 0;
-       pp("addEventListener", 2, ((pp, Sp) => {
-         if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const xp = function(pp) {
-           const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
-           return pp.gdprApplies && ip ? op.every((ip => !0 === pp.purpose.consents[ip])) : null
-         }(pp);
-         if (null === xp) return;
-         const Lp = ++cp;
- ... (32 more removed lines; see GitHub link above)
+     var wQ = XQ(1368),
+       qQ = XQ(26),
+       TQ = XQ(1747),
+       zQ = XQ(158),
+       sQ = XQ(3727),
+       FQ = XQ(402);
+     const PQ = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L58-L76` → after: `L53-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L53-L76) · [Before (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L58-L76)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-             return new Promise((pp => {
-               window.nitroAds.queue.push(["createAd", ip, pp])
-             }))
-           },
-           addUserToken: function() {
-             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-             window.nitroAds.queue.push(["addUserToken", ip])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (pp => {
-           var ip, cp, Op;
-           const op = document.getElementById(null !== (ip = null === (cp = pp.detail) || void 0 === cp || null === (Op = cp.adInfo) || void 0 === Op ? void 0 : Op.adUnitCode) && void 0 !== ip ? ip : "");
-           null !== op && void 0 !== op && op.classList.contains("NitroBanner") && op.classList.toggle("NitroBannerUnfilled", "blank" === pp.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         const QQ = "mobileIos" === zQ.siteUsed ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${QQ}`), new gQ(QQ)
+       }
+       muteGameDuring(QQ) {
+         return this.fullScreenAdsInFlight++, qQ.b.set({
+           soundOnFromAd: !1
+         }), QQ.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && qQ.b.set({
+             soundOnFromAd: !0
+           })
+         }))
+       }
+       playRewarded(QQ, WQ) {
+         const XQ = this.adUnitIds.rewarded;
+         this.muteGameDuring(TQ.e.request("ads.showRewarded", {
+           placementId: XQ
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L79-L150` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L79-L86) · [Before (L79-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L79-L150)

```diff
-         this.showVideoAd(pp, pp)
-       }
-       playRewarded(pp, ip) {
-         this.showVideoAd(pp, ip)
-       }
-       showVideoAd(pp, ip) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ip();
-         const cp = document.getElementById("GenericVideoWrapper"),
-           Op = document.getElementById("GenericVideoInner");
-         if (null === cp || null === Op) return void ip();
-         this.videoInFlight = !0;
-         let op = !1;
-         const Ip = document.createElement("div");
-         Ip.id = xp, Ip.className = "NitroVideoPlacement";
-         const Sp = Sp => {
-           if (!op) {
- ... (56 more removed lines; see GitHub link above)
+         const XQ = this.adUnitIds.interstitial;
+         this.muteGameDuring(TQ.e.request("ads.showInterstitial", {
+           placementId: XQ
+         })).then((() => {
+           QQ()
+         }), (WQ => {
+           console.warn(`AD ${XQ}: AdMob interstitial failed:`, WQ), QQ()
+         }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L153-L167` → after: `L89-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L89-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L89-L107) · [Before (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L153-L167)

```diff
-         const {
-           divId: ip,
-           width: cp,
-           height: Op
-         } = pp, op = `${ip}-nitro`;
-         let Ip = document.getElementById(op);
-         null === Ip && (Ip = document.createElement("div"), Ip.id = op, Ip.className = "NitroBanner", Ip.style.setProperty("--nitro-slot-width", `${cp}px`), Ip.style.setProperty("--nitro-slot-height", `${Op}px`), document.getElementById(ip).appendChild(Ip));
-         const Sp = [
-           [String(cp), String(Op)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(op, {
-           sizes: Sp
-         })).catch((pp => {
-           console.error(`AD: Nitro failed to create banner ${op}:`, pp)
-         })), console.log(`AD: Requested Nitro banner ${op}`)
+         const WQ = (0, sQ.b)(QQ),
+           XQ = this.adUnitIds.banners[WQ];
+         if (void 0 === XQ) return;
+         const wQ = document.getElementById(QQ.divId);
+         if (!wQ) return void console.warn(`AD ${WQ}: AdMob renderBanner called but div ${QQ.divId} is not in DOM`);
+         const qQ = wQ.getBoundingClientRect(),
+           zQ = window.innerWidth,
+           PQ = window.innerHeight;
+         if (0 === zQ || 0 === PQ) return void console.warn(`AD ${WQ}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const gQ = {
+           x1: FQ.b.clamp(qQ.left / zQ * 100, 0, 100),
+           y1: FQ.b.clamp(qQ.top / PQ * 100, 0, 100),
+           x2: FQ.b.clamp(qQ.right / zQ * 100, 0, 100),
+           y2: FQ.b.clamp(qQ.bottom / PQ * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(WQ, XQ), console.log(`AD ${WQ}: AdMob renderBanner placementId=${XQ} box=`, gQ), TQ.e.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L169-L171` → after: `L109-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L109-L114) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L169-L171)

```diff
-       displayConsentUI() {
-         var pp, ip;
-         null === (pp = (ip = window).__cmp) || void 0 === pp || pp.call(ip, "showModal")
+       clearBanner(QQ) {
+         const WQ = (0, sQ.b)(QQ),
+           XQ = this.bannerPlacementByBloxdId.get(WQ);
+         void 0 !== XQ && (this.bannerPlacementByBloxdId.delete(WQ), this.bannerFirstResponseSeen.delete(XQ), console.log(`AD ${WQ}: AdMob clearBanner placementId=${XQ}`), TQ.e.emit("ads.hideBanner", {
+           placementId: XQ
+         }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L173-L182` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/155.js#L116-L117) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/155.js#L173-L182)

```diff
-       addPrivacyLinks(pp) {
-         var ip, cp, Op, op;
-         const Ip = document.createElement("span");
-         Ip.dataset.ccpaLink = "1";
-         const Sp = document.createElement("div");
-         Sp.id = "ncmp-consent-link", pp.replaceChildren(Ip, Sp), null === (ip = (cp = window).__uspapi) || void 0 === ip || ip.call(cp, "addLink", 1), null === (Op = (op = window).__cmp) || void 0 === Op || Op.call(op, "addConsentLink")
-       }
-       newPageSession() {
-         var pp, ip;
-         null === (pp = (ip = window.nitroAds).navigate) || void 0 === pp || pp.call(ip)
+       canShowBloxdAd(QQ) {
+         return !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/156.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/156.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/156.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/156.js#L4)

```diff
-   8278: (pp, ip, cp) => {
+   8504: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => PQ
+     });
+     var wQ = XQ(3158);
+     const qQ = [1, 8, 9],
+       TQ = 5,
+       zQ = 200,
+       sQ = 150;
+ 
+     function FQ(QQ, WQ) {
+       let XQ = 0;
+       QQ("addEventListener", 2, ((QQ, zQ) => {
+         if (!zQ) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const sQ = function(QQ) {
+           const WQ = "useractioncomplete" === QQ.eventStatus || "tcloaded" === QQ.eventStatus && !!QQ.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/156.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/156.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => Ip
+       AdinPlaySdkAdaptor: () => PQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L8-L10` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/156.js#L48-L54) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/156.js#L8-L10)

```diff
-     var Op = cp(1341),
-       op = cp(1194);
-     class Ip extends Op.b {
+     var wQ = XQ(1368),
+       qQ = XQ(1216),
+       TQ = XQ(260),
+       zQ = XQ(8504),
+       sQ = XQ(3158);
+     const FQ = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class PQ extends wQ.c {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L12` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/156.js#L56) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/156.js#L12)

```diff
-         super(), this.name = "adsense"
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = FQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L15-L27` → after: `L59-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/156.js#L59-L72) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/156.js#L15-L27)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(pp) {
-           window.adsbygoogle.push(pp)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, op.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new Ip
+         return (0, TQ.canonicaliseZonesWhenIdle)(FQ), (0, sQ.setUpGtag)(), await (0, qQ.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, zQ.e)("inMobi"), new PQ
+       }
+       playRewarded(QQ, WQ) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+           const XQ = "video_reward";
+           window.aiptag.cmd.player.push((function() {
+             window.aiptag.adplayer.startPreRoll({
+               alias: XQ
+             })
+           })), window.adStartSoPause(QQ, {
+             onFailCb: WQ
+           })
+         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), WQ()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L30-L49` → after: `L75-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L75-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/156.js#L75-L109) · [Before (L30-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/156.js#L30-L49)

```diff
-         console.log("playPreroll requested");
-         let cp = !1;
-         const Op = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), cp = !0, pp()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === ip ? "start" : "next",
-           name: ip,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(Op), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
-           },
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
-           },
- ... (4 more removed lines; see GitHub link above)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (WQ ? ` (alias: ${WQ})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: WQ
+           })
+         })), window.adStartSoPause(QQ)) : (QQ(), console.error("AIP ad lib not loaded, no ad playing"))
+       }
+       renderBanner(QQ) {
+         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
+         const {
+           divId: WQ,
+           alias: XQ
+         } = QQ;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: WQ,
+             alias: XQ
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/157.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/157.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L4)

```diff
-   8281: (pp, ip, cp) => {
+   8504: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => PQ
+     });
+     var wQ = XQ(3158);
+     const qQ = [1, 8, 9],
+       TQ = 5,
+       zQ = 200,
+       sQ = 150;
+ 
+     function FQ(QQ, WQ) {
+       let XQ = 0;
+       QQ("addEventListener", 2, ((QQ, zQ) => {
+         if (!zQ) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const sQ = function(QQ) {
+           const WQ = "useractioncomplete" === QQ.eventStatus || "tcloaded" === QQ.eventStatus && !!QQ.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L6)

```diff
-       AditudeSdkAdaptor: () => Sp
+       NitroSdkAdaptor: () => FQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L8-L14` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L48-L53) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L8-L14)

```diff
-     var Op = cp(1341),
-       op = cp(1194);
-     const Ip = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class Sp extends Op.b {
+     var wQ = XQ(1368),
+       qQ = XQ(1216),
+       TQ = XQ(8504),
+       zQ = XQ(3158);
+     const sQ = "NitroOutstreamVideo";
+     class FQ extends wQ.c {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L16` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L55) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L19-L21` → after: `L58-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L58-L76) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, op.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Sp
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+             return new Promise((QQ => {
+               window.nitroAds.queue.push(["createAd", WQ, QQ])
+             }))
+           },
+           addUserToken: function() {
+             for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+             window.nitroAds.queue.push(["addUserToken", WQ])
+           },
+           queue: []
+         }, document.addEventListener("nitroAds.rendered", (QQ => {
+           var WQ, XQ, wQ;
+           const qQ = document.getElementById(null !== (WQ = null === (XQ = QQ.detail) || void 0 === XQ || null === (wQ = XQ.adInfo) || void 0 === wQ ? void 0 : wQ.adUnitCode) && void 0 !== WQ ? WQ : "");
+           null !== qQ && void 0 !== qQ && qQ.classList.contains("NitroBanner") && qQ.classList.toggle("NitroBannerUnfilled", "blank" === QQ.detail.type)
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L24` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L79) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L24)

```diff
-         this.playVideoOrRewarded("video", pp, pp)
+         this.showVideoAd(QQ, QQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L27` → after: `L82-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L82-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L82-L150) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L27)

```diff
-         this.playVideoOrRewarded("rewarded", pp, ip)
+         this.showVideoAd(QQ, WQ)
+       }
+       showVideoAd(QQ, WQ) {
+         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void WQ();
+         const XQ = document.getElementById("GenericVideoWrapper"),
+           wQ = document.getElementById("GenericVideoInner");
+         if (null === XQ || null === wQ) return void WQ();
+         this.videoInFlight = !0;
+         let qQ = !1;
+         const TQ = document.createElement("div");
+         TQ.id = sQ, TQ.className = "NitroVideoPlacement";
+         const zQ = zQ => {
+           if (!qQ) {
+             qQ = !0, clearTimeout(VQ), clearInterval(yQ), document.removeEventListener("nitroAds.adResult", gQ), document.removeEventListener("nitroAds.rendered", JQ), document.removeEventListener("nitroAds.complete", rQ);
+             try {
+               IQ.remove(), TQ.querySelectorAll("video").forEach((QQ => {
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L30-L36` → after: `L153-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L153-L167) · [Before (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L30-L36)

```diff
-         const ip = this.getBaseDivId(pp.adId, pp.width, pp.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: pp.divId,
-             baseDivId: ip
-           }])
-         }))
+         const {
+           divId: WQ,
+           width: XQ,
+           height: wQ
+         } = QQ, qQ = `${WQ}-nitro`;
+         let TQ = document.getElementById(qQ);
+         null === TQ && (TQ = document.createElement("div"), TQ.id = qQ, TQ.className = "NitroBanner", TQ.style.setProperty("--nitro-slot-width", `${XQ}px`), TQ.style.setProperty("--nitro-slot-height", `${wQ}px`), document.getElementById(WQ).appendChild(TQ));
+         const zQ = [
+           [String(XQ), String(wQ)]
+         ];
+         Promise.resolve(window.nitroAds.createAd(qQ, {
+           sizes: zQ
+         })).catch((QQ => {
+           console.error(`AD: Nitro failed to create banner ${qQ}:`, QQ)
+         })), console.log(`AD: Requested Nitro banner ${qQ}`)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L38-L39` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L169-L171) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L38-L39)

```diff
-       getBaseDivId(pp, ip, cp) {
-         return `pb-slot-bloxdio-${ip}-${cp}${pp>1?`-${pp}`:""}`
+       displayConsentUI() {
+         var QQ, WQ;
+         null === (QQ = (WQ = window).__cmp) || void 0 === QQ || QQ.call(WQ, "showModal")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L41-L78` → after: `L173-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/157.js#L173-L182) · [Before (L41-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/157.js#L41-L78)

```diff
-       playVideoOrRewarded(pp, ip, cp) {
-         var Op;
-         let op = !1;
-         const Sp = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", op = !0
-           },
-           xp = (pp, ip) => {
-             console.error(`AD: Error while playing Aditude video ad: ${pp}:`, ip), Sp(), cp()
-           };
-         if (console.log(`AD: Requesting Aditude ${pp} ad`), void 0 === (null === (Op = window.tude) || void 0 === Op ? void 0 : Op.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${pp} ad playing`), void xp("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: Ip[pp],
-               divId: "GenericVideoInner",
- ... (22 more removed lines; see GitHub link above)
+       addPrivacyLinks(QQ) {
+         var WQ, XQ, wQ, qQ;
+         const TQ = document.createElement("span");
+         TQ.dataset.ccpaLink = "1";
+         const zQ = document.createElement("div");
+         zQ.id = "ncmp-consent-link", QQ.replaceChildren(TQ, zQ), null === (WQ = (XQ = window).__uspapi) || void 0 === WQ || WQ.call(XQ, "addLink", 1), null === (wQ = (qQ = window).__cmp) || void 0 === wQ || wQ.call(qQ, "addConsentLink")
+       }
+       newPageSession() {
+         var QQ, WQ;
+         null === (QQ = (WQ = window.nitroAds).navigate) || void 0 === QQ || QQ.call(WQ)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/158.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/158.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961)

#### 1. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L4-L2135` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/158.js#L4-L40) · [Before (L4-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/158.js#L4-L2135)

```diff
-   9e3: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => xp
-     });
-     var Op = cp(25),
-       op = cp(1201),
-       Ip = cp(5113),
-       Sp = cp(1112);
- 
-     function xp(pp) {
-       let {
-         note: ip
-       } = pp;
-       const {
-         t: cp
-       } = (0, op.H)(), {
- ... (2116 more removed lines; see GitHub link above)
+   8513: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       AdsenseForGamesSdkAdaptor: () => TQ
+     });
+     var wQ = XQ(1368),
+       qQ = XQ(1216);
+     class TQ extends wQ.c {
+       constructor() {
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(QQ) {
+           window.adsbygoogle.push(QQ)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L2207-L2208` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/158.js#L43-L44) · [Before (L2207-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/158.js#L2207-L2208)

```diff
-           xp = () => {
-             xc() || Ip()
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L2210-L2495` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/158.js#L46-L47) · [Before (L2210-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/158.js#L2210-L2495)

```diff
-           Lp = setInterval((() => {
-             const pp = performance.now();
-             pp - Op > 1500 ? Ip() : xc() ? op = null : null === op ? op = pp : pp - op >= 150 && (Ip(), function(pp) {
-               var ip;
-               const cp = pp.closest(".SettingsMenuRight"),
-                 Op = null === (ip = pp.closest(".HudLayoutSettings")) || void 0 === ip ? void 0 : ip.querySelector(".HudLayoutPreviewBox");
-               if (!cp || !Op) return;
-               const op = Op.getBoundingClientRect().bottom + 8,
-                 Ip = cp.getBoundingClientRect().bottom - 8,
-                 Sp = pp.getBoundingClientRect();
-               Sp.top < op ? cp.scrollBy({
-                 top: Sp.top - op,
-                 behavior: "smooth"
-               }) : Sp.bottom > Ip && cp.scrollBy({
-                 top: Math.min(Sp.bottom - Ip, Sp.top - op),
-                 behavior: "smooth"
- ... (270 more removed lines; see GitHub link above)
+           adBreakDone: WQ => {
+             console.log("adBreakDone called", WQ), clearTimeout(wQ), XQ || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), QQ())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/159.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/159.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131)

#### 1. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/159.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/159.js#L4-L15)

```diff
-   36804: (pp, ip, cp) => {
-     cp.d(ip, {
-       A: () => yp,
-       E: () => tp,
-       b: () => Ip,
-       d: () => Up,
-       f: () => wp,
-       j: () => xp,
-       n: () => Pp,
-       q: () => vp,
-       u: () => Ap,
-       w: () => Hp
+   8517: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       AditudeSdkAdaptor: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L17-L40` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/159.js#L8-L16) · [Before (L17-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/159.js#L17-L40)

```diff
-     var Op = cp(25),
-       op = cp(34);
-     const Ip = "clientGameInventoryButtonsChanged",
-       Sp = new Map;
- 
-     function xp() {
-       return [...Sp.values()].sort(((pp, ip) => {
-         var cp, Op;
-         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
-       }))
-     }
-     let Lp = null;
- 
-     function Yp(pp) {
-       Lp = pp
-     }
- ... (8 more removed lines; see GitHub link above)
+     var wQ = XQ(1368),
+       qQ = XQ(1216);
+     const TQ = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class zQ extends wQ.c {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L42-L78` → after: `L18-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L18-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/159.js#L18-L78) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/159.js#L42-L78)

```diff
-       pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
-     }
- 
-     function Pp() {
-       return Dp
-     }
- 
-     function Wp() {
-       return xp().filter((pp => pp.panel && !pp.disabled))
-     }
- 
-     function yp(pp) {
-       const ip = Wp(),
-         cp = ip.findIndex((pp => pp.id === Lp));
-       return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
-     }
- ... (21 more removed lines; see GitHub link above)
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, qQ.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new zQ
+       }
+       playVideoAd(QQ, WQ) {
+         this.playVideoOrRewarded("video", QQ, QQ)
+       }
+       playRewarded(QQ, WQ) {
+         this.playVideoOrRewarded("rewarded", QQ, WQ)
+       }
+       renderBanner(QQ) {
+         const WQ = this.getBaseDivId(QQ.adId, QQ.width, QQ.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: QQ.divId,
+ ... (45 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/160.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/160.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L4)

```diff
-   39261: (pp, ip, cp) => {
+   9244: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L6-L7)

```diff
-       c: () => Ip,
-       e: () => Sp
+       d: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L8-L11) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L9-L14)

```diff
-     var Op = cp(34);
-     let op = !1;
- 
-     function Ip() {
-       return op
-     }
+     var wQ = XQ(26),
+       qQ = XQ(1226),
+       TQ = XQ(5349),
+       zQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L17` → after: `L14-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L14-L32) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L17)

```diff
-       op !== pp && (op = pp, Op.m.GA("replayViewer|videoExportChanged"))
+       let {
+         note: WQ
+       } = QQ;
+       const {
+         t: XQ
+       } = (0, qQ.C)(), {
+         clientEscMenuOptions: sQ
+       } = (0, wQ.n)(["clientEscMenuOptions"]);
+       return (0, zQ.jsx)(TQ.e, {
+         label: XQ("touchSettings:actionButtons"),
+         checked: sQ.touchActionButtons,
+         onClick: QQ => {
+           wQ.b.setClientEscMenuOptions({
+             touchActionButtons: QQ
+           })
+         },
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L20` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L35) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L20)

```diff
-   36591: (pp, ip, cp) => {
+   9228: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L22-L26` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L37-L38) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L22-L26)

```diff
-       b: () => Dp,
-       c: () => xp,
-       g: () => Yp,
-       h: () => Lp,
-       l: () => Hp
+       d: () => nX,
+       f: () => eX
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L28-L69` → after: `L40-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L40-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L40-L84) · [Before (L28-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L28-L69)

```diff
-     var Op = cp(643),
-       op = cp(1779),
-       Ip = cp(4911);
-     class Sp {
-       constructor(pp, ip) {
-         this.width = pp, this.TA = ip, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(pp * ip)
-       }
-       push(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const cp = this.data,
-           Op = this.next * this.width;
-         for (let op = 0; op < this.width; op++) cp[Op + op] = pp[ip + op];
-         this.next = (this.next + 1) % this.TA, this.size = Math.min(this.size + 1, this.TA)
-       }
-       rows() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (26 more removed lines; see GitHub link above)
+     var wQ = XQ(1226),
+       qQ = XQ(61),
+       TQ = XQ(2061),
+       zQ = XQ(2067),
+       sQ = XQ(1081),
+       FQ = XQ.n(sQ),
+       PQ = XQ(1507),
+       gQ = XQ(26),
+       JQ = XQ(105),
+       rQ = XQ(129),
+       IQ = XQ(5349),
+       jQ = XQ(2535),
+       BQ = XQ(318),
+       yQ = XQ(2071),
+       VQ = XQ(2076),
+       DQ = XQ(9235),
+ ... (29 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L71-L83` → after: `L86-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L86-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L86-L92) · [Before (L71-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L71-L83)

```diff
-       Dp = {
-         lockGained: 1,
-         lockLost: 2,
-         lockError: 3,
-         visible: 4,
-         hidden: 5,
-         focus: 6,
-         blur: 7,
-         jsClient: 8,
-         wasmClient: 9,
-         droppedCopies: 10,
-         stepsLost: 11,
-         cameraSetsLost: 12
+       RQ = QQ => cQ.z.filter((WQ => AQ[WQ] === QQ)),
+       EQ = new Set(RQ("cluster")),
+       CQ = new Set(RQ("inventory")),
+       uQ = QQ => "inventory" === QQ || CQ.has(QQ),
+       LQ = QQ => {
+         const WQ = AQ[QQ];
+         return void 0 === WQ ? [] : [WQ, ...LQ(WQ)]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L85-L90` → after: `L94-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L94-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L94-L125) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L85-L90)

```diff
-       Ap = 12e3,
-       Pp = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
-       Wp = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
-       yp = ["nowMs", "dtMs", "heading", "pitch", "kind"],
-       Up = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
-       wp = ["nowMs", "change", "count"];
+       kQ = QQ => [QQ, ...LQ(QQ)],
+       fQ = (QQ, WQ, XQ) => "shop" === QQ && WQ ? XQ("inventory") ? ["inventory"] : XQ("bag") ? [QQ, "bag"] : [QQ] : [QQ],
+       SQ = new Map([
+         ["cluster", EQ],
+         ["inventory", CQ]
+       ]),
+       tQ = ["cluster"],
+       oQ = [...tQ, ...cQ.z.filter((QQ => !tQ.includes(QQ) && !AQ[QQ]))],
+       eQ = QQ => [QQ, ...RQ(QQ).flatMap(eQ)],
+       nQ = oQ.flatMap(eQ).map((QQ => ({
+         id: QQ,
+         label: `hudLayout:${QQ}`,
+         ...cQ.v[QQ],
+         parent: AQ[QQ]
+       }))),
+       xQ = Object.fromEntries(nQ.map((QQ => [QQ.id, QQ]))),
+ ... (16 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L93` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L128-L134) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L93)

```diff
-       return "js" === pp ? Dp.jsClient : Dp.wasmClient
+       let {
+         className: WQ,
+         keepPlace: XQ
+       } = QQ;
+       return XQ ? (0, UQ.jsx)("div", {
+         className: FQ()(WQ, "Placeholder")
+       }) : null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L95-L98` → after: `L136-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L136-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L136-L167) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L95-L98)

```diff
-     class tp {
-       constructor() {
-         this.steps = new Sp(xp, Ap), this.events = new Sp(Wp.length, Ap), this.frames = new Sp(yp.length, Ap), this.cameraSets = new Sp(Ip.e, 256), this.changes = new Sp(wp.length, 256)
-       }
+ 
+     function KQ(QQ) {
+       let {
+         id: WQ,
+         elements: XQ,
+         actionButtons: qQ,
+         keyNames: TQ,
+         className: zQ,
+         keepPlace: sQ,
+         onHidden: FQ
+       } = QQ;
+       const {
+         t: gQ
+       } = (0, wQ.C)();
+       if (!xQ[WQ].hide) return (0, UQ.jsx)(OQ, {
+         className: zQ,
+ ... (16 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L100-L196` → after: `L169-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L169-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L169-L241) · [Before (L100-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L100-L196)

```diff
-     const Hp = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(Wp.length), this.startedClient = null, this.startedAtMs = 0
-       }
-       get client() {
-         return this.startedClient
-       }
-       start(pp, ip) {
-         this.startedClient = pp, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vp(pp)) : ip && this.allocate()
-       }
-       lockGained() {
-         this.allocate(), this.change(Dp.lockGained)
-       }
-       allocate() {
-         null === this.rings && (this.rings = new tp, null !== this.startedClient && this.changeAt(this.startedAtMs, vp(this.startedClient), 1))
-       }
- ... (81 more removed lines; see GitHub link above)
+ 
+     function mQ(QQ) {
+       let {
+         id: WQ,
+         elements: XQ,
+         actionButtons: qQ,
+         keyNames: TQ,
+         className: zQ,
+         keepPlace: sQ,
+         onlyWhenMoved: FQ,
+         locked: gQ,
+         onReset: JQ
+       } = QQ;
+       const {
+         t: rQ
+       } = (0, wQ.C)(), IQ = xQ[WQ], jQ = (0, cQ.J)(XQ[WQ]);
+ ... (57 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L216` → after: `L245-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L245-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L245-L270) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L216)

```diff
-       return (0, Ip.C)(pp).toFixed(1)
+       let {
+         className: WQ,
+         open: XQ,
+         name: qQ,
+         onToggle: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, wQ.C)();
+       return (0, UQ.jsx)(PQ.T, {
+         className: WQ,
+         ariaLabel: zQ(XQ ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
+           name: qQ
+         }),
+         pressed: XQ,
+         analyticsClick: {
+ ... (10 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L220` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L274-L277) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L220)

```diff
-       return `camera set by ${Sp.get(pp[ip+1])}: heading ${`${xp(pp[ip+2])} -> ${xp(pp[ip+4])}`} deg, pitch ${`${xp(pp[ip+3])} -> ${xp(pp[ip+5])}`} deg, at ${pp[ip].toFixed(1)} ms`
+       var XQ;
+       QQ.contains(document.activeElement) && WQ.focus({
+         preventScroll: !0
+       }), null === (XQ = (0, lQ.f)()) || void 0 === XQ || XQ.handOverPadFocus(QQ, WQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L226` → after: `L281-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L281-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L281-L315) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L226)

```diff
-       return Number.isFinite(pp) ? String(Math.round(10 * pp) / 10) : String(pp)
+       const WQ = QQ.closest("[data-hud-row]"),
+         XQ = null === WQ || void 0 === WQ ? void 0 : WQ.querySelector(".HudElementRowName");
+       return !(!WQ || !XQ) && (WW(WQ, XQ), !0)
+     }
+     const wW = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
+ 
+     function qW(QQ, WQ) {
+       return "joystick" === QQ && !WQ
+     }
+ 
+     function TW() {
+       const {
+         t: QQ
+       } = (0, wQ.C)();
+       return (0, UQ.jsx)(PQ.T, {
+         className: "HudFixJoystickButton",
+ ... (19 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L230` → after: `L339-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L339-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L339-L372) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L230)

```diff
-       return Number.isFinite(pp) ? pp.toFixed(1) : String(pp)
+       let {
+         id: WQ,
+         slot: XQ,
+         icon: wQ,
+         label: TQ,
+         hidden: zQ,
+         className: sQ,
+         face: PQ
+       } = QQ;
+       const gQ = (0, qQ.useRef)(null);
+       return (0, qQ.useLayoutEffect)((() => {
+         PQ && gQ.current && (0, jW.o)(gQ.current, PQ)
+       }), [PQ]), (0, UQ.jsxs)("div", {
+         className: FQ()("TouchKeyHit", `TouchSlot${XQ}`, sQ, {
+           HudPreviewGhost: zQ.has(WQ)
+         }),
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L232-L241` → after: `L374-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L374-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L374-L388) · [Before (L232-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L232-L241)

```diff
-     class Wp {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.FX = 0, this.pastLimit = 0, this.lockSkips = 0, this.Hw = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
-       }
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.FX > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
-       hasEvent() {
-         return this.FX > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
+ 
+     function VW(QQ) {
+       let {
+         item: WQ,
+         selected: XQ
+       } = QQ;
+       const wQ = (0, qQ.useRef)(null);
+       return (0, qQ.useLayoutEffect)((() => {
+         wQ.current && (0, jW.o)(wQ.current, WQ)
+       }), [WQ]), (0, UQ.jsx)("div", {
+         ref: wQ,
+         className: FQ()("InvenItem", {
+           Selected: XQ
+         })
+       })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L243-L333` → after: `L390-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L390-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L390-L401) · [Before (L243-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L243-L333)

```diff
-     class yp {
-       constructor() {
-         var pp = this;
-         this.topicOn = (0, op.r)("look"), this.remote = (0, op.v)(), this.tally = new Wp, this.takes = null, this.started = !1, this.record = function(ip) {
-           let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (Yp.l.step(ip, cp), !pp.topicOn) return;
-           const Op = ip[cp],
-             op = ip[cp + 1],
-             Ip = ip[cp + 2],
-             Sp = ip[cp + 3],
-             xp = ip[cp + 4],
-             Lp = ip[cp + 5],
-             Dp = ip[cp + 6],
-             Wp = ip[cp + 7],
-             yp = ip[cp + 8],
-             Up = ip[cp + 9],
- ... (75 more removed lines; see GitHub link above)
+     const DW = {
+         emotes: "face-smile",
+         perspective: "video",
+         scoreboard: "list",
+         tasks: "bars",
+         cosmetics: "shirt",
+         invite: "user-plus",
+         settings: "gear"
+       },
+       pW = QQ => void 0 === QQ ? {} : {
+         style: {
+           "--parked": QQ
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L335-L347` → after: `L403-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L403-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L403-L504) · [Before (L335-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L335-L347)

```diff
-       }
-       droppedCopy() {
-         this.counted(Yp.b.droppedCopies, 1)
-       }
-       counted(pp, ip) {
-         if (0 === ip) return;
-         if (Yp.l.change(pp, ip), !this.topicOn) return;
-         const cp = this.tally;
-         pp === Yp.b.droppedCopies ? cp.dropped += ip : pp === Yp.b.stepsLost ? cp.lost += ip : cp.cameraSetsLost += ip
-       }
-       endTake() {
-         this.takeRecords(), this.takes = null
-       }
+       };
+ 
+     function GW(QQ) {
+       let {
+         id: WQ,
+         hidden: XQ,
+         parked: wQ,
+         unslotted: qQ = !1
+       } = QQ;
+       return (0, UQ.jsx)("div", {
+         className: FQ()("TopRightIcon", rW.n[WQ], {
+           HudPreviewGhost: XQ.has(WQ),
+           [gW.b]: void 0 !== wQ,
+           [gW.e]: qQ
+         }),
+         ...pW(wQ),
+ ... (86 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L352-L353` → after: `L508-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L508-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L508-L526) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L352-L353)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return Up ??= new yp, Up.start(pp, ip), Up.record
+       let {
+         next: WQ,
+         hidden: XQ
+       } = QQ;
+       return (0, UQ.jsx)("div", {
+         className: FQ()("HotBarArrow", WQ ? "Next" : "Previous", {
+           HudPreviewGhost: XQ
+         }),
+         ...BW("arrows"),
+         children: (0, UQ.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           children: (0, UQ.jsx)("div", {
+             className: "ScaleOnHover",
+             children: (0, UQ.jsx)(hQ.d, {
+               name: WQ ? "caret-right" : "caret-left"
+             })
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L357-L358` → after: `L530-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L530-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L530-L919) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L357-L358)

```diff
-       var pp;
-       null === (pp = Up) || void 0 === pp || pp.endTake()
+       return (0, UQ.jsx)("div", {
+         className: "SocialBarContainer",
+         children: (0, UQ.jsx)("div", {
+           className: "SocialBarOuter",
+           children: (0, UQ.jsx)("div", {
+             className: "SocialBar",
+             children: (0, UQ.jsx)("div", {
+               className: "CondensedSocialBarInner",
+               children: (0, UQ.jsx)("div", {
+                 className: "CondensedSectionsContainer",
+                 children: (0, UQ.jsxs)("div", {
+                   className: "CondensedSections",
+                   children: [(0, UQ.jsxs)("div", {
+                     className: "CondensedSection CondensedSectionFriendRequests",
+                     children: [(0, UQ.jsx)("div", {
+                       className: "CondensedSectionValue",
+ ... (374 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L362-L363` → after: `L923-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L923-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L923-L926) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L362-L363)

```diff
-       var pp;
-       null === (pp = Up) || void 0 === pp || pp.droppedCopy()
+       const [QQ, WQ] = (0, qQ.useState)({}), XQ = (0, qQ.useCallback)((QQ => {
+         WQ((WQ => [...new Set([...Object.keys(WQ), ...Object.keys(QQ)])].every((XQ => WQ[XQ] === QQ[XQ])) ? WQ : QQ))
+       }), []);
+       return [QQ, XQ]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L365` → after: `L928-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L928-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L928-L930) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L365)

```diff
-     async function Hp(pp) {
+     const AW = .05;
+ 
+     function RW(QQ) {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L367` → after: `L932-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L932-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/160.js#L932-L947) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/160.js#L367)

```diff
-       null === (ip = Up) || void 0 === ip || ip.takeRecords();
+       let {
+         selected: XQ,
+         layout: qQ,
+         actionButtons: TQ,
+         keyNames: zQ,
+         overlaps: sQ,
+         scaleCaps: gQ,
+         joystickFixed: JQ,
+         onScale: rQ,
+         onHidden: IQ,
+         onReset: jQ,
+         locked: BQ,
+         lockable: yQ,
+         onLocked: VQ,
+         extra: DQ
+       } = QQ;
```
