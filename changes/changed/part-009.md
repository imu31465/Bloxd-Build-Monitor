# Changed — Bundle Modifications Report (Part 009 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `9 / 56` (**280** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 14. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L247-L305` → after: `L864-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L864-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L864-L869) · [Before (L247-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L247-L305)

```diff
-       let {
-         ownedSchematics: cp,
-         onClose: Op,
-         onChosenEdit: op,
-         onChosenNew: Ip,
-         onChosenDownload: xp
-       } = pp;
-       const {
-         t: Lp
-       } = (0, yp.H)(), [Yp, Ap] = (0, Dp.useState)("choose"), [Wp, Up] = (0, Dp.useState)(null), [vp, tp] = (0, Dp.useState)(null);
-       return (0, wp.jsxs)(wp.Fragment, {
-         children: [(0, wp.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: Lp("worldBuilder:saveSchematic")
-         }), "choose" === Yp && (0, wp.jsxs)(wp.Fragment, {
-           children: [(0, wp.jsx)("h2", {
- ... (43 more removed lines; see GitHub link above)
+       const zQ = QQ instanceof Error ? QQ.name : "thrown",
+         sQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => TQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
+         FQ = null === WQ ? "wasm memory unknown" : `wasm memory ${Math.round(WQ/2**20)} MB`,
+         PQ = null === XQ.panic ? "" : `, panic: ${(0,wQ.i)(XQ.panic)}`,
+         gQ = `${zQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
+       return `${(0,wQ.l)(XQ.kind,XQ.refusedBytes)} ${gQ} (${FQ})${PQ}${sQ.length>0?` | ${sQ.join(" < ")}`:""}`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L309-L323` → after: `L874-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L874-L878) · [Before (L309-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L309-L323)

```diff
-       let {
-         type: ip,
-         prepopName: cp,
-         ownedSchematics: Op,
-         onSubmit: op,
-         onBack: Ip
-       } = pp;
-       const {
-         t: Sp
-       } = (0, yp.H)(), [xp, Lp] = (0, Dp.useState)(""), [Ap, Wp] = (0, Dp.useState)(""), [Up, vp] = (0, Dp.useState)(null), [tp, Hp] = (0, Dp.useState)(!0), kp = pp => {
-         var cp;
-         pp = null !== (cp = pp) && void 0 !== cp ? cp : xp;
-         const op = "new" === ip ? (0, jp.A)(pp) : null,
-           Ip = [...(0, jp.xb)(pp), ...op ? [op] : []];
-         return Ip.length > 0 ? (vp(Ip.join(", ")), !1) : "new" === ip && Op.find((ip => ip.name === pp)) ? (vp(Sp("worldBuilder:schematicAlreadyExists")), !1) : (vp(null), !0)
+       var WQ;
+       let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(QQ instanceof Error) || !FQ.test(QQ.message)) return {};
+       if (!("detached" in XQ)) return {
+         arrayBufferDetached: "absent"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L325-L390` → after: `L880-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L880-L882) · [Before (L325-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L325-L390)

```diff
-       return (0, wp.jsxs)("div", {
-         className: "SaveSchematicWindow",
-         children: [(0, wp.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: Sp("general:name")
-         }), (0, wp.jsx)(dp.c, {
-           className: Yp()("SaveSchematicName", {
-             Error: Up
-           }),
-           forcedText: cp,
-           onValueChange: pp => {
-             Lp(pp), kp(pp)
-           },
-           placeholderText: Sp("worldBuilder:schematicNamePlaceholder"),
-           maxLength: jp.qb
-         }), (0, wp.jsx)("h2", {
- ... (50 more removed lines; see GitHub link above)
+       return {
+         arrayBufferDetached: (0, qQ.W)(null === (WQ = (0, qQ.O)(XQ, "detached")) || void 0 === WQ ? void 0 : WQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L392-L394` → after: `L884-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L884-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L884-L914) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L392-L394)

```diff
-     var Rp = cp(1211),
-       qp = cp(1765),
-       Mp = cp(1149);
+     const gQ = 500;
+ 
+     function JQ(QQ) {
+       let WQ = "[object Object]";
+       try {
+         WQ = String(QQ)
+       } catch {}
+       if ("[object Object]" !== WQ) return WQ;
+       try {
+         var XQ, wQ;
+         return null !== (XQ = null === (wQ = JSON.stringify(QQ)) || void 0 === wQ ? void 0 : wQ.slice(0, gQ)) && void 0 !== XQ ? XQ : WQ
+       } catch {
+         return WQ
+       }
+     }
+   },
+ ... (15 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L397-L541` → after: `L917-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L917-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/218.js#L917-L938) · [Before (L397-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/218.js#L397-L541)

```diff
-       if ("devDownloadJson" !== pp) ! function(pp, ip) {
-         const cp = Rp.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Ip.d)().websocketUrl);
-         let xp = !1;
-         const Lp = async (pp, ip) => {
-           if (xp) return;
-           xp = !0;
-           const {
-             gameNameWithVariation: Op,
-             lobbyName: Sp
-           } = (0, Ip.d)(), Lp = {
-             gameNameWithVariation: Op,
-             lobbyName: Sp
-           };
-           return await (0, Mp.postJsonWithMetricsCookiesAndJsonResponse)(`${cp}/schematic/${pp}`, op.y[pp].toBuffer({
-             ...Lp,
-             ...ip
- ... (129 more removed lines; see GitHub link above)
+       return TQ(QQ, WQ) ? `trap=alloc_failed ${WQ} bytes` : `trap=${QQ}`
+     }
+ 
+     function TQ(QQ, WQ) {
+       return "unreachable" === QQ && WQ > 0
+     }
+ 
+     function zQ(QQ, WQ, XQ) {
+       const wQ = function(QQ) {
+         return QQ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(QQ.message) ? "unreachable" : /out of bounds/i.test(QQ.message) ? "out_of_bounds" : "runtime_error" : (QQ instanceof RangeError || QQ instanceof Error && "InternalError" === QQ.name) && /call stack|recurs … [truncated]
+       }(QQ);
+       if ("unreachable" !== wQ) return {
+         kind: wQ,
+         panic: null,
+         refusedBytes: 0
+       };
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L4-L6)

```diff
-   36575: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => mp
+   36795: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ,
+       f: () => qQ,
+       g: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L8-L26` → after: `L10-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L10-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L10-L197) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L8-L26)

```diff
-     var Op = cp(1049),
-       op = cp.n(Op),
-       Ip = cp(1543),
-       Sp = cp(1042),
-       xp = cp(768),
-       Lp = cp(1201),
-       Yp = cp(1480),
-       Dp = cp(1538),
-       Ap = cp(3654),
-       Pp = cp(1060),
-       Wp = cp(3581),
-       yp = cp(2661),
-       Up = cp(1112);
-     const wp = 2;
- 
-     function vp(pp) {
- ... (3 more removed lines; see GitHub link above)
+     var wQ = XQ(1854);
+     class qQ extends Error {
+       constructor(QQ) {
+         super("The game server didn't answer in time"), this.leg = QQ, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const TQ = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+       get answered() {
+         return this.answers
+       }
+       answer() {
+         this.answers++
+       }
+ ... (172 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L28-L33` → after: `L199-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L199-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L199-L221) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L28-L33)

```diff
-         type: "preview",
-         preview: pp.preview
-       }
-     }
- 
-     function tp(pp) {
+         footprintBytes: UQ(gQ.i),
+         basis: "unreported",
+         namesLimit: !1
+       }
+     }
+ 
+     function UQ(QQ) {
+       return jQ + QQ * BQ
+     }
+ 
+     function bQ() {
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lQ(),
+         WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TQ.siteUsed;
+       if ("android" !== QQ.os || "mobileAndroid" === WQ) return !0;
+       const {
+         footprintBytes: XQ,
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L35-L155` → after: `L223-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L223-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L223-L249) · [Before (L35-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L35-L155)

```diff
-         game: ip,
-         disabled: cp,
-         showPlaceholder: Op
-       } = pp;
-       return null !== ip ? (0, Up.jsx)(Wp.g, {
-         source: vp(ip),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: cp,
-         entrySource: "customGamePlace"
-       }) : Op ? (0, Up.jsx)(Wp.e, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
- 
- ... (105 more removed lines; see GitHub link above)
+         footprintBytes: sQ,
+         basis: FQ,
+         namesLimit: JQ
+       } = GQ(QQ);
+       if (XQ) {
+         const QQ = Math.min(sQ, UQ(gQ.d));
+         sQ = jQ + Math.max(0, QQ - jQ) / 2, FQ += "+killed", JQ = !0
+       }
+       null !== WQ && UQ(WQ) < sQ && (sQ = UQ(WQ), FQ += "+learned", JQ = !0), FQ += (0, PQ.u)(null !== (qQ = QQ.x32) && void 0 !== qQ ? qQ : null), "fix" === QQ.x32 && UQ(VQ) < sQ && (sQ = UQ(VQ), JQ = !0);
+       const rQ = function(QQ) {
+           const WQ = Math.floor((QQ - jQ) / BQ);
+           return Math.min(gQ.d, Math.max(gQ.h, WQ))
+         }(sQ),
+         IQ = JQ && rQ < gQ.d ? Math.min(rQ, gQ.f) : rQ,
+         yQ = (0, gQ.o)(IQ);
+       return {
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L159-L171` → after: `L253-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L253-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L253-L385) · [Before (L159-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L159-L171)

```diff
-       const {
-         t: ip
-       } = (0, Lp.H)(), cp = (0, Ip.A)(), Op = (0, kp.h)(), Pp = (0, Ap.b)({
-         refresh: !0
-       }), Wp = cp.customGamePlace;
-       if (!(0, Sp.k)(Wp)) return (0, Up.jsx)(Dp.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const yp = xp.c[Wp],
-         wp = Sp.b[Wp],
-         vp = null !== (pp = null === Pp || void 0 === Pp ? void 0 : Pp[Wp]) && void 0 !== pp ? pp : null,
-         tp = [];
-       for (let op = 0; op < wp.length; op++) {
+       return dQ ??= {
+         os: (0, qQ.getOperatingSystem)(),
+         deviceMemory: navigator.deviceMemory,
+         ...(0, zQ.m)()
+       }, {
+         ...dQ,
+         x32: null !== (QQ = (0, PQ.r)()) && void 0 !== QQ ? QQ : void 0
+       }
+     }
+ 
+     function hQ() {
+       return vQ(lQ(), (0, sQ.e)(), (0, FQ.I)("wasm").length > 0)
+     }
+ 
+     function iQ() {
+       return aQ ??= (0, JQ.o)(vQ(lQ(), null, !1).chunkCap), aQ
+ ... (117 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L173-L182` → after: `L387-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L387-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L387-L446) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L173-L182)

```diff
-         const pp = ep[op];
-         if (!pp) continue;
-         const cp = wp[op];
-         tp.push({
-           id: cp.id,
-           category: cp.category,
-           title: ip(cp.displayTranslationKey),
-           tintColour: cp.tintColour,
-           layout: jp[pp],
-           games: null !== (mp = null === vp || void 0 === vp ? void 0 : vp[cp.id]) && void 0 !== mp ? mp : null
+         return dQ(this.memory.memoryBytes(), QQ, null !== (XQ = this.ceilingBytes) && void 0 !== XQ ? XQ : WQ)
+       }
+       reserveAtJoin(QQ) {
+         let {
+           targetBytes: WQ,
+           leastBytes: XQ
+         } = QQ;
+         const wQ = this.memory.memoryBytes(),
+           qQ = wQ + XQ,
+           TQ = Math.max(WQ + (this.ballastOn() ? gQ : 0), qQ),
+           zQ = this.call((() => this.memory.reserveUpFront(TQ) ? "target" : TQ > qQ && this.memory.reserveUpFront(qQ) ? "least" : "none"), "none");
+         if (this.stopped) return !1;
+         if ("target" !== zQ) {
+           const QQ = "least" === zQ ? `took ${qQ} bytes instead` : "frames grow it in steps";
+           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${TQ} bytes was refused at ${wQ} bytes; ${QQ}`)
+         }
+ ... (44 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L185-L190` → after: `L449-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L449-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L449-L480) · [Before (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L185-L190)

```diff
-       return (0, Up.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, Up.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${Wp}/${yp.largePicture}.png)`
+       workerGone(QQ) {
+         const WQ = this.workers.get(QQ);
+         WQ && (WQ.gone = !0)
+       }
+       details() {
+         var QQ, WQ;
+         const XQ = this.memory.memoryBytes(),
+           qQ = {
+             wasmMemoryNow: `${(0,wQ.n)(XQ)} MiB`,
+             wasmMemoryMiB: String(Math.floor(XQ / wQ.g))
+           };
+         null !== this.joinReserveTaken && (qQ.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (qQ.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
+         const TQ = this.main;
+         if (TQ) {
+           qQ.wasmMemoryMain = lQ(TQ);
+           const QQ = Math.max(0, TQ.peakLiveBytes - this.ballastPeakBytes),
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L192-L213` → after: `L482-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L482-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/219.js#L482-L556) · [Before (L192-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/219.js#L192-L213)

```diff
-         }), (0, Up.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: ip(yp.title)
-         }), (0, Up.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, Up.jsx)(Yp.d, {
-             onClick: () => (0, Dp.navigatePreserveSearch)("/"),
-             children: ip("homePage:backToGames")
-           })
-         }), !Op && (0, Up.jsx)(dp, {
-           categories: tp
-         }), Op && (0, Up.jsx)("div", {
-           className: op()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
-           children: tp.map((pp => (0, Up.jsx)(Hp, {
-             category: pp.category,
-             title: pp.title,
- ... (6 more removed lines; see GitHub link above)
+           of this.workers.values()) zQ += wQ.reservesRefused, sQ += wQ.allocationsRefused;
+         return {
+           wasmMainMiB: Number((0, wQ.n)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, wQ.n)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: zQ,
+           refusedAllocations: sQ,
+           sheds: this.sheds,
+           ...null === (TQ = this.footprint) || void 0 === TQ ? void 0 : TQ.snapshot()
+         }
+       }
+       workersMemoryBytes() {
+         let QQ = 0;
+         for (const {
+             stats: WQ,
+             gone: XQ
+ ... (59 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 1. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/220.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/220.js#L2)

```diff
- export const ids = [220, 296];
+ export const ids = [220];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/220.js#L4)

```diff
-   41517: (pp, ip, cp) => {
+   36619: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/220.js#L6)

```diff
-       CharacterCustomisationUI: () => Si
+       ITEM_FILES_WITHOUT_SPRITE: () => sQ,
+       ITEM_SPRITES: () => TQ,
+       ITEM_SPRITES_WITHOUT_FILE: () => zQ,
+       ITEM_SPRITE_RUNS: () => qQ,
+       MAX_SPRITE_ITEM_ID: () => wQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L8-L1074` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/220.js#L12-L16) · [Before (L8-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/220.js#L8-L1074)

```diff
-     var Op = cp(62),
-       op = cp(3107),
-       Ip = cp(1141),
-       Sp = cp(1049),
-       xp = cp.n(Sp),
-       Lp = cp(1251),
-       Yp = cp(620),
-       Dp = cp(1201),
-       Ap = cp(2276),
-       Pp = cp(1579),
-       Wp = cp(2638);
-     const yp = Lp.u.filter((pp => !Pp.f.includes(pp)));
- 
-     function Up(pp, ip) {
-       return yp.includes(pp) && "string" === typeof ip && (0, Wp.f)(pp, ip)
-     }
- ... (1051 more removed lines; see GitHub link above)
+     const wQ = 10090,
+       qQ = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       TQ = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       zQ = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       sQ = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L8)

```diff
-   36622: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => qp,
-       f: () => Mp,
-       h: () => Hp
+   36634: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CreateCustomLobby: () => iQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L28` → after: `L8-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L8-L34) · [Before (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L10-L28)

```diff
-     var Op = cp(272),
-       op = cp(104);
-     const Ip = new(cp(36630).b)(new URL(cp.p + cp.u(3), cp.b), {
-       name: "blockIconWorker",
-       type: "module"
-     });
-     var Sp = cp(1819),
-       xp = cp(2179);
-     const Lp = 1e4,
-       Yp = 3e4;
-     let Dp = null,
-       Ap = null,
-       Pp = null,
-       Wp = !1,
-       yp = 0;
-     const Up = new Map;
- ... (3 more removed lines; see GitHub link above)
+     XQ(36641);
+     var wQ = XQ(4948),
+       qQ = XQ(61),
+       TQ = XQ(1739),
+       zQ = XQ(1081),
+       sQ = XQ.n(zQ),
+       FQ = XQ(3398),
+       PQ = XQ(1165),
+       gQ = XQ(1238),
+       JQ = XQ(4912),
+       rQ = XQ(1507),
+       IQ = XQ(36644),
+       jQ = XQ(1226),
+       BQ = XQ(1384),
+       yQ = XQ(1567),
+       VQ = XQ(26),
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L31-L72` → after: `L37-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L37-L88) · [Before (L31-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L31-L72)

```diff
-       const ip = new Promise(((ip, cp) => {
-         const Op = new Image;
-         Op.crossOrigin = "anonymous", Op.fetchPriority = "high", Op.onload = () => {
-           ip(Op)
-         }, Op.onerror = () => {
-           cp(new Error(`A block icon's texture did not load: ${pp.slice(0,100)}`))
-         }, Op.src = pp
-       }));
-       return (0, xp.g)(ip)
-     }
- 
-     function dp(pp) {
-       var ip, cp;
-       Wp || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${pp}`), Wp = !0, null === (ip = Dp) || void 0 === ip || ip.terminate(), Dp = null, Ap = null, vp.clear(), tp.clear();
-       for (const Op of Up.values()) Op(null);
-       Up.clear(), null === (cp = wp) || void 0 === cp || cp()
- ... (26 more removed lines; see GitHub link above)
+       var WQ, XQ, zQ, iQ;
+       let {
+         gameNameWithVariation: cQ,
+         close: AQ,
+         initialDefaultGamemode: RQ
+       } = QQ;
+       const {
+         t: EQ
+       } = (0, jQ.C)(), CQ = (0, yQ.useNavigatePreserveSearch)(), [uQ, LQ] = (0, qQ.useState)("Enter"), [kQ, fQ] = (0, qQ.useState)(""), SQ = qQ.useRef(null), tQ = null === (WQ = UQ.e[cQ]) || void 0 === WQ ? void 0 : WQ.showWorldsInsteadOfCustomLobbies, oQ = tQ ? 1 : null === (XQ  … [truncated]
+       RQ || (RQ = "classic_creative" === cQ || "classic_creativeFlat" === cQ ? "creative" : "classic" === cQ ? "peaceful" : "survival");
+       const xQ = {
+         baseOptions: {
+           gameNameWithVariation: tQ ? "classic" : cQ,
+           name: "",
+           visibility: "unlisted"
+         },
+ ... (36 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L74-L78` → after: `L90-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L90-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L90-L137) · [Before (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L74-L78)

```diff
-         }, Dp.onerror = ip => {
-           ip.preventDefault(), dp(`stopped (${ip.message||"its script did not load or run"})`), pp()
-         };
-         const cp = `did not start in ${Yp/1e3} s`;
-         await (0, Sp.k)(ip, Yp, cp).catch((() => {
+         })
+       }
+ 
+       function mQ(QQ, WQ) {
+         NQ({
+           ...YQ,
+           listedOptions: {
+             ...YQ.listedOptions,
+             [QQ]: WQ
+           }
+         })
+       }
+ 
+       function MQ(QQ, WQ) {
+         NQ({
+           ...YQ,
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L81-L137` → after: `L140-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L140-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L140-L197) · [Before (L81-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L81-L137)

```diff
-       }(), Pp
-     }
- 
-     function jp() {
-       if (null !== wp || 0 === Up.size) return;
-       const pp = new Promise((pp => {
-           wp = pp
-         })),
-         ip = `did not answer in ${Lp/1e3} s`;
-       (0, Sp.k)(pp, Lp, ip).then((() => {
-         wp = null, jp()
-       }), (() => {
-         wp = null, dp(ip)
-       }))
-     }
- 
- ... (41 more removed lines; see GitHub link above)
+       }), [YQ.mapOptions.mapType, ZQ]);
+       const WW = {
+           tpRequests: {
+             isEnabled: () => !YQ.worldOptions.disableTpRequests,
+             UH: QQ => {
+               MQ("disableTpRequests", !QQ)
+             }
+           },
+           spawnProtection: {
+             isEnabled: () => YQ.worldOptions.spawnProtection,
+             UH: QQ => {
+               MQ("spawnProtection", QQ)
+             }
+           },
+           spawnReset: {
+             isEnabled: () => YQ.worldOptions.enableSpawnReset,
+ ... (42 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L139-L162` → after: `L199-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L199-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L199-L221) · [Before (L139-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L139-L162)

```diff
-         })))
-       }(ip, pp))))), (Op => ({
-         type: "draw",
-         id: Op,
-         ...pp,
-         size: ip,
-         outlineWidth: cp
-       })))
-     }
- 
-     function Mp(pp, ip, cp, Op) {
-       return Rp((cp => function(pp, ip, cp) {
-         return mp(pp, tp, ip, (async () => {
-           const {
-             texture: pp,
-             ...Op
- ... (8 more removed lines; see GitHub link above)
+         });
+       return (0, hQ.jsxs)("div", {
+         className: sQ()("CreateCustomLobby", {
+           CreateCustomLobbySuccess: "Success" === uQ,
+           AdvancedMode: eQ
+         }),
+         children: ["Success" === uQ && (0, hQ.jsxs)("div", {
+           className: "CreateCustomLobbySuccessOverlay",
+           children: [(0, hQ.jsxs)("div", {
+             className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
+             children: [(0, hQ.jsx)(HQ.d, {
+               name: "check"
+             }), (0, hQ.jsx)(DQ.d, {})]
+           }), (0, hQ.jsx)("div", {
+             className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
+             children: (0, hQ.jsx)(rQ.s, {
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L164-L172` → after: `L223-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L223-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L223-L475) · [Before (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L164-L172)

```diff
-           }
-         }))
-       }(cp, pp, ip)), (ip => ({
-         type: "drawModel",
-         id: ip,
-         name: pp,
-         size: cp,
-         outlineWidth: Op
-       })))
+           })]
+         }), (0, hQ.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, hQ.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: EQ(tQ ? "homePage:createWorld" : "homePage:createCustomLobby")
+           })
+         }), (0, hQ.jsx)(lQ.c, {
+           locked: XW,
+           children: (0, hQ.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [!eQ && wW, eQ && (0, hQ.jsxs)("div", {
+               className: "BloxdForm",
+               children: [(0, hQ.jsx)("div", {
+                 className: "SectionTitle",
+                 children: EQ("customLobby:generalOptions")
+ ... (237 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L175` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L478) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L175)

```diff
-   36618: (pp, ip, cp) => {
+   36658: (QQ, WQ, XQ) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L177-L181` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L480) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L177-L181)

```diff
-       c: () => Op,
-       d: () => Lp,
-       g: () => Sp,
-       k: () => Pp,
-       m: () => Yp
+       c: () => FQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L183-L284` → after: `L482-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L482-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L482-L503) · [Before (L183-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L183-L284)

```diff
-     const Op = {
-         across: Math.SQRT1_2,
-         down: Math.SQRT1_2 / 2,
-         up: Math.sqrt(3) / 2
-       },
-       op = .6,
-       Ip = {
-         width: 2 * Op.across,
-         height: 2 * Op.down + Op.up
-       };
- 
-     function Sp(pp, ip) {
-       const cp = ip > 0 ? ip + 1 : 0,
-         Sp = pp * op - ip / Op.across;
-       return Math.max(0, Math.min(Sp, (pp - 2 * cp) / Ip.height))
-     }
- ... (86 more removed lines; see GitHub link above)
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(61),
+       zQ = XQ(4894),
+       sQ = XQ(1145);
+ 
+     function FQ(QQ) {
+       let {
+         locked: WQ,
+         children: XQ
+       } = QQ;
+       const wQ = (0, TQ.useRef)(null),
+         FQ = (0, zQ.b)(wQ, "y");
+       return (0, sQ.jsx)("div", {
+         ref: wQ,
+         className: qQ()("CreateCustomLobbyBody", {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L287` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L506) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L287)

```diff
-   36630: (pp, ip, cp) => {
+   36644: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L289` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L508-L509) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L289)

```diff
-       b: () => op
+       e: () => gQ,
+       f: () => rQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L291-L356` → after: `L511-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L511-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L511-L592) · [Before (L291-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L291-L356)

```diff
-     const Op = {
-       wait: function(pp) {
-         return new Promise((ip => {
-           setTimeout(ip, pp)
-         }))
-       },
-       stallMs: 2e4
-     };
-     class op {
-       constructor(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Op;
-         this.url = pp, this.options = ip, this.timing = cp, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = pp
-       }
-       ready() {
-         if (null === this.fetched) {
- ... (50 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(1404),
+       TQ = XQ(1226),
+       zQ = XQ(1391),
+       sQ = XQ(3732),
+       FQ = XQ(5283),
+       PQ = XQ(1145);
+ 
+     function gQ(QQ) {
+       let {
+         loading: WQ,
+         schematics: XQ,
+         onSchematicPicked: wQ,
+         selectedSchematicIdList: qQ = [],
+         disableAutoExport: FQ
+       } = QQ;
+ ... (66 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L358-L363` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L594-L595) · [Before (L358-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L358-L363)

```diff
-         } catch {
-           return !1
-         } finally {
-           clearTimeout(Op), ip.removeEventListener("abort", Ip)
-         }
-       }
+         })]
+       })
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L365` → after: `L597-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L597-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/221.js#L597-L705) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/221.js#L365)

```diff
-   }
+ 
+     function rQ(QQ) {
+       let {
+         ownedSchematics: WQ,
+         currentWorldSchematicId: XQ,
+         onClose: wQ
+       } = QQ;
+       qQ.NotificationProvider.showCustomPopup({
+         body: QQ => (0, PQ.jsx)(JQ, {
+           ownedSchematics: WQ,
+           currentWorldSchematicId: XQ,
+           onClose: QQ
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: wQ,
+         unlockPointerKey: "schematicListPopup"
+ ... (93 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L5-L74)

```diff
-   39775: (pp, ip, cp) => {
-     pp.exports = op;
-     var Op = cp(343);
- 
-     function op(pp, ip) {
-       if (!(this instanceof op)) return new op(pp, ip);
-       var cp = Op.create();
-       Op.add(cp, pp, ip), this.base = Op.min(Op.create(), pp, cp), this.vec = Op.clone(ip), this.max = Op.max(Op.create(), pp, cp), this.mag = Op.length(this.vec)
-     }
-     var Ip = op.prototype;
-     Ip.width = function() {
-       return this.vec[0]
-     }, Ip.height = function() {
-       return this.vec[1]
-     }, Ip.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   36644: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L76` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L6) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L76)

```diff
-       c: () => xp,
+       e: () => gQ,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L79-L80` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L9-L15) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L79-L80)

```diff
-     var Op = cp(4176);
-     let op = null;
+     var wQ = XQ(61),
+       qQ = XQ(1404),
+       TQ = XQ(1226),
+       zQ = XQ(1391),
+       sQ = XQ(3732),
+       FQ = XQ(5283),
+       PQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L83-L134` → after: `L18-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L18-L51) · [Before (L83-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L83-L134)

```diff
-       return null !== op && pp === op
-     }
- 
-     function Sp() {
-       this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
-     }
-     class xp {
-       constructor(pp, ip) {
-         this.version = "0.7.0";
-         var cp = Object.assign({}, new Sp, ip || {});
-         this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           Aip: 0,
-           Wip: 0,
-           yip: 0
- ... (36 more removed lines; see GitHub link above)
+       let {
+         loading: WQ,
+         schematics: XQ,
+         onSchematicPicked: wQ,
+         selectedSchematicIdList: qQ = [],
+         disableAutoExport: FQ
+       } = QQ;
+       const {
+         t: gQ
+       } = (0, TQ.C)();
+       return (0, PQ.jsxs)("div", {
+         className: "SchematicList",
+         children: [WQ && (0, PQ.jsx)(zQ.e, {}), !WQ && 0 === XQ.length && (0, PQ.jsx)("div", {
+           className: "NoSchematicsText",
+           children: gQ("worldBuilder:noSavedSchematic")
+         }), !WQ && XQ.map((QQ => (0, PQ.jsx)(sQ.d, {
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L138` → after: `L55-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L55-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L55-L93) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L138)

```diff
-       for (var ip in pp) pp[ip] = 0
+       let {
+         ownedSchematics: WQ,
+         currentWorldSchematicId: XQ,
+         onClose: qQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, TQ.C)(), [sQ, JQ] = (0, wQ.useState)(null);
+       return (0, PQ.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === sQ && (0, PQ.jsxs)(PQ.Fragment, {
+           children: [(0, PQ.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: zQ("worldBuilder:schematicList")
+           }), (0, PQ.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+ ... (23 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L142-L155` → after: `L97-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L97-L111) · [Before (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L142-L155)

```diff
-       window.addEventListener("keydown", wp.bind(null, pp, !0), !1), window.addEventListener("keyup", wp.bind(null, pp, !1), !1);
-       var ip = {
-         passive: !0
-       };
-       pp.element.addEventListener("touchstart", Wp.bind(void 0, pp), {
-         passive: !1
-       }), pp.element.addEventListener("touchend", Up.bind(void 0, pp), ip), pp.element.addEventListener("mousedown", vp.bind(null, pp, !0), ip), window.document.addEventListener("mouseup", vp.bind(null, pp, !1), ip), pp.element.addEventListener("touchmove", tp.bind(null, pp), ip) … [truncated]
-     }
-     var Dp = 0,
-       Ap = 0,
-       Pp = null;
- 
-     function Wp(pp, ip) {
-       ip.preventDefault(), yp(ip)
+       let {
+         ownedSchematics: WQ,
+         currentWorldSchematicId: XQ,
+         onClose: wQ
+       } = QQ;
+       qQ.NotificationProvider.showCustomPopup({
+         body: QQ => (0, PQ.jsx)(JQ, {
+           ownedSchematics: WQ,
+           currentWorldSchematicId: XQ,
+           onClose: QQ
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: wQ,
+         unlockPointerKey: "schematicListPopup"
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L159-L276` → after: `L134-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L134-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L134-L145) · [Before (L159-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L159-L276)

```diff
-       let ip = !1;
-       for (let cp = 0; cp < pp.touches.length; ++cp)
-         if (pp.touches[cp].identifier === Pp) {
-           ip = !0;
-           break
-         } if (!ip) {
-         const ip = pp.changedTouches[0];
-         Dp = ip.clientX, Ap = ip.clientY, Pp = ip.identifier
-       }
-     }
- 
-     function Up(pp, ip) {
-       for (var cp = ip.changedTouches, Op = 0; Op < cp.length; ++Op) cp[Op].identifier === Pp && (Pp = null)
-     }
- 
-     function wp(pp, ip, cp) {
- ... (102 more removed lines; see GitHub link above)
+       let {
+         onFilePicked: WQ
+       } = QQ;
+       const {
+         t: XQ
+       } = (0, jQ.C)(), [wQ, qQ] = (0, gQ.useState)(null), {
+         getRootProps: TQ,
+         getInputProps: zQ,
+         isDragActive: FQ
+       } = (0, sQ.c)({
+         onDrop: QQ => {
+           QQ.length > 0 && qQ(QQ[0])
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L278-L284` → after: `L147-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L147-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L147-L194) · [Before (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L278-L284)

```diff
-         Op = op;
-       op = cp;
-       try {
-         qp(ip, !1, pp, cp)
-       } finally {
-         op = Op
-       }
+         useFsAccessApi: !1
+       }), JQ = wQ && wQ.size > 1024 * IQ.ad;
+       return (0, yQ.jsxs)("div", {
+         className: "SchematicUploadContainer",
+         children: [(0, yQ.jsxs)("div", {
+           ...TQ({
+             className: PQ()("SchematicUpload", {
+               ActiveDrag: FQ
+             })
+           }),
+           children: [(0, yQ.jsx)("input", {
+             ...zQ({
+               accept: ".bloxdschem"
+             })
+           }), !FQ && wQ ? (0, yQ.jsxs)(yQ.Fragment, {
+             children: [(0, yQ.jsx)("div", {
+ ... (32 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L287-L300` → after: `L197-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L197-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L197-L235) · [Before (L287-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L287-L300)

```diff
-     function qp(pp, ip, cp, Op) {
-       var op = cp._keyBindmap[pp];
-       op && (Mp(cp._keyStates[pp], ip) && (cp._keyStates[pp] = ip, op.forEach((pp => {
-         (!cp.filterEvents || cp.filterEvents(Op, pp)) && function(pp, ip, cp, Op) {
-           var op = ip ? cp.pressCount : cp.releaseCount;
-           op[pp] = (op[pp] || 0) + 1;
-           var Ip = cp._bindPressCount[pp] || 0;
-           (Ip += ip ? 1 : -1) < 0 && (Ip = 0);
-           cp._bindPressCount[pp] = Ip;
-           var Sp = cp.state[pp];
-           if (Mp(Sp, Ip)) {
-             cp.state[pp] = Ip > 0;
-             var xp = ip ? cp.down : cp.up;
-             cp.disabled || xp.emit(pp, Op)
+     function DQ(QQ) {
+       let {
+         ownedSchematics: WQ,
+         onClose: XQ,
+         onChosenPreset: wQ,
+         onChosenFile: qQ
+       } = QQ;
+       const {
+         t: TQ
+       } = (0, jQ.C)();
+       return (0, yQ.jsxs)(yQ.Fragment, {
+         children: [(0, yQ.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: TQ("worldBuilder:loadSchematic")
+         }), (0, yQ.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+ ... (23 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L302-L303` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L237-L238) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L302-L303)

```diff
-         }(pp, ip, cp, Op)
-       }))), "button" in Op || (cp.YG && !Op.defaultPrevented && Op.preventDefault(), cp.stopPropagation && Op.stopPropagation()))
+         })]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L312-L486` → after: `L246-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L246-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L246-L305) · [Before (L312-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L312-L486)

```diff
-       if (pp && "object" === typeof pp) {
-         var ip = pp.which || pp.keyCode || pp.charCode;
-         ip && (pp = ip)
-       }
-       if ("number" === typeof pp) return Sp[pp];
-       var cp, Ip = String(pp);
-       return (cp = Op[Ip.toLowerCase()]) ? cp : (cp = op[Ip.toLowerCase()]) || (1 === Ip.length ? Ip.charCodeAt(0) : void 0)
-     }
-     cp.isEventKey = function(pp, ip) {
-       if (pp && "object" === typeof pp) {
-         var cp = pp.which || pp.keyCode || pp.charCode;
-         if (null === cp || void 0 === cp) return !1;
-         if ("string" === typeof ip) {
-           var Ip;
-           if (Ip = Op[ip.toLowerCase()]) return Ip === cp;
-           if (Ip = op[ip.toLowerCase()]) return Ip === cp
- ... (159 more removed lines; see GitHub link above)
+       var WQ;
+       let {
+         ownedSchematics: XQ,
+         onClose: wQ,
+         onChosenEdit: qQ,
+         onChosenNew: TQ,
+         onChosenDownload: sQ
+       } = QQ;
+       const {
+         t: FQ
+       } = (0, jQ.C)(), [PQ, JQ] = (0, gQ.useState)("choose"), [IQ, BQ] = (0, gQ.useState)(null), [VQ, DQ] = (0, gQ.useState)(null);
+       return (0, yQ.jsxs)(yQ.Fragment, {
+         children: [(0, yQ.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: FQ("worldBuilder:saveSchematic")
+         }), "choose" === PQ && (0, yQ.jsxs)(yQ.Fragment, {
+ ... (44 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L492-L632` → after: `L309-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L309-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L309-L323) · [Before (L492-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L492-L632)

```diff
-       for (var ip = pp._data, cp = 1e3 / pp.Bl, Op = ip.nowObject.now() + Sp, op = 0; ip.nowObject.now() >= ip.lastTickStarted + cp && ip.nowObject.now() < Op && ++op <= Ip;) pp.gH(cp), ip.lastTickStarted += cp;
-       var xp = 5 * (cp + 5),
-         Lp = ip.nowObject.now();
-       if (Lp - ip.lastTickStarted > xp)
-         for (; Lp >= ip.lastTickStarted + cp;) ip.lastTickStarted += cp
-     }
-   },
-   36887: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(62);
-     const op = Op.useLayoutEffect;
-     const Ip = function(pp) {
-       var ip = (0, Op.useRef)(pp);
-       return op((function() {
- ... (125 more removed lines; see GitHub link above)
+       let {
+         type: WQ,
+         prepopName: XQ,
+         ownedSchematics: wQ,
+         onSubmit: qQ,
+         onBack: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, jQ.C)(), [sQ, FQ] = (0, gQ.useState)(""), [JQ, IQ] = (0, gQ.useState)(""), [BQ, VQ] = (0, gQ.useState)(null), [DQ, pQ] = (0, gQ.useState)(!0), vQ = QQ => {
+         var XQ;
+         QQ = null !== (XQ = QQ) && void 0 !== XQ ? XQ : sQ;
+         const qQ = "new" === WQ ? (0, bQ.v)(QQ) : null,
+           TQ = [...(0, bQ.Bb)(QQ), ...qQ ? [qQ] : []];
+         return TQ.length > 0 ? (VQ(TQ.join(", ")), !1) : "new" === WQ && wQ.find((WQ => WQ.name === QQ)) ? (VQ(zQ("worldBuilder:schematicAlreadyExists")), !1) : (VQ(null), !0)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L634-L659` → after: `L325-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L325-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L325-L389) · [Before (L634-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L634-L659)

```diff
-     for (ip = 58; ip < 65; ++ip) Sp[ip] = String.fromCharCode(ip);
-     for (ip = 48; ip < 58; ++ip) Sp[ip] = ip - 48 + "";
-     for (ip = 65; ip < 91; ++ip) Sp[ip] = String.fromCharCode(ip);
-     for (ip = 96; ip < 106; ++ip) Sp[ip] = "<num-" + (ip - 96) + ">";
-     for (ip = 112; ip < 136; ++ip) Sp[ip] = "F" + (ip - 111)
-   },
-   39169: (pp, ip, cp) => {
-     function Op(pp, ip, cp, Op, op) {
-       var Ip = {};
-       return Object.keys(Op).forEach((function(pp) {
-         Ip[pp] = Op[pp]
-       })), Ip.enumerable = !!Ip.enumerable, Ip.configurable = !!Ip.configurable, ("value" in Ip || Ip.initializer) && (Ip.writable = !0), Ip = cp.slice().reverse().reduce((function(cp, Op) {
-         return Op(pp, ip, cp) || cp
-       }), Ip), op && void 0 !== Ip.initializer && (Ip.value = Ip.initializer ? Ip.initializer.call(op) : void 0, Ip.initializer = void 0), void 0 === Ip.initializer && (Object.defineProperty(pp, ip, Ip), Ip = null), Ip
-     }
-     cp.d(ip, {
- ... (10 more removed lines; see GitHub link above)
+       return (0, yQ.jsxs)("div", {
+         className: "SaveSchematicWindow",
+         children: [(0, yQ.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: zQ("general:name")
+         }), (0, yQ.jsx)(GQ.e, {
+           className: PQ()("SaveSchematicName", {
+             Error: BQ
+           }),
+           forcedText: XQ,
+           onValueChange: QQ => {
+             FQ(QQ), vQ(QQ)
+           },
+           placeholderText: zQ("worldBuilder:schematicNamePlaceholder"),
+           maxLength: bQ.mb
+         }), (0, yQ.jsx)("h2", {
+ ... (49 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L662-L703` → after: `L392-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L392-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L392-L472) · [Before (L662-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L662-L703)

```diff
-     cp.d(ip, {
-       c: () => Op
-     })
-   },
-   38900: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Ip
-     });
-     var Op = cp(38905);
-     const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
-       ...pp
-     } : null : pp.clone(ip) : null;
-     class Ip {
-       static DeepCopy(pp, ip, cp, Ip) {
-         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xp = function(pp) {
- ... (26 more removed lines; see GitHub link above)
+     var HQ = XQ(1238),
+       aQ = XQ(1802),
+       lQ = XQ(1165);
+ 
+     function hQ(QQ, WQ) {
+       if ("devDownloadJson" !== QQ) ! function(QQ, WQ) {
+         const XQ = HQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, TQ.e)().websocketUrl);
+         let sQ = !1;
+         const FQ = async (QQ, WQ) => {
+           if (sQ) return;
+           sQ = !0;
+           const {
+             gameNameWithVariation: wQ,
+             lobbyName: zQ
+           } = (0, TQ.e)(), FQ = {
+             gameNameWithVariation: wQ,
+ ... (65 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L705-L745` → after: `L474-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L474-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L474-L515) · [Before (L705-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L705-L745)

```diff
-         }
-       }
-     }
-   },
-   38942: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op,
-       f: () => Ip,
-       h: () => Sp,
-       l: () => xp
-     });
-     var Op = cp(37487);
-     class op {
-       constructor(pp, ip, cp) {
-         this.gradient = pp, this.color1 = ip, this.color2 = cp
-       }
- ... (25 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|LoadSchematic" === QQ) ! function(QQ) {
+           let {
+             ownedSchematics: WQ,
+             onChosenFile: XQ,
+             onChosenPreset: wQ,
+             onClose: qQ
+           } = QQ;
+           JQ.NotificationProvider.showCustomPopup({
+             body: QQ => (0, yQ.jsx)(DQ, {
+               ownedSchematics: WQ,
+               onChosenFile: XQ,
+               onChosenPreset: wQ,
+               onClose: QQ
+             }),
+             middleScreenPopupClassName: "SchematicPopup",
+ ... (26 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L747-L806` → after: `L517-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L517-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L517-L522) · [Before (L747-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L747-L806)

```diff
-         }
-         const Op = ip.length - 1;
-         cp(ip[Op], ip[Op], 1)
-       }
-     }
-   },
-   38905: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op
-     });
-     class Op {
-       static _CheckLimit(pp, ip) {
-         let cp = Op._LogLimitOutputs[pp];
-         return cp ? cp.current++ : (cp = {
-           limit: ip,
-           current: 1
- ... (44 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ListSchematics" === QQ)(0, zQ.f)({
+           ownedSchematics: Array.isArray(WQ) ? WQ : WQ.schematics,
+           currentWorldSchematicId: Array.isArray(WQ) ? null : WQ.currentWorldSchematicId,
+           onClose: () => {
+             FQ("cancel", {})
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L808-L998` → after: `L524-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L524-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L524-L532) · [Before (L808-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L808-L998)

```diff
-       }
-     }
-     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
-   },
- ... (175 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ExportWorld" === QQ) {
+           var PQ;
+           const QQ = null !== (PQ = WQ.schematic) && void 0 !== PQ ? PQ : WQ;
+           (0, pQ.j)({
+             schematic: QQ,
+             inSourceWorld: QQ.schematicId === WQ.currentWorldSchematicId,
+             onClose: () => {
+               FQ("cancel", {})
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1000-L1190` → after: `L534-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L534-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/222.js#L534-L541) · [Before (L1000-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/222.js#L1000-L1190)

```diff
-           }();
-           ip = Ip(" "), cp = Ip(" "), Op = Ip(" "), ip -= Ip(pp), ip < 0 && (ip += 1);
-           cp -= Ip(pp), cp < 0 && (cp += 1);
-           Op -= Ip(pp), Op < 0 && (Op += 1);
-           return function() {
-             const pp = 2091639 * ip + 2.3283064365386963e-10 * op;
-             return ip = cp, cp = Op, Op = pp - (op = 0 | pp)
-           }
-         }(pp);
-         this.p = function(pp) {
-           const ip = new Uint8Array(256);
-           for (let cp = 0; cp < 256; cp++) ip[cp] = cp;
-           for (let cp = 0; cp < 255; cp++) {
-             const Op = cp + ~~(pp() * (256 - cp)),
-               op = ip[cp];
-             ip[cp] = ip[Op], ip[Op] = op
- ... (175 more removed lines; see GitHub link above)
+           })
+         } else console.error(`Unknown plugin message type ${QQ}`)
+       }(QQ, WQ);
+       else {
+         const QQ = JSON.stringify(WQ.data, null, 2);
+         (0, aQ.downloadBlob)(new Blob([QQ], {
+           type: "application/json"
+         }), WQ.filename)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L4)

```diff
-   41292: (pp, ip, cp) => {
+   36667: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L6)

```diff
-       LobbyManageView: () => ki
+       default: () => dQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8-L30` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L8) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L8-L30)

```diff
-     var Op = cp(62),
-       op = cp(1505),
-       Ip = cp(37227),
-       Sp = cp(2514),
-       xp = cp(2517),
-       Lp = cp(2492),
-       Yp = cp(36761);
- 
-     function Dp() {
-       const [pp, ip] = (0, Op.useState)(new Map);
-       return {
-         get: ip => pp.get(ip),
-         hold: (0, Op.useCallback)(((pp, cp, Op) => {
-           ip((ip => new Map(ip).set(pp, cp))), Op.then((() => {
-             ip((ip => {
-               const cp = new Map(ip);
- ... (7 more removed lines; see GitHub link above)
+     var wQ = XQ(1081),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L32-L72` → after: `L10-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L10-L26) · [Before (L32-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L32-L72)

```diff
-       Wp = cp(1201),
-       yp = cp(1060),
-       Up = cp(1361),
-       wp = cp(2734),
-       vp = cp(5146),
-       tp = cp(3546);
-     var Hp = cp(2004),
-       dp = cp(1480);
- 
-     function ep(pp, ip, cp) {
-       const Op = pp.filter((pp => pp.name !== ip)),
-         op = Op.filter((pp => "none" === pp.role)).sort(((pp, ip) => ip.at - pp.at)),
-         Ip = Op.filter((pp => "none" !== pp.role)).sort(((pp, ip) => cp.indexOf(pp.role) - cp.indexOf(ip.role) || ip.at - pp.at));
-       return [...pp.some((pp => pp.name === ip)) && null !== ip ? [ip] : [], ...[...op, ...Ip].map((pp => pp.name))]
-     }
- 
- ... (25 more removed lines; see GitHub link above)
+       TQ = XQ(1581),
+       zQ = XQ(1073),
+       sQ = XQ(814),
+       FQ = XQ(1226),
+       PQ = XQ(1507),
+       gQ = XQ(1567),
+       JQ = XQ(3803),
+       rQ = XQ(1094),
+       IQ = XQ(3732),
+       jQ = XQ(2743),
+       BQ = XQ(1145);
+     const yQ = 2;
+ 
+     function VQ(QQ) {
+       return "firstPartyGame" === QQ.type ? {
+         type: "game",
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L74` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L28-L29) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L74)

```diff
-         section: "gone"
+         type: "preview",
+         preview: QQ.preview
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L124-L129` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L35-L37) · [Before (L124-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L124-L129)

```diff
-         names: ip,
-         cap: cp,
-         filterFrom: op,
-         moreLabel: Ip,
-         reveal: Sp = null,
-         renderRow: xp
+         game: WQ,
+         disabled: XQ,
+         showPlaceholder: wQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L131-L159` → after: `L39-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L39-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L39-L48) · [Before (L131-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L131-L159)

```diff
-       const {
-         t: Lp
-       } = (0, Wp.H)(), [Yp, Dp] = (0, Op.useState)(!1), [Ap, Pp] = (0, Op.useState)(""), Up = Yp || null !== Sp && ip.indexOf(Sp) >= cp, vp = (Up || ip.length <= cp) && null !== op && ip.length > op, tp = Ap.trim().toLowerCase();
-       let Hp = Up ? ip : ip.slice(0, cp);
-       return vp && "" !== tp && (Hp = Hp.filter((pp => pp.toLowerCase().includes(tp)))), (0, Bp.jsxs)(Bp.Fragment, {
-         children: [vp && (0, Bp.jsx)(Jp.c, {
-           className: "LobbyManageFilter",
-           placeholderText: Lp("lobbyManage:findName"),
-           ariaLabel: Lp("lobbyManage:findName"),
-           onValueChange: pp => {
-             Pp(pp)
-           }
-         }), Hp.length > 0 && (0, Bp.jsx)("div", {
-           className: "PlayerRows",
-           children: Hp.map(((pp, ip) => xp(pp, Hp.length - ip)))
-         }), !Up && ip.length > cp && (0, Bp.jsx)("div", {
- ... (13 more removed lines; see GitHub link above)
+       return null !== WQ ? (0, BQ.jsx)(IQ.d, {
+         source: VQ(WQ),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: XQ,
+         entrySource: "customGamePlace"
+       }) : wQ ? (0, BQ.jsx)(IQ.c, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L164-L228` → after: `L54-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L54-L59) · [Before (L164-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L164-L228)

```diff
-         value: ip,
-         placeholder: cp,
-         ariaLabel: op,
-         maxLength: Ip,
-         wide: Sp = !1,
-         onSave: xp
-       } = pp;
-       const Lp = (0, Op.useRef)(null),
-         [Yp, Dp] = (0, Op.useState)(0),
-         Ap = (0, Op.useRef)(!0),
-         Wp = (0, Op.useRef)(null),
-         yp = (0, Op.useRef)({
-           value: ip,
-           onSave: xp
-         });
-       yp.current = {
- ... (49 more removed lines; see GitHub link above)
+         category: XQ,
+         title: wQ,
+         tintColour: qQ,
+         layout: TQ,
+         games: zQ,
+         landscape: sQ = !1
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L231-L271` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L62-L64) · [Before (L231-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L231-L271)

```diff
-         t: wp,
-         selectedLanguage: vp
-       } = (0, Wp.H)(), [tp, Hp] = (0, Op.useState)(null), {
-         state: ep
-       } = Ap, jp = `player:${Sp}`, kp = function(pp, ip) {
-         if ("banned" === pp.section) return {
-           ...mp,
-           unban: !0
-         };
-         if ("gone" === pp.section) return mp;
-         const {
-           player: cp
-         } = pp, Op = "here" === pp.section, op = Op || "none" !== cp.role ? cp.can.roles : [];
-         return {
-           gamemode: Op && ip && null !== cp.gamemode && cp.can.gamemode,
-           roles: op,
- ... (25 more removed lines; see GitHub link above)
+         followsLeader: FQ
+       } = (0, jQ.d)(), PQ = null !== (WQ = null === zQ || void 0 === zQ ? void 0 : zQ.slice(0, TQ.gameCount)) && void 0 !== WQ ? WQ : [], JQ = {
+         "--custom-game-place-tint": qQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L491-L512` → after: `L67-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L67-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L67-L73) · [Before (L491-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L491-L512)

```diff
-         ref: Pp,
-         className: "LobbyManagePage",
-         children: [ep.here.length > 0 && (0, Bp.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, Bp.jsxs)("div", {
-             className: "LobbyManageBoxHeading",
-             children: [(0, Bp.jsx)(wp.c, {
-               label: Yp("lobbyManage:here"),
-               meta: Up.here.length
-             }), qp >= 2 && !mp && (0, Bp.jsxs)(dp.N, {
-               className: "LobbyManageTitleAction SmallTextLight",
-               padDestructive: !0,
-               disabled: Sp.isPending("kickAll"),
-               onClick: () => {
-                 Rp(!0)
-               },
- ... (6 more removed lines; see GitHub link above)
+         className: "CustomGamePlacePanel AnimFadeIn",
+         style: JQ,
+         children: [(0, BQ.jsx)("h2", {
+           className: "CustomGamePlacePanelHeading",
+           children: (0, BQ.jsxs)(gQ.LinkPreserveSearch, {
+             to: `/custom-games/${encodeURIComponent(XQ)}`,
+             className: "CustomGamePlacePanelTitle SmallTextBold",
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L514-L537` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L75-L77) · [Before (L514-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L514-L537)

```diff
-               className: "LobbyManageConfirmText",
-               children: Yp("lobbyManage:kickAllConfirm", {
-                 count: qp
-               })
-             }), (0, Bp.jsxs)("div", {
-               className: "LobbyManageButtons",
-               children: [(0, Bp.jsx)(dp.K, {
-                 className: "LobbyManageIconButton SmallTextLight",
-                 analyticsClick: {
-                   id: "lobby_manage.kick_all"
-                 },
-                 onClick: () => {
-                   Rp(!1), Sp.send({
-                     type: "kickAll"
-                   }, "kickAll")
-                 },
- ... (8 more removed lines; see GitHub link above)
+               children: wQ
+             }), (0, BQ.jsx)(rQ.d, {
+               name: "arrow-up"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L735-L1112` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L80-L81) · [Before (L735-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L735-L1112)

```diff
-         })
-       };
-       return (0, Bp.jsxs)("div", {
-         className: "LobbyManageBox LobbyManageListing",
-         children: [(0, Bp.jsx)(wp.c, {
-           label: Op("lobbyManage:inWorldsList")
-         }), (0, Bp.jsxs)("div", {
-           className: "LobbyManageRuleRow",
-           children: [(0, Bp.jsx)("div", {
-             className: "SliderText",
-             children: Op("lobbyManage:description")
-           }), (0, Bp.jsx)(fp, {
-             value: cp.description,
-             ariaLabel: Op("lobbyManage:description"),
-             wide: !0,
-             onSave: pp => Ip("description", pp)
- ... (362 more removed lines; see GitHub link above)
+         }), (0, BQ.jsx)("div", {
+           className: "CustomGamePlacePanelGames",
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1114` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L83) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1114)

```diff
-             "--lobby-choice-chars": vp
+             gridTemplateColumns: `repeat(${sQ?TQ.columnCount:yQ}, ${sQ?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1116-L1558` → after: `L85-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L85-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L85-L92) · [Before (L1116-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1116-L1558)

```diff
-           children: (0, Bp.jsx)(Cp.d, {
-             options: wp,
-             value: String(Op),
-             disabled: Ip,
-             onChange: pp => {
-               Dp(pp.value)
-             }
-           })
-         }), ("number" === cp.kind || "text" === cp.kind) && (0, Bp.jsx)(fp, {
-           value: null === Op ? "" : String(Op),
-           placeholder: Up,
-           ariaLabel: Pp,
-           onSave: pp => {
-             const ip = pp.trim(),
-               Op = Number(ip);
-             return Dp("number" === cp.kind && "" !== ip && Number.isFinite(Op) ? Op : ip)
- ... (427 more removed lines; see GitHub link above)
+           children: Array.from({
+             length: TQ.gameCount
+           }, ((QQ, WQ) => {
+             var XQ;
+             return (0, BQ.jsx)(DQ, {
+               game: null !== (XQ = PQ[WQ]) && void 0 !== XQ ? XQ : null,
+               disabled: FQ,
+               showPlaceholder: !zQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1574` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L101) · [Before (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1574)

```diff
-         leaderboard: ip
+         categories: WQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1640-L1742` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L104-L106) · [Before (L1640-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1640-L1742)

```diff
-     function Lp(pp) {
-       const ip = ++xp;
-       return new Promise((cp => {
-         const xp = ip => {
-             Lp(), clearTimeout(Yp), !1 === (null === ip || void 0 === ip ? void 0 : ip.ok) && (0, Op.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: pp.type
-             }), cp(ip)
-           },
-           Lp = op.c.subscribe("lobbyManage", (pp => {
-             const cp = function(pp, ip) {
-               var cp;
-               return null !== (cp = null === pp || void 0 === pp ? void 0 : pp.results.find((pp => pp.requestId === ip))) && void 0 !== cp ? cp : null
-             }(pp, ip);
-             null !== cp && xp(cp)
-           })),
- ... (87 more removed lines; see GitHub link above)
+       function XQ(QQ) {
+         const XQ = WQ[QQ];
+         return (0, BQ.jsx)(pQ, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1744-L1757` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L108-L109) · [Before (L1744-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1744-L1757)

```diff
-           cosmetics: Dp
-         } : xp;
-       return {
-         playerSocialPreview: null !== Ap && void 0 !== Ap ? Ap : {
-           isError: !1,
-           name: ip,
-           ranks: Yp ? [...Lp.ranks] : [],
-           cosmetics: null !== Dp && void 0 !== Dp ? Dp : {},
-           nameColour: null !== (Sp = null === Dp || void 0 === Dp ? void 0 : Dp.nameColour) && void 0 !== Sp ? Sp : Op.b,
-           location: {
-             status: "inGame"
-           }
-         },
-         isFriend: void 0 !== xp
+           landscape: !0
+         }, XQ.id)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1801-L1804` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L112) · [Before (L1801-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1801-L1804)

```diff
-         className: "PlayerNameField",
-         onKeyDown: pp => {
-           pp.target === Pp.current && "Escape" !== pp.key && pp.stopPropagation()
-         },
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1806-L1809` → after: `L114-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L114-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L114-L121) · [Before (L1806-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1806-L1809)

```diff
-           className: Ip()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Up}`),
-           children: ["Loading" === Up && (0, Dp.jsx)(Lp.c, {}), "Success" === Up && (0, Dp.jsx)(Yp.d, {
-             name: "check"
-           }), "Error" === Up && vp]
+           className: "CustomGamePlaceUpper",
+           children: [(0, BQ.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, BQ.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [XQ(0), XQ(2)]
+             }), XQ(1)]
+           }), XQ(4)]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1811-L1830` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L123-L124) · [Before (L1811-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1811-L1830)

```diff
-           className: "PlayerSearch",
-           children: [(0, Dp.jsx)(Sp.c, {
-             className: "PlayerSearchInput",
-             domRef: Pp,
-             maxLength: 32,
-             placeholderText: op,
-             ariaLabel: op,
-             stopPropagation: !1,
-             onValueChange: pp => {
-               yp(pp)
-             },
-             onEnter: Hp
-           }), (0, Dp.jsxs)(xp.f, {
-             className: "PlayerSearchInputButton SmallTextLight",
-             disabled: "Enter" !== Up || "" === Wp.trim(),
-             onClick: Hp,
- ... (4 more removed lines; see GitHub link above)
+           className: "CustomGamePlaceRow",
+           children: [XQ(3), XQ(5)]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1834-L1928` → after: `L128-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L128-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L128-L132) · [Before (L1834-L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1834-L1928)

```diff
-   },
-   36903: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Ap
-     });
-     var Op = cp(62),
-       op = cp(1049),
-       Ip = cp.n(op),
-       Sp = cp(1201),
-       xp = cp(1060),
-       Lp = cp(1112);
-     const Yp = {
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
- ... (79 more removed lines; see GitHub link above)
+     const UQ = ["section1", "section2", "section3", "section4", "section5", "section6"],
+       bQ = {
+         section1: {
+           gameCount: 4,
+           columnCount: 2
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1930-L1970` → after: `L134-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L134-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L134-L155) · [Before (L1930-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1930-L1970)

```diff
-         children: (0, Sp.jsx)(op.h, {
-           ...xp,
-           opensProfileCard: !1,
-           children: (0, Sp.jsxs)("div", {
-             className: "WhitelistTickRowActions",
-             onClick: pp => {
-               pp.stopPropagation()
-             },
-             children: [cp, (0, Sp.jsx)("label", {
-               className: "WhitelistTickRowTick",
-               children: (0, Sp.jsx)(Ip.b, {
-                 checked: ip.on,
-                 disabled: !1,
-                 ariaLabel: Lp("worldSocial:letJoin", {
-                   playerName: xp.playerSocialPreview.name
-                 }),
- ... (25 more removed lines; see GitHub link above)
+         section2: {
+           gameCount: 6,
+           columnCount: 6
+         },
+         section3: {
+           gameCount: 8,
+           columnCount: 4
+         },
+         section4: {
+           gameCount: 6,
+           columnCount: 3
+         },
+         section5: {
+           gameCount: 3,
+           columnCount: 1
+         },
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1972-L1976` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L157-L158) · [Before (L1972-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1972-L1976)

```diff
-     function yp(pp) {
-       let {
-         worldCode: ip,
-         message: cp
-       } = pp;
+     function dQ() {
+       var QQ;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1979-L1988` → after: `L161-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L161-L165) · [Before (L1979-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1979-L1988)

```diff
-       } = (0, op.H)(), {
-         isTouchScreen: Up
-       } = (0, xp.o)(["isTouchScreen"]), wp = Sp.featureFlags.canUseInviteLinks, vp = (0, Dp.k)(wp && null === cp), [tp, Hp] = (0, Yp.j)(), dp = (0, Op.useRef)(null);
-       if (null !== cp) return (0, Wp.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, Wp.jsx)(Pp.d, {
-           name: "lock"
-         }), (0, Wp.jsx)("span", {
-           children: cp
-         })]
+       } = (0, FQ.C)(), XQ = (0, TQ.E)(), wQ = (0, vQ.i)(), rQ = (0, JQ.e)({
+         refresh: !0
+       }), IQ = XQ.customGamePlace;
+       if (!(0, zQ.o)(IQ)) return (0, BQ.jsx)(gQ.NavigatePreserveSearch, {
+         to: "/"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1990-L1991` → after: `L167-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L167-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L167-L184) · [Before (L1990-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1990-L1991)

```diff
-       const ep = wp ? vp : ip,
-         jp = Up && wp && (0, Yp.d)();
+       const jQ = sQ.e[IQ],
+         yQ = zQ.e[IQ],
+         VQ = null !== (QQ = null === rQ || void 0 === rQ ? void 0 : rQ[IQ]) && void 0 !== QQ ? QQ : null,
+         DQ = [];
+       for (let qQ = 0; qQ < yQ.length; qQ++) {
+         var dQ;
+         const QQ = UQ[qQ];
+         if (!QQ) continue;
+         const XQ = yQ[qQ];
+         DQ.push({
+           id: XQ.id,
+           category: XQ.category,
+           title: WQ(XQ.displayTranslationKey),
+           tintColour: XQ.tintColour,
+           layout: bQ[QQ],
+           games: null !== (dQ = null === VQ || void 0 === VQ ? void 0 : VQ[XQ.id]) && void 0 !== dQ ? dQ : null
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1993-L2004` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L186-L190) · [Before (L1993-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L1993-L2004)

```diff
-         className: "WorldSocialLinkRow",
-         children: [!wp && (0, Wp.jsx)("span", {
-           className: "WorldSocialCodeLabel",
-           children: yp("worldSocial:worldCode")
-         }), (0, Wp.jsx)("input", {
-           ref: dp,
-           className: "WorldSocialLink",
-           readOnly: !0,
-           value: null !== ep && void 0 !== ep ? ep : "",
-           "aria-label": yp(wp ? "worldSocial:worldLink" : "worldSocial:worldCode"),
-           onFocus: pp => {
-             pp.currentTarget.select()
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, BQ.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${IQ}/${jQ.largePicture}.png)`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L2006-L2082` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/223.js#L192-L211) · [Before (L2006-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/223.js#L2006-L2082)

```diff
-         }), (0, Wp.jsxs)(Ap.f, {
-           className: "WorldSocialCopy",
-           disabled: null === ep,
-           onClick: () => {
-             null !== ep && (0, Yp.h)(ep, {
-               useShareSheet: jp,
-               onOutcome: pp => {
-                 if ((0, Lp.reportAnalyticsClick)({
-                     id: "world_social.copy_link",
-                     value: "copied" !== pp || wp ? pp : "code"
-                   }), "copied" === pp) Hp();
-                 else if ("failed" === pp) {
-                   var ip;
-                   null === (ip = dp.current) || void 0 === ip || ip.focus(), Ip.i.showMessage({
-                     translationKey: "partyBar:copyFailed"
-                   })
- ... (61 more removed lines; see GitHub link above)
+         }), (0, BQ.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: WQ(jQ.title)
+         }), (0, BQ.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, BQ.jsx)(PQ.e, {
+             onClick: () => (0, gQ.navigatePreserveSearch)("/"),
+             children: WQ("homePage:backToGames")
+           })
+         }), !wQ && (0, BQ.jsx)(GQ, {
+           categories: DQ
+         }), wQ && (0, BQ.jsx)("div", {
+           className: qQ()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: DQ.map((QQ => (0, BQ.jsx)(pQ, {
+             category: QQ.category,
+             title: QQ.title,
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L2)

```diff
- export const ids = [224];
+ export const ids = [224, 300];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L4-L9)

```diff
-   37084: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => mp,
-       h: () => jp,
-       k: () => kp,
-       o: () => yp
+   41519: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CharacterCustomisationUI: () => qW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L8-L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L11)

```diff
-     var Op = cp(1049),
+     var wQ = XQ(61),
+       qQ = XQ(2728),
+       TQ = XQ(1162),
+       zQ = XQ(1081),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L13-L21` → after: `L13-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L13-L19) · [Before (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L13-L21)

```diff
-       Ip = cp(62),
-       Sp = cp(82),
-       xp = cp(1396),
-       Lp = cp(1480),
-       Yp = cp(1387),
-       Dp = cp(1295),
-       Ap = cp(1201),
-       Pp = cp(37089),
-       Wp = cp(1112);
+       FQ = XQ(1273),
+       PQ = XQ(646),
+       gQ = XQ(1226),
+       JQ = XQ(2313),
+       rQ = XQ(1626),
+       IQ = XQ(2678);
+     const jQ = FQ.x.filter((QQ => !rQ.g.includes(QQ)));
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L23-L27` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L21-L22) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L23-L27)

```diff
-     function yp(pp) {
-       const [ip, cp] = (0, Ip.useState)((() => (0, Pp.k)(pp)));
-       return (0, Ip.useEffect)((() => (cp((0, Pp.k)(pp)), (0, Pp.I)((() => {
-         cp((0, Pp.k)(pp))
-       })))), [pp]), ip
+     function BQ(QQ, WQ) {
+       return jQ.includes(QQ) && "string" === typeof WQ && (0, IQ.h)(QQ, WQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L30-L31` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L25-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L30-L31)

```diff
-     function Up(pp, ip) {
-       "function" === typeof pp ? pp(ip) : pp && (pp.current = ip)
+     function yQ(QQ) {
+       const WQ = {};
+       for (const XQ of jQ) {
+         const wQ = QQ[XQ];
+         void 0 !== wQ && BQ(XQ, wQ) && (WQ[XQ] = wQ)
+       }
+       return WQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L35-L41` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L35) · [Before (L35-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L35-L41)

```diff
-       let {
-         tutorial: ip,
-         step: cp,
-         enabled: Op = !0
-       } = pp;
-       const op = yp(ip);
-       return Op && op === cp
+       return 0 === Object.keys(QQ).length
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L45-L47` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L39-L42) · [Before (L45-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L45-L47)

```diff
-       const cp = (0, Pp.n)(pp),
-         Op = cp.indexOf(ip);
-       return !cp.slice(Op + 1).some((ip => (0, Pp.u)(pp, ip)))
+       return Object.entries(QQ).every((QQ => {
+         let [XQ, wQ] = QQ;
+         return WQ[XQ] === wQ
+       }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L49-L65` → after: `L44-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L44-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L44-L70) · [Before (L49-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L49-L65)

```diff
- 
-     function tp(pp, ip, cp, Op) {
-       let {
-         tutorial: op,
-         step: Ip,
-         waitForClick: Sp = !1,
-         onPrevious: xp
-       } = pp;
-       const Lp = ip && (0, Pp.t)(op, Ip),
-         Yp = ip && !vp(op, Ip),
-         Ap = Sp ? Op : cp;
-       let Wp = null;
-       Lp ? Wp = () => {
-         null === xp || void 0 === xp || xp(), (0, Pp.r)(op, Ip)
-       } : Yp && (Wp = () => {
-         (0, Pp.j)(op)
- ... (1 more removed lines; see GitHub link above)
+     var pQ = XQ(2318),
+       GQ = XQ(3362),
+       UQ = XQ(2052),
+       bQ = XQ(1507),
+       vQ = XQ(2351),
+       dQ = XQ(26),
+       HQ = XQ(2850),
+       aQ = XQ(1548),
+       lQ = XQ(1165),
+       hQ = XQ(1927);
+     class iQ {
+       constructor() {
+         this.slots = new Map, this.before = new Map, this.accountId = null
+       }
+       moveTo(QQ) {
+         null !== QQ && QQ !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = QQ)
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L70-L74` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L157-L160) · [Before (L70-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L70-L74)

```diff
-         tutorial: ip,
-         step: cp,
-         text: Op,
-         waitForClick: op = !1,
-         onPrevious: Ip
+         wornOutfit: WQ,
+         onApply: XQ,
+         onOverwrite: qQ,
+         onDelete: zQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L78-L79` → after: `L164-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L164-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L164-L187) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L78-L79)

```diff
-       } = (0, Ap.H)(), xp = vp(ip, cp);
-       return (0, Wp.jsxs)(Wp.Fragment, {
+       } = (0, gQ.C)(), {
+         accountId: PQ,
+         data: JQ
+       } = (0, HQ.f)(AQ, !1), {
+         userContext: rQ
+       } = (0, TQ.c)();
+       async function IQ(QQ, WQ) {
+         const XQ = await nQ.NotificationProvider.showPromptPopup({
+             title: "homePage:deleteOutfitConfirm",
+             confirmText: "general:delete",
+             cancelText: "general:cancel",
+             destructive: !0
+           }).getResult(),
+           {
+             accountId: wQ,
+             data: qQ
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L81-L104` → after: `L189-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L189-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L189-L246) · [Before (L81-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L81-L104)

```diff
-           className: "TutorialStepText",
-           children: Op
-         }), (0, Wp.jsxs)("div", {
-           className: "TutorialStepButtons",
-           children: [(0, Pp.t)(ip, cp) && (0, Wp.jsx)(Lp.j, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               null === Ip || void 0 === Ip || Ip(), (0, Pp.r)(ip, cp)
-             },
-             children: Sp("tutorial:back")
-           }), !op && (0, Wp.jsx)(Lp.f, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, Pp.d)(cp)
-             },
-             padDefaultFocus: !0,
- ... (8 more removed lines; see GitHub link above)
+           className: "CosmeticPackGroupLabel",
+           children: (0, xQ.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: FQ("homePage:myOutfits")
+           })
+         }), (0, xQ.jsx)("div", {
+           className: "CharacterPresetsGrid SavedOutfitsGrid",
+           children: JQ.map(((QQ, wQ) => {
+             const TQ = VQ(QQ);
+             return (0, xQ.jsxs)("div", {
+               className: sQ()("SavedOutfitSlot", {
+                 SavedOutfitSlotFilled: !TQ
+               }),
+               children: [(0, xQ.jsxs)("div", {
+                 ...(0, bQ.ab)(),
+                 role: TQ ? "button" : "link",
+ ... (42 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L108` → after: `L250-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L250-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L250-L256) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L108)

```diff
-     const dp = 6;
+     var NQ = XQ(36684),
+       ZQ = XQ(2668),
+       OQ = XQ(2674);
+ 
+     function KQ(QQ, WQ, XQ) {
+       return null !== QQ && !(0, ZQ.e)(OQ.e, WQ, XQ, QQ.collected, QQ.ownedPacks)
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L112-L113` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L260-L261) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L112-L113)

```diff
-         rect: ip,
-         margin: cp
+         locked: WQ,
+         children: XQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L115-L153` → after: `L263-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L263-L265) · [Before (L115-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L115-L153)

```diff
-       const Op = Math.max(0, ip.top - cp),
-         op = ip.bottom + cp,
-         Ip = Math.max(0, ip.left - cp),
-         Sp = ip.right + cp;
-       return (0, Wp.jsxs)(Wp.Fragment, {
-         children: [(0, Wp.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
-             left: 0,
-             right: 0,
-             height: Op
-           }
-         }), (0, Wp.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
- ... (23 more removed lines; see GitHub link above)
+       return WQ ? (0, xQ.jsx)(MQ, {
+         children: XQ
+       }) : XQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L167-L257` → after: `L274-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L274-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L274-L282) · [Before (L167-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L167-L257)

```diff
-         getArrowProps: yp,
-         getTooltipProps: Up,
-         setTooltipRef: wp,
-         setTriggerRef: vp,
-         update: tp
-       } = (0, xp.c)({
-         placement: cp,
-         trigger: null,
-         visible: !0,
-         interactive: !0,
-         closeOnOutsideClick: !1,
-         offset: [0, Ap]
-       });
-       (0, Ip.useLayoutEffect)((() => {
-         vp(ip)
-       }), [ip, vp]);
- ... (75 more removed lines; see GitHub link above)
+         t: wQ
+       } = (0, gQ.C)(), {
+         userContext: qQ
+       } = (0, TQ.c)(), zQ = null !== (WQ = qQ.dailyDrop) && void 0 !== WQ && WQ.hidden ? wQ("dailyDrop:lockedFromHidden") : wQ("dailyDrop:lockedFrom");
+       return (0, xQ.jsx)(oQ.e, {
+         tooltipInner: (0, xQ.jsx)(xQ.Fragment, {
+           children: zQ
+         }),
+         children: XQ
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L259` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L284) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L259)

```diff
-     }));
+     }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L261-L273` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L286-L287) · [Before (L261-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L261-L273)

```diff
-     function mp(pp) {
-       const ip = wp(pp),
-         cp = (0, Ip.useRef)(null);
-       return tp(pp, ip, cp, null), ip ? (0, Sp.createPortal)((0, Wp.jsx)("div", {
-         className: "TutorialCentreBackdrop",
-         children: (0, Wp.jsx)("div", {
-           ref: cp,
-           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
-           children: (0, Wp.jsx)(Hp, {
-             ...pp
-           })
-         })
-       }), (0, Yp.g)()) : null
+     function QW(QQ, WQ, XQ) {
+       return (0, JQ.n)(QQ, WQ).purchasable && !(0, uQ.x)(QQ, WQ, XQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L294-L297` → after: `L290-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L290-L293) · [Before (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L294-L297)

```diff
-     function xp() {
-       return [...Sp.values()].sort(((pp, ip) => {
-         var cp, Op;
-         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
+     function WW(QQ, WQ) {
+       return Object.entries(QQ).some((QQ => {
+         let [XQ, wQ] = QQ;
+         return QW(XQ, wQ, WQ)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L303` → after: `L298-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L298-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L298-L329) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L303)

```diff
-       Lp = pp
+       var WQ;
+       let {
+         pack: XQ,
+         ownedPacks: wQ,
+         showStoreLink: qQ = !1,
+         children: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, gQ.C)(), FQ = CQ.d[XQ], PQ = FQ.purchasable && !wQ.includes(XQ) && CQ.u.includes(XQ), JQ = LQ.l[XQ];
+       return (0, xQ.jsxs)("div", {
+         className: sQ()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: PQ
+         }),
+         children: [JQ && (0, xQ.jsx)(JQ, {}), (0, xQ.jsxs)("div", {
+           className: "CosmeticPackGroupLabel",
+ ... (16 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L308-L312` → after: `L333-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L333-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L333-L353) · [Before (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L308-L312)

```diff
-       Dp = !0;
-       try {
-         pp.onClick()
-       } finally {
-         Dp = !1
+       let {
+         equippedEmoteIds: WQ,
+         ownedPacks: XQ,
+         canBuy: wQ,
+         onUpdateLoadout: qQ,
+         onEmoteSelected: TQ,
+         onEquipPreviewSkin: zQ
+       } = QQ;
+       const {
+         t: PQ
+       } = (0, gQ.C)(), rQ = new Set(WQ), IQ = new Map, jQ = Object.keys(JQ.f.emote).sort(((QQ, WQ) => {
+         var XQ, wQ, qQ, TQ;
+         return (null !== (XQ = null === (wQ = (0, JQ.j)("emote", QQ)) || void 0 === wQ ? void 0 : wQ.clientIdx) && void 0 !== XQ ? XQ : 0) - (null !== (qQ = null === (TQ = (0, JQ.j)("emote", WQ)) || void 0 === TQ ? void 0 : TQ.clientIdx) && void 0 !== qQ ? qQ : 0)
+       })).filter((QQ => {
+         const WQ = (0, JQ.n)("emote", QQ),
+           qQ = (0, uQ.x)("emote", QQ, XQ);
+ ... (5 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L314-L345` → after: `L355-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L355-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L355-L440) · [Before (L314-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L314-L345)

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
- ... (16 more removed lines; see GitHub link above)
+       const BQ = Array.from(IQ.keys());
+       return (0, xQ.jsxs)("div", {
+         className: "CharCustomisPartSelectorWrapper",
+         children: [!1, (0, xQ.jsxs)("div", {
+           className: "EmoteLoadoutSummary",
+           children: [(0, xQ.jsx)("span", {
+             className: "EmoteLoadoutSummaryText SmallTextBold",
+             children: PQ("emotes:equippedCount", {
+               count: WQ.length,
+               max: FQ.o
+             })
+           }), (0, xQ.jsx)("span", {
+             className: "EmoteLoadoutSummaryHint SmallTextLight",
+             children: PQ("emotes:loadoutHint")
+           })]
+         }), BQ.map((QQ => {
+ ... (70 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L348-L350` → after: `L471-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L471-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L471-L476) · [Before (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L348-L350)

```diff
-     function Hp(pp) {
-       return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
-         Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
+       function qW() {
+         null !== OQ.current && (clearTimeout(OQ.current), OQ.current = null);
+         const QQ = MQ.current;
+         null !== QQ && (MQ.current = null, (0, NQ.e)(jQ, [
+           ["emote", QQ]
+         ]))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L372-L382` → after: `L479-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L479-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L479-L495) · [Before (L372-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L372-L382)

```diff
-     function Yp() {
-       return Lp
-     }
- 
-     function Dp(pp, ip) {
-       const cp = {
-         content: pp,
-         menu: ip
-       };
-       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
-         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
+       function TW(QQ, WQ, XQ) {
+         var wQ, qQ, TQ;
+         eQ.current = {
+           ...eQ.current,
+           [QQ]: WQ
+         }, VQ(), XQ && ((0, NQ.e)(jQ, [
+           [QQ, WQ]
+         ]), cQ(null));
+         const zQ = (0, JQ.j)(QQ, WQ);
+         if (null !== zQ && void 0 !== zQ && zQ.colourGroup && null !== (wQ = CQ.d[zQ.cosmeticPack].colourGroups) && void 0 !== wQ && null !== (qQ = wQ[zQ.colourGroup]) && void 0 !== qQ && qQ.showSwatchSelector) {
+           const XQ = (0, JQ.g)(WQ);
+           XQ && hQ((WQ => ({
+             ...WQ,
+             [`${zQ.cosmeticPack}_${QQ}_${zQ.colourGroup}`]: parseInt(XQ[1])
+           })))
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L387-L393` → after: `L498-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L498-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L498-L504) · [Before (L387-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L387-L393)

```diff
-     function Pp() {
-       return Ap
-     }
- 
-     function Wp(pp) {
-       return Ap = pp, () => {
-         Ap === pp && (Ap = null)
+       function zW(QQ) {
+         aQ((WQ => {
+           const XQ = {
+             ...WQ
+           };
+           return delete XQ[QQ], XQ
+         }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L398-L402` → after: `L507-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L507-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L507-L877) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L398-L402)

```diff
-     function Up() {
-       const pp = Op.c.get("openInGameMenuName");
-       "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
+       function sW(QQ, WQ) {
+         let {
+           undoable: XQ
+         } = WQ;
+         Object.keys(HQ).length > 0 && aQ({});
+         const wQ = Object.entries(QQ).filter((QQ => {
+           let [WQ, XQ] = QQ;
+           return eQ.current[WQ] !== XQ && !QW(WQ, XQ, FW) && !KQ(PW, WQ, XQ)
+         }));
+         XQ ? wQ.length > 0 && cQ({
+           kind: "worn",
+           outfit: yQ(eQ.current)
+         }) : cQ(null);
+         for (const [qQ, TQ] of wQ) TW(qQ, TQ, !1);
+         wQ.length > 0 && (0, NQ.e)(jQ, wQ)
+       }(0, UQ.b)("cosmeticsUpdated", (QQ => {
+ ... (355 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L404-L418` → after: `L879-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L879-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L879-L1037) · [Before (L404-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L404-L418)

```diff
-     }
- 
-     function wp() {
-       tp(!1)
-     }
- 
-     function vp() {
-       tp(yp)
-     }
- 
-     function tp(pp) {
-       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
-         openInGameMenuName: pp ? "inventory" : null
-       }), pp || (0, Sp.f)(), yp = !1
-     }
+     }))
+   },
+   41521: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CharacterPreview: () => JQ
+     });
+     var wQ = XQ(61),
+       qQ = XQ(2978),
+       TQ = XQ(1273),
+       zQ = XQ(2678),
+       sQ = XQ(34541),
+       FQ = XQ(3862),
+       PQ = XQ(1145);
+     const gQ = .6 * Math.PI,
+       JQ = (0, wQ.memo)((0, wQ.forwardRef)((function(QQ, WQ) {
+         let {
+ ... (143 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L420` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L1039) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L420)

```diff
-   37089: (pp, ip, cp) => {
+   36684: (QQ, WQ, XQ) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L422-L435` → after: `L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L1041) · [Before (L422-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L422-L435)

```diff
-       C: () => Np,
-       D: () => Tp,
-       H: () => Jp,
-       I: () => fp,
-       b: () => Lp,
-       d: () => Cp,
-       g: () => xp,
-       j: () => Qp,
-       k: () => qp,
-       n: () => jp,
-       r: () => lp,
-       t: () => Xp,
-       u: () => Rp,
-       y: () => Bp
+       e: () => zQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L437-L480` → after: `L1043-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L1043-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L1043-L1047) · [Before (L437-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L437-L480)

```diff
-     var Op = cp(44);
-     const op = {
-         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
-         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
-       },
-       Ip = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
-       Sp = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
-       xp = Ip.filter((pp => "docsButton" !== pp)),
-       Lp = Sp.filter((pp => "aiHelperButton" !== pp)),
-       Yp = "codeEditorTutorials",
-       Dp = {
-         codeBlockIntro: "codeBlockIntroShown",
-         worldCodeIntro: "worldCodeIntroShown"
-       },
-       Ap = {
-         welcome: "welcomeComplete",
- ... (28 more removed lines; see GitHub link above)
+     var wQ = XQ(2003),
+       qQ = XQ(1548);
+     const TQ = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L482-L571` → after: `L1049-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L1049-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L1049-L1075) · [Before (L482-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L482-L571)

```diff
-       return Pp
-     }
- 
-     function ep(pp) {
-       const ip = dp();
-       ip[pp] || (Pp = {
-         ...ip,
-         [pp]: !0
-       }, Op.h.setItem(Yp, Pp))
-     }
- 
-     function jp(pp) {
-       return "docsOverview" === pp ? Ip : "aiHelperOverview" === pp ? Sp : Wp ? op[Wp] : []
-     }
- 
-     function kp(pp) {
- ... (74 more removed lines; see GitHub link above)
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
+       send(QQ) {
+         const WQ = Array.from(this.pending, (QQ => {
+ ... (11 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L574-L580` → after: `L1078-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L1078-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/224.js#L1078-L1084) · [Before (L574-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/224.js#L574-L580)

```diff
-       vp.has(pp) === ip && (ip ? vp.delete(pp) : vp.add(pp), Hp())
-     }
- 
-     function fp(pp) {
-       return tp.add(pp), () => {
-         tp.delete(pp)
-       }
+       for (const [XQ, wQ] of WQ) QQ.setPlayerCosmetics(XQ, wQ);
+       if (null === wQ.gameBridge.latest("connectedGame").websocketUrl) TQ.save(QQ, WQ);
+       else
+         for (const [XQ, qQ] of WQ) wQ.gameBridge.send("updateMyCosmetic", {
+           dT: XQ,
+           HT: qQ
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L4)

```diff
-   36804: (pp, ip, cp) => {
+   36711: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L6-L15` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L6-L8) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L6-L15)

```diff
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
+       e: () => aQ,
+       h: () => lQ,
+       i: () => pQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L17-L27` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L10-L25) · [Before (L17-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L17-L27)

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
+     var wQ = XQ(318),
+       qQ = XQ(105);
+     const TQ = new(XQ(36713).d)(new URL(XQ.p + XQ.u(3), XQ.b), {
+       name: "blockIconWorker",
+       type: "module"
+     });
+     var zQ = XQ(1854),
+       sQ = XQ(2218);
+     const FQ = 1e4,
+       PQ = 3e4;
+     let gQ = null,
+       JQ = null,
+       rQ = null,
+       IQ = !1,
+       jQ = 0;
+     const BQ = new Map;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L31` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L31-L39) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L31)

```diff
-       Lp = pp
+       const WQ = new Promise(((WQ, XQ) => {
+         const wQ = new Image;
+         wQ.crossOrigin = "anonymous", wQ.fetchPriority = "high", wQ.onload = () => {
+           WQ(wQ)
+         }, wQ.onerror = () => {
+           XQ(new Error(`A block icon's texture did not load: ${QQ.slice(0,100)}`))
+         }, wQ.src = QQ
+       }));
+       return (0, sQ.f)(WQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L36-L42` → after: `L43-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L43-L46) · [Before (L36-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L36-L42)

```diff
-       Dp = !0;
-       try {
-         pp.onClick()
-       } finally {
-         Dp = !1
-       }
-       pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
+       var WQ, XQ;
+       IQ || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${QQ}`), IQ = !0, null === (WQ = gQ) || void 0 === WQ || WQ.terminate(), gQ = null, JQ = null, VQ.clear(), DQ.clear();
+       for (const wQ of BQ.values()) wQ(null);
+       BQ.clear(), null === (XQ = yQ) || void 0 === XQ || XQ()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L46` → after: `L50-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L50-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L50-L81) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L46)

```diff
-       return Dp
+       return rQ ??= async function() {
+         if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
+         if ("page" === wQ.e.ios_icon_worker_v1 && (0, qQ.isWebKit)()) return;
+         try {
+           gQ = await async function() {
+             return await TQ.ready(), TQ.start()
+           }()
+         } catch (sQ) {
+           return void GQ(`did not start (${String(sQ)})`)
+         }
+         let QQ = () => {};
+         const WQ = new Promise((WQ => {
+           QQ = WQ
+         }));
+         gQ.onmessage = WQ => {
+           let {
+ ... (16 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L50-L56` → after: `L85-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L85-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L85-L94) · [Before (L50-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L50-L56)

```diff
-       return xp().filter((pp => pp.panel && !pp.disabled))
-     }
- 
-     function yp(pp) {
-       const ip = Wp(),
-         cp = ip.findIndex((pp => pp.id === Lp));
-       return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
+       if (null !== yQ || 0 === BQ.size) return;
+       const QQ = new Promise((QQ => {
+           yQ = QQ
+         })),
+         WQ = `did not answer in ${FQ/1e3} s`;
+       (0, zQ.n)(QQ, FQ, WQ).then((() => {
+         yQ = null, bQ()
+       }), (() => {
+         yQ = null, GQ(WQ)
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L59-L60` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L97-L99) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L59-L60)

```diff
-     function Up() {
-       return null !== Lp && Wp().length > 1
+     function vQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       QQ.postMessage(WQ, XQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L63-L64` → after: `L102-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L102-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L102-L117) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L63-L64)

```diff
-     function wp() {
-       Yp(null)
+     function dQ(QQ, WQ, XQ, wQ) {
+       let qQ = WQ.get(XQ);
+       return void 0 === qQ && (qQ = wQ().then((async WQ => {
+         let {
+           image: XQ,
+           request: wQ
+         } = WQ;
+         try {
+           const WQ = await createImageBitmap(XQ);
+           vQ(QQ, wQ(WQ), [WQ])
+         } catch (qQ) {
+           GQ(`could not take an image (${String(qQ)})`)
+         }
+       })), qQ.catch((() => {
+         WQ.get(XQ) === qQ && WQ.delete(XQ)
+       })), WQ.set(XQ, qQ)), qQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L66-L68` → after: `L119-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L119-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L119-L127) · [Before (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L66-L68)

```diff
- 
-     function vp() {
-       "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
+     async function HQ(QQ, WQ) {
+       UQ();
+       const XQ = JQ;
+       if (null === XQ) return null;
+       if (await QQ(XQ), JQ !== XQ) return null;
+       const wQ = ++jQ;
+       return new Promise((QQ => {
+         BQ.set(wQ, QQ), vQ(XQ, WQ(wQ)), bQ()
+       }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L71-L73` → after: `L130-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L130-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L130-L146) · [Before (L71-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L71-L73)

```diff
-     function tp() {
-       const pp = Lp;
-       return Yp(null), pp
+     function aQ(QQ, WQ, XQ) {
+       return HQ((WQ => Promise.all([QQ.top, QQ.left, QQ.right].map((QQ => function(QQ, WQ) {
+         return dQ(QQ, VQ, WQ, (async () => ({
+           image: await pQ(WQ),
+           request: QQ => ({
+             type: "texture",
+             url: WQ,
+             bitmap: QQ
+           })
+         })))
+       }(WQ, QQ))))), (wQ => ({
+         type: "draw",
+         id: wQ,
+         ...QQ,
+         size: WQ,
+         outlineWidth: XQ
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L76-L79` → after: `L149-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L149-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L149-L172) · [Before (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L76-L79)

```diff
-     function Hp(pp) {
-       return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
-         Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
-       }
+     function lQ(QQ, WQ, XQ, wQ) {
+       return HQ((XQ => function(QQ, WQ, XQ) {
+         return dQ(QQ, DQ, WQ, (async () => {
+           const {
+             texture: QQ,
+             ...wQ
+           } = await XQ();
+           return {
+             image: await pQ(QQ),
+             request: QQ => ({
+               type: "model",
+               name: WQ,
+               bitmap: QQ,
+               geometry: wQ
+             })
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L82` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L175) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L82)

```diff
-   36799: (pp, ip, cp) => {
+   36703: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L84` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L177) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L84)

```diff
-       A: () => Dp,
+       b: () => wQ,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L86-L91` → after: `L179-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L179-L181) · [Before (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L86-L91)

```diff
-       h: () => wp,
-       l: () => vp,
-       o: () => Pp,
-       s: () => Yp,
-       t: () => Up,
-       x: () => Wp
+       f: () => zQ,
+       i: () => rQ,
+       k: () => PQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L93-L107` → after: `L183-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L183-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L183-L191) · [Before (L93-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L93-L107)

```diff
-     var Op = cp(25),
-       op = cp(34),
-       Ip = cp(1308),
-       Sp = cp(36804);
-     const xp = "clientGameUiChanged";
-     let Lp = null;
- 
-     function Yp() {
-       return Lp
-     }
- 
-     function Dp(pp, ip) {
-       const cp = {
-         content: pp,
-         menu: ip
+     const wQ = {
+         across: Math.SQRT1_2,
+         down: Math.SQRT1_2 / 2,
+         up: Math.sqrt(3) / 2
+       },
+       qQ = .6,
+       TQ = {
+         width: 2 * wQ.across,
+         height: 2 * wQ.down + wQ.up
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L138-L139` → after: `L194-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L194-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L194-L197) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L138-L139)

```diff
-     function vp() {
-       tp(yp)
+     function zQ(QQ, WQ) {
+       const XQ = WQ > 0 ? WQ + 1 : 0,
+         zQ = QQ * qQ - WQ / wQ.across;
+       return Math.max(0, Math.min(zQ, (QQ - 2 * XQ) / TQ.height))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L142-L145` → after: `L206-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L206-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L206-L284) · [Before (L142-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L142-L145)

```diff
-     function tp(pp) {
-       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
-         openInGameMenuName: pp ? "inventory" : null
-       }), pp || (0, Sp.f)(), yp = !1
+     function PQ(QQ, WQ, XQ, wQ) {
+       const {
+         vertices: qQ,
+         uvs: sQ,
+         indices: FQ,
+         shades: PQ
+       } = QQ, gQ = function(QQ, WQ) {
+         const XQ = zQ(QQ, WQ),
+           wQ = TQ.width * XQ,
+           qQ = TQ.height * XQ;
+         return {
+           left: (QQ - wQ) / 2,
+           top: (QQ - qQ) / 2,
+           width: wQ,
+           height: qQ
+         }
+ ... (63 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L148` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L287) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L148)

```diff
-   38724: (pp, ip, cp) => {
+   36713: (QQ, WQ, XQ) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L150` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L289) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L150)

```diff
-       b: () => Sp
+       d: () => qQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L152-L153` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L291-L298) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L152-L153)

```diff
-     var Op = cp(38726);
-     const op = [0, 0, 0];
+     const wQ = {
+       wait: function(QQ) {
+         return new Promise((WQ => {
+           setTimeout(WQ, QQ)
+         }))
+       },
+       stallMs: 2e4
+     };
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L156-L162` → after: `L301-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L301-L303) · [Before (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L156-L162)

```diff
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
-         this.pool = pp, this.origin = ip, this.count = 0, this.free = []
-       }
-       take() {
-         var pp;
-         const ip = null !== (pp = this.free.pop()) && void 0 !== pp ? pp : this.count++;
-         return ip >= this.pool.TA && this.pool.grow(Math.max(2 * this.pool.TA, ip + 1)), this.hide(ip), ip
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wQ;
+         this.url = QQ, this.options = WQ, this.timing = XQ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = QQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L164-L173` → after: `L305-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L305-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L305-L310) · [Before (L164-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L164-L173)

```diff
-       release(pp) {
-         this.hide(pp), this.free.push(pp)
-       }
-       write(pp, ip, cp, op) {
-         const {
-           records: Ip
-         } = this.pool, {
-           origin: Sp
-         } = this, xp = pp * Op.e;
-         Ip[xp] = ip - Sp[0], Ip[xp + 1] = cp - Sp[1], Ip[xp + 2] = op - Sp[2], Ip[xp + Op.h] = 0, this.pool.markDirty(pp)
+       ready() {
+         if (null === this.fetched) {
+           const QQ = new AbortController;
+           this.fetchAbort = QQ, this.fetched = this.fetchWithRetries(QQ.signal).then((WQ => (this.fetchAbort === QQ && (this.fetchAbort = null), WQ)))
+         }
+         return this.fetched
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L175-L176` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L312-L313) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L175-L176)

```diff
-       hide(pp) {
-         this.pool.records[pp * Op.e + Op.h] = 1, this.pool.markDirty(pp)
+       cancel() {
+         null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L178-L179` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L315-L316) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L178-L179)

```diff
-       commit() {
-         this.pool.commit(this.count)
+       forgetFailedFetch() {
+         this.fetched = null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L181-L182` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L318-L319) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L181-L182)

```diff
-       dispose() {
-         this.pool.dispose()
+       get href() {
+         return this.url.href
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L184-L187` → after: `L321-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L321-L322) · [Before (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L184-L187)

```diff
-     }
-     class Sp {
-       constructor(pp, ip, cp) {
-         this.api = pp, this.model = ip, this.initialCapacity = cp, this.kinds = new Map, this.origin = [0, 0, 0]
+       start() {
+         return new Worker(this.scriptUrl, this.options)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L189-L196` → after: `L324-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L324-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L324-L329) · [Before (L189-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L189-L196)

```diff
-       kindOf(pp) {
-         let ip = this.kinds.get(pp);
-         if (void 0 === ip) {
-           const cp = this.api.createInstancePool({
-             ...this.model,
-             item: pp
-           }, this.initialCapacity);
-           null === cp || void 0 === cp || cp.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ip = cp && new Ip(cp, this.origin), this.kinds.set(pp, ip)
+       async fetchWithRetries(QQ) {
+         for (let WQ = 0;; WQ++) {
+           const XQ = new URL(this.url);
+           if (WQ > 0 && XQ.searchParams.set("cache-bust", `${Date.now()}-${WQ}`), await this.fetchWhole(XQ, QQ)) return this.scriptUrl = XQ, !0;
+           if (WQ >= 3 || QQ.aborted) return !1;
+           if (await this.timing.wait(500 * 2 ** WQ), QQ.aborted) return !1
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L200-L765` → after: `L332-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L332-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/225.js#L332-L364) · [Before (L200-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/225.js#L200-L765)

```diff
-       follow(pp) {
-         const {
-           origin: ip
-         } = this;
-         if (Math.abs(pp[0] - ip[0]) <= 512 && Math.abs(pp[1] - ip[1]) <= 512 && Math.abs(pp[2] - ip[2]) <= 512) return !1;
-         ip[0] = Math.floor(pp[0]), ip[1] = Math.floor(pp[1]), ip[2] = Math.floor(pp[2]);
-         for (const cp of this.kinds.values()) null === cp || void 0 === cp || cp.pool.setOrigin(ip[0], ip[1], ip[2]);
-         return !0
-       }
-       commit() {
-         for (const pp of this.kinds.values()) null === pp || void 0 === pp || pp.commit()
-       }
-       dispose() {
-         for (const pp of this.kinds.values()) null === pp || void 0 === pp || pp.dispose();
-         this.kinds.clear()
-       }
- ... (550 more removed lines; see GitHub link above)
+       async fetchWhole(QQ, WQ) {
+         const XQ = new AbortController;
+         let wQ;
+         const qQ = () => {
+             clearTimeout(wQ), wQ = setTimeout((() => {
+               XQ.abort()
+             }), this.timing.stallMs)
+           },
+           TQ = () => {
+             XQ.abort()
+           };
+         WQ.addEventListener("abort", TQ, {
+           once: !0
+         }), qQ();
+         try {
+           var zQ;
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4-L165` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L5-L7) · [Before (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L4-L165)

```diff
-   36841: pp => {
-     pp.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (146 more removed lines; see GitHub link above)
+   39850: (QQ, WQ, XQ) => {
+     QQ.exports = qQ;
+     var wQ = XQ(416);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L167-L168` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L9-L12) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L167-L168)

```diff
-     function Yp(pp, ip, cp) {
-       return Math.min(Math.max(ip, pp), cp)
+     function qQ(QQ, WQ) {
+       if (!(this instanceof qQ)) return new qQ(QQ, WQ);
+       var XQ = wQ.create();
+       wQ.add(XQ, QQ, WQ), this.base = wQ.min(wQ.create(), QQ, XQ), this.vec = wQ.clone(WQ), this.max = wQ.max(wQ.create(), QQ, XQ), this.mag = wQ.length(this.vec)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L170-L173` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L14-L51) · [Before (L170-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L170-L173)

```diff
- 
-     function Dp(pp) {
-       var ip = Math.round(pp).toString(16).toUpperCase();
-       return ip.length < 2 ? "0" + ip : ip
+     var TQ = qQ.prototype;
+     TQ.width = function() {
+       return this.vec[0]
+     }, TQ.height = function() {
+       return this.vec[1]
+     }, TQ.depth = function() {
+       return this.vec[2]
+     }, TQ.x0 = function() {
+       return this.base[0]
+     }, TQ.y0 = function() {
+       return this.base[1]
+     }, TQ.z0 = function() {
+       return this.base[2]
+     }, TQ.x1 = function() {
+       return this.max[0]
+     }, TQ.y1 = function() {
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L175-L197` → after: `L53-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L53-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L53-L68) · [Before (L175-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L175-L197)

```diff
-     Lp.get = function(pp) {
-       var ip, cp;
-       switch (pp.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           ip = Lp.get.hsl(pp), cp = "hsl";
-           break;
-         case "hwb":
-           ip = Lp.get.hwb(pp), cp = "hwb";
-           break;
-         default:
-           ip = Lp.get.rgb(pp), cp = "rgb"
-       }
-       return ip ? {
-         model: cp,
-         value: ip
-       } : null
- ... (7 more removed lines; see GitHub link above)
+   },
+   39846: QQ => {
+     QQ.exports = function(QQ, WQ, XQ, wQ, qQ, TQ) {
+       var zQ = +WQ[0],
+         sQ = +WQ[1],
+         FQ = +WQ[2],
+         PQ = +XQ[0],
+         gQ = +XQ[1],
+         JQ = +XQ[2],
+         rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
+       if (0 === rQ) throw new Error("Can't raycast along a zero vector");
+       return function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+         for (var gQ = 0, JQ = Math.floor, rQ = 0 | JQ(WQ), IQ = 0 | JQ(XQ), jQ = 0 | JQ(wQ), BQ = qQ > 0 ? 1 : -1, yQ = TQ > 0 ? 1 : -1, VQ = zQ > 0 ? 1 : -1, DQ = Math.abs(1 / qQ), pQ = Math.abs(1 / TQ), GQ = Math.abs(1 / zQ), UQ = DQ < 1 / 0 ? DQ * (BQ > 0 ? rQ + 1 - WQ : WQ -  … [truncated]
+           var HQ = QQ(rQ, IQ, jQ);
+           if (HQ) return FQ && (FQ[0] = WQ + gQ * qQ, FQ[1] = XQ + gQ * TQ, FQ[2] = wQ + gQ * zQ), PQ && (PQ[0] = PQ[1] = PQ[2] = 0, 0 === dQ && (PQ[0] = -BQ), 1 === dQ && (PQ[1] = -yQ), 2 === dQ && (PQ[2] = -VQ)), HQ;
+           UQ < bQ ? UQ < vQ ? (rQ += BQ, gQ = UQ, UQ += DQ, dQ = 0) : (jQ += VQ, gQ = vQ, vQ += GQ, dQ = 2) : bQ < vQ ? (IQ += yQ, gQ = bQ, bQ += pQ, dQ = 1) : (jQ += VQ, gQ = vQ, vQ += GQ, dQ = 2)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L199-L249` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L70-L71) · [Before (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L199-L249)

```diff
-         op && (Sp[3] = parseInt(op, 16) / 255)
-       } else if (ip = pp.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (op = (ip = ip[1])[3], cp = 0; cp < 3; cp++) Sp[cp] = parseInt(ip[cp] + ip[cp], 16);
-         op && (Sp[3] = parseInt(op + op, 16) / 255)
-       } else if (ip = pp.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
-         for (cp = 0; cp < 3; cp++) Sp[cp] = parseInt(ip[cp + 1], 0);
-         ip[4] && (ip[5] ? Sp[3] = .01 * parseFloat(ip[4]) : Sp[3] = parseFloat(ip[4]))
-       } else {
-         if (!(ip = pp.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (ip = pp.match(/^(\w+)$/)) ? "transparent" === ip[1] ? [0, 0, 0, 0] : Ip.call(Op, ip[1]) ? ((Sp = Op[ip[1]])[3] = 1, Sp) :  … [truncated]
-         for (cp = 0; cp < 3; cp++) Sp[cp] = Math.round(2.55 * parseFloat(ip[cp + 1]));
-         ip[4] && (ip[5] ? Sp[3] = .01 * parseFloat(ip[4]) : Sp[3] = parseFloat(ip[4]))
-       }
-       for (cp = 0; cp < 3; cp++) Sp[cp] = Yp(Sp[cp], 0, 255);
-       return Sp[3] = Yp(Sp[3], 0, 1), Sp
-     }, Lp.get.hsl = function(pp) {
-       if (!pp) return null;
- ... (35 more removed lines; see GitHub link above)
+         return FQ && (FQ[0] = WQ + gQ * qQ, FQ[1] = XQ + gQ * TQ, FQ[2] = wQ + gQ * zQ), PQ && (PQ[0] = PQ[1] = PQ[2] = 0), 0
+       }(QQ, zQ, sQ, FQ, PQ /= rQ, gQ /= rQ, JQ /= rQ, wQ = "undefined" === typeof wQ ? 64 : +wQ, qQ, TQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L252-L258` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L74-L80) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L252-L258)

```diff
-   36832: (pp, ip, cp) => {
-     const Op = cp(36834),
-       op = cp(36853),
-       Ip = ["keyword", "gray", "hex"],
-       Sp = {};
-     for (const Wp of Object.keys(op)) Sp[[...op[Wp].labels].sort().join("")] = Wp;
-     const xp = {};
+   39376: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => sQ,
+       f: () => TQ
+     });
+     var wQ = XQ(4357);
+     let qQ = null;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L260-L286` → after: `L82-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L82-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L82-L107) · [Before (L260-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L260-L286)

```diff
-     function Lp(pp, ip) {
-       if (!(this instanceof Lp)) return new Lp(pp, ip);
-       if (ip && ip in Ip && (ip = null), ip && !(ip in op)) throw new Error("Unknown model: " + ip);
-       let cp, Yp;
-       if (null == pp) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (pp instanceof Lp) this.model = pp.model, this.color = [...pp.color], this.valpha = pp.valpha;
-       else if ("string" === typeof pp) {
-         const ip = Op.get(pp);
-         if (null === ip) throw new Error("Unable to parse color from string: " + pp);
-         this.model = ip.model, Yp = op[this.model].channels, this.color = ip.value.slice(0, Yp), this.valpha = "number" === typeof ip.value[Yp] ? ip.value[Yp] : 1
-       } else if (pp.length > 0) {
-         this.model = ip || "rgb", Yp = op[this.model].channels;
-         const cp = Array.prototype.slice.call(pp, 0, Yp);
-         this.color = Pp(cp, Yp), this.valpha = "number" === typeof pp[Yp] ? pp[Yp] : 1
-       } else if ("number" === typeof pp) this.model = "rgb", this.color = [pp >> 16 & 255, pp >> 8 & 255, 255 & pp], this.valpha = 1;
-       else {
- ... (11 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       return null !== qQ && QQ === qQ
+     }
+ 
+     function zQ() {
+       this.EY = !1, this.stopPropagation = !1, this.kY = !1, this.disabled = !1
+     }
+     class sQ {
+       constructor(QQ, WQ) {
+         this.version = "0.7.0";
+         var XQ = Object.assign({}, new zQ, WQ || {});
+         this.element = QQ || document, this.EY = !!XQ.EY, this.stopPropagation = !!XQ.stopPropagation, this.kY = !!XQ.kY, this.disabled = !!XQ.disabled, this.filterEvents = (QQ, WQ) => !0, this.ignoreEvent = QQ => !1, this.down = new wQ.EventEmitter, this.up = new wQ.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           VWQ: 0,
+           DWQ: 0,
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L288-L291` → after: `L109-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L109-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L109-L120) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L288-L291)

```diff
-       if (xp[this.model])
-         for (Yp = op[this.model].channels, cp = 0; cp < Yp; cp++) {
-           const pp = xp[this.model][cp];
-           pp && (this.color[cp] = pp(this.color[cp]))
+       bind(QQ) {
+         for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
+         XQ.forEach((WQ => {
+           var XQ = this._keyBindmap[WQ] || [];
+           XQ.includes(QQ) || (XQ.push(QQ), this._keyBindmap[WQ] = XQ)
+         })), this.state[QQ] = !!this.state[QQ], this.pressCount[QQ] = this.pressCount[QQ] || 0, this.releaseCount[QQ] = this.releaseCount[QQ] || 0
+       }
+       unbind(QQ) {
+         for (var WQ in this._keyBindmap) {
+           var XQ = this._keyBindmap[WQ],
+             wQ = XQ.indexOf(QQ);
+           wQ > -1 && XQ.splice(wQ, 1)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L293-L384` → after: `L122-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L122-L128) · [Before (L293-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L293-L384)

```diff
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
-     }
-     Lp.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(pp) {
-         let ip = this.model in Op.to ? this : this.rgb();
-         ip = ip.round("number" === typeof pp ? pp : 1);
-         const cp = 1 === ip.valpha ? ip.color : [...ip.color, this.valpha];
-         return Op.to[ip.model](cp)
-       },
-       percentString(pp) {
- ... (76 more removed lines; see GitHub link above)
+       }
+       getBindings() {
+         var QQ = {};
+         for (var WQ in this._keyBindmap) {
+           this._keyBindmap[WQ].forEach((XQ => {
+             QQ[XQ] = QQ[XQ] || [], QQ[XQ].push(WQ)
+           }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L460-L474` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L132-L133) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L460-L474)

```diff
-     };
-     for (const Wp of Object.keys(op)) {
-       if (Ip.includes(Wp)) continue;
-       const {
-         channels: pp
-       } = op[Wp];
-       Lp.prototype[Wp] = function() {
-         if (this.model === Wp) return new Lp(this);
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         return ip.length > 0 ? new Lp(ip, Wp) : new Lp([...(Op = op[this.model][Wp].raw(this.color), Array.isArray(Op) ? Op : [Op]), this.valpha], Wp);
-         var Op
-       }, Lp[Wp] = function() {
-         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
-         let op = cp[0];
-         return "number" === typeof op && (op = Pp(cp, pp)), new Lp(op, Wp)
+       fJ() {
+         FQ(this.fY), FQ(this.pressCount), FQ(this.releaseCount)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L479-L483` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L138) · [Before (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L479-L483)

```diff
-       return function(ip) {
-         return function(pp, ip) {
-           return Number(pp.toFixed(ip))
-         }(ip, pp)
-       }
+       for (var WQ in QQ) QQ[WQ] = 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L486-L493` → after: `L141-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L141-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L141-L155) · [Before (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L486-L493)

```diff
-     function Dp(pp, ip, cp) {
-       pp = Array.isArray(pp) ? pp : [pp];
-       for (const Op of pp)(xp[Op] || (xp[Op] = []))[ip] = cp;
-       return pp = pp[0],
-         function(Op) {
-           let op;
-           return void 0 !== Op ? (cp && (Op = cp(Op)), op = this[pp](), op.color[ip] = Op, op) : (op = this[pp]().color[ip], cp && (op = cp(op)), op)
-         }
+     function PQ(QQ) {
+       window.addEventListener("keydown", yQ.bind(null, QQ, !0), !1), window.addEventListener("keyup", yQ.bind(null, QQ, !1), !1);
+       var WQ = {
+         passive: !0
+       };
+       QQ.element.addEventListener("touchstart", IQ.bind(void 0, QQ), {
+         passive: !1
+       }), QQ.element.addEventListener("touchend", BQ.bind(void 0, QQ), WQ), QQ.element.addEventListener("mousedown", VQ.bind(null, QQ, !0), WQ), window.document.addEventListener("mouseup", VQ.bind(null, QQ, !1), WQ), QQ.element.addEventListener("touchmove", DQ.bind(null, QQ), WQ) … [truncated]
+     }
+     var gQ = 0,
+       JQ = 0,
+       rQ = null;
+ 
+     function IQ(QQ, WQ) {
+       WQ.preventDefault(), jQ(WQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L497-L498` → after: `L159-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L159-L166) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L497-L498)

```diff
-       return function(ip) {
-         return Math.max(0, Math.min(pp, ip))
+       let WQ = !1;
+       for (let XQ = 0; XQ < QQ.touches.length; ++XQ)
+         if (QQ.touches[XQ].identifier === rQ) {
+           WQ = !0;
+           break
+         } if (!WQ) {
+         const WQ = QQ.changedTouches[0];
+         gQ = WQ.clientX, JQ = WQ.clientY, rQ = WQ.identifier
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L503-L504` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L171) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L503-L504)

```diff
-       for (let cp = 0; cp < ip; cp++) "number" !== typeof pp[cp] && (pp[cp] = 0);
-       return pp
+       for (var XQ = WQ.changedTouches, wQ = 0; wQ < XQ.length; ++wQ) XQ[wQ].identifier === rQ && (rQ = null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L506-L571` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L173-L178) · [Before (L506-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L506-L571)

```diff
-     pp.exports = Lp
-   },
-   36859: (pp, ip, cp) => {
-     const Op = cp(36864),
-       op = {};
-     for (const Sp of Object.keys(Op)) op[Op[Sp]] = Sp;
-     const Ip = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function yQ(QQ, WQ, XQ) {
+       if (!QQ.ignoreEvent(XQ)) try {
+         dQ(QQ, XQ), WQ && XQ.isTrusted && !XQ.repeat && QQ._keyStates[XQ.code] && HQ(QQ, XQ.code)
+       } finally {
+         aQ(XQ.code, WQ, QQ, XQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L589-L631` → after: `L181-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L181-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L181-L196) · [Before (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L589-L631)

```diff
-     Ip.rgb.hsl = function(pp) {
-       const ip = pp[0] / 255,
-         cp = pp[1] / 255,
-         Op = pp[2] / 255,
-         op = Math.min(ip, cp, Op),
-         Ip = Math.max(ip, cp, Op),
-         Sp = Ip - op;
-       let xp, Lp;
-       Ip === op ? xp = 0 : ip === Ip ? xp = (cp - Op) / Sp : cp === Ip ? xp = 2 + (Op - ip) / Sp : Op === Ip && (xp = 4 + (ip - cp) / Sp), xp = Math.min(60 * xp, 360), xp < 0 && (xp += 360);
-       const Yp = (op + Ip) / 2;
-       return Lp = Ip === op ? 0 : Yp <= .5 ? Sp / (Ip + op) : Sp / (2 - Ip - op), [xp, 100 * Lp, 100 * Yp]
-     }, Ip.rgb.hsv = function(pp) {
-       let ip, cp, Op, op, Ip;
-       const Sp = pp[0] / 255,
-         xp = pp[1] / 255,
-         Lp = pp[2] / 255,
- ... (27 more removed lines; see GitHub link above)
+ 
+     function VQ(QQ, WQ, XQ) {
+       if (!QQ.ignoreEvent(XQ)) try {
+         dQ(QQ, XQ)
+       } finally {
+         ! function(QQ, WQ, XQ) {
+           if ("pointerId" in XQ)
+             if (WQ) {
+               if (null !== QQ._touches.currID) return;
+               QQ._touches.currID = XQ.pointerId
+             } else {
+               if (QQ._touches.currID !== XQ.pointerId) return;
+               QQ._touches.currID = null
+             } var wQ = "button" in XQ ? XQ.button + 1 : 1;
+           aQ("Mouse" + wQ, WQ, QQ, XQ)
+         }(QQ, WQ, XQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L633-L690` → after: `L198-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L198-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L198-L213) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L633-L690)

```diff
-       var Sp, xp;
-       return cp
-     }, Ip.keyword.rgb = function(pp) {
-       return Op[pp]
-     }, Ip.rgb.xyz = function(pp) {
-       let ip = pp[0] / 255,
-         cp = pp[1] / 255,
-         Op = pp[2] / 255;
-       ip = ip > .04045 ? ((ip + .055) / 1.055) ** 2.4 : ip / 12.92, cp = cp > .04045 ? ((cp + .055) / 1.055) ** 2.4 : cp / 12.92, Op = Op > .04045 ? ((Op + .055) / 1.055) ** 2.4 : Op / 12.92;
-       return [100 * (.4124 * ip + .3576 * cp + .1805 * Op), 100 * (.2126 * ip + .7152 * cp + .0722 * Op), 100 * (.0193 * ip + .1192 * cp + .9505 * Op)]
-     }, Ip.rgb.lab = function(pp) {
-       const ip = Ip.rgb.xyz(pp);
-       let cp = ip[0],
-         Op = ip[1],
-         op = ip[2];
-       cp /= 95.047, Op /= 100, op /= 108.883, cp = cp > .008856 ? cp ** (1 / 3) : 7.787 * cp + 16 / 116, Op = Op > .008856 ? Op ** (1 / 3) : 7.787 * Op + 16 / 116, op = op > .008856 ? op ** (1 / 3) : 7.787 * op + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+     }
+ 
+     function DQ(QQ, WQ) {
+       var XQ = WQ.movementX || WQ.mozMovementX || 0,
+         wQ = WQ.movementY || WQ.mozMovementY || 0;
+       if (WQ.touches && 0 === (XQ | wQ)) {
+         var qQ = function(QQ) {
+           jQ(QQ);
+           for (let WQ = 0; WQ < QQ.changedTouches.length; ++WQ)
+             if (QQ.changedTouches[WQ].identifier == rQ) {
+               const XQ = QQ.changedTouches[WQ],
+                 wQ = [XQ.clientX - gQ, XQ.clientY - JQ];
+               return gQ = XQ.clientX, JQ = XQ.clientY, wQ
+             } return console.error(`Did not find touch id ${rQ}`), [0, 0]
+         }(WQ);
+         XQ = qQ[0], wQ = qQ[1]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L692-L715` → after: `L215-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L215-L221) · [Before (L692-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L692-L715)

```diff
-     }, Ip.hsv.hsl = function(pp) {
-       const ip = pp[0],
-         cp = pp[1] / 100,
-         Op = pp[2] / 100,
-         op = Math.max(Op, .01);
-       let Ip, Sp;
-       Sp = (2 - cp) * Op;
-       const xp = (2 - cp) * op;
-       return Ip = cp * op, Ip /= xp <= 1 ? xp : 2 - xp, Ip = Ip || 0, Sp /= 2, [ip, 100 * Ip, 100 * Sp]
-     }, Ip.hwb.rgb = function(pp) {
-       const ip = pp[0] / 360;
-       let cp = pp[1] / 100,
-         Op = pp[2] / 100;
-       const op = cp + Op;
-       let Ip;
-       op > 1 && (cp /= op, Op /= op);
- ... (8 more removed lines; see GitHub link above)
+       QQ.fY.dx += XQ, QQ.fY.dy += wQ
+     }
+ 
+     function pQ(QQ, WQ) {
+       dQ(QQ, WQ);
+       var XQ = 1;
+       switch (WQ.deltaMode) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L717` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L223) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L717)

```diff
-           Yp = xp, Dp = Lp, Ap = cp;
+           XQ = 1;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L720` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L226) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L720)

```diff
-           Yp = Lp, Dp = xp, Ap = cp;
+           XQ = 12;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L723-L795` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L229) · [Before (L723-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L723-L795)

```diff
-           Yp = cp, Dp = xp, Ap = Lp;
-           break;
-         case 3:
-           Yp = cp, Dp = Lp, Ap = xp;
-           break;
-         case 4:
-           Yp = Lp, Dp = cp, Ap = xp;
-           break;
-         case 5:
-           Yp = xp, Dp = cp, Ap = Lp
-       }
-       return [255 * Yp, 255 * Dp, 255 * Ap]
-     }, Ip.cmyk.rgb = function(pp) {
-       const ip = pp[0] / 100,
-         cp = pp[1] / 100,
-         Op = pp[2] / 100,
- ... (57 more removed lines; see GitHub link above)
+           XQ = QQ.element.clientHeight || window.innerHeight
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L797-L858` → after: `L231-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L231-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L231-L283) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L797-L858)

```diff
-       let ip;
-       pp -= 16;
-       return [Math.floor(pp / 36) / 5 * 255, Math.floor((ip = pp % 36) / 6) / 5 * 255, ip % 6 / 5 * 255]
-     }, Ip.rgb.hex = function(pp) {
-       const ip = (((255 & Math.round(pp[0])) << 16) + ((255 & Math.round(pp[1])) << 8) + (255 & Math.round(pp[2]))).toString(16).toUpperCase();
-       return "000000".substring(ip.length) + ip
-     }, Ip.hex.rgb = function(pp) {
-       const ip = pp.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!ip) return [0, 0, 0];
-       let cp = ip[0];
-       3 === ip[0].length && (cp = cp.split("").map((pp => pp + pp)).join(""));
-       const Op = parseInt(cp, 16);
-       return [Op >> 16 & 255, Op >> 8 & 255, 255 & Op]
-     }, Ip.rgb.hcg = function(pp) {
-       const ip = pp[0] / 255,
-         cp = pp[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+       QQ.fY.VWQ += (WQ.deltaX || 0) * XQ, QQ.fY.DWQ += (WQ.deltaY || 0) * XQ, QQ.fY.pWQ += (WQ.deltaZ || 0) * XQ
+     }
+ 
+     function GQ(QQ, WQ) {
+       if (!QQ.kY) return WQ.preventDefault(), !1
+     }
+     var UQ = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (37 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L860-L900` → after: `L285-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L285-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L285-L307) · [Before (L860-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L860-L900)

```diff
-       return Lp = (1 - cp) * Op, [255 * (cp * op[0] + Lp), 255 * (cp * op[1] + Lp), 255 * (cp * op[2] + Lp)]
-     }, Ip.hcg.hsv = function(pp) {
-       const ip = pp[1] / 100,
-         cp = ip + pp[2] / 100 * (1 - ip);
-       let Op = 0;
-       return cp > 0 && (Op = ip / cp), [pp[0], 100 * Op, 100 * cp]
-     }, Ip.hcg.hsl = function(pp) {
-       const ip = pp[1] / 100,
-         cp = pp[2] / 100 * (1 - ip) + .5 * ip;
-       let Op = 0;
-       return cp > 0 && cp < .5 ? Op = ip / (2 * cp) : cp >= .5 && cp < 1 && (Op = ip / (2 * (1 - cp))), [pp[0], 100 * Op, 100 * cp]
-     }, Ip.hcg.hwb = function(pp) {
-       const ip = pp[1] / 100,
-         cp = ip + pp[2] / 100 * (1 - ip);
-       return [pp[0], 100 * (cp - ip), 100 * (1 - cp)]
-     }, Ip.hwb.hcg = function(pp) {
- ... (25 more removed lines; see GitHub link above)
+     }
+ 
+     function aQ(QQ, WQ, XQ, wQ) {
+       var qQ = XQ._keyBindmap[QQ];
+       qQ && (lQ(XQ._keyStates[QQ], WQ) && (XQ._keyStates[QQ] = WQ, qQ.forEach((QQ => {
+         (!XQ.filterEvents || XQ.filterEvents(wQ, QQ)) && function(QQ, WQ, XQ, wQ) {
+           var qQ = WQ ? XQ.pressCount : XQ.releaseCount;
+           qQ[QQ] = (qQ[QQ] || 0) + 1;
+           var TQ = XQ._bindPressCount[QQ] || 0;
+           (TQ += WQ ? 1 : -1) < 0 && (TQ = 0);
+           XQ._bindPressCount[QQ] = TQ;
+           var zQ = XQ.state[QQ];
+           if (lQ(zQ, TQ)) {
+             XQ.state[QQ] = TQ > 0;
+             var sQ = WQ ? XQ.down : XQ.up;
+             XQ.disabled || sQ.emit(QQ, wQ)
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L903-L937` → after: `L310-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L310-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L310-L405) · [Before (L903-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L903-L937)

```diff
-   36853: (pp, ip, cp) => {
-     const Op = cp(36859),
-       op = cp(36867),
-       Ip = {};
-     Object.keys(Op).forEach((pp => {
-       Ip[pp] = {}, Object.defineProperty(Ip[pp], "channels", {
-         value: Op[pp].channels
-       }), Object.defineProperty(Ip[pp], "labels", {
-         value: Op[pp].labels
-       });
-       const ip = op(pp);
-       Object.keys(ip).forEach((cp => {
-         const Op = ip[cp];
-         Ip[pp][cp] = function(pp) {
-           const ip = function() {
-             for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
- ... (19 more removed lines; see GitHub link above)
+   36833: (QQ, WQ) => {
+     function XQ(QQ) {
+       if (QQ && "object" === typeof QQ) {
+         var WQ = QQ.which || QQ.keyCode || QQ.charCode;
+         WQ && (QQ = WQ)
+       }
+       if ("number" === typeof QQ) return zQ[QQ];
+       var XQ, TQ = String(QQ);
+       return (XQ = wQ[TQ.toLowerCase()]) ? XQ : (XQ = qQ[TQ.toLowerCase()]) || (1 === TQ.length ? TQ.charCodeAt(0) : void 0)
+     }
+     XQ.isEventKey = function(QQ, WQ) {
+       if (QQ && "object" === typeof QQ) {
+         var XQ = QQ.which || QQ.keyCode || QQ.charCode;
+         if (null === XQ || void 0 === XQ) return !1;
+         if ("string" === typeof WQ) {
+           var TQ;
+ ... (80 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L939-L940` → after: `L407-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L407-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L407-L489) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L939-L940)

```diff
-   36867: (pp, ip, cp) => {
-     const Op = cp(36859);
+   39836: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ
+     });
+     class wQ {
+       constructor() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.Yu = !1, this.wL = !1, this.qE = 30, this.Xu = 0, this.qL = 100, this.Sy = !1, this.fullscreen = !1, this.tV = function(QQ) {}, this.gL = function(QQ, WQ, XQ) {}, this.cL = function() {}, this.cV = function() {}, this.dL = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(QQ) {
+             if ("loading" === document.readyState) {
+               var WQ = () => {
+                 document.removeEventListener("readystatechange", WQ), QQ()
+               };
+               document.addEventListener("readystatechange", WQ)
+             } else setTimeout(QQ, 0)
+ ... (67 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L943-L949` → after: `L492-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L492-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L492-L682) · [Before (L943-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L943-L949)

```diff
-       const ip = function() {
-           const pp = {},
-             ip = Object.keys(Op);
-           for (let cp = ip.length, Op = 0; Op < cp; Op++) pp[ip[Op]] = {
-             distance: -1,
-             parent: null
-           };
+       for (var WQ = QQ._data, XQ = 1e3 / QQ.qE, wQ = WQ.nowObject.now() + zQ, qQ = 0; WQ.nowObject.now() >= WQ.lastTickStarted + XQ && WQ.nowObject.now() < wQ && ++qQ <= TQ;) QQ.tV(XQ), WQ.lastTickStarted += XQ;
+       var sQ = 5 * (XQ + 5),
+         FQ = WQ.nowObject.now();
+       if (FQ - WQ.lastTickStarted > sQ)
+         for (; FQ >= WQ.lastTickStarted + XQ;) WQ.lastTickStarted += XQ
+     }
+   },
+   36999: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(61);
+     const qQ = wQ.useLayoutEffect;
+     const TQ = function(QQ) {
+       var WQ = (0, wQ.useRef)(QQ);
+       return qQ((function() {
+ ... (175 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L951-L956` → after: `L684-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L684-L688) · [Before (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L951-L956)

```diff
-         }(),
-         cp = [pp];
-       for (ip[pp].distance = 0; cp.length;) {
-         const pp = cp.pop(),
-           op = Object.keys(Op[pp]);
-         for (let Op = op.length, Ip = 0; Ip < Op; Ip++) {
+         }(QQ);
+         for (const PQ of sQ) {
+           if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
+           if (PQ.endsWith("Observable")) continue;
+           if (XQ && -1 !== XQ.indexOf(PQ)) continue;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L958` → after: `L690-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L690-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L690-L704) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L958)

```diff
-             Sp = ip[Op]; - 1 === Sp.distance && (Sp.distance = ip[pp].distance + 1, Sp.parent = pp, cp.unshift(Op))
+             gQ = typeof sQ;
+           if ("function" !== gQ) try {
+             if ("object" === gQ)
+               if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
+               else if (sQ instanceof Array) {
+               if (WQ[PQ] = [], sQ.length > 0)
+                 if ("object" == typeof sQ[0])
+                   for (let QQ = 0; QQ < sQ.length; QQ++) {
+                     const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
+                   } else WQ[PQ] = sQ.slice(0)
+             } else WQ[PQ] = qQ(sQ, WQ, zQ);
+             else WQ[PQ] = sQ
+           } catch (FQ) {
+             wQ.b.Warn(FQ.message)
+           }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L963-L966` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L708-L722) · [Before (L963-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L963-L966)

```diff
- 
-     function Ip(pp, ip) {
-       return function(cp) {
-         return ip(pp(cp))
+   },
+   38986: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => qQ,
+       h: () => TQ,
+       i: () => zQ,
+       l: () => sQ
+     });
+     var wQ = XQ(37546);
+     class qQ {
+       constructor(QQ, WQ, XQ) {
+         this.gradient = QQ, this.color1 = WQ, this.color2 = XQ
+       }
+       getColorToRef(QQ) {
+         this.color2 ? wQ.d.LerpToRef(this.color1, this.color2, Math.random(), QQ) : QQ.WH(this.color1)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L969-L975` → after: `L725-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L725-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L725-L736) · [Before (L969-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L969-L975)

```diff
- 
-     function Sp(pp, ip) {
-       const cp = [ip[pp].parent, pp];
-       let op = Op[ip[pp].parent][pp],
-         Sp = ip[pp].parent;
-       for (; ip[Sp].parent;) cp.unshift(ip[Sp].parent), op = Ip(Op[ip[Sp].parent][Sp], op), Sp = ip[Sp].parent;
-       return op.conversion = cp, op
+     class TQ {
+       constructor(QQ, WQ) {
+         this.gradient = QQ, this.color = WQ
+       }
+     }
+     class zQ {
+       constructor(QQ, WQ, XQ) {
+         this.gradient = QQ, this.factor1 = WQ, this.factor2 = XQ
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L977-L983` → after: `L738-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L738-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L738-L749) · [Before (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L977-L983)

```diff
-     pp.exports = function(pp) {
-       const ip = op(pp),
-         cp = {},
-         Op = Object.keys(ip);
-       for (let op = Op.length, Ip = 0; Ip < op; Ip++) {
-         const pp = Op[Ip];
-         null !== ip[pp].parent && (cp[pp] = Sp(pp, ip))
+     class sQ {
+       static GetCurrentGradient(QQ, WQ, XQ) {
+         if (WQ[0].gradient > QQ) return void XQ(WQ[0], WQ[0], 1);
+         for (let qQ = 0; qQ < WQ.length - 1; qQ++) {
+           const wQ = WQ[qQ],
+             TQ = WQ[qQ + 1];
+           if (QQ >= wQ.gradient && QQ <= TQ.gradient) {
+             return void XQ(wQ, TQ, (QQ - wQ.gradient) / (TQ.gradient - wQ.gradient))
+           }
+         }
+         const wQ = WQ.length - 1;
+         XQ(WQ[wQ], WQ[wQ], 1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L988-L1137` → after: `L753-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L753-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L753-L808) · [Before (L988-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L988-L1137)

```diff
-   36864: pp => {
-     pp.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (134 more removed lines; see GitHub link above)
+   38956: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ
+     });
+     class wQ {
+       static _CheckLimit(QQ, WQ) {
+         let XQ = wQ._LogLimitOutputs[QQ];
+         return XQ ? XQ.current++ : (XQ = {
+           limit: WQ,
+           current: 1
+         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
+       }
+       static _GenerateLimitMessage(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const XQ = wQ._LogLimitOutputs[QQ];
+         if (!XQ || !wQ.MessageLimitReached) return;
+ ... (40 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L1140-L1153` → after: `L824-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L824-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L824-L870) · [Before (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L1140-L1153)

```diff
-   36845: (pp, ip, cp) => {
-     var Op = cp(36847),
-       op = Array.prototype.concat,
-       Ip = Array.prototype.slice,
-       Sp = pp.exports = function(pp) {
-         for (var ip = [], cp = 0, Sp = pp.length; cp < Sp; cp++) {
-           var xp = pp[cp];
-           Op(xp) ? ip = op.call(ip, Ip.call(xp)) : ip.push(xp)
-         }
-         return ip
-       };
-     Sp.wrap = function(pp) {
-       return function() {
-         return pp(Sp(arguments))
+   38989: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(37370),
+       qQ = XQ(37404),
+       TQ = XQ(38947);
+     class zQ {
+       constructor() {
+         this.direction1 = new wQ.s(0, 1, 0), this.direction2 = new wQ.s(0, 1, 0), this.minEmitBox = new wQ.s(-.5, -.5, -.5), this.maxEmitBox = new wQ.s(.5, .5, .5)
+       }
+       startDirectionFunction(QQ, WQ, XQ, TQ) {
+         const zQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
+           sQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
+           FQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
+         if (TQ) return WQ.x = zQ, WQ.y = sQ, void(WQ.z = FQ);
+ ... (31 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L1157-L1159` → after: `L874-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L874-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/226.js#L874-L1191) · [Before (L1157-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/226.js#L1157-L1159)

```diff
-   36847: pp => {
-     pp.exports = function(pp) {
-       return !(!pp || "string" === typeof pp) && (pp instanceof Array || Array.isArray(pp) || pp.length >= 0 && (pp.splice instanceof Function || Object.getOwnPropertyDescriptor(pp, pp.length - 1) && "String" !== pp.constructor.name))
+   38945: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => sQ,
+       g: () => zQ
+     });
+     var wQ = XQ(37370),
+       qQ = XQ(37404),
+       TQ = XQ(38947);
+     class zQ {
+       constructor() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = QQ, this.height = WQ, this.radiusRange = XQ, this.directionRandomizer = qQ, this._tempVector = wQ.s.Zero()
+       }
+ ... (302 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/227.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/227.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L4-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L4-L1629) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L4)

```diff
-   36948: (pp, ip, cp) => {
+   41289: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       LobbyManageView: () => bW
+     });
+     var wQ = XQ(61),
+       qQ = XQ(1532),
+       TQ = XQ(37286),
+       zQ = XQ(2550),
+       sQ = XQ(2555),
+       FQ = XQ(2535),
+       PQ = XQ(36859);
+ 
+     function gQ() {
+       const [QQ, WQ] = (0, wQ.useState)(new Map);
+       return {
+         get: WQ => QQ.get(WQ),
+ ... (1610 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L7-L10` → after: `L1632-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1632-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L1632-L1723) · [Before (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L7-L10)

```diff
-       d: () => Di,
-       e: () => Wi,
-       i: () => Ai,
-       l: () => Pi
+       c: () => FQ
+     });
+     var wQ = XQ(1532),
+       qQ = XQ(2036),
+       TQ = XQ(2003);
+     const zQ = 1e4;
+     let sQ = 0;
+ 
+     function FQ(QQ) {
+       const WQ = ++sQ;
+       return new Promise((XQ => {
+         const sQ = WQ => {
+             FQ(), clearTimeout(PQ), !1 === (null === WQ || void 0 === WQ ? void 0 : WQ.ok) && (0, wQ.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: QQ.type
+             }), XQ(WQ)
+ ... (76 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L12-L64` → after: `L1725-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1725-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L1725-L1804) · [Before (L12-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L12-L64)

```diff
-     const Op = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       op = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       Ip = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       Sp = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       xp = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       Lp = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       Yp = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       Dp = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
-       Ap = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
-       Pp = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
-       Wp = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
-       yp = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
-       Up = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
-       wp = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
-       vp = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
-       tp = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
- ... (37 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(1739),
+       sQ = XQ(1507),
+       FQ = XQ(1391),
+       PQ = XQ(1094),
+       gQ = XQ(1145);
+ 
+     function JQ(QQ) {
+       let {
+         label: WQ,
+         icon: XQ,
+         placeholder: qQ,
+         onSubmit: JQ
+       } = QQ;
+ ... (64 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L66-L117` → after: `L1806-L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1806-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L1806-L1809) · [Before (L66-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L66-L117)

```diff
-         gunSemiAutomatic: Op,
-         gunSubmachineGun: op,
-         gunShotgun: Lp,
-         gunRifle: Sp,
-         gunPistol: Ip,
-         gunMisc: xp,
-         dig: Yp,
-         step: Dp,
-         randomBeep: Ap,
-         randomCannon: Pp,
-         randomCash: Wp,
-         randomExp: yp,
-         randomFallsmall: Up,
-         randomItems: wp,
-         randomFire: vp,
-         randomFirecracker: tp,
- ... (36 more removed lines; see GitHub link above)
+         unlisted: "link",
+         public: "globe",
+         whitelist: "user-check",
+         private: "lock"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L119-L128` → after: `L1811-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1811-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L1811-L2018) · [Before (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L119-L128)

```diff
-       xi = new Map(["mob", "random"].map((pp => {
-         const ip = Object.keys(Si).filter((ip => ip.startsWith(pp) && /^[A-Z]/.test(ip.slice(pp.length))));
-         return [pp, ip]
-       }))),
-       Li = {};
-     for (const Ui in Si) {
-       const pp = Si[Ui];
-       for (const ip in pp.sprite) {
-         if (Li[ip]) throw new Error(`duplicate sound name ${ip} in ${Li[ip]} and ${Ui}`);
-         Li[ip] = Ui
+       gQ = ["unlisted", "public", "whitelist", "private"];
+ 
+     function JQ(QQ) {
+       let {
+         visibility: WQ,
+         onPick: XQ
+       } = QQ;
+       const {
+         t: qQ
+       } = (0, zQ.C)(), JQ = (0, wQ.useRef)([]);
+       return (0, FQ.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": qQ("worldSocial:whoCanJoin"),
+         children: gQ.map(((QQ, wQ) => {
+           const zQ = QQ === WQ;
+ ... (192 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L131-L133` → after: `L2021-L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L2021-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L2021-L2120) · [Before (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L131-L133)

```diff
-     for (const Ui in Si) {
-       const pp = Si[Ui];
-       for (let ip = 0; ip < pp.src.length; ip++) pp.src[ip] = Ii.clientSideServerUrls.staticUrl + pp.src[ip]
+ 
+     function rQ(QQ) {
+       let {
+         player: WQ,
+         isFriend: XQ = !1,
+         status: wQ,
+         showLocation: FQ = void 0 === wQ,
+         fJ: JQ,
+         onSendFriendRequest: rQ,
+         actions: IQ,
+         zIndex: jQ
+       } = QQ;
+       const {
+         t: BQ
+       } = (0, qQ.C)();
+       let yQ = wQ;
+ ... (84 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L138-L143` → after: `L2124-L2183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L2124-L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L2124-L2183) · [Before (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L138-L143)

```diff
-       if (Yi[pp]) return yi(Yi[pp]);
-       {
-         const ip = [];
-         for (const cp in Si)
-           for (const Op in Si[cp].sprite) Op.startsWith(pp) && ip.push(Op);
-         return Yi[pp] = ip, yi(ip)
+       const [WQ] = (0, wQ.useState)((() => function(QQ) {
+         var WQ;
+         const XQ = null !== (WQ = sQ.get(QQ)) && void 0 !== WQ ? WQ : null;
+         return null !== XQ && void 0 !== XQ && XQ.answer && "error" in XQ.answer ? null : XQ
+       }(QQ))), [XQ, zQ] = (0, wQ.useState)((() => null !== WQ && void 0 !== WQ && WQ.answer && "settings" in WQ.answer ? WQ.answer.settings : null)), [FQ, PQ] = (0, wQ.useState)(!0), [gQ, JQ] = (0, wQ.useState)(null !== XQ), rQ = (0, wQ.useRef)(XQ);
+       rQ.current = XQ;
+       const IQ = (0, wQ.useRef)(0),
+         jQ = (0, wQ.useRef)(0),
+         BQ = (0, wQ.useRef)(!1),
+         yQ = (0, wQ.useRef)(!0),
+         VQ = (0, wQ.useCallback)((async WQ => {
+           const XQ = ++IQ.current,
+             wQ = await (null !== WQ && void 0 !== WQ ? WQ : qQ.b.getSocialSettings(QQ));
+           yQ.current && XQ === IQ.current && (JQ(!0), PQ(!1), "error" in wQ || zQ(wQ.settings))
+         }), [QQ]),
+         DQ = (0, wQ.useCallback)((() => {
+ ... (44 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L148-L149` → after: `L2202-L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L2202-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L2202-L2237) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L148-L149)

```diff
-       const ip = Li[pp];
-       if (void 0 === ip) throw new Error(`Invalid sound name ${pp} (not in any sprite sheet)`);
+       const WQ = qQ.get(QQ);
+       if (!WQ) return [];
+       const XQ = Date.now();
+       for (const [qQ, TQ] of WQ) XQ - TQ >= wQ.i && WQ.delete(qQ);
+       return [...WQ.keys()]
+     }
+   },
+   37008: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       const XQ = WQ.toLowerCase();
+       for (const wQ of QQ)
+         if (wQ.toLowerCase() === XQ) return !0;
+       return !1
+     }
+ 
+     function qQ(QQ, WQ, XQ) {
+ ... (20 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L154-L155` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L2242) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L154-L155)

```diff
-       if (!(pp in Si)) throw new Error("Invalid spriteTrack name");
-       return ip in Si[pp].sprite
+       return null === QQ || void 0 === QQ || !QQ.canManage || wQ(QQ.whitelist, WQ) ? "none" : "whitelist" === QQ.visibility ? "required" : "quiet"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L159-L160` → after: `L2246-L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L2246-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L2246-L2250) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L159-L160)

```diff
-       if (!(pp in Si)) throw new Error("Invalid spritesheet name");
-       return Si[pp]
+       if (null === QQ) return !0;
+       const {
+         visibility: WQ
+       } = QQ;
+       return "public" === WQ || "unlisted" === WQ || "whitelist" === WQ && QQ.canManage
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L163-L164` → after: `L2253-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L2253-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/227.js#L2253-L2302) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/227.js#L163-L164)

```diff
-     function yi(pp) {
-       return pp[Math.floor(Math.random() * pp.length)]
+     function FQ(QQ, WQ, XQ) {
+       if (XQ) {
+         const XQ = WQ.filter((WQ => !wQ(QQ.whitelist, WQ)));
+         return {
+           ...QQ,
+           whitelist: [...QQ.whitelist, ...XQ]
+         }
+       }
+       return {
+         ...QQ,
+         whitelist: QQ.whitelist.filter((QQ => !wQ(WQ, QQ)))
+       }
+     }
+ 
+     function PQ(QQ, WQ) {
+       const XQ = [];
+ ... (34 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/228.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/228.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L4)

```diff
-   39842: (pp, ip, cp) => {
+   37169: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L40-L195` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L8) · [Before (L40-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L40-L195)

```diff
-       h: () => wp
-     });
-     var Op = cp(34),
-       op = cp(40806),
-       Ip = cp(40783),
-       Sp = cp(40813),
-       xp = cp(40792),
-       Lp = cp(40818),
-       Yp = cp(40837);
- 
-     function Dp(pp) {
-       var ip, cp;
-       const Op = (0, Ip.k)();
-       return Op ? null === (ip = (0, op.d)(Op.api, pp[0], pp[1], pp[2])) || void 0 === ip || null === (cp = ip.persisted) || void 0 === cp ? void 0 : cp.shared : void 0
-     }
- 
- ... (140 more removed lines; see GitHub link above)
+       h: () => vQ,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L198-L210` → after: `L11-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L11-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L11-L59) · [Before (L198-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L198-L210)

```diff
-     var Op = cp(40769),
-       op = cp(4886),
-       Ip = cp(40783);
- 
-     function Sp() {
-       var pp;
-       const ip = null === (pp = (0, Ip.k)()) || void 0 === pp ? void 0 : pp.api.localId;
-       return void 0 === ip || ip === Op.Nc ? null : String(ip)
-     }
- 
-     function xp(pp) {
-       const ip = (0, Ip.k)();
-       if (null !== ip) return pp(ip);
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(61),
+       zQ = XQ(78),
+       sQ = XQ(1421),
+       FQ = XQ(1507),
+       PQ = XQ(1416),
+       gQ = XQ(1318),
+       JQ = XQ(1226),
+       rQ = XQ(37172),
+       IQ = XQ(1145);
+ 
+     function jQ(QQ) {
+       const [WQ, XQ] = (0, TQ.useState)((() => (0, rQ.p)(QQ)));
+       return (0, TQ.useEffect)((() => (XQ((0, rQ.p)(QQ)), (0, rQ.G)((() => {
+         XQ((0, rQ.p)(QQ))
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L212-L234` → after: `L61-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L61-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L61-L211) · [Before (L212-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L212-L234)

```diff
-       const Op = (0, op.p)((() => {
-         const ip = (0, Ip.k)();
-         null !== ip && null === cp && (Op(), cp = pp(ip))
-       }));
-       return () => {
-         var pp;
-         Op(), null === (pp = cp) || void 0 === pp || pp()
-       }
-     }
- 
-     function Lp(pp, ip, cp) {
-       return {
-         current: () => {
-           const cp = (0, Ip.k)();
-           return null === cp ? ip : pp(cp)()
-         },
- ... (7 more removed lines; see GitHub link above)
+       FQ ? IQ = () => {
+         null === sQ || void 0 === sQ || sQ(), (0, rQ.v)(qQ, TQ)
+       } : PQ && (IQ = () => {
+         (0, rQ.l)(qQ)
+       }), (0, gQ.k)("popup", null !== JQ && void 0 !== JQ ? JQ : XQ, IQ, WQ && null !== JQ, null, FQ ? void 0 : "controller:menusSkipTutorial")
+     }
+ 
+     function pQ(QQ) {
+       let {
+         tutorial: WQ,
+         step: XQ,
+         text: wQ,
+         waitForClick: qQ = !1,
+         onPrevious: TQ
+       } = QQ;
+       const {
+ ... (135 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L236` → after: `L213-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L213-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L213-L273) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L236)

```diff
-       }
+       }), [WQ, gQ]);
+       const bQ = (0, TQ.useCallback)((QQ => {
+         yQ(QQ), wQ && (wQ.current = QQ)
+       }), [yQ, wQ]);
+       return (0, zQ.createPortal)((0, IQ.jsxs)(IQ.Fragment, {
+         children: [pQ && (0, IQ.jsx)(UQ, {
+           rect: pQ,
+           margin: JQ
+         }), (0, IQ.jsxs)("div", {
+           ref: bQ,
+           ...BQ({
+             className: qQ()("tooltip-container SmallTextLight TutorialStep", FQ)
+           }),
+           children: [rQ, (0, IQ.jsx)("div", {
+             ...jQ({
+               className: "tooltip-arrow"
+ ... (45 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L239` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L276) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L239)

```diff
-   40849: (pp, ip, cp) => {
+   36906: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L241-L551` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L278-L281) · [Before (L241-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L241-L551)

```diff
-       e: () => Yp
-     });
-     var Op = cp(40783),
-       op = cp(40857),
-       Ip = cp(40865);
- 
-     function Sp() {
-       var pp, ip;
-       return null !== (pp = null === (ip = (0, Op.k)()) || void 0 === ip ? void 0 : ip.itemBridgeSources) && void 0 !== pp ? pp : Ip.d
-     }
- 
-     function xp(pp) {
-       return {
-         current: () => Sp().states[pp].current(),
-         watch: ip => (0, op.i)((cp => {
-           const Op = cp.itemBridgeSources.states[pp];
- ... (295 more removed lines; see GitHub link above)
+       B: () => DQ,
+       b: () => TQ,
+       f: () => BQ,
+       h: () => yQ,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L780-L781` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L284-L285) · [Before (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L780-L781)

```diff
-       o: () => Pp,
-       q: () => Wp,
+       r: () => VQ,
+       t: () => JQ,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L785-L789` → after: `L289-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L289-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L289-L312) · [Before (L785-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L785-L789)

```diff
-     class Op extends Error {
-       constructor(pp) {
-         super(`the join's code did not load: ${pp instanceof Error?pp.message:String(pp)}`, {
-           cause: pp
-         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === pp || void 0 === pp ? void 0 : pp.request
+     var wQ = XQ(26),
+       qQ = XQ(31);
+     const TQ = "clientGameInventoryButtonsChanged",
+       zQ = new Map;
+ 
+     function sQ() {
+       return [...zQ.values()].sort(((QQ, WQ) => {
+         var XQ, wQ;
+         return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
+       }))
+     }
+     let FQ = null;
+ 
+     function PQ(QQ) {
+       FQ = QQ
+     }
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L791` → after: `L314-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L314-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L314-L460) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L791)

```diff
-     }
+       QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
+     }
+ 
+     function rQ() {
+       return gQ
+     }
+ 
+     function IQ() {
+       return sQ().filter((QQ => QQ.panel && !QQ.disabled))
+     }
+ 
+     function jQ(QQ) {
+       const WQ = IQ(),
+         XQ = WQ.findIndex((QQ => QQ.id === FQ));
+       return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
+     }
+ ... (131 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L795` → after: `L463-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L463-L464) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L795)

```diff
-     const xp = [];
+     const jQ = new Set,
+       BQ = new Set;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L797-L802` → after: `L466-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L466-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L466-L485) · [Before (L797-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L797-L802)

```diff
- 
-     function Yp(pp, ip) {
-       try {
-         pp(ip)
-       } catch (cp) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", cp)
+     const VQ = new Set,
+       DQ = new Set;
+ 
+     function pQ() {
+       DQ.forEach((QQ => {
+         QQ()
+       }))
+     }
+ 
+     function GQ() {
+       if (!rQ) {
+         const QQ = wQ.i.getItem(PQ);
+         rQ = {
+           codeBlockIntroShown: !1,
+           worldCodeIntroShown: !1,
+           welcomeComplete: !1,
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L811-L828` → after: `L491-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L491-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/228.js#L491-L584) · [Before (L811-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/228.js#L811-L828)

```diff
-       xp.push(pp), null !== Lp && Yp(pp, Lp)
-     }
- 
-     function Pp(pp) {
-       return op ??= Promise.all([cp.e(73), cp.e(98), cp.e(226), cp.e(78), cp.e(227), cp.e(201), cp.e(97), cp.e(246), cp.e(273), cp.e(199), cp.e(214), cp.e(191), cp.e(198), cp.e(193), cp.e(144), cp.e(88), cp.e(122), cp.e(252), cp.e(57)]).then((() => cp(42870))).then((ip => {
-         ip.loadAudio(pp), Lp = ip;
-         for (const pp of xp) Yp(pp, ip);
-         return ip
-       })).catch((pp => {
-         throw op = null, pp
-       })), op
-     }
-     async function Wp(pp, ip) {
-       try {
-         const cp = await Pp(pp);
-         await cp.loadClientGame(ip)
- ... (2 more removed lines; see GitHub link above)
+       const WQ = GQ();
+       WQ[QQ] || (rQ = {
+         ...WQ,
+         [QQ]: !0
+       }, wQ.i.setItem(PQ, rQ))
+     }
+ 
+     function bQ(QQ) {
+       return "docsOverview" === QQ ? TQ : "aiHelperOverview" === QQ ? zQ : IQ ? qQ[IQ] : []
+     }
+ 
+     function vQ(QQ) {
+       return ("worldCodeButton" !== QQ || !GQ().worldCodeIntroShown) && !VQ.has(QQ)
+     }
+ 
+     function dQ(QQ) {
+ ... (78 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L4)

```diff
-   37134: (pp, ip, cp) => {
+   36906: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L7` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L6-L15) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L6-L7)

```diff
-       d: () => ep,
-       g: () => dp
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
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L26` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L17-L20) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L9-L26)

```diff
-     var Op = cp(4355),
-       op = cp(1476),
-       Ip = cp(62),
-       Sp = cp(6605),
-       xp = cp(4343),
-       Lp = cp(1308),
-       Yp = cp(1956),
-       Dp = cp(1929),
-       Ap = cp(1480),
-       Pp = cp(1201),
-       Wp = cp(37142),
-       yp = cp(1049),
-       Up = cp.n(yp),
-       wp = cp(1334),
-       vp = cp(1060),
-       tp = cp(1295),
- ... (2 more removed lines; see GitHub link above)
+     var wQ = XQ(26),
+       qQ = XQ(31);
+     const TQ = "clientGameInventoryButtonsChanged",
+       zQ = new Map;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L29-L31` → after: `L23-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L23-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L23-L28) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L29-L31)

```diff
-       const {
-         t: pp
-       } = (0, Pp.H)(), [ip, cp] = (0, Ip.useState)(!1), [yp, ep] = (0, Ip.useState)(null), [kp, mp] = (0, Ip.useState)(1), [Rp, qp] = (0, Ip.useState)(!1), [Mp, Cp] = (0, Ip.useState)(!1), Ep = (0, Ip.useRef)(0), Xp = (0, Ip.useRef)(!1), lp = (0, Ip.useRef)(!1), Qp = (0, Ip.useRe … [truncated]
+       return [...zQ.values()].sort(((QQ, WQ) => {
+         var XQ, wQ;
+         return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
+       }))
+     }
+     let FQ = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L33-L35` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L30-L40) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L33-L35)

```diff
-       function Bp() {
-         const pp = null !== yp && void 0 !== yp ? yp : "Rested Speed";
-         Yp.gameBridge.send("wakeUp", Mp ? pp : null), Jp.current = null, cp(!1), ep(null), mp(1), qp(!1), Cp(!1)
+     function PQ(QQ) {
+       FQ = QQ
+     }
+     let gQ = !1;
+ 
+     function JQ(QQ) {
+       gQ = !0;
+       try {
+         QQ.onClick()
+       } finally {
+         gQ = !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L38-L139` → after: `L45-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L45-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L45-L79) · [Before (L38-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L38-L139)

```diff
-       function Np() {
-         return !Rp && (Bp(), !0)
-       }
-       return (0, op.f)("PlayerPhysicsTypeUpdate", (pp => {
-         pp !== Jp.current && (Jp.current = pp, pp === Sp.l.SLEEPING ? (lp.current || (Ep.current = Yp.gameBridge.lookup("cameraZoom", null), lp.current = !0), Xp.current = !0, Yp.gameBridge.send("setCameraZoom", 3), cp(!0), mp(function() {
-           for (const pp of Yp.gameBridge.lookup("blocksStandingOn", null)) {
-             if (Wp.c.leafBeds.includes(pp)) return console.log(`Found leaf bed: ${pp}`), 1;
-             if (Wp.c.woolBeds.includes(pp)) return console.log(`Found woold bed: ${pp}`), 2;
-             if (Wp.c.strongBeds.includes(pp)) return console.log(`Found strong bed ${pp}`), 3
-           }
-           return 1
-         }())) : (lp.current = !1, cp(!1), ep(null), mp(1)))
-       })), (0, Ip.useEffect)((() => () => {
-         (0, Lp.r)(dp)
-       }), []), (0, Ip.useEffect)((() => {
-         ip ? (0, Lp.s)(dp) : ((0, Lp.r)(dp), Xp.current && (Yp.gameBridge.send("setCameraZoom", Ep.current), Xp.current = !1))
- ... (86 more removed lines; see GitHub link above)
+     function rQ() {
+       return gQ
+     }
+ 
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
+ ... (19 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L161` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L82) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L161)

```diff
-   40758: (pp, ip, cp) => {
+   36900: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L163` → after: `L84-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L84-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L84-L92) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L163)

```diff
-       d: () => sp
+       A: () => gQ,
+       c: () => sQ,
+       g: () => DQ,
+       j: () => yQ,
+       n: () => VQ,
+       q: () => rQ,
+       s: () => PQ,
+       u: () => BQ,
+       y: () => IQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L165-L193` → after: `L94-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L94-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L94-L111) · [Before (L165-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L165-L193)

```diff
-     var Op = cp(25),
-       op = cp(34),
-       Ip = cp(4371),
-       Sp = cp(322),
-       xp = cp(1650),
-       Lp = cp(8310),
-       Yp = cp(4379),
-       Dp = cp(8835),
-       Ap = cp(8336),
-       Pp = cp(8320),
-       Wp = cp(8338),
-       yp = cp(1419),
-       Up = cp(1698),
-       wp = cp(8346),
-       vp = cp(8793),
-       tp = cp(8919),
- ... (13 more removed lines; see GitHub link above)
+     var wQ = XQ(26),
+       qQ = XQ(31),
+       TQ = XQ(1335),
+       zQ = XQ(36906);
+     const sQ = "clientGameUiChanged";
+     let FQ = null;
+ 
+     function PQ() {
+       return FQ
+     }
+ 
+     function gQ(QQ, WQ) {
+       const XQ = {
+         content: QQ,
+         menu: WQ
+       };
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L195-L196` → after: `L113-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L113-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L113-L122) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L195-L196)

```diff
-       reset() {
-         this.lostAtMs = null
+     }
+     let JQ = null;
+ 
+     function rQ() {
+       return JQ
+     }
+ 
+     function IQ(QQ) {
+       return JQ = QQ, () => {
+         JQ === QQ && (JQ = null)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L200-L201` → after: `L160-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L160-L162) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L200-L201)

```diff
-       constructor(pp, ip) {
-         this.press = pp, this.release = ip, this.downAtMs = null, this.token = null, this.latched = !1
+       constructor(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
+         this.pool = QQ, this.origin = WQ, this.count = 0, this.free = []
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L203-L205` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L164-L167) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L203-L205)

```diff
-       update(pp, ip, cp, Op) {
-         if (pp && null === this.downAtMs) return this.downAtMs = cp, this.latched = Op, void(this.token = this.press(Op));
-         null !== this.downAtMs && (this.latched ? pp && this.end() : !ip && cp - this.downAtMs >= 40 && this.end())
+       take() {
+         var QQ;
+         const WQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.count++;
+         return WQ >= this.pool.yJ && this.pool.grow(Math.max(2 * this.pool.yJ, WQ + 1)), this.hide(WQ), WQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L207-L208` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L169-L170) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L207-L208)

```diff
-       isLatched() {
-         return null !== this.downAtMs && this.latched
+       release(QQ) {
+         this.hide(QQ), this.free.push(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L210-L211` → after: `L172-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L172-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L172-L178) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L210-L211)

```diff
-       unlatch() {
-         this.latched = !1
+       write(QQ, WQ, XQ, qQ) {
+         const {
+           records: TQ
+         } = this.pool, {
+           origin: zQ
+         } = this, sQ = QQ * wQ.b;
+         TQ[sQ] = WQ - zQ[0], TQ[sQ + 1] = XQ - zQ[1], TQ[sQ + 2] = qQ - zQ[2], TQ[sQ + wQ.c] = 0, this.pool.markDirty(QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L213-L214` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L180-L181) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L213-L214)

```diff
-       cancel() {
-         null !== this.downAtMs && this.end()
+       hide(QQ) {
+         this.pool.records[QQ * wQ.b + wQ.c] = 1, this.pool.markDirty(QQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L216-L218` → after: `L183-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L183-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L183-L187) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L216-L218)

```diff
-       end() {
-         const pp = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(pp)
+       commit() {
+         this.pool.commit(this.count)
+       }
+       dispose() {
+         this.pool.dispose()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L221-L492` → after: `L190-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L190-L192) · [Before (L221-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L221-L492)

```diff
-     const Cp = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       Ep = pp => {
-         let ip = null;
-         const cp = new Rp.e,
-           Op = () => {
-             ip && (((pp, ip, cp) => {
-               switch (cp.kind) {
-                 case "reload":
-                   return void ip.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void ip.specialActionUp(cp.action);
-                 case "customButton":
-                   return void ep.gameBridge.send("pressCustomButton", {
- ... (256 more removed lines; see GitHub link above)
+     class zQ {
+       constructor(QQ, WQ, XQ) {
+         this.api = QQ, this.model = WQ, this.initialCapacity = XQ, this.kinds = new Map, this.origin = [0, 0, 0]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L494-L524` → after: `L194-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L194-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L194-L201) · [Before (L494-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L494-L524)

```diff
-   },
-   40751: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => yp,
-       e: () => wp,
-       i: () => Wp
-     });
-     var Op = cp(1308),
-       op = cp(4371),
-       Ip = cp(8900),
-       Sp = cp(37134),
-       xp = cp(1749),
-       Lp = cp(1198),
-       Yp = cp(8346),
-       Dp = cp(8843),
-       Ap = cp(8928);
- ... (15 more removed lines; see GitHub link above)
+       kindOf(QQ) {
+         let WQ = this.kinds.get(QQ);
+         if (void 0 === WQ) {
+           const XQ = this.api.createInstancePool({
+             ...this.model,
+             item: QQ
+           }, this.initialCapacity);
+           null === XQ || void 0 === XQ || XQ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), WQ = XQ && new TQ(XQ, this.origin), this.kinds.set(QQ, WQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L527-L542` → after: `L205-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L205-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L205-L212) · [Before (L527-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L527-L542)

```diff
-   },
-   40747: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op,
-       f: () => Lp,
-       h: () => xp,
-       l: () => Dp,
-       m: () => Sp,
-       o: () => Ip,
-       q: () => Yp,
-       t: () => Ap
-     });
-     var Op = cp(8298);
-     class op {
-       constructor() {
-         this.fullTiltSinceMs = null
+       follow(QQ) {
+         const {
+           origin: WQ
+         } = this;
+         if (Math.abs(QQ[0] - WQ[0]) <= 512 && Math.abs(QQ[1] - WQ[1]) <= 512 && Math.abs(QQ[2] - WQ[2]) <= 512) return !1;
+         WQ[0] = Math.floor(QQ[0]), WQ[1] = Math.floor(QQ[1]), WQ[2] = Math.floor(QQ[2]);
+         for (const XQ of this.kinds.values()) null === XQ || void 0 === XQ || XQ.pool.setOrigin(WQ[0], WQ[1], WQ[2]);
+         return !0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L544-L550` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L214-L215) · [Before (L544-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L544-L550)

```diff
-       update(pp, ip, cp) {
-         const op = (0, Op.h)(pp, ip.lookDeadzone);
-         if (Math.hypot(op.x, op.y) < .9 || Math.abs(op.x) < Math.abs(op.y)) return this.fullTiltSinceMs = null, 1;
-         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = cp);
-         const Ip = (Sp = ip.lookSensitivityX, Math.min(1, 100 / Sp));
-         var Sp;
-         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (cp - this.fullTiltSinceMs - 250 * Ip) / (200 * Ip)))
+       commit() {
+         for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.commit()
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L552-L553` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L217-L219) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L552-L553)

```diff
-       reset() {
-         this.fullTiltSinceMs = null
+       dispose() {
+         for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.dispose();
+         this.kinds.clear()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L639` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L223) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L639)

```diff
-   40763: (pp, ip, cp) => {
+   38801: (QQ, WQ, XQ) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L641-L642` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L225-L227) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L641-L642)

```diff
-       d: () => op,
-       g: () => Op
+       e: () => zQ,
+       f: () => sQ,
+       i: () => FQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L644-L681` → after: `L229-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L229-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L229-L256) · [Before (L644-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L644-L681)

```diff
-     const Op = pp => {
-       let {
-         mode: ip,
-         sneakHeld: cp,
-         sneakPressed: Op,
-         sneakTogglePressed: op,
-         descending: Ip,
-         canCrouch: Sp,
-         toggled: xp
-       } = pp;
-       return Sp ? Ip ? {
-         crouchHeld: cp,
-         toggled: !1
-       } : "hold" === ip ? {
-         crouchHeld: cp,
-         toggled: op ? !xp : xp
- ... (22 more removed lines; see GitHub link above)
+     const wQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       qQ = [0, 1, 2, 0, 2, 3],
+       TQ = [4, 5];
+ 
+     function zQ(QQ, WQ, XQ, wQ, qQ) {
+       for (let zQ = 0; zQ < 6; zQ++) TQ.includes(zQ) === qQ && PQ(QQ, WQ, XQ, wQ, zQ)
+     }
+ 
+     function sQ(QQ, WQ, XQ, wQ) {
+       for (let qQ = 0; qQ < 6; qQ++) PQ(QQ, WQ, XQ, wQ, qQ)
+     }
+ 
+     function FQ(QQ, WQ, XQ, TQ, zQ) {
+       for (let sQ = 0; sQ < 6; sQ++)
+         for (const FQ of [0, 1]) {
+           const [PQ, gQ, JQ] = [FQ + 2, FQ + 1, (FQ + 3) % 4], rQ = QQ.length / 3;
+ ... (12 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L683` → after: `L258-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L258-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L258-L264) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L683)

```diff
-       }
+     }
+ 
+     function PQ(QQ, WQ, XQ, TQ, zQ) {
+       let [sQ, FQ, PQ] = XQ, [gQ, JQ, rQ] = TQ;
+       const IQ = QQ.length / 3;
+       for (let qQ = 4 * zQ; qQ < 4 * zQ + 4; qQ++) QQ.push(wQ[3 * qQ] * gQ / 2 + sQ, wQ[3 * qQ + 1] * JQ / 2 + FQ, wQ[3 * qQ + 2] * rQ / 2 + PQ);
+       for (const wQ of qQ) WQ.push(IQ + wQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L686-L691` → after: `L267-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L267-L269) · [Before (L686-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L686-L691)

```diff
-   40736: (pp, ip, cp) => {
-     cp(8979)
-   },
-   40739: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Hp
+   38774: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => yD
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L693-L704` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L271) · [Before (L693-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L693-L704)

```diff
-     var Op = cp(34),
-       op = cp(8900),
-       Ip = cp(8917),
-       Sp = cp(8310),
-       xp = cp(8336),
-       Lp = cp(8320),
-       Yp = cp(40747),
-       Dp = cp(40751),
-       Ap = cp(8346),
-       Pp = cp(8298),
-       Wp = cp(8843),
-       yp = cp(8928);
+     var wQ = XQ(61);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L706-L709` → after: `L273-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L273-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L273-L414) · [Before (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L706-L709)

```diff
-         isOpen: op.h,
-         openButton: () => (0, Sp.g)("emoteWheel"),
-         aim: pp => {
-           Op.m.GA("emoteWheelPadAim", pp)
+         nameKey: "tierBurner",
+         cost: [],
+         islandRadius: 11.5,
+         machineAllowance: 16,
+         beltAllowance: 64,
+         newDeposits: [],
+         unlocks: [],
+         reward: null
+       }, {
+         nameKey: "tierCurrent",
+         cost: [{
+           item: "Iron Bar",
+           amount: 40
+         }, {
+           item: "Glass",
+           amount: 12
+ ... (126 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L711-L712` → after: `L416-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L416-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L416-L447) · [Before (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L711-L712)

```diff
-         commit: pp => {
-           Op.m.GA("requestEmoteWheelPadCommit", pp)
+         islandRadius: 46,
+         machineAllowance: 248,
+         beltAllowance: 912,
+         newDeposits: [],
+         unlocks: ["Belt Tunnel"],
+         reward: null
+       }, {
+         nameKey: "tierStage2",
+         stage: 2,
+         cost: [{
+           item: "Star Alloy",
+           amount: 12
+         }, {
+           item: "Diamond",
+           amount: 6
+         }, {
+ ... (16 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L714-L716` → after: `L449-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L449-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L449-L457) · [Before (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L714-L716)

```diff
-         close: () => {
-           Op.m.GA("requestEmoteWheelClose")
-         }
+         islandRadius: 50,
+         machineAllowance: 280,
+         beltAllowance: 1072,
+         newDeposits: [{
+           block: "Gold Deposit",
+           offset: [-8, 0, 46]
+         }],
+         unlocks: [],
+         reward: "Iron Trophy"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L718-L721` → after: `L459-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L459-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L459-L480) · [Before (L718-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L718-L721)

```diff
-         isOpen: Wp.d,
-         openButton: () => (0, Sp.g)("chat"),
-         aim: pp => {
-           Op.m.GA(Wp.h, pp)
+         nameKey: "tierStage3",
+         stage: 3,
+         cost: [{
+           item: "Star Alloy",
+           amount: 16
+         }, {
+           item: "Logic Board",
+           amount: 48
+         }, {
+           item: "Motor",
+           amount: 32
+         }, {
+           item: "Comet Core",
+           amount: 2
+         }],
+         charge: {
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L723-L724` → after: `L482-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L482-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L482-L510) · [Before (L723-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L723-L724)

```diff
-         commit: pp => {
-           Op.m.GA(Wp.m, pp)
+         islandRadius: 54,
+         machineAllowance: 316,
+         beltAllowance: 1248,
+         newDeposits: [],
+         unlocks: [],
+         reward: "Gold Trophy"
+       }, {
+         nameKey: "tierStage4",
+         stage: 4,
+         cost: [{
+           item: "Star Alloy",
+           amount: 24
+         }, {
+           item: "Diamond",
+           amount: 12
+         }, {
+ ... (13 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L726-L727` → after: `L512-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L512-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L512-L546) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L726-L727)

```diff
-         close: () => {
-           Op.m.GA(Wp.l)
+         islandRadius: 58,
+         machineAllowance: 356,
+         beltAllowance: 1440,
+         newDeposits: [],
+         unlocks: [],
+         reward: "Diamond Trophy"
+       }, {
+         nameKey: "tierStage5",
+         stage: 5,
+         cost: [{
+           item: "Star Alloy",
+           amount: 32
+         }, {
+           item: "Voltite Cell",
+           amount: 64
+         }, {
+ ... (19 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L729` → after: `L548-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L548-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L548-L553) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L729)

```diff
-         keptOpenBy: [Dp.b]
+         islandRadius: 62,
+         machineAllowance: 400,
+         beltAllowance: 1648,
+         newDeposits: [],
+         unlocks: ["Forge Hopper", "Starframe"],
+         reward: "Moonstone Trophy"
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L731-L734` → after: `L555-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L555-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L555-L579) · [Before (L731-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L731-L734)

```diff
-         isOpen: yp.x,
-         openButton: () => (0, Sp.g)("actionButton"),
-         aim: pp => {
-           Op.m.GA(yp.e, pp)
+         nameKey: "tierIsotope",
+         reactorTier: 1,
+         cost: [{
+           item: "Uranium Grit",
+           amount: 256
+         }, {
+           item: "Star Alloy",
+           amount: 8
+         }, {
+           item: "Comet Core",
+           amount: 3
+         }, {
+           item: "Glass",
+           amount: 16
+         }],
+         charge: {
+ ... (9 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L736-L737` → after: `L581-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L581-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L581-L615) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L736-L737)

```diff
-         commit: pp => {
-           Op.m.GA(yp.l, pp)
+         islandRadius: 66,
+         machineAllowance: 448,
+         beltAllowance: 1872,
+         newDeposits: [{
+           block: "Uranium Deposit",
+           offset: [45, 0, 44]
+         }, {
+           block: "Uranium Deposit",
+           offset: [-44, 0, -45]
+         }],
+         unlocks: ["Atomic Bench", "Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Heat Exchanger", "Synthesizer", "Containment Plate", "Battery Cell"],
+         reward: null
+       }, {
+         nameKey: "tierFission",
+         reactorTier: 2,
+         cost: [{
+ ... (19 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L739-L745` → after: `L617-L16709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L617-L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L617-L16709) · [Before (L739-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L739-L745)

```diff
-         close: () => {
-           Op.m.GA(yp.i)
-         }
-       }],
-       wp = () => {
-         var pp;
-         return null !== (pp = Up.find((pp => pp.isOpen()))) && void 0 !== pp ? pp : null
+         islandRadius: 70,
+         machineAllowance: 500,
+         beltAllowance: 2112,
+         newDeposits: [{
+           block: "Uranium Deposit",
+           offset: [0, 0, 67]
+         }],
+         unlocks: ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Jet Chestplate", "Mob Farm", "Mob Cage"],
+         reward: null
+       }, {
+         nameKey: "tierCritical",
+         reactorTier: 3,
+         cost: [{
+           item: "Uranium Pellet",
+           amount: 24
+         }, {
+ ... (16077 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L747-L751` → after: `L16711-L17128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR16711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L16711-L17128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L16711-L17128) · [Before (L747-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L747-L751)

```diff
-       vp = pp => (0, Sp.K)(pp.openButton()),
-       tp = (pp, ip) => !(0, Pp.D)(pp.frame.values, ip),
-       Hp = () => {
-         let pp = null,
-           ip = !1,
+       CV = 2 * Math.PI / 3;
+     class uV {
+       constructor() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RV;
+         this.style = QQ, this.particles = null, this.points = new Float32Array(800), this.budget = AV, this.lastMs = 0
+       }
+       static blade() {
+         return new uV(EV)
+       }
+       KV(QQ, WQ) {
+         const XQ = Math.min(WQ.arcStruck, WQ.arcPoints.length);
+         this.draw(QQ, [WQ.arcFrom, ...WQ.arcPoints], WQ.arcPoints.slice(0, XQ))
+       }
+       onBlade(QQ, WQ) {
+         const [XQ, wQ, qQ] = WQ.bladeCentre, [TQ, zQ] = WQ.bladeFacing, sQ = XQ - 1.5 * TQ, FQ = qQ - 1.5 * zQ, PQ = Math.atan2(zQ, TQ), gQ = [];
+         for (let JQ = 0; JQ <= 8; JQ++) {
+ ... (402 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L753-L763` → after: `L17130-L17420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR17130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L17130-L17420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L17130-L17420) · [Before (L753-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L753-L763)

```diff
-         return xp.d.register({
-           name: "wheel",
-           isActive: () => null !== wp(),
-           peek: () => {
-             const pp = wp();
-             return pp && vp(pp) ? null : {
-               over: "gameplay",
-               stick: (0, Lp.h)().swapSticks ? "right" : "left"
-             }
-           },
-           onFrame: Op => {
+         for (let wQ = 0; wQ < QQ.children.length; wQ++) {
+           const qQ = QQ.children[wQ],
+             TQ = qQ.classList.contains("DirectionArrowLabel");
+           XQ ||= TQ, (TQ || qQ.classList.contains("DirectionArrowDistance")) && (WQ = Math.max(WQ, this.halfWidthOf(qQ)))
+         }
+         return {
+           halfWidth: WQ,
+           labelled: XQ
+         }
+       }
+       halfWidthOf(QQ) {
+         let WQ = this.halfWidths.get(QQ);
+         return void 0 === WQ && (WQ = QQ.offsetWidth / 2, this.halfWidths.set(QQ, WQ), this.sizes.observe(QQ), this.labels.add(QQ)), WQ
+       }
+       forgetGoneLabels() {
+         for (const QQ of this.labels) QQ.isConnected || (this.sizes.unobserve(QQ), this.halfWidths.delete(QQ), this.labels.delete(QQ))
+ ... (275 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L765-L777` → after: `L17422-L17480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR17422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L17422-L17480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L17422-L17480) · [Before (L765-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L765-L777)

```diff
-             const Pp = wp();
-             if (!Pp) return;
-             if (null !== (0, Ap.d)([...Dp.i, ...null !== (op = Pp.keptOpenBy) && void 0 !== op ? op : []])) return void Pp.close();
-             const Wp = Pp.openButton(),
-               yp = (0, Yp.h)(Op.frame, (0, Lp.h)().swapSticks),
-               Up = vp(Pp) ? yp.move : yp.look;
-             pp !== Pp ? (pp = Pp, ip = !tp(Op, Wp) || Math.hypot(Up.x, Up.y) >= Ip.z, cp = !1) : cp && (cp = !1, tp(Op, Wp) && (ip = !1)), Pp.aim(Up);
-             const Hp = (0, Sp.g)("menuConfirm"),
-               dp = (0, Sp.g)("menuBack");
-             return Op.wasPressed(dp) ? (xp.d.consumeButton(dp), void Pp.close()) : Op.wasPressed(Hp) || Op.wasPressed(Wp) ? (xp.d.consumeButton(Hp), xp.d.consumeButton(Wp), void Pp.commit(!1)) : void(ip && tp(Op, Wp) && (ip = !1, Pp.commit(!0)))
-           },
-           onDeactivate: () => {
-             cp = null !== pp && wp() === pp, cp || (pp = null, ip = !1)
+             const qQ = eQ(null === (wQ = WQ.at(XQ)) || void 0 === wQ ? void 0 : wQ.item);
+             return null === qQ ? {
+               key: `${IV}lookFarmEmpty`
+             } : {
+               key: QQ.blockIdToBlockName(QQ.getBlockId(XQ[0], XQ[1], XQ[2])).endsWith("|Running") ? `${IV}lookFarmRunning` : `${IV}lookFarmWaiting`,
+               keys: {
+                 mob: oQ(qQ)
+               }
+             }
+           }(yQ, lQ, WQ) : XW.line(QQ, WQ),
+           version: () => XW.version() + lQ.version()
+         }, (QQ => Yj(uQ.all(), QQ, (QQ => uj(yQ, QQ)))), (() => GQ.get().tier)),
+         qW = new CB,
+         TW = new iV,
+         zW = new uV,
+         sW = uV.blade(),
+ ... (43 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L779` → after: `L17482-L17925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR17482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L17482-L17925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/229.js#L17482-L17925) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/229.js#L779)

```diff
-         })
+           pW.push((0, pq.A)((0, wQ.createElement)(wQ.Fragment, null, (0, wQ.createElement)(DI, {
+             controller: IQ
+           }), (0, wQ.createElement)(gj, {
+             store: lQ
+           }), (0, wQ.createElement)(DV, {
+             store: wW
+           }), (0, wQ.createElement)(nI, {
+             store: GQ
+           }), (0, wQ.createElement)(OI, {
+             store: UQ
+           }), (0, wQ.createElement)(MI, {
+             store: vQ
+           }), (0, wQ.createElement)(wj, {
+             store: PW
+           }), (0, wQ.createElement)(yB, {
+             store: xQ
+ ... (428 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 1. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L4-L24` → after: `L4-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L4-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L4-L297) · [Before (L4-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L4-L24)

```diff
-   38690: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => yp
-     });
-     var Op = cp(195),
-       op = cp(37861);
-     const Ip = 1.2,
-       Sp = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
- ... (5 more removed lines; see GitHub link above)
+   36942: QQ => {
+     QQ.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (278 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L26-L38` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L299-L300) · [Before (L26-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L26-L38)

```diff
-       xp = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 1.8,
-           height: 2.6
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         Gx: .5,
-         bip: !1
+       toJSON() {
+         return this[this.model]()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L40-L52` → after: `L302-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L302-L306) · [Before (L40-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L40-L52)

```diff
-       Lp = {
-         physicsBodyDimensions: {
-           width: Op.g.Kw,
-           height: Op.g.Vw
-         },
-         hitBoxDimensions: {
-           width: Op.g.Kw + .4,
-           height: Op.g.Vw + .6
-         },
-         eyeHeight: Op.g.Vw * Op.g.playerEyeToHeightRatio,
-         rideHeight: Op.g.Vw - .3,
-         Gx: .5,
-         bip: !1
+       string(QQ) {
+         let WQ = this.model in wQ.to ? this : this.rgb();
+         WQ = WQ.round("number" === typeof QQ ? QQ : 1);
+         const XQ = 1 === WQ.valpha ? WQ.color : [...WQ.color, this.valpha];
+         return wQ.to[WQ.model](XQ)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L54-L66` → after: `L308-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L308-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L308-L311) · [Before (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L54-L66)

```diff
-       Yp = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: .95
-         },
-         hitBoxDimensions: {
-           width: 1.6,
-           height: 1.1
-         },
-         eyeHeight: .9,
-         rideHeight: .5,
-         Gx: .5,
-         bip: !1
+       percentString(QQ) {
+         const WQ = this.rgb().round("number" === typeof QQ ? QQ : 1),
+           XQ = 1 === WQ.valpha ? WQ.color : [...WQ.color, this.valpha];
+         return wQ.to.rgb.percent(XQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L68-L80` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L313-L314) · [Before (L68-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L68-L80)

```diff
-       Dp = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.8
-         },
-         hitBoxDimensions: {
-           width: 1.7,
-           height: 1.9
-         },
-         eyeHeight: 1.3,
-         rideHeight: 1.3,
-         Gx: .5,
-         bip: !1
+       array() {
+         return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L82-L94` → after: `L316-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L316-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L316-L325) · [Before (L82-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L82-L94)

```diff
-       Ap = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.1
-         },
-         eyeHeight: 1.9,
-         rideHeight: 1,
-         Gx: .5,
-         bip: !1
+       object() {
+         const QQ = {},
+           {
+             channels: WQ
+           } = qQ[this.model],
+           {
+             labels: XQ
+           } = qQ[this.model];
+         for (let wQ = 0; wQ < WQ; wQ++) QQ[XQ[wQ]] = this.color[wQ];
+         return 1 !== this.valpha && (QQ.alpha = this.valpha), QQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L96-L108` → after: `L327-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L327-L329) · [Before (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L96-L108)

```diff
-       Pp = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.4
-         },
-         eyeHeight: 2,
-         rideHeight: 1.8,
-         Gx: .5,
-         bip: !1
+       unitArray() {
+         const QQ = this.rgb().color;
+         return QQ[0] /= 255, QQ[1] /= 255, QQ[2] /= 255, 1 !== this.valpha && QQ.push(this.valpha), QQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L110-L623` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L331-L333) · [Before (L110-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L110-L623)

```diff
-       Wp = {
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: Op.g.Kw,
-             height: Op.g.Vw
-           },
-           hitBoxDimensions: {
-             width: Op.g.Kw + .4,
-             height: Op.g.Vw + .6
-           },
-           eyeHeight: Op.g.Vw * Op.g.playerEyeToHeightRatio,
-           rideHeight: Op.g.Vw - .1,
-           Gx: op.f.Gx,
-           bip: !0
-         },
- ... (498 more removed lines; see GitHub link above)
+       unitObject() {
+         const QQ = this.rgb().object();
+         return QQ.r /= 255, QQ.g /= 255, QQ.b /= 255, 1 !== this.valpha && (QQ.alpha = this.valpha), QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L625-L630` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L335-L336) · [Before (L625-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L625-L630)

```diff
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
+       round(QQ) {
+         return QQ = Math.max(QQ || 0, 0), new FQ([...this.color.map(PQ(QQ)), this.valpha], this.model)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L632-L637` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L338-L339) · [Before (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L632-L637)

```diff
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
-         lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       alpha(QQ) {
+         return void 0 !== QQ ? new FQ([...this.color, Math.max(0, Math.min(1, QQ))], this.model) : this.valpha
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L639-L644` → after: `L341-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L341-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L341-L364) · [Before (L639-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L639-L644)

```diff
-       "skyblock:forged:astral-sanguine-magmasteel": {
-         name: "Triune Flame",
-         lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       red: gQ("rgb", 0, JQ(255)),
+       green: gQ("rgb", 1, JQ(255)),
+       blue: gQ("rgb", 2, JQ(255)),
+       hue: gQ(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (QQ => (QQ % 360 + 360) % 360)),
+       saturationl: gQ("hsl", 1, JQ(100)),
+       lightness: gQ("hsl", 2, JQ(100)),
+       saturationv: gQ("hsv", 1, JQ(100)),
+       value: gQ("hsv", 2, JQ(100)),
+       chroma: gQ("hcg", 1, JQ(100)),
+       gray: gQ("hcg", 2, JQ(100)),
+       white: gQ("hwb", 1, JQ(100)),
+       wblack: gQ("hwb", 2, JQ(100)),
+       cyan: gQ("cmyk", 0, JQ(100)),
+       magenta: gQ("cmyk", 1, JQ(100)),
+       yellow: gQ("cmyk", 2, JQ(100)),
+       black: gQ("cmyk", 3, JQ(100)),
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L646-L651` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L366-L367) · [Before (L646-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L646-L651)

```diff
-       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
-         name: "Vulcan's Bane",
-         lore: "Forged in the heat of his own rift. It remembers the way down.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       hex(QQ) {
+         return void 0 !== QQ ? new FQ(QQ) : wQ.to.hex(this.rgb().round().color)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L653-L658` → after: `L369-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L369-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L369-L373) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L653-L658)

```diff
-       "skyblock:forged:magmasteel-astral-sanguine": {
-         name: "Comet's Wake",
-         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       hexa(QQ) {
+         if (void 0 !== QQ) return new FQ(QQ);
+         const WQ = this.rgb().round().color;
+         let XQ = Math.round(255 * this.valpha).toString(16).toUpperCase();
+         return 1 === XQ.length && (XQ = "0" + XQ), wQ.to.hex(WQ) + XQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L660-L665` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L375-L377) · [Before (L660-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L660-L665)

```diff
-       "skyblock:forged:magmasteel-sanguine-astral": {
-         name: "Vulcan's Ruin",
-         lore: "The Forge Mother made only one, then sat down for a long while.",
-         damageMultiplier: 1.6,
-         cooldownMultiplier: .83,
-         ability: "warcry"
+       rgbNumber() {
+         const QQ = this.rgb().color;
+         return (255 & QQ[0]) << 16 | (255 & QQ[1]) << 8 | 255 & QQ[2]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L667-L672` → after: `L379-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L379-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L379-L386) · [Before (L667-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L667-L672)

```diff
-       "skyblock:forged:magmasteel-iron-stone": {
-         name: "Forgehand",
-         lore: "A smith's sword: plain to look at, and it hits like a hammer.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .9,
-         ability: "quake"
+       luminosity() {
+         const QQ = this.rgb().color,
+           WQ = [];
+         for (const [XQ, wQ] of QQ.entries()) {
+           const QQ = wQ / 255;
+           WQ[XQ] = QQ <= .04045 ? QQ / 12.92 : ((QQ + .055) / 1.055) ** 2.4
+         }
+         return .2126 * WQ[0] + .7152 * WQ[1] + .0722 * WQ[2]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L674-L679` → after: `L388-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L388-L391) · [Before (L674-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L674-L679)

```diff
-       "skyblock:forged:sanguine-sanguine-sanguine": {
-         name: "Crimson Covenant",
-         lore: "It drinks, and so do you.",
-         damageMultiplier: 1.53,
-         cooldownMultiplier: .83,
-         ability: "bloodPact"
+       contrast(QQ) {
+         const WQ = this.luminosity(),
+           XQ = QQ.luminosity();
+         return WQ > XQ ? (WQ + .05) / (XQ + .05) : (XQ + .05) / (WQ + .05)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L681-L686` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L393-L395) · [Before (L681-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L681-L686)

```diff
-       "skyblock:forged:sanguine-astral-moonstone": {
-         name: "Nightbloom",
-         lore: "A red flower that only opens after dark.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "eclipseField"
+       level(QQ) {
+         const WQ = this.contrast(QQ);
+         return WQ >= 7 ? "AAA" : WQ >= 4.5 ? "AA" : ""
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L688-L693` → after: `L397-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L397-L399) · [Before (L688-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L688-L693)

```diff
-       "skyblock:forged:sanguine-iron-wood": {
-         name: "Butcher's Oath",
-         lore: "Heavy, honest and always hungry.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .95,
-         ability: "bloodPact"
+       isDark() {
+         const QQ = this.rgb().color;
+         return (2126 * QQ[0] + 7152 * QQ[1] + 722 * QQ[2]) / 1e4 < 128
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L695-L700` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L401-L402) · [Before (L695-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L695-L700)

```diff
-       "skyblock:forged:moonstone-moonstone-moonstone": {
-         name: "Lunar Requiem",
-         lore: "Swung, it leaves a pale arc that lingers like a second moon.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .85,
-         ability: "moonDash"
+       isLight() {
+         return !this.isDark()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L702-L707` → after: `L404-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L404-L407) · [Before (L702-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L702-L707)

```diff
-       "skyblock:forged:moonstone-astral-moonstone": {
-         name: "Silver Tide",
-         lore: "Pulled by the same moon that pulls the sea.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .84,
-         ability: "moonDash"
+       pg() {
+         const QQ = this.rgb();
+         for (let WQ = 0; WQ < 3; WQ++) QQ.color[WQ] = 255 - QQ.color[WQ];
+         return QQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L709-L717` → after: `L409-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L409-L411) · [Before (L709-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L709-L717)

```diff
-       "skyblock:forged:diamond-diamond-diamond": {
-         name: "Prism Fang",
-         lore: "Every facet catches a different light, and every strike finds a different weakness.",
-         damageMultiplier: 1.29,
-         cooldownMultiplier: .88,
-         ability: "gildedEdge",
-         traits: {
-           crit: 1.8
-         }
+       lighten(QQ) {
+         const WQ = this.hsl();
+         return WQ.color[2] += WQ.color[2] * QQ, WQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L719-L724` → after: `L413-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L413-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L413-L415) · [Before (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L719-L724)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
+       darken(QQ) {
+         const WQ = this.hsl();
+         return WQ.color[2] -= WQ.color[2] * QQ, WQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L726-L734` → after: `L417-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L417-L419) · [Before (L726-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L726-L734)

```diff
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
-         }
+       saturate(QQ) {
+         const WQ = this.hsl();
+         return WQ.color[1] += WQ.color[1] * QQ, WQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L736-L745` → after: `L421-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L421-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L421-L431) · [Before (L736-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L736-L745)

```diff
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
-         }
+       desaturate(QQ) {
+         const WQ = this.hsl();
+         return WQ.color[1] -= WQ.color[1] * QQ, WQ
+       },
+       whiten(QQ) {
+         const WQ = this.hwb();
+         return WQ.color[1] += WQ.color[1] * QQ, WQ
+       },
+       blacken(QQ) {
+         const WQ = this.hwb();
+         return WQ.color[2] += WQ.color[2] * QQ, WQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L747-L752` → after: `L433-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L433-L436) · [Before (L747-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L747-L752)

```diff
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
+       grayscale() {
+         const QQ = this.rgb().color,
+           WQ = .3 * QQ[0] + .59 * QQ[1] + .11 * QQ[2];
+         return FQ.rgb(WQ, WQ, WQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L754-L759` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L438-L439) · [Before (L754-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L754-L759)

```diff
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
+       fade(QQ) {
+         return this.alpha(this.valpha - this.valpha * QQ)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L761-L766` → after: `L441-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L441-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L441-L442) · [Before (L761-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L761-L766)

```diff
-       "skyblock:forged:stone-stone-stone": {
-         name: "Quarryman's Cleaver",
-         lore: "Chipped from one block of stone, handle and all.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "quake"
+       opaquer(QQ) {
+         return this.alpha(this.valpha + this.valpha * QQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L768-L773` → after: `L444-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L444-L474) · [Before (L768-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L768-L773)

```diff
-       "skyblock:forged:wood-wood-wood": {
-         name: "Lorenzo's Lesson",
-         lore: "Courage matters more than the blade. This one is mostly courage.",
-         damageMultiplier: 1.06,
-         cooldownMultiplier: .97,
-         ability: "warcry"
+       rotate(QQ) {
+         const WQ = this.hsl();
+         let XQ = WQ.color[0];
+         return XQ = (XQ + QQ) % 360, XQ = XQ < 0 ? 360 + XQ : XQ, WQ.color[0] = XQ, WQ
+       },
+       mix(QQ, WQ) {
+         if (!QQ || !QQ.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof QQ);
+         const XQ = QQ.rgb(),
+           wQ = this.rgb(),
+           qQ = void 0 === WQ ? .5 : WQ,
+           TQ = 2 * qQ - 1,
+           zQ = XQ.alpha() - wQ.alpha(),
+           sQ = ((TQ * zQ === -1 ? TQ : (TQ + zQ) / (1 + TQ * zQ)) + 1) / 2,
+           PQ = 1 - sQ;
+         return FQ.rgb(sQ * XQ.red() + PQ * wQ.red(), sQ * XQ.green() + PQ * wQ.green(), sQ * XQ.blue() + PQ * wQ.blue(), XQ.alpha() * qQ + wQ.alpha() * (1 - qQ))
+       }
+ ... (15 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L788-L800` → after: `L478-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L478-L483) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L788-L800)

```diff
-     function vp(...pp) {
-       return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(...pp) {
-         for (Cp(pp[wp[12]] = wp[2], pp[-wp[5]] = '_}waFeY!JM(@f%R~y/X56mEt9K8dx,N)lBrj+hZ&s^D[{v7;#z.A*4|LIucWQ3Onob2=>:`0"?TGVqPHp]ig1$<USCk', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[-wp[8]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = -w … [truncated]
-           if (pp[-wp[6]] = pp[-wp[5]].indexOf(pp[wp[0]][pp[wp[3]]]), pp[-wp[6]] !== -wp[2])
-             if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[-wp[6]];
-             else {
-               Cp(pp[wp[7]] += pp[-wp[6]] * wp[30], pp[-wp[8]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
-               do {
-                 Cp(pp[wp[10]].push(pp[-wp[8]] & wp[11]), pp[-wp[8]] >>= wp[3], pp[wp[9]] -= wp[3])
-               } while (pp[wp[9]] > wp[24]);
-               pp[wp[7]] = -wp[2]
-             } return pp[wp[7]] > -wp[2] && pp[wp[10]].push((pp[-wp[8]] | pp[wp[7]] << pp[wp[9]]) & wp[11]), tp(pp[wp[10]])
-       }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
+     function PQ(QQ) {
+       return function(WQ) {
+         return function(QQ, WQ) {
+           return Number(QQ.toFixed(WQ))
+         }(WQ, QQ)
+       }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L803-L804` → after: `L486-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L486-L493) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L803-L804)

```diff
-     function tp(...pp) {
-       return pp[wp[12]] = wp[2], typeof Dp !== wp[16] && Dp ? (new Dp).decode(new Ap(pp[wp[1]])) : typeof Pp !== wp[16] && Pp ? Pp.from(pp[wp[1]]).toString("utf-8") : Up(pp[wp[1]])
+     function gQ(QQ, WQ, XQ) {
+       QQ = Array.isArray(QQ) ? QQ : [QQ];
+       for (const wQ of QQ)(sQ[wQ] || (sQ[wQ] = []))[WQ] = XQ;
+       return QQ = QQ[0],
+         function(wQ) {
+           let qQ;
+           return void 0 !== wQ ? (XQ && (wQ = XQ(wQ)), qQ = this[QQ](), qQ.color[WQ] = wQ, qQ) : (qQ = this[QQ]().color[WQ], XQ && (qQ = XQ(qQ)), qQ)
+         }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L807-L884` → after: `L496-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L496-L500) · [Before (L807-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L807-L884)

```diff
-     function Hp() {}
-     Cp(xp = {}, Lp = ["zu|xY:Rc{O(h9WprC&n**h);BXMMb#W//MWJS.d;V4[#Zzf", "30n|bQA}kW?Ku#F[3xU*d", "Fz;*vIg^z|>Q*~Ctj>Sz$./5%WW*d.=KAAS|!L/5d60`?9D)_~UF", "Br|F~+[5,R_Gg;_N*Y(A/+h;s6Lp}", "M0MAMQHAX~YcuF", "u0~V4iG!}|IRe+H8HhyB{`b:]M*:f#ot`ONz)$_", "?OtY0:>XKRv9(e(6XhH?(#_", '*r_M … [truncated]
-       Cp(pp[wp[12]] = wp[1], pp[-wp[14]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], pp[wp[2]] = wp[17], pp[wp[4]] = []);
-       try {
-         Cp(pp[wp[2]] = Object, pp[wp[4]][wp[26]]("".__proto__.constructor.name))
-       } catch (Lp) {}
-       pp: for (pp[-wp[13]] = wp[1]; pp[-wp[13]] < pp[-wp[14]][wp[12]]; pp[-wp[13]]++) try {
-         for (pp[wp[2]] = pp[-wp[14]][pp[-wp[13]]](), pp[wp[15]] = wp[1]; pp[wp[15]] < pp[wp[4]][wp[12]]; pp[wp[15]]++)
- ... (62 more removed lines; see GitHub link above)
+     function JQ(QQ) {
+       return function(WQ) {
+         return Math.max(0, Math.min(QQ, WQ))
+       }
+     }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L886-L887` → after: `L502-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L502-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L502-L587) · [Before (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L886-L887)

```diff
-     function Cp() {
-       Cp = function() {}
+     function rQ(QQ, WQ) {
+       for (let XQ = 0; XQ < WQ; XQ++) "number" !== typeof QQ[XQ] && (QQ[XQ] = 0);
+       return QQ
+     }
+     QQ.exports = FQ
+   },
+   36964: (QQ, WQ, XQ) => {
+     const wQ = XQ(36973),
+       qQ = {};
+     for (const zQ of Object.keys(wQ)) qQ[wQ[zQ]] = zQ;
+     const TQ = {
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+       },
+       hsl: {
+ ... (70 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L889-L902` → after: `L589-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L589-L631) · [Before (L889-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L889-L902)

```diff
-     Sp = (pp, ip, cp, Op, Sp, Yp, Dp, Ap) => {
-       function Pp(...pp) {
-         return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(...pp) {
-           for (Cp(pp[wp[12]] = wp[2], pp[wp[20]] = 'GJ,T9P6`%>o4}#ky3dFE<^xN|8/[?a+DR~7S)12wm.n;r@"pvfz_ucZs$5&i](!Cb*B=:e{X0VqOtLQhljUYWgKMHAI', pp[wp[19]] = "" + (pp[wp[1]] || ""), pp[wp[33]] = pp[wp[19]].length, pp[wp[43]] = [], pp[wp[15]] = wp[1], pp[wp[22]] = wp[1], pp[wp[24 … [truncated]
-             if (pp[wp[42]] = pp[wp[20]].indexOf(pp[wp[19]][pp[wp[41]]]), pp[wp[42]] !== -wp[2])
-               if (pp[wp[24]] < wp[1]) pp[wp[24]] = pp[wp[42]];
-               else {
-                 Cp(pp[wp[24]] += pp[wp[42]] * wp[30], pp[wp[15]] |= pp[wp[24]] << pp[wp[22]], pp[wp[22]] += (pp[wp[24]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
-                 do {
-                   Cp(pp[wp[43]].push(pp[wp[15]] & wp[11]), pp[wp[15]] >>= wp[3], pp[wp[22]] -= wp[3])
-                 } while (pp[wp[22]] > wp[24]);
-                 pp[wp[24]] = -wp[2]
-               } return pp[wp[24]] > -wp[2] && pp[wp[43]].push((pp[wp[15]] | pp[wp[24]] << pp[wp[22]]) & wp[11]), tp(pp[wp[43]])
-         }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
+     TQ.rgb.hsl = function(QQ) {
+       const WQ = QQ[0] / 255,
+         XQ = QQ[1] / 255,
+         wQ = QQ[2] / 255,
+         qQ = Math.min(WQ, XQ, wQ),
+         TQ = Math.max(WQ, XQ, wQ),
+         zQ = TQ - qQ;
+       let sQ, FQ;
+       TQ === qQ ? sQ = 0 : WQ === TQ ? sQ = (XQ - wQ) / zQ : XQ === TQ ? sQ = 2 + (wQ - WQ) / zQ : wQ === TQ && (sQ = 4 + (WQ - XQ) / zQ), sQ = Math.min(60 * sQ, 360), sQ < 0 && (sQ += 360);
+       const PQ = (qQ + TQ) / 2;
+       return FQ = TQ === qQ ? 0 : PQ <= .5 ? zQ / (TQ + qQ) : zQ / (2 - TQ - qQ), [sQ, 100 * FQ, 100 * PQ]
+     }, TQ.rgb.hsv = function(QQ) {
+       let WQ, XQ, wQ, qQ, TQ;
+       const zQ = QQ[0] / 255,
+         sQ = QQ[1] / 255,
+         FQ = QQ[2] / 255,
+ ... (27 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L904-L961` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L633-L690) · [Before (L904-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L904-L961)

```diff
-       const Wp = pp[Pp(wp[45])][Pp(125) + Pp(126) + Pp(wp[44])](ip);
-       let yp = pp[Pp(wp[45])][Pp(wp[46]) + Pp(wp[58]) + Pp(wp[59]) + Pp(wp[60])](Wp);
-       const Up = yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[47]) + Pp(wp[48]) + Pp(wp[49]) + wp[15]) : yp[Pp(wp[47]) + Pp(wp[48]) + Pp(wp[49]) + wp[15]],
-         vp = yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[55]) + Pp(wp[56]) + Pp(wp[57])) : yp[Pp(wp[55]) + Pp(wp[56]) + Pp(wp[57])];
-       Cp(op()[Pp(142)](dp, wp[1], wp[1], Yp), op().wi(dp, dp, op()[Pp(143)], Op.heading), op()[Pp(wp[63])](qp, Sp.tw), qp[wp[2]] = wp[1]);
-       const Rp = cp[Pp(145) + Pp(146)]();
-       yp = pp[Pp(wp[45])][Pp(wp[46]) + Pp(wp[58]) + Pp(wp[59]) + Pp(wp[60])](Wp);
-       let Ep = yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[61]) + Pp(wp[62])) : yp[Pp(wp[61]) + Pp(wp[62])];
-       if (!Rp && op()[wp[67]](qp) && (yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[74]) + Pp(wp[84]) + Pp(151) + Pp(152)) : yp[Pp(153) + Pp(wp[86]) + Pp(155)])) {
-         function Np(...pp) {
-           for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'qx1B^vAFunkRT<t5)Z_,.=mX/b!G9OPcsjW3Sh4wd?;"a0:7Y6DE~HJQzrLUf>gp@CKMlo}`%VIie]&*+#[{2$(|y8N', pp[wp[19]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[19]].length, pp[-wp[36]] = [], pp[wp[65]] = wp[1], pp[wp[9]] = wp[1], pp[-wp[64] … [truncated]
-             if (pp[wp[45]] = pp[wp[2]].indexOf(pp[wp[19]][pp[-wp[63]]]), pp[wp[45]] !== -wp[2])
-               if (pp[-wp[64]] < wp[1]) pp[-wp[64]] = pp[wp[45]];
-               else {
-                 Cp(pp[-wp[64]] += pp[wp[45]] * wp[30], pp[wp[65]] |= pp[-wp[64]] << pp[wp[9]], pp[wp[9]] += (pp[-wp[64]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
-                 do {
- ... (42 more removed lines; see GitHub link above)
+       var zQ, sQ;
+       return XQ
+     }, TQ.keyword.rgb = function(QQ) {
+       return wQ[QQ]
+     }, TQ.rgb.xyz = function(QQ) {
+       let WQ = QQ[0] / 255,
+         XQ = QQ[1] / 255,
+         wQ = QQ[2] / 255;
+       WQ = WQ > .04045 ? ((WQ + .055) / 1.055) ** 2.4 : WQ / 12.92, XQ = XQ > .04045 ? ((XQ + .055) / 1.055) ** 2.4 : XQ / 12.92, wQ = wQ > .04045 ? ((wQ + .055) / 1.055) ** 2.4 : wQ / 12.92;
+       return [100 * (.4124 * WQ + .3576 * XQ + .1805 * wQ), 100 * (.2126 * WQ + .7152 * XQ + .0722 * wQ), 100 * (.0193 * WQ + .1192 * XQ + .9505 * wQ)]
+     }, TQ.rgb.lab = function(QQ) {
+       const WQ = TQ.rgb.xyz(QQ);
+       let XQ = WQ[0],
+         wQ = WQ[1],
+         qQ = WQ[2];
+       XQ /= 95.047, wQ /= 100, qQ /= 108.883, XQ = XQ > .008856 ? XQ ** (1 / 3) : 7.787 * XQ + 16 / 116, wQ = wQ > .008856 ? wQ ** (1 / 3) : 7.787 * wQ + 16 / 116, qQ = qQ > .008856 ? qQ ** (1 / 3) : 7.787 * qQ + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L963-L987` → after: `L692-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L692-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L692-L940) · [Before (L963-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L963-L987)

```diff
-       const Xp = mp;
-       Cp(op()[Pp(164)](Xp, dp, qp), Xp[wp[2]] = wp[1]);
-       let lp = op()[Pp(165)](Xp);
-       if (!Rp) {
-         function gp(...pp) {
-           for (Cp(pp[wp[12]] = wp[2], pp[wp[74]] = 'G}u$<_Dn7W36V,:vo9eCM8@YXObhzmi+BZUH!Sl`[EL|{p(J/T;xqF~Ar1t4N&d>%P.?Q=gka2^jcf5#Is*0wR]y"K)', pp[-wp[75]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[-wp[75]].length, pp[wp[43]] = [], pp[wp[78]] = wp[1], pp[wp[9]] = wp[1], pp[wp[77 … [truncated]
-             if (pp[wp[76]] = pp[wp[74]].indexOf(pp[-wp[75]][pp[wp[41]]]), pp[wp[76]] !== -wp[2])
-               if (pp[wp[77]] < wp[1]) pp[wp[77]] = pp[wp[76]];
-               else {
-                 Cp(pp[wp[77]] += pp[wp[76]] * wp[30], pp[wp[78]] |= pp[wp[77]] << pp[wp[9]], pp[wp[9]] += (pp[wp[77]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
-                 do {
-                   Cp(pp[wp[43]].push(pp[wp[78]] & wp[11]), pp[wp[78]] >>= wp[3], pp[wp[9]] -= wp[3])
-                 } while (pp[wp[9]] > wp[24]);
-                 pp[wp[77]] = -wp[2]
-               } return pp[wp[77]] > -wp[2] && pp[wp[43]].push((pp[wp[78]] | pp[wp[77]] << pp[wp[9]]) & wp[11]), tp(pp[wp[43]])
-         }
- ... (9 more removed lines; see GitHub link above)
+     }, TQ.hsv.hsl = function(QQ) {
+       const WQ = QQ[0],
+         XQ = QQ[1] / 100,
+         wQ = QQ[2] / 100,
+         qQ = Math.max(wQ, .01);
+       let TQ, zQ;
+       zQ = (2 - XQ) * wQ;
+       const sQ = (2 - XQ) * qQ;
+       return TQ = XQ * qQ, TQ /= sQ <= 1 ? sQ : 2 - sQ, TQ = TQ || 0, zQ /= 2, [WQ, 100 * TQ, 100 * zQ]
+     }, TQ.hwb.rgb = function(QQ) {
+       const WQ = QQ[0] / 360;
+       let XQ = QQ[1] / 100,
+         wQ = QQ[2] / 100;
+       const qQ = XQ + wQ;
+       let TQ;
+       qQ > 1 && (XQ /= qQ, wQ /= qQ);
+ ... (233 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L989-L1001` → after: `L942-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L942-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L942-L958) · [Before (L989-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L989-L1001)

```diff
-           function cp(...pp) {
-             switch (pp[wp[12]] = wp[2], ((pp[wp[1]] & wp[79]) !== wp[1]) * wp[2] + (pp[wp[1]] < wp[1]) * wp[19]) {
-               case wp[1]:
-                 return [pp[wp[1]] % wp[79], Math.trunc(pp[wp[1]] / wp[80])];
-               case wp[2]:
-                 return [pp[wp[1]] % wp[79] - wp[79], Math.trunc(pp[wp[1]] / wp[80]) + wp[2]];
-               case wp[19]:
-                 return [((pp[wp[1]] + wp[79]) % wp[79] + wp[79]) % wp[79], Math.round(pp[wp[1]] / wp[80])];
-               case wp[28]:
-                 return [pp[wp[1]] % wp[79], Math.trunc(pp[wp[1]] / wp[80])]
-             }
-           }
-           pp[wp[12]] = wp[1], Cp(pp[-wp[37]] = ip([wp[19], wp[10]]), pp[-wp[81]] = ip([wp[2], wp[19]]), pp[wp[43]] = pp[-wp[37]] + pp[-wp[81]], pp[wp[71]] = pp[wp[43]] - pp[-wp[81]], pp[-wp[82]] = pp[wp[71]] * wp[19], pp[-wp[83]] = pp[-wp[82]] / wp[19], console.log(cp(pp[wp[43]]) … [truncated]
+     function qQ(QQ) {
+       const WQ = function() {
+           const QQ = {},
+             WQ = Object.keys(wQ);
+           for (let XQ = WQ.length, wQ = 0; wQ < XQ; wQ++) QQ[WQ[wQ]] = {
+             distance: -1,
+             parent: null
+           };
+           return QQ
+         }(),
+         XQ = [QQ];
+       for (WQ[QQ].distance = 0; XQ.length;) {
+         const QQ = XQ.pop(),
+           qQ = Object.keys(wQ[QQ]);
+         for (let wQ = qQ.length, TQ = 0; TQ < wQ; TQ++) {
+           const wQ = qQ[TQ],
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1005-L1021` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L961-L962) · [Before (L1005-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L1005-L1021)

```diff
-       const Qp = Dp[Pp(167) + Pp(168) + Pp(wp[70])],
-         Jp = Qp ? Math[Pp(170)](Qp, lp) : lp;
-       op()[Pp(wp[6]) + Pp(172)](Xp, Xp);
-       const Bp = Ap !== wp[50] && void 0 !== Ap ? Ap : Dp[Pp(173) + Pp(wp[36]) + Pp(175) + Pp(176)];
-       if (Jp > wp[1]) {
-         function Zp(...pp) {
-           for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'k6w7RP4<n/d{Z5)W0_s(1urVo[2Nq:em^ST+U;`=hJ&K"8|@pfYgtAi?~x]FQzIMj.y,O}H3%BbG9L!C$>#*lEaXDcv', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[wp[35]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = - … [truncated]
-             if (pp[wp[76]] = pp[wp[2]].indexOf(pp[wp[0]][pp[-wp[84]]]), pp[wp[76]] !== -wp[2])
-               if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[wp[76]];
-               else {
-                 Cp(pp[wp[7]] += pp[wp[76]] * wp[30], pp[wp[35]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
-                 do {
-                   Cp(pp[wp[10]].push(pp[wp[35]] & wp[11]), pp[wp[35]] >>= wp[3], pp[wp[9]] -= wp[3])
-                 } while (pp[wp[9]] > wp[24]);
-                 pp[wp[7]] = -wp[2]
-               } return pp[wp[7]] > -wp[2] && pp[wp[10]].push((pp[wp[35]] | pp[wp[7]] << pp[wp[9]]) & wp[11]), tp(pp[wp[10]])
- ... (1 more removed lines; see GitHub link above)
+       return WQ
+     }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1023-L1039` → after: `L964-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L964-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L964-L968) · [Before (L1023-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L1023-L1039)

```diff
-         function zp(...pp) {
-           return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = Zp(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
-         }
-         let sp = cp[zp(177) + zp(178)] * Bp;
-         if (!Rp) {
-           function Vp(...pp) {
-             for (Cp(pp[wp[12]] = wp[2], pp[wp[20]] = 'ALluab7_G=OY]"0~q`kFgB9CP5Q<.iNHhX^t*3RM{2pZ;jS:n}fvD[|U@oK$zI(V,6?1xJE/!8&dT+4eWc>syrw)%#m', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[85]] = pp[wp[0]].length, pp[wp[87]] = [], pp[wp[15]] = wp[1], pp[wp[22]] = wp[1], pp[wp[7] … [truncated]
-               if (pp[wp[86]] = pp[wp[20]].indexOf(pp[wp[0]][pp[wp[3]]]), pp[wp[86]] !== -wp[2])
-                 if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[wp[86]];
-                 else {
-                   Cp(pp[wp[7]] += pp[wp[86]] * wp[30], pp[wp[15]] |= pp[wp[7]] << pp[wp[22]], pp[wp[22]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
-                   do {
-                     Cp(pp[wp[87]].push(pp[wp[15]] & wp[11]), pp[wp[15]] >>= wp[3], pp[wp[22]] -= wp[3])
-                   } while (pp[wp[22]] > wp[24]);
-                   pp[wp[7]] = -wp[2]
-                 } return pp[wp[7]] > -wp[2] && pp[wp[87]].push((pp[wp[15]] | pp[wp[7]] << pp[wp[22]]) & wp[11]), tp(pp[wp[87]])
- ... (1 more removed lines; see GitHub link above)
+     function TQ(QQ, WQ) {
+       return function(XQ) {
+         return WQ(QQ(XQ))
+       }
+     }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1041-L1071` → after: `L970-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L970-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L970-L983) · [Before (L1041-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L1041-L1071)

```diff
-           function ii(...pp) {
-             return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = Vp(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
-           }
-           sp *= cp[ii(179) + ii(180)]
-         }
-         let Kp = cp[zp(181) + zp(182) + "ss"] * Jp;
-         if (Jp < .3) {
-           function ci(...pp) {
-             function ip(...pp) {
-               return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(pp) {
-                 var ip, cp, Op, op, Ip, Sp, xp;
-                 for (Cp(ip = "" + (pp || ""), cp = ip.length, Op = [], op = wp[1], Ip = wp[1], Sp = -wp[2]), xp = wp[1]; xp < cp; xp++) {
-                   var Lp = 'eIz9qf2b^0ZNpchYuTKrd~&D8=JLW[_#Hv?nV)1o:;$PG"EQR,|saB/.!iwM>jACU6t`<OX%7m@+]4}3lky{(x5*gFS'.indexOf(ip[xp]);
-                   if (Lp !== -wp[2])
-                     if (Sp < wp[1]) Sp = Lp;
-                     else {
- ... (15 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ) {
+       const XQ = [WQ[QQ].parent, QQ];
+       let qQ = wQ[WQ[QQ].parent][QQ],
+         zQ = WQ[QQ].parent;
+       for (; WQ[zQ].parent;) XQ.unshift(WQ[zQ].parent), qQ = TQ(wQ[WQ[zQ].parent][zQ], qQ), zQ = WQ[zQ].parent;
+       return qQ.conversion = XQ, qQ
+     }
+     QQ.exports = function(QQ) {
+       const WQ = qQ(QQ),
+         XQ = {},
+         wQ = Object.keys(WQ);
+       for (let qQ = wQ.length, TQ = 0; TQ < qQ; TQ++) {
+         const QQ = wQ[TQ];
+         null !== WQ[QQ].parent && (XQ[QQ] = zQ(QQ, WQ))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1073` → after: `L985-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L985-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L985-L1137) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L1073)

```diff
-       Sp[Pp(205) + wp[88]] = cp[Pp(206) + Pp(wp[48]) + wp[88]] * (Rp ? Up : vp)
+       return XQ
+     }
+   },
+   36973: QQ => {
+     QQ.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+ ... (137 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1076-L1122` → after: `L1140-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1140-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L1140-L1149) · [Before (L1076-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L1076-L1122)

```diff
-   37861: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Lp,
-       f: () => xp
-     });
-     var Op = cp(37868),
-       op = cp(1927);
-     const Ip = 2,
-       Sp = 1,
-       xp = {
-         Gx: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
- ... (31 more removed lines; see GitHub link above)
+   36948: (QQ, WQ, XQ) => {
+     var wQ = XQ(36952),
+       qQ = Array.prototype.concat,
+       TQ = Array.prototype.slice,
+       zQ = QQ.exports = function(QQ) {
+         for (var WQ = [], XQ = 0, zQ = QQ.length; XQ < zQ; XQ++) {
+           var sQ = QQ[XQ];
+           wQ(sQ) ? WQ = qQ.call(WQ, TQ.call(sQ)) : WQ.push(sQ)
+         }
+         return WQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1124-L1135` → after: `L1151-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1151-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/230.js#L1151-L1159) · [Before (L1124-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/230.js#L1124-L1135)

```diff
- 
-     function Lp(pp, ip, cp, xp, Lp, Yp, Dp) {
-       if (Lp.speed) return (0, Op.e)(ip, cp, xp, Lp, Yp, Dp, pp), void(Lp.ticksToReachMaxIdleFriction = Ip);
-       const Ap = xp.isOnGround(),
-         Pp = ip.bloxd.getSyncedClientOptions(ip.bloxd.getPlayerReader(cp)),
-         Wp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "groundFrictionScale") : Pp.groundFrictionScale,
-         yp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airFrictionScale") : Pp.airFrictionScale,
-         Up = Ap ? Wp : yp,
-         wp = Math.max(Sp, Up),
-         vp = Lp.ticksToReachMaxIdleFriction / Ip,
-         tp = (0, op.y)(wp, Up, vp);
-       Yp.friction = pp.standingFriction * ((null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airMomentumConservation") : Pp.airMomentumConservation) ? tp : Up), Lp.ticksToReachMaxIdleFriction > 0 && Lp.ticksToReachMaxIdleFriction--
+     zQ.wrap = function(QQ) {
+       return function() {
+         return QQ(zQ(arguments))
+       }
+     }
+   },
+   36952: QQ => {
+     QQ.exports = function(QQ) {
+       return !(!QQ || "string" === typeof QQ) && (QQ instanceof Array || Array.isArray(QQ) || QQ.length >= 0 && (QQ.splice instanceof Function || Object.getOwnPropertyDescriptor(QQ, QQ.length - 1) && "String" !== QQ.constructor.name))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L10` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L10) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L10)

```diff
-   40001: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       getBlockFaces: () => Pp,
-       getIngameIconUrl: () => Up,
-       getItemIconUrl: () => yp,
-       getItemTextureUrl: () => Wp,
-       getParticleTextureUrl: () => wp
+   37049: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => TW,
+       d: () => FW,
+       h: () => JW,
+       l: () => PW,
+       m: () => gW
```
