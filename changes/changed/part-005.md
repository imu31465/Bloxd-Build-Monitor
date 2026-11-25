# Changed — Bundle Modifications Report (Part 005 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `5 / 56` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 6. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L754-L1038` → after: `L55-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L55-L59) · [Before (L754-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L754-L1038)

```diff
-       return arguments.length >= 4 && (SG.rank = ZG, SG.order = wG), nG(GG, "border", SG, bG)
-     }
-     var HG = 65535;
- 
-     function tG(GG, bG) {
-       if (bG.length > HG) {
-         let ZG = function(GG) {
-           let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HG,
-             ZG = [];
-           for (let wG = 0; wG < GG.length; wG += bG) {
-             let SG = GG.slice(wG, wG + bG);
-             ZG.push(SG)
-           }
-           return ZG
-         }(bG);
-         return GG(...ZG.map((bG => GG(...bG))))
- ... (269 more removed lines; see GitHub link above)
+       PM.NotificationProvider.showCustomPopup({
+         body: iM => (0, hM.jsx)(dM, {
+           flow: rM,
+           close: iM,
+           ...MM
```

#### 7. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1040-L1120` → after: `L61-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L61-L63) · [Before (L1040-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1040-L1120)

```diff
-         ZG = GG.nodes();
-       if (0 === ZG.length) throw new Error("Graph must have at least one node");
-       let wG, SG, LG = ZG[0],
-         yG = GG.nodeCount();
-       for (bG.setNode(LG, {}); rb(bG, GG) < yG && (wG = zb(bG, GG), wG);) SG = bG.hasNode(wG.v) ? db(GG, wG) : -db(GG, wG), Eb(bG, GG, SG);
-       return bG
-     };
- 
-     function rb(GG, bG) {
-       return GG.nodes().forEach((function ZG(wG) {
-         let SG = bG.nodeEdges(wG);
-         SG && SG.forEach((SG => {
-           let LG = SG.v,
-             yG = wG === LG ? SG.w : LG;
-           !GG.hasNode(yG) && !db(bG, SG) && (GG.setNode(yG, {}), GG.setEdge(wG, yG, {}), ZG(yG))
-         }))
- ... (65 more removed lines; see GitHub link above)
+         middleScreenPopupClassName: "CreateCustomLobbyPopup",
+         onClose: () => {
+           rM.closed = !0, rM.requested || (0, HM.g)()
```

#### 8. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1336-L1550` → after: `L69-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L69-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L69-L93) · [Before (L1336-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1336-L1550)

```diff
-       var bG;
-       let ZG = null == (bG = GG.graph().rankdir) ? void 0 : bG.toLowerCase();
-       ("bt" === ZG || "rl" === ZG) && function(GG) {
-         GG.nodes().forEach((bG => Tb(GG.node(bG)))), GG.edges().forEach((bG => {
-           var ZG;
-           let wG = GG.edge(bG);
-           null == (ZG = wG.points) || ZG.forEach(Tb), Object.hasOwn(wG, "y") && Tb(wG)
-         }))
-       }(GG), ("lr" === ZG || "rl" === ZG) && (function(GG) {
-         GG.nodes().forEach((bG => Hb(GG.node(bG)))), GG.edges().forEach((bG => {
-           var ZG;
-           let wG = GG.edge(bG);
-           null == (ZG = wG.points) || ZG.forEach(Hb), Object.hasOwn(wG, "x") && Hb(wG)
-         }))
-       }(GG), eb(GG))
-     }
- ... (199 more removed lines; see GitHub link above)
+       let {
+         flow: rM,
+         close: iM,
+         onCreating: PM,
+         onCreated: JM,
+         onFailedClosed: dM,
+         join: yM
+       } = MM;
+       const {
+         t: lM
+       } = (0, aM.A)(), [EM, UM] = (0, SM.useState)(OM.u), [GM, CM] = (0, SM.useState)(!1), [eM, bM] = (0, SM.useState)(""), wM = (0, LM.b)();
+       (0, SM.useEffect)((() => {
+         (0, HM.n)()
+       }), []);
+       const tM = MM => ({
+         isEnabled: () => EM.plugins[MM],
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1641-L1883` → after: `L97-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L97-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L97-L117) · [Before (L1641-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1641-L1883)

```diff
-       })), LG
-     }
- 
-     function ZZ(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       if ("function" == typeof bG.customOrder) return void bG.customOrder(GG, ZZ);
-       let wG = DG(GG),
-         SG = wZ(GG, Gb(1, wG + 1), "inEdges"),
-         LG = wZ(GG, Gb(wG - 1, -1, -1), "outEdges"),
-         yG = tb(GG, ZG);
-       if (LZ(GG, yG), bG.disableOptimalOrderHeuristic) return;
-       let kG, UG = Number.POSITIVE_INFINITY,
-         YG = bG.constraints || [];
-       for (let VG = 0, pG = 0; pG < 4; ++VG, ++pG) {
-         SZ(VG % 2 ? SG : LG, VG % 4 >= 2, YG, ZG), yG = RG(GG);
- ... (227 more removed lines; see GitHub link above)
+       });
+       return (0, hM.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, hM.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, hM.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: lM("homePage:myWorld")
+           })
+         }), (0, hM.jsx)(nM.d, {
+           locked: GM,
+           children: (0, hM.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, hM.jsx)(mM.c, {
+               value: EM.defaultGamemode,
+               onChange: MM => {
+ ... (5 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1885-L1911` → after: `L119-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L119-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L119-L130) · [Before (L1885-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1885-L1911)

```diff
-               })), bG.forEach((bG => {
-                 let UG = -1,
-                   YG = -1,
-                   VG = !1,
-                   pG = bG,
-                   fG = bG.findIndex((bG => (null == SG ? void 0 : SG.includes(bG)) || VZ(bG, GG, SG)));
-                 fG > 0 && (pG = [bG[fG], ...bG.slice(0, fG), ...bG.slice(fG + 1)], VG = !0), pG.forEach((bG => {
-                   var pG;
-                   let fG = wG(bG);
-                   if (fG && fG.length) {
-                     null != SG && SG.includes(bG) && (fG = fG.filter((bG => VZ(bG, GG, SG))));
-                     let wG = fG.sort(((GG, bG) => {
-                         let ZG = kG[GG],
-                           wG = kG[bG];
-                         return (void 0 !== ZG ? ZG : 0) - (void 0 !== wG ? wG : 0)
-                       })),
- ... (11 more removed lines; see GitHub link above)
+               },
+               showAll: !1,
+               disabled: GM
+             }), (0, hM.jsx)(mM.e, {
+               mapTypes: OM.j,
+               value: EM.mapType,
+               onChange: MM => {
+                 (0, OM.y)(MM) && MM !== EM.mapType && ((0, HM.i)({
+                   mapType: MM
+                 }), UM({
+                   ...EM,
+                   mapType: MM
```

#### 11. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1913-L1977` → after: `L132-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L132-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L132-L167) · [Before (L1913-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1913-L1977)

```diff
-               })), {
-                 root: LG,
-                 align: yG
-               }
-             }(GG, ZG, SG, (bG => ("u" === yG ? GG.predecessors(bG) : GG.successors(bG)) || []), bG),
-             UG = UZ(GG, ZG, kG.root, kG.align, "r" === wG);
-           "r" === wG && (UG = Zb(UG, (GG => -GG))), LG[yG + wG] = UG
-         }))
-       }));
-       let yG = function(GG, bG) {
-         return Object.values(bG).reduce(((bG, ZG) => {
-           let wG = Number.NEGATIVE_INFINITY,
-             SG = Number.POSITIVE_INFINITY;
-           Object.entries(ZG).forEach((bG => {
-             let [ZG, LG] = bG, yG = function(GG, bG) {
-               return GG.node(bG).width
- ... (49 more removed lines; see GitHub link above)
+               },
+               showAll: !1,
+               disabled: GM
+             }), (0, hM.jsx)(QM.b, {
+               callbacks: {
+                 dayNight: tM("dayNight"),
+                 fallDamage: tM("fallDamage"),
+                 survivalGuns: tM("survivalGuns")
+               },
+               disabled: GM,
+               advancedMode: !1
+             })]
+           })
+         }), (0, hM.jsxs)("div", {
+           className: "CreateCustomLobbyFooter",
+           children: [(0, hM.jsx)(zM.p, {
+ ... (20 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1980-L1996` → after: `L181-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L181-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L181-L197) · [Before (L1980-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1980-L1996)

```diff
-     function pZ(GG, bG) {
-       (function(GG) {
-         let bG = RG(GG),
-           ZG = GG.graph(),
-           wG = ZG.ranksep,
-           SG = ZG.rankalign,
-           LG = 0;
-         bG.forEach((bG => {
-           let ZG = bG.reduce(((bG, ZG) => {
-             var wG;
-             let SG = null != (wG = GG.node(ZG).height) ? wG : 0;
-             return bG > SG ? bG : SG
-           }), 0);
-           bG.forEach((bG => {
-             let wG = GG.node(bG);
-             wG.y = "top" === SG ? LG + wG.height / 2 : "bottom" === SG ? LG + ZG - wG.height / 2 : LG + ZG / 2
- ... (1 more removed lines; see GitHub link above)
+     function QM(MM) {
+       const {
+         disabled: rM,
+         hideWrapper: iM
+       } = MM, {
+         t: OM
+       } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
+         className: SM()("PluginsGrid", {
+           SectionBody: !iM
+         }),
+         children: QM.map((MM => {
+           let [iM, OM] = MM;
+           return (0, PM.jsx)(zM, {
+             plugin: iM,
+             callbacks: OM,
+             disabled: rM
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1998-L2001` → after: `L199-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L199-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L199-L206) · [Before (L1998-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L1998-L2001)

```diff
-       })(GG = gG(GG)), Object.entries(YZ(GG, bG)).forEach((bG => {
-         let [ZG, wG] = bG;
-         return GG.node(ZG).x = wG
-       }))
+       });
+       return iM ? LM : (0, PM.jsxs)("div", {
+         className: "BloxdForm",
+         children: [(0, PM.jsx)("div", {
+           className: "SectionTitle",
+           children: OM("worldBuilder:pluginsSection")
+         }), LM]
+       })
```

#### 14. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2006-L2100` → after: `L210-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L210-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L210-L214) · [Before (L2006-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2006-L2100)

```diff
-       return hZ(GG, OG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), GG
-     }
- 
-     function KZ(GG, bG, ZG) {
-       let wG = bG;
-       for (; void 0 !== wG;) {
-         let bG = GG.parent(wG);
-         if (bG === ZG) return wG;
-         wG = bG
-       }
-     }
- 
-     function hZ(GG, bG, ZG) {
-       var wG;
-       let SG = GG.nodes().filter((bG => GG.children(bG).length)),
-         LG = {};
- ... (79 more removed lines; see GitHub link above)
+       let {
+         plugin: rM,
+         callbacks: {
+           isEnabled: iM,
+           kR: OM
```

#### 15. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2102-L2506` → after: `L216-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L216-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L216-L250) · [Before (L2102-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2102-L2506)

```diff
-         fG = [];
-       GG.edges().forEach((bG => {
-         (VG.has(bG.v) || VG.has(bG.w)) && fG.push({
-           edge: bG,
-           label: GG.edge(bG)
-         })
-       }));
-       let QG = new Map;
-       VG.forEach((bG => {
-         let ZG = GG.parent(bG);
-         QG.set(bG, "string" == typeof ZG ? ZG : void 0)
-       })), YG.forEach(((bG, ZG) => {
-         let wG = GG.node(ZG),
-           SG = [];
-         bG.forEach((bG => {
-           let ZG = GG.node(bG);
- ... (389 more removed lines; see GitHub link above)
+         disabled: jM
+       } = MM;
+       const {
+         t: nM
+       } = (0, aM.A)(), QM = iM();
+       return (0, PM.jsxs)("div", {
+         className: SM()("PluginCard", {
+           PluginCardEnabled: QM,
+           PluginCardDisabledForm: jM
+         }),
+         "data-pad-focusable": !0,
+         "aria-disabled": jM || void 0,
+         onClick: () => {
+           jM || OM(!QM)
+         },
+         children: [(0, PM.jsx)("div", {
+ ... (19 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2508-L2520` → after: `L252-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L252-L259) · [Before (L2508-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2508-L2520)

```diff
-     var rZ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
-       zZ = {
-         ranksep: 50,
-         edgesep: 20,
-         nodesep: 50,
-         rankdir: "TB",
-         rankalign: "center"
-       },
-       EZ = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
-       oZ = ["width", "height", "rank"],
-       XZ = {
-         width: 0,
-         height: 0
+     const LM = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
```

#### 17. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2524-L2531` → after: `L262-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L262-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L262-L282) · [Before (L2524-L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2524-L2531)

```diff
-         minlen: 1,
-         weight: 1,
-         width: 0,
-         height: 0,
-         labeloffset: 10,
-         labelpos: "r"
-       },
-       CZ = ["labelpos"];
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
+       }
+   },
+   37298: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => QM,
+       e: () => zM
+     });
+     iM(44);
+     var OM = iM(1116),
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2534-L2536` → after: `L285-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L285-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L285-L296) · [Before (L2534-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2534-L2536)

```diff
-       let bG = new qG({
-           multigraph: !0,
-           compound: !0
+       let {
+         value: rM,
+         onChange: iM,
+         showAll: OM,
+         disabled: QM = !1
+       } = MM;
+       const {
+         t: zM
+       } = (0, PM.A)();
+       return (0, nM.jsxs)("div", {
+         className: SM()("BloxdForm GamemodeForm", {
+           BasicOptions: !OM
```

#### 19. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2538-L2561` → after: `L298-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L298-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L298-L318) · [Before (L2538-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2538-L2561)

```diff
-         ZG = IZ(GG.graph());
-       return bG.setGraph(Object.assign({}, zZ, mZ(ZG, rZ), bb(ZG, EZ))), GG.nodes().forEach((ZG => {
-         let wG = mZ(IZ(GG.node(ZG)), oZ);
-         Object.keys(XZ).forEach((GG => {
-           void 0 === wG[GG] && (wG[GG] = XZ[GG])
-         })), bG.setNode(ZG, wG);
-         let SG = GG.parent(ZG);
-         void 0 !== SG && bG.setParent(ZG, SG)
-       })), GG.edges().forEach((ZG => {
-         let wG = IZ(GG.edge(ZG));
-         bG.setEdge(ZG, Object.assign({}, iZ, mZ(wG, uZ), bb(wG, CZ)))
-       })), bG
-     }
- 
-     function mZ(GG, bG) {
-       return Zb(bb(GG, bG), Number)
- ... (8 more removed lines; see GitHub link above)
+         children: [(0, nM.jsx)("div", {
+           className: "SectionTitle",
+           children: zM("classic:defaultGamemode")
+         }), (0, nM.jsx)("div", {
+           className: "SectionBody",
+           children: jM.C.map((MM => OM || (0, jM.x)(MM) ? (0, nM.jsx)("button", {
+             type: "button",
+             className: SM()("WorldGamemode", {
+               Selected: rM === MM
+             }),
+             disabled: QM,
+             onClick: () => {
+               iM(MM)
+             },
+             style: {
+               "--background-image": `url(${aM.s[MM]})`
+ ... (5 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2565-L2581` → after: `L322-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L322-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L322-L357) · [Before (L2565-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2565-L2581)

```diff
-       let bG = RG(GG),
-         ZG = new qG({
-           compound: !0,
-           multigraph: !0
-         }).setGraph({});
-       return GG.nodes().forEach((bG => {
-         ZG.setNode(bG, {
-           label: bG
-         }), ZG.setParent(bG, "layer" + GG.node(bG).rank)
-       })), GG.edges().forEach((GG => ZG.setEdge(GG.v, GG.w, {}, GG.name))), bG.forEach(((GG, bG) => {
-         let wG = "layer" + bG;
-         ZG.setNode(wG, {
-           rank: "same"
-         }), GG.reduce(((GG, bG) => (ZG.setEdge(GG, bG, {
-           style: "invis"
-         }), bG)))
- ... (1 more removed lines; see GitHub link above)
+       let {
+         mapTypes: rM,
+         value: iM,
+         onChange: OM,
+         showAll: QM,
+         disabled: zM = !1,
+         children: LM
+       } = MM;
+       const {
+         t: mM
+       } = (0, PM.A)();
+       return (0, nM.jsxs)("div", {
+         className: SM()("BloxdForm MapTypeForm", {
+           BasicOptions: !QM
+         }),
+         children: [(0, nM.jsx)("div", {
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L2583-L2597` → after: `L359-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L359-L361) · [Before (L2583-L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L2583-L2597)

```diff
-     var vZ = {
-         time: NG,
-         notime: OG
-       },
-       aZ = {
-         graphlib: LG,
-         version: Lb,
-         layout: QZ,
-         debug: FZ,
-         util: {
-           time: NG,
-           notime: OG
-         }
-       }
-   }
+   },
+   5348: () => {},
+   37287: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/121.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/121.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a)

#### 1. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L4)

```diff
-   36963: (GG, bG, ZG) => {
+   5384: (MM, rM) => {
+     rM.d = function(MM, rM) {
+       if (MM && rM) {
+         var iM = Array.isArray(rM) ? rM : rM.split(","),
+           OM = MM.name || "",
+           SM = (MM.type || "").toLowerCase(),
+           jM = SM.replace(/\/.*$/, "");
+         return iM.some((function(MM) {
+           var rM = MM.trim().toLowerCase();
+           return "." === rM.charAt(0) ? OM.toLowerCase().endsWith(rM) : rM.endsWith("/*") ? jM === rM.replace(/\/.*$/, "") : SM === rM
+         }))
+       }
+       return !0
+     }
+   },
+   5364: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L6-L7` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L21) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L6-L7)

```diff
-       b: () => hG,
-       d: () => XG
+       e: () => Hr
```

#### 3. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L9-L58` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L23-L25) · [Before (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L9-L58)

```diff
-     ZG(34454);
-     var wG = ZG(51),
-       SG = ZG(1389),
-       LG = ZG(1895),
-       yG = ZG(1945),
-       kG = ZG(17),
-       UG = ZG(2409),
-       YG = ZG(36965),
-       VG = ZG(36973),
-       pG = ZG(34432),
-       fG = ZG(34446),
-       QG = ZG(34463),
-       KG = ZG(1067);
-     const hG = (0, wG.memo)((function() {
-       var GG;
-       const {
- ... (34 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(5368),
+       jM = iM.n(SM);
```

#### 4. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L60-L79` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L27-L35) · [Before (L60-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L60-L79)

```diff
-     function dG() {
-       return LG.gameBridge.lookup("cameraZoom", null)
-     }
-     const JG = [{
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }],
-       rG = {
-         current: null
-       },
-       zG = {
- ... (4 more removed lines; see GitHub link above)
+     function aM(MM, rM, iM, OM) {
+       return new(iM || (iM = Promise))((function(SM, jM) {
+         function aM(MM) {
+           try {
+             nM(OM.next(MM))
+           } catch (rM) {
+             jM(rM)
+           }
+         }
```

#### 5. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L81-L83` → after: `L37-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L37-L43) · [Before (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L81-L83)

```diff
-     function XG(GG) {
-       oG = GG, JG[0].current || rG.current || zG.current ? iG(GG) : EG = GG
-     }
+         function PM(MM) {
+           try {
+             nM(OM.throw(MM))
+           } catch (rM) {
+             jM(rM)
+           }
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L85-L86` → after: `L45-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L45-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L45-L52) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L85-L86)

```diff
-     function uG(GG) {
-       return ((0, YG.g)(GG) - (0, YG.g)(0)) * window.innerHeight / 100
+         function nM(MM) {
+           var rM;
+           MM.done ? SM(MM.value) : (rM = MM.value, rM instanceof iM ? rM : new iM((function(MM) {
+             MM(rM)
+           }))).then(aM, PM)
+         }
+         nM((OM = OM.apply(MM, rM || [])).next())
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L89-L93` → after: `L55-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L55-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L55-L127) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L89-L93)

```diff
-     function iG(GG) {
-       var bG;
-       if (null === (bG = zG.current) || void 0 === bG || bG.call(zG, uG(GG)), JG[0].current) {
-         const bG = `${(0,YG.g)(GG)}vh`;
-         JG[0].current.style.transform = `translateX(calc(0px - ${bG}))`, JG[1].current.style.transform = `translateX(calc(0px + ${bG}))`, JG[2].current.style.transform = `translateY(calc(0px - ${bG}))`, JG[3].current.style.transform = `translateY(calc(0px + ${bG}))`
+     function PM(MM, rM) {
+       var iM, OM, SM, jM, aM = {
+         label: 0,
+         sent: function() {
+           if (1 & SM[0]) throw SM[1];
+           return SM[1]
+         },
+         trys: [],
+         ops: []
+       };
+       return jM = {
+         next: PM(0),
+         throw: PM(1),
+         return: PM(2)
+       }, "function" === typeof Symbol && (jM[Symbol.iterator] = function() {
+         return this
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L98-L176` → after: `L132-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L132-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L132-L151) · [Before (L98-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L98-L176)

```diff
-     function CG(GG) {
-       let {
-         custom: bG,
-         touch: ZG
-       } = GG;
-       const LG = (0, SG.j)("aimingOverlay", "none"),
-         yG = "1.2vh",
-         kG = "0.3vh";
-       (0, wG.useEffect)((() => {
-         EG && iG(EG)
-       }), []);
-       const UG = (0, wG.useRef)(null !== bG);
-       return (0, wG.useLayoutEffect)((() => {
-         var GG;
-         bG ? null === (GG = zG.current) || void 0 === GG || GG.call(zG, uG(oG)) : UG.current && iG(oG);
-         UG.current = null !== bG
- ... (63 more removed lines; see GitHub link above)
+     function nM(MM, rM) {
+       var iM = "function" === typeof Symbol && MM[Symbol.iterator];
+       if (!iM) return MM;
+       var OM, SM, jM = iM.call(MM),
+         aM = [];
+       try {
+         for (;
+           (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
+       } catch (PM) {
+         SM = {
+           error: PM
+         }
+       } finally {
+         try {
+           OM && !OM.done && (iM = jM.return) && iM.call(jM)
+         } finally {
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L190-L191` → after: `L154-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L154-L157) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L190-L191)

```diff
-     function kG(GG, bG) {
-       return Math.max(1, Math.round(GG * bG))
+     function QM(MM, rM, iM) {
+       if (iM || 2 === arguments.length)
+         for (var OM, SM = 0, jM = rM.length; SM < jM; SM++) !OM && SM in rM || (OM || (OM = Array.prototype.slice.call(rM, 0, SM)), OM[SM] = rM[SM]);
+       return MM.concat(OM || Array.prototype.slice.call(rM))
```

#### 10. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L195-L243` → after: `L245-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L245-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L245-L265) · [Before (L195-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L195-L243)

```diff
-       const ZG = bG * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         wG = function(GG, bG) {
-           if (GG.lines) return kG(GG.lineThickness, bG) % 2;
-           if (GG.dot) return kG(GG.dotSize, bG) % 2;
-           return YG(GG, bG) % 2
-         }(GG, bG),
-         SG = VG(GG.lineThickness * ZG, wG),
-         LG = kG(GG.lineLength, ZG),
-         yG = Math.round(GG.gap * ZG),
-         UG = GG.outline > 0 ? kG(GG.outline, ZG) : 0,
-         fG = [];
-       if (GG.lines && (fG.push({
-           x: SG + yG,
-           y: 0,
-           w: LG,
-           h: SG,
- ... (33 more removed lines; see GitHub link above)
+       var iM = function(MM) {
+         var rM = MM.name;
+         if (rM && -1 !== rM.lastIndexOf(".") && !MM.type) {
+           var iM = rM.split(".").pop().toLowerCase(),
+             OM = zM.get(iM);
+           OM && Object.defineProperty(MM, "type", {
+             value: OM,
+             writable: !1,
+             configurable: !1,
+             enumerable: !0
+           })
+         }
+         return MM
+       }(MM);
+       if ("string" !== typeof iM.path) {
+         var OM = MM.webkitRelativePath;
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L246-L269` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L268) · [Before (L246-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L246-L269)

```diff
-       const QG = fG.map((GG => ({
-         ...GG,
-         x: GG.x - UG,
-         y: GG.y - UG,
-         w: GG.w + 2 * UG,
-         h: GG.h + 2 * UG
-       })));
-       let KG = null,
-         hG = null;
-       if (GG.circle) {
-         const bG = kG(GG.circleThickness, ZG),
-           LG = function(GG, bG) {
-             return GG + (GG % 2 === bG ? 0 : 1)
-           }(YG(GG, ZG), wG),
-           yG = (SG - LG) / 2;
-         KG = pG(yG, LG, bG), UG > 0 && (hG = pG(yG - UG, LG + 2 * UG, bG + 2 * UG))
- ... (8 more removed lines; see GitHub link above)
+       return iM
```

#### 12. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L272-L273` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L272-L273) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L272-L273)

```diff
-     function YG(GG, bG) {
-       return Math.round(GG.circleRadius * bG * 2 + kG(GG.circleThickness, bG))
+     function HM(MM) {
+       return "object" === typeof MM && null !== MM
```

#### 13. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L276-L277` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L276-L279) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L276-L277)

```diff
-     function VG(GG, bG) {
-       return Math.max(2 - bG, 2 * Math.round((GG - bG) / 2) + bG)
+     function hM(MM) {
+       return lM(MM.target.files).map((function(MM) {
+         return LM(MM)
+       }))
```

#### 14. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L280-L288` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L282-L296) · [Before (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L280-L288)

```diff
-     function pG(GG, bG, ZG) {
-       const wG = 2 * ZG >= bG - 1;
-       return {
-         x: GG,
-         y: GG,
-         size: bG,
-         border: Math.min(ZG, Math.floor(bG / 2)),
-         filled: wG
-       }
+     function JM(MM) {
+       return aM(this, void 0, void 0, (function() {
+         return PM(this, (function(rM) {
+           switch (rM.label) {
+             case 0:
+               return [4, Promise.all(MM.map((function(MM) {
+                 return MM.getFile()
+               })))];
+             case 1:
+               return [2, rM.sent().map((function(MM) {
+                 return LM(MM)
+               }))]
+           }
+         }))
+       }))
```

#### 15. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L294` → after: `L300-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L300-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L300-L316) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L294)

```diff
-       return GG && bG ? `scale(${QG})` : "scale(1)"
+       return aM(this, void 0, void 0, (function() {
+         var iM;
+         return PM(this, (function(OM) {
+           switch (OM.label) {
+             case 0:
+               return MM.items ? (iM = lM(MM.items).filter((function(MM) {
+                 return "file" === MM.kind
+               })), "drop" !== rM ? [2, iM] : [4, Promise.all(iM.map(EM))]) : [3, 2];
+             case 1:
+               return [2, yM(UM(OM.sent()))];
+             case 2:
+               return [2, yM(lM(MM.files).map((function(MM) {
+                 return LM(MM)
+               })))]
+           }
+         }))
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L298-L302` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L320-L322) · [Before (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L298-L302)

```diff
-       return "classic" === GG.settings.style ? (0, fG.jsx)(rG, {
-         ...GG
-       }) : (0, fG.jsx)(CG, {
-         ...GG
-       })
+       return MM.filter((function(MM) {
+         return -1 === mM.indexOf(MM.name)
+       }))
```

#### 17. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L306-L315` → after: `L325-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L325-L329) · [Before (L306-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L306-L315)

```diff
-     function JG(GG, bG) {
-       const ZG = {};
-       if (GG.color !== yG.f.color && (ZG.color = (0, yG.k)(GG.color)), GG.opacity !== yG.f.opacity && (ZG.opacity = GG.opacity / 100), GG.outline !== yG.f.outline || GG.outlineColor !== yG.f.outlineColor) {
-         const bG = GG.outline,
-           wG = (0, yG.k)(GG.outlineColor);
-         ZG.textShadow = bG > 0 ? `-${bG}px 0 ${wG}, 0 ${bG}px ${wG}, ${bG}px 0 ${wG}, 0 -${bG}px ${wG}` : "none"
-       }
-       if (GG.size !== yG.f.size) {
-         const wG = GG.size / 100;
-         ZG.fontSize = bG ? `calc(max(1.3rem, 18px) * ${wG})` : `calc(1.3rem * ${wG})`, ZG.marginTop = `-${dG}em`, ZG.transformOrigin = `50% calc(50% + ${dG}em)`
+     function lM(MM) {
+       if (null === MM) return [];
+       for (var rM = [], iM = 0; iM < MM.length; iM++) {
+         var OM = MM[iM];
+         rM.push(OM)
```

#### 18. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L321-L341` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L335-L337) · [Before (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L321-L341)

```diff
-       let {
-         settings: bG,
-         touch: ZG,
-         inPreview: wG,
-         inEditor: LG,
-         pressed: yG = !1,
-         pressRef: kG
-       } = GG;
-       return (0, fG.jsx)("div", {
-         className: SG()("Crosshair", {
-           Touch: ZG,
-           CrosshairInPreview: wG,
-           CrosshairInEditor: LG || wG
-         }),
-         ref: kG,
-         style: {
- ... (5 more removed lines; see GitHub link above)
+       if ("function" !== typeof MM.webkitGetAsEntry) return GM(MM);
+       var rM = MM.webkitGetAsEntry();
+       return rM && rM.isDirectory ? eM(rM) : GM(MM)
```

#### 19. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L344-L366` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L340-L343) · [Before (L344-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L344-L366)

```diff
-     function zG(GG, bG) {
-       return GG / bG + "px"
-     }
- 
-     function EG(GG, bG, ZG, wG) {
-       return {
-         ...uG(GG, bG, ZG),
-         width: zG(GG.w, ZG),
-         height: zG(GG.h, ZG),
-         background: wG
-       }
-     }
- 
-     function oG(GG, bG, ZG) {
-       return {
-         left: zG(GG.x, bG),
- ... (7 more removed lines; see GitHub link above)
+     function UM(MM) {
+       return MM.reduce((function(MM, rM) {
+         return QM(QM([], nM(MM), !1), nM(Array.isArray(rM) ? UM(rM) : [rM]), !1)
+       }), [])
```

#### 20. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L375-L380` → after: `L346-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L346-L350) · [Before (L375-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L375-L380)

```diff
-     function uG(GG, bG, ZG) {
-       const [wG, SG] = GG.arm ? XG[GG.arm] : [0, 0], LG = Math.round(bG * ZG);
-       return {
-         left: zG(GG.x + wG * LG, ZG),
-         top: zG(GG.y + SG * LG, ZG)
-       }
+     function GM(MM) {
+       var rM = MM.getAsFile();
+       if (!rM) return Promise.reject("".concat(MM, " is not a File"));
+       var iM = LM(rM);
+       return Promise.resolve(iM)
```

#### 21. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L384-L388` → after: `L354-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L354-L358) · [Before (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L384-L388)

```diff
-       return GG.arm ? {
-         "data-arm": GG.arm,
-         "data-x": GG.x,
-         "data-y": GG.y
-       } : {}
+       return aM(this, void 0, void 0, (function() {
+         return PM(this, (function(rM) {
+           return [2, MM.isDirectory ? eM(MM) : bM(MM)]
+         }))
+       }))
```

#### 22. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L392-L427` → after: `L362-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L362-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L362-L387) · [Before (L392-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L392-L427)

```diff
-       let {
-         settings: bG,
-         inPreview: ZG,
-         inEditor: wG,
-         pressed: kG = !1,
-         spread: YG,
-         spreadRef: VG
-       } = GG;
-       const pG = (0, LG.useRef)(null),
-         {
-           box: KG,
-           dpr: hG
-         } = function(GG) {
-           const [bG, ZG] = (0, LG.useState)({
-             box: {
-               left: 0,
- ... (20 more removed lines; see GitHub link above)
+       var rM = MM.createReader();
+       return new Promise((function(MM, iM) {
+         var OM = [];
+         ! function SM() {
+           var jM = this;
+           rM.readEntries((function(rM) {
+             return aM(jM, void 0, void 0, (function() {
+               var jM, aM, nM;
+               return PM(this, (function(PM) {
+                 switch (PM.label) {
+                   case 0:
+                     if (rM.length) return [3, 5];
+                     PM.label = 1;
+                   case 1:
+                     return PM.trys.push([1, 3, , 4]), [4, Promise.all(OM)];
+                   case 2:
+ ... (10 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L429-L461` → after: `L389-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L389-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L389-L391) · [Before (L429-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L429-L461)

```diff
-             };
-             wG();
-             const SG = new ResizeObserver(wG);
-             return SG.observe(bG), window.addEventListener("resize", wG), window.addEventListener("scroll", wG, !0), () => {
-               SG.disconnect(), window.removeEventListener("resize", wG), window.removeEventListener("scroll", wG, !0)
-             }
-           }), [GG]), bG
-         }(pG),
-         dG = (0, LG.useRef)(hG);
-       dG.current = hG;
-       const JG = UG(bG, hG, kG && bG.growOnClick ? QG : 1),
-         rG = function(GG, bG, ZG) {
-           const wG = Math.round((GG.left + GG.width / 2) * ZG - bG / 2),
-             SG = Math.round((GG.top + GG.height / 2) * ZG - bG / 2);
-           return {
-             x: wG / ZG - GG.left,
- ... (17 more removed lines; see GitHub link above)
+             }))
+           }), (function(MM) {
+             iM(MM)
```

#### 24. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L463-L501` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L393-L394) · [Before (L463-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L463-L501)

```diff
-         }, () => {
-           VG.current = null
-         }
-       }), [VG]);
-       const WG = null !== YG && void 0 !== YG ? YG : CG.current;
-       return (0, fG.jsx)("div", {
-         ref: pG,
-         className: SG()("CrosshairShapes", {
-           CrosshairInPreview: ZG,
-           CrosshairInEditor: wG || ZG,
-           CrosshairSpreads: void 0 !== VG
-         }),
-         children: (0, fG.jsx)("div", {
-           className: "CrosshairShapesOrigin",
-           style: {
-             left: rG.x,
- ... (23 more removed lines; see GitHub link above)
+         }()
+       }))
```

#### 25. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L520-L522` → after: `L398-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L398-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L398-L420) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L520-L522)

```diff
-       let bG = 90;
-       for (const ZG of GG) bG = 31 * bG + ZG & 255;
-       return bG
+       return aM(this, void 0, void 0, (function() {
+         return PM(this, (function(rM) {
+           return [2, new Promise((function(rM, iM) {
+             MM.file((function(iM) {
+               var OM = LM(iM, MM.fullPath);
+               rM(OM)
+             }), (function(MM) {
+               iM(MM)
+             }))
+           }))]
+         }))
+       }))
+     }
+     var wM = iM(5384);
+ 
+     function tM(MM) {
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L528-L532` → after: `L424-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L424-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L424-L429) · [Before (L528-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L528-L532)

```diff
-       let ZG = 0n;
-       for (const SG of GG) {
-         const GG = fG.indexOf(SG);
-         if (GG < 0) return null;
-         ZG = ZG * QG + BigInt(GG)
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
```

#### 27. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L541-L555` → after: `L435-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L435-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L435-L441) · [Before (L541-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L541-L555)

```diff
-       let bG = "shapes" === GG.style ? 1 : 0;
-       LG.forEach(((ZG, wG) => {
-         GG[ZG] && (bG |= 1 << wG + 1)
-       }));
-       const ZG = [bG];
-       for (const SG of kG) {
-         const bG = (0, wG.g)(SG, GG[SG]);
-         ZG.push(bG >> 16 & 255, bG >> 8 & 255, 255 & bG)
-       }
-       for (const SG of yG) {
-         const {
-           min: bG,
-           step: LG
-         } = wG.b[SG];
-         ZG.push(Math.round(((0, wG.g)(SG, GG[SG]) - bG) / LG))
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? gM(Object(iM), !0).forEach((function(rM) {
+           RM(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : gM(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L557-L561` → after: `L443-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L443-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L443-L474) · [Before (L557-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L557-L561)

```diff
-       return ZG.push(pG(ZG)), SG + function(GG, bG) {
-         let ZG = 0n;
-         for (const SG of GG) ZG = ZG << 8n | BigInt(SG);
-         let wG = "";
-         for (let SG = 0; SG < bG; SG++) wG = fG[Number(ZG % QG)] + wG, ZG /= QG;
+       return MM
+     }
+ 
+     function RM(MM, rM, iM) {
+       return rM in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : MM[rM] = iM, MM
+     }
+ 
+     function pM(MM, rM) {
+       return function(MM) {
+         if (Array.isArray(MM)) return MM
+       }(MM) || function(MM, rM) {
+ ... (16 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L563` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L476-L478) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L563)

```diff
-       }(ZG, YG)
+       }(MM, rM) || WM(MM, rM) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 30. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L566-L569` → after: `L481-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L481-L485) · [Before (L566-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L566-L569)

```diff
-     function dG(GG) {
-       for (const bG of GG.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${YG}})`, "gi"))) {
-         const GG = JG(KG(bG[1], UG));
-         if (GG) return GG
+     function WM(MM, rM) {
+       if (MM) {
+         if ("string" === typeof MM) return sM(MM, rM);
+         var iM = Object.prototype.toString.call(MM).slice(8, -1);
+         return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? sM(MM, rM) : void 0
```

#### 31. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L574-L592` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L489-L491) · [Before (L574-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L574-L592)

```diff
-     function JG(GG) {
-       if (!GG || GG.length !== UG || pG(GG.slice(0, -1)) !== GG[GG.length - 1]) return null;
-       const bG = GG[0],
-         ZG = {
-           ...wG.f,
-           style: 1 & bG ? "shapes" : "classic"
-         };
-       LG.forEach(((GG, wG) => {
-         ZG[GG] = 0 !== (bG & 1 << wG + 1)
-       }));
-       let SG = 1;
-       for (const wG of kG) ZG[wG] = GG[SG] << 16 | GG[SG + 1] << 8 | GG[SG + 2], SG += 3;
-       for (const LG of yG) {
-         const {
-           min: bG,
-           step: yG
- ... (3 more removed lines; see GitHub link above)
+     function sM(MM, rM) {
+       (null == rM || rM > MM.length) && (rM = MM.length);
+       for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
```

#### 32. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L595-L661` → after: `L494-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L494-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L494-L515) · [Before (L595-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L595-L661)

```diff
-   },
-   34439: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => wG,
-       f: () => SG,
-       g: () => LG,
-       k: () => YG,
-       l: () => UG,
-       m: () => VG,
-       n: () => kG,
-       o: () => yG
-     });
-     const wG = {
-         opacity: {
-           min: 5,
-           max: 100,
- ... (51 more removed lines; see GitHub link above)
+     var DM = "file-invalid-type",
+       kM = "file-too-large",
+       ZM = "file-too-small",
+       oM = "too-many-files",
+       fM = function(MM) {
+         MM = Array.isArray(MM) && 1 === MM.length ? MM[0] : MM;
+         var rM = Array.isArray(MM) ? "one of ".concat(MM.join(", ")) : MM;
+         return {
+           code: DM,
+           message: "File type must be ".concat(rM)
+         }
+       },
+       YM = function(MM) {
+         return {
+           code: kM,
+           message: "File is larger than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
+ ... (6 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L664-L683` → after: `L518-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L518-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L518-L521) · [Before (L664-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L664-L683)

```diff
-       SG = Object.freeze({
-         style: "classic",
-         color: 16777215,
-         opacity: 100,
-         outline: 1.2,
-         outlineColor: 0,
-         growOnClick: !0,
-         size: 100,
-         lines: !0,
-         lineLength: 6,
-         lineThickness: 2,
-         gap: 3,
-         tStyle: !1,
-         dot: !1,
-         dotSize: 2,
-         circle: !1,
- ... (4 more removed lines; see GitHub link above)
+       AM = {
+         code: oM,
+         message: "Too many files"
+       };
```

#### 34. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L686-L695` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L524-L525) · [Before (L686-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L686-L695)

```diff
-       var ZG;
-       const {
-         min: LG,
-         max: yG,
-         step: kG
-       } = wG[GG];
-       if (!Number.isFinite(bG)) return SG[GG];
-       const UG = (null !== (ZG = String(kG).split(".")[1]) && void 0 !== ZG ? ZG : "").length,
-         YG = Number((Math.round(bG / kG) * kG).toFixed(UG));
-       return Math.min(yG, Math.max(LG, YG))
+       var iM = "application/x-moz-file" === MM.type || (0, wM.d)(MM, rM);
+       return [iM, iM ? null : fM(rM)]
```

#### 35. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L699-L703` → after: `L529-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L529-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L529-L536) · [Before (L699-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L699-L703)

```diff
-       const wG = "number" === typeof ZG ? LG(bG, ZG) : ZG;
-       return {
-         ...GG,
-         [bG]: wG
-       }
+       if (FM(MM.size))
+         if (FM(rM) && FM(iM)) {
+           if (MM.size > iM) return [!1, YM(iM)];
+           if (MM.size < rM) return [!1, NM(rM)]
+         } else {
+           if (FM(rM) && MM.size < rM) return [!1, NM(rM)];
+           if (FM(iM) && MM.size > iM) return [!1, YM(iM)]
+         } return [!0, null]
```

#### 36. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L706-L708` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L539-L540) · [Before (L706-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L706-L708)

```diff
-     function kG(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(SG).every((wG => ZG.includes(wG) || GG[wG] === bG[wG]))
+     function FM(MM) {
+       return void 0 !== MM && null !== MM
```

#### 37. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L712` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L544) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L712)

```diff
-       return kG(GG, SG)
+       return "function" === typeof MM.isPropagationStopped ? MM.isPropagationStopped() : "undefined" !== typeof MM.cancelBubble && MM.cancelBubble
```

#### 38. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L716` → after: `L548-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L548-L550) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L716)

```diff
-       return `#${GG.toString(16).padStart(6,"0")}`
+       return MM.dataTransfer ? Array.prototype.some.call(MM.dataTransfer.types, (function(MM) {
+         return "Files" === MM || "application/x-moz-file" === MM
+       })) : !!MM.target && !!MM.target.files
```

#### 39. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L720-L721` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L554) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L720-L721)

```diff
-       const bG = /^#?([0-9a-f]{6})$/i.exec(GG.trim());
-       return bG ? parseInt(bG[1], 16) : null
+       MM.preventDefault()
```

#### 40. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L738-L741` → after: `L558-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L558-L563) · [Before (L738-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L738-L741)

```diff
-       if (null === UG) {
-         var GG;
-         const bG = SG.h.getItem(kG);
-         UG = null !== (GG = "string" === typeof bG ? (0, LG.g)(bG) : null) && void 0 !== GG ? GG : yG.f
+       for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+       return function(MM) {
+         for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
+         return rM.some((function(rM) {
+           return !BM(MM) && rM && rM.apply(void 0, [MM].concat(OM)), BM(MM)
+         }))
```

#### 41. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L747-L748` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L568) · [Before (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L747-L748)

```diff
-       UG = GG, (0, yG.l)(GG) ? SG.h.removeItem(kG) : SG.h.setItem(kG, (0, LG.j)(GG));
-       for (const bG of YG) bG()
+       return "audio/*" === MM || "video/*" === MM || "image/*" === MM || "text/*" === MM || /\w+\/[-+.\w]+/g.test(MM)
```

#### 42. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L774` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L572) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L774)

```diff
-       return GG === (0, SG.i)().ybG ? (0, SG.i)().sA : GG
+       return /^.*\.[\w]+$/.test(MM)
```

#### 43. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L778` → after: `L580-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L580-L586) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L778)

```diff
-       return !(0, wG.L)(GG) && LG(GG) === (0, SG.i)().sA
+       return function(MM) {
+         if (Array.isArray(MM)) return jr(MM)
+       }(MM) || function(MM) {
+         if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
+       }(MM) || Sr(MM) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 44. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L782-L899` → after: `L589-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L589-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L589-L606) · [Before (L782-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L782-L899)

```diff
-     function UG() {
-       return (0, SG.i)().physics[kG][1]
-     }
-   },
-   37102: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => uG
-     });
-     var wG = ZG(37105),
-       SG = ZG(188),
-       LG = ZG(4883),
-       yG = ZG(37114),
-       kG = ZG(36778),
-       UG = ZG(37154),
-       YG = ZG(37122),
-       VG = ZG(364),
- ... (102 more removed lines; see GitHub link above)
+     function Or(MM, rM) {
+       return function(MM) {
+         if (Array.isArray(MM)) return MM
+       }(MM) || function(MM, rM) {
+         var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
+         if (null == iM) return;
+         var OM, SM, jM = [],
+           aM = !0,
+           PM = !1;
+         try {
+           for (iM = iM.call(MM); !(aM = (OM = iM.next()).done) && (jM.push(OM.value), !rM || jM.length !== rM); aM = !0);
+         } catch (nM) {
+           PM = !0, SM = nM
+         } finally {
+           try {
+             aM || null == iM.return || iM.return()
+ ... (2 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L901` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L608) · [Before (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L901)

```diff
-         };
+         }
```

#### 46. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L903-L946` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L610-L612) · [Before (L903-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L903-L946)

```diff
-       }
-       liveHowl() {
-         return this._unloaded ? null : this._howl
-       }
-       loaded() {
-         return "loaded" === this._howl.state()
-       }
-       unloadOnceIdle() {
-         (0, yG.e)(this._howl, (() => {
-           this._unloaded = !0
-         }))
-       }
-       setGlobalVolume(GG) {
-         this._volumeMultiplier.setMultiplierType("globalVolume", GG), this._howl.volume(GG)
-       }
-       _setPannerAttr(GG) {
- ... (28 more removed lines; see GitHub link above)
+       }(MM, rM) || Sr(MM, rM) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 47. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L948-L1014` → after: `L614-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L614-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L614-L619) · [Before (L948-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L948-L1014)

```diff
-     const uG = new class {
-       constructor() {
-         this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new JG.c, hG.l.subscribe("appManagerUpdated|soundVolume", (GG => {
-           const bG = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
-           for (const ZG of bG) ZG.setGlobalVolume(GG)
-         }))
-       }
-       play(GG, bG) {
-         var ZG;
-         let LG, yG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ZG = (0, QG.i)()) || void 0 === ZG ? void 0 : ZG.sA,
-           kG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : KG.i,
-           UG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : KG.l,
-           VG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         var fG;
-         (0, QG.i)() ? LG = !!Array.isArray(yG) || (0, YG.d)(yG) !== (null === (fG = (0, QG.i)()) || void 0 === fG ? void 0 : fG.sA): LG = !1;
-         const hG = (0, wG.j)(GG),
- ... (51 more removed lines; see GitHub link above)
+ 
+     function Sr(MM, rM) {
+       if (MM) {
+         if ("string" === typeof MM) return jr(MM, rM);
+         var iM = Object.prototype.toString.call(MM).slice(8, -1);
+         return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? jr(MM, rM) : void 0
```

#### 48. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1017-L1018` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L622) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1017-L1018)

```diff
-   },
-   37186: (GG, bG, ZG) => {
+ 
```

#### 49. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1020-L1021` → after: `L624-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L624-L626) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1020-L1021)

```diff
-       var ZG, wG, SG, LG, yG, kG, UG, YG;
-       return GG.name === bG.name && ((null === (ZG = GG.attributes) || void 0 === ZG || null === (wG = ZG.customAttributes) || void 0 === wG ? void 0 : wG.stackKey) === (null === (SG = bG.attributes) || void 0 === SG || null === (LG = SG.customAttributes) || void 0 === LG ? void  … [truncated]
+       (null == rM || rM > MM.length) && (rM = MM.length);
+       for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
+       return OM
```

#### 50. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1023-L1029` → after: `L628-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L628-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L628-L637) · [Before (L1023-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1023-L1029)

```diff
-     ZG.d(bG, {
-       e: () => wG
-     })
-   },
-   37287: (GG, bG, ZG) => {
-     function wG(GG) {
-       return GG.includes("Leaf Bed")
+ 
+     function ar(MM, rM) {
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
+       return iM
```

#### 51. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1033` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L641-L649) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1033)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(GG) && !wG(GG)
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? ar(Object(iM), !0).forEach((function(rM) {
+           nr(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ar(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
+       }
+       return MM
```

#### 52. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1036-L1037` → after: `L652-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L652-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L652-L658) · [Before (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1036-L1037)

```diff
-     function LG(GG) {
-       return GG.includes(" Strongbed")
+     function nr(MM, rM, iM) {
+       return rM in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : MM[rM] = iM, MM
```

#### 53. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1040-L1041` → after: `L661-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L661-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L661-L674) · [Before (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1040-L1041)

```diff
-     function yG(GG) {
-       return wG(GG) || SG(GG) || LG(GG)
+     function Qr(MM, rM) {
+       if (null == MM) return {};
+       var iM, OM, SM = function(MM, rM) {
+         if (null == MM) return {};
+         var iM, OM, SM = {},
+           jM = Object.keys(MM);
+         for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || (SM[iM] = MM[iM]);
+         return SM
+       }(MM, rM);
+       if (Object.getOwnPropertySymbols) {
+         var jM = Object.getOwnPropertySymbols(MM);
+         for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
+       }
+       return SM
```

#### 54. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1043-L1067` → after: `L676-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L676-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L676-L1076) · [Before (L1043-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1043-L1067)

```diff
-     ZG.d(bG, {
-       d: () => yG,
-       f: () => wG,
-       j: () => LG,
-       n: () => SG
-     })
-   },
-   37283: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => YG
-     });
-     var wG = ZG(37287),
-       SG = ZG(9249);
-     const LG = [],
-       yG = [],
-       kG = [],
- ... (9 more removed lines; see GitHub link above)
+     var zr = (0, OM.forwardRef)((function(MM, rM) {
+       var iM = MM.children,
+         SM = Hr(Qr(MM, VM)),
+         jM = SM.open,
+         aM = Qr(SM, cM);
+       return (0, OM.useImperativeHandle)(rM, (function() {
+         return {
+           open: jM
+         }
+       }), [jM]), OM.createElement(OM.Fragment, null, iM(Pr(Pr({}, aM), {}, {
+         open: jM
+       })))
+     }));
+     zr.displayName = "Dropzone";
+     var Lr = {
+       disabled: !1,
+ ... (385 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1069-L1103` → after: `L1078-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L1078-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/121.js#L1078-L1116) · [Before (L1069-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/121.js#L1069-L1103)

```diff
-   },
-   6488: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG,
-       i: () => SG,
-       j: () => UG,
-       m: () => LG,
-       o: () => YG,
-       q: () => wG,
-       t: () => kG
-     });
-     let wG = function(GG) {
-         return GG[GG.DEFAULT = 0] = "DEFAULT", GG[GG.BOAT = 1] = "BOAT", GG[GG.GLIDER = 2] = "GLIDER", GG[GG.BALLOON = 3] = "BALLOON", GG[GG.SLEEPING = 4] = "SLEEPING", GG[GG.RIDING_MOB = 5] = "RIDING_MOB", GG[GG.CAR = 6] = "CAR", GG[GG.HOVERCRAFT = 7] = "HOVERCRAFT", GG
-       }({}),
-       SG = function(GG) {
-         return GG[GG.WOOD = 0] = "WOOD", GG[GG.OBSIDIAN = 1] = "OBSIDIAN", GG[GG.SPEED = 2] = "SPEED", GG
- ... (19 more removed lines; see GitHub link above)
+ 
+     function hr(MM, rM) {
+       switch (rM.type) {
+         case "focus":
+           return Pr(Pr({}, MM), {}, {
+             jD: !0
+           });
+         case "blur":
+           return Pr(Pr({}, MM), {}, {
+             jD: !1
+           });
+         case "openDialog":
+           return Pr(Pr({}, mr), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/122.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/122.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260)

#### 1. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L6` → after: `L4-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L4-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/122.js#L4-L446) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/122.js#L4-L6)

```diff
-   6491: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => wG
+   5405: (MM, rM, iM) => {
+     function OM(MM) {
+       return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, OM(MM)
+     }
+     Object.defineProperty(rM, "__esModule", {
+       value: !0
+     }), rM.default = void 0;
+     var SM = LM(iM(1116)),
+       jM = function(MM, rM) {
+         if (!rM && MM && MM.__esModule) return MM;
+         if (null === MM || "object" !== OM(MM) && "function" !== typeof MM) return {
+           default: MM
+ ... (427 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L8-L46` → after: `L448-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L448-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/122.js#L448-L644) · [Before (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/122.js#L8-L46)

```diff
-     const wG = {
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
- ... (23 more removed lines; see GitHub link above)
+     var CM = GM;
+     rM.default = CM
+   },
+   5403: (MM, rM, iM) => {
+     var OM;
+     rM.d = void 0;
+     var SM = ((OM = iM(5405)) && OM.__esModule ? OM : {
+       default: OM
+     }).default;
+     rM.d = SM
+   },
+   5413: (MM, rM) => {
+     Object.defineProperty(rM, "__esModule", {
+       value: !0
+     }), rM.capitalize = function(MM) {
+       return MM.charAt(0).toUpperCase() + MM.substr(1)
+ ... (181 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L48-L142` → after: `L646-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/122.js#L646-L647) · [Before (L48-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/122.js#L48-L142)

```diff
-       canCustomiseChar: !0,
-       defaultBlock: "Block of Gold",
-       cantChangeError: "You cannot modify this block",
-       cantBreakError: null,
-       cantBuildError: null,
-       touchscreenActionButton: null,
-       strictFluidBuckets: !0,
-       preserveProtectedFluidSources: !1,
-       fillBrokenBlocksWithWater: !1,
-       canUseZoomKey: !0,
-       canAltAction: !0,
-       canSeeNametagsThroughWalls: !0,
-       showBasicMovementControls: !0,
-       middleTextTop: "",
-       middleTextUpper: "",
-       middleTextLower: "",
- ... (79 more removed lines; see GitHub link above)
+       LM = function(MM) {
+         return MM && MM.ownerDocument && MM.ownerDocument.defaultView || jM
```

#### 4. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L144-L167` → after: `L649-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L649-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/122.js#L649-L799) · [Before (L144-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/122.js#L144-L167)

```diff
-       lightingOverride: null,
-       skyLightColourOverride: null,
-       ambientLightColourOverride: null,
-       visionMinLightColour: null,
-       heldLightColourOverride: null,
-       heldLightRangeOverride: null,
-       heldLightConeAngleOverride: null,
-       dayNightSunOpacity: null,
-       dayNightMoonOpacity: null,
-       dayNightStarOpacity: null,
-       hideCoordinates: !1,
-       canRecordReplays: !0,
-       groundArrowPath: null,
-       _aura: 0,
-       _shield: 0,
-       _health: null,
- ... (8 more removed lines; see GitHub link above)
+       mM = lM(0, 0, 0, 0);
+ 
+     function HM(MM) {
+       return parseFloat(MM) || 0
+     }
+ 
+     function hM(MM) {
+       for (var rM = [], iM = 1; iM < arguments.length; iM++) rM[iM - 1] = arguments[iM];
+       return rM.reduce((function(rM, iM) {
+         return rM + HM(MM["border-" + iM + "-width"])
+       }), 0)
+     }
+ 
+     function JM(MM) {
+       var rM = MM.clientWidth,
+         iM = MM.clientHeight;
+ ... (135 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/123.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/123.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496)

#### 1. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123, 401];
+ export const ids = [123, 706];
```

#### 2. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L4` → after: `L4-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L4-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L4-L54) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L4)

```diff
-   36663: (GG, bG, ZG) => {
+   5372: (MM, rM, iM) => {
+     var OM = iM(5376);
+ 
+     function SM() {}
+ 
+     function jM() {}
+     jM.resetWarningCache = SM, MM.exports = function() {
+       function MM(MM, rM, iM, SM, jM, aM) {
+         if (aM !== OM) {
+           var PM = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw PM.name = "Invariant Violation", PM
+         }
+       }
+ 
+       function rM() {
+         return MM
+ ... (35 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L40` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L58-L64) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L8-L40)

```diff
-     var wG = ZG(333),
-       SG = ZG(3481),
-       LG = ZG(3513),
-       yG = ZG(3507),
-       kG = ZG(3505),
-       UG = ZG(1151),
-       YG = ZG(29),
-       VG = ZG(1702),
-       pG = ZG(1320),
-       fG = ZG(1393),
-       QG = ZG(1006),
-       KG = ZG.n(QG),
-       hG = ZG(1621),
-       dG = ZG(51),
-       JG = ZG(59),
-       rG = ZG(2351),
- ... (17 more removed lines; see GitHub link above)
+     var OM = iM(1591),
+       SM = iM(1520),
+       jM = iM(1188),
+       aM = iM(7093),
+       PM = iM(7068),
+       nM = iM(7051),
+       QM = iM(1303);
```

#### 4. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L42-L46` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L66) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L42-L46)

```diff
-     function MG(GG) {
-       var bG;
-       let {
-         eventName: ZG
-       } = GG;
+     function zM() {
```

#### 5. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L49-L107` → after: `L69-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L69-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L69-L87) · [Before (L49-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L49-L107)

```diff
-       } = (0, UG.w)(), SG = mG.i[ZG], [LG, yG] = (0, dG.useState)((() => Date.now() >= SG.endsAt.getTime())), [kG, YG] = (0, dG.useState)("overall"), VG = function(GG, bG) {
-         const {
-           userContext: ZG,
-           isUserContextUpdating: wG
-         } = (0, oG.e)(), SG = `${GG}:${bG}`, [LG, yG] = (0, dG.useState)({
-           requestKey: SG,
-           leaderboard: {
-             status: "loading"
-           }
-         });
-         return (0, dG.useEffect)((() => {
-           if (wG) return;
-           let LG, kG = !1;
-           const UG = async () => {
-             if ("visible" === document.visibilityState) try {
-               const wG = await IG.d.getGameEventLeaderboard(ZG, {
- ... (43 more removed lines; see GitHub link above)
+       } = (0, jM.A)(), rM = (0, OM.useNavigatePreserveSearch)();
+       return (0, PM.c)(), (0, QM.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, QM.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, QM.jsx)(SM.c, {
+             onClick: () => {
+               rM(nM.P)
+             },
+             children: MM("shaderPackListing:backToPacks")
+           })
+         }), (0, QM.jsx)("h1", {
+           className: "ShaderPackPublishTitle",
+           children: MM("shaderPackListing:publishTitle")
+         }), (0, QM.jsx)(aM.ShaderPackPublishForm, {
+           existing: null,
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L110-L244` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L90) · [Before (L110-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L110-L244)

```diff
-           0 !== Object.keys(UG).length && (LG(UG), clearTimeout(wG.current), wG.current = setTimeout((() => {
-             LG({})
-           }), PG))
-         }), [GG]), (0, dG.useEffect)((() => () => {
-           clearTimeout(wG.current)
-         }), []), SG
-       }("loaded" === VG.status ? VG.leaderboard : null), fG = function(GG) {
-         const [bG, ZG] = (0, dG.useState)(null), wG = "loaded" === GG.status ? GG.leaderboard.goalProgress : void 0;
-         return (0, dG.useEffect)((() => {
-           wG && ZG(wG)
-         }), [wG]), bG
-       }(VG), QG = FG.c[`profileEffect_${SG.prizePack}`];
-       if (LG) return null;
-       const hG = "loaded" === VG.status ? VG.leaderboard : null,
-         JG = null !== (bG = null === hG || void 0 === hG ? void 0 : hG.entries) && void 0 !== bG ? bG : null,
-         rG = null !== hG && void 0 !== hG && hG.own && null !== JG && !JG.some((GG => GG.isOwn)) ? hG.own : null;
- ... (119 more removed lines; see GitHub link above)
+         })]
```

#### 7. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L248-L252` → after: `L110-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L110-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L110-L126) · [Before (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L248-L252)

```diff
-     function AG(GG) {
-       let {
-         event: bG,
-         progress: ZG
-       } = GG;
+     function LM() {
+       var MM;
+       const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
+       return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
+     }
+ 
+     function mM() {
+       (0, OM.useEffect)((() => () => {
+         window.location.pathname.startsWith(aM.P) || (0, aM.h)()
+       }), [])
+     }
+ 
+     function HM() {
+       return (0, PM.e)(zM, !1)
+     }
+ 
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L254-L289` → after: `L128-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L128-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L128-L157) · [Before (L254-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L254-L289)

```diff
-         t: wG
-       } = (0, UG.w)(), SG = null !== ZG && bG.prizeGoals.some(((GG, bG) => ZG[bG] >= GG.target));
-       return (0, lG.jsxs)("div", {
-         className: "GameEventPanelGoals",
-         children: [(0, lG.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: wG(SG ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, lG.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: bG.prizeGoals.map(((GG, bG) => {
-             const SG = null === ZG ? null : Math.min(ZG[bG], GG.target);
-             return (0, lG.jsxs)(dG.Fragment, {
-               children: [bG > 0 && (0, lG.jsx)("div", {
-                 className: "GameEventPanelGoalsOr",
-                 children: wG("gameEvents:goalsOr")
-               }), (0, lG.jsxs)("div", {
- ... (20 more removed lines; see GitHub link above)
+         userContext: MM,
+         isUserContextUpdating: rM
+       } = (0, nM.b)(), [iM, SM] = (0, OM.useState)(null), aM = (0, OM.useRef)(new Set);
+ 
+       function PM(MM, rM) {
+         SM((iM => {
+           const OM = new Set(iM);
+           return rM ? OM.add(MM) : OM.delete(MM), OM
+         }))
+       }
+       return (0, OM.useEffect)((() => {
+         if (rM) return;
+         let iM = !1;
+         return jM.c.getFavouriteShaderPacks(MM).then((MM => {
+           iM || SM(new Set(MM))
+         })).catch((MM => {
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L291-L292` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L159-L160) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L291-L292)

```diff
-         })]
-       })
+         }
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L294-L298` → after: `L162-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L162-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L162-L195) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L294-L298)

```diff
-     var sG = ZG(1490),
-       qG = ZG(1535),
-       nG = ZG(999),
-       gG = ZG(719),
-       eG = ZG(3458);
+   },
+   7051: (MM, rM, iM) => {
+     iM.d(rM, {
+       $: () => DM,
+       B: () => zM,
+       F: () => RM,
+       I: () => JM,
+       K: () => fM,
+       N: () => ZM,
+       P: () => aM,
+       S: () => oM,
+       W: () => nM,
+       Y: () => PM,
+       c: () => lM,
+       d: () => wM,
+       db: () => kM,
+ ... (18 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L301-L394` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L198) · [Before (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L301-L394)

```diff
-       let {
-         gameNameWithVariation: bG
-       } = GG;
-       const ZG = (0, sG.H)(bG),
-         [wG, SG] = (0, dG.useState)(null);
-       if ((0, dG.useEffect)((() => {
-           if (!ZG) return;
-           let GG = !0;
-           return (0, qG.j)(ZG).then((bG => {
-             GG && SG(bG)
-           })).catch((GG => {
-             console.error(`Failed to load the page copy for ${ZG.name}`, GG)
-           })), () => {
-             GG = !1
-           }
-         }), [ZG]), !ZG || !wG || wG.name !== ZG.name) return null;
- ... (78 more removed lines; see GitHub link above)
+       return `${aM}/${encodeURIComponent(MM)}`
```

#### 12. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L396-L418` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L200) · [Before (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L396-L418)

```diff
-     var TG = ZG(1016),
-       HG = ZG(80),
-       tG = ZG(1096),
-       DG = ZG(34528),
-       NG = ZG(1592),
-       OG = ZG(1457),
-       xG = ZG(1444),
-       BG = ZG(1548),
-       Gb = ZG(1398),
-       bb = ZG(1311),
-       Zb = ZG(36668),
-       wb = ZG(1192),
-       Sb = ZG(982),
-       Lb = ZG(352),
-       yb = ZG(988),
-       kb = ZG(1481),
- ... (7 more removed lines; see GitHub link above)
+     let QM = null;
```

#### 13. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L421-L442` → after: `L203-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L203-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L203-L211) · [Before (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L421-L442)

```diff
-       let {
-         preview: bG,
-         isBroken: ZG
-       } = GG;
-       const wG = null === bG ? null : (0, LG.c)(bG, "small"),
-         yG = (0, SG.f)(null !== wG && void 0 !== wG ? wG : LG.m);
-       return null === bG ? (0, lG.jsx)("div", {
-         className: KG()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: ZG
-         }),
-         children: (0, lG.jsx)(TG.c, {
-           name: ZG ? "triangle-exclamation" : "star"
-         })
-       }) : (0, lG.jsx)("div", {
-         className: KG()("FeaturedGamesPopupSlotThumbnail", kG.h),
-         style: (0, kG.e)(yG),
- ... (6 more removed lines; see GitHub link above)
+       QM = MM
+     }
+ 
+     function LM() {
+       return QM
+     }
+ 
+     function mM() {
+       QM = null
```

#### 14. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L446-L469` → after: `L215-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L215-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L215-L223) · [Before (L446-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L446-L469)

```diff
-       let {
-         schematicId: bG,
-         gameName: ZG
-       } = GG;
-       const {
-         userContext: SG
-       } = (0, oG.e)(), LG = (0, Kb.c)(), [yG, kG] = (0, dG.useState)(null), [UG, YG] = (0, dG.useState)(null), [VG, pG] = (0, dG.useState)(!1), QG = (0, dG.useCallback)((() => {
-         YG(null), IG.d.getFeaturedGames(SG).then((GG => {
-           LG.current && kG(GG.slots)
-         })).catch((GG => {
-           console.error("Failed to get featured games", GG), LG.current && YG("Failed to load featured games")
-         }))
-       }), [SG, LG]);
-       (0, dG.useEffect)((() => {
-         QG()
-       }), [QG]);
- ... (8 more removed lines; see GitHub link above)
+       return MM.playerHasRank("developer") || MM.playerHasRank("admin")
+     }
+     const hM = ["terrain", "water", "models", "sunShadows", "strict"],
+       JM = {
+         terrain: "shaderPackListing:filterTerrain",
+         water: "shaderPackListing:filterWater",
+         models: "shaderPackListing:filterModels",
+         sunShadows: "shaderPackListing:filterShadows",
+         strict: "shaderPackListing:filterAllGames"
```

#### 15. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L471-L551` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L225-L227) · [Before (L471-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L471-L551)

```diff
-       return (0, lG.jsxs)("div", {
-         className: "FeaturedGamesPopupBody",
-         children: [(0, lG.jsx)("h1", {
-           className: "FeaturedGamesPopupTitle",
-           children: "Featured Games"
-         }), !yG && !UG && (0, lG.jsx)("div", {
-           className: "FeaturedGamesPopupLoader",
-           children: (0, lG.jsx)(vG.b, {})
-         }), UG && (0, lG.jsx)("div", {
-           className: "FeaturedGamesPopupError",
-           children: UG
-         }), yG && (0, lG.jsxs)(lG.Fragment, {
-           children: [(0, lG.jsx)("div", {
-             className: "FeaturedGamesPopupSlots",
-             children: yG.map((GG => {
-               const ZG = GG.schematicId === bG,
- ... (65 more removed lines; see GitHub link above)
+ 
+     function dM(MM, rM) {
+       return MM.withFeatures.includes(rM) ? "with" : MM.withoutFeatures.includes(rM) ? "without" : null
```

#### 16. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L560-L582` → after: `L231-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L231-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L231-L235) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L560-L582)

```diff
-       let {
-         customLobbies: bG,
-         favouriteLobbies: ZG,
-         toggleLikeLobby: wG,
-         showReport: SG
-       } = GG;
-       const [LG, yG] = (0, dG.useState)(Eb);
-       return (0, dG.useEffect)((() => {
-         if (LG >= bG.length) return;
-         let GG = !0;
-         return (0, zb.e)().then((() => {
-           GG && yG(LG + ob)
-         })), () => {
-           GG = !1
-         }
-       }), [LG, bG.length]), (0, lG.jsx)(lG.Fragment, {
- ... (7 more removed lines; see GitHub link above)
+       return null === MM ? "with" : "with" === MM ? "without" : null
+     }
+ 
+     function lM(MM) {
+       return "with" === MM ? "only" : null === MM ? "include" : void 0
```

#### 17. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L613` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L239-L240) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L613)

```diff
-       const ZG = pb.h[GG.schematicId];
+       const iM = dM(MM, rM),
+         OM = MM => MM.filter((MM => MM !== rM));
```

#### 18. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L615-L629` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L242-L243) · [Before (L615-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L615-L629)

```diff
-         listedVariations: [],
-         backgroundImage: (0, LG.c)(GG, "large"),
-         badges: [],
-         category: GG.gameCategory,
-         title: void 0 !== (null === ZG || void 0 === ZG ? void 0 : ZG.title) ? bG(ZG.title) : GG.name,
-         variationTitle: null,
-         description: void 0 !== (null === ZG || void 0 === ZG ? void 0 : ZG.description) ? bG(ZG.description) : GG.description,
-         ownerSocialPreviewWithoutLocation: "owner" in GG ? GG.owner : null,
-         ccu: GG.ccu,
-         favourites: GG.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in GG ? GG.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
-         canCreateCustomLobbies: !0,
-         countdownInformation: null
+         withFeatures: null === iM ? [...MM.withFeatures, rM] : OM(MM.withFeatures),
+         withoutFeatures: "with" === iM ? [...MM.withoutFeatures, rM] : OM(MM.withoutFeatures)
```

#### 19. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L635-L652` → after: `L256-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L256-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L256-L267) · [Before (L635-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L635-L652)

```diff
-       return null !== (bG = null !== (ZG = (0, Ib.m)() ? function(GG) {
-         for (const [bG, ZG] of Object.entries(Fb)) {
-           const wG = [bG, ...ZG.map((GG => (0, Lb.Wb)(bG, GG)))];
-           if (wG.includes(GG)) return wG
-         }
-         return null
-       }(GG) : null) && void 0 !== ZG ? ZG : null === (wG = pb.d[GG]) || void 0 === wG ? void 0 : wG.listedVariations) && void 0 !== bG ? bG : null
-     }
- 
-     function jb() {
-       const {
-         gameNameWithVariation: GG
-       } = (0, OG.v)();
-       if ((0, dG.useEffect)(Wb.q, []), GG && (0, wb.x)(GG)) return (0, lG.jsx)(Pb, {
-         urlId: GG
-       }, GG);
- ... (2 more removed lines; see GitHub link above)
+       const aM = MM.get(UM),
+         PM = (null !== (rM = MM.get(CM)) && void 0 !== rM ? rM : tM).split(","),
+         nM = MM.get(bM);
+       return {
+         section: "favourites" === aM || "mine" === aM ? aM : "explore",
+         sort: null !== (iM = OM.y.find((rM => rM === MM.get(GM)))) && void 0 !== iM ? iM : wM,
+         withFeatures: hM.filter((MM => PM.includes(MM) && !PM.includes(`-${MM}`))),
+         withoutFeatures: hM.filter((MM => PM.includes(`-${MM}`))),
+         searchQuery: (null === (SM = MM.get(eM)) || void 0 === SM ? void 0 : SM.slice(0, OM.M)) || null,
+         pageNumber: (0, jM.d)(MM.get(jM.c)),
+         banned: "only" === nM ? "with" : "include" === nM ? null : "without"
+       }
```

#### 20. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L655-L689` → after: `L270-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L270-L273) · [Before (L655-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L655-L689)

```diff
-     function Pb(GG) {
-       let {
-         urlId: bG
-       } = GG;
-       const {
-         userContext: ZG,
-         isUserContextUpdating: wG
-       } = (0, oG.e)(), SG = (0, dG.useMemo)((() => (0, NG.i)(bG)), [bG]);
-       (0, dG.useMemo)((() => {
-         if (null === SG) return;
-         const GG = tG.userContextManager.peekCurrentUserContext();
-         (null !== GG ? IG.d.getGame(GG, SG.schematicId) : tG.userContextManager.getCurrentUserContext().then((GG => IG.d.getGame(GG, SG.schematicId)))).catch((GG => {
-           console.error(`Failed to get the custom game ${SG.schematicId}`, GG), (0, NG.f)(bG)
-         }))
-       }), [SG, bG]);
-       const [LG, yG] = (0, dG.useState)(null), kG = (0, DG.b)();
- ... (19 more removed lines; see GitHub link above)
+     function uM(MM, rM) {
+       var iM;
+       const OM = sM(rM);
+       (0, jM.f)(MM, UM, "explore" === rM.section ? null : rM.section), (0, jM.f)(MM, GM, rM.sort === wM ? null : rM.sort), (0, jM.f)(MM, CM, OM === tM ? null : OM), (0, jM.f)(MM, eM, rM.searchQuery), (0, jM.f)(MM, bM, null !== (iM = lM(rM.banned)) && void 0 !== iM ? iM : null), ( … [truncated]
```

#### 21. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L693-L1269` → after: `L277-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L277-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L277-L286) · [Before (L693-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L693-L1269)

```diff
-       var bG, ZG, yG, QG, mG, FG, vG, cG;
-       let {
-         gameNameWithVariation: jG,
-         knownCustomGame: PG = null
-       } = GG;
-       const {
-         t: AG
-       } = (0, UG.w)();
-       (0, Vb.f)();
-       const qG = (0, Vb.i)(),
-         {
-           userContext: nG,
-           isUserContextUpdating: gG
-         } = (0, oG.e)(),
-         eG = (0, Cb.f)(),
-         tG = (0, xG.useNavigatePreserveSearch)(),
- ... (561 more removed lines; see GitHub link above)
+       const rM = new URLSearchParams;
+       return uM(rM, {
+         section: "explore",
+         sort: wM,
+         withFeatures: "strict" === MM ? [MM] : [MM, "strict"],
+         withoutFeatures: [],
+         searchQuery: null,
+         pageNumber: 1,
+         banned: "without"
+       }), `${aM}?${rM.toString()}`
```

#### 22. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1273-L1301` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L290) · [Before (L1273-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1273-L1301)

```diff
-       let {
-         variation: bG,
-         isSelected: ZG,
-         children: wG
-       } = GG;
-       const UG = pb.d[bG],
-         VG = (0, LG.g)(bG, (0, LG.i)(UG)),
-         pG = (0, SG.f)(VG),
-         fG = (0, yG.g)([(0, LG.e)(bG, (0, LG.b)(UG))]);
-       return (0, lG.jsxs)(xG.LinkPreserveSearch, {
-         to: (0, sG.B)(bG),
-         replace: !0,
-         className: KG()("GameInformationVariation", kG.h, {
-           SelectedGameInformationVariation: ZG
-         }),
-         onClick: GG => {
- ... (13 more removed lines; see GitHub link above)
+       return sM(MM) === tM
```

#### 23. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1322-L1363` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L294) · [Before (L1322-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1322-L1363)

```diff
-       let {
-         info: bG,
-         className: ZG
-       } = GG;
-       const {
-         statusText: wG,
-         rowText: SG
-       } = (0, QG.f)();
-       return (0, KG.jsxs)("div", {
-         className: fG()("GameApprovalInfoDetails", ZG),
-         children: [(0, KG.jsxs)("div", {
-           className: fG()("GameApprovalInfoSummary", bG.overallPassed ? "Passed" : "Failed"),
-           children: [(0, KG.jsx)(VG.c, {
-             name: bG.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, KG.jsx)("span", {
-             children: wG(bG.status)
- ... (26 more removed lines; see GitHub link above)
+       return null !== MM.searchQuery || "with" === MM.banned || sM(MM) !== tM
```

#### 24. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1369-L1376` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L298-L301) · [Before (L1369-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1369-L1376)

```diff
-       JG.NotificationProvider.showCustomPopup({
-         body: () => (0, KG.jsx)(zG, {
-           ...GG
-         }),
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
-       })
+       return hM.flatMap((rM => {
+         const iM = dM(MM, rM);
+         return "with" === iM ? [rM] : "without" === iM ? [`-${rM}`] : []
+       })).join(",")
```

#### 25. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1380-L1469` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L317) · [Before (L1380-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1380-L1469)

```diff
-       let {
-         schematicId: bG,
-         canOverride: ZG,
-         onApprovalChanged: pG
-       } = GG;
-       const {
-         t: fG
-       } = (0, dG.w)(), {
-         userContext: QG
-       } = (0, kG.e)(), JG = (0, yG.c)(), [rG, zG] = (0, wG.useState)(null), [EG, oG] = (0, wG.useState)(null), [XG, uG] = (0, wG.useState)(!1), iG = (0, wG.useCallback)((() => {
-         oG(null), LG.d.getGameApprovalInfo(QG, bG).then((GG => {
-           JG.current && zG(GG)
-         })).catch((GG => {
-           console.error("Failed to get game approval info", GG), JG.current && oG(fG("studio:approvalLoadFailed"))
-         }))
-       }), [QG, bG, JG, fG]);
- ... (74 more removed lines; see GitHub link above)
+       return Math.round(100 * Math.max(0, 1 - 1 / MM))
```

#### 26. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1488` → after: `L320-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L320-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L320-L326) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1488)

```diff
-     function yG() {
+     function oM(MM, rM, iM, SM) {
+       const jM = [];
+       MM.isBanned && jM.push({
+         tone: "warning",
+         text: SM("shaderPackListing:ownerBanned"),
+         detail: null
+       });
```

#### 27. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1490-L1546` → after: `L328-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L328-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L328-L349) · [Before (L1490-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1490-L1546)

```diff
-         t: GG,
-         selectedLanguage: bG
-       } = (0, SG.w)();
-       return {
-         statusText: bG => GG(LG[bG]),
-         rowText: ZG => {
-           const LG = (GG, ZG) => (0, wG.lb)((0, SG.j)(bG.code, GG), 0, ZG);
-           switch (ZG.kind) {
-             case "ownerAccountAge": {
-               const bG = ZG.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
-               return {
-                 label: GG("studio:approvalAccountAgeLabel"),
-                 value: GG(bG, {
-                   age: LG(bG, ZG.accountAgeMs),
-                   days: ZG.minAccountAgeDays
-                 })
- ... (41 more removed lines; see GitHub link above)
+         pending: aM
+       } = MM;
+       if (null === MM.brokenError || aM && !aM.error || jM.push({
+           tone: "warning",
+           text: SM("shaderPackListing:ownerBroken"),
+           detail: MM.brokenError
+         }), null !== aM && void 0 !== aM && aM.error) jM.push({
+         tone: "warning",
+         text: SM(rM ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, OM.m)(aM.error) ? null : aM.error
+       });
+       else if (aM) {
+         const MM = null === aM.renderNotBefore ? 0 : aM.renderNotBefore - iM,
+           OM = String(Math.ceil(MM / 6e4)),
+           PM = SM(rM ? MM > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : MM > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: OM
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1551` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L359-L363) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1551)

```diff
-       return null === GG.manualOverride && GG.rows.some((GG => "reportHold" === GG.kind && !GG.passed))
+       return Math.max(1, Math.round(MM / 1024))
+     }
+ 
+     function YM(MM, rM, iM) {
+       return MM instanceof SM.e && MM.errorMessageForUser ? MM.errorMessageForUser : rM(iM)
```

#### 29. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1554` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L366) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1554)

```diff
-   34528: (GG, bG, ZG) => {
+   7077: (MM, rM, iM) => {
```

#### 30. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1556` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L368) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1556)

```diff
-       b: () => LG
+       e: () => jM
```

#### 31. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1558-L1559` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L370-L371) · [Before (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1558-L1559)

```diff
-     var wG = ZG(51),
-       SG = ZG(3423);
+     var OM = iM(44),
+       SM = iM(30);
```

#### 32. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1561-L1570` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L373-L378) · [Before (L1561-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1561-L1570)

```diff
-     function LG() {
-       const [GG, bG] = (0, wG.useState)(!1);
-       return (0, wG.useLayoutEffect)((() => {
-         let GG = !0;
-         return (0, SG.e)().then((() => {
-           GG && bG(!0)
-         })), () => {
-           GG = !1
-         }
-       }), []), GG
+     function jM(MM, rM) {
+       var iM;
+       const [jM, aM] = (0, OM.useState)(null !== (iM = SM.g.getItem(MM)) && void 0 !== iM ? iM : rM);
+       return [jM, rM => {
+         SM.g.setItem(MM, rM), aM(rM)
+       }]
```

#### 33. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1573` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L381) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1573)

```diff
-   8975: (GG, bG, ZG) => {
+   7148: (MM, rM, iM) => {
```

#### 34. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1575` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L383-L384) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1575)

```diff
-       b: () => yG
+       b: () => SM,
+       d: () => jM
```

#### 35. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1577-L1603` → after: `L386-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L386-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L386-L391) · [Before (L1577-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1577-L1603)

```diff
-     var wG = ZG(1290),
-       SG = ZG(1177),
-       LG = ZG(604);
- 
-     function yG(GG) {
-       return GG = function(GG, bG) {
-         var ZG;
-         const wG = new URLSearchParams(bG),
-           SG = wG.get("lobby"),
-           LG = wG.get("vm"),
-           yG = null !== (ZG = SG) && void 0 !== ZG ? ZG : GG.lobbyName,
-           kG = null !== LG && void 0 !== LG ? LG : GG.directJoinVmUrl;
-         if (yG === GG.lobbyName && kG === GG.directJoinVmUrl) return GG;
-         return {
-           ...GG,
-           lobbyName: yG,
- ... (11 more removed lines; see GitHub link above)
+     var OM = iM(30);
+     const SM = "shaderPack";
+     async function jM() {
+       var MM;
+       let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
```

#### 36. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1606` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L394) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1606)

```diff
-   8967: (GG, bG, ZG) => {
+   7054: (MM, rM, iM) => {
```

#### 37. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1608-L1609` → after: `L396-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L396-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L396-L413) · [Before (L1608-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1608-L1609)

```diff
-       c: () => LG,
-       g: () => SG
+       D: () => aM,
+       E: () => OM,
+       I: () => mM,
+       M: () => zM,
+       Q: () => UM,
+       U: () => LM,
+       V: () => QM,
+       b: () => hM,
+       e: () => dM,
+       g: () => JM,
+       k: () => HM,
+       m: () => EM,
+       q: () => CM,
+       t: () => nM,
+       v: () => SM,
+       w: () => GM,
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1611` → after: `L415-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L415-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L415-L433) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1611)

```diff
-     let wG = !1;
+     const OM = ["forest", "desert", "water", "night", "cave"];
+     const SM = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       jM = ["popular", "updated", "newest"],
+ ... (3 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1613-L1614` → after: `L435-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L435-L436) · [Before (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1613-L1614)

```diff
-     function SG() {
-       wG = !0
+     function QM(MM, rM) {
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
```

#### 40. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1617-L1618` → after: `L442-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L442-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/123.js#L442-L470) · [Before (L1617-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/123.js#L1617-L1618)

```diff
-     function LG() {
-       return wG
+     function HM(MM) {
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+       return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof … [truncated]
+     }
+     const hM = "Bloxdhub",
+       JM = "https://bloxdhub.com/shaders";
+ 
+     function dM(MM) {
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
+     }
+     const yM = "Screenshot generation failed.",
+       lM = "Its screenshots couldn't be generated:";
+ 
+     function EM(MM) {
+       var rM;
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/124.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/124.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c)

#### 1. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L2)

```diff
- export const ids = [124, 125];
+ export const ids = [124];
```

#### 2. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L4-L6)

```diff
-   6533: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => SG
+   9502: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => Gr
```

#### 3. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L8` → after: `L8-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L8-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L8-L100) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L8)

```diff
-     var wG = ZG(1067);
+     var OM = iM(1608),
+       SM = iM(19),
+       jM = iM(5035),
+       aM = iM(44),
+       PM = iM(1516);
+     var nM = iM(2039),
+       QM = iM(1591),
+       zM = iM(1429),
+       LM = iM(1188),
+       mM = iM(143),
+       HM = iM(181),
+       hM = iM(1073),
+       JM = iM(1088),
+       dM = iM(1229),
+       yM = iM(2482),
+       lM = iM(1573),
+ ... (77 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L12-L13` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L104-L105) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L12-L13)

```diff
-         href: bG,
-         children: ZG
+         onApply: rM,
+         onSkip: iM
```

#### 5. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L15-L23` → after: `L107-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L107-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L107-L132) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L15-L23)

```diff
-       return (0, wG.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: bG,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [ZG, " ", (0, wG.jsx)("span", {
-           "aria-hidden": "true",
-           children: "\u2197"
-         })]
+       const {
+         t: OM
+       } = (0, LM.A)();
+       return (0, aM.useEffect)((() => {
+         BM.c.skipPlayWait()
+       }), []), (0, XM.jsx)(AM.i, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, XM.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [OM("customTexturePack:downloadPrompt"), (0, XM.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: OM("customTexturePack:authorWarning")
+           }), (0, XM.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: OM("customTexturePack:existingPackSaved")
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L26-L40` → after: `L135-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L135-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L135-L249) · [Before (L26-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L26-L40)

```diff
-   },
-   6524: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       WorldCodeAiChatGptNotice: () => VG,
-       WorldCodeAiDeepSeekNotice: () => YG,
-       e: () => yG,
-       g: () => UG,
-       h: () => kG
-     });
-     var wG = ZG(1151),
-       SG = ZG(6533),
-       LG = ZG(1067);
-     const yG = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       kG = "https://openai.com/policies/terms-of-use/",
-       UG = "https://openai.com/policies/privacy-policy/";
+     async function KM() {
+       let MM = !1;
+       const rM = zM.NotificationProvider.showCustomPopup({
+         body: rM => (0, XM.jsx)(IM, {
+           onApply: () => {
+             MM = !0, rM()
+           },
+           onSkip: rM
+         }),
+         disableExitButton: !0,
+         disablePressBackgroundToClose: !0
+       });
+       return await rM.getResult(), MM
+     }
+     let qM = {
+       wanted: !1
+ ... (99 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L44-L51` → after: `L264-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L264-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L264-L338) · [Before (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L44-L51)

```diff
-         t: GG
-       } = (0, wG.w)();
-       return (0, LG.jsxs)(LG.Fragment, {
-         children: [GG("superBotXd:deepSeekNotice"), " ", (0, LG.jsx)(SG.d, {
-           href: yG,
-           children: GG("superBotXd:deepSeekPrivacyPolicy")
-         })]
-       })
+         error: OM
+       } = rM.debugResult;
+       if (OM instanceof kM.k && "default" !== OM.packSource) {
+         const MM = (0, Pr.e)("js", "game" === OM.packSource ? "game" : "page", (0, Pr.h)(OM));
+         (0, ar.reportClientError)("texture_pack", OM, MM)
+       }
+     }
+ 
+     function Er(MM) {
+       if (null === MM || void 0 === MM || !MM.isError()) return !1;
+       const rM = MM.asError();
+       return rM.code === mM.n.REQUEST_TO_MATCHMAKING && !(0, mr.c)(rM.debugResult.error)
+     }
+     async function Ur(MM, rM, iM) {
+       const OM = (0, zr.M)(rM);
+       async function aM(MM, rM, iM, OM) {
+ ... (59 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L57-L65` → after: `L344-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L344-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L344-L627) · [Before (L57-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L57-L65)

```diff
-       } = (0, wG.w)();
-       return (0, LG.jsxs)(LG.Fragment, {
-         children: [GG("aiHelperChatGpt:notice"), " ", (0, LG.jsx)(SG.d, {
-           href: kG,
-           children: GG("aiHelperChatGpt:terms")
-         }), " ", (0, LG.jsx)(SG.d, {
-           href: UG,
-           children: GG("aiHelperChatGpt:privacyPolicy")
-         })]
+       } = (0, LM.A)(), rM = (0, QM.useNavigatePreserveSearch)(), iM = (0, OM.u)(), HM = (0, OM.D)(), JM = (0, aM.useRef)({
+         t: MM,
+         navigate: rM
+       });
+       JM.current = {
+         t: MM,
+         navigate: rM
+       };
+       const UM = (0, aM.useRef)("");
+       UM.current = iM.pathname + iM.search;
+       const {
+         gameState: GM,
+         clientEscMenuOptions: eM
+       } = (0, SM.m)(["gameState", "clientEscMenuOptions"]), fM = (0, aM.useRef)(null), YM = (0, aM.useRef)(!1);
+       var AM;
+       (0, aM.useEffect)((() => () => {
+ ... (268 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L69-L71` → after: `L631-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L631-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L631-L683) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L69-L71)

```diff
-   6520: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => dG
+   5388: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM
+     });
+     var OM = iM(1202);
+     async function SM(MM) {
+       const rM = await fetch(`${OM.clientSideServerUrls.s3Url}/${MM}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === rM.status || 403 === rM.status) return null;
+       if (!rM.ok) throw new Error(`Failed to download the texture pack (${rM.status})`);
+       return await rM.json()
+     }
+   },
+ ... (37 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L73-L83` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L685) · [Before (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L73-L83)

```diff
-     var wG = ZG(1151),
-       SG = ZG(116),
-       LG = ZG(233),
-       yG = ZG(1393),
-       kG = ZG(1275),
-       UG = ZG(17),
-       YG = ZG(1634),
-       VG = ZG(3386),
-       pG = ZG(3111),
-       fG = ZG(6524),
-       QG = ZG(1067);
+     let OM = !1;
```

#### 11. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L86-L1202` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L688) · [Before (L86-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L86-L1202)

```diff
-       const {
-         t: GG
-       } = (0, wG.w)(), bG = !(0, LG.shouldUseUkPrivacyPolicy)();
-       return (0, QG.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, QG.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: GG("homePage:privacyPolicy")
-         }), (0, QG.jsx)("p", {
-           children: (0, QG.jsxs)("em", {
-             children: ["Last updated: ", VG.g.toLocaleDateString()]
-           })
-         }), (0, QG.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, QG.jsx)("h2", {
-           children: "1. Who We Are"
- ... (1101 more removed lines; see GitHub link above)
+       OM = !0
```

#### 12. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L1206-L1222` → after: `L692-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L692-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L692-L709) · [Before (L1206-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L1206-L1222)

```diff
-       const {
-         adMobPrivacyOptionsRequired: GG
-       } = (0, UG.o)(["adMobPrivacyOptionsRequired"]);
-       if (!GG) return null;
-       return (0, QG.jsx)(yG.d, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await YG.c.request("ads.showPrivacyOptions", {})
-             } catch (GG) {
-               console.error("Failed to open AdMob privacy options:", GG)
-             }
-           })()
-         },
-         children: "Manage Privacy Choices"
- ... (1 more removed lines; see GitHub link above)
+       return OM
+     }
+   },
+   9530: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => PM,
+       g: () => SM,
+       i: () => jM,
+       l: () => aM
+     });
+     let OM = null;
+ 
+     function SM(MM, rM) {
+       return `${rM}\n${null!==MM&&void 0!==MM?MM:""}`
+     }
+ 
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L1226-L1238` → after: `L741-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L741-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/124.js#L741-L802) · [Before (L1226-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/124.js#L1226-L1238)

```diff
-       return (0, QG.jsxs)(QG.Fragment, {
-         children: [(0, SG.isDiscordClient)() && (0, QG.jsx)(QG.Fragment, {
-           children: (0, QG.jsx)(yG.d, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, kG.t)()
-             },
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, QG.jsx)(hG, {}), (0, QG.jsx)(pG.e, {
-           className: "PrivacyPolicyLinks"
-         }), (0, QG.jsx)(KG, {})]
-       })
+       return Promise.all([iM.e(86), iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(174), iM.e(222), iM.e(150), iM.e(153), iM.e(101), iM.e(298), iM.e(75)]).then((() => iM(41755)))
+     }
+ 
+     function LM() {
+       Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).catch((() => {}))
+     }
+ 
+     function mM() {
+       return aM.e.cancelDownloadForJoin(), (0, PM.b)(), (0, SM.c)(), (0, nM.e)(), (0, jM.j)(), LM(), Promise.all([iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(150), iM.e(153), iM.e(70)]).then((() => iM(42162))).then((MM => {
+         let {
+           startJoinLoad: rM
+         } = MM;
+         rM()
+       }), (() => {})), QM ??= zM().then((MM => (MM.startWasmPlay(), MM.followPageUiPack((MM => {
+         OM.e.showGamePack(MM)
+       })), MM)), (MM => {
+ ... (46 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/125.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/125.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c)

#### 1. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/125.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/125.js#L4)

```diff
-   6524: (GG, bG, ZG) => {
+   5401: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L6-L10` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/125.js#L6-L9) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/125.js#L6-L10)

```diff
-       WorldCodeAiChatGptNotice: () => VG,
-       WorldCodeAiDeepSeekNotice: () => YG,
-       e: () => yG,
-       g: () => UG,
-       h: () => kG
+       c: () => hM,
+       f: () => UM,
+       h: () => JM,
+       j: () => EM
```

#### 3. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L12-L19` → after: `L11-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L11-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/125.js#L11-L307) · [Before (L12-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/125.js#L12-L19)

```diff
-     var wG = ZG(1151),
-       SG = ZG(6533),
-       LG = ZG(1067);
-     const yG = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       kG = "https://openai.com/policies/terms-of-use/",
-       UG = "https://openai.com/policies/privacy-policy/";
- 
-     function YG() {
+     var OM = iM(44),
+       SM = iM(5403),
+       jM = iM(4720),
+       aM = iM(1440),
+       PM = iM(5417),
+       nM = iM(1116),
+       QM = iM.n(nM),
+       zM = iM(1429),
+       LM = iM(1830),
+       mM = iM(5419),
+       HM = iM(1303);
+ 
+     function hM(MM) {
+       let {
+         label: rM,
+         onClick: iM,
+ ... (281 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L22-L26` → after: `L310-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L310-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/125.js#L310-L461) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/125.js#L22-L26)

```diff
-       } = (0, wG.w)();
-       return (0, LG.jsxs)(LG.Fragment, {
-         children: [GG("superBotXd:deepSeekNotice"), " ", (0, LG.jsx)(SG.d, {
-           href: yG,
-           children: GG("superBotXd:deepSeekPrivacyPolicy")
+       } = (0, UM.A)(), PM = (0, zM.useNavigatePreserveSearch)(), {
+         userContext: nM
+       } = (0, yM.b)(), [mM, HM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(null), [dM, EM] = (0, OM.useState)(!1), {
+         packId: GM,
+         name: CM,
+         description: RM,
+         live: pM
+       } = rM;
+       async function WM(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
+         HM(!0), JM(null);
+         try {
+           await MM(), rM()
+         } catch (iM) {
+           console.error("Failed to change a shader pack", iM), JM((0, tM.u)(iM, aM, "shaderPackListing:ownerActionFailed"))
+         } finally {
+ ... (136 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L30-L31` → after: `L465-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L465-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/125.js#L465-L477) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/125.js#L30-L31)

```diff
- 
-     function VG() {
+     var pM = iM(65),
+       WM = iM(2e3),
+       sM = iM(1287),
+       DM = iM(5419),
+       kM = iM(1202),
+       ZM = iM(7068),
+       oM = iM(7061),
+       fM = iM(7081);
+ 
+     function YM(MM) {
+       let {
+         item: rM
+       } = MM;
```

#### 6. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L34-L41` → after: `L480-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L480-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/125.js#L480-L546) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/125.js#L34-L41)

```diff
-       } = (0, wG.w)();
-       return (0, LG.jsxs)(LG.Fragment, {
-         children: [GG("aiHelperChatGpt:notice"), " ", (0, LG.jsx)(SG.d, {
-           href: kG,
-           children: GG("aiHelperChatGpt:terms")
-         }), " ", (0, LG.jsx)(SG.d, {
-           href: UG,
-           children: GG("aiHelperChatGpt:privacyPolicy")
+       } = (0, UM.A)(), [SM] = (0, ZM.h)(), [aM, PM] = (0, OM.useState)(SM), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(!1), {
+         s3Url: mM
+       } = kM.clientSideServerUrls, {
+         width: HM,
+         height: hM
+       } = jM.v.large, JM = (0, jM.w)(mM, rM, aM, "large"), {
+         renderVersion: dM
+       } = rM;
+       return (0, gM.jsxs)("div", {
+         className: "ShaderPackPreviews",
+         children: [(0, gM.jsx)(fM.c, {
+           selected: aM,
+           onSelect: MM => {
+             PM(MM), QM(!1)
+           },
+           imageUrl: MM => (0, jM.w)(mM, rM, MM, "thumb")
+ ... (51 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/126.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/126.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b)

#### 1. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L4-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/126.js#L4-L111) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/126.js#L4)

```diff
-   6535: (GG, bG, ZG) => {
+   5451: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => zM,
+       g: () => QM
+     });
+     var OM = iM(44),
+       SM = iM(1520),
+       jM = iM(1188),
+       aM = iM(83),
+       PM = iM(3540),
+       nM = iM(1303);
+ 
+     function QM() {
+       return !(0, aM.isMobile)()
+     }
+ 
+ ... (92 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L6` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/126.js#L113) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/126.js#L6)

```diff
-       default: () => LG
+       ShaderPackPublishForm: () => EM
```

#### 3. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L8-L9` → after: `L115-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L115-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/126.js#L115-L314) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/126.js#L8-L9)

```diff
-     var wG = ZG(1151),
-       SG = ZG(1067);
+     var OM = iM(44),
+       SM = iM(7054),
+       jM = iM(184),
+       aM = iM(5442),
+       PM = iM(1398),
+       nM = iM(1520),
+       QM = iM(1763),
+       zM = iM(1142),
+       LM = iM(7102),
+       mM = iM(7105),
+       HM = iM(1573),
+       hM = iM(1188),
+       JM = iM(7111),
+       dM = iM(7134),
+       yM = iM(7051),
+       lM = iM(1303);
+ ... (184 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L14-L22` → after: `L319-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L319-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/126.js#L319-L503) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/126.js#L14-L22)

```diff
-       } = (0, wG.w)();
-       return (0, SG.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, SG.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: GG("homePage:termsOfService")
-         }), (0, SG.jsx)("p", {
-           children: (0, SG.jsx)("em", {
-             children: "Last updated: July 15, 2025"
+       } = (0, hM.A)(), [rM, iM] = MM("shaderPackListing:bloxdhubHelp", {
+         site: GM
+       }).split(GM);
+       return (0, lM.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [rM, (0, lM.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: SM.g,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: SM.b
+         }), iM]
+       })
+     }
+   },
+   5435: (MM, rM, iM) => {
+ ... (169 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L24-L221` → after: `L505-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L505-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/126.js#L505-L525) · [Before (L24-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/126.js#L24-L221)

```diff
-         }), (0, SG.jsx)("p", {
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, SG.jsx)("h3", {
-           children: "1. General Information"
-         }), (0, SG.jsx)("p", {
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
-         }), (0, SG.jsx)("h3", {
-           children: "2. Definitions"
-         }), (0, SG.jsx)("p", {
-           children: (0, SG.jsxs)("ul", {
-             children: [(0, SG.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, SG.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, SG.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
- ... (182 more removed lines; see GitHub link above)
+         } else mM.set(iM, JM + 1)
+       }
+       for (const hM of mM.keys()) HM.delete(hM);
+       for (const [hM, JM] of iM) {
+         const MM = mM.get(JM);
+         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       }
+       return {
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/127.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/127.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009)

#### 1. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127];
+ export const ids = [127, 130, 151, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L4-L96) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L4)

```diff
-   6540: (GG, bG, ZG) => {
+   5435: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
+     });
+     var OM = iM(5442);
+     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
+       strict: MM,
+       program: rM
+     })))))
+   },
+   41591: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => LM,
+       installListedShaderPack: () => zM
+ ... (77 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L6` → after: `L98-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L98-L111) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L6)

```diff
-       default: () => KG
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
```

#### 4. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L8-L18` → after: `L113-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L113-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L113-L159) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L8-L18)

```diff
-     var wG = ZG(1457),
-       SG = ZG(1501),
-       LG = ZG(2999),
-       yG = ZG(2281),
-       kG = ZG(1393),
-       UG = ZG(1444),
-       YG = ZG(1092),
-       VG = ZG(1012),
-       pG = ZG(1151),
-       fG = ZG(1016),
-       QG = ZG(1067);
+     var OM = iM(5442),
+       SM = iM(5435),
+       jM = iM(30),
+       aM = iM(3855),
+       PM = iM(7148),
+       nM = iM(7120);
+     const QM = "shaderPackChangePending";
+     let zM = null;
+ 
+     function LM(MM, rM, iM) {
+       return {
+         manifest: MM.manifest,
+         files: (0, OM.w)(MM.files),
+         validation: rM,
+         ...iM && {
+           listing: iM
+ ... (31 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L22-L32` → after: `L171-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L171-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L171-L370) · [Before (L22-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L22-L32)

```diff
-       const {
-         t: bG
-       } = (0, pG.w)(), {
-         pack: ZG
-       } = (0, wG.v)(), {
-         userContext: KG
-       } = (0, YG.e)();
-       if (ZG) {
-         const GG = SG.c[ZG];
-         if (null === GG || void 0 === GG || !GG.purchasable) return (0, QG.jsx)(UG.NavigatePreserveSearch, {
-           to: "/"
+       return null === MM ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : bM(MM) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) || MM.validation.fromRecheck ? null === rM ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : tM(MM, rM) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : MM.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (184 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L35-L67` → after: `L373-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L373-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L373-L494) · [Before (L35-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L35-L67)

```diff
-       const hG = ZG ? SG.c[ZG] : null,
-         dG = ZG ? LG.h[(0, yG.h)(ZG)] : null,
-         JG = void 0 !== (null === hG || void 0 === hG ? void 0 : hG.characterSet) || null !== hG && void 0 !== hG && hG.singleItem ? hG.displayName : `${null!==(GG=null===hG||void 0===hG?void 0:hG.displayName)&&void 0!==GG?GG:ZG} Pack`,
-         rG = hG ? `Your ${JG} is Ready!` : "Welcome To Super Rank!",
-         zG = hG ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
-         EG = hG ? !KG.getOwnedCosmeticPacks().includes(ZG) : !KG.playerHasRank("super"),
-         oG = hG ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after … [truncated]
-       return (0, QG.jsxs)("div", {
-         className: "PurchaseWelcome AnimFadeInScaleUp",
-         children: [dG && (0, QG.jsx)(dG, {}), !hG && (0, QG.jsx)(VG.d, {
-           iconName: "bolt",
-           iconCountPerGroup: 10,
-           animation: "Fall",
-           midShowerStart: !0,
-           customClass: "SuperRankWelcomeIconShower"
-         }), (0, QG.jsx)("div", {
- ... (17 more removed lines; see GitHub link above)
+       return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
+         function(MM) {
+           if (0 === MM.length) return "The pack has no .wgsl files.";
+           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           const rM = new Set;
+           for (const {
+               path: iM
+             }
+             of MM) {
+             const MM = HM(iM);
+             if (null !== MM) return MM;
+             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             rM.add(iM)
+           }
+           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+         }(rM) ?? rM
+ ... (106 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L69-L70` → after: `L496-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L496-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/127.js#L496-L516) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/127.js#L69-L70)

```diff
-         })]
-       })
+         } else mM.set(iM, JM + 1)
+       }
+       for (const hM of mM.keys()) HM.delete(hM);
+       for (const [hM, JM] of iM) {
+         const MM = mM.get(JM);
+         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       }
+       return {
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/128.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/128.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf)

#### 1. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128];
+ export const ids = [128, 130, 151, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/128.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/128.js#L4)

```diff
-   6547: (GG, bG, ZG) => {
+   5435: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
+     });
+     var OM = iM(5442);
+     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
+       strict: MM,
+       program: rM
+     })))))
+   },
+   7142: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L6-L29` → after: `L18-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L18-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/128.js#L18-L48) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/128.js#L6-L29)

```diff
-       default: () => fG
-     });
-     var wG = ZG(1302),
-       SG = ZG(51),
-       LG = ZG(86),
-       yG = ZG(1457),
-       kG = ZG(1185),
-       UG = ZG(333),
-       YG = ZG(631);
-     const VG = new URL(kG.m[UG.e.PRODUCTION]).origin;
-     var pG = ZG(1067);
- 
-     function fG() {
-       const GG = (0, yG.v)();
-       return (0, SG.useEffect)((() => {
-         const bG = LG.currentUrl.getSearchParam("code");
- ... (8 more removed lines; see GitHub link above)
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
+     });
+     var OM = iM(5442),
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L31-L39` → after: `L50-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L50-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/128.js#L50-L222) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/128.js#L31-L39)

```diff
-         var SG;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, pG.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, pG.jsx)(wG.b, {
-           showFace: !0,
-           loading: !0
+       }
+     }
+ 
+     function mM(MM) {
+       return Object.keys(MM.files).map((rM => ({
+         path: rM,
+         source: MM.files[rM]
+       })))
+     }
+     let HM = Promise.resolve();
+ 
+     function hM(MM) {
+       const rM = HM.then(MM);
+       return HM = rM.catch((() => {})), rM
+     }
+ 
+ ... (157 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L41` → after: `L224-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L224-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/128.js#L224-L368) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/128.js#L41)

```diff
-       })
+       }
+       return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
+         function(MM) {
+           if (0 === MM.length) return "The pack has no .wgsl files.";
+           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           const rM = new Set;
+           for (const {
+               path: iM
+             }
+             of MM) {
+             const MM = HM(iM);
+             if (null !== MM) return MM;
+             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             rM.add(iM)
+           }
+           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+ ... (129 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/129.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/129.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15)

#### 1. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129];
+ export const ids = [129, 130, 151];
```

#### 2. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L4)

```diff
-   6553: (GG, bG, ZG) => {
+   5435: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
+     });
+     var OM = iM(5442);
+     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
+       strict: MM,
+       program: rM
+     })))))
+   },
+   40300: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L6-L93` → after: `L18-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L18-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L18-L167) · [Before (L6-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L6-L93)

```diff
-       default: () => PG
-     });
-     var wG = ZG(51),
-       SG = ZG(1457),
-       LG = ZG(1006),
-       yG = ZG.n(LG),
-       kG = ZG(333),
-       UG = ZG(6561),
-       YG = ZG(1016),
-       VG = ZG(1444),
-       pG = ZG(4575),
-       fG = ZG(1393),
-       QG = ZG(3113),
-       KG = ZG(4581),
-       hG = ZG(1621),
-       dG = ZG(4573),
- ... (72 more removed lines; see GitHub link above)
+       ShaderPackPage: () => nM,
+       harnessShaderPackMode: () => mM,
+       setHarnessUrlShaderPack: () => LM,
+       shaderPackPage: () => zM
+     });
+     var OM = iM(83),
+       SM = iM(30),
+       jM = (iM(3860), iM(5435), iM(3855)),
+       aM = iM(7148);
+     iM(7120);
+     const PM = {
+       status: "none"
+     };
+     class nM {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
+ ... (134 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L95-L137` → after: `L169-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L169-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L169-L176) · [Before (L95-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L95-L137)

```diff
-       })
-     }
-     var FG = ZG(6576);
- 
-     function vG(GG) {
-       let {
-         results: bG,
-         loading: ZG,
-         failed: wG,
-         onRetry: SG,
-         view: LG,
-         previewView: kG
-       } = GG;
-       const {
-         t: UG
-       } = (0, XG.w)(), YG = (0, FG.k)(), VG = Date.now(), pG = null === bG ? 0 : "owned" === bG.kind ? bG.packs.length : bG.page.results.length;
- ... (27 more removed lines; see GitHub link above)
+       }
+       return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
+         function(MM) {
+           if (0 === MM.length) return "The pack has no .wgsl files.";
+           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           const rM = new Set;
+           for (const {
+               path: iM
```

#### 5. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L139-L194` → after: `L178-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L178-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L178-L291) · [Before (L139-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L139-L194)

```diff
-           }, GG.packId)))
-         }), "owned" === (null === bG || void 0 === bG ? void 0 : bG.kind) && pG > 0 && (0, mG.jsx)("div", {
-           className: "ShaderPackBrowseGrid",
-           children: bG.packs.map((GG => {
-             var bG;
-             return (0, mG.jsx)(IG, {
-               pack: GG,
-               view: kG,
-               notice: GG.owner ? (0, CG.Z)(GG.owner, !(null === (bG = GG.live) || void 0 === bG || !bG.renderId), VG, UG)[0] : void 0
-             }, GG.packId)
-           }))
-         }), null !== bG && 0 === pG && (0, mG.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: UG(aG(LG))
-         })]
-       })
- ... (40 more removed lines; see GitHub link above)
+             of MM) {
+             const MM = HM(iM);
+             if (null !== MM) return MM;
+             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             rM.add(iM)
+           }
+           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+         }(rM) ?? rM
+     }
+ 
+     function zM(MM) {
+       const rM = {};
+       for (const iM of MM) rM[iM.path] = iM.source;
+       return rM
+     }
+ 
+ ... (98 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L196-L205` → after: `L293-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L293-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L293-L308) · [Before (L196-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L196-L205)

```diff
-         }))
-       }
- 
-       function Ub() {
-         const GG = RG.trim() || null;
-         kb({
-           searchQuery: GG,
-           ...null !== GG && !qG.current && (0, CG.q)(eG) && {
-             withFeatures: [],
-             withoutFeatures: []
+         } else mM.set(iM, JM + 1)
+       }
+       for (const hM of mM.keys()) HM.delete(hM);
+       for (const [hM, JM] of iM) {
+         const MM = mM.get(JM);
+         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       }
+       return {
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
```

#### 7. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L207-L427` → after: `L310-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L310-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/129.js#L310-L313) · [Before (L207-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/129.js#L207-L427)

```diff
-         })
-       }(0, dG.e)(yb), (0, FG.d)(), (0, wG.useEffect)((() => {
-         if (aG) return;
-         const GG = ++wb.current,
-           bG = JSON.parse(Sb);
-         xG(!0), Gb(!1), async function(GG) {
-           if ("mine" === GG.section) return {
-             kind: "owned",
-             packs: await zG.d.getOwnedShaderPacks(IG)
-           };
-           const bG = "favourites" === GG.section,
-             ZG = bG && (0, CG.q)(GG),
-             wG = await zG.d.getShaderPacks(IG, {
-               sort: bG ? CG.f : GG.sort,
-               features: ZG ? [] : GG.withFeatures,
-               withoutFeatures: ZG ? [] : GG.withoutFeatures,
- ... (205 more removed lines; see GitHub link above)
+         })),
+         aliases: [...HM.values()],
+         layers: LM
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/130.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/130.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a)

#### 1. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130];
+ export const ids = [130, 151];
```

#### 2. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L4-L6)

```diff
-   6567: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => kG
+   7120: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       loadShaderPackTextures: () => aM,
+       shaderPackTextures: () => PM
```

#### 3. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L8-L26` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L9-L26) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L8-L26)

```diff
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(1151),
-       yG = ZG(1067);
- 
-     function kG(GG) {
-       let {
-         item: bG,
-         className: ZG
-       } = GG;
-       const {
-         t: wG
-       } = (0, LG.w)();
-       return null === bG.renderId || bG.previewsOutdated ? (0, yG.jsx)("div", {
-         className: SG()("ShaderPackPreviewsNotice", ZG),
-         children: (0, yG.jsx)("span", {
- ... (3 more removed lines; see GitHub link above)
+     var OM = iM(5442);
+     let SM = null,
+       jM = null;
+ 
+     function aM() {
+       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: rM,
+           textureNameToIndex: iM,
+           textureAnimationData: jM
+         } = MM;
+         return SM ??= (0, OM.j)(iM, jM, rM), SM
+       })), jM
+     }
+ 
+     function PM() {
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L29-L76` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L29) · [Before (L29-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L29-L76)

```diff
-   6583: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => YG
-     });
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(6561),
-       yG = ZG(1151),
-       kG = ZG(6559),
-       UG = ZG(1067);
- 
-     function YG(GG) {
-       let {
-         selected: bG,
-         onSelect: ZG,
-         imageUrl: wG
- ... (32 more removed lines; see GitHub link above)
+   5442: (MM, rM, iM) => {
```

#### 5. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L162-L163` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L34) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L162-L163)

```diff
-       hb: () => lG,
-       jb: () => jG,
+       j: () => JM,
```

#### 6. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L165-L166` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L36) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L165-L166)

```diff
-       mb: () => zG,
-       n: () => pG,
+       o: () => SM,
```

#### 7. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L168-L170` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L38-L39) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L168-L170)

```diff
-       qb: () => IG,
-       s: () => QG,
-       v: () => aG,
+       t: () => QM,
+       w: () => zM,
```

#### 8. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L173-L188` → after: `L42-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L42-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L42-L85) · [Before (L173-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L173-L188)

```diff
-     var wG = ZG(6561),
-       SG = ZG(140),
-       LG = ZG(4575);
-     const yG = "/shader-packs",
-       kG = `${yG}/publish`;
- 
-     function UG(GG) {
-       return `${yG}/${encodeURIComponent(GG)}`
-     }
-     let YG = null;
- 
-     function VG(GG) {
-       YG = GG
-     }
- 
-     function pG() {
+     const OM = 5;
+ 
+     function SM(MM) {
+       return MM === OM
+     }
+ 
+     function jM(MM) {
+       return [...MM.features]
+     }
+     const aM = 262144,
+       PM = 256,
+       nM = 256;
+ 
+     function QM(MM) {
+       if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
+       const rM = [];
+ ... (28 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L209-L218` → after: `L90-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L90-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L90-L109) · [Before (L209-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L209-L218)

```diff
-       return GG.withFeatures.includes(bG) ? "with" : GG.withoutFeatures.includes(bG) ? "without" : null
-     }
- 
-     function JG(GG) {
-       return null === GG ? "with" : "with" === GG ? "without" : null
-     }
- 
-     function rG(GG) {
-       return "with" === GG ? "only" : null === GG ? "include" : void 0
-     }
+       return MM < rM ? -1 : MM > rM ? 1 : 0
+     }
+ 
+     function mM(MM) {
+       const rM = new TextEncoder;
+       let iM = 0;
+       for (const {
+           source: OM
+         }
+         of MM) iM += rM.encode(OM).byteLength;
+       return iM
+     }
+ 
+     function HM(MM) {
+       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
+       if (MM.length > nM) return `A file path is over ${nM} characters.`;
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L221-L222` → after: `L112-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L112-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L112-L194) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L221-L222)

```diff
-       const ZG = dG(GG, bG),
-         wG = GG => GG.filter((GG => GG !== bG));
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const OM = new Map;
+       rM.forEach(((MM, rM) => {
+         let {
+           numAnimStates: iM,
+           animStartIdx: SM
+         } = MM;
+         for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
+       }));
+       const SM = Object.entries(MM),
+         jM = new Map;
+       for (const [JM, dM] of SM) {
+         const MM = hM.exec(JM);
+         "1" === MM?.[2] && jM.set(MM[1], dM + 1)
+       }
+       const aM = MM => {
+ ... (67 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L224-L439` → after: `L196-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L196-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/130.js#L196-L208) · [Before (L224-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/130.js#L224-L439)

```diff
-         withFeatures: null === ZG ? [...GG.withFeatures, bG] : wG(GG.withFeatures),
-         withoutFeatures: "with" === ZG ? [...GG.withoutFeatures, bG] : wG(GG.withoutFeatures)
-       }
-     }
-     const EG = "section",
-       oG = "sort",
-       XG = "filters",
-       uG = "q",
-       iG = "banned",
-       CG = "popular",
-       WG = "strict";
- 
-     function mG(GG) {
-       var bG, ZG, SG;
-       const yG = GG.get(EG),
-         kG = (null !== (bG = GG.get(XG)) && void 0 !== bG ? bG : WG).split(","),
- ... (200 more removed lines; see GitHub link above)
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
+           }
+         })),
+         aliases: [...HM.values()],
+         layers: LM
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/131.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/131.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430)

#### 1. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L4-L25` → after: `L4-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L4-L36) · [Before (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L4-L25)

```diff
-   41462: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       ShaderPackCategory: () => aG
-     });
-     var wG = ZG(51),
-       SG = ZG(1457),
-       LG = ZG(1393),
-       yG = ZG(1444),
-       kG = ZG(1151),
-       UG = ZG(80),
-       YG = ZG(17),
-       VG = ZG(1579),
-       pG = ZG(6608),
-       fG = ZG(318),
-       QG = ZG(6653),
-       KG = ZG(6645),
- ... (6 more removed lines; see GitHub link above)
+   34641: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => QM
+     });
+     var OM = iM(2590);
+     const SM = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+ 
+     function jM(MM) {
+       return new Promise(((rM, iM) => {
+         MM.onsuccess = () => {
+           rM(MM.result)
+         }, MM.onerror = () => {
+           iM(MM.error)
+         }
+       }))
+     }
+ ... (17 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L28-L48` → after: `L39-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L39-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L39-L250) · [Before (L28-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L28-L48)

```diff
-       const ZG = (0, QG.storedPackOutcome)(GG, bG);
-       return "none" !== ZG.kind || "noCompiler" === ZG.reason
-     }
-     var XG = ZG(1006),
-       uG = ZG.n(XG),
-       iG = ZG(5055),
-       CG = ZG(1016),
-       WG = ZG(6598),
-       mG = ZG(1067);
-     const IG = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
- ... (5 more removed lines; see GitHub link above)
+       return IDBKeyRange.bound([MM, rM], [MM, rM, []])
+     }
+     class QM {
+       constructor() {
+         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
+       }
+       static get supported() {
+         try {
+           return "undefined" !== typeof indexedDB
+         } catch {
+           return !1
+         }
+       }
+       putRecording(MM) {
+         this.write(["recordings"], (rM => {
+           rM.objectStore("recordings").put(MM)
+ ... (196 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L51-L98` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L253-L254) · [Before (L51-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L51-L98)

```diff
-       return "failedRecheck" === GG && bG.listing ? "shaderPack:statusFailedRecheckListed" : IG[GG]
-     }
- 
-     function vG(GG) {
-       let {
-         stored: bG,
-         checking: ZG,
-         webGpuUsable: wG,
-         changePending: SG,
-         compiler: LG,
-         t: yG
-       } = GG;
-       const kG = function(GG, bG, ZG, wG, SG) {
-           const LG = (0, QG.storedPackOutcome)(GG, SG);
-           return "none" === LG.kind ? "noCompiler" === LG.reason ? bG ? "checking" : "noCompiler" : "otherApiVersion" === LG.reason ? "wrongApiVersion" : "failed" : (0, EG.e)() ? "harnessBuild" : "blocked" === LG.kind ? (0, QG.shaderPackNeedsCheck)(GG, SG) ? bG ? "checking" : !1  … [truncated]
-         }(bG, ZG, wG, SG, LG),
- ... (32 more removed lines; see GitHub link above)
+       return new Blob([SM.encode(`${JSON.stringify(MM)}\n`), rM], {
+         type: "text/plain"
```

#### 4. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L101-L105` → after: `L257-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L257-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L257-L582) · [Before (L101-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L101-L105)

```diff
- 
-     function aG(GG) {
-       let {
-         setApplySettingsCallback: bG
-       } = GG;
+     class aM {
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
+         this.token = MM, this.relay = rM, this.nowMs = iM, this.refused = !1, this.skipUntilMs = 0
+       }
+       async send(MM, rM, iM, SM, aM) {
+         if (this.goesDirect(rM, iM)) return null;
+         const PM = jM({
+             token: this.token,
+             contentType: iM,
+             target: MM
+           }, rM),
+           nM = {
+             method: "POST",
+             headers: {
+               "Content-Type": "text/plain"
+ ... (310 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L107-L231` → after: `L584-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L584-L592) · [Before (L107-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L107-L231)

```diff
-         t: ZG
-       } = (0, kG.w)(), [SG, yG] = (0, wG.useState)(null), [YG, VG] = (0, wG.useState)(null), [EG, XG] = (0, wG.useState)(null), [uG] = (0, wG.useState)(fG.k), [iG, CG] = (0, wG.useState)(!0), [WG, IG] = (0, wG.useState)(!1), {
-         loading: FG,
-         error: aG,
-         setError: lG,
-         onFiles: jG
-       } = (0, zG.g)((async GG => {
-         const bG = await (0, pG.loadPageShaderPackCompiler)();
-         if (!bG) return void lG(ZG("shaderPack:compilerUnavailable"));
-         VG(bG);
-         const wG = (0, QG.toStoredShaderPack)(GG, await (0, KG.g)(bG, GG.files));
-         await (0, QG.saveShaderPack)(wG, bG) ? (yG(wG), PG(SG, wG, bG)) : lG(ZG("shaderPack:saveFailed"))
-       }));
- 
-       function PG(GG, ZG, wG) {
-         (function(GG, bG, ZG, wG) {
- ... (109 more removed lines; see GitHub link above)
+         domSegments: PM,
+         ...nM
+       } = MM.manifest, QM = () => ({
+         ...MM,
+         manifest: {
+           ...nM,
+           videoSegments: [],
+           telemetrySegments: [],
+           games: []
```

#### 6. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L233-L239` → after: `L594-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L594-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L594-L658) · [Before (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L233-L239)

```diff
-         children: wG
-       })
-     }
-   },
-   6559: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       D: () => KG,
+         creatorGrants: []
+       }), zM = (0, OM.k)(JSON.stringify(QM())), LM = [];
+       let mM = {
+           request: QM(),
+           items: []
+         },
+         HM = zM;
+       const hM = (MM, rM) => {
+           var iM;
+           return "domSegments" === rM ? null !== (iM = MM.manifest.domSegments) && void 0 !== iM ? iM : [] : "creatorGrants" === rM ? MM.creatorGrants : MM.manifest[rM]
+         },
+         JM = (MM, rM, iM) => iM + (MM.length > 0 ? 1 : "domSegments" === rM.list ? aM : 0);
+       for (const SM of rM) {
+         const MM = (0, OM.k)(JSON.stringify(SM.value));
+         let rM = hM(mM.request, SM.list);
+         mM.items.length > 0 && (HM + JM(rM, SM, MM) > iM || rM.length >= jM) && (LM.push(mM), mM = {
+ ... (49 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L241-L249` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L660) · [Before (L241-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L241-L249)

```diff
-       K: () => mG,
-       N: () => VG,
-       R: () => FG,
-       S: () => hG,
-       V: () => AG,
-       W: () => PG,
-       X: () => yG,
-       Z: () => MG,
-       bb: () => UG,
+       J: () => aM,
```

#### 8. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L254-L260` → after: `L663-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L663-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L663-L667) · [Before (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L254-L260)

```diff
-       hb: () => lG,
-       jb: () => jG,
-       k: () => fG,
-       mb: () => zG,
-       n: () => pG,
-       q: () => vG,
-       qb: () => IG,
+       h: () => EM,
+       j: () => dM,
+       l: () => JM,
+       o: () => nM,
+       r: () => yM,
```

#### 9. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L263-L376` → after: `L670-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L670-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L670-L672) · [Before (L263-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L263-L376)

```diff
-       z: () => sG
-     });
-     var wG = ZG(6561),
-       SG = ZG(140),
-       LG = ZG(4575);
-     const yG = "/shader-packs",
-       kG = `${yG}/publish`;
- 
-     function UG(GG) {
-       return `${yG}/${encodeURIComponent(GG)}`
-     }
-     let YG = null;
- 
-     function VG(GG) {
-       YG = GG
-     }
- ... (98 more removed lines; see GitHub link above)
+       w: () => PM,
+       x: () => mM
+     });
```

#### 10. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L378-L380` → after: `L674-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L674-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L674-L684) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L378-L380)

```diff
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
+         maxFps: 30,
+         bitrate: 178e4,
+         minBitrate: 5e5,
+         maxMacroblocks: 3600,
+         keyframeIntervalMs: 2e3,
+         segmentDurationMs: 3e4,
+         manifestIntervalMs: 3e4,
+         partDurationMs: 4e3,
+         captureBudgetMsPerSecond: 20,
+         captureFrameCostFloorMs: .6,
+         softwareEncoderOnWindows: !0
```

#### 11. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L383-L387` → after: `L687-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L687-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L687-L696) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L383-L387)

```diff
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
+         ...OM,
+         maxFps: 15,
+         bitrate: 5e5,
+         maxMacroblocks: 2040,
+         softwareEncoderOnWindows: !1
+       },
+       jM = {
+         desktop: OM,
+         mobile: SM,
+         tablet: SM
```

#### 12. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L390-L474` → after: `L699-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L699-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L699-L725) · [Before (L390-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L390-L474)

```diff
-     function PG(GG) {
-       return Math.round(100 * Math.max(0, 1 - 1 / GG))
-     }
- 
-     function MG(GG, bG, ZG, SG) {
-       const LG = [];
-       GG.isBanned && LG.push({
-         tone: "warning",
-         text: SG("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: yG
-       } = GG;
-       if (null === GG.brokenError || yG && !yG.error || LG.push({
-           tone: "warning",
- ... (69 more removed lines; see GitHub link above)
+     function aM(MM, rM) {
+       return {
+         ...jM[rM],
+         ...MM
+       }
+     }
+     const PM = "/index/replay/segment-upload-url",
+       nM = "/index/replay/manifest",
+       QM = 65536;
+ 
+     function zM(MM) {
+       return {
+         count: Math.ceil(MM.segmentDurationMs / MM.partDurationMs) + 1,
+         maxBytes: Math.ceil(1.5 * MM.bitrate / 8 * (MM.partDurationMs / 1e3)) + 32768
+       }
+     }
+ ... (11 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L476-L517` → after: `L727-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L727-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/131.js#L727-L745) · [Before (L476-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/131.js#L476-L517)

```diff
-       LG = ["popular", "updated", "newest"],
-       yG = 3,
-       kG = 32,
-       UG = 300;
- 
-     function YG(GG, bG) {
-       return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const VG = 64,
-       pG = 512,
-       fG = 18e5;
- 
-     function QG(GG) {
-       const bG = GG,
-         ZG = null === bG || void 0 === bG ? void 0 : bG.files;
-       return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof … [truncated]
- ... (26 more removed lines; see GitHub link above)
+       lM = {
+         FullSnapshot: 2,
+         IncrementalSnapshot: 3,
+         Meta: 4,
+         Custom: 5,
+         Plugin: 6
+       },
+       EM = {
+         Mutation: 0,
+         MouseMove: 1,
+         MouseInteraction: 2,
+         Scroll: 3,
+         ViewportResize: 4,
+         Input: 5,
+         TouchMove: 6,
+         MediaInteraction: 7,
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/132.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/132.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f)

#### 1. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L2)

```diff
- export const ids = [132, 138, 139];
+ export const ids = [132];
```

#### 2. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L4` → after: `L5-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L5-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L5-L15523) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L4)

```diff
-   40874: (GG, bG, ZG) => {
+   6665: function(MM, rM, iM) {
+     var OM;
+     ! function() {
+       var SM, jM = 1e9,
+         aM = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         PM = !0,
+         nM = "[DecimalError] ",
+         QM = nM + "Invalid argument: ",
+         zM = nM + "Exponent out of range: ",
+         LM = Math.floor,
+ ... (15503 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L6-L20` → after: `L15525-L18277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L15525-L18277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L15525-L18277) · [Before (L6-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L6-L20)

```diff
-       c: () => pG,
-       installListedShaderPack: () => VG
-     });
-     var wG = ZG(6561),
-       SG = ZG(5062),
-       LG = ZG(1163),
-       yG = ZG(6608),
-       kG = ZG(5055),
-       UG = ZG(6653),
-       YG = ZG(6645);
-     async function VG(GG) {
-       const bG = await (0, yG.loadPageShaderPackCompiler)();
-       if (null === bG) return {
-         kind: "failed",
-         reason: "compiler"
+       d: () => GM,
+       e: () => yM,
+       h: () => CM,
+       j: () => EM,
+       k: () => lM
+     });
+     var OM = iM(6709),
+       SM = iM.n(OM),
+       jM = iM(6716),
+       aM = iM.n(jM),
+       PM = iM(6598),
+       nM = iM(5876),
+       QM = iM(5595),
+       zM = iM(6733);
+ 
+     function LM(MM) {
+ ... (2737 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L22-L26` → after: `L18279-L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18279-L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18279-L18308) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L22-L26)

```diff
-       const ZG = await pG(GG, bG);
-       return "failed" === ZG.kind ? ZG : await (0, UG.saveShaderPack)(ZG.stored, bG) ? ((0, UG.markShaderPackChangePending)(), ZG) : {
-         kind: "failed",
-         reason: "save"
-       }
+     const aa = {
+       rangeStep: function(MM, rM, iM) {
+         for (var OM = new(Bj())(MM), SM = 0, jM = []; OM.lt(rM) && SM < 1e5;) jM.push(OM.toNumber()), OM = OM.add(iM), SM++;
+         return jM
+       },
+       getDigitCount: function(MM) {
+         return 0 === MM ? 1 : Math.floor(new(Bj())(MM).abs().log(10).toNumber()) + 1
+       },
+       interpolateNumber: Ma((function(MM, rM, iM) {
+         var OM = +MM;
+         return OM + iM * (+rM - OM)
+       })),
+       uninterpolateNumber: Ma((function(MM, rM, iM) {
+         var OM = rM - +MM;
+         return (iM - MM) / (OM = OM || 1 / 0)
+       })),
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L28-L33` → after: `L18310-L18319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18310-L18319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18310-L18319) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L28-L33)

```diff
-     async function pG(GG, bG) {
-       const ZG = await async function(GG) {
-         let {
-           packId: bG,
-           sourceHash: ZG
-         } = GG;
+ 
+     function na(MM, rM) {
+       return function(MM) {
+         if (Array.isArray(MM)) return MM
+       }(MM) || function(MM, rM) {
+         if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(MM))) return;
+         var iM = [],
+           OM = !0,
+           SM = !1,
+           jM = void 0;
```

#### 6. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L35-L42` → after: `L18321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18321) · [Before (L35-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L35-L42)

```diff
-           const GG = await fetch(`${LG.clientSideServerUrls.s3Url}/${(0,wG.O)(bG,ZG)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!GG.ok) return console.error(`Failed to download shader pack ${bG} (${GG.status})`), null;
-           const SG = await GG.json();
-           return "object" !== typeof SG || null === SG ? (console.error(`Shader pack ${bG}'s source isn't an object`), null) : SG
+           for (var aM, PM = MM[Symbol.iterator](); !(OM = (aM = PM.next()).done) && (iM.push(aM.value), !rM || iM.length !== rM); OM = !0);
```

#### 7. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L44` → after: `L18323-L18329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18323-L18329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18323-L18329) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L44)

```diff
-           return console.error(`Failed to download shader pack ${bG}`, SG), null
+           SM = !0, jM = nM
+         } finally {
+           try {
+             OM || null == PM.return || PM.return()
+           } finally {
+             if (SM) throw jM
+           }
```

#### 8. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L46-L63` → after: `L18331-L18388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18331-L18388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18331-L18388) · [Before (L46-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L46-L63)

```diff
-       }(GG);
-       if (null === ZG) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, kG.g)(ZG.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const yG = (0, SG.u)(ZG.files);
-       if ("string" === typeof yG) return console.error(`A listed shader pack breaks the pack rules: ${yG}`), {
-         kind: "failed",
-         reason: "invalid"
-       };
-       const VG = await (0, YG.g)(bG, yG);
-       if (!1 === (null === VG || void 0 === VG ? void 0 : VG.ok)) return {
- ... (2 more removed lines; see GitHub link above)
+         return iM
+       }(MM, rM) || Qa(MM, rM) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function Qa(MM, rM) {
+       if (MM) {
+         if ("string" === typeof MM) return za(MM, rM);
+         var iM = Object.prototype.toString.call(MM).slice(8, -1);
+         return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? za(MM, rM) : void 0
+       }
+     }
+ 
+     function za(MM, rM) {
+       (null == rM || rM > MM.length) && (rM = MM.length);
+ ... (42 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L65-L71` → after: `L18390-L18927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18390-L18927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18390-L18927) · [Before (L65-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L65-L71)

```diff
-       const pG = {
-         manifest: {
-           apiVersion: ZG.apiVersion,
-           name: GG.name,
-           author: GG.ownerName,
-           description: GG.description || null,
-           keepCircleShadows: !0 === ZG.keepCircleShadows
+       var jM, aM = ma(new(Bj())(rM).sub(MM).div(iM - 1), OM, SM);
+       jM = MM <= 0 && rM >= 0 ? new(Bj())(0) : (jM = new(Bj())(MM).add(rM).div(2)).sub(new(Bj())(jM).mod(aM));
+       var PM = Math.ceil(jM.sub(MM).div(aM).toNumber()),
+         nM = Math.ceil(new(Bj())(rM).sub(jM).div(aM).toNumber()),
+         QM = PM + nM + 1;
+       return QM > iM ? ha(MM, rM, iM, OM, SM + 1) : (QM < iM && (nM = rM > 0 ? nM + (iM - QM) : nM, PM = rM > 0 ? PM : PM + (iM - QM)), {
+         step: aM,
+         tickMin: jM.sub(new(Bj())(PM).mul(aM)),
+         tickMax: jM.add(new(Bj())(nM).mul(aM))
+       })
+     }
+     var Ja = ja((function(MM) {
+         var rM = na(MM, 2),
+           iM = rM[0],
+           OM = rM[1],
+           SM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
+ ... (522 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L73` → after: `L18929-L19061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR18929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L18929-L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L18929-L19061) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L73)

```diff
-         files: yG
+         none: Jj,
+         silhouette: function(MM, rM) {
+           if ((iM = MM.length) > 0) {
+             for (var iM, OM = 0, SM = MM[rM[0]], jM = SM.length; OM < jM; ++OM) {
+               for (var aM = 0, PM = 0; aM < iM; ++aM) PM += MM[aM][OM][1] || 0;
+               SM[OM][1] += SM[OM][0] = -PM / 2
+             }
+             Jj(MM, rM)
+           }
+         },
+         wiggle: function(MM, rM) {
+           if ((SM = MM.length) > 0 && (OM = (iM = MM[rM[0]]).length) > 0) {
+             for (var iM, OM, SM, jM = 0, aM = 1; aM < OM; ++aM) {
+               for (var PM = 0, nM = 0, QM = 0; PM < SM; ++PM) {
+                 for (var zM = MM[rM[PM]], LM = zM[aM][1] || 0, mM = (LM - (zM[aM - 1][1] || 0)) / 2, HM = 0; HM < PM; ++HM) {
+                   var hM = MM[rM[HM]];
+ ... (117 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L75-L79` → after: `L19063-L19183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19063-L19183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19063-L19183) · [Before (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L75-L79)

```diff
-       return {
-         kind: "loaded",
-         stored: (0, UG.toStoredShaderPack)(pG, VG, {
-           packId: GG.packId,
-           sourceHash: GG.sourceHash
+ 
+     function ca(MM) {
+       var rM = MM.axis,
+         iM = MM.ticks,
+         OM = MM.bandSize,
+         SM = MM.entry,
+         jM = MM.index,
+         aM = MM.dataKey;
+       if ("category" === rM.type) {
+         if (!rM.allowDuplicatedCategory && rM.dataKey && !tj()(SM[rM.dataKey])) {
+           var PM = (0, la.d)(iM, "value", SM[rM.dataKey]);
+           if (PM) return PM.coordinate + OM / 2
+         }
+         return iM[jM] ? iM[jM].coordinate + OM / 2 : null
+       }
+       var nM = ga(SM, tj()(aM) ? rM.dataKey : aM);
+ ... (105 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L84` → after: `L19398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19398) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L84)

```diff
-   41713: (GG, bG, ZG) => {
+   6438: (MM, rM, iM) => {
```

#### 13. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L86` → after: `L19400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19400) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L86)

```diff
-       followListingUpdates: () => fG
+       d: () => OM
```

#### 14. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L88-L212` → after: `L19402-L19413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19402-L19413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19402-L19413) · [Before (L88-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L88-L212)

```diff
-     var wG = ZG(200),
-       SG = ZG(17),
-       LG = ZG(1431),
-       yG = ZG(1096),
-       kG = ZG(6608),
-       UG = ZG(5055),
-       YG = ZG(40874),
-       VG = ZG(6653);
-     const pG = ["apiVersion", "invalid", "errors"];
-     async function fG(GG, bG) {
-       const ZG = await yG.userContextManager.getCurrentUserContext(),
-         fG = await LG.d.getShaderPackVersions(ZG, [bG.packId]),
-         QG = function(GG, bG, ZG) {
-           var wG;
-           if (void 0 === ZG || "unlisted" === ZG.status) return {
-             kind: "none"
- ... (109 more removed lines; see GitHub link above)
+     var OM = {
+       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
+       get: function(MM) {
+         return OM[MM]
+       },
+       set: function(MM, rM) {
+         if ("string" === typeof MM) OM[MM] = rM;
+         else {
+           var iM = Object.keys(MM);
+           iM && iM.length && iM.forEach((function(rM) {
+             OM[rM] = MM[rM]
+           }))
```

#### 15. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L216-L221` → after: `L19417-L19433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19417-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19417-L19433) · [Before (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L216-L221)

```diff
- 
-     function fG(GG) {
-       return Object.keys(GG.files).map((bG => ({
-         path: bG,
-         source: GG.files[bG]
-       })))
+   },
+   6702: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM
+     });
+     var OM = function(MM, rM) {
+       var iM = MM.alwaysShow,
+         OM = MM.ifOverflow;
+       return iM && (OM = "extendDomain"), OM === rM
+     }
+   },
+   5873: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     var OM = function(MM, rM) {
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L223` → after: `L19435-L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19435-L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19435-L19442) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L223)

```diff
-     let QG = Promise.resolve();
+   },
+   6695: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       h: () => mM,
+       i: () => QM
+     });
+     iM(5864), iM(44), iM(5712);
```

#### 17. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L226-L227` → after: `L19445-L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19445-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19445-L19449) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L226-L227)

```diff
-       const bG = QG.then(GG);
-       return QG = bG.catch((() => {})), bG
+       return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, OM(MM)
```

#### 18. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L231-L242` → after: `L19453-L19460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19453-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19453-L19460) · [Before (L231-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L231-L242)

```diff
-       return KG((() => JG(GG, bG)))
-     }
- 
-     function dG(GG, bG, ZG) {
-       return KG((async () => JSON.stringify(await (0, kG.e)()) === JSON.stringify(GG) && (null === bG ? (await rG(), !0) : JG(bG, ZG))))
-     }
-     async function JG(GG, bG) {
-       const ZG = await LG.e.setItem(kG.b, GG);
-       return ZG && FG(GG, bG), ZG
-     }
-     async function rG() {
-       await LG.e.removeItem(kG.b), LG.h.removeItem(yG.d)
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
+       return iM
```

#### 19. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L245-L246` → after: `L19463-L19472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19463-L19472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19463-L19472) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L245-L246)

```diff
-     function zG() {
-       return KG(rG)
+     function jM(MM) {
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? SM(Object(iM), !0).forEach((function(rM) {
+           aM(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : SM(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
+       }
+       return MM
```

#### 20. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L249-L250` → after: `L19475-L19493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19475-L19493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19475-L19493) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L249-L250)

```diff
-     function EG(GG, bG) {
-       return "active" === oG(GG, bG).kind
+     function aM(MM, rM, iM) {
+       return (rM = function(MM) {
+         var rM = function(MM, rM) {
+           if ("object" != OM(MM) || !MM) return MM;
+           var iM = MM[Symbol.toPrimitive];
+           if (void 0 !== iM) {
+             var SM = iM.call(MM, rM || "default");
+             if ("object" != OM(SM)) return SM;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === rM ? String : Number)(MM)
+         }(MM, "string");
+         return "symbol" == OM(rM) ? rM : rM + ""
+       }(rM)) in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L254-L274` → after: `L19615-L19627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19615-L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19615-L19627) · [Before (L254-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L254-L274)

```diff
-       var ZG;
-       return null === GG ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iG(GG) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : WG(GG, bG) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : GG.validation.ok ? {
-         kind: "active"
-       } : {
- ... (5 more removed lines; see GitHub link above)
+       if (null == MM) return {};
+       var iM, OM, SM = function(MM, rM) {
+         if (null == MM) return {};
+         var iM = {};
+         for (var OM in MM)
+           if (Object.prototype.hasOwnProperty.call(MM, OM)) {
+             if (rM.indexOf(OM) >= 0) continue;
+             iM[OM] = MM[OM]
+           } return iM
+       }(MM, rM);
+       if (Object.getOwnPropertySymbols) {
+         var jM = Object.getOwnPropertySymbols(MM);
+         for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
```

#### 22. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L278-L279` → after: `L19632-L19637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19632-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19632-L19637) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L278-L279)

```diff
-     function XG() {
-       LG.l.setItem(YG, performance.timeOrigin)
+     function GM(MM) {
+       return GM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, GM(MM)
```

#### 23. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L282-L283` → after: `L19668-L19675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19668-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19668-L19675) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L282-L283)

```diff
-     function uG() {
-       return LG.l.getItem(YG) === performance.timeOrigin
+     function gM(MM, rM) {
+       var iM = [],
+         OM = [];
+       return OM = Array.isArray(rM) ? rM.map((function(MM) {
+         return eM(MM)
+       })) : [eM(rM)], tM(MM).forEach((function(MM) {
+         var rM = SM()(MM, "type.displayName") || SM()(MM, "type.name"); - 1 !== OM.indexOf(rM) && iM.push(MM)
+       })), iM
```

#### 24. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L286-L287` → after: `L19678-L19768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19678-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19678-L19768) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L286-L287)

```diff
-     function iG(GG) {
-       return !(0, SG.g)(GG.manifest.apiVersion)
+     function uM(MM, rM) {
+       var iM = gM(MM, rM);
+       return iM && iM[0]
+     }
+     var RM = function(MM) {
+         if (!MM || !MM.props) return !1;
+         var rM = MM.props,
+           iM = rM.width,
+           OM = rM.height;
+         return !(!(0, JM.y)(iM) || iM <= 0 || !(0, JM.y)(OM) || OM <= 0)
+       },
+       pM = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
+       WM = function(MM) {
+         return MM && MM.type && nM()(MM.type) && pM.indexOf(MM.type) >= 0
+       },
+       sM = function(MM) {
+ ... (75 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L291` → after: `L19783-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19783-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19783-L19787) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L291)

```diff
-       return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
+       return aM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, aM(MM)
```

#### 26. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L295-L296` → after: `L19791-L19798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19791-L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19791-L19798) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L295-L296)

```diff
-       var ZG;
-       return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
+       return iM
```

#### 27. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L300-L302` → after: `L19802-L19810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19802-L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19802-L19810) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L300-L302)

```diff
-       return KG((async () => {
-         FG(await (0, kG.e)(!0), GG)
-       }))
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? PM(Object(iM), !0).forEach((function(rM) {
+           QM(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : PM(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
+       }
+       return MM
```

#### 28. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L305-L308` → after: `L19813-L19831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19813-L19831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19813-L19831) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L305-L308)

```diff
-     function IG() {
-       return KG((async () => {
-         LG.h.removeItem(yG.d)
-       }))
+     function QM(MM, rM, iM) {
+       return (rM = function(MM) {
+         var rM = function(MM, rM) {
+           if ("object" != aM(MM) || !MM) return MM;
+           var iM = MM[Symbol.toPrimitive];
+           if (void 0 !== iM) {
+             var OM = iM.call(MM, rM || "default");
+             if ("object" != aM(OM)) return OM;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === rM ? String : Number)(MM)
+         }(MM, "string");
+         return "symbol" == aM(rM) ? rM : rM + ""
+       }(rM)) in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L311-L312` → after: `L19884-L19885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19884-L19885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19884-L19885) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L311-L312)

```diff
-     function FG(GG, bG) {
-       EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
+     function PM(MM, rM, iM) {
+       return !0 === rM ? SM()(MM, iM) : aM()(rM) ? SM()(MM, rM) : MM
```

#### 30. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L315-L318` → after: `L19888-L19894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19888-L19894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19888-L19894) · [Before (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L315-L318)

```diff
-   6627: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadShaderPackTextures: () => yG,
-       shaderPackTextures: () => kG
+   5898: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => zM,
+       e: () => QM,
+       i: () => PM,
+       k: () => LM,
+       l: () => mM
```

#### 31. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L320-L322` → after: `L19896-L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19896-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19896-L19898) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L320-L322)

```diff
-     var wG = ZG(5062);
-     let SG = null,
-       LG = null;
+     var OM = iM(44),
+       SM = iM(5514),
+       jM = iM.n(SM);
```

#### 32. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L324-L332` → after: `L19900-L19905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19900-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19900-L19905) · [Before (L324-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L324-L332)

```diff
-     function yG() {
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: bG,
-           textureNameToIndex: ZG,
-           textureAnimationData: LG
-         } = GG;
-         return SG ??= (0, wG.j)(ZG, LG, bG), SG
-       })), LG
+     function aM(MM) {
+       return aM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, aM(MM)
```

#### 33. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L335-L336` → after: `L19955-L20008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR19955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L19955-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L19955-L20008) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L335-L336)

```diff
-     function kG() {
-       if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
+     function yM(MM) {
+       if ("object" === typeof MM && null !== MM) {
+         var rM = MM.$$typeof;
+         switch (rM) {
+           case OM:
+             switch (MM = MM.type) {
+               case jM:
+               case PM:
+               case aM:
+               case mM:
+               case HM:
+                 return MM;
+               default:
+                 switch (MM = MM && MM.$$typeof) {
+                   case zM:
+                   case QM:
+ ... (38 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L340` → after: `L20012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20012) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L340)

```diff
-   6645: (GG, bG, ZG) => {
+   6607: (MM, rM, iM) => {
```

#### 35. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L342-L343` → after: `L20014-L20015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20014-L20015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20014-L20015) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L342-L343)

```diff
-       e: () => UG,
-       g: () => kG
+       b: () => jM,
+       c: () => PM
```

#### 36. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L345-L385` → after: `L20017-L20039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20017-L20039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20017-L20039) · [Before (L345-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L345-L385)

```diff
-     var wG = ZG(6653),
-       SG = ZG(6627),
-       LG = ZG(101);
-     const yG = 100;
-     async function kG(GG, bG) {
-       var ZG;
-       let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
-       const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
-       if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
-       const kG = await async function(GG) {
-         if (!GG) return null;
-         try {
-           const bG = await (0, LG.r)(GG);
-           return bG ? await bG.requestDevice() : null
-         } catch (bG) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
- ... (25 more removed lines; see GitHub link above)
+     var OM = iM(6615),
+       SM = iM(6620);
+ 
+     function jM() {
+       var MM, rM, iM = (0, SM.c)().unknown(void 0),
+         aM = iM.domain,
+         PM = iM.range,
+         nM = 0,
+         QM = 1,
+         zM = !1,
+         LM = 0,
+         mM = 0,
+         HM = .5;
+ 
+       function hM() {
+         var iM = aM().length,
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L387-L392` → after: `L20041-L20044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20041-L20044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20041-L20044) · [Before (L387-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L387-L392)

```diff
-         }(GG, kG, bG))));
-         return UG ? null : YG(GG, GG.QwG(bG.flat()), yG.offInStrict)
-       } catch (VG) {
-         return console.error("Couldn't validate the shader pack on WebGPU.", VG), null
-       } finally {
-         kG.destroy()
+         }(iM).map((function(rM) {
+           return SM + MM * rM
+         }));
+         return PM(OM ? hM.reverse() : hM)
```

#### 38. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L395-L408` → after: `L20070-L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20070-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20070-L20075) · [Before (L395-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L395-L408)

```diff
-     async function UG(GG, bG) {
-       var ZG;
-       if (!(0, wG.shaderPackNeedsCheck)(GG, bG) || (0, wG.isOtherApiVersion)(GG)) return GG;
-       const SG = await kG(bG, (0, wG.storedShaderPackFiles)(GG));
-       if (!SG) return GG;
-       const LG = !1 === (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) && !GG.validation.fromRecheck,
-         yG = {
-           ...GG,
-           validation: LG ? SG : {
-             ...SG,
-             fromRecheck: !0
-           }
-         };
-       return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
+ 
+     function aM(MM) {
+       var rM = MM.copy;
+       return MM.padding = MM.paddingOuter, delete MM.paddingInner, delete MM.paddingOuter, MM.copy = function() {
+         return aM(rM())
+       }, MM
```

#### 39. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L411-L418` → after: `L20078-L20079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20078-L20079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20078-L20079) · [Before (L411-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L411-L418)

```diff
-     function YG(GG, bG, ZG) {
-       return {
-         headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
-         ok: 0 === bG.length,
-         errors: bG.slice(0, yG),
-         moreErrors: Math.max(0, bG.length - yG),
-         offInStrict: ZG
-       }
+     function PM() {
+       return aM(jM.apply(null, arguments).paddingInner(1))
```

#### 40. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L421` → after: `L20082-L20107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20082-L20107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20082-L20107) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L421)

```diff
-   6561: (GG, bG, ZG) => {
+   6615: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           this.range(MM);
+           break;
+         default:
+           this.range(rM).domain(MM)
+       }
+       return this
+     }
+ 
+     function SM(MM, rM) {
+       switch (arguments.length) {
+ ... (10 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L433-L440` → after: `L20116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20116) · [Before (L433-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L433-L440)

```diff
-       e: () => hG,
-       h: () => QG,
-       l: () => zG,
-       n: () => XG,
-       q: () => UG,
-       u: () => SG,
-       v: () => oG,
-       z: () => LG
+       f: () => QM
```

#### 42. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L442-L460` → after: `L20118-L20144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20118-L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20118-L20144) · [Before (L442-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L442-L460)

```diff
-     const wG = ["forest", "desert", "water", "night", "cave"];
-     const SG = {
-         full: {
-           width: 3840,
-           height: 2160
-         },
-         large: {
-           width: 1920,
-           height: 1080
-         },
-         thumb: {
-           width: 640,
-           height: 360
-         }
-       },
-       LG = ["popular", "updated", "newest"],
- ... (3 more removed lines; see GitHub link above)
+     class OM extends Map {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PM;
+         if (super(), Object.defineProperties(this, {
+             _intern: {
+               value: new Map
+             },
+             _key: {
+               value: rM
+             }
+           }), null != MM)
+           for (const [iM, OM] of MM) this.set(iM, OM)
+       }
+       get(MM) {
+         return super.get(SM(this, MM))
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L463` → after: `L20147-L20152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20147-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20147-L20152) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L463)

```diff
-       return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
+       let {
+         _intern: iM,
+         _key: OM
+       } = MM;
+       const SM = OM(rM);
+       return iM.has(SM) ? iM.get(SM) : rM
```

#### 44. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L469-L472` → after: `L20155-L20170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20155-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20155-L20170) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L469-L472)

```diff
-     function QG(GG) {
-       const bG = GG,
-         ZG = null === bG || void 0 === bG ? void 0 : bG.files;
-       return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof … [truncated]
+     function jM(MM, rM) {
+       let {
+         _intern: iM,
+         _key: OM
+       } = MM;
+       const SM = OM(rM);
+       return iM.has(SM) ? iM.get(SM) : (iM.set(SM, rM), rM)
+     }
+ 
+     function aM(MM, rM) {
+       let {
+         _intern: iM,
+         _key: OM
+       } = MM;
+       const SM = OM(rM);
+       return iM.has(SM) && (rM = iM.get(SM), iM.delete(SM)), rM
```

#### 45. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L478` → after: `L20174-L20204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20174-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20174-L20204) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L478)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(GG)}`
+       return null !== MM && "object" === typeof MM ? MM.valueOf() : MM
+     }
+     var nM = iM(6615);
+     const QM = Symbol("implicit");
+ 
+     function zM() {
+       var MM = new OM,
+         rM = [],
+         iM = [],
+         SM = QM;
+ 
+       function jM(OM) {
+         let jM = MM.get(OM);
+         if (void 0 === jM) {
+           if (SM !== QM) return SM;
+           MM.set(OM, jM = rM.push(OM) - 1)
+ ... (15 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L480-L481` → after: `L20206-L20211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20206-L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20206-L20211) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L480-L481)

```diff
-     const JG = "Screenshot generation failed.",
-       rG = "Its screenshots couldn't be generated:";
+   },
+   6686: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     Array.prototype.slice;
```

#### 47. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L484-L485` → after: `L20214-L20221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20214-L20221) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L484-L485)

```diff
-       var bG;
-       return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
+       return "object" === typeof MM && "length" in MM ? MM : Array.from(MM)
+     }
+   },
+   6563: (MM, rM, iM) => {
+     function OM(MM) {
+       return function() {
+         return MM
+       }
```

#### 48. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L488-L489` → after: `L20236-L20308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20236-L20308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20236-L20308) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L488-L489)

```diff
-     function EG(GG, bG) {
-       return `shaderPacks/${GG}/${bG}.json`
+     function PM(MM) {
+       this._ += MM[0];
+       for (let rM = 1, iM = MM.length; rM < iM; ++rM) this._ += arguments[rM] + MM[rM]
+     }
+     class nM {
+       constructor(MM) {
+         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == MM ? PM : function(MM) {
+           let rM = Math.floor(MM);
+           if (!(rM >= 0)) throw new Error(`invalid digits: ${MM}`);
+           if (rM > 15) return PM;
+           const iM = 10 ** rM;
+           return function(MM) {
+             this._ += MM[0];
+             for (let rM = 1, OM = MM.length; rM < OM; ++rM) this._ += Math.round(arguments[rM] * iM) / iM + MM[rM]
+           }
+         }(MM)
+ ... (57 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L492-L493` → after: `L20311-L20322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20311-L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20311-L20322) · [Before (L492-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L492-L493)

```diff
-     function oG(GG, bG, ZG, wG) {
-       return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
+     function QM(MM) {
+       let rM = 3;
+       return MM.digits = function(iM) {
+         if (!arguments.length) return rM;
+         if (null == iM) rM = null;
+         else {
+           const MM = Math.floor(iM);
+           if (!(MM >= 0)) throw new RangeError(`invalid digits: ${iM}`);
+           rM = MM
+         }
+         return MM
+       }, () => new nM(rM)
```

#### 50. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L496-L497` → after: `L20333-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20333-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/132.js#L20333-L20339) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/132.js#L496-L497)

```diff
-     function XG(GG, bG, ZG, wG) {
-       return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
+     function jM(MM, rM) {
+       if (!MM) {
+         if (OM) throw new Error(SM);
+         var iM = "function" === typeof rM ? rM() : rM,
+           jM = iM ? "".concat(SM, ": ").concat(iM) : SM;
+         throw new Error(jM)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/133.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/133.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934)

#### 1. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L4-L6` → after: `L5-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L5-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L5-L13) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L4-L6)

```diff
-   42202: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       startHarnessShaderPack: () => pG
+   6888: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       Graph: () => NM,
+       debug: () => Wi,
+       default: () => Di,
+       graphlib: () => jM,
+       layout: () => Hi,
+       util: () => si,
+       version: () => jr
```

#### 2. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L8-L38` → after: `L15-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L15-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L15-L271) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L8-L38)

```diff
-     var wG = ZG(6561),
-       SG = ZG(5062),
-       LG = ZG(6636),
-       yG = ZG(6608),
-       kG = ZG(5055),
-       UG = ZG(39633),
-       YG = ZG(6627),
-       VG = ZG(6645);
-     async function pG(GG, bG) {
-       const {
-         stored: ZG,
-         info: pG
-       } = await async function(GG, bG) {
-         const ZG = await async function(GG) {
-           const bG = await fetch(GG);
-           if (!bG.ok) throw new Error(`Couldn't fetch the shader pack at ${GG}: HTTP ${bG.status}`);
- ... (15 more removed lines; see GitHub link above)
+     var OM = Object.defineProperty,
+       SM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? OM(MM, rM, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: iM
+       }) : MM[rM] = iM)(MM, "symbol" != typeof rM ? rM + "" : rM, iM),
+       jM = {};
+     ((MM, rM) => {
+       for (var iM in rM) OM(MM, iM, {
+         get: rM[iM],
+         enumerable: !0
+       })
+     })(jM, {
+       Graph: () => NM,
+       alg: () => yM
+ ... (241 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L41-L67` → after: `L285-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L285-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L285-L350) · [Before (L41-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L41-L67)

```diff
-             url: GG,
-             name: ZG.name,
-             features: [],
-             errors: [],
-             runsInMode: !1
-           },
-           fG = (0, SG.u)(ZG.files);
-         if ("string" === typeof fG) return pG.errors = [{
-           file: null,
-           line: 0,
-           message: fG
-         }], {
-           stored: UG,
-           info: pG
-         };
-         const QG = await (0, yG.loadPageShaderPackCompiler)();
- ... (11 more removed lines; see GitHub link above)
+             v: rM
+           };
+         return void 0 !== iM && (SM.value = iM), void 0 !== OM && (SM.parent = OM), SM
+       }))
+     }
+ 
+     function JM(MM) {
+       return MM.edges().map((rM => {
+         let iM = MM.edge(rM),
+           OM = {
+             v: rM.v,
+             w: rM.w
+           };
+         return void 0 !== rM.name && (OM.name = rM.name), void 0 !== iM && (OM.value = iM), OM
+       }))
+     }
+ ... (50 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L69` → after: `L352-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L352-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L352-L395) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L69)

```diff
-           info: pG
+           QM = function() {
+             PM.forEach((function(MM) {
+               OM(MM).forEach((function(rM) {
+                 let iM = rM.v === MM ? rM.v : rM.w,
+                   OM = iM === rM.v ? rM.w : rM.v;
+                 nM({
+                   v: iM,
+                   w: OM
+                 })
+               }))
+             }))
+           };
+         PM.forEach((function(MM) {
+           let iM = MM === rM ? 0 : Number.POSITIVE_INFINITY;
+           jM[MM] = {
+             distance: iM,
+ ... (28 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L71-L77` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L397-L398) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L71-L77)

```diff
-       }(GG, bG), [fG] = pG.errors;
-       if (fG) {
-         const GG = null === fG.file ? "" : `${fG.file}:${fG.line}: `,
-           bG = pG.errors.length > 1 ? ` (${pG.errors.length-1} more)` : "";
-         return {
-           info: pG,
-           problem: `The shader pack doesn't compile: ${GG}${fG.message}${bG}`
+         size() {
+           return this._arr.length
```

#### 6. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L79-L86` → after: `L400-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L400-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L400-L491) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L79-L86)

```diff
-       }
-       return pG.runsInMode ? ((0, UG.setHarnessUrlShaderPack)(ZG, bG), {
-         info: pG,
-         problem: null
-       }) : {
-         info: pG,
-         problem: `The shader pack runs nothing in ${bG} mode`
-       }
+         keys() {
+           return this._arr.map((MM => MM.key))
+         }
+         has(MM) {
+           return MM in this._keyIndices
+         }
+         priority(MM) {
+           let rM = this._keyIndices[MM];
+           if (void 0 !== rM) return this._arr[rM].priority
+         }
+         min() {
+           if (0 === this.size()) throw new Error("Queue underflow");
+           return this._arr[0].key
+         }
+         add(MM, rM) {
+           let iM = this._keyIndices,
+ ... (76 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L116-L121` → after: `L495-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L495-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L495-L529) · [Before (L116-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L116-L121)

```diff
-       return {
-         manifest: GG.manifest,
-         files: (0, wG.y)(GG.files),
-         validation: bG,
-         ...ZG && {
-           listing: ZG
+       return MM.nodes().reduce((function(OM, SM) {
+         return OM[SM] = eM(MM, SM, rM, iM), OM
+       }), {})
+     }
+ 
+     function wM(MM) {
+       let rM = 0,
+         iM = [],
+         OM = {},
+         SM = [];
+ 
+       function jM(aM) {
+         var PM;
+         let nM = OM[aM] = {
+           onStack: !0,
+           lowlink: rM,
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L127-L130` → after: `L538-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L538-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L538-L542) · [Before (L127-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L127-L130)

```diff
-       return Object.keys(GG.files).map((bG => ({
-         path: bG,
-         source: GG.files[bG]
-       })))
+       return wM(MM).filter((function(rM) {
+         var iM;
+         let OM = rM[0];
+         return !!OM && (rM.length > 1 || 1 === rM.length && (null != (iM = MM.outEdges(OM, OM)) ? iM : []).length > 0)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L132` → after: `L544-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L544-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L544-L592) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L132)

```diff
-     let QG = Promise.resolve();
+     var gM = () => 1;
+ 
+     function uM(MM, rM, iM) {
+       return function(MM, rM, iM) {
+         let OM = {},
+           SM = MM.nodes();
+         return SM.forEach((function(MM) {
+           let jM = {};
+           OM[MM] = jM, jM[MM] = {
+             distance: 0,
+             predecessor: ""
+           }, SM.forEach((function(rM) {
+             MM !== rM && (jM[rM] = {
+               distance: Number.POSITIVE_INFINITY,
+               predecessor: ""
+             })
+ ... (33 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L135-L136` → after: `L595-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L595-L603) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L135-L136)

```diff
-       const bG = QG.then(GG);
-       return QG = bG.catch((() => {})), bG
+       let rM = {},
+         iM = {},
+         OM = [];
+       if (MM.sinks().forEach((function SM(jM) {
+           var aM;
+           if (jM in iM) throw new RM;
+           jM in rM || (iM[jM] = !0, rM[jM] = !0, null == (aM = MM.predecessors(jM)) || aM.forEach(SM), delete iM[jM], OM.push(jM))
+         })), Object.keys(rM).length !== MM.nodeCount()) throw new RM;
+       return OM
```

#### 11. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L139-L140` → after: `L606-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L606-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L606-L613) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L139-L140)

```diff
-     function hG(GG, bG) {
-       return KG((() => JG(GG, bG)))
+     function WM(MM) {
+       try {
+         pM(MM)
+       } catch (rM) {
+         if (rM instanceof RM) return !1;
+         throw rM
+       }
+       return !0
```

#### 12. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L143-L144` → after: `L616-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L616-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L616-L626) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L143-L144)

```diff
-     function dG(GG, bG, ZG) {
-       return KG((async () => JSON.stringify(await (0, kG.e)()) === JSON.stringify(GG) && (null === bG ? (await rG(), !0) : JG(bG, ZG))))
+     function sM(MM, rM, iM, OM, SM) {
+       Array.isArray(rM) || (rM = [rM]);
+       let jM = rM => {
+           var iM;
+           return null != (iM = MM.isDirected() ? MM.successors(rM) : MM.neighbors(rM)) ? iM : []
+         },
+         aM = {};
+       return rM.forEach((function(rM) {
+         if (!MM.hasNode(rM)) throw new Error("Graph does not have node: " + rM);
+         SM = DM(MM, rM, "post" === iM, aM, jM, OM, SM)
+       })), SM
```

#### 13. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L146-L148` → after: `L628-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L628-L632) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L146-L148)

```diff
-     async function JG(GG, bG) {
-       const ZG = await LG.e.setItem(kG.b, GG);
-       return ZG && FG(GG, bG), ZG
+ 
+     function DM(MM, rM, iM, OM, SM, jM, aM) {
+       return rM in OM || (OM[rM] = !0, iM || (aM = jM(aM, rM)), SM(rM).forEach((function(rM) {
+         aM = DM(MM, rM, iM, OM, SM, jM, aM)
+       })), iM && (aM = jM(aM, rM))), aM
```

#### 14. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L150-L151` → after: `L634-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L634-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L634-L638) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L150-L151)

```diff
-     async function rG() {
-       await LG.e.removeItem(kG.b), LG.h.removeItem(yG.d)
+ 
+     function kM(MM, rM, iM) {
+       return sM(MM, rM, iM, (function(MM, rM) {
+         return MM.push(rM), MM
+       }), [])
```

#### 15. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L154-L155` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L641-L642) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L154-L155)

```diff
-     function zG() {
-       return KG(rG)
+     function ZM(MM, rM) {
+       return kM(MM, rM, "post")
```

#### 16. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L159` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L646) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L159)

```diff
-       return "active" === oG(GG, bG).kind
+       return kM(MM, rM, "pre")
```

#### 17. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L164-L183` → after: `L651-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L651-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L651-L661) · [Before (L164-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L164-L183)

```diff
-       return null === GG ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iG(GG) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : WG(GG, bG) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : GG.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (4 more removed lines; see GitHub link above)
+       let OM, SM = new nM,
+         jM = {},
+         aM = new GM;
+ 
+       function PM(MM) {
+         let iM = MM.v === OM ? MM.w : MM.v,
+           SM = aM.priority(iM);
+         if (void 0 !== SM) {
+           let PM = rM(MM);
+           PM < SM && (jM[iM] = OM, aM.decrease(iM, PM))
+         }
```

#### 18. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L187-L188` → after: `L681-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L681-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L681-L705) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L187-L188)

```diff
-     function XG() {
-       LG.l.setItem(YG, performance.timeOrigin)
+     function YM(MM, rM, iM, OM) {
+       return function(MM, rM, iM, OM) {
+         if (void 0 === iM) return eM(MM, rM, iM, OM);
+         let SM = !1,
+           jM = MM.nodes();
+         for (let aM = 0; aM < jM.length; aM++) {
+           let PM = jM[aM];
+           if (void 0 === PM) continue;
+           let nM = OM(PM);
+           for (let MM = 0; MM < nM.length; MM++) {
+             let rM = nM[MM];
+             if (!rM) continue;
+             let OM = rM.v === PM ? rM.v : rM.w;
+             iM({
+               v: OM,
+               w: OM === rM.v ? rM.w : rM.v
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L191-L192` → after: `L709-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L709-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L709-L712) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L191-L192)

```diff
-     function uG() {
-       return LG.l.getItem(YG) === performance.timeOrigin
+     function AM(MM, rM, iM, OM) {
+       let SM = OM;
+       for (; MM.hasNode(SM);) SM = cM(OM);
+       return iM.dummy = rM, MM.setNode(SM, iM), SM
```

#### 20. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L196` → after: `L716-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L716-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L716-L737) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L196)

```diff
-       return !(0, SG.g)(GG.manifest.apiVersion)
+       let rM = new NM({
+         multigraph: MM.isMultigraph()
+       }).setGraph(MM.graph());
+       return MM.nodes().forEach((iM => {
+         MM.children(iM).length || rM.setNode(iM, MM.node(iM))
+       })), MM.edges().forEach((iM => {
+         rM.setEdge(iM, MM.edge(iM))
+       })), rM
+     }
+ 
+     function vM(MM, rM) {
+       let iM, OM, SM = MM.x,
+         jM = MM.y,
+         aM = rM.x - SM,
+         PM = rM.y - jM,
+         nM = MM.width / 2,
+ ... (6 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L200` → after: `L741-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L741-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L741-L754) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L200)

```diff
-       return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
+       let rM = Mr(KM(MM) + 1).map((() => []));
+       return MM.nodes().forEach((iM => {
+         let OM = MM.node(iM),
+           SM = OM.rank;
+         void 0 !== SM && (rM[SM] || (rM[SM] = []), rM[SM][OM.order] = iM)
+       })), rM
+     }
+ 
+     function BM(MM, rM, iM, OM) {
+       let SM = {
+         width: 0,
+         height: 0
+       };
+       return arguments.length >= 4 && (SM.rank = iM, SM.order = OM), AM(MM, "border", SM, rM)
```

#### 22. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L204-L205` → after: `L759-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L759-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L759-L779) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L204-L205)

```diff
-       var ZG;
-       return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
+       if (rM.length > XM) {
+         let iM = function(MM) {
+           let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XM,
+             iM = [];
+           for (let OM = 0; OM < MM.length; OM += rM) {
+             let SM = MM.slice(OM, OM + rM);
+             iM.push(SM)
+           }
+           return iM
+         }(rM);
+         return MM(...iM.map((rM => MM(...rM))))
+       }
+       return MM(...rM)
+     }
+ 
+     function KM(MM) {
+ ... (5 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L209-L210` → after: `L797-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L797-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L797-L991) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L209-L210)

```diff
-       return KG((async () => {
-         FG(await (0, kG.e)(!0), GG)
+       return MM + "" + ++VM
+     }
+ 
+     function Mr(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       null == rM && (rM = MM, MM = 0);
+       let OM = MM => MM < rM;
+       iM < 0 && (OM = MM => rM < MM);
+       let SM = [];
+       for (let jM = MM; OM(jM); jM += iM) SM.push(jM);
+       return SM
+     }
+ 
+     function rr(MM, rM) {
+       let iM = {};
+       for (let OM of rM) void 0 !== MM[OM] && (iM[OM] = MM[OM]);
+ ... (179 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L214-L216` → after: `L995-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L995-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L995-L1029) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L214-L216)

```diff
-     function IG() {
-       return KG((async () => {
-         LG.h.removeItem(yG.d)
+     function hr(MM) {
+       MM.graph().dummyChains = [], MM.edges().forEach((rM => function(MM, rM) {
+         let iM, OM, SM, jM = rM.v,
+           aM = MM.node(jM).rank,
+           PM = rM.w,
+           nM = MM.node(PM).rank,
+           QM = rM.name,
+           zM = MM.edge(rM),
+           LM = zM.labelRank;
+         if (nM === aM + 1) return;
+         for (MM.removeEdge(rM), SM = 0, ++aM; aM < nM; ++SM, ++aM) zM.points = [], OM = {
+           width: 0,
+           height: 0,
+           edgeLabel: zM,
+           edgeObj: rM,
+           rank: aM
+ ... (19 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L221` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1034) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L221)

```diff
-       EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
+       return MM.node(rM.w).rank - MM.node(rM.v).rank - MM.edge(rM).minlen
```

#### 26. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L223-L233` → after: `L1036-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1036-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1036-L1278) · [Before (L223-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L223-L233)

```diff
-   },
-   6645: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => UG,
-       g: () => kG
-     });
-     var wG = ZG(6653),
-       SG = ZG(6627),
-       LG = ZG(101);
-     const yG = 100;
-     async function kG(GG, bG) {
+     var yr = function(MM) {
+       let rM = new NM({
+           directed: !1
+         }),
+         iM = MM.nodes();
+       if (0 === iM.length) throw new Error("Graph must have at least one node");
+       let OM, SM, jM = iM[0],
+         aM = MM.nodeCount();
+       for (rM.setNode(jM, {}); lr(rM, MM) < aM && (OM = Er(rM, MM), OM);) SM = rM.hasNode(OM.v) ? dr(MM, OM) : -dr(MM, OM), Ur(rM, MM, SM);
+       return rM
+     };
+ 
+     function lr(MM, rM) {
+       return MM.nodes().forEach((function iM(OM) {
+         let SM = rM.nodeEdges(OM);
+         SM && SM.forEach((SM => {
+ ... (227 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L235-L250` → after: `L1280-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1280-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1280-L1283) · [Before (L235-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L235-L250)

```diff
-       let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
-       const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
-       if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
-       const kG = await async function(GG) {
-         if (!GG) return null;
-         try {
-           const bG = await (0, LG.r)(GG);
-           return bG ? await bG.requestDevice() : null
-         } catch (bG) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
-         }
-       }(wG);
-       if (!kG) return null;
-       let UG = !1;
-       kG.lost.then((() => {
-         UG = !0
+       let nM = MM.children(aM);
+       if (!nM.length) return void(aM !== rM && MM.setEdge(rM, aM, {
+         weight: 0,
+         minlen: iM
```

#### 28. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L252-L277` → after: `L1285-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1285-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1285-L1308) · [Before (L252-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L252-L277)

```diff
-       try {
-         const bG = await Promise.all(yG.validationModules.map((bG => async function(GG, bG, ZG) {
-           bG.pushErrorScope("validation");
-           const wG = bG.createShaderModule({
-               code: ZG.code
-             }),
-             SG = bG.popErrorScope(),
-             {
-               messages: LG
-             } = await wG.getCompilationInfo(),
-             yG = LG.filter((GG => "error" === GG.type)).map((bG => GG.mapValidationMessage(ZG, bG))),
-             kG = await SG;
-           kG && 0 === yG.length && yG.push({
-             file: null,
-             line: 0,
-             message: kG.message,
- ... (10 more removed lines; see GitHub link above)
+       let QM = BM(MM, "_bt"),
+         zM = BM(MM, "_bb"),
+         LM = MM.node(aM);
+       MM.setParent(QM, aM), LM.borderTop = QM, MM.setParent(zM, aM), LM.borderBottom = zM, nM.forEach((PM => {
+         var nM;
+         Yr(MM, rM, iM, OM, SM, jM, PM);
+         let LM = MM.node(PM),
+           mM = LM.borderTop ? LM.borderTop : PM,
+           HM = LM.borderBottom ? LM.borderBottom : PM,
+           hM = LM.borderTop ? OM : 2 * OM,
+           JM = mM !== HM ? 1 : SM - (null != (nM = jM[aM]) ? nM : 0) + 1;
+         MM.setEdge(QM, mM, {
+           weight: hM,
+           minlen: JM,
+           nestingEdge: !0
+         }), MM.setEdge(HM, zM, {
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L279` → after: `L1310-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1310-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1310-L1335) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L279)

```diff
-     async function UG(GG, bG) {
+     var Nr = function(MM) {
+       MM.children(Or).forEach((function rM(iM) {
+         let OM = MM.children(iM),
+           SM = MM.node(iM);
+         if (OM.length && OM.forEach(rM), SM && Object.hasOwn(SM, "minRank")) {
+           SM.borderLeft = [], SM.borderRight = [];
+           for (let rM = SM.minRank, OM = SM.maxRank + 1; rM < OM; ++rM) Ar(MM, "borderLeft", "_bl", iM, SM, rM), Ar(MM, "borderRight", "_br", iM, SM, rM)
+         }
+       }))
+     };
+ 
+     function Ar(MM, rM, iM, OM, SM, jM) {
+       let aM = {
+           width: 0,
+           height: 0,
+           rank: jM,
+ ... (10 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L281-L289` → after: `L1337-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1337-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1337-L1551) · [Before (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L281-L289)

```diff
-       if (!(0, wG.shaderPackNeedsCheck)(GG, bG) || (0, wG.isOtherApiVersion)(GG)) return GG;
-       const SG = await kG(bG, (0, wG.storedShaderPackFiles)(GG));
-       if (!SG) return GG;
-       const LG = !1 === (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) && !GG.validation.fromRecheck,
-         yG = {
-           ...GG,
-           validation: LG ? SG : {
-             ...SG,
-             fromRecheck: !0
+       let iM = null == (rM = MM.graph().rankdir) ? void 0 : rM.toLowerCase();
+       ("bt" === iM || "rl" === iM) && function(MM) {
+         MM.nodes().forEach((rM => Br(MM.node(rM)))), MM.edges().forEach((rM => {
+           var iM;
+           let OM = MM.edge(rM);
+           null == (iM = OM.points) || iM.forEach(Br), Object.hasOwn(OM, "y") && Br(OM)
+         }))
+       }(MM), ("lr" === iM || "rl" === iM) && (function(MM) {
+         MM.nodes().forEach((rM => Xr(MM.node(rM)))), MM.edges().forEach((rM => {
+           var iM;
+           let OM = MM.edge(rM);
+           null == (iM = OM.points) || iM.forEach(Xr), Object.hasOwn(OM, "x") && Xr(OM)
+         }))
+       }(MM), vr(MM))
+     }
+ 
+ ... (199 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L292` → after: `L1668-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1668-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1668-L1703) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L292)

```diff
-       return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
+       for (let jM of MM.nodes()) {
+         let rM = MM.node(jM);
+         if ("number" == typeof rM.rank && SM(rM.rank, jM), "number" == typeof rM.minRank && "number" == typeof rM.maxRank)
+           for (let MM = rM.minRank; MM <= rM.maxRank; MM++) MM !== rM.rank && SM(MM, jM)
+       }
+       return rM.map((function(rM) {
+         return ri(MM, rM, iM, OM.get(rM) || [])
+       }))
+     }
+ 
+     function Si(MM, rM, iM, OM) {
+       let SM = !0,
+         jM = new NM;
+       MM.forEach((function(MM) {
+         iM.forEach((MM => jM.setEdge(MM.left, MM.right)));
+         let aM = MM.graph().root,
+ ... (20 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L296-L301` → after: `L1707-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1707-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1707-L1709) · [Before (L296-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L296-L301)

```diff
-       return {
-         headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
-         ok: 0 === bG.length,
-         errors: bG.slice(0, yG),
-         moreErrors: Math.max(0, bG.length - yG),
-         offInStrict: ZG
+       if (rM > iM) {
+         let MM = rM;
+         rM = iM, iM = MM
```

#### 33. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L304-L338` → after: `L1714-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1714-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1714-L1781) · [Before (L304-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L304-L338)

```diff
-   },
-   6561: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       B: () => kG,
-       C: () => yG,
-       F: () => wG,
-       G: () => fG,
-       K: () => VG,
-       O: () => EG,
-       S: () => pG,
-       T: () => YG,
-       b: () => KG,
-       c: () => dG,
-       e: () => hG,
-       h: () => QG,
-       l: () => zG,
- ... (19 more removed lines; see GitHub link above)
+ 
+     function Pi(MM, rM, iM) {
+       if (rM > iM) {
+         let MM = rM;
+         rM = iM, iM = MM
+       }
+       let OM = MM[rM];
+       return void 0 !== OM && Object.hasOwn(OM, iM)
+     }
+ 
+     function ni(MM, rM, iM, OM) {
+       let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         jM = {},
+         aM = function(MM, rM, iM, OM) {
+           let SM = new NM,
+             jM = MM.graph(),
+ ... (52 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L340-L344` → after: `L1783-L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1783-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1783-L1811) · [Before (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L340-L344)

```diff
-       },
-       LG = ["popular", "updated", "newest"],
-       yG = 3,
-       kG = 32,
-       UG = 300;
+       }
+       return nM((function(MM) {
+         let rM = aM.inEdges(MM);
+         jM[MM] = rM ? rM.reduce(((MM, rM) => {
+           var iM;
+           let OM = null != (iM = jM[rM.v]) ? iM : 0,
+             SM = aM.edge(rM);
+           return Math.max(MM, OM + (void 0 !== SM ? SM : 0))
+         }), 0) : 0
+       }), (function(MM) {
+         return aM.predecessors(MM) || []
+       })), nM((function(rM) {
+         let iM = aM.outEdges(rM),
+           OM = Number.POSITIVE_INFINITY;
+         iM && (OM = iM.reduce(((MM, rM) => {
+           let iM = jM[rM.w],
+ ... (13 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L347` → after: `L1814-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1814-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1814-L1967) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L347)

```diff
-       return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
+       let iM, OM = FM(MM),
+         SM = Object.assign(function(MM, rM) {
+           let iM = {};
+           return rM.length && rM.reduce((function(rM, OM) {
+             let SM = 0,
+               jM = 0,
+               aM = rM.length,
+               PM = OM[OM.length - 1];
+             return OM.forEach(((rM, nM) => {
+               let QM = function(MM, rM) {
+                   if (MM.node(rM).dummy) {
+                     let iM = MM.predecessors(rM);
+                     if (iM) return iM.find((rM => MM.node(rM).dummy))
+                   }
+                 }(MM, rM),
+                 zM = QM ? MM.node(QM).order : aM;
+ ... (138 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L353-L356` → after: `L1970-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1970-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1970-L1977) · [Before (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L353-L356)

```diff
-     function QG(GG) {
-       const bG = GG,
-         ZG = null === bG || void 0 === bG ? void 0 : bG.files;
-       return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof … [truncated]
+     function zi(MM, rM, iM) {
+       var OM;
+       if (!iM) return !1;
+       let SM = null == (OM = rM.node(MM)) ? void 0 : OM.edgeObj;
+       if (!SM || rM.node(MM).edgeLabel.reversed) return !1;
+       let jM = iM.indexOf(null == SM ? void 0 : SM.v),
+         aM = iM.indexOf(null == SM ? void 0 : SM.w);
+       return -1 !== jM && -1 !== aM && jM === (aM + 1) % iM.length || jM === (aM - 1) % iM.length
```

#### 37. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L361-L362` → after: `L1980-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L1980-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L1980-L2001) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L361-L362)

```diff
-     function dG(GG) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(GG)}`
+     function Li(MM, rM) {
+       (function(MM) {
+         let rM = FM(MM),
+           iM = MM.graph(),
+           OM = iM.ranksep,
+           SM = iM.rankalign,
+           jM = 0;
+         rM.forEach((rM => {
+           let iM = rM.reduce(((rM, iM) => {
+             var OM;
+             let SM = null != (OM = MM.node(iM).height) ? OM : 0;
+             return rM > SM ? rM : SM
+           }), 0);
+           rM.forEach((rM => {
+             let OM = MM.node(rM);
+             OM.y = "top" === SM ? jM + OM.height / 2 : "bottom" === SM ? jM + iM - OM.height / 2 : jM + iM / 2
+ ... (6 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L364-L365` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L2003) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L364-L365)

```diff
-     const JG = "Screenshot generation failed.",
-       rG = "Its screenshots couldn't be generated:";
+     var mi = new WeakMap;
```

#### 39. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L369` → after: `L2020-L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L2020-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L2020-L2549) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L369)

```diff
-       return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
+       let SM = MM.nodes().filter((rM => MM.children(rM).length)),
+         jM = {};
+       SM.forEach((OM => {
+         let SM = MM.node(OM);
+         if (SM && SM.rankdir) {
+           let aM = new NM({
+             multigraph: !0,
+             compound: !0
+           });
+           aM.setGraph({
+             rankdir: SM.rankdir
+           });
+           let PM = MM.children(OM);
+           PM.forEach((rM => {
+             let iM = {
+               ...MM.node(rM)
+ ... (514 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L373` → after: `L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L2553) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L373)

```diff
-       return `shaderPacks/${GG}/${bG}.json`
+       return ir(rr(MM, rM), Number)
```

#### 41. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L376-L377` → after: `L2556-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L2556-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L2556-L2561) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L376-L377)

```diff
-     function oG(GG, bG, ZG, wG) {
-       return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
+     function Ri(MM) {
+       let rM = {};
+       return MM && Object.entries(MM).forEach((MM => {
+         let [iM, OM] = MM;
+         "string" == typeof iM && (iM = iM.toLowerCase()), rM[iM] = OM
+       })), rM
```

#### 42. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L380-L381` → after: `L2564-L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L2564-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/133.js#L2564-L2581) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/133.js#L380-L381)

```diff
-     function XG(GG, bG, ZG, wG) {
-       return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
+     function Wi(MM) {
+       let rM = FM(MM),
+         iM = new NM({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return MM.nodes().forEach((rM => {
+         iM.setNode(rM, {
+           label: rM
+         }), iM.setParent(rM, "layer" + MM.node(rM).rank)
+       })), MM.edges().forEach((MM => iM.setEdge(MM.v, MM.w, {}, MM.name))), rM.forEach(((MM, rM) => {
+         let OM = "layer" + rM;
+         iM.setNode(OM, {
+           rank: "same"
+         }), MM.reduce(((MM, rM) => (iM.setEdge(MM, rM, {
+           style: "invis"
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/134.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/134.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789)

#### 1. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/134.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/134.js#L2)

```diff
- export const ids = [134, 196];
+ export const ids = [134];
```

#### 2. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/134.js#L4)

```diff
-   34481: (GG, bG, ZG) => {
+   6950: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L1296-L1329` → after: `L9-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L9-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/134.js#L9-L47) · [Before (L1296-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/134.js#L1296-L1329)

```diff
-       blockMined: {
-         pattern: [18],
-         priority: 1,
-         minGapMs: 120
-       },
-       hitLanded: {
-         pattern: [20],
-         priority: 2,
-         minGapMs: 80
-       },
-       damageTaken: {
-         pattern: [45],
-         priority: 3,
-         minGapMs: 250
-       },
-       fishBite: {
- ... (18 more removed lines; see GitHub link above)
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+       musicVolumeLevel: .6,
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L1331-L1356` → after: `L49-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L49-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/134.js#L49-L143) · [Before (L1331-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/134.js#L1331-L1356)

```diff
-       autorunLedgeStop: {
-         pattern: [40],
-         priority: 3,
-         minGapMs: 0
-       }
-     };
- 
-     function kG() {
-       return (0, LG.isMobile)() && "function" === typeof navigator.vibrate
-     }
-     const UG = new class {
-       constructor(GG) {
-         this.deps = GG, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
-       }
-       play(GG, bG) {
-         var ZG;
- ... (10 more removed lines; see GitHub link above)
+       canCustomiseChar: !0,
+       defaultBlock: "Block of Gold",
+       cantChangeError: "You cannot modify this block",
+       cantBreakError: null,
+       cantBuildError: null,
+       touchscreenActionButton: null,
+       strictFluidBuckets: !0,
+       preserveProtectedFluidSources: !1,
+       fillBrokenBlocksWithWater: !1,
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       middleTextTop: "",
+       middleTextUpper: "",
+       middleTextLower: "",
+ ... (79 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L1358-L1400` → after: `L145-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L145-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/134.js#L145-L167) · [Before (L1358-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/134.js#L1358-L1400)

```diff
-       now: () => performance.now(),
-       enabled: () => kG() && wG.e.get("isTouchScreen") && wG.e.get("clientEscMenuOptions").vibration && !(0, SG.f)()
-     })
-   },
-   34400: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => YG,
-       e: () => pG,
-       g: () => VG
-     });
-     var wG = ZG(17),
-       SG = ZG(1634),
-       LG = ZG(29),
-       yG = ZG(3658);
-     const kG = 2592e5,
-       UG = "notificationOptInLastPromptedAt";
- ... (27 more removed lines; see GitHub link above)
+       lightingOverride: null,
+       skyLightColourOverride: null,
+       ambientLightColourOverride: null,
+       visionMinLightColour: null,
+       heldLightColourOverride: null,
+       heldLightRangeOverride: null,
+       heldLightConeAngleOverride: null,
+       dayNightSunOpacity: null,
+       dayNightMoonOpacity: null,
+       dayNightStarOpacity: null,
+       hideCoordinates: !1,
+       canRecordReplays: !0,
+       groundArrowPath: null,
+       _aura: 0,
+       _shield: 0,
+       _health: null,
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/135.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/135.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13)

#### 1. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135, 138, 139];
+ export const ids = [135, 705];
```

#### 2. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L4-L6)

```diff
-   6598: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
+   37278: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => kr
```

#### 3. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L8-L16` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L8-L40) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L8-L16)

```diff
-     var wG = ZG(5046),
-       SG = ZG(1067);
-     const LG = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
+     var OM = iM(313),
+       SM = iM(3902),
+       jM = iM(3945),
+       aM = iM(3938),
+       PM = iM(3934),
+       nM = iM(1188),
+       QM = iM(30),
+       zM = iM(1830),
+       LM = iM(1440),
+       mM = iM(1520),
+       HM = iM(1116),
+       hM = iM.n(HM),
+       JM = iM(1763),
+       dM = iM(44),
+       yM = iM(65),
+       lM = iM(2482),
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L20-L22` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L45) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L20-L22)

```diff
-         diagnostics: bG,
-         more: ZG = 0,
-         t: yG
+         eventName: iM
```

#### 5. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L24-L40` → after: `L47-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L47-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L47-L73) · [Before (L24-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L24-L40)

```diff
-       return (0, SG.jsxs)("ul", {
-         className: "ShaderPackDiagnostics",
-         children: [bG.map(((GG, bG) => {
-           const ZG = (0, wG.d)(GG),
-             kG = function(GG, bG) {
-               const ZG = (0, wG.b)(null !== GG && void 0 !== GG ? GG : []);
-               if (0 === ZG.length) return null;
-               return ZG.map((GG => GG.map((GG => bG(LG[GG]))).join(", "))).join("; ")
-             }(GG.variants, yG);
-           return (0, SG.jsxs)("li", {
-             children: [ZG && (0, SG.jsx)("span", {
-               className: "ShaderPackDiagnosticLocation",
-               children: ZG
-             }), GG.message, kG && (0, SG.jsx)("span", {
-               className: "ShaderPackDiagnosticVariants",
-               children: yG("shaderPack:onlyIn", {
- ... (1 more removed lines; see GitHub link above)
+       const {
+         t: OM
+       } = (0, nM.A)(), SM = gM.e[iM], [jM, aM] = (0, dM.useState)((() => Date.now() >= SM.endsAt.getTime())), [PM, QM] = (0, dM.useState)("overall"), zM = function(MM, rM) {
+         const {
+           userContext: iM,
+           isUserContextUpdating: OM
+         } = (0, GM.b)(), SM = `${MM}:${rM}`, [jM, aM] = (0, dM.useState)({
+           requestKey: SM,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, dM.useEffect)((() => {
+           if (OM) return;
+           let jM, PM = !1;
+           const nM = async () => {
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L43-L48` → after: `L173-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L173-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L173-L244) · [Before (L43-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L43-L48)

```diff
-           }, bG)
-         })), ZG > 0 && (0, SG.jsx)("li", {
-           children: yG("shaderPack:moreErrors", {
-             count: String(ZG)
-           })
-         })]
+           }), (0, DM.jsxs)("div", {
+             className: "GameEventPanelLeaderboard",
+             children: [(0, DM.jsxs)("div", {
+               className: "GameEventPanelLeaderboardHeader",
+               children: [(0, DM.jsx)("h3", {
+                 className: "GameEventPanelLeaderboardTitle",
+                 children: OM(SM.leaderboard.titleKey)
+               }), (0, DM.jsx)(sM.e, {
+                 ariaLabel: OM("gameEvents:leaderboardScope"),
+                 options: gM.b.map((MM => ({
+                   value: MM,
+                   label: OM(`gameEvents:${MM}Scope`)
+                 }))),
+                 value: PM,
+                 onChange: QM
+               })]
+ ... (56 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L51-L88` → after: `L247-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L247-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L247-L292) · [Before (L51-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L51-L88)

```diff
-   },
-   6602: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => XG,
-       g: () => uG
-     });
-     var wG = ZG(51),
-       SG = ZG(1006),
-       LG = ZG.n(SG),
-       yG = ZG(4977),
-       kG = ZG(1302),
-       UG = ZG(1016),
-       YG = ZG(1151),
-       VG = ZG(5062),
-       pG = ZG(5055),
-       fG = ZG(3141);
- ... (22 more removed lines; see GitHub link above)
+ 
+     function fM(MM) {
+       let {
+         event: rM,
+         progress: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, nM.A)(), SM = null !== iM && rM.prizeGoals.some(((MM, rM) => iM[rM] >= MM.target));
+       return (0, DM.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, DM.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: OM(SM ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, DM.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+ ... (30 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L90-L144` → after: `L294-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L294-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L294-L314) · [Before (L90-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L90-L144)

```diff
-     async function JG(GG) {
-       const bG = function(GG) {
-           const bG = GG.length > 0 ? GG[0].path.indexOf("/") : -1;
-           if (-1 === bG) return GG;
-           const ZG = GG[0].path.slice(0, bG + 1);
-           if (!GG.every((GG => GG.path.startsWith(ZG)))) return GG;
-           return GG.map((GG => ({
-             ...GG,
-             path: GG.path.slice(ZG.length)
-           })))
-         }(GG.filter((GG => !(0, fG.f)(GG.path)))),
-         ZG = bG.filter((GG => "pack.json" === GG.path.toLowerCase()));
-       if (0 === ZG.length) throw new fG.e("shaderPack:loadNoManifest");
-       if (ZG.length > 1) throw new fG.e("shaderPack:loadDuplicateManifest");
-       const wG = ZG[0],
-         SG = await wG.read(hG);
- ... (39 more removed lines; see GitHub link above)
+     var YM = iM(1630),
+       NM = iM(1675),
+       AM = iM(1099),
+       xM = iM(783),
+       vM = iM(3875);
+ 
+     function FM(MM) {
+       let {
+         gameNameWithVariation: rM
+       } = MM;
+       const iM = (0, YM.F)(rM),
+         [OM, SM] = (0, dM.useState)(null);
+       if ((0, dM.useEffect)((() => {
+           if (!iM) return;
+           let MM = !0;
+           return (0, NM.h)(iM).then((rM => {
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L146-L165` → after: `L316-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L316-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L316-L392) · [Before (L146-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L146-L165)

```diff
-         }(rG(SG, wG.path)),
-         yG = bG.filter((GG => GG.path.toLowerCase().endsWith(".wgsl"))).sort(((GG, bG) => (0, VG.k)(GG.path, bG.path)));
-       if (0 === yG.length) throw new fG.e("shaderPack:loadNoWgsl");
-       if (yG.length > VG.d) throw new fG.e("shaderPack:loadTooManyWgsl", {
-         count: String(VG.d)
-       });
-       const kG = yG.find(((GG, bG) => bG > 0 && GG.path === yG[bG - 1].path));
-       if (kG) throw new fG.e("shaderPack:loadDuplicatePath", {
-         path: kG.path
-       });
-       const UG = [];
-       let YG = VG.h;
-       for (const pG of yG) {
-         const GG = await pG.read(YG);
-         if (null === GG) throw new fG.e("shaderPack:loadSourceTooBig", {
-           kilobytes: String(VG.h / 1024)
- ... (4 more removed lines; see GitHub link above)
+         }), [iM]), !iM || !OM || OM.name !== iM.name) return null;
+       const jM = (0, NM.e)(OM),
+         aM = new Set((0, AM.c)((0, xM.i)()).map((MM => (0, YM.w)(MM)))),
+         PM = OM.similarGames.filter((MM => aM.has((0, YM.w)(MM))));
+       return (0, DM.jsx)("div", {
+         className: "GamePageContent",
+         children: (0, DM.jsxs)("div", {
+           className: "GamePageContentColumns",
+           children: [(0, DM.jsxs)("section", {
+             className: "GamePageContentSection",
+             children: [(0, DM.jsx)("h2", {
+               children: jM.whatIs
+             }), OM.whatIs.map((MM => (0, DM.jsx)("p", {
+               children: MM
+             }, MM)))]
+           }), (0, DM.jsxs)("section", {
+ ... (61 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L167-L171` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L394) · [Before (L167-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L167-L171)

```diff
-       }
-       return {
-         manifest: LG,
-         files: UG
-       }
+       })
```

#### 11. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L174-L183` → after: `L420-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L420-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L420-L432) · [Before (L174-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L174-L183)

```diff
-     function rG(GG, bG) {
-       try {
-         return new TextDecoder("utf-8", {
-           fatal: !0
-         }).decode(GG)
-       } catch (ZG) {
-         throw new fG.e("shaderPack:loadNotUtf8", {
-           path: bG
-         }, {
-           cause: ZG
+     function Jr(MM) {
+       let {
+         preview: rM,
+         isBroken: iM
+       } = MM;
+       const OM = null === rM ? null : (0, jM.g)(rM, "small"),
+         aM = (0, SM.c)(null !== OM && void 0 !== OM ? OM : jM.t);
+       return null === rM ? (0, DM.jsx)("div", {
+         className: hM()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: iM
+         }),
+         children: (0, DM.jsx)(BM.b, {
+           name: iM ? "triangle-exclamation" : "star"
```

#### 12. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L185` → after: `L434-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L434-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L434-L442) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L185)

```diff
-       }
+       }) : (0, DM.jsx)("div", {
+         className: hM()("FeaturedGamesPopupSlotThumbnail", PM.k),
+         style: (0, PM.h)(aM),
+         role: "img",
+         "aria-label": rM.name,
+         children: (0, DM.jsx)(PM.e, {
+           image: aM
+         })
+       })
```

#### 13. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L193-L195` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L447-L448) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L193-L195)

```diff
-         busy: bG,
-         disabled: ZG,
-         onFiles: wG
+         schematicId: rM,
+         gameName: iM
```

#### 14. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L198-L210` → after: `L451-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L451-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L451-L470) · [Before (L198-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L198-L210)

```diff
-         t: SG
-       } = (0, YG.w)(), {
-         getRootProps: VG,
-         getInputProps: pG,
-         isDragActive: fG,
-         open: QG
-       } = (0, yG.c)({
-         onDrop: wG,
-         noClick: !0,
-         noKeyboard: !0,
-         useFsAccessApi: !1,
-         disabled: ZG
-       });
+         userContext: SM
+       } = (0, GM.b)(), jM = (0, hr.b)(), [aM, PM] = (0, dM.useState)(null), [nM, QM] = (0, dM.useState)(null), [zM, LM] = (0, dM.useState)(!1), HM = (0, dM.useCallback)((() => {
+         QM(null), uM.c.getFeaturedGames(SM).then((MM => {
+           jM.current && PM(MM.slots)
+         })).catch((MM => {
+           console.error("Failed to get featured games", MM), jM.current && QM("Failed to load featured games")
+         }))
+       }), [SM, jM]);
+       (0, dM.useEffect)((() => {
+         HM()
+       }), [HM]);
+       const hM = (MM, rM) => {
+         zM || (LM(!0), uM.c.setFeaturedGame(SM, MM, rM).then((() => {
+           jM.current && HM()
+         })).catch((MM => {
+           console.error("Failed to set featured game", MM), jM.current && QM("Failed to update the featured slot")
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L212-L222` → after: `L472-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L472-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L472-L482) · [Before (L212-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L212-L222)

```diff
-         ...VG({
-           className: LG()("ShaderPackDropZone", {
-             ActiveDrag: fG,
-             Disabled: ZG
-           })
-         }),
-         children: [(0, oG.jsx)("input", {
-           ...pG({
-             webkitdirectory: "true"
-           })
-         }), bG && (0, oG.jsx)(kG.b, {}), !bG && (0, oG.jsxs)(oG.Fragment, {
+         className: "FeaturedGamesPopupBody",
+         children: [(0, DM.jsx)("h1", {
+           className: "FeaturedGamesPopupTitle",
+           children: "Featured Games"
+         }), !aM && !nM && (0, DM.jsx)("div", {
+           className: "FeaturedGamesPopupLoader",
+           children: (0, DM.jsx)(pM.d, {})
+         }), nM && (0, DM.jsx)("div", {
+           className: "FeaturedGamesPopupError",
+           children: nM
+         }), aM && (0, DM.jsxs)(DM.Fragment, {
```

#### 16. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L224-L234` → after: `L484-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L484-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L484-L548) · [Before (L224-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L224-L234)

```diff
-             className: "ShaderPackDropZoneIcon",
-             children: (0, oG.jsx)(UG.c, {
-               name: "up-from-bracket"
-             })
-           }), (0, oG.jsx)("div", {
-             className: "ShaderPackDropZoneInstructions",
-             children: SG((0, EG.e)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
-           }), (0, oG.jsx)(EG.d, {
-             disabled: ZG,
-             openFolderPicker: QG,
-             onFiles: wG
+             className: "FeaturedGamesPopupSlots",
+             children: aM.map((MM => {
+               const iM = MM.schematicId === rM,
+                 SM = null === MM.schematicId,
+                 {
+                   categoryGroup: jM
+                 } = OM.I[MM.slotId];
+               return (0, DM.jsxs)("div", {
+                 className: "FeaturedGamesPopupSlot",
+                 children: [(0, DM.jsx)(Jr, {
+                   preview: MM.preview,
+                   isBroken: !SM
+                 }), (0, DM.jsxs)("div", {
+                   className: "FeaturedGamesPopupSlotText",
+                   children: [(0, DM.jsxs)("div", {
+                     className: "FeaturedGamesPopupSlotLabel",
+ ... (49 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L241-L258` → after: `L560-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L560-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L560-L573) · [Before (L241-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L241-L258)

```diff
-       const {
-         t: bG
-       } = (0, YG.w)(), [ZG, SG] = (0, wG.useState)(!1), [LG, yG] = (0, wG.useState)(null), kG = (0, wG.useRef)(!1);
-       return {
-         loading: ZG,
-         error: LG,
-         setError: yG,
-         onFiles: async function(ZG) {
-           if (!kG.current) {
-             kG.current = !0, SG(!0), yG(null);
-             try {
-               await GG(await dG(ZG))
-             } catch (wG) {
-               wG instanceof fG.e ? yG((0, zG.h)(bG, wG.translationKey, wG.params)) : (console.error("Failed to load the shader pack", wG), yG(bG("shaderPack:unexpectedError")))
-             } finally {
-               kG.current = !1, SG(!1)
- ... (2 more removed lines; see GitHub link above)
+       let {
+         customLobbies: rM,
+         favouriteLobbies: iM,
+         toggleLikeLobby: OM,
+         showReport: SM
+       } = MM;
+       const [jM, aM] = (0, dM.useState)(Ur);
+       return (0, dM.useEffect)((() => {
+         if (jM >= rM.length) return;
+         let MM = !0;
+         return (0, Er.e)().then((() => {
+           MM && aM(jM + Gr)
+         })), () => {
+           MM = !1
```

#### 18. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L260` → after: `L575-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L575-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L575-L582) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L260)

```diff
-       }
+       }), [jM, rM.length]), (0, DM.jsx)(DM.Fragment, {
+         children: rM.slice(0, jM).map((MM => (0, DM.jsx)(lr.e, {
+           customLobby: MM,
+           favouriteLobbies: iM,
+           toggleLikeLobby: OM,
+           showReport: SM
+         }, MM.name)))
+       })
```

#### 19. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L262-L287` → after: `L584-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L584-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L584-L610) · [Before (L262-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L262-L287)

```diff
-   },
-   6653: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       forgetShaderPackActiveHint: () => IG,
-       isOtherApiVersion: () => iG,
-       isShaderPackActive: () => EG,
-       isShaderPackChangePending: () => uG,
-       markShaderPackChangePending: () => XG,
-       pageShaderPackValidationVersion: () => CG,
-       reconcileStoredShaderPackHint: () => mG,
-       removeShaderPack: () => zG,
-       replaceShaderPack: () => dG,
-       saveShaderPack: () => hG,
-       shaderPackNeedsCheck: () => WG,
-       storedPackOutcome: () => oG,
-       storedShaderPackFiles: () => fG,
- ... (10 more removed lines; see GitHub link above)
+     var er = iM(4971),
+       br = iM(4987),
+       wr = iM(4948),
+       tr = iM(3963),
+       gr = iM(9517),
+       ur = iM(192);
+     const Rr = {
+       skyblock: [iM(37305).b]
+     };
+     var pr = iM(625);
+     const Wr = {
+       listedVariations: null,
+       backgroundImage: jM.t,
+       badges: [],
+       category: null,
+       title: null,
+ ... (11 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L289` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L612-L613) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L289)

```diff
-     function pG(GG, bG, ZG) {
+     function sr(MM, rM) {
+       const iM = Lr.g[MM.schematicId];
```

#### 21. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L291-L296` → after: `L615-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L615-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L615-L629) · [Before (L291-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L291-L296)

```diff
-         manifest: GG.manifest,
-         files: (0, wG.y)(GG.files),
-         validation: bG,
-         ...ZG && {
-           listing: ZG
-         }
+         listedVariations: [],
+         backgroundImage: (0, jM.g)(MM, "large"),
+         badges: [],
+         category: MM.gameCategory,
+         title: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.title) ? rM(iM.title) : MM.name,
+         variationTitle: null,
+         description: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.description) ? rM(iM.description) : MM.description,
+         ownerSocialPreviewWithoutLocation: "owner" in MM ? MM.owner : null,
+         ccu: MM.ccu,
+         favourites: MM.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in MM ? MM.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+         canCreateCustomLobbies: !0,
+         countdownInformation: null
```
